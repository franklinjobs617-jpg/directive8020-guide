import type { Metadata } from 'next';
import { mechanicusII, type GameGuideLink } from '@/lib/games';

export const mechanicusIILastModified = '2026-05-26';
export const mechanicusIISteamUrl =
 'https://store.steampowered.com/app/2532480/Warhammer_40000_Mechanicus_II/';
export const mechanicusIIEpicUrl =
 'https://store.epicgames.com/p/warhammer-40k-mechanicus-edf53b';
export const mechanicusIIOfficialUrl =
 'https://www.kasedogames.com/mechanicus-2';
export const mechanicusIIXboxUrl =
 'https://www.xbox.com/en-US/games/store/warhammer-40-000-mechanicus-ii/9n3b790rkwtw';
export const mechanicusIIPlayStationUrl =
 'https://store.playstation.com/en-us/concept/10008848';

export const mechanicusIIImages = {
 hero: '/games/mechanicus-ii/hero.webp',
 capsule: '/games/mechanicus-ii/capsule.webp',
 screenshot1: '/games/mechanicus-ii/tech-priest-bridge.webp',
 screenshot2: '/games/mechanicus-ii/necron-tomb.webp',
 screenshot3: '/games/mechanicus-ii/tactical-combat.webp',
 screenshot4: '/games/mechanicus-ii/environment-destruction.webp',
 screenshot5: '/games/mechanicus-ii/character-customization.webp',
 buyer: '/games/mechanicus-ii/buyer-art.webp',
 worthItBanner: '/games/mechanicus-ii/worth-it-banner.webp',
 battle: '/games/mechanicus-ii/m2-battle.webp',
};

export const mechanicusIIVideos = [
 {
 id: 'jYyGB6wFFxE',
 title: 'Warhammer 40,000: Mechanicus II - Official Launch Trailer',
 caption:
 'Official trailer for release timing, faction tone, and the Adeptus Mechanicus versus Necron setup.',
 },
];

export const mechanicusIIQuickFacts = [
 ['Release date', 'May 21, 2026.'],
 ['Platforms', 'PC via Steam, PlayStation 5, and Xbox Series X|S. Epic has a product page; check the current regional store state before buying there.'],
 ['Developer / Publisher', 'Bulwark Studios / Kasedo Games.'],
 ['Genre', 'Fast-paced turn-based tactics, strategy, RPG, and action strategy.'],
 ['Main factions', 'Adeptus Mechanicus and Necrons, with distinct campaigns.'],
 ['Steam Deck', 'Unsupported at launch according to the official Steam FAQ and Steam Deck compatibility data.'],
 ['Steam price', '$39.99 US base price, with a $35.99 introductory Steam price at the latest check.'],
 ['Launch discount', 'Steam currently shows a 10% introductory offer ending May 28, 2026.'],
 ['Steam reviews', 'Mixed Steam user reviews at the latest check; read recent review text for performance, campaign-structure, and sequel-comparison concerns.'],
 ['Steam features', 'Single-player, Steam Achievements, Steam Cloud, and Family Sharing.'],
 ['Achievements', '34 Steam achievements.'],
 ['Languages', 'English audio with text support including English, French, Italian, German, Spanish, Polish, Russian, Simplified Chinese, and more.'],
];

export const mechanicusIIFeatureRows = [
 ['Campaign structure', 'Steam describes dual narrative campaigns for the Adeptus Mechanicus and Necrons.'],
 ['Battlefield layer', 'Turn-based tactical battles with cover, terrain, and faction-specific capabilities.'],
 ['Strategic layer', 'Territory control and resource management sit above individual battles.'],
 ['Leaders', 'Magos Dominus Faustinius and Vargard Nefershah are named as central commanders.'],
 ['Faction resource pressure', 'Official descriptions point to Cognition for the Adeptus Mechanicus and Dominion for the Necrons as key faction systems.'],
 ['Battlefield readability', 'Public previews highlight cover, destructible cover, environmental hazards, and turn-order manipulation as important tactical questions.'],
 ['Replay reason', 'Two factions mean the first decision is not only aesthetic; it changes campaign perspective and combat priorities.'],
];

export const mechanicusIIPlayerQuestionRows = [
 ['I just bought it. Where do I start?', 'Use the beginner guide for first campaign choice, leader safety, cover, terrain, and early resource habits.', '/games/mechanicus-ii/beginner-guide'],
 ['Is it better than Mechanicus 1?', 'Use the buyer guide: the sequel adds defined leaders, dual campaigns, cover, and voiced presentation, but some returning players prefer the first game structure.', '/games/mechanicus-ii/is-it-worth-it'],
 ['Which faction first?', 'Use the factions guide: Adeptus Mechanicus is safer if you want continuity from the first game; Necrons are the new playable perspective.', '/games/mechanicus-ii/factions'],
 ['How do I progress missions?', 'Use the walkthrough page for spoiler-light campaign routing, green console checks, leader safety, and replayability expectations.', '/games/mechanicus-ii/walkthrough'],
 ['What units or builds should I use?', 'Use the factions guide for role-based unit evaluation while final best-build claims are still settling.', '/games/mechanicus-ii/factions'],
 ['Is performance okay?', 'Use the Steam Deck and performance guide first if you are on handheld, near minimum specs, or worried about GPU load.', '/games/mechanicus-ii/steam-deck-performance'],
 ['Can I play Votann?', 'Use the factions guide: current public descriptions present Votann as part of the story, not as a third playable campaign faction.', '/games/mechanicus-ii/factions'],
];

export const mechanicusIIIntentRows = [
 ['Release, price, and platforms', 'Mechanicus II is out now on Steam PC, PS5, and Xbox Series X|S; use the release page for current store facts.', '/games/mechanicus-ii/release-date'],
 ['Walkthrough and stuck objectives', 'Use the walkthrough for green console checks, marked tile logic, leader safety, and mission-flow troubleshooting.', '/games/mechanicus-ii/walkthrough'],
 ['Units, factions, and builds', 'Use the factions page for role-based unit guidance without pretending one solved meta fits every patch, difficulty, and campaign side.', '/games/mechanicus-ii/factions'],
 ['Steam Deck and performance', 'Use the performance page before a Deck-first purchase because Steam Deck is unsupported at launch.', '/games/mechanicus-ii/steam-deck-performance'],
 ['Buy now or wait', 'Use the worth-it page if Mixed Steam reviews, platform performance, or comparison with Mechanicus 1 affect your decision.', '/games/mechanicus-ii/is-it-worth-it'],
];

