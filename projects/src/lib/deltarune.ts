import type { Metadata } from "next";
import { deltarune, type GameGuideLink } from "@/lib/games";

export const deltaruneLastModified = "2026-06-25";

export const deltaruneOfficialUrl = "https://deltarune.com/";
export const deltaruneHelpUrl = "https://deltarune.com/help/";
export const deltaruneSteamUrl =
 "https://store.steampowered.com/app/1671210/DELTARUNE/";
export const deltaruneSteamDbUrl = "https://steamdb.info/app/1671210/charts/";
export const deltaruneNewsletterUrl =
 "https://toby.fangamer.com/newsletters/ch5-release-date/";
export const deltaruneSteamDiscussionsUrl =
 "https://steamcommunity.com/app/1671210/discussions/";
export const deltaruneRedditSearchUrl =
 "https://www.reddit.com/r/Deltarune/search/?q=Chapter%205%20secret%20boss&restrict_sr=1";

export const deltaruneImages = {
 hero:
  "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1671210/capsule_616x353.jpg",
 header:
  "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1671210/header.jpg",
 screenshot1:
  "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1671210/ss_4eab0d9329cbb641e9d272cc204b41856e0760cb.jpg",
 screenshot2:
  "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1671210/ss_3493a1c279273363af0531a7a6a6ce9523d6ebdb.jpg",
 screenshot3:
  "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1671210/ss_8d2095233e2f897c0fe61ee74c84f643b3ff2d99.jpg",
 screenshot4:
  "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1671210/ss_1f04b806ef87afdf464c3f961a064fd65523a4da.jpg",
};

export const deltaruneVideos = {
 chapter5: {
  videoId: "n5y22LUfetA",
  title: "DELTARUNE Chapter 5 Trailer",
  caption:
   "Official Chapter 5 trailer reference from deltarune.com. Use it for platform and launch context, not hidden-route proof.",
 },
 reveal: {
  videoId: "yDzgiGdekas",
  title: "DELTARUNE Trailer",
  caption:
   "Official DELTARUNE trailer reference for the chapter-based RPG structure, battle style, and tone.",
 },
};

export const deltaruneQuickFacts = [
 { label: "Current chapters", value: "Chapters 1-5 are available now.", status: "verified" as const },
 { label: "Future chapters", value: "More chapters are planned as free updates once ready.", status: "verified" as const },
 { label: "Price", value: "$24.99 in North America on the official FAQ.", status: "verified" as const },
 { label: "Platforms", value: "PC, Mac, Nintendo Switch, Switch 2, PS4, and PS5.", status: "verified" as const },
 { label: "Demo", value: "Chapters 1 and 2 remain the free demo.", status: "verified" as const },
 { label: "Chapter order", value: "You can pick any chapter from the start, but first-time players should play in order.", status: "verified" as const },
 { label: "Save import", value: "PC/Mac demo saves should work in the full version; consoles offer an import prompt if compatible save data exists.", status: "verified" as const },
 { label: "Chapter 6", value: "Chapter 6 is in development and is not complete yet.", status: "working" as const },
];

export const deltaruneSourceRows = [
 {
  claim: "What chapters are available now?",
  source: "Official DELTARUNE site",
  status: "verified" as const,
  href: deltaruneOfficialUrl,
  note: "The official page states that Chapters 1-5 are available now and that more chapters are planned as free updates.",
 },
 {
  claim: "How much does the full game cost and what platforms are supported?",
  source: "Official FAQ",
  status: "verified" as const,
  href: deltaruneHelpUrl,
  note: "Use the FAQ for price, platforms, demo behavior, chapter selection, save import, endings, and Chapter 6 status.",
 },
 {
  claim: "What does Steam list for features, reviews, screenshots, and tags?",
  source: "Steam store",
  status: "verified" as const,
  href: deltaruneSteamUrl,
  note: "Steam is the storefront source for PC/Mac buying, review signal, trailer media, language support, and current feature labels.",
 },
 {
  claim: "How strong was the Chapter 5 launch window?",
  source: "SteamDB charts",
  status: "working" as const,
  href: deltaruneSteamDbUrl,
  note: "Use SteamDB only as a live demand signal. Player count changes constantly and should not be copied as a permanent fact.",
 },
 {
  claim: "What player questions should the Chapter 5 page cover?",
  source: "Google Suggest, Reddit, Steam discussions, and videos",
  status: "working" as const,
  href: deltaruneRedditSearchUrl,
  note: "Recurring demand clusters include Chapter 5 walkthrough, secret boss, Pink Coins, Egg, Mystery Key, weird route, and stuck checks.",
 },
];

