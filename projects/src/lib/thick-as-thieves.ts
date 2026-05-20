import type { Metadata } from 'next';
import { thickAsThieves, type GameGuideLink } from '@/lib/games';

export const thickAsThievesLastModified = '2026-05-20';
export const thickAsThievesSteamUrl = 'https://store.steampowered.com/app/3341000/Thick_As_Thieves/';
export const thickAsThievesOfficialUrl = 'https://megabit-publishing.com/games/thick-as-thieves';
export const thickAsThievesFaqUrl = 'https://megabit-publishing.com/thick-as-thieves-faqs';
export const thickAsThievesSteamDiscussionsUrl = 'https://steamcommunity.com/app/3341000/discussions/';

export const thickAsThievesImages = {
  hero: '/games/thick-as-thieves/hero.webp',
  card: '/games/thick-as-thieves/card.webp',
  feature: '/games/thick-as-thieves/homepage-feature.webp',
  release: '/games/thick-as-thieves/homepage/release-date-platforms-guide.webp',
  soloCoop: '/games/thick-as-thieves/homepage/solo-coop-campaign-guide.webp',
  beginner: '/games/thick-as-thieves/homepage/beginner-stealth-guide.webp',
  contracts: '/games/thick-as-thieves/homepage/contracts-maps-replayability-guide.webp',
  gear: '/games/thick-as-thieves/homepage/gear-loadout-guide.webp',
  lore: '/games/thick-as-thieves/homepage/kilcairn-lore-factions-guide.webp',
  roadmap: '/games/thick-as-thieves/homepage/live-service-roadmap-console-guide.webp',
  specs: '/games/thick-as-thieves/homepage/pc-specs-controller-cloud-guide.webp',
  screenshot1: '/games/thick-as-thieves/screenshots/thick-as-thieves-screenshot-1.webp',
  screenshot2: '/games/thick-as-thieves/screenshots/thick-as-thieves-screenshot-2.webp',
  screenshot3: '/games/thick-as-thieves/screenshots/thick-as-thieves-screenshot-3.webp',
  screenshot4: '/games/thick-as-thieves/screenshots/thick-as-thieves-screenshot-4.webp',
  screenshot5: '/games/thick-as-thieves/screenshots/thick-as-thieves-screenshot-5.webp',
  screenshot6: '/games/thick-as-thieves/screenshots/thick-as-thieves-screenshot-6.webp',
  screenshot7: '/games/thick-as-thieves/screenshots/thick-as-thieves-screenshot-7.webp',
  screenshot8: '/games/thick-as-thieves/screenshots/thick-as-thieves-screenshot-8.webp',
};

export const thickAsThievesVideos = [
  {
    id: 'NZ-uZ1K-KxY',
    title: 'Thick As Thieves - Welcome to Kilcairn',
    caption: 'Official overview video for tone, setting, stealth fantasy, and co-op framing.',
  },
  {
    id: 'NcGUxFveZHU',
    title: 'Thick As Thieves - Gameplay Trailer',
    caption: 'Good visual reference for traversal, heist spaces, and route-focused stealth expectations.',
  },
  {
    id: 'go-dwmrGRHc',
    title: 'Thick As Thieves - Release Date Trailer',
    caption: 'Useful for launch-date context and the current compact campaign positioning.',
  },
];

export const thickAsThievesQuickFacts = [
  ['Release', 'Steam lists May 20, 2026 and still reports coming_soon=true before unlock.'],
  ['Developer', 'OtherSide Entertainment'],
  ['Publisher', 'Megabit Publishing'],
  ['Platform', 'PC via Steam and Epic Games Store; console date not announced.'],
  ['Players', 'Single-player, multi-player, co-op, online co-op'],
  ['Co-op scope', 'Official FAQ says solo or with a partner in crime.'],
  ['Campaign scope', 'Introductory campaign: 2 dynamic replayable maps, 16 missions, at least 4 hours.'],
  ['Launch price', 'Official FAQ lists $4.99 / EUR4.99 / GBP4.99.'],
];

