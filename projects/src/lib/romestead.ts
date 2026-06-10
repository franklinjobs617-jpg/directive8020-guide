import type { Metadata } from 'next';
import { romestead, type GameGuideLink } from '@/lib/games';

export const romesteadLastModified = '2026-05-25';
export const romesteadSteamUrl =
 'https://store.steampowered.com/app/1805320/Romestead/';
export const romesteadSteamDbUrl = 'https://steamdb.info/app/1805320/';
export const romesteadSteamNewsUrl =
 'https://store.steampowered.com/news/app/1805320';

export const romesteadImages = {
 hero: '/games/romestead/hero.webp',
 capsule: '/games/romestead/capsule.webp',
 screenshot1: '/games/romestead/official-settlement.webp',
 screenshot2: '/games/romestead/official-building.webp',
 screenshot3: '/games/romestead/official-coop.webp',
 screenshot4: '/games/romestead/official-exploration.webp',
 screenshot5: '/games/romestead/official-combat.webp',
 screenshot6: '/games/romestead/official-dungeon.webp',
 planningAnimalFarm: '/games/romestead/planning-animal-farm.webp',
 planningCropHarvesting: '/games/romestead/planning-crop-harvesting.webp',
 planningFarmOverview: '/games/romestead/planning-farm-overview.webp',
 planningVillageMarket: '/games/romestead/planning-village-market.webp',
};

export const romesteadVideos = [
 {
 id: '4Bd2YetKWg4',
 title: 'Romestead - Early Access Release Date Trailer',
 caption:
 'Official trailer reference for the Early Access launch, Roman settlement fantasy, co-op framing, exploration, crafting, and night defense.',
 },
];

export const romesteadQuickFacts = [
 ['Release timing', 'Steam shows May 25, 2026 by store display; SteamDB unlock timing points to May 26, 2026 at 06:30 UTC. Check your local Steam page before planning a session.'],
 ['Launch state', 'Early Access, not a finished 1.0 release. The developer expects roughly 1-2 years in Early Access.'],
 ['Platform', 'PC via Steam is the confirmed public platform.'],
 ['Developer / Publisher', 'Beartwigs / Three Friends.'],
 ['Genre fit', 'Survival crafting, town building, action RPG, colony sim, and open-world survival.'],
 ['Players', 'Official Steam description lists solo play and 1-8 players.'],
 ['Co-op features', 'Steam lists Online Co-op and LAN Co-op. Split-screen and console crossplay are not confirmed.'],
 ['Core loop', 'Gather resources, craft, build a Roman settlement, recruit survivors, explore, fight undead at night, clear dungeons, and use blessings from Roman gods.'],
 ['Steam features', 'Single-player, Online Co-op, LAN Co-op, Steam Cloud, and Family Sharing.'],
 ['Languages', 'English full audio with multiple text languages including English, Simplified Chinese, Traditional Chinese, French, German, Spanish, Portuguese, Russian, Polish, Japanese, and Korean.'],
];

export const romesteadReleaseRows = [
 ['Steam release date', 'Steam displays May 25, 2026, while SteamDB unlock timing points to May 26, 2026 at 06:30 UTC.', 'Store timing can vary by region and unlock source.'],
 ['Early Access', 'Confirmed.', 'Treat Romestead as an in-development game with updates, balance changes, and possible rough edges.'],
 ['PC / Windows', 'Confirmed on Steam.', 'Windows is the only verified platform at this check.'],
 ['Xbox / PlayStation', 'Not confirmed in current official store data.', 'Do not buy based on console assumptions.'],
 ['Demo', 'Check Steam directly before installing.', 'Demo availability can change around launch.'],
 ['Steam Deck', 'Not confirmed as Verified at this check.', 'Wait for launch reports if Deck is your main device.'],
 ['Controller support', 'Needs launch testing.', 'Steam feature labels should be checked again after unlock.'],
 ['Reviews', 'Needs post-unlock player signal.', 'Use early reviews as a stability and content-depth check, not only a score.'],
];

export const romesteadBeginnerRows = [
 {
 step: 'Secure food and basic resources',
 doThis: 'Spend the first day collecting wood, stone, food, and nearby materials before chasing distant points of interest.',
 why: 'A survival town builder becomes harder when your settlement starts without a buffer.',
 },
 {
 step: 'Build workstations early',
 doThis: 'Prioritize the stations that unlock storage, basic tools, cooking, and settlement upgrades.',
 why: 'Crafting speed and storage discipline matter more than a decorative layout in the first hour.',
 },
 {
 step: 'Prepare for night defense',
 doThis: 'Keep your first base compact, light the useful areas, and avoid spreading survivors across an exposed settlement.',
 why: 'Steam describes undead attacks at night, so your first layout should be defensible.',
 },
 {
 step: 'Recruit with jobs in mind',
 doThis: 'Use survivors to reduce repeated chores, then check which roles make gathering, farming, crafting, or defense easier.',
 why: 'The colony layer is strongest when workers solve recurring problems instead of only adding numbers.',
 },
 {
 step: 'Explore after your base is stable',
 doThis: 'Scout biomes, caves, and dungeon routes after food, storage, and basic defense are handled.',
 why: 'Exploration is useful, but overextending before the settlement works can create a recovery spiral.',
 },
 {
 step: 'Use blessings carefully',
 doThis: 'Treat Roman god blessings as build direction until players verify the strongest combinations.',
 why: 'Launch-window balance may shift, so flexible choices are safer than chasing a claimed best build.',
 },
];

