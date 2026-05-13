'use client';

import { useMemo, useState } from 'react';
import { AlertTriangle, RotateCcw, ShieldCheck } from 'lucide-react';

type ChoiceValue = 'safe' | 'risky' | 'fatal';

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
      { value: 'safe', label: 'Verify first', helper: 'Best for a clean route: look for evidence before trust.' },
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
      { value: 'safe', label: 'Protect crew and mission', helper: 'Safest verified-style planning principle.' },
      { value: 'risky', label: 'Sacrifice one variable', helper: 'Useful for controlled alternate ending tests.' },
      { value: 'fatal', label: 'Panic choice', helper: 'Critical risk for bad-ending cleanup branches.' },
    ],
  },
];

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
        'Use this only as an alternate cleanup branch. Do not treat it as a verified worst-ending trigger until the Story Tree confirms the result.',
    };
  }

  if (riskScore >= 3) {
    return {
      label: 'Mixed ending risk',
      tone: 'warning',
      feedback:
        'This path may still be useful for alternate endings, but verify survivor state, evidence, and relationship changes before continuing.',
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
  const [answers, setAnswers] = useState<Record<string, ChoiceValue>>({
    trust: 'safe',
    evidence: 'safe',
    finale: 'safe',
  });

  const riskScore = Object.values(answers).reduce((score, value) => {
    if (value === 'fatal') return score + 3;
    if (value === 'risky') return score + 1;
    return score;
  }, 0);

  const route = getRoute(riskScore);
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
      className="my-10 overflow-hidden rounded-lg border border-d8020/40 bg-card/40"
    >
      <div className="border-b border-border/50 bg-background/50 p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-d8020">
              Interactive route feedback
            </p>
            <h2 id="survival-ending-tracker" className="text-xl font-bold text-foreground">
              Directive 8020 Survival and Ending Tracker
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Pick route assumptions and get immediate feedback. This is a
              route planner, not a confirmed death calculator: it helps you
              decide whether a branch is safe enough to preserve or better
              saved for cleanup.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setAnswers({ trust: 'safe', evidence: 'safe', finale: 'safe' })}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-border/60 px-3 text-sm text-muted-foreground transition-colors hover:border-d8020/60 hover:text-foreground"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </button>
        </div>

        <div className={`mt-5 rounded-lg border p-4 ${
          route.tone === 'safe'
            ? 'border-green-400/40 bg-green-400/10'
            : route.tone === 'warning'
              ? 'border-yellow-400/40 bg-yellow-400/10'
              : 'border-red-400/40 bg-red-400/10'
        }`}>
          <p className="text-sm font-bold text-foreground">{route.label}</p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{route.feedback}</p>
        </div>
      </div>

      <div className="grid gap-3 p-4 sm:grid-cols-5">
        {routeStatus.map(({ name, state, icon: Icon }) => (
          <div key={name} className="rounded-lg border border-border/50 bg-background/35 p-3 text-center">
            <Icon className={`mx-auto mb-2 h-5 w-5 ${
              state === 'Good for base route' ? 'text-green-300' : state === 'Check before finale' ? 'text-yellow-300' : 'text-red-300'
            }`} />
            <p className="text-sm font-semibold text-foreground">{name}</p>
            <p className="mt-1 text-xs text-muted-foreground">{state}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 p-4 pt-0">
        {choices.map((choice) => (
          <fieldset key={choice.id} className="rounded-lg border border-border/50 bg-background/35 p-4">
            <legend className="px-1 text-sm font-semibold text-foreground">{choice.label}</legend>
            <p className="mb-3 mt-1 text-sm text-muted-foreground">{choice.prompt}</p>
            <div className="grid gap-2 sm:grid-cols-3">
              {choice.options.map((option) => {
                const selected = answers[choice.id] === option.value;

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setAnswers((current) => ({ ...current, [choice.id]: option.value }))}
                    className={`rounded-md border p-3 text-left transition-colors ${
                      selected
                        ? 'border-d8020 bg-d8020/15 text-foreground'
                        : 'border-border/50 text-muted-foreground hover:border-d8020/50 hover:text-foreground'
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
    </section>
  );
}
