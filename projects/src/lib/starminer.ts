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
 smShip: "/games/starminer/sm-ship.webp",
 smMining: "/games/starminer/sm-mining.webp",
 smCombat: "/games/starminer/sm-combat.webp",
 smBase: "/games/starminer/sm-base.webp",
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
   step: "1. Start Campaign, skip Sandbox for now",
   doThis:
     "Launch Campaign mode. Follow the initial tutorial prompts. Your first goal is not to build a fleet — it is to understand how power, heat, storage, and refining interact on a single station.",
   why: "Campaign missions introduce mechanics one at a time. Players who start in Sandbox face a blank build screen with no guidance, which leads to preventable mistakes like power outages and heat spikes.",
 },
 {
   step: "2. Build a compact starter station",
   doThis:
     "Place 1 reactor, 1 small thruster, 1 basic smelter, 1 cargo module, and 1 crew quarters on a small frame. Keep all modules within 2-3 grid tiles of each other. Do not expand until the first loop is stable.",
   why: "Compact layouts make power routing visible and heat manageable. A spread-out station hides where the bottleneck is and makes it harder to diagnose problems in the first hour.",
 },
 {
   step: "3. Mine Cobalt and iron in the nearest debris field",
   doThis:
     "Target the closest debris field or C-class asteroid from the starter station. Mine Cobalt (72 cr/unit) for income and Iron for construction. Ignore Ice and Silicone until the first refinery is running.",
   why: "Cobalt is the best early income at 6x Iron's value. A single cargo run of Cobalt funds your next module. Iron is kept for hull and frame construction, not sold.",
 },
 {
   step: "4. Sell Cobalt, clear the starting debt",
   doThis:
     "After the first mining run, dock at the nearest trade station within 1000m. Sell only Cobalt — keep Iron and Silicone. Use the credits to clear the starting debt immediately. Debt compounds interest in Starminer.",
   why: "Clearing debt in the first hour saves 15-20% of early income that would otherwise go to interest payments. A debt-free station grows faster than one with compounding liabilities.",
 },
 {
   step: "5. Add a Basic Smelter and T2 Storage before expanding",
   doThis:
     "Build a Basic Smelter to convert raw ore into ingots (3-5x value density per cargo space). Place a T2 Metal Storage next to it and set auto-sell at 80% capacity. Only then build a second mining ship or new module.",
   why: "Smelting doubles your effective cargo value per trip. Auto-sell generates passive income while you focus on expansion. Building more ships before smelting and storage means hauling low-value ore — the most common first-hour mistake.",
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

// Game modes page depth exports
export const smGameModesActionRows = [
  {
    step: '1. Pick Campaign as the first save',
    doThis: 'Start with Campaign unless you already know how mining, power, logistics, heat, and defense interact. Treat Campaign as the structured path that teaches the systems before Sandbox freedom becomes useful.',
    why: 'Starminer is a systems-heavy sandbox. A blank Sandbox save drops you into a build space before the game has taught you the rules, so mistakes become expensive instead of educational.',
  },
  {
    step: '2. Move to Sandbox after one stable Campaign run',
    doThis: 'Once Campaign missions have introduced production chains, energy distribution, and basic defense, start a Sandbox save to test customized stations, ships, and resource layouts.',
    why: 'Sandbox is creative space, not tutorial space. Builders who already understand power, heat, and storage will move faster there; new players will just rebuild the same mistakes.',
  },
  {
    step: '3. Test Survival after defenses are stable',
    doThis: 'Use Survival to pressure-test your defense plans. Start it only after you can build stable energy distribution, weapon coverage, and repair support in a normal save.',
    why: 'Survival uses endless enemy waves. If your station browns out, runs out of repair materials, or has weapon coverage gaps, Survival will expose those problems in minutes rather than hours.',
  },
  {
    step: '4. Save a blueprint after a build proves stable',
    doThis: 'Once a station, ship, or mining platform survives real use, save a personal blueprint. Use the saved blueprint as a starting point in the next save instead of rebuilding from scratch.',
    why: 'Blueprint save and recall is a confirmed feature. Treating it as a checkpoint habit keeps Early Access iteration cheaper when the game updates between saves.',
  },
  {
    step: '5. Re-check balance during Early Access',
    doThis: 'Treat each mode as a work in progress. Compare Campaign pacing, Sandbox customization, and Survival balance against the latest patch notes and player reports instead of trusting launch-day advice.',
    why: 'The official FAQ says all three modes will be refined during Early Access. Treating early guides as launch-window advice prevents old builds from masquerading as final balance.',
  },
] as const;

export const smGameModesStatusItems = [
  { label: 'Confirmed modes', value: 'Campaign, Sandbox, and Survival per the official FAQ.', status: 'verified' as const },
  { label: 'Best first save', value: 'Campaign is the recommended starting mode for most new players.', status: 'verified' as const },
  { label: 'Single-player', value: 'Confirmed on Steam. Multiplayer is planned, not live at launch.', status: 'verified' as const },
  { label: 'Blueprint feature', value: 'Personal blueprint save and recall is confirmed. Community sharing is planned.', status: 'verified' as const },
  { label: 'Early Access caveat', value: 'All three modes will be refined during Early Access, so treat launch advice as time-limited.', status: 'working' as const },
  { label: 'Language', value: 'English listed on the Steam supported languages field.', status: 'verified' as const },
];

export const smGameModesSourceRows = [
  {
    claim: 'Campaign, Sandbox, and Survival are the official modes',
    source: 'Official site',
    status: 'verified' as const,
    href: starminerOfficialUrl,
    note: 'Use as the basis for mode identity and ordering.',
  },
  {
    claim: 'Single-player, achievements, and Steam Cloud at launch',
    source: 'Steam store page',
    status: 'verified' as const,
    href: starminerSteamUrl,
    note: 'Use for the launch feature inventory, not for multiplayer claims.',
  },
  {
    claim: 'Personal blueprint save and recall is confirmed',
    source: 'Official site',
    status: 'verified' as const,
    href: starminerOfficialUrl,
    note: 'Use to confirm personal blueprint behavior. Community sharing is separate.',
  },
  {
    claim: 'Early Access May 2026 positioning and mode refinement',
    source: 'TheSixthAxis',
    status: 'working' as const,
    href: starminerSixthAxisUrl,
    note: 'Use as a secondary source for the Early Access context.',
  },
  {
    claim: 'SteamDB timing and release window',
    source: 'SteamDB',
    status: 'working' as const,
    href: starminerSteamDbUrl,
    note: 'Use for launch timing context, not for mode behavior claims.',
  },
];

export const smGameModesSearchIntent = [
  {
    query: 'Starminer game modes',
    answer: 'The official FAQ lists Campaign, Sandbox, and Survival. Campaign is the best first save for most players, Sandbox is for customized builds, and Survival is for endless-wave defense testing.',
    href: '#modes-anchor',
    label: 'Game modes',
  },
  {
    query: 'Starminer best first mode',
    answer: 'Campaign is the best beginner mode because it teaches mining, power, logistics, heat, and defense before Sandbox or Survival make sense.',
    href: '#modes-anchor',
    label: 'First mode',
  },
  {
    query: 'Starminer Survival mode',
    answer: 'Survival uses endless enemy waves. It is best tried after you can build stable mining, energy, and weapon coverage in a normal save.',
    href: '#modes-anchor',
    label: 'Survival',
  },
  {
    query: 'Starminer Sandbox mode',
    answer: 'Sandbox lets you customize starting conditions and chase self-made factory or fleet goals. Start here only after you understand power, heat, logistics, and defense pressure.',
    href: '#modes-anchor',
    label: 'Sandbox',
  },
];

export const smGameModesJumpLinks = [
  { href: '#modes-anchor', label: 'Mode anchor' },
  { href: '/games/starminer/beginner-guide', label: 'Beginner guide' },
  { href: '/games/starminer/ship-building', label: 'Ship building' },
  { href: '/games/starminer/heat-aliens-defense', label: 'Heat and defense' },
  { href: '/games/starminer/mining-logistics', label: 'Mining logistics' },
];

// Heat aliens defense page depth exports
export const smHeatAliensActionRows = [
  {
    step: '1. Treat expansion as threat generation',
    doThis: 'Plan a defense pass for every major expansion. Mining and building raise heat signature, and critical heat can bring alien attention before you finish a new module.',
    why: 'Heat turns economic growth into danger. Defending after the attack starts is always more expensive than defending before the next expansion is built.',
  },
  {
    step: '2. Protect power, storage, refining, and routes',
    doThis: 'When you place weapons and shields, cover the systems that keep the station alive. Do not rely on a single outer ring of turrets if core systems stay exposed.',
    why: 'A station that browns out during an attack is not really defended. If storage, refining, or repair support is exposed, the same attack becomes a cascade failure.',
  },
  {
    step: '3. Plan energy distribution before combat arrives',
    doThis: 'Reserve power headroom for weapons, shields, repair, and life support. Test the worst-case load in a normal save before trusting the same station in Survival waves.',
    why: 'Energy distribution is the difference between an armed station and a defended station. A defensive plan that ignores brownouts will fail at the worst possible moment.',
  },
  {
    step: '4. Use warship support for mobile response',
    doThis: 'Build at least one patrol or escort ship and position it near mining routes or station approach lanes. Use mobile ships to screen angles, rescue positions, and chase small threats.',
    why: 'Static defenses are cheaper per unit, but pirates and aliens do not only attack from the obvious edge. Mobile ships fill the gap between turrets and reinforcements.',
  },
  {
    step: '5. Repair, learn, and adjust after each attack',
    doThis: 'After an attack, repair, identify which system was exposed, and adjust the layout before expanding again. Do not simply rebuild the same station and hope the next attack goes better.',
    why: 'Defensive iteration is the main difference between a launch-day save and a stable mid-game save. Each attack is information about the next layout, not just a cost.',
  },
] as const;

export const smHeatAliensStatusItems = [
  { label: 'Heat signature', value: 'Mining, building, and expansion raise heat. Critical heat can trigger alien detection.', status: 'verified' as const },
  { label: 'Alien threat', value: 'Steam confirms aliens detect you when heat reaches critical levels. Official site also lists pirates.', status: 'verified' as const },
  { label: 'Defense priority', value: 'Cover power, storage, refining, production, and approach routes rather than only the outside edge.', status: 'working' as const },
  { label: 'Energy distribution', value: 'Weapons and defenses need power. A station that browns out during attacks is not actually defended.', status: 'working' as const },
  { label: 'Warship support', value: 'Use mobile ships to protect mining routes and station approaches, not only static turrets.', status: 'working' as const },
  { label: 'Survival readiness', value: 'Test defense plans in a normal save before trusting them in endless-wave Survival pressure.', status: 'needs-check' as const },
];

export const smHeatAliensSourceRows = [
  {
    claim: 'Heat signature and alien detection at critical levels',
    source: 'Steam store page',
    status: 'verified' as const,
    href: starminerSteamUrl,
    note: 'Use as the basis for the heat-to-threat chain.',
  },
  {
    claim: 'Aliens and pirates as defended threats',
    source: 'Official site',
    status: 'verified' as const,
    href: starminerOfficialUrl,
    note: 'Use for pirate and alien threat framing.',
  },
  {
    claim: 'Defense and weapon system descriptions',
    source: 'Steam store page',
    status: 'verified' as const,
    href: starminerSteamUrl,
    note: 'Use for turret and shield context, not for specific build advice.',
  },
  {
    claim: 'Survival mode endless enemy waves',
    source: 'Official site',
    status: 'verified' as const,
    href: starminerOfficialUrl,
    note: 'Use to explain why defense planning matters before Survival.',
  },
  {
    claim: 'Community heat and defense patterns',
    source: 'Reddit community discussions',
    status: 'needs-check' as const,
    href: 'https://www.reddit.com/search/?q=Starminer%20heat%20aliens%20defense',
    note: 'Use for Early Access community patterns, not as final balance.',
  },
];

export const smHeatAliensSearchIntent = [
  {
    query: 'Starminer heat signature',
    answer: 'Steam says mining, building, and expansion raise heat. Critical heat can bring alien attention, so defense should be planned before the next big expansion.',
    href: '#heat-anchor',
    label: 'Heat signature',
  },
  {
    query: 'Starminer aliens',
    answer: 'Yes. Steam confirms aliens detect you when heat reaches critical levels. The official site also lists pirates as a defended threat.',
    href: '#heat-anchor',
    label: 'Aliens',
  },
  {
    query: 'Starminer defense',
    answer: 'Protect power, storage, refining, production, and approach routes. Plan energy distribution before the next attack and use mobile ships for screening.',
    href: '#heat-anchor',
    label: 'Defense',
  },
  {
    query: 'Starminer Survival mode',
    answer: 'Survival is built around endless enemy waves. Try it after mining, power, and weapon coverage are stable in a normal save.',
    href: '#heat-anchor',
    label: 'Survival',
  },
];

export const smHeatAliensJumpLinks = [
  { href: '#heat-anchor', label: 'Heat anchor' },
  { href: '/games/starminer/ship-building', label: 'Ship building' },
  { href: '/games/starminer/mining-logistics', label: 'Mining logistics' },
  { href: '/games/starminer/game-modes', label: 'Game modes' },
  { href: '/games/starminer/beginner-guide', label: 'Beginner guide' },
];

// Is-it-worth-it page depth exports
export const smWorthItActionRows = [
  {
    step: '1. Match the buying decision to the missing evidence',
    doThis: 'Decide what you need confirmed before buying. If you need price, reviews, recommended specs, Steam Deck support, multiplayer, or modding, wait for those signals instead of guessing.',
    why: 'Early Access changes fast. The best way to avoid regret is to match the wait or buy decision to the specific thing that would actually change your mind.',
  },
  {
    step: '2. Treat Steam Deck as a wait, not a buy',
    doThis: 'Do not buy Starminer for Steam Deck as a primary device. The current store data does not confirm Steam Deck compatibility, and Early Access performance is not yet stable.',
    why: 'Unsupported or unknown compatibility is a strong reason to wait. Early Access updates can change compatibility, so treat the wait as informed, not as fear.',
  },
  {
    step: '3. Plan around the confirmed solo loop',
    doThis: 'Buy for the confirmed single-player systems mastery loop: modular building, mining, logistics, ships, and defense. Plan a Campaign save first, not a long Sandbox or Survival commitment.',
    why: 'Confirmed features are reliable. Treating the buy decision as a solo experience with systems depth prevents the launch-week save from turning into an early-access regret.',
  },
  {
    step: '4. Verify PC specs and the missing recommended tier',
    doThis: 'Compare your hardware to the official minimum and to the missing recommended tier. Use the system-requirements page and avoid building huge stations on minimum hardware until you have tested performance.',
    why: 'Minimum specs are a floor. The recommended tier is not listed yet, so a Campaign or small Sandbox save is the safest first test of how the game actually runs on your hardware.',
  },
  {
    step: '5. Track multiplayer, mods, and blueprint sharing as planned',
    doThis: 'Do not treat multiplayer, modding, or community blueprint sharing as live features. Watch the Steam store, official site, and developer posts for exact wording before promising any of them in your save plan.',
    why: 'Planned features can land mid-Early Access. Treating them as roadmap items instead of launch guarantees keeps the buy decision honest and avoids overpromising to other players.',
  },
] as const;

export const smWorthItStatusItems = [
  { label: 'Genre fit', value: 'Modular building, mining, logistics, ships, and defense planning. Strong for systems-focused solo players.', status: 'verified' as const },
  { label: 'Steam Deck', value: 'Not confirmed by current store data. Treat handheld play as a wait.', status: 'needs-check' as const },
  { label: 'Single-player', value: 'Confirmed on Steam. Multiplayer is planned, not live.', status: 'verified' as const },
  { label: 'Modding', value: 'Described as a development priority. Do not assume Workshop support at launch.', status: 'working' as const },
  { label: 'Reviews and user signal', value: 'Should be checked once the Steam store is live. Do not assume before launch.', status: 'needs-check' as const },
  { label: 'Price', value: 'Should be checked once the Steam store is live. Avoid trusting pre-launch price chatter.', status: 'needs-check' as const },
];

export const smWorthItSourceRows = [
  {
    claim: 'Single-player, achievements, and Steam Cloud at launch',
    source: 'Steam store page',
    status: 'verified' as const,
    href: starminerSteamUrl,
    note: 'Use for the confirmed feature inventory.',
  },
  {
    claim: 'Modular construction, mining, production, and combat systems',
    source: 'Official site',
    status: 'verified' as const,
    href: starminerOfficialUrl,
    note: 'Use as the basis for the genre and fit claims.',
  },
  {
    claim: 'Early Access May 2026 positioning',
    source: 'TheSixthAxis',
    status: 'working' as const,
    href: starminerSixthAxisUrl,
    note: 'Use as a secondary source for the Early Access context.',
  },
  {
    claim: 'SteamDB timing and release window',
    source: 'SteamDB',
    status: 'working' as const,
    href: starminerSteamDbUrl,
    note: 'Use for timing context, not for buying advice.',
  },
  {
    claim: 'Multiplayer, modding, and blueprint sharing roadmap',
    source: 'Official site',
    status: 'working' as const,
    href: starminerOfficialUrl,
    note: 'Use to confirm planned features, not to promise launch availability.',
  },
];

export const smWorthItSearchIntent = [
  {
    query: 'Is Starminer worth it',
    answer: 'Worth considering for systems-focused solo builders. Wait if your decision depends on price, reviews, Steam Deck, multiplayer, modding, or community blueprint sharing.',
    href: '#worthit-anchor',
    label: 'Worth it',
  },
  {
    query: 'Starminer Steam Deck',
    answer: 'Compatibility is not confirmed by current store data. Handheld players should wait for compatibility results or trusted player reports.',
    href: '#worthit-anchor',
    label: 'Steam Deck',
  },
  {
    query: 'Starminer multiplayer',
    answer: 'Multiplayer is described as a development priority, not as a confirmed launch feature. Treat solo play as the reliable assumption.',
    href: '#worthit-anchor',
    label: 'Multiplayer',
  },
  {
    query: 'Starminer mods',
    answer: 'Modding is a development priority. Do not assume Steam Workshop support until an official store or developer update confirms it.',
    href: '#worthit-anchor',
    label: 'Mods',
  },
];

export const smWorthItJumpLinks = [
  { href: '#worthit-anchor', label: 'Buy or wait anchor' },
  { href: '/games/starminer/release-date', label: 'Release status' },
  { href: '/games/starminer/system-requirements', label: 'PC specs' },
  { href: '/games/starminer/multiplayer-mods-blueprints', label: 'Mods and multiplayer' },
  { href: '/games/starminer/beginner-guide', label: 'Beginner guide' },
];

// Multiplayer mods blueprints page depth exports
export const smMultiplayerActionRows = [
  {
    step: '1. Treat single-player as the only confirmed launch path',
    doThis: 'Plan your first save as a solo experience. Use Campaign, Sandbox, Survival, and personal blueprint save and recall, and avoid promising co-op or shared-world features in your guide or plan.',
    why: 'Single-player is the only launch-window certainty. Building a save plan around unconfirmed features sets the wrong expectations and risks wasted prep.',
  },
  {
    step: '2. Use personal blueprint save and recall as a design habit',
    doThis: 'Save personal blueprints after a station, ship, or platform proves stable. Recall those blueprints as starting points in new saves instead of rebuilding from scratch.',
    why: 'Blueprint save and recall is confirmed by the official FAQ. Treating it as a checkpoint habit keeps iteration cheap and makes Experimental patches less punishing.',
  },
  {
    step: '3. Watch the store, site, and developer posts for roadmap changes',
    doThis: 'For multiplayer, modding, and community blueprint sharing, watch the Steam store, the official site, and any developer posts. Do not write those features as live until official labels change.',
    why: 'Early Access roadmaps change. Treating official channels as the only source prevents you from repeating a rumor as a feature and embarrassing a save plan later.',
  },
  {
    step: '4. Save a reusable starter design early',
    doThis: 'Build a compact station and a mining ship that survive real use, then save both as personal blueprints. Use the saved designs as your baseline in every new save.',
    why: 'A reusable starter saves the most time across Early Access patches. The first stable design becomes the safety net when a new patch breaks a different design.',
  },
  {
    step: '5. Do not promise features you have not seen in store copy',
    doThis: 'In guides, plans, and friend recommendations, separate confirmed features (single-player, blueprint save, achievements, Steam Cloud) from planned features (multiplayer, modding, community sharing).',
    why: 'Confirmed and planned are not the same thing. Clear labeling protects your credibility and gives other players a better mental model of what to expect on day one.',
  },
] as const;

export const smMultiplayerStatusItems = [
  { label: 'Single-player', value: 'Confirmed on Steam. Treat solo play as the launch-window assumption.', status: 'verified' as const },
  { label: 'Personal blueprints', value: 'Save and recall is confirmed by the official FAQ.', status: 'verified' as const },
  { label: 'Community blueprints', value: 'Sharing is described as planned, not as a confirmed launch feature.', status: 'working' as const },
  { label: 'Multiplayer', value: 'Described as a development priority. Do not write co-op guides as if it is live.', status: 'working' as const },
  { label: 'Modding', value: 'Described as a development priority. Workshop support is not confirmed.', status: 'working' as const },
  { label: 'Steam achievements', value: 'Confirmed on Steam. Unlock conditions can land later than the launch label.', status: 'verified' as const },
];

export const smMultiplayerSourceRows = [
  {
    claim: 'Single-player, achievements, and Steam Cloud at launch',
    source: 'Steam store page',
    status: 'verified' as const,
    href: starminerSteamUrl,
    note: 'Use for the launch feature inventory.',
  },
  {
    claim: 'Personal blueprint save and recall is confirmed',
    source: 'Official site',
    status: 'verified' as const,
    href: starminerOfficialUrl,
    note: 'Use to confirm personal blueprint behavior.',
  },
  {
    claim: 'Multiplayer and modding are development priorities',
    source: 'Official site',
    status: 'working' as const,
    href: starminerOfficialUrl,
    note: 'Use for roadmap language, not for launch availability promises.',
  },
  {
    claim: 'Early Access positioning and roadmap',
    source: 'TheSixthAxis',
    status: 'working' as const,
    href: starminerSixthAxisUrl,
    note: 'Use as a secondary source for the Early Access context.',
  },
  {
    claim: 'SteamDB timing and release window',
    source: 'SteamDB',
    status: 'working' as const,
    href: starminerSteamDbUrl,
    note: 'Use for timing context only.',
  },
];

export const smMultiplayerSearchIntent = [
  {
    query: 'Starminer multiplayer',
    answer: 'Multiplayer is a development priority, not a confirmed launch feature. Treat single-player as the reliable launch assumption.',
    href: '#multiplayer-anchor',
    label: 'Multiplayer',
  },
  {
    query: 'Starminer mods',
    answer: 'Modding is a development priority. Do not assume Steam Workshop or mod tools until an official update confirms them.',
    href: '#multiplayer-anchor',
    label: 'Mods',
  },
  {
    query: 'Starminer blueprints',
    answer: 'Personal blueprint save and recall is confirmed. Community blueprint sharing is planned, not guaranteed at launch.',
    href: '#multiplayer-anchor',
    label: 'Blueprints',
  },
  {
    query: 'Starminer Steam Workshop',
    answer: 'Not confirmed by current store data. Treat it as a possible future priority until an official feature label or developer update confirms it.',
    href: '#multiplayer-anchor',
    label: 'Workshop',
  },
];

export const smMultiplayerJumpLinks = [
  { href: '#multiplayer-anchor', label: 'Feature anchor' },
  { href: '/games/starminer/is-it-worth-it', label: 'Is it worth it' },
  { href: '/games/starminer/release-date', label: 'Release status' },
  { href: '/games/starminer/game-modes', label: 'Game modes' },
  { href: '/games/starminer/beginner-guide', label: 'Beginner guide' },
];

// Release date page depth exports
export const smReleaseActionRows = [
  {
    step: '1. Treat the Steam button as the final live signal',
    doThis: 'Open the Steam store page on launch day and check whether the button shows purchase, install, or coming soon. Use that button, not calendar text, as the final availability check.',
    why: 'Store state can change on launch day. Calendar dates and SteamDB timing are useful context, but the live store button is the only proof that the game is actually buyable or installable.',
  },
  {
    step: '2. Use SteamDB timing for window planning',
    doThis: 'Plan your launch session around the SteamDB unlock time, not just the calendar date. Convert the UTC time to your local zone before deciding when to start the download.',
    why: 'SteamDB timing is a useful launch window, but it is still a third-party tracker. Pair it with the live store button and your own platform countdown before planning a session.',
  },
  {
    step: '3. Plan an Early Access mindset for the first sessions',
    doThis: 'Treat the first few sessions as iteration, not as a finished game. Expect balance, performance, and content updates, and avoid building a single save that depends on launch-day balance being final.',
    why: 'Early Access games change. A save that assumes launch balance as final will feel rough after the first big patch. A save that treats the launch build as a snapshot stays useful across updates.',
  },
  {
    step: '4. Confirm platform and language before installing',
    doThis: 'Confirm Windows support, English language, and PC platform on the Steam store before installing. Do not assume console, Mac, or additional language support until an official label appears.',
    why: 'The current Steam listing is Windows and English only. Confirming platform and language up front avoids wasted install time and keeps the launch session focused on the supported feature set.',
  },
  {
    step: '5. Cross-check the official site and Steam for contradictions',
    doThis: 'When the Steam store and the official site disagree, follow whichever source is most recent and most specific. Treat older copy and third-party trackers as background, not as ground truth.',
    why: 'The official site, Steam, and SteamDB can drift. The safest launch decision is the one backed by the most recent and most specific source, not the one that has been repeated the most times.',
  },
] as const;

export const smReleaseStatusItems = [
  { label: 'Steam release date', value: 'May 27, 2026 per the Steam store listing.', status: 'verified' as const },
  { label: 'SteamDB unlock', value: '27 May 2026 at 16:00 UTC per SteamDB.', status: 'working' as const },
  { label: 'Early Access', value: 'Confirmed by the Steam tag and the official site wording.', status: 'verified' as const },
  { label: 'Steam store page', value: 'Confirmed as the primary PC store page.', status: 'verified' as const },
  { label: 'Epic Games Store', value: 'Listed as coming soon on the official site. Not the first place to check on launch day.', status: 'working' as const },
  { label: 'Console release', value: 'Not confirmed by the current Steam or official site copy. Treat as PC-only until news appears.', status: 'needs-check' as const },
];

export const smReleaseSourceRows = [
  {
    claim: 'Steam lists Starminer for May 27, 2026 with single-player, achievements, and Steam Cloud',
    source: 'Steam store page',
    status: 'verified' as const,
    href: starminerSteamUrl,
    note: 'Use for the primary release date and feature inventory.',
  },
  {
    claim: 'SteamDB lists 27 May 2026 at 16:00 UTC',
    source: 'SteamDB',
    status: 'working' as const,
    href: starminerSteamDbUrl,
    note: 'Use for timing context, not as the final live signal.',
  },
  {
    claim: 'Official site describes Early Access in May 2026 with Steam and Epic coming soon',
    source: 'Official site',
    status: 'verified' as const,
    href: starminerOfficialUrl,
    note: 'Use for the Early Access framing and store positioning.',
  },
  {
    claim: 'TheSixthAxis covered the May 2026 Early Access release',
    source: 'TheSixthAxis',
    status: 'working' as const,
    href: starminerSixthAxisUrl,
    note: 'Use as a secondary source for the Early Access context.',
  },
  {
    claim: 'Steam Deck compatibility is not confirmed in store data',
    source: 'Steam store page',
    status: 'needs-check' as const,
    href: starminerSteamUrl,
    note: 'Use to keep Steam Deck as a wait, not a launch assumption.',
  },
];

export const smReleaseSearchIntent = [
  {
    query: 'Starminer release date',
    answer: 'Steam lists May 27, 2026. SteamDB lists 27 May 2026 at 16:00 UTC. Use the Steam store button as the final live availability check.',
    href: '#release-anchor',
    label: 'Release date',
  },
  {
    query: 'Starminer Early Access',
    answer: 'Confirmed by the Steam tag and the official site. Treat launch as Early Access and plan for balance and content updates.',
    href: '#release-anchor',
    label: 'Early Access',
  },
  {
    query: 'Starminer Epic Games Store',
    answer: 'Listed as coming soon on the official site. Steam is the confirmed store page to check first.',
    href: '#release-anchor',
    label: 'Epic',
  },
  {
    query: 'Starminer consoles',
    answer: 'Not confirmed by the current Steam and official site copy. Treat as a PC release until official console news appears.',
    href: '#release-anchor',
    label: 'Consoles',
  },
];

export const smReleaseJumpLinks = [
  { href: '#release-anchor', label: 'Release anchor' },
  { href: '/games/starminer/system-requirements', label: 'PC specs' },
  { href: '/games/starminer/is-it-worth-it', label: 'Is it worth it' },
  { href: '/games/starminer/beginner-guide', label: 'Beginner guide' },
  { href: '/games/starminer/game-modes', label: 'Game modes' },
];

// System requirements page depth exports
export const smSpecActionRows = [
  {
    step: '1. Compare your PC to the official minimum tier',
    doThis: 'Check Windows 10 32-bit, Intel Core i3-10100 / Ryzen 3 3100, 8 GB RAM, GTX 1050 / RX 560, DirectX 11, and 7 GB storage against your hardware before installing.',
    why: 'The minimum tier is the official floor. Anything below it is not covered by the published requirements, and minimum-tier hardware is not covered by the recommended promises.',
  },
  {
    step: '2. Plan a small Campaign first save',
    doThis: 'Use the first Campaign save as a real test. Build a compact station, run a small mining loop, and watch for shader stutter, menu lag, and load times before expanding.',
    why: 'A small save hides the most painful problems until you can fix them. Treating the first save as a hardware test gives you a chance to adjust settings before committing hours to a build.',
  },
  {
    step: '3. Reserve storage and shader compilation room',
    doThis: 'Keep at least 7 GB free on the target drive, and expect first-session shader compilation even on hardware that exceeds the minimum spec.',
    why: 'Storage and shader compilation are platform-dependent. A small amount of launch-week stutter is not a sign of failure, but repeated hitches after the first session can be.',
  },
  {
    step: '4. Read laptop thermals and background app caveats',
    doThis: 'Laptop buyers should cap framerate, test on AC power, and watch fan and thermal behavior. Close browsers and background apps before testing large builds or Survival pressure.',
    why: 'A tactics or sandbox game depends on readable UI and predictable frame pacing, not just on average framerate. Thermals and background load both look like game problems until they are isolated.',
  },
  {
    step: '5. Plan for missing recommended specs',
    doThis: 'Until a recommended tier appears, treat the missing recommended spec as a warning. Avoid building massive stations, heavy fleets, or Survival saves on minimum hardware until you have tested performance.',
    why: 'A minimum spec proves the game can run, not that it will scale gracefully. The recommended tier is the safer planning anchor when present, and its absence is itself a signal to plan carefully.',
  },
] as const;

export const smSpecStatusItems = [
  { label: 'OS', value: 'Windows 10 32-bit per the official minimum listing.', status: 'verified' as const },
  { label: 'Processor', value: 'Intel Core i3-10100 / AMD Ryzen 3 3100 or similar.', status: 'verified' as const },
  { label: 'Memory', value: '8 GB RAM per the official minimum listing.', status: 'verified' as const },
  { label: 'Graphics', value: 'Nvidia GTX 1050 / AMD Radeon RX 560 or similar.', status: 'verified' as const },
  { label: 'DirectX', value: 'Version 11 per the official minimum listing.', status: 'verified' as const },
  { label: 'Steam Deck', value: 'Not confirmed by current store data. Treat handheld play as a wait.', status: 'needs-check' as const },
];

export const smSpecSourceRows = [
  {
    claim: 'Official minimum PC requirements',
    source: 'Steam store page',
    status: 'verified' as const,
    href: starminerSteamUrl,
    note: 'Use for OS, CPU, GPU, RAM, DirectX, storage, and sound card lines.',
  },
  {
    claim: 'No recommended PC tier listed yet',
    source: 'Steam store page',
    status: 'needs-check' as const,
    href: starminerSteamUrl,
    note: 'Use to explain why near-minimum hardware is treated as a wait, not a buy.',
  },
  {
    claim: 'Steam Deck compatibility not in current store data',
    source: 'Steam store page',
    status: 'needs-check' as const,
    href: starminerSteamUrl,
    note: 'Use to keep Steam Deck as a wait, not a buy.',
  },
  {
    claim: 'Sandbox and systems scope for performance planning',
    source: 'Official site',
    status: 'verified' as const,
    href: starminerOfficialUrl,
    note: 'Use to explain why late-game performance can differ from a small starter save.',
  },
  {
    claim: 'Community Early Access performance patterns',
    source: 'Reddit community discussions',
    status: 'working' as const,
    href: 'https://www.reddit.com/search/?q=Starminer%20performance%20system%20requirements',
    note: 'Use for Early Access performance patterns, not as final balance claims.',
  },
];

export const smSpecSearchIntent = [
  {
    query: 'Starminer system requirements',
    answer: 'Steam lists Windows 10 32-bit, i3-10100 / Ryzen 3 3100, 8 GB RAM, GTX 1050 / RX 560, DirectX 11, and 7 GB storage. No recommended tier is listed yet.',
    href: '#spec-anchor',
    label: 'PC specs',
  },
  {
    query: 'Starminer Steam Deck',
    answer: 'Steam Deck compatibility is not confirmed in the current store data. Handheld players should wait for compatibility results.',
    href: '#spec-anchor',
    label: 'Steam Deck',
  },
  {
    query: 'Starminer DirectX',
    answer: 'The official minimum requirements list DirectX 11, not DirectX 12.',
    href: '#spec-anchor',
    label: 'DirectX',
  },
  {
    query: 'Starminer storage',
    answer: 'Steam lists 7 GB of available storage. Plan a small Campaign save first instead of a large Sandbox or Survival commitment on minimum hardware.',
    href: '#spec-anchor',
    label: 'Storage',
  },
];

export const smSpecJumpLinks = [
  { href: '#spec-anchor', label: 'Spec anchor' },
  { href: '/games/starminer/release-date', label: 'Release status' },
  { href: '/games/starminer/is-it-worth-it', label: 'Is it worth it' },
  { href: '/games/starminer/beginner-guide', label: 'Beginner guide' },
  { href: '/games/starminer/game-modes', label: 'Game modes' },
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
