/**
 * HTTP 请求工具 — 带重试、超时、User-Agent
 */
import { ProxyAgent, fetch as undiciFetch } from "undici";

const TIMEOUT = 15000; // 15 秒超时
const RETRIES = 2;     // 失败重试 2 次
const proxyUrl = process.env.HTTPS_PROXY || process.env.HTTP_PROXY || "";
const proxyDispatcher = proxyUrl ? new ProxyAgent(proxyUrl) : undefined;

export async function fetchJSON(url, opts = {}) {
  const text = await fetchText(url, opts);
  return JSON.parse(text);
}

export async function fetchText(url, opts = {}) {
  const { headers = {}, method = "GET", body, timeout, retries = RETRIES } = opts;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await doFetch(url, { headers, method, body, timeout });
    } catch (err) {
      if (attempt === retries) throw err;
      // 等 1 秒后重试
      await sleep(1000);
    }
  }
}

function doFetch(url, { headers, method, body, timeout }) {
  const reqTimeout = timeout || TIMEOUT;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), reqTimeout);

  return undiciFetch(url, {
    method,
    body,
    redirect: "follow",
    dispatcher: proxyDispatcher,
    signal: controller.signal,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
      Accept: "application/json, text/plain, */*",
      "Accept-Language": "en-US,en;q=0.9",
      ...headers,
    },
  })
    .then(async (res) => {
      const text = await res.text();
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${text.slice(0, 200)} (${url})`);
      }
      return text;
    })
    .catch((err) => {
      if (err.name === "AbortError") {
        throw new Error(`Request timeout: ${url}`);
      }
      throw err;
    })
    .finally(() => clearTimeout(timer));
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
