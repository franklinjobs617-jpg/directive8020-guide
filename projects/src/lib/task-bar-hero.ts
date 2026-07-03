import type { Metadata } from "next";
import { taskBarHero, type GameGuideLink } from "@/lib/games";

export const taskBarHeroLastModified = "2026-07-02";

export const taskBarHeroUrls = {
 steam: "https://store.steampowered.com/app/3678970/TBH_Task_Bar_Hero/",
 steamDb: "https://steamdb.info/app/3678970/charts/",
 wiki: "https://taskbarherohub.wiki/",
 heroes: "https://taskbarherohub.wiki/heroes",
 items: "https://taskbarherohub.wiki/items",
 runes: "https://taskbarherohub.wiki/runes",
 cube: "https://taskbarherohub.wiki/cube",
 stages: "https://taskbarherohub.wiki/map",
 monsters: "https://taskbarherohub.wiki/monsters",
 skills: "https://taskbarherohub.wiki/skills",
 builds: "https://taskbarherohub.wiki/builds",
 market: "https://taskbarherohub.wiki/market",
 tools: "https://taskbarherohub.wiki/tools",
 dropFinder: "https://taskbarherohub.wiki/tools/drop-finder",
 classGuide: "https://taskbarherohub.wiki/guides/beginner/class-guide",
};

// NOTE (2026-07): only the Steam store link is used as an outbound citation
// in SourceCheckTable. The taskbarherohub.wiki links above are used
// elsewhere in this file for internal reference/comparison content, but a
// third-party fan wiki is not an "authoritative source" for the citation
// pattern used on other game hubs (Steam / official publisher site) and its
// URLs have not been independently verified — do not promote it to
// taskBarHeroSourceRows without checking it's a real, live, appropriate site.
export const taskBarHeroSourceRows = [
  {
    claim: "When did TBH: Task Bar Hero release, and what does Steam list for reviews and DLC pricing?",
    source: "Steam store",
    status: "verified" as const,
    href: taskBarHeroUrls.steam,
    note: "Use Steam for release date (May 27, 2026), current review score, class/DLC pricing, and patch notes.",
  },
];

export const taskBarHeroImages = {
 hero: "/games/task-bar-hero/og-image.jpg",
 overview: "/games/task-bar-hero/hero-overview.png",
 knight: "/games/task-bar-hero/knight.png",
 ranger: "/games/task-bar-hero/ranger.png",
 sorcerer: "/games/task-bar-hero/sorcerer.png",
 priest: "/games/task-bar-hero/priest.png",
 hunter: "/games/task-bar-hero/hunter.png",
 slayer: "/games/task-bar-hero/slayer.png",
 material: "/games/task-bar-hero/material.png",
 box: "/games/task-bar-hero/box.png",
 sword: "/games/task-bar-hero/sword.png",
};

// ========== Hero real data from wiki (game-v1 datamine) ==========

export interface HeroData {
 name: string;
 nameEn: string;
 weapon: string;
 dlc: boolean;
 difficulty: string;
 hp: number;
 atk: number;
 armor: number;
 attackSpeed: number;
 critChance: number;
 critDamage: number;
 moveSpeed: number;
 role: string;
 bestStage: string;
 statsPriority: string;
 summary: string;
}

