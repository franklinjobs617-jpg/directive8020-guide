import type { Metadata } from "next";
import { moonlightPeaks, type GameGuideLink } from "@/lib/games";

export const moonlightPeaksLastModified = "2026-07-07";
export const moonlightPeaksSteamUrl =
  "https://store.steampowered.com/app/2209900/Moonlight_Peaks/";
export const moonlightPeaksOfficialUrl = "https://www.moonlightpeaks.com/";

export const moonlightPeaksSourceRows = [
  {
    claim: "What does Steam list for Moonlight Peaks' current price, demo availability, and launch discount?",
    source: "Steam store",
    status: "verified" as const,
    href: moonlightPeaksSteamUrl,
    note: "Use Steam for the current price, the free demo download, and the launch-week discount window.",
  },
  {
    claim: "Who developed and published Moonlight Peaks, and what does the official site confirm?",
    source: "Moonlight Peaks official site",
    status: "verified" as const,
    href: moonlightPeaksOfficialUrl,
    note: "Use the publisher page for official artwork, platform list, and studio background on Little Chicken Game Company.",
  },
];

// Images sourced 2026-07-07 directly from you (Steam capsule/header art +
// 3 official screenshots), following the same low-risk sourcing process
// used for Palworld. Resized to 1280px wide and converted to webp.
export const moonlightPeaksImages = {
  hero: "/games/moonlight-peaks/hero.webp",
  card: "/games/moonlight-peaks/card.webp",
  siteHero: "/games/moonlight-peaks/site-hero.webp",
  dungeon: "/games/moonlight-peaks/dungeon.webp",
};

export const moonlightPeaksQuickFacts = [
  ["Developer", "Little Chicken Game Company"],
  ["Publisher", "XSEED Games (with Marvelous Europe)"],
  ["Release Date", "July 7, 2026"],
  ["Platforms", "PC (Steam), Nintendo Switch, Nintendo Switch 2, Android (Google Play)"],
  ["Not Announced", "PS5, Xbox, and iOS have no confirmed release"],
  ["Price", "$34.99 standard (PC/Switch); $39.99 Nintendo Switch 2 Edition"],
  ["Launch Discount", "15% off during launch week"],
  ["Multiplayer", "Single-player only — no multiplayer or co-op"],
  ["Demo", "Free, available now on Steam and Nintendo eShop; no confirmed save carryover"],
];

export const moonlightPeaksRelatedGuides: GameGuideLink[] = [
  {
    title: "Moonlight Peaks Guide Hub",
    href: moonlightPeaks.hubPath,
    description:
      "Start here for release facts, platform and price details, and upcoming coverage as Moonlight Peaks launches.",
  },
  ...moonlightPeaks.guideLinks,
];

export function getMoonlightPeaksRelated(excludeHref: string) {
  return moonlightPeaksRelatedGuides
    .filter((guide) => guide.href !== excludeHref)
    .slice(0, 6);
}

const moonlightPeaksKeywords = [
  "moonlight peaks",
  "moonlight peaks release date",
  "moonlight peaks platforms",
  "moonlight peaks price",
  "moonlight peaks switch",
  "moonlight peaks steam",
  "moonlight peaks demo",
  "moonlight peaks system requirements",
  "moonlight peaks vampire farming sim",
  "moonlight peaks android",
];

export function createMoonlightPeaksMetadata({
  title,
  description,
  canonical,
  image = moonlightPeaksImages.hero,
}: {
  title: string;
  description: string;
  canonical: string;
  image?: string;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: moonlightPeaksKeywords,
    authors: [{ name: "Enjoy4Game Guides" }],
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [image],
      type: "article",
      siteName: "Enjoy4Game Guides",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
