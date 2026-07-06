'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { CheckCircle2, RotateCcw, Search, Trophy } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

interface TrophyItem {
 id: string;
 name: string;
 group: string;
 note: string;
 status: 'Verified system' | 'Planning item' | 'Needs platform check';
}

const STORAGE_KEY = 'd8020:trophy-progress:v1';

const trophies: TrophyItem[] = [
 {
 id: 'story-complete',
 name: 'Complete the main story',
 group: 'Story',
 note: 'Finish one full route before heavy cleanup.',
 status: 'Planning item',
 },
 {
 id: 'everyone-lives',
 name: 'Everyone lives route',
 group: 'Survival',
 note: 'Keep the core crew alive and preserve evidence before finale branches.',
 status: 'Planning item',
 },
 {
 id: 'all-endings',
 name: 'All endings cleanup',
 group: 'Endings',
 note: 'Use late Turning Points to test route outcomes one variable at a time.',
 status: 'Planning item',
 },
 {
 id: 'death-scenes',
 name: 'Death scene cleanup',
 group: 'Deaths',
 note: 'Do destructive branches after saving a clean survival base.',
 status: 'Planning item',
 },
 {
 id: 'normal-secrets',
 name: '50 normal Secrets',
 group: 'Collectibles',
 note: 'Current guides list 50 normal Secrets.',
 status: 'Verified system',
 },
 {
 id: 'simms-recordings',
 name: '10 Simms Recordings',
 group: 'Collectibles',
 note: 'Track audio/log style entries separately from normal Secrets.',
 status: 'Verified system',
 },
 {
 id: 'o-death-secrets',
 name: '5 O Death Secrets',
 group: 'Collectibles',
 note: 'Keep Curator-style cleanup separate from main evidence.',
 status: 'Verified system',
 },
 {
 id: 'movie-night',
 name: 'Movie Night progress',
 group: 'Mode',
 note: 'Steam lists Movie Night couch co-op; verify whether any achievement requires it.',
 status: 'Needs platform check',
 },
 {
 id: 'survival-mode',
 name: 'Survival Mode route',
 group: 'Mode',
 note: 'Avoid relying on Explorer-style rewind assumptions.',
 status: 'Needs platform check',
 },
 {
 id: 'deluxe-heirlooms',
 name: 'Heirlooms Retrieval',
 group: 'Deluxe',
 note: 'Track Deluxe mission relics separately if achievements use them.',
 status: 'Verified system',
 },
];

const filters = ['All', 'Story', 'Survival', 'Endings', 'Deaths', 'Collectibles', 'Mode', 'Deluxe'];

