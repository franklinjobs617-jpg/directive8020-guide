import { getKeywordHistoryInfo, getKeywordKey } from "./history.js";

const BIG_SITE_DOMAINS = [
  "ign.com",
  "game8.co",
  "gamerant.com",
  "polygon.com",
  "pcgamesn.com",
  "dexerto.com",
  "thegamer.com",
  "gamespot.com",
  "screenrant.com",
  "rockpapershotgun.com",
  "eurogamer.net",
];

const FORUM_DOMAINS = [
  "reddit.com",
  "steamcommunity.com",
  "youtube.com",
  "youtu.be",
  "gamefaqs.gamespot.com",
  "steamcommunity.com",
];

const CONTAMINATION_RULES = [
  { game: "project mist", pattern: /\bproject slayers\b|\bmist breathing\b|\bmist trainer\b/i },
  { game: "thick as thieves", pattern: /\bwhere to watch\b|\brotten tomatoes\b|\btom hardy\b|\batreyu\b|\btour\b|\bwine\b/i },
  { game: "luna abyss", pattern: /\blunar abyss\b|\broblox\b|\bosu\b|\bduet night abyss\b/i },
];

const INTENT_PATTERN =
  /\b(how to|where to|best|walkthrough|wiki|guide|fix|crash|black screen|unlock|find|beat|boss|key|build|settings|release date|early access|download|review|worth it|steam deck|controller|requirements)\b/i;

