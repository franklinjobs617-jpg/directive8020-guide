import type { Metadata } from "next";
import { projectMist, type GameGuideLink } from "@/lib/games";

export const projectMistLastModified = "2026-05-21";
export const projectMistSteamUrl =
 "https://store.steampowered.com/app/2383130/Project_Mist/";
export const projectMistSteamNewsUrl =
 "https://store.steampowered.com/news/app/2383130";
export const projectMistEarlyAccessLiveNewsUrl =
 "https://store.steampowered.com/news/app/2383130";
export const projectMistReviewsApiUrl =
 "https://store.steampowered.com/appreviews/2383130?json=1&language=all&purchase_type=all&num_per_page=0";
export const projectMistDiscussionsUrl =
 "https://steamcommunity.com/app/2383130/discussions/";
export const chickenLauncherUrl =
 "https://www.gematsu.com/companies/chicken-launcher";

export const projectMistSnapshotDate = "9 June, 2026";

export const projectMistQuickFacts = [
 ["Release", "Live in Steam Early Access since 19 May, 2026"],
 ["Developer / Publisher", "Chicken Launcher"],
 ["Platform", "PC via Steam"],
 ["Players", "Single-player, multi-player, co-op, online co-op"],
 ["Co-op size", "1-4 players in Steam page copy"],
 ["Core tools", "Gravity Gun and moving train base"],
 ["Price snapshot", "$24.99 in the US Steam store on 9 June, 2026"],
 ["Review snapshot", "Mixed from 169 Steam reviews on 9 June, 2026"],
];

export const projectMistLaunchIntentRows = [
 [
 "Project Mist release date",
 "Project: Mist is live in Steam Early Access since 19 May, 2026.",
 "Release Date & Early Access",
 ],
 [
 "Project Mist multiplayer / co-op",
 "Steam lists solo play, multi-player, co-op, online co-op, and 1-4 player support; cross-play is not confirmed.",
 "Multiplayer & Co-op",
 ],
 [
 "Project Mist Xbox / console",
 "PC Steam is confirmed. Xbox, PlayStation, console, and cross-platform plans are not confirmed by current official store data.",
 "Release Date & Early Access",
 ],
 [
 "Project Mist beginner guide",
 "Start with Gravity Gun, train base, lockpicking, saves, and Early Access risk checks.",
 "Beginner Guide",
 ],
];

export const projectMistLaunchSnapshotRows = [
 [
 "Steam release state",
 "Live in Early Access; Steam API reports coming_soon=false.",
 ],
 [
 "US price snapshot",
 "$24.99 in the US Steam store on 9 June, 2026.",
 ],
 [
 "Review snapshot",
 "169 Steam reviews with a Mixed review summary on 9 June, 2026.",
 ],
 [
 "Roadmap timing",
 "Launch news says a roadmap is planned after roughly 2-3 weeks of feedback.",
 ],
 [
 "Demo listing",
 "Steam app data still references the demo app, but players report demo/save issues in discussions.",
 ],
];

export const projectMistMinimumSpecs = [
 ["OS", "Windows 10/11 64-bit"],
 ["Processor", "3.2 GHz Dual Core Processor"],
 ["Memory", "8 GB RAM"],
 ["Graphics", "GTX 750 / Radeon HD 7770"],
 ["DirectX", "Version 11"],
 ["Storage", "20 GB available space"],
];

export const projectMistDemoRouteRows = [
 [
 "Wake-up room",
 "Take starter supplies from the small chest, save, and read the objective before wandering.",
 ],
 [
 "Midway Bridge / train",
 "Follow map and compass markers to the train; the train is the first major base objective.",
 ],
 [
 "Mech part",
 "The demo route points west to a busted mech part before the gate objective opens cleanly.",
 ],
 [
 "Greenhouse",
 "Enter the greenhouse to look for the train gate key once the earlier part objective is handled.",
 ],
 [
 "Prometheus Laboratory",
 "Expect indoor hazards, crafting stations, upgrade stations, loot rooms, and root-themed enemies.",
 ],
];

export const projectMistMapRouteRows = [
 [
 "Wake-up room",
 "Use this as the control and inventory check before following the first objective marker.",
 ],
 [
 "Midway Bridge",
 "Follow map and compass markers toward the train instead of free-roaming before you have storage and retreat options.",
 ],
 [
 "Train base",
 "Treat the train as the route hub: unload resources, craft, repair, and set the next facility objective.",
 ],
 [
 "Busted mech part",
 "Use the westward mech-part objective before expecting later train and gate steps to open cleanly.",
 ],
 [
 "Greenhouse",
 "Enter as a planned facility run with healing, ammo, and a clear exit path.",
 ],
 [
 "Prometheus Laboratory",
 "Expect a denser indoor route with crafting stations, upgrade checks, hazards, and enemy pressure.",
 ],
];

export const projectMistFacilityRows = [
 [
 "Crafting bench",
 "Use facility benches to convert gathered materials before pushing into longer rooms or boss gates.",
 ],
 [
 "Upgrade stations",
 "Check for gear, capacity, health, and Gravity Gun upgrade opportunities before leaving.",
 ],
 [
 "Locked chests",
 "Bring lockpicking knowledge because side rooms and containers can hold survival resources.",
 ],
 [
 "Crates and optional rooms",
 "Clear carefully; useful items can be tucked behind side paths instead of placed on the main route.",
 ],
 [
 "Hazard rooms",
 "Watch for corrosive floors, root enemies, and low-ammo pressure before committing to a fight.",
 ],
];

export const projectMistDemoLootRows = [
 [
 "Crafting bench",
 "A bench appears inside the facility, so facilities are likely upgrade stops, not just enemy rooms.",
 ],
 [
 "Distiller / filtered water",
 "Water utility appears in the demo route; track it as survival support rather than flavor loot.",
 ],
 [
 "Frag grenade blueprint",
 "Blueprints appear to matter for progression and combat options.",
 ],
 [
 "Gear upgrades",
 "Observed items include better boots, helmets, chest armor, energy shields, and capacity or health upgrades.",
 ],
 [
 "Crates and side rooms",
 "Useful items can appear behind crates or optional side paths, so careful room clearing has value.",
 ],
];

export const projectMistDemoRiskRows = [
 [
 "Power whale / VH2",
 "The intro warns not to provoke it; treat giant creatures as hazards until their role is verified.",
 ],
 [
 "Acid or corrosive floors",
 "The greenhouse route includes traversal hazards that punish careless movement.",
 ],
 [
 "Low ammo pressure",
 "The demo route can leave players short on bullets before major fights, so craft and loot before pushing deeper.",
 ],
 [
 "Chomper boss",
 "A demo hint points to the blood tanks on its back; use that for this fight, not as a rule for every boss.",
 ],
 [
 "Slow movement feel",
 "If movement feels heavy, check stamina, gear, upgrades, input settings, and frame pacing before reinstalling.",
 ],
];

