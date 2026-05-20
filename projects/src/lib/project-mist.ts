import type { Metadata } from 'next';
import { projectMist, type GameGuideLink } from '@/lib/games';

export const projectMistLastModified = '2026-05-20';
export const projectMistSteamUrl = 'https://store.steampowered.com/app/2383130/Project_Mist/';
export const projectMistSteamNewsUrl =
  'https://store.steampowered.com/news/app/2383130/view/654853378125334404';
export const projectMistEarlyAccessLiveNewsUrl =
  'https://store.steampowered.com/news/app/2383130/view/654853378125334404';
export const projectMistReviewsApiUrl =
  'https://store.steampowered.com/appreviews/2383130?json=1&language=all&purchase_type=all&num_per_page=0';
export const projectMistDiscussionsUrl = 'https://steamcommunity.com/app/2383130/discussions/';
export const chickenLauncherUrl = 'https://www.gematsu.com/companies/chicken-launcher';

export const projectMistSnapshotDate = '20 May, 2026';

export const projectMistQuickFacts = [
  ['Release', 'Live in Steam Early Access since 19 May, 2026'],
  ['Developer / Publisher', 'Chicken Launcher'],
  ['Platform', 'PC via Steam'],
  ['Players', 'Single-player, multi-player, co-op, online co-op'],
  ['Co-op size', '1-4 players in Steam page copy'],
  ['Core tools', 'Gravity Gun and moving train base'],
  ['Price snapshot', '$22.49 launch discount in the US store on 20 May, 2026'],
  ['Review snapshot', 'Mixed from 31 Steam reviews on 20 May, 2026'],
];

export const projectMistLaunchSnapshotRows = [
  ['Steam release state', 'Live in Early Access; Steam API reports coming_soon=false.'],
  ['US price snapshot', '$22.49 launch discount from a $24.99 base price on 20 May, 2026.'],
  ['Review snapshot', '31 Steam reviews with a Mixed review summary on 20 May, 2026.'],
  ['Roadmap timing', 'Launch news says a roadmap is planned after roughly 2-3 weeks of feedback.'],
  ['Demo listing', 'Steam app data still references the demo app, but players report demo/save issues in discussions.'],
];

export const projectMistMinimumSpecs = [
  ['OS', 'Windows 10/11 64-bit'],
  ['Processor', '3.2 GHz Dual Core Processor'],
  ['Memory', '8 GB RAM'],
  ['Graphics', 'GTX 750 / Radeon HD 7770'],
  ['DirectX', 'Version 11'],
  ['Storage', '20 GB available space'],
];

export const projectMistDemoRouteRows = [
  ['Wake-up room', 'Take starter supplies from the small chest, save, and read the objective before wandering.'],
  ['Midway Bridge / train', 'Follow map and compass markers to the train; the train is the first major base objective.'],
  ['Mech part', 'The demo route points west to a busted mech part before the gate objective opens cleanly.'],
  ['Greenhouse', 'Enter the greenhouse to look for the train gate key once the earlier part objective is handled.'],
  ['Prometheus Laboratory', 'Expect indoor hazards, crafting stations, upgrade stations, loot rooms, and root-themed enemies.'],
];

export const projectMistDemoLootRows = [
  ['Crafting bench', 'A bench appears inside the facility, so facilities are likely upgrade stops, not just enemy rooms.'],
  ['Distiller / filtered water', 'Water utility appears in the demo route; track it as survival support rather than flavor loot.'],
  ['Frag grenade blueprint', 'Blueprints appear to matter for progression and combat options.'],
  ['Gear upgrades', 'Observed items include better boots, helmets, chest armor, energy shields, and capacity or health upgrades.'],
  ['Crates and side rooms', 'Useful items can appear behind crates or optional side paths, so careful room clearing has value.'],
];

