export interface GameGuideLink {
  title: string;
  href: string;
  description: string;
}

export interface GameSchemaConfig {
  id?: string;
  name: string;
  guidePublisher: string;
  description: string;
  platforms: string[];
  genres: string[];
  developer: string;
  publisher: string;
  releaseDate: string;
  operatingSystem: string;
  url: string;
  availability?: string;
}

export interface GameConfig extends GameSchemaConfig {
  id: string;
  slugPrefix: string;
  hubPath: string;
  heroImage: string;
  guideLinks: GameGuideLink[];
}

export const directive8020: GameConfig = {
  id: 'directive-8020',
  slugPrefix: 'directive-8020',
  hubPath: '/',
  name: 'Directive 8020',
  guidePublisher: 'Directive 8020 Guide Hub',
  description:
    'A cinematic sci-fi survival horror adventure from Supermassive Games. When a colony ship reaches a distant planet, the crew discovers a deadly alien threat that can perfectly mimic its prey.',
  platforms: ['PlayStation 5', 'Xbox Series X|S', 'PC'],
  genres: ['Survival Horror', 'Interactive Drama', 'Adventure'],
  developer: 'Supermassive Games',
  publisher: 'Supermassive Games',
  releaseDate: '2026-05-12',
  operatingSystem: 'Windows, PlayStation 5, Xbox Series X|S',
  url: 'https://store.steampowered.com/app/2255370/Directive_8020/',
  availability: 'https://schema.org/InStock',
  heroImage: '/hero-banner.jpg',
  guideLinks: [
    {
      title: 'Full Walkthrough',
      href: '/directive-8020-walkthrough',
      description: 'All 8 episodes, collectibles, QTEs, stealth, and Story Tree planning.',
    },
    {
      title: 'All Endings',
      href: '/directive-8020-all-endings',
      description: 'Ending routes, Cycle 13 context, best ending priorities, and cleanup.',
    },
    {
      title: 'Trophy Guide',
      href: '/directive-8020-trophy-guide',
      description: 'Achievement cleanup, missable planning, collectibles, and survival routes.',
    },
  ],
};

export const projectMist: GameConfig = {
  id: 'project-mist',
  slugPrefix: 'project-mist',
  hubPath: '/games/project-mist',
  name: 'Project: Mist',
  guidePublisher: 'Enjoy4Game Guides',
  description:
    'An open-world survival horror game from Chicken Launcher with solo play, online co-op, a Gravity Gun, a moving train base, giant creatures, crafting, hunting, and mysterious island facilities.',
  platforms: ['PC'],
  genres: ['Action', 'Adventure', 'Indie', 'Simulation', 'Early Access', 'Survival Horror'],
  developer: 'Chicken Launcher',
  publisher: 'Chicken Launcher',
  releaseDate: '2026-05-19',
  operatingSystem: 'Windows 10/11 64-bit',
  url: 'https://store.steampowered.com/app/2383130/Project_Mist/',
  availability: 'https://schema.org/InStock',
  heroImage: '/games/project-mist/hero.webp',
  guideLinks: [
    {
      title: 'Release Date & Early Access',
      href: '/games/project-mist/release-date',
      description: 'Steam release date, Early Access status, demo, and price notes.',
    },
    {
      title: 'System Requirements',
      href: '/games/project-mist/system-requirements',
      description: 'Official minimum PC specs and what the missing recommended spec means.',
    },
    {
      title: 'Multiplayer & Co-op',
      href: '/games/project-mist/multiplayer-co-op',
      description: 'Online co-op, 1-4 player support, solo play, and what is not confirmed.',
    },
    {
      title: 'Beginner Guide',
      href: '/games/project-mist/beginner-guide',
      description: 'Day-one survival priorities for Gravity Gun, train base, resources, and co-op.',
    },
    {
      title: 'Crashing & Performance Fix',
      href: '/games/project-mist/crashing-fix',
      description: 'Early Access startup crashes, black screen, low FPS, and online troubleshooting.',
    },
    {
      title: 'Lockpick & Chests',
      href: '/games/project-mist/lockpick-chests',
      description: 'How lockpicking works, how to open chests, and what to do if the minigame feels unclear.',
    },
    {
      title: 'Train Door Key',
      href: '/games/project-mist/train-door-key',
      description: 'Train door key route notes, boss-gate checks, and launch-window missing-key troubleshooting.',
    },
    {
      title: 'Demo Saves & Transfer',
      href: '/games/project-mist/save-demo-transfer',
      description: 'Demo save behavior, infinite loading reports, Steam Cloud checks, and safe save handling.',
    },
    {
      title: 'Train Base Building',
      href: '/games/project-mist/building-train-base',
      description: 'Moving train base priorities, storage, defenses, building limits, and what is still being patched.',
    },
    {
      title: 'Is Project: Mist Worth It?',
      href: '/games/project-mist/is-it-worth-it',
      description: 'Launch-window buying advice using price, reviews, Early Access risk, co-op, demo, and content fit.',
    },
  ],
};

