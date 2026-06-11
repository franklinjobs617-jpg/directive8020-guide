'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ArrowDown, ArrowUp, ChevronDown, GitBranch, Search, SlidersHorizontal, X } from 'lucide-react';
import type { VoidlingEntry } from '@/lib/voidling-bound';

interface VoidlingBoundDatabaseProps {
 entries: readonly VoidlingEntry[];
 speciesNames: readonly string[];
 rarities: readonly string[];
 elements: readonly string[];
 abilitySlots: readonly string[];
 sizes: readonly string[];
 modules: readonly string[];
 statusEffects: readonly string[];
}

type ViewMode = 'table' | 'cards' | 'tree' | 'abilities' | 'modules' | 'status' | 'compare';
type SortKey = 'name' | 'species' | 'rarity' | 'element' | 'size' | 'imageStatus';
type SortDir = 'asc' | 'desc';

const pageSize = 60;
const sortableColumns: { key: SortKey; label: string }[] = [
 { key: 'name', label: 'Name' },
 { key: 'species', label: 'Species' },
 { key: 'rarity', label: 'Rarity' },
 { key: 'element', label: 'Element' },
 { key: 'size', label: 'Size' },
 { key: 'imageStatus', label: 'Image' },
];
const views: { key: ViewMode; label: string }[] = [
 { key: 'table', label: 'All Voidlings' },
 { key: 'tree', label: 'Evolution Tree' },
 { key: 'abilities', label: 'Abilities' },
 { key: 'modules', label: 'Modules' },
 { key: 'status', label: 'Status Effects' },
 { key: 'compare', label: 'Compare' },
 { key: 'cards', label: 'Cards' },
];

function abilityText(entry: VoidlingEntry) {
 return entry.abilities
 .slice(0, 3)
 .map((ability) => `${ability.slot}: ${ability.name}`)
 .join(' | ');
}

function imageLabel(entry: VoidlingEntry) {
 return entry.imageStatus === 'exact' ? 'Exact wiki image' : 'Species fallback image';
}

function getParam(params: URLSearchParams, key: string, fallback = '') {
 return params.get(key) ?? fallback;
}