export const taskBarHeroData: HeroData[] = [
 {
  name: "Knight",
  nameEn: "Knight",
  weapon: "Sword + Shield",
  dlc: false,
  difficulty: "Low",
  hp: 130,
  atk: 2,
  armor: 0.45,
  attackSpeed: 9,
  critChance: 0.05,
  critDamage: 7,
  moveSpeed: 9.5,
  role: "Stable front-line tank",
  bestStage: "Early progression / safe farming",
  statsPriority: "HP / Armor / Block / Physical damage",
  summary:
   "Uses high HP, armor, and shield to survive while learning stages, gear levels, and material systems. The safest starting class and a reliable benchmark for testing new content.",
 },
 {
  name: "Ranger",
  nameEn: "Ranger",
  weapon: "Bow + Arrow",
  dlc: false,
  difficulty: "Medium",
  hp: 60,
  atk: 1,
  armor: 0.08,
  attackSpeed: 10,
  critChance: 0.10,
  critDamage: 6,
  moveSpeed: 8.5,
  role: "Ranged clear-speed farmer",
  bestStage: "Mid-game farming / material hoarding",
  statsPriority: "Attack speed / Physical damage / Crit / Move speed",
  summary:
   "Trades survivability for clear speed. A Ranger with a weak bow is just a slow death. Strong once gear supports the weapon path.",
 },
 {
  name: "Sorcerer",
  nameEn: "Sorcerer",
  weapon: "Staff + Orb",
  dlc: false,
  difficulty: "Medium-High",
  hp: 50,
  atk: 2,
  armor: 0.05,
  attackSpeed: 5.5,
  critChance: 0.14,
  critDamage: 5.86,
  moveSpeed: 7.7,
  role: "Magic burst and AoE pressure",
  bestStage: "Mid-late / effect filtering",
  statsPriority: "Spell damage / Cooldown / Cast speed / AoE",
  summary:
   "Rewards players who understand stat stacking and material effects. Extremely fragile. Needs Cube access and cooldown support before it delivers.",
 },
 {
  name: "Priest",
  nameEn: "Priest",
  weapon: "Scepter + Tome",
  dlc: true,
  difficulty: "Medium",
  hp: 95,
  atk: 1,
  armor: 0.30,
  attackSpeed: 9,
  critChance: 0.04,
  critDamage: 7,
  moveSpeed: 7,
  role: "Support and sustain multiplier",
  bestStage: "Steady progression / extended farming",
  statsPriority: "HP / Recovery / Cooldown / Armor",
  summary:
   "The only dedicated support class. Free during DLC promotion. Power Blessing is the core skill — it amplifies team damage. Sanctuary keeps the team alive. Use as 2nd or 3rd slot, never first.",
 },
 {
  name: "Hunter",
  nameEn: "Hunter",
  weapon: "Crossbow + Bolts",
  dlc: true,
  difficulty: "Medium-High",
  hp: 70,
  atk: 2,
  armor: 0.15,
  attackSpeed: 7,
  critChance: 0.10,
  critDamage: 7,
  moveSpeed: 7.5,
  role: "DLC ranged burst DPS",
  bestStage: "Advanced farming / DLC route",
  statsPriority: "Attack speed / Crit / Physical damage / Material effects",
  summary:
   "Highest raw damage output in the game. Crossbow + explosive/lightning AoE, elemental status stacking. Buy when you are committed to the game and have gear ready — not as a beginner class.",
 },
 {
  name: "Slayer",
  nameEn: "Slayer",
  weapon: "Axe + Hatchet",
  dlc: true,
  difficulty: "High",
  hp: 115,
  atk: 2,
  armor: 0.40,
  attackSpeed: 7,
  critChance: 0.07,
  critDamage: 6.43,
  moveSpeed: 8.5,
  role: "DLC high-risk melee burst",
  bestStage: "Late-game / damage route",
  statsPriority: "Damage / Crit / Attack speed / Minimum survival",
  summary:
   "Sacrifices HP for burst damage through a self-damage mechanic. Very high mortality. Treat as a late-game experiment, not a core farming class. Needs strong gear evidence before investing resources.",
 },
];

// Derived 4-dimension comparison (wiki datamine v1.00.09 Lv1 base)
export const taskBarHeroStatComparison = [
 {
  hero: "Knight",
  survival: 58.5,
  burst: 0.35,
  sustainedDps: 18.0,
  clearSpeed: 9.5,
  free: true,
 },
 {
  hero: "Ranger",
  survival: 4.8,
  burst: 0.60,
  sustainedDps: 10.0,
  clearSpeed: 8.5,
  free: true,
 },
 {
  hero: "Sorcerer",
  survival: 2.5,
  burst: 0.82,
  sustainedDps: 11.0,
  clearSpeed: 7.7,
  free: true,
 },
 {
  hero: "Priest",
  survival: 28.5,
  burst: 0.28,
  sustainedDps: 9.0,
  clearSpeed: 7.0,
  free: false,
 },
 {
  hero: "Hunter",
  survival: 10.5,
  burst: 0.70,
  sustainedDps: 14.0,
  clearSpeed: 7.5,
  free: false,
 },
 {
  hero: "Slayer",
  survival: 46.0,
  burst: 0.45,
  sustainedDps: 14.0,
  clearSpeed: 8.5,
  free: false,
 },
];