export const projectMistDemoRiskRows = [
  ['Power whale / VH2', 'The intro warns not to provoke it; treat giant creatures as hazards until their role is verified.'],
  ['Acid or corrosive floors', 'The greenhouse route includes traversal hazards that punish careless movement.'],
  ['Low ammo pressure', 'The demo route can leave players short on bullets before major fights, so craft and loot before pushing deeper.'],
  ['Chomper boss', 'A demo hint points to the blood tanks on its back; use that for this fight, not as a rule for every boss.'],
  ['Slow movement feel', 'If movement feels heavy, check stamina, gear, upgrades, input settings, and frame pacing before reinstalling.'],
];

export const projectMistLaunchQuestionRows = [
  ['Lockpick and chests', 'Players are asking how to rotate, raise, and guide the lockpick through chest obstacles.'],
  ['Train door key', 'Players report confusion when the key console does not appear after the early boss route.'],
  ['Demo saves', 'Players are asking whether demo saves transfer and how to handle infinite loading.'],
  ['Building limits', 'Players are asking whether train building includes doors, windows, and expanded structures.'],
  ['Offline access', 'Players are testing whether solo play works without internet once Steam is installed.'],
  ['Price and value', 'Players are comparing the launch price, Mixed reviews, Early Access risk, and content length.'],
];

export const projectMistLockpickRows = [
  ['Rotate the pick', 'Use Space to rotate the lockpick before pushing through the channel.'],
  ['Raise the pick', 'Use the left mouse button to lift the lockpick while moving through the minigame.'],
  ['Avoid obstacles', 'Do not force the pick through blockers; reset your angle and move slowly.'],
  ['Hit gold pins', 'Guide the pick into the gold pins to complete the chest unlock.'],
  ['If it feels broken', 'Back out, re-open the chest, and check input focus before assuming the save is bugged.'],
];

export const projectMistTrainDoorRows = [
  ['Reach the train', 'Follow the compass and map marker after the wake-up room and Midway Bridge objective.'],
  ['Repair objective', 'Get the mech part from the busted mech route before expecting later train progress to open.'],
  ['Greenhouse route', 'Use the greenhouse objective to push toward the access-card and facility segment.'],
  ['Boss gate check', 'Steam discussion replies say the key console should appear after killing the early boss.'],
  ['If the key is missing', 'Reload before the arena, check for missed interactables, then treat it as a possible Early Access bug report.'],
];

export const projectMistSaveRows = [
  ['Demo save transfer', 'Do not assume demo saves safely transfer unless the current Steam news or developer replies confirm it.'],
  ['Infinite loading', 'Players report demo-save loading issues; keep a backup before moving or deleting saves.'],
  ['Steam Cloud', 'Steam lists Steam Cloud, so check cloud sync state before deleting local data.'],
  ['Fresh start test', 'If a save loops forever, test a new Early Access save before reinstalling the whole game.'],
  ['Bug report', 'Use Steam discussions for reproducible save bugs: build version, location, save type, and steps.'],
];

export const projectMistBuildingRows = [
  ['Moving train base', 'Steam describes the base as upgradeable, fortifiable, and always on the move.'],
  ['Storage priority', 'Sort materials first so crafting, ammo, repairs, and co-op roles do not stall.'],
  ['Defense priority', 'Add defenses before pushing deeper into dangerous areas with more creatures and facility pressure.'],
  ['Doors and windows', 'Players are asking about doors/windows; discussion replies indicate these are planned for future patches.'],
  ['Layout decisions', 'Build for fast returns, resource conversion, and safe departures rather than decoration first.'],
];

export const projectMistWorthItRows = [
  ['Best fit', 'Players who want physics survival, co-op, a train base, and strange creatures may get the clearest value.'],
  ['Wait if', 'Wait if you need polished saves, stable performance, complete systems, or confirmed long campaign length.'],
  ['Price check', 'The US store showed $22.49 with a 10% launch discount on 20 May, 2026.'],
  ['Review check', 'Steam reviews were Mixed from 31 reviews on 20 May, 2026, so read recent reviews before buying.'],
  ['Refund safety', 'Use Steam refund rules and test controls, performance, saves, and co-op early.'],
];

