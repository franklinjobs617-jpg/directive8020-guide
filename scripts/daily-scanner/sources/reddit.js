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
  "",
];

let firstErrorLogged = false;

export async function collectReddit(gameNames, limit = 5) {
  const results = [];
  firstErrorLogged = false;

  for (const name of gameNames) {
    const posts = [];

    for (const q of SEARCH_QUERIES) {
      try {
        const data = await fetchRedditPosts(name, q, limit);
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
      for (const post of posts.slice(0, limit)) {
        try {
          post.comments = post.fromFallback ? [] : await fetchTopComments(post.permalink, 3);
        } catch {
          post.comments = [];
        }
      }

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
  // Run one broad exact-name query first, then intent-specific queries.
  const query = queryType ? `${gameName} ${queryType}` : `"${gameName}"`;
  const sort = queryType ? "new" : "relevance";
  const url = `https://www.reddit.com/search.json?q=${encodeURIComponent(query)}&limit=${limit}&sort=${sort}&restrict_sr=off&t=month&raw_json=1`;

  let data;
  try {
    data = await fetchJSON(url, {
      headers: {
        // Reddit 要求的 User-Agent 格式
        "User-Agent": "web:com.enjoy4game.daily-scanner:v1.0.0 (by /u/enjoy4game)",
      },
      timeout: 10000,
      retries: 0,
    });
  } catch (err) {
    if (err.message.includes("HTTP 403")) {
      return fetchPullPushPosts(gameName, queryType, limit);
    }
    throw err;
  }

  return (data?.data?.children || [])
    .map((c) => ({
      id: c.data?.id,
      title: c.data?.title,
      subreddit: c.data?.subreddit_name_prefixed || c.data?.subreddit,
      permalink: c.data?.permalink,
      url: `https://reddit.com${c.data?.permalink}`,
      score: c.data?.score,
      numComments: c.data?.num_comments,
      createdUtc: c.data?.created_utc,
    }))
    .filter((post) => isRelevantPost(post, gameName));
}

async function fetchPullPushPosts(gameName, queryType, limit) {
  const query = queryType ? `${gameName} ${queryType}` : gameName;
  const url = `https://api.pullpush.io/reddit/search/submission/?q=${encodeURIComponent(query)}&size=${limit}&sort=desc&sort_type=created_utc`;
  const data = await fetchJSON(url, { timeout: 5000, retries: 0 });

  return (data?.data || [])
    .map((post) => ({
      id: post.id,
      title: post.title,
      selftext: post.selftext || "",
      subreddit: post.subreddit ? `r/${post.subreddit}` : null,
      permalink: post.permalink || null,
      url: post.full_link || (post.permalink ? `https://reddit.com${post.permalink}` : post.url),
      score: post.score || 0,
      numComments: post.num_comments || 0,
      createdUtc: post.created_utc,
      fromFallback: true,
    }))
    .filter((post) => isRelevantPost(post, gameName))
    .map(({ selftext, ...post }) => post);
}

async function fetchTopComments(permalink, limit) {
  if (!permalink) return [];
  const url = `https://www.reddit.com${permalink}.json?limit=${limit}&sort=top&raw_json=1`;
  const data = await fetchJSON(url, {
    headers: {
      "User-Agent": "web:com.enjoy4game.daily-scanner:v1.0.0 (by /u/enjoy4game)",
    },
    timeout: 10000,
    retries: 0,
  });

  const comments = data?.[1]?.data?.children || [];
  return comments
    .map((c) => ({
      id: c.data?.id,
      body: normalizeBody(c.data?.body),
      score: c.data?.score || 0,
    }))
    .filter((c) => c.body && c.body !== "[deleted]" && c.body !== "[removed]")
    .slice(0, limit);
}

function normalizeBody(body) {
  return String(body || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 300);
}

function isRelevantPost(post, gameName) {
  const text = normalizeText(post.title || "");
  const game = normalizeText(gameName);
  if (text.includes(game)) return true;
  const textTokens = new Set(text.split(" "));

  const primaryTokens = game
    .split(" ")
    .filter((token) => token.length > 2 && !/^\d+$/.test(token))
    .slice(0, 2);

  return primaryTokens.length >= 2 && primaryTokens.every((token) => textTokens.has(token));
}

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}
