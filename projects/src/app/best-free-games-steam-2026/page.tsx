import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb } from '@/components/breadcrumb';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';

export const metadata: Metadata = {
  title: 'Best Free Games on Steam 2026: Top 17 Picks That Are Actually Free',
  description:
    'The best free games on Steam ranked by player count, review score, and monetization fairness. Counter-Strike 2, Warframe, Dota 2, Brawlhalla, and more — no pay-to-win picks.',
  alternates: {
    canonical: '/best-free-games-steam-2026',
  },
};

function GameImage({ name, imageName }: { name: string; imageName: string }) {
  return (
    <div className="relative aspect-[21/9] w-full overflow-hidden rounded-lg bg-mist">
      <Image
        src={`/best-of/games/${imageName}`}
        alt={`${name} - Free game screenshot`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 896px"
        quality={85}
      />
    </div>
  );
}

interface GameEntry {
  rank: number;
  name: string;
  imageName: string;
  appId: string;
  bestFor: string;
  tagline: string;
  verdict: string;
  catchText: string;
  forSolo: string;
  forCoop: string;
  genre: string;
  developer: string;
  releaseDate: string;
  steamRating: string;
  totalReviews: string;
  recentReviews: string;
  monetization: string;
  beginnerFriendly: string;
}

const freeGames: GameEntry[] = [
  {
    rank: 1,
    name: 'Counter-Strike 2',
    imageName: 'counter-strike-2.webp',
    appId: '730',
    bestFor: 'Best Competitive FPS',
    tagline: 'The most popular competitive shooter on Steam. 1.8 million concurrent players, zero pay-to-win.',
    verdict: 'If you want a competitive FPS that respects your wallet, start here.',
    catchText: 'No pay-to-win. All weapons are free. Cosmetics (skins) are purely visual and tradeable on Steam Market.',
    forSolo: 'Competitive matchmaking works solo. The game finds teammates at your skill level.',
    forCoop: 'Up to 5-player premade teams. Playing with friends is the best way to learn.',
    genre: 'Competitive FPS',
    developer: 'Valve',
    releaseDate: 'Aug 2012',
    steamRating: '86% (Very Positive)',
    totalReviews: '9,700,934',
    recentReviews: '72,423 in 30 days',
    monetization: 'None required',
    beginnerFriendly: 'Medium',
  },
  {
    rank: 2,
    name: 'Dota 2',
    imageName: 'dota-2.webp',
    appId: '570',
    bestFor: 'Best MOBA',
    tagline: 'The deepest MOBA ever made. All 120+ heroes are free. No unlocks, no grind, no pay-to-win.',
    verdict: 'The gold standard for fair free-to-play. Zero gameplay content locked behind paywalls.',
    catchText: 'All heroes free from day one. Cosmetics are the only paid items. The steep learning curve is the real barrier, not your wallet.',
    forSolo: 'Solo queue works well. The matchmaking system is mature and skill-based.',
    forCoop: 'Up to 5-player teams. Co-op vs AI mode is great for learning with friends.',
    genre: 'MOBA',
    developer: 'Valve',
    releaseDate: 'Jul 2013',
    steamRating: '88% (Very Positive)',
    totalReviews: '2,734,038',
    recentReviews: '18,451 in 30 days',
    monetization: 'None required',
    beginnerFriendly: 'Hard',
  },
  {
    rank: 3,
    name: 'Marvel Rivals',
    imageName: 'marvel-rivals.webp',
    appId: '2767030',
    bestFor: 'Best Hero Shooter',
    tagline: 'Marvel superheroes in a fast 6v6 shooter. 39 heroes at launch, all free, all playable.',
    verdict: 'The freshest hero shooter on Steam. If you like Overwatch-style gameplay with Marvel characters, this is it.',
    catchText: 'All heroes free. Battle pass is cosmetic only. The grind for seasonal cosmetics is optional.',
    forSolo: 'Solo matchmaking is quick. Hero variety keeps solo play fresh.',
    forCoop: '6-player teams. Team-up skills between specific heroes add strategic depth.',
    genre: 'Hero Shooter',
    developer: 'NetEase Games',
    releaseDate: 'Dec 2024',
    steamRating: '77% (Mostly Positive)',
    totalReviews: '397,302',
    recentReviews: '6,792 in 30 days',
    monetization: 'Cosmetics only',
    beginnerFriendly: 'Easy',
  },
  {
    rank: 4,
    name: 'Warframe',
    imageName: 'warframe.webp',
    appId: '2507950',
    bestFor: 'Best PvE Looter Shooter',
    tagline: 'Space ninja action RPG. Hundreds of hours of PvE content, entirely free. The gold standard for fair F2P.',
    verdict: 'The most generous free-to-play game on Steam. You can finish the entire story without spending a cent.',
    catchText: 'Premium currency (Platinum) is tradeable between players. You can earn everything by trading. Grind is the real cost.',
    forSolo: 'Fully playable solo. Story missions are designed for single players.',
    forCoop: 'Up to 4-player squads. Co-op is the main way to play endgame content.',
    genre: 'PvE Looter Shooter',
    developer: 'Digital Extremes',
    releaseDate: 'Mar 2013',
    steamRating: '91% (Very Positive)',
    totalReviews: '674,697',
    recentReviews: '4,491 in 30 days',
    monetization: 'Cosmetics + convenience',
    beginnerFriendly: 'Medium',
  },
  {
    rank: 5,
    name: 'Overwatch 2',
    imageName: 'overwatch-2.webp',
    appId: '3513350',
    bestFor: 'Best Team-Based Hero Shooter',
    tagline: 'Polished 5v5 hero shooter with constant updates. All heroes free. Clean, vibrant, and accessible.',
    verdict: 'Best entry point for players new to hero shooters. Lower skill floor than CS2 or Valorant.',
    catchText: 'All heroes free. Battle pass rewards cosmetics. Some mythic skins require the paid pass.',
    forSolo: 'Role queue makes solo play consistent. You always get the role you queue for.',
    forCoop: 'Up to 5-player groups. Arcade mode offers casual co-op events.',
    genre: 'Hero Shooter',
    developer: 'Blizzard Entertainment',
    releaseDate: 'Aug 2023',
    steamRating: '~80% (Very Positive)',
    totalReviews: '~1,500,000',
    recentReviews: '~5,000 in 30 days',
    monetization: 'Cosmetics only',
    beginnerFriendly: 'Easy',
  },
  {
    rank: 6,
    name: 'PUBG: Battlegrounds',
    imageName: 'pubg.webp',
    appId: '230410',
    bestFor: 'Best Tactical Battle Royale',
    tagline: 'The game that invented the battle royale genre. Still the most tense BR experience on Steam.',
    verdict: 'Free, polished, and still massive. The pacing is slower than Apex but more tactical.',
    catchText: 'Free to play. Ranked mode requires a one-time fee. Casual mode is completely free.',
    forSolo: 'Solo mode is the purest BR experience. No teammates, all skill.',
    forCoop: 'Up to 4-player squads. Communication is key.',
    genre: 'Battle Royale',
    developer: 'KRAFTON',
    releaseDate: 'Dec 2017',
    steamRating: '~70% (Mostly Positive)',
    totalReviews: '~1,500,000',
    recentReviews: '~8,000 in 30 days',
    monetization: 'Cosmetics only',
    beginnerFriendly: 'Medium',
  },
  {
    rank: 7,
    name: 'Path of Exile',
    imageName: 'path-of-exile.webp',
    appId: '238960',
    bestFor: 'Best Action RPG',
    tagline: 'The best free ARPG on Steam. Massive passive tree, deep crafting, and a fair economy. Never pay-to-win.',
    verdict: 'Better than most paid ARPGs. The skill gem system and passive tree offer unparalleled build variety.',
    catchText: 'Free to play with cosmetic microtransactions. Stash tabs are the only practical purchase. The game explicitly commits to never being pay-to-win.',
    forSolo: 'Fully playable solo. The entire campaign and atlas endgame are designed for solo play.',
    forCoop: 'Up to 6-player parties. Trading and party play are encouraged.',
    genre: 'Action RPG',
    developer: 'Grinding Gear Games',
    releaseDate: 'Oct 2013',
    steamRating: '88% (Very Positive)',
    totalReviews: '247,731',
    recentReviews: '561 in 30 days',
    monetization: 'Cosmetics + stash tabs',
    beginnerFriendly: 'Hard',
  },
  {
    rank: 8,
    name: 'Destiny 2',
    imageName: 'destiny-2.webp',
    appId: '2807960',
    bestFor: 'Best FPS MMO-Lite',
    tagline: 'Bungie\'s shooter-looter hybrid. The base game and first few expansions are free. Best-in-class gunplay.',
    verdict: 'The shooting feels better than almost any other FPS. Free content gives 50+ hours before hitting DLC gates.',
    catchText: 'Base game and first 2 expansions are free. Latest expansions require purchase. New players get a generous intro campaign.',
    forSolo: 'Most campaign content is solo-friendly. Dungeons and raids require groups.',
    forCoop: 'Up to 3-player fireteams. 6-player raids are the best content.',
    genre: 'FPS MMO',
    developer: 'Bungie',
    releaseDate: 'Oct 2019',
    steamRating: '~80% (Very Positive)',
    totalReviews: '~500,000',
    recentReviews: '~5,000 in 30 days',
    monetization: 'Base free, DLC required for endgame',
    beginnerFriendly: 'Medium',
  },
  {
    rank: 9,
    name: 'War Thunder',
    imageName: 'war-thunder.webp',
    appId: '444200',
    bestFor: 'Best Military Vehicle MMO',
    tagline: 'Fly, drive, and sail through history. 2,000+ vehicles across air, ground, and naval battles.',
    verdict: 'The most comprehensive military vehicle game ever made. Free grind is real but achievable.',
    catchText: 'Free to play with a grind. Premium vehicles and account time speed up progression. Playing free is viable to top tier with patience.',
    forSolo: 'Solo matchmaking works. Mixed battles pair you with teammates.',
    forCoop: 'Up to 4-player squads. Co-op missions and custom battles available.',
    genre: 'Military MMO',
    developer: 'Gaijin Entertainment',
    releaseDate: 'Aug 2013',
    steamRating: '~70% (Mostly Positive)',
    totalReviews: '~500,000',
    recentReviews: '~3,000 in 30 days',
    monetization: 'Free grind or premium speed-up',
    beginnerFriendly: 'Medium',
  },
  {
    rank: 10,
    name: 'NARAKA: BLADEPOINT',
    imageName: 'naraka.webp',
    appId: '1203220',
    bestFor: 'Best Melee Battle Royale',
    tagline: 'A battle royale where swords beat guns. Martial arts, grappling hooks, and stylish melee combat.',
    verdict: 'Unique melee BR with a high skill ceiling. Free, no pay-to-win, and runs well on mid-range PCs.',
    catchText: 'All gameplay is free. Cosmetics are the only purchases. The combat system rewards skill over spending.',
    forSolo: 'Solo mode is popular and emphasizes personal skill.',
    forCoop: 'Trios (3-player) and duos available. Team coordination matters.',
    genre: 'Melee Battle Royale',
    developer: '24 Entertainment',
    releaseDate: 'Aug 2021',
    steamRating: '80% (Very Positive)',
    totalReviews: '~300,000',
    recentReviews: '~2,000 in 30 days',
    monetization: 'Cosmetics only',
    beginnerFriendly: 'Hard',
  },
  {
    rank: 11,
    name: 'Delta Force',
    imageName: 'delta-force.webp',
    appId: '2074920',
    bestFor: 'Best Tactical Extraction Shooter',
    tagline: 'Modern extraction shooter with 64-player warfare mode. Free, polished, and constantly updated.',
    verdict: 'A strong free alternative to Escape from Tarkov. Less punishing, more accessible.',
    catchText: 'Free to play. Monetization is cosmetic and battle pass. No pay-for-advantage items.',
    forSolo: 'Extraction mode is harder solo but possible. Warfare mode works fine alone.',
    forCoop: 'Up to 3-player squads in extraction. 64-player warfare mode for larger groups.',
    genre: 'Tactical FPS',
    developer: 'Team Jade',
    releaseDate: 'Dec 2024',
    steamRating: '65% (Mixed)',
    totalReviews: '187,772',
    recentReviews: '3,498 in 30 days',
    monetization: 'Cosmetics + battle pass',
    beginnerFriendly: 'Medium',
  },
  {
    rank: 12,
    name: 'The First Descendant',
    imageName: 'the-first-descendant.webp',
    appId: '2357570',
    bestFor: 'Best PvE Looter Shooter (Co-op)',
    tagline: 'Unreal Engine 5 looter shooter with co-op dungeons, boss fights, and character progression.',
    verdict: 'If you like Warframe but want newer graphics, this is your game. Free, grindy, and improving.',
    catchText: 'Free to play with cosmetic shop. Grind for new characters is real but not paywalled.',
    forSolo: 'Story content is soloable. Endgame dungeons strongly recommend co-op.',
    forCoop: 'Up to 4-player co-op. The best content is designed for groups.',
    genre: 'PvE Looter Shooter',
    developer: 'Nexon',
    releaseDate: 'Jun 2024',
    steamRating: '~65% (Mixed)',
    totalReviews: '~150,000',
    recentReviews: '~2,000 in 30 days',
    monetization: 'Cosmetics + grind reduction',
    beginnerFriendly: 'Easy',
  },
  {
    rank: 13,
    name: 'Fishing Planet',
    imageName: 'fishing-planet.webp',
    appId: '2073620',
    bestFor: 'Best Fishing Simulator',
    tagline: 'The most realistic free fishing game on Steam. Over 100 fish species, real-world locations.',
    verdict: 'Perfect for relaxing solo sessions. No combat, no pressure — just fishing.',
    catchText: 'Free to play. Premium rods and lures speed up progression. The free experience is complete but slower.',
    forSolo: 'Designed for solo play. Fishing is a single-player activity.',
    forCoop: 'Multiplayer lobbies where you fish together in the same spot.',
    genre: 'Fishing Simulation',
    developer: 'Fishing Planet LLC',
    releaseDate: 'Aug 2017',
    steamRating: '85% (Very Positive)',
    totalReviews: '~200,000',
    recentReviews: '~1,000 in 30 days',
    monetization: 'Optional premium gear',
    beginnerFriendly: 'Easy',
  },
  {
    rank: 14,
    name: 'Strinova',
    imageName: 'strinova.webp',
    appId: '380600',
    bestFor: 'Best Anime Tactical FPS',
    tagline: 'Anime-style tactical shooter with a unique string mechanic. 2D-to-3D cover system.',
    verdict: 'Fresh take on the tactical FPS genre. Free, fair, and visually distinct.',
    catchText: 'All characters free. Weapon skins are cosmetic only.',
    forSolo: 'Solo queue works well. Ranked mode available.',
    forCoop: 'Up to 5-player teams. Team strategy matters.',
    genre: 'Anime Tactical FPS',
    developer: 'iCloud Interactive',
    releaseDate: 'Nov 2024',
    steamRating: '~80% (Very Positive)',
    totalReviews: '~50,000',
    recentReviews: '~1,000 in 30 days',
    monetization: 'Cosmetics only',
    beginnerFriendly: 'Medium',
  },
  {
    rank: 15,
    name: 'Mecha BREAK',
    imageName: 'mecha-break.webp',
    appId: '1282270',
    bestFor: 'Best Mecha PvP',
    tagline: 'Fast-paced mecha combat. Customize your rig and battle in 6v6 team matches.',
    verdict: 'Best mecha game on Steam. Free, no pay-to-win, and the mech customization is deep.',
    catchText: 'Free to play. Cosmetic skins for your mechs. No gameplay advantages.',
    forSolo: 'Quick matchmaking for solo players.',
    forCoop: '6-player team battles. Coordination wins matches.',
    genre: 'Mecha PvP',
    developer: 'Amazing Seasun Games',
    releaseDate: 'Jul 2025',
    steamRating: '~75% (Mostly Positive)',
    totalReviews: '~30,000',
    recentReviews: '~1,500 in 30 days',
    monetization: 'Cosmetics only',
    beginnerFriendly: 'Medium',
  },
  {
    rank: 16,
    name: 'Brawlhalla',
    imageName: 'brawlhalla.webp',
    appId: '1056640',
    bestFor: 'Best Platform Fighter',
    tagline: 'Free-to-play platform fighter with 50+ characters and full cross-play. Smash Bros for PC.',
    verdict: 'The best free fighting game on Steam. Easy to learn, deep to master.',
    catchText: 'All characters can be earned with in-game gold. Cosmetics are the only paid items.',
    forSolo: 'Ranked 1v1 is the core mode. Also has solo vs AI.',
    forCoop: 'Up to 8-player online matches. 2v2 ranked team mode.',
    genre: 'Platform Fighter',
    developer: 'Blue Mammoth Games',
    releaseDate: 'Oct 2017',
    steamRating: '88% (Very Positive)',
    totalReviews: '~500,000',
    recentReviews: '~2,000 in 30 days',
    monetization: 'Cosmetics only',
    beginnerFriendly: 'Easy',
  },
  {
    rank: 17,
    name: 'TBH: Task Bar Hero',
    imageName: 'task-bar-hero.webp',
    appId: '3678970',
    bestFor: 'Best Idle RPG',
    tagline: 'A tiny idle RPG that runs in your taskbar. Heroes auto-fight, you collect loot. Perfect for work or multitasking.',
    verdict: 'The best idle RPG on Steam. Free, active development, and surprisingly deep for a tiny window.',
    catchText: 'Free to play. Paid classes (Hunter, Slayer) and supporter packs are optional. The Priest class is free. Base content is fully playable without spending.',
    forSolo: 'Solo-only. The game is designed as a single-player idle experience.',
    forCoop: 'No co-op. TBH is a solo idle game with Steam Market trading.',
    genre: 'Idle RPG',
    developer: 'Nugem Studio',
    releaseDate: 'May 2026',
    steamRating: '59% (Mixed)',
    totalReviews: '36,479',
    recentReviews: '28,856 in 30 days',
    monetization: 'Optional class DLC',
    beginnerFriendly: 'Easy',
  },
];

const faqs = [
  {
    question: 'Are these games really free?',
    answer:
      'Yes. Every game on this list is free to download and play on Steam. Some offer optional cosmetic purchases or battle passes, but none require spending money to access core gameplay. We note the monetization model for each entry.',
  },
  {
    question: 'What is the best free game on Steam right now?',
    answer:
      'Counter-Strike 2 has the highest concurrent player count and a fair monetization model. Warframe offers the most generous free experience with 91% positive reviews. For beginners, Marvel Rivals and Overwatch 2 are the most accessible.',
  },
  {
    question: 'Which free game has the most players on Steam?',
    answer:
      'Counter-Strike 2 consistently has the highest concurrent player count on Steam, often exceeding 1.5 million players. Dota 2 and PUBG are also in the top 5 most-played games on Steam.',
  },
  {
    question: 'Do any free games have guides on Enjoy4Game?',
    answer:
      'Yes. We have a complete guide hub for TBH: Task Bar Hero (free idle RPG) with beginner guides, build advice, and walkthroughs. More free game guides are added regularly.',
  },
  {
    question: 'Which free game is best for beginners?',
    answer:
      'Overwatch 2, Marvel Rivals, and Fishing Planet are the most beginner-friendly. They have low skill floors, good tutorials, and don\'t punish new players harshly.',
  },
  {
    question: 'Which free game has the fairest monetization?',
    answer:
      'Dota 2 and Counter-Strike 2 are the fairest — all gameplay content is free, and purchases are purely cosmetic. Warframe and Path of Exile also have excellent F2P models where you can earn premium currency through gameplay.',
  },
];

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <tr className="border-b border-border last:border-0">
      <td className="px-3 py-1.5 text-xs text-muted-foreground font-medium w-28">{label}</td>
      <td className="px-3 py-1.5 text-xs text-foreground">{value}</td>
    </tr>
  );
}

