/**
 * Reddit — 公开 JSON API，无需 API Key
 *
 * 搜索 "game name how"/"stuck"/"where" → 提取帖子标题和链接
 * 端点: reddit.com/search.json
 */
import { fetchJSON } from "../utils/fetch.js";

const SEARCH_QUERIES = [
  "how to",
  "stuck",
  "where",
  "help",
  "beginner",
  "best",
];

export async function collectReddit(gameNames, limit = 5) {
  const results = [];

  for (const name of gameNames) {
    const posts = [];

    for (const q of SEARCH_QUERIES) {
      try {
        const query = `"${name}" ${q}`;
        const data = await fetchRedditPosts(query, limit);
        for (const post of data) {
          // 跳过已存在的帖子（去重）
          if (posts.find((p) => p.id === post.id)) continue;
          posts.push(post);
        }
      } catch {
        // 单个查询失败不影响整体
      }

      if (posts.length >= limit) break;
    }

    if (posts.length > 0) {
      results.push({
        game: name,
        source: "reddit",
        posts: posts.slice(0, limit),
      });
    }
  }

  return results;
}

async function fetchRedditPosts(query, limit) {
  const url = `https://www.reddit.com/search.json?q=${encodeURIComponent(query)}&limit=${limit}&sort=new&restrict_sr=off&t=week`;
  const data = await fetchJSON(url, {
    headers: { "User-Agent": "daily-scanner/1.0 (SEO research bot)" },
  });

  return (data?.data?.children || []).map((c) => ({
    id: c.data?.id,
    title: c.data?.title,
    subreddit: c.data?.subreddit,
    url: `https://reddit.com${c.data?.permalink}`,
    score: c.data?.score,
    numComments: c.data?.num_comments,
    createdUtc: c.data?.created_utc,
  }));
}
