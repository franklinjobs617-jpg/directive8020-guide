import type { Metadata } from 'next';
import { enginefall, type GameGuideLink } from '@/lib/games';

type SourceStatus = 'verified' | 'needs-check' | 'working';

export type EnginefallQuickFact = [string, string, SourceStatus];
export type EnginefallTableRow = [string, string, string];

export interface EnginefallSection {
 id: string;
 title: string;
 image?: string;
 imageAlt: string;
 caption: string;
 paragraphs: string[];
 tableHeadings: EnginefallTableRow;
 rows?: EnginefallTableRow[];
}

export interface EnginefallPageData {
 title: string;
 description: string;
 canonical: string;
 label: string;
 heroImage: string;
 heroAlt: string;
 sourceImage?: string;
 sourceImageAlt?: string;
 sourceImageCaption?: string;
 relatedImage?: string;
 relatedImageAlt?: string;
 relatedImageCaption?: string;
 faqImage?: string;
 faqImageAlt?: string;
 faqImageCaption?: string;
 blufTitle: string;
 bluf: string[];
 quickFacts: EnginefallQuickFact[];
 answerTitle: string;
 answer: string;
 intentRows: {
 query: string;
 answer: string;
 href: string;
 label?: string;
 }[];
 jumpLinks: {
 href: string;
 label: string;
 }[];
 sections: EnginefallSection[];
 faqs: {
 question: string;
 answer: string;
 }[];
}

export const enginefallLastModified = '2026-06-10';
export const enginefallSteamUrl = 'https://store.steampowered.com/app/2437390/Enginefall/';
export const enginefallOfficialUrl = 'https://enginefall.com/';
export const enginefallPlaytestPostUrl =
 'https://enginefall.com/blog/welcome-to-the-enginefall-summer-playtest';
export const enginefallDateChangePostUrl =
 'https://enginefall.com/blog/open-playtest-date-change';
export const enginefallConductorPostUrl =
 'https://enginefall.com/blog/how-to-become-conductor';
export const enginefallSteamNewsUrl =
 'https://steamcommunity.com/app/2437390/allnews/?l=english';
export const enginefallPCGamerUrl =
 'https://www.pcgamer.com/games/survival-crafting/enginefall-asks-what-if-snowpiercer-was-rust-and-dayz-in-a-game-with-great-vision-and-so-so-execution/';
export const enginefallPCGamesNUrl =
 'https://www.pcgamesn.com/enginefall/june-open-playtest';
export const enginefallGamingTrendUrl =
 'https://gamingtrend.com/news/join-the-public-playtest-for-enginefall/';
export const enginefallRedditAmaUrl =
 'https://www.reddit.com/r/Games/comments/1tjnay2/ama_were_making_enginefall_a_playerdriven/';
export const enginefallSteamDiscussionsUrl =
 'https://steamcommunity.com/app/2437390/discussions/0/';

export const enginefallImages = {
 hero: '/games/enginefall/hero.webp',
 header: '/games/enginefall/header.webp',
 card: '/games/enginefall/card.webp',
 screenshot1: '/games/enginefall/screenshot-1.webp',
 screenshot2: '/games/enginefall/screenshot-2.webp',
 screenshot3: '/games/enginefall/screenshot-3.webp',
 screenshot4: '/games/enginefall/screenshot-4.webp',
 screenshot5: '/games/enginefall/screenshot-5.webp',
 screenshot6: '/games/enginefall/screenshot-6.webp',
 screenshot7: '/games/enginefall/screenshot-7.webp',
 screenshot8: '/games/enginefall/screenshot-8.webp',
 screenshot9: '/games/enginefall/screenshot-9.webp',
 screenshot10: '/games/enginefall/screenshot-10.webp',
 screenshot11: '/games/enginefall/screenshot-11.webp',
 screenshot12: '/games/enginefall/screenshot-12.webp',
 screenshot13: '/games/enginefall/screenshot-13.webp',
 screenshot14: '/games/enginefall/screenshot-14.webp',
 screenshot15: '/games/enginefall/screenshot-15.webp',
};

export const enginefallQuickFacts: EnginefallQuickFact[] = [
 ['Release status', 'Coming soon on Steam with a 2026 release window.', 'verified'],
 ['Current playable access', 'June 2026 playtest and Steam Next Fest demo coverage, not a final launch build.', 'working'],
 ['Developer / Publisher', 'Red Rover Interactive.', 'verified'],
 ['Confirmed platform', 'Windows PC via Steam.', 'verified'],
 ['Console status', 'PS5 and Xbox searches exist, but no official console release is confirmed.', 'needs-check'],
 ['Steam Deck status', 'Not Steam Deck Verified at the time checked; test through the PC build only.', 'needs-check'],
 ['Core loop', 'Raid Titan Trains, scavenge, craft, extract, and upgrade a Dagger shuttle home base.', 'verified'],
 ['Main risk', 'PvP and balance details are playtest-sensitive and may change before launch.', 'working'],
];

export const enginefallSourceRows = [
 {
 claim: 'What is the official Steam status, release window, developer, platform, tags, screenshots, and PC requirement baseline?',
 source: 'Steam official store page',
 status: 'verified' as const,
 href: enginefallSteamUrl,
 note: 'Use Steam for official PC status, 2026 coming-soon state, system requirements, categories, screenshots, and store copy.',
 },
 {
 claim: 'What is Enginefall and what are Titan Trains, Freerailers, Dagger shuttles, and the world premise?',
 source: 'Enginefall official website',
 status: 'verified' as const,
 href: enginefallOfficialUrl,
 note: 'Use the official site for feature language, world terms, screenshot context, Discord, media kit, and the core fantasy.',
 },
 {
 claim: 'What is the June 2026 playtest and demo window?',
 source: 'Official playtest post',
 status: 'verified' as const,
 href: enginefallPlaytestPostUrl,
 note: 'The post says open playtest access begins June 8-14 and demo access runs June 11-22, while other official and media posts use June 8-22 framing.',
 },
 {
 claim: 'Why do some pages describe the test window as June 8-22?',
 source: 'Official date-change post',
 status: 'verified' as const,
 href: enginefallDateChangePostUrl,
 note: 'The date-change post describes the Spring Open Playtest moving to June 8-22. The page copy must acknowledge the date wording difference instead of pretending one version does not exist.',
 },
 {
 claim: 'How does the Conductor route work?',
 source: 'Official Conductor guide',
 status: 'verified' as const,
 href: enginefallConductorPostUrl,
 note: 'Use this for C00, Breacher, Control Room registration, Conductor abilities, Fuel Cores, keycard printing, and extraction cautions.',
 },
 {
 claim: 'What changed in playtest builds around Dagger, schematics, looting, tutorials, and first-time experience?',
 source: 'Official Steam News',
 status: 'working' as const,
 href: enginefallSteamNewsUrl,
 note: 'Steam News is useful for patch-sensitive details. Treat every detail as build-dependent unless it appears on the main Steam page or official site.',
 },
 {
 claim: 'How did an external hands-on preview frame the game?',
 source: 'PC Gamer hands-on',
 status: 'working' as const,
 href: enginefallPCGamerUrl,
 note: 'Use for external impressions about promise, execution risk, first-session pressure, alliances, technical roughness, and PvP survival comparisons.',
 },
 {
 claim: 'Is there media and community interest around the June playtest?',
 source: 'PCGamesN / GamingTrend / Reddit AMA / Steam Discussions',
 status: 'working' as const,
 href: enginefallPCGamesNUrl,
 note: 'Use these as demand and context signals, not as replacements for official facts.',
 },
];

export const enginefallRelatedGuides: GameGuideLink[] = [
 {
 title: 'Enginefall Hub',
 href: '/games/enginefall',
 description:
 'Release date, Steam status, gameplay loop, official site, platforms, screenshots, and guide map.',
 },
 {
 title: 'Playtest, Demo, Key & Discord',
 href: '/games/enginefall-playtest',
 description:
 'June 2026 playtest windows, Steam access, demo timing, Discord, player-count checks, and server-password cautions.',
 },
 {
 title: 'Beginner Guide',
 href: '/games/enginefall-beginner-guide',
 description:
 'How to play, how to extract, what to loot first, how to avoid early PvP mistakes, and how to read the train run.',
 },
 {
 title: 'Conductor Guide',
 href: '/games/enginefall-conductor-guide',
 description:
 'C00 route, Breacher use, Control Room registration, Conductor powers, Fuel Cores, keycard printing, and extraction planning.',
 },
 {
 title: 'Dagger Shuttle Guide',
 href: '/games/enginefall-dagger-guide',
 description:
 'Dagger shuttle role, personal rail base, fuel, storage, schematics, Dagger vs Dagger pressure, and raid preparation.',
 },
 {
 title: 'System Requirements & Platforms',
 href: '/games/enginefall-system-requirements-platforms',
 description:
 'Official PC specs, Steam Deck status, PS5 and Xbox caveats, controller expectations, and platform FAQ.',
 },
];

export function getEnginefallRelated(excludeHref: string) {
 return enginefallRelatedGuides.filter((guide) => guide.href !== excludeHref).slice(0, 6);
}

const enginefallKeywords = [
 'Enginefall',
 'Enginefall game',
 'Enginefall release date',
 'Enginefall Steam',
 'Enginefall playtest',
 'Enginefall demo',
 'Enginefall guide',
 'Enginefall how to play',
 'Enginefall how to extract',
 'Enginefall Conductor',
 'Enginefall Dagger',
 'Enginefall system requirements',
 'Enginefall Steam Deck',
 'Enginefall PS5',
 'Enginefall Xbox',
 'Enginefall Discord',
];

