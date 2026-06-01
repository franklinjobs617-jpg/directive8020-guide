/**
 * 每日新词数据采集 — 主入口
 *
 * 核心流程（中国直连可用）:
 *   ① Steam Featured API + 流行新品页面 → 发现游戏（免费公开）
 *   ② Google Suggest / YouTube Suggest → 提取关键词
 *   ③ Steam Community → 提取社区问题
 *   ④ 合并 → raw-data.json
 *
 * 增强流程（需要 API Key，可选）:
 *   + IGDB → 全平台新游戏发现
 *   + YouTube Data API → 24h 视频热度
 *   + Google Trends → 趋势对比
 *   + Reddit → 社区讨论
 *   + GSC → 本站曝光词
 *
 * 用法:
 *   node index.js              # 核心流程（快）
 *   node index.js --full       # 核心 + 增强（需要 API Key + 网络）
 *   node index.js --dry        # 试运行
 */

import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { config } from "./config.js";
import { mergeGameCandidates, mergeKeywords } from "./utils/merge.js";
import {
  loadKeywordHistory,
  saveKeywordHistory,
  updateKeywordHistory,
} from "./utils/history.js";
import { generateBurstReport, selectTrendKeywordItems } from "./utils/burst.js";

// ===== 核心来源（中国可用，无需 Key）=====
import { collectSteamDB } from "./sources/steamdb.js";
import { collectSteamCommunity } from "./sources/steam-community.js";
import { collectGoogleSuggest } from "./sources/google-suggest.js";
import { collectYouTubeSuggest } from "./sources/youtube-suggest.js";

// ===== 增强来源（需 API Key 或海外网络）=====
import { collectIGDB } from "./sources/igdb.js";
import { collectGoogleTrends, collectKeywordTrendWindows } from "./sources/google-trends.js";
import { collectYouTubeGaming } from "./sources/youtube.js";
import { collectReddit } from "./sources/reddit.js";
import { collectGSC } from "./sources/gsc.js";
import { collectGoogleSerp } from "./sources/google-serp.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DRY_RUN = process.argv.includes("--dry");
const FULL_MODE = process.argv.includes("--full");

