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
 ['Watch for time-sensitive events', 'Some assignments and conversations advance when you rest or move between areas. Save often so you can reload if a timer triggers unexpectedly.'],
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
 ['Known issues', 'Launch-day reports include crashes, progression blockers, and UI glitches. Check Steam Community and recent patch notes before a long session.'],
 ['Language', 'English has full audio; launch text support includes German, Russian, Simplified Chinese, and Spanish - Latin America.'],
 ['Controller', 'Steam lists partial controller support, so test controls and UI readability early.'],
 ['Steam Deck', 'Steam Deck Verified; test text size, menus, and cloud saves before a long session.'],
 ['Later localization', 'French, Italian, Japanese, Korean, Polish, Portuguese (Brazilian), Traditional Chinese, and Turkish are planned as free updates later in 2026.'],
];

export const zeroParadesBuildArchetypeRows = [
 ['Careful Investigator', 'Deduction, observation, patience', 'Dialogue-heavy routes, evidence gathering, reading motives', 'Low Exertion use; lets some checks fail to learn from consequences'],
 ['Forceful Operative', 'Intimidation, physical presence, coercion', 'Direct confrontation, leverage, forcing compliance', 'Moderate Exertion; accepts higher Fatigue for mission-critical checks'],
 ['Social Manipulator', 'Persuasion, deception, reading people', 'Faction navigation, cover stories, turning informants', 'Low-moderate Exertion; invests in social skills to reduce physical pressure'],
 ['Unstable Wildcard', 'High-risk, Delirium-leaning, experimental', 'Unconventional routes, Conditioning experiments, edge cases', 'High Exertion; embraces pressure states as a cost of power'],
];

export const zeroParadesSkillRows = [
 ['Deduction', 'Analyzing evidence, connecting clues, reading situations', 'Investigator'],
 ['Observation', 'Noticing details, watching patterns, environmental awareness', 'Investigator'],
 ['Intimidation', 'Applying pressure through presence, threats, or reputation', 'Operative'],
 ['Coercion', 'Forcing compliance through leverage or physical dominance', 'Operative'],
 ['Persuasion', 'Convincing others through charm, logic, or emotional appeal', 'Social'],
 ['Deception', 'Lying, misdirection, cover stories, false identities', 'Social'],
 ['Reflexes', 'Quick reactions, dodge, initiative in split-second moments', 'Operative / Wildcard'],
 ['Endurance', 'Physical resilience, resisting pressure, sustaining effort', 'Operative'],
 ['Subterfuge', 'Stealth, misdirection, working behind the scenes', 'Social / Investigator'],
 ['Rhetoric', 'Argumentation, debate, ideological confrontation', 'Social'],
 ['Perception', 'Reading body language, detecting lies, sensing danger', 'Investigator'],
 ['Volatile', 'Unpredictable actions, embracing chaos, Delirium-tied choices', 'Wildcard'],
 ['Suggestion', 'Planting ideas, subtle influence, psychological manipulation', 'Social / Wildcard'],
 ['Composure', 'Maintaining cover, staying calm under pressure, poise', 'Investigator / Social'],
 ['Savoir Faire', 'Style, improvisation, creative problem-solving under duress', 'Wildcard / Social'],
];

export const zeroParadesLengthRows = [
 ['Main story', '20-30 hours', 'Single playthrough with moderate dialogue exploration'],
 ['Thorough playthrough', '30-40 hours', 'Reading all dialogue, exploring side content, testing skill checks'],
 ['Completionist', '40+ hours', 'Multiple endings, rerouted assignments, full Conditioning experiments'],
 ['Speed run', 'Under 15 hours', 'Skipping dialogue, minimal exploration, direct route through assignments'],
];

export const zeroParadesTimeLimitRows = [
 ['Resting', 'Some events advance when Hershel rests; save before sleeping', 'Community reports'],
 ['Area transitions', 'Moving between zones can trigger time-sensitive events', 'Community reports'],
 ['Assignment urgency', 'Main cases may have implicit deadlines expressed through dialogue', 'Steam description'],
 ['Dialogue consequences', 'Certain conversations lock out options if not completed in sequence', 'Community reports'],
];

