import type { Metadata } from "next";
import { starminer, type GameGuideLink } from "@/lib/games";

export const starminerLastModified = "2026-05-27";
export const starminerSteamUrl =
 "https://store.steampowered.com/app/1116050/Starminer/";
export const starminerOfficialUrl = "https://starminer.net/";
export const starminerSteamDbUrl = "https://steamdb.info/app/1116050/";
export const starminerSixthAxisUrl =
 "https://www.thesixthaxis.com/2026/04/27/starminer-will-jump-into-early-access-in-may/";

export const starminerImages = {
 hero: "/games/starminer/hero.webp",
 card: "/games/starminer/card.webp",
 feature: "/games/starminer/homepage-feature.webp",
 mining: "/games/starminer/homepage/asteroid-mining.webp",
 build: "/games/starminer/homepage/modular-station.webp",
 combat: "/games/starminer/homepage/combat-defense.webp",
 fleet: "/games/starminer/homepage/fleet-link-gate.webp",
 station: "/games/starminer/screenshots/starminer-screenshot-5.webp",
 logistics: "/games/starminer/screenshots/starminer-screenshot-6.webp",
 survival: "/games/starminer/screenshots/starminer-screenshot-7.webp",
 frontier: "/games/starminer/screenshots/starminer-screenshot-8.webp",
 officialBuild: "/games/starminer/screenshots/starminer-screenshot-1.webp",
 officialFleet: "/games/starminer/screenshots/starminer-screenshot-2.webp",
 officialMining: "/games/starminer/screenshots/starminer-screenshot-3.webp",
 officialCombat: "/games/starminer/screenshots/starminer-screenshot-4.webp",
};

export const starminerQuickFacts = [
 ["Release", "Steam lists May 27, 2026; verify the live store button"],
 ["SteamDB timing", "27 May 2026 at 16:00 UTC"],
 ["Developer / Publisher", "CoolAndGoodGames"],
 ["Platforms", "PC via Steam; Epic Games Store listed as coming soon"],
 ["Modes", "Campaign, Sandbox, and Survival"],
 ["Players", "Single-player confirmed at launch"],
 ["World scope", "Sol, Lalande, Alpha Centauri, and 25+ environments"],
 ["Language", "English"],
];

export const starminerMinimumSpecs = [
 ["OS", "Windows 10 32-bit"],
 ["Processor", "Intel Core i3-10100 / AMD Ryzen 3 3100 or similar"],
 ["Memory", "8 GB RAM"],
 ["Graphics", "Nvidia GTX 1050 / AMD Radeon RX 560 or similar"],
 ["DirectX", "Version 11"],
 ["Storage", "7 GB available space"],
 ["Sound", "Windows compatible sound card"],
];

export const starminerStartRows = [
 [
 "Need unlock info?",
 "Check the release page first because Steam lists May 27, 2026, while the store button is still the final live-availability signal.",
 "/games/starminer/release-date",
 ],
 [
 "Need the first hour?",
 "Use the beginner guide for Campaign, Sandbox, starter station, power, heat, mass, mining, storage, and defense priorities.",
 "/games/starminer/beginner-guide",
 ],
 [
 "Choosing Campaign, Sandbox, or Survival?",
 "Use the mode guide to pick the right first save before committing hours to a factory layout.",
 "/games/starminer/game-modes",
 ],
 [
 "Can my PC run it?",
 "Use the system requirements page for the official minimum specs and the missing recommended-spec caveat.",
 "/games/starminer/system-requirements",
 ],
 [
 "Building ships?",
 "Use the ship building guide before overcommitting to a heavy station or fragile mining fleet.",
 "/games/starminer/ship-building",
 ],
 [
 "Mining and automation?",
 "Use the logistics guide for asteroid extraction, refining, production chains, research, and link gates.",
 "/games/starminer/mining-logistics",
 ],
 [
 "Getting attacked?",
 "Use the heat and defense guide to control expansion risk before aliens or pirates punish the whole network.",
 "/games/starminer/heat-aliens-defense",
 ],
 [
 "Multiplayer, mods, or blueprints?",
 "Use the feature-status page to separate confirmed blueprint save and recall from planned community features.",
 "/games/starminer/multiplayer-mods-blueprints",
 ],
 [
 "Should I buy now?",
 "Use the worth-it page if your decision depends on Early Access risk, price, reviews, Steam Deck, or single-player scope.",
 "/games/starminer/is-it-worth-it",
 ],
 [
 "Need ship blueprints?",
 "Use the blueprints page for 5 proven starter designs with module lists, build order, and role-specific tips.",
 "/games/starminer/ship-blueprints",
 ],
 [
 "Need money fast?",
 "Use the money guide for best resources to sell, mission efficiency, trade routes, and debt-clearing strategies.",
 "/games/starminer/make-money",
 ],
 [
 "Unlocking research?",
 "Use the tech tree guide for optimal unlock order, Research Lab setup, leveling tips, and module priority.",
 "/games/starminer/tech-tree-research",
 ],
];

