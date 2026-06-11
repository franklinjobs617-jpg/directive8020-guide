import type { Metadata } from 'next';
import { romestead, type GameGuideLink } from '@/lib/games';

export const romesteadLastModified = '2026-05-25';
export const romesteadSteamUrl =
 'https://store.steampowered.com/app/1805320/Romestead/';
export const romesteadSteamDbUrl = 'https://steamdb.info/app/1805320/';
export const romesteadSteamNewsUrl =
 'https://store.steampowered.com/news/app/1805320';

export const romesteadImages = {
 hero: '/games/romestead/hero.webp',
 capsule: '/games/romestead/capsule.webp',
 screenshot1: '/games/romestead/official-settlement.webp',
 screenshot2: '/games/romestead/official-building.webp',
 screenshot3: '/games/romestead/official-coop.webp',
 screenshot4: '/games/romestead/official-exploration.webp',
 screenshot5: '/games/romestead/official-combat.webp',
 screenshot6: '/games/romestead/official-dungeon.webp',
 planningAnimalFarm: '/games/romestead/planning-animal-farm.webp',
 planningCropHarvesting: '/games/romestead/planning-crop-harvesting.webp',
 planningFarmOverview: '/games/romestead/planning-farm-overview.webp',
 planningVillageMarket: '/games/romestead/planning-village-market.webp',
 screenshotCombat: '/games/romestead/profession-combat.webp',
 screenshotBase: '/games/romestead/profession-base.webp',
 screenshotBuilding: '/games/romestead/profession-building.webp',
};

export const romesteadVideos = [
 {
 id: '4Bd2YetKWg4',
 title: 'Romestead - Early Access Release Date Trailer',
 caption:
 'Official trailer reference for the Early Access launch, Roman settlement fantasy, co-op framing, exploration, crafting, and night defense.',
 },
];

export const romesteadQuickFacts = [
 ['Release timing', 'Steam shows May 25, 2026 by store display; SteamDB unlock timing points to May 26, 2026 at 06:30 UTC. Check your local Steam page before planning a session.'],
 ['Launch state', 'Early Access, not a finished 1.0 release. The developer expects roughly 1-2 years in Early Access.'],
 ['Platform', 'PC via Steam is the confirmed public platform.'],
 ['Developer / Publisher', 'Beartwigs / Three Friends.'],
 ['Genre fit', 'Survival crafting, town building, action RPG, colony sim, and open-world survival.'],
 ['Players', 'Official Steam description lists solo play and 1-8 players.'],
 ['Co-op features', 'Steam lists Online Co-op and LAN Co-op. Split-screen and console crossplay are not confirmed.'],
 ['Core loop', 'Gather resources, craft, build a Roman settlement, recruit survivors, explore, fight undead at night, clear dungeons, and use blessings from Roman gods.'],
 ['Steam features', 'Single-player, Online Co-op, LAN Co-op, Steam Cloud, and Family Sharing.'],
 ['Languages', 'English full audio with multiple text languages including English, Simplified Chinese, Traditional Chinese, French, German, Spanish, Portuguese, Russian, Polish, Japanese, and Korean.'],
];

export const romesteadReleaseRows = [
 ['Steam release date', 'Steam displays May 25, 2026, while SteamDB unlock timing points to May 26, 2026 at 06:30 UTC.', 'Store timing can vary by region and unlock source.'],
 ['Early Access', 'Confirmed.', 'Treat Romestead as an in-development game with updates, balance changes, and possible rough edges.'],
 ['PC / Windows', 'Confirmed on Steam.', 'Windows is the only verified platform at this check.'],
 ['Xbox / PlayStation', 'Not confirmed in current official store data.', 'Do not buy based on console assumptions.'],
 ['Demo', 'Check Steam directly before installing.', 'Demo availability can change around launch.'],
 ['Steam Deck', 'Not confirmed as Verified at this check.', 'Wait for launch reports if Deck is your main device.'],
 ['Controller support', 'Needs launch testing.', 'Steam feature labels should be checked again after unlock.'],
 ['Reviews', 'Needs post-unlock player signal.', 'Use early reviews as a stability and content-depth check, not only a score.'],
];

