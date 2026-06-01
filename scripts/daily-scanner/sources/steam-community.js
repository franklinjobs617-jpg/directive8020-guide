/**
 * Steam Community — 公开页面抓取，无需 API Key
 *
 * 对每个 Steam AppID 拉取最新讨论帖标题
 * URL 格式: steamcommunity.com/app/{appid}/discussions/
 */
import { fetchText } from "../utils/fetch.js";

export async function collectSteamCommunity(steamAppIds, limit = 5) {
  const results = [];

  for (const { appId, name } of steamAppIds) {
    try {
      const posts = await fetchDiscussionPosts(appId, limit);
      if (posts.length > 0) {
        results.push({
          game: name,
          appId,
          source: "steam_community",
          posts,
        });
      }
    } catch {
      // 单个游戏失败不影响整体
    }
  }

  return results;
}

async function fetchDiscussionPosts(appId, limit) {
  const url = `https://steamcommunity.com/app/${appId}/discussions/0/`;
  const html = await fetchText(url);

  // 用正则提取帖子标题和链接
  // Steam 讨论页结构: <a class="forum_topic" href="...">标题</a>
  const topicRegex = /<a\s+class="forum_topic"[^>]*href="([^"]*)"[^>]*>([^<]*)<\/a>/gi;
  const matches = [...html.matchAll(topicRegex)];

  return matches.slice(0, limit).map((m) => ({
    title: m[2].trim(),
    url: m[1].startsWith("http") ? m[1] : `https://steamcommunity.com${m[1]}`,
  }));
}