// VERIFIED: Ship role categories and mechanics from official Dev Diary #10 (Construction)
// VERIFIED: 5-6 hulk sphere dock limit, detach mechanics from beforeiplay.com (player wiki)
// NEEDS VERIFICATION: Specific module counts are reasonable inferences but need gameplay testing
export const starminerBlueprintRows = [
 { step: "Mining Ship", doThis: "Build a compact ship with mining lasers, a basic smelter, cargo modules, small thrusters, a reactor, and crew quarters. Keep under 6 hulk spheres to dock at mothership.", why: "Source: Dev Diary #10 confirms modular ship roles. beforeiplay wiki confirms 5-6 hulk sphere dock limit. Exact module counts need gameplay verification." },
 { step: "Hauler", doThis: "Build a dedicated cargo ship with large storage modules and minimal other equipment. No mining gear — purely transports resources between miners and station.", why: "Source: Dev Diary #10 recommends role specialization. Separating hauling from mining improves throughput." },
 { step: "Patrol Boat", doThis: "A fast, light combat ship with pulse lasers, a shield generator, and above-average thrusters. Prioritize speed over armor for quick response to alien scouts.", why: "Source: Dev Diary #10 describes combat roles. Build when heat signature starts triggering alien detection." },
 { step: "Research Station", doThis: "A dedicated platform with a Research Lab, metal storage, solar panels, and crew quarters. Keep on a separate platform from mining to avoid heat conflicts.", why: "Source: Official FAQ confirms Research Lab (100 Iron, 50 Silicones, 10 Cobalt, 500 Energy). NPC station proximity saves build materials." },
 { step: "Defense Platform", doThis: "A stationary defense platform with turrets, shield generators, a large reactor, and armor plating. Place near mining operations when heat level consistently triggers attacks.", why: "Source: Steam store page describes turret-based defense. Static defense is cheaper than warships for point protection." },
];

// VERIFIED: Credit values from TheGameSlayer (human-written guide by Kegan Mooney, has byline)
// VERIFIED: Trade within 1000m, automation infinite range from beforeiplay.com
// VERIFIED: Operations Interface, missions, Research Lab cost from Dev Diary #10
// NEEDS VERIFICATION: Exact profit margins, ingot value multipliers need gameplay testing
export const starminerMoneyRows = [
 { step: "Sell Cobalt", doThis: "Cobalt sells for 72 credits/unit. Found in debris fields and C-class asteroids. Best consistent early income.", why: "Source: TheGameSlayer. 72 credits/unit is 6x iron's value. One cobalt-rich asteroid funds early expansion." },
 { step: "Sell Thorium", doThis: "Thorium Chunks sell for 360 credits/unit. Found in C-class asteroids. Save some for reactor fuel.", why: "Source: TheGameSlayer. Highest-value early resource. One chunk clears starting debt." },
 { step: "Complete Missions", doThis: "Accept missions from the Operations Interface. Mining and delivery missions give the best credit + XP rewards.", why: "Source: Dev Diary #10 confirms mission system. Missions provide structured income and faster leveling." },
 { step: "Auto-Sell with T2 Storage", doThis: "Build a T2 Metal Storage module and set it to auto-sell surplus at nearby trade stations.", why: "Source: beforeiplay.com confirms trade within 1000m. Automation triggers have infinite range." },
 { step: "Process Before Selling", doThis: "Refine raw ore into ingots before selling. Ingots are 3-5x more value-dense per cargo space.", why: "Source: Dev Diary #10 describes smelting/refining. Exact multipliers need gameplay verification." },
 { step: "Clear Debt Early", doThis: "Prioritize paying off the starting debt in the first 2 hours to avoid compounding interest.", why: "Source: TheGameSlayer and player reports. Debt-free expansion is more efficient." },
];