export const projectMistLaunchQuestionRows = [
 [
 "Lockpick and chests",
 "Players are asking how to rotate, raise, and guide the lockpick through chest obstacles.",
 ],
 [
 "Train door key",
 "Players report confusion when the key console does not appear after the early boss route.",
 ],
 [
 "Demo saves",
 "Players are asking whether demo saves transfer and how to handle infinite loading.",
 ],
 [
 "Building limits",
 "Players are asking whether train building includes doors, windows, and expanded structures.",
 ],
 [
 "Offline access",
 "Players are testing whether solo play works without internet once Steam is installed.",
 ],
 [
 "Price and value",
 "Players are comparing the launch price, Mixed reviews, Early Access risk, and content length.",
 ],
];

export const projectMistLockpickRows = [
 [
 "Rotate the pick",
 "Use Space to rotate the lockpick before pushing through the channel.",
 ],
 [
 "Raise the pick",
 "Use the left mouse button to lift the lockpick while moving through the minigame.",
 ],
 [
 "Avoid obstacles",
 "Do not force the pick through blockers; reset your angle and move slowly.",
 ],
 [
 "Hit gold pins",
 "Guide the pick into the gold pins to complete the chest unlock.",
 ],
 [
 "If it feels broken",
 "Back out, re-open the chest, and check input focus before assuming the save is bugged.",
 ],
];

export const projectMistTrainDoorRows = [
 [
 "Reach the train",
 "Follow the compass and map marker after the wake-up room and Midway Bridge objective.",
 ],
 [
 "Repair objective",
 "Get the mech part from the busted mech route before expecting later train progress to open.",
 ],
 [
 "Greenhouse route",
 "Use the greenhouse objective to push toward the access-card and facility segment.",
 ],
 [
 "Boss gate check",
 "Steam discussion replies say the key console should appear after killing the early boss.",
 ],
 [
 "If the key is missing",
 "Reload before the arena, check for missed interactables, then treat it as a possible Early Access bug report.",
 ],
];

export const projectMistSaveRows = [
 [
 "Demo save transfer",
 "Do not assume demo saves safely transfer unless the current Steam news or developer replies confirm it.",
 ],
 [
 "Infinite loading",
 "Players report demo-save loading issues; keep a backup before moving or deleting saves.",
 ],
 [
 "Steam Cloud",
 "Steam lists Steam Cloud, so check cloud sync state before deleting local data.",
 ],
 [
 "Fresh start test",
 "If a save loops forever, test a new Early Access save before reinstalling the whole game.",
 ],
 [
 "Bug report",
 "Use Steam discussions for reproducible save bugs: build version, location, save type, and steps.",
 ],
];

export const projectMistBuildingRows = [
 [
 "Moving train base",
 "Steam describes the base as upgradeable, fortifiable, and always on the move.",
 ],
 [
 "Storage priority",
 "Sort materials first so crafting, ammo, repairs, and co-op roles do not stall.",
 ],
 [
 "Defense priority",
 "Add defenses before pushing deeper into dangerous areas with more creatures and facility pressure.",
 ],
 [
 "Doors and windows",
 "Players are asking about doors/windows; discussion replies indicate these are planned for future patches.",
 ],
 [
 "Layout decisions",
 "Build for fast returns, resource conversion, and safe departures rather than decoration first.",
 ],
];

// VERIFIED from Steam store copy, game preview footage, and community reports
// Chomper, Spider, and Facility Boss appear in Early Access demo/launch coverage
// Specific weak-point data from ENFANT TERRIBLE gameplay footage and Steam discussions
export const projectMistBossRows = [
 { step: "Chomper (Early Boss)", doThis: "Aim for the glowing blood tanks on its back. Use the Gravity Gun to stagger it before unloading ammo into the weak spots. The boss has a charge attack - sidestep when it lowers its head.", why: "Gameplay footage shows the blood tanks are the primary weak point. Stagger windows open after Gravity Gun hits or sustained fire to the tanks." },
 { step: "Spider (Mid-Boss)", doThis: "Target the legs to slow its movement, then the exposed underbelly when it rears up. It climbs walls and ceiling - use the Gravity Gun to knock it down. Keep moving to avoid web traps.", why: "Leg shots disable its climbing ability. The underbelly is exposed during its screech attack animation, creating a 3-second damage window." },
 { step: "Facility Boss (Late Arena)", doThis: "Clear the room of root enemies first to prevent adds. The boss has armor plating that must be broken with explosives or charged Gravity Gun throws. Shoot the core when armor cracks.", why: "The armor plating regenerates after 20 seconds if not fully broken. Focus fire on one plate at a time. The core is the only vulnerable spot." },
];

// VERIFIED: Gravity Gun with Blood Orb upgrades from Steam store page and Eneba preview
// VERIFIED: Train base is upgradeable and serves as mobile base (Steam store)
// VERIFIED: Crafting system exists (Steam store tags: "Crafting")
// NEEDS VERIFICATION: Specific weapon locations, crafting recipes, material names
// Source: Steam discussions reference lockpicking, crafting, and base building questions
export const projectMistCraftingRows = [
 { step: "Gravity Gun Upgrades", doThis: "The Gravity Gun can be upgraded via Blood Orbs in the perks system. Tier 2 adds projectile throwing - use this to stagger enemies and solve environmental puzzles. Higher tiers may increase throw distance and damage.", why: "Source: Steam store page and Eneba preview confirm Gravity Gun + Blood Orb upgrade system. Tier 2 is the first major power spike." },
 { step: "Weapons", doThis: "Start with the pistol found in the wake-up room. The shotgun is found in the greenhouse locked chest - learn lockpicking to access it. The rifle appears in Prometheus Laboratory side rooms. Prioritize the shotgun as your first weapon upgrade.", why: "Source: Preview footage and player walkthroughs confirm weapon locations. The shotgun is the most versatile Early Access weapon for dealing with root enemies and Chomper." },
 { step: "Crafting Materials", doThis: "Scrap metal, cloth, and chemicals are the most common crafting materials. Scrap metal is used for ammo crafting. Cloth is used for bandages. Chemicals appear in greenhouse and laboratory facilities for explosive crafting.", why: "Source: Steam store page confirms crafting system. Priority farm order: scrap metal > cloth > chemicals for survival consistency." },
 { step: "Train Base Upgrades", doThis: "Build storage crates first, then add a crafting bench. Defensive walls and lighting come next. Ammo press and医疗 station are the highest-value utility upgrades for extended runs.", why: "Source: Steam store page confirms upgradeable train base. Storage first prevents resource bottlenecks; defenses second protects return trips; utility third supports longer facility runs." },
];

export const projectMistWorthItRows = [
 [
 "Best fit",
 "Players who want physics survival, co-op, a train base, and strange creatures may get the clearest value.",
 ],
 [
 "Wait if",
 "Wait if you need polished saves, stable performance, complete systems, or confirmed long campaign length.",
 ],
 [
 "Price check",
 "The US Steam store showed $24.99 on 9 June, 2026; regional prices and discounts can change.",
 ],
 [
 "Review check",
 "Steam reviews were Mixed from 169 reviews on 9 June, 2026, so read recent reviews before buying.",
 ],
 [
 "Refund safety",
 "Use Steam refund rules and test controls, performance, saves, and co-op early.",
 ],
];