export const mechanicusIIBeginnerRows = [
 ['Pick a campaign for learning', 'Choose the faction whose turn rhythm sounds clearer to you; do not swap campaigns every few missions before learning the basics.'],
 ['Use cover every turn', 'Treat cover and line of sight as core resources, not optional decoration.'],
 ['Check whether cover can be broken', 'Do not assume every defensive position is permanent; public previews describe destructible cover and battlefield objects.'],
 ['Watch turn order before spending actions', 'Turn-order changes can matter as much as raw damage when a unit is exposed.'],
 ['Read terrain before moving', 'Steam highlights terrain as a tactical factor, so check angles, elevation, and exposure before committing a unit.'],
 ['Learn your faction resource', 'Mechanicus players should watch Cognition flow, while Necron players should pay attention to Dominion pressure.'],
 ['Protect key units', 'Losing a specialist at the wrong time can cost more than a single bad attack roll.'],
 ['Track resources', 'The campaign layer includes resource management, so avoid spending upgrades without knowing what your faction needs next.'],
 ['Wait for tested builds', 'Do not trust best-unit lists until players have finished more campaign runs and patch notes settle.'],
];

export const mechanicusIIFirstHourRows = [
 ['Pick one side and stay there for a few missions', 'Swapping constantly makes resource rules harder to learn. Give one campaign enough time for its rhythm to become readable.'],
 ['Protect the named leader', 'Treat the leader as mission-critical until you know that mission rules. Losing a key leader can cost more than a normal unit loss.'],
 ['Inspect ability tooltips twice', 'Several early questions come from unclear ability expectations. Read the ability, then inspect the applied status on the target after using it.'],
 ['Use cover, then assume it may break', 'Cover matters, but battlefield objects and hazards can change the safe tile you planned around.'],
 ['Avoid greedy damage trades', 'A smaller hit from a safe position is often better than exposing a specialist for one bigger attack.'],
 ['Check green tiles and consoles', 'If a map highlights a green tile or console, treat it as an objective or interaction clue before ending the turn.'],
];

export const mechanicusIIWalkthroughRows = [
 ['Before entering a mission', 'Check faction resource state, leader role, available units, objective wording, and whether the mission is story-gated.'],
 ['Opening turn', 'Identify cover, hazards, enemy firing lanes, interactable tiles, and which unit can safely trigger the first objective.'],
 ['Mid-mission', 'Protect the leader, avoid splitting specialists too far apart, and keep one action plan for the next enemy activation.'],
 ['Green console or tile', 'Move a suitable unit close enough to test interaction range before assuming the object is decorative.'],
 ['Failed attempt', 'Record whether the loss came from leader exposure, resource spending, turn order, objective misunderstanding, or enemy reinforcements.'],
 ['Replayability expectation', 'Expect story-driven missions and gated campaign steps rather than a fully random conquest layer.'],
];

export const mechanicusIIWalkthroughProblemRows = [
 ['The objective will not advance', 'Re-read the objective, move a unit near any green tile or console, and check whether a living leader or specialist is required.'],
 ['The squad is wiped quickly', 'Stop trading damage from open ground; use cover first, then spend faction resources after checking enemy activation order.'],
 ['A mission feels bugged', 'Before restarting, test interactable range, line of sight, camera angle, remaining enemies, and whether the map expects a specific unit.'],
 ['The campaign route feels unclear', 'Stay on one faction long enough to learn its resource loop, then use mission failure notes to identify the real bottleneck.'],
 ['A build guide conflicts with your run', 'Trust repeatable role value over tier claims that do not match your patch, difficulty, or campaign side.'],
];

export const mechanicusIIFactionRows = [
 ['Adeptus Mechanicus', 'Best first fit for players who want tech-priest flavor, battlefield control, and a more methodical Imperial campaign perspective.'],
 ['Necrons', 'Best first fit for players who want ancient machine-legion fantasy, awakening tomb-world pressure, and a campaign from the other side of the war.'],
 ['Leagues of Votann', 'Public preview coverage says the Leagues of Votann appear in the story, but they are not presented as a playable third campaign faction.'],
 ['Resource identity', 'Adeptus Mechanicus players should expect Cognition decisions; Necron players should expect Dominion decisions.'],
 ['Do not overstate yet', 'Final best units, optimal army compositions, and hardest-mission counters should match patch version, difficulty, and campaign side.'],
];

export const mechanicusIIFactionComparisonRows = [
 ['Adeptus Mechanicus', 'Defined tech-priest leaders, Cognition decisions, specialist protection, and a closer connection to the first game.', 'Best first if you want the more familiar Imperial campaign.'],
 ['Necrons', 'Dominion pressure, tomb-world fantasy, durable machine-legion identity, and the biggest new playable perspective.', 'Best first if the sequel hook is playing the other side.'],
 ['Leagues of Votann', 'Present in the story and battlefield context according to previews, but not presented as a playable third campaign faction.', 'Track them as story content, not a campaign choice.'],
 ['Space Marine allies', 'Preview coverage shows Space Marine allies appearing in battle context.', 'Do not treat them as a full playable campaign unless official store copy says so.'],
];

export const mechanicusIIUnitRoleRows = [
 ['Leader', 'Mission routing and survival anchor', 'Keep protected until the mission proves leader exposure is safe.'],
 ['Frontline body', 'Absorb pressure and hold angles', 'Judge by durability, cover access, and whether it keeps specialists alive.'],
 ['Ranged specialist', 'Remove priority threats or trigger safe trades', 'Avoid exposing it for one large hit if the next enemy turn can punish it.'],
 ['Objective runner', 'Interact with consoles, marked tiles, or mission triggers', 'Keep at least one mobile unit free before ending a turn near objectives.'],
 ['Resource enabler', 'Support Cognition or Dominion flow', 'Value repeatable resource stability over flashy damage while learning a campaign.'],
];

export const mechanicusIIBuildDirectionRows = [
 ['Safe first build', 'Leader protection, cover discipline, one reliable ranged threat, and resource stability.', 'Best for learning missions without resetting constantly.'],
 ['Aggressive build', 'More damage and faster objective pressure, but only after you understand turn order and enemy threat ranges.', 'Use when you can predict the next enemy activation.'],
 ['Control build', 'Terrain use, objective timing, debuffs, and delaying bad enemy turns.', 'Best when missions punish direct damage races.'],
 ['Campaign economy build', 'Upgrades and units chosen around the resource bottleneck you repeatedly feel.', 'Best after several missions reveal what your faction lacks.'],
 ['Not recommended yet', 'Copying a final best-build list without knowing patch version, difficulty, or campaign side.', 'Too easy to follow advice that does not match your run.'],
];

export const mechanicusIISpecRows = [
 ['OS', 'Windows 10 64-bit', 'Windows 10 64-bit'],
 ['Processor', 'Intel Core i7-7700 / AMD Ryzen 5 1600', 'Intel Core i5-9600K / AMD Ryzen 5 3600'],
 ['Memory', '12 GB RAM', '16 GB RAM'],
 ['Graphics', 'Nvidia GeForce GTX 1660 6GB / AMD Radeon RX 5600 XT 6GB', 'Nvidia GeForce RTX 2070 8GB / AMD Radeon RX 6600 XT 8GB'],
 ['DirectX', 'Version 12', 'Version 12'],
 ['Storage', '25 GB available space', '25 GB available space'],
];

