import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb } from '@/components/breadcrumb';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';

const title = 'Best Co-op Games on Steam 2026: Top 15 Picks to Play With Friends';
const description =
  'The best co-op games on Steam in 2026, ranked by group size, co-op design, Steam reception, price, and what kind of friends each game fits.';
const canonical = '/best-co-op-games-steam-2026';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical,
  },
};

interface CoopGame {
  rank: number;
  name: string;
  appId: string;
  imageUrl: string;
  bestFor: string;
  groupSize: string;
  coOpStyle: string;
  price: string;
  releaseDate: string;
  steamReception: string;
  whyItWorks: string;
  bestGroup: string;
  watchOut: string;
  soloNote: string;
  steamUrl: string;
}

const coopGames: CoopGame[] = [
  {
    rank: 1,
    name: 'Split Fiction',
    appId: '2001120',
    imageUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2001120/header.jpg?t=1763484567',
    bestFor: 'Best New Two-Player Co-op',
    groupSize: 'Exactly 2 players',
    coOpStyle: 'Story platforming, puzzle rooms, shared timing',
    price: '$32.49',
    releaseDate: 'Mar 2025',
    steamReception: 'Overwhelmingly Positive',
    whyItWorks:
      'Split Fiction is built around two people solving different halves of the same problem. One player is rarely just tagging along; most scenes ask both players to move, react, or solve at the same time.',
    bestGroup:
      'Best for two friends or a couple who want a full co-op campaign with constant variety instead of loot grinding.',
    watchOut:
      'It is not a drop-in group game. You need one consistent partner, and both players should enjoy platforming and quick scene changes.',
    soloNote: 'No real solo route. Treat it as a dedicated two-player game.',
    steamUrl: 'https://store.steampowered.com/app/2001120/Split_Fiction/',
  },
  {
    rank: 2,
    name: 'It Takes Two',
    appId: '1426210',
    imageUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1426210/header.jpg?t=1777395376',
    bestFor: 'Best Classic Two-Player Co-op',
    groupSize: 'Exactly 2 players',
    coOpStyle: 'Puzzle platforming, mini-games, story chapters',
    price: '$11.99',
    releaseDate: 'Mar 2021',
    steamReception: 'Overwhelmingly Positive',
    whyItWorks:
      'It Takes Two remains the safest answer when someone asks for a co-op game that actually needs two people. Every chapter changes the rules, and most puzzles are designed around separate roles.',
    bestGroup:
      'Best for two players who want a polished campaign, local or online co-op, and a clear ending.',
    watchOut:
      'The tone is lighter than the relationship story suggests. If your group wants serious RPG depth or combat builds, this is the wrong pick.',
    soloNote: 'No solo mode. One player can use Friend Pass through Steam.',
    steamUrl: 'https://store.steampowered.com/app/1426210/It_Takes_Two/',
  },
  {
    rank: 3,
    name: 'Deep Rock Galactic',
    appId: '548430',
    imageUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/548430/37b58a6c4816ee60b0ca97cb6724d6e904c58c41/header.jpg?t=1782116973',
    bestFor: 'Best Four-Player PvE Co-op',
    groupSize: '1-4 players',
    coOpStyle: 'Class roles, mining missions, extraction, horde fights',
    price: '$8.99',
    releaseDate: 'May 2020',
    steamReception: 'Overwhelmingly Positive',
    whyItWorks:
      'Deep Rock Galactic gives every player a job. Driller opens routes, Scout lights caves, Engineer controls space, and Gunner protects the team. That role clarity makes random groups and friend groups both work.',
    bestGroup:
      'Best for 3-4 players who want repeatable missions, upgrades, jokes, and clean class teamwork.',
    watchOut:
      'Mission repetition is part of the loop. If your group needs a story campaign, pick Split Fiction, It Takes Two, or Baldur\'s Gate 3 instead.',
    soloNote: 'Solo works with Bosco, but the game is strongest with a full team.',
    steamUrl: 'https://store.steampowered.com/app/548430/Deep_Rock_Galactic/',
  },
  {
    rank: 4,
    name: 'Helldivers 2',
    appId: '553850',
    imageUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553850/f11c258b04a5e3e7771c1bab60f324ebf6c6c6fb/header.jpg?t=1779899567',
    bestFor: 'Best Chaotic Shooter Co-op',
    groupSize: '1-4 players',
    coOpStyle: 'Extraction shooter missions, friendly fire, stratagem calls',
    price: '$29.99',
    releaseDate: 'Feb 2024',
    steamReception: 'Mostly Positive',
    whyItWorks:
      'Helldivers 2 turns mistakes into the fun. Bad stratagem timing, panic reloads, and last-second extraction saves create stories your group will remember after the mission ends.',
    bestGroup:
      'Best for 3-4 players who like voice chat, messy tactical decisions, and hard missions that can collapse quickly.',
    watchOut:
      'Friendly fire is always part of the design. Groups that get angry at accidental deaths should pick Deep Rock Galactic instead.',
    soloNote: 'Solo is possible on lower difficulty, but the game is tuned around squads.',
    steamUrl: 'https://store.steampowered.com/app/553850/HELLDIVERS_2/',
  },
  {
    rank: 5,
    name: 'Baldur\'s Gate 3',
    appId: '1086940',
    imageUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/48a2fcbda8565bb45025e98fd8ebde8a7203f6a0/header.jpg?t=1777363040',
    bestFor: 'Best Co-op RPG',
    groupSize: '1-4 players',
    coOpStyle: 'Turn-based RPG, role-play choices, online and LAN co-op',
    price: '$44.99',
    releaseDate: 'Aug 2023',
    steamReception: 'Overwhelmingly Positive',
    whyItWorks:
      'Baldur\'s Gate 3 works because co-op changes the story, not just the combat. Different players can start conversations, trigger trouble, split the party, and pull the campaign in unexpected directions.',
    bestGroup:
      'Best for patient friends who want a long campaign, role-play freedom, and tactical fights over many sessions.',
    watchOut:
      'It is a large commitment. If your group rarely finishes campaigns, choose a mission-based game like Deep Rock Galactic or Helldivers 2.',
    soloNote: 'Excellent solo. Co-op is optional, not required.',
    steamUrl: 'https://store.steampowered.com/app/1086940/Baldurs_Gate_3/',
  },
  {
    rank: 6,
    name: 'Stardew Valley',
    appId: '413150',
    imageUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg?t=1754692865',
    bestFor: 'Best Cozy Co-op',
    groupSize: '1-8 players',
    coOpStyle: 'Farming, town life, fishing, mining, shared planning',
    price: '$8.99',
    releaseDate: 'Feb 2016',
    steamReception: 'Overwhelmingly Positive',
    whyItWorks:
      'Stardew Valley gives friends a shared farm without forcing everyone into the same task. One player can fish, another can mine, another can farm, and the group still moves the same save forward.',
    bestGroup:
      'Best for relaxed groups, couples, and friends who want a low-pressure game that can run for months.',
    watchOut:
      'The pace is calm. Players who need constant combat, raids, or voice-chat chaos may bounce off the daily routine.',
    soloNote: 'One of the best solo games on Steam. Co-op simply makes the farm feel busier.',
    steamUrl: 'https://store.steampowered.com/app/413150/Stardew_Valley/',
  },
  {
    rank: 7,
    name: 'Lethal Company',
    appId: '1966720',
    imageUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1966720/header.jpg?t=1775380053',
    bestFor: 'Best Co-op Horror Comedy',
    groupSize: '1-4 players',
    coOpStyle: 'Scrap runs, proximity chat, panic, quota pressure',
    price: '$9.99',
    releaseDate: 'Oct 2023',
    steamReception: 'Overwhelmingly Positive',
    whyItWorks:
      'Lethal Company is less about perfect play and more about the moment your plan falls apart. Proximity chat, dark rooms, quota pressure, and cheap equipment make every run feel fragile.',
    bestGroup:
      'Best for 3-4 friends who enjoy shouting, laughing, and losing gear together.',
    watchOut:
      'It is still Early Access and intentionally rough. If your group wants polish and clear tutorials, start with Phasmophobia.',
    soloNote: 'Solo is possible but misses most of the social horror.',
    steamUrl: 'https://store.steampowered.com/app/1966720/Lethal_Company/',
  },
  {
    rank: 8,
    name: 'Phasmophobia',
    appId: '739630',
    imageUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/739630/c227a2855aba60f3657bc0c3a46515b8c41fb2b6/header.jpg?t=1782311537',
    bestFor: 'Best Ghost-Hunting Co-op',
    groupSize: '1-4 players',
    coOpStyle: 'Investigation tools, voice chat, clue reading, VR support',
    price: '$13.99',
    releaseDate: 'Sep 2020',
    steamReception: 'Very Positive',
    whyItWorks:
      'Phasmophobia gives co-op groups clear jobs: bring tools, watch clues, call out events, and decide when to leave. The best moments come from arguing over the ghost type while the house gets worse.',
    bestGroup:
      'Best for small groups that want slower horror, investigation, and voice-driven tension.',
    watchOut:
      'It is not an action game. If your group wants weapons and extraction chaos, choose Helldivers 2 or Remnant II.',
    soloNote: 'Solo works, but it is scarier and slower.',
    steamUrl: 'https://store.steampowered.com/app/739630/Phasmophobia/',
  },
  {
    rank: 9,
    name: 'Terraria',
    appId: '105600',
    imageUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg?t=1769844435',
    bestFor: 'Best Low-Price Sandbox Co-op',
    groupSize: '2-8 players works well',
    coOpStyle: 'Building, bosses, exploration, loot progression',
    price: '$4.99',
    releaseDate: 'May 2011',
    steamReception: 'Overwhelmingly Positive',
    whyItWorks:
      'Terraria is still one of the best value co-op games on Steam. A group can build a base, split exploration roles, prepare boss arenas, and keep finding new gear long after the first night.',
    bestGroup:
      'Best for budget groups that want a huge sandbox without high PC requirements.',
    watchOut:
      'The early game can feel unclear. A new group should agree on progression goals instead of wandering in every direction.',
    soloNote: 'Excellent solo, but boss prep and building are faster with friends.',
    steamUrl: 'https://store.steampowered.com/app/105600/Terraria/',
  },
  {
    rank: 10,
    name: 'Left 4 Dead 2',
    appId: '550',
    imageUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/header.jpg?t=1772742214',
    bestFor: 'Best Classic Co-op Shooter',
    groupSize: '1-4 players',
    coOpStyle: 'Campaign shooter, AI Director, rescue pacing',
    price: '$1.99',
    releaseDate: 'Nov 2009',
    steamReception: 'Overwhelmingly Positive',
    whyItWorks:
      'Left 4 Dead 2 still understands co-op pacing better than most modern shooters. The AI Director keeps pressure moving, and every campaign is easy to restart with a new group.',
    bestGroup:
      'Best for friends who want quick campaigns, low price, and instant readability.',
    watchOut:
      'It looks and feels older than the rest of this list. If your group needs modern progression, pick Deep Rock Galactic.',
    soloNote: 'Playable solo with bots, but four humans are the point.',
    steamUrl: 'https://store.steampowered.com/app/550/Left_4_Dead_2/',
  },
  {
    rank: 11,
    name: 'Risk of Rain 2',
    appId: '632360',
    imageUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632360/header.jpg?t=1782157681',
    bestFor: 'Best Roguelite Co-op',
    groupSize: '1-4 players',
    coOpStyle: 'Roguelite runs, item stacking, escalating difficulty',
    price: '$8.24',
    releaseDate: 'Aug 2020',
    steamReception: 'Very Positive',
    whyItWorks:
      'Risk of Rain 2 is great when your group wants one more run. Items stack into wild builds, difficulty keeps rising, and a single strong player cannot fully carry a careless team forever.',
    bestGroup:
      'Best for 2-4 players who like builds, unlocks, and sessions that can end in disaster.',
    watchOut:
      'Runs can snowball into visual chaos. If your group wants calm planning, choose Stardew Valley or PlateUp!',
    soloNote: 'Strong solo roguelite. Co-op adds build chaos and rescue moments.',
    steamUrl: 'https://store.steampowered.com/app/632360/Risk_of_Rain_2/',
  },
  {
    rank: 12,
    name: 'PlateUp!',
    appId: '1599600',
    imageUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1599600/eb8fa3ad44fb5b4e4de4ef402101a55063797958/header.jpg?t=1777365800',
    bestFor: 'Best Couch Co-op Management Game',
    groupSize: '1-4 players',
    coOpStyle: 'Restaurant layout, cooking routes, automation, panic service',
    price: '$5.99',
    releaseDate: 'Aug 2022',
    steamReception: 'Very Positive',
    whyItWorks:
      'PlateUp! turns a small restaurant into a communication test. Someone plates, someone cooks, someone serves, and one bad layout can ruin the entire shift.',
    bestGroup:
      'Best for local co-op nights, online party groups, and Overcooked players who want more planning depth.',
    watchOut:
      'It can expose group communication problems quickly. If your friends hate assigning roles, expect messy runs.',
    soloNote: 'Solo works, but the best rhythm comes from role splitting.',
    steamUrl: 'https://store.steampowered.com/app/1599600/PlateUp/',
  },
  {
    rank: 13,
    name: 'Sea of Thieves: 2026 Edition',
    appId: '1172620',
    imageUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172620/579c6d544424019a032f4add98e8f923925c1cef/header.jpg?t=1782135471',
    bestFor: 'Best Open-Sea Co-op',
    groupSize: '1-4 per crew',
    coOpStyle: 'Sailing, treasure runs, ship roles, PvPvE encounters',
    price: '$13.99',
    releaseDate: 'Jun 2020',
    steamReception: 'Very Positive',
    whyItWorks:
      'Sea of Thieves is strongest when every player has a ship job. Steering, sails, repairs, cannons, and lookout duty make the crew feel like a real team.',
    bestGroup:
      'Best for friends who want open-ended sessions, funny mistakes, and shared stories more than strict progression.',
    watchOut:
      'Other crews can interrupt your plans. If your group only wants private PvE, use safer seas or choose a pure co-op game.',
    soloNote: 'Solo sailing is possible, but the game is far better with a crew.',
    steamUrl: 'https://store.steampowered.com/app/1172620/Sea_of_Thieves_2026_Edition/',
  },
  {
    rank: 14,
    name: 'Remnant II',
    appId: '1282100',
    imageUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1282100/header.jpg?t=1764659459',
    bestFor: 'Best Three-Player Action RPG',
    groupSize: '1-3 players',
    coOpStyle: 'Soulslike shooting, bosses, builds, loot, world rerolls',
    price: '$12.49',
    releaseDate: 'Jul 2023',
    steamReception: 'Very Positive',
    whyItWorks:
      'Remnant II gives small groups a strong combat loop without becoming an MMO. Three-player parties can build around damage, utility, and survival while still needing clean dodges.',
    bestGroup:
      'Best for 2-3 players who want bosses, loot, and difficult fights without managing a huge raid team.',
    watchOut:
      'It is harder than a standard looter shooter. If your group hates boss retries, pick Deep Rock Galactic.',
    soloNote: 'Good solo action RPG, but co-op makes build variety easier to enjoy.',
    steamUrl: 'https://store.steampowered.com/app/1282100/REMNANT_II/',
  },
  {
    rank: 15,
    name: 'Monster Hunter Wilds',
    appId: '2246340',
    imageUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2246340/header.jpg?t=1781071959',
    bestFor: 'Best New Hunting Co-op',
    groupSize: '1-4 players',
    coOpStyle: 'Monster hunts, gear crafting, cross-platform multiplayer',
    price: '$29.39',
    releaseDate: 'Feb 2025',
    steamReception: 'Mixed',
    whyItWorks:
      'Monster Hunter Wilds belongs here because the core hunt loop is still one of the strongest co-op structures on Steam: prepare, track, fight, carve, upgrade, and come back with a better plan.',
    bestGroup:
      'Best for friends who already like long boss fights, weapon mastery, and gear goals.',
    watchOut:
      'Steam reception is Mixed, so check recent performance notes and your PC specs before buying for the whole group.',
    soloNote: 'Playable solo, but group hunts are the reason to pick it over many action RPGs.',
    steamUrl: 'https://store.steampowered.com/app/2246340/Monster_Hunter_Wilds/',
  },
];

