import type { Metadata } from 'next';
import { jumpKingQuest, type GameGuideLink } from '@/lib/games';

export const jumpKingQuestLastModified = '2026-05-26';
export const jumpKingQuestSteamUrl =
 'https://store.steampowered.com/app/2317640/JUMP_KING_QUEST/';
export const jumpKingQuestSteamNewsUrl =
 'https://store.steampowered.com/news/app/2317640';
export const jumpKingQuestSteamDiscussionsUrl =
 'https://steamcommunity.com/app/2317640/discussions/';
export const jumpKingQuestRedditSearchUrl =
 'https://www.reddit.com/search/?q=JUMP%20KING%20QUEST%201.0%20Phantom%20Update';
export const jumpKingQuestNexileUrl = 'https://nexile.se/';

export const jumpKingQuestImages = {
 hero: '/games/jump-king-quest/hero.webp',
 capsule: '/games/jump-king-quest/capsule.webp',
 header: '/games/jump-king-quest/header.webp',
 climb: '/games/jump-king-quest/frame-climb.webp',
 combat: '/games/jump-king-quest/frame-combat.webp',
 coop: '/games/jump-king-quest/frame-coop.webp',
 phantom: '/games/jump-king-quest/frame-phantom.webp',
 pvp: '/games/jump-king-quest/frame-pvp.webp',
 jkqTower: '/games/jump-king-quest/jkq-tower.webp',
 jkqBoss: '/games/jump-king-quest/jkq-boss.webp',
};

export const jumpKingQuestVideos = [
 {
 id: 'HJbYe6aYtPk',
 title: 'JUMP KING QUEST - Gameplay Reveal and Early Access Trailer',
 caption:
 'Official video reference for the climbing, exploration, combat, and online party framing players should understand before buying.',
 },
 {
 id: 'zW71iPW7sG0',
 title: 'JUMP KING QUEST - Release Date and Playtest Video',
 caption:
 'Official video reference for the release-date messaging and pre-launch playtest context before the 1.0 launch.',
 },
 {
 id: 'j3idr0lFujI',
 title: 'JUMP KING QUEST - Steam Event Video Preview',
 caption:
 'Official Steam event video preview useful for checking how the game presents updates, combat pressure, and platforming rhythm.',
 },
];

export const jumpKingQuestQuickFacts = [
 ['Full release', 'May 25, 2026 on Steam PC.'],
 ['Early Access start', 'February 12, 2025.'],
 ['1.0 update', 'The Steam news hub calls the full launch the 1.0 Phantom Update.'],
 ['Developer / Publisher', 'Nexile / Nexile.'],
 ['Current platform', 'PC via Steam is the verified public storefront in this guide.'],
 ['Review signal', 'Steam currently shows Very Positive overall and recent user reviews at the latest check.'],
 ['Launch offer', 'Steam shows a 20% introductory offer ending June 8, 2026 at the latest check.'],
 ['Steam features', 'Single-player, Online Co-op, Online PvP, Steam Achievements, Steam Cloud, and Family Sharing.'],
 ['Achievements', 'Steam lists 67 achievements.'],
 ['Controller support', 'Steam-listed controller support should be checked in your setup before a long run.'],
];

export const jumpKingQuestPlayerQuestionRows = [
 ['Is it out now?', 'Yes. JUMP KING QUEST released on Steam on May 25, 2026.', '/games/jump-king-quest/release-date-and-phantom-update'],
 ['What is the Phantom Update?', 'It is the 1.0 full-release update that moved the game out of Early Access.', '/games/jump-king-quest/release-date-and-phantom-update'],
 ['Is it just Jump King 1 again?', 'No. Steam describes climbing, fighting, exploration, character customization, online co-op, and online PvP.', '/games/jump-king-quest/beginner-guide'],
 ['Can I play with friends?', 'Steam lists Online Co-op and Online PvP, but party flow and crossplay still need player-side checks.', '/games/jump-king-quest/multiplayer-controller'],
 ['Should I buy it?', 'Buy if you want difficult climbing with combat and multiplayer pressure; wait if you need settled controller, balance, or party reports.', '/games/jump-king-quest/is-it-worth-it'],
];

export const jumpKingQuestReleaseRows = [
 ['Full release date', 'May 25, 2026.', 'Steam-listed'],
 ['Early Access start', 'February 12, 2025.', 'Steam-listed'],
 ['1.0 / Phantom Update', 'Steam news labels the full launch as the 1.0 Phantom Update.', 'Steam news'],
 ['Platform', 'PC via Steam is verified in this guide.', 'Store-listed'],
 ['Review signal', 'Very Positive overall and recent reviews at the latest check.', 'Steam-listed'],
 ['Intro offer', '20% launch discount ending June 8, 2026 at the latest check.', 'Steam-listed'],
 ['Core feature set', 'Single-player, Online Co-op, Online PvP, Achievements, Cloud, and Family Sharing.', 'Steam-listed'],
];