// VERIFIED: Dominion economy, Reanimation Protocols, Canoptek Wraiths from Game Truth beginner guide
// VERIFIED: Necron campaign identity from Steam store page and Game Truth
// NEEDS VERIFICATION: Specific mission-by-mission strategy needs gameplay testing
export const mechanicusIINecronRows = [
 { step: "Dominion economy", doThis: "Treat Dominion as battle momentum, not a passive meter. Build it by creating damage turns early, then convert that advantage before the enemy stabilizes.", why: "Launch-window guides agree that Necrons reward forward pressure. Exact rank breakpoints should still be checked against your current patch." },
 { step: "Reanimation Protocols", doThis: "Use reanimation as tempo insurance, not permission to feed units. A downed unit may return later, but the board can collapse while it is missing.", why: "The practical lesson is timing: you still need safe positions, target priority, and bodyguard spacing while the unit is unavailable." },
 { step: "Canoptek Wraith bodyguard", doThis: "Keep Wraith-style mobility near Vargard Nefershah or whichever leader your mission cannot afford to lose. Use mobile units to rescue positions, screen angles, and stop surrounds.", why: "Leader exposure is the failure point that turns a winning damage race into a reset." },
 { step: "Terrain pressure", doThis: "Break or bypass enemy cover when it creates cleaner shots next turn. Do not destroy scenery just because a unit can do it.", why: "The useful chain is cover pressure to enemy movement to cleaner damage to faster Dominion." },
 { step: "Mission strategy", doThis: "Open by identifying your leader lane, two repeatable damage lanes, and one fallback position. Push after those are set, not before.", why: "This keeps the aggressive identity without pretending every map is solved by charging forward." },
];

export const mechanicusIIUnitTierRows = [
 { step: "S role: Necron Warriors", doThis: "Core infantry for early Necron consistency. Use them to create repeatable damage turns and keep Dominion moving.", why: "They are valuable because they keep the faction engine active. Do not replace all core bodies with flashy specialists." },
 { step: "S role: Skitarii Rangers", doThis: "Reliable backline pressure for Adeptus Mechanicus. Keep lanes clear and protect them from greedy exposure.", why: "Ranged stability is more important than one large hit while you are learning mission rules." },
 { step: "A role: Canoptek Wraiths", doThis: "Mobile protection and angle correction. Keep them close enough to cover leader mistakes before the enemy punishes them.", why: "Mobility is strongest when it prevents a failed objective, not when it chases damage alone." },
 { step: "A role: Servitors", doThis: "Disposable pressure and Cognition support. Use them to absorb enemy attention while important units stay productive.", why: "New players undervalue economy pieces because the damage number is not exciting." },
 { step: "A role: Immortals", doThis: "Higher-threat Necron damage piece. Mix them with Warriors instead of turning the squad into only expensive attackers.", why: "A roster still needs bodies that can take space and keep momentum going." },
 { step: "B role: Tech-Priests", doThis: "Force multipliers and mission anchors. Keep them protected, then build around the role you actually use most.", why: "They can decide a mission, but losing one through exposure is often worse than missing a damage window." },
 { step: "B role: Enginseer", doThis: "Repair and support stabilizer. Add one when repeated losses come from attrition instead of objective confusion.", why: "Support is not glamorous, but it prevents cascade failures in longer fights." },
];

export const mechanicusIIWorthRows = [
 ['Buy now if', 'You want a new Warhammer 40K turn-based tactics game, like dual campaigns, and are comfortable with early Mixed Steam reviews.'],
 ['Try more research first if', 'You need broad player consensus, deep performance reports, Steam Deck support, or proof that the campaign balance works across both factions.'],
 ['Best fit', 'Players who like tactical positioning, faction asymmetry, campaign layers, and Warhammer 40K lore.'],
 ['Poor fit', 'Players looking for real-time action, co-op, PvP, or a fully solved best-build meta on launch week.'],
 ['Steam Deck note', 'The game is listed as unsupported on Steam Deck at launch, so handheld-first buyers should wait for clearer reports or compatibility changes.'],
 ['Console note', 'PS5 and Xbox Series X|S versions are part of the launch platform set, but console-specific performance should still be checked by platform.'],
];

export const mechanicusIIReviewConcernRows = [
 ['Performance settings', 'Check the performance page if your PC is near minimum specs, you use handheld, or you are sensitive to frame pacing.'],
 ['Comparison with Mechanicus 1', 'The sequel has clearer leaders, dual campaigns, and new presentation, but not every returning player wants those changes.'],
 ['Customization depth', 'If cohort customization was your favorite part of the first game, read reviews carefully before buying.'],
 ['Mission structure', 'Expect story-driven tactical missions and campaign choices rather than a fully open, endlessly random strategy layer.'],
 ['Build certainty', 'Wait if you need solved best units, final tier lists, and proven late-campaign balance.'],
];

export const mechanicusIISteamDeckRows = [
 ['Current Deck status', 'Unsupported at launch based on official FAQ language and Steam Deck compatibility data.'],
 ['Can it still open?', 'Unsupported does not always mean impossible to launch, but it does mean the game is not a recommended Deck purchase without fresh player reports.'],
 ['Likely friction points', 'Graphics-setting fit, UI scale, controller button labels, text readability, and tactical camera comfort should be checked before a Deck-first purchase.'],
 ['Best buyer action', 'Use a desktop PC or console if you want the most straightforward launch-week experience; wait if Steam Deck is your main platform.'],
 ['Do not rely on', 'Unverified best settings, isolated early clips, or one mission running well as proof that the full campaign is comfortable on Deck.'],
];

export const mechanicusIIPerformanceCheckRows = [
 ['Before buying on PC', 'Compare your CPU, GPU, RAM, DirectX 12 support, and 25 GB storage against the official Steam requirements.'],
 ['First 30 minutes', 'Check menu responsiveness, text readability, battle camera movement, shader or asset stutter, and load times before refund windows become tight.'],
 ['During tactical battles', 'Watch frame pacing when cover breaks, enemies cluster, environmental hazards trigger, or large effects fire.'],
 ['Campaign layer', 'Check whether late-map navigation, territory screens, and resource menus remain readable and responsive.'],
 ['Cloud saves', 'Steam lists Steam Cloud, but players should still confirm saves sync correctly before switching machines.'],
 ['Controller use', 'Steam lists Xbox controller support, yet Deck users should specifically check button labels and menu navigation comfort.'],
];

export const mechanicusIIPerformanceTriageRows = [
 ['Outdoor battles or heavy effects feel slow', 'Lower shadows, effects, fog or volumetric-style settings first, then retest the same turn.'],
 ['Camera or UI feels uncomfortable', 'Reduce visual clutter, check resolution scaling, and avoid committing to a long campaign until tactical menus remain readable.'],
 ['Controller labels feel wrong', 'Test keyboard/mouse and controller before QTE-free assumptions; tactics games still need fast menu confidence.'],
 ['Laptop heat or fan spikes', 'Cap FPS, lower effects, and test on AC power before judging long-session comfort.'],
 ['Cloud save uncertainty', 'Confirm Steam Cloud sync on a short test save before switching machines.'],
];