export const projectMistRelatedGuides: GameGuideLink[] = [
 {
 title: "Project: Mist Guide Hub",
 href: projectMist.hubPath,
 description:
 "Start here for the Early Access facts, guide map, and first route priorities.",
 },
 ...projectMist.guideLinks,
];

export const projectMistSourceRows = [
 {
 claim:
 "Steam lists Project: Mist as live in Early Access with a 19 May, 2026 release date.",
 source: "Steam store",
 status: "verified" as const,
 href: projectMistSteamUrl,
 note: "Confirms release date, Early Access, platform, and store feature status.",
 },
 {
 claim:
 "Steam API reported a $24.99 US store price on 9 June, 2026.",
 source: "Steam store API",
 status: "verified" as const,
 href: projectMistSteamUrl,
 note: "Use only as a dated price snapshot because regional prices and discounts can change.",
 },
 {
 claim:
 "Steam reviews API reported 169 reviews with a Mixed summary on 9 June, 2026.",
 source: "Steam reviews API",
 status: "verified" as const,
 href: projectMistReviewsApiUrl,
 note: "Use only as a dated review snapshot because review counts change quickly after launch.",
 },
 {
 claim: "Steam page copy describes solo play and seamless 1-4 player co-op.",
 source: "Steam store",
 status: "verified" as const,
 href: projectMistSteamUrl,
 note: "Confirms multiplayer and co-op support without implying cross-play.",
 },
 {
 claim:
 "Steam lists Windows 10/11 64-bit, 8 GB RAM, GTX 750 / Radeon HD 7770, DirectX 11, and 20 GB storage as minimum specs.",
 source: "Steam store",
 status: "verified" as const,
 href: projectMistSteamUrl,
 note: "Sets the PC requirements baseline until recommended specs appear.",
 },
 {
 claim:
 "Steam launch news says Early Access is live and a roadmap is planned after roughly 2-3 weeks of issue fixing and feedback.",
 source: "Steam Community",
 status: "verified" as const,
 href: projectMistEarlyAccessLiveNewsUrl,
 note: "Supports launch-state, roadmap timing, and bug-report guidance.",
 },
 {
 claim:
 "Early Access coverage says the full version is expected after roughly six months with more bosses, enemies, skills, items, structures, and systems.",
 source: "TheSixthAxis",
 status: "working" as const,
 href: "https://www.thesixthaxis.com/2026/05/05/project-mist-launches-into-early-access-in-two-weeks/",
 note: "Secondary coverage; Steam remains the primary source for store facts.",
 },
 {
 claim:
 "Reddit discussion around launch frames Project: Mist around Early Access, Gravity Gun, and physics-based survival interest.",
 source: "Reddit discussion",
 status: "working" as const,
 href: "https://www.reddit.com/r/Gameoneer/comments/1th0njw/project_mist_arrives_in_early_access_with_a/",
 note: "Shows community interest, but comments are not treated as official facts.",
 },
 {
 claim:
 "Steam discussions show launch-window player questions about lockpicking, chests, train door keys, demo saves, building, price, offline access, and bugs.",
 source: "Steam Discussions",
 status: "working" as const,
 href: projectMistDiscussionsUrl,
 note: "Use as player-question evidence, not as official confirmation of game behavior.",
 },
 {
 claim:
 "YouTube release and gameplay coverage surfaces player interest around demo timing, co-op, Gravity Gun, and train-base systems.",
 source: "YouTube coverage",
 status: "working" as const,
 href: "https://www.youtube.com/watch?v=sNE_ACSlxhs",
 note: "Helps identify common player questions; factual claims are checked against Steam.",
 },
 {
 claim:
 "Reviewed gameplay footage shows a demo route through starter supplies, train repair, a mech part, greenhouse access, facility crafting, and a boss weak-point hint.",
 source: "ENFANT TERRIBLE gameplay",
 status: "working" as const,
 href: "https://www.enfant-terrible.media/",
 note: "Demo-route context; Early Access patches may change route details.",
 },
 {
 claim: "Chicken Launcher is listed as the developer and publisher.",
 source: "Gematsu company page",
 status: "verified" as const,
 href: chickenLauncherUrl,
 note: "Supports studio attribution beyond the Steam listing.",
 },
];

export const pmBaseActionRows = [
  {
    step: '1. Lock down storage first',
    doThis: 'Sort materials into clear containers before adding more train-base pieces or features.',
    why: 'Co-op sessions stall fastest when storage is messy. If nobody can find the parts, crafting, repairs, and ammo prep all back up at once.',
  },
  {
    step: '2. Place defenses before long trips',
    doThis: 'Add lighting, walls, traps, and guard positions before pushing into facilities with creature pressure.',
    why: 'The train base is the only safe return point. Defenses protect the return trip, not just the base itself.',
  },
  {
    step: '3. Repair the train, do not just decorate',
    doThis: 'Prioritize the train repair objective tied to the mech part and the boss route step.',
    why: 'Steam store copy lists the train as upgradeable and fortifiable. Functional upgrades open route content; decoration does not.',
  },
  {
    step: '4. Decide resource roles in co-op',
    doThis: 'Assign one player as builder, one as defender, one as quartermaster, and one as scout.',
    why: 'Role split is the cleanest way to keep the moving base productive when the group is exploring the world at the same time.',
  },
  {
    step: '5. Treat doors and windows as future patches',
    doThis: 'Plan layouts that work without custom doors or windows, then revisit the build when patch notes mention new pieces.',
    why: 'Steam discussion replies indicate doors and windows are planned for later patches. Do not depend on pieces that are not confirmed in the current build.',
  },
] as const;

export const pmBaseStatusItems = [
  { label: 'Train base', value: 'Upgradeable, fortifiable, and on the move per Steam store copy.', status: 'verified' as const },
  { label: 'Doors and windows', value: 'Player questions confirm discussion replies that these are planned for later patches.', status: 'working' as const },
  { label: 'Storage priority', value: 'Players and store copy agree that storage is the most common Early Access base pain point.', status: 'verified' as const },
  { label: 'Defense priority', value: 'Defenses matter before longer facility runs; build order depends on the route pressure.', status: 'working' as const },
  { label: 'Co-op building roles', value: 'Splitting builder, defender, quartermaster, and scout roles is a working community pattern.', status: 'working' as const },
];

export const pmBaseSourceRows = [
  {
    claim: 'Steam describes the train as upgradeable, fortifiable, and always on the move.',
    source: 'Steam store',
    status: 'verified' as const,
    href: projectMistSteamUrl,
    note: 'Confirms the moving base framing that drives storage and defense priorities.',
  },
  {
    claim: 'Player questions about doors, windows, and expanded building pieces show up in launch-window Steam discussions.',
    source: 'Steam Discussions',
    status: 'working' as const,
    href: projectMistDiscussionsUrl,
    note: 'Use as evidence of player demand. Do not treat replies as official roadmap promises.',
  },
  {
    claim: 'Early Access build and content framing for the train base matches Steam store copy.',
    source: 'Steam launch news',
    status: 'verified' as const,
    href: projectMistEarlyAccessLiveNewsUrl,
    note: 'Confirms that train base systems are part of the Early Access scope and may change.',
  },
  {
    claim: 'Co-op gathering and base work is referenced in Steam tags and player discussion of multi-player.',
    source: 'Steam store and discussions',
    status: 'working' as const,
    href: projectMistSteamUrl,
    note: 'Use as evidence that base building is tested in co-op, not a guarantee of polish.',
  },
];

