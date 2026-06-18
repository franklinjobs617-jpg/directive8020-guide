import type { Metadata } from 'next';
import { firstLight007, type GameGuideLink } from '@/lib/games';

export const firstLightLastModified = '2026-06-18';
export const firstLightSteamUrl = 'https://store.steampowered.com/app/3768760/007_First_Light/';
export const firstLightOfficialUrl = 'https://www.ioi.dk/007-first-light';
export const firstLightPlayStationUrl =
 'https://store.playstation.com/en-us/product/EP3969-PPSA11386_00-007FIRSTLIGHT000';
export const firstLightSupportUrl =
 'https://007firstlight-support.zendesk.com/hc/en-us/articles/36274996432797-007-First-Light-Global-Launch-Times';
export const firstLightLaunchTrailerUrl = 'https://www.youtube.com/watch?v=7wp3CkognPI';
export const firstLightGameplayUrl = 'https://www.youtube.com/watch?v=yEZjDyj_REQ';
export const firstLightRedditReviewUrl =
 'https://www.reddit.com/r/pcgaming/comments/1to4vju/007_first_light_review_thread/';
export const firstLightRedditPreloadUrl =
 'https://www.reddit.com/r/Games/comments/1tncd3e/007_first_light_will_not_have_a_preload_on_steam/';
export const firstLightSteamDeckHQUrl =
 'https://steamdeckhq.com/news/007-first-light-steam-deck-first-impressions/';
export const firstLightTechPowerUpUrl =
 'https://www.techpowerup.com/review/007-first-light-performance-benchmark/';

export const firstLightImages = {
 hero: '/games/007-first-light/agent-closeup.webp',
 header: '/games/007-first-light/city-stealth.webp',
 background: '/games/007-first-light/action-scene.webp',
 card: '/games/007-first-light/card.webp',
 deluxe: '/games/007-first-light/casino.webp',
 missionBriefing: '/games/007-first-light/guide/mission-briefing.webp',
 missionRoute: '/games/007-first-light/guide/mission-route.webp',
 missionReplay: '/games/007-first-light/guide/mission-replay.webp',
 missionPlanning: '/games/007-first-light/guide/mission-planning.webp',
 reviewCombat: '/games/007-first-light/guide/review-combat.webp',
 reviewStealth: '/games/007-first-light/guide/review-stealth.webp',
 flCombat: '/games/007-first-light/fl-combat.webp',
 flGadget: '/games/007-first-light/fl-gadget.webp',
};

export const firstLightVideos = [
 {
 id: '7wp3CkognPI',
 title: '007 First Light - Official Launch Trailer',
 caption:
 'Official launch trailer for the May 27 release, young Bond setup, globetrotting missions, driving, stealth, and action tone.',
 },
 {
 id: 'yEZjDyj_REQ',
 title: '007 First Light - First 13 Minutes of Gameplay',
 caption:
 'Official opening gameplay video. It contains early mission spoilers, so use it only if you want to preview the start before playing.',
 },
];

export const firstLightQuickFacts = [
 ['Release date', 'May 27, 2026 on Steam.'],
 ['Verified platforms here', 'PC via Steam and PlayStation 5 via PlayStation Store. Check your regional storefront for local price and unlock timing.'],
 ['Early access', 'Pre-order access was listed as a 24-hour Deluxe Edition upgrade before standard launch.'],
 ['Developer / Publisher', 'IO Interactive A/S.'],
 ['Genre', 'Single-player espionage action-adventure with stealth, shooting, driving, gadgets, and cinematic missions.'],
 ['Steam features', 'Single-player and Family Sharing. Steam also lists Denuvo Anti-Tamper and a third-party EULA.'],
 ['Reviews', 'Review coverage should now be checked directly on current critic pages and Steam.'],
 ['Preload', 'Steam page copy does not confirm a universal preload; check your purchased platform library close to unlock.'],
 ['Steam Deck', 'No Steam Deck Verified label is confirmed in this guide. Treat handheld performance as player-report dependent.'],
 ['PC storage', '80 GB available space, SSD required.'],
];

export const firstLightTrendRows = [
 ['007 First Light review embargo', 'Review intent is the strongest current search signal. Check the review page first for embargo, reviews, Denuvo, Steam reviews, and buy-or-wait guidance.'],
 ['007 First Light early access', 'Pre-order access was tied to the 24-hour Deluxe Edition upgrade; standard launch is May 27, 2026.'],
 ['007 First Light release time', 'Use the official global launch-time post or your platform countdown for the exact local unlock.'],
 ['007 First Light preload', 'Do not assume preload until the platform library offers it; Steam store copy confirms the release and early-access offer, not a universal preload.'],
 ['007 First Light Steam Deck', 'Treat Steam Deck support as unverified unless Steam or strong player reports confirm the handheld experience.'],
 ['007 First Light Denuvo', 'Steam lists Denuvo Anti-Tamper and a third-party EULA, so PC buyers should factor DRM into the purchase decision.'],
 ['007 First Light PS5', 'The PlayStation Store lists 007 First Light for PS5; check your region for price and local unlock timing.'],
 ['007 First Light mission list', 'Use the mission list and length guide for spoiler-light chapter planning, replay modifiers, collectibles caution, and time-to-beat checks.'],
 ['007 First Light Australia', 'Australian players should check the local storefront countdown because time zones can shift the visible date or unlock hour.'],
];

export const firstLightReleaseRows = [
 ['Standard release', 'May 27, 2026 on Steam.'],
 ['24-hour early access', 'Listed as part of the free Deluxe Edition upgrade for pre-orders before standard launch.'],
 ['Deluxe bonus', "Four outfits, Agent's Mark weapon skin, and four Gleaming gadget skins."],
 ['Preload', 'Not universally confirmed in Steam page copy; check your Steam or PS5 library status after purchase.'],
 ['Review timing', 'Review coverage should be checked on current critic pages and Steam after the May 27 launch window.'],
 ['Australia / time zones', 'Use the platform countdown rather than only the calendar date, because local storefront timing can differ by region.'],
];

