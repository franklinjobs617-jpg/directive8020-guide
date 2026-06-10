import type { Metadata } from 'next';
import { paralives, type GameGuideLink } from '@/lib/games';

export const paralivesLastModified = '2026-05-26';
export const paralivesSteamUrl =
 'https://store.steampowered.com/app/1118520/Paralives/';
export const paralivesOfficialUrl = 'https://www.paralives.com/';
export const paralivesRedditUrl = 'https://www.reddit.com/r/Paralives/';
export const paralivesWorkshopUrl =
 'https://steamcommunity.com/app/1118520/workshop/';

export const paralivesImages = {
 hero: '/games/paralives/hero.jpg',
 header: '/games/paralives/header.jpg',
 build: '/games/paralives/screenshot-build.jpg',
 paramaker: '/games/paralives/screenshot-paramaker.jpg',
 town: '/games/paralives/screenshot-town.jpg',
 life: '/games/paralives/screenshot-life.jpg',
 home: '/games/paralives/screenshot-home.jpg',
};

export const paralivesVideos = [
 {
 id: 'uvGPV6qQuQM',
 title: 'Paralives - Release Date Reveal',
 caption:
 'Official release date video reference for Paralives Early Access timing, life-sim scope, Paramaker, build tools, and town gameplay.',
 },
];

export const paralivesQuickFacts = [
 ['Release status', 'Paralives is available on Steam Early Access from May 25, 2026.'],
 ['Platforms', 'Steam lists Windows and Mac support. Linux is not listed.'],
 ['Developer / Publisher', 'Paralives Studio.'],
 ['Genre fit', 'Sandbox life simulation with building, character creation, careers, relationships, families, and town exploration.'],
 ['Character creator', 'Paramaker lets players adjust height, facial and body features, outfits, and personalities.'],
 ['Build mode', 'Official Steam copy highlights grid-less construction, curved walls, split-level floors, resizing, recoloring, stacking, and free object placement.'],
 ['Mods and CC', 'Steam lists an in-game modding interface plus Steam Workshop support for mods, houses, and Parafolks.'],
 ['Mac support', 'Official requirements require Apple silicon: M2 minimum and M3 recommended.'],
 ['Steam Deck', 'No Steam Deck Verified claim is available in the checked official Steam data; treat Deck play as a test-first setup.'],
 ['Future features', 'Weather, seasons, pets, cars, bikes, boats, pools, events, NPC story progression, family tree, gardening, fishing, town editing, and more traits are listed for Early Access updates.'],
];

export const paralivesSpecRows = [
 ['Windows OS', 'Windows 10', 'Windows 11'],
 ['Windows CPU', 'Intel Core i5 or AMD Ryzen 5 at 2.5 GHz', 'Intel Core i5 or AMD Ryzen 5 at 3.0 GHz'],
 ['Windows memory', '12 GB RAM', '16 GB RAM'],
 ['Windows graphics', 'GTX 1060 or RX 6600 XT', 'RTX 2060 or RX 7600 XT'],
 ['DirectX', 'Version 11', 'Version 11'],
 ['Storage', '8 GB available space', '8 GB available space'],
 ['Mac OS', 'macOS Big Sur 11 or newer', 'macOS Big Sur 11 or newer'],
 ['Mac processor', 'Apple M2', 'Apple M3'],
 ['Mac memory', '12 GB RAM', '16 GB RAM'],
];

export const paralivesEarlyAccessRows = [
 {
 step: 'Check what is in Early Access now',
 doThis:
 'Start with building, Paramaker, open-world town play, relationships, careers, needs, emotions, children, and Steam Workshop support.',
 why:
 'These are the strongest confirmed launch pillars and match the highest rising search intent.',
 },
 {
 step: 'Separate launch features from roadmap features',
 doThis:
 'Treat pets, weather, seasons, vehicles, pools, events, family tree, gardening, fishing, town editing, and more jobs or traits as Early Access additions.',
 why:
 'Players searching for babies, pets, and family play need a clear answer without overclaiming launch content.',
 },
 {
 step: 'Use reviews for stability, not only score',
 doThis:
 'Read recent Steam reviews for save issues, performance, build-mode comfort, Mac reports, and Steam Deck comments.',
 why:
 'Life sims can feel great in tools while still needing patches around simulation depth and long saves.',
 },
 {
 step: 'Test performance before committing to a huge save',
 doThis:
 'Lower resolution or graphics settings if FPS drops, then test a smaller home and one active household first.',
 why:
 'The official requirements repeat this settings advice for both Windows and Mac.',
 },
];

export const paralivesBuildRows = [
 ['Grid-less building', 'Use Paralives for flexible layouts instead of strict tile-only planning.', 'Good for curved rooms, angled layouts, and real-house recreations.'],
 ['Curved walls', 'Plan the exterior shape first, then place key rooms before decorating.', 'Curves can make furniture layout harder if rooms are too small.'],
 ['Split-level floors', 'Use split levels after the main footprint works.', 'It avoids rebuilding stair and room flow later.'],
 ['Resize and recolor', 'Pick a core palette, then resize only the objects that need emphasis.', 'Too many custom sizes can make a house look noisy.'],
 ['Stack and free-place objects', 'Decorate in passes: function first, clutter second, final color last.', 'This keeps creative freedom from turning into visual clutter.'],
];