export const mechanicusIIEditionRows = [
 ['Standard Edition', 'Base game on supported storefronts. Use this if you only want the campaigns and core tactical game.'],
 ['Omnissiah Edition', 'Official FAQ describes the base game plus a digital artbook, complete original soundtrack, and in-game legacy soundtrack.'],
 ['Upgrade DLC', 'Official FAQ says owners of the Standard Edition can upgrade to Omnissiah Edition content through DLC.'],
 ['Best choice', 'Choose Standard if you only care about gameplay; choose Omnissiah Edition if artbook and soundtrack content matter to you.'],
];

export const mechanicusIISourceRows = [
 {
 claim: 'When did Warhammer 40,000: Mechanicus II release, and what does Steam list?',
 source: 'Steam store',
 status: 'verified' as const,
 href: mechanicusIISteamUrl,
 note: 'Use Steam for release date, PC requirements, Steam features, languages, achievements, review signal, price, and discount timing.',
 },
 {
 claim: 'Who developed and published the game, and where does the publisher link players?',
 source: 'Kasedo Games official page',
 status: 'verified' as const,
 href: mechanicusIIOfficialUrl,
 note: 'Use the publisher page for official product positioning, screenshots, languages, and storefront links.',
 },
 {
 claim: 'Is there an Epic Games Store page?',
 source: 'Epic Games Store',
 status: 'needs-check' as const,
 href: mechanicusIIEpicUrl,
 note: 'Epic has a product page, but regional store state can change. Check the current page directly before treating it as the best PC purchase route.',
 },
 {
 claim: 'Is Mechanicus II on Xbox Series X|S?',
 source: 'Xbox store',
 status: 'verified' as const,
 href: mechanicusIIXboxUrl,
 note: 'Use the Xbox store for Xbox price, sale timing, release date, capabilities, and cloud-save labels.',
 },
 {
 claim: 'Is Mechanicus II on PS5?',
 source: 'PlayStation Store',
 status: 'verified' as const,
 href: mechanicusIIPlayStationUrl,
 note: 'Use the PlayStation Store for PS5 price, ratings, accessibility notes, release date, and language support.',
 },
 {
 claim: 'Are both Adeptus Mechanicus and Necrons playable?',
 source: 'Steam store',
 status: 'verified' as const,
 href: mechanicusIISteamUrl,
 note: 'Steam describes distinct campaigns and faction-specific tactical capabilities.',
 },
 {
 claim: 'Is Mechanicus II supported on Steam Deck at launch?',
 source: 'Steam Community FAQ',
 status: 'verified' as const,
 href: 'https://steamcommunity.com/app/2532480/discussions/0/695376132937213076/',
 note: 'The official FAQ says Steam Deck is unsupported at launch and explains the compatibility concern.',
 },
 {
 claim: 'Are the Leagues of Votann playable?',
 source: 'Epic Games Store preview',
 status: 'working' as const,
 href: 'https://store.epicgames.com/en-US/blog/warhammer-40000-mechanicus-2-preview-leagues-of-votann',
 note: 'Preview coverage says the Leagues of Votann appear in the story, but current store descriptions focus playable campaigns on Adeptus Mechanicus and Necrons.',
 },
 {
 claim: 'What are players struggling with after launch?',
 source: 'Reddit community discussions',
 status: 'working' as const,
 href: 'https://www.reddit.com/search/?q=Warhammer%2040%2C000%3A%20Mechanicus%20II%20performance%20units%20builds',
 note: 'Use community posts for demand patterns such as performance, mission objectives, units, replayability, and sequel comparisons, not as final canon.',
 },
 {
 claim: 'What does official video footage confirm?',
 source: 'Official launch trailer on YouTube',
 status: 'verified' as const,
 href: 'https://www.youtube.com/watch?v=jYyGB6wFFxE',
 note: 'Use trailer footage for tone, factions, and presentation, not for final unit tier lists or full mission routes.',
 },
];

// Factions page depth exports
export const m2FactionsActionRows = [
  {
    step: '1. Read the campaign fantasy before the meta',
    doThis: 'Pick Adeptus Mechanicus for tech-priest Cognition decisions or Necrons for Dominion-based pressure plays. Stay with the side for at least several missions before judging the campaign.',
    why: 'Both factions have distinct resource systems. Learning one side first prevents shallow first impressions and makes later faction comparisons more useful.',
  },
  {
    step: '2. Judge units by role, not damage screenshots',
    doThis: 'Evaluate each unit by leader safety, objective interaction, resource contribution, durability, and repeatable mission value before chasing tier-list rankings.',
    why: 'Tier claims depend on patch version, difficulty, and campaign side. Role-based evaluation survives balance updates better than single-number rankings.',
  },
  {
    step: '3. Track Leagues of Votann as story, not campaign',
    doThis: 'If preview coverage mentions Votann, treat them as mission context and battlefield flavor. Do not plan a save around a third playable campaign.',
    why: 'Current store copy presents only Adeptus Mechanicus and Necrons as playable campaigns. Votann lore matters, but it does not change the first-campaign choice.',
  },
  {
    step: '4. Lock in a leader protection habit early',
    doThis: 'Keep Magos Dominus Faustinius or Vargard Nefershah behind cover, away from open lanes, and supported by mobile units. Spend faction resources defensively when leader exposure is real.',
    why: 'Leader loss is the most common campaign-failure pattern. Defensive resource spending is cheaper than restarting a late-campaign mission.',
  },
  {
    step: '5. Test Space Marine allies as support, not as army',
    doThis: 'Use Space Marine allies shown in preview coverage for specific tactical moments. Do not build a save expecting them to replace a primary roster.',
    why: 'Ally appearances in battle context are not the same as a playable roster. Treat them as situational reinforcements, not as a third army identity.',
  },
] as const;

export const m2FactionsStatusItems = [
  { label: 'Playable campaigns', value: 'Adeptus Mechanicus and Necrons each have a distinct campaign per Steam store copy.', status: 'verified' as const },
  { label: 'Adeptus leader', value: 'Steam names Magos Dominus Faustinius as the Adeptus Mechanicus commander.', status: 'verified' as const },
  { label: 'Necron leader', value: 'Steam names Vargard Nefershah as the Necron campaign commander.', status: 'verified' as const },
  { label: 'Leagues of Votann', value: 'Preview coverage says Votann appear in the story, not as a third playable campaign.', status: 'needs-check' as const },
  { label: 'Best-faction call', value: 'Pick by resource loop and leader style; exact strength depends on patch version, difficulty, and campaign side.', status: 'needs-check' as const },
  { label: 'Space Marine allies', value: 'Show up in battle context per previews. Do not treat as a third army.', status: 'needs-check' as const },
];

