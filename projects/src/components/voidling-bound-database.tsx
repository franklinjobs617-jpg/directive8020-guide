'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Columns3, Search, Table2 } from 'lucide-react';
import type { VoidlingEntry } from '@/lib/voidling-bound';

interface VoidlingBoundDatabaseProps {
  entries: readonly VoidlingEntry[];
  speciesNames: readonly string[];
  rarities: readonly string[];
  elements: readonly string[];
  abilitySlots: readonly string[];
}

type ViewMode = 'cards' | 'table';

function abilityText(entry: VoidlingEntry) {
  return entry.abilities
    .slice(0, 3)
    .map((ability) => `${ability.slot}: ${ability.name}`)
    .join(' | ');
}

export function VoidlingBoundDatabase({
  entries,
  speciesNames,
  rarities,
  elements,
  abilitySlots,
}: VoidlingBoundDatabaseProps) {
  const [query, setQuery] = useState('');
  const [species, setSpecies] = useState('');
  const [rarity, setRarity] = useState('');
  const [element, setElement] = useState('');
  const [slot, setSlot] = useState('');
  const [view, setView] = useState<ViewMode>('cards');
  const [compareSlugs, setCompareSlugs] = useState<string[]>([]);

  const filteredEntries = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return entries.filter((entry) => {
      const haystack = [
        entry.name,
        entry.species,
        entry.rarity,
        entry.element,
        entry.color,
        entry.eye,
        entry.pattern,
        entry.summary,
        ...entry.abilities.flatMap((ability) => [ability.slot, ability.name, ability.description]),
      ].join(' ').toLowerCase();

      return (
        (!needle || haystack.includes(needle)) &&
        (!species || entry.species === species) &&
        (!rarity || entry.rarity === rarity) &&
        (!element || entry.element === element) &&
        (!slot || entry.abilities.some((ability) => ability.slot === slot))
      );
    });
  }, [entries, query, species, rarity, element, slot]);

  const comparedEntries = entries.filter((entry) => compareSlugs.includes(entry.slug));

  function toggleCompare(slug: string) {
    setCompareSlugs((current) => {
      if (current.includes(slug)) return current.filter((item) => item !== slug);
      if (current.length >= 3) return current;
      return [...current, slug];
    });
  }

  return (
    <section className="my-8" aria-labelledby="voidling-database-heading">
      <div className="rounded-lg border border-border/50 bg-card/30 p-4">
        <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 id="voidling-database-heading" className="text-xl font-black text-foreground">
              Searchable Voidling Database
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {filteredEntries.length} of {entries.length} Voidlings shown
            </p>
          </div>
          <div className="flex rounded-md border border-border/50 bg-background/40 p-1">
            <button
              type="button"
              onClick={() => setView('cards')}
              className={`inline-flex items-center gap-2 rounded px-3 py-2 text-xs font-semibold ${view === 'cards' ? 'bg-d8020 text-background' : 'text-muted-foreground hover:text-foreground'}`}
              aria-pressed={view === 'cards'}
            >
              <Columns3 className="h-4 w-4" />
              Cards
            </button>
            <button
              type="button"
              onClick={() => setView('table')}
              className={`inline-flex items-center gap-2 rounded px-3 py-2 text-xs font-semibold ${view === 'table' ? 'bg-d8020 text-background' : 'text-muted-foreground hover:text-foreground'}`}
              aria-pressed={view === 'table'}
            >
              <Table2 className="h-4 w-4" />
              Table
            </button>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
          <label className="lg:col-span-2">
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Search</span>
            <span className="relative block">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="w-full rounded-md border border-border/50 bg-background/60 py-2 pl-9 pr-3 text-sm text-foreground outline-none transition-colors focus:border-d8020/60"
                placeholder="Name, ability, element, role"
              />
            </span>
          </label>
          <label>
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Species</span>
            <select value={species} onChange={(event) => setSpecies(event.target.value)} className="w-full rounded-md border border-border/50 bg-background/60 px-3 py-2 text-sm text-foreground">
              <option value="">All species</option>
              {speciesNames.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </label>
          <label>
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Rarity</span>
            <select value={rarity} onChange={(event) => setRarity(event.target.value)} className="w-full rounded-md border border-border/50 bg-background/60 px-3 py-2 text-sm text-foreground">
              <option value="">All rarity</option>
              {rarities.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </label>
          <label>
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Element</span>
            <select value={element} onChange={(event) => setElement(event.target.value)} className="w-full rounded-md border border-border/50 bg-background/60 px-3 py-2 text-sm text-foreground">
              <option value="">All elements</option>
              {elements.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </label>
        </div>

        <div className="mt-3 grid gap-3 lg:grid-cols-[1fr_auto]">
          <label>
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Ability slot</span>
            <select value={slot} onChange={(event) => setSlot(event.target.value)} className="w-full rounded-md border border-border/50 bg-background/60 px-3 py-2 text-sm text-foreground">
              <option value="">All slots</option>
              {abilitySlots.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </label>
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setSpecies('');
              setRarity('');
              setElement('');
              setSlot('');
            }}
            className="self-end rounded-md border border-border/50 bg-background/40 px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:border-d8020/40 hover:text-foreground"
          >
            Reset
          </button>
        </div>
      </div>

      {comparedEntries.length > 0 && (
        <div className="my-6 overflow-x-auto rounded-lg border border-d8020/40 bg-d8020/10">
          <table className="w-full text-sm">
            <caption className="px-4 py-3 text-left text-sm font-bold text-foreground">Compare selected Voidlings</caption>
            <thead>
              <tr className="border-y border-d8020/25">
                <th className="px-4 py-3 text-left text-muted-foreground">Name</th>
                <th className="px-4 py-3 text-left text-muted-foreground">Species</th>
                <th className="px-4 py-3 text-left text-muted-foreground">Rarity</th>
                <th className="px-4 py-3 text-left text-muted-foreground">Element</th>
                <th className="px-4 py-3 text-left text-muted-foreground">Abilities</th>
              </tr>
            </thead>
            <tbody>
              {comparedEntries.map((entry) => (
                <tr key={entry.slug} className="border-b border-d8020/20 last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{entry.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{entry.species}</td>
                  <td className="px-4 py-3 text-muted-foreground">{entry.rarity}</td>
                  <td className="px-4 py-3 text-muted-foreground">{entry.element}</td>
                  <td className="px-4 py-3 text-muted-foreground">{abilityText(entry)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {view === 'cards' ? (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEntries.slice(0, 72).map((entry) => (
            <article key={entry.slug} className="overflow-hidden rounded-lg border border-border/50 bg-card/30">
              <Link href={`/games/voidling-bound/voidlings/${entry.slug}`} className="block">
                <div className="relative aspect-video bg-background/60">
                  <Image src={entry.image} alt={`${entry.name} Voidling Bound wiki image`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 320px" />
                </div>
              </Link>
              <div className="p-4">
                <div className="mb-2 flex flex-wrap gap-2">
                  <span className="rounded border border-d8020/30 bg-d8020/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-d8020">{entry.species}</span>
                  <span className="rounded border border-border/50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{entry.rarity}</span>
                  <span className="rounded border border-border/50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{entry.element}</span>
                </div>
                <h3 className="text-base font-black text-foreground">
                  <Link href={`/games/voidling-bound/voidlings/${entry.slug}`} className="hover:text-d8020">
                    {entry.name}
                  </Link>
                </h3>
                <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">{abilityText(entry) || entry.summary}</p>
                <button
                  type="button"
                  onClick={() => toggleCompare(entry.slug)}
                  className="mt-4 rounded-md border border-border/50 bg-background/40 px-3 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:border-d8020/40 hover:text-foreground"
                >
                  {compareSlugs.includes(entry.slug) ? 'Remove compare' : 'Compare'}
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Voidling</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Species</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Rarity</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Element</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Ability notes</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Compare</th>
              </tr>
            </thead>
            <tbody>
              {filteredEntries.map((entry) => (
                <tr key={entry.slug} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">
                    <Link href={`/games/voidling-bound/voidlings/${entry.slug}`} className="hover:text-d8020">
                      {entry.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{entry.species}</td>
                  <td className="px-4 py-3 text-muted-foreground">{entry.rarity}</td>
                  <td className="px-4 py-3 text-muted-foreground">{entry.element}</td>
                  <td className="min-w-[360px] px-4 py-3 text-muted-foreground">{abilityText(entry) || entry.summary}</td>
                  <td className="px-4 py-3">
                    <button type="button" onClick={() => toggleCompare(entry.slug)} className="rounded border border-border/50 px-2 py-1 text-xs text-muted-foreground hover:border-d8020/40 hover:text-foreground">
                      {compareSlugs.includes(entry.slug) ? 'Remove' : 'Add'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
