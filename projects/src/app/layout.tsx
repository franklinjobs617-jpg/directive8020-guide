import type { Metadata } from "next";
import Script from "next/script";
import { Inspector } from "react-dev-inspector";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { NanoBananasBanner } from "@/components/nano-bananas-banner";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://enjoy4game.com"),
  title: {
    default: "Enjoy4Game Guides - Game Walkthroughs, Builds, Tips & Strategy",
    template: "%s | Enjoy4Game Guides",
  },
  description:
    "Game guides for survival horror, RPG, life sim, strategy, and indie games. Walkthroughs, builds, tips, system requirements, Steam Deck checks, and buying advice.",
  keywords: [
    "game guides",
    "game walkthroughs",
    "PC game guides",
    "indie game guides",
    "survival game guides",
    "RPG game guides",
    "Steam game guides",
    "Early Access game guides",
    "game tips and tricks",
    "game system requirements",
    "Steam Deck game guides",
  ],
  authors: [{ name: "Enjoy4Game Guides" }],
  other: {
    "google-adsense-account": "ca-pub-3383070348689557",
    "msvalidate.01": "AF7A71774B31B882258DD5FDB265DB04",
  },
  openGraph: {
    title: "Enjoy4Game Guides - Game Walkthroughs, Builds, Tips & Strategy",
    description:
      "Game guides for survival horror, RPG, life sim, strategy, and indie games. Walkthroughs, builds, tips, system requirements, Steam Deck checks, and buying advice.",
    locale: "en_US",
    type: "website",
    siteName: "Enjoy4Game Guides",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enjoy4Game Guides - Game Walkthroughs, Builds, Tips & Strategy",
    description:
      "Game guides for survival horror, RPG, life sim, strategy, and indie games. Walkthroughs, builds, tips, system requirements, Steam Deck checks, and buying advice.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
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
        {/* ========================================================= */}
        {/* 0. Resource hints for third-party origins */}
        {/* ========================================================= */}
        <link rel="preconnect" href="https://www.ezojs.com" />
        <link rel="preconnect" href="https://cmp.gatekeeperconsent.com" />
        <link rel="preconnect" href="https://the.gatekeeperconsent.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://cdn.pokiter.com" />
        <link rel="dns-prefetch" href="https://ezoicanalytics.com" />
        {/* ========================================================= */}
        {/* 1. Ezoic 隐私合规脚本 (在 sa.min.js 之前加载以确保合规性) */}
        {/* ========================================================= */}
        <meta name="msvalidate.01" content="AF7A71774B31B882258DD5FDB265DB04" />
        <Script
          id="ezoic-cmp-1"
          src="https://cmp.gatekeeperconsent.com/min.js"
          strategy="beforeInteractive"
          data-cfasync="false"
        />
        <Script
          id="ezoic-cmp-2"
          src="https://the.gatekeeperconsent.com/cmp.min.js"
          strategy="beforeInteractive"
          data-cfasync="false"
        />

        {/* ========================================================= */}
        {/* 2. Ezoic 核心初始化脚本 */}
        {/* ========================================================= */}
        <Script
          id="ezoic-sa"
          src="https://www.ezojs.com/ezoic/sa.min.js"
          strategy="beforeInteractive"
        />
        <Script id="ezoic-analytics-init" strategy="beforeInteractive">
          {`
 window.ezstandalone = window.ezstandalone || {};
 ezstandalone.cmd = ezstandalone.cmd || [];
 `}
        </Script>
        <Script
          id="ezoic-analytics"
          src="https://ezoicanalytics.com/analytics.js"
          strategy="beforeInteractive"
        />
      </head>

      <body className="antialiased min-h-screen flex flex-col">
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3383070348689557"
          strategy="afterInteractive"
        />
        <Script
          src={`https://cdn.pokiter.com/js/swv5.mix.js?t=4game`}
          strategy="afterInteractive"
          data-ssp="web-4game"
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
        <NanoBananasBanner />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
