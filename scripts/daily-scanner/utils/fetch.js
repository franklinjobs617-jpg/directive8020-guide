/**
 * HTTP 请求工具 — 带重试、超时、User-Agent
 */
import https from "https";
import http from "http";

const TIMEOUT = 15000; // 15 秒超时
const RETRIES = 2;     // 失败重试 2 次
const MAX_REDIRECTS = 5;

export async function fetchJSON(url, opts = {}) {
  const text = await fetchText(url, opts);
  return JSON.parse(text);
}

export async function fetchText(url, opts = {}) {
  const { headers = {}, method = "GET", body, timeout } = opts;

  for (let attempt = 0; attempt <= RETRIES; attempt++) {
    try {
      return await doFetch(url, { headers, method, body, timeout });
    } catch (err) {
      if (attempt === RETRIES) throw err;
      // 等 1 秒后重试
      await sleep(1000);
    }
  }
}

function doFetch(url, { headers, method, body, timeout }) {
  const reqTimeout = timeout || TIMEOUT;
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const mod = u.protocol === "https:" ? https : http;

    const req = mod.request(
      url,
      {
        method,
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
          Accept: "application/json, text/plain, */*",
          "Accept-Language": "en-US,en;q=0.9",
          ...headers,
        },
        timeout: reqTimeout,
      },
      (res) => {
        // 处理重定向
        if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location) {
          // 跟随重定向（简单处理）
          const loc = new URL(res.headers.location, url).href;
          resolve(doFetch(loc, { headers, method, body }));
          return;
        }

        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => {
          const data = Buffer.concat(chunks).toString("utf-8");
          if (res.statusCode >= 400) {
            reject(new Error(`HTTP ${res.statusCode}: ${data.slice(0, 200)} (${url})`));
          } else {
            resolve(data);
          }
        });
      }
    );

    req.on("error", reject);
    req.on("timeout", () => {
      req.destroy();
      reject(new Error(`Request timeout: ${url}`));
    });

    if (body) req.write(body);
    req.end();
  });
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