export const thickAsThievesSpecs = [
  ['OS', 'Windows 10', 'Windows 11'],
  ['Processor', 'Intel Core i5-4570 @ 3.2 GHz', 'Intel Core i7-8700 @ 3.2 GHz'],
  ['Memory', '12 GB RAM', '16 GB RAM'],
  ['Graphics', 'NVIDIA GeForce GTX 1060 6GB+ or equivalent', 'NVIDIA GeForce RTX 2070 8GB+ or equivalent'],
  ['DirectX', 'Version 12', 'Version 12'],
  ['Network', 'Broadband Internet connection', 'Broadband Internet connection'],
  ['Storage', '10 GB available space', '10 GB available space'],
  ['Additional notes', 'SSD required', 'SSD required'],
];

export const thickAsThievesSteamFeatureRows = [
  ['Single-player', 'Listed on Steam.'],
  ['Multi-player / co-op / online co-op', 'Listed on Steam; FAQ frames co-op as playing with one partner.'],
  ['Full controller support', 'Listed on Steam.'],
  ['Steam Cloud', 'Listed on Steam.'],
  ['Family Sharing', 'Listed on Steam.'],
  ['Cross-play', 'Not confirmed in current public materials.'],
  ['Console launch', 'Not announced; FAQ says PC launch is the current focus.'],
];

export const thickAsThievesLaunchCheckRows = [
  ['Unlock state', 'Steam still reports coming_soon=true before unlock; check the live store button today.'],
  ['Local price', 'Use official $4.99 / EUR4.99 / GBP4.99 as launch guidance, then verify local Steam currency.'],
  ['Co-op flow', 'Test invite, host progress, reconnect behavior, and whether public matchmaking exists.'],
  ['Controller feel', 'Steam lists full controller support, but sensitivity and prompt behavior need live testing.'],
  ['Steam Cloud', 'Steam lists cloud support; verify sync after the first completed contract.'],
];

export const thickAsThievesWorthItRows = [
  ['Buy today if', 'You want a low-price stealth heist with solo play, two-player co-op, short-session missions, and replayable contracts.'],
  ['Wait if', 'You need a long campaign, a confirmed console version, fixed roadmap cadence, reviews after launch, or proof that the PvPvE pivot worked.'],
  ['Price context', 'Official launch pricing is $4.99 / EUR4.99 / GBP4.99, which matches the compact introductory campaign positioning.'],
  ['Content context', 'Official scope is 2 dynamic replayable maps, 16 missions, at least 4 hours, and 6 gear pieces.'],
  ['Trust signal', 'OtherSide is led by immersive-sim veterans associated with Deus Ex, Thief: Deadly Shadows, Thief: The Dark Project, and Thief: The Metal Age.'],
];

export const thickAsThievesBeginnerRows = [
  ['Read the room first', 'Pause at entry and identify patrols, sightlines, light, exits, and one safe reset point.'],
  ['Plan exit before loot', 'Do not commit to valuables until you know how to leave after a mistake.'],
  ['Move with purpose', 'Small, deliberate moves beat sprinting through unknown rooms.'],
  ['Use co-op roles', 'One player watches routes while the other commits to the risky interaction.'],
  ['Abort early', 'If suspicion starts chaining, leave with partial success instead of turning one mistake into a failed run.'],
];

export const thickAsThievesCampaignRows = [
  ['Maps', '2 dynamic replayable maps in current official messaging.'],
  ['Missions', '16 missions in the introductory campaign.'],
  ['Length', 'At least 4 hours, before replay learning and alternate approaches.'],
  ['Gear', '6 pieces of gear are described in launch messaging.'],
  ['Replay value', 'Should come from route learning, contract variation, co-op planning, and gear choices.'],
];

export const thickAsThievesGearRows = [
  ['Information gear', 'Prioritize tools that help read patrols, routes, or risk before committing.'],
  ['Commitment gear', 'Use tools that help secure the objective only after an exit plan exists.'],
  ['Recovery gear', 'Value tools that help reset after a mistake, especially in solo play.'],
  ['Co-op support', 'A partner does not remove the need for information; it makes clear callouts more valuable.'],
  ['Unverified details', 'Exact item names, stats, costs, cooldowns, and unlock order need launch testing.'],
];

