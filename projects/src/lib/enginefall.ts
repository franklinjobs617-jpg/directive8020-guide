import type { Metadata } from 'next';
import { enginefall, type GameGuideLink } from '@/lib/games';

type SourceStatus = 'verified' | 'needs-check' | 'working';

export type EnginefallQuickFact = [string, string, SourceStatus];
export type EnginefallTableRow = [string, string, string];

export interface EnginefallSection {
  id: string;
  title: string;
  image?: string;
  imageAlt: string;
  caption: string;
  paragraphs: string[];
  tableHeadings: EnginefallTableRow;
  rows?: EnginefallTableRow[];
}

export interface EnginefallPageData {
  title: string;
  description: string;
  canonical: string;
  label: string;
  heroImage: string;
  heroAlt: string;
  sourceImage?: string;
  sourceImageAlt?: string;
  sourceImageCaption?: string;
  relatedImage?: string;
  relatedImageAlt?: string;
  relatedImageCaption?: string;
  faqImage?: string;
  faqImageAlt?: string;
  faqImageCaption?: string;
  blufTitle: string;
  bluf: string[];
  quickFacts: EnginefallQuickFact[];
  answerTitle: string;
  answer: string;
  intentRows: {
    query: string;
    answer: string;
    href: string;
    label?: string;
  }[];
  jumpLinks: {
    href: string;
    label: string;
  }[];
  sections: EnginefallSection[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const enginefallLastModified = '2026-06-10';
export const enginefallSteamUrl = 'https://store.steampowered.com/app/2437390/Enginefall/';
export const enginefallOfficialUrl = 'https://enginefall.com/';
export const enginefallPlaytestPostUrl =
  'https://enginefall.com/blog/welcome-to-the-enginefall-summer-playtest';
export const enginefallDateChangePostUrl =
  'https://enginefall.com/blog/open-playtest-date-change';
export const enginefallConductorPostUrl =
  'https://enginefall.com/blog/how-to-become-conductor';
export const enginefallSteamNewsUrl =
  'https://steamcommunity.com/app/2437390/allnews/?l=english';
export const enginefallPCGamerUrl =
  'https://www.pcgamer.com/games/survival-crafting/enginefall-asks-what-if-snowpiercer-was-rust-and-dayz-in-a-game-with-great-vision-and-so-so-execution/';
export const enginefallPCGamesNUrl =
  'https://www.pcgamesn.com/enginefall/june-open-playtest';
export const enginefallGamingTrendUrl =
  'https://gamingtrend.com/news/join-the-public-playtest-for-enginefall/';
export const enginefallRedditAmaUrl =
  'https://www.reddit.com/r/Games/comments/1tjnay2/ama_were_making_enginefall_a_playerdriven/';
export const enginefallSteamDiscussionsUrl =
  'https://steamcommunity.com/app/2437390/discussions/0/';

export const enginefallImages = {
  hero: '/games/enginefall/hero.webp',
  header: '/games/enginefall/header.webp',
  card: '/games/enginefall/card.webp',
  screenshot1: '/games/enginefall/screenshot-1.webp',
  screenshot2: '/games/enginefall/screenshot-2.webp',
  screenshot3: '/games/enginefall/screenshot-3.webp',
  screenshot4: '/games/enginefall/screenshot-4.webp',
  screenshot5: '/games/enginefall/screenshot-5.webp',
  screenshot6: '/games/enginefall/screenshot-6.webp',
  screenshot7: '/games/enginefall/screenshot-7.webp',
  screenshot8: '/games/enginefall/screenshot-8.webp',
  screenshot9: '/games/enginefall/screenshot-9.webp',
  screenshot10: '/games/enginefall/screenshot-10.webp',
  screenshot11: '/games/enginefall/screenshot-11.webp',
  screenshot12: '/games/enginefall/screenshot-12.webp',
  screenshot13: '/games/enginefall/screenshot-13.webp',
  screenshot14: '/games/enginefall/screenshot-14.webp',
  screenshot15: '/games/enginefall/screenshot-15.webp',
};

export const enginefallQuickFacts: EnginefallQuickFact[] = [
  ['Release status', 'Coming soon on Steam with a 2026 release window.', 'verified'],
  ['Current playable access', 'June 2026 playtest and Steam Next Fest demo coverage, not a final launch build.', 'working'],
  ['Developer / Publisher', 'Red Rover Interactive.', 'verified'],
  ['Confirmed platform', 'Windows PC via Steam.', 'verified'],
  ['Console status', 'PS5 and Xbox searches exist, but no official console release is confirmed.', 'needs-check'],
  ['Steam Deck status', 'Not Steam Deck Verified at the time checked; test through the PC build only.', 'needs-check'],
  ['Core loop', 'Raid Titan Trains, scavenge, craft, extract, and upgrade a Dagger shuttle home base.', 'verified'],
  ['Main risk', 'PvP and balance details are playtest-sensitive and may change before launch.', 'working'],
];

export const enginefallSourceRows = [
  {
    claim: 'What is the official Steam status, release window, developer, platform, tags, screenshots, and PC requirement baseline?',
    source: 'Steam official store page',
    status: 'verified' as const,
    href: enginefallSteamUrl,
    note: 'Use Steam for official PC status, 2026 coming-soon state, system requirements, categories, screenshots, and store copy.',
  },
  {
    claim: 'What is Enginefall and what are Titan Trains, Freerailers, Dagger shuttles, and the world premise?',
    source: 'Enginefall official website',
    status: 'verified' as const,
    href: enginefallOfficialUrl,
    note: 'Use the official site for feature language, world terms, screenshot context, Discord, media kit, and the core fantasy.',
  },
  {
    claim: 'What is the June 2026 playtest and demo window?',
    source: 'Official playtest post',
    status: 'verified' as const,
    href: enginefallPlaytestPostUrl,
    note: 'The post says open playtest access begins June 8-14 and demo access runs June 11-22, while other official and media posts use June 8-22 framing.',
  },
  {
    claim: 'Why do some pages describe the test window as June 8-22?',
    source: 'Official date-change post',
    status: 'verified' as const,
    href: enginefallDateChangePostUrl,
    note: 'The date-change post describes the Spring Open Playtest moving to June 8-22. The page copy must acknowledge the date wording difference instead of pretending one version does not exist.',
  },
  {
    claim: 'How does the Conductor route work?',
    source: 'Official Conductor guide',
    status: 'verified' as const,
    href: enginefallConductorPostUrl,
    note: 'Use this for C00, Breacher, Control Room registration, Conductor abilities, Fuel Cores, keycard printing, and extraction cautions.',
  },
  {
    claim: 'What changed in playtest builds around Dagger, schematics, looting, tutorials, and first-time experience?',
    source: 'Official Steam News',
    status: 'working' as const,
    href: enginefallSteamNewsUrl,
    note: 'Steam News is useful for patch-sensitive details. Treat every detail as build-dependent unless it appears on the main Steam page or official site.',
  },
  {
    claim: 'How did an external hands-on preview frame the game?',
    source: 'PC Gamer hands-on',
    status: 'working' as const,
    href: enginefallPCGamerUrl,
    note: 'Use for external impressions about promise, execution risk, first-session pressure, alliances, technical roughness, and PvP survival comparisons.',
  },
  {
    claim: 'Is there media and community interest around the June playtest?',
    source: 'PCGamesN / GamingTrend / Reddit AMA / Steam Discussions',
    status: 'working' as const,
    href: enginefallPCGamesNUrl,
    note: 'Use these as demand and context signals, not as replacements for official facts.',
  },
];

export const enginefallRelatedGuides: GameGuideLink[] = [
  {
    title: 'Enginefall Hub',
    href: '/games/enginefall',
    description:
      'Release date, Steam status, gameplay loop, official site, platforms, screenshots, and guide map.',
  },
  {
    title: 'Playtest, Demo, Key & Discord',
    href: '/games/enginefall-playtest',
    description:
      'June 2026 playtest windows, Steam access, demo timing, Discord, player-count checks, and server-password cautions.',
  },
  {
    title: 'Beginner Guide',
    href: '/games/enginefall-beginner-guide',
    description:
      'How to play, how to extract, what to loot first, how to avoid early PvP mistakes, and how to read the train run.',
  },
  {
    title: 'Conductor Guide',
    href: '/games/enginefall-conductor-guide',
    description:
      'C00 route, Breacher use, Control Room registration, Conductor powers, Fuel Cores, keycard printing, and extraction planning.',
  },
  {
    title: 'Dagger Shuttle Guide',
    href: '/games/enginefall-dagger-guide',
    description:
      'Dagger shuttle role, personal rail base, fuel, storage, schematics, Dagger vs Dagger pressure, and raid preparation.',
  },
  {
    title: 'System Requirements & Platforms',
    href: '/games/enginefall-system-requirements-platforms',
    description:
      'Official PC specs, Steam Deck status, PS5 and Xbox caveats, controller expectations, and platform FAQ.',
  },
];

export function getEnginefallRelated(excludeHref: string) {
  return enginefallRelatedGuides.filter((guide) => guide.href !== excludeHref).slice(0, 6);
}

const enginefallKeywords = [
  'Enginefall',
  'Enginefall game',
  'Enginefall release date',
  'Enginefall Steam',
  'Enginefall playtest',
  'Enginefall demo',
  'Enginefall guide',
  'Enginefall how to play',
  'Enginefall how to extract',
  'Enginefall Conductor',
  'Enginefall Dagger',
  'Enginefall system requirements',
  'Enginefall Steam Deck',
  'Enginefall PS5',
  'Enginefall Xbox',
  'Enginefall Discord',
];

export function createEnginefallMetadata({
  title,
  description,
  canonical,
  image = enginefallImages.hero,
}: {
  title: string;
  description: string;
  canonical: string;
  image?: string;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: enginefallKeywords,
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

const versionParagraph =
  'This page is written for the June 2026 playtest and Steam Next Fest demo window. Enginefall is still in development, so the safest guide style is to explain confirmed systems, teach decision making, and mark build-sensitive mechanics instead of pretending that the current balance is final launch truth.';

const noFakeParagraph =
  'Enjoy4Game should not invent weapon tier lists, recipe databases, map labels, skill trees, or final build advice for Enginefall yet. Those formats only become useful after stable player data, patch notes, or hands-on captures support them. Until then, the useful content is source-checked guidance that helps players enter the test, survive the first run, and understand where official information ends.';

const commonFaqs = [
  {
    question: 'Is Enginefall released?',
    answer:
      'No. Steam lists Enginefall as Coming Soon with a 2026 release window. Current coverage is based on the June 2026 playtest and demo period, not a final launch build.',
  },
  {
    question: 'What platforms are confirmed for Enginefall?',
    answer:
      'Windows PC via Steam is confirmed. PS5, Xbox, and Steam Deck verification are not confirmed by the official Steam data checked for this guide.',
  },
  {
    question: 'Is Enginefall a PvP game?',
    answer:
      'Yes, PvP is a core part of the current pitch. The game is a player-driven crafting shooter with raids, Dagger vs Dagger pressure, extraction, and social conflict on Titan Trains.',
  },
];

export const enginefallPages = {
  hub: {
    title: 'Enginefall Guide: Release Date, Gameplay, Steam, PS5, Xbox & Playtest',
    description:
      'Enginefall is a 2026 Steam coming-soon crafting shooter about Titan Trains, Dagger shuttles, PvP raids, extraction, Conductor control, and June 2026 playtest access.',
    canonical: '/games/enginefall',
    label: 'Enginefall',
    heroImage: enginefallImages.hero,
    heroAlt: 'Enginefall official Steam screenshot showing a post-apocalyptic train combat scene',
    sourceImage: enginefallImages.screenshot10,
    sourceImageAlt: 'Enginefall official screenshot for hub source verification',
    sourceImageCaption:
      'Official Enginefall sources are strongest for release status, playtest access, platform facts, screenshots, and system names; build-sensitive balance should wait for testing.',
    relatedImage: enginefallImages.screenshot11,
    relatedImageAlt: 'Enginefall official screenshot for hub related guides',
    relatedImageCaption:
      'Move from the hub into the page that matches the player task: playtest access, beginner extraction, Conductor control, Dagger systems, or platform checks.',
    faqImage: enginefallImages.screenshot12,
    faqImageAlt: 'Enginefall official screenshot for hub FAQ section',
    faqImageCaption:
      'The hub FAQ answers the broad questions first: release state, confirmed platforms, PvP framing, and what not to fake before launch.',
    blufTitle: 'Worth Doing?',
    bluf: [
      'Enginefall is worth a real guide cluster, not a thin release-date page. Google Trends and autocomplete show active demand around the game, playtest, release date, Steam, PS5, Xbox, Discord, gameplay, review, and Conductor searches. More importantly, the official site and Steam page already expose enough systems to write useful pages without fabricating data.',
      versionParagraph,
    ],
    quickFacts: enginefallQuickFacts,
    answerTitle: 'What is Enginefall?',
    answer:
      'Enginefall is a player-driven crafting shooter from Red Rover Interactive set on colossal post-apocalyptic trains. Players start from the tail, raid Titan Trains, scavenge materials, craft gear, extract with loot, and upgrade a Dagger shuttle that acts as a personal rail base.',
    intentRows: [
      {
        query: 'enginefall game',
        answer: 'Enginefall is a train-based PvP crafting and extraction shooter from Red Rover Interactive.',
        href: '#what-is-enginefall',
        label: 'Overview',
      },
      {
        query: 'enginefall release date',
        answer: 'Steam lists a 2026 release window, not a final exact launch day.',
        href: '#release-status',
        label: 'Release',
      },
      {
        query: 'enginefall gameplay',
        answer: 'The loop is raid, loot, craft, fight, extract, and upgrade your Dagger shuttle.',
        href: '#gameplay-loop',
        label: 'Gameplay',
      },
      {
        query: 'enginefall ps5 xbox',
        answer: 'PC via Steam is confirmed; PS5 and Xbox are not officially confirmed.',
        href: '#platforms',
        label: 'Platforms',
      },
    ],
    jumpLinks: [
      { href: '#what-is-enginefall', label: 'What it is' },
      { href: '#release-status', label: 'Release' },
      { href: '#gameplay-loop', label: 'Gameplay' },
      { href: '#guide-map', label: 'Guides' },
      { href: '#platforms', label: 'Platforms' },
    ],
    sections: [
      {
        id: 'what-is-enginefall',
        title: 'What Enginefall Is Actually About',
        image: enginefallImages.screenshot1,
        imageAlt: 'Enginefall official screenshot showing combat and train environment',
        caption:
          'Enginefall is not only a train shooter. The official pitch combines rail survival, extraction pressure, crafting, player conflict, and a moving home base.',
        paragraphs: [
          'Enginefall is a multiplayer survival and crafting shooter built around a very specific fantasy: society survives on massive Titan Trains, while Freerailers live outside that system by raiding, stealing fuel, and escaping with whatever they can carry. That gives the game a clearer identity than a generic survival sandbox. The player is not dropped into a forest with a stone axe. The player is pushed onto rails, into class-separated train space, and into conflict over gear, fuel, rooms, routes, and extraction windows.',
          'The official Steam description says players start in the tail alone or with friends, scavenge, craft, build, push toward First Class, seize better gear car by car, then escape with high-value loot to upgrade a personal home on the rails. That single sentence is important for SEO because it creates several separate user tasks. One user wants to know whether the game is out. Another wants to know how the playtest works. Another wants to understand extraction. Another wants to know what a Dagger shuttle is. Another searches for Conductor because the official blog already names that role.',
          'The page should therefore answer the broad brand query first, then route users into task pages. A thin page that only repeats the Steam description would lose the opportunity. A fake database page would damage trust. The correct hub is a source-checked overview with direct answers, official screenshots, platform caveats, and links into the narrower guides that solve player problems.',
          versionParagraph,
        ],
        tableHeadings: ['Topic', 'Current answer', 'Why it matters'],
        rows: [
          ['Game type', 'PvP crafting shooter with extraction and base-building pressure.', 'This explains why guide demand goes beyond release-date searches.'],
          ['World hook', 'Humanity survives on Titan Trains after a collapse, while Freerailers raid from outside.', 'This gives the guide cluster consistent vocabulary.'],
          ['Player home', 'The Dagger shuttle is a personal rail base that can be upgraded.', 'This supports a dedicated Dagger page.'],
          ['High-status role', 'The Conductor controls important train functions after reaching C00 and the Control Room.', 'This supports a dedicated Conductor page.'],
        ],
      },
      {
        id: 'release-status',
        title: 'Release Date, Steam Page, and Playtest Status',
        image: enginefallImages.header,
        imageAlt: 'Enginefall official Steam header artwork',
        caption:
          'Steam is the authority for the current release state. The official site and blog explain the June 2026 test window.',
        paragraphs: [
          'Enginefall is not fully released. Steam lists it as Coming Soon with a 2026 release window. That means the hub must not use launch language such as full review, final weapon list, final map, or complete recipe database. It should instead tell users what can be done now: wishlist the game, request or enter test access when available, join the Discord, read official updates, and use the June 2026 guides with the understanding that balance may change.',
          'The playtest timing needs careful wording because official sources use overlapping language. The June 8 official post says the open playtest runs June 8-14 and that the demo is available June 11-22. The April date-change post and several media pieces frame the moved test window as June 8-22. The honest answer is that the June 2026 access window centers on June 8-22, with specific playtest and demo wording varying by official post. The page should tell users to use the live Steam page as the final access source.',
          'This is where many game sites create bad content. They turn a coming-soon Steam page into an exact release day, or they copy an old test date without explaining whether the build is live. Enginefall should be handled differently: direct date answer, current playable state, official links, and a visible update date. That is more useful for players and safer for search engines.',
        ],
        tableHeadings: ['Question', 'Answer', 'Page action'],
        rows: [
          ['Is it out?', 'No, Steam lists Coming Soon with a 2026 window.', 'Use cautious release language.'],
          ['Can players try it?', 'June 2026 playtest and demo access are the relevant current actions.', 'Link to the playtest page.'],
          ['Is the demo final?', 'No, it is a test/demo build during development.', 'Mark mechanics as build-sensitive.'],
          ['Where should users click?', 'Steam and the official site.', 'Keep external links visible and labeled.'],
        ],
      },
      {
        id: 'gameplay-loop',
        title: 'Gameplay Loop: Raid, Craft, Extract, Upgrade',
        image: enginefallImages.screenshot2,
        imageAlt: 'Enginefall official screenshot showing a train corridor and player movement',
        caption:
          'The safest current gameplay explanation is loop-based: what players try to do, what creates pressure, and what changes between runs.',
        paragraphs: [
          'The core loop is simple to explain and hard to master. A run begins at the lower end of the train hierarchy, then asks the player to move through dangerous spaces, gather usable resources, craft tools or gear, fight or avoid other players, and decide when to leave. Because loot only matters if it survives extraction, the guide should keep returning to one question: what helps the player leave alive with value?',
          'The official site emphasizes flexible crafting and build systems. That does not mean we should publish a complete recipe list today. It means beginners need to know how to think about materials, storage, weapons, armor, structures, and timing. A player who spends everything too early may reach a more dangerous carriage without escape options. A player who hoards everything may die with unused value. The useful guide voice is practical, not encyclopedic.',
          'The social layer is the other reason Enginefall deserves multiple pages. It is built around human opponents and temporary allies. A route that works against NPC pressure can fail when another crew contests the same control point. A guide should explain conflict signals, retreat planning, and extraction discipline, but it should avoid promising that any route is safe. That honesty fits the game and prevents outdated advice.',
        ],
        tableHeadings: ['Loop step', 'What to do', 'Common mistake'],
        rows: [
          ['Enter', 'Start with a specific goal rather than wandering for every item.', 'Treating the train like a safe open-world zone.'],
          ['Loot', 'Prioritize portable value, materials for immediate survival, and extraction support.', 'Dying with inventory full of low-priority clutter.'],
          ['Craft', 'Use crafting to solve the next obstacle, not to chase a perfect build.', 'Waiting for perfect gear before making progress.'],
          ['Extract', 'Leave when the run has value and risk is rising.', 'Staying for one more room until another crew appears.'],
        ],
      },
      {
        id: 'guide-map',
        title: 'Enginefall Guide Map',
        image: enginefallImages.screenshot3,
        imageAlt: 'Enginefall official screenshot used for guide map context',
        caption:
          'The cluster should split by search intent: access, first-run survival, Conductor, Dagger, and platform checks.',
        paragraphs: [
          'The six-page structure is not content padding. It matches the way real searches divide. A user searching Enginefall playtest wants dates, key access, Discord, and server-password context. A user searching how to extract does not want a platform article. A user searching Enginefall Conductor wants C00, Breacher, Control Room, powers, and escape advice. Merging all of those into one page would create a long article that answers every query too slowly.',
          'The hub should be the router. It gives the core facts, then sends the player to the page that matches the immediate job. The playtest page handles access. The beginner guide handles first-run survival. The Conductor guide handles the official high-status role. The Dagger guide handles the personal base and shuttle systems. The platform page handles specs, PS5, Xbox, and Steam Deck. That structure also gives GSC a cleaner way to reveal which intent is working.',
          noFakeParagraph,
        ],
        tableHeadings: ['Page', 'Best user', 'Reason to split'],
        rows: [
          ['Playtest guide', 'Players trying to enter the June 2026 build.', 'Access questions are time-sensitive and should not bury the hub.'],
          ['Beginner guide', 'First-run players who need survival rhythm.', 'How-to-play intent is different from release intent.'],
          ['Conductor guide', 'Players targeting C00 and Control Room power.', 'Official Conductor content already creates a named query.'],
          ['Dagger guide', 'Players confused by shuttle, fuel, storage, and raids.', 'Dagger is the player home and deserves its own context.'],
        ],
      },
      {
        id: 'platforms',
        title: 'PC, PS5, Xbox, and Steam Deck Status',
        image: enginefallImages.screenshot4,
        imageAlt: 'Enginefall official screenshot showing rail environment for platform guide context',
        caption:
          'Autocomplete shows PS5, Xbox, and Steam Deck interest, but official confirmation is narrower than user demand.',
        paragraphs: [
          'The confirmed platform is Windows PC via Steam. That answer must be visible because platform searches are already appearing. Users who search PS5 or Xbox are not wrong to ask, but the page must not turn demand into confirmation. There is no official PS5 or Xbox release listed in the checked Steam data. The correct wording is direct: PC is confirmed, console versions are not confirmed, and future announcements should be checked through official channels.',
          'Steam Deck is a separate question. A game can support controllers or run on PC and still not be Steam Deck Verified. Enginefall also has PvP, online access, text/UI readability, and performance considerations that matter more on a handheld. The platform page should explain the difference between playable, supported, and verified. It should not tell players to expect a smooth handheld experience without test evidence.',
          'The system requirements page can use official minimum specs, but it should be careful with recommended settings. Steam currently lists a minimum baseline and notes that requirements are not final during development. That makes a cautious spec page useful: it can tell players whether their machine is near the current floor while warning that optimization and requirements can change before launch.',
        ],
        tableHeadings: ['Platform', 'Current status', 'Correct wording'],
        rows: [
          ['PC Steam', 'Confirmed.', 'Enginefall is listed for Windows PC via Steam.'],
          ['PS5', 'Not confirmed.', 'Search demand exists, but no official PS5 version is confirmed.'],
          ['Xbox', 'Not confirmed.', 'Search demand exists, but no official Xbox version is confirmed.'],
          ['Steam Deck', 'Not verified.', 'Treat as unknown until Valve or official testing confirms it.'],
        ],
      },
    ],
    faqs: [
      ...commonFaqs,
      {
        question: 'What is the main Enginefall gameplay loop?',
        answer:
          'The loop is to raid Titan Trains, scavenge resources, craft gear, fight or avoid other players, extract with loot, and upgrade your Dagger shuttle base.',
      },
      {
        question: 'Should Enjoy4Game make Enginefall tier lists now?',
        answer:
          'No. Tier lists, final builds, complete recipes, and full weapon rankings should wait for stable launch or reliable playtest data.',
      },
    ],
  },
  playtest: {
    title: 'Enginefall Playtest Dates, Demo, Key, Discord & Steam Access Guide',
    description:
      'Enginefall playtest guide for June 2026 dates, Steam demo access, key questions, Discord, server password searches, player count checks, and what is not final.',
    canonical: '/games/enginefall-playtest',
    label: 'Playtest',
    heroImage: enginefallImages.screenshot1,
    heroAlt: 'Enginefall official screenshot for playtest access guide',
    sourceImage: enginefallImages.screenshot6,
    sourceImageAlt: 'Enginefall official screenshot for playtest source verification',
    sourceImageCaption:
      'Playtest pages must point back to Steam and official Enginefall posts because access windows, demo buttons, and server details can change quickly.',
    relatedImage: enginefallImages.screenshot7,
    relatedImageAlt: 'Enginefall official screenshot for playtest related guides',
    relatedImageCaption:
      'After access questions, most players need beginner survival, extraction, Dagger context, and Conductor route planning.',
    faqImage: enginefallImages.screenshot8,
    faqImageAlt: 'Enginefall official screenshot for playtest FAQ section',
    faqImageCaption:
      'Playtest FAQ content should separate dates, access routes, keys, Discord, and player-count questions from final launch assumptions.',
    blufTitle: 'Playtest Answer',
    bluf: [
      'Enginefall playtest demand is strong enough for its own page. Users are not only searching the game name; they are searching playtest dates, playtest key, Discord, player count, Steam charts, server password, and review. Those are access and trust questions, so they need fast answers before any gameplay explanation.',
      versionParagraph,
    ],
    quickFacts: [
      ['Main window', 'Official and media wording centers the June 2026 access period around June 8-22.', 'working'],
      ['Playtest wording', 'The June 8 official post names June 8-14 for open playtest access.', 'verified'],
      ['Demo wording', 'The same post names June 11-22 for demo access.', 'verified'],
      ['Access source', 'Steam is the official place to request or enter access when available.', 'verified'],
      ['Discord role', 'Discord is useful for support, announcements, and feedback, not a guaranteed key source.', 'working'],
      ['Final content?', 'No. Playtest and demo content should be treated as development builds.', 'verified'],
    ],
    answerTitle: 'How do you access the Enginefall playtest?',
    answer:
      'Use the Steam store page and official Enginefall channels. The June 2026 public access window is described around June 8-22, with official post wording separating open playtest and demo dates. Discord can help with updates and support, but it should not be described as a guaranteed key source.',
    intentRows: [
      {
        query: 'enginefall playtest dates',
        answer: 'Use June 8-22 as the broad June 2026 window, with specific official posts separating playtest and demo dates.',
        href: '#dates',
        label: 'Dates',
      },
      {
        query: 'enginefall playtest key',
        answer: 'Steam access is the official route. Avoid third-party key claims unless verified by the developer.',
        href: '#access',
        label: 'Access',
      },
      {
        query: 'enginefall discord',
        answer: 'Discord is for community updates, bug reports, support, and feedback.',
        href: '#discord',
        label: 'Community',
      },
      {
        query: 'enginefall player count',
        answer: 'Playtest player counts are directional only and may not represent launch demand.',
        href: '#player-count',
        label: 'Metrics',
      },
    ],
    jumpLinks: [
      { href: '#dates', label: 'Dates' },
      { href: '#access', label: 'Access' },
      { href: '#discord', label: 'Discord' },
      { href: '#player-count', label: 'Player count' },
      { href: '#what-to-test', label: 'What to test' },
    ],
    sections: [
      {
        id: 'dates',
        title: 'June 2026 Dates Without Hiding the Conflict',
        image: enginefallImages.header,
        imageAlt: 'Enginefall official Steam header for June 2026 playtest timing',
        caption:
          'The safest date answer acknowledges that official posts use overlapping but not identical wording.',
        paragraphs: [
          'The June 2026 Enginefall playtest information has one detail that most thin pages will get wrong: different official and media pages use slightly different date framing. The official June 8 post says players can join an open playtest from June 8-14 and play the demo from June 11-22. The earlier official date-change post says the Spring Open Playtest moved to June 8-22. PCGamesN and GamingTrend also frame the public test around June 8-22.',
          'The correct user-facing answer is not to pick one line and ignore the rest. The page should say that the broader June 2026 access period is June 8-22, while specific official post wording separates the open playtest and demo dates. That is more useful than a false clean answer because users may see different dates on Steam News, the official site, media posts, and social channels.',
          'This also explains why the page must show a last-updated date. Playtest windows can move, demo buttons can disappear, and Steam access can change without warning. A good guide should point users to Steam for the final access state and explain the known public timeline in plain language.',
          versionParagraph,
        ],
        tableHeadings: ['Date wording', 'Source-aware answer', 'User action'],
        rows: [
          ['June 8-14', 'Official June 8 post names this as the open playtest span.', 'Check Steam access during the playtest period.'],
          ['June 11-22', 'Official June 8 post names this as demo availability.', 'Use the Steam Next Fest demo window when visible.'],
          ['June 8-22', 'Official date-change and media coverage use this broader framing.', 'Treat this as the public June access window.'],
          ['After June 22', 'Access may end or change after the demo window.', 'Do not trust outdated key or password posts.'],
        ],
      },
      {
        id: 'access',
        title: 'Steam Access, Keys, and Server Password Searches',
        image: enginefallImages.screenshot2,
        imageAlt: 'Enginefall official screenshot for Steam access and playtest key context',
        caption:
          'Players searching for keys and passwords usually need official access guidance, not risky third-party promises.',
        paragraphs: [
          'The safest access route is Steam. If Steam exposes a playtest request, demo button, or store-page access option, that is the route players should use. A guide should not send players to random key sites or unverified Discord posts. Search demand around playtest key and server password exists because players hit friction: they cannot find the button, do not know whether access is automatic, or see discussions about private test servers.',
          'That friction is a content opportunity, but it is also a trust risk. The page should explain that a key, password, or invite is only trustworthy when it comes from Steam, the official Enginefall team, or an official community announcement. If a site claims instant access, players should treat it as suspicious unless the developer verifies it. This is especially important for an unreleased multiplayer game where closed tests and public demos may overlap.',
          'The page should also separate access from entitlement. Joining a Discord, requesting playtest access, or wishlisting does not guarantee a slot unless the official team says so. That simple distinction prevents a lot of bad clicks. It also gives the page a useful answer for users who search Enginefall playtest key and only need to know whether they are missing a hidden step.',
        ],
        tableHeadings: ['Access question', 'Direct answer', 'Risk'],
        rows: [
          ['Do I need a key?', 'Use Steam or official announcements as the source of truth.', 'Third-party key claims can be stale or unsafe.'],
          ['Is Discord required?', 'No official checked source makes Discord the only access route.', 'Do not treat community membership as guaranteed access.'],
          ['What is server password?', 'Likely friction from private or timed test access.', 'Avoid posting passwords unless officially public.'],
          ['Can I review the build?', 'You can discuss impressions, but the build is not final.', 'Avoid final verdict language.'],
        ],
      },
      {
        id: 'discord',
        title: 'Discord, Feedback, and Bug Reports',
        image: enginefallImages.screenshot3,
        imageAlt: 'Enginefall official screenshot for Discord feedback and community context',
        caption:
          'The official blog repeatedly points players toward Discord for support and feedback during testing.',
        paragraphs: [
          'Discord matters for Enginefall because the current product stage is not a quiet store-page wait. The official blog talks about playtests, bug reporting, feedback, community suggestions, and future changes. That makes Discord an important support layer for players who are stuck, confused by access, or trying to understand whether a bug is known.',
          'A useful Discord section should not overpromise. It should tell users what Discord is good for: announcement follow-up, bug report channels, surveys, player feedback, clip sharing, and community coordination. It should also tell users what Discord is not: a guaranteed key dispenser, a replacement for Steam access, or a stable documentation source for final launch mechanics.',
          'The best guide angle is practical. If a player hits a bug, they should note what happened, where it happened, whether it can be reproduced, and attach screenshots or clips when appropriate. If a player has balance feedback, they should separate mechanical feedback from general frustration. That mirrors the kind of structured feedback the official posts ask for and helps the community produce better test data.',
        ],
        tableHeadings: ['Discord use', 'Good for', 'Not good for'],
        rows: [
          ['Announcements', 'Checking test updates and official posts.', 'Replacing the Steam store page.'],
          ['Bug reports', 'Sharing reproduction steps, screenshots, and clips.', 'Posting vague complaints with no context.'],
          ['Feedback', 'Explaining confusing systems and balance pain points.', 'Treating playtest balance as final.'],
          ['Community', 'Finding discussion and group context.', 'Trusting every access claim from random users.'],
        ],
      },
      {
        id: 'player-count',
        title: 'Player Count, Steam Charts, and Review Searches',
        image: enginefallImages.screenshot4,
        imageAlt: 'Enginefall official screenshot for player count and review context',
        caption:
          'Playtest metrics can show interest, but they do not measure the final launch population.',
        paragraphs: [
          'Enginefall player count searches are understandable because multiplayer survival games live or die by population. But a playtest count is not the same as a launch count. It depends on test window, region, time of day, invite flow, Steam visibility, demo availability, and server structure. A guide can explain where players usually check activity, but it should not treat a temporary test spike or dip as a final verdict.',
          'Review searches need the same caution. PC Gamer hands-on coverage is valuable because it gives outside context, including promise and rough edges. Steam discussions are valuable because they reveal user concerns around PvP, solo friction, controller support, access, and server questions. Neither source should be used as a finished review score. The page should tell players whether the test is worth trying, not whether the final game has succeeded.',
          'This is also why the playtest page should connect to the beginner guide. A player who only checks population may miss the bigger question: does the first session make sense? If the tutorial, extraction, and Dagger flow are confusing, the guide can help. If the player wants a polished PvE survival game with no player threat, the guide should say that Enginefall may not fit their expectation.',
        ],
        tableHeadings: ['Metric', 'What it can show', 'What it cannot prove'],
        rows: [
          ['Playtest player count', 'Short-term interest during an access window.', 'Final launch population.'],
          ['Steam Charts', 'Directional activity when a public app is visible.', 'Full audience including hidden tests or future launch.'],
          ['Reddit/Discord volume', 'Questions, friction, and community energy.', 'Commercial success.'],
          ['Hands-on previews', 'External impressions of the current build.', 'Final review quality.'],
        ],
      },
      {
        id: 'what-to-test',
        title: 'What Players Should Test First',
        image: enginefallImages.screenshot5,
        imageAlt: 'Enginefall official screenshot for first playtest priorities',
        caption:
          'A good playtest guide helps users produce useful feedback while also improving their own first session.',
        paragraphs: [
          'The first playtest session should not try to master everything. Players should test the entry flow, tutorial clarity, movement, looting readability, crafting prompts, extraction signals, Dagger return behavior, combat feel, and how quickly PvP pressure arrives. Those are the systems that determine whether a new player understands the game before another crew interrupts the run.',
          'Players should also take notes. If a door, crafting station, inventory item, or extraction cue is unclear, write down where it happened. If performance drops, note the hardware, settings, and scene. If the player dies without understanding why, note whether the problem was audio, UI, enemy readability, or another player. That turns frustration into useful feedback and gives the guide page real user value.',
          noFakeParagraph,
        ],
        tableHeadings: ['Test area', 'What to watch', 'Why it matters'],
        rows: [
          ['Tutorial', 'Whether first-time goals are clear.', 'New player retention depends on the first route.'],
          ['Looting', 'Whether value and usefulness are readable.', 'Extraction games need fast inventory decisions.'],
          ['Dagger', 'Whether return, storage, and fuel rules make sense.', 'The Dagger is the long-term home base.'],
          ['PvP', 'Whether encounters feel readable and escapable.', 'Player conflict is core to Enginefall.'],
        ],
      },
    ],
    faqs: [
      ...commonFaqs,
      {
        question: 'What are the Enginefall playtest dates?',
        answer:
          'Official wording centers the June 2026 access window around June 8-22, with one official post separating June 8-14 open playtest access and June 11-22 demo access.',
      },
      {
        question: 'Do I need an Enginefall playtest key?',
        answer:
          'Use Steam and official Enginefall channels as the source of truth. Do not trust third-party key or server-password claims unless the developer confirms them.',
      },
      {
        question: 'Is the Enginefall demo final content?',
        answer:
          'No. The demo and playtest build are development-stage content, so mechanics, balance, access, and requirements can change before launch.',
      },
    ],
  },
  beginner: {
    title: 'Enginefall Beginner Guide: How to Play, Extract, Craft and Survive Your First Run',
    description:
      'Enginefall beginner guide for June 2026 playtest players: how to play your first run, what to loot, when to craft, how to extract, and how to survive PvP pressure.',
    canonical: '/games/enginefall-beginner-guide',
    label: 'Beginner Guide',
    heroImage: enginefallImages.screenshot2,
    heroAlt: 'Enginefall official screenshot for beginner guide',
    sourceImage: enginefallImages.screenshot8,
    sourceImageAlt: 'Enginefall official screenshot for beginner guide source verification',
    sourceImageCaption:
      'Beginner advice should teach decisions that survive patches: route reading, extraction timing, crafting purpose, and PvP caution.',
    relatedImage: enginefallImages.screenshot9,
    relatedImageAlt: 'Enginefall official screenshot for beginner guide related links',
    relatedImageCaption:
      'Once the first run makes sense, continue into playtest access, Conductor, Dagger, and platform guidance.',
    faqImage: enginefallImages.screenshot10,
    faqImageAlt: 'Enginefall official screenshot for beginner guide FAQ',
    faqImageCaption:
      'The beginner FAQ keeps answers practical and avoids unstable tier lists, complete recipes, and final build claims.',
    blufTitle: 'First Run Priority',
    bluf: [
      'The first Enginefall goal is not to win the train. It is to understand the loop, leave with value, and learn what killed you. New players should move with a purpose, loot for immediate survival, craft to solve the next obstacle, avoid ego fights, and extract before the run turns into a trap.',
      versionParagraph,
    ],
    quickFacts: [
      ['Best first goal', 'Complete a modest loot-and-extract run instead of chasing First Class immediately.', 'working'],
      ['Main threat', 'Other players, contested rooms, confusion, and staying too long.', 'working'],
      ['First habit', 'Check exits before committing to looting or crafting.', 'working'],
      ['Crafting rule', 'Craft for the next obstacle, not for a perfect final build.', 'working'],
      ['Solo warning', 'Solo play is possible to attempt, but the current pitch is social PvP pressure.', 'needs-check'],
      ['Guide boundary', 'No final weapon ranking or recipe list until stable data exists.', 'verified'],
    ],
    answerTitle: 'How should beginners play Enginefall?',
    answer:
      'Beginners should treat Enginefall like an extraction run on rails: enter with a goal, loot only what helps survival or progression, craft practical tools, watch for other players, and extract once the run has enough value.',
    intentRows: [
      {
        query: 'enginefall how to play',
        answer: 'Play around the raid, loot, craft, extract, and Dagger upgrade loop.',
        href: '#first-run',
        label: 'Basics',
      },
      {
        query: 'enginefall how to extract',
        answer: 'Plan extraction before overcommitting to deeper rooms or high-risk fights.',
        href: '#extraction',
        label: 'Extract',
      },
      {
        query: 'enginefall crafting',
        answer: 'Craft to solve immediate problems; avoid pretending recipe balance is final.',
        href: '#crafting',
        label: 'Crafting',
      },
      {
        query: 'enginefall solo',
        answer: 'Solo players should move slower and avoid fights they do not need.',
        href: '#solo-pvp',
        label: 'Solo',
      },
    ],
    jumpLinks: [
      { href: '#first-run', label: 'First run' },
      { href: '#looting', label: 'Looting' },
      { href: '#crafting', label: 'Crafting' },
      { href: '#extraction', label: 'Extraction' },
      { href: '#solo-pvp', label: 'Solo/PvP' },
    ],
    sections: [
      {
        id: 'first-run',
        title: 'First Run Mindset: Learn the Loop Before You Chase Status',
        image: enginefallImages.screenshot3,
        imageAlt: 'Enginefall official screenshot showing train route pressure',
        caption:
          'A first run should teach route reading, looting, crafting, and extraction timing before the player chases deeper objectives.',
        paragraphs: [
          'A beginner should not load Enginefall with the goal of becoming the best raider on the first run. The game combines PvP, crafting, extraction, vertical train progression, and a personal Dagger base, so the first useful victory is understanding how those pieces connect. Enter the run with one small target: find useful materials, read the train space, craft one practical upgrade or tool, and extract without turning every sound into a fight.',
          'The official pitch says players start in the tail and push car by car toward better gear and First Class. That means early space is not worthless. It is where new players learn what items look like, how quickly risk rises, how other players move, and which exits matter. If the player sprints forward without a retreat plan, the run becomes a lesson in losing inventory rather than learning the system.',
          'A good first-run habit is to look for three things before looting deeply: a route back, a route forward, and a reason to stay. If none of those are clear, the player should slow down. Enginefall is not only about aim. It is about judging whether the next room is worth the time and noise. That is why this guide avoids fake best-build advice and focuses on practical decision making.',
          versionParagraph,
        ],
        tableHeadings: ['Beginner habit', 'Do this', 'Avoid this'],
        rows: [
          ['Set a goal', 'Choose a small target before entering deeper rooms.', 'Trying to clear every carriage.'],
          ['Read exits', 'Notice how to leave before looting.', 'Looting with no escape plan.'],
          ['Listen for players', 'Treat noise as information.', 'Assuming every encounter is PvE.'],
          ['Bank learning', 'Extract after useful progress.', 'Staying until the run collapses.'],
        ],
      },
      {
        id: 'looting',
        title: 'Looting: Carry Value You Can Actually Extract',
        image: enginefallImages.screenshot4,
        imageAlt: 'Enginefall official screenshot for looting and train movement',
        caption:
          'The best early loot is not the flashiest item. It is the item that helps the current run survive and the Dagger improve.',
        paragraphs: [
          'In extraction-style games, inventory greed is a beginner killer. Enginefall adds another layer because loot can feed crafting, survival, Dagger upgrades, and long-term progression. That makes every pickup feel potentially useful, but a full inventory does not matter if the player dies before extraction. Beginners should prioritize items that solve immediate problems first, then materials that support Dagger or progression goals.',
          'The right question is not, is this item good? The right question is, what job does this item do before I leave? If it improves survivability, opens a route, supports crafting, fuels the Dagger, or has clear value for extraction, it deserves space. If the player cannot explain its use, it may be clutter. This is especially true during a playtest where item balance can change and a written value list may be outdated quickly.',
          'The beginner guide should therefore teach a looting framework instead of a static item ranking. That gives players something useful even as patches land. It also leaves room to expand later if GSC shows searches for schematics, crafting, or specific materials after more stable data appears.',
        ],
        tableHeadings: ['Loot type', 'Why it matters', 'Beginner rule'],
        rows: [
          ['Survival item', 'Helps you live through the next room or retreat.', 'Keep if risk is rising.'],
          ['Crafting material', 'Turns into immediate tools, gear, or structures.', 'Keep if you know the next craft.'],
          ['Dagger support', 'May help fuel, storage, or long-term base value.', 'Prioritize if you can extract.'],
          ['Unknown clutter', 'Might be useful later but costs space now.', 'Drop if it blocks clear value.'],
        ],
      },
      {
        id: 'crafting',
        title: 'Crafting: Build for the Next Obstacle',
        image: enginefallImages.screenshot5,
        imageAlt: 'Enginefall official screenshot for crafting and combat preparation',
        caption:
          'Enginefall crafting is useful when it solves the next problem. It is risky when it becomes menu time in a dangerous route.',
        paragraphs: [
          'The official site highlights flexible crafting and build systems, and the Steam page describes crafting and building your way up the train. That is enough to write a beginner crafting guide, but not enough to write a complete recipe database. The current useful advice is to craft for the next obstacle: survival, access, combat, storage, or extraction support.',
          'Beginners should avoid two extremes. The first is ignoring crafting until every fight is harder than it needs to be. The second is spending too long in crafting menus while other players move through the same train. Crafting should happen when the benefit is clear and the location is reasonably controlled. If the player cannot protect the time, the craft may become a donation to the next crew.',
          'Because the game is still in development, build advice should use roles instead of final rankings. A defensive craft helps the player survive pressure. An access craft helps the player reach a locked or contested space. A mobility or extraction-oriented craft helps the player leave with value. This role-based framing stays useful even if item names or costs change.',
        ],
        tableHeadings: ['Craft role', 'When to use it', 'Why it is safer than tier lists'],
        rows: [
          ['Survival', 'When the next room is likely to involve damage.', 'Survival value remains useful across patches.'],
          ['Access', 'When a door, carriage, or objective blocks progress.', 'Access tools are tied to goals, not rankings.'],
          ['Storage/base', 'When extracted value needs long-term use.', 'The Dagger loop makes storage meaningful.'],
          ['Extraction', 'When you have enough loot to protect.', 'Leaving alive is better than overbuilding.'],
        ],
      },
      {
        id: 'extraction',
        title: 'Extraction: Leave Before the Run Turns Against You',
        image: enginefallImages.screenshot6,
        imageAlt: 'Enginefall official screenshot for extraction and escape planning',
        caption:
          'Extraction is the moment where a good run becomes real progression. Staying too long is often the most expensive beginner mistake.',
        paragraphs: [
          'The beginner extraction rule is simple: decide what makes the run worth leaving before the run starts. If the player waits until panic, low resources, or another crew forces the decision, extraction becomes harder. Enginefall rewards ambition, but it also punishes players who confuse one good room with permission to clear the whole train.',
          'Before pushing deeper, ask three questions. Do I know where I can leave? Do I have enough value to justify leaving now? If another player appears, can I escape without winning a perfect fight? If the answer to those questions is weak, bank the progress. A small successful extraction teaches more and upgrades more than a heroic death with full pockets.',
          'The official Conductor guide reinforces this mindset because even after reaching a powerful role, the final instruction is still to get out alive with Conductor loot. That tells us how to frame beginner extraction: status does not matter unless the player survives the exit.',
        ],
        tableHeadings: ['Extraction signal', 'Meaning', 'Beginner response'],
        rows: [
          ['Inventory has clear value', 'The run can already improve your account or Dagger.', 'Start looking for exit timing.'],
          ['Resources are low', 'Another fight may be too expensive.', 'Avoid deeper rooms.'],
          ['Player noise rises', 'A contested route is forming.', 'Leave or reposition.'],
          ['Objective complete', 'The run has served its purpose.', 'Extract before greed takes over.'],
        ],
      },
      {
        id: 'solo-pvp',
        title: 'Solo and PvP: Play Slower, Not Braver',
        image: enginefallImages.screenshot7,
        imageAlt: 'Enginefall official screenshot for PvP and solo caution',
        caption:
          'Enginefall is built around player conflict. Solo players should treat information and exits as their main defense.',
        paragraphs: [
          'Enginefall is pitched as a social multiplayer sandbox with human opponents and allies. That does not mean a solo player cannot try it, but it does mean solo expectations must be realistic. A solo player should not judge success by winning every duel. Success can be avoiding a bad fight, extracting with modest value, and learning routes without giving another crew a free inventory.',
          'Solo players should move slower, avoid noisy commitments, and treat every contested objective as optional unless the reward is worth the risk. If two groups are fighting, the solo player does not need to become the third participant. Sometimes the best play is to wait, listen, move around the pressure, or leave. This is not cowardice; it is extraction discipline.',
          'The page should not promise PvE-only comfort unless official sources confirm such a mode. Current official positioning emphasizes PvP, Dagger conflicts, raids, clans, and social features. That means the beginner guide should help cautious players survive the real game instead of selling them a different game.',
        ],
        tableHeadings: ['Solo problem', 'Practical response', 'Bad habit'],
        rows: [
          ['Outnumbered fights', 'Avoid unnecessary contact and rotate early.', 'Taking every duel.'],
          ['No backup', 'Keep exits in mind before opening inventory or crafting.', 'Standing still in unsafe rooms.'],
          ['Route uncertainty', 'Extract sooner and repeat small learning runs.', 'Pushing deep while lost.'],
          ['PvP frustration', 'Decide whether the game fit is right for you.', 'Expecting a pure PvE survival loop.'],
        ],
      },
    ],
    faqs: [
      ...commonFaqs,
      {
        question: 'How do you extract in Enginefall?',
        answer:
          'Plan extraction before pushing too deep. Leave once the run has clear value, resources are low, objective progress is complete, or player pressure is rising.',
      },
      {
        question: 'What should beginners loot first in Enginefall?',
        answer:
          'Prioritize items that help immediate survival, crafting for the next obstacle, Dagger support, or extraction value. Avoid filling inventory with items you cannot use or safely extract.',
      },
      {
        question: 'Can solo players enjoy Enginefall?',
        answer:
          'Solo players can attempt cautious runs, but the current pitch is built around multiplayer PvP pressure. Solo players should avoid unnecessary fights and extract earlier.',
      },
    ],
  },
  conductor: {
    title: 'How to Become Conductor in Enginefall: C00, Breacher, Control Room and Extraction',
    description:
      'Enginefall Conductor guide explaining the C00 route, Breacher use, Control Room registration, Conductor powers, Fuel Cores, keycard printing, and safe extraction.',
    canonical: '/games/enginefall-conductor-guide',
    label: 'Conductor Guide',
    heroImage: enginefallImages.screenshot3,
    heroAlt: 'Enginefall official screenshot for Conductor guide',
    sourceImage: enginefallImages.screenshot8,
    sourceImageAlt: 'Enginefall official screenshot for Conductor source verification',
    sourceImageCaption:
      'The Conductor page is grounded in the official C00, Breacher, Control Room, Fuel Core, keycard, and extraction guidance.',
    relatedImage: enginefallImages.screenshot9,
    relatedImageAlt: 'Enginefall official screenshot for Conductor related guides',
    relatedImageCaption:
      'Conductor planning connects naturally to Dagger fuel value, beginner extraction habits, and playtest access details.',
    faqImage: enginefallImages.screenshot10,
    faqImageAlt: 'Enginefall official screenshot for Conductor FAQ',
    faqImageCaption:
      'Conductor FAQ answers focus on what official sources confirm and avoid exact timers or costs that may change.',
    blufTitle: 'Conductor Route',
    bluf: [
      'The Conductor route is worth its own page because it is a named official system with direct search demand. The route is not automatic: reach Carriage C00, craft and plant a Breacher, enter the Control Room, register as Conductor, use the role, then extract before the train turns the reward into a death trap.',
      versionParagraph,
    ],
    quickFacts: [
      ['Target carriage', 'C00 and the Control Room.', 'verified'],
      ['Required access', 'Craft and plant a Breacher to enter locked Control Room access.', 'verified'],
      ['Role unlock', 'Register as Conductor inside the Control Room.', 'verified'],
      ['Role powers', 'Announcements, top-tier crafting, Conductor clothing, Fuel Cores, fuel resources, and keycard printing.', 'verified'],
      ['Main danger', 'The Control Room route is a likely combat flashpoint.', 'working'],
      ['Final goal', 'Extract with the loot and role value before the run goes sideways.', 'verified'],
    ],
    answerTitle: 'How do you become Conductor in Enginefall?',
    answer:
      'Travel through the train to Carriage C00, craft and plant a Breacher to enter the locked Control Room path, register as Conductor inside, use the role powers quickly, and leave through extraction with the loot you can protect.',
    intentRows: [
      {
        query: 'enginefall conductor',
        answer: 'Conductor is a powerful role earned inside the Control Room rather than a starting class.',
        href: '#role',
        label: 'Role',
      },
      {
        query: 'how to become conductor enginefall',
        answer: 'Reach C00, breach the locked area, register in the Control Room, then extract.',
        href: '#steps',
        label: 'Steps',
      },
      {
        query: 'enginefall breacher',
        answer: 'The Breacher is the access tool used to force entry toward the Control Room.',
        href: '#breacher',
        label: 'Access',
      },
      {
        query: 'enginefall fuel cores',
        answer: 'Fuel Cores are one of the resources the Conductor can produce from the Control Room.',
        href: '#powers',
        label: 'Powers',
      },
    ],
    jumpLinks: [
      { href: '#role', label: 'Role' },
      { href: '#steps', label: 'Steps' },
      { href: '#breacher', label: 'Breacher' },
      { href: '#powers', label: 'Powers' },
      { href: '#extract', label: 'Extract' },
    ],
    sections: [
      {
        id: 'role',
        title: 'What the Conductor Role Means',
        image: enginefallImages.screenshot1,
        imageAlt: 'Enginefall official screenshot for Conductor role context',
        caption:
          'Conductor is a role earned during a run. It is powerful because it controls systems, crafting, fuel, and communication.',
        paragraphs: [
          'The official Conductor guide describes the role as a high-power position at the center of the action. That matters because Conductor is not a cosmetic title or a menu class selected before the match. It is something earned during a run by reaching the correct carriage, breaching access, and registering in the Control Room.',
          'That structure creates a natural guide page. Players need to know where the route starts, why C00 matters, when to craft the Breacher, what kind of danger to expect near the Control Room, what powers unlock after registration, and when to leave. The official article gives the skeleton. Enjoy4Game can add player-facing risk framing without inventing mechanics.',
          'The role also tells us how Enginefall thinks about progression. It rewards movement through the train, contesting important rooms, using crafted access tools, and turning temporary control into extracted value. If the player becomes Conductor but dies before leaving, the run still fails in practical terms.',
          versionParagraph,
        ],
        tableHeadings: ['Conductor concept', 'Meaning', 'Player takeaway'],
        rows: [
          ['Earned role', 'You become Conductor during the run.', 'Plan route and materials before attempting it.'],
          ['Control Room', 'The role is tied to a specific high-value location.', 'Expect other players to contest it.'],
          ['System power', 'The role unlocks communication, crafting, and fuel options.', 'Use powers quickly and deliberately.'],
          ['Extraction required', 'The role matters only if you leave with value.', 'Do not stay just to show control.'],
        ],
      },
      {
        id: 'steps',
        title: 'Step-by-Step Conductor Route',
        image: enginefallImages.screenshot2,
        imageAlt: 'Enginefall official screenshot for C00 route planning',
        caption:
          'The official route is clear enough to teach, but each step needs a risk note because C00 will attract attention.',
        paragraphs: [
          'The high-level route is direct. Travel through the train until reaching Carriage C00. The main entry doors are locked, so the player needs to craft a Breacher. After planting the Breacher and waiting for completion, the player can force entry. From there, move up into the Control Room and register as Conductor.',
          'The risk is in the timing. Any step that requires waiting, planting, or moving through a known high-value point can attract another crew. Beginners should not treat the route like a solo puzzle. They should assume that sound, door state, and player movement can expose the attempt. A team should assign roles before starting: one player handles the objective, another watches approach angles, and another prepares extraction or retreat.',
          'Solo players can still learn the route conceptually, but they should be more cautious about committing to a full Conductor attempt in a live PvP environment. Reaching the area, learning the layout, and leaving with moderate loot may be a better first goal than forcing a Control Room contest without support.',
        ],
        tableHeadings: ['Step', 'Action', 'Risk note'],
        rows: [
          ['1. Reach C00', 'Move through the train toward the Control Room carriage.', 'The deeper route is more contested.'],
          ['2. Prepare Breacher', 'Craft the required access tool before the locked entry.', 'Do not craft exposed if player noise is nearby.'],
          ['3. Plant Breacher', 'Start the forced-entry process.', 'Waiting can reveal your plan.'],
          ['4. Register', 'Enter the Control Room and claim Conductor.', 'Claim fast and avoid lingering.'],
        ],
      },
      {
        id: 'breacher',
        title: 'Breacher Timing and Control Room Entry',
        image: enginefallImages.screenshot4,
        imageAlt: 'Enginefall official screenshot for Breacher timing and entry risk',
        caption:
          'The Breacher is not just a key. It is a commitment that can turn the route into a public fight.',
        paragraphs: [
          'The Breacher is the key route detail because it turns a locked Control Room path into an active objective. A beginner might think of it as a simple door opener, but in a PvP game it is also a signal. Planting a Breacher says that someone is trying to take a valuable room. Any player who understands that value may push, wait, or ambush.',
          'Good Breacher timing begins before the craft. Check whether your inventory supports the attempt, whether teammates know their roles, whether extraction is still realistic, and whether the area is too noisy. If the route is already contested, the Breacher may become a bait tool rather than a safe entry tool. That does not make it bad. It means the player needs to know what fight they are starting.',
          'The guide should avoid claiming exact timers, costs, or counters unless those are verified in the current build. Those values can change. The stable advice is about process: prepare, secure, plant, watch, enter, register, and leave.',
        ],
        tableHeadings: ['Timing check', 'Good sign', 'Bad sign'],
        rows: [
          ['Inventory', 'You have the materials and support items ready.', 'You still need to search exposed rooms.'],
          ['Area sound', 'Nearby space is quiet or controlled.', 'Multiple players are already fighting close by.'],
          ['Team roles', 'Someone watches entry while someone handles objective.', 'Everyone stares at the same door.'],
          ['Exit plan', 'You know how to leave after registration.', 'You only planned how to get in.'],
        ],
      },
      {
        id: 'powers',
        title: 'What Conductor Unlocks',
        image: enginefallImages.screenshot5,
        imageAlt: 'Enginefall official screenshot for Conductor powers and crafting context',
        caption:
          'The official guide names the broad power set. Current pages should explain uses without inventing exact stat values.',
        paragraphs: [
          'The official Conductor guide lists several powerful actions: communicate with the entire train through announcements and messages, craft the highest-tier weapons and armor, create Conductor-exclusive clothing, produce Fuel Cores directly from the Control Room, craft fuel-related resources outside the train such as fuel nodes and shards, and print a Control Room keycard for easier access.',
          'That list is enough to explain why the role is contested. It touches communication, gear quality, fuel economy, identity items, and access control. It also creates several future SEO branches, but those branches should not be split until player search data appears. For now, one Conductor page can cover the powers and link to the Dagger guide for fuel/base context.',
          'Players should use powers according to the run state. If extraction risk is high, printing access or producing the most immediately useful fuel or gear may matter more than experimenting with every option. If the area is secure and teammates are holding space, the group can spend more time converting the role into long-term value. The key is not to become Conductor and then freeze.',
        ],
        tableHeadings: ['Power area', 'Officially described function', 'Practical guide angle'],
        rows: [
          ['Communication', 'Announcements and messages to the whole train.', 'Use information and pressure deliberately.'],
          ['Crafting', 'Highest-tier weapons and armor.', 'Craft what supports survival and extraction.'],
          ['Fuel', 'Fuel Cores and fuel-related resources.', 'Connect role value to Dagger and train progression.'],
          ['Access', 'Control Room keycard printing.', 'Protect future movement without overstaying.'],
        ],
      },
      {
        id: 'extract',
        title: 'Getting Out Alive After Becoming Conductor',
        image: enginefallImages.screenshot6,
        imageAlt: 'Enginefall official screenshot for Conductor extraction planning',
        caption:
          'The Conductor run is not complete at registration. The official guide still tells players to extract.',
        paragraphs: [
          'The official guide ends with the most important reminder: once you have gathered what you need, leave. That should shape the entire page. Becoming Conductor is not the finish line. It is the point where the run becomes more valuable and more dangerous. Other players may know the room is active, teammates may overstay to craft more, and the group may forget that extracted value is the real reward.',
          'A clean Conductor extraction starts before registration. Decide what value is enough, which exit is closest, who carries what, and whether the group will fight or disengage if challenged. If the team has no answer, they are not ready to turn the role into progress. The Control Room can make the group feel powerful, but power does not stop a bad retreat.',
          noFakeParagraph,
        ],
        tableHeadings: ['After registration', 'Do this', 'Do not do this'],
        rows: [
          ['Choose value', 'Take the role output that matters for the run.', 'Try every option while exposed.'],
          ['Assign carriers', 'Know who holds key loot or resources.', 'Let everyone grab randomly.'],
          ['Move to exit', 'Leave before the area becomes a trap.', 'Wait for another crew to arrive.'],
          ['Review attempt', 'Note what blocked or enabled success.', 'Assume one route works forever.'],
        ],
      },
    ],
    faqs: [
      ...commonFaqs,
      {
        question: 'Where is the Conductor in Enginefall?',
        answer:
          'The Conductor route leads to Carriage C00 and the Control Room. Players must breach access and register inside the Control Room.',
      },
      {
        question: 'What does the Breacher do in Enginefall?',
        answer:
          'The Breacher is used to force entry toward the Control Room route. Treat it as both an access tool and a PvP signal.',
      },
      {
        question: 'What can the Conductor do?',
        answer:
          'The official guide lists whole-train communication, high-tier crafting, Conductor clothing, Fuel Core production, fuel resources, and Control Room keycard printing.',
      },
    ],
  },
  dagger: {
    title: 'Enginefall Dagger Guide: Shuttle Base, Fuel, Storage, Schematics and Raids',
    description:
      'Enginefall Dagger guide explaining the Dagger shuttle, personal rail base, fuel, storage, schematics, Dagger vs Dagger combat, raid risk, and first upgrade priorities.',
    canonical: '/games/enginefall-dagger-guide',
    label: 'Dagger Guide',
    heroImage: enginefallImages.screenshot4,
    heroAlt: 'Enginefall official screenshot for Dagger shuttle guide',
    sourceImage: enginefallImages.screenshot8,
    sourceImageAlt: 'Enginefall official screenshot for Dagger source verification',
    sourceImageCaption:
      'Dagger coverage uses official world and playtest language for shuttle, base, fuel, schematics, and Dagger vs Dagger pressure.',
    relatedImage: enginefallImages.screenshot9,
    relatedImageAlt: 'Enginefall official screenshot for Dagger related guides',
    relatedImageCaption:
      'Dagger planning links back to extraction habits, playtest status, Conductor fuel value, and platform checks.',
    faqImage: enginefallImages.screenshot10,
    faqImageAlt: 'Enginefall official screenshot for Dagger FAQ',
    faqImageCaption:
      'The Dagger FAQ explains current confirmed concepts without inventing a complete upgrade tree or stable raid meta.',
    blufTitle: 'Dagger Role',
    bluf: [
      'The Dagger is important enough for a standalone guide because it is not just transportation. The official site describes it as the player home on rails, while current and future content mentions Dagger bases, Dagger vs Dagger combat, storage, fuel, schematics, and long-term upgrades.',
      versionParagraph,
    ],
    quickFacts: [
      ['What it is', 'A shuttle and personal rail base used by Freerailers.', 'verified'],
      ['Long-term role', 'Upgrade point for extracted loot and personal progression.', 'verified'],
      ['Confirmed pressure', 'Dagger vs Dagger combat is part of official playtest and future feature language.', 'working'],
      ['Fuel relevance', 'Fuel Cores and fuel resources connect Conductor value to rail survival.', 'verified'],
      ['Storage caution', 'Storage and schematic systems are patch-sensitive.', 'working'],
      ['Guide boundary', 'No complete upgrade tree until stable data exists.', 'verified'],
    ],
    answerTitle: 'What is the Dagger in Enginefall?',
    answer:
      'The Dagger is the Freerailer shuttle and personal home on rails. It supports movement, extracted value, upgrades, storage-style planning, fuel pressure, and future Dagger vs Dagger conflict.',
    intentRows: [
      {
        query: 'enginefall dagger',
        answer: 'The Dagger is your shuttle and personal rail base, not just a vehicle skin.',
        href: '#what-is-dagger',
        label: 'Basics',
      },
      {
        query: 'dagger shuttle enginefall',
        answer: 'The official world text describes Dagger shuttles as service craft that Freerailers use outside Titan Train society.',
        href: '#world',
        label: 'Lore',
      },
      {
        query: 'enginefall base',
        answer: 'The Dagger is the main base concept for extracted loot and long-term upgrades.',
        href: '#base',
        label: 'Base',
      },
      {
        query: 'enginefall fuel',
        answer: 'Fuel pressure connects Dagger planning, Conductor output, and train survival.',
        href: '#fuel',
        label: 'Fuel',
      },
    ],
    jumpLinks: [
      { href: '#what-is-dagger', label: 'Dagger' },
      { href: '#world', label: 'World role' },
      { href: '#base', label: 'Base' },
      { href: '#fuel', label: 'Fuel' },
      { href: '#raids', label: 'Raids' },
    ],
    sections: [
      {
        id: 'what-is-dagger',
        title: 'What the Dagger Does',
        image: enginefallImages.screenshot1,
        imageAlt: 'Enginefall official screenshot for Dagger role overview',
        caption:
          'The Dagger guide should explain the shuttle as a gameplay system, a home base, and a reason extraction matters.',
        paragraphs: [
          'The official site describes Dagger Shuttles as service craft designed to operate alongside Titan Trains. In the player fantasy, a stolen shuttle installed with a jailbroken AI becomes the Freerailer way to live outside the train system, raid Titan Trains, and build a life away from the ruling structure. That lore matters because it explains why the Dagger is not a disposable vehicle.',
          'From a gameplay guide perspective, the Dagger is where extraction value becomes long-term meaning. If a player raids a train, collects materials, and leaves alive, that value needs somewhere to go. The Dagger is the natural answer: home, shuttle, upgrade target, storage context, and future conflict space. This is why the beginner guide should constantly remind players to leave with value instead of dying with full pockets.',
          'The Dagger also connects multiple Enginefall search intents. Players searching Dagger may need lore, fuel, storage, schematic, base, or raid answers. That is too much for a small hub section and too specific for a general platform page. A dedicated Dagger page keeps all shuttle/base questions together without forcing unsupported upgrade-tree claims.',
          versionParagraph,
        ],
        tableHeadings: ['Dagger function', 'What it means', 'Guide approach'],
        rows: [
          ['Shuttle', 'A rail craft tied to movement outside Titan Train society.', 'Explain how it fits the world and loop.'],
          ['Home base', 'A place where extracted value matters.', 'Teach planning and priorities.'],
          ['Upgrade target', 'Long-term progression can attach to the Dagger.', 'Avoid complete trees until stable.'],
          ['Conflict target', 'Dagger vs Dagger pressure is part of official language.', 'Teach risk, not fake counters.'],
        ],
      },
      {
        id: 'world',
        title: 'Dagger Shuttles in the Enginefall World',
        image: enginefallImages.screenshot2,
        imageAlt: 'Enginefall official screenshot for Dagger world context',
        caption:
          'The official world page gives enough context to explain why Freerailers depend on Dagger shuttles.',
        paragraphs: [
          'Enginefall worldbuilding separates Titan Train passengers from Freerailers. Titan Trains are moving cities organized by class, while Freerailers live outside that system, often aboard Dagger shuttles. This creates the social conflict underneath the gameplay. You are not only looting a train because it has items. You are raiding the system that controls fuel, space, class, and survival.',
          'That context makes the Dagger emotionally important. It is the player identity as much as a base. A Dagger is what lets the player exist outside the Titan Train hierarchy. When the official site says players can turn a Dagger from a rust bucket into an assault craft and eventually take control of larger trains, it is describing a progression fantasy that can support months of guide updates.',
          'For now, the page should keep the lore practical. Terms like Titan Train, Freerailer, Dagger, Marauder train, Fuel Core, and Control Room should be explained because players will see them across the official site and blogs. A glossary-style explanation is useful, but it should stay grounded in official wording and avoid inventing faction mechanics that have not been confirmed.',
        ],
        tableHeadings: ['Term', 'Meaning', 'Why players care'],
        rows: [
          ['Titan Train', 'A massive moving city and raid target.', 'Defines the main run space.'],
          ['Freerailer', 'A survivor outside Titan Train society.', 'Defines the player fantasy.'],
          ['Dagger Shuttle', 'The rail craft and home base used by Freerailers.', 'Links extraction to progression.'],
          ['Marauder train', 'A larger player-owned train concept in official future language.', 'Useful future update topic.'],
        ],
      },
      {
        id: 'base',
        title: 'Base, Storage, and Schematics',
        image: enginefallImages.screenshot5,
        imageAlt: 'Enginefall official screenshot for Dagger base and storage context',
        caption:
          'Storage and schematic details are useful, but exact values must wait for stable data.',
        paragraphs: [
          'A Dagger base guide should help players understand priorities rather than claim a final upgrade order. Extracted resources, storage capacity, schematic access, fuel pressure, and defense all compete for attention. The best early question is not what is the best upgrade? The better question is what problem is currently blocking the next run?',
          'If the player runs out of space, storage planning matters. If the player cannot support routes or fuel pressure, fuel-related planning matters. If the player loses value to other players, defense and retreat discipline matter. If the player does not know what to craft next, schematic clarity matters. These are guide sections that stay useful across patches because they teach diagnosis.',
          'Official Steam News and blog language mention Dagger changes, base systems, schematics, and playtest iteration. That is enough to discuss categories, but not enough to publish a complete schematic tree. This page should explicitly say that exact upgrade names, costs, and priority orders should be updated after hands-on testing or official documentation stabilizes.',
        ],
        tableHeadings: ['Base problem', 'Likely priority', 'Why not fake exact data'],
        rows: [
          ['Too little space', 'Storage and organization.', 'Exact storage values can change.'],
          ['Run support weak', 'Fuel or practical crafting support.', 'Fuel economy is patch-sensitive.'],
          ['No clear next craft', 'Schematic discovery and planning.', 'Complete schematic data is not stable yet.'],
          ['Frequent losses', 'Safer extraction and base defense thinking.', 'PvP balance can change rapidly.'],
        ],
      },
      {
        id: 'fuel',
        title: 'Fuel, Fuel Cores, and Why Conductor Links to Dagger',
        image: enginefallImages.screenshot6,
        imageAlt: 'Enginefall official screenshot for fuel and train systems context',
        caption:
          'Fuel connects high-value Control Room play with long-term Dagger and rail progression.',
        paragraphs: [
          'Fuel is one of the cleanest bridges between the Conductor guide and the Dagger guide. The official Conductor guide says the role can produce Fuel Cores directly from the Control Room and craft fuel-related resources outside the train, including fuel nodes and shards. That makes fuel more than a background resource. It is part of why the Control Room route can matter to a Dagger-focused player.',
          'A fuel section should explain the relationship, not invent a complete economy. Players should know that fuel value can influence route planning, extraction priority, and Dagger progression. They should not be told that a specific node, shard, or core value is best unless the guide has current build proof.',
          'This approach keeps the page useful and honest. It tells a player why fuel terms are important, where they appear in official material, and how to think about them in a run. It leaves room to add exact farming routes after reliable data exists.',
        ],
        tableHeadings: ['Fuel term', 'Current confirmed context', 'Guide caution'],
        rows: [
          ['Fuel Core', 'Conductor can produce it from the Control Room.', 'Do not invent exact rates.'],
          ['Fuel node', 'Official Conductor guide references fuel-related resources.', 'Needs build-specific testing.'],
          ['Fuel shard', 'Official Conductor guide references fuel-related resources.', 'Needs build-specific testing.'],
          ['Dagger fuel pressure', 'Dagger and rail survival make fuel strategically important.', 'Explain priority, not exact economy.'],
        ],
      },
      {
        id: 'raids',
        title: 'Dagger vs Dagger Raids and Defensive Thinking',
        image: enginefallImages.screenshot7,
        imageAlt: 'Enginefall official screenshot for Dagger vs Dagger raid pressure',
        caption:
          'Dagger vs Dagger pressure means players should think about exposure, storage, and extraction discipline from the start.',
        paragraphs: [
          'Official playtest and future feature language includes Dagger vs Dagger combat. That means the Dagger is not a safe menu space in every possible context. It can become part of the conflict layer. A guide should prepare players for that idea without pretending to know every raid rule before the final build.',
          'Defensive thinking begins before a raid. Do not carry every valuable item into unnecessary danger. Do not overstay after a good extraction target. Do not assume the route back is safe because it was safe ten minutes earlier. If Dagger pressure grows in later builds, these habits will matter even more.',
          noFakeParagraph,
        ],
        tableHeadings: ['Raid risk', 'Preparation', 'Bad assumption'],
        rows: [
          ['Other players contest route', 'Track sound and avoid predictable returns.', 'Home route is always safe.'],
          ['Storage value exposed', 'Bank and organize extracted value carefully.', 'All loot is safe after pickup.'],
          ['Fuel pressure rises', 'Treat fuel as strategic, not cosmetic.', 'Fuel only matters late game.'],
          ['Patch changes rules', 'Read current official updates.', 'Old raid advice always applies.'],
        ],
      },
    ],
    faqs: [
      ...commonFaqs,
      {
        question: 'What is the Dagger shuttle in Enginefall?',
        answer:
          'The Dagger is the Freerailer shuttle and personal home on rails, used for movement, extracted value, upgrades, and long-term progression.',
      },
      {
        question: 'Does Enginefall have Dagger vs Dagger combat?',
        answer:
          'Official playtest and future feature language references Dagger vs Dagger combat. Exact rules should be treated as playtest-sensitive.',
      },
      {
        question: 'Should I follow a complete Dagger upgrade tree now?',
        answer:
          'No. Dagger upgrades, schematics, storage, and fuel details should wait for stable hands-on data before being turned into a fixed upgrade tree.',
      },
    ],
  },
  platforms: {
    title: 'Enginefall System Requirements, Steam Deck, PS5, Xbox and PC Platform Status',
    description:
      'Enginefall platform guide covering official PC system requirements, Steam Deck status, PS5 and Xbox caveats, controller expectations, and what is not confirmed.',
    canonical: '/games/enginefall-system-requirements-platforms',
    label: 'System Requirements & Platforms',
    heroImage: enginefallImages.screenshot6,
    heroAlt: 'Enginefall official screenshot for system requirements and platform status',
    sourceImage: enginefallImages.screenshot11,
    sourceImageAlt: 'Enginefall official screenshot for platform source verification',
    sourceImageCaption:
      'Platform coverage uses Steam for official PC requirements and keeps PS5, Xbox, and Steam Deck claims separate from search demand.',
    relatedImage: enginefallImages.screenshot12,
    relatedImageAlt: 'Enginefall official screenshot for platform related guides',
    relatedImageCaption:
      'After platform checks, players can move to playtest access, beginner survival, Conductor, or Dagger system pages.',
    faqImage: enginefallImages.screenshot13,
    faqImageAlt: 'Enginefall official screenshot for platform FAQ',
    faqImageCaption:
      'The platform FAQ gives direct answers for PC specs, console status, and Steam Deck verification without overclaiming.',
    blufTitle: 'Platform Answer',
    bluf: [
      'The confirmed Enginefall platform is Windows PC via Steam. PS5 and Xbox have search demand, but demand is not confirmation. Steam Deck is also not the same as PC support. The page should answer all of these directly because vague platform language creates bad clicks.',
      versionParagraph,
    ],
    quickFacts: [
      ['Confirmed store', 'Steam.', 'verified'],
      ['Confirmed OS', 'Windows 10 64-bit minimum on the Steam listing.', 'verified'],
      ['Minimum CPU', 'Intel Core i7-8700K or AMD Ryzen 7 2700X.', 'verified'],
      ['Minimum RAM', '16 GB RAM.', 'verified'],
      ['Minimum GPU', 'NVIDIA GTX 1080 or AMD Radeon RX 5700.', 'verified'],
      ['Storage note', 'SSD is strongly recommended by the Steam requirements text.', 'verified'],
      ['PS5 / Xbox', 'Not officially confirmed in checked sources.', 'needs-check'],
      ['Steam Deck', 'Not verified in checked sources.', 'needs-check'],
    ],
    answerTitle: 'What platforms is Enginefall on?',
    answer:
      'Enginefall is officially listed for Windows PC via Steam. PS5, Xbox, and Steam Deck verification are not confirmed by the checked official sources, even though users are searching for those platforms.',
    intentRows: [
      {
        query: 'enginefall system requirements',
        answer: 'Steam lists a Windows 10 64-bit baseline, 16 GB RAM, i7-8700K or Ryzen 7 2700X, and GTX 1080 or RX 5700.',
        href: '#pc-specs',
        label: 'Specs',
      },
      {
        query: 'enginefall ps5',
        answer: 'No official PS5 version is confirmed in the checked sources.',
        href: '#console',
        label: 'PS5',
      },
      {
        query: 'enginefall xbox',
        answer: 'No official Xbox version is confirmed in the checked sources.',
        href: '#console',
        label: 'Xbox',
      },
      {
        query: 'enginefall steam deck',
        answer: 'Steam Deck verification is not confirmed; treat handheld play as unknown until tested.',
        href: '#steam-deck',
        label: 'Deck',
      },
    ],
    jumpLinks: [
      { href: '#pc-specs', label: 'PC specs' },
      { href: '#console', label: 'Console' },
      { href: '#steam-deck', label: 'Steam Deck' },
      { href: '#performance', label: 'Performance' },
      { href: '#buying-check', label: 'Checklist' },
    ],
    sections: [
      {
        id: 'pc-specs',
        title: 'Official PC System Requirements',
        image: enginefallImages.header,
        imageAlt: 'Enginefall official Steam artwork for PC requirements',
        caption:
          'Steam provides the current minimum PC baseline, but also warns that requirements are not final during development.',
        paragraphs: [
          'Steam lists Enginefall with a Windows 10 64-bit minimum, a 64-bit processor and operating system requirement, Intel Core i7-8700K or AMD Ryzen 7 2700X, 16 GB RAM, NVIDIA GTX 1080 or AMD Radeon RX 5700, DirectX 12, broadband internet, and an SSD strongly recommended. The listing also notes that system requirements are not final at this stage of development.',
          'That last note matters. A system requirements page should not treat the current minimum spec as a permanent launch floor. The developer says ongoing optimization will improve performance across a wider range of hardware, which means players below the current listed baseline may still want to wait for updated requirements rather than assume the game will never run.',
          'For SEO, this page should give the direct table answer first, then explain practical interpretation. If a player is near the listed minimum, they should expect to test cautiously. If a player is well below it, they should wait for updated specs or demo reports. If a player has a hard drive instead of an SSD, the official note already makes the safer recommendation clear.',
          versionParagraph,
        ],
        tableHeadings: ['Spec', 'Official current minimum', 'Player note'],
        rows: [
          ['OS', 'Windows 10 64-bit.', 'Windows PC via Steam is the confirmed platform.'],
          ['CPU', 'Intel Core i7-8700K or AMD Ryzen 7 2700X.', 'Current development baseline, not final launch promise.'],
          ['RAM', '16 GB RAM.', 'Treat 8 GB systems as below current minimum.'],
          ['GPU', 'NVIDIA GTX 1080 or AMD Radeon RX 5700.', 'Wait for updated testing if below this range.'],
        ],
      },
      {
        id: 'console',
        title: 'PS5 and Xbox Status',
        image: enginefallImages.screenshot1,
        imageAlt: 'Enginefall official screenshot for PS5 and Xbox platform demand',
        caption:
          'PS5 and Xbox autocomplete demand exists, but official confirmation is narrower than search interest.',
        paragraphs: [
          'Google Suggest shows Enginefall PS5 and Enginefall Xbox demand. That is useful for prioritizing the page, but it does not make those versions real. The official Steam data confirms PC. The official site points users toward Steam and wishlist behavior. No checked official source confirms a PS5 or Xbox release at the time this page is written.',
          'The page should say this directly because console users deserve a clear answer. Soft wording like available on platforms or coming to consoles can create false expectations. A better answer is: PC via Steam is confirmed, PS5 and Xbox are not confirmed, and future console announcements should be checked through Enginefall official channels.',
          'This page can still capture console searches without misleading users. It can explain why people are asking, what would count as confirmation, where to check, and how to follow updates. That is a useful search result even when the answer is no.',
        ],
        tableHeadings: ['Platform', 'Current answer', 'What would change it'],
        rows: [
          ['PS5', 'Not confirmed.', 'Official PlayStation listing or developer announcement.'],
          ['Xbox Series X|S', 'Not confirmed.', 'Official Xbox listing, Game Pass post, or developer announcement.'],
          ['PC Steam', 'Confirmed.', 'Already listed on Steam.'],
          ['Cloud/Game Pass', 'Not confirmed.', 'Official Microsoft or developer announcement.'],
        ],
      },
      {
        id: 'steam-deck',
        title: 'Steam Deck Status',
        image: enginefallImages.screenshot2,
        imageAlt: 'Enginefall official screenshot for Steam Deck caveat',
        caption:
          'Steam Deck support should not be assumed from PC support alone, especially for an online PvP test build.',
        paragraphs: [
          'Steam Deck is a separate question from PC availability. A game can be listed for Windows and still have text readability, controller mapping, anti-cheat, online, or performance issues on Deck. Enginefall is also a multiplayer PvP game with extraction pressure, which makes input reliability and readable UI especially important.',
          'The correct current answer is that Steam Deck verification is not confirmed by the checked sources. If a player wants to test anyway through the demo or playtest, they should treat the experience as experimental and watch for login, controller, text size, FPS, and network issues. They should not assume a Verified-style experience.',
          'This is not negative coverage. It is accurate coverage. Steam Deck users often want to know whether a game is playable enough, not whether a marketing page says PC. A cautious page can still be helpful by explaining what to test and what would count as a real confirmation.',
        ],
        tableHeadings: ['Deck check', 'What to test', 'Why it matters'],
        rows: [
          ['Launch/access', 'Can the Steam test or demo open cleanly?', 'Online test builds can have access friction.'],
          ['Controls', 'Can menus, combat, looting, and crafting be controlled comfortably?', 'PvP punishes awkward input.'],
          ['Readability', 'Can UI text and item information be read on the Deck screen?', 'Inventory decisions need speed.'],
          ['Performance', 'Can the game hold stable FPS during train combat?', 'Stutter can ruin extraction fights.'],
        ],
      },
      {
        id: 'performance',
        title: 'Performance Expectations During Playtest',
        image: enginefallImages.screenshot3,
        imageAlt: 'Enginefall official screenshot for performance and optimization expectations',
        caption:
          'The current build is still in development, so performance coverage should be framed as testing guidance.',
        paragraphs: [
          'The Steam requirements text says the specs are not final and that ongoing optimization will improve performance across hardware. That means any performance page should avoid final benchmark language. It is fair to say the current minimum is relatively demanding. It is not fair to say the launch version will require exactly the same hardware.',
          'Players testing the June 2026 build should focus on practical observations: initial load time, FPS during train combat, stutter when entering busy spaces, network stability, input delay, and whether lowering settings improves consistency. Those observations are more useful than a single number because the game is multiplayer and run-based. A beautiful screenshot is less important than stable performance during extraction.',
          'If Enjoy4Game later gets hands-on capture, this page can add a tested-settings table. Until then, the honest version is a source-checked official spec page with a clear caution around development-stage optimization.',
        ],
        tableHeadings: ['Performance area', 'Watch for', 'Current page stance'],
        rows: [
          ['FPS', 'Drops during combat and crowded train spaces.', 'Needs hands-on testing.'],
          ['Loading', 'SSD benefit and long load points.', 'SSD is strongly recommended.'],
          ['Network', 'Disconnects or server friction during playtest.', 'Build and server dependent.'],
          ['Settings', 'Whether lower settings improve consistency.', 'Do not publish exact settings without testing.'],
        ],
      },
      {
        id: 'buying-check',
        title: 'Pre-Launch Platform Checklist',
        image: enginefallImages.screenshot4,
        imageAlt: 'Enginefall official screenshot for platform buying checklist',
        caption:
          'Because Enginefall is unreleased, platform advice should help users decide whether to wishlist, test, or wait.',
        paragraphs: [
          'The practical platform decision is simple. If you have a Windows PC near or above the current Steam minimum and you like PvP survival extraction games, wishlist or test Enginefall through official Steam access. If you are a console-only player, follow official channels and wait. If you are a Steam Deck player, wait for verification or hands-on reports unless you are comfortable experimenting with an unsupported test build.',
          'This checklist also protects the site from overclaiming. It answers real platform searches but does not pretend to have console news, Steam Deck validation, or final performance data. That is exactly the kind of page Google can understand: direct answer, official source, caveat, and next action.',
          noFakeParagraph,
        ],
        tableHeadings: ['Player type', 'Best action', 'Reason'],
        rows: [
          ['Windows PC above minimum', 'Wishlist and test official demo/playtest access.', 'You match the confirmed platform.'],
          ['Windows PC below minimum', 'Wait for optimization updates or demo reports.', 'Current minimum may be too high.'],
          ['Console-only player', 'Follow official announcements.', 'No PS5 or Xbox version is confirmed.'],
          ['Steam Deck player', 'Wait for verification or test cautiously.', 'Deck status is unknown.'],
        ],
      },
    ],
    faqs: [
      ...commonFaqs,
      {
        question: 'What are Enginefall minimum system requirements?',
        answer:
          'Steam currently lists Windows 10 64-bit, Intel Core i7-8700K or AMD Ryzen 7 2700X, 16 GB RAM, NVIDIA GTX 1080 or AMD Radeon RX 5700, DirectX 12, broadband internet, and an SSD strongly recommended.',
      },
      {
        question: 'Is Enginefall on PS5 or Xbox?',
        answer:
          'No official PS5 or Xbox version is confirmed by the checked sources. PC via Steam is the confirmed platform.',
      },
      {
        question: 'Is Enginefall Steam Deck Verified?',
        answer:
          'No Steam Deck verification is confirmed by the checked sources. Treat Deck play as unknown until official verification or reliable hands-on testing exists.',
      },
    ],
  },
} satisfies Record<string, EnginefallPageData>;