export const firstLightSpecRows = [
 ['OS', 'Microsoft Windows 10/11, 64-bit', 'Microsoft Windows 10/11, 64-bit'],
 ['Processor', 'Intel Core i5-9500 / AMD Ryzen 5 3500', 'Intel Core i5-13500 / AMD Ryzen 5 7600'],
 ['Memory', '16 GB RAM', '16 GB RAM'],
 ['Graphics', 'NVIDIA GeForce GTX 1660 / AMD RX 5700 / Intel discrete GPU equivalent', 'NVIDIA GeForce RTX 3060 Ti / AMD RX 6700 XT / Intel discrete GPU equivalent'],
 ['Storage', '80 GB available space; SSD required', '80 GB available space; SSD required'],
 ['PC feature note', 'Steam news lists uncapped framerate and DLSS 4.5 Super Resolution / DLSS Dynamic Multi Frame Generation at launch.', 'Path tracing and DLSS Ray Reconstruction are described as arriving in Summer 2026.'],
];

export const firstLightBeginnerRows = [
 ['Start quiet, then escalate', 'The store describes silent and loud approaches. Try stealth, gadgets, and bluffing before turning every encounter into a firefight.'],
 ['Use gadgets as access tools', 'Gadgets are not only combat toys. Treat them as ways to infiltrate, distract, bypass, or create safer entries.'],
 ['Respect firearms noise', 'If an encounter can be solved quietly, save gunfire for failed stealth, forced combat, or open action sequences.'],
 ['Watch mission modifiers', 'Steam describes replaying favorite missions with additional modifiers, so record which route you used the first time.'],
 ['Expect driving segments', 'The official copy highlights iconic vehicles. Learn mission pacing before assuming every level is pure stealth.'],
 ['Avoid opening spoilers', 'The official first 13 minutes video is useful, but it shows the opening mission. Skip it if you want a blind start.'],
];

export const firstLightFirstMissionRows = [
 ['Before entering a restricted space', 'Look for cameras, guards, doors, climbable paths, and distractions before using a gadget or weapon.'],
 ['When stealth starts to fail', 'Use movement, cover, gadgets, or a takedown to regain control before choosing gunfire.'],
 ['When enemies are armed', 'Expect combat to escalate faster. Use cover, gadgets, and repositioning instead of standing in the open.'],
 ['When a route feels linear', 'Treat it as a cinematic mission with optional approach choices, not a pure open sandbox map.'],
 ['After finishing a mission', 'Write down which approach worked, then use replay and modifiers to test a cleaner route later.'],
];

export const firstLightFirstHourRouteRows = [
 ['1. Set expectations', 'Play the opening as a cinematic Bond mission with choices, not as a pure open sandbox. Your job is to learn the mission language first.'],
 ['2. Read the first room', 'Before touching a gadget, identify the objective marker, guard routes, cameras, cover, exits, and any obvious alternate path.'],
 ['3. Try the quiet route first', 'Move slowly, stay out of sightlines, and use bluffing or non-lethal options before creating noise.'],
 ['4. Use one gadget at a time', 'Use gadgets to solve access, distraction, or camera problems. Do not burn every tool just because a room looks dangerous.'],
 ['5. Escalate in layers', 'If stealth breaks, reposition first, then use melee or gadgets, and only commit to gunfire when the scene is already loud.'],
 ['6. Learn the driving shift', 'When the game moves into a vehicle section, stop thinking like a stealth player and focus on route reading, timing, and recovery.'],
 ['7. Finish once without chasing perfection', 'Complete the mission even if the route gets messy. A finished first run teaches more than restarting every mistake.'],
 ['8. Review your route', 'After the mission, note where detection happened, which gadget solved a problem, and which scene is worth replaying with modifiers.'],
];

export const firstLightRecoveryRows = [
 ['You were spotted', 'Break line of sight, move to cover, and use the next tool to regain control instead of standing still and trading shots.'],
 ['A gadget did not solve the room', 'Look for a second access point or a timing window. Gadgets are route tools, not automatic win buttons.'],
 ['Combat feels punishing', 'Use cover, spacing, and short engagements. Treat open firefights as a fallback, not the default plan.'],
 ['The mission feels too linear', 'Look for approach choices inside the scene: quiet entry, gadget timing, bluffing, melee, firearm escalation, or replay modifiers.'],
 ['You want a cleaner run', 'Finish the current attempt, then replay with one specific goal such as no loud combat, better gadget timing, or a faster route.'],
];

export const firstLightApproachRows = [
 ['Stealth-first', 'Best when guards are unaware, cameras can be bypassed, and a gadget can open a safer route.'],
 ['Gadget-first', 'Best when a room has cameras, sightlines, locked access, or a fight that can be controlled before it starts.'],
 ['Bluff or social route', 'Best when the mission gives you dialogue, disguise-like access, or a chance to move without immediate violence.'],
 ['Melee escalation', 'Best when close-range pressure starts but firearms are not the right first answer.'],
 ['Loud combat', 'Best when the scene has already escalated, enemies are armed, or the objective pushes you into action.'],
 ['Driving focus', 'Best when the mission shifts into vehicle pressure; treat it as a separate skill from stealth movement.'],
];

export const firstLightReviewRows = [
 ['Review embargo', 'Treat the embargo question as time-sensitive. After reviews publish, use current critic reviews and Steam user reviews instead of older countdown wording.'],
 ['Buy now if', 'You want an IO Interactive Bond origin story and current reviews confirm the mission design, stealth, driving, and PC performance match your expectations.'],
 ['Wait if', 'You need broader Steam user reviews, console-specific reports, Steam Deck proof, PC performance proof, or more comfort with Denuvo.'],
 ['Steam user reviews', 'Check Steam after launch access opens because user review volume can change quickly during the first 24-72 hours.'],
 ['Steam Deck', 'Wait for a Steam Deck rating or strong player reports before treating handheld play as safe.'],
 ['Denuvo', 'Steam lists Denuvo Anti-Tamper and a third-party EULA, which matters for PC buyers who avoid DRM.'],
 ['Best fit', 'Players who like cinematic stealth-action, mission replay, gadgets, disguising or bluffing routes, driving, and third-person action.'],
 ['Poor fit', 'Players looking for co-op, multiplayer, a pure Hitman-style sandbox, or a fully reviewed post-launch consensus on day one.'],
];