async function main() {
  const startTime = Date.now();
  console.log("🔍 每日新词扫描开始...");
  console.log(`   时间: ${new Date().toISOString()}`);
  console.log(`   模式: ${DRY_RUN ? "DRY RUN" : FULL_MODE ? "增强模式（含 API 来源）" : "核心模式（公开来源）"}`);
  console.log("");

  if (DRY_RUN) {
    console.log("📋 核心来源: Steam Featured, Google Suggest, YouTube Suggest, Steam Community");
    if (FULL_MODE) console.log("📋 增强来源: IGDB, Google Trends, YouTube Data API, Reddit, GSC");
    console.log("");
    return;
  }

  // ==========================================
  // 阶段 ①: 发现游戏
  // ==========================================
  console.log("━".repeat(50));
  console.log("📦 阶段 ①: 发现今日游戏");
  console.log("━".repeat(50));

  // -- Steam（核心，公开）
  console.log("  [核心] 正在抓取 Steam 热销 + 新品 + 愿望单...");
  const steamdbGames = await collectSteamDB(config.steamdbTrendingLimit);
  console.log(`  ✅ Steam: ${steamdbGames.length} 个游戏`);

  // -- IGDB（增强，需 Key）
  let igdbGames = [];
  if (FULL_MODE) {
    console.log("  [增强] 正在查询 IGDB（全平台）...");
    igdbGames = await collectIGDB();
    console.log(`  ✅ IGDB: ${igdbGames.length} 个游戏`);
  }

  const trackedGames = normalizeTrackedGames(config.trackedGames || []);
  const allCandidates = mergeGameCandidates([
    {
      source: "tracked",
      games: trackedGames.map((game) => ({
        name: game.name,
        appId: game.appId,
        platform: "PC",
      })),
    },
    {
      source: "steamdb",
      games: steamdbGames.map((g) => ({
        name: g.name,
        appId: g.appId,
        currentPlayers: g.currentPlayers,
        peak24h: g.peak24h,
        platform: "PC",
      })),
    },
    {
      source: "igdb",
      games: igdbGames.map((g) => ({
        name: g.name,
        platforms: g.platforms || [],
        igdbId: g.igdbId,
        releaseDates: g.releaseDates,
        hypes: g.hypes,
        genres: g.genres,
      })),
    },
  ]);

  console.log(`  📊 合并去重: ${allCandidates.length} 个候选游戏`);
  console.log("");

  if (allCandidates.length === 0) {
    console.log("⚠️ 没有发现候选游戏，退出。");
    console.log("   提示: 如果 Steam 超时，请检查网络或使用代理。");
    return;
  }

  const steamApps = steamdbGames
    .filter((g) => g.appId)
    .map((g) => ({ appId: g.appId, name: g.name }));
  const trackedSteamApps = trackedGames
    .filter((g) => g.appId)
    .map((g) => ({ appId: g.appId, name: g.name }));
  const allSteamApps = uniqueSteamApps([...steamApps, ...trackedSteamApps]);

  // ==========================================
  // 阶段 ②: 关键词扫描（核心，全部公开可用）
  // ==========================================
  console.log("━".repeat(50));
  console.log("🔤 阶段 ②: 关键词扫描");
  console.log("━".repeat(50));

  const priorityGames = trackedGames.map((g) => g.name);
  const rankedGames = allCandidates
    .sort((a, b) => {
      const aPeak = (a.rawData?.steamdb?.currentPlayers || 0);
      const bPeak = (b.rawData?.steamdb?.currentPlayers || 0);
      return bPeak - aPeak;
    })
    .map((c) => c.name);
  const topGames = uniqueNames([...priorityGames, ...rankedGames]).slice(0, config.deepScanLimit || 10);

  console.log(`  目标游戏: ${topGames.join(", ")}`);
  console.log("");

  console.log("  [核心] 正在查询 Google Suggest...");
  const googleSuggestData = await collectGoogleSuggest(topGames, config.suggestLimit);
  console.log(`  ✅ Google Suggest: ${googleSuggestData.length} 个游戏有关键词`);

  console.log("  [核心] 正在查询 YouTube Suggest...");
  const youtubeSuggestData = await collectYouTubeSuggest(topGames, config.suggestLimit);
  console.log(`  ✅ YouTube Suggest: ${youtubeSuggestData.length} 个游戏有关键词`);

  console.log("  [核心] 正在抓取 Steam 社区讨论...");
  const topSteamApps = allSteamApps.filter((a) => topGames.includes(a.name));
  const steamCommunityData = await collectSteamCommunity(topSteamApps, config.steamCommunityLimit);
  console.log(`  ✅ Steam Community: ${steamCommunityData.length} 个游戏有新帖`);

  // ==========================================
  // 阶段 ③: 增强来源（仅在 --full 模式下运行）
  // ==========================================
  let trendsData = [];
  let youtubeData = [];
  let redditData = [];
  let gscData = [];

  if (FULL_MODE) {
    console.log("");
    console.log("━".repeat(50));
    console.log("📈 阶段 ③: 增强来源（API Key 需已配置）");
    console.log("━".repeat(50));

    console.log("  [增强] 正在查询 Google Trends...");
    trendsData = await collectGoogleTrends(topGames.slice(0, 5), config.trendsBaseline);
    console.log(`  ✅ Google Trends: ${trendsData.length} 个游戏有数据`);

    console.log("  [增强] 正在查询 YouTube 24h 视频...");
    youtubeData = await collectYouTubeGaming(topGames.slice(0, 5), config.youtubeLimit);
    console.log(`  ✅ YouTube Gaming: ${youtubeData.length} 个游戏有新视频`);

    console.log("  [增强] 正在查询 Reddit...");
    redditData = await collectReddit(topGames.slice(0, 5), config.redditLimit);
    console.log(`  ✅ Reddit: ${redditData.length} 个游戏有讨论`);

    console.log("  [增强] 正在查询 GSC...");
    gscData = await collectGSC();
  }

  // ==========================================
  // 阶段 ④: 整合输出
  // ==========================================
  console.log("");
  console.log("━".repeat(50));
  console.log("📝 生成 raw-data.json");
  console.log("━".repeat(50));

  const output = buildOutput({
    allCandidates,
    steamdbGames,
    igdbGames,
    trendsData,
    youtubeData,
    googleSuggestData,
    youtubeSuggestData,
    redditData,
    steamCommunityData,
    gscData,
  });

  const now = new Date();
  const dateStr = now.toISOString().slice(0, 10);
  const outputRoot = join(__dirname, config.outputDir);
  const outputDir = join(__dirname, config.outputDir, dateStr);
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  const outputPath = join(outputDir, config.outputFile);
  writeFileSync(outputPath, JSON.stringify(output, null, 2), "utf-8");

  console.log("");
  console.log("━".repeat(50));
  console.log("📊 生成 burst-report.json");
  console.log("━".repeat(50));

  const history = loadKeywordHistory(outputRoot);
  const keywordItems = selectTrendKeywordItems(output.candidates, config.maxTrendKeywordChecks);
  let keywordTrendData = [];
  let serpData = { available: false, reason: FULL_MODE ? "not_requested" : "full_mode_required", results: [] };

  if (FULL_MODE && keywordItems.length > 0) {
    console.log(`  [规则] 正在查询关键词 Trends: ${keywordItems.length} 个`);
    keywordTrendData = await collectKeywordTrendWindows(
      keywordItems,
      config.trendWindows,
      config.maxTrendKeywordChecks
    );
    console.log(`  ✅ Keyword Trends: ${keywordTrendData.filter((t) => t.available).length} 个词有数据`);

    console.log(`  [规则] 正在查询 Google SERP 前 ${config.serpResultLimit} 名...`);
    serpData = await collectGoogleSerp(keywordItems, config.serpResultLimit);
    console.log(
      `  ✅ Google SERP: ${
        serpData.available ? serpData.results.filter((r) => r.available).length : 0
      } 个词有数据${serpData.available ? "" : `（${serpData.reason}）`}`
    );
  }

  const burstReport = generateBurstReport({
    rawData: output,
    history,
    keywordTrends: keywordTrendData,
    serpData,
    dateStr,
    config,
  });
  const burstReportPath = join(outputDir, "burst-report.json");
  writeFileSync(burstReportPath, JSON.stringify(burstReport, null, 2), "utf-8");

  const nextHistory = updateKeywordHistory(history, output.candidates, dateStr);
  saveKeywordHistory(outputRoot, nextHistory);

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`✅ 输出: ${outputPath}`);
  console.log(`✅ 决策报告: ${burstReportPath}`);
  console.log(`✅ 历史词库: ${join(outputRoot, "keyword-history.json")}`);
  console.log(`   候选游戏: ${output.summary.totalCandidates} 个`);
  console.log(`   含关键词: ${output.summary.withKeywords} 个`);
  console.log(
    `   选题决策: build_now ${burstReport.summary.buildNow} / watch ${burstReport.summary.watch} / drop ${burstReport.summary.drop}`
  );
  console.log(`   耗时: ${elapsed}s`);
  console.log("");
  console.log("🎉 数据采集完成！");
  console.log("   下一步: 查看 burst-report.json 的 build_now / watch / drop。");
  if (!FULL_MODE) {
    console.log("   💡 提示: 用 --full 模式可启用增强来源（Google Trends / Reddit / YouTube / IGDB）");
  }
}

