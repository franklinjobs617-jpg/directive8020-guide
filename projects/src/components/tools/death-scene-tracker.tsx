'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { RotateCcw, Skull } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const STORAGE_KEY = 'd8020:death-scenes:v1';

const deathSlots = Array.from({ length: 44 }, (_, index) => ({
 id: `death-${index + 1}`,
 label: `Death Scene ${index + 1}`,
 note: 'Victim, episode, and trigger pending capture.',
}));

function readStored(): string[] {
 if (typeof window === 'undefined') return [];
 try {
 const raw = window.localStorage.getItem(STORAGE_KEY);
 const parsed: unknown = raw ? JSON.parse(raw) : [];
 return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === 'string') : [];
 } catch {
 return [];
 }
}

export function DeathSceneTracker() {
 const [checked, setChecked] = useState<string[]>([]);
 const [ready, setReady] = useState(false);
 const checkedSet = useMemo(() => new Set(checked), [checked]);
 const percent = Math.round((checked.length / deathSlots.length) * 100);

 useEffect(() => {
 setChecked(readStored());
 setReady(true);
 }, []);

 const initialCheckedCount = useRef<number | null>(null);
 const hasTrackedUse = useRef(false);

 useEffect(() => {
 if (!ready) return;
 window.localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));

 if (initialCheckedCount.current === null) {
 initialCheckedCount.current = checked.length;
 return;
 }
 if (!hasTrackedUse.current && checked.length > initialCheckedCount.current) {
 hasTrackedUse.current = true;
 trackEvent('tool_complete', {
 tool_name: 'death_scene_tracker',
 checked_count: checked.length,
 });
 }
 }, [checked, ready]);

 return (
 <section aria-labelledby="death-scene-tracker" className="my-10 rounded-lg border border-border bg-white p-5">
 <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
 <div>
 <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12px] text-foreground">
 <Skull className="h-4 w-4" />
 Saved tracker
 </p>
 <h2 id="death-scene-tracker" className="text-xl font-bold text-foreground">
 Directive 8020 Death Scene Tracker
 </h2>
 <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
 Mark each captured death while the exact victim and trigger list is being verified.
 </p>
 </div>
 <button
 type="button"
 onClick={() => setChecked([])}
 className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-border/60 px-3 text-sm text-muted-foreground hover:border-border hover:text-foreground"
 >
 <RotateCcw className="h-4 w-4" />
 Reset
 </button>
 </div>

 <div className="mt-5">
 <div className="mb-2 flex justify-between text-sm">
 <span className="font-medium text-foreground">{checked.length} of 44 death scenes captured</span>
 <span className="font-bold text-foreground">{percent}%</span>
 </div>
 <div className="h-3 overflow-hidden rounded-full bg-muted">
 <div className="h-full rounded-full bg-foreground" style={{ width: `${percent}%` }} />
 </div>
 </div>

 <div className="mt-4 grid max-h-[360px] gap-2 overflow-y-auto pr-1 sm:grid-cols-2">
 {deathSlots.map((slot) => {
 const done = checkedSet.has(slot.id);

 return (
 <label key={slot.id} className={`rounded-md border p-3 ${done ? 'border-border bg-mist' : 'border-border bg-mist'}`}>
 <div className="flex gap-3">
 <input
 type="checkbox"
 checked={done}
 onChange={() =>
 setChecked((current) =>
 current.includes(slot.id)
 ? current.filter((item) => item !== slot.id)
 : [...current, slot.id]
 )
 }
 className="mt-1 h-5 w-5 accent-d8020"
 />
 <div>
 <p className="text-sm font-semibold text-foreground">{slot.label}</p>
 <p className="mt-1 text-xs text-muted-foreground">{slot.note}</p>
 </div>
 </div>
 </label>
 );
 })}
 </div>
 </section>
 );
}