export const projectMistRelatedGuides: GameGuideLink[] = [
  {
    title: 'Project: Mist Guide Hub',
    href: projectMist.hubPath,
    description: 'Start here for the Early Access facts, guide map, and first route priorities.',
  },
  ...projectMist.guideLinks,
];

export const projectMistSourceRows = [
  {
    claim: 'Steam lists Project: Mist as live in Early Access with a 19 May, 2026 release date.',
    source: 'Steam store',
    status: 'verified' as const,
    href: projectMistSteamUrl,
    note: 'Confirms release date, Early Access, platform, and store feature status.',
  },
  {
    claim: 'Steam API reported a $22.49 US launch-discount price from a $24.99 base price on 20 May, 2026.',
    source: 'Steam store API',
    status: 'verified' as const,
    href: projectMistSteamUrl,
    note: 'Use only as a dated price snapshot because regional prices and discounts can change.',
  },
  {
    claim: 'Steam reviews API reported 31 reviews with a Mixed summary on 20 May, 2026.',
    source: 'Steam reviews API',
    status: 'verified' as const,
    href: projectMistReviewsApiUrl,
    note: 'Use only as a dated review snapshot because review counts change quickly after launch.',
  },
  {
    claim: 'Steam page copy describes solo play and seamless 1-4 player co-op.',
    source: 'Steam store',
    status: 'verified' as const,
    href: projectMistSteamUrl,
    note: 'Confirms multiplayer and co-op support without implying cross-play.',
  },
  {
    claim: 'Steam lists Windows 10/11 64-bit, 8 GB RAM, GTX 750 / Radeon HD 7770, DirectX 11, and 20 GB storage as minimum specs.',
    source: 'Steam store',
    status: 'verified' as const,
    href: projectMistSteamUrl,
    note: 'Sets the PC requirements baseline until recommended specs appear.',
  },
  {
    claim: 'Steam launch news says Early Access is live and a roadmap is planned after roughly 2-3 weeks of issue fixing and feedback.',
    source: 'Steam Community',
    status: 'verified' as const,
    href: projectMistEarlyAccessLiveNewsUrl,
    note: 'Supports launch-state, roadmap timing, and bug-report guidance.',
  },
  {
    claim: 'Early Access coverage says the full version is expected after roughly six months with more bosses, enemies, skills, items, structures, and systems.',
    source: 'TheSixthAxis',
    status: 'working' as const,
    href: 'https://www.thesixthaxis.com/2026/05/05/project-mist-launches-into-early-access-in-two-weeks/',
    note: 'Secondary coverage; Steam remains the primary source for store facts.',
  },
  {
    claim: 'Reddit discussion around launch frames Project: Mist around Early Access, Gravity Gun, and physics-based survival interest.',
    source: 'Reddit discussion',
    status: 'working' as const,
    href: 'https://www.reddit.com/r/Gameoneer/comments/1th0njw/project_mist_arrives_in_early_access_with_a/',
    note: 'Shows community interest, but comments are not treated as official facts.',
  },
  {
    claim: 'Steam discussions show launch-window player questions about lockpicking, chests, train door keys, demo saves, building, price, offline access, and bugs.',
    source: 'Steam Discussions',
    status: 'working' as const,
    href: projectMistDiscussionsUrl,
    note: 'Use as player-question evidence, not as official confirmation of game behavior.',
  },
  {
    claim: 'YouTube release and gameplay coverage surfaces player interest around demo timing, co-op, Gravity Gun, and train-base systems.',
    source: 'YouTube coverage',
    status: 'working' as const,
    href: 'https://www.youtube.com/watch?v=sNE_ACSlxhs',
    note: 'Helps identify common player questions; factual claims are checked against Steam.',
  },
  {
    claim: 'Reviewed gameplay footage shows a demo route through starter supplies, train repair, a mech part, greenhouse access, facility crafting, and a boss weak-point hint.',
    source: 'ENFANT TERRIBLE gameplay',
    status: 'working' as const,
    href: 'https://www.enfant-terrible.media/',
    note: 'Demo-route context; Early Access patches may change route details.',
  },
  {
    claim: 'Chicken Launcher is listed as the developer and publisher.',
    source: 'Gematsu company page',
    status: 'verified' as const,
    href: chickenLauncherUrl,
    note: 'Supports studio attribution beyond the Steam listing.',
  },
];