export const romesteadBeginnerRows = [
 {
 step: 'Secure food and basic resources',
 doThis: 'Spend the first day collecting wood, stone, food, and nearby materials before chasing distant points of interest.',
 why: 'A survival town builder becomes harder when your settlement starts without a buffer.',
 },
 {
 step: 'Build workstations early',
 doThis: 'Prioritize the stations that unlock storage, basic tools, cooking, and settlement upgrades.',
 why: 'Crafting speed and storage discipline matter more than a decorative layout in the first hour.',
 },
 {
 step: 'Prepare for night defense',
 doThis: 'Keep your first base compact, light the useful areas, and avoid spreading survivors across an exposed settlement.',
 why: 'Steam describes undead attacks at night, so your first layout should be defensible.',
 },
 {
 step: 'Recruit with jobs in mind',
 doThis: 'Use survivors to reduce repeated chores, then check which roles make gathering, farming, crafting, or defense easier.',
 why: 'The colony layer is strongest when workers solve recurring problems instead of only adding numbers.',
 },
 {
 step: 'Explore after your base is stable',
 doThis: 'Scout biomes, caves, and dungeon routes after food, storage, and basic defense are handled.',
 why: 'Exploration is useful, but overextending before the settlement works can create a recovery spiral.',
 },
 {
 step: 'Use blessings carefully',
 doThis: 'Treat Roman god blessings as build direction until players verify the strongest combinations.',
 why: 'Launch-window balance may shift, so flexible choices are safer than chasing a claimed best build.',
 },
];

export const romesteadCoopRows = [
 ['Player count', 'Official description lists 1-8 players.', 'Confirmed'],
 ['Online co-op', 'Steam lists Online Co-op.', 'Confirmed'],
 ['LAN co-op', 'Steam lists LAN Co-op.', 'Confirmed'],
 ['Split-screen / couch co-op', 'Not confirmed in current Steam feature labels.', 'Not confirmed'],
 ['Crossplay', 'Not confirmed because only Steam PC is verified right now.', 'Not confirmed'],
 ['Dedicated servers', 'Not confirmed in current official feature labels.', 'Needs testing'],
 ['Host saves', 'Needs launch testing before making firm claims.', 'Needs testing'],
 ['Best group size', 'Start with 2-4 players until pacing, scaling, and resource sharing are tested.', 'Practical advice'],
];

export const romesteadSpecRows = [
 ['OS', 'Windows 10', 'Windows 10'],
 ['Processor', 'Intel Core i5', 'Intel Core i7'],
 ['Memory', '8 GB RAM', '16 GB RAM'],
 ['Graphics', 'DirectX 11 compatible GPU listed through DirectX requirement', 'DirectX 11 compatible GPU listed through DirectX requirement'],
 ['DirectX', 'Version 11', 'Version 11'],
 ['Network', 'Broadband internet connection for online play', 'Broadband internet connection'],
 ['Storage', '2 GB available space', '4 GB available space'],
];

export const romesteadWorthRows = [
 ['Buy now if', 'You specifically want a Roman-inspired survival crafting and town-building game, plan to play on Windows PC, and are comfortable with Early Access development.'],
 ['Try the demo first if', 'Steam shows a playable demo in your region and you want to test performance, controls, camera comfort, crafting flow, and co-op setup before buying.'],
 ['Wait if', 'You need a finished 1.0 campaign, verified Steam Deck support, console versions, polished controller support, stable late-game balance, or settled player reviews.'],
 ['Best fit', 'Players who enjoy base building, survivor management, night defense, co-op gathering, dungeon runs, and progression through settlement upgrades.'],
 ['Poor fit', 'Players looking for a finished story RPG, PvP, split-screen co-op, console play, or a fully documented endgame on day one.'],
 ['Early Access risk', 'The developer expects about 1-2 years in Early Access, so recipes, balance, performance, UI, and content depth can change.'],
];

