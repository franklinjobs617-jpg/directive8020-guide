/**
 * Twitch Helix API — 需要 Twitch Client ID + Secret
 *
 * 和 IGDB 共用同一套 Twitch 开发者账号
 * 用途: 检测游戏实时观看人数异常爆增（比 SteamDB 更早的热度信号）
 *
 * 每分钟可请求 800 次，完全免费
 */
import { fetchJSON } from "../utils/fetch.js";
import { config } from "../config.js";

let accessToken = null;
let tokenExpiry = 0;

export async function collectTwitchViewers(gameNames) {
  const { clientId, clientSecret } = config.twitch;

  if (!clientId || !clientSecret) {
    console.warn("  ⚠️ Twitch 跳过：未配置 TWITCH_CLIENT_ID / TWITCH_CLIENT_SECRET");
    return [];
  }

  await ensureToken();

  const results = [];

  // 先获取 Twitch 上当前 Top 100 游戏（发现新增热度的游戏）
  try {
    const topGames = await fetchTopGames();
    for (const g of topGames) {
      const matched = gameNames.find(
        (n) => n.toLowerCase().trim() === g.name.toLowerCase().trim()
      );
      if (matched) {
        results.push({
          game: matched,
          source: "twitch",
          currentViewers: g.viewers,
          isAnomaly: false, // 需要和历史数据对比才判断
        });
      }
    }
  } catch (err) {
    console.warn(`  ⚠️ Twitch top games 查询失败: ${err.message}`);
  }

  // 对指定游戏名单独搜索
  for (const name of gameNames) {
    if (results.find((r) => r.game === name)) continue; // 已在上面的 Top 列表中
    try {
      const info = await searchGame(name);
      if (info) {
        results.push({
          game: name,
          source: "twitch",
          currentViewers: info.viewerCount || 0,
          isAnomaly: false,
        });
      }
    } catch {
      // 单个查询失败不影响整体
    }
  }

  return results;
}

async function fetchTopGames() {
  const data = await fetchJSON("https://api.twitch.tv/helix/games/top?first=100", {
    headers: {
      "Client-ID": config.twitch.clientId,
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return (data?.data || []).map((g) => ({
    id: g.id,
    name: g.name,
    viewers: g.viewer_count || 0,
  }));
}

async function searchGame(name) {
  const data = await fetchJSON(
    `https://api.twitch.tv/helix/search/categories?query=${encodeURIComponent(name)}&first=3`,
    {
      headers: {
        "Client-ID": config.twitch.clientId,
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  const exact = data?.data?.find(
    (g) => g.name.toLowerCase().trim() === name.toLowerCase().trim()
  );
  return exact || data?.data?.[0] || null;
}

async function ensureToken() {
  if (accessToken && Date.now() < tokenExpiry) return;

  const { clientId, clientSecret } = config.twitch;

  const params = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: "client_credentials",
  });

  const data = await fetchJSON(
    `https://id.twitch.tv/oauth2/token?${params.toString()}`,
    { method: "POST" }
  );

  accessToken = data.access_token;
  tokenExpiry = Date.now() + (data.expires_in || 86400) * 1000 - 60000;
}
