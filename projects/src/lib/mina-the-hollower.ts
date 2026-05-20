import type { Metadata } from 'next';
import { minaTheHollower, type GameGuideLink } from '@/lib/games';

export const minaLastModified = '2026-05-20';
export const minaSteamUrl = 'https://store.steampowered.com/app/1875580/Mina_the_Hollower/';
export const minaOfficialUrl = 'https://www.yachtclubgames.com/games/mina-the-hollower';
export const minaSupportUrl = 'https://www.yachtclubgames.com/support';
export const minaSteamDiscussionsUrl = 'https://steamcommunity.com/app/1875580/discussions/';

export const minaImages = {
  hero: '/games/mina-the-hollower/hero.jpg',
  card: '/games/mina-the-hollower/card.jpg',
  background: '/games/mina-the-hollower/background.jpg',
  trailerA: '/games/mina-the-hollower/trailer-a.jpg',
  trailerB: '/games/mina-the-hollower/trailer-b.jpg',
  screenshot1: '/games/mina-the-hollower/screenshots/mina-the-hollower-screenshot-1.jpg',
  screenshot2: '/games/mina-the-hollower/screenshots/mina-the-hollower-screenshot-2.jpg',
  screenshot3: '/games/mina-the-hollower/screenshots/mina-the-hollower-screenshot-3.jpg',
  screenshot4: '/games/mina-the-hollower/screenshots/mina-the-hollower-screenshot-4.jpg',
  screenshot5: '/games/mina-the-hollower/screenshots/mina-the-hollower-screenshot-5.jpg',
  screenshot6: '/games/mina-the-hollower/screenshots/mina-the-hollower-screenshot-6.jpg',
  screenshot7: '/games/mina-the-hollower/screenshots/mina-the-hollower-screenshot-7.jpg',
  screenshot8: '/games/mina-the-hollower/screenshots/mina-the-hollower-screenshot-8.jpg',
  screenshot9: '/games/mina-the-hollower/screenshots/mina-the-hollower-screenshot-9.jpg',
  screenshot10: '/games/mina-the-hollower/screenshots/mina-the-hollower-screenshot-10.jpg',
};

export const minaVideos = [
  {
    id: 'kwX7lQeRKuc',
    title: 'Mina the Hollower - True Final Release Date',
    caption: 'Official Yacht Club Games video for final launch-date messaging and current release context.',
  },
  {
    id: '_Fx0aJCRRpE',
    title: 'Mina the Hollower - Announcement Trailer',
    caption: 'Official Yacht Club Games trailer for tone, combat, burrowing, and gothic action-adventure context.',
  },
];

export const minaQuickFacts = [
  ['Steam date', 'Steam currently lists May 28, 2026 and coming_soon=true.'],
  ['Announced date', 'Yacht Club Games and platform coverage announce May 29, 2026.'],
  ['Developer / Publisher', 'Yacht Club Games'],
  ['Genre', 'Gothic action-adventure with 8-bit Game Boy Color-style visuals.'],
  ['Core actions', 'Burrow, dodge, whip enemies with Nightstar, use sidearms, equip trinkets, and explore secrets.'],
  ['Steam platforms', 'Windows, macOS, and Linux.'],
  ['Console platforms', 'PS5, Xbox Series X|S, Nintendo Switch, and Nintendo Switch 2 are announced.'],
  ['Steam features', 'Single-player, Steam Achievements, full controller support, Steam Cloud, Remote Play, and Family Sharing.'],
];

export const minaWindowsSpecs = [
  ['OS', 'Windows 8 or later'],
  ['Processor', 'Intel Core 4th generation (Haswell, 2013) / AMD Bulldozer (2011)'],
  ['Memory', '4 GB RAM'],
  ['Graphics', 'Intel HD 5000 (2013) / Radeon HD 7000 (2012) / Nvidia 900 Series (Maxwell, 2014)'],
  ['DirectX', 'Version 12'],
  ['Storage', '860 MB available space'],
  ['Recommended', 'Steam only lists a 64-bit processor and operating system; no detailed recommended tier is published yet.'],
];

export const minaMacLinuxSpecs = [
  ['macOS minimum', 'macOS 11 or later, Apple M1 or later, 4 GB RAM, 860 MB storage.'],
  ['Linux minimum', 'Intel Core 4th generation / AMD Bulldozer, 4 GB RAM, Intel HD 5000 / Radeon HD 7000 / Nvidia 900 Series, 860 MB storage.'],
  ['64-bit note', 'Steam lists a 64-bit processor and operating system for PC requirements.'],
  ['Controller', 'Steam lists full controller support.'],
  ['Cloud', 'Steam lists Steam Cloud support.'],
];

export const minaFeatureRows = [
  ['Single-player', 'Listed on Steam.'],
  ['Steam Achievements', 'Listed on Steam.'],
  ['Full controller support', 'Listed on Steam.'],
  ['Steam Cloud', 'Listed on Steam.'],
  ['Remote Play', 'Steam lists Remote Play on Phone, Tablet, and TV.'],
  ['Family Sharing', 'Listed on Steam.'],
  ['Co-op or multiplayer', 'Not listed on Steam; treat Mina the Hollower as single-player.'],
];