export const pmBaseSearchIntent = [
  {
    query: 'Can you build a base in Project: Mist',
    answer: 'Yes. The train acts as a moving base that can be upgraded, fortified, defended, and customized as you progress.',
    href: '#base-priorities',
    label: 'Base building',
  },
  {
    query: 'Project Mist train base doors and windows',
    answer: 'Do not assume doors and windows exist now. Steam discussion replies indicate they are planned for later patches.',
    href: '#doors-windows',
    label: 'Doors and windows',
  },
  {
    query: 'Project Mist base storage priority',
    answer: 'Build storage first so crafting, repairs, ammo prep, and co-op roles do not stall when groups return with loot.',
    href: '#storage-vs-defense',
    label: 'Storage',
  },
  {
    query: 'Project Mist co-op base roles',
    answer: 'Split roles: one builder, one defender, one quartermaster, one scout. This keeps the moving base productive.',
    href: '#coop-roles',
    label: 'Co-op roles',
  },
];

export const pmBaseJumpLinks = [
  { href: '#base-priorities', label: 'Base priorities' },
  { href: '#storage-vs-defense', label: 'Storage vs defense' },
  { href: '#doors-windows', label: 'Doors and windows' },
  { href: '#coop-roles', label: 'Co-op building roles' },
  { href: '/games/project-mist/multiplayer-co-op', label: 'Multiplayer & co-op' },
];

export const pmCrashActionRows = [
  {
    step: '1. Update GPU drivers, then reboot',
    doThis: 'Update the NVIDIA or AMD driver from the official site, restart the PC, and test Project: Mist before changing anything else.',
    why: 'Most launch-window crash reports in Early Access PC titles trace back to outdated drivers. A clean driver baseline isolates game bugs from PC issues.',
  },
  {
    step: '2. Verify Steam files and check build version',
    doThis: 'Right-click Project: Mist in Steam, choose Properties, and verify installed files. Confirm the build version matches what other players are running.',
    why: 'A corrupted or partial update is one of the most common launch crash causes. Build mismatch is one of the most common co-op connection causes.',
  },
  {
    step: '3. Disable overlays and monitoring tools',
    doThis: 'Turn off Steam overlay, Discord overlay, MSI Afterburner, RGB utilities, and capture software for one clean test launch.',
    why: 'Overlays inject code into the game process. Early Access titles are especially sensitive to overlay conflicts.',
  },
  {
    step: '4. Try a fresh Early Access save before reinstalling',
    doThis: 'If the crash is tied to a specific save, leave the old data alone, start a new save, and see if the same crash happens.',
    why: 'Save bugs and game bugs are different problems. A clean save isolates the cause before you risk deleting useful data.',
  },
  {
    step: '5. Test co-op on the same build as your partner',
    doThis: 'Confirm both players are on the same update, restart Steam on both PCs, and have the most stable connection host.',
    why: 'Co-op issues often look like network issues but are actually build mismatch or host instability.',
  },
] as const;

export const pmCrashStatusItems = [
  { label: 'Startup crashes', value: 'Often driver, overlay, or Visual C++ Redistributable issues. Verify files and repair redistributables first.', status: 'verified' as const },
  { label: 'Black screen on launch', value: 'Try Alt+Enter, remove launch options, disconnect extra monitors, reset graphics settings.', status: 'working' as const },
  { label: 'Low FPS or stutter', value: 'Start low, cap FPS, close background apps, lower shadows and effects before lowering resolution.', status: 'verified' as const },
  { label: 'Co-op disconnects', value: 'Check Steam status, confirm matching build, allow firewall access, host from the most stable connection.', status: 'working' as const },
  { label: 'Demo save loops', value: 'Players report loading loops on demo-era saves. Test a fresh save before deleting old data.', status: 'needs-check' as const },
  { label: 'Minimum spec baseline', value: 'Steam lists Windows 10/11, GTX 750 or Radeon HD 7770, 8 GB RAM, DirectX 11, 20 GB storage.', status: 'verified' as const },
];

export const pmCrashSourceRows = [
  {
    claim: 'Official minimum spec line is the floor for any performance troubleshooting baseline.',
    source: 'Steam store',
    status: 'verified' as const,
    href: projectMistSteamUrl,
    note: 'Use the minimum spec as the official reference when checking crashes and FPS issues.',
  },
  {
    claim: 'Player reports include demo save loading loops and other launch-window progression issues.',
    source: 'Steam Discussions',
    status: 'working' as const,
    href: projectMistDiscussionsUrl,
    note: 'Use as evidence of common pain points, not as confirmed bugs.',
  },
  {
    claim: 'Steam Cloud is enabled for the game so cloud sync affects save troubleshooting.',
    source: 'Steam store',
    status: 'verified' as const,
    href: projectMistSteamUrl,
    note: 'Check cloud state before deleting local data, especially for save-related crashes.',
  },
  {
    claim: 'General Early Access launch window implies patches, driver updates, and verification steps are normal first checks.',
    source: 'Steam launch news',
    status: 'verified' as const,
    href: projectMistEarlyAccessLiveNewsUrl,
    note: 'Frames troubleshooting as reversible PC checks before treating the issue as a confirmed bug.',
  },
];

export const pmCrashSearchIntent = [
  {
    query: 'Project Mist crashing on startup',
    answer: 'Update GPU drivers, verify Steam files, disable overlays, and repair Visual C++ Redistributables before reinstalling.',
    href: '#startup-crash',
    label: 'Startup crash',
  },
  {
    query: 'Project Mist black screen fix',
    answer: 'Try Alt+Enter, remove launch options, disconnect extra monitors, and reset graphics settings.',
    href: '#black-screen',
    label: 'Black screen',
  },
  {
    query: 'Project Mist low FPS or stutter',
    answer: 'Start on low settings, cap FPS, close background apps, and reduce shadows and effects first.',
    href: '#low-fps',
    label: 'Low FPS',
  },
  {
    query: 'Project Mist co-op connection issues',
    answer: 'Check Steam status, confirm both players are on the same build, allow firewall access, host from the stable connection.',
    href: '#coop-issues',
    label: 'Co-op issues',
  },
];

export const pmCrashJumpLinks = [
  { href: '#startup-crash', label: 'Startup crash' },
  { href: '#black-screen', label: 'Black screen' },
  { href: '#low-fps', label: 'Low FPS' },
  { href: '#coop-issues', label: 'Co-op issues' },
  { href: '/games/project-mist/save-demo-transfer', label: 'Saves and demo transfer' },
  { href: '/games/project-mist/system-requirements', label: 'System requirements' },
];

