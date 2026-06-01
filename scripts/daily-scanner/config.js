/**
 * 数据采集配置
 *
 * 🔑 需要你注册的 API Key（全部免费）：
 *   1. Twitch 开发者账号 → https://dev.twitch.tv/console
 *      拿 Client ID + Client Secret → 解锁 IGDB + Twitch
 *   2. Google Cloud 项目 → https://console.cloud.google.com/
 *      拿 API Key → 解锁 YouTube Data API + GSC
 *
 * 即使不填任何 Key，公开来源照样能跑：
 *   Google Suggest / YouTube Suggest / Reddit / Steam Community / SteamDB / Google Trends
 */

export const config = {
  // ========== API Keys（填了就能用对应来源）==========
  twitch: {
    clientId: process.env.TWITCH_CLIENT_ID || "",     // Twitch 开发者后台拿
    clientSecret: process.env.TWITCH_CLIENT_SECRET || "",
  },
  google: {
    apiKey: process.env.GOOGLE_API_KEY || "",           // Google Cloud 拿
    cseId: process.env.GOOGLE_CSE_ID || "",
  },
  gsc: {
    // GSC 比较特殊，需要 OAuth 或服务账号 JSON
    // 先用 public 来源跑起来，GSC 后面再加
    enabled: false,
    siteUrl: "https://enjoy4game.com",
  },

  // ========== 扫描范围 ==========
  // IGDB 游戏平台过滤（全平台：6=PC, 48=PS4, 49=PS5, 167=PS5, 169=Xbox Series, 130=Switch, 34=Android, 39=iOS）
  igdbPlatforms: [6, 48, 49, 167, 169, 130],

  // 每个游戏最多取几个 Suggest 补全词
  suggestLimit: 10,

  // 每个游戏搜 Reddit 时最多保留几条帖子
  redditLimit: 5,

  // 每个游戏 Steam 社区最多保留几条帖子
  steamCommunityLimit: 5,

  // Core games to scan even when Steam/IGDB discovery fails.
  trackedGames: [
    { name: "Directive 8020", appId: 2255370 },
    { name: "007 First Light", appId: 3768760 },
    { name: "Project: Mist", appId: 2383130 },
    { name: "Thick As Thieves", appId: 3341000 },
    { name: "ZERO PARADES: For Dead Spies", appId: 2863680 },
    { name: "Warhammer 40,000: Mechanicus II", appId: 2532480 },
    { name: "Romestead", appId: 1805320 },
    { name: "Paralives", appId: 1118520 },
    { name: "Mina the Hollower", appId: 1875580 },
    { name: "JUMP KING QUEST", appId: 2317640 },
    { name: "Starminer", appId: 1116050 },
    { name: "Fatekeeper", appId: 2186990 },
    { name: "Luna Abyss", appId: 1933000 },
  ],

  // More games means more public suggest requests and a slower daily run.
  deepScanLimit: Number(process.env.DEEP_SCAN_LIMIT || 15),

  // SteamDB trending 取前多少名
  steamdbTrendingLimit: 30,

  // YouTube 24h 搜索每个游戏最多取几条
  youtubeLimit: 5,

  // Google Trends 对比基准词
  trendsBaseline: "gpts",

  // Burst keyword decision settings
  historyLookbackDays: 14,
  trendWindows: ["now 1-d", "now 7-d", "today 1-m"],
  maxTrendKeywordChecks: Number(process.env.MAX_TREND_KEYWORD_CHECKS || 20),
  serpResultLimit: Number(process.env.SERP_RESULT_LIMIT || 20),
  burstThresholdRatio: 3,
  minTrendAvg24h: 5,

  // ========== 输出 ==========
  outputDir: "./output",
  outputFile: "raw-data.json",
};
