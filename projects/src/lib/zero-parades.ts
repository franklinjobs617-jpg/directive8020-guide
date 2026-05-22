import type { Metadata } from 'next';
import { zeroParades, type GameGuideLink } from '@/lib/games';

export const zeroParadesLastModified = '2026-05-21';
export const zeroParadesSteamUrl =
  'https://store.steampowered.com/app/2863680/ZERO_PARADES_For_Dead_Spies/';
export const zeroParadesOfficialUrl = 'https://zeroparades.com/';
export const zeroParadesEpicUrl = 'https://store.epicgames.com/en-US/p/zero-parades-ed90f8';
export const zeroParadesGogUrl = 'https://www.gog.com/en/game/zero_parades';
export const zeroParadesRedditLaunchUrl =
  'https://www.reddit.com/r/ZeroParades/comments/1s8qdro/zero_parades_for_dead_spies_arrives_on_pc_may_21st/';
export const zeroParadesSupportEmail = 'support@zaumstudio.com';

export const zeroParadesImages = {
  hero: '/games/zero-parades/hero.jpg',
  card: '/games/zero-parades/card.jpg',
  screenshot1: '/games/zero-parades/screenshots/zero-parades-screenshot-1.jpg',
  screenshot2: '/games/zero-parades/screenshots/zero-parades-screenshot-2.jpg',
  screenshot3: '/games/zero-parades/screenshots/zero-parades-screenshot-3.jpg',
  screenshot4: '/games/zero-parades/screenshots/zero-parades-screenshot-4.jpg',
  screenshot5: '/games/zero-parades/screenshots/zero-parades-screenshot-5.jpg',
  screenshot6: '/games/zero-parades/screenshots/zero-parades-screenshot-6.jpg',
  screenshot7: '/games/zero-parades/screenshots/zero-parades-screenshot-7.jpg',
  screenshot8: '/games/zero-parades/screenshots/zero-parades-screenshot-8.jpg',
};

export const zeroParadesVideos = [
  {
    id: '6QCWM7WnovE',
    title: 'ZERO PARADES - Features and Gameplay Trailer',
    caption:
      'Official gameplay trailer covering skills, Conditioning, pressure, and espionage RPG structure.',
  },
  {
    id: 'FynVunoMLHA',
    title: 'ZERO PARADES - Developer Showcase',
    caption:
      'Official showcase video for players who want a deeper look before buying.',
  },
  {
    id: 'p540bCD_Hac',
    title: 'ZERO PARADES - Release Date Trailer',
    caption:
      'Official release date trailer announcing the May 21 PC launch window.',
  },
];

export const zeroParadesQuickFacts = [
  ['Release date', 'May 21, 2026 for PC.'],
  ['Availability', 'Check your preferred storefront for the live buy button, regional price, and refund policy.'],
  ['Developer / Publisher', 'ZA/UM.'],
  ['Genre', 'Single-player espionage RPG / narrative RPG.'],
  ['Main character', 'Hershel Wilk, alias CASCADE, a burnt-out operant.'],
  ['Core systems', '15 skills, Conditioning, split-second decisions, Exertion, Fatigue, Anxiety, and Delirium.'],
  ['PC storefronts', 'Available through Steam, Epic Games Store, and GOG.'],
  ['Steam Deck', 'Steam Deck Verified; text size and controller comfort are still worth checking during the first session.'],
  ['PS5', 'PlayStation pages say 2026, but no exact PS5 date is confirmed.'],
  ['Price', '$39.99 in the US; local storefront prices can differ by region.'],
  ['Languages', 'English audio; text support includes English, German, Russian, Simplified Chinese, and Spanish - Latin America.'],
  ['Later languages', 'French, Italian, Japanese, Korean, Polish, Portuguese (Brazilian), Traditional Chinese, and Turkish are planned as free updates later in 2026.'],
];

export const zeroParadesFeatureRows = [
  ['Single-player', 'Listed on Steam.'],
  ['Steam Achievements', 'Listed on Steam.'],
  ['Partial controller support', 'Listed on Steam; test prompts before committing to controller-only play.'],
  ['Steam Cloud', 'Listed on Steam.'],
  ['Save Anytime', 'Listed on Steam, important for a consequence-heavy RPG.'],
  ['Accessibility', 'Adjustable text size, camera comfort, color alternatives, custom volume controls, keyboard-only, mouse-only, playable without timed input, subtitle options, and stereo sound are listed on Steam.'],
  ['Remote Play', 'Steam lists Remote Play on Phone and Tablet.'],
  ['Multiplayer', 'Not listed; treat ZERO PARADES as single-player.'],
];

export const zeroParadesSpecs = [
  ['OS', 'Windows 10', 'Windows 11'],
  ['Processor', 'Intel Core i5 6500', 'Intel Core i5-10400'],
  ['Memory', '16 GB RAM', '16 GB RAM'],
  ['Graphics', 'Nvidia GTX 1060 6GB GDDR5', 'Nvidia RTX 2070 8GB GDDR6'],
  ['DirectX', 'Version 11', 'Version 11'],
  ['64-bit', 'Required', 'Required'],
  ['Storage', 'Not listed on the Steam requirements section', 'Not listed on the Steam requirements section'],
];