export const thickAsThieves: GameConfig = {
  id: 'thick-as-thieves',
  slugPrefix: 'thick-as-thieves',
  hubPath: '/games/thick-as-thieves',
  name: 'Thick As Thieves',
  guidePublisher: 'Enjoy4Game Guides',
  description:
    'A first-person stealth-action heist game from OtherSide Entertainment and Megabit Publishing set in the gaslit city of Kilcairn, playable solo or in online co-op with one partner.',
  platforms: ['PC'],
  genres: ['Action', 'Indie', 'Simulation', 'Stealth', 'Heist'],
  developer: 'OtherSide Entertainment',
  publisher: 'Megabit Publishing',
  releaseDate: '2026-05-20',
  operatingSystem: 'Windows 10 / Windows 11',
  url: 'https://store.steampowered.com/app/3341000/Thick_As_Thieves/',
  availability: 'https://schema.org/PreOrder',
  heroImage: '/games/thick-as-thieves/hero.webp',
  guideLinks: [
    {
      title: 'Release Date & Unlock',
      href: '/games/thick-as-thieves/release-date',
      description: 'May 20, 2026 Steam release status, unlock checks, price notes, platform facts, and launch-day verification.',
    },
    {
      title: 'Solo & Co-op',
      href: '/games/thick-as-thieves/solo-coop',
      description: 'Solo versus two-player online co-op, host checks, session planning, and what is not confirmed.',
    },
    {
      title: 'Beginner Stealth Guide',
      href: '/games/thick-as-thieves/beginner-stealth-guide',
      description: 'First-run stealth habits for route planning, information gathering, clean exits, and partner coordination.',
    },
    {
      title: 'Contracts, Maps & Replayability',
      href: '/games/thick-as-thieves/contracts-maps',
      description: 'Official 2-map, 16-mission, at least 4-hour introductory campaign scope and replay expectations.',
    },
    {
      title: 'System Requirements',
      href: '/games/thick-as-thieves/system-requirements',
      description: 'Official minimum and recommended PC specs, SSD requirement, controller support, and Steam Cloud notes.',
    },
    {
      title: 'Gear & Loadouts',
      href: '/games/thick-as-thieves/gear-loadouts',
      description: 'How to think about stealth gear, first loadouts, progression, and unverified launch details.',
    },
    {
      title: 'Roadmap, Console & Live Service',
      href: '/games/thick-as-thieves/roadmap-console',
      description: 'What official FAQ says about live service status, post-launch content, console plans, and buyer expectations.',
    },
    {
      title: 'Is Thick As Thieves Worth It?',
      href: '/games/thick-as-thieves/is-it-worth-it',
      description: 'Buyer-focused launch advice using price, short campaign scope, co-op, PC focus, PvPvE pivot, and wait-or-buy signals.',
    },
  ],
};