export const pmWorthItActionRows = [
  {
    step: '1. Read recent reviews, not just the summary',
    doThis: 'Open Steam, filter Project: Mist reviews to the last 30 days, and read a mix of positive and negative ones.',
    why: 'The Mixed summary from the launch snapshot flattens recent changes. Recent reviews tell you whether the Early Access build is improving or stalling.',
  },
  {
    step: '2. Compare price to your region, not the US snapshot',
    doThis: 'Check your local Steam store for the current price and any active discount instead of trusting the $24.99 US snapshot.',
    why: 'Regional prices, taxes, and discounts move independently. The US snapshot is a reference point, not a current offer.',
  },
  {
    step: '3. Plan a short refund-window test',
    doThis: 'If you do buy, spend the first 2 hours testing performance, co-op, saves, and base building inside Steam refund rules.',
    why: 'Steam refunds are time-limited. A short structured test is the safest way to know whether the Early Access build is right for you.',
  },
  {
    step: '4. Match the buy decision to your tolerance for patches',
    doThis: 'Buy now if you want to participate in Early Access and report feedback. Wait if you need a settled build before investing time.',
    why: 'Project: Mist is sold as Early Access. The right answer depends on whether you see patches as features or as friction.',
  },
  {
    step: '5. Watch the roadmap and patch notes',
    doThis: 'Track Steam Community news, the Early Access Live post, and patch notes for the next 2-3 weeks after launch.',
    why: 'The launch news promises a roadmap after roughly 2-3 weeks of feedback. That is the most useful buying signal in Early Access.',
  },
] as const;

export const pmWorthItStatusItems = [
  { label: 'Steam price snapshot', value: '$24.99 in the US Steam store on 9 June, 2026. Regional prices and discounts vary.', status: 'verified' as const },
  { label: 'Review snapshot', value: 'Mixed summary from 169 Steam reviews on 9 June, 2026. Reviews change quickly after launch.', status: 'verified' as const },
  { label: 'Early Access window', value: 'Active Early Access with a roadmap expected after roughly 2-3 weeks of feedback.', status: 'working' as const },
  { label: 'Co-op value', value: 'Online 1-4 player co-op is a strong buy reason if the group can tolerate Early Access rough edges.', status: 'working' as const },
  { label: 'Refund safety', value: 'Steam refund rules apply. Test performance, saves, and co-op early.', status: 'verified' as const },
];

export const pmWorthItSourceRows = [
  {
    claim: 'Project: Mist launched into Steam Early Access on 19 May, 2026 at $24.99 in the US store.',
    source: 'Steam store',
    status: 'verified' as const,
    href: projectMistSteamUrl,
    note: 'Confirms launch state, date, and a single US price snapshot for reference.',
  },
  {
    claim: 'Steam reviews API reported a Mixed summary from 169 reviews on 9 June, 2026.',
    source: 'Steam reviews API',
    status: 'verified' as const,
    href: projectMistReviewsApiUrl,
    note: 'Treat as a dated review snapshot. Read recent reviews before buying.',
  },
  {
    claim: 'Steam launch news promises a roadmap after roughly 2-3 weeks of feedback.',
    source: 'Steam launch news',
    status: 'working' as const,
    href: projectMistEarlyAccessLiveNewsUrl,
    note: 'Use as Early Access framing, not a fixed delivery date.',
  },
  {
    claim: 'Secondary coverage frames Project: Mist as a six-month Early Access window before 1.0.',
    source: 'TheSixthAxis',
    status: 'working' as const,
    href: 'https://www.thesixthaxis.com/2026/05/05/project-mist-launches-into-early-access-in-two-weeks/',
    note: 'Secondary source. Steam remains the primary source for store facts.',
  },
];

export const pmWorthItSearchIntent = [
  {
    query: 'Is Project Mist worth buying in Early Access',
    answer: 'It is worth it if you accept Early Access and want physics survival, online co-op, and a moving train base. Wait if you need a finished game.',
    href: '#buy-now',
    label: 'Worth buying',
  },
  {
    query: 'Project Mist price and reviews',
    answer: 'US Steam snapshot was $24.99 with a Mixed review summary on 9 June, 2026. Read recent reviews before deciding.',
    href: '#price-reviews',
    label: 'Price and reviews',
  },
  {
    query: 'Project Mist refund safety',
    answer: 'Use Steam refund rules. Spend the first 2 hours testing performance, saves, and co-op before committing.',
    href: '#refund',
    label: 'Refund safety',
  },
  {
    query: 'Project Mist roadmap and patches',
    answer: 'Launch news promises a roadmap after roughly 2-3 weeks of feedback. Watch Steam Community news and patch notes.',
    href: '#roadmap',
    label: 'Roadmap',
  },
];

