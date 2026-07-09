'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';

export interface GameCard {
  title: string;
  href: string;
  label: string;
  body: string;
  image: string;
}

interface GameDirectorySearchProps {
  games: GameCard[];
}

// Hand-verified quick-filter tags. These are NOT derived from fuzzy text
// matching against title/label — "Database", "Steam Deck", and "New
// Releases" don't reliably appear as substrings in every relevant game's
// label, so guessing via text search would silently miss real matches
// (e.g. no game literally has the word "database" in its label). Instead
// each tag below maps to a hand-checked list of game hrefs:
// - "Steam Deck" hrefs were confirmed by checking which games actually
//   have a dedicated steam-deck guide page in src/app/games/*/steam-deck*.
// - "Database"/"Survival"/"RPG"/"New Releases" were checked against each
//   game's actual genre/label and recent-launch status.
// Update this map whenever a new game is added with one of these tags.
const TAG_HREFS: Record<string, string[]> = {
  Database: ['/games/voidling-bound', '/games/palworld'],
  Survival: [
    '/games/palworld',
    '/games/project-mist',
    '/games/starminer',
    '/games/romestead',
    '/games/spacecraft',
    '/games/enginefall',
    '/games/mistfall-hunter',
  ],
  RPG: [
    '/games/fatekeeper',
    '/games/deltarune',
    '/games/mistfall-hunter',
    '/games/zero-parades',
    '/games/voidling-bound',
    '/games/task-bar-hero',
  ],
  'Steam Deck': [
    '/games/mechanicus-ii',
    '/games/romestead',
    '/games/cursemark',
    '/games/paralives',
    '/games/mina-the-hollower',
    '/games/spacecraft',
    '/games/fatekeeper',
    '/games/luna-abyss',
    '/games/zero-parades',
  ],
  'New Releases': [
    '/games/palworld',
    '/games/mistfall-hunter',
    '/games/cursemark',
    '/games/spacecraft',
    '/games/task-bar-hero',
    '/games/moonlight-peaks',
    '/games/forensics-crime-scene-detective',
    '/games/cat-mail-co',
    '/games/the-mound-omen-of-cthulhu',
    '/games/mothkeep',
  ],
};

const QUICK_FILTERS = ['Database', 'Survival', 'RPG', 'Steam Deck', 'New Releases'];

export function GameDirectorySearch({ games }: GameDirectorySearchProps) {
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let result = games;

    if (activeTag) {
      const hrefs = new Set(TAG_HREFS[activeTag] ?? []);
      result = result.filter((game) => hrefs.has(game.href));
    }

    const q = query.trim().toLowerCase();
    if (q) {
      result = result.filter(
        (game) =>
          game.title.toLowerCase().includes(q) ||
          game.label.toLowerCase().includes(q) ||
          game.body.toLowerCase().includes(q),
      );
    }

    return result;
  }, [games, query, activeTag]);

  function handleTagClick(tag: string) {
    setActiveTag((current) => (current === tag ? null : tag));
  }

  return (
    <div>
      <div className="mt-5 flex max-w-xl overflow-hidden rounded-xl bg-mist">
        <div className="flex min-h-11 flex-1 items-center gap-2 px-4">
          <Search className="h-4 w-4 shrink-0 text-fog" aria-hidden="true" />
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by game, genre, database, Steam Deck"
            aria-label="Search games"
            className="min-h-11 flex-1 bg-transparent text-sm text-foreground placeholder:text-fog focus:outline-none"
          />
        </div>
        <a
          href="#current-hubs"
          className="flex min-h-11 items-center justify-center bg-dribbble-pink px-4 text-sm font-bold text-white"
        >
          Browse
        </a>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {QUICK_FILTERS.map((label) => (
          <button
            key={label}
            type="button"
            onClick={() => handleTagClick(label)}
            className={`ui-pill transition-colors ${
              activeTag === label ? 'bg-dribbble-pink text-white' : ''
            }`}
            aria-pressed={activeTag === label}
          >
            {label}
          </button>
        ))}
      </div>

      <section id="current-hubs" className="mb-12 mt-10 scroll-mt-24">
        <div className="mb-6">
          <h2 className="text-[26px] font-bold leading-tight tracking-[-0.29px] text-foreground">
            Current Hubs
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Start with the game you are playing, then move to the guide that
            matches your next question. Each hub keeps the most useful
            articles close together so you do not have to search the site
            page by page.
          </p>
          {(query || activeTag) && (
            <p className="mt-3 text-sm font-medium text-foreground">
              {filtered.length} of {games.length} game hubs match
              {activeTag ? ` "${activeTag}"` : ''}
              {query ? ` "${query}"` : ''}.{' '}
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setActiveTag(null);
                }}
                className="underline underline-offset-2 hover:text-dribbble-pink"
              >
                Clear
              </button>
            </p>
          )}
        </div>
        {filtered.length === 0 ? (
          <p className="rounded-lg border border-border bg-mist/40 p-6 text-sm text-muted-foreground">
            No game hubs match that search yet. Try a different genre, or{' '}
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setActiveTag(null);
              }}
              className="underline underline-offset-2 hover:text-dribbble-pink"
            >
              clear the filter
            </button>{' '}
            to see everything.
          </p>
        ) : (
          <div className="shot-grid">
            {filtered.map((game) => (
              <Link key={game.href} href={game.href} className="shot-card">
                <div className="shot-thumb aspect-[4/3]">
                  <Image
                    src={game.image}
                    alt={`${game.title} guide hub`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="shot-meta">
                  <div className="min-w-0">
                    <div className="mb-1 flex items-center gap-2">
                      <h3 className="truncate text-sm font-bold text-foreground group-hover:text-dribbble-pink">
                        {game.title}
                      </h3>
                      <span className="ui-pink-badge">HUB</span>
                    </div>
                    <p className="text-xs font-semibold text-muted-foreground">{game.label}</p>
                    <p className="mt-1 line-clamp-2 text-sm leading-5 text-muted-foreground">
                      {game.body}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