export const m2FactionsSourceRows = [
  {
    claim: 'Both Adeptus Mechanicus and Necrons are playable with distinct campaigns',
    source: 'Steam store page',
    status: 'verified' as const,
    href: mechanicusIISteamUrl,
    note: 'Use for the dual-campaign framing, leaders, and faction resource systems.',
  },
  {
    claim: 'Magos Dominus Faustinius and Vargard Nefershah are named campaign leaders',
    source: 'Steam store page',
    status: 'verified' as const,
    href: mechanicusIISteamUrl,
    note: 'Use for the central commander identity on each campaign side.',
  },
  {
    claim: 'Leagues of Votann appear in the story, not as a playable third campaign',
    source: 'Epic Games Store preview',
    status: 'needs-check' as const,
    href: 'https://store.epicgames.com/en-US/blog/warhammer-40000-mechanicus-2-preview-leagues-of-votann',
    note: 'Use as story and lore context, not as a campaign choice.',
  },
  {
    claim: 'Player reports on faction balance and best units',
    source: 'Reddit community discussions',
    status: 'needs-check' as const,
    href: 'https://www.reddit.com/search/?q=Warhammer%2040%2C000%3A%20Mechanicus%20II%20factions%20best',
    note: 'Treat community tier chatter as patch-dependent, not as final canon.',
  },
  {
    claim: 'Campaign tone, faction visuals, and presentation',
    source: 'Official launch trailer on YouTube',
    status: 'verified' as const,
    href: 'https://www.youtube.com/watch?v=jYyGB6wFFxE',
    note: 'Use for tone and presentation context, not for tier conclusions.',
  },
];

export const m2FactionsSearchIntent = [
  {
    query: 'Mechanicus 2 factions',
    answer: 'Steam lists two playable campaigns: Adeptus Mechanicus and Necrons. Choose by campaign fantasy and resource identity, not by tier chatter.',
    href: '#faction-anchor',
    label: 'Factions',
  },
  {
    query: 'Mechanicus 2 best faction',
    answer: 'Pick the side whose resource loop sounds more interesting and learn its economy before judging strength.',
    href: '#faction-anchor',
    label: 'Best faction',
  },
  {
    query: 'Mechanicus 2 Leagues of Votann playable',
    answer: 'Preview coverage says Votann appear in the story. They are not presented as a third playable campaign faction in current store copy.',
    href: '#faction-anchor',
    label: 'Votann',
  },
  {
    query: 'Mechanicus 2 Necron campaign',
    answer: 'Necrons follow Vargard Nefershah. The campaign emphasizes Dominion pressure and Reanimation Protocols rather than Cognition decisions.',
    href: '#faction-anchor',
    label: 'Necron',
  },
];

export const m2FactionsJumpLinks = [
  { href: '#faction-anchor', label: 'Faction anchor' },
  { href: '#votann-status', label: 'Votann status' },
  { href: '/games/mechanicus-ii/leaders-guide', label: 'Leaders guide' },
  { href: '/games/mechanicus-ii/best-units-builds', label: 'Units and builds' },
  { href: '/games/mechanicus-ii/beginner-guide', label: 'Beginner guide' },
];

// Is-it-worth-it page depth exports
export const m2WorthItActionRows = [
  {
    step: '1. Decide whether Mixed reviews are a blocker',
    doThis: 'Read recent Steam review text first. Decide whether performance, balance, UI clarity, or sequel-comparison complaints match what would actually stop you from enjoying the game.',
    why: 'Mixed is a caution signal, not a verdict. Most launch-week complaints cluster around familiar strategy-game risks, not always the same one.',
  },
  {
    step: '2. Confirm your platform path before buying',
    doThis: 'PC buyers should check the Steam specs, achievements, cloud saves, and discount window. Console buyers should check PS5 and Xbox store pages for current performance reports.',
    why: 'Each platform has a different launch path. PC has the most visible data; console buyers should not assume parity without checking.',
  },
  {
    step: '3. Test Steam Deck expectations early',
    doThis: 'Do not buy on Steam Deck as a primary platform. The official Steam FAQ and Steam Deck compatibility data list Mechanicus II as unsupported at launch.',
    why: 'Unsupported status is not a recommendation. Handheld-first buyers should wait for clearer compatibility updates or broad player reports.',
  },
  {
    step: '4. Match the sequel hook to your taste',
    doThis: 'Buy now if the dual-campaign structure with defined Adeptus Mechanicus and Necron leaders is the main appeal. Wait if you need solved late-campaign routes or a finished best-build meta.',
    why: 'The strongest new hook is dual campaigns and leader identity. The weakest part of launch is final best-unit confidence and broad balance data.',
  },
  {
    step: '5. Use the refund window as a real test',
    doThis: 'Treat the first mission as a refund-window test. Watch battle camera movement, menu readability, leader protection, and cover discipline before settling in.',
    why: 'A turn-based tactics game can feel fine in a tutorial and rough in late-campaign fights. The first session should test the most painful mechanics, not only the easiest one.',
  },
] as const;

export const m2WorthItStatusItems = [
  { label: 'Steam user reviews', value: 'Mixed at the latest check. Read recent review text for performance, balance, and sequel-comparison concerns.', status: 'needs-check' as const },
  { label: 'Steam Deck', value: 'Unsupported at launch per official FAQ and Steam Deck compatibility data.', status: 'verified' as const },
  { label: 'Steam base price', value: '$39.99 US base price at the latest check.', status: 'verified' as const },
  { label: 'Launch discount', value: '10% introductory offer listed on Steam, ending May 28, 2026.', status: 'verified' as const },
  { label: 'Console versions', value: 'PS5 and Xbox Series X|S are part of the launch platform set.', status: 'verified' as const },
  { label: 'Best fit', value: 'Players who like turn-based Warhammer tactics and dual-campaign identity.', status: 'working' as const },
];

export const m2WorthItSourceRows = [
  {
    claim: 'Mixed Steam user reviews at the latest check',
    source: 'Steam store page',
    status: 'needs-check' as const,
    href: mechanicusIISteamUrl,
    note: 'Treat the label as a launch signal only. Read recent text for what the complaints actually are.',
  },
  {
    claim: 'Steam Deck listed as unsupported at launch',
    source: 'Steam Community FAQ',
    status: 'verified' as const,
    href: 'https://steamcommunity.com/app/2532480/discussions/0/695376132937213076/',
    note: 'Use as the safest Deck expectation for launch week.',
  },
  {
    claim: 'Base price and introductory discount timing',
    source: 'Steam store page',
    status: 'verified' as const,
    href: mechanicusIISteamUrl,
    note: 'Use for the $39.99 base price and the 10% discount window.',
  },
  {
    claim: 'Console launch platform set',
    source: 'Kasedo Games official site',
    status: 'verified' as const,
    href: mechanicusIIOfficialUrl,
    note: 'Use for official product positioning across PS5, Xbox, and PC.',
  },
  {
    claim: 'Player concerns about sequel identity and balance',
    source: 'Reddit community discussions',
    status: 'working' as const,
    href: 'https://www.reddit.com/search/?q=Warhammer%2040%2C000%3A%20Mechanicus%20II%20worth%20it',
    note: 'Use for themes of complaints, not for final balance verdicts.',
  },
];