export const paralivesParamakerRows = [
 ['Body and height', 'Set height and broad body shape before editing clothing.', 'Outfits read differently after proportions change.'],
 ['Face details', 'Work from large face structure to smaller features.', 'It is easier to preserve a character concept.'],
 ['Outfits', 'Create everyday looks first, then style extra outfits around the same identity.', 'A consistent wardrobe makes screenshots and households feel coherent.'],
 ['Personality', 'Choose traits and preferences that create story tension.', 'Paralives is strongest when a Parafolk has goals and friction.'],
 ['Household planning', 'Create relationships and roles before moving into a large build.', 'It helps you pick a house layout that fits the people using it.'],
];

export const paralivesDeckRows = [
 ['Verified status', 'No Steam Deck Verified claim is shown in the checked official Steam data.', 'Treat Deck support as unverified until Steam or players confirm it.'],
 ['Controls', 'Life sims often need pointer-heavy menus and build tools.', 'Test trackpad, mouse region, and community layouts before a long session.'],
 ['Performance', 'Windows minimum lists GTX 1060 / RX 6600 XT and 12 GB RAM.', 'Start with lower resolution and graphics settings if using Proton.'],
 ['Text and UI', 'Character creator, Workshop, and build tools can be menu-heavy.', 'Check text size and cursor precision before playing away from a keyboard.'],
 ['Best buying advice', 'Buy for Deck only if you are willing to test and refund within Steam rules if it fails your setup.', 'Official PC and Mac support is clearer than handheld support right now.'],
];

export const paralivesMacRows = [
 ['Mac support', 'Steam lists macOS support.', 'Confirmed'],
 ['Processor', 'Apple M2 minimum, Apple M3 recommended.', 'Confirmed'],
 ['Memory', '12 GB RAM minimum, 16 GB RAM recommended.', 'Confirmed'],
 ['Operating system', 'macOS Big Sur 11 or newer.', 'Confirmed'],
 ['Intel Mac', 'The Mac requirements say Apple processor is required.', 'Not supported by the listed requirements'],
 ['Settings advice', 'Lower display resolution and graphics settings if framerate is low.', 'Official requirement note'],
];

export const paralivesModsRows = [
 ['In-game modding', 'Official Steam copy lists an in-game modding interface to edit or add content.', 'Confirmed'],
 ['Steam Workshop', 'Steam copy lists community-made mods, houses, and Parafolks through Steam Workshop.', 'Confirmed'],
 ['Custom content', 'Treat CC as part of the modding and Workshop ecosystem, then check file-specific instructions.', 'Practical advice'],
 ['Launch caution', 'Workshop volume may take time to grow after Early Access launch.', 'Use recent items and ratings instead of old assumptions.'],
 ['Save safety', 'Keep a clean save before adding several mods at once.', 'Early Access updates can change compatibility.'],
];

export const paralivesComparisonRows = [
 ['Paralives', 'Customization-first life sim with grid-less building, Paramaker, Mac support, free-update pledge, and Early Access risk.', 'Players who want a fresh life sim and enjoy shaping an in-development game.'],
 ['The Sims 4', 'Mature ecosystem with years of expansions, large CC communities, and familiar systems.', 'Players who want the deepest existing content library right now.'],
 ['inZOI', 'Realistic visual direction and a different life-sim fantasy.', 'Players prioritizing visual realism and modern production values.'],
 ['Life by You', 'Useful as search context, but not a current buying alternative after cancellation.', 'Players comparing the wider life-sim market history.'],
];

export const paralivesSourceRows = [
 {
 claim: 'Is Paralives available now?',
 source: 'Steam store',
 status: 'verified' as const,
 href: paralivesSteamUrl,
 note:
 'Use Steam for the May 25, 2026 Early Access release status, supported platforms, system requirements, feature list, reviews, and Workshop links.',
 },
 {
 claim: 'What does the community ask about most?',
 source: 'r/Paralives',
 status: 'working' as const,
 href: paralivesRedditUrl,
 note:
 'Recent player discussion is useful for Steam Deck, Mac, Workshop, build-mode, and launch expectation questions, but official claims still need Steam or developer confirmation.',
 },
 {
 claim: 'Where are mods and custom content shared?',
 source: 'Steam Workshop',
 status: 'verified' as const,
 href: paralivesWorkshopUrl,
 note:
 'Steam lists Workshop support for mods, houses, and Parafolks. Check item dates, ratings, and compatibility before adding content to an important save.',
 },
 {
 claim: 'Where should roadmap claims come from?',
 source: 'Official website',
 status: 'verified' as const,
 href: paralivesOfficialUrl,
 note:
 'Use official channels for roadmap updates, free-update statements, and developer announcements during Early Access.',
 },
];

export const paralivesRelatedGuides: GameGuideLink[] = [
 {
 title: 'Paralives Guide Hub',
 href: paralives.hubPath,
 description:
 'Start here for Early Access status, Paramaker, build mode, Mac, Steam Deck, mods, CC, and life-sim comparisons.',
 },
 ...paralives.guideLinks,
];

export function getParalivesRelated(excludeHref: string) {
 return paralivesRelatedGuides.filter((guide) => guide.href !== excludeHref).slice(0, 6);
}

const paralivesKeywords = [
 'Paralives',
 'Paralives guide',
 'Paralives early access',
 'Paralives character creation',
 'Paralives Paramaker',
 'Paralives build mode',
 'Paralives Steam Deck',
 'Paralives Mac',
 'Paralives mods',
 'Paralives CC',
 'Paralives vs Sims 4',
 'inZOI vs Paralives',
];

export function createParalivesMetadata({
 title,
 description,
 canonical,
 image = paralivesImages.hero,
}: {
 title: string;
 description: string;
 canonical: string;
 image?: string;
}): Metadata {
 return {
 title: { absolute: title },
 description,
 keywords: paralivesKeywords,
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