export const romesteadCoopRows = [
 ['Player count', 'Official description lists 1-8 players.', 'Confirmed'],
 ['Online co-op', 'Steam lists Online Co-op.', 'Confirmed'],
 ['LAN co-op', 'Steam lists LAN Co-op.', 'Confirmed'],
 ['Split-screen / couch co-op', 'Not confirmed in current Steam feature labels.', 'Not confirmed'],
 ['Crossplay', 'Not confirmed because only Steam PC is verified right now.', 'Not confirmed'],
 ['Dedicated servers', 'Not confirmed in current official feature labels.', 'Needs testing'],
 ['Host saves', 'Needs launch testing before making firm claims.', 'Needs testing'],
 ['Best group size', 'Start with 2-4 players until pacing, scaling, and resource sharing are tested.', 'Practical advice'],
];

export const romesteadSpecRows = [
 ['OS', 'Windows 10', 'Windows 10'],
 ['Processor', 'Intel Core i5', 'Intel Core i7'],
 ['Memory', '8 GB RAM', '16 GB RAM'],
 ['Graphics', 'DirectX 11 compatible GPU listed through DirectX requirement', 'DirectX 11 compatible GPU listed through DirectX requirement'],
 ['DirectX', 'Version 11', 'Version 11'],
 ['Network', 'Broadband internet connection for online play', 'Broadband internet connection'],
 ['Storage', '2 GB available space', '4 GB available space'],
];

export const romesteadWorthRows = [
 ['Buy now if', 'You specifically want a Roman-inspired survival crafting and town-building game, plan to play on Windows PC, and are comfortable with Early Access development.'],
 ['Try the demo first if', 'Steam shows a playable demo in your region and you want to test performance, controls, camera comfort, crafting flow, and co-op setup before buying.'],
 ['Wait if', 'You need a finished 1.0 campaign, verified Steam Deck support, console versions, polished controller support, stable late-game balance, or settled player reviews.'],
 ['Best fit', 'Players who enjoy base building, survivor management, night defense, co-op gathering, dungeon runs, and progression through settlement upgrades.'],
 ['Poor fit', 'Players looking for a finished story RPG, PvP, split-screen co-op, console play, or a fully documented endgame on day one.'],
 ['Early Access risk', 'The developer expects about 1-2 years in Early Access, so recipes, balance, performance, UI, and content depth can change.'],
];

export const romesteadSourceRows = [
 {
 claim: 'What is Romestead and who makes it?',
 source: 'Steam store',
 status: 'verified' as const,
 href: romesteadSteamUrl,
 note: 'Use Steam for developer, publisher, genre tags, platform, Early Access label, languages, feature labels, and system requirements.',
 },
 {
 claim: 'Why do release dates show May 25 and May 26?',
 source: 'SteamDB',
 status: 'working' as const,
 href: romesteadSteamDbUrl,
 note: 'Steam store display and SteamDB unlock timing can differ by region and UTC conversion, so the page explains both instead of forcing one answer.',
 },
 {
 claim: 'Is Romestead a finished 1.0 game?',
 source: 'Steam Early Access section',
 status: 'verified' as const,
 href: romesteadSteamUrl,
 note: 'The store presents Romestead as Early Access and gives an estimated 1-2 year development window.',
 },
 {
 claim: 'How many players does Romestead support?',
 source: 'Steam store',
 status: 'verified' as const,
 href: romesteadSteamUrl,
 note: 'The official description lists 1-8 players and Steam feature labels include Online Co-op and LAN Co-op.',
 },
 {
 claim: 'Is Romestead on console or Steam Deck?',
 source: 'Steam store',
 status: 'needs-check' as const,
 href: romesteadSteamUrl,
 note: 'PC via Steam is verified. Console versions and Steam Deck compatibility should not be claimed without official store support or launch reports.',
 },
];

export const romesteadRelatedGuides: GameGuideLink[] = [
 {
 title: 'Romestead Guide Hub',
 href: romestead.hubPath,
 description:
 'Start here for release timing, Early Access status, co-op, PC specs, beginner priorities, and buying advice.',
 },
 ...romestead.guideLinks,
];

export function getRomesteadRelated(excludeHref: string) {
 return romesteadRelatedGuides.filter((guide) => guide.href !== excludeHref).slice(0, 6);
}

const romesteadKeywords = [
 'Romestead',
 'Romestead guide',
 'Romestead release date',
 'Romestead Early Access',
 'Romestead multiplayer',
 'Romestead co-op',
 'Romestead beginner guide',
 'Romestead settlement',
 'Romestead citizens',
 'Romestead base building',
 'Romestead night defense',
 'Romestead system requirements',
 'Romestead Steam Deck',
 'Romestead worth it',
];

export function createRomesteadMetadata({
 title,
 description,
 canonical,
 image = romesteadImages.hero,
}: {
 title: string;
 description: string;
 canonical: string;
 image?: string;
}): Metadata {
 return {
 title: { absolute: title },
 description,
 keywords: romesteadKeywords,
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
