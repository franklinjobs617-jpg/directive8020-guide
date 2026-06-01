/**
 * AI 分析脚本 — 调用 Claude API，按 20 分制评分
 *
 * 输入: output/{date}/raw-data.json
 * 输出: output/{date}/report.md（日报 Markdown）
 *
 * 用法:
 *   node analyze.js                     # 分析今天的 raw-data.json
 *   node analyze.js 2026-06-02          # 分析指定日期
 *
 * 环境变量:
 *   CLAUDE_API_KEY — Anthropic API Key
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const API_KEY = process.env.CLAUDE_API_KEY || "";
const MODEL = "claude-sonnet-4-6";

async function main() {
  if (!API_KEY) {
    console.error("❌ CLAUDE_API_KEY 未设置");
    console.error("   export CLAUDE_API_KEY=sk-ant-...");
    process.exit(1);
  }

  // 确定要分析的日期
  const dateStr = process.argv[2] || new Date().toISOString().slice(0, 10);
  const inputPath = join(__dirname, "output", dateStr, "raw-data.json");
  const outputPath = join(__dirname, "output", dateStr, "report.md");

  if (!existsSync(inputPath)) {
    console.error(`❌ 找不到 ${inputPath}（请先运行 node index.js）`);
    process.exit(1);
  }

  console.log(`📖 读取数据: ${inputPath}`);
  const rawData = readFileSync(inputPath, "utf-8");
  const data = JSON.parse(rawData);

  console.log(`   候选游戏: ${data.summary.totalCandidates} 个`);
  console.log(`   含关键词: ${data.summary.withKeywords} 个`);

  if (data.candidates.length === 0) {
    console.log("⚠️ 没有候选游戏，跳过 AI 分析。");
    const emptyReport = `# 新词日报 ${dateStr}\n\n> 今日未发现候选游戏。\n`;
    writeFileSync(outputPath, emptyReport, "utf-8");
    console.log(`✅ 写入: ${outputPath}`);
    return;
  }

  console.log(`🤖 调用 Claude API（${MODEL}）...`);

  const prompt = buildPrompt(data, dateStr);
  const report = await callClaude(prompt);

  writeFileSync(outputPath, report, "utf-8");
  console.log(`✅ 日报已生成: ${outputPath}`);
}

function buildPrompt(data, dateStr) {
  // 精简数据——只保留 AI 需要的关键字段（避免 token 浪费）
  const slim = data.candidates.map((c) => ({
    game: c.gameName,
    discoveredFrom: c.discoveredFrom,
    steam: c.discovery?.steamdb
      ? {
          appId: c.discovery.steamdb.appId,
          currentPlayers: c.discovery.steamdb.currentPlayers || 0,
          peak24h: c.discovery.steamdb.peak24h || 0,
        }
      : null,
    igdb: c.discovery?.igdb
      ? {
          hypes: c.discovery.igdb.hypes,
          rating: c.discovery.igdb.rating,
          genres: c.discovery.igdb.genres,
          releaseDates: c.discovery.igdb.releaseDates,
        }
      : null,
    heat: c.heat,
    keywords: (c.keywords || []).slice(0, 15),
    redditPosts: (c.redditPosts || []).slice(0, 5).map((p) => ({ title: p.title, subreddit: p.subreddit, score: p.score, numComments: p.numComments })),
    steamPosts: (c.steamPosts || []).slice(0, 5).map((p) => ({ title: p.title })),
  }));

  const slimData = {
    date: dateStr,
    summary: data.summary,
    candidates: slim,
  };

  return `你是一个游戏 SEO 内容策略专家。请分析以下 ${dateStr} 的原始数据，按评分标准生成日报。

## 评分标准（20 分制）

| 维度 | 分数 | 判断标准 |
|------|------|---------|
| 游戏热度 | 0-5 | Steam 玩家数、IGDB hypes、趋势方向 |
| 查询证明 | 0-5 | Google/YouTube Suggest 补全词数量、Reddit/Steam 求助帖数量和质量 |
| SERP 缺口 | 0-5 | 如果提供了 SERP 数据，判断竞争强度；没有则标注"需人工验证" |
| 真实性 | 0-3 | 判断信息是否容易验证（有攻略传统、社区活跃=高；纯新作无攻略=低）|
| 商业价值 | 0-2 | 游戏类型是否适合广告/affiliate（MMO、氪金、装备类=高；小众独立=低）|

决策规则：
- 15-20 分 → build_now
- 10-14 分 → queue
- 0-9 分 → drop
- 真实性不通过 → 最高 queue

## 日报格式要求

输出 Markdown，严格按以下结构：

---
# 新词日报 ${dateStr}

> 📊 候选游戏: {总数} | 含关键词: {数量} | 数据来源: {列出生效的来源}

## 🔥 build_now（立即做）

每个游戏一段，格式：
### {游戏名}
- **预评分**: {分}/20（热度{}/5 + 查询{}/5 + SERP{}/5 + 真实性{}/3 + 商业{}/2）
- **信号**：{一句话总结为什么可做}
- **候选词**：
  - "关键词1"
  - "关键词2"
  - ...
- **注意**：{风险提示或注意事项}

## ⏳ queue（观察）

（同上格式，但简化）

## ❌ drop（跳过）

（只列游戏名 + 一句话原因）

## 📊 数据概要

| 游戏 | 热度分 | 查询分 | SERP分 | 真实分 | 商业分 | 总分 | 决策 |
|------|--------|--------|--------|--------|--------|------|------|
| ... | ... | ... | ... | ... | ... | ... | ... |

## 💡 今天建议

{给 1-3 条 actionable 建议——今天优先做什么页面、需要验证什么、注意什么风险}
---

## 原始数据

\`\`\`json
${JSON.stringify(slimData, null, 2)}
\`\`\`

请生成完整的日报。注意：
1. 评分要有推理依据，不是拍脑袋
2. SERP 缺口如果数据里没有，标注"⚠️ 需人工查 SERP"并给估计分
3. 关键词优先选择"how to"、"where to find"、"best" 类问题型词
4. 只推荐真正值得做的游戏，不要每个都给 build_now`;
}

async function callClaude(prompt) {
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": API_KEY,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 6000,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Claude API 错误 ${response.status}: ${err.slice(0, 300)}`);
  }

  const data = await response.json();
  const content = data?.content?.[0]?.text || "";
  return content;
}

main().catch((err) => {
  console.error("❌ AI 分析失败:", err.message);
  process.exit(1);
});