export function createEnginefallMetadata({
 title,
 description,
 canonical,
 image = enginefallImages.hero,
}: {
 title: string;
 description: string;
 canonical: string;
 image?: string;
}): Metadata {
 return {
 title: { absolute: title },
 description,
 keywords: enginefallKeywords,
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

const versionParagraph =
 'This page is written for the June 2026 playtest and Steam Next Fest demo window. Enginefall is still in development, so the safest guide style is to explain confirmed systems, teach decision making, and mark build-sensitive mechanics instead of pretending that the current balance is final launch truth.';

const noFakeParagraph =
 'Enjoy4Game should not invent weapon tier lists, recipe databases, map labels, skill trees, or final build advice for Enginefall yet. Those formats only become useful after stable player data, patch notes, or hands-on captures support them. Until then, the useful content is source-checked guidance that helps players enter the test, survive the first run, and understand where official information ends.';

const commonFaqs = [
 {
 question: 'Is Enginefall released?',
 answer:
 'No. Steam lists Enginefall as Coming Soon with a 2026 release window. Current coverage is based on the June 2026 playtest and demo period, not a final launch build.',
 },
 {
 question: 'What platforms are confirmed for Enginefall?',
 answer:
 'Windows PC via Steam is confirmed. PS5, Xbox, and Steam Deck verification are not confirmed by the official Steam data checked for this guide.',
 },
 {
  question: 'Is PvP forced in Enginefall, or can I play PvE only?',
  answer:
    'PvP is a core part of Enginefall. There is no PvE-only mode confirmed. Other players can contest the same train, control room, and extraction points. If you only want PvE, this game may not fit your expectation.',
},
{
  question: 'Is the tutorial good for beginners?',
  answer:
    'The current playtest tutorial is rough and does not clearly explain extraction, crafting, or train layout. Use this guide alongside the official blog posts to learn the systems.',
},
{
  question: 'Is Enginefall buggy during playtest?',
  answer:
    'Yes, this is a development build. Crashes, desyncs, and missing UI feedback are expected. Report bugs via the official Discord. Dont judge the final game by the playtest build.',
},
];

export const enginefallPages = {
 hub: {
  title: 'Enginefall Guide 2026: Release Date, PS5 & Xbox Status, Gameplay & Playtest Access',
  description:
    'Is Enginefall on PS5 and Xbox? PC via Steam is confirmed, consoles are not officially announced. Get the latest on the 2026 release window, playtest access, system requirements, beginner extraction tips, Conductor role, and Dagger shuttle guide.',
 canonical: '/games/enginefall',
 label: 'Enginefall',
 heroImage: enginefallImages.hero,
 heroAlt: 'Enginefall official Steam screenshot showing a post-apocalyptic train combat scene',
 sourceImage: enginefallImages.screenshot10,
 sourceImageAlt: 'Enginefall official screenshot for hub source verification',
 sourceImageCaption:
 'Official Enginefall sources are strongest for release status, playtest access, platform facts, screenshots, and system names; build-sensitive balance should wait for testing.',
 relatedImage: enginefallImages.screenshot11,
 relatedImageAlt: 'Enginefall official screenshot for hub related guides',
 relatedImageCaption:
 'Move from the hub into the page that matches the player task: playtest access, beginner extraction, Conductor control, Dagger systems, or platform checks.',
 faqImage: enginefallImages.screenshot12,
 faqImageAlt: 'Enginefall official screenshot for hub FAQ section',
 faqImageCaption:
 'The hub FAQ answers the broad questions first: release state, confirmed platforms, PvP framing, and what not to fake before launch.',
  blufTitle: 'What Youll Find in This Enginefall Guide',
  bluf: [
    'Enginefall is a train-based PvP crafting and extraction shooter from Red Rover Interactive, set on colossal post-apocalyptic trains. This guide covers everything players need right now: the 2026 release window, how to get playtest and demo access, system requirements for PC/PS5/Xbox, beginner extraction tips, Conductor role mechanics, and Dagger shuttle base building.',
    versionParagraph,
  ],
 quickFacts: enginefallQuickFacts,
 answerTitle: 'What is Enginefall?',
 answer:
 'Enginefall is a player-driven crafting shooter from Red Rover Interactive set on colossal post-apocalyptic trains. Players start from the tail, raid Titan Trains, scavenge materials, craft gear, extract with loot, and upgrade a Dagger shuttle that acts as a personal rail base.',
 intentRows: [
 {
 query: 'enginefall game',
 answer: 'Enginefall is a train-based PvP crafting and extraction shooter from Red Rover Interactive.',
 href: '#what-is-enginefall',
 label: 'Overview',
 },
 {
 query: 'enginefall release date',
 answer: 'Steam lists a 2026 release window, not a final exact launch day.',
 href: '#release-status',
 label: 'Release',
 },
 {
 query: 'enginefall gameplay',
 answer: 'The loop is raid, loot, craft, fight, extract, and upgrade your Dagger shuttle.',
 href: '#gameplay-loop',
 label: 'Gameplay',
 },
 {
 query: 'is enginefall on ps5 xbox console',
 answer: 'Enginefall is confirmed for PC via Steam. PS5, Xbox Series X|S, and other consoles are not officially announced yet. The developer has not confirmed console release dates.',
 href: '#platforms',
 label: 'PS5 & Xbox',
 },
 ],
 jumpLinks: [
 { href: '#what-is-enginefall', label: 'What it is' },
 { href: '#release-status', label: 'Release' },
 { href: '#gameplay-loop', label: 'Gameplay' },
 { href: '#guide-map', label: 'Guides' },
 { href: '#platforms', label: 'Platforms' },
 ],
 sections: [
 {
 id: 'what-is-enginefall',
 title: 'What Enginefall Is Actually About',
 image: enginefallImages.screenshot1,
 imageAlt: 'Enginefall official screenshot showing combat and train environment',
 caption:
 'Enginefall is not only a train shooter. The official pitch combines rail survival, extraction pressure, crafting, player conflict, and a moving home base.',
 paragraphs: [
 'Enginefall is a multiplayer survival and crafting shooter built around a very specific fantasy: society survives on massive Titan Trains, while Freerailers live outside that system by raiding, stealing fuel, and escaping with whatever they can carry. That gives the game a clearer identity than a generic survival sandbox. The player is not dropped into a forest with a stone axe. The player is pushed onto rails, into class-separated train space, and into conflict over gear, fuel, rooms, routes, and extraction windows.',
'You start in the tail alone or with friends, scavenge materials, craft tools and weapons, push car by car toward First Class, seize better gear, then extract with high-value loot to upgrade your personal Dagger shuttle. Whether you want release dates, playtest access, extraction tips, Dagger base building, or Conductor role guides — this guide cluster covers each topic on its own page.',
  versionParagraph,
 ],
 tableHeadings: ['Topic', 'Current answer', 'Why it matters'],
 rows: [
 ['Game type', 'PvP crafting shooter with extraction and base-building pressure.', 'The core gameplay loop to master.'],
 ['World hook', 'Humanity survives on Titan Trains after a collapse, while Freerailers raid from outside.', 'Your role in the world as a Freerailer.'],
 ['Player home', 'The Dagger shuttle is a personal rail base that can be upgraded.', 'Your personal base and progression system.'],
 ['High-status role', 'The Conductor controls important train functions after reaching C00 and the Control Room.', 'A high-risk, high-reward objective to pursue.'],
 ],
 },
 {
 id: 'release-status',
 title: 'Release Date, Steam Page, and Playtest Status',
 image: enginefallImages.header,
 imageAlt: 'Enginefall official Steam header artwork',
 caption:
 'Steam is the authority for the current release state. The official site and blog explain the June 2026 test window.',
 paragraphs: [
 'Enginefall is not fully released. Steam lists it as Coming Soon with a 2026 release window. You can wishlist it now, join the official Discord for updates, request playtest access when available, and use our June 2026 guides. Keep in mind that balance and mechanics may change before launch.',
 'The playtest date varies across official sources. The June 8 post says open playtest runs June 8-14 and demo runs June 11-22. The earlier date-change post uses June 8-22. The safest window is June 8-22. Always check the live Steam page for real-time access status.',
 'Check back on this page for updates. The game is still in development, and both release dates and test windows can shift rapidly.',
 ],
 tableHeadings: ['Question', 'Answer', 'What to do'],
 rows: [
 ['Is it out?', 'No, Steam lists Coming Soon with a 2026 window.', 'Wishlist on Steam for launch notification.'],
 ['Can players try it?', 'June 2026 playtest and demo access are available.', 'Check our Playtest access guide.'],
 ['Is the demo final?', 'No, it is a development build.', 'Expect bugs, crashes, and balance changes.'],
 ['Where should users click?', 'Steam and the official site.', 'Use official channels only, avoid third-party keys.'],
 ],
 },
 {
 id: 'gameplay-loop',
 title: 'Gameplay Loop: Raid, Craft, Extract, Upgrade',
 image: enginefallImages.screenshot2,
 imageAlt: 'Enginefall official screenshot showing a train corridor and player movement',
 caption:
 'The safest current gameplay explanation is loop-based: what players try to do, what creates pressure, and what changes between runs.',
 paragraphs: [
 'The core loop is simple: start at the lower end of the train, move through dangerous carriages, gather resources, craft gear, fight or avoid other players, and decide when to extract. The one question that matters: what helps you leave alive with value?',
 'The official site describes flexible crafting and build systems. As a beginner, focus on learning the categories: materials, storage, weapons, armor, structures, and timing. Spending everything too early leaves you exposed in harder carriages. Hoarding everything means dying with unused value. Craft what solves your next problem.',
 'The social layer is built around human opponents and temporary allies. A route that works against NPC pressure can fail when another crew contests the same point. Learn conflict signals, retreat planning, and extraction discipline. No route is guaranteed safe.',
 ],
 tableHeadings: ['Loop step', 'What to do', 'Common mistake'],
 rows: [
 ['Enter', 'Start with a specific goal rather than wandering for every item.', 'Treating the train like a safe open-world zone.'],
 ['Loot', 'Prioritize portable value, materials for immediate survival, and extraction support.', 'Dying with inventory full of low-priority clutter.'],
 ['Craft', 'Use crafting to solve the next obstacle, not to chase a perfect build.', 'Waiting for perfect gear before making progress.'],
 ['Extract', 'Leave when the run has value and risk is rising.', 'Staying for one more room until another crew appears.'],
 ],
 },
 {
 id: 'guide-map',
 title: 'Enginefall Guide Map',
 image: enginefallImages.screenshot3,
 imageAlt: 'Enginefall official screenshot used for guide map context',
 caption:
 'Pick the page that matches what you need: playtest access, first-run survival, Conductor role, Dagger base, or platform checks.',
 paragraphs: [
 'We split the guides so you get the right answer fast. If you only want playtest dates and keys, head to the Playtest page. If you need extraction and survival tips, the Beginner Guide is your page. Conductor info, Dagger base building, and platform checks each have their own focused guide.',
 'This hub gives you the core facts. For specific tasks, use the links below or the jump menu to get straight to what you need.',
 noFakeParagraph,
 ],
 tableHeadings: ['Page', 'Who it is for', 'What you will get'],
 rows: [
 ['Playtest guide', 'Players trying to get into the June 2026 build.', 'Steam access steps, demo dates, Discord info, and server tips.'],
 ['Beginner guide', 'First-run players who need survival basics.', 'Gameplay loop, looting priorities, crafting, extraction discipline.'],
 ['Conductor guide', 'Players targeting C00 and Control Room power.', 'Step-by-step route to C00, Breacher timing, registration and powers.'],
 ['Dagger guide', 'Players managing their shuttle base.', 'Upgrade priorities, fuel management, storage, and raid preparation.'],
 ],
 },
 {
 id: 'platforms',
 title: 'PC, PS5, Xbox, and Steam Deck Status',
 image: enginefallImages.screenshot4,
 imageAlt: 'Enginefall official screenshot showing rail environment for platform guide context',
 caption:
 'Autocomplete shows PS5, Xbox, and Steam Deck interest, but official confirmation is narrower than user demand.',
 paragraphs: [
 'The confirmed platform is Windows PC via Steam. PS5 and Xbox have search demand but no official version is confirmed. PC is confirmed, consoles are not. Check official channels for future announcements.',
 'A game can support controllers and run on PC without being Steam Deck Verified. Enginefall adds PvP, online play, and text-heavy UI — all harder on a handheld. Do not expect a smooth Deck experience without official verification.',
 'Steam lists a minimum baseline and warns that requirements are not final during development. Your machine may be near the current floor, but optimization and requirements can change before launch.',
 ],
 tableHeadings: ['Platform', 'Current status', 'What to do'],
 rows: [
 ['PC Steam', 'Confirmed.', 'Enginefall is listed for Windows PC via Steam.'],
 ['PS5', 'Not confirmed.', 'Search demand exists, but no official PS5 version is confirmed.'],
 ['Xbox', 'Not confirmed.', 'Search demand exists, but no official Xbox version is confirmed.'],
 ['Steam Deck', 'Not verified.', 'Treat as unknown until Valve or official testing confirms it.'],
 ],
 },
 ],
 faqs: [
 ...commonFaqs,
 {
 question: 'What is the main Enginefall gameplay loop?',
 answer:
 'The loop is to raid Titan Trains, scavenge resources, craft gear, fight or avoid other players, extract with loot, and upgrade your Dagger shuttle base.',
 },
 {
 question: 'Should Enjoy4Game make Enginefall tier lists now?',
 answer:
 'No. Tier lists, final builds, complete recipes, and full weapon rankings should wait for stable launch or reliable playtest data.',
 },
 ],
 },
 playtest: {
  title: 'Enginefall Playtest 2026 - Dates, Demo Access & How to Get a Key',
  description:
    'The Enginefall June 2026 playtest and demo are live. Here\u2019s how to get Steam access, whether you need a key, where to join Discord, and what is still not final.',
 canonical: '/games/enginefall-playtest',
 label: 'Playtest',
 heroImage: enginefallImages.screenshot1,
 heroAlt: 'Enginefall official screenshot for playtest access guide',
 sourceImage: enginefallImages.screenshot6,
 sourceImageAlt: 'Enginefall official screenshot for playtest source verification',
 sourceImageCaption:
 'Playtest pages must point back to Steam and official Enginefall posts because access windows, demo buttons, and server details can change quickly.',
 relatedImage: enginefallImages.screenshot7,
 relatedImageAlt: 'Enginefall official screenshot for playtest related guides',
 relatedImageCaption:
 'After access questions, most players need beginner survival, extraction, Dagger context, and Conductor route planning.',
 faqImage: enginefallImages.screenshot8,
 faqImageAlt: 'Enginefall official screenshot for playtest FAQ section',
 faqImageCaption:
 'Playtest FAQ content should separate dates, access routes, keys, Discord, and player-count questions from final launch assumptions.',
  blufTitle: 'Quick Playtest Answer',
  bluf: [
    'The Enginefall June 2026 playtest and demo are active. Steam is the official access route. Discord helps with updates and support. Avoid third-party key claims. This guide explains the exact dates, how Steam access works, and whats not final yet.',
    versionParagraph,
  ],
 quickFacts: [
 ['Main window', 'Official and media wording centers the June 2026 access period around June 8-22.', 'working'],
 ['Playtest wording', 'The June 8 official post names June 8-14 for open playtest access.', 'verified'],
 ['Demo wording', 'The same post names June 11-22 for demo access.', 'verified'],
 ['Access source', 'Steam is the official place to request or enter access when available.', 'verified'],
 ['Discord role', 'Discord is useful for support, announcements, and feedback, not a guaranteed key source.', 'working'],
 ['Final content?', 'No. Playtest and demo content should be treated as development builds.', 'verified'],
 ],
 answerTitle: 'How do you access the Enginefall playtest?',
 answer:
 'Use the Steam store page and official Enginefall channels. The June 2026 public access window is described around June 8-22, with official post wording separating open playtest and demo dates. Discord can help with updates and support, but it should not be described as a guaranteed key source.',
 intentRows: [
 {
 query: 'enginefall playtest dates',
 answer: 'Use June 8-22 as the broad June 2026 window, with specific official posts separating playtest and demo dates.',
 href: '#dates',
 label: 'Dates',
 },
 {
 query: 'enginefall playtest key',
 answer: 'Steam access is the official route. Avoid third-party key claims unless verified by the developer.',
 href: '#access',
 label: 'Access',
 },
 {
 query: 'enginefall discord',
 answer: 'Discord is for community updates, bug reports, support, and feedback.',
 href: '#discord',
 label: 'Community',
 },
 {
 query: 'enginefall player count',
 answer: 'Playtest player counts are directional only and may not represent launch demand.',
 href: '#player-count',
 label: 'Metrics',
 },
 ],
 jumpLinks: [
 { href: '#dates', label: 'Dates' },
 { href: '#access', label: 'Access' },
 { href: '#discord', label: 'Discord' },
 { href: '#player-count', label: 'Player count' },
 { href: '#what-to-test', label: 'What to test' },
 ],
 sections: [
 {
 id: 'dates',
 title: 'June 2026 Dates Without Hiding the Conflict',
 image: enginefallImages.header,
 imageAlt: 'Enginefall official Steam header for June 2026 playtest timing',
 caption:
 'The safest date answer acknowledges that official posts use overlapping but not identical wording.',
 paragraphs: [
 'The Enginefall June 2026 playtest uses slightly different dates across official sources. The official June 8 post says open playtest runs June 8-14 and demo runs June 11-22. The earlier date-change post uses June 8-22. PCGamesN and GamingTrend also frame the public test around June 8-22.',
 'The broader access period is June 8-22. You may see either date range on different platforms — this is normal. The key dates: playtest access June 8-14, demo access June 11-22.',
 'Playtest windows can shift and demo buttons may appear or disappear. Always check the live Steam page for real-time access status.',
 versionParagraph,
 ],
 tableHeadings: ['Date wording', 'Source-aware answer', 'User action'],
 rows: [
 ['June 8-14', 'Official June 8 post names this as the open playtest span.', 'Check Steam access during the playtest period.'],
 ['June 11-22', 'Official June 8 post names this as demo availability.', 'Use the Steam Next Fest demo window when visible.'],
 ['June 8-22', 'Official date-change and media coverage use this broader framing.', 'Treat this as the public June access window.'],
 ['After June 22', 'Access may end or change after the demo window.', 'Do not trust outdated key or password posts.'],
 ],
 },
 {
 id: 'access',
 title: 'Steam Access, Keys, and Server Password Searches',
 image: enginefallImages.screenshot2,
 imageAlt: 'Enginefall official screenshot for Steam access and playtest key context',
 caption:
 'Players searching for keys and passwords usually need official access guidance, not risky third-party promises.',
 paragraphs: [
 'The safest access route is Steam. If you see a playtest request, demo button, or store-page access option on Steam, use it. Do not trust random key sites or unverified Discord posts. Players often search for keys and passwords because they cannot find the button, do not know whether access is automatic, or see discussions about private test servers.',
 'Only trust keys, passwords, or invites from Steam, the official Enginefall team, or official community announcements. If a third-party site claims instant access, treat it as suspicious. This matters because closed tests and public demos may overlap in an unreleased multiplayer game.',
 'Joining the Discord, requesting playtest access, or wishlisting does not guarantee a slot unless the official team says so. If you are searching for a key and cannot find one, you are probably not missing a hidden step — it simply may not be required.',
 ],
 tableHeadings: ['Access question', 'Direct answer', 'Risk'],
 rows: [
 ['Do I need a key?', 'Use Steam or official announcements as the source of truth.', 'Third-party key claims can be stale or unsafe.'],
 ['Is Discord required?', 'No official checked source makes Discord the only access route.', 'Do not treat community membership as guaranteed access.'],
 ['What is server password?', 'Likely friction from private or timed test access.', 'Avoid posting passwords unless officially public.'],
 ['Can I review the build?', 'You can discuss impressions, but the build is not final.', 'Avoid final verdict language.'],
 ],
 },
 {
 id: 'discord',
 title: 'Discord, Feedback, and Bug Reports',
 image: enginefallImages.screenshot3,
 imageAlt: 'Enginefall official screenshot for Discord feedback and community context',
 caption:
 'The official blog repeatedly points players toward Discord for support and feedback during testing.',
 paragraphs: [
 'Discord is where the Enginefall team posts updates, handles bug reports, collects feedback, and manages the playtest community. If you are stuck, confused by access, or unsure if a bug is known, join the official Discord.',
 'Use Discord for: announcement updates, bug report channels, surveys, player feedback, clip sharing, and finding teammates. Discord is NOT a guaranteed key source, a replacement for Steam access, or final documentation for launch mechanics.',
 'If you hit a bug: note what happened, where it happened, whether you can reproduce it, and attach screenshots or clips. For balance feedback: explain what system felt wrong and why, rather than just venting. Structured reports get faster fixes.',
 ],
 tableHeadings: ['Discord use', 'Good for', 'Not good for'],
 rows: [
 ['Announcements', 'Checking test updates and official posts.', 'Replacing the Steam store page.'],
 ['Bug reports', 'Sharing reproduction steps, screenshots, and clips.', 'Posting vague complaints with no context.'],
 ['Feedback', 'Explaining confusing systems and balance pain points.', 'Treating playtest balance as final.'],
 ['Community', 'Finding discussion and group context.', 'Trusting every access claim from random users.'],
 ],
 },
 {
 id: 'player-count',
 title: 'Player Count, Steam Charts, and Review Searches',
 image: enginefallImages.screenshot4,
 imageAlt: 'Enginefall official screenshot for player count and review context',
 caption:
 'Playtest metrics can show interest, but they do not measure the final launch population.',
 paragraphs: [
 'Enginefall player count searches make sense — multiplayer survival games live or die by population. But playtest numbers are not launch numbers. They depend on test window, region, time of day, invite flow, Steam visibility, demo availability, and server structure. Do not treat a temporary test spike or dip as the final verdict.',
 'PC Gamer hands-on coverage is valuable for external impressions. Steam discussions reveal real user concerns: PvP, solo friction, controller support, access issues, and server questions. Neither source is a finished review. The test is worth trying if you enjoy PvP extraction games and can handle rough edges. Skip it if you want a polished PvE survival experience.',
 'If your first session is confusing, use our Beginner Guide for the gameplay loop, extraction, and crafting system. Enginefall may not fit you if you want a pure PvE survival game with no player threat.',
 ],
 tableHeadings: ['Metric', 'What it can show', 'What it cannot prove'],
 rows: [
 ['Playtest player count', 'Short-term interest during an access window.', 'Final launch population.'],
 ['Steam Charts', 'Directional activity when a public app is visible.', 'Full audience including hidden tests or future launch.'],
 ['Reddit/Discord volume', 'Questions, friction, and community energy.', 'Commercial success.'],
 ['Hands-on previews', 'External impressions of the current build.', 'Final review quality.'],
 ],
 },
 {
 id: 'what-to-test',
 title: 'What Players Should Test First',
 image: enginefallImages.screenshot5,
 imageAlt: 'Enginefall official screenshot for first playtest priorities',
 caption:
 'A good playtest guide helps users produce useful feedback while also improving their own first session.',
 paragraphs: [
 'The first playtest session should not try to master everything. Players should test the entry flow, tutorial clarity, movement, looting readability, crafting prompts, extraction signals, Dagger return behavior, combat feel, and how quickly PvP pressure arrives. Those are the systems that determine whether a new player understands the game before another crew interrupts the run.',
 'Players should also take notes. If a door, crafting station, inventory item, or extraction cue is unclear, write down where it happened. If performance drops, note the hardware, settings, and scene. If the player dies without understanding why, note whether the problem was audio, UI, enemy readability, or another player.',
 ],

 tableHeadings: ['Test area', 'What to watch', 'Why it matters'],
 rows: [
 ['Tutorial', 'Whether first-time goals are clear.', 'New player retention depends on the first route.'],
 ['Looting', 'Whether value and usefulness are readable.', 'Extraction games need fast inventory decisions.'],
 ['Dagger', 'Whether return, storage, and fuel rules make sense.', 'The Dagger is the long-term home base.'],
 ['PvP', 'Whether encounters feel readable and escapable.', 'Player conflict is core to Enginefall.'],
 ],
 },
 ],
 faqs: [
 ...commonFaqs,
 {
 question: 'What are the Enginefall playtest dates?',
 answer:
 'Official wording centers the June 2026 access window around June 8-22, with one official post separating June 8-14 open playtest access and June 11-22 demo access.',
 },
 {
 question: 'Do I need an Enginefall playtest key?',
 answer:
 'Use Steam and official Enginefall channels as the source of truth. Do not trust third-party key or server-password claims unless the developer confirms them.',
 },
 {
 question: 'Is the Enginefall demo final content?',
 answer:
 'No. The demo and playtest build are development-stage content, so mechanics, balance, access, and requirements can change before launch.',
 },
 ],
 },
 beginner: {
  title: 'Enginefall Beginner Guide - How to Survive Your First Run & Extract',
  description:
    'New to Enginefall? Learn the core loop: how to loot with purpose, when to craft, how to extract before dying, and how to survive your first PvP encounter.',
 canonical: '/games/enginefall-beginner-guide',
 label: 'Beginner Guide',
 heroImage: enginefallImages.screenshot2,
 heroAlt: 'Enginefall official screenshot for beginner guide',
 sourceImage: enginefallImages.screenshot8,
 sourceImageAlt: 'Enginefall official screenshot for beginner guide source verification',
 sourceImageCaption:
 'Beginner advice should teach decisions that survive patches: route reading, extraction timing, crafting purpose, and PvP caution.',
 relatedImage: enginefallImages.screenshot9,
 relatedImageAlt: 'Enginefall official screenshot for beginner guide related links',
 relatedImageCaption:
 'Once the first run makes sense, continue into playtest access, Conductor, Dagger, and platform guidance.',
 faqImage: enginefallImages.screenshot10,
 faqImageAlt: 'Enginefall official screenshot for beginner guide FAQ',
 faqImageCaption:
 'The beginner FAQ keeps answers practical and avoids unstable tier lists, complete recipes, and final build claims.',
  blufTitle: 'Your First Run Survival Plan',
  bluf: [
    'Your first Enginefall goal is not to clear the whole train. It is to understand the loop, leave with value, and learn what killed you. Move with a purpose, loot only what helps survival, craft to solve the next obstacle, avoid ego fights, and extract before the run turns into a trap.',
    versionParagraph,
  ],
 quickFacts: [
 ['Best first goal', 'Complete a modest loot-and-extract run instead of chasing First Class immediately.', 'working'],
 ['Main threat', 'Other players, contested rooms, confusion, and staying too long.', 'working'],
 ['First habit', 'Check exits before committing to looting or crafting.', 'working'],
 ['Crafting rule', 'Craft for the next obstacle, not for a perfect final build.', 'working'],
 ['Solo warning', 'Solo play is possible to attempt, but the current pitch is social PvP pressure.', 'needs-check'],
 ['Guide boundary', 'No final weapon ranking or recipe list until stable data exists.', 'verified'],
 ],
 answerTitle: 'How should beginners play Enginefall?',
 answer:
 'Beginners should treat Enginefall like an extraction run on rails: enter with a goal, loot only what helps survival or progression, craft practical tools, watch for other players, and extract once the run has enough value.',
 intentRows: [
 {
 query: 'enginefall how to play',
 answer: 'Play around the raid, loot, craft, extract, and Dagger upgrade loop.',
 href: '#first-run',
 label: 'Basics',
 },
 {
 query: 'enginefall how to extract',
 answer: 'Plan extraction before overcommitting to deeper rooms or high-risk fights.',
 href: '#extraction',
 label: 'Extract',
 },
 {
 query: 'enginefall crafting',
 answer: 'Craft to solve immediate problems; avoid pretending recipe balance is final.',
 href: '#crafting',
 label: 'Crafting',
 },
 {
 query: 'enginefall solo',
 answer: 'Solo players should move slower and avoid fights they do not need.',
 href: '#solo-pvp',
 label: 'Solo',
 },
 {
 query: 'is enginefall on xbox ps5 console',
 answer: 'Enginefall is confirmed for PC via Steam. PS5, Xbox Series X|S, and console releases are not officially announced yet. Check the official Steam page for platform updates.',
 href: '#console-faq',
 label: 'Console',
 },
 ],
 jumpLinks: [
 { href: '#first-run', label: 'First run' },
 { href: '#looting', label: 'Looting' },
 { href: '#crafting', label: 'Crafting' },
 { href: '#extraction', label: 'Extraction' },
 { href: '#solo-pvp', label: 'Solo/PvP' },
 { href: '#console-faq', label: 'PS5 & Xbox' },
 ],
 sections: [
 {
 id: 'first-run',
 title: 'First Run Mindset: Learn the Loop Before You Chase Status',
 image: enginefallImages.screenshot3,
 imageAlt: 'Enginefall official screenshot showing train route pressure',
 caption:
 'Your first run goal: survive, extract with value, and learn what killed you. Save deeper objectives for later runs.',
 paragraphs: [
 'Do not aim to become the best raider on run one. Enginefall combines PvP, crafting, extraction, train progression, and Dagger base building. Your first victory is understanding how these pieces connect. Enter with one small target: find useful materials, read the train layout, craft one practical item, and extract without fighting everything.',
 'You start in the tail and push car by car toward better gear and First Class. The early carriages are your training ground — learn item recognition, threat timing, player movement patterns, and exit locations. Sprinting forward without a retreat plan turns the run into lost inventory, not learning.',
 'Before looting deeply, check three things: a route back, a route forward, and a reason to stay. If none are clear, slow down. Enginefall is about judging whether the next room is worth the time and risk — not just aim.',
 versionParagraph,
 ],
 tableHeadings: ['Beginner habit', 'Do this', 'Avoid this'],
 rows: [
 ['Set a goal', 'Choose a small target before entering deeper rooms.', 'Trying to clear every carriage.'],
 ['Read exits', 'Notice how to leave before looting.', 'Looting with no escape plan.'],
 ['Listen for players', 'Treat noise as information.', 'Assuming every encounter is PvE.'],
 ['Bank learning', 'Extract after useful progress.', 'Staying until the run collapses.'],
 ],
 },
 {
 id: 'looting',
 title: 'Looting: Carry Value You Can Actually Extract',
 image: enginefallImages.screenshot4,
 imageAlt: 'Enginefall official screenshot for looting and train movement',
 caption:
 'The best early loot is not the flashiest item. It is the item that helps the current run survive and the Dagger improve.',
 paragraphs: [
 'Prioritize items that solve immediate problems: survival, crafting your next tool, or Dagger progression. A full inventory means nothing if you die before extraction.',
 'Ask yourself: what job does this item do before I leave? If it helps survivability, opens a route, supports crafting, fuels the Dagger, or has clear extraction value — keep it. If you cannot explain its use, it is clutter. Item balance changes during playtests, so learning to judge for yourself is more useful than memorizing static value lists.',
 ],
 tableHeadings: ['Loot type', 'Why it matters', 'Beginner rule'],
 rows: [
 ['Survival item', 'Helps you live through the next room or retreat.', 'Keep if risk is rising.'],
 ['Crafting material', 'Turns into immediate tools, gear, or structures.', 'Keep if you know the next craft.'],
 ['Dagger support', 'May help fuel, storage, or long-term base value.', 'Prioritize if you can extract.'],
 ['Unknown clutter', 'Might be useful later but costs space now.', 'Drop if it blocks clear value.'],
 ],
 },
 {
 id: 'crafting',
 title: 'Crafting: Build for the Next Obstacle',
 image: enginefallImages.screenshot5,
 imageAlt: 'Enginefall official screenshot for crafting and combat preparation',
 caption:
 'Enginefall crafting is useful when it solves the next problem. It is risky when it becomes menu time in a dangerous route.',
 paragraphs: [
 'Craft for the next obstacle: survival, access, combat, storage, or extraction support.',
 'Avoid two extremes: ignoring crafting (every fight becomes harder) and spending too long crafting (other players move through the train). Craft when the benefit is clear and the area is controlled. If you cannot protect the crafting time, your work becomes a donation to the next crew.',
 'Think in roles, not rankings. Defensive crafts help you survive. Access crafts open locked spaces. Extraction crafts help you leave with value.',
 ],
 tableHeadings: ['Craft role', 'When to use it', 'How to decide'],
 rows: [
 ['Survival', 'When the next room is likely to involve damage.', 'Survival value remains useful across patches.'],
 ['Access', 'When a door, carriage, or objective blocks progress.', 'Access tools are tied to goals, not rankings.'],
 ['Storage/base', 'When extracted value needs long-term use.', 'The Dagger loop makes storage meaningful.'],
 ['Extraction', 'When you have enough loot to protect.', 'Leaving alive is better than overbuilding.'],
 ],
 },
 {
 id: 'extraction',
 title: 'Extraction: Leave Before the Run Turns Against You',
 image: enginefallImages.screenshot6,
 imageAlt: 'Enginefall official screenshot for extraction and escape planning',
 caption:
 'Extraction is the moment where a good run becomes real progression. Staying too long is often the most expensive beginner mistake.',
 paragraphs: [
 'The beginner extraction rule is simple: decide what makes the run worth leaving before the run starts. If the player waits until panic, low resources, or another crew forces the decision, extraction becomes harder. Enginefall rewards ambition, but it also punishes players who confuse one good room with permission to clear the whole train.',
 'Before pushing deeper, ask three questions. Do I know where I can leave? Do I have enough value to justify leaving now? If another player appears, can I escape without winning a perfect fight? If the answer to those questions is weak, bank the progress. A small successful extraction teaches more and upgrades more than a heroic death with full pockets.',
 'The official Conductor guide reinforces this mindset because even after reaching a powerful role, the final instruction is still to get out alive with Conductor loot. That tells us how to frame beginner extraction: status does not matter unless the player survives the exit.',
 ],
 tableHeadings: ['Extraction signal', 'Meaning', 'Beginner response'],
 rows: [
 ['Inventory has clear value', 'The run can already improve your account or Dagger.', 'Start looking for exit timing.'],
 ['Resources are low', 'Another fight may be too expensive.', 'Avoid deeper rooms.'],
 ['Player noise rises', 'A contested route is forming.', 'Leave or reposition.'],
 ['Objective complete', 'The run has served its purpose.', 'Extract before greed takes over.'],
 ],
 },
 {
 id: 'solo-pvp',
 title: 'Solo and PvP: Play Slower, Not Braver',
 image: enginefallImages.screenshot7,
 imageAlt: 'Enginefall official screenshot for PvP and solo caution',
 caption:
 'Enginefall is built around player conflict. Solo players should treat information and exits as their main defense.',
 paragraphs: [
 'Enginefall is a social multiplayer sandbox built around human opponents and allies. You can play solo, but set realistic expectations. Success is not winning every duel — it is avoiding bad fights, extracting with modest value, and learning routes without donating your inventory to another crew.',
 'Move slower than squads. Avoid noisy commitments. Treat contested objectives as optional unless the reward outweighs the risk. If two groups are fighting, you do not need to become the third. Wait, listen, move around the pressure, or leave. This is extraction discipline, not cowardice.',
 'There is no PvE-only mode confirmed. Official positioning centers on PvP, Dagger conflicts, raids, and social features. If you want a pure PvE survival game with no player threat, Enginefall may not be the right fit for you.',
 ],
 tableHeadings: ['Solo problem', 'Practical response', 'Bad habit'],
 rows: [
 ['Outnumbered fights', 'Avoid unnecessary contact and rotate early.', 'Taking every duel.'],
 ['No backup', 'Keep exits in mind before opening inventory or crafting.', 'Standing still in unsafe rooms.'],
 ['Route uncertainty', 'Extract sooner and repeat small learning runs.', 'Pushing deep while lost.'],
 ['PvP frustration', 'Decide whether the game fit is right for you.', 'Expecting a pure PvE survival loop.'],
 ],
 },
 {
 id: 'console-faq',
 title: 'Is Enginefall on PS5, Xbox, or Console?',
 image: enginefallImages.screenshot5,
 imageAlt: 'Enginefall official screenshot for platform and console FAQ',
 caption:
 'Enginefall is confirmed for PC via Steam. Console releases are not officially announced.',
 paragraphs: [
 'The most common question from new Enginefall players is whether the game is available on PlayStation 5, Xbox Series X|S, or other consoles. As of the latest official information, Enginefall is confirmed for PC via Steam only. Red Rover Interactive has not announced PS5, Xbox, or other console release dates.',
 'If you are searching for "is Enginefall on PS5" or "is Enginefall on Xbox," the short answer is no — not yet. The developer has focused on the PC Steam launch first, including playtests and demos on that platform. Console ports have not been confirmed, and no release window has been given for PlayStation or Xbox.',
 'The best way to stay updated on platform announcements is to follow the official Enginefall Steam page and Red Rover Interactive\'s social channels. For now, if you want to play Enginefall, you will need a Windows PC that meets the minimum system requirements.',
 ],
 tableHeadings: ['Platform', 'Status', 'Notes'],
 rows: [
 ['PC (Steam)', 'Confirmed', 'Playtests, demos, and launch all on Steam.'],
 ['PS5', 'Not announced', 'No official PlayStation release date or confirmation.'],
 ['Xbox Series X|S', 'Not announced', 'No official Xbox release date or confirmation.'],
 ['Steam Deck', 'Not confirmed', 'No official Steam Deck compatibility announced.'],
 ['Other consoles', 'Not announced', 'No Switch or other platform announcements.'],
 ],
 },
 ],
 faqs: [
 ...commonFaqs,
 {
 question: 'How do you extract in Enginefall?',
 answer:
 'Plan extraction before pushing too deep. Leave once the run has clear value, resources are low, objective progress is complete, or player pressure is rising.',
 },
 {
 question: 'What should beginners loot first in Enginefall?',
 answer:
 'Prioritize items that help immediate survival, crafting for the next obstacle, Dagger support, or extraction value. Avoid filling inventory with items you cannot use or safely extract.',
 },
 {
 question: 'Can solo players enjoy Enginefall?',
 answer:
 'Solo players can attempt cautious runs, but the current pitch is built around multiplayer PvP pressure. Solo players should avoid unnecessary fights and extract earlier.',
 },
 {
 question: 'Is Enginefall on PS5 or Xbox?',
 answer:
 'No. Enginefall is currently confirmed for PC via Steam only. PS5, Xbox Series X|S, and other console releases have not been officially announced by Red Rover Interactive. Check the Steam page for platform updates.',
 },
 ],
 },
 conductor: {
  title: 'Enginefall Conductor Guide: How to Become Conductor, Reach C00, Breacher Setup & Role Powers',
  description:
    'Complete Enginefall Conductor role guide: step-by-step how to become Conductor, reach Carriage C00, craft and plant the Breacher, register in the Control Room, unlock Conductor powers (Fuel Cores, keycard printing, announcements), and extract safely with your loot.',
  canonical: '/games/enginefall-conductor-guide',
 label: 'Conductor Guide',
 heroImage: enginefallImages.screenshot3,
 heroAlt: 'Enginefall official screenshot for Conductor guide',
 sourceImage: enginefallImages.screenshot8,
 sourceImageAlt: 'Enginefall official screenshot for Conductor source verification',
 sourceImageCaption:
 'The Conductor page is grounded in the official C00, Breacher, Control Room, Fuel Core, keycard, and extraction guidance.',
 relatedImage: enginefallImages.screenshot9,
 relatedImageAlt: 'Enginefall official screenshot for Conductor related guides',
 relatedImageCaption:
 'Conductor planning connects naturally to Dagger fuel value, beginner extraction habits, and playtest access details.',
 faqImage: enginefallImages.screenshot10,
 faqImageAlt: 'Enginefall official screenshot for Conductor FAQ',
 faqImageCaption:
 'Conductor FAQ answers focus on what official sources confirm and avoid exact timers or costs that may change.',
  blufTitle: 'Quick Conductor Answer',
  bluf: [
    'The Conductor is a powerful role earned mid-run, not a starting class. Reach Carriage C00, craft and plant a Breacher, enter the Control Room, register as Conductor, use the role powers, then extract before dying. This guide explains every step and the risks.',
    versionParagraph,
  ],
 quickFacts: [
 ['Target carriage', 'C00 and the Control Room.', 'verified'],
 ['Required access', 'Craft and plant a Breacher to enter locked Control Room access.', 'verified'],
 ['Role unlock', 'Register as Conductor inside the Control Room.', 'verified'],
 ['Role powers', 'Announcements, top-tier crafting, Conductor clothing, Fuel Cores, fuel resources, and keycard printing.', 'verified'],
 ['Main danger', 'The Control Room route is a likely combat flashpoint.', 'working'],
 ['Final goal', 'Extract with the loot and role value before the run goes sideways.', 'verified'],
 ],
 answerTitle: 'How do you become Conductor in Enginefall?',
 answer:
 'Travel through the train to Carriage C00, craft and plant a Breacher to enter the locked Control Room path, register as Conductor inside, use the role powers quickly, and leave through extraction with the loot you can protect.',
 intentRows: [
 {
 query: 'enginefall conductor',
 answer: 'Conductor is a powerful role earned inside the Control Room rather than a starting class.',
 href: '#role',
 label: 'Role',
 },
 {
 query: 'how to become conductor enginefall',
 answer: 'Reach C00, breach the locked area, register in the Control Room, then extract.',
 href: '#steps',
 label: 'Steps',
 },
 {
 query: 'enginefall breacher',
 answer: 'The Breacher is the access tool used to force entry toward the Control Room.',
 href: '#breacher',
 label: 'Access',
 },
 {
 query: 'enginefall fuel cores',
 answer: 'Fuel Cores are one of the resources the Conductor can produce from the Control Room.',
 href: '#powers',
 label: 'Powers',
 },
 ],
 jumpLinks: [
 { href: '#role', label: 'Role' },
 { href: '#steps', label: 'Steps' },
 { href: '#breacher', label: 'Breacher' },
 { href: '#powers', label: 'Powers' },
 { href: '#extract', label: 'Extract' },
 ],
 sections: [
 {
 id: 'role',
 title: 'What the Conductor Role Means',
 image: enginefallImages.screenshot1,
 imageAlt: 'Enginefall official screenshot for Conductor role context',
 caption:
 'Conductor is a role earned during a run. It is powerful because it controls systems, crafting, fuel, and communication.',
 paragraphs: [
 'Conductor is not a starting class or cosmetic title. You earn it during a run by reaching the correct carriage, breaching access, and registering in the Control Room. The official guide describes it as a high-power position at the center of the action.',
 'Here is what you need to know: where the route starts, why C00 matters, when to craft the Breacher, what danger to expect near the Control Room, what powers unlock after registration, and when to leave.',
 'The role rewards movement through the train, contesting important rooms, using crafted access tools, and turning temporary control into extracted value. If you become Conductor but die before leaving, the run still fails.',
 versionParagraph,
 ],
 tableHeadings: ['Conductor concept', 'Meaning', 'Player takeaway'],
 rows: [
 ['Earned role', 'You become Conductor during the run.', 'Plan route and materials before attempting it.'],
 ['Control Room', 'The role is tied to a specific high-value location.', 'Expect other players to contest it.'],
 ['System power', 'The role unlocks communication, crafting, and fuel options.', 'Use powers quickly and deliberately.'],
 ['Extraction required', 'The role matters only if you leave with value.', 'Do not stay just to show control.'],
 ],
 },
 {
 id: 'steps',
 title: 'Step-by-Step Conductor Route',
 image: enginefallImages.screenshot2,
 imageAlt: 'Enginefall official screenshot for C00 route planning',
 caption:
 'The official route is clear enough to teach, but each step needs a risk note because C00 will attract attention.',
 paragraphs: [
 'The high-level route is direct. Travel through the train until reaching Carriage C00. The main entry doors are locked, so the player needs to craft a Breacher. After planting the Breacher and waiting for completion, the player can force entry. From there, move up into the Control Room and register as Conductor.',
 'The risk is in the timing. Any step that requires waiting, planting, or moving through a known high-value point can attract another crew. Beginners should not treat the route like a solo puzzle. They should assume that sound, door state, and player movement can expose the attempt. A team should assign roles before starting: one player handles the objective, another watches approach angles, and another prepares extraction or retreat.',
 'Solo players can still learn the route conceptually, but they should be more cautious about committing to a full Conductor attempt in a live PvP environment. Reaching the area, learning the layout, and leaving with moderate loot may be a better first goal than forcing a Control Room contest without support.',
 ],
 tableHeadings: ['Step', 'Action', 'Risk note'],
 rows: [
 ['1. Reach C00', 'Move through the train toward the Control Room carriage.', 'The deeper route is more contested.'],
 ['2. Prepare Breacher', 'Craft the required access tool before the locked entry.', 'Do not craft exposed if player noise is nearby.'],
 ['3. Plant Breacher', 'Start the forced-entry process.', 'Waiting can reveal your plan.'],
 ['4. Register', 'Enter the Control Room and claim Conductor.', 'Claim fast and avoid lingering.'],
 ],
 },
 {
 id: 'breacher',
 title: 'Breacher Timing and Control Room Entry',
 image: enginefallImages.screenshot4,
 imageAlt: 'Enginefall official screenshot for Breacher timing and entry risk',
 caption:
 'The Breacher is not just a key. It is a commitment that can turn the route into a public fight.',
 paragraphs: [
 'The Breacher is the key route detail because it turns a locked Control Room path into an active objective. A beginner might think of it as a simple door opener, but in a PvP game it is also a signal. Planting a Breacher says that someone is trying to take a valuable room. Any player who understands that value may push, wait, or ambush.',
 'Good Breacher timing begins before the craft. Check whether your inventory supports the attempt, whether teammates know their roles, whether extraction is still realistic, and whether the area is too noisy. If the route is already contested, the Breacher may become a bait tool rather than a safe entry tool. That does not make it bad. It means the player needs to know what fight they are starting.',
 'Exact timers, costs, and counters can change between builds. The stable process is: prepare, secure, plant, watch, enter, register, and leave.',
 ],
 tableHeadings: ['Timing check', 'Good sign', 'Bad sign'],
 rows: [
 ['Inventory', 'You have the materials and support items ready.', 'You still need to search exposed rooms.'],
 ['Area sound', 'Nearby space is quiet or controlled.', 'Multiple players are already fighting close by.'],
 ['Team roles', 'Someone watches entry while someone handles objective.', 'Everyone stares at the same door.'],
 ['Exit plan', 'You know how to leave after registration.', 'You only planned how to get in.'],
 ],
 },
 {
 id: 'powers',
 title: 'What Conductor Unlocks',
 image: enginefallImages.screenshot5,
 imageAlt: 'Enginefall official screenshot for Conductor powers and crafting context',
 caption:
 'The official guide names the broad power set. Use these as guidelines, not exact stats.',
 paragraphs: [
 'The official Conductor guide lists several powerful actions: communicate with the entire train through announcements and messages, craft the highest-tier weapons and armor, create Conductor-exclusive clothing, produce Fuel Cores directly from the Control Room, craft fuel-related resources outside the train such as fuel nodes and shards, and print a Control Room keycard for easier access.',
 'That list is enough to explain why the role is contested. It touches communication, gear quality, fuel economy, identity items, and access control. It also creates several future SEO branches, but those branches should not be split until player search data appears. For now, one Conductor page can cover the powers and link to the Dagger guide for fuel/base context.',
 'Players should use powers according to the run state. If extraction risk is high, printing access or producing the most immediately useful fuel or gear may matter more than experimenting with every option. If the area is secure and teammates are holding space, the group can spend more time converting the role into long-term value. The key is not to become Conductor and then freeze.',
 ],
 tableHeadings: ['Power area', 'Officially described function', 'Practical guide angle'],
 rows: [
 ['Communication', 'Announcements and messages to the whole train.', 'Use information and pressure deliberately.'],
 ['Crafting', 'Highest-tier weapons and armor.', 'Craft what supports survival and extraction.'],
 ['Fuel', 'Fuel Cores and fuel-related resources.', 'Connect role value to Dagger and train progression.'],
 ['Access', 'Control Room keycard printing.', 'Protect future movement without overstaying.'],
 ],
 },
 {
 id: 'extract',
 title: 'Getting Out Alive After Becoming Conductor',
 image: enginefallImages.screenshot6,
 imageAlt: 'Enginefall official screenshot for Conductor extraction planning',
 caption:
 'The Conductor run is not complete at registration. The official guide still tells players to extract.',
 paragraphs: [
 'The official guide ends with the most important reminder: once you have gathered what you need, leave. That should shape the entire page. Becoming Conductor is not the finish line. It is the point where the run becomes more valuable and more dangerous. Other players may know the room is active, teammates may overstay to craft more, and the group may forget that extracted value is the real reward.',
 'A clean Conductor extraction starts before registration. Decide what value is enough, which exit is closest, who carries what, and whether the group will fight or disengage if challenged. If the team has no answer, they are not ready to turn the role into progress.',
 ],

 tableHeadings: ['After registration', 'Do this', 'Do not do this'],
 rows: [
 ['Choose value', 'Take the role output that matters for the run.', 'Try every option while exposed.'],
 ['Assign carriers', 'Know who holds key loot or resources.', 'Let everyone grab randomly.'],
 ['Move to exit', 'Leave before the area becomes a trap.', 'Wait for another crew to arrive.'],
 ['Review attempt', 'Note what blocked or enabled success.', 'Assume one route works forever.'],
 ],
 },
 ],
 faqs: [
 ...commonFaqs,
 {
 question: 'Where is the Conductor in Enginefall?',
 answer:
 'The Conductor route leads to Carriage C00 and the Control Room. Players must breach access and register inside the Control Room.',
 },
 {
 question: 'What does the Breacher do in Enginefall?',
 answer:
 'The Breacher is used to force entry toward the Control Room route. Treat it as both an access tool and a PvP signal.',
 },
 {
 question: 'What can the Conductor do?',
 answer:
 'The official guide lists whole-train communication, high-tier crafting, Conductor clothing, Fuel Core production, fuel resources, and Control Room keycard printing.',
 },
 ],
 },
 dagger: {
  title: 'Enginefall Dagger Guide - Shuttle Base, Fuel & Upgrade Priorities',
  description:
    'Learn about the Dagger shuttle in Enginefall: your personal rail base for storing loot, upgrading gear, managing fuel, and preparing for the next raid.',
 canonical: '/games/enginefall-dagger-guide',
 label: 'Dagger Guide',
 heroImage: enginefallImages.screenshot4,
 heroAlt: 'Enginefall official screenshot for Dagger shuttle guide',
 sourceImage: enginefallImages.screenshot8,
 sourceImageAlt: 'Enginefall official screenshot for Dagger source verification',
 sourceImageCaption:
 'Dagger coverage uses official world and playtest language for shuttle, base, fuel, schematics, and Dagger vs Dagger pressure.',
 relatedImage: enginefallImages.screenshot9,
 relatedImageAlt: 'Enginefall official screenshot for Dagger related guides',
 relatedImageCaption:
 'Dagger planning links back to extraction habits, playtest status, Conductor fuel value, and platform checks.',
 faqImage: enginefallImages.screenshot10,
 faqImageAlt: 'Enginefall official screenshot for Dagger FAQ',
 faqImageCaption:
 'The Dagger FAQ explains current confirmed concepts without inventing a complete upgrade tree or stable raid meta.',
  blufTitle: 'What Is the Dagger?',
  bluf: [
    'The Dagger is your personal shuttle and rail base - not just transportation. It is where you store loot, upgrade gear, manage fuel, and plan for the next raid. This guide explains Dagger vs Dagger combat, storage priorities, and first upgrade choices.',
    versionParagraph,
  ],
 quickFacts: [
 ['What it is', 'A shuttle and personal rail base used by Freerailers.', 'verified'],
 ['Long-term role', 'Upgrade point for extracted loot and personal progression.', 'verified'],
 ['Confirmed pressure', 'Dagger vs Dagger combat is part of official playtest and future feature language.', 'working'],
 ['Fuel relevance', 'Fuel Cores and fuel resources connect Conductor value to rail survival.', 'verified'],
 ['Storage caution', 'Storage and schematic systems are patch-sensitive.', 'working'],
 ['Guide boundary', 'No complete upgrade tree until stable data exists.', 'verified'],
 ],
 answerTitle: 'What is the Dagger in Enginefall?',
 answer:
 'The Dagger is the Freerailer shuttle and personal home on rails. It supports movement, extracted value, upgrades, storage-style planning, fuel pressure, and future Dagger vs Dagger conflict.',
 intentRows: [
 {
 query: 'enginefall dagger',
 answer: 'The Dagger is your shuttle and personal rail base, not just a vehicle skin.',
 href: '#what-is-dagger',
 label: 'Basics',
 },
 {
 query: 'dagger shuttle enginefall',
 answer: 'The official world text describes Dagger shuttles as service craft that Freerailers use outside Titan Train society.',
 href: '#world',
 label: 'Lore',
 },
 {
 query: 'enginefall base',
 answer: 'The Dagger is the main base concept for extracted loot and long-term upgrades.',
 href: '#base',
 label: 'Base',
 },
 {
 query: 'enginefall fuel',
 answer: 'Fuel pressure connects Dagger planning, Conductor output, and train survival.',
 href: '#fuel',
 label: 'Fuel',
 },
 ],
 jumpLinks: [
 { href: '#what-is-dagger', label: 'Dagger' },
 { href: '#world', label: 'World role' },
 { href: '#base', label: 'Base' },
 { href: '#fuel', label: 'Fuel' },
 { href: '#raids', label: 'Raids' },
 ],
 sections: [
 {
 id: 'what-is-dagger',
 title: 'What the Dagger Does',
 image: enginefallImages.screenshot1,
 imageAlt: 'Enginefall official screenshot for Dagger role overview',
 caption:
 'The Dagger is your shuttle, home base, and the reason extraction matters.',
 paragraphs: [
 'The official site describes Dagger Shuttles as service craft designed to operate alongside Titan Trains. In the player fantasy, a stolen shuttle installed with a jailbroken AI becomes the Freerailer way to live outside the train system, raid Titan Trains, and build a life away from the ruling structure. That lore matters because it explains why the Dagger is not a disposable vehicle.',
 'The Dagger is where extraction value becomes long-term meaning. When you raid a train, collect materials, and extract alive, that value goes to your Dagger. It is your home, shuttle, upgrade target, storage, and future conflict space — which is why extracting with value beats dying with full pockets.',
 'This page covers the Dagger from all angles: lore, fuel, storage, schematics, base building, and raid preparation. Everything you need in one place.',
 versionParagraph,
 ],
 tableHeadings: ['Dagger function', 'What it means', 'Guide approach'],
 rows: [
 ['Shuttle', 'A rail craft tied to movement outside Titan Train society.', 'Explain how it fits the world and loop.'],
 ['Home base', 'A place where extracted value matters.', 'Teach planning and priorities.'],
 ['Upgrade target', 'Long-term progression can attach to the Dagger.', 'Avoid complete trees until stable.'],
 ['Conflict target', 'Dagger vs Dagger pressure is part of official language.', 'Teach risk, not fake counters.'],
 ],
 },
 {
 id: 'world',
 title: 'Dagger Shuttles in the Enginefall World',
 image: enginefallImages.screenshot2,
 imageAlt: 'Enginefall official screenshot for Dagger world context',
 caption:
 'The official world page gives enough context to explain why Freerailers depend on Dagger shuttles.',
 paragraphs: [
 'Enginefall worldbuilding separates Titan Train passengers from Freerailers. Titan Trains are moving cities organized by class, while Freerailers live outside that system, often aboard Dagger shuttles. This creates the social conflict underneath the gameplay. You are not only looting a train because it has items. You are raiding the system that controls fuel, space, class, and survival.',
 'Your Dagger is your identity as much as your base. It lets you exist outside the Titan Train hierarchy. The official site describes turning it from a rust bucket into an assault craft and eventually taking control of larger trains.',
 'Key terms: Titan Train (massive moving city), Freerailer (you, living outside the system), Dagger Shuttle (your personal rail base), Marauder train (future player-owned trains), Fuel Core (high-value Conductor resource), Control Room (Conductor domain).',
 ],
 tableHeadings: ['Term', 'Meaning', 'Why players care'],
 rows: [
 ['Titan Train', 'A massive moving city and raid target.', 'Defines the main run space.'],
 ['Freerailer', 'A survivor outside Titan Train society.', 'Defines the player fantasy.'],
 ['Dagger Shuttle', 'The rail craft and home base used by Freerailers.', 'Links extraction to progression.'],
 ['Marauder train', 'A larger player-owned train concept in official future language.', 'Useful future update topic.'],
 ],
 },
 {
 id: 'base',
 title: 'Base, Storage, and Schematics',
 image: enginefallImages.screenshot5,
 imageAlt: 'Enginefall official screenshot for Dagger base and storage context',
 caption:
 'Storage and schematic details are useful, but exact values must wait for stable data.',
 paragraphs: [
 'Understand priorities instead of chasing a final upgrade order. Extracted resources, storage capacity, schematic access, fuel pressure, and defense all compete for your attention. The best question: what problem is blocking your next run?',
 'If you run out of space, storage matters. If you cannot support routes or fuel, fuel planning matters. If you lose value to other players, defense and retreat discipline matter. If you do not know what to craft next, schematic discovery matters. These diagnostic skills stay useful across patches.',
 'Exact upgrade names, costs, and priority orders will be updated after hands-on testing or when official documentation stabilizes.',
 ],
 tableHeadings: ['Base problem', 'Likely priority', 'Caution'],
 rows: [
 ['Too little space', 'Storage and organization.', 'Exact values are build-dependent.'],
 ['Run support weak', 'Fuel or practical crafting support.', 'Fuel economy may change per patch.'],
 ['No clear next craft', 'Schematic discovery and planning.', 'Schematics change between builds.'],
 ['Frequent losses', 'Safer extraction and base defense thinking.', 'Defense becomes instinct with practice.'],
 ],
 },
 {
 id: 'fuel',
 title: 'Fuel, Fuel Cores, and Why Conductor Links to Dagger',
 image: enginefallImages.screenshot6,
 imageAlt: 'Enginefall official screenshot for fuel and train systems context',
 caption:
 'Fuel connects high-value Control Room play with long-term Dagger and rail progression.',
 paragraphs: [
 'Fuel links Conductor and Dagger progression. The official Conductor guide confirms the role can produce Fuel Cores from the Control Room and craft fuel-related resources outside the train (fuel nodes, shards). Fuel is a strategic asset that makes the Control Room route valuable for Dagger players.',
 'Fuel value influences route planning, extraction priority, and Dagger progression. We do not claim a specific node, shard, or core is best — those values depend on the current build.',
 ],
 tableHeadings: ['Fuel term', 'Current confirmed context', 'What changes'],
 rows: [
 ['Fuel Core', 'Conductor can produce it from the Control Room.', 'Do not invent exact rates.'],
 ['Fuel node', 'Official Conductor guide references fuel-related resources.', 'Needs build-specific testing.'],
 ['Fuel shard', 'Official Conductor guide references fuel-related resources.', 'Needs build-specific testing.'],
 ['Dagger fuel pressure', 'Dagger and rail survival make fuel strategically important.', 'Explain priority, not exact economy.'],
 ],
 },
 {
 id: 'raids',
 title: 'Dagger vs Dagger Raids and Defensive Thinking',
 image: enginefallImages.screenshot7,
 imageAlt: 'Enginefall official screenshot for Dagger vs Dagger raid pressure',
 caption:
 'Dagger vs Dagger pressure means players should think about exposure, storage, and extraction discipline from the start.',
 paragraphs: [
 'Official playtest and future feature language includes Dagger vs Dagger combat. Your Dagger is not a safe menu space. Plan for this now — good defensive habits formed early will protect you when Dagger pressure intensifies.',
 'Defensive thinking begins before a raid. Do not carry every valuable item into unnecessary danger. Do not overstay after a good extraction target. Do not assume the route back is safe because it was safe ten minutes earlier.',
 ],

 tableHeadings: ['Raid risk', 'Preparation', 'Bad assumption'],
 rows: [
 ['Other players contest route', 'Track sound and avoid predictable returns.', 'Home route is always safe.'],
 ['Storage value exposed', 'Bank and organize extracted value carefully.', 'All loot is safe after pickup.'],
 ['Fuel pressure rises', 'Treat fuel as strategic, not cosmetic.', 'Fuel only matters late game.'],
 ['Patch changes rules', 'Read current official updates.', 'Old raid advice always applies.'],
 ],
 },
 ],
 faqs: [
 ...commonFaqs,
 {
 question: 'What is the Dagger shuttle in Enginefall?',
 answer:
 'The Dagger is the Freerailer shuttle and personal home on rails, used for movement, extracted value, upgrades, and long-term progression.',
 },
 {
 question: 'Does Enginefall have Dagger vs Dagger combat?',
 answer:
 'Official playtest and future feature language references Dagger vs Dagger combat. Exact rules should be treated as playtest-sensitive.',
 },
 {
 question: 'Should I follow a complete Dagger upgrade tree now?',
 answer:
 'No. Dagger upgrades, schematics, storage, and fuel details should wait for stable hands-on data before being turned into a fixed upgrade tree.',
 },
 ],
 },
 platforms: {
  title: 'Enginefall System Requirements 2026 - PC Specs, Steam Deck & Console Status',
  description:
    'Check the official Enginefall PC system requirements for 2026, whether it runs on Steam Deck, and the real status of PS5/Xbox versions.',
 canonical: '/games/enginefall-system-requirements-platforms',
 label: 'System Requirements & Platforms',
 heroImage: enginefallImages.screenshot6,
 heroAlt: 'Enginefall official screenshot for system requirements and platform status',
 sourceImage: enginefallImages.screenshot11,
 sourceImageAlt: 'Enginefall official screenshot for platform source verification',
 sourceImageCaption:
 'Platform coverage uses Steam for official PC requirements and keeps PS5, Xbox, and Steam Deck claims separate from search demand.',
 relatedImage: enginefallImages.screenshot12,
 relatedImageAlt: 'Enginefall official screenshot for platform related guides',
 relatedImageCaption:
 'After platform checks, players can move to playtest access, beginner survival, Conductor, or Dagger system pages.',
 faqImage: enginefallImages.screenshot13,
 faqImageAlt: 'Enginefall official screenshot for platform FAQ',
 faqImageCaption:
 'The platform FAQ gives direct answers for PC specs, console status, and Steam Deck verification without overclaiming.',
  blufTitle: 'Quick Platform Answer',
  bluf: [
    'The confirmed Enginefall platform is Windows PC via Steam. PS5 and Xbox have search demand, but no official version is confirmed yet. Steam Deck playability is unknown until Valve or official testing confirms it. This guide gives direct answers for all three.',
    versionParagraph,
  ],
 quickFacts: [
 ['Confirmed store', 'Steam.', 'verified'],
 ['Confirmed OS', 'Windows 10 64-bit minimum on the Steam listing.', 'verified'],
 ['Minimum CPU', 'Intel Core i7-8700K or AMD Ryzen 7 2700X.', 'verified'],
 ['Minimum RAM', '16 GB RAM.', 'verified'],
 ['Minimum GPU', 'NVIDIA GTX 1080 or AMD Radeon RX 5700.', 'verified'],
 ['Storage note', 'SSD is strongly recommended by the Steam requirements text.', 'verified'],
 ['PS5 / Xbox', 'Not officially confirmed in checked sources.', 'needs-check'],
 ['Steam Deck', 'Not verified in checked sources.', 'needs-check'],
 ],
 answerTitle: 'What platforms is Enginefall on?',
 answer:
 'Enginefall is officially listed for Windows PC via Steam. PS5, Xbox, and Steam Deck verification are not confirmed by the checked official sources, even though users are searching for those platforms.',
 intentRows: [
 {
 query: 'enginefall system requirements',
 answer: 'Steam lists a Windows 10 64-bit baseline, 16 GB RAM, i7-8700K or Ryzen 7 2700X, and GTX 1080 or RX 5700.',
 href: '#pc-specs',
 label: 'Specs',
 },
 {
 query: 'enginefall ps5',
 answer: 'No official PS5 version is confirmed in the checked sources.',
 href: '#console',
 label: 'PS5',
 },
 {
 query: 'enginefall xbox',
 answer: 'No official Xbox version is confirmed in the checked sources.',
 href: '#console',
 label: 'Xbox',
 },
 {
 query: 'enginefall steam deck',
 answer: 'Steam Deck verification is not confirmed; treat handheld play as unknown until tested.',
 href: '#steam-deck',
 label: 'Deck',
 },
 ],
 jumpLinks: [
 { href: '#pc-specs', label: 'PC specs' },
 { href: '#console', label: 'Console' },
 { href: '#steam-deck', label: 'Steam Deck' },
 { href: '#performance', label: 'Performance' },
 { href: '#buying-check', label: 'Checklist' },
 ],
 sections: [
 {
 id: 'pc-specs',
 title: 'Official PC System Requirements',
 image: enginefallImages.header,
 imageAlt: 'Enginefall official Steam artwork for PC requirements',
 caption:
 'Steam provides the current minimum PC baseline, but also warns that requirements are not final during development.',
 paragraphs: [
 'Steam lists Enginefall with a Windows 10 64-bit minimum, a 64-bit processor and operating system requirement, Intel Core i7-8700K or AMD Ryzen 7 2700X, 16 GB RAM, NVIDIA GTX 1080 or AMD Radeon RX 5700, DirectX 12, broadband internet, and an SSD strongly recommended. The listing also notes that system requirements are not final at this stage of development.',
 'The current minimum spec may change. The developer says ongoing optimization will improve performance across a wider range of hardware. If you are below the listed baseline, wait for updated requirements — do not assume the game will never run.',
 'If you are near the listed minimum: test cautiously. Well below it: wait for updated specs or demo reports. Using a hard drive instead of an SSD: the official recommendation is already clear.',
 versionParagraph,
 ],
 tableHeadings: ['Spec', 'Official current minimum', 'Player note'],
 rows: [
 ['OS', 'Windows 10 64-bit.', 'Windows PC via Steam is the confirmed platform.'],
 ['CPU', 'Intel Core i7-8700K or AMD Ryzen 7 2700X.', 'Current development baseline, not final launch promise.'],
 ['RAM', '16 GB RAM.', 'Treat 8 GB systems as below current minimum.'],
 ['GPU', 'NVIDIA GTX 1080 or AMD Radeon RX 5700.', 'Wait for updated testing if below this range.'],
 ],
 },
 {
 id: 'console',
 title: 'PS5 and Xbox Status',
 image: enginefallImages.screenshot1,
 imageAlt: 'Enginefall official screenshot for PS5 and Xbox platform demand',
 caption:
 'PS5 and Xbox autocomplete demand exists, but official confirmation is narrower than search interest.',
 paragraphs: [
 'Many players search for Enginefall PS5 and Enginefall Xbox — but searching does not make those versions real. Steam confirms PC only. The official site directs users to Steam and wishlist. No checked official source confirms PS5 or Xbox.',
 'The direct answer: PC via Steam is confirmed. PS5 and Xbox are not confirmed. Check Enginefall official channels for future console announcements.',
 'This page can still capture console searches without misleading users. It can explain why people are asking, what would count as confirmation, where to check, and how to follow updates. That is a useful search result even when the answer is no.',
 ],
 tableHeadings: ['Platform', 'Current answer', 'What would change it'],
 rows: [
 ['PS5', 'Not confirmed.', 'Official PlayStation listing or developer announcement.'],
 ['Xbox Series X|S', 'Not confirmed.', 'Official Xbox listing, Game Pass post, or developer announcement.'],
 ['PC Steam', 'Confirmed.', 'Already listed on Steam.'],
 ['Cloud/Game Pass', 'Not confirmed.', 'Official Microsoft or developer announcement.'],
 ],
 },
 {
 id: 'steam-deck',
 title: 'Steam Deck Status',
 image: enginefallImages.screenshot2,
 imageAlt: 'Enginefall official screenshot for Steam Deck caveat',
 caption:
 'Steam Deck support should not be assumed from PC support alone, especially for an online PvP test build.',
 paragraphs: [
 'Steam Deck is different from PC support. A game listed for Windows can still have text readability, controller mapping, anti-cheat, online, or performance issues on Deck. Enginefall adds multiplayer PvP with extraction pressure, making input reliability and readable UI critical.',
 'Steam Deck verification is not confirmed. If you test via the demo or playtest, treat it as experimental. Watch for login issues, controller mapping, text size, FPS drops, and network problems. Do not expect a Verified-level experience.',
 'This is not negative coverage. It is accurate coverage. Steam Deck users often want to know whether a game is playable enough, not whether a marketing page says PC. A cautious page can still be helpful by explaining what to test and what would count as a real confirmation.',
 ],
 tableHeadings: ['Deck check', 'What to test', 'Why it matters'],
 rows: [
 ['Launch/access', 'Can the Steam test or demo open cleanly?', 'Online test builds can have access friction.'],
 ['Controls', 'Can menus, combat, looting, and crafting be controlled comfortably?', 'PvP punishes awkward input.'],
 ['Readability', 'Can UI text and item information be read on the Deck screen?', 'Inventory decisions need speed.'],
 ['Performance', 'Can the game hold stable FPS during train combat?', 'Stutter can ruin extraction fights.'],
 ],
 },
 {
 id: 'performance',
 title: 'Performance Expectations During Playtest',
 image: enginefallImages.screenshot3,
 imageAlt: 'Enginefall official screenshot for performance and optimization expectations',
 caption:
 'The current build is still in development, so performance coverage should be framed as testing guidance.',
 paragraphs: [
 'The Steam requirements text says the specs are not final and that ongoing optimization will improve performance across hardware. That means any performance page should avoid final benchmark language. It is fair to say the current minimum is relatively demanding. It is not fair to say the launch version will require exactly the same hardware.',
 'Players testing the June 2026 build should focus on practical observations: initial load time, FPS during train combat, stutter when entering busy spaces, network stability, input delay, and whether lowering settings improves consistency. Those observations are more useful than a single number because the game is multiplayer and run-based. A beautiful screenshot is less important than stable performance during extraction.',
 'If Enjoy4Game later gets hands-on capture, this page can add a tested-settings table. Until then, the honest version is a source-checked official spec page with a clear caution around development-stage optimization.',
 ],
 tableHeadings: ['Performance area', 'Watch for', 'Current page stance'],
 rows: [
 ['FPS', 'Drops during combat and crowded train spaces.', 'Needs hands-on testing.'],
 ['Loading', 'SSD benefit and long load points.', 'SSD is strongly recommended.'],
 ['Network', 'Disconnects or server friction during playtest.', 'Build and server dependent.'],
 ['Settings', 'Whether lower settings improve consistency.', 'Do not publish exact settings without testing.'],
 ],
 },
 {
 id: 'buying-check',
 title: 'Pre-Launch Platform Checklist',
 image: enginefallImages.screenshot4,
 imageAlt: 'Enginefall official screenshot for platform buying checklist',
 caption:
 'Because Enginefall is unreleased, platform advice should help users decide whether to wishlist, test, or wait.',
 paragraphs: [
 'The practical platform decision is simple. If you have a Windows PC near or above the current Steam minimum and you like PvP survival extraction games, wishlist or test Enginefall through official Steam access. If you are a console-only player, follow official channels and wait. If you are a Steam Deck player, wait for verification or hands-on reports unless you are comfortable experimenting with an unsupported test build.',
 ],

 tableHeadings: ['Player type', 'Best action', 'Reason'],
 rows: [
 ['Windows PC above minimum', 'Wishlist and test official demo/playtest access.', 'You match the confirmed platform.'],
 ['Windows PC below minimum', 'Wait for optimization updates or demo reports.', 'Current minimum may be too high.'],
 ['Console-only player', 'Follow official announcements.', 'No PS5 or Xbox version is confirmed.'],
 ['Steam Deck player', 'Wait for verification or test cautiously.', 'Deck status is unknown.'],
 ],
 },
 ],
 faqs: [
 ...commonFaqs,
 {
 question: 'What are Enginefall minimum system requirements?',
 answer:
 'Steam currently lists Windows 10 64-bit, Intel Core i7-8700K or AMD Ryzen 7 2700X, 16 GB RAM, NVIDIA GTX 1080 or AMD Radeon RX 5700, DirectX 12, broadband internet, and an SSD strongly recommended.',
 },
 {
 question: 'Is Enginefall on PS5 or Xbox?',
 answer:
 'No official PS5 or Xbox version is confirmed by the checked sources. PC via Steam is the confirmed platform.',
 },
 {
 question: 'Is Enginefall Steam Deck Verified?',
 answer:
 'No Steam Deck verification is confirmed by the checked sources. Treat Deck play as unknown until official verification or reliable hands-on testing exists.',
 },
 ],
 },
} satisfies Record<string, EnginefallPageData>;
