/**
 * YouTube Suggest — 公开端点，无需 API Key
 *
 * 和 Google Suggest 类似，但专门针对 YouTube 搜索
 */
import { fetchText } from "../utils/fetch.js";

const PREFIXES = [
  "how to",
  "guide",
  "beginner guide",
  "best",
  "walkthrough",
  "all endings",
  "boss fight",
  "secrets",
  "settings",
  "review",
];

export async function collectYouTubeSuggest(gameNames, limit = 10) {
  const results = [];

  for (const name of gameNames) {
    const keywords = [];

    for (const prefix of PREFIXES) {
      const query = `${name} ${prefix}`;
      try {
        const suggestions = await fetchSuggestions(query);
        for (const s of suggestions) {
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
        source: "youtube_suggest",
        keywords: [...new Set(keywords)].slice(0, limit),
      });
    }
  }

  return results;
}

async function fetchSuggestions(query) {
  const url = `https://suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=${encodeURIComponent(query)}&hl=en`;
  const text = await fetchText(url);
  const json = JSON.parse(text);
  return Array.isArray(json[1]) ? json[1] : [];
}
