import type { Metadata } from 'next';
import { lunaAbyss, type GameGuideLink } from '@/lib/games';

export const lunaAbyssLastModified = '2026-05-28';
export const lunaAbyssSteamUrl = 'https://store.steampowered.com/app/1933000/Luna_Abyss/';
export const lunaAbyssOfficialUrl = 'https://www.lunaabyss.com/';
export const lunaAbyssXboxUrl =
  'https://www.xbox.com/en-US/games/store/luna-abyss/9PLBH9J0XGR8/0010/9NZHVQ80166M';
export const lunaAbyssMetacriticUrl = 'https://www.metacritic.com/game/luna-abyss/';
export const lunaAbyssSteamDeckHqUrl = 'https://steamdeckhq.com/game-reviews/luna-abyss/';
export const lunaAbyssGamesRadarUrl =
  'https://www.gamesradar.com/games/fps/after-7-years-in-development-an-amazing-single-player-fps-just-hit-steam-and-consoles-we-were-heavily-inspired-by-titles-such-as-nier-automata-metroid-prime-destiny-halo/';
export const lunaAbyssSteamDiscussionsUrl =
  'https://steamcommunity.com/app/1933000/discussions/';

export const lunaAbyssImages = {
  hero: '/games/luna-abyss/hero.jpg',
  header: '/games/luna-abyss/header.jpg',
  screenshot1: '/games/luna-abyss/screenshots/luna-abyss-screenshot-1.jpg',
  screenshot2: '/games/luna-abyss/screenshots/luna-abyss-screenshot-2.jpg',
  screenshot3: '/games/luna-abyss/screenshots/luna-abyss-screenshot-3.jpg',
  screenshot4: '/games/luna-abyss/screenshots/luna-abyss-screenshot-4.jpg',
  screenshot5: '/games/luna-abyss/screenshots/luna-abyss-screenshot-5.jpg',
  screenshot6: '/games/luna-abyss/screenshots/luna-abyss-screenshot-6.jpg',
  screenshot7: '/games/luna-abyss/screenshots/luna-abyss-screenshot-7.jpg',
};

export const lunaAbyssQuickFacts = [
  ['Release date', 'May 21, 2026.'],
  ['Current status', 'Available now on Steam, Xbox, Xbox Cloud, and PlayStation 5 storefronts.'],
  ['Game Pass', 'Xbox Store displays Game Pass availability as of May 28, 2026.'],
  ['Steam reviews', 'Steam review summary returned Very Positive with 368 total reviews as of May 28, 2026.'],
  ['Steam achievements', '45 public Steam achievements are visible on Steam Community as of May 28, 2026.'],
  ['Genre', 'Single-player story-driven action-adventure FPS with platforming and bullet-hell combat.'],
  ['Developer / Publisher', 'Kwalee Labs / Kwalee.'],
  ['PC storage', '15 GB available space on Steam.'],
];

export const lunaAbyssFeatureRows = [
  ['Single-player', 'Confirmed by Steam.'],
  ['Steam Achievements', 'Confirmed by Steam, with 45 public achievement rows visible on Steam Community.'],
  ['Full controller support', 'Confirmed by Steam.'],
  ['Steam Cloud', 'Confirmed by Steam.'],
  ['Adjustable difficulty', 'Confirmed by Steam accessibility categories.'],
  ['Adjustable text size', 'Confirmed by Steam accessibility categories.'],
  ['Xbox Game Pass', 'Shown on the Xbox Store as of May 28, 2026.'],
  ['Xbox Cloud Gaming', 'Shown on the Xbox Store as of May 28, 2026.'],
  ['Xbox Play Anywhere', 'Shown on the Xbox Store as of May 28, 2026.'],
];

export const lunaAbyssSearchRows = [
  ['Game Pass or price', 'Check release, Game Pass, Xbox Cloud, Play Anywhere, and regional Steam discount status.', '/games/luna-abyss/release-date-game-pass'],
  ['Worth it or review', 'Use Steam review signal, Metacritic context, and whether Game Pass lowers the buying risk.', '/games/luna-abyss/is-it-worth-it'],
  ['Steam Deck settings', 'Start with a 30 FPS target and verify controls, text, and battery before a long session.', '/games/luna-abyss/steam-deck-settings'],
  ['Achievements or trophies', 'Steam has 45 public achievements; use the guide to plan cleanup without spoiling the ending.', '/games/luna-abyss/achievements-trophy-guide'],
  ['Walkthrough', 'Use the spoiler-light walkthrough to structure movement gates, combat arenas, secrets, and bosses.', '/games/luna-abyss/walkthrough'],
  ['Ending explained', 'Read only after finishing because the page discusses Fawkes, Aylin, Greymont, and the Abyss.', '/games/luna-abyss/ending-explained'],
  ['Crashing or black screen', 'Use the PC and Game Pass triage route before reinstalling or deleting save data.', '/games/luna-abyss/crashing-fix'],
];

