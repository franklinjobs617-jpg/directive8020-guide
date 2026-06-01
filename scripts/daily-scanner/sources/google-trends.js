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

export async function collectKeywordTrendWindows(keywordItems, windows, limit = 20) {
  const results = [];
  firstErrorLogged = false;

  for (const item of keywordItems.slice(0, limit)) {
    const windowData = {};
    let hasData = false;

    for (const window of windows) {
      try {
        const trend = await getTrendData(item.keyword, window);
        await sleep(1200);
        if (trend) {
          windowData[window] = trend;
          hasData = true;
        }
      } catch (err) {
        if (!firstErrorLogged) {
          console.warn(`  ⚠️ Keyword Trends 请求失败 (${item.keyword}): ${err.message}`);
          firstErrorLogged = true;
        }
      }
    }

    results.push({
      gameName: item.gameName,
      keyword: item.keyword,
      source: "google_trends",
      available: hasData,
      windows: windowData,
    });
  }

  return results;
}

async function getTrendData(keyword, time = "today 1-m") {
  const reqBody = {
    comparisonItem: [{ keyword, geo: "", time }],
    category: 0,
    property: "",
  };

  const exploreUrl = `https://trends.google.com/trends/api/explore?hl=en-US&tz=0&req=${encodeURIComponent(
    JSON.stringify(reqBody)
  )}`;

  const exploreText = await fetchText(exploreUrl, {
    headers: {
      Accept: "application/json",
      "Accept-Language": "en-US,en;q=0.9",
    },
    timeout: 10000,
    retries: 0,
  });

  const exploreData = parseGoogleJson(exploreText);
  const widget = exploreData?.widgets?.find(
    (w) => w.id === "TIMESERIES" && w.token
  );
  if (!widget) return null;

  const timelineUrl = `https://trends.google.com/trends/api/widgetdata/multiline?hl=en-US&tz=0&req=${encodeURIComponent(
    JSON.stringify(widget.request)
  )}&token=${encodeURIComponent(widget.token)}`;
  const timelineText = await fetchText(timelineUrl, {
    headers: {
      Accept: "application/json",
      "Accept-Language": "en-US,en;q=0.9",
    },
    timeout: 10000,
    retries: 0,
  });

  const timelineData = parseGoogleJson(timelineText);
  const values = (timelineData?.default?.timelineData || [])
    .map((p) => Number(p.value?.[0] || 0))
    .filter((value) => Number.isFinite(value));

  if (values.length === 0) return null;
  const avgValue = values.reduce((a, b) => a + b, 0) / values.length;

  const half = Math.max(1, Math.floor(values.length / 2));
  const recentAvg = values.slice(-half).reduce((a, b) => a + b, 0) / half;
  const olderAvg = values.slice(0, half).reduce((a, b) => a + b, 0) / half;

  const direction7d =
    recentAvg > olderAvg * 1.1
      ? "up"
      : recentAvg < olderAvg * 0.9
      ? "down"
      : "stable";
  const direction30d = recentAvg > olderAvg ? "up" : "down";

  return { avgValue, direction7d, direction30d };
}

function parseGoogleJson(text) {
  return JSON.parse(text.replace(/^\)\]\}',?\n?/, ""));
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