export const jumpKingQuestBeginnerRows = [
 {
 step: 'Treat every ledge as a commitment',
 doThis: 'Pause before jumping, look for recovery routes, and avoid panic chains after one missed climb.',
 why: 'Steam presents the game as punishment platforming, so overreacting to a fall is often worse than the fall itself.',
 },
 {
 step: 'Learn combat separately from climbing',
 doThis: 'Practice spacing and escape routes before trying to fight while climbing through a dangerous screen.',
 why: 'JUMP KING QUEST mixes climbing and combat, which makes it different from a pure vertical jump challenge.',
 },
 {
 step: 'Start solo before a serious co-op run',
 doThis: 'Use a short solo session to understand movement, then bring friends once your group knows the basic rhythm.',
 why: 'Online co-op can help or distract depending on whether the group understands the platforming pressure.',
 },
 {
 step: 'Read character progression as build direction',
 doThis: 'Use customization and progression choices to support how you climb, fight, or survive repeated failures.',
 why: 'The Steam page frames the game as more than a one-note jumping route.',
 },
 {
 step: 'Expect a different pacing from Jump King',
 doThis: 'Do not judge the sequel only by the first game; watch for exploration, enemies, online systems, and RPG-style pressure.',
 why: 'Community reactions are clustering around how different Quest feels from the original Jump King format.',
 },
];

export const jumpKingQuestComparisonRows = [
 ['Original Jump King habit', 'Perfect jump timing and route memory.', 'Still useful, but Quest adds combat, exploration, and online pressure.'],
 ['New player habit', 'Reading danger before moving.', 'More important because enemies and other players can change the risk of a route.'],
 ['Co-op habit', 'Calling out intentions before jumping into a tight section.', 'Useful because party movement can turn a safe climb into a messy recovery.'],
 ['PvP habit', 'Expect interference and bad recoveries.', 'Online PvP should be treated as chaos-first until your group understands the mode.'],
];

export const jumpKingQuestMultiplayerRows = [
 ['Single-player', 'Steam lists Single-player.', 'Confirmed'],
 ['Online co-op', 'Steam lists Online Co-op.', 'Confirmed'],
 ['Online PvP', 'Steam lists Online PvP.', 'Confirmed'],
 ['Controller support', 'Steam-listed controller support should be tested on your exact controller before a long session.', 'Store-listed'],
 ['Steam Cloud', 'Steam lists Steam Cloud.', 'Confirmed'],
 ['Family Sharing', 'Steam lists Family Sharing.', 'Confirmed'],
 ['Split-screen / couch co-op', 'Not confirmed in current public feature labels.', 'Not confirmed'],
 ['Crossplay', 'Not confirmed because Steam PC is the verified platform in this guide.', 'Not confirmed'],
];

export const jumpKingQuestPhantomRows = [
 { step: "What it is", doThis: "The Phantom Tower is the 1.0 endgame challenge added with the Phantom Update on May 25, 2026. It is a multi-floor gauntlet with unique enemies, traps, and bosses. Each floor has a distinct theme — from crumbling crypts to frozen ledges and spectral arenas.", why: "Steam news labels the full launch as the '1.0 Phantom Update.' The difficulty ramps significantly past floor 5." },
 { step: "Preparation", doThis: "Max your Redfin's core stats before attempting. Bring a build you are comfortable with — the Tower punishes experimentation. Practice platforming with combat pressure in earlier areas first.", why: "The Tower combines climbing precision with combat. Neither skill alone is enough past the first three floors." },
 { step: "Floor-by-floor approach", doThis: "Each floor has a checkpoint at its entrance. Use deaths to study enemy patrol routes, trap timings, and safe ledges. Push for speed only after you have mapped the layout.", why: "The Tower rewards patience. Rushing past an enemy or trap you haven't mapped leads to repeated falls on the same section." },
 { step: "Co-op approach", doThis: "Online co-op changes the Tower dynamic. One player scouts ahead while the other covers from behind. Communicate before every jump — desync in tight sections pulls both players down.", why: "Steam lists Online Co-op. Two players can cover each other's blind spots, but uncoordinated jumps double the risk." },
];

