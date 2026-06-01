/**
 * Steam 数据 — 公开 API + 页面抓取
 *
 * 来源 1: Steam 商店公开 API（featured + top sellers）
 * 来源 2: Steam 流行新品页面（HTML 抓取）
 *
 * 注意: steamdb.info 有 Cloudflare 防护，不能用简单 HTTP 抓
 *        改用 Steam 官方公开接口
 */
import { fetchText, fetchJSON } from "../utils/fetch.js";

export async function collectSteamDB(limit = 30) {
  const games = new Map();

  // ===== 1. Steam Store: 热门 & 热销（公开 API）=====
  try {
    const data = await fetchJSON(
      "https://store.steampowered.com/api/featuredcategories?cc=us&l=en",
      { timeout: 20000 }
    );

    // 热销
    const topSellers = data?.top_sellers?.items || [];
    for (const item of topSellers) {
      addGame(games, {
        appId: item.id,
        name: item.name,
        source: "steam_top_sellers",
        currentPlayers: 0,
        peak24h: 0,
        platform: "PC",
      });
    }

    // 热门新品
    const newReleases = data?.new_releases?.items || [];
    for (const item of newReleases) {
      addGame(games, {
        appId: item.id,
        name: item.name,
        source: "steam_new_releases",
        currentPlayers: 0,
        peak24h: 0,
        platform: "PC",
      });
    }

    // 即将推出
    const upcoming = data?.coming_soon?.items || [];
    for (const item of upcoming) {
      addGame(games, {
        appId: item.id,
        name: item.name,
        source: "steam_upcoming",
        currentPlayers: 0,
        peak24h: 0,
        platform: "PC",
      });
    }
  } catch (err) {
    console.warn(`  ⚠️ Steam store API 失败: ${err.message}`);
  }

  // ===== 2. Steam 流行新品页面 =====
  try {
    const html = await fetchText(
      "https://store.steampowered.com/search/?filter=popularnew&sort_by=Released_DESC&category1=998&os=win",
      { headers: { Accept: "text/html" }, timeout: 25000 }
    );

    // 用正则从搜索结果提取游戏信息
    const cardRegex = /data-ds-appid="(\d+)"[^>]*>[\s\S]*?<span class="title">([^<]+)<\/span>/gi;
    for (const m of html.matchAll(cardRegex)) {
      const appId = parseInt(m[1]);
      const name = m[2].trim();
      if (appId > 0 && name) {
        addGame(games, {
          appId,
          name,
          source: "steam_popular_new",
          currentPlayers: 0,
          peak24h: 0,
          platform: "PC",
        });
      }
    }
  } catch (err) {
    console.warn(`  ⚠️ Steam 流行新品抓取失败: ${err.message}`);
  }

  // ===== 3. 获取这些游戏的当前玩家数 =====
  if (games.size > 0) {
    try {
      const appIds = Array.from(games.values()).map((g) => g.appId);
      const playerCounts = await getPlayerCounts(appIds);
      for (const [appId, count] of Object.entries(playerCounts)) {
        const id = parseInt(appId);
        // 找到对应的游戏
        for (const g of games.values()) {
          if (g.appId === id) {
            g.currentPlayers = count;
            break;
          }
        }
      }
    } catch (err) {
      console.warn(`  ⚠️ Steam 玩家数获取失败: ${err.message}`);
    }
  }

  return Array.from(games.values()).slice(0, limit);
}

function addGame(map, game) {
  if (!map.has(game.appId)) {
    map.set(game.appId, game);
  } else {
    const existing = map.get(game.appId);
    // 合并来源
    if (!existing.source.includes(game.source)) {
      existing.source = `${existing.source}+${game.source}`;
    }
  }
}

/**
 * 批量获取 Steam App 的当前玩家数
 * 端点: https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/
 *
 * 注意: 这个 API 有时需要 key，有时不需要。先尝试公开访问。
 * 如果失败（403），降级为跳过。
 */
async function getPlayerCounts(appIds) {
  const counts = {};
  // 限制批量查询（太多请求会被限流）
  const batch = appIds.slice(0, 20);

  for (const appId of batch) {
    try {
      const data = await fetchJSON(
        `https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=${appId}`,
        { timeout: 8000 }
      );
      if (data?.response?.player_count !== undefined) {
        counts[appId] = data.response.player_count;
      }
    } catch {
      // 单个失败跳过
    }
  }
  return counts;
}