export function VoidlingBoundDatabase({
 entries,
 speciesNames,
 rarities,
 elements,
 abilitySlots,
 sizes,
 modules,
 statusEffects,
}: VoidlingBoundDatabaseProps) {
 const router = useRouter();
 const pathname = usePathname();
 const searchParams = useSearchParams();
 const [query, setQuery] = useState(() => getParam(searchParams, 'q'));
 const [species, setSpecies] = useState(() => getParam(searchParams, 'species'));
 const [rarity, setRarity] = useState(() => getParam(searchParams, 'rarity'));
 const [element, setElement] = useState(() => getParam(searchParams, 'element'));
 const [slot, setSlot] = useState(() => getParam(searchParams, 'abilitySlot'));
 const [size, setSize] = useState(() => getParam(searchParams, 'size'));
 const [moduleName, setModuleName] = useState(() => getParam(searchParams, 'module'));
 const [statusEffect, setStatusEffect] = useState(() => getParam(searchParams, 'statusEffect'));
 const [imageStatus, setImageStatus] = useState(() => getParam(searchParams, 'imageStatus'));
 const [view, setView] = useState<ViewMode>(() => {
 const value = getParam(searchParams, 'view', 'table');
 return views.some((item) => item.key === value) ? (value as ViewMode) : 'table';
 });
 const [sort, setSort] = useState<SortKey>(() => {
 const value = getParam(searchParams, 'sort', 'name');
 return sortableColumns.some((item) => item.key === value) ? (value as SortKey) : 'name';
 });
 const [dir, setDir] = useState<SortDir>(() => (getParam(searchParams, 'dir', 'asc') === 'desc' ? 'desc' : 'asc'));
 const [page, setPage] = useState(() => Math.max(1, Number(getParam(searchParams, 'page', '1')) || 1));
 const [compareSlugs, setCompareSlugs] = useState<string[]>(() => getParam(searchParams, 'compare').split(',').filter(Boolean).slice(0, 3));
 const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

 useEffect(() => {
 const params = new URLSearchParams();
 if (query) params.set('q', query);
 if (species) params.set('species', species);
 if (rarity) params.set('rarity', rarity);
 if (element) params.set('element', element);
 if (slot) params.set('abilitySlot', slot);
 if (size) params.set('size', size);
 if (moduleName) params.set('module', moduleName);
 if (statusEffect) params.set('statusEffect', statusEffect);
 if (imageStatus) params.set('imageStatus', imageStatus);
 if (view !== 'table') params.set('view', view);
 if (sort !== 'name') params.set('sort', sort);
 if (dir !== 'asc') params.set('dir', dir);
 if (page > 1) params.set('page', String(page));
 if (compareSlugs.length > 0) params.set('compare', compareSlugs.join(','));
 const queryString = params.toString();
 router.replace(queryString ? `${pathname}?${queryString}` : pathname, { scroll: false });
 }, [query, species, rarity, element, slot, size, moduleName, statusEffect, imageStatus, view, sort, dir, page, compareSlugs, pathname, router]);

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
 entry.size,
 entry.summary,
 entry.primaryAbility,
 entry.secondaryAbility,
 ...entry.abilities.flatMap((ability) => [ability.slot, ability.name, ability.description]),
 ...entry.moduleNames,
 ...entry.statusEffectNames,
 ].join(' ').toLowerCase();

 return (
 (!needle || haystack.includes(needle)) &&
 (!species || entry.species === species) &&
 (!rarity || entry.rarity === rarity) &&
 (!element || entry.element === element) &&
 (!slot || entry.abilities.some((ability) => ability.slot === slot)) &&
 (!size || entry.size === size) &&
 (!moduleName || entry.moduleNames.some((name) => name === moduleName)) &&
 (!statusEffect || entry.statusEffectNames.some((status) => status === statusEffect)) &&
 (!imageStatus || entry.imageStatus === imageStatus)
 );
 });
 }, [entries, query, species, rarity, element, slot, size, moduleName, statusEffect, imageStatus]);

 const sortedEntries = useMemo(() => {
 return [...filteredEntries].sort((a, b) => {
 const aValue = sort === 'rarity' ? a.rarityRank : String(a[sort] ?? '').toLowerCase();
 const bValue = sort === 'rarity' ? b.rarityRank : String(b[sort] ?? '').toLowerCase();
 if (aValue < bValue) return dir === 'asc' ? -1 : 1;
 if (aValue > bValue) return dir === 'asc' ? 1 : -1;
 return a.name.localeCompare(b.name);
 });
 }, [filteredEntries, sort, dir]);

 const comparedEntries = entries.filter((entry) => compareSlugs.includes(entry.slug));
 const pagedCards = sortedEntries.slice((page - 1) * pageSize, page * pageSize);
 const pageCount = Math.max(1, Math.ceil(sortedEntries.length / pageSize));
 const activeFilters = [
 ['q', query],
 ['species', species],
 ['rarity', rarity],
 ['element', element],
 ['ability', slot],
 ['status', statusEffect],
 ['module', moduleName],
 ['size', size],
 ['image', imageStatus],
 ].filter(([, value]) => value);
 const topMatches = sortedEntries.slice(0, 3);
 const hasAdvancedFilters = Boolean(slot || statusEffect || moduleName || size || imageStatus || sort !== 'name' || dir !== 'asc');

 function resetPageOnChange(setter: (value: string) => void, value: string) {
 setter(value);
 setPage(1);
 }

 function resetAll() {
 setQuery('');
 setSpecies('');
 setRarity('');
 setElement('');
 setSlot('');
 setSize('');
 setModuleName('');
 setStatusEffect('');
 setImageStatus('');
 setSort('name');
 setDir('asc');
 setPage(1);
 }

 function toggleSort(key: SortKey) {
 if (sort === key) {
 setDir((current) => (current === 'asc' ? 'desc' : 'asc'));
 } else {
 setSort(key);
 setDir('asc');
 }
 }

 function toggleCompare(slug: string) {
 setCompareSlugs((current) => {
 if (current.includes(slug)) return current.filter((item) => item !== slug);
 if (current.length >= 3) return current;
 return [...current, slug];
 });
 }

 return (
 <section className="my-6" aria-labelledby="voidling-database-heading">
 <div className="rounded-lg border border-border bg-white p-3 sm:p-4">
 <div className="grid gap-4 xl:grid-cols-[1fr_auto] xl:items-end">
 <div>
 <p className="mb-2 text-xs font-bold uppercase tracking-[0.12px] text-dribbble-pink">Database controls</p>
 <h2 id="voidling-database-heading" className="text-[24px] font-bold leading-tight tracking-[-0.29px] text-foreground sm:text-[26px]">
 {sortedEntries.length} of {entries.length} Voidlings
 </h2>
 <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
 Search first, then narrow by species, rarity, element, ability, module, status, or image coverage.
 </p>
 </div>
 <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 xl:flex-wrap xl:justify-end xl:overflow-visible">
 {views.map((item) => (
 <button
 key={item.key}
 type="button"
 onClick={() => {
 setView(item.key);
 if (item.key !== 'cards') setPage(1);
 }}
 className={`shrink-0 rounded-lg border px-3 py-2 text-xs font-semibold transition-colors ${view === item.key ? 'border-midnight-ink bg-midnight-ink text-white' : 'border-border bg-white text-muted-foreground hover:border-midnight-ink hover:text-foreground'}`}
 >
 {item.label}
 </button>
 ))}
 </div>
 </div>

 <div className="mt-4 grid gap-3 lg:grid-cols-[minmax(260px,1.3fr)_repeat(3,minmax(150px,1fr))]">
 <label>
 <span className="mb-1 block text-xs font-bold uppercase tracking-[0.12px] text-muted-foreground">Search</span>
 <span className="relative block">
 <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
 <input
 value={query}
 onChange={(event) => {
 setQuery(event.target.value);
 setPage(1);
 }}
 className="h-11 w-full rounded-lg border border-transparent bg-mist py-2 pl-9 pr-3 text-sm text-foreground outline-none transition-colors focus:border-dribbble-pink"
 placeholder="Name, ability, module, status"
 />
 </span>
 </label>
 <FilterSelect label="Species" value={species} options={speciesNames} onChange={(value) => resetPageOnChange(setSpecies, value)} />
 <FilterSelect label="Rarity" value={rarity} options={rarities} onChange={(value) => resetPageOnChange(setRarity, value)} />
 <FilterSelect label="Element" value={element} options={elements} onChange={(value) => resetPageOnChange(setElement, value)} />
 </div>

 <div className="mt-3 flex flex-wrap gap-2">
 <QuickFilter label="Packuran" active={species === 'Packuran'} onClick={() => resetPageOnChange(setSpecies, species === 'Packuran' ? '' : 'Packuran')} />
 <QuickFilter label="Mutated" active={rarity === 'Mutated'} onClick={() => resetPageOnChange(setRarity, rarity === 'Mutated' ? '' : 'Mutated')} />
 <QuickFilter label="Exact images" active={imageStatus === 'exact'} onClick={() => resetPageOnChange(setImageStatus, imageStatus === 'exact' ? '' : 'exact')} />
 <QuickFilter label="Fallback images" active={imageStatus === 'speciesFallback'} onClick={() => resetPageOnChange(setImageStatus, imageStatus === 'speciesFallback' ? '' : 'speciesFallback')} />
 <button
 type="button"
 onClick={() => setShowAdvancedFilters((current) => !current)}
 className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-midnight-ink hover:text-foreground lg:hidden"
 aria-expanded={showAdvancedFilters}
 >
 <SlidersHorizontal className="h-3.5 w-3.5" />
 {showAdvancedFilters ? 'Hide filters' : hasAdvancedFilters ? 'Edit filters' : 'More filters'}
 <ChevronDown className={`h-3.5 w-3.5 transition-transform ${showAdvancedFilters ? 'rotate-180' : ''}`} />
 </button>
 </div>

 <div className={`mt-4 gap-3 md:grid-cols-2 xl:grid-cols-6 ${showAdvancedFilters ? 'grid' : 'hidden lg:grid'}`}>
 <FilterSelect label="Ability" value={slot} options={abilitySlots} onChange={(value) => resetPageOnChange(setSlot, value)} />
 <FilterSelect label="Status" value={statusEffect} options={statusEffects} onChange={(value) => resetPageOnChange(setStatusEffect, value)} />
 <FilterSelect label="Module" value={moduleName} options={modules} onChange={(value) => resetPageOnChange(setModuleName, value)} />
 <FilterSelect label="Size" value={size} options={sizes} onChange={(value) => resetPageOnChange(setSize, value)} />
 <FilterSelect label="Image" value={imageStatus} options={['exact', 'speciesFallback']} labels={{ exact: 'Exact wiki image', speciesFallback: 'Species fallback' }} onChange={(value) => resetPageOnChange(setImageStatus, value)} />
 <label>
 <span className="mb-1 block text-xs font-bold uppercase tracking-[0.12px] text-muted-foreground">Sort</span>
 <select value={sort} onChange={(event) => setSort(event.target.value as SortKey)} className="h-11 w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-foreground">
 {sortableColumns.map((item) => <option key={item.key} value={item.key}>{item.label}</option>)}
 </select>
 </label>
 <button
 type="button"
 onClick={resetAll}
 className="self-end rounded-lg border border-border bg-white px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:border-midnight-ink hover:text-foreground"
 >
 Reset
 </button>
 </div>

 <div className="mt-4 rounded-lg border border-border bg-mist p-3">
 <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
 <div>
 <p className="text-xs font-bold uppercase tracking-[0.12px] text-dribbble-pink">Fast read</p>
 <p className="mt-1 text-sm font-semibold text-foreground">
 {sortedEntries.length === 0
 ? 'No matches. Remove a filter or search a broader species name.'
 : `Top matches: ${topMatches.map((entry) => entry.name).join(', ')}${sortedEntries.length > 3 ? ` + ${sortedEntries.length - 3} more` : ''}`}
 </p>
 </div>
 <div className="flex flex-wrap gap-2">
 <button type="button" onClick={() => setView('cards')} className="rounded-lg border border-border bg-white px-3 py-2 text-xs font-bold text-foreground">
 Browse images
 </button>
 <button type="button" onClick={() => setView('compare')} className="rounded-lg border border-border bg-white px-3 py-2 text-xs font-bold text-foreground">
 Compare picks
 </button>
 </div>
 </div>
 </div>

 {activeFilters.length > 0 && (
 <div className="mt-4 flex flex-wrap gap-2">
 {activeFilters.map(([key, value]) => (
 <span key={`${key}-${value}`} className="inline-flex items-center gap-2 rounded-full border border-border bg-mist px-3 py-1 text-xs font-semibold text-foreground">
 {key}: {value}
 </span>
 ))}
 </div>
 )}
 </div>

 {view === 'table' && (
 <>
 <VoidlingMobileResults entries={pagedCards} page={page} pageCount={pageCount} setPage={setPage} compareSlugs={compareSlugs} toggleCompare={toggleCompare} total={sortedEntries.length} />
 <VoidlingTable entries={sortedEntries} sort={sort} dir={dir} toggleSort={toggleSort} compareSlugs={compareSlugs} toggleCompare={toggleCompare} />
 </>
 )}
 {view === 'cards' && (
 <VoidlingCards entries={pagedCards} page={page} pageCount={pageCount} setPage={setPage} compareSlugs={compareSlugs} toggleCompare={toggleCompare} total={sortedEntries.length} />
 )}
 {view === 'tree' && (
 <EvolutionTree entries={sortedEntries} speciesNames={speciesNames} rarities={rarities} />
 )}
 {view === 'abilities' && (
 <AbilityIndex entries={sortedEntries} />
 )}
 {view === 'modules' && (
 <ModuleIndex entries={sortedEntries} modules={modules} />
 )}
 {view === 'status' && (
 <StatusIndex entries={sortedEntries} statusEffects={statusEffects} />
 )}
 {view === 'compare' && (
 <CompareMatrix entries={comparedEntries} />
 )}

 {compareSlugs.length > 0 && view !== 'compare' && (
 <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 px-4 py-3 backdrop-blur">
 <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
 <div>
 <p className="text-xs font-bold uppercase tracking-[0.12px] text-dribbble-pink">Compare tray</p>
 <p className="text-sm text-muted-foreground">{comparedEntries.map((entry) => entry.name).join(' vs ')}</p>
 </div>
 <div className="flex gap-2">
 <button type="button" onClick={() => setView('compare')} className="rounded-lg bg-midnight-ink px-4 py-2 text-sm font-bold text-white">Open Compare</button>
 <button type="button" onClick={() => setCompareSlugs([])} className="rounded-lg border border-border px-4 py-2 text-sm font-bold text-muted-foreground">Clear</button>
 </div>
 </div>
 </div>
 )}
 </section>
 );
}