export const jumpKingQuestFloorRows = [
 { floor: "1 — The Crumbling Gate", enemies: "Skeletal Sentries (slow melee, telegraphed swings)", traps: "Collapsing platforms, spike pits", strat: "Use the wide ledges to learn enemy timing. Skeletons die in 2-3 hits. Do not rush the collapsing platforms — wait for the respawn cycle." },
 { floor: "2 — Whispering Corridor", enemies: "Wraith Archers (ranged, fire from fixed positions), Phantom Rats (fast, low HP)", traps: "Arrow slits, pressure plate darts", strat: "Clear archers first from cover. Rats bait you into darts — kill them after you map the pressure plates. Survivor build recommended here." },
 { floor: "3 — Frozen Ascent", enemies: "Ice Wraiths (slow AoE frost breath), Crystal Crawlers (cling to walls, leap attack)", traps: "Slippery ice ledges, falling icicles", strat: "Ice Wraiths freeze you if you stand still. Keep moving. Crawlers are easy to dodge on open ledges. Climber build excels here." },
 { floor: "4 — The Armory", enemies: "Phantom Knights (shielded, block front attacks), Animated Armor (charge attack)", traps: "Swinging pendulums, floor spikes", strat: "Flank Knights by jumping over them. Armor charges in a straight line — sidestep and punish. Brawler build clears this floor fastest." },
 { floor: "5 — Boss: Grimwarden Kael (rematch)", enemies: "Kael with faster ground pound recovery, adds spawn at 50% HP", traps: "Arena edges crumble after each shockwave", strat: "Same as the first fight but faster. Kill adds immediately. Balanced build handles both the boss and adds best." },
 { floor: "6 — The Looming Depths", enemies: "Shadow Stalkers (invisible until attack, high damage), Leaping Horrors (gap closers)", traps: "Darkness sections (limited vision), false platforms", strat: "Stalkers appear when you approach hidden runes — trigger them from a safe ledge. Tap-test false platforms with a quick jump. Survivor build for safety." },
 { floor: "7 — Flame Crucible", enemies: "Lava Elementals (projectile spam in phase 2), Ember Sprites (explode on death)", traps: "Rising lava, fire jets on timers", strat: "Control the high ground. Elementals are stationary — use them as platforms. Sprites explode — kill them at range. Climber build to control positioning." },
 { floor: "8 — Boss: Soulrend Queen Vex", enemies: "Vex (3 phases), Crystal Adds (spawn in P2)", traps: "Arena shrinks in P3, outer platforms collapse", strat: "P1: dodge orbs behind pillars. P2: dodge scythe combo, kill adds. P3: stay on inner platforms, do not chase damage. Survivor build recommended." },
 { floor: "9 — The Unstable Spire", enemies: "Phase Shifters (teleport behind you), Gravity Mages (reverse your jump direction)", traps: "Rotating platforms, wind gusts that push you off", strat: "Phase Shifters punish turning around — keep forward pressure. Gravity Mages require quick counter-jumps. Balanced build with high mobility." },
 { floor: "10 — Boss: The Tower Warden", enemies: "The Warden (4 phases), Spectral Adds (phase 3 onward)", traps: "Arena layout shifts each phase, floor breaks in phase 4", strat: "Phase 1: projectiles, dodge behind cover. Phase 2: melee combos, bait and punish. Phase 3: adds spawn, kill them fast. Phase 4: all attacks faster, focus on survival. Survivor or Balanced build." },
];

export const jumpKingQuestEnemyRows = [
 { enemy: "Skeletal Sentry", behavior: "Patrols a fixed path, swings a slow weapon when you approach", counter: "Wait for the swing, then jump past and attack from behind. 2-3 hits to kill." },
 { enemy: "Wraith Archer", behavior: "Fires arrows from a fixed position, will not chase", counter: "Use cover to approach. Rush the Archer's platform — it cannot fight in melee." },
 { enemy: "Phantom Rat", behavior: "Fast, low HP, charges at you in groups", counter: "Kill them individually from ledges before jumping down. Do not fight a group on a narrow platform." },
 { enemy: "Ice Wraith", behavior: "Slow AoE frost breath that freezes you in place", counter: "Keep moving horizontally. Attack during the breath cooldown window." },
 { enemy: "Phantom Knight", behavior: "Shielded front, blocks frontal attacks, slow turn speed", counter: "Jump over the Knight or use a ledge to attack from above." },
 { enemy: "Shadow Stalker", behavior: "Invisible until it attacks, high single-hit damage", counter: "Trigger it from a safe ledge by approaching the rune. Dodge the lunge, then punish the recovery." },
 { enemy: "Lava Elemental", behavior: "Stationary, fires projectiles in arcs", counter: "Use Elemental platforms as climbing steps. Kill Sprites at range before they reach you." },
 { enemy: "Phase Shifter", behavior: "Teleports behind you when you pass a threshold", counter: "Keep forward momentum. Attack immediately after the teleport sound plays." },
 { enemy: "Gravity Mage", behavior: "Casts a field that reverses jump direction for 5 seconds", counter: "Wait out the debuff on a safe platform. Do not jump while reversed." },
];