export const romesteadSourceRows = [
 {
 claim: 'What is Romestead and who makes it?',
 source: 'Steam store',
 status: 'verified' as const,
 href: romesteadSteamUrl,
 note: 'Use Steam for developer, publisher, genre tags, platform, Early Access label, languages, feature labels, and system requirements.',
 },
 {
 claim: 'Why do release dates show May 25 and May 26?',
 source: 'SteamDB',
 status: 'working' as const,
 href: romesteadSteamDbUrl,
 note: 'Steam store display and SteamDB unlock timing can differ by region and UTC conversion, so the page explains both instead of forcing one answer.',
 },
 {
 claim: 'Is Romestead a finished 1.0 game?',
 source: 'Steam Early Access section',
 status: 'verified' as const,
 href: romesteadSteamUrl,
 note: 'The store presents Romestead as Early Access and gives an estimated 1-2 year development window.',
 },
 {
 claim: 'How many players does Romestead support?',
 source: 'Steam store',
 status: 'verified' as const,
 href: romesteadSteamUrl,
 note: 'The official description lists 1-8 players and Steam feature labels include Online Co-op and LAN Co-op.',
 },
 {
 claim: 'Is Romestead on console or Steam Deck?',
 source: 'Steam store',
 status: 'needs-check' as const,
 href: romesteadSteamUrl,
 note: 'PC via Steam is verified. Console versions and Steam Deck compatibility should not be claimed without official store support or launch reports.',
 },
];

export const romesteadRelatedGuides: GameGuideLink[] = [
 {
 title: 'Romestead Guide Hub',
 href: romestead.hubPath,
 description:
 'Start here for release timing, Early Access status, co-op, PC specs, beginner priorities, and buying advice.',
 },
 ...romestead.guideLinks,
];

export const rmWorthItActionRows = [
  {
    step: '1. Match the buy decision to your Early Access tolerance',
    doThis: 'Decide whether you want to participate in the launch window or wait for a more settled 1.0 build before buying.',
    why: 'Romestead is sold as Early Access with a 1-2 year development window. The right buying answer depends on how you treat patches and rough edges.',
  },
  {
    step: '2. Use the first 2 hours to test the parts that matter to you',
    doThis: 'Test performance, controls, camera comfort, crafting, building, co-op, and saves inside Steam refund rules.',
    why: 'Steam refunds are time-limited. A short structured test is the safest way to decide if the build is right for you.',
  },
  {
    step: '3. Read recent reviews, not just the launch summary',
    doThis: 'Open Steam and read a mix of recent reviews from players who share your playstyle or group size.',
    why: 'The launch summary flattens nuance. Recent reviews tell you whether performance, balance, and co-op are improving or stalling.',
  },
  {
    step: '4. If you want a co-op world, test host saves and reconnects',
    doThis: 'Have the most stable player host a short test world. Try joining, leaving, and rejoining before committing to a long settlement.',
    why: 'Co-op value is real, but launch-window co-op can expose save and reconnect issues that solo players never see.',
  },
  {
    step: '5. Watch the developer updates and patch notes',
    doThis: 'Track Steam Community news, patch notes, and the developer FAQ for the first weeks after launch.',
    why: 'Early Access is most useful when you follow the patches. Patch notes are the best buying signal during Early Access.',
  },
] as const;

export const rmWorthItStatusItems = [
  { label: 'Launch state', value: 'Early Access with an expected 1-2 year development window per the Steam page.', status: 'verified' as const },
  { label: 'Co-op value', value: '1-8 players with Online Co-op and LAN Co-op make this a strong co-op candidate.', status: 'verified' as const },
  { label: 'Steam Deck', value: 'Steam Deck Verified status is not confirmed at this check. Deck-first players should wait.', status: 'needs-check' as const },
  { label: 'Console versions', value: 'Xbox and PlayStation versions are not confirmed in current official store data.', status: 'needs-check' as const },
  { label: 'Solo pacing', value: 'Solo play is supported but late-game balance needs post-launch player evidence.', status: 'working' as const },
  { label: 'Refund safety', value: 'Steam refund rules apply. Test the parts that matter inside the refund window.', status: 'verified' as const },
];

export const rmWorthItSourceRows = [
  {
    claim: 'Romestead is sold as an Early Access game with a 1-2 year estimated development window.',
    source: 'Steam store',
    status: 'verified' as const,
    href: romesteadSteamUrl,
    note: 'Confirms the Early Access framing for the buying decision.',
  },
  {
    claim: 'Steam lists 1-8 players, Online Co-op, and LAN Co-op as supported co-op features.',
    source: 'Steam store',
    status: 'verified' as const,
    href: romesteadSteamUrl,
    note: 'Use the Steam feature labels as the official co-op baseline.',
  },
  {
    claim: 'Steam Deck Verified status is not confirmed at this check.',
    source: 'Steam store',
    status: 'needs-check' as const,
    href: romesteadSteamUrl,
    note: 'Deck-first players should wait for verified status or strong launch reports.',
  },
  {
    claim: 'Console versions (Xbox, PlayStation) are not confirmed in current official store data.',
    source: 'Steam store',
    status: 'needs-check' as const,
    href: romesteadSteamUrl,
    note: 'Do not buy based on console assumptions.',
  },
];