export const m2WorthItSearchIntent = [
  {
    query: 'Is Mechanicus 2 worth it',
    answer: 'Worth considering if you want a new Warhammer 40K turn-based tactics game with dual campaigns. Wait if Steam Deck, broad review consensus, or solved late-campaign balance matters to you.',
    href: '#worthit-anchor',
    label: 'Worth it',
  },
  {
    query: 'Mechanicus 2 Steam Deck',
    answer: 'The official Steam FAQ and Steam Deck compatibility data list it as unsupported at launch. Handheld-first buyers should wait.',
    href: '#worthit-anchor',
    label: 'Steam Deck',
  },
  {
    query: 'Mechanicus 2 Mixed reviews',
    answer: 'Steam currently shows Mixed user reviews. Read recent review text for performance, UI, balance, and sequel-comparison concerns before deciding.',
    href: '#worthit-anchor',
    label: 'Reviews',
  },
  {
    query: 'Mechanicus 2 launch discount',
    answer: 'Steam lists a 10% introductory offer ending May 28, 2026. Base price is $39.99 US at the latest check.',
    href: '#worthit-anchor',
    label: 'Discount',
  },
];

export const m2WorthItJumpLinks = [
  { href: '#worthit-anchor', label: 'Buy or wait anchor' },
  { href: '/games/mechanicus-ii/system-requirements', label: 'PC requirements' },
  { href: '/games/mechanicus-ii/steam-deck-performance', label: 'Steam Deck status' },
  { href: '/games/mechanicus-ii/factions', label: 'Faction choice' },
  { href: '/games/mechanicus-ii/beginner-guide', label: 'Beginner guide' },
];

// Steam Deck performance page depth exports
export const m2SteamDeckActionRows = [
  {
    step: '1. Do not buy on Steam Deck as a primary platform',
    doThis: 'Treat Steam Deck as a non-target until Valve or the developer changes the compatibility label. The official Steam FAQ and Steam Deck compatibility data list Mechanicus II as unsupported at launch.',
    why: 'Unsupported is not a personal review. It is the safest signal that handheld-first buyers should not rely on Deck as their main device for the campaign.',
  },
  {
    step: '2. Test readability before committing on PC',
    doThis: 'On PC, check text size, battle camera movement, menu legibility, and the clarity of cover, terrain, and objective markers in the first mission before settling into a long campaign.',
    why: 'Turn-based tactics depends on readable UI and predictable camera movement. The official minimum spec proves the game runs, not that it stays comfortable for hours.',
  },
  {
    step: '3. Run the refund-window first session on real hardware',
    doThis: 'Use the first 30 minutes on the actual machine you plan to play on. Watch for shader stutter, asset load delays, frame pacing during effects-heavy fights, and late-map navigation responsiveness.',
    why: 'A tutorial mission is not a real test. Effects-heavy fights and late-campaign turns expose the same problems that refund windows can no longer help.',
  },
  {
    step: '4. Check controller and Steam Cloud behavior',
    doThis: 'Test Xbox controller button labels, in-game menu navigation, Steam Cloud save sync, and account-region differences before assuming your usual setup will work the same on the second device.',
    why: 'Steam lists Xbox controller support and Steam Cloud, but those labels do not prove label clarity, save reliability, or region parity. Test on the real device, not on the assumption that the feature exists.',
  },
  {
    step: '5. Plan for late-campaign slowdown, not only first mission',
    doThis: 'If your hardware is near the minimum tier, plan a Campaign save that you can pause, restart, and observe. Watch for menu responsiveness, faction-resource screen lag, and battle camera comfort in longer fights.',
    why: 'Tactics games often feel fine in the tutorial and degrade as battles, effects, and UI states get busier. Treat first-session performance as a baseline, not as a promise.',
  },
] as const;

export const m2SteamDeckStatusItems = [
  { label: 'Steam Deck status', value: 'Unsupported at launch per official Steam FAQ and Steam Deck compatibility data.', status: 'verified' as const },
  { label: 'Official minimum PC', value: 'Windows 10 64-bit, GTX 1660 6GB / RX 5600 XT 6GB, 12 GB RAM, DirectX 12, 25 GB storage.', status: 'verified' as const },
  { label: 'Official recommended PC', value: 'Windows 10 64-bit, RTX 2070 8GB / RX 6600 XT 8GB, 16 GB RAM, DirectX 12, 25 GB storage.', status: 'verified' as const },
  { label: 'Controller support', value: 'Steam lists Xbox controller support. Handheld players should still check labels and menu comfort.', status: 'needs-check' as const },
  { label: 'Steam Cloud', value: 'Listed on the Steam store. Confirm save sync works on your real device before swapping machines.', status: 'working' as const },
  { label: 'First-session comfort', value: 'Depends on hardware tier, late-campaign fights, and personal sensitivity to camera and UI.', status: 'needs-check' as const },
];

export const m2SteamDeckSourceRows = [
  {
    claim: 'Steam Deck listed as unsupported at launch',
    source: 'Steam Community FAQ',
    status: 'verified' as const,
    href: 'https://steamcommunity.com/app/2532480/discussions/0/695376132937213076/',
    note: 'Use as the launch-week Deck expectation.',
  },
  {
    claim: 'Official minimum and recommended PC requirements',
    source: 'Steam store page',
    status: 'verified' as const,
    href: mechanicusIISteamUrl,
    note: 'Use for CPU, GPU, RAM, DirectX 12, and storage.',
  },
  {
    claim: 'Xbox controller and Steam Cloud feature labels',
    source: 'Steam store page',
    status: 'verified' as const,
    href: mechanicusIISteamUrl,
    note: 'Use for the feature inventory, then test on the real device.',
  },
  {
    claim: 'Late-campaign performance reports from players',
    source: 'Reddit community discussions',
    status: 'working' as const,
    href: 'https://www.reddit.com/search/?q=Warhammer%2040%2C000%3A%20Mechanicus%20II%20performance',
    note: 'Use to confirm launch-week stutter and frame pacing patterns.',
  },
  {
    claim: 'Official presentation and battle visuals',
    source: 'Official launch trailer on YouTube',
    status: 'verified' as const,
    href: 'https://www.youtube.com/watch?v=jYyGB6wFFxE',
    note: 'Use for visual context, not for performance claims.',
  },
];

export const m2SteamDeckSearchIntent = [
  {
    query: 'Mechanicus 2 Steam Deck',
    answer: 'Unsupported at launch per the official Steam FAQ and Steam Deck compatibility data. Handheld-first buyers should wait for clearer reports or a label change.',
    href: '#steamdeck-anchor',
    label: 'Steam Deck',
  },
  {
    query: 'Mechanicus 2 PC requirements',
    answer: 'Minimum is GTX 1660 6GB / RX 5600 XT 6GB with 12 GB RAM. Recommended is RTX 2070 8GB / RX 6600 XT 8GB with 16 GB RAM. Both list DirectX 12 and 25 GB storage.',
    href: '#steamdeck-anchor',
    label: 'PC specs',
  },
  {
    query: 'Mechanicus 2 controller support',
    answer: 'Steam lists Xbox controller support. Handheld players should still test button labels and menu navigation before committing to a long campaign.',
    href: '#steamdeck-anchor',
    label: 'Controller',
  },
  {
    query: 'Mechanicus 2 first session test',
    answer: 'Use the refund window to test text size, battle camera, load times, and frame pacing during effects-heavy fights before settling in.',
    href: '#steamdeck-anchor',
    label: 'First session',
  },
];

