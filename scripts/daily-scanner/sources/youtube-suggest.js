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
        source: "youtube_suggest",
        keywords: [...new Set(keywords)].slice(0, limit),
      });
    }
  }

  return results;
}

async function fetchSuggestions(query) {
  // client=firefox returns plain JSON and is less brittle than the youtube callback wrapper.
  const url = `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${encodeURIComponent(query)}&hl=en`;
  const text = await fetchText(url, { timeout: 6000, retries: 0 });
  return parseSuggestResponse(text);
}

function parseSuggestResponse(text) {
  let jsonText = text.trim();
  if (jsonText.startsWith("window.google.ac.h(")) {
    jsonText = jsonText.slice("window.google.ac.h(".length, -1);
  } else if (jsonText.startsWith("window.google.ac.h && window.google.ac.h(")) {
    jsonText = jsonText.slice("window.google.ac.h && window.google.ac.h(".length, -1);
  }

  const json = JSON.parse(jsonText);
  const items = json[1];
  if (!Array.isArray(items)) return [];

  return items
    .map((item) => {
      return Array.isArray(item) ? item[0] : item;
    })
    .filter(Boolean);
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
