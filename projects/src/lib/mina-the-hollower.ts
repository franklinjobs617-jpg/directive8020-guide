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
 trinket: '/games/mina-the-hollower/mina-trinket.webp',
 boss: '/games/mina-the-hollower/mina-boss.webp',
 combat: '/games/mina-the-hollower/mina-combat.webp',
 exploration: '/games/mina-the-hollower/mina-exploration.webp',
 hub: '/games/mina-the-hollower/mina-hub.webp',
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
 ['Read trinkets as builds', 'Equip Verdant Relic, Crimson Idol, and Luna Pendant early for economy, sustain, and damage. Test one swap at a time to learn each effect clearly.'],
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

// ---- Beginner guide exports ----
export const minaBeginnerActionRows = [
 {
 step: '1. Spend the first hour on burrow timing',
 doThis: 'Practice burrow as movement, escape, and routing before treating it as a side trick.',
 why: 'Steam describes burrowing as a way to move beneath hazards and monsters. Treating it as a core survival action prevents early deaths.',
 },
 {
 step: '2. Learn Nightstar reach and recovery',
 doThis: 'Whip a stationary target, then a moving one, to feel range and recovery frames.',
 why: 'Nightstar is the baseline weapon named on Steam. Beginners who skip range practice burn sidearms to cover for bad spacing.',
 },
 {
 step: '3. Spend sidearms with a reason',
 doThis: 'Use sidearms only for a specific threat or opening, not as a default damage swap.',
 why: 'Sidearms are described as unusual tools. Spare them for cases where Nightstar or burrowing cannot solve the moment cleanly.',
 },
 {
 step: '4. Equip early-game trinkets for economy and sustain',
 doThis: 'Find and equip Verdant Relic (+2 bones per kill), Crimson Idol (+1 HP per room), and Luna Pendant (+5% whip damage) from Queensbury Crypt as soon as possible.',
 why: 'These three trinkets provide bone economy, passive healing, and damage boost respectively. They remove early pressure and let you focus on learning movement and combat.',
 },
 {
 step: '5. Sweep side paths before leaving an area',
 doThis: 'Before moving on, check side routes for hidden rooms, breakable walls, and item pickups.',
 why: 'Steam describes secrets and interconnected level design. Side paths are part of progression, not optional bonus content.',
 },
];

export const minaBeginnerStatusItems = [
 { label: 'Movement practice', value: 'Burrowing is a core skill, not a side trick.', status: 'verified' as const },
 { label: 'Baseline weapon', value: 'Nightstar is Mina\u2019s trusty whip, listed on Steam.', status: 'verified' as const },
 { label: 'Sidearm budget', value: 'Use sidearms for specific threats, not default damage.', status: 'working' as const },
 { label: 'Trinket habit', value: 'Equip Verdant Relic, Crimson Idol, Luna Pendant early. Change one at a time.', status: 'working' as const },
 { label: 'Exploration', value: 'Steam describes secrets and interconnected level design.', status: 'verified' as const },
 { label: 'Guide trust', value: 'Verify boss skips and secret routes through exploration rather than pre-release claims.', status: 'needs-check' as const },
];

export const minaBeginnerSourceRows = [
 {
 claim: 'Burrowing is a way to move beneath hazards and monsters.',
 source: 'Steam store description',
 status: 'verified' as const,
 href: minaSteamUrl,
 note: 'Use for the burrow-as-movement framing and beginner habit advice.',
 },
 {
 claim: 'Nightstar is Mina\u2019s trusty whip for lashing foes.',
 source: 'Steam store description',
 status: 'verified' as const,
 href: minaSteamUrl,
 note: 'Use for the baseline weapon framing and the sidearm relationship.',
 },
 {
 claim: 'Sidearms are unusual and trinkets have exotic effects.',
 source: 'Steam store description',
 status: 'verified' as const,
 href: minaSteamUrl,
 note: 'Use to justify a one-change-at-a-time habit for trinkets.',
 },
 {
 claim: 'The world hides many beastly bosses and secrets.',
 source: 'Steam store description',
 status: 'verified' as const,
 href: minaSteamUrl,
 note: 'Use to support exploration habits and to warn against boss-skip claims.',
 },
 {
 claim: 'Player questions on first-session habits and difficulty.',
 source: 'Reddit discussion',
 status: 'working' as const,
 href: 'https://www.reddit.com/r/MinaTheHollower/',
 note: 'Use for tone and question framing, not as proof of mechanics or routes.',
 },
];