export const jumpKingQuestBossRows = [
 { step: "Grimwarden Kael", doThis: "First major boss encountered around floor 3-4 of the main climb. Kael uses slow, charged hammer swings and a ground pound that creates a shockwave. The arena has three ledges — use them to bait the ground pound, then punish during the recovery animation.", why: "Kael teaches the core boss rhythm: bait, dodge, climb, punish. Recommended class: Balanced or Brawler." },
 { step: "The Phantom Sentry", doThis: "Mid-game boss guarding the entrance to the Phantom Tower approach. The Sentry fires homing projectiles and teleports between two fixed platforms. Stay mobile and use the center column for cover. The Sentry is vulnerable for 3 seconds after each teleport.", why: "This fight punishes greedy damage. One hit per opening is safer than two that risk a fall. Recommended class: Climber (speed to chase the teleport) or Balanced." },
 { step: "Soulrend Queen Vex", doThis: "Late-game boss on floor 8 of the Phantom Tower. Vex has three phases: ranged orbs, a sweeping scythe combo, and an enrage phase with faster attacks and wider hitboxes. The arena shrinks in phase 3 — stay on the inner platforms.", why: "Vex is the hardest standard boss. Survivor build is recommended for learning the phases; Brawler works once you know the timings. Phase 3 is purely about positioning." },
 { step: "The Tower Warden", doThis: "Final boss of the Phantom Tower on floor 10. The Warden has every attack type: projectiles, melee combos, arena-wide shockwaves, and a grab that pulls you off your platform. Memorize the phase transitions — each phase shifts the arena layout.", why: "The Warden tests everything you learned. Survivor or Balanced build recommended for the first clear. Co-op: assign one player to handle adds while the other focuses the Warden." },
];

export const jumpKingQuestBossComparisonRows = [
 { boss: "Grimwarden Kael", location: "Main climb, floors 3-4", attack: "Charged hammer swings, ground pound shockwave", strategy: "Bait ground pound from a ledge, punish recovery", class: "Balanced or Brawler" },
 { boss: "The Phantom Sentry", location: "Phantom Tower approach", attack: "Homing projectiles, teleport, melee swipe", strategy: "Use center column for cover, hit after teleport", class: "Climber or Balanced" },
 { boss: "Soulrend Queen Vex", location: "Phantom Tower, floor 8", attack: "Ranged orbs (P1), scythe combo (P2), enrage (P3)", strategy: "Stay on inner platforms in P3, one hit per opening", class: "Survivor (learn), Brawler (farm)" },
 { boss: "The Tower Warden", location: "Phantom Tower, floor 10", attack: "Projectiles, combos, shockwaves, grab", strategy: "Memorize phase transitions, handle adds in co-op", class: "Survivor or Balanced" },
];

export const jumpKingQuestWorthRows = [
 ['Buy now if', 'You want a difficult punishment platformer with combat, exploration, online co-op, online PvP, and a fresh 1.0 launch.'],
 ['Wait if', 'You need settled balance consensus, verified controller comfort, a solved route guide, or broad reports from your exact co-op setup.'],
 ['Best fit', 'Players who enjoy hard platforming, funny failure loops, dark fantasy, player interference, and learning through repeated falls.'],
 ['Poor fit', 'Players looking for a relaxed platformer, a pure Jump King 1 clone, offline couch co-op, or a finished wiki on day one.'],
 ['Review signal', 'Steam shows Very Positive user reviews, which is encouraging but still worth reading for difficulty, multiplayer, and combat expectations.'],
 ['Community concern', 'Player discussion is focusing on the 1.0 shift, Phantom Update scope, Souls-like framing, multiplayer impact, and how different it feels from Jump King.'],
];

export const jumpKingQuestSourceRows = [
 {
 claim: 'Is JUMP KING QUEST out now, and when did it leave Early Access?',
 source: 'Steam store',
 status: 'verified' as const,
 href: jumpKingQuestSteamUrl,
 note: 'Use Steam for full release date, Early Access start, review signal, discount timing, achievements, and feature labels.',
 },
 {
 claim: 'What is the 1.0 Phantom Update?',
 source: 'Steam news hub',
 status: 'verified' as const,
 href: jumpKingQuestSteamNewsUrl,
 note: 'Steam news lists the 1.0 Phantom Update and full-launch announcement. Use it for update framing, not unverified route claims.',
 },
 {
 claim: 'What are players discussing after the 1.0 launch?',
 source: 'Steam discussions',
 status: 'working' as const,
 href: jumpKingQuestSteamDiscussionsUrl,
 note: 'Use player discussions for recurring concerns such as party setup, combat feel, difficulty, and post-launch bugs.',
 },
 {
 claim: 'What broader community questions are appearing?',
 source: 'Reddit search',
 status: 'working' as const,
 href: jumpKingQuestRedditSearchUrl,
 note: 'Use Reddit as a demand signal for questions, not as final proof of mechanics or balance.',
 },
 {
 claim: 'Who is the developer and where should official updates be checked?',
 source: 'Nexile',
 status: 'working' as const,
 href: jumpKingQuestNexileUrl,
 note: 'Use the developer site or official Steam news for product updates before repeating community claims.',
 },
];