// ========== Quick Facts ==========

export const taskBarHeroQuickFacts = [
 ["Game", "TBH: Task Bar Hero"],
 ["Steam AppID", "3678970"],
 ["Release date", "May 27, 2026"],
 ["Price", "Free to play"],
 ["Mode", "Single-player"],
 ["Developer", "Nugem Studio / Tesseract Studio"],
 ["Total items (wiki)", "5,944"],
 ["Hero classes", "6 (3 free + 3 DLC)"],
 ["Runes", "197"],
 ["Stages", "120 (3 Acts × 4 difficulties)"],
 ["Core loop", "Deploy heroes → auto-battle → collect gear/boxes → Cube/upgrade → push stages → repeat"],
 ["Best first stop", "Beginner route, then Cube, then Act 2-10 / Act 3-10 if progression stalls."],
] as const;

// ========== Start Here Table ==========

export const taskBarHeroStartRows = [
 ["I just installed the game", "Open the beginner guide first. It covers early heroes, upgrades, boxes, gold, EXP, and first-hour checklist.", "/games/task-bar-hero/beginner-guide"],
 ["My Cube is confusing or slow", "Use the Cube guide. Covers 8 functions, material routes, synthesis vs alchemy XP, and 1-14/15/20 leveling strategy.", "/games/task-bar-hero/cube-guide"],
 ["Stuck at Act 2-10 or Act 3-10", "Boss-wall guide with checklist: team shape, gear, skills, Cube, damage profile. Includes 3-10 boss mechanics (3秒杀机制, HP≥2000, 4秒3000 AOE).", "/games/task-bar-hero/act-2-10-act-3-10-guide"],
 ["Need team or build advice", "Use heroes and builds guide with Lv1 stat data, role comparisons, team templates, and stat priorities.", "/games/task-bar-hero/heroes-builds"],
 ["Looking for exact item or drop data", "Use the Wiki item database and drop finder, then return here for decision support.", taskBarHeroUrls.dropFinder],
] as const;

// ========== Hero Role Table (used by Heroes & Builds page) ==========

export const taskBarHeroHeroRows = taskBarHeroData.map((h) => [
 h.name,
 h.role,
 h.dlc ? `DLC — ${h.summary.split(". ")[0]}.` : h.summary.split(". ")[0],
 `Difficulty: ${h.difficulty}. HP: ${h.hp}, ATK: ${h.atk}. ${h.dlc ? "DLC class — " : ""}${h.statsPriority}.`,
] as const);

// ========== Beginner: Starter Hero Focus (3 free heroes only) ==========

export const taskBarHeroStarterRows = [
 [
  "Knight",
  "Stable front-line tank. HP 130, ATK 2 — the most forgiving class. Shield + Sword gives block chance.",
  "Start here if: you are brand new, die often, or want to learn boss mechanics safely.",
  "Clear speed is slow. Swap to Ranger when the wall is timer pressure, not survival.",
 ],
 [
  "Ranger",
  "Ranged physical damage. HP 60, ATK 1 — low defense but fast attack speed (10).",
  "Pick this if: you can survive early waves and need faster farming.",
  "A weak bow makes Ranger useless. Do not play Ranger with an under-leveled weapon.",
 ],
 [
  "Sorcerer",
  "Magic burst. HP 50, ATK 2 — extremely fragile but highest burst potential (0.82).",
  "Consider this if: you understand stat stacking, have Cube access, and can build cooldown/cast speed.",
  "One rare weapon without supporting stats produces disappointing results.",
 ],
] as const;

// ========== First Hour Table (based on wiki first-hour route) ==========

