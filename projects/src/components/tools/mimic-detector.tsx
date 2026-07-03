'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { AlertTriangle, RotateCcw, ScanSearch, ShieldCheck } from 'lucide-react';
import {
 directiveCharacters,
 type DirectiveCharacterId,
} from '@/lib/directive-8020-characters';
import { trackEvent } from '@/lib/analytics';

type PlayMode = 'Explorer' | 'Survival';

interface Clue {
 id: string;
 label: string;
 weight: number;
 why: string;
}

const characters = directiveCharacters;

const clues: Clue[] = [
 {
 id: 'isolation-return',
 label: 'Returned after being isolated',
 weight: 3,
 why: 'Isolation is the strongest route-risk signal because no witness can confirm what happened off-screen.',
 },
 {
 id: 'memory-gap',
 label: 'Cannot answer a shared-memory detail',
 weight: 3,
 why: 'Memory mismatch is a direct identity-check clue in a mimic story.',
 },
 {
 id: 'pushes-split',
 label: 'Pushes the group to split up',
 weight: 2,
 why: 'Forced separation makes witnesses, rescue routes, and verification harder.',
 },
 {
 id: 'avoids-evidence',
 label: 'Discourages checking evidence',
 weight: 2,
 why: 'A suspicious crew member benefits when the group skips logs, bodies, terminals, or medical proof.',
 },
 {
 id: 'timeline-conflict',
 label: 'Gives a timeline that conflicts with another witness',
 weight: 2,
 why: 'Contradictory timelines should be preserved as route evidence before any accusation.',
 },
 {
 id: 'knows-impossible-info',
 label: 'Knows information they should not know',
 weight: 3,
 why: 'Impossible knowledge can reveal that the character saw events from a different position than claimed.',
 },
 {
 id: 'contamination-sign',
 label: 'Appears near blood, samples, or contamination',
 weight: 1,
 why: 'Environmental signs are weaker alone, but they matter when combined with identity clues.',
 },
 {
 id: 'urgent-alone-request',
 label: 'Asks you to follow alone under pressure',
 weight: 2,
 why: 'Urgent isolation requests are dangerous when evidence has not been checked.',
 },
];

const initialChecks: Record<DirectiveCharacterId, string[]> = {
 young: [],
 stafford: [],
 eisele: [],
 cooper: [],
 cernan: [],
};

function getScore(checked: string[]) {
 return clues
 .filter((clue) => checked.includes(clue.id))
 .reduce((score, clue) => score + clue.weight, 0);
}

function getRisk(score: number) {
 if (score >= 8) {
 return {
 label: 'Critical suspicion',
 className: 'border-border bg-mist text-foreground',
 action: 'Do not split the group. Preserve evidence, avoid solo follow prompts, and test this branch separately.',
 };
 }

 if (score >= 5) {
 return {
 label: 'High suspicion',
 className: 'border-border bg-mist text-muted-foreground',
 action: 'Verify identity before trust. Look for witness confirmation, medical evidence, or a safer group route.',
 };
 }

 if (score >= 2) {
 return {
 label: 'Watch closely',
 className: 'border-border bg-mist text-foreground',
 action: 'Keep notes and avoid unnecessary separation until the next Story Tree check.',
 };
 }

 return {
 label: 'Low current suspicion',
 className: 'border-border bg-mist text-foreground',
 action: 'No strong mimic signal yet. Continue collecting evidence and compare later dialogue.',
 };
}