export const m2SteamDeckJumpLinks = [
  { href: '#steamdeck-anchor', label: 'Steam Deck anchor' },
  { href: '/games/mechanicus-ii/system-requirements', label: 'PC requirements' },
  { href: '/games/mechanicus-ii/is-it-worth-it', label: 'Is it worth it' },
  { href: '/games/mechanicus-ii/factions', label: 'Faction choice' },
  { href: '/games/mechanicus-ii/beginner-guide', label: 'Beginner guide' },
];

// System requirements page depth exports
export const m2SpecActionRows = [
  {
    step: '1. Compare your hardware to the official PC tier',
    doThis: 'Match your CPU, GPU, RAM, DirectX 12 support, and 25 GB free storage against the Steam minimum and recommended tiers before buying on PC.',
    why: 'Official specs are the official floor. Anything below minimum is not covered by the published requirements, and minimum-tier hardware is not covered by the recommended promises.',
  },
  {
    step: '2. Plan a refund-window first mission',
    doThis: 'Use the first 30 minutes to check battle camera movement, shader or asset stutter, menu responsiveness, load times, and ultrawide UI behavior before assuming the full campaign will feel the same.',
    why: 'A tutorial mission hides the most painful problems. Effects-heavy tactical fights, environmental hazards, and late-map navigation expose the same issues that refund windows can no longer help.',
  },
  {
    step: '3. Check storage and shader compilation paths',
    doThis: 'Confirm you have at least 25 GB free on the target drive. Expect shader compilation stutter on the first long session even on recommended hardware.',
    why: 'Shader pre-compile behavior is platform-dependent. A small amount of launch-week stutter is not a sign of failure, but repeated hitches after the first session can be.',
  },
  {
    step: '4. Read laptop thermals and ultrawide caveats',
    doThis: 'Laptop buyers should cap framerate, test on AC power, and watch fan and thermal behavior. Ultrawide owners should verify UI scaling, safe-area text, and the campaign map layout.',
    why: 'A tactics game depends on readable UI, not just on average framerate. Thermal throttling and ultrawide UI bugs both feel like game problems until they are isolated to the device.',
  },
  {
    step: '5. Plan for late-campaign comfort, not only launch',
    doThis: 'Avoid judging performance by the first mission alone. Watch for late-map menu lag, faction-resource screen responsiveness, and battle camera comfort in longer fights before settling in.',
    why: 'Late-campaign state is busier than early missions. Treat the first session as a baseline, and check the most painful moments before assuming the full campaign will feel the same.',
  },
] as const;

export const m2SpecStatusItems = [
  { label: 'OS', value: 'Windows 10 64-bit on both minimum and recommended tiers.', status: 'verified' as const },
  { label: 'Processor', value: 'Intel Core i7-7700 / Ryzen 5 1600 minimum; Intel Core i5-9600K / Ryzen 5 3600 recommended.', status: 'verified' as const },
  { label: 'Memory', value: '12 GB RAM minimum; 16 GB RAM recommended.', status: 'verified' as const },
  { label: 'Graphics', value: 'GTX 1660 6GB / RX 5600 XT 6GB minimum; RTX 2070 8GB / RX 6600 XT 8GB recommended.', status: 'verified' as const },
  { label: 'DirectX', value: 'Version 12 required for both minimum and recommended.', status: 'verified' as const },
  { label: 'Storage', value: '25 GB available space on both tiers.', status: 'verified' as const },
];

export const m2SpecSourceRows = [
  {
    claim: 'Official minimum and recommended PC requirements',
    source: 'Steam store page',
    status: 'verified' as const,
    href: mechanicusIISteamUrl,
    note: 'Use for OS, CPU, GPU, RAM, DirectX, and storage tiers.',
  },
  {
    claim: 'DirectX 12 requirement on both tiers',
    source: 'Steam store page',
    status: 'verified' as const,
    href: mechanicusIISteamUrl,
    note: 'Use to confirm the DirectX 12 line for the minimum tier.',
  },
  {
    claim: 'Real-world performance reports for similar hardware',
    source: 'Reddit community discussions',
    status: 'needs-check' as const,
    href: 'https://www.reddit.com/search/?q=Warhammer%2040%2C000%3A%20Mechanicus%20II%20performance%20spec',
    note: 'Use to judge near-minimum hardware, shader stutter, and ultrawide behavior.',
  },
  {
    claim: 'Game visuals and battle presentation',
    source: 'Official launch trailer on YouTube',
    status: 'verified' as const,
    href: 'https://www.youtube.com/watch?v=jYyGB6wFFxE',
    note: 'Use for visual context, not for performance guarantees.',
  },
  {
    claim: 'Steam Deck status vs PC tier',
    source: 'Steam Community FAQ',
    status: 'verified' as const,
    href: 'https://steamcommunity.com/app/2532480/discussions/0/695376132937213076/',
    note: 'Use to compare handheld expectations against the PC spec tier.',
  },
];

export const m2SpecSearchIntent = [
  {
    query: 'Mechanicus 2 system requirements',
    answer: 'Minimum is i7-7700 / Ryzen 5 1600, GTX 1660 6GB / RX 5600 XT 6GB, 12 GB RAM, DirectX 12, 25 GB storage. Recommended moves to i5-9600K / Ryzen 5 3600, RTX 2070 8GB / RX 6600 XT 8GB, 16 GB RAM.',
    href: '#spec-anchor',
    label: 'PC specs',
  },
  {
    query: 'Mechanicus 2 DirectX 12',
    answer: 'Yes. Both minimum and recommended tiers list DirectX 12 as the graphics API.',
    href: '#spec-anchor',
    label: 'DirectX 12',
  },
  {
    query: 'Mechanicus 2 storage size',
    answer: 'Steam lists 25 GB of available storage on both tiers.',
    href: '#spec-anchor',
    label: 'Storage',
  },
  {
    query: 'Mechanicus 2 RAM requirement',
    answer: '12 GB minimum and 16 GB recommended per the official Steam listing.',
    href: '#spec-anchor',
    label: 'RAM',
  },
];

export const m2SpecJumpLinks = [
  { href: '#spec-anchor', label: 'Spec anchor' },
  { href: '/games/mechanicus-ii/steam-deck-performance', label: 'Steam Deck status' },
  { href: '/games/mechanicus-ii/is-it-worth-it', label: 'Is it worth it' },
  { href: '/games/mechanicus-ii/beginner-guide', label: 'Beginner guide' },
];