export const taskBarHeroFirstHourRows = [
 {
  step: "0-10 min",
  doThis: "Clear early stages. Unlock the Rune Tree at level 3 and the Cube at level 4. Claim obvious rewards. Do not spend everything immediately.",
  why: "Most early mistakes come from spending resources before knowing which bottleneck matters.",
 },
 {
  step: "10-20 min",
  doThis: "Pick your first hero. Knight is the safest learning class. Watch whether you die early (need survival) or time out (need damage). Push stages until you can identify the wall.",
  why: "The fix changes depending on whether the problem is survival, damage, or farming speed.",
 },
 {
  step: "20-35 min",
  doThis: "Unlock the Rune of Command first — one point gives you a second hero slot. That single Rune point has the highest ROI in the game. Add a second role that covers the first hero's weakness.",
  why: "Two well-geared heroes with clear roles push farther than three competing for the same gear plan.",
 },
 {
  step: "35-50 min",
  doThis: "Open boxes in batches. Compare usable upgrades on your active heroes. Hold materials with unclear use. Do not craft or alchemy before checking the item database.",
  why: "Boxes are progression fuel, but random gear swaps can break a working setup.",
 },
 {
  step: "50-60 min",
  doThis: "Check Cube. You should have unlocked it by now. Start synthesis with Basic Shards (5 XP/material). Do not touch Alchemy until Cube 15-20. Save rare materials.",
  why: "Synthesis gives 67% more XP per material than Alchemy. Early Alchemy burns resources you need for mid-game.",
 },
] as const;

// ========== Cube Real Data ==========

// 8 Cube functions from wiki
export const taskBarHeroCubeRows = [
 ["Synthesis", "Combines materials into permanent gear and upgrade cores. 5 XP per material.", "Use from the start. Bulk-synthesize Basic Shards (10 shards = 50 XP). Primary XP source for Cube 1-14."],
  ["Crafting", "Uses base materials (wood→copper→bronze→iron→silver→gold→stardust→bloodstone) to create new equipment.", "Use for targeted gear upgrades when you know what the active hero needs."],
  ["Decoration", "Embed gems (ruby, sapphire, topaz, emerald, amethyst) into gear sockets for stat bonuses. 36 gem types.", "Use when you have gear with open sockets and know which stat the wall needs."],
  ["Engraving", "Inscribe rune-like effects onto gear using monster materials (goblin hide, skeleton bone, slime jelly, etc.). 33 engraving materials.", "Use to add custom stat lines that match your hero's role."],
  ["Inscription", "Apply scrolls to gear for special affixes. 10 scroll tiers from Common to Cosmic.", "Use for end-game gear. Save high-tier scrolls (Arcana+) for the best equipment."],
  ["Alchemy", "Melt unwanted gear into gold + Cube XP. 3 XP per material.", "Delay until Cube 20. Early Alchemy burns materials at 40% XP efficiency loss compared to Synthesis."],
  ["Extraction", "Pulls materials or effects from existing items.", "Use when salvaging gear for parts. Check the item database before extracting rare items."],
  ["Offering", "Special exchange using anniversary coins (10 tiers). Sacrifice materials for targeted rewards.", "Use for very specific end-game conversions. Not a beginner system."],
] as const;

// Cube XP strategy data (from xmodhub + wiki)
export const taskBarHeroCubeLevels = [
 { level: "1-14", strategy: "Pure Synthesis. Bulk Basic Shard → Tier 1 Core (10 shards = 50 XP). ~4,500 XP/hour. Keep 100+ basic gems in inventory to prevent offline queue stall.", milestone: "Focus on material flow. Do not touch Alchemy." },
 { level: "15", strategy: "XP multiplier kicks in retroactively for higher-tier materials. Now use saved rare gems (Stellar Rubies etc.).", milestone: "If you burned rare materials before 15, you lost ~40 hours of mid-game grind." },
 { level: "20+", strategy: "Start introducing Alchemy for gold income. 80% Synthesis / 20% Alchemy split. Keep saving Arcana+ tier materials.", milestone: "Alchemy becomes viable for gold. Never above 20% of total Cube resource spend." },
] as const;

// ========== Boss Check Data ==========

