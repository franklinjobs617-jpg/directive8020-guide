import type { Metadata } from "next";
import { palworld, type GameGuideLink } from "@/lib/games";

export const palworldLastModified = "2026-07-06";
export const palworldSteamUrl =
  "https://store.steampowered.com/app/1623730/Palworld/";
export const palworldOfficialUrl =
  "https://www.pocketpair.jp/en/games-en/palworld-en/";

export const palworldSourceRows = [
  {
    claim: "What does Steam list for Palworld's current price, reviews, and Early Access status ahead of the 1.0 launch?",
    source: "Steam store",
    status: "verified" as const,
    href: palworldSteamUrl,
    note: "Use Steam for the current sale price, \"Overwhelmingly Positive\" review tally, and the official countdown to the July 10, 2026 1.0 update.",
  },
  {
    claim: "Who developed and published Palworld, and what platforms does the official page confirm?",
    source: "Pocketpair official site",
    status: "verified" as const,
    href: palworldOfficialUrl,
    note: "Use the publisher page for confirmed platform list (Steam, PS5, Xbox, mobile) and official Pal artwork/screenshots.",
  },
];

// Images sourced 2026-07-06 from Palworld's official Steam store page
// (header/capsule art + official screenshots) — this is the standard,
// low-risk source game guide/wiki sites use for editorial coverage of a
// game, as opposed to random user-submitted Reddit/review screenshots.
// Resized to 1280px wide and converted to webp to match this site's
// existing image convention (see public/games/palworld/).
export const palworldImages = {
  hero: "/games/palworld/hero.webp",
  card: "/games/palworld/card.webp",
  siteHero: "/games/palworld/site-hero.webp",
  campfire: "/games/palworld/campfire.webp",
};

export const palworldQuickFacts = [
  ["Developer / Publisher", "Pocketpair"],
  ["Original Early Access Release", "January 19, 2024"],
  ["1.0 Full Release", "July 10, 2026"],
  ["Platforms", "PC (Steam), PS5, Xbox Series X|S / Xbox One, mobile"],
  ["Price", "$29.99 (frequently discounted; 30% off pre-1.0 as of early July 2026)"],
  ["Genre", "Creature Collector / Survival / Open World / Automation"],
  ["Steam Review", "Overwhelmingly Positive (350,000+ reviews)"],
  ["Save Data", "Not wiped for 1.0 — fresh start optional, not required"],
];

// Official Steam-listed PC specs. Consistent across gamesystemrequirements.com,
// PCGamesN, and PC Guide as of 2026-07 — these have not changed since the
// original 2024 Early Access launch; Pocketpair has not announced a spec
// bump for 1.0 as of this writing.
export const palworldSpecRows = [
  ["OS", "Windows 10 64-bit", "Windows 10 64-bit"],
  ["CPU", "Intel Core i5-3570K 3.4 GHz (4-core)", "Intel Core i9-9900K 3.6 GHz (8-core)"],
  ["RAM", "16 GB", "32 GB"],
  ["GPU", "Nvidia GeForce GTX 1050 (2GB)", "Nvidia GeForce RTX 2070"],
  ["Storage", "40 GB available space (SSD strongly recommended)", "40 GB available space (SSD recommended)"],
  ["DirectX", "Version 11", "Version 11"],
  ["Network", "Broadband Internet connection", "Broadband Internet connection"],
];

export const palworldStartRows = [
  [
    "I want to know when 1.0 releases",
    "Release date, time, and what changes",
    "/games/palworld/1-0-release-date",
  ],
  [
    "Will it run on my PC?",
    "Minimum & recommended system requirements",
    "/games/palworld/system-requirements",
  ],
  [
    "I have an existing save — will I lose it?",
    "Save data and fresh-start guidance for 1.0",
    "/games/palworld/save-data-1-0",
  ],
];

export const palworldRelatedGuides: GameGuideLink[] = [
  {
    title: "Palworld Guide Hub",
    href: palworld.hubPath,
    description:
      "Start here for 1.0 release facts, system requirements, save-data guidance, and upcoming breeding and World Tree coverage.",
  },
  ...palworld.guideLinks,
];

export function getPalworldRelated(excludeHref: string) {
  return palworldRelatedGuides
    .filter((guide) => guide.href !== excludeHref)
    .slice(0, 6);
}

const palworldKeywords = [
  "palworld",
  "palworld 1.0",
  "palworld 1.0 release date",
  "palworld release date",
  "palworld system requirements",
  "palworld save wipe",
  "palworld world tree",
  "palworld genetic recombination",
  "palworld breeding calculator",
  "palworld pals",
  "palworld mobile",
  "palworld map",
  "palworld server",
];

export function createPalworldMetadata({
  title,
  description,
  canonical,
  image = palworldImages.hero,
}: {
  title: string;
  description: string;
  canonical: string;
  image?: string;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: palworldKeywords,
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
