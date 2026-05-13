'use client';

import { useEffect, useMemo, useState } from 'react';
import { Archive, RotateCcw } from 'lucide-react';

type CollectibleType = 'Normal Secret' | 'Simms Recording' | 'O Death Secret' | 'Heirloom';

interface CollectibleItem {
  id: string;
  episode: string;
  type: CollectibleType;
  label: string;
  note: string;
}

const STORAGE_KEY = 'd8020:collectibles:v1';

const collectibles: CollectibleItem[] = [
  { id: 'ep1-secret', episode: 'Episode 1', type: 'Normal Secret', label: 'Crew quarters evidence sweep', note: 'Check personal objects before leaving the first safe area.' },
  { id: 'ep1-simms', episode: 'Episode 1', type: 'Simms Recording', label: 'Early Simms Recording', note: 'Track audio logs separately from normal Secrets.' },
  { id: 'ep2-secret', episode: 'Episode 2', type: 'Normal Secret', label: 'Mission briefing terminal', note: 'Search terminals near objective prompts.' },
  { id: 'ep3-odeath', episode: 'Episode 3', type: 'O Death Secret', label: 'O Death clue route', note: 'Curator-style secrets should have their own count.' },
  { id: 'ep4-secret', episode: 'Episode 4', type: 'Normal Secret', label: 'Lab sample evidence', note: 'Evidence found before accusation scenes may matter.' },
  { id: 'ep5-simms', episode: 'Episode 5', type: 'Simms Recording', label: 'Mid-game Simms Recording', note: 'Recheck after major Turning Points.' },
  { id: 'ep6-secret', episode: 'Episode 6', type: 'Normal Secret', label: 'Medical bay clue', note: 'Medical rooms are likely evidence-heavy spaces.' },
  { id: 'ep7-odeath', episode: 'Episode 7', type: 'O Death Secret', label: 'Late O Death Secret', note: 'Mark route conditions if a survivor must be present.' },
  { id: 'ep8-secret', episode: 'Episode 8', type: 'Normal Secret', label: 'Finale evidence check', note: 'Search before irreversible finale choices.' },
  { id: 'deluxe-heirloom', episode: 'Deluxe', type: 'Heirloom', label: 'Heirlooms Retrieval relic', note: 'Track bonus mission relics outside the main story count.' },
];

const filters = ['All', 'Episode 1', 'Episode 2', 'Episode 3', 'Episode 4', 'Episode 5', 'Episode 6', 'Episode 7', 'Episode 8', 'Deluxe'];

function readStoredItems(): string[] {
  if (typeof window === 'undefined') return [];

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed)
      ? parsed.filter((item): item is string => typeof item === 'string')
      : [];
  } catch {
    return [];
  }
}

export function CollectibleChecklist() {
  const [checked, setChecked] = useState<string[]>([]);
  const [filter, setFilter] = useState('All');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setChecked(readStoredItems());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
  }, [checked, ready]);

  const checkedSet = useMemo(() => new Set(checked), [checked]);
  const visibleItems = collectibles.filter((item) => filter === 'All' || item.episode === filter);
  const percent = Math.round((checked.length / collectibles.length) * 100);

  function toggle(id: string) {
    setChecked((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  return (
    <section
      aria-labelledby="collectible-checklist"
      className="my-10 overflow-hidden rounded-lg border border-d8020/40 bg-card/40"
    >
      <div className="border-b border-border/50 bg-background/50 p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-d8020">
              <Archive className="h-4 w-4" />
              Saved checklist
            </p>
            <h2 id="collectible-checklist" className="text-xl font-bold text-foreground">
              Directive 8020 Collectible Checklist
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Use this as a cleanup scratchpad while the full item-by-item map is
              being verified. It saves progress locally and separates Secrets,
              Simms Recordings, O Death Secrets, and Heirlooms.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setChecked([])}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-border/60 px-3 text-sm text-muted-foreground transition-colors hover:border-d8020/60 hover:text-foreground"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </button>
        </div>

        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-medium text-foreground">
              {checked.length} of {collectibles.length} checklist items marked
            </span>
            <span className="font-bold text-d8020">{percent}%</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-d8020 transition-all duration-300"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`shrink-0 rounded-md border px-3 py-2 text-sm transition-colors ${
                filter === item
                  ? 'border-d8020 bg-d8020/15 text-foreground'
                  : 'border-border/50 text-muted-foreground hover:border-d8020/50 hover:text-foreground'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-3 p-4">
        {visibleItems.map((item) => {
          const done = checkedSet.has(item.id);

          return (
            <label
              key={item.id}
              className={`rounded-lg border p-4 transition-colors ${
                done
                  ? 'border-green-400/40 bg-green-400/10'
                  : 'border-border/50 bg-background/35 hover:border-d8020/50'
              }`}
            >
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  checked={done}
                  onChange={() => toggle(item.id)}
                  className="mt-1 h-5 w-5 rounded border-border accent-d8020"
                />
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`font-semibold ${done ? 'text-green-300 line-through' : 'text-foreground'}`}>
                      {item.label}
                    </span>
                    <span className="rounded border border-border/50 px-2 py-0.5 text-[11px] text-muted-foreground">
                      {item.episode}
                    </span>
                    <span className="rounded bg-muted px-2 py-0.5 text-[11px] text-muted-foreground">
                      {item.type}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.note}
                  </p>
                </div>
              </div>
            </label>
          );
        })}
      </div>
    </section>
  );
}