export const firstLightReviewSourceRows = [
 ['Metacritic', 'Use it for critic-score aggregation once enough critic reviews are indexed. Do not treat an empty or partial listing as the final consensus.'],
 ['OpenCritic', 'Use it as a second critic aggregator, especially when you want to compare outlet spread rather than one headline review.'],
 ['IGN review', 'Use it for one outlet perspective on story, mission design, stealth, action, and pacing. It should not replace broader review checks.'],
 ['Steam user reviews', 'Use it for PC-specific player reaction, Denuvo concerns, performance reports, refund-risk checks, and review-volume changes after launch.'],
 ['YouTube gameplay', 'Use official gameplay video to verify mission tone and opening structure, but avoid opening spoilers if you want a blind first run.'],
];

export const firstLightPlayerConcernRows = [
 ['Review embargo / reviews', 'Check whether current critic reviews and Steam user reviews are live before using older embargo countdown posts.'],
 ['No preload', 'Community discussion is focused on Steam and Xbox preload limits, while PlayStation preload appears to be the safer platform path.'],
 ['Denuvo', 'Steam lists Denuvo Anti-Tamper, and PC players are asking whether DRM affects performance, offline comfort, or Steam Deck use.'],
 ['PC performance', 'Early benchmark and player-report demand is about frame pacing, DLSS/FSR behavior, CPU limits, and whether the listed specs match real play.'],
 ['Steam Deck', 'Early handheld reports are promising but settings-dependent, so Deck players should wait for settings guidance or test within refund limits.'],
 ['PS5 / PS5 Pro', 'Console players are comparing base PS5 image quality, performance mode, and PS5 Pro sharpness rather than only asking whether PS5 exists.'],
];

export const firstLightMissionFastRows = [
 ['How many chapters?', 'Use current walkthrough and mission-list sources carefully, because chapter counts can be spoiler-heavy and may be updated after launch.', 'Low if you only need planning; high if you read full mission names.'],
 ['Is there a mission list?', 'Yes, players are already searching for mission-list structure. This page keeps the route spoiler-light and points completionists toward trophies later.', 'Medium.'],
 ['How long to beat?', 'Early public estimates cluster around a campaign-length action-adventure rather than a short demo. Check current time-to-beat sources and your playstyle.', 'Low.'],
 ['Is it replayable?', 'Steam describes replaying favorite missions with additional modifiers, so mission replay is part of the expected structure.', 'Low.'],
 ['Are collectibles tied to missions?', 'Treat collectibles and trophies as mission cleanup until a fully verified collectible route is available.', 'Medium to high.'],
];

export const firstLightMissionPlanningRows = [
 ['Opening mission', 'Learn stealth, movement, gadget timing, and when the game shifts into action. Skip detailed videos if you want a blind start.', 'Opening spoilers only.'],
 ['Main mission route', 'Track objectives, optional paths, disguising or bluffing moments, combat spikes, and driving sections as separate route notes.', 'Moderate.'],
 ['Replay modifiers', 'After clearing a mission, replay with one goal at a time: cleaner stealth, fewer alarms, faster route, gadget route, or louder combat route.', 'Low.'],
 ['Collectible cleanup', 'Do not chase every collectible during a first story run unless you enjoy pausing often. Mark missed areas and return through replay when possible.', 'Moderate.'],
 ['Trophy cleanup', 'Keep separate notes for difficulty, mission-specific challenges, and replay requirements before committing to a platinum route.', 'Moderate to high.'],
];

export const firstLightLengthRows = [
 ['Story-focused run', 'Best for players who follow objectives, accept messy encounters, and do not replay every room for a perfect stealth route.'],
 ['Explorer run', 'Best for players who search alternate routes, test gadgets, watch patrols, and replay mission sections to understand systems.'],
 ['Completionist run', 'Best for players who want collectibles, trophies, mission modifiers, and cleaner replay routes. Wait for verified full checklists before treating this as solved.'],
 ['Review-risk check', 'If length matters to your purchase, compare current critic reviews, Steam user reports, and time-to-beat coverage before buying.'],
];

export const firstLightReplayRows = [
 ['Replay favorite missions', 'Steam describes replaying favorite missions, which is the cleanest confirmed reason to keep mission notes.'],
 ['Additional modifiers', 'Modifiers make it useful to remember how a first route worked, where detection happened, and which tools solved each scene.'],
 ['Approach variety', 'Stealth, gadgets, bluffing, firearms, driving, and route reading can change the feel of a second attempt.'],
 ['Completion cleanup', 'Trophy and collectible routes should be treated as post-story cleanup unless you have a verified checklist beside you.'],
];

