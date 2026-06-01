import { existsSync, readFileSync, writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";

export function loadKeywordHistory(outputRoot) {
  const path = getHistoryPath(outputRoot);
  if (!existsSync(path)) {
    return { version: 1, keywords: {} };
  }

  try {
    const parsed = JSON.parse(readFileSync(path, "utf-8"));
    return {
      version: parsed.version || 1,
      keywords: parsed.keywords || {},
    };
  } catch {
    return { version: 1, keywords: {} };
  }
}

export function saveKeywordHistory(outputRoot, history) {
  const path = getHistoryPath(outputRoot);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, JSON.stringify(history, null, 2), "utf-8");
}

export function getKeywordHistoryInfo(history, gameName, keyword, dateStr, lookbackDays) {
  const key = getKeywordKey(gameName, keyword);
  const entry = history.keywords[key] || null;
  const seenDates = entry?.seenDates || [];
  const seenInWindow = seenDates.some((date) => isWithinLookback(date, dateStr, lookbackDays));

  return {
    key,
    firstSeenAt: entry?.firstSeenAt || null,
    lastSeenAt: entry?.lastSeenAt || null,
    seenDays: seenDates.length,
    isNewToLookback: !seenInWindow,
  };
}

export function updateKeywordHistory(history, candidates, dateStr) {
  const next = {
    version: history.version || 1,
    updatedAt: new Date().toISOString(),
    keywords: { ...(history.keywords || {}) },
  };

  for (const candidate of candidates) {
    for (const keyword of candidate.keywords || []) {
      const key = getKeywordKey(candidate.gameName, keyword.keyword);
      const entry = next.keywords[key] || {
        gameName: candidate.gameName,
        keyword: keyword.keyword,
        firstSeenAt: dateStr,
        lastSeenAt: dateStr,
        seenDates: [],
        sources: [],
        seenCount: 0,
      };

      entry.lastSeenAt = dateStr;
      entry.seenCount += 1;
      entry.sources = unique([...(entry.sources || []), keyword.source].filter(Boolean));
      entry.seenDates = unique([...(entry.seenDates || []), dateStr]).sort();
      next.keywords[key] = entry;
    }
  }

  return next;
}

export function getKeywordKey(gameName, keyword) {
  return `${normalizeText(gameName)}::${normalizeText(keyword)}`;
}

function getHistoryPath(outputRoot) {
  return join(outputRoot, "keyword-history.json");
}

function isWithinLookback(dateStr, todayStr, lookbackDays) {
  const date = toUtcDay(dateStr);
  const today = toUtcDay(todayStr);
  const diffDays = Math.floor((today - date) / (24 * 3600 * 1000));
  return diffDays >= 0 && diffDays < lookbackDays;
}

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function toUtcDay(dateStr) {
  return new Date(`${dateStr}T00:00:00.000Z`);
}

function unique(items) {
  return [...new Set(items)];
}