function buildOutput(data) {
  const candidates = data.allCandidates.map((candidate) => {
    const name = candidate.name;

    const trends = data.trendsData.find((t) => t.game === name);
    const youtube = data.youtubeData.find((y) => y.game === name);

    const gs = data.googleSuggestData.find((g) => g.game === name);
    const ys = data.youtubeSuggestData.find((y) => y.game === name);
    const reddit = data.redditData.find((r) => r.game === name);
    const steam = data.steamCommunityData.find((s) => s.game === name);

    const allKeywordSources = [];
    if (gs) allKeywordSources.push(gs);
    if (ys) allKeywordSources.push(ys);
    if (youtube) allKeywordSources.push({ source: "youtube", keywords: youtube.keywords || [] });

    // 从 Reddit 帖子里提取问题作为关键词
    const extraKeywords = [];
    for (const p of reddit?.posts || []) {
      extraKeywords.push({ keyword: p.title, source: "reddit" });
      for (const c of p.comments || []) {
        const phrase = extractQuestionPhrase(c.body);
        if (phrase) extraKeywords.push({ keyword: phrase, source: "reddit_comment" });
      }
    }
    for (const p of steam?.posts || []) {
      extraKeywords.push({ keyword: p.title, source: "steam_community" });
    }

    return {
      gameName: name,
      discoveredFrom: candidate.discoveredFrom,

      discovery: {
        igdb: candidate.rawData?.igdb || null,
        steamdb: candidate.rawData?.steamdb || null,
      },

      heat: {
        steamCurrentPlayers: candidate.rawData?.steamdb?.currentPlayers || 0,
        trendsSignal: trends?.signal || null,
        trendsRatio: trends?.ratio || null,
        trendsDirection: trends?.direction7d || null,
        youtube24hVideos: youtube?.videoCount24h || 0,
        youtubeSampleTitles: youtube?.sampleTitles || [],
      },

      keywords: [...mergeKeywords(name, allKeywordSources), ...extraKeywords],
      redditPosts: reddit?.posts || [],
      steamPosts: steam?.posts || [],
      steamInfo: steam
        ? { tags: steam.tags, reviewSummary: steam.reviewSummary, description: steam.description }
        : null,
    };
  });

  const withKeywords = candidates.filter((c) => c.keywords.length > 0).length;

  return {
    generatedAt: new Date().toISOString(),
    mode: FULL_MODE ? "full" : "core",
    summary: {
      totalCandidates: candidates.length,
      withKeywords,
      top5ByPlayers: candidates
        .sort((a, b) => (b.heat?.steamCurrentPlayers || 0) - (a.heat?.steamCurrentPlayers || 0))
        .slice(0, 5)
        .map((c) => ({ name: c.gameName, players: c.heat?.steamCurrentPlayers || 0, keywords: c.keywords.length })),
    },
    candidates,
    meta: {
      sources: {
        tracked: (config.trackedGames || []).length > 0,
        steamdb: data.steamdbGames.length > 0,
        igdb: data.igdbGames.length > 0,
        googleTrends: data.trendsData.length > 0,
        youtubeGaming: data.youtubeData.length > 0,
        googleSuggest: data.googleSuggestData.length > 0,
        youtubeSuggest: data.youtubeSuggestData.length > 0,
        reddit: data.redditData.length > 0,
        steamCommunity: data.steamCommunityData.length > 0,
        gsc: data.gscData.length > 0,
      },
    },
  };
}

