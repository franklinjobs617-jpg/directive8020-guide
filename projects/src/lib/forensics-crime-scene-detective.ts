import type { Metadata } from "next";
import { forensicsCrimeSceneDetective, type GameGuideLink } from "@/lib/games";

export const forensicsCrimeSceneDetectiveLastModified = "2026-07-07";
export const forensicsCrimeSceneDetectiveSteamUrl =
  "https://store.steampowered.com/app/3765010/Forensics_Crime_Scene_Detective/";
export const forensicsCrimeSceneDetectiveOfficialUrl =
  "https://forensics.aerosoft.com/";

export const forensicsCrimeSceneDetectiveSourceRows = [
  {
    claim: "What does Steam list for release timing, demo access, and current wishlist/demo momentum?",
    source: "Steam store",
    status: "verified" as const,
    href: forensicsCrimeSceneDetectiveSteamUrl,
    note: "Use Steam for the free demo, the July 13, 2026 release date, and the latest developer posts on wishlist/demo numbers.",
  },
  {
    claim: "Who developed and published the game, and what does the publisher confirm about the LKA RLP collaboration?",
    source: "Aerosoft official site",
    status: "verified" as const,
    href: forensicsCrimeSceneDetectiveOfficialUrl,
    note: "Use the publisher page for official studio background on Binary Impact, Alchemical Works, and Aerosoft.",
  },
];

// NOTE (2026-07-07): no official screenshots/key art exist in this repo yet
// — every image slot is a plain generated placeholder graphic (not
// copyrighted game art), so nothing 404s while real assets are sourced.
// Replace with official Steam screenshots before/soon after launch,
// following the same process used for Palworld and Moonlight Peaks.
export const forensicsCrimeSceneDetectiveImages = {
  hero: "/games/forensics-crime-scene-detective/hero.webp",
  card: "/games/forensics-crime-scene-detective/card.webp",
  siteHero: "/games/forensics-crime-scene-detective/site-hero.webp",
};

export const forensicsCrimeSceneDetectiveQuickFacts = [
  ["Developer", "Binary Impact / Alchemical Works"],
  ["Publisher", "Aerosoft GmbH"],
  ["Release Date", "July 13, 2026"],
  ["Platforms", "PC (Steam), PlayStation 5 (digital + physical), Xbox Series X|S"],
  ["Technical Advisor", "LKA RLP — State Criminal Police Office Rhineland-Palatinate"],
  ["Demo", "Free, live now on Steam (Steam Next Fest)"],
  ["Pre-Launch Momentum", "100,000+ wishlists, 80,000+ demo downloads (per developer, early July 2026)"],
  ["Price", "Not officially announced yet"],
  ["System Requirements", "Not officially announced yet"],
];

export const forensicsCrimeSceneDetectiveRelatedGuides: GameGuideLink[] = [
  {
    title: "Forensics: Crime Scene Detective Guide Hub",
    href: forensicsCrimeSceneDetective.hubPath,
    description:
      "Start here for release facts, platform details, and upcoming case-walkthrough coverage.",
  },
  ...forensicsCrimeSceneDetective.guideLinks,
];

export function getForensicsCrimeSceneDetectiveRelated(excludeHref: string) {
  return forensicsCrimeSceneDetectiveRelatedGuides
    .filter((guide) => guide.href !== excludeHref)
    .slice(0, 6);
}

const forensicsCrimeSceneDetectiveKeywords = [
  "forensics crime scene detective",
  "forensics crime scene detective release date",
  "forensics crime scene detective platforms",
  "forensics crime scene detective price",
  "forensics crime scene detective demo",
  "forensics crime scene detective system requirements",
  "forensics crime scene detective walkthrough",
  "forensics crime scene detective LKA RLP",
];

export function createForensicsCrimeSceneDetectiveMetadata({
  title,
  description,
  canonical,
  image = forensicsCrimeSceneDetectiveImages.hero,
}: {
  title: string;
  description: string;
  canonical: string;
  image?: string;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: forensicsCrimeSceneDetectiveKeywords,
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