export const rmWorthItSearchIntent = [
  {
    query: 'Is Romestead worth buying in Early Access',
    answer: 'Buy now if you want a Roman-inspired survival town builder on PC and accept Early Access risk. Wait for 1.0 if you need a finished game.',
    href: '#buy-now',
    label: 'Buy now',
  },
  {
    query: 'Romestead Steam Deck status',
    answer: 'Steam Deck Verified status is not confirmed. Deck-first players should wait for launch testing.',
    href: '#steam-deck',
    label: 'Steam Deck',
  },
  {
    query: 'Romestead co-op value',
    answer: '1-8 players, Online Co-op, and LAN Co-op are listed. Test host saves, scaling, and reconnects before committing a large group.',
    href: '#coop-value',
    label: 'Co-op value',
  },
  {
    query: 'Romestead refund safety',
    answer: 'Use Steam refund rules. Spend the first 2 hours testing performance, saves, building, and co-op before deciding.',
    href: '#refund',
    label: 'Refund safety',
  },
];

export const rmWorthItJumpLinks = [
  { href: '#buy-now', label: 'Buy now' },
  { href: '#coop-value', label: 'Co-op value' },
  { href: '#steam-deck', label: 'Steam Deck' },
  { href: '#refund', label: 'Refund safety' },
  { href: '/games/romestead/multiplayer-coop', label: 'Multiplayer co-op' },
  { href: '/games/romestead/system-requirements', label: 'System requirements' },
];

export const rmCoopActionRows = [
  {
    step: '1. Read the official Steam co-op labels first',
    doThis: 'Open Steam, view Romestead, and read the Online Co-op, LAN Co-op, and Single-player labels before inviting anyone.',
    why: 'The Steam feature labels are the most reliable official signal for what co-op modes the build actually supports at launch.',
  },
  {
    step: '2. Pick the host with the most stable connection',
    doThis: 'Have the player with the best PC and connection host the first co-op session.',
    why: 'Host PC and connection quality affect how everyone else plays. Choosing the best host first avoids blaming the wrong cause for co-op issues.',
  },
  {
    step: '3. Start with 2-4 players for a first settlement',
    doThis: 'Use 2-4 players as the practical starting group size even though the official cap is 1-8.',
    why: 'Official 1-8 player support is the ceiling. A smaller first group makes roles, saves, and resource sharing easier to manage.',
  },
  {
    step: '4. Assign clear roles from the start',
    doThis: 'Split into builder, gatherer, defender, and farmer-crafter. Avoid scattering across the map before the base is stable.',
    why: 'Role split is the cleanest way to keep a shared settlement productive when the group is exploring at the same time.',
  },
  {
    step: '5. Test host saves, rejoining, and resource sharing',
    doThis: 'Test joining, leaving, rejoining, and whether resources are host-bound or player-bound before a long session.',
    why: 'Early Access co-op titles can change save, scaling, and inventory rules between patches. A short test world is the safest first run.',
  },
] as const;

export const rmCoopStatusItems = [
  { label: 'Player count', value: 'Official description lists 1-8 players.', status: 'verified' as const },
  { label: 'Online co-op', value: 'Online Co-op listed on Steam.', status: 'verified' as const },
  { label: 'LAN co-op', value: 'LAN Co-op listed on Steam.', status: 'verified' as const },
  { label: 'Split-screen or couch co-op', value: 'Not confirmed in current Steam feature labels.', status: 'needs-check' as const },
  { label: 'Crossplay', value: 'Not confirmed because only PC via Steam is verified right now.', status: 'needs-check' as const },
  { label: 'Dedicated servers', value: 'Not confirmed in current official feature labels.', status: 'needs-check' as const },
  { label: 'Host saves', value: 'Needs launch testing. Let the most stable player host a short test world first.', status: 'needs-check' as const },
];

