'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Clock, Gem, ListChecks, Route } from 'lucide-react';

interface EpisodeNavItem {
  id: string;
  title: string;
  href: string;
  focus: string;
  qte: string;
  collectible: string;
  turningPoint: string;
  time: string;
}

interface EpisodeNavigatorProps {
  episodes: EpisodeNavItem[];
}

export function EpisodeNavigator({ episodes }: EpisodeNavigatorProps) {
  const [selected, setSelected] = useState(episodes[0]?.id ?? '');
  const active = episodes.find((episode) => episode.id === selected) ?? episodes[0];

  if (!active) return null;

  return (
    <section aria-labelledby="episode-navigator" className="my-10 rounded-lg border border-d8020/40 bg-card/40 p-5">
      <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-d8020">
        <Route className="h-4 w-4" />
        Fast walkthrough navigator
      </p>
      <h2 id="episode-navigator" className="text-xl font-bold text-foreground">
        Directive 8020 Episode Navigator
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Pick an episode to jump to the route page and see the immediate QTE, collectible, and Turning Point checks.
      </p>

      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        {episodes.map((episode) => (
          <button
            key={episode.id}
            type="button"
            onClick={() => setSelected(episode.id)}
            className={`shrink-0 rounded-md border px-3 py-2 text-sm transition-colors ${
              selected === episode.id
                ? 'border-d8020 bg-d8020/15 text-foreground'
                : 'border-border/50 text-muted-foreground hover:border-d8020/50 hover:text-foreground'
            }`}
          >
            {episode.title.replace('Episode ', 'Ep ')}
          </button>
        ))}
      </div>

      <div className="mt-4 rounded-lg border border-border/50 bg-background/35 p-4">
        <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-lg font-bold text-foreground">{active.title}</h3>
          <Link href={active.href} className="w-fit rounded-md border border-d8020/40 px-3 py-2 text-sm font-medium text-d8020 hover:bg-d8020/10">
            Open route page
          </Link>
        </div>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{active.focus}</p>
        <div className="grid gap-3 sm:grid-cols-4">
          <div className="rounded-md border border-border/50 bg-card/40 p-3">
            <ListChecks className="mb-2 h-4 w-4 text-d8020" />
            <p className="text-xs text-muted-foreground">QTE / stealth</p>
            <p className="mt-1 text-sm text-foreground">{active.qte}</p>
          </div>
          <div className="rounded-md border border-border/50 bg-card/40 p-3">
            <Gem className="mb-2 h-4 w-4 text-d8020" />
            <p className="text-xs text-muted-foreground">Collectible check</p>
            <p className="mt-1 text-sm text-foreground">{active.collectible}</p>
          </div>
          <div className="rounded-md border border-border/50 bg-card/40 p-3">
            <Route className="mb-2 h-4 w-4 text-d8020" />
            <p className="text-xs text-muted-foreground">Turning Point</p>
            <p className="mt-1 text-sm text-foreground">{active.turningPoint}</p>
          </div>
          <div className="rounded-md border border-border/50 bg-card/40 p-3">
            <Clock className="mb-2 h-4 w-4 text-d8020" />
            <p className="text-xs text-muted-foreground">Use case</p>
            <p className="mt-1 text-sm text-foreground">{active.time}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
