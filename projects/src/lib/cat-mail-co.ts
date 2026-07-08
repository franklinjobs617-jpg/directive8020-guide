import type { Metadata } from "next";
import { catMailCo, type GameGuideLink } from "@/lib/games";

export const catMailCoLastModified = "2026-07-08";
export const catMailCoSteamUrl =
  "https://store.steampowered.com/app/4380490/Cat_Mail_Co/";
export const catMailCoOfficialUrl = "https://maracas-studio.com/";

export const catMailCoSourceRows = [
  {
    claim: "What does Steam list for release timing, price, co-op support, and demo availability?",
    source: "Steam store",
    status: "verified" as const,
    href: catMailCoSteamUrl,
    note: "Use Steam for the current price, the free demo, system requirements, and launch-week Supporter Pack details.",
  },
  {
    claim: "Who developed Cat Mail Co., and what is the studio's official announcement history?",
    source: "Maracas Studio official site",
    status: "verified" as const,
    href: catMailCoOfficialUrl,
    note: "Use the studio page for official background on Maracas Studio and its other projects.",
  },
];

// Images sourced 2026-07-08 directly from you (Steam capsule/header art +
// 3 official screenshots), following the same low-risk sourcing process
// used for Palworld, Moonlight Peaks, and Forensics. Resized to 1280px
// wide and converted to webp.
export const catMailCoImages = {
  hero: "/games/cat-mail-co/hero.webp",
  card: "/games/cat-mail-co/card.webp",
  siteHero: "/games/cat-mail-co/site-hero.webp",
  sortingRoom: "/games/cat-mail-co/sorting-room.webp",
};

export const catMailCoQuickFacts = [
  ["Developer / Publisher", "Maracas Studio (Belgium)"],
  ["Release Date", "July 9, 2026"],
  ["Platforms", "PC (Steam) only — no console or mobile version announced"],
  ["Price", "Not officially announced yet"],
  ["Co-op", "Up to 4 players online, plus full single-player"],
  ["Pre-Launch Momentum", "130,000+ wishlists; demo rated 96-97% positive during Steam Next Fest June 2026"],
  ["Demo", "Free, live since June 12, 2026; progress carries over into the full release"],
  ["Launch Bonus", "Free Supporter Pack (artbook + soundtrack + bonus item) for first-week buyers"],
];

// Official Steam-listed PC specs, confirmed (unlike some of our other new
// game pages, these were already published pre-launch — do not treat this
// as a placeholder, it's a real confirmed source).
export const catMailCoSpecRows = [
  ["OS", "Windows 10/11 64-bit", "Windows 10/11 64-bit"],
  ["CPU", "Intel Core i5-3330 3.0 GHz / AMD FX-8300 3.3 GHz", "Intel Core i5-3330 3.0 GHz / AMD FX-8300 3.3 GHz"],
  ["RAM", "8 GB", "8 GB"],
  ["GPU", "GeForce GTX 950 (2GB) / Radeon HD 7970 (3GB)", "GeForce GTX 950 (2GB) / Radeon HD 7970 (3GB)"],
  ["Storage", "4 GB available space", "4 GB available space"],
];

export const catMailCoRelatedGuides: GameGuideLink[] = [
  {
    title: "Cat Mail Co. Guide Hub",
    href: catMailCo.hubPath,
    description:
      "Start here for release facts, pricing, co-op details, and system requirements.",
  },
  ...catMailCo.guideLinks,
];

export function getCatMailCoRelated(excludeHref: string) {
  return catMailCoRelatedGuides
    .filter((guide) => guide.href !== excludeHref)
    .slice(0, 6);
}

const catMailCoKeywords = [
  "cat mail co",
  "cat mail co release date",
  "cat mail co price",
  "cat mail co system requirements",
  "cat mail co co-op",
  "cat mail co demo",
  "cat mail co steam",
  "cat mail co review",
];

export function createCatMailCoMetadata({
  title,
  description,
  canonical,
  image = catMailCoImages.hero,
}: {
  title: string;
  description: string;
  canonical: string;
  image?: string;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: catMailCoKeywords,
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