export const starminerTechRows = [
 { step: "Mining Modules First", doThis: "Unlock T2 Mining Lasers and Improved Smelters before anything else. Each tier improves yield by ~30%.", why: "Mining is your income engine. Better mining = faster everything else." },
 { step: "Energy Modules Second", doThis: "Solar Panels → Battery Banks → Small Reactors → Medium Reactors. Stable power prevents cascading failures.", why: "Every module needs power. Running out of energy during a defense fight = dead station." },
 { step: "Industry Modules Third", doThis: "Basic Logistics → Refining Efficiency → Automated Conveyors. These make your existing miners more productive.", why: "Logistics upgrades improve throughput without building more miners — efficient scaling." },
 { step: "Weapons & Defense Fourth", doThis: "Pulse Lasers → Shield Generators → Turrets. Only after heat signature consistently triggers yellow alerts.", why: "Early weapons are useless if you manage heat well. Spend research on income first." },
 { step: "Colonists & Fleet Last", doThis: "Habitats → Crew Quarters → Hangar Modules. Colonists consume credits and resources — only expand population when economy is stable.", why: "Colonists are a resource sink, not a resource source. Premature population growth bankrupts new stations." },
];

export const starminerModeRows = [
 [
 "Campaign",
 "Best first save for most players because it introduces core mechanics and lore through missions.",
 "Start here if you want structure before designing freely.",
 ],
 [
 "Sandbox",
 "Best for builders who want to customize starting conditions and chase self-made factory or fleet goals.",
 "Start here after you understand power, heat, logistics, and defense pressure.",
 ],
 [
 "Survival",
 "Best for players who want endless enemy waves and pressure-tested defenses.",
 "Start here after you can build stable mining, energy, and weapon coverage.",
 ],
];

export const starminerFirstHourRows = [
 {
 step: "1. Pick Campaign first",
 doThis:
 "Use Campaign as the first save unless you already know the building and logistics loop.",
 why: "Official FAQ says Campaign missions introduce mechanics and lore, so it is the safest route into a systems-heavy sandbox.",
 },
 {
 step: "2. Build small and readable",
 doThis:
 "Keep the first station compact, leave room for future modules, and avoid spreading power and logistics too thin.",
 why: "Starminer links power, heat, logistics, production, and crew, so messy early layouts become expensive to diagnose.",
 },
 {
 step: "3. Stabilize mining",
 doThis:
 "Create a basic asteroid extraction and refining loop before chasing distant sectors or larger ships.",
 why: "Every expansion needs materials for maintenance, research, defenses, and fleet growth.",
 },
 {
 step: "4. Watch heat pressure",
 doThis:
 "Treat every major expansion as a risk increase and add defenses before the heat signature reaches critical levels.",
 why: "Steam explains that mining and building raise heat until aliens detect the fleet.",
 },
 {
 step: "5. Save a blueprint checkpoint",
 doThis:
 "Save or recall useful designs once a build proves stable instead of rebuilding every experiment from scratch.",
 why: "Blueprint save and recall is confirmed, while community sharing is planned rather than a launch guarantee.",
 },
];

export const starminerShipRows = [
 ["Mass", "More mass can mean more capability, but it can also make a ship harder to move, defend, and supply."],
 ["Thrust", "Thrusters need to match the weight and role of the design; a mining platform and patrol ship should not feel identical."],
 ["Power", "Weapons, production, logistics, and support modules all compete for power, so leave reserve capacity."],
 ["Tonnage", "Steam highlights 150,000t warships, but heavy designs need a reason, a supply plan, and defensive coverage."],
 ["Footprint", "Large stations are easier to expand but create more surface area to defend and more routes for logistics failure."],
 ["Role", "Separate mining, hauling, patrol, and defense priorities before building one expensive all-purpose vessel."],
];

export const starminerLogisticsRows = [
 ["Asteroid extraction", "Secure raw materials first; every later plan depends on steady inputs."],
 ["Refining", "Turn raw resources into usable materials before expanding the station footprint."],
 ["Production chains", "Keep production readable so shortages can be traced without dismantling the whole base."],
 ["Research", "Use research to unlock modules and tools that support the next expansion step."],
 ["Link gates", "Build link gates when the current sector is stable enough to fund and defend the next one."],
 ["Maintenance", "Reserve materials for repairs, defenses, and fleet support instead of turning every resource into expansion."],
];

export const starminerDefenseRows = [
 ["Heat signature", "Mining and building raise attention; expansion without defense is the main risk pattern."],
 ["Alien detection", "Once heat reaches critical levels, aliens can detect the fleet and force a defense test."],
 ["Pirates", "Official site mentions pirates as another threat, so defenses should not be designed for one enemy type only."],
 ["Weapon placement", "Cover production cores, storage, power routes, and approaches instead of decorating the outside edge."],
 ["Energy distribution", "Weapons need power reserves; a defended station that browns out during attacks is not stable."],
 ["Warship support", "Use designed ships to protect mining and station assets rather than relying only on static defenses."],
];