export const lunaAbyssMinimumSpecs = [
  ['OS', 'Windows 11 64-bit'],
  ['Processor', 'Intel Core i5-8600K / AMD Ryzen 5 2600'],
  ['Memory', '8 GB RAM'],
  ['Graphics', 'Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 580'],
  ['DirectX', 'Version 12'],
  ['Storage', '15 GB available space'],
];

export const lunaAbyssRecommendedSpecs = [
  ['OS', 'Windows 11 64-bit'],
  ['Processor', 'Intel Core i5-10600K / AMD Ryzen 5 3600'],
  ['Memory', '8 GB RAM'],
  ['Graphics', 'Nvidia GeForce GTX 1660 / AMD Radeon RX 590'],
  ['DirectX', 'Version 12'],
  ['Storage', '15 GB available space'],
];

export const lunaAbyssNextRunSteps = [
  'Pick your platform: Game Pass, Steam, PS5, Xbox, or Steam Deck.',
  'Open settings before the first mission and set subtitles, text size, brightness, controller sensitivity, and difficulty.',
  'Play the first hour without achievement cleanup so movement, dash timing, and bullet-hell patterns settle.',
  'After the first boss or major route gate, start tracking secrets, optional rooms, and achievement categories.',
  'Use the ending page only after finishing once, then return to achievements for cleanup.',
];

export const lunaAbyssReleaseRows = [
  {
    step: 'Storefront',
    doThis: 'Choose Xbox/Game Pass, Steam, PS5, or Xbox Cloud before reading platform advice.',
    why: 'Game Pass changes the value decision, while Steam and PS5 players care more about price, achievements, trophies, and refund windows.',
  },
  {
    step: 'Price check',
    doThis: 'Verify the live regional price and discount on the storefront you will actually use.',
    why: 'Steam price and launch discounts vary by region and can change after the launch window.',
  },
  {
    step: 'Save path',
    doThis: 'If you may switch between PC and Xbox, check Play Anywhere and cloud-save behavior before starting a long run.',
    why: 'A shared ecosystem can prevent replaying the opening hours just to change devices.',
  },
  {
    step: 'Platform risk',
    doThis: 'Use Steam Deck and system-requirements pages before buying for handheld or below-recommended PC hardware.',
    why: 'A fast FPS with platforming and bullet-hell combat needs stable input timing more than a slow adventure game.',
  },
];

export const lunaAbyssWorthRows = [
  {
    step: 'Play now',
    doThis: 'Play through Game Pass or buy on sale if you want a focused single-player FPS with platforming and boss fights.',
    why: 'Game Pass and the launch discount reduce risk for players curious about a new IP.',
  },
  {
    step: 'Wait',
    doThis: 'Wait if you need a long campaign, co-op, confirmed Deck comfort, or post-launch bug reports from similar hardware.',
    why: 'The strongest demand is for performance, Deck, ending, and achievement clarity, not multiplayer.',
  },
  {
    step: 'Review signal',
    doThis: 'Treat Steam Very Positive, Metacritic context, and critic quotes as signals, then check the refund policy.',
    why: 'Review scores cannot tell you whether the bullet-hell movement and platforming difficulty fit your tolerance.',
  },
  {
    step: 'Best fit',
    doThis: 'Prioritize it if you like Nier-style surreal tone, first-person traversal, fast arena fights, and compact sci-fi mystery.',
    why: 'The game is more about pressure, movement, and mood than open-world breadth.',
  },
];

export const lunaAbyssPerformanceRows = [
  {
    step: 'Before launch',
    doThis: 'Update GPU drivers, close overlays, and keep 20 GB or more free for patches and shader cache.',
    why: 'Startup crashes and stutter are easier to isolate when the install and driver state are clean.',
  },
  {
    step: 'First settings pass',
    doThis: 'Use fullscreen or borderless fullscreen, cap FPS if frame pacing is uneven, and lower shadows before textures.',
    why: 'Bullet-hell dodging and platforming feel worse with unstable frame times than with lower visual settings.',
  },
  {
    step: 'Controller check',
    doThis: 'Test aim sensitivity, dash, jump, interact, and weapon swap before the first major arena.',
    why: 'A small input issue can become a boss or platforming failure later.',
  },
  {
    step: 'After crashes',
    doThis: 'Verify files, disable overlays, restart after a driver update, and test one change at a time.',
    why: 'Changing several variables at once makes it harder to find the real cause.',
  },
];

