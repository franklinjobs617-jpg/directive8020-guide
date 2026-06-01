/**
 * IGDB API — 需要 Twitch Client ID + Secret
 *
 * 注册: https://dev.twitch.tv/console → 创建应用 → 拿到 Client ID + Secret
 * 文档: https://api-docs.igdb.com/
 *
 * 用途: 查出今天 / 本周 / 30 天内发布的所有游戏（全平台覆盖）
 * 完全免费，无请求限制
 */
import { fetchJSON } from "../utils/fetch.js";
import { config } from "../config.js";

let accessToken = null;
let tokenExpiry = 0;

export async function collectIGDB() {
  const { clientId, clientSecret } = config.twitch;

  if (!clientId || !clientSecret) {
    console.warn("  ⚠️ IGDB 跳过：未配置 TWITCH_CLIENT_ID / TWITCH_CLIENT_SECRET");
    console.warn("     → 注册 https://dev.twitch.tv/console（免费），然后设置环境变量");
    return [];
  }

  await ensureToken();

  const today = Math.floor(Date.now() / 1000);
  const weekAgo = today - 7 * 86400;
  const monthAgo = today - 30 * 86400;

  // 同时查 3 个时间段：今天发布 + 本周发布 + 即将发布
  const queries = [
    {
      label: "today",
      // 今天 00:00 → 现在
      where: `release_dates.date >= ${today - 86400} & release_dates.date <= ${today + 86400} & release_dates.platform = (${config.igdbPlatforms.join(",")})`,
    },
    {
      label: "this_week",
      // 本周
      where: `release_dates.date >= ${weekAgo} & release_dates.date <= ${today + 86400} & release_dates.platform = (${config.igdbPlatforms.join(",")})`,
    },
    {
      label: "upcoming",
      // 未来 30 天
      where: `release_dates.date > ${today} & release_dates.date <= ${today + 30 * 86400} & release_dates.platform = (${config.igdbPlatforms.join(",")})`,
    },
  ];

  const allGames = new Map();

  for (const { label, where } of queries) {
    try {
      const games = await queryIGDB(
        `fields name, release_dates.date, release_dates.platform, platforms.name, genres.name, hypes, aggregated_rating, url;
         where ${where};
         sort hypes desc;
         limit 50;`
      );

      for (const g of games) {
        const id = g.id;
        if (!allGames.has(id)) {
          allGames.set(id, {
            igdbId: id,
            name: g.name,
            url: g.url || "",
            hypes: g.hypes || 0,
            rating: g.aggregated_rating || 0,
            platforms: (g.platforms || []).map((p) => p.name),
            genres: (g.genres || []).map((g2) => g2.name),
            releaseDates: [],
            tags: [],
          });
        }
        const entry = allGames.get(id);
        entry.tags.push(label);
        if (g.release_dates) {
          for (const rd of g.release_dates) {
            entry.releaseDates.push({
              date: rd.date ? new Date(rd.date * 1000).toISOString().slice(0, 10) : null,
              platform: rd.platform,
            });
          }
        }
      }
    } catch (err) {
      console.warn(`  ⚠️ IGDB ${label} 查询失败: ${err.message}`);
    }
  }

  return Array.from(allGames.values());
}

async function queryIGDB(body) {
  const data = await fetchJSON("https://api.igdb.com/v4/games", {
    method: "POST",
    headers: {
      "Client-ID": config.twitch.clientId,
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "text/plain",
    },
    body,
  });
  return data || [];
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
  tokenExpiry = Date.now() + (data.expires_in || 86400) * 1000 - 60000; // 提前 1 分钟刷新
}