export const deltaruneChapterRows = [
 ["Chapter 1", "Available as part of the demo and full game.", "New players, returning players, and story setup.", "Low, if played normally."],
 ["Chapter 2", "Available as part of the demo and full game.", "Players who want a full demo save before buying.", "Moderate; it introduces more systems and hidden-boss habits."],
 ["Chapter 3", "Available in the full game.", "Players continuing the paid release after the demo.", "Moderate to high."],
 ["Chapter 4", "Available in the full game.", "Players following the current chapter order.", "High; avoid deep searches before playing."],
 ["Chapter 5", "Available in the full game.", "Players searching for walkthroughs, secrets, hidden routes, and stuck fixes.", "High; use a spoiler-aware guide."],
 ["Chapter 6+", "Planned, not released yet.", "Do not plan routes around unreleased chapters.", "Unknown."],
];

export const deltaruneStartRows = [
 ["I am completely new", "Start Chapter 1, read the beginner guide first, and avoid Chapter 5 secret sections until you reach them.", "/games/deltarune/beginner-guide"],
 ["I played Chapters 1-2 demo", "Import or continue your save if possible, then play Chapters 3-5 in order.", "/games/deltarune/beginner-guide"],
 ["I am already in Chapter 5", "Use the Chapter 5 walkthrough for route checks, secrets, missables, Egg, weird route, and stuck fixes.", "/games/deltarune/chapter-5-walkthrough-secrets"],
 ["I only need official status", "Use the hub source table and official links before reading spoiler sections.", "/games/deltarune"],
];

export const deltaruneBeginnerChecklist = [
 {
  step: "1. Start with Chapter 1 unless you are only testing",
  doThis: "Begin from Chapter 1 on a first playthrough, even though the official FAQ says you can play any chapter from the start.",
  why: "Chapter order teaches battle rhythm, party expectations, recurring characters, hidden-boss habits, and the tone of choices without requiring outside explanation.",
 },
 {
  step: "2. Save before long exploration or route changes",
  doThis: "Use save points before entering a new area, after buying equipment, and before following a suspicious side path.",
  why: "DELTARUNE is not a survival game, but hidden content and alternate routes are easier to inspect when you can return to a clean save.",
 },
 {
  step: "3. Learn ACT, Spare, and Fight separately",
  doThis: "In early battles, try ACT options, watch enemy names, and check when enemies can be spared before defaulting to attacks.",
  why: "Many encounters are puzzles disguised as battles. Learning the non-lethal rhythm early prevents confusion in later chapters.",
 },
 {
  step: "4. Treat TP as a shared resource",
  doThis: "Defend, graze safely, and spend TP only when a spell or action solves the current fight.",
  why: "TP links defensive play to healing and special actions. Panic spending makes later turns harder.",
 },
 {
  step: "5. Talk to NPCs and inspect side rooms before moving on",
  doThis: "Before leaving a new area, speak to visible NPCs, check odd doors, inspect suspicious objects, and revisit hub areas after major events.",
  why: "DELTARUNE hides jokes, flavor, items, and optional content in places that look optional but are often route clues.",
 },
 {
  step: "6. Buy equipment for survivability first",
  doThis: "If you are unsure what to buy, prioritize equipment that keeps the party alive and makes mistakes less costly.",
  why: "A living party learns more. Damage optimization matters less than surviving unfamiliar bullet patterns.",
 },
 {
  step: "7. Keep deep-secret searches until after a normal clear",
  doThis: "Use spoiler-light guidance first, then come back for hidden bosses, Eggs, or route variations after finishing the chapter normally.",
  why: "Secret routes can reframe scenes and create irreversible-seeming decisions. They are better after you understand the chapter baseline.",
 },
];