export const lunaAbyssDeckRows = [
  {
    step: 'Start target',
    doThis: 'Start with a 30 FPS cap, medium or low-heavy settings, and default Proton before experimenting.',
    why: 'A stable baseline matters more than chasing high FPS in bullet-hell combat.',
  },
  {
    step: 'Controls',
    doThis: 'Check gyro preference, stick sensitivity, dash/jump reach, and text size in the first safe area.',
    why: 'Movement comfort determines whether the game is viable on handheld for more than a short test.',
  },
  {
    step: 'Battery',
    doThis: 'Watch battery drain and fan behavior during the first combat arena, not only in menus.',
    why: 'Performance reports are most useful when tested under combat pressure.',
  },
  {
    step: 'Cloud saves',
    doThis: 'Confirm Steam Cloud sync before switching between Deck and desktop.',
    why: 'Cloud save mistakes can cost more time than a graphics tweak.',
  },
];

export const lunaAbyssBeginnerRows = [
  {
    step: 'Settings',
    doThis: 'Set subtitles, text size, camera sensitivity, brightness, and difficulty before leaving the first safe stretch.',
    why: 'The game mixes story, platforming, and combat, so comfort settings affect every part of the run.',
  },
  {
    step: 'Movement',
    doThis: 'Practice sprint, jump, dash, and air control before treating combat arenas as pure shooting sections.',
    why: 'Traversal is a survival tool, not only a way to move between rooms.',
  },
  {
    step: 'Combat',
    doThis: 'Prioritize dodging patterns and arena space before tunnel-visioning on damage.',
    why: 'Bullet-hell pressure punishes standing still more than cautious aim.',
  },
  {
    step: 'Exploration',
    doThis: 'Check side routes after major fights and before obvious forward exits.',
    why: 'Secrets, lore, and achievement cleanup are easier when you build the habit early.',
  },
  {
    step: 'Progress',
    doThis: 'Save achievement and ending cleanup for after one natural route.',
    why: 'The first run is better for learning systems than forcing perfect completion.',
  },
];

export const lunaAbyssWalkthroughRows = [
  {
    step: 'Opening',
    doThis: 'Treat the first area as a control and readability test before pushing difficulty or graphics higher.',
    why: 'A clean baseline prevents later platforming failures from being mistaken for skill issues.',
  },
  {
    step: 'Greymont clues',
    doThis: 'Read prisoner, colony, Scourge, All-Father, and Collective references when they appear.',
    why: 'The ending and lore make more sense if you track names and factions from the start.',
  },
  {
    step: 'Combat arenas',
    doThis: 'Map exits, cover, enemy waves, and dash routes before committing to risky damage windows.',
    why: 'Arena awareness matters as much as weapon accuracy.',
  },
  {
    step: 'Boss prep',
    doThis: 'Enter bosses with comfortable sensitivity, a stable FPS cap, and a clear dodge pattern plan.',
    why: 'Bosses combine platforming, bullet pressure, and aim under stress.',
  },
  {
    step: 'Cleanup',
    doThis: 'After credits, return to achievements, ending notes, and missed secrets instead of replaying blindly.',
    why: 'Structured cleanup is faster than repeating the same route without a checklist.',
  },
];

export const lunaAbyssAchievementRows = [
  {
    step: 'Run 1',
    doThis: 'Finish naturally while tracking obvious secrets, boss outcomes, and ability gates.',
    why: 'You need route knowledge before deciding which achievements are safe to chase.',
  },
  {
    step: 'Combat cleanup',
    doThis: 'Group achievements by boss, arena, weapon behavior, and difficulty-style challenge.',
    why: 'Combat achievements are easier when you know each arena layout.',
  },
  {
    step: 'Secret cleanup',
    doThis: 'Revisit side paths after movement upgrades or late-game knowledge changes what you can reach.',
    why: 'Exploration achievements often depend on returning with better routing.',
  },
  {
    step: 'Platform split',
    doThis: 'Use Steam for the verified 45 achievement count and verify PS5 trophy names before publishing exact trophy claims.',
    why: 'Steam achievements and PlayStation trophies may not expose identical public data at the same time.',
  },
];

export const lunaAbyssEndingRows = [
  {
    step: 'Finish first',
    doThis: 'Complete one route before reading ending interpretation or achievement cleanup.',
    why: 'The story relies on prison, prophecy, Aylin, Greymont, and Abyss reveals landing in order.',
  },
  {
    step: 'Track roles',
    doThis: 'Separate what Fawkes does, what Aylin knows, and what the Abyss appears to want.',
    why: 'The ending is easier to parse when character motive and world lore are not mixed together.',
  },
  {
    step: 'Read factions',
    doThis: 'Keep notes on the Scourge, All-Father, Collective, and the lost colony of Greymont.',
    why: 'Those terms carry the lore context for the final interpretation.',
  },
  {
    step: 'Return cleanly',
    doThis: 'After reading the ending, move to achievements and walkthrough cleanup with a specific missed objective list.',
    why: 'Ending explanation should create a replay plan, not just summarize the story.',
  },
];

