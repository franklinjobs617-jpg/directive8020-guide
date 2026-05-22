import type { Metadata } from 'next';
import { mechanicusII, type GameGuideLink } from '@/lib/games';

export const mechanicusIILastModified = '2026-05-22';
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
  hero:
    'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2532480/4b9ea5b45f304a841fc68520cc729307629fa9bd/header.jpg?t=1779383649',
  capsule:
    'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2532480/capsule_616x353.jpg?t=1779383649',
  screenshot1:
    'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2532480/ss_7a8c07e7508ae07ad5be6feb4fb6dca719c39e64.1920x1080.jpg?t=1779383649',
  screenshot2:
    'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2532480/ss_503b032ec1052626e03e765c7d2be61a398a08dc.1920x1080.jpg?t=1779383649',
  screenshot3:
    'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2532480/ss_7e6c1a4ed82924fda829d5cddc0765c2157b7c22.1920x1080.jpg?t=1779383649',
  screenshot4:
    'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2532480/ss_9e5e9a7dc28a1b0376ed490b3c2d1d58445a13dd.1920x1080.jpg?t=1779383649',
};

export const mechanicusIIVideos = [
  {
    id: 'XgN37iXFSGY',
    title: 'Warhammer 40,000: Mechanicus II - Release Date Trailer',
    caption:
      'Official trailer for release timing, faction tone, and the Adeptus Mechanicus versus Necron setup.',
  },
];

export const mechanicusIIQuickFacts = [
  ['Release date', 'May 21, 2026.'],
  ['Platforms', 'PC via Steam, PlayStation 5, and Xbox Series X|S. Epic also has a store page, but it shows Coming Soon at the latest check.'],
  ['Developer / Publisher', 'Bulwark Studios / Kasedo Games.'],
  ['Genre', 'Fast-paced turn-based tactics, strategy, RPG, and action strategy.'],
  ['Main factions', 'Adeptus Mechanicus and Necrons, with distinct campaigns.'],
  ['Steam Deck', 'Unsupported at launch according to the official Steam FAQ and Steam Deck compatibility data.'],
  ['Steam price', '$39.99 US base price, with a $35.99 introductory Steam price at the latest check.'],
  ['Launch discount', 'Steam currently shows a 10% introductory offer ending May 28, 2026.'],
  ['Steam reviews', 'Mixed Steam user reviews at the latest check, with 59% positive across 208 Steam purchaser reviews.'],
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

export const mechanicusIIFactionRows = [
  ['Adeptus Mechanicus', 'Best first fit for players who want tech-priest flavor, battlefield control, and a more methodical Imperial campaign perspective.'],
  ['Necrons', 'Best first fit for players who want ancient machine-legion fantasy, awakening tomb-world pressure, and a campaign from the other side of the war.'],
  ['Leagues of Votann', 'Public preview coverage says the Leagues of Votann appear in the story, but they are not presented as a playable third campaign faction.'],
  ['Resource identity', 'Adeptus Mechanicus players should expect Cognition decisions; Necron players should expect Dominion decisions.'],
  ['Not yet safe to claim', 'Final best units, optimal army compositions, and hardest-mission counters still need hands-on campaign verification.'],
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
    note: 'Epic has a product page, but it shows Coming Soon at the latest check, so use Steam for confirmed PC purchase status.',
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
