/**
 * Steam Community — 公开页面抓取
 *
 * Steam 讨论页是 JS 动态加载的，不能直接静态抓取标题。
 * 改用: Steam 商店页面的评测区（有静态 HTML）+ Steam Hub 讨论概览
 *
 * 当前策略: 抓取 Steam 商店页面做游戏基本信息补充
 *           真正的讨论数据靠 Reddit 覆盖
 */
import { fetchText } from "../utils/fetch.js";

let firstErrorLogged = false;

export async function collectSteamCommunity(steamAppIds, limit = 5) {
  const results = [];
  firstErrorLogged = false;

  for (const { appId, name } of steamAppIds.slice(0, 10)) {
    try {
      const info = await fetchGameInfo(appId);
      if (info) {
        results.push({
          game: name,
          appId,
          source: "steam_community",
          ...info,
        });
      }
    } catch (err) {
      if (!firstErrorLogged) {
        console.warn(`  ⚠️ Steam 商店页面抓取失败 (${name}): ${err.message}`);
        firstErrorLogged = true;
      }
    }
  }

  return results;
}

async function fetchGameInfo(appId) {
  // Steam 商店页面 — 有服务端渲染的 meta 和结构化数据
  const html = await fetchText(`https://store.steampowered.com/app/${appId}/`, {
    headers: {
      "Accept-Language": "en-US,en;q=0.9",
      "Cookie": "birthtime=0; lastagecheckage=1-January-1990; mature_content=1", // 绕过年龄验证
    },
    timeout: 15000,
  });

  // 提取评测摘要
  const reviewMatch = html.match(/data-tooltip-html="([^"]*)/);
  const reviewSummary = reviewMatch ? reviewMatch[1].replace(/<[^>]*>/g, "") : null;

  // 提取标签
  const tagRegex = /<a[^>]*class="app_tag"[^>]*>([^<]+)<\/a>/gi;
  const tags = [...html.matchAll(tagRegex)].map((m) => m[1].trim()).slice(0, 10);

  // 提取描述
  const descMatch = html.match(/<meta name="description" content="([^"]*)/);
  const description = descMatch ? descMatch[1] : null;

  return {
    tags,
    reviewSummary,
    description: description?.slice(0, 200) || null,
  };
}