export const lunaAbyssCrashRows = [
  {
    step: 'Steam files',
    doThis: 'Verify installed files, restart Steam, and launch once without overlays.',
    why: 'Corrupt downloads and overlays are common causes of black screens or startup crashes.',
  },
  {
    step: 'Game Pass install',
    doThis: 'Repair the Xbox app install, check Gaming Services, and confirm the game is on a fast internal drive.',
    why: 'Game Pass launch issues can come from the Xbox app layer rather than the game executable alone.',
  },
  {
    step: 'Graphics reset',
    doThis: 'Use Windows graphics settings to force the dedicated GPU, then start with capped FPS and lower shadows.',
    why: 'Wrong GPU selection or aggressive settings can cause stutter and black-screen behavior.',
  },
  {
    step: 'Controller and input',
    doThis: 'Disconnect extra controllers, wheels, virtual devices, or remappers for one clean launch test.',
    why: 'Input conflicts can block menus or cause the game to appear frozen.',
  },
  {
    step: 'Escalate',
    doThis: 'If nothing works, collect OS, GPU, driver, storefront, crash timing, and error text before posting.',
    why: 'Support and community troubleshooting need reproducible details.',
  },
];

export const lunaAbyssSourceRows = [
  {
    claim: 'Luna Abyss released on May 21, 2026 and Steam lists it as a single-player action/adventure/indie game with full controller support and Steam Cloud.',
    source: 'Steam store',
    status: 'verified' as const,
    href: lunaAbyssSteamUrl,
    note: 'Use for Steam release, categories, PC specs, screenshots, reviews, and feature labels.',
  },
  {
    claim: 'Xbox Store shows Game Pass, Xbox Cloud Gaming, and Xbox Play Anywhere availability.',
    source: 'Xbox Store',
    status: 'verified' as const,
    href: lunaAbyssXboxUrl,
    note: 'Use for Xbox ecosystem, cloud, and Game Pass purchase-path advice.',
  },
  {
    claim: 'The official site frames Luna Abyss as a story-driven FPS set beneath the mimic moon Luna.',
    source: 'Official site',
    status: 'verified' as const,
    href: lunaAbyssOfficialUrl,
    note: 'Use for premise, tone, and official game identity.',
  },
  {
    claim: 'Metacritic lists current critic review context for Luna Abyss.',
    source: 'Metacritic',
    status: 'working' as const,
    href: lunaAbyssMetacriticUrl,
    note: 'Use as review context, not as the only buying signal.',
  },
  {
    claim: 'Steam Deck HQ reports handheld performance and settings guidance.',
    source: 'Steam Deck HQ',
    status: 'working' as const,
    href: lunaAbyssSteamDeckHqUrl,
    note: 'Treat as third-party testing, not official Steam Deck verification.',
  },
  {
    claim: 'GamesRadar published a post-launch feature that likely contributed to renewed search interest.',
    source: 'GamesRadar',
    status: 'working' as const,
    href: lunaAbyssGamesRadarUrl,
    note: 'Use as demand and interest context, not as a storefront fact source.',
  },
  {
    claim: 'Community discussions can reveal crash, settings, and achievement demand.',
    source: 'Steam discussions',
    status: 'needs-check' as const,
    href: lunaAbyssSteamDiscussionsUrl,
    note: 'Use community posts as a problem radar only.',
  },
];

export const lunaAbyssRelatedGuides: GameGuideLink[] = [
  {
    title: 'Luna Abyss Guide Hub',
    href: lunaAbyss.hubPath,
    description: 'Start here for Game Pass, Steam Deck, achievements, walkthrough, ending, and crash-fix routes.',
  },
  ...lunaAbyss.guideLinks,
];

export function getLunaAbyssRelated(excludeHref: string) {
  return lunaAbyssRelatedGuides.filter((guide) => guide.href !== excludeHref).slice(0, 6);
}

const lunaAbyssKeywords = [
  'Luna Abyss',
  'Luna Abyss guide',
  'Luna Abyss walkthrough',
  'Luna Abyss Game Pass',
  'Luna Abyss Steam Deck',
  'Luna Abyss achievements',
  'Luna Abyss trophy guide',
  'Luna Abyss ending explained',
  'Luna Abyss crashing fix',
];

export function createLunaAbyssMetadata({
  title,
  description,
  canonical,
  image = lunaAbyssImages.hero,
}: {
  title: string;
  description: string;
  canonical: string;
  image?: string;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: lunaAbyssKeywords,
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
