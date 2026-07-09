import type { Metadata } from "next";
import { theMoundOmenOfCthulhu, type GameGuideLink } from "@/lib/games";

export const theMoundLastModified = "2026-07-09";
export const theMoundSteamUrl =
  "https://store.steampowered.com/app/2569760/The_Mound_Omen_of_Cthulhu/";
export const theMoundOfficialUrl =
  "https://www.nacongaming.com/en-GB/the-mound-omen-cthulhu";

export const theMoundSourceRows = [
  {
    claim: "What does Steam list for release timing, price, co-op player count, and content rating?",
    source: "Steam store",
    status: "verified" as const,
    href: theMoundSteamUrl,
    note: "Use Steam for the current price, demo history, system requirements, and platform confirmation.",
  },
  {
    claim: "Who developed and published the game, and what does the publisher confirm about crossplay and pre-order bonuses?",
    source: "Nacon official site",
    status: "verified" as const,
    href: theMoundOfficialUrl,
    note: "Use the publisher page for official studio background on ACE Team and Nacon, plus pre-order bonus details.",
  },
];

// Images sourced 2026-07-09 directly from you (Steam capsule/header art +
// 3 official screenshots), following the same low-risk sourcing process
// used for the other new games. Resized to 1280px wide and converted to
// webp.
export const theMoundImages = {
  hero: "/games/the-mound-omen-of-cthulhu/hero.webp",
  card: "/games/the-mound-omen-of-cthulhu/card.webp",
  siteHero: "/games/the-mound-omen-of-cthulhu/site-hero.webp",
  expedition: "/games/the-mound-omen-of-cthulhu/expedition.webp",
};

export const theMoundQuickFacts = [
  ["Developer", "ACE Team (Zeno Clash, The Eternal Cylinder)"],
  ["Publisher", "Nacon"],
  ["Release Date", "July 15, 2026"],
  ["Platforms", "PC (Steam), PlayStation 5, Xbox Series X|S"],
  ["Crossplay", "Confirmed across PC, PS5, and Xbox Series X|S at launch"],
  ["Co-op", "2-4 players, spatial voice chat"],
  ["Content Rating", "ESRB Mature 17+ (Blood and Gore, Violence, Users Interact); PEGI 18 (Violence)"],
  ["Demo", "Playable during Steam Next Fest June 15-22, 2026 — 200,000+ demo players reported"],
  ["Price", "Not officially confirmed at time of writing"],
];

export const theMoundRelatedGuides: GameGuideLink[] = [
  {
    title: "The Mound: Omen of Cthulhu Guide Hub",
    href: theMoundOmenOfCthulhu.hubPath,
    description:
      "Start here for release facts, platform details, and upcoming expedition/sanity mechanic coverage.",
  },
  ...theMoundOmenOfCthulhu.guideLinks,
];

export function getTheMoundRelated(excludeHref: string) {
  return theMoundRelatedGuides
    .filter((guide) => guide.href !== excludeHref)
    .slice(0, 6);
}

const theMoundKeywords = [
  "the mound omen of cthulhu",
  "the mound omen of cthulhu release date",
  "the mound omen of cthulhu platforms",
  "the mound omen of cthulhu price",
  "the mound omen of cthulhu crossplay",
  "the mound omen of cthulhu co-op",
  "the mound omen of cthulhu demo",
  "the mound omen of cthulhu rating",
  "the mound omen of cthulhu system requirements",
];

export function createTheMoundMetadata({
  title,
  description,
  canonical,
  image = theMoundImages.hero,
}: {
  title: string;
  description: string;
  canonical: string;
  image?: string;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: theMoundKeywords,
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