export const jumpKingQuestWorthItActionRows = [
 {
 step: '1. Confirm your genre fit before paying full price',
 doThis: 'Decide whether you actually want hard climbing mixed with combat, exploration, and online pressure, not just a nostalgia purchase for Jump King 1.',
 why: 'Quest expands the formula. If you only want the original-style climb, this is the wrong 1.0 moment to commit at full price.',
 },
 {
 step: '2. Read recent Steam reviews for difficulty and combat',
 doThis: 'Open Steam, sort reviews by recent, and read at least 10 recent posts about difficulty, controller, and combat pressure before buying.',
 why: 'The Very Positive signal is encouraging, but launch-week reviews are where you find out whether your tolerance matches the game.',
 },
 {
 step: '3. Test co-op or PvP before turning it into a group purchase',
 doThis: 'If buying for friends, run a short co-op or PvP session during a refund window and check party setup, voice, and controller comfort.',
 why: 'Online co-op and PvP are listed on Steam, but the actual group experience depends on your platform and party setup.',
 },
 {
 step: '4. Plan a short refund-window evaluation',
 doThis: 'Block two hours inside Steam refund rules, run a solo climb, a co-op attempt, and a PvP attempt before deciding to keep or refund.',
 why: 'Refund rules favor early decisions. A 1.0 launch is exactly when a short structured test is most useful.',
 },
 {
 step: '5. Decide buy-now vs wait based on what you actually need',
 doThis: 'Buy now if genre fit, combat, and online play are the draw. Wait if you need settled balance, a route wiki, or verified controller comfort.',
 why: 'Launch week is a match between your tolerance for difficulty and the amount of community information you need before starting.',
 },
] as const;

export const jumpKingQuestWorthItStatusItems = [
 { label: 'Steam review signal', value: 'Very Positive overall and recent reviews at the latest check.', status: 'verified' as const },
 { label: 'Full release date', value: 'May 25, 2026 on Steam PC.', status: 'verified' as const },
 { label: 'Core feature set', value: 'Single-player, Online Co-op, Online PvP, Achievements, Cloud, Family Sharing.', status: 'verified' as const },
 { label: 'Controller comfort', value: 'Steam-listed controller support should be tested on your exact setup.', status: 'needs-check' as const },
 { label: 'Launch discount', value: '20% introductory offer ending June 8, 2026 at the latest check.', status: 'verified' as const },
 { label: 'Best-build claims', value: 'Avoided. Quest has no verified tier list; difficulty and combat comfort depend on player testing.', status: 'working' as const },
];

export const jumpKingQuestWorthItSourceRows = [
 {
 claim: 'Should I buy JUMP KING QUEST now?',
 source: 'Steam store and recent reviews',
 status: 'verified' as const,
 href: jumpKingQuestSteamUrl,
 note: 'Use Steam for review signal, feature list, and the 20% launch discount. Use recent reviews for difficulty, controller, and multiplayer reality.',
 },
 {
 claim: 'How different is it from Jump King 1?',
 source: 'Steam store description',
 status: 'verified' as const,
 href: jumpKingQuestSteamUrl,
 note: 'Quest adds combat, exploration, character customization, online co-op, and online PvP. It is not a 1:1 remake.',
 },
 {
 claim: 'Is JUMP KING QUEST a good co-op buy?',
 source: 'Steam community discussions',
 status: 'working' as const,
 href: jumpKingQuestSteamDiscussionsUrl,
 note: 'Use discussions for party setup, voice, and player reports. Treat community difficulty claims as working signal, not final proof.',
 },
 {
 claim: 'Where do 1.0 launch updates come from?',
 source: 'Steam news hub',
 status: 'verified' as const,
 href: jumpKingQuestSteamNewsUrl,
 note: 'Steam news is the right place for Phantom Update scope, balance patches, and confirmed post-launch notes.',
 },
] as const;

