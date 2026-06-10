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

// VERIFIED: Steam store page confirms Phantom Tower as 1.0 endgame content
// NEEDS VERIFICATION: Specific floor layouts, boss names, and tactics from community reports
export const jumpKingQuestPhantomRows = [
 { step: "What it is", doThis: "The Phantom Tower is the 1.0 endgame challenge, added with the Phantom Update that took the game out of Early Access on May 25, 2026. It's a multi-floor gauntlet with unique enemies, traps, and bosses.", why: "Source: Steam news hub labels the full launch as the '1.0 Phantom Update.' Community discussion centers on Phantom Tower difficulty." },
 { step: "Preparation", doThis: "Max out your Redfin's core stats before attempting. Bring a build you're comfortable with — the Tower punishes experimentation. Practice platforming with combat pressure in earlier areas first.", why: "The Tower combines climbing precision with combat — neither skill alone is enough." },
 { step: "General strategy", doThis: "Take it floor by floor. Learn the layout, enemy positions, and trap triggers before pushing for speed. Death resets you to the floor entrance, not the bottom — use that to study each section.", why: "Community reports suggest the Tower rewards patience over aggression. Rushing leads to repeated falls." },
 { step: "Co-op approach", doThis: "Online co-op changes the Tower dynamic. One player can scout ahead while the other covers from behind. Communicate before jumps — desync kills in tight sections.", why: "Source: Steam lists Online Co-op and PvP. Co-op strategy from community discussion." },
];

export const jumpKingQuestBossRows = [
 { step: "Boss fights (unverified)", doThis: "JUMP KING QUEST adds combat bosses to the platforming formula — a departure from the original Jump King. Specific boss names, attack patterns, and weaknesses need verification through gameplay.", why: "Source: Steam store page mentions combat and enemies. Specific boss data not yet verified from primary gameplay." },
 { step: "Best class picks", doThis: "Redfin customization lets you spec for climbing speed, combat power, or survivability. For a first run, balance climbing and survivability — pure combat builds struggle with platforming sections, and pure speed builds die to enemies.", why: "Source: Steam store page describes 'customize a Redfin.' Build recommendations are general principles until specific stats are verified." },
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