const faqs = [
  {
    question: 'What is the best co-op game on Steam in 2026?',
    answer:
      'Split Fiction is the best new two-player co-op game, while Deep Rock Galactic is the safest all-round 1-4 player pick. Choose Split Fiction for a crafted campaign and Deep Rock Galactic for repeatable squad missions.',
  },
  {
    question: 'What is the best Steam co-op game for two players?',
    answer:
      'Split Fiction and It Takes Two are the strongest two-player picks because both are designed around exactly two players. If you want RPG freedom instead, Baldur\'s Gate 3 also works well for two.',
  },
  {
    question: 'What co-op game should a group of four play?',
    answer:
      'Deep Rock Galactic, Helldivers 2, Lethal Company, Phasmophobia, Left 4 Dead 2, and Sea of Thieves all work well for four players. Deep Rock is the safest long-term pick.',
  },
  {
    question: 'Which Steam co-op game is best for casual friends?',
    answer:
      'Stardew Valley is the best relaxed co-op game. PlateUp! is better for short party sessions, and Sea of Thieves is better if your group wants open-ended adventures.',
  },
  {
    question: 'Which co-op game is best for horror fans?',
    answer:
      'Lethal Company is best for funny panic with friends, while Phasmophobia is better for slower investigation horror. Pick Lethal Company for chaos and Phasmophobia for clue reading.',
  },
  {
    question: 'Are these co-op games playable solo?',
    answer:
      'Some are excellent solo, including Baldur\'s Gate 3, Stardew Valley, Terraria, Risk of Rain 2, Remnant II, and Monster Hunter Wilds. Split Fiction and It Takes Two should be treated as two-player games.',
  },
];