export const rmCoopSourceRows = [
  {
    claim: 'Steam lists 1-8 players, Online Co-op, and LAN Co-op for Romestead.',
    source: 'Steam store',
    status: 'verified' as const,
    href: romesteadSteamUrl,
    note: 'Use Steam feature labels as the official co-op baseline.',
  },
  {
    claim: 'Split-screen, couch co-op, and console crossplay are not in the current Steam feature list.',
    source: 'Steam store',
    status: 'needs-check' as const,
    href: romesteadSteamUrl,
    note: 'Do not assume these features until Steam or the developer announces them.',
  },
  {
    claim: 'Romestead is in Early Access with an expected 1-2 year development window.',
    source: 'Steam Early Access section',
    status: 'verified' as const,
    href: romesteadSteamUrl,
    note: 'Use as context for why co-op rules may change between patches.',
  },
  {
    claim: 'Host-save behavior and dedicated servers are not part of the current official feature labels.',
    source: 'Steam store',
    status: 'needs-check' as const,
    href: romesteadSteamUrl,
    note: 'Test host saves and stability in a short world before committing a large group.',
  },
];

export const rmCoopSearchIntent = [
  {
    query: 'Romestead co-op player count',
    answer: 'The official Steam description lists 1-8 players. Online Co-op and LAN Co-op are confirmed.',
    href: '#player-count',
    label: 'Player count',
  },
  {
    query: 'Romestead split screen or couch co-op',
    answer: 'Split-screen and couch co-op are not confirmed in current Steam feature labels. Online and LAN co-op are confirmed.',
    href: '#split-screen',
    label: 'Split screen',
  },
  {
    query: 'Romestead crossplay',
    answer: 'Crossplay is not confirmed right now because PC via Steam is the only verified public platform.',
    href: '#crossplay',
    label: 'Crossplay',
  },
  {
    query: 'Romestead host saves and reconnects',
    answer: 'Host saves and rejoin behavior need launch testing. Start with a short test world hosted by the most stable player.',
    href: '#host-saves',
    label: 'Host saves',
  },
];

export const rmCoopJumpLinks = [
  { href: '#player-count', label: 'Player count' },
  { href: '#split-screen', label: 'Split screen' },
  { href: '#crossplay', label: 'Crossplay' },
  { href: '#host-saves', label: 'Host saves' },
  { href: '/games/romestead/is-it-worth-it', label: 'Is it worth it' },
  { href: '/games/romestead/system-requirements', label: 'System requirements' },
];

export const rmSpecActionRows = [
  {
    step: '1. Compare your PC against the official minimum line',
    doThis: 'Check Windows edition, CPU, RAM, GPU, DirectX, network, and storage against the Steam minimum line before launching.',
    why: 'The Steam minimum line is the only official reference for whether the game is expected to run on your PC.',
  },
  {
    step: '2. Use the minimum as a floor, not a target',
    doThis: 'Treat the minimum spec as the entry point. Leave extra headroom for co-op, recording, and background apps.',
    why: 'Town builders get heavier as the settlement grows, workers increase, and night combat adds more on-screen activity.',
  },
  {
    step: '3. Test co-op separately from solo performance',
    doThis: 'Play solo for the first 30 minutes. If solo is unstable, troubleshoot the PC before blaming the network.',
    why: 'Co-op performance issues often come from host PC load, not the network. Separating the two saves debugging time.',
  },
  {
    step: '4. Treat Steam Deck status as unconfirmed',
    doThis: 'Do not assume Romestead is Steam Deck Verified. Wait for verified status or strong launch reports.',
    why: 'Steam Deck Verified status is not confirmed at this check. Text size, controls, and building comfort need real testing.',
  },
  {
    step: '5. Watch storage headroom, not just the listed 2 GB',
    doThis: 'Keep more than the listed 2-4 GB free so Steam can patch, unpack, and maintain cache files.',
    why: 'Steam needs free space to update the game. A full drive causes patch and launch issues that look like game bugs.',
  },
] as const;

