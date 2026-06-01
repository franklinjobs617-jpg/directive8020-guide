/**
 * Google Suggest — 公开端点，无需 API Key
 *
 * 输入游戏名 → 返回 Google 搜索框的自动补全词
 * 端点: suggestqueries.google.com
 */
import { fetchText } from "../utils/fetch.js";

// 高频词根 — 来自你的 md
const PREFIXES = [
  "how to",
  "where to find",
  "best",
  "how to beat",
  "how to unlock",
  "how to fix",
  "codes",
  "map",
  "wiki",
  "settings",
  "build",
  "boss",
  "puzzle",
  "quest",
  "weapons",
  "armor",
  "achievement",
  "endings",
  "tier list",
  "beginner guide",
];

export async function collectGoogleSuggest(gameNames, limit = 10) {
  const results = [];

  for (const name of gameNames) {
    const keywords = [];

    for (const prefix of PREFIXES) {
      const query = `${name} ${prefix}`;
      try {
        const suggestions = await fetchSuggestions(query);
        for (const s of suggestions) {
          // 过滤掉纯游戏名（没有额外信息量的补全）
          if (s.toLowerCase().trim() === name.toLowerCase().trim()) continue;
          keywords.push(s);
        }
      } catch {
        // 单个查询失败不影响整体
      }

      if (keywords.length >= limit) break;
    }

    if (keywords.length > 0) {
      results.push({
        game: name,
        source: "google_suggest",
        keywords: [...new Set(keywords)].slice(0, limit),
      });
    }
  }

  return results;
}

async function fetchSuggestions(query) {
  const url = `https://suggestqueries.google.com/complete/search?client=chrome&q=${encodeURIComponent(query)}&hl=en`;
  const text = await fetchText(url);
  // 返回格式: ["query", ["suggestion1", "suggestion2", ...]]
  const json = JSON.parse(text);
  return Array.isArray(json[1]) ? json[1] : [];
}