function GameImage({ game }: { game: CoopGame }) {
  return (
    <div className="relative aspect-[21/9] w-full overflow-hidden rounded-lg bg-mist">
      <Image
        src={game.imageUrl}
        alt={`${game.name} Steam co-op game header image`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 896px"
        quality={85}
      />
    </div>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <tr className="border-b border-border last:border-0">
      <td className="w-32 px-3 py-1.5 text-xs font-medium text-muted-foreground">{label}</td>
      <td className="px-3 py-1.5 text-xs text-foreground">{value}</td>
    </tr>
  );
}

function GameCard({ game }: { game: CoopGame }) {
  return (
    <section id={`game-${game.rank}`} className="mb-8 overflow-hidden rounded-xl border border-border bg-white">
      <GameImage game={game} />
      <div className="p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-baseline gap-2">
          <h2 className="text-xl font-bold text-foreground">
            {game.rank}. {game.name}
          </h2>
          <span className="rounded-full bg-foreground/10 px-2.5 py-0.5 text-[11px] font-semibold text-foreground">
            {game.bestFor}
          </span>
        </div>

        <p className="mb-3 text-sm leading-relaxed text-foreground">{game.whyItWorks}</p>
        <p className="mb-4 text-sm font-semibold text-foreground">{game.bestGroup}</p>

        <div className="mb-4 grid gap-2 sm:grid-cols-3">
          <div className="rounded-lg bg-mist/50 p-3">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Group Size</p>
            <p className="text-sm text-foreground">{game.groupSize}</p>
          </div>
          <div className="rounded-lg bg-mist/50 p-3">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Co-op Style</p>
            <p className="text-sm text-foreground">{game.coOpStyle}</p>
          </div>
          <div className="rounded-lg bg-mist/50 p-3">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Solo Note</p>
            <p className="text-sm text-foreground">{game.soloNote}</p>
          </div>
        </div>

        <div className="mb-4 rounded-lg border border-border bg-mist/20 p-3">
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Watch Out</p>
          <p className="text-sm text-foreground">{game.watchOut}</p>
        </div>

        <div className="overflow-hidden rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <tbody>
              <SpecRow label="Release" value={game.releaseDate} />
              <SpecRow label="Price" value={game.price} />
              <SpecRow label="Steam reception" value={game.steamReception} />
              <SpecRow label="Steam app" value={`App ${game.appId}`} />
            </tbody>
          </table>
        </div>

        <a
          href={game.steamUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-foreground underline underline-offset-2 hover:opacity-70"
        >
          View on Steam
        </a>
      </div>
    </section>
  );
}

function ChoiceCard({ title, body, picks }: { title: string; body: string; picks: string }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4">
      <h3 className="mb-2 text-base font-bold text-foreground">{title}</h3>
      <p className="mb-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
      <p className="text-sm font-semibold text-foreground">{picks}</p>
    </div>
  );
}

export default function BestCoopGamesPage() {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title,
          description,
          url: 'https://enjoy4game.com/best-co-op-games-steam-2026',
          datePublished: '2026-07-06',
          dateModified: '2026-07-06',
          imageUrl: coopGames[0].imageUrl,
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-[960px] px-4 py-8 sm:px-6">
        <Breadcrumb items={[{ label: 'Best Co-op Games on Steam 2026' }]} />

        <div className="mb-6 overflow-hidden rounded-xl border border-border bg-white">
          <div className="relative aspect-[21/9] bg-mist">
            <Image
              src={coopGames[0].imageUrl}
              alt="Best co-op games on Steam 2026 hero image"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 960px"
              quality={85}
            />
          </div>
        </div>

        <h1 className="mb-3 text-[38px] font-bold leading-[1.08] tracking-[-1.2px] text-foreground sm:text-[50px]">
          Best Co-op Games on Steam 2026: Top 15 Picks to Play With Friends
        </h1>

        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          The best co-op game is not always the highest-rated game. It is the one that fits your
          group size, session length, patience level, and tolerance for chaos. This 2026 Steam list
          ranks 15 co-op games by how well they make friends depend on each other, not just by
          whether the store page has an online co-op tag.
        </p>

        <div className="mb-8 overflow-hidden rounded-lg border border-border bg-mist/30 p-4">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">How We Picked</p>
          <ul className="space-y-1.5 text-sm text-foreground">
            <li><strong>Real co-op design:</strong> the game gives players separate roles, shared problems, or meaningful team decisions.</li>
            <li><strong>Group fit:</strong> the list separates two-player campaigns, four-player squads, cozy farms, horror nights, and long RPG saves.</li>
            <li><strong>Steam storefront facts:</strong> price, release date, co-op tags, review label, and app pages were checked before writing.</li>
            <li><strong>Practical buying advice:</strong> each entry includes who should play it and what could make your group bounce off.</li>
          </ul>
        </div>

        <div className="mb-8 overflow-x-auto rounded-lg border border-border bg-white">
          <h2 className="px-4 pb-2 pt-4 text-lg font-bold text-foreground">Quick Comparison</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-mist">
                <th className="px-3 py-2 text-left font-medium text-muted-foreground">Game</th>
                <th className="px-3 py-2 text-left font-medium text-muted-foreground">Best For</th>
                <th className="px-3 py-2 text-left font-medium text-muted-foreground">Group</th>
                <th className="px-3 py-2 text-left font-medium text-muted-foreground">Price</th>
                <th className="px-3 py-2 text-left font-medium text-muted-foreground">Steam</th>
              </tr>
            </thead>
            <tbody>
              {coopGames.map((game) => (
                <tr key={game.appId} className="border-b border-border last:border-0">
                  <td className="px-3 py-2 font-medium text-foreground">{game.name}</td>
                  <td className="max-w-[220px] px-3 py-2 text-muted-foreground">{game.bestFor.replace('Best ', '')}</td>
                  <td className="px-3 py-2 text-foreground">{game.groupSize}</td>
                  <td className="px-3 py-2 text-foreground">{game.price}</td>
                  <td className="px-3 py-2 text-muted-foreground">{game.steamReception}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-6">
          {coopGames.map((game) => (
            <GameCard key={game.appId} game={game} />
          ))}
        </div>

        <section className="my-10 overflow-hidden rounded-xl border border-border bg-white">
          <div className="relative aspect-[21/9] bg-mist">
            <Image
              src={coopGames[2].imageUrl}
              alt="Deep Rock Galactic co-op team image"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
              quality={85}
            />
          </div>
          <div className="p-5">
            <h2 className="mb-3 text-2xl font-bold text-foreground">How to Choose the Right Co-op Game</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <ChoiceCard
                title="If you only have one partner"
                body="Pick a game that is designed for two people, not a four-player game with two empty slots."
                picks="Start with Split Fiction or It Takes Two."
              />
              <ChoiceCard
                title="If your group changes every week"
                body="Pick mission-based games where missing one session does not ruin a campaign save."
                picks="Start with Deep Rock Galactic, Helldivers 2, or Left 4 Dead 2."
              />
              <ChoiceCard
                title="If your friends want a long campaign"
                body="Choose a game with persistent decisions and clear session goals."
                picks="Start with Baldur's Gate 3, Stardew Valley, or Terraria."
              />
              <ChoiceCard
                title="If your group wants chaos"
                body="Pick games where mistakes become stories instead of immediate frustration."
                picks="Start with Lethal Company, PlateUp!, Sea of Thieves, or Helldivers 2."
              />
            </div>
          </div>
        </section>

        <div className="mt-10 rounded-lg border border-border bg-mist/40 p-5 sm:p-6">
          <h2 className="mb-2 text-lg font-bold text-foreground">Need more Steam game lists?</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            If your group wants survival, free-to-play, or broader game recommendations, start with the other Best Of guides.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/best-survival-games-steam-2026"
              className="rounded-md bg-foreground px-4 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-80"
            >
              Best Survival Games
            </Link>
            <Link
              href="/best-free-games-steam-2026"
              className="rounded-md border border-border bg-white px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-mist"
            >
              Best Free Games
            </Link>
            <Link
              href="/best-of"
              className="rounded-md border border-border bg-white px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-mist"
            >
              View all Best Of guides
            </Link>
            <Link
              href="/games"
              className="rounded-md border border-border bg-white px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-mist"
            >
              Browse all game hubs
            </Link>
          </div>
        </div>

        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