export const deltaruneMechanicRows = [
 ["ACT", "Use ACT to interact with enemies, solve encounter logic, or move enemies toward Spare conditions.", "Try ACT first when a fight looks puzzle-like."],
 ["Spare", "Use Spare once an enemy is ready. Some fights need several turns of setup.", "Watch enemy names and behavior after each ACT."],
 ["Fight", "Attack when the route or encounter calls for it, but do not assume attacks are the default solution.", "If you are on a normal first run, learn non-lethal solutions first."],
 ["TP", "TP builds through defensive play and grazing, then fuels spells and special actions.", "Spend TP on healing or route-solving actions instead of wasting it early."],
 ["Equipment", "Weapons and armor change comfort more than they change the whole strategy.", "Buy survival help before chasing damage."],
 ["Save points", "Save points are route anchors and recovery points.", "Save before new areas, suspicious side paths, or optional boss attempts."],
];

export const deltaruneChapter5RouteRows = [
 {
  step: "1. Open with a clean Chapter 5 save",
  doThis: "Start Chapter 5 from a save you are willing to keep, then make a second slot if you plan to inspect weird route or secret-boss requirements.",
  why: "Chapter 5 search demand is clustered around secrets and route changes. A clean baseline makes it easier to test without losing a normal route.",
 },
 {
  step: "2. Follow the main path until the chapter opens side checks",
  doThis: "Move through required scenes first, then stop at each new hub-like area to talk, inspect doors, and check whether backtracking is available.",
  why: "Do not sprint through Chapter 5 if you want secrets. The safest pattern is story gate, local sweep, save, then continue.",
 },
 {
  step: "3. Keep all suspicious collectibles in one checklist",
  doThis: "Track Pink Coins, key-like items, egg-room leads, and NPC hints in the same note instead of treating them as separate pages.",
  why: "Current search demand ties Pink Coins, Mystery Key, secret boss, and Egg together. Splitting them too early creates duplicate thin guidance.",
 },
 {
  step: "4. Verify secret-boss preconditions before committing",
  doThis: "Before using a Mystery Key or entering a suspected hidden-boss route, save and confirm the source of every prerequisite.",
  why: "Secret boss details are still being refined by players. The page should help users avoid irreversible confusion, not pretend unverified details are final.",
 },
 {
  step: "5. Finish the normal route before weird route testing",
  doThis: "On a first clear, finish Chapter 5 normally, then reload or use a separate save for weird route choices.",
  why: "Weird route searches are high intent, but the route is spoiler-heavy and can change how players interpret the chapter.",
 },
];

export const deltaruneChapter5Secrets = [
 ["Pink Coins", "Chapter 5 side checks; exact count and order need route verification.", "Track every pink coin before using route claims.", "Verification needed", "Keep inside this walkthrough until all locations are stable."],
 ["Mystery Key", "Likely tied to the Pink Coins / secret-boss chain based on player search behavior.", "Confirm the prerequisite before using the key.", "Verification needed", "Do not state a final unlock route without screenshots or video timestamps."],
 ["Secret Boss", "Hidden-boss demand is confirmed by Google Suggest and community search patterns.", "Save before attempting and document the prerequisite chain.", "Verification needed", "Use a separate save until the unlock route is fully confirmed."],
 ["Egg / hidden room", "Chapter 5 players are actively looking for Egg and hidden-room help.", "Check odd rooms, repeated NPC hints, and route-specific interaction prompts.", "Needs in-game confirmation", "Keep it with the main secrets checklist until the entry path is confirmed."],
 ["Weird route", "Google Suggest shows Chapter 5 weird route demand.", "Use after a normal clear unless you intentionally want heavy spoilers.", "Working signal", "Keep key choices and fail states in the same Chapter 5 page."],
 ["Missables", "Chapter 5 has enough secret demand to justify a combined missables checklist.", "Save before major gates and sweep local areas before leaving.", "Working signal", "Update after verified route footage or GSC queries identify exact missed items."],
];

