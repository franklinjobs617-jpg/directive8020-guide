import type { Metadata } from 'next';
import { gateGuardSimulator, type GameGuideLink } from '@/lib/games';

export const gateGuardLastModified = '2026-06-09';
export const gateGuardSteamUrl =
 'https://store.steampowered.com/app/4111570/Gate_Guard_Simulator/';
export const gateGuardSteamCommunityUrl =
 'https://steamcommunity.com/app/4111570';
export const gateGuardRaijinUrl = 'https://raijin.io/games/gate-guard-simulator';
export const gateGuardPCGamerUrl =
 'https://www.pcgamer.com/games/sim/gate-guard-simulator-is-papers-please-with-fewer-terrorists-more-geese-and-the-chance-to-throw-people-into-a-moat/';
export const gateGuardGamesRadarUrl =
 'https://www.gamesradar.com/games/simulation/protect-your-castle-stronghold-with-paperwork-and-punishment-in-gate-guard-simulator/';

export const gateGuardImages = {
 hero: '/games/gate-guard-simulator/screenshot-1.jpg',
 header: '/games/gate-guard-simulator/header.jpg',
 capsule: '/games/gate-guard-simulator/capsule.jpg',
 inspect: '/games/gate-guard-simulator/screenshot-1.jpg',
 paperwork: '/games/gate-guard-simulator/screenshot-2.jpg',
 crowd: '/games/gate-guard-simulator/screenshot-3.jpg',
 tools: '/games/gate-guard-simulator/screenshot-4.jpg',
 gate: '/games/gate-guard-simulator/screenshot-5.jpg',
 decision: '/games/gate-guard-simulator/screenshot-6.jpg',
};

export const gateGuardQuickFacts = [
 ['Current status', 'Coming soon on Steam; Steam API lists the release window as 2026.'],
 ['Playable now?', 'Not fully released. Steam has a Playtest request entry, so testing access is the current player action.'],
 ['Developer / Publisher', 'Redox Interactive / Forklift Interactive.'],
 ['Confirmed platform', 'Windows PC via Steam. Mac, Linux, Xbox, PlayStation, and Switch are not confirmed by Steam API data.'],
 ['Genre tags', 'Casual, Indie, Simulation.'],
 ['Steam categories', 'Single-player, Full controller support, and Family Sharing.'],
 ['Language', 'English, with full audio support listed by Steam API data.'],
 ['Minimum OS', 'Windows 10 64-bit.'],
 ['Minimum CPU', 'Intel Core i5-7400 or AMD Ryzen 5 1600.'],
 ['Minimum RAM', '8 GB RAM.'],
 ['Minimum GPU', 'NVIDIA GeForce GTX 1650 4 GB, AMD Radeon RX 570, or AMD Radeon RX 6500.'],
 ['Storage', '6 GB available space; SSD recommended by Steam API data.'],
];

export const gateGuardSearchDemandRows = [
 ['release date', 'Strongest pre-launch intent. Users want to know whether 2026 is final and whether a specific date exists.'],
 ['playtest', 'High-value intent because the game is not fully released and Steam exposes a Playtest request path.'],
 ['Steam', 'Navigational and status intent: users want the official page, wishlist, platform, and feature labels.'],
 ['Xbox / PS5', 'Platform intent. Current answer is not confirmed, so the page must say that directly.'],
 ['gameplay', 'Research intent. Users want to understand the inspection loop before wishlisting or requesting playtest access.'],
 ['demo / price', 'Unresolved intent. Steam API does not provide a public price or full demo release status at this stage.'],
];

export const gateGuardGameplayRows = [
 ['Inspect arrivals', 'Check seals, papers, symbols, behavior, and stated reasons for entry before allowing a traveler through the gate.'],
 ['Expose bad actors', 'Steam copy mentions smugglers and witches, so the core loop is about catching hidden risk rather than only matching names.'],
 ['Make moral decisions', 'The Steam description asks whether you uphold the law or break it for gain, so bribes and self-interest are part of the pitch.'],
 ['Manage consequences', 'Media previews frame the game around paperwork, punishment, and castle-gate authority, which implies failure and enforcement pressure.'],
 ['Compare carefully', 'It is fair to compare the vibe to Papers, Please, but the setting, fantasy suspicion, and medieval gate fantasy are distinct.'],
];