export const zeroParadesBeginnerRows = [
  ['Do not chase perfect rolls', 'Failure is part of the RPG structure. Treat failed checks as route information unless the consequence blocks your goal.'],
  ['Build around 15 skills', 'Pick an espionage identity first, then invest in skills that support how you want Hershel to solve problems.'],
  ['Use Conditioning deliberately', 'Conditioning can change Hershel and the game rules, so avoid random swaps before you understand the cost.'],
  ['Spend Exertion carefully', 'Exertion can push dice rolls in your favor, but Fatigue, Anxiety, and Delirium create long-term pressure.'],
  ['Read agendas before acting', 'Informants, rivals, bankers, techno-fascists, doppelgangers, and strange locals all have motives. Dialogue is investigation.'],
  ['Save before risky conversations', 'Steam lists Save Anytime, so use manual saves before high-pressure checks or irreversible assignment choices.'],
];

export const zeroParadesWorthItRows = [
  ['Buy now if', 'You want a ZA/UM narrative RPG with Disco Elysium lineage, espionage, skill checks, failure states, and dense political weirdness.'],
  ['Wait if', 'You need the PS5 version, more player reviews, regional price confirmation, or proof that launch bugs are resolved.'],
  ['Best fit', 'Players who enjoy reading, investigation, internal character systems, and consequence-heavy dialogue.'],
  ['Poor fit', 'Players looking for action combat, co-op, loot grinding, or a short linear spy thriller.'],
  ['Price check', 'The US price is $39.99; check local Steam, Epic, or GOG pricing before buying.'],
];

export const zeroParadesLaunchCheckRows = [
  ['PC availability', 'May 21, 2026 PC launch is announced for Steam, Epic Games Store, and GOG; check the live buy button in your region.'],
  ['PS5 timing', 'PS5 is announced for 2026, but no exact PS5 launch date is public yet.'],
  ['Price', 'The US price is $39.99; local storefront prices can differ.'],
  ['Language', 'English has full audio; launch text support includes German, Russian, Simplified Chinese, and Spanish - Latin America.'],
  ['Controller', 'Steam lists partial controller support, so test controls and UI readability early.'],
  ['Steam Deck', 'Steam Deck Verified; test text size, menus, and cloud saves before a long session.'],
  ['Later localization', 'French, Italian, Japanese, Korean, Polish, Portuguese (Brazilian), Traditional Chinese, and Turkish are planned as free updates later in 2026.'],
];

export const zeroParadesSourceRows = [
  {
    claim: 'When does the PC version release, and what does Steam list?',
    source: 'Steam store',
    status: 'verified' as const,
    href: zeroParadesSteamUrl,
    note: 'Check Steam for the buy button, Windows requirements, language list, features, screenshots, and trailers.',
  },
  {
    claim: 'Who made ZERO PARADES, and where is the official site?',
    source: 'Official site / Steam store',
    status: 'verified' as const,
    href: zeroParadesOfficialUrl,
    note: 'Use the official site when you want publisher links, press assets, and platform wording from ZA/UM.',
  },
  {
    claim: 'What kind of RPG is ZERO PARADES?',
    source: 'Steam store',
    status: 'verified' as const,
    href: zeroParadesSteamUrl,
    note: 'Useful before starting because it names the core RPG systems: skills, Conditioning, Exertion, and pressure states.',
  },
  {
    claim: 'Is the PS5 version launching on the same day as PC?',
    source: 'Official PlayStation-facing coverage',
    status: 'verified' as const,
    href: zeroParadesOfficialUrl,
    note: 'Useful for console players because the PC launch and PS5 release timing are separate.',
  },
  {
    claim: 'Where can PC players buy it, and what is the US price?',
    source: 'ZA/UM official Reddit launch post',
    status: 'verified' as const,
    href: zeroParadesRedditLaunchUrl,
    note: 'Useful for store choice, US price, Steam Deck support, and planned localization updates.',
  },
  {
    claim: 'Are Epic Games Store and GOG options available?',
    source: 'Epic Games Store / GOG',
    status: 'verified' as const,
    href: zeroParadesGogUrl,
    note: 'Useful when choosing between Steam features, Epic library ownership, and GOG availability.',
  },
  {
    claim: 'What early critic blurbs are visible before broad player consensus?',
    source: 'Steam store review snippets',
    status: 'verified' as const,
    href: zeroParadesSteamUrl,
    note: 'Read these as short critic blurbs, not as a full score roundup.',
  },
];

export const zeroParadesRelatedGuides: GameGuideLink[] = [
  {
    title: 'ZERO PARADES Guide Hub',
    href: zeroParades.hubPath,
    description:
      'Start here for launch status, PC/PS5 notes, beginner advice, specs, Steam Deck setup, and buying guidance.',
  },
  ...zeroParades.guideLinks,
];

export function getZeroParadesRelated(excludeHref: string) {
  return zeroParadesRelatedGuides.filter((guide) => guide.href !== excludeHref).slice(0, 6);
}

const zeroParadesKeywords = [
  'ZERO PARADES For Dead Spies',
  'ZERO PARADES guide',
  'ZERO PARADES walkthrough',
  'ZERO PARADES GOG',
  'ZERO PARADES PS5',
  'ZERO PARADES controller support',
  'ZERO PARADES best build',
  'ZERO PARADES length',
  'ZERO PARADES system requirements',
  'ZERO PARADES Steam Deck',
  'ZERO PARADES release date',
  'ZERO PARADES beginner guide',
  'ZERO PARADES Disco Elysium',
  'ZERO PARADES worth it',
  'ZERO PARADES price',
];

export function createZeroParadesMetadata({
  title,
  description,
  canonical,
  image = zeroParadesImages.hero,
}: {
  title: string;
  description: string;
  canonical: string;
  image?: string;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: zeroParadesKeywords,
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