export const zeroParadesControllerRows = [
 ['Movement', 'Works with controller; standard stick movement', 'Verified'],
 ['Dialogue navigation', 'Controller can navigate dialogue trees; test responsiveness', 'Community reports'],
 ['Skill menus', 'Partial support; some UI elements may require mouse precision', 'Steam listing'],
 ['Inventory / Journal', 'May feel less precise than mouse; test before committing', 'Community reports'],
 ['Combat / encounters', 'Controller works for basic interactions; complex checks may favor mouse', 'Steam listing'],
 ['Text readability', 'Adjustable text size listed on Steam; important for controller on TV', 'Steam listing'],
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
 'ZERO PARADES time limit',
 'ZERO PARADES bugs',
 'ZERO PARADES crafting',
 'ZERO PARADES GeForce Now',
 'ZERO PARADES technical issues',
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

// ============================================================
// BEGINNER GUIDE - depth exports
// ============================================================

export const zpBeginnerActionRows = [
  {
    step: '1. Pick an espionage identity before spending skill points',
    doThis: 'Choose between Investigator, Operative, Social, or Wildcard archetype, then invest in the matching core 3-5 skills first.',
    why: 'Spreading points across all 15 skills produces a weak build that fails at important checks. Identity first, breadth second.',
  },
  {
    step: '2. Make a manual save before risky conversations',
    doThis: 'Steam lists Save Anytime. Save before any conversation involving informants, faction meetings, or irreversible decisions.',
    why: 'Conditioning and faction choices can lock out routes. A manual save is the only safe way to test dialogue branches without permanent cost.',
  },
  {
    step: '3. Read motives before spending Exertion',
    doThis: 'Read informant and rival agendas carefully. Only spend Exertion on checks that match your build or mission goal.',
    why: 'Exertion pushes dice rolls but builds pressure via Fatigue, Anxiety, and Delirium. Wasting Exertion on minor dialogue compounds quickly.',
  },
  {
    step: '4. Change Conditioning deliberately, not randomly',
    doThis: 'Treat Conditioning as a long-term commitment. Read the effect description before accepting any change.',
    why: 'Conditioning can alter Hershel and the rules of play. Random swaps can break a build before the player understands the cost.',
  },
  {
    step: '5. Let some failed checks stand',
    doThis: 'When a check fails, pause before reloading. Read the new information or route the failure created.',
    why: 'Failure is part of the RPG structure. Some failed checks reveal motives or open alternative paths a successful check would miss.',
  },
] as const;

export const zpBeginnerStatusItems = [
  { label: 'Skill count', value: '15 skills listed on Steam, organized around archetypes.', status: 'verified' as const },
  { label: 'Conditioning', value: 'Can change Hershel and the rules of play; treat as long-term commitment.', status: 'verified' as const },
  { label: 'Exertion cost', value: 'Pushes dice rolls but builds Fatigue, Anxiety, and Delirium pressure.', status: 'verified' as const },
  { label: 'Save system', value: 'Save Anytime is listed on Steam. Use manual saves before risky conversations.', status: 'verified' as const },
  { label: 'Pressure states', value: 'Fatigue, Anxiety, and Delirium can derail a run if Exertion is spent carelessly.', status: 'working' as const },
];

export const zpBeginnerSourceRows = [
  {
    claim: 'How many skills does ZERO PARADES have, and what do they govern?',
    source: 'Steam store',
    status: 'verified' as const,
    href: zeroParadesSteamUrl,
    note: 'Steam lists 15 skills covering deduction, intimidation, persuasion, reflexes, subterfuge, and more.',
  },
  {
    claim: 'What does Conditioning do in ZERO PARADES?',
    source: 'Steam store / community discussion',
    status: 'verified' as const,
    href: zeroParadesOfficialUrl,
    note: 'Used for first-session planning. Conditioning can change Hershel and the rules of play, so treat it as a long-term commitment.',
  },
  {
    claim: 'Does ZERO PARADES allow manual saving?',
    source: 'Steam features list',
    status: 'verified' as const,
    href: zeroParadesSteamUrl,
    note: 'Save Anytime is listed. Manual saves are critical before risky conversations and Conditioning choices.',
  },
  {
    claim: 'What pressure systems should beginners track?',
    source: 'Steam store / community reports',
    status: 'working' as const,
    href: zeroParadesSteamUrl,
    note: 'Fatigue, Anxiety, and Delirium are described in store copy. Real thresholds depend on community testing and patch notes.',
  },
];

export const zpBeginnerSearchIntent = [
  {
    query: 'ZERO PARADES beginner guide',
    answer: 'Pick an espionage identity, save before risky conversations, spend Exertion on mission-critical checks, and let some failures stand.',
    href: '#first-session-priorities',
    label: 'Beginner',
  },
  {
    query: 'How to start ZERO PARADES',
    answer: 'Define a build archetype first, then read motives carefully. The game is structured around assignments, not chapters.',
    href: '#skills-and-conditioning',
    label: 'First steps',
  },
  {
    query: 'ZERO PARADES Conditioning explained',
    answer: 'Conditioning can change Hershel and the rules of play. Treat it as a long-term commitment, not a stat swap.',
    href: '#pressure-management',
    label: 'Conditioning',
  },
  {
    query: 'ZERO PARADES Exertion tips',
    answer: 'Use Exertion on checks that match your build. Spending it on every roll creates Fatigue, Anxiety, and Delirium pressure.',
    href: '#pressure-management',
    label: 'Exertion',
  },
];

export const zpBeginnerJumpLinks = [
  { href: '#first-session-priorities', label: 'First session' },
  { href: '#skills-and-conditioning', label: 'Skills and Conditioning' },
  { href: '#pressure-management', label: 'Pressure management' },
  { href: '#dialogue-and-save-habits', label: 'Dialogue and saves' },
  { href: '/games/zero-parades/best-build', label: 'Best build' },
  { href: '/games/zero-parades/walkthrough', label: 'Walkthrough' },
];

// ============================================================
// BEST BUILD - depth exports
// ============================================================

export const zpBuildActionRows = [
  {
    step: '1. Lock your archetype in the first hour',
    doThis: 'Decide between Investigator, Operative, Social, or Wildcard before you start spending skill points. Invest in 3-5 core skills first.',
    why: 'No single best build exists, but a focused archetype beats a scattered one. Build identity drives which dialogue options succeed.',
  },
  {
    step: '2. Plan Conditioning direction alongside skills',
    doThis: 'Read what Conditioning can change before adopting one. Match Conditioning direction to your archetype goals.',
    why: 'Conditioning can alter the rules of play. A Conditioning that conflicts with your build creates pressure without payoff.',
  },
  {
    step: '3. Reserve Exertion for mission-critical checks',
    doThis: 'Spend Exertion on checks tied to your build or route goals, not on minor dialogue where failure is acceptable.',
    why: 'Exertion is the emergency tool, not the default strategy. Spent carelessly, it builds Fatigue, Anxiety, and Delirium pressure.',
  },
  {
    step: '4. Test failure as a route discovery tool',
    doThis: 'When a check fails, read the consequences. Some failed checks open alternative paths the successful check would have skipped.',
    why: 'The game is designed to reward different outcomes. A reload-everything habit costs time and removes the consequence-driven storytelling.',
  },
  {
    step: '5. Save before each major assignment or Conditioning event',
    doThis: 'Use Steam Save Anytime to lock in a clean state before entering a new assignment area or accepting a Conditioning change.',
    why: 'Without manual saves, an irreversible choice can lock out routes and force a full restart.',
  },
] as const;

export const zpBuildStatusItems = [
  { label: 'Best build', value: 'No single best build; pick an archetype and invest in 3-5 core skills.', status: 'verified' as const },
  { label: 'Skill count', value: '15 skills on Steam, organized around identity and route goals.', status: 'verified' as const },
  { label: 'Conditioning effect', value: 'Can change Hershel and the rules of play; treat as long-term commitment.', status: 'verified' as const },
  { label: 'Respec system', value: 'No traditional respec; skill investment is largely permanent within a playthrough.', status: 'working' as const },
  { label: 'First build recommendation', value: 'Careful Investigator for first playthrough: Deduction, Observation, Perception, Composure.', status: 'working' as const },
];

export const zpBuildSourceRows = [
  {
    claim: 'How many skills does ZERO PARADES have, and how do they shape a build?',
    source: 'Steam store',
    status: 'verified' as const,
    href: zeroParadesSteamUrl,
    note: '15 skills cover deduction, intimidation, persuasion, reflexes, subterfuge, rhetoric, and more.',
  },
  {
    claim: 'Is there a respec system in ZERO PARADES?',
    source: 'Steam store / community discussion',
    status: 'working' as const,
    href: zeroParadesOfficialUrl,
    note: 'No traditional respec appears in store copy. Conditioning can change rules, but skill investment is largely permanent.',
  },
  {
    claim: 'Which archetype is best for a first playthrough?',
    source: 'Steam store / community reports',
    status: 'working' as const,
    href: zeroParadesRedditLaunchUrl,
    note: 'Careful Investigator is the safest first build. Real first-run consensus is still forming as more players complete the game.',
  },
  {
    claim: 'What does Conditioning change about a build?',
    source: 'Steam store / community discussion',
    status: 'verified' as const,
    href: zeroParadesSteamUrl,
    note: 'Conditioning can alter how checks resolve and which routes are available. Match Conditioning to archetype direction.',
  },
];

export const zpBuildSearchIntent = [
  {
    query: 'ZERO PARADES best build',
    answer: 'No single best build exists. Pick an archetype and invest in 3-5 core skills that match how you want to solve problems.',
    href: '#what-does-build-mean-in-zero-parades',
    label: 'Build',
  },
  {
    query: 'ZERO PARADES first playthrough build',
    answer: 'Careful Investigator is the safest first build: Deduction, Observation, Perception, and Composure, with Exertion reserved for critical checks.',
    href: '#best-build-for-a-first-playthrough',
    label: 'First run',
  },
  {
    query: 'Can you respec in ZERO PARADES',
    answer: 'No traditional respec is listed. Skill investment is largely permanent within a playthrough. Conditioning can change rules but not skill points.',
    href: '#common-build-mistakes-to-avoid',
    label: 'Respec',
  },
  {
    query: 'ZERO PARADES Conditioning guide',
    answer: 'Conditioning can change Hershel and the rules of play. Treat it as a long-term commitment matched to your archetype direction.',
    href: '#conditioning-and-exertion-tips-for-your-build',
    label: 'Conditioning',
  },
];

export const zpBuildJumpLinks = [
  { href: '#what-does-build-mean-in-zero-parades', label: 'What is a build' },
  { href: '#the-15-skills-explained', label: '15 skills' },
  { href: '#four-build-archetypes', label: 'Four archetypes' },
  { href: '#best-build-for-a-first-playthrough', label: 'First build' },
  { href: '/games/zero-parades/beginner-guide', label: 'Beginner guide' },
  { href: '/games/zero-parades/walkthrough', label: 'Walkthrough' },
];

// ============================================================
// CONTROLLER SUPPORT - depth exports
// ============================================================

export const zpControllerActionRows = [
  {
    step: '1. Test movement and dialogue in the first 10 minutes',
    doThis: 'Boot the game, walk around, and run a full conversation with controller only. Note any menu precision issues.',
    why: 'Steam lists partial controller support. Core gameplay works with a controller, but some menus may feel less precise than keyboard.',
  },
  {
    step: '2. Adjust text size before committing to a long session',
    doThis: 'Open settings and increase text size to the largest comfortable level. Test readability at your viewing distance.',
    why: 'Text-heavy RPGs strain eyes on small screens. Steam lists adjustable text size, but it is not on by default.',
  },
  {
    step: '3. Try Steam Input for custom layouts',
    doThis: 'Open Steam Input and create a layout that matches your hand size and play style. Test gyro, back buttons, or trackpads if available.',
    why: 'Steam Input is the most reliable way to customize controls. The in-game remap menu may be limited.',
  },
  {
    step: '4. Switch to keyboard for complex skill checks',
    doThis: 'When a critical skill check or long dialogue appears, switch to keyboard and mouse for the interaction, then return to controller.',
    why: 'Some UI elements still favor mouse precision. Mixing input is normal for partial controller support titles.',
  },
  {
    step: '5. For Steam Deck: confirm cloud sync and saves',
    doThis: 'After the first save, check Steam Cloud. Confirm the save appears on your main PC before going handheld-only.',
    why: 'Cloud sync is listed but not always instant. Confirming sync early prevents save loss on a switch between devices.',
  },
] as const;

export const zpControllerStatusItems = [
  { label: 'Controller support', value: 'Steam lists partial controller support. Core gameplay works; some UI may favor mouse.', status: 'verified' as const },
  { label: 'Steam Deck', value: 'Steam Deck Verified. Test text size and prompt readability before a long session.', status: 'verified' as const },
  { label: 'Text size', value: 'Adjustable text size is listed. Increase before committing to handheld play.', status: 'verified' as const },
  { label: 'Steam Input', value: 'Custom layouts and remaps are available through Steam Input outside the in-game menu.', status: 'working' as const },
  { label: 'Combat precision', value: 'Complex skill checks may favor mouse precision. Plan to switch input for important interactions.', status: 'needs-check' as const },
];

export const zpControllerSourceRows = [
  {
    claim: 'Does ZERO PARADES support controllers?',
    source: 'Steam features list',
    status: 'verified' as const,
    href: zeroParadesSteamUrl,
    note: 'Partial controller support is listed. Core gameplay is functional with a controller, but some menus are less precise than mouse.',
  },
  {
    claim: 'Is ZERO PARADES Steam Deck Verified?',
    source: 'Steam Deck badge',
    status: 'verified' as const,
    href: zeroParadesSteamUrl,
    note: 'Steam Deck Verified is listed. Text-heavy RPGs still benefit from font size and readability checks.',
  },
  {
    claim: 'Can controller buttons be remapped?',
    source: 'Steam Input',
    status: 'working' as const,
    href: zeroParadesOfficialUrl,
    note: 'Steam Input allows custom layouts. In-game remap menus may be limited; Steam Input is the more flexible path.',
  },
  {
    claim: 'What accessibility features support controller play?',
    source: 'Steam features list',
    status: 'verified' as const,
    href: zeroParadesSteamUrl,
    note: 'Adjustable text, no timed input, subtitle options, and stereo sound are listed on the Steam features page.',
  },
];

export const zpControllerSearchIntent = [
  {
    query: 'ZERO PARADES controller support',
    answer: 'Steam lists partial controller support. Core gameplay works; some menus may require mouse precision.',
    href: '#what-partial-controller-support-means',
    label: 'Controller',
  },
  {
    query: 'Keyboard or controller for ZERO PARADES',
    answer: 'Keyboard and mouse offer more precision for menu navigation and skill checks. Controller works for casual play and Steam Deck.',
    href: '#keyboard-vs-controller-comparison',
    label: 'Input',
  },
  {
    query: 'ZERO PARADES Steam Deck controls',
    answer: 'Steam Deck Verified. Test text size, dialogue readability, and Steam Cloud sync before a long handheld session.',
    href: '#steam-deck-controller-tips',
    label: 'Steam Deck',
  },
  {
    query: 'Can I remap ZERO PARADES controller',
    answer: 'Yes, through Steam Input. In-game remap menus may be limited; Steam Input allows custom layouts outside the game.',
    href: '#accessibility-features',
    label: 'Remap',
  },
];

export const zpControllerJumpLinks = [
  { href: '#what-partial-controller-support-means', label: 'Partial support' },
  { href: '#keyboard-vs-controller-comparison', label: 'Keyboard vs controller' },
  { href: '#steam-deck-controller-tips', label: 'Steam Deck tips' },
  { href: '#accessibility-features', label: 'Accessibility' },
  { href: '/games/zero-parades/steam-deck', label: 'Steam Deck guide' },
  { href: '/games/zero-parades/system-requirements', label: 'System requirements' },
];

// ============================================================
// IS IT WORTH IT - depth exports
// ============================================================

export const zpWorthItActionRows = [
  {
    step: '1. Match the game to your taste before buying',
    doThis: 'Read the Steam description and tags. Confirm the game is a reading-heavy, skill-check-driven espionage RPG.',
    why: 'The strongest buyer fit is players who enjoy writing, investigation, ideological conflict, and consequence-driven dialogue.',
  },
  {
    step: '2. Check regional price on Steam, Epic, and GOG',
    doThis: 'Open your local storefronts and compare the listed price. The US price is $39.99; regional prices can differ.',
    why: 'Storefronts and regions carry different prices. Checking before purchase is faster than refunding after.',
  },
  {
    step: '3. Verify platform availability in your region',
    doThis: 'Confirm PC is available through Steam, Epic, or GOG. PS5 timing is announced for 2026, but no exact date is public yet.',
    why: 'PS5 buyers should wait for a confirmed date. PC buyers should confirm the buy button is live in their region.',
  },
  {
    step: '4. Read recent Steam reviews for launch bug context',
    doThis: 'Open the Steam review tab and sort by recent. Note any recurring complaints about crashes or progression blockers.',
    why: 'Launch-day reports for narrative RPGs sometimes include crashes and UI bugs. Reviews from the last week are more useful than the all-time average.',
  },
  {
    step: '5. Test controller and Steam Deck before long sessions',
    doThis: 'If you use a controller, run a 10-minute check on movement, dialogue, and skill menus. Steam Deck users should test text size.',
    why: 'Steam lists partial controller support. A quick test prevents frustration on a long session that turns out to be unreadable.',
  },
] as const;

export const zpWorthItStatusItems = [
  { label: 'Best buyer fit', value: 'ZA/UM espionage RPG fans, narrative RPG players, Disco Elysium fans.', status: 'verified' as const },
  { label: 'US price', value: '$39.99 in the US; regional prices can differ on Steam, Epic, and GOG.', status: 'verified' as const },
  { label: 'PS5 timing', value: 'PS5 is announced for 2026. No exact PS5 date is public yet.', status: 'verified' as const },
  { label: 'Launch bug risk', value: 'Launch-day reports include crashes, progression blockers, and UI glitches. Read recent Steam reviews.', status: 'working' as const },
  { label: 'Strong fit signals', value: 'Writing, investigation, skill checks, pressure systems, and consequence-driven dialogue.', status: 'verified' as const },
];

export const zpWorthItSourceRows = [
  {
    claim: 'What is the US price of ZERO PARADES, and where can I buy it?',
    source: 'ZA/UM official Reddit launch post',
    status: 'verified' as const,
    href: zeroParadesRedditLaunchUrl,
    note: 'Used for US price, store choice, and regional pricing check before purchase.',
  },
  {
    claim: 'Is the game a fit for Disco Elysium fans?',
    source: 'Steam store / official site',
    status: 'verified' as const,
    href: zeroParadesOfficialUrl,
    note: 'Same studio lineage, but ZERO PARADES has its own operant, Conditioning, and pressure systems rather than a direct sequel.',
  },
  {
    claim: 'Should PS5 buyers wait?',
    source: 'PlayStation-facing coverage',
    status: 'verified' as const,
    href: zeroParadesOfficialUrl,
    note: 'PS5 is announced for 2026. No exact PS5 launch date is public yet, so console buyers should wait for a confirmed date.',
  },
  {
    claim: 'Are launch bugs a buying risk?',
    source: 'Steam community reviews',
    status: 'working' as const,
    href: zeroParadesSteamUrl,
    note: 'Launch-day reports include crashes, progression blockers, and UI glitches. Read recent reviews for the most current bug context.',
  },
];

export const zpWorthItSearchIntent = [
  {
    query: 'Is ZERO PARADES worth it',
    answer: 'Buy if you want a ZA/UM espionage RPG with dense writing, skill checks, and pressure systems. Wait if you need PS5 timing or broad player consensus.',
    href: '#who-should-buy-wait-or-skip',
    label: 'Buying advice',
  },
  {
    query: 'Should Disco Elysium fans buy ZERO PARADES',
    answer: 'Yes, with calibrated expectations. Same studio lineage and narrative RPG positioning, but not a direct sequel.',
    href: '#who-should-buy-wait-or-skip',
    label: 'DE fans',
  },
  {
    query: 'ZERO PARADES price',
    answer: 'US price is $39.99. Regional prices differ; check Steam, Epic, and GOG in your region before purchasing.',
    href: '#launch-buying-checklist',
    label: 'Price',
  },
  {
    query: 'Should PS5 players wait for ZERO PARADES',
    answer: 'Yes. PS5 is announced for 2026, but no exact launch date is public. Wait for a confirmed date or live storefront page.',
    href: '#who-should-buy-wait-or-skip',
    label: 'PS5',
  },
];

export const zpWorthItJumpLinks = [
  { href: '#who-should-buy-wait-or-skip', label: 'Buyer types' },
  { href: '#launch-buying-checklist', label: 'Launch checklist' },
  { href: '/games/zero-parades/release-date', label: 'Release date' },
  { href: '/games/zero-parades/system-requirements', label: 'System requirements' },
  { href: '/games/zero-parades/beginner-guide', label: 'Beginner guide' },
  { href: '/games/zero-parades/review-embargo', label: 'Review embargo' },
];

// ============================================================
// LENGTH - depth exports
// ============================================================

export const zpLengthActionRows = [
  {
    step: '1. Pick a playstyle target before starting',
    doThis: 'Decide whether you want a focused main-story run, a thorough exploration run, or a completionist run. Plan your first session around that target.',
    why: 'Game length varies from under 15 hours to 40+ depending on playstyle. A target keeps you from over-saving or under-reading.',
  },
  {
    step: '2. Save before resting or moving between areas',
    doThis: 'Some events advance when Hershel rests or transitions between zones. Save manually before each rest or move.',
    why: 'The game does not always make time-sensitive limits explicit. A manual save is the only safe way to test a transition.',
  },
  {
    step: '3. Track your pressure states during a long session',
    doThis: 'Monitor Fatigue, Anxiety, and Delirium. If pressure is climbing, save and consider a route change or careful Exertion use.',
    why: 'High pressure can lock out routes or trigger consequences that reroute an entire assignment. Tracking early prevents restart costs.',
  },
  {
    step: '4. Plan for at least one replay with a different archetype',
    doThis: 'Treat the first playthrough as one route. Plan a second playthrough with a different build to see alternative outcomes.',
    why: 'A single playthrough sees only a fraction of the routes. Replay value is built into the structure, not a side feature.',
  },
  {
    step: '5. Use community reports to calibrate expectations',
    doThis: 'Check recent Steam community threads and discussion posts for the latest playtime estimates from real players.',
    why: 'The first week of community reports is the most useful playtime signal. Store copy and pre-launch estimates can differ from real runs.',
  },
] as const;

export const zpLengthStatusItems = [
  { label: 'Main story', value: '20-30 hours per playthrough for a focused run with moderate dialogue exploration.', status: 'verified' as const },
  { label: 'Thorough run', value: '30-40 hours with side content, skill check reroutes, and full dialogue reading.', status: 'working' as const },
  { label: 'Completionist', value: '40+ hours across multiple endings, Conditioning experiments, and full route exploration.', status: 'working' as const },
  { label: 'Time-sensitive events', value: 'Some events advance when resting or moving between areas. Game does not always flag them.', status: 'verified' as const },
  { label: 'Multiple endings', value: 'Multiple endings shaped by skills, Conditioning, dialogue, and faction choices.', status: 'working' as const },
];

export const zpLengthSourceRows = [
  {
    claim: 'How long is a single playthrough of ZERO PARADES?',
    source: 'Steam store / community reports',
    status: 'verified' as const,
    href: zeroParadesSteamUrl,
    note: '20-30 hours for a main-story run. Estimates from early community playthroughs are still being refined.',
  },
  {
    claim: 'Does ZERO PARADES have a time limit?',
    source: 'Steam description / community reports',
    status: 'verified' as const,
    href: zeroParadesSteamUrl,
    note: 'Some assignments use time-sensitive mechanics. The game communicates urgency through dialogue, not always explicit timers.',
  },
  {
    claim: 'How many endings does ZERO PARADES have?',
    source: 'Steam store / community discussion',
    status: 'working' as const,
    href: zeroParadesOfficialUrl,
    note: 'Multiple endings are confirmed. The exact count and full trigger list are still being mapped by the community.',
  },
  {
    claim: 'What affects total playtime the most?',
    source: 'Steam store / community reports',
    status: 'working' as const,
    href: zeroParadesRedditLaunchUrl,
    note: 'Dialogue depth, skill-check reroutes, Conditioning experiments, and reload habits are the biggest playtime drivers.',
  },
];

export const zpLengthSearchIntent = [
  {
    query: 'How long is ZERO PARADES',
    answer: 'A single playthrough is 20-30 hours. Thorough runs are 30-40 hours; completionist runs are 40+ hours.',
    href: '#game-length-by-playstyle',
    label: 'Length',
  },
  {
    query: 'Does ZERO PARADES have a time limit',
    answer: 'Some assignments are time-sensitive. The game does not always make these limits explicit. Save before resting and moving between areas.',
    href: '#time-sensitive-mechanics',
    label: 'Time limit',
  },
  {
    query: 'How many endings in ZERO PARADES',
    answer: 'Multiple endings exist, shaped by skills, Conditioning, dialogue, and faction choices. Exact count is still being mapped.',
    href: '#multiple-endings-and-replay-value',
    label: 'Endings',
  },
  {
    query: 'ZERO PARADES completionist time',
    answer: '40+ hours across multiple endings, full route exploration, and Conditioning experiments.',
    href: '#multiple-endings-and-replay-value',
    label: 'Completionist',
  },
];

export const zpLengthJumpLinks = [
  { href: '#game-length-by-playstyle', label: 'Length by playstyle' },
  { href: '#time-sensitive-mechanics', label: 'Time-sensitive' },
  { href: '#multiple-endings-and-replay-value', label: 'Endings' },
  { href: '/games/zero-parades/walkthrough', label: 'Walkthrough' },
  { href: '/games/zero-parades/beginner-guide', label: 'Beginner guide' },
  { href: '/games/zero-parades/best-build', label: 'Best build' },
];

// ============================================================
// RELEASE DATE - depth exports
// ============================================================

export const zpReleaseActionRows = [
  {
    step: '1. Confirm the PC launch date on the live storefront',
    doThis: 'Open the Steam, Epic, and GOG product pages. Confirm the May 21, 2026 PC date and that the buy button is live in your region.',
    why: 'Dates can shift between announcement and launch. The live storefront is the most reliable source for current availability.',
  },
  {
    step: '2. Check regional pricing before purchase',
    doThis: 'Compare the listed price on Steam, Epic, and GOG for your region. The US price is $39.99; other regions can differ.',
    why: 'Storefronts and regions carry different prices. A 30-second price check can save real money.',
  },
  {
    step: '3. Verify PS5 timing if you are a console player',
    doThis: 'PS5 is announced for 2026. Watch for an exact date from official PlayStation channels and storefront pages.',
    why: 'No exact PS5 date is public yet. Console buyers should wait for a confirmed date or live storefront page.',
  },
  {
    step: '4. Confirm language support matches your needs',
    doThis: 'Launch text support includes English, German, Russian, Simplified Chinese, and Spanish - Latin America. Full audio is English.',
    why: 'Later localization updates are planned for 2026. If you need a specific language, confirm the planned update window.',
  },
  {
    step: '5. Read recent Steam reviews for launch-day context',
    doThis: 'Open the Steam review tab and sort by recent. Note any recurring complaints about crashes or progression blockers.',
    why: 'Launch-day reports sometimes include crashes, progression blockers, and UI glitches. Recent reviews are the most useful signal.',
  },
] as const;

export const zpReleaseStatusItems = [
  { label: 'PC release', value: 'May 21, 2026 on Steam, Epic, and GOG. Check the live buy button in your region.', status: 'verified' as const },
  { label: 'PS5 release', value: 'Announced for 2026. No exact PS5 date is public yet.', status: 'verified' as const },
  { label: 'US price', value: '$39.99 in the US; regional prices can differ across Steam, Epic, and GOG.', status: 'verified' as const },
  { label: 'Languages at launch', value: 'English audio; text support for English, German, Russian, Simplified Chinese, Spanish - Latin America.', status: 'verified' as const },
  { label: 'Later localization', value: 'French, Italian, Japanese, Korean, Polish, Portuguese (Brazilian), Traditional Chinese, Turkish planned later in 2026.', status: 'working' as const },
];

export const zpReleaseSourceRows = [
  {
    claim: 'When does ZERO PARADES release on PC, and on which storefronts?',
    source: 'Steam store / ZA/UM official Reddit',
    status: 'verified' as const,
    href: zeroParadesSteamUrl,
    note: 'May 21, 2026 PC launch on Steam, Epic Games Store, and GOG. Use the live buy button for the current regional price.',
  },
  {
    claim: 'Is there a confirmed PS5 release date?',
    source: 'PlayStation-facing coverage / official site',
    status: 'verified' as const,
    href: zeroParadesOfficialUrl,
    note: 'PS5 is announced for 2026. No exact PS5 launch date is public yet, so console buyers should wait for a confirmed date.',
  },
  {
    claim: 'What languages does ZERO PARADES support at launch?',
    source: 'Steam store language list',
    status: 'verified' as const,
    href: zeroParadesSteamUrl,
    note: 'English audio; text support for English, German, Russian, Simplified Chinese, Spanish - Latin America at launch.',
  },
  {
    claim: 'Are launch-day bugs a real concern?',
    source: 'Steam community reviews',
    status: 'working' as const,
    href: zeroParadesSteamUrl,
    note: 'Launch-day reports include crashes, progression blockers, and UI glitches. Recent reviews give the most current bug context.',
  },
];

export const zpReleaseSearchIntent = [
  {
    query: 'ZERO PARADES release date',
    answer: 'May 21, 2026 for PC on Steam, Epic, and GOG. PS5 is announced for 2026 with no exact date yet.',
    href: '#release-and-platform-status',
    label: 'Release',
  },
  {
    query: 'Is ZERO PARADES on PS5',
    answer: 'PS5 is announced for 2026. No exact PS5 date is public yet; check official PlayStation channels for the most current timing.',
    href: '#release-and-platform-status',
    label: 'PS5',
  },
  {
    query: 'ZERO PARADES price',
    answer: 'US price is $39.99. Regional prices differ; check Steam, Epic, and GOG in your region before purchasing.',
    href: '#launch-facts-to-check-before-buying',
    label: 'Price',
  },
  {
    query: 'ZERO PARADES supported languages',
    answer: 'English audio at launch; text support for English, German, Russian, Simplified Chinese, Spanish - Latin America. More planned for 2026.',
    href: '#launch-day-storefront-checklist',
    label: 'Languages',
  },
];

export const zpReleaseJumpLinks = [
  { href: '#release-and-platform-status', label: 'Release status' },
  { href: '#launch-facts-to-check-before-buying', label: 'Launch facts' },
  { href: '#launch-day-storefront-checklist', label: 'Storefront checklist' },
  { href: '/games/zero-parades/system-requirements', label: 'System requirements' },
  { href: '/games/zero-parades/is-it-worth-it', label: 'Is it worth it' },
  { href: '/games/zero-parades/steam-deck', label: 'Steam Deck' },
];

// ============================================================
// STEAM DECK - depth exports
// ============================================================

export const zpSteamDeckActionRows = [
  {
    step: '1. Confirm Steam Deck Verified on your own account',
    doThis: 'Open the Steam store page on your Deck or PC. Confirm the Steam Deck Verified badge is still listed for your region.',
    why: 'Steam badge status can change with patches. The live page is the most reliable source for your account and region.',
  },
  {
    step: '2. Adjust text size and UI scaling before a long session',
    doThis: 'Open settings and set text to the largest comfortable size. Test dialogue readability in the first conversation.',
    why: 'Text-heavy RPGs strain eyes on the Deck screen. Increasing text size is the single most important comfort fix.',
  },
  {
    step: '3. Make one test save and verify Steam Cloud',
    doThis: 'Save manually, then check Steam Cloud sync. Confirm the save appears on your main PC before going handheld-only.',
    why: 'Cloud sync is listed but not always instant. A quick test prevents data loss on a switch between devices.',
  },
  {
    step: '4. Customize controls with Steam Input if needed',
    doThis: 'Open Steam Input and create a layout for back buttons, trackpads, or gyro. Test the layout in dialogue and skill menus.',
    why: 'Steam Input is the most flexible way to remap. The in-game remap menu may be limited for some actions.',
  },
  {
    step: '5. Plan a short first handheld session',
    doThis: 'Start with a 30-60 minute Deck session before committing to a long run. Use the refund window if handheld play is uncomfortable.',
    why: 'A short test catches font, controller, and save issues within the refund window, before you have invested hours in a save.',
  },
] as const;

export const zpSteamDeckStatusItems = [
  { label: 'Steam Deck status', value: 'Steam Deck Verified is listed. Live badge can change with patches.', status: 'verified' as const },
  { label: 'Controller support', value: 'Partial controller support is listed. Test prompts, menus, and dialogue navigation.', status: 'verified' as const },
  { label: 'Text size', value: 'Adjustable text size is listed. Increase before a long handheld session.', status: 'verified' as const },
  { label: 'Saves and cloud', value: 'Save Anytime and Steam Cloud are listed. Confirm cloud sync after the first save.', status: 'verified' as const },
  { label: 'Performance baseline', value: 'Minimum spec is GTX 1060 6GB with 16 GB RAM. Use cautious expectations until real Deck reports exist.', status: 'working' as const },
];

export const zpSteamDeckSourceRows = [
  {
    claim: 'Is ZERO PARADES Steam Deck Verified?',
    source: 'Steam Deck badge',
    status: 'verified' as const,
    href: zeroParadesSteamUrl,
    note: 'Steam Deck Verified is listed. Test text size, controller prompts, and Steam Cloud sync before a long handheld session.',
  },
  {
    claim: 'Does ZERO PARADES support adjustable text size for handheld play?',
    source: 'Steam features list',
    status: 'verified' as const,
    href: zeroParadesSteamUrl,
    note: 'Adjustable text size is listed on Steam. Increase it before a long session to reduce eye strain on the Deck screen.',
  },
  {
    claim: 'Does ZERO PARADES have Steam Cloud save sync?',
    source: 'Steam features list',
    status: 'verified' as const,
    href: zeroParadesSteamUrl,
    note: 'Steam Cloud is listed. Always check sync after the first save before switching between PC and Deck.',
  },
  {
    claim: 'Is partial controller support a problem on Steam Deck?',
    source: 'Steam features list / community discussion',
    status: 'working' as const,
    href: zeroParadesOfficialUrl,
    note: 'Partial controller support is listed. Deck play is functional, but some menus may still feel better with mouse precision.',
  },
];

export const zpSteamDeckSearchIntent = [
  {
    query: 'ZERO PARADES Steam Deck Verified',
    answer: 'Yes, Steam Deck Verified is listed. Still test text size, controller prompts, and Steam Cloud sync before a long session.',
    href: '#deck-readiness-checklist',
    label: 'Steam Deck',
  },
  {
    query: 'ZERO PARADES on Steam Deck',
    answer: 'Handheld play is supported. Save Anytime, adjustable text size, and Steam Cloud make testing easy, but text size is the main comfort fix.',
    href: '#deck-readiness-checklist',
    label: 'Handheld',
  },
  {
    query: 'ZERO PARADES Steam Cloud',
    answer: 'Yes, Steam Cloud is listed. Always check sync after the first save before switching between PC and Deck.',
    href: '#steam-features-that-matter-on-deck',
    label: 'Cloud saves',
  },
  {
    query: 'ZERO PARADES controller on Steam Deck',
    answer: 'Partial controller support is listed. Steam Deck built-in controls work; some menus may still feel better with mouse precision.',
    href: '#deck-readiness-checklist',
    label: 'Controls',
  },
];

export const zpSteamDeckJumpLinks = [
  { href: '#deck-readiness-checklist', label: 'Deck checklist' },
  { href: '#steam-features-that-matter-on-deck', label: 'Handheld features' },
  { href: '/games/zero-parades/controller-support', label: 'Controller support' },
  { href: '/games/zero-parades/system-requirements', label: 'System requirements' },
  { href: '/games/zero-parades/beginner-guide', label: 'Beginner guide' },
  { href: '/games/zero-parades/is-it-worth-it', label: 'Is it worth it' },
];

// ============================================================
// SYSTEM REQUIREMENTS - depth exports
// ============================================================

export const zpSpecActionRows = [
  {
    step: '1. Match your PC to minimum or recommended tier',
    doThis: 'Compare your CPU, GPU, and RAM to the Steam minimum (i5 6500, GTX 1060 6GB, 16 GB RAM) and recommended (i5-10400, RTX 2070 8GB, 16 GB RAM).',
    why: 'A 16 GB RAM requirement is listed for both tiers. If you are at 8 GB, the game may not run even on the minimum tier.',
  },
  {
    step: '2. Confirm Windows version and 64-bit support',
    doThis: 'Minimum lists Windows 10; recommended lists Windows 11. Confirm your OS is 64-bit before installing.',
    why: 'The Steam page lists a 64-bit processor and operating system as required for both tiers.',
  },
  {
    step: '3. Check DirectX and driver updates',
    doThis: 'Confirm DirectX 11 is installed and your GPU driver is current. Update NVIDIA or AMD drivers before first launch.',
    why: 'DirectX 11 is required for both tiers. Outdated GPU drivers are a common cause of launch-day crashes on narrative RPGs.',
  },
  {
    step: '4. Plan display and readability settings',
    doThis: 'Set UI scaling and text size before judging performance. Test in your most-used resolution first.',
    why: 'Readability and input comfort can matter as much as raw FPS in a dense narrative RPG.',
  },
  {
    step: '5. Verify storage and cloud sync before launch',
    doThis: 'Steam does not list a specific storage requirement. Confirm you have headroom and that Steam Cloud is enabled for save backup.',
    why: 'A cloud-enabled save protects you from local data loss if you need to switch hardware mid-playthrough.',
  },
] as const;

export const zpSpecStatusItems = [
  { label: 'OS', value: 'Windows 10 minimum, Windows 11 recommended. 64-bit required for both tiers.', status: 'verified' as const },
  { label: 'Processor', value: 'Intel Core i5 6500 minimum, Intel Core i5-10400 recommended.', status: 'verified' as const },
  { label: 'Memory', value: '16 GB RAM is required for both minimum and recommended tiers.', status: 'verified' as const },
  { label: 'Graphics', value: 'GTX 1060 6GB GDDR5 minimum, RTX 2070 8GB GDDR6 recommended. DirectX 11 required.', status: 'verified' as const },
  { label: 'Storage', value: 'Not listed in the Steam requirements section. Check the live storefront before clearing disk space.', status: 'needs-check' as const },
];

export const zpSpecSourceRows = [
  {
    claim: 'What are the minimum and recommended PC specs for ZERO PARADES?',
    source: 'Steam store system requirements',
    status: 'verified' as const,
    href: zeroParadesSteamUrl,
    note: 'Windows 10/11, i5 6500 to i5-10400, 16 GB RAM, GTX 1060 to RTX 2070, DirectX 11, 64-bit required.',
  },
  {
    claim: 'How much storage does ZERO PARADES need?',
    source: 'Steam store',
    status: 'needs-check' as const,
    href: zeroParadesSteamUrl,
    note: 'The Steam requirements section does not list a specific storage number. Check the live storefront before clearing disk space.',
  },
  {
    claim: 'Does ZERO PARADES need a high-end PC?',
    source: 'Steam store system requirements',
    status: 'verified' as const,
    href: zeroParadesSteamUrl,
    note: 'Specs are moderate by modern standards. 16 GB RAM is the only requirement that may surprise players with older systems.',
  },
  {
    claim: 'Is ZERO PARADES compatible with older GPUs like GTX 1060?',
    source: 'Steam store system requirements',
    status: 'verified' as const,
    href: zeroParadesSteamUrl,
    note: 'GTX 1060 6GB GDDR5 is the listed minimum GPU. Performance at minimum spec should be confirmed with community reports.',
  },
];

export const zpSpecSearchIntent = [
  {
    query: 'ZERO PARADES system requirements',
    answer: 'Windows 10 minimum, i5 6500, 16 GB RAM, GTX 1060 6GB, DirectX 11. Recommended is Windows 11, i5-10400, RTX 2070 8GB.',
    href: '#minimum-and-recommended-specs',
    label: 'Specs',
  },
  {
    query: 'ZERO PARADES minimum PC specs',
    answer: 'Windows 10, Intel Core i5 6500, 16 GB RAM, GTX 1060 6GB, DirectX 11, 64-bit required. Storage is not listed.',
    href: '#minimum-and-recommended-specs',
    label: 'Minimum',
  },
  {
    query: 'How much storage for ZERO PARADES',
    answer: 'Steam does not list a specific storage requirement. Check the live storefront before clearing disk space.',
    href: '#what-to-check-before-first-launch',
    label: 'Storage',
  },
  {
    query: 'Does ZERO PARADES need 16 GB RAM',
    answer: 'Yes. 16 GB RAM is listed for both minimum and recommended tiers, which is unusual for a narrative RPG.',
    href: '#minimum-and-recommended-specs',
    label: 'RAM',
  },
];

export const zpSpecJumpLinks = [
  { href: '#minimum-and-recommended-specs', label: 'Specs' },
  { href: '#what-to-check-before-first-launch', label: 'First launch' },
  { href: '/games/zero-parades/steam-deck', label: 'Steam Deck' },
  { href: '/games/zero-parades/controller-support', label: 'Controller support' },
  { href: '/games/zero-parades/release-date', label: 'Release date' },
  { href: '/games/zero-parades/is-it-worth-it', label: 'Is it worth it' },
];

// ============================================================
// WALKTHROUGH - depth exports
// ============================================================

export const zpWalkthroughActionRows = [
  {
    step: '1. Save before every major assignment or conversation',
    doThis: 'Use Steam Save Anytime to lock a clean state before each new case, faction meeting, or Conditioning event.',
    why: 'Manual saves are the only safe way to test dialogue branches and irreversible choices without losing hours of progress.',
  },
  {
    step: '2. Read the case briefing carefully',
    doThis: 'When a new assignment starts, read names, factions, and job titles. Note contradictions and suspicious framing.',
    why: 'Espionage RPG dialogue embeds evidence in phrasing. Briefing wording often matters more than the spoken summary.',
  },
  {
    step: '3. Match your approach to your build',
    doThis: 'Pick checks and dialogue paths that fit your invested skills. Plan your route before committing to a high-pressure option.',
    why: 'A focused build is stronger than a scattered one. The game rewards matching approach to identity, not spreading thin.',
  },
  {
    step: '4. Watch for time-sensitive events before resting',
    doThis: 'Before resting or moving between areas, save and check case urgency in dialogue. Some events advance on transition.',
    why: 'Time-sensitive events are not always flagged with explicit timers. A save-before-rest habit prevents missing content.',
  },
  {
    step: '5. Let some failed checks stand for new information',
    doThis: 'When a check fails, read the consequences. Consider whether the new information or alternative route is worth keeping.',
    why: 'Failed checks are part of the RPG structure. Some failures open paths the successful check would have skipped.',
  },
] as const;

export const zpWalkthroughStatusItems = [
  { label: 'Progression model', value: 'Assignments-based, not chapter-based. Each case has multiple routes.', status: 'verified' as const },
  { label: 'Skill checks', value: 'Dialogue and action checks use the 15 skills. Investment opens options, not guaranteed success.', status: 'verified' as const },
  { label: 'Conditioning', value: 'Can alter how assignments resolve and which routes are available. Treat as long-term commitment.', status: 'verified' as const },
  { label: 'Time-sensitive events', value: 'Some events advance on rest or area transition. Not always flagged with explicit timers.', status: 'verified' as const },
  { label: 'Multiple endings', value: 'Endings branch from skills, Conditioning, dialogue, and faction choices. Replay is built in.', status: 'working' as const },
];

export const zpWalkthroughSourceRows = [
  {
    claim: 'How is ZERO PARADES progression structured?',
    source: 'Steam store / community reports',
    status: 'verified' as const,
    href: zeroParadesSteamUrl,
    note: 'Progression is assignment-based, not chapter-based. Each case has multiple approaches and outcomes based on skills and choices.',
  },
  {
    claim: 'Are there missable assignments in ZERO PARADES?',
    source: 'Steam description / community reports',
    status: 'verified' as const,
    href: zeroParadesOfficialUrl,
    note: 'Some assignments and conversations are time-sensitive. Save before major decisions and rest carefully.',
  },
  {
    claim: 'How many endings does ZERO PARADES have?',
    source: 'Steam store / community discussion',
    status: 'working' as const,
    href: zeroParadesRedditLaunchUrl,
    note: 'Multiple endings are confirmed. The exact count and full trigger list are still being mapped by the community.',
  },
  {
    claim: 'What happens if a skill check fails?',
    source: 'Steam store / community reports',
    status: 'verified' as const,
    href: zeroParadesSteamUrl,
    note: 'Failed checks can reveal information, open alternative routes, or create new consequences. Not every failure needs a reload.',
  },
];

export const zpWalkthroughSearchIntent = [
  {
    query: 'ZERO PARADES walkthrough',
    answer: 'The game is assignment-based, not chapter-based. Save before major decisions, match your approach to your build, and watch for time-sensitive events.',
    href: '#how-zero-parades-progression-works',
    label: 'Walkthrough',
  },
  {
    query: 'Can you miss assignments in ZERO PARADES',
    answer: 'Yes. Some assignments and conversations are time-sensitive. Save before resting and pay attention to case urgency in dialogue.',
    href: '#missable-content-and-time-sensitive-events',
    label: 'Missable',
  },
  {
    query: 'How many endings in ZERO PARADES',
    answer: 'Multiple endings are confirmed, shaped by skills, Conditioning, dialogue, and faction choices. Exact count is still being mapped.',
    href: '#endings-and-replay-value',
    label: 'Endings',
  },
  {
    query: 'What happens if I fail a skill check in ZERO PARADES',
    answer: 'Failed checks can reveal information or open alternative routes. Not every failure requires a reload, but save first to be safe.',
    href: '#key-decision-framework',
    label: 'Failed checks',
  },
];

export const zpWalkthroughJumpLinks = [
  { href: '#how-zero-parades-progression-works', label: 'Progression' },
  { href: '#assignment-structure', label: 'Assignments' },
  { href: '#missable-content-and-time-sensitive-events', label: 'Missable content' },
  { href: '#key-decision-framework', label: 'Decision framework' },
  { href: '#endings-and-replay-value', label: 'Endings' },
  { href: '/games/zero-parades/beginner-guide', label: 'Beginner guide' },
];
