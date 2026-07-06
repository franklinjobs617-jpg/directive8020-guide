'use client';

import { useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { AlertTriangle, RotateCcw, ShieldCheck, Skull, UserRoundCheck } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import {
 directiveCharacters,
 type DirectiveCharacterId,
} from '@/lib/directive-8020-characters';

type ChoiceValue = 'safe' | 'risky' | 'fatal';
type PlayMode = 'Explorer' | 'Survival';

interface Choice {
 id: string;
 label: string;
 prompt: string;
 options: { value: ChoiceValue; label: string; helper: string }[];
}

const choices: Choice[] = [
 {
 id: 'trust',
 label: 'Trust check',
 prompt: 'An isolated crew member returns with a weak explanation.',
 options: [
 { value: 'safe', label: 'Check first', helper: 'Best for a clean route: look for evidence before trust.' },
 { value: 'risky', label: 'Trust quickly', helper: 'Route risk: weaker evidence before a mimic check.' },
 { value: 'fatal', label: 'Split the team', helper: 'Critical risk: isolation can remove later safety options.' },
 ],
 },
 {
 id: 'evidence',
 label: 'Evidence route',
 prompt: 'You can leave now or search one more room.',
 options: [
 { value: 'safe', label: 'Search evidence', helper: 'More dialogue options and stronger ending route.' },
 { value: 'risky', label: 'Leave now', helper: 'Faster, but later accusation scenes may be weaker.' },
 { value: 'fatal', label: 'Ignore warnings', helper: 'Critical risk if repeated across multiple branches.' },
 ],
 },
 {
 id: 'finale',
 label: 'Finale discipline',
 prompt: 'The finale asks for a high-pressure mission decision.',
 options: [
 { value: 'safe', label: 'Protect crew and mission', helper: 'Safest safe planning principle.' },
 { value: 'risky', label: 'Sacrifice one variable', helper: 'Useful for controlled alternate ending tests.' },
 { value: 'fatal', label: 'Panic choice', helper: 'Critical risk for bad-ending cleanup branches.' },
 ],
 },
];

const characterThresholds: Record<DirectiveCharacterId, { injured: number; dead: number }> = {
 young: { injured: 3, dead: 7 },
 stafford: { injured: 4, dead: 8 },
 eisele: { injured: 2, dead: 6 },
 cooper: { injured: 4, dead: 9 },
 cernan: { injured: 3, dead: 7 },
};

const characters = directiveCharacters.map((character) => ({
 ...character,
 thresholds: characterThresholds[character.id],
}));

const routeChecks = [
 'Crew survival preserved',
 'Mimic proof collected',
 'Relationships protected',
 'Finale branch isolated',
 'Explorer rewind available',
];

function getRoute(riskScore: number) {
 if (riskScore >= 6) {
 return {
 label: 'Critical route risk',
 tone: 'danger',
 feedback:
 'Use this only as an alternate cleanup branch. Do not treat it as a final worst-ending trigger until the Story Tree confirms the result.',
 };
 }

 if (riskScore >= 3) {
 return {
 label: 'Mixed ending risk',
 tone: 'warning',
 feedback:
 'This path may still be useful for alternate endings, but check survivor state, evidence, and relationship changes before continuing.',
 };
 }

 return {
 label: 'Clean route candidate',
 tone: 'safe',
 feedback:
 'This is the route to preserve first: evidence, crew safety, and controlled finale choices. It is a planning aid, not a confirmed ending trigger.',
 };
}

export function SurvivalEndingTracker() {
 const [mode, setMode] = useState<PlayMode>('Explorer');
 const [answers, setAnswers] = useState<Record<string, ChoiceValue>>({
 trust: 'safe',
 evidence: 'safe',
 finale: 'safe',
 });

 const hasTrackedUse = useRef(false);
 function handleAnswerChange(choiceId: string, value: ChoiceValue) {
 setAnswers((current) => ({ ...current, [choiceId]: value }));
 if (!hasTrackedUse.current) {
 hasTrackedUse.current = true;
 trackEvent('tool_complete', {
 tool_name: 'survival_ending_tracker',
 choice_id: choiceId,
 });
 }
 }

 const riskScore = Object.values(answers).reduce((score, value) => {
 if (value === 'fatal') return score + 3;
 if (value === 'risky') return score + 1;
 return score;
 }, 0);

 const route = getRoute(riskScore);
 const endingCandidate = riskScore >= 6 ? 'Ending #4 risk branch' : riskScore >= 3 ? 'Ending #2 / #3 mixed branch' : 'Ending #1 clean-route candidate';
 const modeWarning = mode === 'Survival'
 ? 'Survival Mode: treat this result as a commitment unless the game explicitly gives you a recovery path.'
 : 'Explorer Mode: preserve this route, then test changes through Turning Points one variable at a time.';

 const characterStates = characters.map((character, index) => {
 const adjustedScore = riskScore + (index === 2 && answers.evidence !== 'safe' ? 1 : 0) + (index === 0 && answers.trust === 'fatal' ? 1 : 0);
 if (adjustedScore >= character.thresholds.dead) {
 return {
 ...character,
 state: mode === 'Survival' ? 'Death risk' : 'Route lost until rewind',
 tone: 'danger',
 };
 }
 if (adjustedScore >= character.thresholds.injured) {
 return {
 ...character,
 state: 'Injury / separation risk',
 tone: 'warning',
 };
 }
 return {
 ...character,
 state: 'Stable for base route',
 tone: 'safe',
 };
 });

 const routeStatus = useMemo(() => {
 return routeChecks.map((name, index) => {
 if (riskScore >= 6 && index > 1) return { name, state: 'Needs repair', icon: AlertTriangle };
 if (riskScore >= 3 && index > 2) return { name, state: 'Check before finale', icon: AlertTriangle };
 if (riskScore >= 1 && index === 4) return { name, state: 'Mode dependent', icon: AlertTriangle };
 return { name, state: 'Good for base route', icon: ShieldCheck };
 });
 }, [riskScore]);

 return (
 <section
 aria-labelledby="survival-ending-tracker"
 className="my-10 overflow-hidden rounded-lg border border-border bg-white"
 >
 <div className="border-b border-border bg-mist p-5">
 <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
 <div>
 <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12px] text-foreground">
 Interactive route feedback
 </p>
 <h2 id="survival-ending-tracker" className="text-xl font-bold text-foreground">
 Directive 8020 Survival and Ending Simulator
 </h2>
 <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
 Pick route assumptions and get immediate feedback. This is a
 route planner, not a confirmed death calculator: it helps you
 decide whether a branch is safe enough to preserve or better
 saved for cleanup.
 </p>
 </div>
 <div className="flex flex-wrap gap-2">
 {(['Explorer', 'Survival'] as PlayMode[]).map((item) => (
 <button
 key={item}
 type="button"
 onClick={() => setMode(item)}
 className={`h-10 rounded-md border px-3 text-sm transition-colors ${
 mode === item
 ? 'border-border bg-mist text-foreground'
 : 'border-border/60 text-muted-foreground hover:border-border hover:text-foreground'
 }`}
 >
 {item}
 </button>
 ))}
 <button
 type="button"
 onClick={() => {
 setAnswers({ trust: 'safe', evidence: 'safe', finale: 'safe' });
 setMode('Explorer');
 }}
 className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-border/60 px-3 text-sm text-muted-foreground transition-colors hover:border-border hover:text-foreground"
 >
 <RotateCcw className="h-4 w-4" />
 Reset
 </button>
 </div>
 </div>

 <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_1fr]">
 <div className={`rounded-lg border p-4 ${
 route.tone === 'safe'
 ? 'border-border bg-mist'
 : route.tone === 'warning'
 ? 'border-border bg-mist'
 : 'border-border bg-mist'
 }`}>
 <p className="text-sm font-bold text-foreground">{route.label}</p>
 <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{route.feedback}</p>
 </div>
 <div className="rounded-lg border border-border bg-mist p-4">
 <p className="text-sm font-bold text-foreground">{endingCandidate}</p>
 <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{modeWarning}</p>
 </div>
 </div>
 </div>

 <div className="grid gap-3 p-4 sm:grid-cols-5">
 {characterStates.map((character) => (
 <div
 key={character.id}
 className={`rounded-lg border p-3 text-center ${
 character.tone === 'safe'
 ? 'border-border bg-mist'
 : character.tone === 'warning'
 ? 'border-border bg-mist'
 : 'border-border bg-mist'
 }`}
 >
 <div className="relative mx-auto mb-3 h-16 w-16 overflow-hidden rounded-lg border border-white/10 bg-black">
 <Image src={character.avatar} alt={character.alt} fill className="object-cover" sizes="64px" />
 </div>
 {character.tone === 'danger' ? (
 <Skull className="mx-auto mb-2 h-5 w-5 text-foreground" />
 ) : character.tone === 'warning' ? (
 <AlertTriangle className="mx-auto mb-2 h-5 w-5 text-muted-foreground" />
 ) : (
 <UserRoundCheck className="mx-auto mb-2 h-5 w-5 text-foreground" />
 )}
 <p className="text-sm font-semibold text-foreground">{character.character}</p>
 <p className="text-xs text-muted-foreground">{character.role}</p>
 <p className="mt-2 text-xs font-medium text-foreground">{character.state}</p>
 </div>
 ))}
 </div>

 <div className="grid gap-3 p-4 sm:grid-cols-5">
 {routeStatus.map(({ name, state, icon: Icon }) => (
 <div key={name} className="rounded-lg border border-border bg-mist p-3 text-center">
 <Icon className={`mx-auto mb-2 h-5 w-5 ${
 state === 'Good for base route' ? 'text-foreground' : state === 'Check before finale' ? 'text-muted-foreground' : 'text-foreground'
 }`} />
 <p className="text-sm font-semibold text-foreground">{name}</p>
 <p className="mt-1 text-xs text-muted-foreground">{state}</p>
 </div>
 ))}
 </div>

 <div className="grid gap-4 p-4 pt-0">
 {choices.map((choice) => (
 <fieldset key={choice.id} className="rounded-lg border border-border bg-mist p-4">
 <legend className="px-1 text-sm font-semibold text-foreground">{choice.label}</legend>
 <p className="mb-3 mt-1 text-sm text-muted-foreground">{choice.prompt}</p>
 <div className="grid gap-2 sm:grid-cols-3">
 {choice.options.map((option) => {
 const selected = answers[choice.id] === option.value;

 return (
 <button
 key={option.value}
 type="button"
 onClick={() => handleAnswerChange(choice.id, option.value)}
 className={`rounded-md border p-3 text-left transition-colors ${
 selected
 ? 'border-border bg-mist text-foreground'
 : 'border-border text-muted-foreground hover:border-border hover:text-foreground'
 }`}
 >
 <span className="block text-sm font-semibold">{option.label}</span>
 <span className="mt-1 block text-xs leading-relaxed">{option.helper}</span>
 </button>
 );
 })}
 </div>
 </fieldset>
 ))}
 </div>

 <div className="border-t border-border p-4">
 <p className="text-xs leading-relaxed text-muted-foreground">
 Found a route mismatch? Email{' '}
 <a href="mailto:stephen@enjoy4game.com" className="text-foreground underline underline-offset-4">
 stephen@enjoy4game.com
 </a>{' '}
 with the mode, choice combination, episode, and Story Tree node.
 </p>
 </div>
 </section>
 );
}
