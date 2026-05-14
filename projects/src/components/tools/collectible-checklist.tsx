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

const normalSecrets: CollectibleItem[] = Array.from({ length: 50 }, (_, index) => ({
  id: `normal-secret-${index + 1}`,
  episode: 'Main Story',
  type: 'Normal Secret',
  label: `Normal Secret ${index + 1}`,
  note: 'Location pending item-by-item verification. Use this slot to track the confirmed 50-secret route.',
}));

const simmsRecordings: CollectibleItem[] = Array.from({ length: 10 }, (_, index) => ({
  id: `simms-recording-${index + 1}`,
  episode: 'Main Story',
  type: 'Simms Recording',
  label: `Simms Recording ${index + 1}`,
  note: 'Location pending item-by-item verification. Track separately from normal Secrets.',
}));

const oDeathSecrets: CollectibleItem[] = Array.from({ length: 5 }, (_, index) => ({
  id: `o-death-secret-${index + 1}`,
  episode: 'Main Story',
  type: 'O Death Secret',
  label: `O Death Secret ${index + 1}`,
  note: 'Location pending item-by-item verification. Keep Curator-style cleanup separate.',
}));

const collectibles: CollectibleItem[] = [
  ...normalSecrets,
  ...simmsRecordings,
  ...oDeathSecrets,
  {
    id: 'deluxe-heirlooms-retrieval',
    episode: 'Deluxe',
    type: 'Heirloom',
    label: 'Heirlooms Retrieval bonus mission',
    note: 'Steam describes this as Deluxe content. Track bonus relics separately from the 65 main listed collectibles.',
  },
];

const filters = ['All', 'Normal Secret', 'Simms Recording', 'O Death Secret', 'Deluxe'];

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
  const [missingOnly, setMissingOnly] = useState(false);
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
  const visibleItems = collectibles.filter((item) => {
    const matchesFilter = filter === 'All' || item.type === filter || item.episode === filter;
    const matchesMissing = !missingOnly || !checkedSet.has(item.id);
    return matchesFilter && matchesMissing;
  });
  const percent = Math.round((checked.length / collectibles.length) * 100);
  const typeProgress = [
    {
      label: 'Normal Secrets',
      done: collectibles.filter((item) => item.type === 'Normal Secret' && checkedSet.has(item.id)).length,
      total: 50,
    },
    {
      label: 'Simms Recordings',
      done: collectibles.filter((item) => item.type === 'Simms Recording' && checkedSet.has(item.id)).length,
      total: 10,
    },
    {
      label: 'O Death Secrets',
      done: collectibles.filter((item) => item.type === 'O Death Secret' && checkedSet.has(item.id)).length,
      total: 5,
    },
    {
      label: 'Deluxe',
      done: collectibles.filter((item) => item.type === 'Heirloom' && checkedSet.has(item.id)).length,
      total: 1,
    },
  ];

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
              being verified. It saves progress locally and reflects the current
              65-item structure: 50 normal Secrets, 10 Simms Recordings, and 5
              O Death Secrets, plus a separate Deluxe Heirlooms slot.
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

        <div className="mt-4 grid gap-2 sm:grid-cols-4">
          {typeProgress.map((item) => (
            <div key={item.label} className="rounded-md border border-border/50 bg-background/35 p-3">
              <p className="text-xs text-muted-foreground">{item.label}</p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                {item.done} / {item.total}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <div className="flex gap-2 overflow-x-auto pb-1">
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
          <button
            type="button"
            onClick={() => setMissingOnly((current) => !current)}
            className={`rounded-md border px-3 py-2 text-sm transition-colors ${
              missingOnly
                ? 'border-green-400/50 bg-green-400/10 text-green-200'
                : 'border-border/50 text-muted-foreground hover:border-d8020/50 hover:text-foreground'
            }`}
          >
            Missing only
          </button>
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