export const minaBeginnerSearchIntent = [
 {
 query: 'Mina the Hollower beginner guide',
 answer: 'First-session priorities: burrow timing, Nightstar reach, sidearm budget, equip Verdant Relic + Crimson Idol + Luna Pendant early, and sweep side paths before leaving an area.',
 href: '#beginner-priorities',
 label: 'First session',
 },
 {
 query: 'How to burrow in Mina the Hollower',
 answer: 'Burrow is movement, escape, and routing. Practice timing on safe ground before using it under pressure in combat.',
 href: '#burrowing-movement',
 label: 'Burrow',
 },
 {
 query: 'Mina the Hollower difficulty',
 answer: 'Steam describes challenging battles and beastly bosses. The game ramps up through each region; spend your first session building fundamentals before judging the overall challenge.',
 href: '#mistakes',
 label: 'Difficulty',
 },
 {
 query: 'Mina the Hollower Nightstar whip',
 answer: 'Nightstar is the trusty whip named in the Steam description. Use it as the baseline weapon before leaning on sidearms.',
 href: '#nightstar-sidearms',
 label: 'Nightstar',
 },
];

export const minaBeginnerJumpLinks = [
 { href: '#beginner-priorities', label: 'Beginner priorities' },
 { href: '#burrowing-movement', label: 'Burrowing & movement' },
 { href: '#nightstar-sidearms', label: 'Nightstar & sidearms' },
 { href: '#mistakes', label: 'Common mistakes' },
 { href: '/games/mina-the-hollower/release-date', label: 'Release date' },
 { href: '/games/mina-the-hollower/system-requirements', label: 'System requirements' },
];

// ---- Worth-it exports ----
export const minaWorthItActionRows = [
 {
 step: '1. Read Steam, official site, and platform coverage together',
 doThis: 'Cross-check Steam, the official Yacht Club site, and one trusted platform outlet before deciding.',
 why: 'Buyer confidence comes from sources that agree on the basics: developer, platforms, features, and date language.',
 },
 {
 step: '2. Match the game to your genre, not to a hype quote',
 doThis: 'Ask whether you actually like compact gothic action-adventures with bosses, secrets, and skill-based movement.',
 why: 'Mina is a focused single-player adventure. The buying case is genre fit, not raw hours or visual scale.',
 },
 {
 step: '3. Decide what would make you wait',
 doThis: 'Write down the one or two facts that would change your mind: reviews, exact length, platform performance, or a sale.',
 why: 'Naming a trigger avoids both overbuying and stalling. You know what to look for in launch-week coverage.',
 },
 {
 step: '4. Pick a platform using real features, not preorders',
 doThis: 'Choose the platform where you can confirm price, date, and key features on the live storefront before paying.',
 why: 'Storefronts disagree on date wording and price. A live check before purchase prevents surprise launches and refund headaches.',
 },
 {
 step: '5. Plan a session budget, not a completion date',
 doThis: 'Block 2-3 hours for the first night instead of guessing the full length of the game.',
 why: 'Mina is positioned as a focused action-adventure. A small session budget keeps the first impressions honest.',
 },
];

