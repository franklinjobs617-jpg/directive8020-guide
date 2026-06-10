'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Activity, Archive, Skull, Trophy } from 'lucide-react';

const progressItems = [
 {
 key: 'd8020:trophy-progress:v1',
 label: 'Trophy tasks',
 total: 10,
 href: '/directive-8020-trophy-guide',
 icon: Trophy,
 },
 {
 key: 'd8020:collectibles:v1',
 label: 'Collectibles',
 total: 66,
 href: '/directive-8020-collectibles-heirlooms',
 icon: Archive,
 },
 {
 key: 'd8020:death-scenes:v1',
 label: 'Death scenes',
 total: 44,
 href: '/directive-8020-death-scenes-guide',
 icon: Skull,
 },
];

function readCount(key: string) {
 if (typeof window === 'undefined') return 0;

 try {
 const raw = window.localStorage.getItem(key);
 const parsed: unknown = raw ? JSON.parse(raw) : [];
 return Array.isArray(parsed) ? parsed.length : 0;
 } catch {
 return 0;
 }
}

export function MyProgressPanel() {
 const [counts, setCounts] = useState<Record<string, number>>({});

 useEffect(() => {
 const nextCounts = Object.fromEntries(
 progressItems.map((item) => [item.key, readCount(item.key)])
 );
 setCounts(nextCounts);
 }, []);

 const totalDone = useMemo(
 () => progressItems.reduce((sum, item) => sum + (counts[item.key] ?? 0), 0),
 [counts]
 );
 const totalItems = progressItems.reduce((sum, item) => sum + item.total, 0);
 const percent = Math.round((totalDone / totalItems) * 100);

 return (
 <section aria-labelledby="my-progress" className="my-10 rounded-lg border border-border bg-white p-5">
 <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
 <div>
 <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12px] text-foreground">
 <Activity className="h-4 w-4" />
 Browser saved progress
 </p>
 <h2 id="my-progress" className="text-xl font-bold text-foreground">
 My Directive 8020 Progress
 </h2>
 <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
 This panel reads your local checklist progress from this browser. No login or account is required.
 </p>
 </div>
 <span className="rounded-md border border-border px-3 py-2 text-sm font-bold text-foreground">
 {percent}% overall
 </span>
 </div>

 <div className="mb-4 h-3 overflow-hidden rounded-full bg-muted">
 <div className="h-full rounded-full bg-foreground transition-all duration-300" style={{ width: `${percent}%` }} />
 </div>

 <div className="grid gap-3 sm:grid-cols-3">
 {progressItems.map((item) => {
 const done = counts[item.key] ?? 0;
 const Icon = item.icon;

 return (
 <Link key={item.key} href={item.href} className="rounded-lg border border-border bg-mist p-4 transition-colors hover:border-border">
 <Icon className="mb-3 h-5 w-5 text-foreground" />
 <p className="text-sm font-semibold text-foreground">{item.label}</p>
 <p className="mt-1 text-xs text-muted-foreground">
 {done} / {item.total} saved
 </p>
 </Link>
 );
 })}
 </div>
 </section>
 );
}
