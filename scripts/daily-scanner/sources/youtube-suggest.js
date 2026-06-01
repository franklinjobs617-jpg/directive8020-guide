/**
 * YouTube Suggest — 公开端点，无需 API Key
 *
 * 端点: suggestqueries.google.com (client=youtube)
 * 格式: window.google.ac.h(["query", [["sug1",0,[3]], ...]])
 *       不同于 Google Suggest 的纯 JSON，需要特殊处理
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

  // YouTube Suggest 返回格式: window.google.ac.h([...])
  // 去掉外层包裹
  let jsonText = text.trim();
  if (jsonText.startsWith("window.google.ac.h(")) {
    jsonText = jsonText.slice("window.google.ac.h(".length, -1);
  } else if (jsonText.startsWith("window.google.ac.h && window.google.ac.h(")) {
    jsonText = jsonText.slice("window.google.ac.h && window.google.ac.h(".length, -1);
  }

  const json = JSON.parse(jsonText);

  // 格式: ["query", [["suggestion1", 0, [3]], ["suggestion2", 0, [3]], ...]]
  const items = json[1];
  if (!Array.isArray(items)) return [];

  return items
    .map((item) => {
      // 每个 item 可能是字符串（旧格式）或数组 [text, type, [...]]（新格式）
      return Array.isArray(item) ? item[0] : item;
    })
    .filter(Boolean);
}