export const minaWorthItStatusItems = [
 { label: 'Genre fit', value: 'Gothic pixel-art action-adventure with bosses and secrets.', status: 'verified' as const },
 { label: 'Single-player', value: 'No co-op or multiplayer is listed on Steam.', status: 'verified' as const },
 { label: 'Developer signal', value: 'Yacht Club Games (Shovel Knight team) is the developer and publisher.', status: 'verified' as const },
 { label: 'Steam Deck signal', value: 'Pre-launch coverage reports Steam Deck Verified status.', status: 'working' as const },
 { label: 'Reviews', value: 'Check player and critic reviews after launch week for informed buying decisions.', status: 'needs-check' as const },
 { label: 'Sale timing', value: 'No confirmed sale window; use seasonal sales at your own risk.', status: 'needs-check' as const },
];

export const minaWorthItSourceRows = [
 {
 claim: 'Developer, publisher, and gothic adventure framing.',
 source: 'Official Yacht Club Games site',
 status: 'verified' as const,
 href: minaOfficialUrl,
 note: 'Use to anchor the developer trust signal without inflating the buying case.',
 },
 {
 claim: 'Single-player scope, full controller support, and Steam Cloud.',
 source: 'Steam store features',
 status: 'verified' as const,
 href: minaSteamUrl,
 note: 'Use to support the no-co-op and handheld-friendly points in the buying answer.',
 },
 {
 claim: 'Steam Deck Verified status has been reported before launch.',
 source: 'RPG Site',
 status: 'working' as const,
 href: 'https://www.rpgsite.net/news/20347-mina-the-hollower-steam-deck-verified-valve-rating',
 note: 'Use as a pre-launch handheld signal, then re-check the live Steam Deck badge at release.',
 },
 {
 claim: 'Platform coverage of May 29 launch and console lineup.',
 source: 'Gematsu',
 status: 'working' as const,
 href: 'https://www.gematsu.com/2026/05/mina-the-hollower-launches-may-29',
 note: 'Use for context on platform scope. Do not treat it as a critic review source.',
 },
 {
 claim: 'Player questions about genre fit and Shovel Knight comparison.',
 source: 'Reddit discussion',
 status: 'working' as const,
 href: 'https://www.reddit.com/r/MinaTheHollower/',
 note: 'Use for buyer-question framing, not as proof of mechanics or pricing.',
 },
];

export const minaWorthItSearchIntent = [
 {
 query: 'Is Mina the Hollower worth it',
 answer: 'Yes for action-adventure fans who want gothic pixel art, bosses, secrets, and controller-friendly play. Wait if reviews or platform performance matter to you.',
 href: '#launch-value',
 label: 'Worth it?',
 },
 {
 query: 'Mina the Hollower vs Shovel Knight',
 answer: 'Both come from Yacht Club Games, but Mina is a top-down gothic action-adventure, not a Shovel Knight sequel.',
 href: '#who-buy',
 label: 'Shovel Knight',
 },
 {
 query: 'Mina the Hollower co-op',
 answer: 'No co-op is listed on Steam. Treat Mina as a single-player game.',
 href: '#platform-choice',
 label: 'Co-op',
 },
 {
 query: 'Mina the Hollower Steam Deck',
 answer: 'Pre-launch coverage reports Steam Deck Verified, and Steam lists full controller support plus Steam Cloud.',
 href: '#platform-choice',
 label: 'Steam Deck',
 },
];

export const minaWorthItJumpLinks = [
 { href: '#launch-value', label: 'Launch value' },
 { href: '#who-buy', label: 'Who should buy' },
 { href: '#who-wait', label: 'Who should wait' },
 { href: '#platform-choice', label: 'Platform choice' },
 { href: '/games/mina-the-hollower/steam-deck', label: 'Steam Deck' },
 { href: '/games/mina-the-hollower/release-date', label: 'Release date' },
];