export const minaBeginnerRows = [
  ['Learn burrowing first', 'Use burrowing as movement, defense, and routing before treating it as a speed trick.'],
  ['Respect the whip range', 'Nightstar is the baseline weapon; learn its reach and recovery before relying on sidearms.'],
  ['Spend sidearms deliberately', 'Sidearms should solve specific threats or openings rather than replace careful movement.'],
  ['Read trinkets as builds', 'Trinkets change play style, so test one change at a time instead of swapping everything at once.'],
  ['Explore before pushing forward', 'Steam describes secrets and interconnected level design, so check side paths before leaving an area.'],
];

export const minaWorthItRows = [
  ['Buy at launch if', 'You like compact action-adventure games, gothic pixel art, boss fights, secrets, and skill-based movement.'],
  ['Wait if', 'You need reviews, exact boss or completion-time data, a sale, or confirmation of launch performance on your platform.'],
  ['Best platform fit', 'Steam Deck and controller players have strong early signals because Steam lists full controller support and Steam Deck Verified has been reported.'],
  ['Not a fit if', 'You are looking for co-op, open-world survival, live-service progression, or a large 3D RPG.'],
  ['Trust signal', 'Yacht Club Games is known for Shovel Knight, and Mina is being sold as a new action-adventure from that team.'],
];

export const minaLaunchCheckRows = [
  ['Date wording', 'Use May 28 on Steam and May 29 in announcement coverage; explain the storefront/time-zone difference instead of hiding it.'],
  ['Demo progress', 'Do not promise demo save transfer unless the store or developer confirms it.'],
  ['Steam Deck', 'Check the live Steam Deck rating on launch week even though pre-release coverage reports Verified status.'],
  ['Price', 'Verify the live regional price on Steam or console storefronts at launch.'],
  ['Reviews', 'Use player and critic reviews only after they are published; do not infer scores from Shovel Knight.'],
];

export const minaSourceRows = [
  {
    claim: 'Steam lists Mina the Hollower as coming soon with a May 28, 2026 date and Windows, macOS, and Linux support.',
    source: 'Steam store',
    status: 'verified' as const,
    href: minaSteamUrl,
    note: 'Use for Steam date, PC/Mac/Linux support, features, and system requirements.',
  },
  {
    claim: 'Yacht Club Games is the developer and publisher, and the game is presented as a gothic action-adventure from the Shovel Knight team.',
    source: 'Official site',
    status: 'verified' as const,
    href: minaOfficialUrl,
    note: 'Use for developer, publisher, genre framing, and official feature language.',
  },
  {
    claim: 'Platform coverage reports a May 29, 2026 launch for PS5, Xbox Series, Switch, Switch 2, and PC.',
    source: 'Gematsu',
    status: 'working' as const,
    href: 'https://www.gematsu.com/2026/05/mina-the-hollower-launches-may-29',
    note: 'Use for console platform and announced date context; verify storefronts again near launch.',
  },
  {
    claim: 'Steam lists minimum Windows specs: Windows 8+, 4 GB RAM, DirectX 12, and 860 MB storage.',
    source: 'Steam store',
    status: 'verified' as const,
    href: minaSteamUrl,
    note: 'Use for the system-requirements page without inventing a detailed recommended tier.',
  },
  {
    claim: 'Steam Deck Verified status has been reported before launch.',
    source: 'RPG Site',
    status: 'working' as const,
    href: 'https://www.rpgsite.net/news/20347-mina-the-hollower-steam-deck-verified-valve-rating',
    note: 'Use as a pre-launch signal, then re-check the live Steam Deck badge after release.',
  },
  {
    claim: 'Community discussion is focused on launch timing, demo impressions, difficulty, platform choice, and whether the game fits Shovel Knight fans.',
    source: 'Reddit discussion',
    status: 'working' as const,
    href: 'https://www.reddit.com/r/MinaTheHollower/',
    note: 'Use as player-question context only, not as official mechanics or pricing proof.',
  },
];

export const minaRelatedGuides: GameGuideLink[] = [
  {
    title: 'Mina the Hollower Guide Hub',
    href: minaTheHollower.hubPath,
    description: 'Start here for release facts, platform notes, official features, sources, and spoiler-light guide routes.',
  },
  ...minaTheHollower.guideLinks,
];

export function getMinaRelated(excludeHref: string) {
  return minaRelatedGuides.filter((guide) => guide.href !== excludeHref).slice(0, 6);
}

const minaKeywords = [
  'Mina the Hollower',
  'Mina the Hollower guide',
  'Mina the Hollower release date',
  'Mina the Hollower system requirements',
  'Mina the Hollower Steam Deck',
  'Mina the Hollower beginner guide',
  'Mina the Hollower worth it',
];

export function createMinaMetadata({
  title,
  description,
  canonical,
  image = minaImages.hero,
}: {
  title: string;
  description: string;
  canonical: string;
  image?: string;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: minaKeywords,
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