export const deltaruneVideoIndexRows = [
 ["Official Chapter 5 trailer", "n5y22LUfetA", "Launch context, tone, and official Chapter 5 availability.", "Official video; not a walkthrough."],
 ["Full Chapter 5 walkthrough", "To add after verification", "Main route, save points, local sweeps, and ending approach.", "Use only after selecting a video with stable timestamps."],
 ["All Chapter 5 secrets", "To add after verification", "Pink Coins, Mystery Key, Egg, secret boss, and hidden rooms.", "Do not publish exact timestamps until watched and matched to the page."],
 ["Secret boss route", "To add after verification", "Prerequisites, unlock, fight entry, and recovery.", "Keep as a timestamp index first; split only if GSC proves demand."],
];

export const deltaruneStuckRows = [
 ["A door will not open", "Return to the last save point and sweep nearby NPCs, interactables, and side rooms before assuming a bug.", "Most Chapter 5 blockers are likely sequence or interaction checks."],
 ["A key item seems useless", "Do not consume or route around it until you confirm the prerequisite chain and save state.", "Mystery Key demand is high, but final public route proof should be timestamped."],
 ["A secret boss does not trigger", "Check whether every prior secret condition is complete, then reload before the suspected entry point.", "Hidden bosses often depend on a chain, not one object."],
 ["I missed a coin or room", "Use a save before the last major gate if available. If not, mark the missing item for the next run.", "This guide avoids claiming every secret is recoverable until verified."],
 ["Weird route broke my normal route", "Use a separate save for weird route testing and keep a normal-route save untouched.", "Alternate routes can change context and should not be mixed with a blind first clear."],
];

export const deltaruneRelatedGuides: GameGuideLink[] = [
 {
  title: "DELTARUNE Guide Hub",
  href: deltarune.hubPath,
  description:
   "Current chapter status, platforms, official links, save import notes, and where to start.",
 },
 ...deltarune.guideLinks,
];

export function getDeltaruneRelated(excludeHref: string) {
 return deltaruneRelatedGuides.filter((guide) => guide.href !== excludeHref).slice(0, 6);
}

const deltaruneKeywords = [
 "DELTARUNE guide",
 "DELTARUNE Chapter 5 walkthrough",
 "DELTARUNE Chapter 5 secrets",
 "DELTARUNE secret boss",
 "DELTARUNE Pink Coins",
 "DELTARUNE Mystery Key",
 "DELTARUNE Chapter 5 Egg",
 "DELTARUNE weird route",
 "DELTARUNE beginner guide",
 "DELTARUNE chapters 1-5",
 "DELTARUNE save import",
];

export function createDeltaruneMetadata({
 title,
 description,
 canonical,
 image = deltaruneImages.hero,
}: {
 title: string;
 description: string;
 canonical: string;
 image?: string;
}): Metadata {
 return {
  title: { absolute: title },
  description,
  keywords: deltaruneKeywords,
  authors: [{ name: "Enjoy4Game Guides" }],
  alternates: { canonical },
  openGraph: {
   title,
   description,
   url: canonical,
   images: [image],
   type: "article",
   siteName: "Enjoy4Game Guides",
  },
  twitter: {
   card: "summary_large_image",
   title,
   description,
   images: [image],
  },
 };
}