// ---- Release-date exports ----
export const minaReleaseActionRows = [
 {
 step: '1. Use Steam for your local PC unlock hour',
 doThis: 'Open the Steam page and write down the date and time Steam shows in your local storefront, not the calendar announcement.',
 why: 'Storefront dates and time zones disagree. The local countdown is the player-safe answer for PC buyers.',
 },
 {
 step: '2. Treat the May 29 announcement as the official launch',
 doThis: 'Anchor your plans to the May 29, 2026 date from Yacht Club Games and platform coverage, not the Steam storefront date.',
 why: 'Official and platform outlets publish the May 29 launch. Steam sometimes shows the day before because of region timing.',
 },
 {
 step: '3. Verify the platform you intend to buy on',
 doThis: 'Open the storefront for your platform (PS5, Xbox, Switch, Switch 2) and confirm date, price, and edition naming.',
 why: 'Console storefronts can lag behind announcements. A live check prevents a wrong-day purchase or refund.',
 },
 {
 step: '4. Decide if you are waiting for reviews',
 doThis: 'If reviews, completion time, or final difficulty matter, mark a launch-week reminder instead of buying on day one.',
 why: 'Day-one buyers accept the unknown. Other buyers should plan to read two or three reviews before paying.',
 },
 {
 step: '5. Plan a short first session',
 doThis: 'Block 2-3 hours, set your usual display settings, and pick a save profile before downloading.',
 why: 'Lightweight specs and short first sessions are the smart way to confirm a clean install on launch day.',
 },
];

export const minaReleaseStatusItems = [
 { label: 'Steam listed date', value: 'May 28, 2026 with coming_soon=true.', status: 'verified' as const },
 { label: 'Announced date', value: 'Yacht Club Games and platform coverage announce May 29, 2026.', status: 'working' as const },
 { label: 'Early Access', value: 'No Early Access is listed on Steam or in official messaging.', status: 'verified' as const },
 { label: 'PC platforms', value: 'Windows, macOS, and Linux are listed on Steam.', status: 'verified' as const },
 { label: 'Console platforms', value: 'PS5, Xbox Series X|S, Switch, and Switch 2 are announced.', status: 'working' as const },
 { label: 'Demo progress', value: 'Do not assume demo progress transfers unless the developer confirms it.', status: 'needs-check' as const },
];

export const minaReleaseSourceRows = [
 {
 claim: 'Steam lists May 28, 2026 with Windows, macOS, and Linux support.',
 source: 'Steam store',
 status: 'verified' as const,
 href: minaSteamUrl,
 note: 'Use for PC date, platform list, and the coming_soon status on Steam.',
 },
 {
 claim: 'Yacht Club Games and platform coverage announce May 29, 2026.',
 source: 'Gematsu',
 status: 'working' as const,
 href: 'https://www.gematsu.com/2026/05/mina-the-hollower-launches-may-29',
 note: 'Use for the official launch anchor and console platform context.',
 },
 {
 claim: 'Gothic action-adventure framing, developer, and publisher.',
 source: 'Official Yacht Club Games site',
 status: 'verified' as const,
 href: minaOfficialUrl,
 note: 'Use for the developer and publisher line in the launch summary.',
 },
 {
 claim: 'Console lineup includes PS5, Xbox Series, Switch, and Switch 2.',
 source: 'Gematsu coverage',
 status: 'working' as const,
 href: 'https://www.gematsu.com/2026/05/mina-the-hollower-launches-may-29',
 note: 'Use for console platform context, not for price or pre-order copy.',
 },
 {
 claim: 'Player questions about demo progress, date wording, and pricing.',
 source: 'Reddit discussion',
 status: 'working' as const,
 href: 'https://www.reddit.com/r/MinaTheHollower/',
 note: 'Use to confirm which questions belong on the release-date page.',
 },
];