const REASON_RULES = [
  { reason: "release_access", pattern: /\b(release|early access|preload|download|how to play|play now|launch|unlock time)\b/i },
  { reason: "bug_fix", pattern: /\b(crash|black screen|performance|fps|stutter|bug|known issues|fix)\b/i },
  { reason: "guide_blocker", pattern: /\b(how to|where to|unlock|key|boss|puzzle|craft|save|leave|dodge|parry|reload|outfits|mission)\b/i },
  { reason: "platform_check", pattern: /\b(steam deck|controller|ps5|xbox|game pass|switch|mac)\b/i },
  { reason: "controversy_review", pattern: /\b(review|worth it|denuvo|refund|price|rating|mixed)\b/i },
  { reason: "content_update", pattern: /\b(update|patch|roadmap|new mode|new character|dlc)\b/i },
  { reason: "viral_video", pattern: /\b(youtube|reaction|gameplay|trailer)\b/i },
  { reason: "community_question", pattern: /\?|\b(help|stuck|cannot|can't|issue)\b/i },
];

export function selectTrendKeywordItems(candidates, limit = 20) {
  return buildKeywordItems(candidates)
    .filter((item) => item.isGameRelevant && item.hasIntent && !item.isContaminated)
    .sort((a, b) => b.priorityScore - a.priorityScore)
    .slice(0, limit)
    .map(({ gameName, keyword }) => ({ gameName, keyword }));
}

export function generateBurstReport({ rawData, history, keywordTrends, serpData, dateStr, config }) {
  const trendMap = toResultMap(keywordTrends || []);
  const serpMap = toSerpMap(serpData?.results || []);
  const serpGloballyAvailable = Boolean(serpData?.available);

  const records = buildKeywordItems(rawData.candidates || []).map((item) => {
    const historyInfo = getKeywordHistoryInfo(
      history,
      item.gameName,
      item.keyword,
      dateStr,
      config.historyLookbackDays
    );
    const trend = scoreTrend(trendMap.get(getKeywordKey(item.gameName, item.keyword)), config);
    const serp = scoreSerp(
      serpMap.get(getKeywordKey(item.gameName, item.keyword)),
      serpGloballyAvailable
    );
    const reason = classifyBurstReason(item.keyword, item.evidence);
    const decision = decideKeyword({ item, historyInfo, trend, serp });
    const risk = buildRiskList({ item, trend, serp, decision });

    return {
      gameName: item.gameName,
      keyword: item.keyword,
      decision,
      isNewTo14d: historyInfo.isNewToLookback,
      isBurst: trend.isBurst,
      burstReason: reason,
      confidence: getConfidence({ item, historyInfo, trend, serp, decision }),
      trend,
      serp,
      evidence: item.evidence,
      risk,
      sources: item.sources,
    };
  });

  const buildNow = records.filter((r) => r.decision === "build_now");
  const watch = records.filter((r) => r.decision === "watch");
  const drop = records.filter((r) => r.decision === "drop");

  return {
    generatedAt: new Date().toISOString(),
    date: dateStr,
    summary: {
      totalKeywords: records.length,
      buildNow: buildNow.length,
      watch: watch.length,
      drop: drop.length,
      serpAvailable: serpGloballyAvailable,
    },
    build_now: buildNow,
    watch,
    drop,
    meta: {
      historyLookbackDays: config.historyLookbackDays,
      trendWindows: config.trendWindows,
      serpResultLimit: config.serpResultLimit,
      serpUnavailableReason: serpGloballyAvailable ? null : serpData?.reason || "not_checked",
    },
  };
}

function buildKeywordItems(candidates) {
  const map = new Map();

  for (const candidate of candidates) {
    for (const keyword of candidate.keywords || []) {
      const key = getKeywordKey(candidate.gameName, keyword.keyword);
      const existing = map.get(key) || {
        gameName: candidate.gameName,
        keyword: keyword.keyword,
        sources: [],
        evidence: [],
      };

      if (keyword.source && !existing.sources.includes(keyword.source)) {
        existing.sources.push(keyword.source);
      }
      existing.evidence.push({
        source: keyword.source || "unknown",
        text: keyword.keyword,
        proof: keyword.queryProof || null,
      });
      map.set(key, existing);
    }
  }

  return [...map.values()].map((item) => {
    const isContaminated = hasContamination(item.gameName, item.keyword);
    const isGameRelevant = isRelevantToGame(item.keyword, item.gameName);
    const hasIntent = INTENT_PATTERN.test(item.keyword);
    const priorityScore =
      item.sources.length * 2 +
      (hasIntent ? 3 : 0) +
      (isGameRelevant ? 2 : 0) -
      (isContaminated ? 10 : 0);

    return {
      ...item,
      isContaminated,
      isGameRelevant,
      hasIntent,
      priorityScore,
    };
  });
}

function scoreTrend(trendResult, config) {
  const windows = trendResult?.windows || {};
  const avg24h = windows["now 1-d"]?.avgValue ?? null;
  const avg7d = windows["now 7-d"]?.avgValue ?? null;
  const avg30d = windows["today 1-m"]?.avgValue ?? null;
  const ratio24hVs7d = ratio(avg24h, avg7d);
  const ratio24hVs30d = ratio(avg24h, avg30d);
  const isBurst =
    avg24h !== null &&
    avg24h >= config.minTrendAvg24h &&
    ((ratio24hVs7d !== null && ratio24hVs7d >= config.burstThresholdRatio) ||
      (ratio24hVs30d !== null && ratio24hVs30d >= config.burstThresholdRatio));

  return {
    available: Boolean(trendResult?.available),
    avg24h,
    avg7d,
    avg30d,
    ratio24hVs7d,
    ratio24hVs30d,
    isBurst,
  };
}

function scoreSerp(serpResult, serpGloballyAvailable) {
  if (!serpGloballyAvailable) {
    return {
      available: false,
      reason: "missing_google_cse_config",
      serpGapScore: null,
      bigSiteCount: 0,
      forumCount: 0,
      exactTitleCount: 0,
      topResults: [],
    };
  }

  if (!serpResult?.available) {
    return {
      available: false,
      reason: serpResult?.reason || "not_checked",
      serpGapScore: null,
      bigSiteCount: 0,
      forumCount: 0,
      exactTitleCount: 0,
      topResults: [],
    };
  }

  const results = serpResult.results || [];
  const bigSiteCount = results.filter((r) => matchesDomain(r, BIG_SITE_DOMAINS)).length;
  const forumCount = results.filter((r) => matchesDomain(r, FORUM_DOMAINS)).length;
  const exactTitleCount = results.filter((r) =>
    normalizeText(r.title).includes(normalizeText(serpResult.keyword))
  ).length;

  let serpGapScore = results.length === 0 ? 4 : 3;
  if (bigSiteCount <= 2) serpGapScore += 1;
  if (bigSiteCount >= 3) serpGapScore -= 1;
  if (bigSiteCount >= 5) serpGapScore -= 1;
  if (forumCount >= 4) serpGapScore += 1;
  if (exactTitleCount === 0) serpGapScore += 1;
  if (exactTitleCount >= 3) serpGapScore -= 1;

  return {
    available: true,
    reason: null,
    serpGapScore: clamp(serpGapScore, 0, 5),
    bigSiteCount,
    forumCount,
    exactTitleCount,
    topResults: results.slice(0, 5),
  };
}

function decideKeyword({ item, historyInfo, trend, serp }) {
  if (item.isContaminated || !item.isGameRelevant || !item.hasIntent) {
    return "drop";
  }

  if (serp.available && serp.serpGapScore <= 1) {
    return "drop";
  }

  if (!serp.available) {
    return "watch";
  }

  const hasBurstEvidence =
    trend.isBurst || item.sources.length >= 2 || item.sources.includes("steam_community") || item.sources.includes("reddit");

  if (
    historyInfo.isNewToLookback &&
    hasBurstEvidence &&
    serp.serpGapScore >= 3
  ) {
    return "build_now";
  }

  return "watch";
}

function getConfidence({ item, historyInfo, trend, serp, decision }) {
  if (decision === "drop") return "low";
  if (!serp.available) return "medium";
  if (historyInfo.isNewToLookback && (trend.isBurst || item.sources.length >= 2) && serp.serpGapScore >= 3) {
    return "high";
  }
  return "medium";
}

function buildRiskList({ item, trend, serp, decision }) {
  const risks = [];
  if (item.isContaminated) risks.push("keyword_contamination");
  if (!item.isGameRelevant) risks.push("game_name_not_precise");
  if (!item.hasIntent) risks.push("unclear_search_intent");
  if (!trend.available) risks.push("trends_unavailable");
  if (!serp.available) risks.push("serp_unavailable");
  if (serp.available && serp.serpGapScore < 3) risks.push("serp_competitive");
  if (decision === "watch") risks.push("needs_more_evidence");
  return risks;
}

function classifyBurstReason(keyword, evidence) {
  const text = `${keyword} ${evidence.map((e) => e.text).join(" ")}`;
  for (const rule of REASON_RULES) {
    if (rule.pattern.test(text)) return rule.reason;
  }
  return "community_question";
}

function hasContamination(gameName, keyword) {
  const normalizedGame = normalizeText(gameName);
  return CONTAMINATION_RULES.some(
    (rule) => rule.game === normalizedGame && rule.pattern.test(keyword)
  );
}

function isRelevantToGame(keyword, gameName) {
  const keywordText = normalizeText(keyword);
  const gameText = normalizeText(gameName);
  if (keywordText.includes(gameText)) return true;

  const keywordTokens = new Set(keywordText.split(" "));
  const primaryTokens = gameText
    .split(" ")
    .filter((token) => token.length > 2 && !/^\d+$/.test(token))
    .slice(0, 2);

  return primaryTokens.length >= 2 && primaryTokens.every((token) => keywordTokens.has(token));
}

function toResultMap(results) {
  const map = new Map();
  for (const result of results) {
    map.set(getKeywordKey(result.gameName, result.keyword), result);
  }
  return map;
}

function toSerpMap(results) {
  return toResultMap(results);
}

function matchesDomain(result, domains) {
  const host = getHost(result.link || result.displayLink || "");
  return domains.some((domain) => host === domain || host.endsWith(`.${domain}`));
}

function getHost(value) {
  try {
    return new URL(value.startsWith("http") ? value : `https://${value}`).hostname.replace(/^www\./, "");
  } catch {
    return String(value || "").replace(/^www\./, "");
  }
}

function ratio(numerator, denominator) {
  if (numerator === null || denominator === null) return null;
  return Math.round((numerator / Math.max(denominator, 1)) * 100) / 100;
}

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
