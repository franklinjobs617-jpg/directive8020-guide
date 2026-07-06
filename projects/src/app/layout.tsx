import type { Metadata } from "next";
import Script from "next/script";
import { Inspector } from "react-dev-inspector";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
// ✅ REMOVED: NanoBananasBanner — 外链跳转到 nanobananas.me 破坏站点完整性，AdSense 审核减分
// import { NanoBananasBanner } from "@/components/nano-bananas-banner";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://enjoy4game.com"),
  title: {
    // ✅ CHANGED: 更突出 "multi-game hub" 定位，让审核员第一眼就读懂这是多游戏站
    default: "Enjoy4Game — Game Guides, Walkthroughs & Tools for New Releases",
    template: "%s | Enjoy4Game",
  },
  // ✅ CHANGED: 强调覆盖类型和站点持续运营性质，而非单一游戏
  description:
    "Game guides, walkthroughs, builds, and tools for Steam new releases and early access games. Coverage includes survival, RPG, horror, strategy, life sim, and indie games.",
  keywords: [
    "game guides",
    "game walkthroughs",
    "Steam new releases guide",
    "early access game guides",
    "survival game guides",
    "RPG game guides",
    "indie game guides",
    "PC game guides",
    "Steam Deck game guides",
    "game builds and tips",
    "game release coverage",
  ],
  // ✅ ADDED: 明确作者身份，E-E-A-T 要求
  authors: [{ name: "Enjoy4Game Editorial" }],
  other: {
    "google-adsense-account": "ca-pub-3383070348689557",
    "msvalidate.01": "AF7A71774B31B882258DD5FDB265DB04",
  },
  openGraph: {
    // ✅ CHANGED: OG title 与 default title 保持一致
    title: "Enjoy4Game — Game Guides, Walkthroughs & Tools for New Releases",
    description:
      "Game guides, walkthroughs, builds, and tools for Steam new releases and early access games. Coverage includes survival, RPG, horror, strategy, life sim, and indie games.",
    locale: "en_US",
    type: "website",
    siteName: "Enjoy4Game",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enjoy4Game — Game Guides, Walkthroughs & Tools for New Releases",
    description:
      "Game guides, walkthroughs, builds, and tools for Steam new releases and early access games. Coverage includes survival, RPG, horror, strategy, life sim, and indie games.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://enjoy4game.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.COZE_PROJECT_ENV === "DEV";

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
<link rel="icon" href="/favicon-16.png" type="image/png" sizes="16x16" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* ========================================================= */}
        {/* 0. Resource hints for third-party origins */}
        {/* ========================================================= */}
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {/* Bing Webmaster Tools site verification (unrelated to Ezoic — kept) */}
        <meta name="msvalidate.01" content="AF7A71774B31B882258DD5FDB265DB04" />
      </head>

      <body className="antialiased min-h-screen flex flex-col">
        {/*
          2026-07-06: Ezoic application was rejected, so the Ezoic scripts
          that used to run here (Standalone ads script, consent-management
          scripts, Ezoic Analytics) have been removed entirely — they were
          dead weight (extra network requests + render-blocking beforeInteractive
          scripts) with zero ad revenue benefit. AdSense (Auto ads) is the
          only monetization script now.
        */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3383070348689557"
          strategy="afterInteractive"
        />
        <Script
          id="ga-loader"
          src="https://www.googletagmanager.com/gtag/js?id=G-1K6LQQSKHV"
          strategy="afterInteractive"
        />
        <Script id="ga-config" strategy="afterInteractive">
          {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', 'G-1K6LQQSKHV', {
  page_path: window.location.pathname,
});
`}
        </Script>

        {isDev && <Inspector />}
        <SiteHeader />
        {/* ✅ REMOVED: <NanoBananasBanner /> */}
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