export const gateGuardPlatformRows = [
 ['PC Steam', 'Confirmed', 'Steam API lists Windows support and a Coming Soon Steam page.'],
 ['Playtest', 'Confirmed entry', 'Steam exposes a Playtest request option before full release. Access is not guaranteed.'],
 ['Xbox', 'Not confirmed', 'Google Suggest shows demand, but no official Steam/API platform data confirms Xbox.'],
 ['PlayStation 5', 'Not confirmed', 'Google Suggest shows demand, but no official Steam/API platform data confirms PS5.'],
 ['Nintendo Switch', 'Not confirmed', 'No official source checked here confirms Switch.'],
 ['Steam Deck', 'Unknown', 'Full controller support is listed, but Steam Deck verification is not the same thing and is not confirmed.'],
];

export const gateGuardContentPlanRows = [
 ['Do now', 'One pre-release hub covering release date, playtest, platforms, gameplay, specs, and source checks.'],
 ['Do after Playtest data', 'Playtest impressions, controls, first-session tips, inspection checklist, and common mistakes.'],
 ['Do after launch', 'Beginner guide, walkthrough, choices, tools, endings, and performance pages if search demand appears.'],
 ['Do not do yet', 'Fake all-endings, best tools, or visitor lists. These would be unsupported before stable gameplay data exists.'],
];

export const gateGuardSourceRows = [
 {
 claim: 'What is the official release state, platform, developer, publisher, feature labels, and PC spec baseline?',
 source: 'Steam official store data',
 status: 'verified' as const,
 href: gateGuardSteamUrl,
 note: 'Use Steam for Coming Soon, 2026 window, Windows platform, Playtest entry, developer, publisher, categories, language, and minimum specs.',
 },
 {
 claim: 'Is there current player action before launch?',
 source: 'Steam Community / Steam Playtest',
 status: 'verified' as const,
 href: gateGuardSteamCommunityUrl,
 note: 'The live user action is wishlist/request playtest access, not buy a finished release.',
 },
 {
 claim: 'Is there third-party heat beyond Steam?',
 source: 'Raijin game tracking',
 status: 'working' as const,
 href: gateGuardRaijinUrl,
 note: 'Useful as a directional third-party estimate, not an official wishlist count.',
 },
 {
 claim: 'How are media previews framing the gameplay?',
 source: 'PC Gamer preview',
 status: 'working' as const,
 href: gateGuardPCGamerUrl,
 note: 'Use for media-observed positioning around Papers, Please-like inspection, geese, moat punishment, and dark-comedy tone.',
 },
 {
 claim: 'What external coverage confirms the castle paperwork angle?',
 source: 'GamesRadar preview',
 status: 'working' as const,
 href: gateGuardGamesRadarUrl,
 note: 'Use as a media preview signal for paperwork, punishment, and castle-stronghold premise.',
 },
];

export const gateGuardRelatedGuides: GameGuideLink[] = [
 {
 title: 'Gate Guard Simulator Hub',
 href: gateGuardSimulator.hubPath,
 description:
 'Release date, playtest, platforms, gameplay, PC specs, source checks, and whether it is worth covering before launch.',
 },
];

export function getGateGuardRelated(excludeHref: string) {
 return gateGuardRelatedGuides.filter((guide) => guide.href !== excludeHref).slice(0, 6);
}

const gateGuardKeywords = [
 'Gate Guard Simulator',
 'Gate Guard Simulator release date',
 'Gate Guard Simulator playtest',
 'Gate Guard Simulator Steam',
 'Gate Guard Simulator Xbox',
 'Gate Guard Simulator PS5',
 'Gate Guard Simulator platforms',
 'Gate Guard Simulator gameplay',
 'Gate Guard Simulator demo',
 'Gate Guard Simulator system requirements',
 'Gate Guard Simulator Papers Please',
];

export function createGateGuardMetadata({
 title,
 description,
 canonical,
 image = gateGuardImages.hero,
}: {
 title: string;
 description: string;
 canonical: string;
 image?: string;
}): Metadata {
 return {
 title: { absolute: title },
 description,
 keywords: gateGuardKeywords,
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