export const rmSpecStatusItems = [
  { label: 'OS', value: 'Windows 10 listed in both the minimum and recommended spec on Steam.', status: 'verified' as const },
  { label: 'Processor', value: 'Intel Core i5 minimum, Intel Core i7 recommended.', status: 'verified' as const },
  { label: 'Memory', value: '8 GB RAM minimum, 16 GB RAM recommended.', status: 'verified' as const },
  { label: 'Graphics', value: 'DirectX 11 compatible GPU listed through the DirectX requirement.', status: 'verified' as const },
  { label: 'Network', value: 'Broadband internet connection listed for online play.', status: 'verified' as const },
  { label: 'Storage', value: '2 GB available space minimum, 4 GB available space recommended.', status: 'verified' as const },
  { label: 'Steam Deck', value: 'Steam Deck Verified status is not confirmed at this check.', status: 'needs-check' as const },
];

export const rmSpecSourceRows = [
  {
    claim: 'Romestead lists Windows 10, Intel Core i5, 8 GB RAM, DirectX 11, broadband internet, and 2 GB storage as the minimum spec.',
    source: 'Steam store',
    status: 'verified' as const,
    href: romesteadSteamUrl,
    note: 'Use the minimum spec as the only official reference for whether Romestead is expected to run.',
  },
  {
    claim: 'Romestead lists Windows 10, Intel Core i7, 16 GB RAM, DirectX 11, broadband internet, and 4 GB storage as the recommended spec.',
    source: 'Steam store',
    status: 'verified' as const,
    href: romesteadSteamUrl,
    note: 'Recommended spec is the official upgrade target when you want smoother co-op or settlement growth.',
  },
  {
    claim: 'Steam Deck Verified status is not confirmed at this check.',
    source: 'Steam store',
    status: 'needs-check' as const,
    href: romesteadSteamUrl,
    note: 'Wait for verified status or strong launch reports before buying for Steam Deck.',
  },
  {
    claim: 'Online co-op needs a stable broadband connection, with LAN Co-op also listed.',
    source: 'Steam store',
    status: 'verified' as const,
    href: romesteadSteamUrl,
    note: 'Use the Steam feature labels as the official co-op baseline for network testing.',
  },
];

export const rmSpecSearchIntent = [
  {
    query: 'Romestead minimum system requirements',
    answer: 'Windows 10, Intel Core i5, 8 GB RAM, DirectX 11, broadband internet, and 2 GB storage.',
    href: '#min-spec',
    label: 'Minimum spec',
  },
  {
    query: 'Romestead recommended specs',
    answer: 'Windows 10, Intel Core i7, 16 GB RAM, DirectX 11, broadband internet, and 4 GB storage.',
    href: '#rec-spec',
    label: 'Recommended spec',
  },
  {
    query: 'Is Romestead Steam Deck verified',
    answer: 'Steam Deck Verified status is not confirmed at this check. Wait for verified status or strong launch reports.',
    href: '#steam-deck',
    label: 'Steam Deck',
  },
  {
    query: 'Romestead storage and DirectX',
    answer: 'Steam lists 2 GB storage minimum and 4 GB storage recommended. DirectX 11 is required for both tiers.',
    href: '#storage-dx',
    label: 'Storage and DirectX',
  },
];

export const rmSpecJumpLinks = [
  { href: '#min-spec', label: 'Minimum spec' },
  { href: '#rec-spec', label: 'Recommended spec' },
  { href: '#steam-deck', label: 'Steam Deck' },
  { href: '#storage-dx', label: 'Storage and DirectX' },
  { href: '/games/romestead/multiplayer-coop', label: 'Multiplayer co-op' },
  { href: '/games/romestead/is-it-worth-it', label: 'Is it worth it' },
];

export function getRomesteadRelated(excludeHref: string) {
 return romesteadRelatedGuides.filter((guide) => guide.href !== excludeHref).slice(0, 6);
}

const romesteadKeywords = [
 'Romestead',
 'Romestead guide',
 'Romestead release date',
 'Romestead Early Access',
 'Romestead multiplayer',
 'Romestead co-op',
 'Romestead beginner guide',
 'Romestead settlement',
 'Romestead citizens',
 'Romestead base building',
 'Romestead night defense',
 'Romestead system requirements',
 'Romestead Steam Deck',
 'Romestead worth it',
];

export function createRomesteadMetadata({
 title,
 description,
 canonical,
 image = romesteadImages.hero,
}: {
 title: string;
 description: string;
 canonical: string;
 image?: string;
}): Metadata {
 return {
 title: { absolute: title },
 description,
 keywords: romesteadKeywords,
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
