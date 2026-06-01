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
    default:
      "Directive 8020 Guide - All Endings, Choices, Trophies & Walkthrough",
    template: "%s | Directive 8020 Guide",
  },
  description:
    "Complete Directive 8020 guide: all endings, choices and consequences, character survival, trophy walkthrough, system requirements, and more. Survive the Cassiopeia.",
  keywords: [
    "Directive 8020",
    "Directive 8020 guide",
    "Directive 8020 all endings",
    "Directive 8020 how to save everyone",
    "Directive 8020 trophy guide",
    "Directive 8020 walkthrough",
    "Directive 8020 choices",
    "Directive 8020 system requirements",
    "Directive 8020 release time",
    "Dark Pictures Directive 8020",
    "Supermassive Games",
  ],
  authors: [{ name: "Directive 8020 Guide Hub" }],
  other: {
    "google-adsense-account": "ca-pub-3383070348689557",
  },
  openGraph: {
    title: "Directive 8020 Guide - All Endings, Choices & Walkthrough",
    description:
      "Complete guide for Directive 8020. All endings, choices, character survival tips, trophy walkthrough, and more.",
    locale: "en_US",
    type: "website",
    siteName: "Directive 8020 Guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "Directive 8020 Guide - All Endings, Choices & Walkthrough",
    description:
      "Complete guide for Directive 8020. All endings, choices, character survival tips, trophy walkthrough, and more.",
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
        {/* ========================================================= */}
        {/* 3. 其他非阻塞、次要第三方脚本 (页面加载后延迟执行)          */}
        {/* ========================================================= */}
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