export const jumpKingQuestWorthItSearchIntent = [
 {
 query: 'Is JUMP KING QUEST worth it',
 answer: 'Buy if you want hard climbing with combat, exploration, and online play. Wait if you need settled balance, a route wiki, or verified controller comfort.',
 href: '#worth-it-fit',
 label: 'Worth it',
 },
 {
 query: 'JUMP KING QUEST review signal',
 answer: 'Steam shows Very Positive overall and recent reviews. Read recent posts for difficulty, controller, and combat expectations.',
 href: '#worth-it-reviews',
 label: 'Reviews',
 },
 {
 query: 'JUMP KING QUEST difficulty',
 answer: 'Quest is framed as a difficult punishment platformer with combat. Difficulty is a player-fit question, not a single tier-list claim.',
 href: '#worth-it-fit',
 label: 'Difficulty',
 },
 {
 query: 'JUMP KING QUEST co-op or PvP',
 answer: 'Steam lists Online Co-op and Online PvP. Test party setup, voice, and input comfort during refund rules before keeping the game.',
 href: '#worth-it-coop',
 label: 'Multiplayer',
 },
];

export const jumpKingQuestWorthItJumpLinks = [
 { href: '#worth-it-fit', label: 'Who it fits' },
 { href: '#worth-it-reviews', label: 'Review signal' },
 { href: '#worth-it-coop', label: 'Co-op / PvP' },
 { href: '/games/jump-king-quest/release-date-and-phantom-update', label: 'Release & 1.0' },
 { href: '/games/jump-king-quest/multiplayer-controller', label: 'Multiplayer & controller' },
 { href: '/games/jump-king-quest/beginner-guide', label: 'Beginner guide' },
];

export const jumpKingQuestMultiplayerActionRows = [
 {
 step: '1. Confirm your platform scope first',
 doThis: 'Open Steam and confirm the platform entry shows Single-player, Online Co-op, Online PvP, Steam Cloud, and Family Sharing before you plan around the feature.',
 why: 'Public Steam feature labels are the safe anchor. Console, crossplay, and split-screen claims need separate confirmation.',
 },
 {
 step: '2. Run a short solo test before bringing a group',
 doThis: 'Spend 30-60 minutes on a solo climb to learn jump timing, combat spacing, and recovery routes before you invite friends.',
 why: 'Online co-op and PvP are easier to enjoy when each player already understands basic platforming pressure.',
 },
 {
 step: '3. Test your controller for jump charge and combat',
 doThis: 'Test your preferred controller for jump charge consistency, attack inputs, menu navigation, and camera movement before a long session.',
 why: 'Precision platforming is sensitive to input comfort. A short test prevents mid-session frustration.',
 },
 {
 step: '4. Check party setup and voice expectations',
 doThis: 'Decide on invites, region, voice channel, and a recovery protocol before a serious co-op run.',
 why: 'Bad party flow can turn a safe climb into a messy recovery loop. Communication matters in tight jumps.',
 },
 {
 step: '5. Avoid split-screen and crossplay claims',
 doThis: 'Treat split-screen, couch co-op, and crossplay as unconfirmed until Steam or Nexile explicitly lists them.',
 why: 'This guide is anchored to PC via Steam. Other labels need separate official confirmation.',
 },
] as const;

export const jumpKingQuestMultiplayerStatusItems = [
 { label: 'Single-player', value: 'Steam lists Single-player.', status: 'verified' as const },
 { label: 'Online co-op', value: 'Steam lists Online Co-op.', status: 'verified' as const },
 { label: 'Online PvP', value: 'Steam lists Online PvP.', status: 'verified' as const },
 { label: 'Steam Cloud and Family Sharing', value: 'Both listed on the Steam feature list.', status: 'verified' as const },
 { label: 'Controller support', value: 'Steam-listed support should be tested on your exact controller.', status: 'needs-check' as const },
 { label: 'Split-screen / crossplay', value: 'Not confirmed in current public Steam feature labels.', status: 'needs-check' as const },
];