function readStoredProgress(): string[] {
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

export function TrophyProgressTracker() {
 const [completed, setCompleted] = useState<string[]>([]);
 const [filter, setFilter] = useState('All');
 const [query, setQuery] = useState('');
 const [ready, setReady] = useState(false);

 useEffect(() => {
 setCompleted(readStoredProgress());
 setReady(true);
 }, []);

 const initialCompletedCount = useRef<number | null>(null);
 const hasTrackedUse = useRef(false);

 useEffect(() => {
 if (!ready) return;
 window.localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));

 if (initialCompletedCount.current === null) {
 initialCompletedCount.current = completed.length;
 return;
 }
 if (!hasTrackedUse.current && completed.length > initialCompletedCount.current) {
 hasTrackedUse.current = true;
 trackEvent('tool_complete', {
 tool_name: 'trophy_progress_tracker',
 completed_count: completed.length,
 });
 }
 }, [completed, ready]);

 const completedSet = useMemo(() => new Set(completed), [completed]);
 const completedCount = trophies.filter((item) => completedSet.has(item.id)).length;
 const percent = Math.round((completedCount / trophies.length) * 100);
 const nextItem = trophies.find((item) => !completedSet.has(item.id));
 const visibleTrophies = trophies.filter((item) => {
 const matchesFilter = filter === 'All' || item.group === filter;
 const normalizedQuery = query.trim().toLowerCase();
 const matchesQuery =
 normalizedQuery.length === 0 ||
 item.name.toLowerCase().includes(normalizedQuery) ||
 item.note.toLowerCase().includes(normalizedQuery) ||
 item.group.toLowerCase().includes(normalizedQuery) ||
 item.status.toLowerCase().includes(normalizedQuery);

 return matchesFilter && matchesQuery;
 });

 function toggle(id: string) {
 setCompleted((current) =>
 current.includes(id)
 ? current.filter((item) => item !== id)
 : [...current, id]
 );
 }

 function reset() {
 setCompleted([]);
 }

 return (
 <section
 aria-labelledby="trophy-progress-tracker"
 className="my-10 overflow-hidden rounded-lg border border-border bg-white"
 >
 <div className="border-b border-border bg-mist p-5">
 <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
 <div>
 <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12px] text-foreground">
 <Trophy className="h-4 w-4" />
 Local progress tool
 </p>
 <h2 id="trophy-progress-tracker" className="text-xl font-bold text-foreground">
 Directive 8020 Trophy Progress Tracker
 </h2>
 <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
 Check items as you finish them. Progress is saved in this browser,
 so players can close the guide and come back during cleanup. Items
 marked as planning items are route tasks, not confirmed platform
 trophy names.
 </p>
 </div>
 <button
 type="button"
 onClick={() => {
 reset();
 setFilter('All');
 setQuery('');
 }}
 className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-border/60 px-3 text-sm text-muted-foreground transition-colors hover:border-border hover:text-foreground"
 >
 <RotateCcw className="h-4 w-4" />
 Reset
 </button>
 </div>

 <div className="mt-5">
 <div className="mb-2 flex items-center justify-between text-sm">
 <span className="font-medium text-foreground">
 {completedCount} of {trophies.length} tracked items complete
 </span>
 <span className="font-bold text-foreground">{percent}%</span>
 </div>
 <div className="h-3 overflow-hidden rounded-full bg-muted">
 <div
 className="h-full rounded-full bg-foreground transition-all duration-300"
 style={{ width: `${percent}%` }}
 />
 </div>
 <p className="mt-3 text-sm text-muted-foreground">
 Next suggested check:{' '}
 <strong className="text-foreground">{nextItem?.name ?? 'All tracked items complete'}</strong>
 </p>
 </div>

 <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_280px]">
 <div className="flex gap-2 overflow-x-auto pb-1">
 {filters.map((item) => (
 <button
 key={item}
 type="button"
 onClick={() => setFilter(item)}
 className={`shrink-0 rounded-md border px-3 py-2 text-sm transition-colors ${
 filter === item
 ? 'border-border bg-mist text-foreground'
 : 'border-border text-muted-foreground hover:border-border hover:text-foreground'
 }`}
 >
 {item}
 </button>
 ))}
 </div>
 <label className="relative block">
 <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
 <input
 type="search"
 value={query}
 onChange={(event) => setQuery(event.target.value)}
 placeholder="Search trophy tasks"
 className="h-10 w-full rounded-md border border-border/60 bg-mist pl-9 pr-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-border"
 />
 </label>
 </div>
 </div>

 <div className="grid gap-3 p-4 sm:grid-cols-2">
 {visibleTrophies.map((item) => {
 const checked = completedSet.has(item.id);

 return (
 <label
 key={item.id}
 className={`block rounded-lg border p-4 transition-colors ${
 checked
 ? 'border-border bg-mist'
 : 'border-border bg-mist hover:border-border'
 }`}
 >
 <div className="flex gap-3">
 <input
 type="checkbox"
 checked={checked}
 onChange={() => toggle(item.id)}
 className="mt-1 h-5 w-5 rounded border-border accent-d8020"
 />
 <div className="min-w-0 flex-1">
 <div className="flex flex-wrap items-center gap-2">
 <span className={`font-semibold ${checked ? 'text-foreground line-through' : 'text-foreground'}`}>
 {item.name}
 </span>
 <span className="rounded border border-border px-2 py-0.5 text-[11px] text-muted-foreground">
 {item.group}
 </span>
 <span className="rounded bg-muted px-2 py-0.5 text-[11px] text-muted-foreground">
 {item.status}
 </span>
 </div>
 <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
 {item.note}
 </p>
 {checked && (
 <p className="mt-2 flex items-center gap-1 text-xs font-medium text-foreground">
 <CheckCircle2 className="h-3.5 w-3.5" />
 Completed in this browser
 </p>
 )}
 </div>
 </div>
 </label>
 );
 })}
 </div>

 {visibleTrophies.length === 0 && (
 <div className="px-4 pb-4">
 <div className="rounded-lg border border-border bg-mist p-4 text-sm text-muted-foreground">
 No tracked item matches this filter yet.
 </div>
 </div>
 )}

 <div className="border-t border-border p-4">
 <p className="text-xs leading-relaxed text-muted-foreground">
 Found a trophy mismatch or a newly verified unlock condition? Email{' '}
 <a href="mailto:stephen@enjoy4game.com" className="text-foreground underline underline-offset-4">
 stephen@enjoy4game.com
 </a>{' '}
 with the platform, trophy name, unlock condition, and proof source.
 </p>
 </div>
 </section>
 );
}
