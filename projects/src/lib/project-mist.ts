import { projectMist, type GameGuideLink } from '@/lib/games';

export const projectMistLastModified = '2026-05-19';
export const projectMistSteamUrl = 'https://store.steampowered.com/app/2383130/Project_Mist/';
export const projectMistSteamNewsUrl =
  'https://store.steampowered.com/news/app/2383130/view/654853378125334404';
export const chickenLauncherUrl = 'https://www.gematsu.com/companies/chicken-launcher';

export const projectMistQuickFacts = [
  ['Release', '19 May, 2026 on Steam Early Access'],
  ['Developer / Publisher', 'Chicken Launcher'],
  ['Platform', 'PC via Steam'],
  ['Players', 'Single-player, multi-player, co-op, online co-op'],
  ['Co-op size', '1-4 players in Steam page copy'],
  ['Core tools', 'Gravity Gun and moving train base'],
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
    claim: 'Steam lists Project: Mist with a 19 May, 2026 release date and Early Access status.',
    source: 'Steam store',
    status: 'verified' as const,
    href: projectMistSteamUrl,
    note: 'Use this for release date, Early Access, platform, and store feature status.',
  },
  {
    claim: 'Steam page copy describes solo play and seamless 1-4 player co-op.',
    source: 'Steam store',
    status: 'verified' as const,
    href: projectMistSteamUrl,
    note: 'Use this for multiplayer and co-op coverage without claiming cross-play.',
  },
  {
    claim: 'Steam lists Windows 10/11 64-bit, 8 GB RAM, GTX 750 / Radeon HD 7770, DirectX 11, and 20 GB storage as minimum specs.',
    source: 'Steam store',
    status: 'verified' as const,
    href: projectMistSteamUrl,
    note: 'Use this as the PC requirements baseline until recommended specs appear.',
  },
  {
    claim: 'Steam community launch news highlights a refreshed demo, multiplayer testing, a feedback form, and a large wishlist milestone.',
    source: 'Steam Community',
    status: 'verified' as const,
    href: projectMistSteamNewsUrl,
    note: 'Use this for launch-window demo and community feedback context.',
  },
  {
    claim: 'Early Access coverage says the full version is expected after roughly six months with more bosses, enemies, skills, items, structures, and systems.',
    source: 'TheSixthAxis',
    status: 'working' as const,
    href: 'https://www.thesixthaxis.com/2026/05/05/project-mist-launches-into-early-access-in-two-weeks/',
    note: 'Use as secondary coverage, not as a replacement for Steam facts.',
  },
  {
    claim: 'Reddit discussion around launch frames Project: Mist around Early Access, Gravity Gun, and physics-based survival interest.',
    source: 'Reddit discussion',
    status: 'working' as const,
    href: 'https://www.reddit.com/r/Gameoneer/comments/1th0njw/project_mist_arrives_in_early_access_with_a/',
    note: 'Use as community-demand signal only; do not treat comments as official facts.',
  },
  {
    claim: 'YouTube release and gameplay coverage surfaces player interest around demo timing, co-op, Gravity Gun, and train-base systems.',
    source: 'YouTube coverage',
    status: 'working' as const,
    href: 'https://www.youtube.com/watch?v=sNE_ACSlxhs',
    note: 'Use for video-driven search questions, then verify factual claims against Steam.',
  },
  {
    claim: 'Reviewed gameplay footage shows a demo route through starter supplies, train repair, a mech part, greenhouse access, facility crafting, and a boss weak-point hint.',
    source: 'ENFANT TERRIBLE gameplay',
    status: 'working' as const,
    href: 'https://www.enfant-terrible.media/',
    note: 'Use as hands-on gameplay signal only; rewrite into user guidance and avoid quoting captions.',
  },
  {
    claim: 'Chicken Launcher is listed as the developer and publisher.',
    source: 'Gematsu company page',
    status: 'verified' as const,
    href: chickenLauncherUrl,
    note: 'Use this to support the studio attribution beyond Steam metadata.',
  },
];

export function getProjectMistRelated(excludeHref: string) {
  return projectMistRelatedGuides.filter((guide) => guide.href !== excludeHref).slice(0, 4);
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
