/**
 * Google Trends — 公开数据
 *
 * 端点: trends.google.com/trends/api/explore
 * 注意: 这个 API 不稳定且有频率限制。
 *       如果是 429，说明请求太频繁，需要减少游戏数或加延迟。
 */
import { fetchText } from "../utils/fetch.js";

let firstErrorLogged = false;

export async function collectGoogleTrends(gameNames, baseline = "gpts") {
  const results = [];
  firstErrorLogged = false;

  // 限制为 5 个游戏（避免频率限制）
  const topNames = gameNames.slice(0, 5);

  for (const name of topNames) {
    try {
      const gameTrend = await getTrendData(name);
      // 每次请求后等 2 秒（避免 429）
      await sleep(2000);

      if (gameTrend) {
        // 记录每个游戏独立的趋势方向
        results.push({
          game: name,
          source: "google_trends",
          avgValue: gameTrend.avgValue,
          direction7d: gameTrend.direction7d,
          direction30d: gameTrend.direction30d,
          signal: "unknown", // 没有 baseline 对比时给 unknown
        });
      }
    } catch (err) {
      if (!firstErrorLogged) {
        console.warn(`  ⚠️ Google Trends 请求失败 (${name}): ${err.message}`);
        firstErrorLogged = true;
      }
    }
  }

  // 单独获取 baseline 一次
  try {
    const baselineTrend = await getTrendData(baseline);
    if (baselineTrend) {
      // 更新每个游戏的 ratio
      for (const r of results) {
        r.baselineAvg = baselineTrend.avgValue;
        r.ratio = baselineTrend.avgValue
          ? Math.round((r.avgValue / baselineTrend.avgValue) * 100) / 100
          : null;
        r.signal =
          r.ratio >= 0.5 ? "strong" : r.ratio >= 0.2 ? "medium" : "weak";
      }
    }
  } catch {
    // baseline 失败不影响整体
  }

  return results;
}

async function getTrendData(keyword) {
  const reqBody = {
    comparisonItem: [{ keyword, geo: "", time: "today 1-m" }],
    category: 0,
    property: "",
  };

  const url = `https://trends.google.com/trends/api/explore?hl=en-US&tz=0&req=${encodeURIComponent(JSON.stringify(reqBody))}&tz=0`;

  const text = await fetchText(url, {
    headers: {
      Accept: "application/json",
      "Accept-Language": "en-US,en;q=0.9",
    },
    timeout: 15000,
  });

  // Google Trends 返回前缀 ")]}'"
  const cleanJson = text.replace(/^\)\]\}'\n?/, "");
  const data = JSON.parse(cleanJson);

  // 提取时间线 widget
  const widget = data?.widgets?.find((w) => w.token);
  const bullets = widget?.tokens?.[0]?.bullets || [];

  if (bullets.length === 0) return null;

  const values = bullets.map((p) => p.value || 0);
  const avgValue = values.reduce((a, b) => a + b, 0) / values.length;

  const half = Math.floor(values.length / 2);
  const recentAvg = values.slice(-half).reduce((a, b) => a + b, 0) / half;
  const olderAvg = values.slice(0, half).reduce((a, b) => a + b, 0) / half;

  const direction7d =
    recentAvg > olderAvg * 1.1 ? "up" : recentAvg < olderAvg * 0.9 ? "down" : "stable";
  const direction30d = recentAvg > olderAvg ? "up" : "down";

  return { avgValue, direction7d, direction30d };
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
