import type { Metadata } from "next";
import { mothkeep, type GameGuideLink } from "@/lib/games";

export const mothkeepLastModified = "2026-07-09";
export const mothkeepSteamUrl = "https://store.steampowered.com/app/3920300/Mothkeep/";

export const mothkeepSourceRows = [
  {
    claim: "What does Steam list for release timing, price, length, and demo history?",
    source: "Steam store",
    status: "verified" as const,
    href: mothkeepSteamUrl,
    note: "Use Steam for the current price, demo availability, and the developer's own update notes — Mothkeep does not have a separate marketing site beyond its Steam page.",
  },
];

// Images sourced 2026-07-09 directly from you (Steam capsule/header art +
// 3 official screenshots), following the same low-risk sourcing process
// used for the other new games. Resized to 1280px wide and converted to
// webp.
export const mothkeepImages = {
  hero: "/games/mothkeep/hero.webp",
  card: "/games/mothkeep/card.webp",
  siteHero: "/games/mothkeep/site-hero.webp",
  journal: "/games/mothkeep/journal.webp",
};

export const mothkeepQuickFacts = [
  ["Developer / Publisher", "Ivette Schmidt (solo developer, first Steam release)"],
  ["Release Date", "July 10, 2026"],
  ["Platforms", "PC (Steam) only"],
  ["Length", "~2-4 hours, described by the developer as a short experience"],
  ["Content", "No combat, no multiplayer, no PvP or trading — pure moth documentation"],
  ["Setting", "A curated selection of moths native to Central Europe"],
  ["Demo", "Free, live on Steam ahead of launch"],
  ["Price", "Not officially announced yet"],
];

export const mothkeepRelatedGuides: GameGuideLink[] = [
  {
    title: "Mothkeep Guide Hub",
    href: mothkeep.hubPath,
    description:
      "Start here for release facts, length, and pricing for this cozy moth-documenting game.",
  },
  ...mothkeep.guideLinks,
];

export function getMothkeepRelated(excludeHref: string) {
  return mothkeepRelatedGuides
    .filter((guide) => guide.href !== excludeHref)
    .slice(0, 6);
}

const mothkeepKeywords = [
  "mothkeep",
  "mothkeep release date",
  "mothkeep price",
  "mothkeep how long",
  "mothkeep length",
  "mothkeep demo",
  "mothkeep steam",
  "mothkeep review",
];

export function createMothkeepMetadata({
  title,
  description,
  canonical,
  image = mothkeepImages.hero,
}: {
  title: string;
  description: string;
  canonical: string;
  image?: string;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: mothkeepKeywords,
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
