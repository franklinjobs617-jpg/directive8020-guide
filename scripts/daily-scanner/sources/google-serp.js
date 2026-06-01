import { config } from "../config.js";
import { fetchJSON } from "../utils/fetch.js";

export function isGoogleSerpConfigured() {
  return Boolean(config.google.apiKey && config.google.cseId);
}

export async function collectGoogleSerp(keywordItems, limit = 20) {
  if (!isGoogleSerpConfigured()) {
    return {
      available: false,
      reason: "missing_google_cse_config",
      results: [],
    };
  }

  const results = [];
  for (const item of keywordItems) {
    try {
      results.push({
        gameName: item.gameName,
        keyword: item.keyword,
        available: true,
        results: await searchGoogle(item.keyword, limit),
      });
    } catch (err) {
      results.push({
        gameName: item.gameName,
        keyword: item.keyword,
        available: false,
        reason: err.message,
        results: [],
      });
    }
  }

  return {
    available: true,
    reason: null,
    results,
  };
}

async function searchGoogle(query, limit) {
  const results = [];
  const pageSize = 10;
  const pages = Math.ceil(Math.min(limit, 20) / pageSize);

  for (let page = 0; page < pages; page++) {
    const params = new URLSearchParams({
      key: config.google.apiKey,
      cx: config.google.cseId,
      q: query,
      num: String(pageSize),
      start: String(page * pageSize + 1),
    });

    const data = await fetchJSON(
      `https://www.googleapis.com/customsearch/v1?${params.toString()}`,
      { timeout: 12000, retries: 0 }
    );

    for (const item of data?.items || []) {
      results.push({
        position: results.length + 1,
        title: item.title || "",
        link: item.link || "",
        displayLink: item.displayLink || "",
        snippet: item.snippet || "",
      });
    }
  }

  return results.slice(0, limit);
}