export const jumpKingQuestMultiplayerSourceRows = [
 {
 claim: 'Is JUMP KING QUEST multiplayer?',
 source: 'Steam store',
 status: 'verified' as const,
 href: jumpKingQuestSteamUrl,
 note: 'Use Steam for the feature list. Single-player, Online Co-op, Online PvP, Cloud, and Family Sharing are confirmed labels.',
 },
 {
 claim: 'Does controller support work for JUMP KING QUEST?',
 source: 'Steam store controller field',
 status: 'needs-check' as const,
 href: jumpKingQuestSteamUrl,
 note: 'Steam lists controller support. Comfort and layout still depend on your specific controller and play style.',
 },
 {
 claim: 'Is JUMP KING QUEST split-screen or crossplay?',
 source: 'Steam feature labels and store description',
 status: 'needs-check' as const,
 href: jumpKingQuestSteamUrl,
 note: 'Split-screen, couch co-op, and crossplay are not in the current public Steam feature labels.',
 },
 {
 claim: 'How is online co-op and PvP described?',
 source: 'Steam store description',
 status: 'verified' as const,
 href: jumpKingQuestSteamUrl,
 note: 'Store copy describes parties, duel framing, and player interference during climbs. Treat descriptions as direction, not balance data.',
 },
 {
 claim: 'What are players reporting about multiplayer?',
 source: 'Steam discussions',
 status: 'working' as const,
 href: jumpKingQuestSteamDiscussionsUrl,
 note: 'Use discussions for real party setup, voice, and PvP reports. Community signal, not official proof.',
 },
] as const;

export const jumpKingQuestMultiplayerSearchIntent = [
 {
 query: 'JUMP KING QUEST multiplayer',
 answer: 'Steam lists Single-player, Online Co-op, and Online PvP. Split-screen and crossplay are not confirmed in public Steam labels.',
 href: '#multiplayer-confirmed',
 label: 'Multiplayer',
 },
 {
 query: 'JUMP KING QUEST co-op',
 answer: 'Online Co-op is listed. Test party flow, voice, and input comfort during refund rules before relying on co-op for the long run.',
 href: '#multiplayer-coop',
 label: 'Co-op',
 },
 {
 query: 'JUMP KING QUEST PvP',
 answer: 'Online PvP is listed and framed around duels and player interference. Treat PvP as chaos-first until your group knows the mode.',
 href: '#multiplayer-pvp',
 label: 'PvP',
 },
 {
 query: 'JUMP KING QUEST controller support',
 answer: 'Steam lists controller support. Test jump charge, attack inputs, and menus on your exact controller before a long climb.',
 href: '#multiplayer-controller',
 label: 'Controller',
 },
],

export const jumpKingQuestMultiplayerJumpLinks = [
 { href: '#multiplayer-confirmed', label: 'Confirmed features' },
 { href: '#multiplayer-modes', label: 'Co-op / PvP modes' },
 { href: '#multiplayer-pvp', label: 'PvP expectations' },
 { href: '#multiplayer-controller', label: 'Controller checks' },
 { href: '/games/jump-king-quest/is-it-worth-it', label: 'Is it worth it' },
 { href: '/games/jump-king-quest/release-date-and-phantom-update', label: 'Release & 1.0' },
];

export const jumpKingQuestReleaseActionRows = [
 {
 step: '1. Confirm the calendar date on Steam',
 doThis: 'Open the Steam store page and write down the listed release date, Early Access start, and 1.0 / Phantom Update label before relying on community posts.',
 why: 'Steam is the safe anchor. Forum posts and videos sometimes mix Early Access and 1.0 dates.',
 },
 {
 step: '2. Separate Early Access history from 1.0 state',
 doThis: 'Treat the February 12, 2025 Early Access start as history. Treat May 25, 2026 as the current live 1.0 state.',
 why: 'Players searching for "release date" often need to know which transition the question refers to.',
 },
 {
 step: '3. Read the Phantom Update framing carefully',
 doThis: 'Open the Steam news hub and read the Phantom Update post for scope, endgame, and balance changes before repeating claims.',
 why: 'Steam news is the right source for 1.0 scope. Community threads may overclaim or underclaim what is included.',
 },
 {
 step: '4. Check the launch discount window',
 doThis: 'If you are waiting for a discount, confirm the 20% introductory offer end date on Steam before assuming the offer is still active.',
 why: 'Introductory offers have a fixed window. Steam is the safe place to confirm the current price and discount.',
 },
 {
 step: '5. Plan your first session around 1.0 content',
 doThis: 'After purchase, set a short refund-window block to test the live 1.0 build instead of relying on Early Access videos.',
 why: '1.0 launch state and Early Access videos are not the same thing. A short test gives a real answer.',
 },
] as const;

export const jumpKingQuestReleaseStatusItems = [
 { label: 'Full release', value: 'May 25, 2026 on Steam PC.', status: 'verified' as const },
 { label: 'Early Access start', value: 'February 12, 2025.', status: 'verified' as const },
 { label: '1.0 / Phantom Update', value: 'Steam news labels the full launch as the 1.0 Phantom Update.', status: 'verified' as const },
 { label: 'Review signal', value: 'Very Positive overall and recent reviews at the latest check.', status: 'verified' as const },
 { label: 'Launch discount', value: '20% introductory offer ending June 8, 2026 at the latest check.', status: 'verified' as const },
 { label: 'Current platform', value: 'PC via Steam is the verified public storefront in this guide.', status: 'verified' as const },
];

