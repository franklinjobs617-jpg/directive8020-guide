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
};

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

export const taskBarHeroQuickFacts = [
 ["Game", "TBH: Task Bar Hero"],
 ["Steam AppID", "3678970"],
 ["Release date", "May 27, 2026"],
 ["Price", "Free to play"],
 ["Mode", "Single-player"],
 ["Developer", "Nugem Studio / Tesseract Studio"],
 ["Core loop", "Idle RPG progression with heroes, stages, items, runes, cube upgrades, boxes, and market-linked gear."],
 ["Best first stop", "Beginner route, then Cube, then Act 2-10 / Act 3-10 if progression stalls."],
] as const;

export const taskBarHeroStartRows = [
 ["I just installed the game", "Open the beginner guide first. It explains early heroes, upgrades, boxes, gold, EXP, and when to stop spreading resources.", "/games/task-bar-hero/beginner-guide"],
 ["My Cube is confusing", "Use the Cube guide before spending materials. It separates leveling, synthesis, crafting, alchemy, and common waste cases.", "/games/task-bar-hero/cube-guide"],
 ["I am stuck at 2-10 or 3-10", "Use the boss-wall guide and check team balance, gear, skill levels, Cube progress, and damage type before farming blindly.", "/games/task-bar-hero/act-2-10-act-3-10-guide"],
 ["I need a team or build", "Use the heroes and builds guide for role-based choices instead of copying a tier list with no context.", "/games/task-bar-hero/heroes-builds"],
 ["I need exact item or drop data", "Use the Wiki database and drop finder, then return to the guide pages for what to do with the item.", taskBarHeroUrls.dropFinder],
] as const;

export const taskBarHeroHeroRows = [
 ["Knight", "Durable front-line melee", "Best for learning fights and stabilizing early progress.", "Use when deaths are the blocker, not when clear speed is the only problem."],
 ["Ranger", "Ranged physical damage", "Best for steady early damage and safer boss attempts.", "Needs gear and skill support before it carries alone."],
 ["Sorcerer", "Magic burst and elemental pressure", "Best when fights need stronger damage windows.", "Weak setup can feel inconsistent until resources catch up."],
 ["Priest", "Support and sustain", "Best when your team survives long enough to lose by attrition.", "Do not treat healing as a replacement for damage upgrades."],
 ["Hunter", "Physical damage scaling", "Best when you want a damage-focused slot that rewards item investment.", "Check weapons and stat priorities before judging it."],
 ["Slayer", "DLC melee damage role", "Best for players who already understand team balance and want heavier pressure.", "Do not plan around it if you have not unlocked or bought it."],
] as const;

export const taskBarHeroFirstHourRows = [
 { step: "0-10 minutes", doThis: "Learn the menu flow, claim obvious rewards, clear early stages, and avoid spending every currency the moment it appears.", why: "Most early mistakes come from using resources before knowing which bottleneck matters." },
 { step: "10-20 minutes", doThis: "Keep your first hero moving through stages and watch whether deaths, timer pressure, or weak rewards are slowing you down.", why: "The fix changes depending on whether the problem is survival, damage, or farming speed." },
 { step: "20-35 minutes", doThis: "Add a second role that covers the first hero's weakness instead of duplicating the same job.", why: "A balanced team usually pushes farther than three characters competing for the same gear plan." },
 { step: "35-50 minutes", doThis: "Open boxes in batches, compare usable upgrades, then recycle or hold extras based on Cube and crafting needs.", why: "Boxes are progression fuel, but random gear swaps can break a working setup." },
 { step: "50-60 minutes", doThis: "Check Cube, runes, and hero skills before farming the same wall for another hour.", why: "A small system upgrade often beats another pile of low-impact stage clears." },
] as const;

export const taskBarHeroCubeRows = [
 ["Leveling", "Raises Cube progress and unlock pressure relief over time.", "Prioritize when Cube EXP is the obvious bottleneck or when new operations are locked."],
 ["Synthesis", "Combines materials or items into a stronger result.", "Use when duplicate materials have no near-term role in your current hero plan."],
 ["Crafting", "Turns saved materials into targeted progression.", "Use after checking what the hero actually needs, not just because the button is available."],
 ["Alchemy", "Converts specific resources into another useful result.", "Use when you understand the input cost and the output solves a current wall."],
 ["Holding materials", "Keeps rare inputs available for later upgrades.", "Use when the benefit is unclear or the item database shows the material has multiple uses."],
] as const;

export const taskBarHeroBossCheckRows = [
 ["Team shape", "Use at least one reliable damage role and one stabilizing role before blaming the stage.", "Three fragile damage picks can fail if the boss window lasts too long."],
 ["Gear level", "Compare weapon, armor, and accessory quality across the whole team.", "One under-geared slot can make a strong build look broken."],
 ["Skill investment", "Check active skills and core passives before farming more boxes.", "A hero with missing skill support rarely performs like guide examples."],
 ["Cube progress", "Review Cube level and material use before repeating the same boss.", "Cube gaps can block progression even when hero levels look fine."],
 ["Damage profile", "Adjust physical, magic, or sustain pressure based on how the fight is failing.", "Dying early and timing out need different fixes."],
] as const;

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
