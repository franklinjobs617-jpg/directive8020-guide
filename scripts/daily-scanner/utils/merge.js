/**
 * 去重 & 合并工具
 */

/**
 * 按游戏名去重合并候选列表
 * - 同一个游戏可能出现在 IGDB + SteamDB + Steam 社区
 * - 合并为一个条目，保留所有来源标记
 */
export function mergeGameCandidates(lists) {
  const map = new Map();

  for (const { source, games } of lists) {
    for (const g of games) {
      const key = normalizeName(g.name);
      if (!map.has(key)) {
        map.set(key, {
          name: g.name,
          discoveredFrom: [source],
          platforms: g.platforms || [],
          rawData: {},
        });
      }
      const entry = map.get(key);
      if (!entry.discoveredFrom.includes(source)) {
        entry.discoveredFrom.push(source);
      }
      // 合并平台
      if (g.platforms) {
        for (const p of g.platforms) {
          if (!entry.platforms.includes(p)) entry.platforms.push(p);
        }
      }
      // 存放各来源原始数据
      entry.rawData[source] = g;
    }
  }

  return Array.from(map.values());
}

/**
 * 合并关键词建议（来自 Google Suggest / YouTube Suggest / Reddit / Steam 等）
 */
export function mergeKeywords(gameName, keywordLists) {
  const seen = new Set();
  const merged = [];

  for (const { source, keywords } of keywordLists) {
    for (const kw of keywords) {
      const clean = kw.toLowerCase().trim();
      if (!seen.has(clean)) {
        seen.add(clean);
        merged.push({
          keyword: kw,
          source,
          queryProof: `appeared in ${source}`,
        });
      }
    }
  }

  return merged;
}

function normalizeName(name) {
  return String(name || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}