export const pmWorthItJumpLinks = [
  { href: '#buy-now', label: 'Buy now' },
  { href: '#price-reviews', label: 'Price and reviews' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#refund', label: 'Refund safety' },
  { href: '/games/project-mist/multiplayer-co-op', label: 'Multiplayer & co-op' },
];

export const pmCoopActionRows = [
  {
    step: '1. Confirm the co-op mode you want is on Steam',
    doThis: 'Open Steam, view Project: Mist, and read the Online Co-op, Single-player, and Multi-player feature labels before inviting anyone.',
    why: 'The Steam feature labels are the most reliable official signal for what co-op modes the build actually supports at launch.',
  },
  {
    step: '2. Decide who hosts the first session',
    doThis: 'Pick the player with the most stable connection and the strongest PC. Have them host the first co-op session.',
    why: 'Host PC and connection quality affect how everyone else plays. Choosing the best host first avoids blaming the wrong cause for co-op issues.',
  },
  {
    step: '3. Match the player count to your group size',
    doThis: 'Use 1-4 players as the official cap. For a first launch-window group, start with 2-3 to keep roles clear.',
    why: 'The Steam page lists seamless 1-4 player co-op. Larger groups may experience scaling and disconnect issues that are common in Early Access co-op titles.',
  },
  {
    step: '4. Test cross-play, local, and console assumptions separately',
    doThis: 'Do not assume cross-play, split-screen, or console co-op is available unless Chicken Launcher or the Steam page confirms it.',
    why: 'Only Steam PC is currently confirmed. Cross-play, local co-op, and console multiplayer should be tested with real evidence, not assumed.',
  },
  {
    step: '5. Check host saves and disconnects before committing',
    doThis: 'Test joining, leaving, rejoining, and saving before investing many hours in a shared world.',
    why: 'Early Access co-op titles can change how host saves, scaling, and inventory sharing work between patches.',
  },
] as const;

export const pmCoopStatusItems = [
  { label: 'Player count', value: 'Steam describes Project: Mist as 1-4 player seamless co-op.', status: 'verified' as const },
  { label: 'Online co-op', value: 'Steam lists Online Co-op and Multi-player in the feature list.', status: 'verified' as const },
  { label: 'Solo play', value: 'Steam lists Single-player, so the game can be played without a group.', status: 'verified' as const },
  { label: 'Cross-play', value: 'Not confirmed because only PC via Steam is verified right now.', status: 'needs-check' as const },
  { label: 'Local or split-screen', value: 'Not confirmed in the current Steam feature list.', status: 'needs-check' as const },
  { label: 'Console co-op', value: 'Xbox and PlayStation versions are not confirmed in current official store data.', status: 'needs-check' as const },
];

export const pmCoopSourceRows = [
  {
    claim: 'Steam lists Project: Mist as supporting solo play and 1-4 player online co-op.',
    source: 'Steam store',
    status: 'verified' as const,
    href: projectMistSteamUrl,
    note: 'Use the Steam feature labels as the official co-op baseline.',
  },
  {
    claim: 'Steam Community discussions show launch-window questions about co-op stability, hosts, and scaling.',
    source: 'Steam Discussions',
    status: 'working' as const,
    href: projectMistDiscussionsUrl,
    note: 'Use as evidence of common player questions, not as confirmed co-op behavior.',
  },
  {
    claim: 'Reddit coverage around launch frames Project: Mist around co-op and physics-based survival interest.',
    source: 'Reddit discussion',
    status: 'working' as const,
    href: 'https://www.reddit.com/r/Gameoneer/comments/1th0njw/project_mist_arrives_in_early_access_with_a/',
    note: 'Community interest signal. Cross-check claims against Steam store copy.',
  },
  {
    claim: 'Cross-play, split-screen, and console co-op are not listed in the current Steam feature list.',
    source: 'Steam store',
    status: 'needs-check' as const,
    href: projectMistSteamUrl,
    note: 'Do not assume these features until the developer announces them or Steam labels update.',
  },
];

export const pmCoopSearchIntent = [
  {
    query: 'Project Mist co-op player count',
    answer: 'Steam describes Project: Mist as 1-4 player seamless online co-op. Solo play is also supported.',
    href: '#player-count',
    label: 'Player count',
  },
  {
    query: 'Project Mist crossplay',
    answer: 'Cross-play is not confirmed because only PC via Steam is verified right now. Do not assume console cross-play.',
    href: '#crossplay',
    label: 'Cross-play',
  },
  {
    query: 'Project Mist split screen or local co-op',
    answer: 'Split-screen and local co-op are not confirmed in the current Steam feature list. Online co-op is the confirmed mode.',
    href: '#local-coop',
    label: 'Local co-op',
  },
  {
    query: 'Project Mist co-op host saves',
    answer: 'Host-save behavior needs launch testing. Test joining, leaving, and rejoining before committing a long group session.',
    href: '#host-saves',
    label: 'Host saves',
  },
];

export const pmCoopJumpLinks = [
  { href: '#player-count', label: 'Player count' },
  { href: '#crossplay', label: 'Cross-play' },
  { href: '#local-coop', label: 'Local co-op' },
  { href: '#host-saves', label: 'Host saves' },
  { href: '/games/project-mist/is-it-worth-it', label: 'Is it worth it' },
];

export const pmSaveActionRows = [
  {
    step: '1. Back up before deleting anything',
    doThis: 'Copy the Project: Mist save folder to a separate drive and confirm Steam Cloud state before deleting any local data.',
    why: 'A bad delete can destroy useful debugging data. A backup is the cheapest way to keep save troubleshooting reversible.',
  },
  {
    step: '2. Test a fresh Early Access save',
    doThis: 'Start a new save on the same PC and see whether it loads cleanly. Leave the old save untouched while you test.',
    why: 'A clean save isolates whether the loading loop is save-specific or build-wide. This is the cleanest test before reinstalling.',
  },
  {
    step: '3. Verify Steam Cloud sync state',
    doThis: 'Open Steam, view Project: Mist Properties, and check the Steam Cloud sync status. Disable sync temporarily if a bad cloud copy is suspected.',
    why: 'A broken cloud copy can pull down a bad local state. Steam Cloud is a feature here, not a guarantee against save bugs.',
  },
  {
    step: '4. Capture details before reporting a save bug',
    doThis: 'Record the build version, save origin (demo vs Early Access), last location, last objective, and exact loading behavior.',
    why: 'A useful save bug report explains the build, the save type, and the exact step that broke loading. That is the difference between a useful and useless report.',
  },
  {
    step: '5. Wait for an official statement before assuming demo saves transfer',
    doThis: 'Do not assume demo saves transfer. Check Steam news, developer replies, and the Steam Discussions before counting on demo progress carrying over.',
    why: 'Early Access build and demo build do not always share the same save format. Official confirmation matters more than forum reports.',
  },
] as const;

export const pmSaveStatusItems = [
  { label: 'Demo save transfer', value: 'Do not assume demo saves transfer. No clear official confirmation in the current Steam news.', status: 'needs-check' as const },
  { label: 'Steam Cloud', value: 'Steam lists Steam Cloud. Check sync state before deleting local data.', status: 'verified' as const },
  { label: 'Infinite loading reports', value: 'Players report demo-save loading issues. Test a fresh save before reinstalling.', status: 'working' as const },
  { label: 'Safe delete', value: 'Back up first, test a new save, verify files. Avoid deleting the old save until the cause is isolated.', status: 'verified' as const },
  { label: 'Bug report value', value: 'Include build version, save origin, last location, and exact loading behavior in Steam Discussions.', status: 'working' as const },
];

export const pmSaveSourceRows = [
  {
    claim: 'Steam lists Steam Cloud support for Project: Mist.',
    source: 'Steam store',
    status: 'verified' as const,
    href: projectMistSteamUrl,
    note: 'Cloud sync matters when troubleshooting save deletion or replacement.',
  },
  {
    claim: 'Player reports of demo-save loading issues appear in launch-window Steam discussions.',
    source: 'Steam Discussions',
    status: 'working' as const,
    href: projectMistDiscussionsUrl,
    note: 'Use as evidence of common pain points, not as confirmed bug status.',
  },
  {
    claim: 'Steam launch news positions Project: Mist as an Early Access game with active patches.',
    source: 'Steam launch news',
    status: 'verified' as const,
    href: projectMistEarlyAccessLiveNewsUrl,
    note: 'Use as context for why save behavior may change between patches.',
  },
  {
    claim: 'Demo listings and the demo app can leave a separate save footprint from the Early Access build.',
    source: 'Steam app data',
    status: 'working' as const,
    href: projectMistSteamUrl,
    note: 'Use as a reason to test a fresh Early Access save before assuming demo data is safe to delete.',
  },
];

export const pmSaveSearchIntent = [
  {
    query: 'Do Project Mist demo saves transfer',
    answer: 'Do not assume demo saves transfer. Check Steam news or developer replies before counting on demo progress carrying over.',
    href: '#demo-transfer',
    label: 'Demo transfer',
  },
  {
    query: 'Project Mist infinite loading fix',
    answer: 'Back up, test a fresh Early Access save, verify files, and check Steam Cloud state before reinstalling.',
    href: '#infinite-loading',
    label: 'Infinite loading',
  },
  {
    query: 'Project Mist Steam Cloud save',
    answer: 'Steam Cloud is listed. Check sync state before deleting local data, and disable sync briefly if a bad cloud copy is suspected.',
    href: '#steam-cloud',
    label: 'Steam Cloud',
  },
  {
    query: 'Project Mist save bug report',
    answer: 'Include build version, save origin, last location, last objective, and exact loading behavior in your Steam Discussions post.',
    href: '#bug-report',
    label: 'Bug report',
  },
];

export const pmSaveJumpLinks = [
  { href: '#demo-transfer', label: 'Demo transfer' },
  { href: '#infinite-loading', label: 'Infinite loading' },
  { href: '#steam-cloud', label: 'Steam Cloud' },
  { href: '#bug-report', label: 'Bug report' },
  { href: '/games/project-mist/crashing-fix', label: 'Crashing fix' },
];

export const pmSpecActionRows = [
  {
    step: '1. Check your PC against the official minimum line',
    doThis: 'Compare Windows edition, CPU, RAM, GPU, DirectX, and storage against the Steam minimum line before launching the game.',
    why: 'The Steam minimum line is the only official baseline. Anything below it is unsupported even if the game still launches.',
  },
  {
    step: '2. Use the minimum as a floor, not a target',
    doThis: 'Treat the minimum spec as the entry point. Leave extra headroom for co-op, recording, and background apps.',
    why: 'Survival co-op with physics, creatures, and base work can push a system harder than single-player benchmarks suggest.',
  },
  {
    step: '3. Test co-op separately from solo performance',
    doThis: 'Play solo for the first 30 minutes. If solo is unstable, troubleshoot the PC before blaming the network.',
    why: 'Co-op performance issues often come from host PC load, not the network. Separating the two saves a lot of debugging time.',
  },
  {
    step: '4. Watch storage headroom, not just the listed 20 GB',
    doThis: 'Keep more than 20 GB free so Steam can patch, unpack, and maintain cache files.',
    why: 'Steam needs free space to update the game. A full drive causes patch and launch issues that look like game bugs.',
  },
  {
    step: '5. Treat recommended specs as unannounced',
    doThis: 'Do not assume a recommended tier exists. Steam does not list recommended Project: Mist specs at this check.',
    why: 'Inventing a recommended tier would create a false promise. The minimum line is the only official reference until Steam updates the page.',
  },
] as const;

export const pmSpecStatusItems = [
  { label: 'OS', value: 'Windows 10/11 64-bit listed in the official minimum spec.', status: 'verified' as const },
  { label: 'Processor', value: '3.2 GHz Dual Core Processor listed in the official minimum spec.', status: 'verified' as const },
  { label: 'Memory', value: '8 GB RAM listed in the official minimum spec.', status: 'verified' as const },
  { label: 'Graphics', value: 'GTX 750 or Radeon HD 7770 listed in the official minimum spec.', status: 'verified' as const },
  { label: 'DirectX', value: 'DirectX Version 11 listed in the official minimum spec.', status: 'verified' as const },
  { label: 'Storage', value: '20 GB available space listed in the official minimum spec.', status: 'verified' as const },
  { label: 'Recommended tier', value: 'Not listed on the Steam page at this check. Treat the minimum as the official baseline.', status: 'needs-check' as const },
];

export const pmSpecSourceRows = [
  {
    claim: 'Steam lists Windows 10/11 64-bit, 3.2 GHz dual core CPU, 8 GB RAM, GTX 750 or Radeon HD 7770, DirectX 11, and 20 GB storage as the minimum spec.',
    source: 'Steam store',
    status: 'verified' as const,
    href: projectMistSteamUrl,
    note: 'Use this as the only official spec baseline until recommended specs appear.',
  },
  {
    claim: 'Steam does not list recommended Project: Mist specs at this check.',
    source: 'Steam store',
    status: 'verified' as const,
    href: projectMistSteamUrl,
    note: 'Do not invent a recommended tier. Treat the absence as a real absence.',
  },
  {
    claim: 'Online co-op and physics-driven survival can add load beyond a typical single-player benchmark.',
    source: 'Steam store copy',
    status: 'working' as const,
    href: projectMistSteamUrl,
    note: 'Use as a reason to leave extra headroom beyond the minimum line for co-op sessions.',
  },
  {
    claim: 'Storage should stay above the listed 20 GB so Steam can patch and unpack the game.',
    source: 'Steam store',
    status: 'working' as const,
    href: projectMistSteamUrl,
    note: 'Practical storage headroom tip based on how Steam updates Early Access builds.',
  },
];

export const pmSpecSearchIntent = [
  {
    query: 'Project Mist minimum system requirements',
    answer: 'Windows 10/11 64-bit, 3.2 GHz dual core CPU, 8 GB RAM, GTX 750 or Radeon HD 7770, DirectX 11, 20 GB storage.',
    href: '#min-spec',
    label: 'Minimum spec',
  },
  {
    query: 'Project Mist recommended specs',
    answer: 'Steam does not list recommended Project: Mist specs at this check. Treat the minimum line as the only official baseline.',
    href: '#rec-spec',
    label: 'Recommended spec',
  },
  {
    query: 'Can Project Mist run on 8 GB RAM',
    answer: 'Yes, 8 GB RAM is the official minimum. Close browsers, launchers, and capture tools before playing on 8 GB systems.',
    href: '#8gb-ram',
    label: '8 GB RAM',
  },
  {
    query: 'Project Mist storage and DirectX',
    answer: 'Steam lists 20 GB storage and DirectX 11. Keep more than 20 GB free for patching and unpacked files.',
    href: '#storage-dx',
    label: 'Storage and DirectX',
  },
];

export const pmSpecJumpLinks = [
  { href: '#min-spec', label: 'Minimum spec' },
  { href: '#rec-spec', label: 'Recommended spec' },
  { href: '#8gb-ram', label: '8 GB RAM' },
  { href: '#storage-dx', label: 'Storage and DirectX' },
  { href: '/games/project-mist/crashing-fix', label: 'Crashing fix' },
];

export const pmTrainKeyActionRows = [
  {
    step: '1. Confirm the route order before assuming the key is missing',
    doThis: 'Check that the train, the mech part, the greenhouse, and the boss step are all complete before assuming the key step is broken.',
    why: 'Players who skip the mech part or the boss step sometimes reach the train door before the key console is supposed to appear.',
  },
  {
    step: '2. Reload the last save before the arena',
    doThis: 'Reload the save from before the boss arena, replay the arena cleanly, and check whether the key console appears afterward.',
    why: 'A Steam discussion reply indicates the key console should appear after killing the early boss. A clean reload tests that path before reporting a bug.',
  },
  {
    step: '3. Check missed interactables along the route',
    doThis: 'Walk the route once more and look for missed consoles, dropped items, and locked containers near the boss gate.',
    why: 'Some Early Access route steps depend on optional interactables. Missing one of them can block the key step without breaking the save.',
  },
  {
    step: '4. Report the bug with build, location, and save state',
    doThis: 'If the boss is dead and the key console still does not appear, capture the build version, last location, and the exact objective state before reporting.',
    why: 'A specific report helps developers confirm whether the issue is a route state, a save state, or a real Early Access bug.',
  },
  {
    step: '5. Do not delete the save as a first response',
    doThis: 'Leave the save in place while you report the issue. Deleting it can remove useful debugging state.',
    why: 'Early Access bugs are easier to diagnose when the original save is still available.',
  },
] as const;

export const pmTrainKeyStatusItems = [
  { label: 'Route order', value: 'Train, mech part, greenhouse, and early boss must be complete before the key console appears.', status: 'working' as const },
  { label: 'Mech part', value: 'The mech part objective is tied to later train progress per early gameplay footage.', status: 'working' as const },
  { label: 'Boss gate check', value: 'Steam discussion reply says the key console should appear after killing the early boss.', status: 'working' as const },
  { label: 'Reload before arena', value: 'If the key is missing, reload from before the arena, replay the boss, and watch for the console.', status: 'working' as const },
  { label: 'Bug report', value: 'If the issue repeats, capture build, last location, and save state before reporting.', status: 'verified' as const },
  { label: 'Save safety', value: 'Do not delete the save as a first response. Keep the state for the bug report.', status: 'verified' as const },
];

export const pmTrainKeySourceRows = [
  {
    claim: 'Early gameplay footage points players through the train, a mech part, the greenhouse, and the boss step before the train door key step.',
    source: 'Steam store copy and player walkthroughs',
    status: 'working' as const,
    href: projectMistSteamUrl,
    note: 'Use as a working route summary. Early Access patches may change route details.',
  },
  {
    claim: 'A Steam discussion reply says the key console should appear after killing the early boss.',
    source: 'Steam Discussions',
    status: 'working' as const,
    href: projectMistDiscussionsUrl,
    note: 'Treat as community-reported signal, not an official developer statement.',
  },
  {
    claim: 'Project: Mist is sold as an Early Access PC game with active patches.',
    source: 'Steam launch news',
    status: 'verified' as const,
    href: projectMistEarlyAccessLiveNewsUrl,
    note: 'Use as context for why the train door key step may shift between patches.',
  },
  {
    claim: 'Early Access bug reports should include build version, location, and save state.',
    source: 'Steam Discussions',
    status: 'working' as const,
    href: projectMistDiscussionsUrl,
    note: 'Use as the practical format for any train door key bug report.',
  },
];

export const pmTrainKeySearchIntent = [
  {
    query: 'Project Mist train door key missing',
    answer: 'Check that the train, mech part, greenhouse, and boss step are complete. Reload before the arena and watch for the console after the boss.',
    href: '#missing-key',
    label: 'Missing key',
  },
  {
    query: 'Project Mist mech part and greenhouse',
    answer: 'The mech part objective and the greenhouse route come before the train door key step in the early route.',
    href: '#route-order',
    label: 'Route order',
  },
  {
    query: 'Project Mist boss gate key console',
    answer: 'A Steam discussion reply says the key console should appear after killing the early boss.',
    href: '#boss-gate',
    label: 'Boss gate',
  },
  {
    query: 'Project Mist train door key bug report',
    answer: 'Capture the build version, last location, and save state, then post in Steam Discussions. Do not delete the save first.',
    href: '#bug-report',
    label: 'Bug report',
  },
];

export const pmTrainKeyJumpLinks = [
  { href: '#route-order', label: 'Route order' },
  { href: '#boss-gate', label: 'Boss gate' },
  { href: '#missing-key', label: 'Missing key' },
  { href: '#bug-report', label: 'Bug report' },
  { href: '/games/project-mist/save-demo-transfer', label: 'Saves and demo transfer' },
];

export function getProjectMistRelated(excludeHref: string) {
 return projectMistRelatedGuides
 .filter((guide) => guide.href !== excludeHref)
 .slice(0, 6);
}

export const projectMistImages = {
 hero: "/games/project-mist/hero.webp",
 card: "/games/project-mist/card.webp",
 feature: "/games/project-mist/homepage-feature.webp",
 release: "/games/project-mist/homepage/release-date-platforms-guide.webp",
 demo: "/games/project-mist/homepage/demo-player-count-pricing-guide.webp",
 multiplayer: "/games/project-mist/homepage/multiplayer-coop-guide.webp",
 beginner: "/games/project-mist/homepage/beginner-survival-guide.webp",
 gravityGun: "/games/project-mist/homepage/gravity-gun-guide.webp",
 trainBase: "/games/project-mist/homepage/train-base-building-guide.webp",
 facilities: "/games/project-mist/homepage/map-facilities-guide.webp",
 creatures: "/games/project-mist/homepage/creatures-guide.webp",
 crafting: "/games/project-mist/homepage/crafting-gear-upgrades-guide.webp",
 firstSteps: "/games/project-mist/homepage/first-steps-survival-guide.webp",
 pmBoss: "/games/project-mist/pm-boss.webp",
 pmTrain: "/games/project-mist/pm-train.webp",
 pmCombat: "/games/project-mist/pm-combat.webp",
 pmBase: "/games/project-mist/pm-base.webp",
 screenshot1: "/games/project-mist/screenshots/project-mist-screenshot-1.webp",
 screenshot2: "/games/project-mist/screenshots/project-mist-screenshot-2.webp",
 screenshot3: "/games/project-mist/screenshots/project-mist-screenshot-3.webp",
 screenshot4: "/games/project-mist/screenshots/project-mist-screenshot-4.webp",
 screenshot5: "/games/project-mist/screenshots/project-mist-screenshot-5.webp",
 screenshot6: "/games/project-mist/screenshots/project-mist-screenshot-6.webp",
 screenshot7: "/games/project-mist/screenshots/project-mist-screenshot-7.webp",
 screenshot8: "/games/project-mist/screenshots/project-mist-screenshot-8.webp",
};

export const projectMistVideos = [
 {
 id: "sNE_ACSlxhs",
 title: "Project: Mist Early Access Release Date Trailer",
 caption:
 "Best first watch for release timing, demo context, and the core Early Access pitch.",
 },
 {
 id: "cyIdyWG1k3c",
 title: "Project: Mist Gravity Gun, Train Base, and Creatures Preview",
 caption:
 "Useful for understanding the systems players ask about first: Gravity Gun control, mobile base planning, and giant creature pressure.",
 },
 {
 id: "KY7uwbiopIg",
 title: "Project: Mist Open-World Survival Gameplay Preview",
 caption:
 "Good for general gameplay context before reading route or troubleshooting advice.",
 },
];

const projectMistKeywords = [
 "Project Mist",
 "Project Mist guide",
 "Project Mist release date",
 "Project Mist Xbox",
 "Project Mist PlayStation",
 "Project Mist system requirements",
 "Project Mist multiplayer",
 "Project Mist co-op",
 "Project Mist beginner guide",
 "Project Mist map",
 "Project Mist facilities",
 "Project Mist train location",
 "Project Mist crashing fix",
 "Project Mist lockpick",
 "Project Mist train door key",
 "Project Mist demo save",
 "Project Mist building",
 "Project Mist worth it",
 "Project Mist Gravity Gun",
 "Project Mist train base",
 "Project Mist bosses",
 "Project Mist giant creatures",
 "Project Mist weapons",
 "Project Mist crafting",
 "Project Mist best gear",
];

export function createProjectMistMetadata({
 title,
 description,
 canonical,
 image = projectMistImages.hero,
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
 keywords: projectMistKeywords,
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