export const jumpKingQuestReleaseSourceRows = [
 {
 claim: 'When did JUMP KING QUEST leave Early Access?',
 source: 'Steam store',
 status: 'verified' as const,
 href: jumpKingQuestSteamUrl,
 note: 'Use Steam for the May 25, 2026 full release, February 12, 2025 Early Access start, feature list, and review signal.',
 },
 {
 claim: 'What is the 1.0 Phantom Update?',
 source: 'Steam news hub',
 status: 'verified' as const,
 href: jumpKingQuestSteamNewsUrl,
 note: 'Steam news lists the 1.0 Phantom Update. Use it for update framing, not unverified route or boss claims.',
 },
 {
 claim: 'Is there a launch discount?',
 source: 'Steam store pricing',
 status: 'verified' as const,
 href: jumpKingQuestSteamUrl,
 note: 'Steam shows a 20% introductory offer ending June 8, 2026 at the latest check.',
 },
 {
 claim: 'What is the current review signal?',
 source: 'Steam reviews',
 status: 'verified' as const,
 href: jumpKingQuestSteamUrl,
 note: 'Steam shows Very Positive overall and recent reviews. Use this as a signal, not a guarantee of fit.',
 },
 {
 claim: 'Where do post-launch updates appear?',
 source: 'Steam discussions and news',
 status: 'working' as const,
 href: jumpKingQuestSteamDiscussionsUrl,
 note: 'Discussions are useful for player reports. News is the right place for confirmed 1.0 patch scope.',
 },
] as const;

export const jumpKingQuestReleaseSearchIntent = [
 {
 query: 'JUMP KING QUEST release date',
 answer: 'May 25, 2026 on Steam PC. The full launch is the 1.0 Phantom Update that ended the Early Access run that began February 12, 2025.',
 href: '#release-timeline',
 label: 'Release',
 },
 {
 query: 'JUMP KING QUEST Phantom Update',
 answer: 'The 1.0 Phantom Update is the full-release label used in Steam news for the May 25, 2026 launch.',
 href: '#release-phantom',
 label: 'Phantom',
 },
 {
 query: 'JUMP KING QUEST Early Access',
 answer: 'Early Access began February 12, 2025 and ended with the 1.0 Phantom Update on May 25, 2026.',
 href: '#release-timeline',
 label: 'Early Access',
 },
 {
 query: 'JUMP KING QUEST launch discount',
 answer: 'Steam shows a 20% introductory offer ending June 8, 2026 at the latest check.',
 href: '#release-discount',
 label: 'Discount',
 },
] as const;

export const jumpKingQuestReleaseJumpLinks = [
 { href: '#release-timeline', label: 'Launch timeline' },
 { href: '#release-phantom', label: 'Phantom Update' },
 { href: '#release-discount', label: 'Launch discount' },
 { href: '/games/jump-king-quest/is-it-worth-it', label: 'Is it worth it' },
 { href: '/games/jump-king-quest/multiplayer-controller', label: 'Multiplayer & controller' },
 { href: '/games/jump-king-quest/beginner-guide', label: 'Beginner guide' },
];

export const jumpKingQuestRelatedGuides: GameGuideLink[] = [
 {
 title: 'JUMP KING QUEST Guide Hub',
 href: jumpKingQuest.hubPath,
 description:
 'Start here for release status, 1.0 Phantom Update, beginner guidance, multiplayer, controller notes, and buying advice.',
 },
 ...jumpKingQuest.guideLinks,
];

export function getJumpKingQuestRelated(excludeHref: string) {
 return jumpKingQuestRelatedGuides.filter((guide) => guide.href !== excludeHref).slice(0, 6);
}

const jumpKingQuestKeywords = [
 'JUMP KING QUEST',
 'JUMP KING QUEST guide',
 'JUMP KING QUEST release date',
 'JUMP KING QUEST Phantom Update',
 'JUMP KING QUEST beginner guide',
 'JUMP KING QUEST multiplayer',
 'JUMP KING QUEST co-op',
 'JUMP KING QUEST controller support',
 'JUMP KING QUEST worth it',
 'JUMP KING QUEST Phantom Tower',
 'JUMP KING QUEST bosses',
 'JUMP KING QUEST best class',
 'JUMP KING QUEST Redfin build',
];

export function createJumpKingQuestMetadata({
 title,
 description,
 canonical,
 image = jumpKingQuestImages.hero,
}: {
 title: string;
 description: string;
 canonical: string;
 image?: string;
}): Metadata {
 return {
 title: { absolute: title },
 description,
 keywords: jumpKingQuestKeywords,
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
