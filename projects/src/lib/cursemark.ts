import type { Metadata } from "next";
import { cursemark, type GameGuideLink } from "@/lib/games";

export const cursemarkLastModified = "2026-06-17";
export const cursemarkSteamUrl =
  "https://store.steampowered.com/app/3219180/Cursemark/";
export const cursemarkOfficialUrl = "https://www.madmushroom.gg/games/cursemark";

export const cursemarkImages = {
  hero: "/games/cursemark/hero.webp",
  card: "/games/cursemark/card.webp",
  siteHero: "/games/cursemark/site-hero.webp",
  combat: "/games/cursemark/combat.webp",
  runes: "/games/cursemark/runes.webp",
  bosses: "/games/cursemark/bosses.webp",
  worthIt: "/games/cursemark/worth-it.webp",
};

export const cursemarkVideos = {
  launchTrailer: {
    videoId: "nope",
    title: "Cursemark - Launch Trailer",
    caption:
      "Official Cursemark launch trailer. See rune crafting and combat in action.",
  },
};

export const cursemarkQuickFacts = [
  ["Developer", "CLYDE Games (solo developer)."],
  ["Publisher", "Mad Mushroom."],
  ["Release Date", "June 8, 2026 (Early Access)."],
  ["Platform", "PC via Steam (Windows + Linux)."],
  ["Price", "$14.99 ($12.74 launch sale — 15% off)."],
  ["Genre", "Dark Fantasy Action Roguelite / Soulslite."],
  ["Content Scope", "3 biomes, ~6 hours (Early Access)."],
  ["Steam Review", "Very Positive (90%+ positive)."],
];

export const cursemarkSpecRows = [
  ["OS", "Windows 10/11 64-bit", "Windows 10/11 64-bit (also supports Linux Ubuntu 16.04+)"],
  ["Processor", "1.7+ GHz processor", "1.7+ GHz processor"],
  ["Memory", "512 MB RAM", "512 MB RAM"],
];

export const cursemarkStartRows = [
  ["When did it release?", "Early Access launch details for Cursemark, the dark fantasy roguelite from CLYDE Games.", "/games/cursemark/release-date"],
  ["I'm brand new.", "Beginner guide: first runs, Divine Spear pick, rune basics, Botyl healing, and essential survival tips.", "/games/cursemark/beginner-guide"],
  ["How do runes work?", "Rune crafting mechanics: socketing, upgrading, elemental combinations, and hidden synergies.", "/games/cursemark/rune-crafting"],
  ["What's the best build?", "Top weapons, runes, and talisman synergies. Embershot, Voltara, and meta recommendations.", "/games/cursemark/best-builds"],
  ["How do I beat the bosses?", "All boss strategies, attack patterns, weaknesses, and phase-by-phase tactics across 3 biomes.", "/games/cursemark/boss-guide"],
  ["Will it run on my PC?", "System requirements and performance expectations for Cursemark on Windows and Linux.", "/games/cursemark/system-requirements"],
  ["Does it work on Steam Deck?", "Steam Deck compatibility, settings, and handheld tips for Cursemark.", "/games/cursemark/steam-deck"],
  ["Is the game worth $15?", "Early Access review and buying advice for Cursemark — 6 hours of roguelite content.", "/games/cursemark/is-it-worth-it"],
  ["Is this related to Elden Ring?", "No — Cursemark is a standalone dark fantasy roguelite from CLYDE Games, unrelated to Elden Ring.", "/games/cursemark#faq"],
  ["What's the best starting weapon?", "Divine Spear is best for new players — one-shots archers and two-shots most enemies.", "/games/cursemark/beginner-guide"],
];

export const cursemarkRelatedGuides: GameGuideLink[] = [
  {
    title: "Cursemark Guide Hub",
    href: cursemark.hubPath,
    description:
      "Start here for release status, Early Access scope, beginner route, rune crafting, best builds, boss strategies, PC specs, Steam Deck, and buying advice for Cursemark, the dark fantasy roguelite from CLYDE Games.",
  },
  ...cursemark.guideLinks,
];

export function getCursemarkRelated(excludeHref: string) {
  return cursemarkRelatedGuides.filter((guide) => guide.href !== excludeHref).slice(0, 6);
}

const cursemarkKeywords = [
  "cursemark game guide",
  "cursemark roguelite guide",
  "cursemark beginner guide",
  "cursemark runes",
  "cursemark rune crafting",
  "cursemark best builds",
  "cursemark boss guide",
  "cursemark tips",
  "cursemark walkthrough",
  "cursemark weapons",
  "cursemark system requirements",
  "cursemark steam deck",
  "cursemark worth it",
  "cursemark review",
  "cursemark early access",
  "cursemark cl",
  "cursemark dark fantasy",
  "cursemark action roguelite",
  "cursemark how to",
  "cursemark build guide",
];

export function createCursemarkMetadata({
  title,
  description,
  canonical,
  image = cursemarkImages.hero,
}: {
  title: string;
  description: string;
  canonical: string;
  image?: string;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: cursemarkKeywords,
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