function GameCard({ game }: { game: GameEntry }) {
  return (
    <section className="mb-8 overflow-hidden rounded-xl border border-border bg-white">
      <GameImage imageName={game.imageName} name={game.name} />
      <div className="p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-baseline gap-2">
          <h3 className="text-xl font-bold text-foreground">{game.rank}. {game.name}</h3>
          <span className="rounded-full bg-foreground/10 px-2.5 py-0.5 text-[11px] font-semibold text-foreground">
            {game.bestFor}
          </span>
        </div>

        <p className="mb-3 text-sm leading-relaxed text-foreground">
          {game.tagline}
        </p>

        <p className="mb-3 text-sm font-semibold text-foreground">
          {game.verdict}
        </p>

        <div className="mb-4 rounded-lg border border-border bg-amber-50 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-amber-800 mb-1">Where&apos;s the Catch?</p>
          <p className="text-sm text-amber-900">{game.catchText}</p>
        </div>

        <div className="mb-4 grid gap-2 sm:grid-cols-2">
          <div className="rounded-lg bg-mist/50 p-3">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Solo Play</p>
            <p className="text-sm text-foreground">{game.forSolo}</p>
          </div>
          <div className="rounded-lg bg-mist/50 p-3">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Co-op Play</p>
            <p className="text-sm text-foreground">{game.forCoop}</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <tbody>
              <SpecRow label="Genre" value={game.genre} />
              <SpecRow label="Developer" value={game.developer} />
              <SpecRow label="Release" value={game.releaseDate} />
              <SpecRow label="Steam Rating" value={game.steamRating} />
              <SpecRow label="Reviews" value={game.totalReviews} />
              <SpecRow label="Recent Activity" value={game.recentReviews} />
              <SpecRow label="Monetization" value={game.monetization} />
              <SpecRow label="Beginner" value={game.beginnerFriendly} />
            </tbody>
          </table>
        </div>

        <a
          href={`https://store.steampowered.com/app/${game.appId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-foreground underline underline-offset-2 hover:opacity-70"
        >
          View on Steam →
        </a>
      </div>
    </section>
  );
}

export default function BestFreeGamesPage() {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'Best Free Games on Steam 2026: Top 17 Picks That Are Actually Free',
          description:
            'The best free games on Steam ranked by player count, review score, and monetization fairness. Counter-Strike 2, Warframe, Dota 2, Brawlhalla, and more.',
          url: 'https://enjoy4game.com/best-free-games-steam-2026',
          datePublished: '2026-07-03',
          dateModified: '2026-07-03',
          imageUrl: '/hero-banner.jpg',
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-[960px] px-4 py-8 sm:px-6">
        <Breadcrumb items={[{ label: 'Best Free Games on Steam 2026' }]} />

        <h1 className="mb-3 text-[38px] font-bold leading-[1.08] tracking-[-1.2px] text-foreground sm:text-[50px]">
          Best Free Games on Steam 2026: Top 17 Picks That Are Actually Free
        </h1>

        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          &ldquo;Free&rdquo; on Steam does not always mean free. Many games let you download for $0
          but expect you to spend $50 to unlock the full experience. We built this list differently:
          every game on it is <strong>genuinely playable without spending a cent</strong>. We
          evaluated each title by player count, review score, monetization fairness, and
          beginner-friendliness. No pay-to-win, no bait-and-switch, no gacha traps.
        </p>

        <div className="mb-8 overflow-hidden rounded-lg border border-border bg-mist/30 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">How We Picked</p>
          <ul className="space-y-1.5 text-sm text-foreground">
            <li><strong>Player activity</strong> — we checked 30-day review counts to confirm the community is alive and growing</li>
            <li><strong>Monetization fairness</strong> — no pay-to-win, no content gated behind expensive DLC</li>
            <li><strong>Steam rating</strong> — community satisfaction, not critic scores</li>
            <li><strong>Beginner-friendliness</strong> — can a new player enjoy this without frustration?</li>
          </ul>
        </div>

        <div className="space-y-6">
          {freeGames.map((game) => (
            <GameCard key={`${game.rank}-${game.name}`} game={game} />
          ))}
        </div>

        <div className="mb-8 mt-10 overflow-x-auto rounded-lg border border-border bg-white">
          <h2 className="px-4 pt-4 pb-2 text-lg font-bold text-foreground">Quick Comparison</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-mist">
                <th className="px-3 py-2 text-left font-medium text-muted-foreground">Game</th>
                <th className="px-3 py-2 text-left font-medium text-muted-foreground">Genre</th>
                <th className="px-3 py-2 text-left font-medium text-muted-foreground">Rating</th>
                <th className="px-3 py-2 text-left font-medium text-muted-foreground">Monetization</th>
                <th className="px-3 py-2 text-left font-medium text-muted-foreground">Beginner</th>
              </tr>
            </thead>
            <tbody>
              {freeGames.map((g) => (
                <tr key={g.rank} className="border-b border-border last:border-0">
                  <td className="px-3 py-2 text-foreground font-medium">{g.name}</td>
                  <td className="px-3 py-2 text-muted-foreground">{g.genre}</td>
                  <td className="px-3 py-2 text-foreground">{g.steamRating}</td>
                  <td className="px-3 py-2 text-muted-foreground">{g.monetization}</td>
                  <td className="px-3 py-2 text-foreground">{g.beginnerFriendly}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 rounded-lg border border-border bg-mist/40 p-5 sm:p-6">
          <h3 className="text-lg font-bold text-foreground mb-2">
            Looking for a free game guide?
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            We cover several free games with detailed guides and walkthroughs.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/games/task-bar-hero"
              className="rounded-md bg-foreground px-4 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-80"
            >
              TBH: Task Bar Hero Guide
            </Link>
            <Link
              href="/best-of"
              className="rounded-md border border-border bg-white px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-mist"
            >
              View all Best Of guides →
            </Link>
            <Link
              href="/games"
              className="rounded-md border border-border bg-white px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-mist"
            >
              Browse all games →
            </Link>
          </div>
        </div>

        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