export const firstLightSourceRows = [
 {
 claim: 'Steam lists 007 First Light for May 27, 2026 with IO Interactive as developer and publisher.',
 source: 'Steam store',
 status: 'verified' as const,
 href: firstLightSteamUrl,
 note: 'Use for release date, Steam feature labels, system requirements, Denuvo, EULA, language support, and PC purchase state.',
 },
 {
 claim: 'Pre-orders included a free Deluxe Edition upgrade with 24-hour early access before standard launch.',
 source: 'Steam store and Steam news copy',
 status: 'verified' as const,
 href: firstLightSteamUrl,
 note: 'Use for early access and Deluxe bonus wording. Do not expand it into unsupported platform-specific claims.',
 },
 {
 claim: 'Global launch times are handled by the official support page.',
 source: '007 First Light support',
 status: 'working' as const,
 href: firstLightSupportUrl,
 note: 'Use for exact local unlock timing when accessible; otherwise tell players to check their platform countdown.',
 },
 {
 claim: 'The PlayStation Store lists 007 First Light for PS5.',
 source: 'PlayStation Store',
 status: 'verified' as const,
 href: firstLightPlayStationUrl,
 note: 'Use for PS5 availability and regional price checks. Do not infer Xbox or Switch status from the PS listing.',
 },
 {
 claim: 'The official launch trailer frames the May 27 release and the young Bond origin story.',
 source: 'Official YouTube launch trailer',
 status: 'verified' as const,
 href: firstLightLaunchTrailerUrl,
 note: 'Use for visual context and tone, not review conclusions.',
 },
 {
 claim: 'The official first 13 minutes video shows opening gameplay and includes spoilers.',
 source: 'Official YouTube gameplay video',
 status: 'verified' as const,
 href: firstLightGameplayUrl,
 note: 'Use for opening gameplay context while warning players who want a blind start.',
 },
 {
 claim: 'Players are discussing review scores, PC performance, Denuvo, and Steam user-review timing after launch.',
 source: 'Reddit review thread',
 status: 'working' as const,
 href: firstLightRedditReviewUrl,
 note: 'Use as a demand signal for what players are checking, not as final proof of quality or performance.',
 },
 {
 claim: 'Players are asking about no preload on Steam and Xbox, and how that affects early access value.',
 source: 'Reddit preload discussion',
 status: 'working' as const,
 href: firstLightRedditPreloadUrl,
 note: 'Use as a community concern. For final preload status, players should still check their platform library.',
 },
 {
 claim: 'Steam Deck interest is active, with early reports depending heavily on low settings and upscaling.',
 source: 'Steam Deck HQ first impressions',
 status: 'working' as const,
 href: firstLightSteamDeckHQUrl,
 note: 'Use for player-facing handheld caution until Steam shows a rating or broader settings reports settle.',
 },
 {
 claim: 'PC players are looking for benchmark evidence beyond the official requirement table.',
 source: 'TechPowerUp benchmark review',
 status: 'working' as const,
 href: firstLightTechPowerUpUrl,
 note: 'Use as a performance reference, while keeping hardware-specific claims tied to the benchmark source.',
 },
];

export const firstLightRelatedGuides: GameGuideLink[] = [
 {
 title: '007 First Light Guide Hub',
 href: firstLight007.hubPath,
 description:
 'Start here for release timing, early access, preload checks, reviews, PC specs, and spoiler-light beginner guidance.',
 },
 ...firstLight007.guideLinks,
];

export function getFirstLightRelated(excludeHref: string) {
 return firstLightRelatedGuides.filter((guide) => guide.href !== excludeHref).slice(0, 6);
}

const firstLightKeywords = [
 '007 First Light',
 '007 First Light early access',
 '007 First Light release date',
 '007 First Light release time',
 '007 First Light preload',
 '007 First Light review embargo',
 'James Bond First Light',
];