export const minaReleaseSearchIntent = [
 {
 query: 'Mina the Hollower release date',
 answer: 'Steam shows May 28, 2026 while official and platform coverage announce May 29, 2026. Check your local storefront for the real unlock hour.',
 href: '#release-status',
 label: 'Release date',
 },
 {
 query: 'Mina the Hollower platforms',
 answer: 'Steam lists Windows, macOS, and Linux. Platform coverage reports PS5, Xbox Series X|S, Switch, and Switch 2.',
 href: '#platform-notes',
 label: 'Platforms',
 },
 {
 query: 'Mina the Hollower Early Access',
 answer: 'No. Current Steam and official messaging do not frame Mina as an Early Access release.',
 href: '#release-status',
 label: 'Early access',
 },
 {
 query: 'Mina the Hollower demo progress',
 answer: 'Do not assume demo progress transfers unless Yacht Club Games or the storefront explicitly confirms it.',
 href: '#launch-checklist',
 label: 'Demo',
 },
];

export const minaReleaseJumpLinks = [
 { href: '#release-status', label: 'Release status' },
 { href: '#platform-notes', label: 'Platform notes' },
 { href: '#launch-checklist', label: 'Launch checklist' },
 { href: '/games/mina-the-hollower/steam-deck', label: 'Steam Deck' },
 { href: '/games/mina-the-hollower/system-requirements', label: 'System requirements' },
 { href: '/games/mina-the-hollower/beginner-guide', label: 'Beginner guide' },
];

// ---- Steam Deck exports ----
export const minaSteamDeckActionRows = [
 {
 step: '1. Confirm the live Steam Deck badge on launch day',
 doThis: 'Open the live Steam page and look at the current Deck badge, not the pre-release coverage quote.',
 why: 'Badges can change at launch. The live badge is the only source for a Verified or Playable claim that you should repeat.',
 },
 {
 step: '2. Start with default controller controls',
 doThis: 'Use the default gamepad layout for the first 30 minutes, then decide whether to remap.',
 why: 'Steam lists full controller support. Default controls are tuned for the game\u2019s pace and are the safest first choice.',
 },
 {
 step: '3. Test Steam Cloud with one save',
 doThis: 'Make a save, close the game, reopen it, and confirm the save is still there before playing a long session.',
 why: 'Steam lists Steam Cloud, but live sync should be confirmed on your account before you rely on it across devices.',
 },
 {
 step: '4. Check text readability in handheld mode',
 doThis: 'Look at menus, dialogue boxes, and the HUD in handheld mode before a long run.',
 why: 'Pixel art helps, but menus and text are the readability risk. A 60-second check avoids eye strain mid-game.',
 },
 {
 step: '5. Plan for suspend/resume and battery',
 doThis: 'Use the system-level suspend, and watch the battery drain during a 30-minute handheld test.',
 why: 'Pre-launch coverage does not include final battery or suspend behavior. A short test is the only way to know.',
 },
];

export const minaSteamDeckStatusItems = [
 { label: 'Steam Deck badge', value: 'Pre-launch coverage reports Steam Deck Verified; re-check on launch day.', status: 'working' as const },
 { label: 'Controller support', value: 'Steam lists full controller support.', status: 'verified' as const },
 { label: 'Steam Cloud', value: 'Steam lists Steam Cloud support; test sync after first save.', status: 'verified' as const },
 { label: 'Display fit', value: 'Game Boy Color-style pixel art should read well in handheld mode.', status: 'working' as const },
 { label: 'Battery life', value: 'Do not assume final battery draw until the release build is tested on Deck.', status: 'needs-check' as const },
 { label: 'Remote Play', value: 'Steam lists Remote Play on Phone, Tablet, and TV.', status: 'verified' as const },
];

