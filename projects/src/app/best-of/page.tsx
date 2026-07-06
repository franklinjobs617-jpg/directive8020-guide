import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumb } from '@/components/breadcrumb';
import { JsonLd, generateFAQSchema, generateWebPageSchema } from '@/components/json-ld';
import { FAQSection } from '@/components/faq-section';

export const metadata: Metadata = {
  title: 'Best Of Guides — Curated Game Lists | Enjoy4Game',
  description:
    'Hand-picked lists of the best games on Steam by genre, playstyle, and value. Survival, co-op, indie, free, Steam Deck, and more — ranked by player ratings.',
  alternates: {
    canonical: '/best-of',
  },
};

interface BestOfEntry {
  title: string;
  href: string;
  description: string;
  gameCount: number;
  category: string;
  image: string;
  accent: string;
}

const entries: BestOfEntry[] = [
  {
    title: 'Best Survival Games on Steam 2026',
    href: '/best-survival-games-steam-2026',
    description: 'Top 15 survival games ranked by Steam rating, price, and co-op support. Valheim, Subnautica, The Forest, and more.',
    gameCount: 15,
    category: 'By Genre',
    image: '/best-of/games/valheim.webp',
    accent: 'from-emerald-900/80 to-teal-900/60',
  },
  {
    title: 'Best Free Games on Steam 2026',
    href: '/best-free-games-steam-2026',
    description: 'Top 16 free games that are actually worth your time. CS2, Warframe, Dota 2, Brawlhalla, TBH, and more. No pay-to-win.',
    gameCount: 17,
    category: 'By Price',
    image: '/best-of/games/counter-strike-2.webp',
    accent: 'from-blue-900/80 to-indigo-900/60',
  },
  {
    title: 'Best Co-op Games on Steam 2026',
    href: '/best-co-op-games-steam-2026',
    description: 'Top 15 co-op games for two-player campaigns, four-player squads, cozy farms, horror nights, RPG groups, and party chaos.',
    gameCount: 15,
    category: 'By Playstyle',
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2001120/header.jpg?t=1763484567',
    accent: 'from-rose-900/80 to-slate-900/60',
  },
];

const faqs = [
  {
    question: 'What are Best Of guides?',
    answer:
      'Best Of guides are curated lists of the best games on Steam by genre, playstyle, budget, or platform. Every entry is ranked by current Steam player ratings, content depth, and practical value — not editorial opinion.',
  },
  {
    question: 'How are games ranked in Best Of lists?',
    answer:
      'Games are ranked using four criteria: Steam rating score (player reviews, not critic scores), solo and co-op quality, content depth (hours before repetition), and ongoing developer support.',
  },
  {
    question: 'Are these lists updated regularly?',
    answer:
      'Yes. Best Of lists are reviewed quarterly and updated when new games release or ratings shift significantly. The year in the URL (e.g. 2026) indicates the current edition.',
  },
  {
    question: 'Can I suggest a game for a Best Of list?',
    answer:
      'Contact us through the Enjoy4Game community channels with your suggestion. Lists are data-driven, so including Steam rating context strengthens your recommendation.',
  },
];

function BestOfCard({ entry }: { entry: BestOfEntry }) {
  return (
    <Link
      href={entry.href}
      className="group relative block overflow-hidden rounded-xl border border-border bg-white transition-all duration-300 hover:border-foreground/20 hover:shadow-lg"
    >
      <div className="relative aspect-video overflow-hidden bg-mist">
        <Image
          src={entry.image}
          alt={entry.title}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
          quality={85}
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${entry.accent} from-0% to-65%`} />

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="mb-2 flex flex-wrap items-center gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
              {entry.category}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm">
              {entry.gameCount} games
            </span>
          </div>
          <h2 className="text-base font-bold text-white sm:text-lg">{entry.title}</h2>
          <p className="mt-0.5 text-xs leading-relaxed text-white/75 line-clamp-2">
            {entry.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function BestOfPage() {
  return (
    <>
      <JsonLd data={generateWebPageSchema({ title: 'Best Of Guides — Curated Game Lists | Enjoy4Game', description: 'Hand-picked lists of the best games on Steam by genre, playstyle, and value.', url: 'https://enjoy4game.com/best-of' })} />
      <JsonLd data={generateFAQSchema(faqs)} />

      <div className="mx-auto max-w-[960px] px-4 py-8 sm:px-6">
        <Breadcrumb items={[{ label: 'Best Of' }]} />

        <div className="mb-8">
          <h1 className="mb-3 text-[38px] font-bold leading-[1.08] tracking-[-1.2px] text-foreground sm:text-[50px]">
            Best Of Guides
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Curated game lists built from real Steam data. Every entry answers the same question:
            <strong> which game is right for you?</strong>
          </p>
        </div>

        {entries.length === 0 ? (
          <div className="flex min-h-[200px] items-center justify-center rounded-xl border border-dashed border-border bg-mist/20">
            <p className="text-sm text-muted-foreground">No Best Of guides yet — coming soon.</p>
          </div>
        ) : (
          <div className={`grid gap-5 ${entries.length > 1 ? 'sm:grid-cols-2' : ''}`}>
            {entries.map((entry) => (
              <BestOfCard key={entry.href} entry={entry} />
            ))}
          </div>
        )}

        <div className="mt-12 rounded-lg border border-border bg-mist/40 p-5 sm:p-6">
          <h2 className="text-lg font-bold text-foreground mb-2">
            Looking for a specific game guide?
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Individual game guides with walkthroughs, builds, and tips are in the game hubs directory.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/games"
              className="rounded-md bg-foreground px-4 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-80"
            >
              Browse all game hubs →
            </Link>
            <Link
              href="/guides"
              className="rounded-md border border-border bg-white px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-mist"
            >
              All guides
            </Link>
          </div>
        </div>

        <FAQSection faqs={faqs} />
      </div>
    </>
  );
}