export const taskBarHeroBossCheckRows = [
 ["Team shape", "One reliable damage role + one stabilizing role minimum. Three glass cannons fail hard when boss windows last.", "The free three-hero team is Knight + Ranger + Priest. Knight tanks, Ranger DPS, Priest sustains."],
 ["Gear level", "Compare weapon, armor, and accessory across the whole team. One under-geared slot makes a good build look broken.", "Act 3-10 needs 30%+ crit rate on the main DPS (Ranger). All sockets should hold amethysts for physical damage."],
 ["Skill investment", "Level skills that match the hero's job before farming more boxes. Priest skill order: Power Blessing → Sanctuary → Max HP → Cooldown Reduction.", "A hero with missing skill support rarely performs like guide examples."],
 ["Cube progress", "Review Cube level. If it is stalled, shift farming to the correct stage. Check the farming optimizer on the Wiki.", "Cube 15 is the first major milestone. Before 15, Synthesis only. After 15, use saved rares."],
 ["Damage profile", "Match damage type to the boss. 3-10 boss has 3秒杀 mechanics: die early = survival fix, time out = damage fix.", "3-10 requires killing the boss in 3 seconds. 献祭法师 (sacrifice Sorcerer) + Ranger with 30%+ crit rate is the known solution."],
] as const;

// ========== Rune Data ==========

export const taskBarHeroRuneCategories = [
 { category: "Hero", count: 197, keyPaths: ["Rune of War (all hero ATK)", "Rune of the Shield (all hero armor)", "Rune of Frenzy (attack speed)", "Rune of the Gale (move speed)"], purpose: "Base hero stat boosts" },
 { category: "Gold & EXP", count: 0, keyPaths: ["Rune of Wealth (gold gain)", "Rune of Growth (EXP gain)"], purpose: "Resource farming efficiency" },
 { category: "Hero Slots", count: 0, keyPaths: ["Rune of Command (extra hero slot)", "Rune of Awakening (extra skill slot)"], purpose: "Unlock more team positions" },
 { category: "Chests", count: 0, keyPaths: ["Rune of Exploration (normal chest +30% drop)", "Rune of Conquest (boss chest drop)", "Rune of Containment/Vault/Infinity (chest storage)", "Rune of Expansion (inventory slots)", "Rune of Mainspring (auto-open)", "Rune of Opening (bulk open)"], purpose: "Loot automation and capacity" },
 { category: "Offline", count: 0, keyPaths: ["Rune of Repose (offline rewards)", "Rune of Hoarding (offline gold)", "Rune of Training (offline EXP)"], purpose: "Passive income while logged off" },
 { category: "Cube", count: 0, keyPaths: ["Rune of Alchemy (+Cube alchemy gold)", "Rune of Forging (+Cube EXP)"], purpose: "Cube system efficiency" },
 { category: "Combat", count: 0, keyPaths: ["ATK% and Armor% nodes"], purpose: "Raw combat stat scaling" },
] as const;

export const taskBarHeroRunePriority = [
 "Rune of Command (extra hero slot) — single-highest ROI in the tree. One point = +1 team slot.",
 "Offline: Rune of Repose → Rune of Hoarding → Rune of Training — unlocks passive income.",
 "Chest automation: Rune of Mainspring (auto-open) — saves hours of clicking.",
 "Gold/EXP: Rune of Wealth / Growth — farm efficiency after core unlocks are done.",
 "Do not spread points early. Push one route until the next unlock threshold.",
] as const;

// ========== Related Guides ==========

export const taskBarHeroRelatedGuides: GameGuideLink[] = [
 {
  title: "TBH: Task Bar Hero Guide Hub",
  href: taskBarHero.hubPath,
  description:
   "Start here for quick status, beginner route, Cube basics, boss-wall help, hero choices, and database links.",
 },
 ...taskBarHero.guideLinks,
];

export function getTaskBarHeroRelated(excludeHref: string) {
 return taskBarHeroRelatedGuides.filter((guide) => guide.href !== excludeHref).slice(0, 6);
}

// ========== Metadata ==========

const taskBarHeroKeywords = [
 "TBH Task Bar Hero guide",
 "Task Bar Hero beginner guide",
 "TBH cube guide",
 "Task Bar Hero 2-10 guide",
 "Task Bar Hero 3-10 guide",
 "Task Bar Hero best builds",
 "Task Bar Hero heroes",
 "Task Bar Hero item database",
 "Task Bar Hero drop finder",
 "Task Bar Hero Steam Market",
 "Task Bar Hero rune priority",
 "TBH best hero class",
];

export function createTaskBarHeroMetadata({
 title,
 description,
 canonical,
 image = taskBarHeroImages.hero,
}: {
 title: string;
 description: string;
 canonical: string;
 image?: string;
}): Metadata {
 return {
  title: { absolute: title },
  description,
  keywords: taskBarHeroKeywords,
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
