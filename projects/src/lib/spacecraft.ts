import type { Metadata } from "next";
import { spacecraft, type GameGuideLink } from "@/lib/games";

export const spacecraftLastModified = "2026-06-17";
export const spacecraftSteamUrl =
  "https://store.steampowered.com/app/3276050/SpaceCraft/";
export const spacecraftOfficialUrl = "https://shirogames.com/";

export const spacecraftSourceRows = [
  {
    claim: "When did SpaceCraft enter Early Access, and what does Steam list for requirements and price?",
    source: "Steam store",
    status: "verified" as const,
    href: spacecraftSteamUrl,
    note: "Use Steam for Early Access date (Jun 11, 2026), PC requirements, price, and current review signal.",
  },
  {
    claim: "Who developed SpaceCraft, and what other games does the studio make?",
    source: "Shiro Games official site",
    status: "verified" as const,
    href: spacecraftOfficialUrl,
    note: "Use the developer page for studio background and official announcements about SpaceCraft's roadmap.",
  },
];


export const spacecraftImages = {
  hero: "/games/spacecraft/hero.webp",
  card: "/games/spacecraft/card.webp",
  siteHero: "/games/spacecraft/site-hero.webp",
  shipBuilding: "/games/spacecraft/ship-building.webp",
  mining: "/games/spacecraft/mining.webp",
  automation: "/games/spacecraft/automation.webp",
  combat: "/games/spacecraft/combat.webp",
  trading: "/games/spacecraft/trading.webp",
  worthIt: "/games/spacecraft/worth-it.webp",
};

export const spacecraftVideos = {
  overview: {
    videoId: "nope",
    title: "SpaceCraft | Early Access | OUT NOW!",
    caption:
      "Official SpaceCraft Early Access launch trailer from Shiro Games.",
  },
};

export const spacecraftQuickFacts = [
  ["Developer", "Shiro Games"],
  ["Publisher", "Shiro Games"],
  ["Release Date", "June 11, 2026 (Early Access)"],
  ["Platform", "PC via Steam (Windows only)"],
  ["Price", "$29.99 ($26.99 launch sale)"],
  ["Genre", "Space Survival MMO / Automation / Building"],
  ["Player Count", "4,000+ peak concurrent (Early Access launch)"],
  ["Server Status", "Online (always-online MMO)"],
  ["Steam Review", "Mixed (69% positive)"],
];

export const spacecraftSpecRows = [
  ["OS", "Windows 10 64-bit", "Windows 10 64-bit"],
  ["CPU", "Intel i3 8350K", "Intel i5 11400T"],
  ["RAM", "8 GB", "16 GB"],
  ["GPU", "Nvidia Geforce 1060", "Nvidia Geforce 3060"],
  ["Storage", "25 GB available space", "25 GB available space"],
  ["DirectX", "Version 11", "Version 12"],
  ["Target", "1080p @ 30 fps", "1440p @ 60 fps"],
  ["Network", "Broadband Internet (always-online MMO)", "Broadband Internet"],
];

export const spacecraftStartRows = [
  [
    "I want to know when it released",
    "Release date, platforms, and price",
    "/games/spacecraft/release-date",
  ],
  [
    "I'm completely new",
    "Beginner guide covering first hour",
    "/games/spacecraft/beginner-guide",
  ],
  [
    "I want to build a better ship",
    "Ship building designs & modules",
    "/games/spacecraft/ship-building",
  ],
  [
    "I need to find resources",
    "Mining guide for asteroids & ores",
    "/games/spacecraft/mining-guide",
  ],
  [
    "I want to automate production",
    "Factory & automation setup",
    "/games/spacecraft/factory-automation",
  ],
  [
    "I need to make money",
    "Trading routes & economy",
    "/games/spacecraft/trading-economy",
  ],
  [
    "I want to join a faction",
    "Factions reputation & alliances",
    "/games/spacecraft/factions-guide",
  ],
  [
    "I need combat help",
    "Weapons, shields & PvP tactics",
    "/games/spacecraft/combat-guide",
  ],
  [
    "I want to play with friends",
    "Multiplayer, co-op, corporations",
    "/games/spacecraft/multiplayer-server",
  ],
  [
    "I need base defense",
    "Base building & defense turrets",
    "/games/spacecraft/base-building",
  ],
  [
    "What should I research first?",
    "Tech tree & upgrade order",
    "/games/spacecraft/tech-tree",
  ],
  [
    "Will it run on my PC?",
    "System requirements & performance",
    "/games/spacecraft/system-requirements",
  ],
  [
    "Is it worth buying?",
    "Early Access review & buying advice",
    "/games/spacecraft/is-it-worth-it",
  ],
];

export const spacecraftRelatedGuides: GameGuideLink[] = [
  {
    title: "SpaceCraft Guide Hub",
    href: spacecraft.hubPath,
    description:
      "Start here for release status, Early Access scope, beginner route, ship building, mining, automation, trading, factions, combat, and buying advice.",
  },
  ...spacecraft.guideLinks,
];

export function getSpacecraftRelated(excludeHref: string) {
  return spacecraftRelatedGuides
    .filter((guide) => guide.href !== excludeHref)
    .slice(0, 6);
}

const spacecraftKeywords = [
  "space craft guide",
  "spacecraft guide",
  "spacecraft beginner guide",
  "spacecraft ship building",
  "spacecraft mining guide",
  "spacecraft automation",
  "spacecraft trading",
  "spacecraft combat",
  "spacecraft factions",
  "spacecraft multiplayer",
  "spacecraft base building",
  "spacecraft tech tree",
  "spacecraft system requirements",
  "spacecraft steam deck",
  "spacecraft tips",
  "spacecraft worth it",
  "spacecraft ship list",
  "spacecraft how to",
  "spacecraft walkthrough",
  "spacecraft shiro games",
  "spacecraft early access",
  "spacecraft review",
];

export function createSpacecraftMetadata({
  title,
  description,
  canonical,
  image = spacecraftImages.hero,
}: {
  title: string;
  description: string;
  canonical: string;
  image?: string;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: spacecraftKeywords,
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