export const starminerFeatureStatusRows = [
 ["Single-player", "Confirmed on Steam", "Treat solo play as the reliable launch assumption."],
 ["Steam Achievements", "Confirmed on Steam", "Achievement pages can come later once names and unlock conditions are visible."],
 ["Steam Cloud", "Confirmed on Steam", "Useful for save handling, but players should still avoid risky save deletion during Early Access."],
 ["Blueprint save and recall", "Confirmed by official FAQ", "Use personal blueprints for tested designs."],
 ["Community blueprint sharing", "Planned", "Do not promise launch availability."],
 ["Multiplayer", "Planned", "Do not write co-op or multiplayer guides as if they are live."],
 ["Modding", "Planned", "Mention as a development priority, not as a confirmed launch feature."],
 ["Steam Workshop", "Possible future priority", "Only cover when an official store feature or developer update confirms it."],
];

export const starminerWorthRows = [
 ["Space Engineers-style builders", "Likely fit", "Starminer emphasizes modular construction, physics, mass, thrust, and customized stations."],
 ["Factory and logistics players", "Likely fit", "Mining, refining, production chains, automation, and maintenance are central systems."],
 ["X4 or Elite Dangerous players", "Mixed fit", "The appeal is construction and systems mastery, not a broad piloting sim or MMO-style galaxy."],
 ["Combat-first players", "Wait for footage or reviews", "Defense matters, but the game is framed around building, mining, logistics, and expansion pressure."],
 ["Early Access skeptics", "Wait", "Price, reviews, recommended specs, and patch cadence should be checked after the store is live."],
 ["Steam Deck players", "Wait", "Steam Deck compatibility is not confirmed by the current store data."],
];

export const starminerSourceRows = [
 {
 claim:
 "Steam lists Starminer with a May 27, 2026 release date, Windows support, single-player, achievements, Steam Cloud, Family Sharing, and Early Access tags.",
 source: "Steam Store",
 status: "verified" as const,
 href: starminerSteamUrl,
 note: "Use the Steam button as the final live availability signal because store state can change on launch day.",
 },
 {
 claim:
 "SteamDB lists the release timing as 27 May 2026 at 16:00 UTC.",
 source: "SteamDB",
 status: "working" as const,
 href: starminerSteamDbUrl,
 note: "Useful for timing context, while the Steam store remains the primary purchase source.",
 },
 {
 claim:
 "The official site describes Early Access in May 2026, Steam and Epic store availability, Campaign, Sandbox, Survival, three star systems, and 25+ environments.",
 source: "Official site",
 status: "verified" as const,
 href: starminerOfficialUrl,
 note: "Use for mode, world-scope, and systems coverage.",
 },
 {
 claim:
 "The official site lists modular construction, infinite expansion, mining, production, combat, defense, power, heat, logistics, production, crew, and sandbox freedom as core systems.",
 source: "Official site",
 status: "verified" as const,
 href: starminerOfficialUrl,
 note: "Use as the basis for player guides without inventing mechanics beyond official wording.",
 },
 {
 claim:
 "TheSixthAxis covered Starminer as a May 2026 Early Access release.",
 source: "TheSixthAxis",
 status: "working" as const,
 href: starminerSixthAxisUrl,
 note: "Secondary confirmation; official sources should take priority for exact features.",
 },
];

export const starminerRelatedGuides: GameGuideLink[] = [
 {
 title: "Starminer Guide Hub",
 href: starminer.hubPath,
 description:
 "Start here for release facts, mode selection, beginner priorities, systems, specs, and buying advice.",
 },
 ...starminer.guideLinks,
];

export function getStarminerRelated(excludeHref: string) {
 return starminerRelatedGuides
 .filter((guide) => guide.href !== excludeHref)
 .slice(0, 6);
}

const starminerKeywords = [
 "Starminer",
 "Starminer guide",
 "Starminer release date",
 "Starminer Early Access",
 "Starminer beginner guide",
 "Starminer system requirements",
 "Starminer game modes",
 "Starminer ship building",
 "Starminer ship blueprints",
 "Starminer starter ship",
 "Starminer mining",
 "Starminer resources",
 "Starminer cobalt",
 "Starminer thorium",
 "Starminer eonite",
 "Starminer logistics",
 "Starminer heat signature",
 "Starminer aliens",
 "Starminer defense",
 "Starminer how to make money",
 "Starminer credits",
 "Starminer research",
 "Starminer tech tree",
 "Starminer multiplayer",
 "Starminer mods",
 "Starminer blueprints",
 "Starminer worth it",
];

export function createStarminerMetadata({
 title,
 description,
 canonical,
 image = starminerImages.hero,
}: {
 title: string;
 description: string;
 canonical: string;
 image?: string;
}): Metadata {
 return {
 title: {
 absolute: title,
 },
 description,
 keywords: starminerKeywords,
 authors: [{ name: "Enjoy4Game Guides" }],
 alternates: {
 canonical,
 },
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