export function createFirstLightMetadata({
 title,
 description,
 canonical,
 image = firstLightImages.hero,
}: {
 title: string;
 description: string;
 canonical: string;
 image?: string;
}): Metadata {
 return {
 title: { absolute: title },
 description,
 keywords: firstLightKeywords,
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

export const firstLightReleaseActionRows = [
 {
 step: '1. Confirm your local unlock window',
 doThis: 'Open your platform storefront countdown (Steam, PS5, Xbox) and write down the exact local hour, not just the calendar date.',
 why: 'Calendar dates and time zones disagree. A countdown screenshot beats guessing on launch night, especially in Australia or other UTC+ regions.',
 },
 {
 step: '2. Decide Standard vs Deluxe early access',
 doThis: 'Pick Standard unless you want the 24-hour early access window plus the cosmetic bundle (four outfits, Agent\u2019s Mark weapon skin, four Gleaming gadget skins).',
 why: 'Early access is bundled with the free Deluxe upgrade, not sold separately. The upgrade is cosmetic-plus-access, not extra story content.',
 },
 {
 step: '3. Check preload from your library, not the store page',
 doThis: 'After purchase, open Steam, PS5, or Xbox library and look for an Install or Preload button. Use the button if it appears.',
 why: 'Store copy does not guarantee preload on every platform. Your library shows the real state for your account and region.',
 },
 {
 step: '4. Plan launch-night session',
 doThis: 'Block 2-3 hours, set display to your most-used resolution, cap background apps, and pick a save profile before downloading.',
 why: '007 First Light has uncapped framerate and DLSS 4.5 at launch. First-hour testing reads cleaner when system load is stable.',
 },
 {
 step: '5. Verify Denuvo and Steam Deck expectations',
 doThis: 'Before launch, read the Steam page DRM note. For Steam Deck, plan a settings test within refund limits instead of assuming handheld play is safe.',
 why: 'Denuvo Anti-Tamper and the third-party EULA are listed. Steam Deck status is unconfirmed at launch and depends on per-game settings.',
 },
] as const;

export const firstLightReleaseStatusItems = [
 { label: 'Standard release', value: 'May 27, 2026 on Steam and PS5.', status: 'verified' as const },
 { label: '24-hour early access', value: 'Bundled with the free Deluxe Edition upgrade for pre-orders.', status: 'verified' as const },
 { label: 'Preload availability', value: 'Not universally confirmed across platforms; check your library after purchase.', status: 'needs-check' as const },
 { label: 'Steam Deck status', value: 'Unconfirmed at launch. Wait for a rating or strong player reports.', status: 'needs-check' as const },
 { label: 'Denuvo DRM', value: 'Steam lists Denuvo Anti-Tamper and a third-party EULA.', status: 'verified' as const },
 { label: 'Australia / time zones', value: 'Use platform countdown, not just calendar date.', status: 'working' as const },
];

export const firstLightReleaseSourceRows = [
 {
 claim: 'Release date, platforms, and pre-order Deluxe early access',
 source: 'Steam store page',
 status: 'verified' as const,
 href: firstLightSteamUrl,
 note: 'Used for May 27 release, PS5 status, Deluxe early access, and DRM disclosure.',
 },
 {
 claim: 'Deluxe bonus contents (outfits, gadget skins, weapon skin)',
 source: 'Steam store Deluxe edition copy',
 status: 'verified' as const,
 href: firstLightSteamUrl,
 note: 'Confirms four outfits, Agent\u2019s Mark skin, and four Gleaming gadget skins.',
 },
 {
 claim: 'Preload status and platform differences',
 source: 'Steam community discussion',
 status: 'needs-check' as const,
 href: firstLightRedditPreloadUrl,
 note: 'Reports vary by platform; PS5 preload is the more consistent path.',
 },
 {
 claim: 'Review embargo and current critic reviews',
 source: 'IO Interactive official site',
 status: 'needs-check' as const,
 href: firstLightOfficialUrl,
 note: 'Treat the embargo question as time-sensitive. Confirm on launch day before quoting critic scores.',
 },
 {
 claim: 'Steam Deck and PC performance',
 source: 'Steam store system requirements',
 status: 'needs-check' as const,
 href: firstLightSteamUrl,
 note: 'Spec lines and DLSS notes are confirmed; real-frame-pacing and Deck status depend on launch reports.',
 },
];

export const firstLightSearchIntentRelease = [
 {
 query: '007 First Light release date',
 answer: 'May 27, 2026 on Steam and PS5. Deluxe upgrade gives 24-hour early access for pre-orders.',
 href: '#release-checklist',
 label: 'Date',
 },
 {
 query: '007 First Light early access',
 answer: '24-hour early access is bundled with the free Deluxe Edition upgrade. Standard edition unlocks at the standard launch hour.',
 href: '#deluxe-vs-standard',
 label: 'Early access',
 },
 {
 query: '007 First Light preload',
 answer: 'Preload is not universally confirmed. Check your Steam or PS5 library after purchase; do not change region to force it.',
 href: '#preload-check',
 label: 'Preload',
 },
 {
 query: '007 First Light release time Australia',
 answer: 'Use the platform countdown. Australian time zones can shift the visible date or hour compared to the Steam calendar.',
 href: '#time-zones',
 label: 'Time zones',
 },
];

export const firstLightJumpLinksRelease = [
 { href: '#release-checklist', label: 'Release checklist' },
 { href: '#deluxe-vs-standard', label: 'Deluxe vs Standard' },
 { href: '#preload-check', label: 'Preload check' },
 { href: '#time-zones', label: 'Time zones' },
 { href: '/games/007-first-light/review-embargo', label: 'Review & Denuvo' },
 { href: '/games/007-first-light/system-requirements', label: 'System requirements' },
];

export const firstLightBeginnerActionRows = [
 {
 step: '1. Read the room before any gadget or weapon',
 doThis: 'Look for cameras, guard paths, climbable lines, cover, and exits before touching the gadget wheel or firing a shot.',
 why: 'A first mission is a learn-the-language run, not a perfect run. Reading the room prevents the most common beginner mistake of committing to a loud route too early.',
 },
 {
 step: '2. Try the quiet approach first, then escalate',
 doThis: 'Move slowly, use cover, and try bluffing or non-lethal options before opening fire or alerting the whole room.',
 why: 'Steam describes silent and loud options, and IO Interactive missions reward patience. Saving loud combat for forced encounters makes later rooms easier.',
 },
 {
 step: '3. Use one gadget at a time',
 doThis: 'Pick a single gadget to solve the current access, distraction, or camera problem instead of burning through your kit.',
 why: 'Gadgets are route tools, not consumables. Saving a gadget for the next room often matters more than using one on the current puzzle.',
 },
 {
 step: '4. Break line of sight when stealth fails',
 doThis: 'If you are spotted, reposition behind cover and use a takedown, gadget, or melee before trading gunfire.',
 why: 'Standing still to fight is the easiest way to lose ammo, health, and mission rhythm. A clean reset beats an open firefight for a beginner.',
 },
 {
 step: '5. Note your route and replay with one goal',
 doThis: 'After the mission, write down which approach worked, which gadget solved the room, and where detection happened. Replay with one specific improvement.',
 why: 'Steam describes replaying missions with additional modifiers. A short note now makes replay planning useful instead of guessing later.',
 },
] as const;

export const firstLightBeginnerStatusItems = [
 { label: 'Beginner approach', value: 'Start stealth-first, escalate only when the scene forces it.', status: 'verified' as const },
 { label: 'Gadget role', value: 'Use gadgets for access, distraction, and camera bypass, not only combat.', status: 'verified' as const },
 { label: 'Combat role', value: 'Save firearms for failed stealth, forced combat, or action sequences.', status: 'verified' as const },
 { label: 'Replay hook', value: 'Replay favorite missions with additional modifiers to test cleaner routes.', status: 'verified' as const },
 { label: 'Driving sections', value: 'Expect driving segments. Treat vehicle pressure as a separate skill from stealth movement.', status: 'working' as const },
 { label: 'Opening spoilers', value: 'The official first 13 minutes video shows the opening mission. Skip it for a blind start.', status: 'working' as const },
];

export const firstLightBeginnerSourceRows = [
 {
 claim: 'Silent and loud options, gadgets, and approach variety',
 source: 'Steam store description',
 status: 'verified' as const,
 href: firstLightSteamUrl,
 note: 'Use as the source for the playstyle flexibility, gadgets, and approach variety beginners should expect.',
 },
 {
 claim: 'Replayable missions with additional modifiers',
 source: 'Steam store description',
 status: 'verified' as const,
 href: firstLightSteamUrl,
 note: 'Confirms the replay hook that makes a first-run notebook useful for planning a second route.',
 },
 {
 claim: 'Driving segments and iconic vehicles',
 source: 'Official launch trailer',
 status: 'verified' as const,
 href: firstLightLaunchTrailerUrl,
 note: 'Use to warn new players that not every mission is pure stealth, and vehicle handling is part of the learning curve.',
 },
 {
 claim: 'Opening 13 minutes gameplay and pacing',
 source: 'Official YouTube gameplay video',
 status: 'verified' as const,
 href: firstLightGameplayUrl,
 note: 'Useful for pacing context, but treat it as a spoiler for the opening mission.',
 },
 {
 claim: 'Beginner approach discussion and gadget advice',
 source: 'Reddit review thread',
 status: 'working' as const,
 href: firstLightRedditReviewUrl,
 note: 'Use as a demand signal for what new players are asking, not as a definitive guide.',
 },
];

export const firstLightBeginnerSearchIntent = [
 {
 query: '007 First Light beginner guide',
 answer: 'Start stealth-first, read each room, use one gadget at a time, escalate only when detected, then replay with one specific improvement goal.',
 href: '#first-60-minutes',
 label: 'Beginner plan',
 },
 {
 query: '007 First Light first mission',
 answer: 'Treat the opening as a learn-the-language run. Use beginner habits, the first-mission checklist, and the recovery table instead of restarting on every mistake.',
 href: '#first-mission',
 label: 'First mission',
 },
 {
 query: '007 First Light stealth or loud',
 answer: 'Quiet routes are usually the safer first choice. Save loud combat for scenes that have already escalated, forced combat, or open action sequences.',
 href: '#approach',
 label: 'Stealth vs loud',
 },
 {
 query: '007 First Light gadgets',
 answer: 'Gadgets are route tools for access, distraction, and camera bypass. Use one at a time and save tools for later rooms when possible.',
 href: '#recovery',
 label: 'Gadgets',
 },
];

export const firstLightBeginnerJumpLinks = [
 { href: '#first-60-minutes', label: 'First 60 minutes' },
 { href: '#beginner-habits', label: 'Beginner habits' },
 { href: '#first-mission', label: 'First mission checklist' },
 { href: '#recovery', label: 'Recovery paths' },
 { href: '#approach', label: 'Choose an approach' },
 { href: '/games/007-first-light/mission-list-chapters-length', label: 'Mission list & length' },
];

export const firstLightMissionActionRows = [
 {
 step: '1. Decide your run type before you start',
 doThis: 'Pick story-only, explorer, or completionist based on how much time you want to spend on alternate routes, collectibles, and trophies.',
 why: 'Run type changes how useful mission-list searches are. Story players need the chapter shape, completionists need verified collectible routes.',
 },
 {
 step: '2. Use a spoiler-light mission shape first',
 doThis: 'Track route shape only: opening tutorial, main objectives, stealth rooms, action spikes, and driving shifts. Skip full mission names until you are ready.',
 why: 'Full mission names can spoil story, location, and characters. A shape-based plan gives you pacing without ruining the first run.',
 },
 {
 step: '3. Plan for one replay pass after the story',
 doThis: 'Treat the first run as a learning pass. Mark where detection happened, which gadget solved the room, and which sections feel worth replaying.',
 why: 'Steam describes replaying favorite missions with additional modifiers. A short note now makes a second pass more useful than guessing later.',
 },
 {
 step: '4. Separate collectible and trophy cleanup',
 doThis: 'Do not chase every collectible during a first story run. Mark missed areas and return through replay or a verified checklist.',
 why: 'Chasing collectibles mid-story can stall pacing. Cleanup passes are cleaner when you know which mission each collectible is tied to.',
 },
 {
 step: '5. Verify time-to-beat against your style',
 doThis: 'Compare your run type against current time-to-beat coverage, not just one estimate. Story runs finish faster than completionist runs.',
 why: 'Length numbers are most useful when they match your style. A wrong baseline leads to a buy-or-wait decision based on the wrong number.',
 },
] as const;

export const firstLightMissionStatusItems = [
 { label: 'Mission list available', value: 'Yes, players are searching for mission-list structure. Keep routes spoiler-light until verified.', status: 'verified' as const },
 { label: 'Replay hook', value: 'Replay favorite missions with additional modifiers, per Steam store copy.', status: 'verified' as const },
 { label: 'Time-to-beat range', value: 'Public estimates cluster around a campaign-length action-adventure, not a short demo.', status: 'working' as const },
 { label: 'Collectible routes', value: 'Treat collectible and trophy routes as post-story cleanup until verified checklists are available.', status: 'needs-check' as const },
 { label: 'Chapter count', value: 'Use spoiler-light planning first. Full chapter counts may shift after launch updates.', status: 'needs-check' as const },
 { label: 'Driving sections', value: 'Plan for vehicle segments between stealth and action sections, even on a story run.', status: 'working' as const },
];

export const firstLightMissionSourceRows = [
 {
 claim: 'Replayable missions with additional modifiers',
 source: 'Steam store description',
 status: 'verified' as const,
 href: firstLightSteamUrl,
 note: 'Confirms the replay hook that makes mission planning and run-type choice useful.',
 },
 {
 claim: 'Mission shape, opening pacing, and driving tone',
 source: 'Official YouTube launch trailer',
 status: 'verified' as const,
 href: firstLightLaunchTrailerUrl,
 note: 'Use for tone and structure, not for specific mission names or spoilers.',
 },
 {
 claim: 'Opening 13 minutes gameplay and pacing',
 source: 'Official YouTube gameplay video',
 status: 'verified' as const,
 href: firstLightGameplayUrl,
 note: 'Useful for pacing but contains opening mission spoilers.',
 },
 {
 claim: 'Player demand for mission list and length',
 source: 'Reddit review thread',
 status: 'working' as const,
 href: firstLightRedditReviewUrl,
 note: 'Use as a demand signal for what players are asking, not as final length numbers.',
 },
 {
 claim: 'Time-to-beat and replay coverage',
 source: 'Steam community discussion',
 status: 'needs-check' as const,
 href: firstLightRedditPreloadUrl,
 note: 'Use for player-reported length ranges, but verify against your run type before buying on length alone.',
 },
];

export const firstLightMissionSearchIntent = [
 {
 query: '007 First Light mission list',
 answer: 'Yes, there is a mission list. Use a spoiler-light shape first, then read full mission names only when you are ready for story spoilers.',
 href: '#fast-answers',
 label: 'Mission list',
 },
 {
 query: '007 First Light chapters',
 answer: 'Chapter and mission-count answers can spoil the campaign. Use a spoiler-light plan first and verify full names after launch updates.',
 href: '#mission-shape',
 label: 'Chapters',
 },
 {
 query: '007 First Light how long to beat',
 answer: 'Length depends on run type: story-only finishes fastest, explorer takes longer, and completionist is the longest because of replay and cleanup.',
 href: '#length',
 label: 'How long',
 },
 {
 query: '007 First Light replayable missions',
 answer: 'Yes. Steam describes replaying favorite missions with additional modifiers, which is the strongest confirmed replay hook.',
 href: '#replay',
 label: 'Replay',
 },
];

export const firstLightMissionJumpLinks = [
 { href: '#fast-answers', label: 'Fast answers' },
 { href: '#mission-shape', label: 'Mission shape' },
 { href: '#length', label: 'How long to beat' },
 { href: '#replay', label: 'Replay & cleanup' },
 { href: '/games/007-first-light/beginner-guide', label: 'Beginner guide' },
 { href: '/games/007-first-light/review-embargo', label: 'Reviews & Denuvo' },
];

export const firstLightEmbargoActionRows = [
 {
 step: '1. Start with current reviews',
 doThis: 'Check current critic coverage and Steam user reviews before using older embargo countdown wording.',
 why: 'Review status changes quickly. Older wording can mislead you into thinking reviews are not out yet.',
 },
 {
 step: '2. Read review details, not just scores',
 doThis: 'Read what critics say about mission design, stealth quality, driving, gadgets, PC performance, and story pacing before buying.',
 why: 'A score alone hides the questions that actually matter for a Bond origin campaign with mission replay.',
 },
 {
 step: '3. Cross-check Steam user reviews',
 doThis: 'Open Steam user reviews for PC-specific feedback on Denuvo, performance, refunds, and review-volume changes after launch.',
 why: 'User reviews catch PC-specific issues that critic reviews may not cover, especially around DRM and frame pacing.',
 },
 {
 step: '4. Decide buy or wait based on your risk',
 doThis: 'Buy now if current reviews match what you want. Wait if you need broader player reports, Steam Deck proof, or PC performance proof.',
 why: 'The buy-or-wait answer is personal. It depends on how much weight you put on Denuvo, handheld play, and PC performance.',
 },
 {
 step: '5. Re-check before the refund window closes',
 doThis: 'Within the Steam refund window, re-check reviews, performance, and any platform-specific reports before keeping the purchase.',
 why: 'Launch-day reports evolve fast. A short re-check inside the refund window protects you from settling in on a problem copy.',
 },
] as const;

export const firstLightEmbargoStatusItems = [
 { label: 'Review status', value: 'Treat the embargo question as time-sensitive. Confirm on launch day before quoting critic scores.', status: 'needs-check' as const },
 { label: 'Critic coverage', value: 'Use Metacritic, OpenCritic, and IGN as separate signals rather than treating one as final.', status: 'working' as const },
 { label: 'Steam user reviews', value: 'Check Steam after launch for user-review volume and PC-specific reports.', status: 'needs-check' as const },
 { label: 'Denuvo listing', value: 'Steam lists Denuvo Anti-Tamper and a third-party EULA. PC buyers should factor DRM into the decision.', status: 'verified' as const },
 { label: 'Steam Deck', value: 'No Steam Deck Verified label is confirmed. Wait for a rating or strong player reports.', status: 'needs-check' as const },
 { label: 'Buy or wait', value: 'Buy if reviews match your expectations. Wait if you need broader reports on performance or handheld play.', status: 'working' as const },
];

export const firstLightEmbargoSourceRows = [
 {
 claim: 'Review status, critic coverage, and Steam user reviews',
 source: 'Metacritic, OpenCritic, and Steam user reviews',
 status: 'needs-check' as const,
 href: firstLightSteamUrl,
 note: 'Confirm on launch day before quoting critic scores. Treat older embargo countdown posts as outdated.',
 },
 {
 claim: 'Denuvo Anti-Tamper and third-party EULA',
 source: 'Steam store page',
 status: 'verified' as const,
 href: firstLightSteamUrl,
 note: 'Use as the source for the DRM disclosure that PC buyers should factor into the decision.',
 },
 {
 claim: 'Player demand for reviews, Denuvo, performance, and Deck',
 source: 'Reddit review thread',
 status: 'working' as const,
 href: firstLightRedditReviewUrl,
 note: 'Use as a demand signal for what players are checking after launch, not as final review conclusions.',
 },
 {
 claim: 'Steam Deck and handheld performance',
 source: 'Steam Deck HQ first impressions',
 status: 'working' as const,
 href: firstLightSteamDeckHQUrl,
 note: 'Use for handheld caution until Steam shows a rating or broader settings reports settle.',
 },
 {
 claim: 'PC benchmark evidence',
 source: 'TechPowerUp benchmark review',
 status: 'working' as const,
 href: firstLightTechPowerUpUrl,
 note: 'Use as a performance reference, but keep hardware-specific claims tied to the benchmark source.',
 },
];

export const firstLightEmbargoSearchIntent = [
 {
 query: '007 First Light review embargo',
 answer: 'If you searched for the embargo, switch to current critic reviews and Steam user reviews before deciding whether to buy.',
 href: '#embargo-checklist',
 label: 'Reviews',
 },
 {
 query: '007 First Light reviews out',
 answer: 'Check current critic coverage and Steam after the May 27 launch window. Review and user-review signals can change quickly on release day.',
 href: '#review-sources',
 label: 'Reviews out',
 },
 {
 query: '007 First Light worth buying',
 answer: 'Buy if reviews match the Bond origin story you want. Wait if you need broader player reports, handheld testing, or more confidence in PC performance.',
 href: '#buy-or-wait',
 label: 'Worth buying',
 },
 {
 query: '007 First Light Denuvo',
 answer: 'Steam lists Denuvo Anti-Tamper and a third-party EULA. PC buyers who care about DRM should factor that into the decision.',
 href: '#denuvo',
 label: 'Denuvo',
 },
];

export const firstLightEmbargoJumpLinks = [
 { href: '#embargo-checklist', label: 'Review checklist' },
 { href: '#review-sources', label: 'Review sources' },
 { href: '#buy-or-wait', label: 'Buy or wait' },
 { href: '#denuvo', label: 'Denuvo & Deck' },
 { href: '/games/007-first-light/system-requirements', label: 'System requirements' },
 { href: '/games/007-first-light/beginner-guide', label: 'Beginner guide' },
];

export const firstLightSpecActionRows = [
 {
 step: '1. Match your PC to the official spec tiers',
 doThis: 'Compare your CPU, GPU, RAM, and storage against the minimum and recommended tiers before downloading or playing.',
 why: 'The official tiers are the cleanest baseline. Anything below minimum risks missing features or running at unplayable settings.',
 },
 {
 step: '2. Confirm SSD and 80 GB free space',
 doThis: 'Check that you have an SSD and at least 80 GB of free space, with headroom for patches and shader caches.',
 why: 'Steam lists SSD required in both tiers. HDD installs and tight free space are a common cause of stutter and long loads.',
 },
 {
 step: '3. Plan DLSS or FSR behavior on your GPU',
 doThis: 'Decide your DLSS or FSR preset before launch, and test it in driving and dense stealth areas first.',
 why: 'DLSS 4.5 is listed at launch. Your preset choice changes both image quality and frame pacing more than raw settings sliders.',
 },
 {
 step: '4. Test Steam Deck only inside the refund window',
 doThis: 'If you plan to play on Steam Deck, test low settings and upscaling within the Steam refund window before committing.',
 why: 'No Steam Deck Verified label is confirmed. The first 80 GB of testing is the safest time to confirm handheld play is usable.',
 },
 {
 step: '5. Re-check specs and benchmarks after patches',
 doThis: 'Re-read the Steam spec page and current benchmark coverage after major patches, since requirements can shift.',
 why: 'Day-one spec lines are a baseline. Post-launch patches and Summer 2026 features like path tracing can change real-world needs.',
 },
] as const;

export const firstLightSpecStatusItems = [
 { label: 'Minimum GPU', value: 'GTX 1660 or RX 5700, plus 16 GB RAM and an SSD with 80 GB free.', status: 'verified' as const },
 { label: 'Recommended GPU', value: 'RTX 3060 Ti or RX 6700 XT, plus 16 GB RAM and an SSD with 80 GB free.', status: 'verified' as const },
 { label: 'Storage type', value: 'SSD required in both tiers. HDD installs are not supported.', status: 'verified' as const },
 { label: 'DLSS 4.5 at launch', value: 'Steam news lists uncapped framerate, DLSS 4.5 Super Resolution, and DLSS Dynamic Multi Frame Generation.', status: 'verified' as const },
 { label: 'Path tracing', value: 'Path tracing and DLSS Ray Reconstruction are planned for Summer 2026, not at launch.', status: 'verified' as const },
 { label: 'Steam Deck', value: 'No Steam Deck Verified label is confirmed. Treat handheld play as player-report dependent.', status: 'needs-check' as const },
 { label: 'Denuvo', value: 'Steam lists Denuvo Anti-Tamper. Test performance impact on your own setup rather than assuming.', status: 'working' as const },
];

export const firstLightSpecSourceRows = [
 {
 claim: 'Minimum and recommended PC requirements',
 source: 'Steam store system requirements',
 status: 'verified' as const,
 href: firstLightSteamUrl,
 note: 'Use as the official baseline for CPU, GPU, RAM, storage, and SSD requirement.',
 },
 {
 claim: 'DLSS 4.5, uncapped framerate, and DLSS Dynamic Multi Frame Generation at launch',
 source: 'Steam news copy',
 status: 'verified' as const,
 href: firstLightSteamUrl,
 note: 'Use for launch PC features. Do not include path tracing as a launch feature.',
 },
 {
 claim: 'Path tracing and DLSS Ray Reconstruction planned for Summer 2026',
 source: 'Steam news copy',
 status: 'verified' as const,
 href: firstLightSteamUrl,
 note: 'Use for the future-feature disclaimer. Do not list these as launch-day visuals.',
 },
 {
 claim: 'Denuvo Anti-Tamper and third-party EULA',
 source: 'Steam store page',
 status: 'verified' as const,
 href: firstLightSteamUrl,
 note: 'Use for the DRM disclosure that PC buyers should factor into the decision.',
 },
 {
 claim: 'Steam Deck handheld behavior and settings guidance',
 source: 'Steam Deck HQ first impressions',
 status: 'working' as const,
 href: firstLightSteamDeckHQUrl,
 note: 'Use for player-facing handheld caution until Steam shows a rating or broader reports settle.',
 },
 {
 claim: 'PC benchmark evidence',
 source: 'TechPowerUp benchmark review',
 status: 'working' as const,
 href: firstLightTechPowerUpUrl,
 note: 'Use as a performance reference, but keep hardware-specific claims tied to the benchmark source.',
 },
];

export const firstLightSpecSearchIntent = [
 {
 query: '007 First Light system requirements',
 answer: 'Minimum is Windows 10/11, i5-9500 or Ryzen 5 3500, 16 GB RAM, GTX 1660 or RX 5700, 80 GB SSD. Recommended moves to i5-13500, Ryzen 5 7600, RTX 3060 Ti or RX 6700 XT.',
 href: '#specs',
 label: 'Requirements',
 },
 {
 query: '007 First Light PC specs',
 answer: 'Both tiers require 16 GB RAM, an SSD, and 80 GB free. The GPU jump is GTX 1660 or RX 5700 minimum to RTX 3060 Ti or RX 6700 XT recommended.',
 href: '#performance',
 label: 'PC specs',
 },
 {
 query: '007 First Light Steam Deck',
 answer: 'No Steam Deck Verified label is confirmed. Treat handheld play as settings-dependent until Steam or broad player reports settle.',
 href: '#deck',
 label: 'Steam Deck',
 },
 {
 query: '007 First Light DLSS',
 answer: 'Launch includes uncapped framerate, DLSS 4.5 Super Resolution, and DLSS Dynamic Multi Frame Generation. Path tracing arrives in Summer 2026.',
 href: '#dlss',
 label: 'DLSS',
 },
];

export const firstLightSpecJumpLinks = [
 { href: '#specs', label: 'Minimum & recommended' },
 { href: '#performance', label: 'Launch performance' },
 { href: '#deck', label: 'Steam Deck' },
 { href: '#dlss', label: 'DLSS & path tracing' },
 { href: '/games/007-first-light/review-embargo', label: 'Reviews & Denuvo' },
 { href: '/games/007-first-light/beginner-guide', label: 'Beginner guide' },
];