export function MimicDetector() {
 const [active, setActive] = useState<DirectiveCharacterId>('young');
 const [mode, setMode] = useState<PlayMode>('Explorer');
 const [checks, setChecks] = useState<Record<DirectiveCharacterId, string[]>>(initialChecks);

 const activeProfile = characters.find((character) => character.id === active) ?? characters[0];
 const ranked = useMemo(() => {
 return characters
 .map((character) => {
 const score = getScore(checks[character.id]);
 return {
 ...character,
 score,
 risk: getRisk(score),
 };
 })
 .sort((a, b) => b.score - a.score);
 }, [checks]);

 const topSuspect = ranked[0];

 // Fire one GA4 custom event the first time the user actually uses the
 // tool (checks at least one clue for any character), not on every
 // checkbox click. This is the concrete "tool completion" signal referenced
 // in the 网站迭代指南 section 6.1 — mark `tool_complete` as a Key event in
 // GA4 Admin > Events once it starts appearing.
 const hasTrackedUse = useRef(false);
 useEffect(() => {
 const totalCluesChecked = Object.values(checks).reduce((sum, list) => sum + list.length, 0);
 if (totalCluesChecked > 0 && !hasTrackedUse.current) {
 hasTrackedUse.current = true;
 trackEvent('tool_complete', {
 tool_name: 'mimic_detector',
 top_suspect: topSuspect?.id ?? 'unknown',
 });
 }
 }, [checks, topSuspect]);

 function toggleClue(characterId: DirectiveCharacterId, clueId: string) {
 setChecks((current) => {
 const currentClues = current[characterId];
 return {
 ...current,
 [characterId]: currentClues.includes(clueId)
 ? currentClues.filter((id) => id !== clueId)
 : [...currentClues, clueId],
 };
 });
 }

 function reset() {
 setChecks(initialChecks);
 setMode('Explorer');
 setActive('young');
 }

 return (
 <section
 aria-labelledby="mimic-detector"
 className="my-10 overflow-hidden rounded-lg border border-border bg-white"
 >
 <div className="border-b border-border bg-mist p-5">
 <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
 <div>
 <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12px] text-foreground">
 <ScanSearch className="h-4 w-4" />
 Mimic Detector Tool
 </p>
 <h2 id="mimic-detector" className="text-xl font-bold text-foreground">
 Directive 8020 Mimic Suspicion Tracker
 </h2>
 <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
 Mark suspicious clues for each crew member. The detector ranks
 suspicion risk and recommends whether to trust, verify, or branch
 safely. It is a decision aid, not a confirmed canon identity list.
 </p>
 </div>
 <div className="flex flex-wrap gap-2">
 {(['Explorer', 'Survival'] as PlayMode[]).map((item) => (
 <button
 key={item}
 type="button"
 onClick={() => setMode(item)}
 className={`rounded-md border px-3 py-2 text-sm transition-colors ${
 mode === item
 ? 'border-border bg-mist text-foreground'
 : 'border-border/60 text-muted-foreground hover:border-border hover:text-foreground'
 }`}
 >
 {item} Mode
 </button>
 ))}
 <button
 type="button"
 onClick={reset}
 className="inline-flex items-center gap-2 rounded-md border border-border/60 px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-border hover:text-foreground"
 >
 <RotateCcw className="h-4 w-4" />
 Reset
 </button>
 </div>
 </div>

 <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_1.2fr]">
 <div className={`rounded-lg border p-4 ${topSuspect.risk.className}`}>
 <div className="flex items-center gap-3">
 <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md border border-white/10 bg-black">
 <Image src={topSuspect.avatar} alt={topSuspect.alt} fill className="object-cover" sizes="56px" />
 </div>
 <div>
 <p className="text-xs font-semibold uppercase tracking-[0.12px] opacity-80">Most suspicious right now</p>
 <p className="mt-1 text-lg font-bold">{topSuspect.character}</p>
 <p className="mt-1 text-sm opacity-90">
 {topSuspect.risk.label} - score {topSuspect.score}
 </p>
 </div>
 </div>
 </div>
 <div className="rounded-lg border border-border bg-mist p-4">
 <p className="text-sm font-semibold text-foreground">
 {mode === 'Explorer' ? 'Explorer Mode advice' : 'Survival Mode advice'}
 </p>
 <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
 {mode === 'Explorer'
 ? 'Use Turning Points to test a suspicious branch after you preserve a clean route. Rewind only after recording what changed.'
 : 'Treat high-suspicion branches as final-risk choices. Avoid solo follow prompts and keep the crew together when possible.'}
 </p>
 </div>
 </div>
 </div>

 <div className="grid gap-4 p-4 lg:grid-cols-[260px_1fr]">
 <div className="grid gap-2">
 {ranked.map((character) => (
 <button
 key={character.id}
 type="button"
 onClick={() => setActive(character.id)}
 className={`rounded-lg border p-3 text-left transition-colors ${
 active === character.id
 ? 'border-border bg-mist'
 : 'border-border bg-mist hover:border-border'
 }`}
 >
 <div className="flex items-start gap-3">
 <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md border border-border bg-black">
 <Image src={character.avatar} alt={character.alt} fill className="object-cover" sizes="48px" />
 </div>
 <div className="min-w-0 flex-1">
 <p className="text-sm font-semibold text-foreground">{character.character}</p>
 <p className="mt-1 text-xs text-muted-foreground">{character.role}</p>
 </div>
 <span className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground">
 {character.score}
 </span>
 </div>
 <p className="mt-2 text-xs text-muted-foreground">{character.risk.label}</p>
 </button>
 ))}
 </div>

 <div className="rounded-lg border border-border bg-mist p-4">
 <div className="mb-4 flex items-center gap-4">
 <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-border bg-black">
 <Image src={activeProfile.avatar} alt={activeProfile.alt} fill className="object-cover" sizes="80px" />
 </div>
 <div>
 <h3 className="text-lg font-bold text-foreground">{activeProfile.character}</h3>
 <p className="text-sm text-muted-foreground">{activeProfile.role}</p>
 </div>
 </div>

 <div className="grid gap-3 md:grid-cols-2">
 {clues.map((clue) => {
 const checked = checks[active].includes(clue.id);

 return (
 <label
 key={clue.id}
 className={`rounded-lg border p-3 transition-colors ${
 checked
 ? 'border-border bg-mist'
 : 'border-border bg-white hover:border-border'
 }`}
 >
 <div className="flex gap-3">
 <input
 type="checkbox"
 checked={checked}
 onChange={() => toggleClue(active, clue.id)}
 className="mt-1 h-5 w-5 rounded border-border accent-d8020"
 />
 <div>
 <p className="text-sm font-semibold text-foreground">
 {clue.label}
 </p>
 <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
 {clue.why}
 </p>
 </div>
 </div>
 </label>
 );
 })}
 </div>

 <div className="mt-4 grid gap-3 md:grid-cols-2">
 {ranked.slice(0, 2).map((character) => (
 <div key={character.id} className={`rounded-lg border p-4 ${character.risk.className}`}>
 <div className="flex items-center gap-2">
 <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-md border border-white/10 bg-black">
 <Image src={character.avatar} alt={character.alt} fill className="object-cover" sizes="36px" />
 </div>
 {character.score >= 5 ? (
 <AlertTriangle className="h-4 w-4" />
 ) : (
 <ShieldCheck className="h-4 w-4" />
 )}
 <p className="text-sm font-bold">{character.character}</p>
 </div>
 <p className="mt-2 text-xs leading-relaxed opacity-90">
 {character.risk.action}
 </p>
 </div>
 ))}
 </div>

 <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
 Found a mismatch in this detector? Email{' '}
 <a href="mailto:stephen@enjoy4game.com" className="text-foreground underline underline-offset-4">
 stephen@enjoy4game.com
 </a>{' '}
 with the episode, scene, choice, and Story Tree node.
 </p>
 </div>
 </div>
 </section>
 );
}
