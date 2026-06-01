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
    const suggestionSets = await Promise.all(
      PREFIXES.map(async (prefix) => {
        try {
          return await fetchSuggestions(`${name} ${prefix}`);
        } catch {
          return [];
        }
      })
    );

    const keywords = [];
    for (const suggestions of suggestionSets) {
      for (const s of suggestions) {
        if (s.toLowerCase().trim() === name.toLowerCase().trim()) continue;
        if (!isRelevantSuggestion(s, name)) continue;
        keywords.push(s);
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
  const text = await fetchText(url, { timeout: 6000, retries: 0 });
  // 返回格式: ["query", ["suggestion1", "suggestion2", ...]]
  const json = JSON.parse(text);
  return Array.isArray(json[1]) ? json[1] : [];
}

function isRelevantSuggestion(suggestion, gameName) {
  const text = normalizeText(suggestion);
  const game = normalizeText(gameName);
  if (text.includes(game)) return true;

  const primaryTokens = game
    .split(" ")
    .filter((token) => token.length > 2 && !/^\d+$/.test(token))
    .slice(0, 2);

  return primaryTokens.length >= 2 && primaryTokens.every((token) => text.includes(token));
}

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}
