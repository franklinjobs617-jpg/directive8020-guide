/**
 * YouTube Data API v3 — 需要 Google API Key
 *
 * 注册: https://console.cloud.google.com/ → 启用 YouTube Data API v3 → 拿 API Key
 * 免费额度: 每天 10,000 单位（搜索一次 ~100 单位，够用）
 *
 * 用途: 搜索过去 24h 某个游戏的新视频，提取标题作为关键词信号
 */
import { fetchJSON } from "../utils/fetch.js";
import { config } from "../config.js";

export async function collectYouTubeGaming(gameNames, limit = 5) {
  const { apiKey } = config.google;

  if (!apiKey) {
    console.warn("  ⚠️ YouTube 跳过：未配置 GOOGLE_API_KEY");
    console.warn("     → 注册 https://console.cloud.google.com/ → 启用 YouTube Data API v3");
    return [];
  }

  const results = [];

  for (const name of gameNames) {
    try {
      const videos = await searchVideos(name, limit);
      if (videos.length > 0) {
        // 从视频标题提取攻略型关键词
        const guideKeywords = extractKeywords(videos, name);

        results.push({
          game: name,
          source: "youtube",
          videoCount24h: videos.length,
          sampleTitles: videos.map((v) => v.title).slice(0, limit),
          keywords: guideKeywords,
        });
      }
    } catch (err) {
      console.warn(`  ⚠️ YouTube 搜索 ${name} 失败: ${err.message}`);
    }
  }

  return results;
}

async function searchVideos(gameName, limit) {
  const now = new Date();
  const yesterday = new Date(now.getTime() - 24 * 3600 * 1000);

  const params = new URLSearchParams({
    part: "snippet",
    q: `${gameName} guide OR how to OR walkthrough OR tips`,
    type: "video",
    maxResults: String(limit),
    order: "viewCount",
    publishedAfter: yesterday.toISOString(),
    relevanceLanguage: "en",
    key: config.google.apiKey,
  });

  const data = await fetchJSON(
    `https://www.googleapis.com/youtube/v3/search?${params.toString()}`
  );

  return (data?.items || []).map((item) => ({
    videoId: item.id?.videoId,
    title: item.snippet?.title,
    channelTitle: item.snippet?.channelTitle,
    publishedAt: item.snippet?.publishedAt,
  }));
}

function extractKeywords(videos, gameName) {
  const keywords = [];
  const patterns = [
    /how\s+to\s+(.+?)(?:\s+in\s+|[-–—|]|$)/i,
    /best\s+(.+?)(?:\s+in\s+|[-–—|]|$)/i,
    /where\s+to\s+(.+?)(?:\s+in\s+|[-–—|]|$)/i,
    /all\s+(.+?)(?:\s+in\s+|[-–—|]|$)/i,
  ];

  for (const v of videos) {
    for (const pattern of patterns) {
      const match = v.title.match(pattern);
      if (match) {
        const kw = `${match[0].trim()} ${gameName}`.trim();
        if (!keywords.includes(kw)) keywords.push(kw);
      }
    }
  }

  return keywords.slice(0, 10);
}
