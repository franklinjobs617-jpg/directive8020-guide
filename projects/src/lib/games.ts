export interface GameGuideLink {
  title: string;
  href: string;
  description: string;
}

export interface GameSchemaConfig {
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
  availability: 'https://schema.org/PreOrder',
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
  ],
};