function uniqueNames(names) {
  const seen = new Set();
  const out = [];
  for (const name of names) {
    const key = name.toLowerCase().trim();
    if (!key || seen.has(key)) continue;
    seen.add(key);
    out.push(name);
  }
  return out;
}

function normalizeTrackedGames(games) {
  return games
    .map((game) => {
      if (typeof game === "string") return { name: game };
      return game;
    })
    .filter((game) => game?.name);
}

function uniqueSteamApps(apps) {
  const seen = new Set();
  const out = [];
  for (const app of apps) {
    if (!app?.appId || seen.has(app.appId)) continue;
    seen.add(app.appId);
    out.push(app);
  }
  return out;
}

function extractQuestionPhrase(text) {
  if (!text) return null;
  const clean = text
    .replace(/https?:\/\/\S+/g, "")
    .replace(/\s+/g, " ")
    .trim();
  if (!clean) return null;

  const lower = clean.toLowerCase();
  const hasSearchIntent =
    clean.includes("?") ||
    /\b(how|where|what|why|which|best|stuck|crash|fix|build|settings|unlock|find|beat)\b/.test(lower);

  return hasSearchIntent ? clean.slice(0, 140) : null;
}

main().catch((err) => {
  console.error("❌ 数据采集失败:", err.message);
  console.error(err.stack);
  process.exit(1);
});