// Walkthrough page depth exports
export const m2WalkthroughActionRows = [
  {
    step: '1. Read the objective, then check the tiles',
    doThis: 'When a mission appears stuck, re-read the objective text first, then move a suitable unit close to any green console, highlighted tile, or marker before assuming the mission is bugged.',
    why: 'Most early mission problems come from missing the interaction range or sending the wrong unit. A quick re-read and a movement check solves the majority of stuck-mission cases.',
  },
  {
    step: '2. Protect the named leader as a fail condition',
    doThis: 'Treat Magos Dominus Faustinius or Vargard Nefershah as mission-critical until the mission proves otherwise. Keep them behind cover and away from open lanes.',
    why: 'Leader loss is the most common campaign-failure pattern. Spending faction resources defensively is usually cheaper than restarting a late-campaign mission.',
  },
  {
    step: '3. Watch faction resources before the next enemy turn',
    doThis: 'On the Adeptus side, watch Cognition flow. On the Necron side, watch Dominion pressure. Do not spend both your action economy and your faction resource on the same turn.',
    why: 'Resource spending decisions matter more in the late turns than in the early turns. Running out of either economy makes the next enemy activation much harder to survive.',
  },
  {
    step: '4. Record failures by cause, not by feel',
    doThis: 'After a failed mission, write down whether the loss came from leader exposure, resource spending, turn order, objective misunderstanding, or enemy reinforcements.',
    why: 'Causal notes turn the next attempt into a specific fix. Vague notes lead to repeating the same mistake with a different squad.',
  },
  {
    step: '5. Use spoiler-light routes until more data exists',
    doThis: 'Treat this page as a launch-window campaign flow guide, not as a final mission script. Use role-based unit judgment and objective reading until completed campaign data becomes reliable.',
    why: 'Full mission-by-mission walkthroughs are not safe during launch week. Spoiler-light guidance gives you the read-the-objective habit without pretending the meta is solved.',
  },
] as const;

export const m2WalkthroughStatusItems = [
  { label: 'Walkthrough scope', value: 'Spoiler-light launch guidance for objective reading, leader safety, and progression problems. Not a full mission script.', status: 'verified' as const },
  { label: 'Green console or tile', value: 'Treat as an objective or interaction clue. Move a suitable unit close enough to test interaction range.', status: 'verified' as const },
  { label: 'Leader exposure', value: 'Treat leader safety as a fail condition until the mission proves otherwise. Spend resources defensively when the next activation is dangerous.', status: 'working' as const },
  { label: 'Replayability', value: 'Expect story-driven missions and gated campaign steps rather than a fully random conquest layer.', status: 'needs-check' as const },
  { label: 'Final best-build call', value: 'Not safe during launch week. Use role-based guidance until completed campaign data and patch context are stable.', status: 'needs-check' as const },
  { label: 'Stuck objective check', value: 'Re-read the objective, test interaction range, confirm leader or specialist is alive, and check whether a specific unit is required.', status: 'working' as const },
];

export const m2WalkthroughSourceRows = [
  {
    claim: 'Campaign structure and named leaders',
    source: 'Steam store page',
    status: 'verified' as const,
    href: mechanicusIISteamUrl,
    note: 'Use for the dual-campaign setup, leaders, and faction resource systems.',
  },
  {
    claim: 'Official gameplay and objective logic',
    source: 'Official launch trailer on YouTube',
    status: 'verified' as const,
    href: 'https://www.youtube.com/watch?v=jYyGB6wFFxE',
    note: 'Use for battle pacing, mission flow, and visual context, not for final routes.',
  },
  {
    claim: 'Player reports on stuck objectives and leader safety',
    source: 'Reddit community discussions',
    status: 'working' as const,
    href: 'https://www.reddit.com/search/?q=Warhammer%2040%2C000%3A%20Mechanicus%20II%20walkthrough',
    note: 'Use for common stuck-mission patterns, not as final mission scripts.',
  },
  {
    claim: 'Faction resource and unit system framing',
    source: 'Kasedo Games official site',
    status: 'verified' as const,
    href: mechanicusIIOfficialUrl,
    note: 'Use as the basis for Cognition vs Dominion, leader identity, and tactical context.',
  },
  {
    claim: 'Steam Deck context for handheld players',
    source: 'Steam Community FAQ',
    status: 'verified' as const,
    href: 'https://steamcommunity.com/app/2532480/discussions/0/695376132937213076/',
    note: 'Use to remind handheld players that the game is unsupported at launch.',
  },
];

export const m2WalkthroughSearchIntent = [
  {
    query: 'Mechanicus 2 walkthrough',
    answer: 'A spoiler-light launch walkthrough for objective reading, leader safety, green console checks, and progression problems. Not a final mission script.',
    href: '#walkthrough-anchor',
    label: 'Walkthrough',
  },
  {
    query: 'Mechanicus 2 stuck objective',
    answer: 'Re-read the objective, move a unit near any green console or tile, and check whether a living leader or specialist is required to trigger the next step.',
    href: '#walkthrough-anchor',
    label: 'Stuck objective',
  },
  {
    query: 'Mechanicus 2 green console',
    answer: 'Treat green consoles and highlighted tiles as objective clues. Move a suitable unit close enough to test interaction range before assuming the mission is bugged.',
    href: '#walkthrough-anchor',
    label: 'Green console',
  },
  {
    query: 'Mechanicus 2 replay missions',
    answer: 'Expect story-driven missions and gated campaign steps. Replay rules should be confirmed in your own save rather than assumed from launch copy.',
    href: '#walkthrough-anchor',
    label: 'Replay',
  },
];

export const m2WalkthroughJumpLinks = [
  { href: '#walkthrough-anchor', label: 'Walkthrough anchor' },
  { href: '/games/mechanicus-ii/beginner-guide', label: 'Beginner guide' },
  { href: '/games/mechanicus-ii/factions', label: 'Faction choice' },
  { href: '/games/mechanicus-ii/steam-deck-performance', label: 'Performance' },
  { href: '/games/mechanicus-ii/steam-deck-performance', label: 'Steam Deck status' },
];

export const mechanicusIIRelatedGuides: GameGuideLink[] = [
 {
 title: 'Mechanicus II Guide Hub',
 href: mechanicusII.hubPath,
 description:
 'Start here for release status, platforms, factions, beginner advice, PC specs, and buying guidance.',
 },
 ...mechanicusII.guideLinks,
];

export function getMechanicusIIRelated(excludeHref: string) {
 return mechanicusIIRelatedGuides.filter((guide) => guide.href !== excludeHref).slice(0, 6);
}

const mechanicusIIKeywords = [
 'Warhammer 40,000 Mechanicus II',
 'Mechanicus II guide',
 'Warhammer 40K Mechanicus 2 release date',
 'Mechanicus II beginner guide',
 'Mechanicus II factions',
 'Mechanicus II leaders',
 'Mechanicus II Faustinius',
 'Mechanicus II Nefershah',
 'Mechanicus II system requirements',
 'Mechanicus II Steam Deck',
 'Mechanicus II performance',
 'Mechanicus II worth it',
 'Mechanicus II Necron guide',
 'Mechanicus II Dominion',
 'Mechanicus II unit tier list',
 'Mechanicus II best units',
 'Mechanicus II Canoptek Wraith',
 'Mechanicus II Reanimation Protocols',
];

export function createMechanicusIIMetadata({
 title,
 description,
 canonical,
 image = mechanicusIIImages.hero,
}: {
 title: string;
 description: string;
 canonical: string;
 image?: string;
}): Metadata {
 return {
 title: { absolute: title },
 description,
 keywords: mechanicusIIKeywords,
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
