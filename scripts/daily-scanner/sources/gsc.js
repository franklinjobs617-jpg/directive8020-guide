/**
 * Google Search Console API — 需要 Google OAuth 或服务账号
 *
 * 这个比普通 API Key 复杂一些，需要 OAuth 2.0 授权。
 * 先做成占位，后面单独配。
 *
 * 用途: 拉取昨日你网站的新曝光词，发现"有机遇但没做页面"的长尾词
 */
export async function collectGSC() {
  // GSC 需要 OAuth 2.0 授权，流程复杂
  // 先用 Google Suggest + Reddit + Steam 等公开来源
  // GSC 作为后续增强项
  console.warn("  ⚠️ GSC 暂未启用（需要 OAuth 配置），跳过");
  console.warn("     → 后续通过 Google Cloud 服务账号配置");
  return [];
}