export const minaSteamDeckSourceRows = [
 {
 claim: 'Steam lists full controller support, Steam Cloud, and Remote Play.',
 source: 'Steam store features',
 status: 'verified' as const,
 href: minaSteamUrl,
 note: 'Use to anchor the controller, cloud, and remote play points in the Deck answer.',
 },
 {
 claim: 'Steam Deck Verified status has been reported before launch.',
 source: 'RPG Site',
 status: 'working' as const,
 href: 'https://www.rpgsite.net/news/20347-mina-the-hollower-steam-deck-verified-valve-rating',
 note: 'Use as a pre-launch signal, then re-check the live Steam Deck badge after release.',
 },
 {
 claim: 'Lightweight minimum specs and 8-bit Game Boy Color-style visuals.',
 source: 'Steam store description',
 status: 'verified' as const,
 href: minaSteamUrl,
 note: 'Use to justify the handheld-fit claim and the readability expectation.',
 },
 {
 claim: 'Player impressions of Deck and handheld play.',
 source: 'Reddit discussion',
 status: 'working' as const,
 href: 'https://www.reddit.com/r/MinaTheHollower/',
 note: 'Use to confirm which handheld questions players care about most.',
 },
 {
 claim: 'Yacht Club Games history of controller-tuned action games.',
 source: 'Official site',
 status: 'verified' as const,
 href: minaOfficialUrl,
 note: 'Use to support the controller-design trust signal, not as a Deck-specific proof.',
 },
];

export const minaSteamDeckSearchIntent = [
 {
 query: 'Is Mina the Hollower Steam Deck Verified',
 answer: 'Pre-launch coverage reports Steam Deck Verified. Re-check the live Steam Deck badge on launch day before quoting it.',
 href: '#deck-readiness',
 label: 'Verified?',
 },
 {
 query: 'Mina the Hollower controller support',
 answer: 'Yes. Steam lists full controller support, which is a strong signal for Steam Deck and gamepad play.',
 href: '#controls-saves',
 label: 'Controller',
 },
 {
 query: 'Mina the Hollower Steam Cloud',
 answer: 'Yes. Steam lists Steam Cloud support, but confirm sync after your first save on launch week.',
 href: '#controls-saves',
 label: 'Cloud saves',
 },
 {
 query: 'Mina the Hollower handheld play',
 answer: 'Single-player, controller-supported, pixel-art action-adventure with reported Steam Deck Verified status. A strong handheld fit.',
 href: '#deck-readiness',
 label: 'Handheld',
 },
];

export const minaSteamDeckJumpLinks = [
 { href: '#deck-readiness', label: 'Deck readiness' },
 { href: '#controls-saves', label: 'Controls & saves' },
 { href: '#handheld-checklist', label: 'Handheld checklist' },
 { href: '/games/mina-the-hollower/system-requirements', label: 'System requirements' },
 { href: '/games/mina-the-hollower/release-date', label: 'Release date' },
 { href: '/games/mina-the-hollower/is-it-worth-it', label: 'Worth it?' },
];

// ---- System-requirements exports ----
export const minaSpecActionRows = [
 {
 step: '1. Compare your PC to the Steam minimum tier first',
 doThis: 'Match your CPU, RAM, GPU, DirectX, and storage to the Steam minimum line before assuming the game will run.',
 why: 'Steam lists Windows 8+, 4 GB RAM, DirectX 12, and 860 MB storage. Missing any one of these is a real compatibility risk.',
 },
 {
 step: '2. Note the 64-bit requirement',
 doThis: 'Check that your OS install is 64-bit and that you are running a 64-bit build of Steam.',
 why: 'Steam requires a 64-bit processor and operating system for the PC requirements.',
 },
 {
 step: '3. Confirm Mac or Linux support before buying',
 doThis: 'If you play on macOS or Linux, confirm Apple M1 or later and your Linux distro meet the listed minimums before purchase.',
 why: 'Steam lists macOS 11+ with Apple M1+ and a Linux minimum that matches the Windows tier. The minimum is not the same as "any Mac."',
 },
 {
 step: '4. Test controller and Steam Cloud before launch',
 doThis: 'Plug in a controller and confirm Steam Cloud is enabled for your account before launch night.',
 why: 'Both features are listed on Steam, but live setup steps are the only way to know they work for your account and region.',
 },
 {
 step: '5. Wait for a recommended tier if your hardware is borderline',
 doThis: 'If your PC is just above the minimum, do not assume a high setting until the recommended tier is published.',
 why: 'Steam does not list a detailed recommended tier yet. Until it does, treat the minimum as the only verified line.',
 },
];