export const thickAsThievesSourceRows = [
  {
    claim: 'Steam lists Thick As Thieves for May 20, 2026 and reports coming_soon=true before unlock.',
    source: 'Steam store',
    status: 'verified' as const,
    href: thickAsThievesSteamUrl,
    note: 'Use for release date, Steam features, PC specs, platform, developer, and publisher.',
  },
  {
    claim: 'Gematsu reports the PC launch is planned for Steam and Epic Games Store, with no PS5 or Xbox Series date announced.',
    source: 'Gematsu',
    status: 'working' as const,
    href: 'https://www.gematsu.com/2026/04/thick-as-thieves-for-pc-launches-may-20',
    note: 'Use as platform context beyond the Steam store; verify Epic availability at launch.',
  },
  {
    claim: 'Steam lists minimum and recommended PC specs, including DirectX 12, broadband internet, 10 GB storage, and SSD required.',
    source: 'Steam store',
    status: 'verified' as const,
    href: thickAsThievesSteamUrl,
    note: 'Sets the PC requirements baseline without inventing performance targets.',
  },
  {
    claim: 'Official FAQ says the game can be played solo or with a partner in crime and is not currently a live service game.',
    source: 'Megabit FAQ',
    status: 'verified' as const,
    href: thickAsThievesFaqUrl,
    note: 'Use for co-op scope, live-service status, console caution, and post-launch expectations.',
  },
  {
    claim: 'Official release messaging describes an introductory campaign with 2 dynamic replayable maps, 16 missions, at least 4 hours, and 6 pieces of gear.',
    source: 'Megabit Publishing',
    status: 'verified' as const,
    href: thickAsThievesOfficialUrl,
    note: 'Use for campaign-scope and value guidance, with no inflated hour-count claims.',
  },
  {
    claim: 'PC Gamer coverage reports the game pivoted from the earlier PvPvE concept to two-player co-op and single-player focus.',
    source: 'PC Gamer',
    status: 'working' as const,
    href: 'https://www.pcgamer.com/games/action/warren-spectors-multiplayer-thief-successor-changes-direction-instead-of-pvpve-its-now-focusing-on-2-player-co-op-and-singleplayer/',
    note: 'Use as expectation context for players comparing old trailers with the launch product.',
  },
  {
    claim: 'Reddit discussion around the release is focused on whether the new small-scale stealth campaign is a pivot from the earlier PvPvE pitch.',
    source: 'Reddit discussion',
    status: 'working' as const,
    href: 'https://www.reddit.com/r/Games/comments/1kp9rux/thick_as_thieves_launching_may_20/',
    note: 'Use as player-expectation signal only, not as official product scope.',
  },
  {
    claim: 'Official YouTube trailers show stealth routes, city infiltration, heist tone, and co-op positioning.',
    source: 'YouTube trailers',
    status: 'working' as const,
    href: 'https://www.youtube.com/watch?v=NZ-uZ1K-KxY',
    note: 'Use for visual context and user questions, not for unlisted mechanics.',
  },
];

export const thickAsThievesRelatedGuides: GameGuideLink[] = [
  {
    title: 'Thick As Thieves Guide Hub',
    href: thickAsThieves.hubPath,
    description: 'Start here for release facts, guide map, official scope, videos, and launch-day checks.',
  },
  ...thickAsThieves.guideLinks,
];

export function getThickAsThievesRelated(excludeHref: string) {
  return thickAsThievesRelatedGuides.filter((guide) => guide.href !== excludeHref).slice(0, 6);
}

const thickAsThievesKeywords = [
  'Thick As Thieves',
  'Thick As Thieves guide',
  'Thick As Thieves release date',
  'Thick As Thieves co-op',
  'Thick As Thieves beginner guide',
  'Thick As Thieves system requirements',
  'Thick As Thieves contracts',
  'Thick As Thieves gear',
  'Thick As Thieves console',
];

export function createThickAsThievesMetadata({
  title,
  description,
  canonical,
  image = thickAsThievesImages.hero,
}: {
  title: string;
  description: string;
  canonical: string;
  image?: string;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: thickAsThievesKeywords,
    authors: [{ name: 'Enjoy4Game Guides' }],
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [image],
      type: 'article',
      siteName: 'Enjoy4Game Guides',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}
