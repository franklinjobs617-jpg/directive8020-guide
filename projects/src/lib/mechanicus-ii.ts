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
  ['Units, factions, and builds', 'Use the factions page for role-based unit guidance and launch-window build rules without pretending the meta is solved.', '/games/mechanicus-ii/factions'],
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
  ['A build guide conflicts with your run', 'Trust repeatable role value over launch-window tier claims until completed campaign data is more stable.'],
];

export const mechanicusIIFactionRows = [
  ['Adeptus Mechanicus', 'Best first fit for players who want tech-priest flavor, battlefield control, and a more methodical Imperial campaign perspective.'],
  ['Necrons', 'Best first fit for players who want ancient machine-legion fantasy, awakening tomb-world pressure, and a campaign from the other side of the war.'],
  ['Leagues of Votann', 'Public preview coverage says the Leagues of Votann appear in the story, but they are not presented as a playable third campaign faction.'],
  ['Resource identity', 'Adeptus Mechanicus players should expect Cognition decisions; Necron players should expect Dominion decisions.'],
  ['Not yet safe to claim', 'Final best units, optimal army compositions, and hardest-mission counters still need hands-on campaign verification.'],
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

export const mechanicusIIWorthRows = [
  ['Buy now if', 'You want a new Warhammer 40K turn-based tactics game, like dual campaigns, and are comfortable with early Mixed Steam reviews.'],
  ['Try more research first if', 'You need broad player consensus, deep performance reports, Steam Deck support, or proof that the campaign balance works across both factions.'],
  ['Best fit', 'Players who like tactical positioning, faction asymmetry, campaign layers, and Warhammer 40K lore.'],
  ['Poor fit', 'Players looking for real-time action, co-op, PvP, or a fully solved best-build meta on launch week.'],
  ['Steam Deck note', 'The game is listed as unsupported on Steam Deck at launch, so handheld-first buyers should wait for clearer reports or compatibility changes.'],
  ['Console note', 'PS5 and Xbox Series X|S versions are part of the launch platform set, but console-specific performance should still be checked by platform.'],
];

export const mechanicusIIReviewConcernRows = [
  ['Performance or optimization', 'Check the performance page if your PC is near minimum specs, you use handheld, or you are sensitive to frame pacing.'],
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
  'Mechanicus II system requirements',
  'Mechanicus II Steam Deck',
  'Mechanicus II performance',
  'Mechanicus II worth it',
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
