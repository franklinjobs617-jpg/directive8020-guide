/**
 * Reddit — 公开 JSON API
 *
 * 搜索 "{game} how to"/"stuck"/"where" → 提取帖子标题和链接
 * 端点: reddit.com/search.json
 *
 * 注意: Reddit 要求 User-Agent 格式必须是 <platform>:<app>:<version> (by /u/<username>)
 *       否则返回 403
 */
import { fetchJSON } from "../utils/fetch.js";

const SEARCH_QUERIES = [
  "how to",
  "stuck",
  "where to find",
  "help",
  "beginner guide",
  "best",
];

let firstErrorLogged = false;

export async function collectReddit(gameNames, limit = 5) {
  const results = [];
  firstErrorLogged = false;

  for (const name of gameNames) {
    const posts = [];

    for (const q of SEARCH_QUERIES) {
      try {
        const data = await fetchRedditPosts(name, q, 3);
        for (const post of data) {
          if (posts.find((p) => p.id === post.id)) continue;
          posts.push(post);
        }
      } catch (err) {
        if (!firstErrorLogged) {
          console.warn(`  ⚠️ Reddit 请求失败 (${name}): ${err.message}`);
          firstErrorLogged = true;
        }
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

async function fetchRedditPosts(gameName, queryType, limit) {
  // Reddit 搜索语法: 不加引号，让 Reddit 做模糊匹配
  const query = `${gameName} ${queryType}`;
  const url = `https://www.reddit.com/search.json?q=${encodeURIComponent(query)}&limit=${limit}&sort=new&restrict_sr=off&t=month`;

  const data = await fetchJSON(url, {
    headers: {
      // Reddit 要求的 User-Agent 格式
      "User-Agent": "web:com.enjoy4game.daily-scanner:v1.0.0 (by /u/enjoy4game)",
    },
  });

  return (data?.data?.children || []).map((c) => ({
    id: c.data?.id,
    title: c.data?.title,
    subreddit: c.data?.subreddit_name_prefixed || c.data?.subreddit,
    url: `https://reddit.com${c.data?.permalink}`,
    score: c.data?.score,
    numComments: c.data?.num_comments,
    createdUtc: c.data?.created_utc,
  }));
}
