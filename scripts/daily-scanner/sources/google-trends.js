/**
 * Google Trends — 公开数据
 *
 * 用 Google Trends 的非官方 JSON 端点获取趋势数据
 * 对比每个游戏 vs 基准词 (gpts) 的 7d / 30d 趋势
 */
import { fetchJSON, fetchText } from "../utils/fetch.js";

export async function collectGoogleTrends(gameNames, baseline = "gpts") {
  const results = [];

  for (const name of gameNames) {
    try {
      // 获取游戏趋势
      const gameTrend = await getTrendData(name);
      // 获取基准词趋势
      const baselineTrend = await getTrendData(baseline);

      if (gameTrend) {
        const ratio = baselineTrend
          ? gameTrend.avgValue / Math.max(baselineTrend.avgValue, 1)
          : null;

        results.push({
          game: name,
          source: "google_trends",
          gameAvg: gameTrend.avgValue,
          baselineAvg: baselineTrend?.avgValue || null,
          ratio: ratio ? Math.round(ratio * 100) / 100 : null,
          direction7d: gameTrend.direction7d,
          direction30d: gameTrend.direction30d,
          // 按你的评分标准：
          // ratio >= 0.5 → 强信号
          // ratio >= 0.2 → 中等信号
          // ratio < 0.2  → 弱信号
          signal:
            ratio >= 0.5 ? "strong" : ratio >= 0.2 ? "medium" : "weak",
        });
      }
    } catch {
      // 单个查询失败不影响整体
    }
  }

  return results;
}

async function getTrendData(keyword) {
  try {
    // Google Trends 的非官方 API 端点
    const url = `https://trends.google.com/trends/api/explore?hl=en-US&tz=0&req=${encodeURIComponent(
      JSON.stringify({
        comparisonItem: [
          { keyword, geo: "", time: "today 1-m" },
        ],
        category: 0,
        property: "",
      })
    )}&tz=0`;

    const text = await fetchText(url, {
      headers: {
        Accept: "application/json",
        "Accept-Language": "en-US,en;q=0.9",
      },
    });

    // Google Trends 返回的 JSON 前面有 ")]}'" 前缀
    const cleanJson = text.replace(/^\)\]\}'\n?/, "");
    const data = JSON.parse(cleanJson);

    // 提取时间线数据
    const timelineData =
      data?.widgets
        ?.find((w) => w.token)
        ?.tokens?.[0]?.bullets || [];

    if (timelineData.length === 0) return null;

    const values = timelineData.map((p) => p.value || 0);
    const avgValue = values.reduce((a, b) => a + b, 0) / values.length;

    // 计算 7d / 30d 方向
    const half = Math.floor(values.length / 2);
    const recentHalf = values.slice(-half);
    const olderHalf = values.slice(0, half);
    const recentAvg =
      recentHalf.reduce((a, b) => a + b, 0) / recentHalf.length;
    const olderAvg =
      olderHalf.reduce((a, b) => a + b, 0) / olderHalf.length;

    const direction7d =
      recentAvg > olderAvg * 1.1
        ? "up"
        : recentAvg < olderAvg * 0.9
          ? "down"
          : "stable";

    return {
      avgValue,
      direction7d,
      direction30d: recentAvg > olderAvg ? "up" : "down",
    };
  } catch {
    return null;
  }
}