export const minaSpecStatusItems = [
 { label: 'Windows minimum', value: 'Windows 8+, 4 GB RAM, DirectX 12, 860 MB storage.', status: 'verified' as const },
 { label: 'Recommended tier', value: 'Steam does not list a detailed recommended tier yet.', status: 'needs-check' as const },
 { label: '64-bit requirement', value: 'Steam requires a 64-bit processor and operating system.', status: 'verified' as const },
 { label: 'macOS support', value: 'macOS 11+ with Apple M1 or later and 4 GB RAM.', status: 'verified' as const },
 { label: 'Linux support', value: 'Same minimum tier as Windows, with full controller support.', status: 'verified' as const },
 { label: 'Controller and Cloud', value: 'Steam lists full controller support and Steam Cloud.', status: 'verified' as const },
];

export const minaSpecSourceRows = [
 {
 claim: 'Steam lists Windows 8+, 4 GB RAM, DirectX 12, and 860 MB storage.',
 source: 'Steam store system requirements',
 status: 'verified' as const,
 href: minaSteamUrl,
 note: 'Use for the Windows minimum line and to justify the lightweight-specs framing.',
 },
 {
 claim: 'Steam requires a 64-bit processor and operating system for the PC requirements.',
 source: 'Steam store system requirements',
 status: 'verified' as const,
 href: minaSteamUrl,
 note: 'Use for the 64-bit note in the requirements table.',
 },
 {
 claim: 'Steam lists macOS 11+ with Apple M1+ and Linux minimum support.',
 source: 'Steam store system requirements',
 status: 'verified' as const,
 href: minaSteamUrl,
 note: 'Use for the Mac and Linux minimum lines, not for a recommended tier.',
 },
 {
 claim: 'Steam lists full controller support and Steam Cloud.',
 source: 'Steam store features',
 status: 'verified' as const,
 href: minaSteamUrl,
 note: 'Use to support the controller and cloud features in the setup section.',
 },
 {
 claim: 'No detailed recommended tier is published yet.',
 source: 'Steam store system requirements',
 status: 'needs-check' as const,
 href: minaSteamUrl,
 note: 'Re-check Steam after launch; do not invent a recommended tier on this page.',
 },
];

export const minaSpecSearchIntent = [
 {
 query: 'Mina the Hollower system requirements',
 answer: 'Steam lists Windows 8+, 4 GB RAM, DirectX 12, and 860 MB storage. A detailed recommended tier is not published yet.',
 href: '#windows-minimum',
 label: 'Requirements',
 },
 {
 query: 'Mina the Hollower Mac',
 answer: 'Yes. Steam lists macOS 11+ with Apple M1 or later, 4 GB RAM, and 860 MB storage.',
 href: '#mac-linux',
 label: 'Mac',
 },
 {
 query: 'Mina the Hollower Linux',
 answer: 'Yes. The Linux minimum matches the Windows minimum line, with full controller support and Steam Cloud.',
 href: '#mac-linux',
 label: 'Linux',
 },
 {
 query: 'Mina the Hollower recommended specs',
 answer: 'Steam does not list a detailed recommended tier yet. Re-check Steam after launch for an updated line.',
 href: '#windows-minimum',
 label: 'Recommended',
 },
];

export const minaSpecJumpLinks = [
 { href: '#windows-minimum', label: 'Windows minimum' },
 { href: '#mac-linux', label: 'Mac & Linux' },
 { href: '#steam-features', label: 'Steam features' },
 { href: '/games/mina-the-hollower/steam-deck', label: 'Steam Deck' },
 { href: '/games/mina-the-hollower/release-date', label: 'Release date' },
 { href: '/games/mina-the-hollower/is-it-worth-it', label: 'Worth it?' },
];