export function getProjectMistRelated(excludeHref: string) {
  return projectMistRelatedGuides.filter((guide) => guide.href !== excludeHref).slice(0, 6);
}

export const projectMistImages = {
  hero: '/games/project-mist/hero.webp',
  card: '/games/project-mist/card.webp',
  feature: '/games/project-mist/homepage-feature.webp',
  release: '/games/project-mist/homepage/release-date-platforms-guide.webp',
  demo: '/games/project-mist/homepage/demo-player-count-pricing-guide.webp',
  multiplayer: '/games/project-mist/homepage/multiplayer-coop-guide.webp',
  beginner: '/games/project-mist/homepage/beginner-survival-guide.webp',
  gravityGun: '/games/project-mist/homepage/gravity-gun-guide.webp',
  trainBase: '/games/project-mist/homepage/train-base-building-guide.webp',
  facilities: '/games/project-mist/homepage/map-facilities-guide.webp',
  creatures: '/games/project-mist/homepage/creatures-guide.webp',
  crafting: '/games/project-mist/homepage/crafting-gear-upgrades-guide.webp',
  firstSteps: '/games/project-mist/homepage/first-steps-survival-guide.webp',
  screenshot1: '/games/project-mist/screenshots/project-mist-screenshot-1.webp',
  screenshot2: '/games/project-mist/screenshots/project-mist-screenshot-2.webp',
  screenshot3: '/games/project-mist/screenshots/project-mist-screenshot-3.webp',
  screenshot4: '/games/project-mist/screenshots/project-mist-screenshot-4.webp',
  screenshot5: '/games/project-mist/screenshots/project-mist-screenshot-5.webp',
  screenshot6: '/games/project-mist/screenshots/project-mist-screenshot-6.webp',
  screenshot7: '/games/project-mist/screenshots/project-mist-screenshot-7.webp',
  screenshot8: '/games/project-mist/screenshots/project-mist-screenshot-8.webp',
};

export const projectMistVideos = [
  {
    id: 'sNE_ACSlxhs',
    title: 'Project: Mist Early Access Release Date Trailer',
    caption:
      'Best first watch for release timing, demo context, and the core Early Access pitch.',
  },
  {
    id: 'cyIdyWG1k3c',
    title: 'Project: Mist Gravity Gun, Train Base, and Creatures Preview',
    caption:
      'Useful for understanding the systems players ask about first: Gravity Gun control, mobile base planning, and giant creature pressure.',
  },
  {
    id: 'KY7uwbiopIg',
    title: 'Project: Mist Open-World Survival Gameplay Preview',
    caption:
      'Good for general gameplay context before reading route or troubleshooting advice.',
  },
];

const projectMistKeywords = [
  'Project Mist',
  'Project Mist guide',
  'Project Mist release date',
  'Project Mist system requirements',
  'Project Mist multiplayer',
  'Project Mist co-op',
  'Project Mist beginner guide',
  'Project Mist crashing fix',
  'Project Mist lockpick',
  'Project Mist train door key',
  'Project Mist demo save',
  'Project Mist building',
  'Project Mist worth it',
  'Project Mist Gravity Gun',
  'Project Mist train base',
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
    authors: [{ name: 'Enjoy4Game Guides' }],
    alternates: {
      canonical,
    },
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