function QuickFilter({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
 return (
 <button
 type="button"
 onClick={onClick}
 className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${active ? 'border-midnight-ink bg-midnight-ink text-white' : 'border-border bg-white text-muted-foreground hover:border-midnight-ink hover:text-foreground'}`}
 >
 {label}
 </button>
 );
}

function FilterSelect({ label, value, options, labels, onChange }: { label: string; value: string; options: readonly string[]; labels?: Record<string, string>; onChange: (value: string) => void }) {
 return (
 <label>
 <span className="mb-1 block text-xs font-bold uppercase tracking-[0.12px] text-muted-foreground">{label}</span>
 <select value={value} onChange={(event) => onChange(event.target.value)} className="h-11 w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-foreground">
 <option value="">All {label.toLowerCase()}</option>
 {options.map((item) => <option key={item} value={item}>{labels?.[item] ?? item}</option>)}
 </select>
 </label>
 );
}

function VoidlingThumb({ entry, size = 48 }: { entry: VoidlingEntry; size?: number }) {
 return (
 <div className="relative shrink-0 overflow-hidden rounded-lg border border-border bg-mist" style={{ width: size, height: size }}>
 <Image src={entry.thumbImage} alt={`${entry.name} thumbnail`} fill className="object-contain p-1" sizes={`${size}px`} />
 </div>
 );
}

function VoidlingTable({ entries, sort, dir, toggleSort, compareSlugs, toggleCompare }: { entries: readonly VoidlingEntry[]; sort: SortKey; dir: SortDir; toggleSort: (key: SortKey) => void; compareSlugs: string[]; toggleCompare: (slug: string) => void }) {
 return (
 <div className="mt-6 hidden overflow-x-auto rounded-lg border border-border bg-white md:block">
 <table className="w-full min-w-[1180px] text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="sticky left-0 z-10 bg-mist px-4 py-3 text-left font-semibold text-foreground">Voidling</th>
 {sortableColumns.slice(1).map((column) => (
 <th key={column.key} className="px-4 py-3 text-left font-semibold text-foreground">
 <button type="button" onClick={() => toggleSort(column.key)} className="inline-flex items-center gap-1 hover:text-dribbble-pink">
 {column.label}
 {sort === column.key ? (dir === 'asc' ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />) : null}
 </button>
 </th>
 ))}
 <th className="px-4 py-3 text-left font-semibold text-foreground">Primary / Secondary</th>
 <th className="px-4 py-3 text-left font-semibold text-foreground">Modules / Status</th>
 <th className="px-4 py-3 text-left font-semibold text-foreground">Compare</th>
 </tr>
 </thead>
 <tbody>
 {entries.map((entry) => (
 <tr key={entry.slug} className="border-b border-border last:border-0 hover:bg-mist/60">
 <td className="sticky left-0 z-10 bg-white px-4 py-3">
 <Link href={`/games/voidling-bound/voidlings/${entry.slug}`} className="flex items-center gap-3 hover:text-dribbble-pink">
 <VoidlingThumb entry={entry} />
 <span className="font-semibold text-foreground">{entry.name}</span>
 </Link>
 </td>
 <td className="px-4 py-3 text-muted-foreground">{entry.species}</td>
 <td className="px-4 py-3 text-muted-foreground">{entry.rarity}</td>
 <td className="px-4 py-3 text-muted-foreground">{entry.element}</td>
 <td className="px-4 py-3 text-muted-foreground">{entry.size || 'Unknown'}</td>
 <td className="px-4 py-3">
 <ImageBadge status={entry.imageStatus} />
 </td>
 <td className="min-w-[280px] px-4 py-3 text-muted-foreground">{entry.primaryAbility || 'No primary'} | {entry.secondaryAbility || 'No secondary'}</td>
 <td className="min-w-[280px] px-4 py-3 text-muted-foreground">{entry.moduleNames.slice(0, 2).join(' | ') || entry.statusEffectNames.join(' | ') || 'No parsed module/status'}</td>
 <td className="px-4 py-3">
 <button type="button" onClick={() => toggleCompare(entry.slug)} className="rounded-lg border border-border bg-white px-2 py-1 text-xs font-semibold text-muted-foreground hover:border-midnight-ink hover:text-foreground">
 {compareSlugs.includes(entry.slug) ? 'Remove' : 'Add'}
 </button>
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 );
}

function VoidlingMobileResults({ entries, page, pageCount, setPage, compareSlugs, toggleCompare, total }: { entries: readonly VoidlingEntry[]; page: number; pageCount: number; setPage: (page: number) => void; compareSlugs: string[]; toggleCompare: (slug: string) => void; total: number }) {
 return (
 <div className="mt-5 space-y-3 md:hidden">
 <p className="text-xs font-semibold uppercase tracking-[0.12px] text-muted-foreground">
 Showing {(page - 1) * pageSize + 1}-{Math.min(page * pageSize, total)} of {total}
 </p>
 {entries.map((entry) => (
 <article key={entry.slug} className="rounded-lg border border-border bg-white p-3">
 <div className="flex gap-3">
 <Link href={`/games/voidling-bound/voidlings/${entry.slug}`} className="shrink-0">
 <VoidlingThumb entry={entry} size={58} />
 </Link>
 <div className="min-w-0 flex-1">
 <div className="flex items-start justify-between gap-2">
 <Link href={`/games/voidling-bound/voidlings/${entry.slug}`} className="font-bold leading-tight text-foreground">
 {entry.name}
 </Link>
 <ImageBadge status={entry.imageStatus} />
 </div>
 <p className="mt-1 text-xs text-muted-foreground">
 {entry.species} | {entry.rarity} | {entry.element} | {entry.size || 'Unknown size'}
 </p>
 <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
 {entry.primaryAbility || 'No primary'} / {entry.secondaryAbility || 'No secondary'}
 </p>
 </div>
 </div>
 <div className="mt-3 flex gap-2">
 <Link href={`/games/voidling-bound/voidlings/${entry.slug}`} className="flex-1 rounded-lg bg-midnight-ink px-3 py-2 text-center text-xs font-bold text-white">
 Open data sheet
 </Link>
 <button type="button" onClick={() => toggleCompare(entry.slug)} className="rounded-lg border border-border bg-white px-3 py-2 text-xs font-bold text-muted-foreground">
 {compareSlugs.includes(entry.slug) ? 'Remove' : 'Compare'}
 </button>
 </div>
 </article>
 ))}
 <div className="flex items-center justify-between gap-2 rounded-lg border border-border bg-white p-3">
 <button type="button" disabled={page <= 1} onClick={() => setPage(Math.max(1, page - 1))} className="rounded-lg border border-border px-3 py-2 text-sm font-semibold text-muted-foreground disabled:opacity-40">Previous</button>
 <span className="text-sm font-semibold text-foreground">{page} / {pageCount}</span>
 <button type="button" disabled={page >= pageCount} onClick={() => setPage(Math.min(pageCount, page + 1))} className="rounded-lg border border-border px-3 py-2 text-sm font-semibold text-muted-foreground disabled:opacity-40">Next</button>
 </div>
 </div>
 );
}

function ImageBadge({ status }: { status: string }) {
 return status === 'exact' ? (
 <span className="rounded bg-midnight-ink px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12px] text-white">Exact</span>
 ) : (
 <span className="rounded border border-border bg-mist px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12px] text-muted-foreground">Species fallback</span>
 );
}

function VoidlingCards({ entries, page, pageCount, setPage, compareSlugs, toggleCompare, total }: { entries: readonly VoidlingEntry[]; page: number; pageCount: number; setPage: (page: number) => void; compareSlugs: string[]; toggleCompare: (slug: string) => void; total: number }) {
 return (
 <>
 <div className="mt-6 grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
 {entries.map((entry) => (
 <article key={entry.slug} className="group">
 <Link href={`/games/voidling-bound/voidlings/${entry.slug}`} className="block">
 <div className="relative aspect-square overflow-hidden rounded-lg bg-mist">
 <Image src={entry.image} alt={`${entry.name} Voidling Bound card image`} fill className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 320px" />
 </div>
 </Link>
 <div className="pt-3">
 <div className="mb-2 flex flex-wrap gap-2">
 <span className="ui-pink-badge">{entry.species}</span>
 <span className="rounded border border-border bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12px] text-muted-foreground">{entry.rarity}</span>
 <span className="rounded border border-border bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12px] text-muted-foreground">{entry.element}</span>
 <ImageBadge status={entry.imageStatus} />
 </div>
 <h3 className="text-sm font-semibold text-foreground">
 <Link href={`/games/voidling-bound/voidlings/${entry.slug}`} className="hover:text-dribbble-pink">{entry.name}</Link>
 </h3>
 <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">{abilityText(entry) || entry.summary}</p>
 <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">{entry.moduleNames.slice(0, 2).join(' | ') || entry.statusEffectNames.join(' | ')}</p>
 <button type="button" onClick={() => toggleCompare(entry.slug)} className="mt-4 rounded-lg border border-border bg-white px-3 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:border-midnight-ink hover:text-foreground">
 {compareSlugs.includes(entry.slug) ? 'Remove compare' : 'Compare'}
 </button>
 </div>
 </article>
 ))}
 </div>
 <div className="mt-5 flex flex-col gap-3 rounded-lg border border-border bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
 <p className="text-sm text-muted-foreground">Page {page} of {pageCount} | {total} matching Voidlings</p>
 <div className="flex gap-2">
 <button type="button" disabled={page <= 1} onClick={() => setPage(Math.max(1, page - 1))} className="rounded-lg border border-border px-3 py-2 text-sm font-semibold text-muted-foreground disabled:opacity-40">Previous</button>
 <button type="button" disabled={page >= pageCount} onClick={() => setPage(Math.min(pageCount, page + 1))} className="rounded-lg border border-border px-3 py-2 text-sm font-semibold text-muted-foreground disabled:opacity-40">Next</button>
 </div>
 </div>
 </>
 );
}

function EvolutionTree({ entries, speciesNames, rarities }: { entries: readonly VoidlingEntry[]; speciesNames: readonly string[]; rarities: readonly string[] }) {
 return (
 <div className="mt-6 space-y-6">
 {speciesNames.map((species) => {
 const speciesEntries = entries.filter((entry) => entry.species === species);
 if (speciesEntries.length === 0) return null;
 return (
 <section key={species} className="rounded-lg border border-border bg-white p-4">
 <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-foreground"><GitBranch className="h-5 w-5 text-dribbble-pink" />{species}</h3>
 <div className="grid gap-3 xl:grid-cols-5">
 {rarities.map((rarity) => (
 <div key={rarity} className="rounded-lg border border-border bg-mist p-3">
 <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.12px] text-foreground">{rarity}</h4>
 <ul className="space-y-2">
 {speciesEntries.filter((entry) => entry.rarity === rarity).map((entry) => (
 <li key={entry.slug}>
 <Link href={`/games/voidling-bound/voidlings/${entry.slug}`} className="flex gap-2 rounded-lg border border-border bg-white p-2 text-xs text-muted-foreground hover:border-dribbble-pink hover:text-foreground">
 <VoidlingThumb entry={entry} size={36} />
 <span><strong className="text-foreground">{entry.name}</strong><br />{entry.element} | {entry.primaryAbility || 'Ability data'}</span>
 </Link>
 </li>
 ))}
 </ul>
 </div>
 ))}
 </div>
 </section>
 );
 })}
 </div>
 );
}

function AbilityIndex({ entries }: { entries: readonly VoidlingEntry[] }) {
 const rows = entries.flatMap((entry) => entry.abilities.map((ability) => ({ entry, ability })));
 return (
 <div className="mt-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full min-w-[900px] text-sm">
 <thead><tr className="border-b border-border bg-mist"><th className="px-4 py-3 text-left font-semibold text-foreground">Voidling</th><th className="px-4 py-3 text-left font-semibold text-foreground">Slot</th><th className="px-4 py-3 text-left font-semibold text-foreground">Ability</th><th className="px-4 py-3 text-left font-semibold text-foreground">Description</th></tr></thead>
 <tbody>{rows.map(({ entry, ability }) => <tr key={`${entry.slug}-${ability.slot}-${ability.name}`} className="border-b border-border last:border-0"><td className="px-4 py-3"><Link href={`/games/voidling-bound/voidlings/${entry.slug}`} className="font-semibold text-foreground hover:text-dribbble-pink">{entry.name}</Link></td><td className="px-4 py-3 text-muted-foreground">{ability.slot}</td><td className="px-4 py-3 text-muted-foreground">{ability.name}</td><td className="px-4 py-3 text-muted-foreground">{ability.description}</td></tr>)}</tbody>
 </table>
 </div>
 );
}

function ModuleIndex({ entries, modules }: { entries: readonly VoidlingEntry[]; modules: readonly string[] }) {
 return <FacetIndex title="Module" values={modules} entries={entries} getValues={(entry) => entry.moduleNames} />;
}

function StatusIndex({ entries, statusEffects }: { entries: readonly VoidlingEntry[]; statusEffects: readonly string[] }) {
 return <FacetIndex title="Status Effect" values={statusEffects} entries={entries} getValues={(entry) => entry.statusEffectNames} />;
}

function FacetIndex({ title, values, entries, getValues }: { title: string; values: readonly string[]; entries: readonly VoidlingEntry[]; getValues: (entry: VoidlingEntry) => readonly string[] }) {
 return (
 <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
 {values.map((value) => {
 const matches = entries.filter((entry) => getValues(entry).includes(value));
 if (matches.length === 0) return null;
 return (
 <section key={value} className="rounded-lg border border-border bg-white p-4">
 <h3 className="text-lg font-bold text-foreground">{value}</h3>
 <p className="mt-1 text-sm text-muted-foreground">{matches.length} matching entries</p>
 <div className="mt-3 space-y-2">
 {matches.slice(0, 10).map((entry) => (
 <Link key={entry.slug} href={`/games/voidling-bound/voidlings/${entry.slug}`} className="flex items-center gap-2 rounded-lg border border-border bg-mist p-2 text-xs text-muted-foreground hover:border-dribbble-pink">
 <VoidlingThumb entry={entry} size={34} />
 <span><strong className="text-foreground">{entry.name}</strong><br />{entry.species} | {entry.element}</span>
 </Link>
 ))}
 </div>
 </section>
 );
 })}
 </div>
 );
}

function CompareMatrix({ entries }: { entries: readonly VoidlingEntry[] }) {
 if (entries.length === 0) {
 return (
 <div className="mt-6 rounded-lg border border-border bg-white p-8 text-center">
 <X className="mx-auto mb-3 h-8 w-8 text-muted-foreground" />
 <h3 className="text-lg font-bold text-foreground">No Voidlings selected</h3>
 <p className="mt-2 text-sm text-muted-foreground">Add up to three Voidlings from table or card view.</p>
 </div>
 );
 }
 const rows = [
 ['Species', (entry: VoidlingEntry) => entry.species],
 ['Rarity', (entry: VoidlingEntry) => entry.rarity],
 ['Element', (entry: VoidlingEntry) => entry.element],
 ['Size', (entry: VoidlingEntry) => entry.size || 'Unknown'],
 ['Primary', (entry: VoidlingEntry) => entry.primaryAbility || 'None'],
 ['Secondary', (entry: VoidlingEntry) => entry.secondaryAbility || 'None'],
 ['Modules', (entry: VoidlingEntry) => entry.moduleNames.join(' | ') || 'None'],
 ['Status', (entry: VoidlingEntry) => entry.statusEffectNames.join(' | ') || 'None'],
 ['Image', (entry: VoidlingEntry) => imageLabel(entry)],
 ] as const;
 return (
 <div className="mt-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full min-w-[760px] text-sm">
 <thead><tr className="border-b border-border bg-mist"><th className="px-4 py-3 text-left font-semibold text-foreground">Field</th>{entries.map((entry) => <th key={entry.slug} className="px-4 py-3 text-left font-semibold text-foreground">{entry.name}</th>)}</tr></thead>
 <tbody>{rows.map(([label, getter]) => {
 const values = entries.map(getter);
 const mixed = new Set(values).size > 1;
 return <tr key={label} className="border-b border-border last:border-0"><td className="px-4 py-3 font-semibold text-foreground">{label}</td>{values.map((value, index) => <td key={`${label}-${entries[index].slug}`} className={`px-4 py-3 ${mixed ? 'bg-mist text-foreground' : 'text-muted-foreground'}`}>{value}</td>)}</tr>;
 })}</tbody>
 </table>
 </div>
 );
}
