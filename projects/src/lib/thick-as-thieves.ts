import type { Metadata } from 'next';
import { thickAsThieves, type GameGuideLink } from '@/lib/games';

export const thickAsThievesLastModified = '2026-05-21';
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
 ['Release', 'Launched on May 20, 2026 for PC storefronts; verify the live store button in your region.'],
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
 ['Local co-op / couch co-op', 'Not confirmed; official wording focuses on online co-op with a partner.'],
];

export const thickAsThievesLaunchCheckRows = [
 ['Unlock state', 'Check the live Steam or Epic Games Store button in your region before buying.'],
 ['Local price', 'Use official $4.99 / EUR4.99 / GBP4.99 as launch guidance, then verify local Steam currency.'],
 ['Co-op flow', 'Test invite, host progress, reconnect behavior, and whether public matchmaking exists.'],
 ['Controller feel', 'Steam lists full controller support, but sensitivity and prompt behavior need live testing.'],
 ['Steam Cloud', 'Steam lists cloud support; verify sync after the first completed contract.'],
];

export const thickAsThievesGscOpportunityRows = [
 ['Thick As Thieves local co-op', 'Local or couch co-op is not confirmed; public materials focus on online co-op with one partner.', 'Solo & co-op page.'],
 ['Thick As Thieves PS5', 'No PS5 launch is announced; current public focus is PC via Steam and Epic Games Store.', 'Release date and roadmap pages.'],
 ['Thick As Thieves co-op', 'Solo play and online two-player co-op are the safest current answer from official FAQ wording.', 'Hub and solo/co-op page.'],
 ['Thick As Thieves worth it', 'The value question depends on $4.99 launch pricing, compact scope, 2 maps, 16 missions, and at least 4 hours.', 'Worth-it and contracts pages.'],
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
 claim: 'Thick As Thieves launched for PC storefronts on May 20, 2026; players should verify the live Steam or Epic store button in their region.',
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
 'Thick As Thieves how many players',
 'Thick As Thieves split screen',
 'Thick As Thieves couch co-op',
 'Thick As Thieves local co-op',
 'Thick As Thieves crossplay',
 'Thick As Thieves cross platform',
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

// Thick As Thieves - 8 page upgrade exports (40 total: 5 per page)

export const tatStealthActionRows = [
 {
 step: '1. Read the room before entering',
 doThis: 'Pause at the door or entry point and identify patrols, cameras, light cones, and one safe reset location.',
 why: 'A first run is a scouting run. Reading sightlines first lets you plan the exit before you commit to loot.',
 },
 {
 step: '2. Plan exit before objective',
 doThis: 'Decide the extraction path before touching the objective. If you cannot describe your exit, you are not ready to commit.',
 why: 'Optional loot becomes safe only after you know how to leave. The exit plan prevents one alert from becoming a failed run.',
 },
 {
 step: '3. Move with small, deliberate steps',
 doThis: 'Use slow movement, short waits, and cover instead of sprinting through unknown rooms.',
 why: 'Sprinting turns minor noise into a chain of mistakes. Small moves give you time to read patrols and react.',
 },
 {
 step: '4. Assign clear co-op roles',
 doThis: 'In co-op, agree who watches patrols, who commits to the objective, and who calls abort.',
 why: 'A second player is most useful when roles divide information and execution instead of duplicating movement.',
 },
 {
 step: '5. Abort early and reset',
 doThis: 'If suspicion starts chaining, leave with partial success rather than fighting through the alert state.',
 why: 'Aborting protects your progress, your gear, and your mental map of the room. One clean reset beats a noisy recovery.',
 },
] as const;

export const tatStealthStatusItems = [
 { label: 'First-run mindset', value: 'Treat the first contract as a scouting run, not a perfect score.', status: 'verified' as const },
 { label: 'Route before loot', value: 'Plan the exit before committing to the objective.', status: 'verified' as const },
 { label: 'Movement habit', value: 'Use slow, deliberate movement instead of sprinting through unknown rooms.', status: 'verified' as const },
 { label: 'Co-op roles', value: 'One player watches timing, the other commits to the objective.', status: 'working' as const },
 { label: 'Abort signal', value: 'Leave early on alert chain instead of pushing through.', status: 'working' as const },
 { label: 'Unverified mission routes', value: 'Final mission routes still need hands-on verification after launch.', status: 'needs-check' as const },
];

export const tatStealthSourceRows = [
 {
 claim: 'Thick As Thieves is a first-person stealth heist game with solo and online co-op.',
 source: 'Steam store',
 status: 'verified' as const,
 href: thickAsThievesSteamUrl,
 note: 'Use for the basic stealth-action framing before adding beginner habits.',
 },
 {
 claim: 'The official FAQ says the game can be played solo or with a partner in crime.',
 source: 'Megabit FAQ',
 status: 'verified' as const,
 href: thickAsThievesFaqUrl,
 note: 'Use for the partner framing and to set expectations on co-op scope.',
 },
 {
 claim: 'Official messaging emphasizes route reading, planning, and clean extraction.',
 source: 'Megabit Publishing',
 status: 'working' as const,
 href: thickAsThievesOfficialUrl,
 note: 'Use as context for beginner habits, not as a walkthrough substitute.',
 },
 {
 claim: 'Reddit discussion focuses on whether the new stealth framing works after the PvPvE pivot.',
 source: 'Reddit discussion',
 status: 'working' as const,
 href: 'https://www.reddit.com/r/Games/comments/1kp9rux/thick_as_thieves_launching_may_20/',
 note: 'Use as a player-expectation signal, not as confirmed mechanic guidance.',
 },
];

export const tatStealthSearchIntent = [
 {
 query: 'Thick As Thieves beginner guide',
 answer: 'Treat the first contract as a scouting run: read sightlines, plan the exit, then commit to the objective.',
 href: '#first-run-mindset',
 label: 'Beginner',
 },
 {
 query: 'Thick As Thieves stealth tips',
 answer: 'Use slow movement, identify patrols and cameras, and abort early on alert chain.',
 href: '#route-before-loot',
 label: 'Stealth',
 },
 {
 query: 'Thick As Thieves solo or co-op first',
 answer: 'Start solo to learn routes cleanly. Start co-op only if you can communicate and divide roles.',
 href: '#coop-beginner-roles',
 label: 'Solo or co-op',
 },
 {
 query: 'Thick As Thieves first heist',
 answer: 'Do not chase a perfect score. Learn how rooms communicate risk, then replay with cleaner extraction.',
 href: '#first-run-mindset',
 label: 'First heist',
 },
];

export const tatStealthJumpLinks = [
 { href: '#first-run-mindset', label: 'First-run mindset' },
 { href: '#route-before-loot', label: 'Route before loot' },
 { href: '#coop-beginner-roles', label: 'Co-op beginner roles' },
 { href: '/games/thick-as-thieves/solo-coop', label: 'Solo & co-op' },
 { href: '/games/thick-as-thieves/contracts-maps', label: 'Contracts & maps' },
];

export const tatContractsActionRows = [
 {
 step: '1. Read the official launch scope',
 doThis: 'Check the Steam page and Megabit FAQ for the announced maps, missions, length, and gear count.',
 why: 'Official scope is the safest baseline. Use it before adding your own speculation about future content.',
 },
 {
 step: '2. Replay a contract with one new rule',
 doThis: 'Pick a single constraint per replay: no alerts, fastest extraction, full loot, or co-op only.',
 why: 'A focused constraint is the cleanest way to learn whether contracts actually change with the approach.',
 },
 {
 step: '3. Compare solo and co-op runs',
 doThis: 'Run the same contract solo, then again with a partner, and note which decisions changed.',
 why: 'Co-op should introduce new tactical decisions. If nothing changes, co-op is decoration, not a real mode.',
 },
 {
 step: '4. Track route variation',
 doThis: 'Write down whether later missions remix goals, pressure, or patrol density versus the first contract.',
 why: 'Replay value depends on real variation. If every mission reuses the same safe path, replay is shallow.',
 },
 {
 step: '5. Mark gear-driven decisions',
 doThis: 'Re-run a contract with a different gear loadout to see whether the 6 gear pieces open new approaches.',
 why: 'Gear variation is part of the official value pitch. Testing it tells you whether the pitch holds up.',
 },
] as const;

export const tatContractsStatusItems = [
 { label: 'Maps', value: '2 dynamic replayable maps in current official messaging.', status: 'verified' as const },
 { label: 'Missions', value: '16 missions in the introductory campaign.', status: 'verified' as const },
 { label: 'Length', value: 'At least 4 hours, before replay learning.', status: 'verified' as const },
 { label: 'Gear pieces', value: '6 pieces of gear are described in launch messaging.', status: 'verified' as const },
 { label: 'Replay variation', value: 'Depends on real contract variation, gear, and co-op decisions.', status: 'needs-check' as const },
];

export const tatContractsSourceRows = [
 {
 claim: 'Official launch scope is 2 maps, 16 missions, at least 4 hours, and 6 gear pieces.',
 source: 'Megabit Publishing',
 status: 'verified' as const,
 href: thickAsThievesOfficialUrl,
 note: 'Use for the official compact-scope pitch and to avoid inflated hour-count claims.',
 },
 {
 claim: 'Steam features list co-op, online co-op, full controller, and Steam Cloud.',
 source: 'Steam store',
 status: 'verified' as const,
 href: thickAsThievesSteamUrl,
 note: 'Use for feature context that affects how contracts can be replayed.',
 },
 {
 claim: 'PC Gamer reports the game pivoted from PvPvE to solo and two-player co-op.',
 source: 'PC Gamer',
 status: 'working' as const,
 href: 'https://www.pcgamer.com/games/action/warren-spectors-multiplayer-thief-successor-changes-direction-instead-of-pvpve-its-now-focusing-on-2-player-co-op-and-singleplayer/',
 note: 'Use to set expectation that contracts are solo or partner, not a large PvPvE extraction mode.',
 },
 {
 claim: 'Reddit discussion compares the compact launch scope with the older PvPvE pitch.',
 source: 'Reddit discussion',
 status: 'working' as const,
 href: 'https://www.reddit.com/r/Games/comments/1kp9rux/thick_as_thieves_launching_may_20/',
 note: 'Use as a player-expectation signal when judging replay value.',
 },
];

export const tatContractsSearchIntent = [
 {
 query: 'Thick As Thieves how many maps',
 answer: 'Official launch messaging describes 2 dynamic replayable maps.',
 href: '#official-launch-scope',
 label: 'Maps',
 },
 {
 query: 'Thick As Thieves how many missions',
 answer: 'Official launch messaging describes 16 missions in the introductory campaign.',
 href: '#official-launch-scope',
 label: 'Missions',
 },
 {
 query: 'Thick As Thieves how long to beat',
 answer: 'Official messaging says at least 4 hours, before replay learning and alternate approaches.',
 href: '#official-launch-scope',
 label: 'Length',
 },
 {
 query: 'Thick As Thieves replayability',
 answer: 'Replay value should come from real route variation, gear choices, and co-op planning.',
 href: '#how-to-read-replayability',
 label: 'Replay',
 },
];

export const tatContractsJumpLinks = [
 { href: '#official-launch-scope', label: 'Official launch scope' },
 { href: '#how-to-read-replayability', label: 'How to read replayability' },
 { href: '#what-needs-live-testing', label: 'What needs live testing' },
 { href: '/games/thick-as-thieves/gear-loadouts', label: 'Gear & loadouts' },
 { href: '/games/thick-as-thieves/solo-coop', label: 'Solo & co-op' },
];

export const tatGearActionRows = [
 {
 step: '1. Group gear by role first',
 doThis: 'Sort the 6 announced gear pieces into information, commitment, recovery, and co-op support roles.',
 why: 'Role grouping is clearer than memorizing names. It also helps you see which gaps your current loadout has.',
 },
 {
 step: '2. Prioritize information tools',
 doThis: 'Start runs with at least one tool that helps you read patrols, routes, or risk.',
 why: 'Information tools pay off in every contract. A commitment tool without information often forces a noisy recovery.',
 },
 {
 step: '3. Add a recovery tool before a commitment tool',
 doThis: 'Once you have an information tool, slot a recovery option for when the plan breaks.',
 why: 'Recovery is more common than players expect. A safe reset is worth more than a flashy finish.',
 },
 {
 step: '4. In co-op, divide roles across players',
 doThis: 'Give one player an information focus and the other a commitment or recovery focus.',
 why: 'A co-op team with two commitment tools still needs someone watching the route. Division of roles is the win condition.',
 },
 {
 step: '5. Verify stats in the live build',
 doThis: 'After launch, write down exact gear names, cooldowns, costs, and unlock order in your own notes.',
 why: 'Official messaging lists the count, not the stats. Live testing is the only honest way to judge each piece.',
 },
] as const;

export const tatGearStatusItems = [
 { label: 'Gear count', value: '6 pieces of gear are described in launch messaging.', status: 'verified' as const },
 { label: 'Information tools', value: 'Prioritize tools that read patrols, routes, and risk.', status: 'working' as const },
 { label: 'Commitment tools', value: 'Use them only after an exit plan exists.', status: 'working' as const },
 { label: 'Recovery tools', value: 'Slot one to reset after a mistake, especially solo.', status: 'working' as const },
 { label: 'Exact stats', value: 'Names, cooldowns, costs, and unlock order need live testing.', status: 'needs-check' as const },
];

export const tatGearSourceRows = [
 {
 claim: 'Official launch messaging describes 6 pieces of gear.',
 source: 'Megabit Publishing',
 status: 'verified' as const,
 href: thickAsThievesOfficialUrl,
 note: 'Use for the gear count, but not for exact names or stats.',
 },
 {
 claim: 'Steam lists full controller support and Steam Cloud for save sync.',
 source: 'Steam store',
 status: 'verified' as const,
 href: thickAsThievesSteamUrl,
 note: 'Use for the loadout-and-reset context that affects gear testing.',
 },
 {
 claim: 'The official FAQ says the game can be played solo or with a partner in crime.',
 source: 'Megabit FAQ',
 status: 'verified' as const,
 href: thickAsThievesFaqUrl,
 note: 'Use to remind readers that loadouts should account for solo versus partner play.',
 },
 {
 claim: 'Player discussion focuses on which gear pieces solve real contract problems.',
 source: 'Reddit discussion',
 status: 'working' as const,
 href: 'https://www.reddit.com/r/Games/comments/1kp9rux/thick_as_thieves_launching_may_20/',
 note: 'Use as a demand signal, not as a final tier list.',
 },
];

export const tatGearSearchIntent = [
 {
 query: 'Thick As Thieves how many gear pieces',
 answer: 'Official launch messaging describes 6 pieces of gear.',
 href: '#think-in-loadout-roles',
 label: 'Count',
 },
 {
 query: 'Thick As Thieves best gear',
 answer: 'No confirmed tier list. Group gear by role and prioritize information and recovery tools.',
 href: '#first-unlock-priorities',
 label: 'Priority',
 },
 {
 query: 'Thick As Thieves loadout',
 answer: 'Use at least one information tool and one recovery tool. Co-op should divide roles across players.',
 href: '#first-unlock-priorities',
 label: 'Loadout',
 },
 {
 query: 'Thick As Thieves gear stats',
 answer: 'Exact names, stats, cooldowns, costs, and unlock order still need live verification.',
 href: '#what-needs-live-testing',
 label: 'Stats',
 },
];

export const tatGearJumpLinks = [
 { href: '#think-in-loadout-roles', label: 'Loadout roles' },
 { href: '#first-unlock-priorities', label: 'First unlock priorities' },
 { href: '#what-needs-live-testing', label: 'Live testing' },
 { href: '/games/thick-as-thieves/contracts-maps', label: 'Contracts & maps' },
 { href: '/games/thick-as-thieves/solo-coop', label: 'Solo & co-op' },
];

export const tatWorthItActionRows = [
 {
 step: '1. Match the price to the scope',
 doThis: 'Compare the $4.99 / EUR4.99 / GBP4.99 launch price to 2 maps, 16 missions, and at least 4 hours.',
 why: 'The price fits a compact introductory campaign, not a long story bet. Matching them keeps expectations honest.',
 },
 {
 step: '2. Decide solo or co-op first',
 doThis: 'Pick a play mode before buying. Co-op needs a partner; solo needs patience for route learning.',
 why: 'Co-op framing is in official FAQ wording. Solo is fully supported. The wrong mode can ruin the value read.',
 },
 {
 step: '3. Decide whether the PvPvE pivot matters to you',
 doThis: 'Check PC Gamer and Reddit coverage to understand the shift from the older PvPvE pitch to solo and two-player co-op.',
 why: 'Players who expected a competitive extraction-style game should not buy based on old coverage alone.',
 },
 {
 step: '4. Wait for reviews if your risk is high',
 doThis: 'If you are sensitive to launch quality, wait for current critic reviews and Steam user reports after launch.',
 why: 'Reviews after launch are the cleanest signal of whether the compact stealth pitch works in practice.',
 },
 {
 step: '5. Buy for the compact stealth campaign you can play today',
 doThis: 'If the current scope sounds fun, buy at launch. If you need a long campaign or console version, wait.',
 why: 'Buying for the present product avoids disappointment from features that were never announced for launch.',
 },
] as const;

export const tatWorthItStatusItems = [
 { label: 'Launch price', value: '$4.99 / EUR4.99 / GBP4.99 per official FAQ.', status: 'verified' as const },
 { label: 'Content scope', value: '2 maps, 16 missions, at least 4 hours, 6 gear pieces.', status: 'verified' as const },
 { label: 'Co-op support', value: 'Solo play and two-player online co-op.', status: 'verified' as const },
 { label: 'Console launch', value: 'Not announced; current focus is PC.', status: 'working' as const },
 { label: 'PvPvE shift', value: 'Launch product is solo and partner co-op, not extraction-style.', status: 'working' as const },
 { label: 'Reviews after launch', value: 'Use current critic and Steam user reviews to confirm value.', status: 'needs-check' as const },
];

export const tatWorthItSourceRows = [
 {
 claim: 'Launch pricing is $4.99 / EUR4.99 / GBP4.99.',
 source: 'Megabit FAQ',
 status: 'verified' as const,
 href: thickAsThievesFaqUrl,
 note: 'Use as the official price baseline, then verify local Steam currency.',
 },
 {
 claim: 'Introductory campaign scope is 2 maps, 16 missions, at least 4 hours, and 6 gear pieces.',
 source: 'Megabit Publishing',
 status: 'verified' as const,
 href: thickAsThievesOfficialUrl,
 note: 'Use to frame the value question around compact scope, not inflated hour counts.',
 },
 {
 claim: 'The game can be played solo or with a partner in crime.',
 source: 'Megabit FAQ',
 status: 'verified' as const,
 href: thickAsThievesFaqUrl,
 note: 'Use to set the co-op scope and to temper expectations about large multiplayer modes.',
 },
 {
 claim: 'PC Gamer reports a pivot from PvPvE to solo and two-player co-op.',
 source: 'PC Gamer',
 status: 'working' as const,
 href: 'https://www.pcgamer.com/games/action/warren-spectors-multiplayer-thief-successor-changes-direction-instead-of-pvpve-its-now-focusing-on-2-player-co-op-and-singleplayer/',
 note: 'Use to explain why older coverage does not match the launch product.',
 },
 {
 claim: 'Reddit discussion focuses on the small-scale stealth campaign versus the older PvPvE pitch.',
 source: 'Reddit discussion',
 status: 'working' as const,
 href: 'https://www.reddit.com/r/Games/comments/1kp9rux/thick_as_thieves_launching_may_20/',
 note: 'Use as a player-expectation signal when judging whether to buy at launch.',
 },
];

export const tatWorthItSearchIntent = [
 {
 query: 'Is Thick As Thieves worth it',
 answer: 'Worth considering at $4.99 if you want a compact solo or partner co-op stealth heist. Wait for reviews if you need a long campaign or console version.',
 href: '#launch-value-snapshot',
 label: 'Verdict',
 },
 {
 query: 'Thick As Thieves price',
 answer: 'Official launch pricing is $4.99 / EUR4.99 / GBP4.99. Verify local Steam currency in your region.',
 href: '#launch-value-snapshot',
 label: 'Price',
 },
 {
 query: 'Thick As Thieves campaign length',
 answer: 'Official messaging describes at least 4 hours, 2 maps, and 16 missions in the introductory campaign.',
 href: '#launch-value-snapshot',
 label: 'Length',
 },
 {
 query: 'Thick As Thieves PvPvE',
 answer: 'The launch product is solo and two-player co-op, not a PvPvE extraction-style game.',
 href: '#why-the-pvpve-pivot-matters',
 label: 'Pivot',
 },
];

export const tatWorthItJumpLinks = [
 { href: '#launch-value-snapshot', label: 'Launch value snapshot' },
 { href: '#why-the-pvpve-pivot-matters', label: 'PvPvE pivot' },
 { href: '#who-should-buy-today', label: 'Who should buy' },
 { href: '#who-should-wait', label: 'Who should wait' },
 { href: '/games/thick-as-thieves/roadmap-console', label: 'Roadmap & console' },
];

export const tatReleaseActionRows = [
 {
 step: '1. Verify the live store button in your region',
 doThis: 'Open Steam or Epic Games Store in your region and confirm the buy button is live before purchase.',
 why: 'The official date is the safe baseline, but the actual unlock state can vary by storefront and region.',
 },
 {
 step: '2. Check local pricing at checkout',
 doThis: 'Use $4.99 / EUR4.99 / GBP4.99 as the official guide, then read your local Steam currency price at checkout.',
 why: 'Steam and Epic apply local taxes and exchange rates. The headline price is not always the final price.',
 },
 {
 step: '3. Confirm platform scope before buying',
 doThis: 'Check whether you are buying on PC. Console versions are not announced for launch.',
 why: 'Players on console should wait. Buying a PC key to use on console is not an option here.',
 },
 {
 step: '4. Plan a short launch test',
 doThis: 'Run one short contract before committing a full evening, especially if you are playing co-op.',
 why: 'A short test reveals controller, cloud, and co-op stability issues that are not visible on a store page.',
 },
 {
 step: '5. Decide solo or co-op at purchase',
 doThis: 'Pick a partner before launch night if you want to co-op. Verify invites, host progress, and reconnects early.',
 why: 'Co-op launch bugs are easier to handle with a friend you already know than with random matchmaking.',
 },
] as const;

export const tatReleaseStatusItems = [
 { label: 'Standard release', value: 'Launched May 20, 2026 for PC storefronts.', status: 'verified' as const },
 { label: 'Launch price', value: '$4.99 / EUR4.99 / GBP4.99 per official FAQ.', status: 'verified' as const },
 { label: 'Platform scope', value: 'PC via Steam and Epic Games Store; console not announced.', status: 'verified' as const },
 { label: 'Local co-op', value: 'Not confirmed. Online co-op with one partner is supported.', status: 'working' as const },
 { label: 'Cross-play', value: 'Not confirmed in current public materials.', status: 'needs-check' as const },
];

export const tatReleaseSourceRows = [
 {
 claim: 'Thick As Thieves launched on May 20, 2026 for PC storefronts.',
 source: 'Steam store',
 status: 'verified' as const,
 href: thickAsThievesSteamUrl,
 note: 'Use for the release date, Steam features, and PC specs. Verify the live store button in your region.',
 },
 {
 claim: 'Gematsu reports a PC launch on Steam and Epic Games Store with no PS5 or Xbox date.',
 source: 'Gematsu',
 status: 'working' as const,
 href: 'https://www.gematsu.com/2026/04/thick-as-thieves-for-pc-launches-may-20',
 note: 'Use as platform context beyond Steam and to set the no-console expectation.',
 },
 {
 claim: 'The official FAQ lists launch pricing as $4.99 / EUR4.99 / GBP4.99.',
 source: 'Megabit FAQ',
 status: 'verified' as const,
 href: thickAsThievesFaqUrl,
 note: 'Use for the price baseline, then verify local Steam currency at checkout.',
 },
 {
 claim: 'Steam lists full controller support, Steam Cloud, and Family Sharing.',
 source: 'Steam store',
 status: 'verified' as const,
 href: thickAsThievesSteamUrl,
 note: 'Use for launch-day comfort features that affect controller, cloud, and shared-library buyers.',
 },
];

export const tatReleaseSearchIntent = [
 {
 query: 'Thick As Thieves release date',
 answer: 'Launched May 20, 2026 for PC storefronts. Verify the live store button in your region.',
 href: '#release-date-and-platform',
 label: 'Date',
 },
 {
 query: 'Thick As Thieves price',
 answer: 'Official launch pricing is $4.99 / EUR4.99 / GBP4.99. Verify local Steam currency at checkout.',
 href: '#steam-feature-checklist',
 label: 'Price',
 },
 {
 query: 'Thick As Thieves PS5',
 answer: 'No PS5 launch is announced. The current public focus is PC via Steam and Epic Games Store.',
 href: '#release-date-and-platform',
 label: 'PS5',
 },
 {
 query: 'Thick As Thieves local co-op',
 answer: 'Local co-op is not confirmed. Online co-op with one partner is the official framing.',
 href: '#launch-day-verification',
 label: 'Local co-op',
 },
];

export const tatReleaseJumpLinks = [
 { href: '#release-date-and-platform', label: 'Release & platform' },
 { href: '#steam-feature-checklist', label: 'Steam features' },
 { href: '#launch-day-verification', label: 'Launch-day checks' },
 { href: '/games/thick-as-thieves/system-requirements', label: 'System requirements' },
 { href: '/games/thick-as-thieves/solo-coop', label: 'Solo & co-op' },
 { href: '/games/thick-as-thieves/roadmap-console', label: 'Roadmap & console' },
];

export const tatRoadmapActionRows = [
 {
 step: '1. Read the official live-service line',
 doThis: 'Open the official Megabit FAQ and confirm the wording that the game is not a live service title.',
 why: 'The FAQ is the cleanest source for the live-service question. Quotes from FAQ are safer than coverage summaries.',
 },
 {
 step: '2. Read the post-launch content line',
 doThis: 'Note that more content is intended after launch, with no fixed schedule announced.',
 why: 'Intended future content is not the same as a roadmap. Buying based on intent alone can set wrong expectations.',
 },
 {
 step: '3. Check the console line carefully',
 doThis: 'Look for the FAQ wording that the current focus is the PC release, with broader platform hopes for later.',
 why: 'Console hope is not the same as a console announcement. Do not pre-pay for an unannounced platform.',
 },
 {
 step: '4. Wait for roadmap updates before committing',
 doThis: 'If your purchase depends on long-term content, wait for a posted roadmap or an official cadence update.',
 why: 'A fixed roadmap only appears if the developer publishes one. Until then, treat future content as unspecified.',
 },
 {
 step: '5. Buy for the current PC campaign',
 doThis: 'If the current 2 maps, 16 missions, at least 4 hours, and 6 gear pieces already sound worthwhile, buy now.',
 why: 'Buying for the present product avoids disappointment from features that may never ship at all.',
 },
] as const;

export const tatRoadmapStatusItems = [
 { label: 'Live service status', value: 'Official FAQ says it is not a live service game.', status: 'verified' as const },
 { label: 'Post-launch content', value: 'More content is intended, but no fixed schedule is announced.', status: 'verified' as const },
 { label: 'Console status', value: 'No launch console version is confirmed. PC is the current focus.', status: 'verified' as const },
 { label: 'Roadmap cadence', value: 'No fixed seasonal cadence is published. Future content is unspecified.', status: 'needs-check' as const },
];

export const tatRoadmapSourceRows = [
 {
 claim: 'The official FAQ says Thick As Thieves is not a live service game.',
 source: 'Megabit FAQ',
 status: 'verified' as const,
 href: thickAsThievesFaqUrl,
 note: 'Use for the live-service question and to set buyer expectations correctly.',
 },
 {
 claim: 'The FAQ says more content is intended after launch, but no predetermined schedule is set.',
 source: 'Megabit FAQ',
 status: 'verified' as const,
 href: thickAsThievesFaqUrl,
 note: 'Use to separate intended future support from a fixed seasonal roadmap.',
 },
 {
 claim: 'Console plans are not announced; the current focus is the PC release.',
 source: 'Megabit FAQ',
 status: 'verified' as const,
 href: thickAsThievesFaqUrl,
 note: 'Use to set the no-console-launch expectation, even if broader platform ambition is mentioned.',
 },
 {
 claim: 'Steam lists the May 20, 2026 launch and PC features for the current product.',
 source: 'Steam store',
 status: 'verified' as const,
 href: thickAsThievesSteamUrl,
 note: 'Use for what is actually shipping on day one, separate from future-content promises.',
 },
];

export const tatRoadmapSearchIntent = [
 {
 query: 'Is Thick As Thieves a live service game',
 answer: 'No. The official FAQ says it is not a live service game, and no fixed roadmap cadence is announced.',
 href: '#live-service-and-post-launch-support',
 label: 'Live service',
 },
 {
 query: 'Thick As Thieves post-launch content',
 answer: 'More content is intended after launch, but with no predetermined release schedule.',
 href: '#live-service-and-post-launch-support',
 label: 'Post-launch',
 },
 {
 query: 'Thick As Thieves console',
 answer: 'Console versions are not announced for launch. The current public focus is PC.',
 href: '#console-status',
 label: 'Console',
 },
 {
 query: 'Thick As Thieves roadmap',
 answer: 'No fixed roadmap is published. Treat future content as unspecified until the developer posts one.',
 href: '#live-service-and-post-launch-support',
 label: 'Roadmap',
 },
];

export const tatRoadmapJumpLinks = [
 { href: '#live-service-and-post-launch-support', label: 'Live service & support' },
 { href: '#console-status', label: 'Console status' },
 { href: '#who-should-wait', label: 'Who should wait' },
 { href: '/games/thick-as-thieves/release-date', label: 'Release date' },
 { href: '/games/thick-as-thieves/is-it-worth-it', label: 'Is it worth it' },
];

export const tatSoloCoopActionRows = [
 {
 step: '1. Decide solo or co-op at the start',
 doThis: 'Choose solo if you want to learn routes cleanly. Choose co-op only if you have a partner and can communicate.',
 why: 'Co-op introduces coordination overhead. Solo is the cleanest mode for first-time route learning.',
 },
 {
 step: '2. Run a host test before a long session',
 doThis: 'Test invites, host progress ownership, reconnect behavior, and cloud sync on one short contract.',
 why: 'Co-op stability issues are easier to handle on a short test than during a long evening session.',
 },
 {
 step: '3. Use short callouts',
 doThis: 'Agree on short callouts for entry, wait, abort, and exit. Avoid narrating every movement.',
 why: 'Short callouts keep the run clean and let both players react to patrols and routes quickly.',
 },
 {
 step: '4. Divide information and execution',
 doThis: 'Give one player a watcher role for patrols and exits, and the other a committer role for the objective.',
 why: 'A co-op team with two committers still needs someone watching the route. Division of roles is the win condition.',
 },
 {
 step: '5. Avoid assumptions about unconfirmed features',
 doThis: 'Do not assume local co-op, couch co-op, split-screen, public matchmaking, or cross-play.',
 why: 'None of these are confirmed in current public materials. Buying or planning around them creates a bad fit.',
 },
] as const;

export const tatSoloCoopStatusItems = [
 { label: 'Solo play', value: 'Confirmed. Official FAQ says the game can be played solo.', status: 'verified' as const },
 { label: 'Online co-op', value: 'Confirmed. Steam lists co-op and online co-op.', status: 'verified' as const },
 { label: 'Player count', value: 'Two-player partner co-op is the safest current answer.', status: 'working' as const },
 { label: 'Split screen', value: 'Not confirmed in current public materials.', status: 'needs-check' as const },
 { label: 'Cross-play', value: 'Not confirmed in current public materials.', status: 'needs-check' as const },
 { label: 'Local co-op', value: 'Not confirmed. Public materials focus on online co-op.', status: 'needs-check' as const },
];

export const tatSoloCoopSourceRows = [
 {
 claim: 'The official FAQ says Thick As Thieves can be played solo or with a partner in crime.',
 source: 'Megabit FAQ',
 status: 'verified' as const,
 href: thickAsThievesFaqUrl,
 note: 'Use for the solo and partner co-op framing and to set the co-op scope.',
 },
 {
 claim: 'Steam lists co-op, online co-op, full controller support, and Steam Cloud.',
 source: 'Steam store',
 status: 'verified' as const,
 href: thickAsThievesSteamUrl,
 note: 'Use for the Steam-level feature list that affects how co-op sessions are run.',
 },
 {
 claim: 'Public materials do not confirm local co-op, couch co-op, split-screen, or cross-play.',
 source: 'Megabit FAQ',
 status: 'verified' as const,
 href: thickAsThievesFaqUrl,
 note: 'Use to set the right expectation on what is not part of the launch product.',
 },
 {
 claim: 'PC Gamer reports the game focuses on solo and two-player co-op.',
 source: 'PC Gamer',
 status: 'working' as const,
 href: 'https://www.pcgamer.com/games/action/warren-spectors-multiplayer-thief-successor-changes-direction-instead-of-pvpve-its-now-focusing-on-2-player-co-op-and-singleplayer/',
 note: 'Use to explain why the launch product is partner co-op, not a larger multiplayer mode.',
 },
];

export const tatSoloCoopSearchIntent = [
 {
 query: 'Thick As Thieves how many players',
 answer: 'Solo play and two-player online co-op. The official FAQ says you can play solo or with a partner in crime.',
 href: '#solo-versus-coop',
 label: 'Players',
 },
 {
 query: 'Thick As Thieves split screen',
 answer: 'Not confirmed. Co-op is online only in current public materials.',
 href: '#coop-launch-checklist',
 label: 'Split screen',
 },
 {
 query: 'Thick As Thieves crossplay',
 answer: 'Crossplay is not confirmed in current public materials.',
 href: '#solo-versus-coop',
 label: 'Crossplay',
 },
 {
 query: 'Thick As Thieves local co-op',
 answer: 'Local co-op is not confirmed. Public materials focus on online co-op with one partner.',
 href: '#coop-launch-checklist',
 label: 'Local co-op',
 },
];

export const tatSoloCoopJumpLinks = [
 { href: '#solo-versus-coop', label: 'Solo vs co-op' },
 { href: '#coop-launch-checklist', label: 'Co-op launch checklist' },
 { href: '/games/thick-as-thieves/release-date', label: 'Release date' },
 { href: '/games/thick-as-thieves/beginner-stealth-guide', label: 'Beginner stealth' },
 { href: '/games/thick-as-thieves/roadmap-console', label: 'Roadmap & console' },
];

export const tatSpecActionRows = [
 {
 step: '1. Confirm the SSD requirement',
 doThis: 'Plan to install on an SSD. Steam lists SSD required in both minimum and recommended tiers.',
 why: 'The SSD line is not optional. HDD installs are likely to cause long loads and inconsistent streaming.',
 },
 {
 step: '2. Match your GPU to the tier',
 doThis: 'Use GTX 1060 6GB as the minimum target and RTX 2070 8GB as the recommended target for stable play.',
 why: 'The store line gives a clear tier. Targeting the recommended tier avoids guessing at frame pacing and quality.',
 },
 {
 step: '3. Plan memory headroom',
 doThis: 'Use 12 GB RAM as the floor and 16 GB RAM as the safe target for background apps and cloud sync.',
 why: 'A 12 GB build can run the game, but it leaves little headroom for browsers, voice chat, and recording tools.',
 },
 {
 step: '4. Update GPU drivers before launch',
 doThis: 'Install the latest stable GPU driver from NVIDIA, AMD, or Intel before first launch.',
 why: 'Driver updates often fix launch-day issues that are not visible in the official requirements table.',
 },
 {
 step: '5. Test controller and cloud sync',
 doThis: 'After install, run one short contract to test controller prompts, cloud sync, and any SSD loading issues.',
 why: 'A short test reveals real-world issues with controller mapping, save sync, and storage behavior.',
 },
] as const;

export const tatSpecStatusItems = [
 { label: 'OS', value: 'Windows 10 minimum, Windows 11 recommended.', status: 'verified' as const },
 { label: 'CPU', value: 'Intel Core i5-4570 minimum, Core i7-8700 recommended.', status: 'verified' as const },
 { label: 'Memory', value: '12 GB minimum, 16 GB recommended.', status: 'verified' as const },
 { label: 'Graphics', value: 'GTX 1060 6GB minimum, RTX 2070 8GB recommended.', status: 'verified' as const },
 { label: 'Storage', value: '10 GB available space, SSD required.', status: 'verified' as const },
 { label: 'Controller', value: 'Full controller support is listed on Steam.', status: 'working' as const },
];

export const tatSpecSourceRows = [
 {
 claim: 'Steam lists minimum and recommended PC specs, including DirectX 12, broadband internet, 10 GB storage, and SSD required.',
 source: 'Steam store',
 status: 'verified' as const,
 href: thickAsThievesSteamUrl,
 note: 'Use as the official PC requirements baseline for every spec row.',
 },
 {
 claim: 'Steam lists full controller support and Steam Cloud for save sync.',
 source: 'Steam store',
 status: 'verified' as const,
 href: thickAsThievesSteamUrl,
 note: 'Use for controller and cloud features that affect the launch PC checklist.',
 },
 {
 claim: 'Gematsu reports a PC launch on Steam and Epic Games Store.',
 source: 'Gematsu',
 status: 'working' as const,
 href: 'https://www.gematsu.com/2026/04/thick-as-thieves-for-pc-launches-may-20',
 note: 'Use to confirm that the spec table is for PC, since no console version is announced.',
 },
 {
 claim: 'The official FAQ says the current focus is the PC release.',
 source: 'Megabit FAQ',
 status: 'verified' as const,
 href: thickAsThievesFaqUrl,
 note: 'Use to remind readers that console specs are not part of the launch product.',
 },
];

export const tatSpecSearchIntent = [
 {
 query: 'Thick As Thieves system requirements',
 answer: 'Steam lists Windows 10 minimum, 12 GB RAM, GTX 1060 6GB, DirectX 12, 10 GB storage, and SSD required.',
 href: '#minimum-and-recommended-specs',
 label: 'Specs',
 },
 {
 query: 'Thick As Thieves minimum PC specs',
 answer: 'Windows 10, Intel Core i5-4570, 12 GB RAM, GTX 1060 6GB, DirectX 12, 10 GB storage, SSD required.',
 href: '#minimum-and-recommended-specs',
 label: 'Minimum',
 },
 {
 query: 'Thick As Thieves SSD required',
 answer: 'Yes. Steam lists SSD required in both minimum and recommended requirements.',
 href: '#minimum-and-recommended-specs',
 label: 'SSD',
 },
 {
 query: 'Thick As Thieves controller support',
 answer: 'Yes. Steam lists full controller support.',
 href: '#controller-cloud-and-accessibility',
 label: 'Controller',
 },
];

export const tatSpecJumpLinks = [
 { href: '#minimum-and-recommended-specs', label: 'Min & recommended' },
 { href: '#controller-cloud-and-accessibility', label: 'Controller & cloud' },
 { href: '#launch-pc-checklist', label: 'Launch PC checklist' },
 { href: '/games/thick-as-thieves/release-date', label: 'Release date' },
 { href: '/games/thick-as-thieves/solo-coop', label: 'Solo & co-op' },
 { href: '/games/thick-as-thieves/is-it-worth-it', label: 'Is it worth it' },
];
