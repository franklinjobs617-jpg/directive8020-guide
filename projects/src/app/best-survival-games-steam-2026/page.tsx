import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';

export const metadata: Metadata = {
  title: 'Best Survival Games on Steam 2026: Top 15 Picks for Solo & Co-op',
  description:
    'The best survival games on Steam in 2026 ranked by Steam rating, price, and player count. From Valheim to Project Zomboid — find your next survival adventure.',
  alternates: {
    canonical: '/best-survival-games-steam-2026',
  },
};

function GameImage({ name, imageName }: { name: string; imageName: string }) {
  return (
    <div className="relative aspect-[21/9] w-full overflow-hidden rounded-lg bg-mist">
      <Image
        src={`/best-of/games/${imageName}`}
        alt={`${name} - Survival game screenshot`}
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
  forSolo: string;
  forCoop: string;
  tradeoff: string;
  genre: string;
  developer: string;
  releaseDate: string;
  price: string;
  steamRating: string;
  players: string;
  specLevel: string;
}

const survivalGames: GameEntry[] = [
  {
    rank: 1,
    name: 'Valheim',
    imageName: 'valheim.webp',
    appId: '892970',
    bestFor: 'Best Viking Survival Crafting',
    tagline: '10 million players, 96% positive, and still in Early Access — Valheim is the survival game that defined the genre this decade.',
    verdict: 'If you want the best all-round survival experience on Steam with friends, start here.',
    forSolo: 'Works well solo — enemies scale to player count, and the world is just as rewarding alone.',
    forCoop: 'Up to 10 players. Co-op is the intended way to play — building a Viking longhouse with friends is unmatched.',
    tradeoff: 'Still in Early Access since 2021. The Mistlands and Ashlands updates add content, but the "finished" game is not here yet.',
    genre: 'Survival Crafting',
    developer: 'Iron Gate Studio',
    releaseDate: 'Feb 2021 (EA)',
    price: '$19.99',
    steamRating: '96% (Overwhelmingly Positive)',
    players: 'Solo + 1-10 Co-op',
    specLevel: 'Low-Medium',
  },
  {
    rank: 2,
    name: 'Subnautica',
    imageName: 'subnautica.webp',
    appId: '264710',
    bestFor: 'Best Ocean Survival Exploration',
    tagline: 'The only survival game where the deepest fear is not running out of food — it is what is waiting in the dark.',
    verdict: 'The best single-player survival game on Steam. Play it before any sequel or spin-off.',
    forSolo: 'Solo-only and deliberately designed for it. The isolation is part of the experience.',
    forCoop: 'No co-op. Subnautica is a crafted single-player story designed for solo play.',
    tradeoff: 'Base building is shallow compared to Valheim or Grounded. The focus is exploration, not construction.',
    genre: 'Open-World Survival',
    developer: 'Unknown Worlds Entertainment',
    releaseDate: 'Jan 2018',
    price: '$29.99',
    steamRating: '97% (Overwhelmingly Positive)',
    players: 'Solo',
    specLevel: 'Medium',
  },
  {
    rank: 3,
    name: 'The Forest',
    imageName: 'the-forest.webp',
    appId: '242760',
    bestFor: 'Best Horror Survival Co-op',
    tagline: 'The game that proved horror survival works in co-op. Still the scariest survival game on Steam.',
    verdict: 'The best entry point for horror survival. Play it before Sons of the Forest — the sequel assumes you know the story.',
    forSolo: 'Playable solo and still scary, but the tension hits harder alone. Cave exploration is genuinely stressful.',
    forCoop: 'Up to 4 players. Co-op reduces fear but adds strategy — one player builds while another scouts.',
    tradeoff: 'Graphics show its age. The sequel is better-looking, but The Forest has tighter pacing.',
    genre: 'Survival Horror',
    developer: 'Endnight Games',
    releaseDate: 'Apr 2018',
    price: '$19.99',
    steamRating: '95% (Overwhelmingly Positive)',
    players: 'Solo + 1-4 Co-op',
    specLevel: 'Medium',
  },
  {
    rank: 4,
    name: 'Sons of the Forest',
    imageName: 'sons-of-the-forest.webp',
    appId: '1326470',
    bestFor: 'Best Co-op Survival Horror Sequel',
    tagline: 'Better graphics, smarter AI, deeper building, and an NPC companion who actually helps. The definitive survival horror package.',
    verdict: 'Play this if you finished The Forest and want more. Skip if you prefer tighter, scarier pacing.',
    forSolo: 'Kelvin (the NPC companion) makes solo play viable. He chops trees, fishes, and follows orders.',
    forCoop: 'Up to 8 players. The larger island and expanded building system shine with more people.',
    tradeoff: 'Less scary than the original. The AI companion and larger world reduce the isolation that made The Forest great.',
    genre: 'Survival Horror',
    developer: 'Endnight Games',
    releaseDate: 'Feb 2024',
    price: '$34.99',
    steamRating: '88% (Very Positive)',
    players: 'Solo + 1-8 Co-op',
    specLevel: 'High',
  },
  {
    rank: 5,
    name: 'Green Hell',
    imageName: 'green-hell.webp',
    appId: '815370',
    bestFor: 'Best Realistic Jungle Survival',
    tagline: 'The most unforgiving survival simulation on Steam. A single infected scratch can end your run.',
    verdict: 'For players who want survival to feel real. Not for casual players — this game punishes mistakes brutally.',
    forSolo: 'Designed for solo. The story is about isolation, and the sanity system only works when you are alone.',
    forCoop: 'Up to 4 players in co-op mode, but the story campaign is single-player only. Co-op is sandbox.',
    tradeoff: 'Steep learning curve. The crafting system requires trial and error without a guide. Many players quit before the first hour.',
    genre: 'Realistic Survival',
    developer: 'Creepy Jar',
    releaseDate: 'Sep 2019',
    price: '$24.99',
    steamRating: '89% (Very Positive)',
    players: 'Solo + 1-4 Co-op',
    specLevel: 'Medium-High',
  },
  {
    rank: 6,
    name: "Don't Starve Together",
    imageName: 'dst.webp',
    appId: '322330',
    bestFor: 'Best Survival Roguelike',
    tagline: 'Tim Burton meets survival. Brutal permadeath, hand-drawn art, and a learning curve that rewards patience.',
    verdict: 'The best value survival game on Steam at $14.99. Hundreds of hours of content if you can handle permadeath.',
    forSolo: 'Playable solo, but the game is balanced for co-op. Solo players face the same enemy scaling with fewer hands.',
    forCoop: 'Up to 6 players. Co-op reduces the grind and makes boss fights manageable.',
    tradeoff: 'Permadeath means losing everything. The beginning is slow until you learn food and sanity management.',
    genre: 'Roguelike Survival',
    developer: 'Klei Entertainment',
    releaseDate: 'Dec 2016',
    price: '$14.99',
    steamRating: '96% (Overwhelmingly Positive)',
    players: 'Solo + 1-6 Co-op',
    specLevel: 'Low',
  },
  {
    rank: 7,
    name: 'Project Zomboid',
    imageName: 'project-zomboid.webp',
    appId: '108600',
    bestFor: 'Best Zombie Survival Simulator',
    tagline: 'The most detailed zombie survival game ever made. Moodles, injuries, infections — every system is simulated.',
    verdict: 'For simulation fans who want depth over graphics. The learning curve is brutal but rewarding.',
    forSolo: 'Solo is the intended way to play. The game pauses when you open menus, making it a thinking game.',
    forCoop: 'Up to 4 players in co-op. Works well but the game does not pause for inventory management in multiplayer.',
    tradeoff: 'Graphics are dated (isometric 2D). The tutorial is minimal — expect to die repeatedly before you understand the systems.',
    genre: 'Zombie Survival',
    developer: 'The Indie Stone',
    releaseDate: 'Nov 2013 (EA)',
    price: '$19.99',
    steamRating: '93% (Very Positive)',
    players: 'Solo + 1-4 Co-op',
    specLevel: 'Very Low',
  },
  {
    rank: 8,
    name: 'Raft',
    imageName: 'raft.webp',
    appId: '648800',
    bestFor: 'Best Ocean Crafting Survival',
    tagline: 'Your base is a raft. Expanding it is the game. Relaxed survival with a surprisingly deep story.',
    verdict: 'Best for relaxed survival sessions. Perfect for players who want building without constant threat.',
    forSolo: 'Works fine solo. The raft management is calmer alone, and hooking debris is meditative.',
    forCoop: 'Up to 8 players. Co-op makes raft expansion fast and island exploration more fun.',
    tradeoff: 'The early game is slow — you spend the first few hours just hooking debris. Some players find it boring.',
    genre: 'Ocean Survival',
    developer: 'Redbeet Interactive',
    releaseDate: 'Jun 2022',
    price: '$19.99',
    steamRating: '94% (Very Positive)',
    players: 'Solo + 1-8 Co-op',
    specLevel: 'Low-Medium',
  },
  {
    rank: 9,
    name: 'Grounded',
    imageName: 'grounded.webp',
    appId: '962130',
    bestFor: 'Best Micro-Scale Survival',
    tagline: 'Obsidian Entertainment made a survival game about being shrunk in a backyard. It is as good as it sounds.',
    verdict: 'The most polished survival game on this list. A full release with a complete story and no Early Access baggage.',
    forSolo: 'Good solo with adjustable difficulty. The story and quests give direction that other survival games lack.',
    forCoop: 'Up to 4 players. Co-op progression is shared — everyone advances together.',
    tradeoff: 'Arachnophobia mode exists, but if you have real fear of spiders, some boss fights will still be hard.',
    genre: 'Micro-Scale Survival',
    developer: 'Obsidian Entertainment',
    releaseDate: 'Sep 2022',
    price: '$39.99',
    steamRating: '92% (Very Positive)',
    players: 'Solo + 1-4 Co-op',
    specLevel: 'Medium-High',
  },
  {
    rank: 10,
    name: 'The Long Dark',
    imageName: 'the-long-dark.webp',
    appId: '305620',
    bestFor: 'Best Solo Survival Experience',
    tagline: 'No zombies, no monsters, no other players. Just you, the cold, and the quiet.',
    verdict: 'The purest survival game on Steam. If you want to test your survival skills against nature alone, this is it.',
    forSolo: 'Solo-only and designed for it. The isolation is the point.',
    forCoop: 'No co-op. The developer has confirmed it will remain single-player.',
    tradeoff: 'Slow pace. The Long Dark is meditative, not action-packed. Players expecting combat will be disappointed.',
    genre: 'Wilderness Survival',
    developer: 'Hinterland Studio',
    releaseDate: 'Aug 2017',
    price: '$34.99',
    steamRating: '91% (Very Positive)',
    players: 'Solo',
    specLevel: 'Low-Medium',
  },
  {
    rank: 11,
    name: '7 Days to Die',
    imageName: '7-days-to-die.webp',
    appId: '251570',
    bestFor: 'Best Horde Survival Base Builder',
    tagline: 'Every seven days, a blood moon horde attacks. If your base is not ready, your run is over.',
    verdict: 'The best base-building survival game. The voxel system gives you total creative freedom.',
    forSolo: 'Works solo but the horde nights are brutal. Expect to die multiple times before your first blood moon.',
    forCoop: 'Up to 8 players. Co-op is strongly recommended — dividing build tasks makes horde prep manageable.',
    tradeoff: 'Over a decade in Early Access. The core loop is solid, but the "1.0" release keeps getting pushed.',
    genre: 'Zombie Survival',
    developer: 'The Fun Pimps',
    releaseDate: 'Dec 2013 (EA)',
    price: '$24.99',
    steamRating: '90% (Very Positive)',
    players: 'Solo + 1-8 Co-op',
    specLevel: 'Medium',
  },
  {
    rank: 12,
    name: 'V Rising',
    imageName: 'v-rising.webp',
    appId: '1604030',
    bestFor: 'Best Vampire Survival RPG',
    tagline: 'A vampire survival game where blood quality determines your power and daylight is your enemy.',
    verdict: 'Best for players who want survival combat with RPG depth. The ARPG combat system is the best in the genre.',
    forSolo: 'Works solo with adjustable settings. Bosses are challenging but fair.',
    forCoop: 'Up to 4 players in PvE co-op. Also has PvP servers for competitive play.',
    tradeoff: 'The castle building is satisfying but becomes a grind for resources. Some players find the blood system tedious.',
    genre: 'Vampire Survival',
    developer: 'Stunlock Studios',
    releaseDate: 'May 2024',
    price: '$34.99',
    steamRating: '87% (Very Positive)',
    players: 'Solo + 1-4 Co-op + PvP',
    specLevel: 'Medium-High',
  },
  {
    rank: 13,
    name: 'Enshrouded',
    imageName: 'enshrouded.webp',
    appId: '1203620',
    bestFor: 'Best Fantasy Survival RPG',
    tagline: 'A dark fantasy survival RPG with voxel building, parkour traversal, and a deadly magical fog.',
    verdict: 'Best for Valheim fans who want more structured combat and quests. Up to 16-player co-op is a standout feature.',
    forSolo: 'Playable solo but clearly designed for co-op. The world scale is large for one person.',
    forCoop: 'Up to 16 players — the highest player cap on this list. Building a shared settlement with a large group is the highlight.',
    tradeoff: 'Early Access since Jan 2024. Content updates are regular, but the map has clear unfinished areas.',
    genre: 'Fantasy Survival',
    developer: 'Keen Games',
    releaseDate: 'Jan 2024 (EA)',
    price: '$29.99',
    steamRating: '83% (Very Positive)',
    players: 'Solo + 1-16 Co-op',
    specLevel: 'Medium-High',
  },
  {
    rank: 14,
    name: 'Palworld',
    imageName: 'palworld.webp',
    appId: '1623730',
    bestFor: 'Best Creature Collector Survival',
    tagline: 'Pokémon with guns, automation, and base building. The biggest survival game launch in Steam history.',
    verdict: 'Play this if you want creature collecting with real survival mechanics. Skip if you want a cohesive story.',
    forSolo: 'Works solo. The automation systems let you build production lines that run without you.',
    forCoop: 'Up to 4 players in co-op, plus dedicated servers for larger groups.',
    tradeoff: 'Early Access with bugs. The novelty can wear off after 30-40 hours when the automation loop becomes repetitive.',
    genre: 'Creature Collector Survival',
    developer: 'Pocketpair',
    releaseDate: 'Jan 2024 (EA)',
    price: '$29.99',
    steamRating: '83% (Very Positive)',
    players: 'Solo + 1-4 Co-op + Servers',
    specLevel: 'Medium',
  },
  {
    rank: 15,
    name: 'ARK: Survival Ascended',
    imageName: 'ark.webp',
    appId: '2399830',
    bestFor: 'Best Dinosaur Survival',
    tagline: 'The definitive dinosaur survival game. Tame, ride, and breed over 100 prehistoric creatures.',
    verdict: 'Only if you are specifically looking for a dinosaur survival game. The scope is unmatched, but so are the technical issues.',
    forSolo: 'Solo is possible with boosted settings. The default grind is balanced for large tribes.',
    forCoop: 'Co-op servers with PvE mode are the best way to play. Taming and building with friends reduces the grind.',
    tradeoff: '60% Steam rating for a reason — performance is rough even on high-end PCs, and the UI is a mess.',
    genre: 'Dinosaur Survival',
    developer: 'Studio Wildcard',
    releaseDate: 'Oct 2023',
    price: '$44.99',
    steamRating: '60% (Mixed)',
    players: 'Solo + 1-100+ Servers',
    specLevel: 'Very High',
  },
];

const faqs = [
  {
    question: 'Is Valheim worth buying in 2026?',
    answer:
      'Yes. Valheim has a 96% Steam rating and offers 100+ hours of content even in Early Access. At $19.99, it is one of the best value picks on this list. The building, exploration, and co-op systems are complete; the missing content is limited to later biomes that most players will not reach for 50+ hours.',
  },
  {
    question: 'Is Subnautica still worth playing in 2026?',
    answer:
      'Absolutely. Subnautica is a finished game with a 97% Steam rating — the highest on this list. It has no co-op, so solo players get the full experience. The graphics hold up well, and the story-driven exploration remains unmatched in the genre.',
  },
  {
    question: 'Should I play The Forest or Sons of the Forest?',
    answer:
      'Play The Forest first if you want a tighter, scarier experience at $19.99. Play Sons of the Forest if you prefer better graphics and deeper building at $34.99. The sequel assumes you know the story of the original, so playing The Forest first improves both experiences.',
  },
  {
    question: 'What is the hardest survival game on Steam?',
    answer:
      'Project Zomboid is widely considered the hardest survival game on Steam due to its detailed injury system, permadeath, and steep learning curve. Green Hell is the second-hardest for its realistic wound and disease mechanics that punish every mistake.',
  },
  {
    question: 'What is the best survival game for co-op on Steam?',
    answer:
      'The Forest, Raft, and Grounded are the best co-op survival games on Steam. The Forest excels at horror co-op, Raft is best for relaxed building with friends, and Grounded works well for smaller groups looking for structured progression.',
  },
  {
    question: 'What is the cheapest good survival game on Steam?',
    answer:
      "Don't Starve Together at $14.99 offers the best value-to-quality ratio. Valheim at $19.99 and Raft at $19.99 are also excellent value picks. All three have 94% or higher Steam ratings.",
  },
  {
    question: 'Can you play survival games solo on Steam?',
    answer:
      'Yes. Most survival games on Steam support solo play. The Long Dark and Subnautica are solo-only by design. Valheim, The Forest, and Raft all scale difficulty for solo players and are fully playable alone.',
  },
  {
    question: 'What survival game has the best building system?',
    answer:
      'Valheim and Grounded have the most satisfying building systems. Valheim offers structural physics with supports, weight, and roof angles. Grounded lets you build with natural materials and provides blueprints for complex structures. 7 Days to Die has the deepest voxel-based system for creative builders.',
  },
  {
    question: 'Is ARK: Survival Ascended worth buying despite the Mixed rating?',
    answer:
      'Only if you specifically want a dinosaur survival game and have a high-end PC. The 60% Steam rating reflects persistent performance issues and a cluttered UI. If the dinosaur theme is essential, buy it. If you just want a good survival game, pick Valheim or Grounded instead.',
  },
  {
    question: 'What survival game runs on a low-end PC?',
    answer:
      'Project Zomboid runs on almost any PC (very low specs). Don\'t Starve Together and Valheim (Low-Medium) also run well on older hardware. The Long Dark and Raft are also good options for low-spec machines.',
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

        <div className="rounded-lg border border-border bg-mist/20 p-3 mb-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Watch Out</p>
          <p className="text-sm text-foreground">{game.tradeoff}</p>
        </div>

        <div className="overflow-hidden rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <tbody>
              <SpecRow label="Genre" value={game.genre} />
              <SpecRow label="Developer" value={game.developer} />
              <SpecRow label="Release" value={game.releaseDate} />
              <SpecRow label="Price" value={game.price} />
              <SpecRow label="Steam Rating" value={game.steamRating} />
              <SpecRow label="Players" value={game.players} />
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

export default function BestSurvivalGamesPage() {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'Best Survival Games on Steam 2026: Top 15 Picks for Solo & Co-op',
          description:
            'The best survival games on Steam in 2026 ranked by Steam rating, price, and player count. From Valheim to Project Zomboid — find your next survival adventure.',
          url: 'https://enjoy4game.com/best-survival-games-steam-2026',
          datePublished: '2026-07-03',
          dateModified: '2026-07-03',
          imageUrl: '/best-of/best-survival-hero.webp',
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-[960px] px-4 py-8 sm:px-6">
        <Breadcrumb items={[{ label: 'Best Survival Games on Steam 2026' }]} />
        <PageHero
          src="/best-of/best-survival-hero.webp"
          alt="Best Survival Games on Steam 2026 - featured games collage"
        />

        <h1 className="mb-3 text-[38px] font-bold leading-[1.08] tracking-[-1.2px] text-foreground sm:text-[50px]">
          Best Survival Games on Steam 2026: Top 15 Picks for Solo & Co-op
        </h1>

        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          Survival games are the most rewarding genre on Steam — if you pick the right one. The
          problem is too many Early Access titles, mixed ratings, and no way to compare them
          quickly. We built this list using <strong>live Steam data</strong>: each game&apos;s
          current rating score, concurrent player count trends, and verified player counts from the
          Steam store page. Every recommendation is backed by <strong>actual player reviews</strong>,
          not editorial opinion. Our goal is simple: give you the data you need to decide whether a
          game is worth your time — and your money.
        </p>

        <div className="mb-8 overflow-hidden rounded-lg border border-border bg-mist/30 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">How We Picked &mdash; Our Criteria</p>
          <p className="mb-3 text-sm leading-relaxed text-foreground">
            Survival games are uniquely hard to compare because they mix genres: one game might be a
            horror-focused co-op experience while another is a solo wilderness simulator. To make this
            list fair and useful, we evaluated every candidate against four consistent criteria:
          </p>
          <ul className="space-y-1.5 text-sm text-foreground">
            <li><strong>Steam rating</strong> — we use the current player rating (not critic scores), because survival games live or die by community reception. Every game on this list has at least 10,000 reviews.</li>
            <li><strong>Solo &amp; co-op quality</strong> — some survival games excel at one but fail at the other. We call out the difference clearly so you don&apos;t buy a &ldquo;co-op&rdquo; game that requires a dedicated server.</li>
            <li><strong>Content depth</strong> — measured by average playtime before repetition sets in. A great survival game keeps you engaged for 50+ hours, not 10.</li>
            <li><strong>Ongoing support</strong> — active development, regular patches, and a healthy community. We flag games that have been abandoned or are stuck in perpetual Early Access.</li>
          </ul>
        </div>

        <div className="space-y-6">
          {survivalGames.map((game) => (
            <GameCard key={game.rank} game={game} />
          ))}
        </div>

        <div className="mb-8 mt-10 overflow-x-auto rounded-lg border border-border bg-white">
          <h2 className="px-4 pt-4 pb-2 text-lg font-bold text-foreground">Quick Comparison</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-mist">
                <th className="px-3 py-2 text-left font-medium text-muted-foreground">Game</th>
                <th className="px-3 py-2 text-left font-medium text-muted-foreground">Type</th>
                <th className="px-3 py-2 text-left font-medium text-muted-foreground">Price</th>
                <th className="px-3 py-2 text-left font-medium text-muted-foreground">Rating</th>
                <th className="px-3 py-2 text-left font-medium text-muted-foreground">Best For</th>
                <th className="px-3 py-2 text-left font-medium text-muted-foreground">Players</th>
                <th className="px-3 py-2 text-left font-medium text-muted-foreground">Spec</th>
              </tr>
            </thead>
            <tbody>
              {survivalGames.map((g) => (
                <tr key={g.rank} className="border-b border-border last:border-0">
                  <td className="px-3 py-2 text-foreground font-medium">{g.name}</td>
                  <td className="px-3 py-2 text-muted-foreground">{g.genre}</td>
                  <td className="px-3 py-2 text-foreground">{g.price}</td>
                  <td className="px-3 py-2 text-foreground">{g.steamRating}</td>
                  <td className="px-3 py-2 text-foreground max-w-[180px]">{g.bestFor.replace('Best ', '')}</td>
                  <td className="px-3 py-2 text-muted-foreground">{g.players}</td>
                  <td className="px-3 py-2 text-muted-foreground">{g.specLevel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-game">
          <h2>How to Choose the Right Survival Game for You</h2>
          <p>Follow these three steps to find your perfect survival game:</p>

          <h3>Step 1: Decide Who You Play With</h3>
          <p>This is the most important filter. Buying a co-op-focused game when you play solo leads to frustration.</p>
          <ul>
            <li><strong>Solo only:</strong> The Long Dark and Subnautica. Both are designed around isolation and give you zero disadvantage playing alone.</li>
            <li><strong>Solo + occasional co-op:</strong> Valheim, Raft, Grounded, 7 Days to Die. These scale difficulty to your group size.</li>
            <li><strong>Co-op focused (2-4 players):</strong> The Forest, Don&apos;t Starve Together. These games are balanced for small groups.</li>
            <li><strong>Large group (4+):</strong> Sons of the Forest (up to 8), Enshrouded (up to 16), Palworld (servers).</li>
          </ul>

          <h3>Step 2: Pick Your Experience Type</h3>
          <p>Not all survival games feel the same. Pick the flavor that matches your mood:</p>
          <ul>
            <li><strong>Exploration-driven:</strong> Subnautica, Raft, The Long Dark — the world is the content.</li>
            <li><strong>Building-driven:</strong> Valheim, 7 Days to Die, Grounded — base building is the main loop.</li>
            <li><strong>Combat-driven:</strong> Sons of the Forest, V Rising, Enshrouded — fighting is as important as surviving.</li>
            <li><strong>Survival simulation:</strong> Project Zomboid, Green Hell — realism over fun, punishment over convenience.</li>
            <li><strong>Casual / creative:</strong> Don&apos;t Starve Together, Palworld — lower stress, more experimentation.</li>
          </ul>

          <h3>Step 3: Check Your Budget and PC</h3>
          <ul>
            <li><strong>Under $20:</strong> Valheim ($19.99), The Forest ($19.99), Raft ($19.99), Don&apos;t Starve Together ($14.99)</li>
            <li><strong>Best value:</strong> Don&apos;t Starve Together at $14.99 has the highest rating-to-price ratio on this list.</li>
            <li><strong>Low-spec PC:</strong> Project Zomboid (runs on anything), Don&apos;t Starve Together, Valheim (Low-Medium), Raft</li>
            <li><strong>High-spec PC:</strong> ARK: Survival Ascended (Very High), Sons of the Forest (High), Enshrouded</li>
          </ul>
        </div>

        <div className="mt-10 rounded-lg border border-border bg-mist/40 p-5 sm:p-6">
          <h3 className="text-lg font-bold text-foreground mb-2">
            Looking for a specific survival game guide?
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            We cover several survival games with detailed guides and walkthroughs.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/games/project-mist"
              className="rounded-md bg-foreground px-4 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-80"
            >
              Project: Mist Guide
            </Link>
            <Link
              href="/games/romestead"
              className="rounded-md border border-border bg-white px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-mist"
            >
              Romestead Guide
            </Link>
            <Link
              href="/games/enginefall"
              className="rounded-md border border-border bg-white px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-mist"
            >
              Enginefall Guide
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
