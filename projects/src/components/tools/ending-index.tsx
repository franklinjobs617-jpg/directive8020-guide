'use client';

import { useState } from 'react';
import { CheckCircle2, Eye, LockKeyhole, Route } from 'lucide-react';

type EndingStatus = 'Confirmed count' | 'Route pending' | 'Spoiler topic';

interface EndingCard {
  id: string;
  label: string;
  intent: string;
  status: EndingStatus;
  checklist: string[];
}

const endings: EndingCard[] = [
  {
    id: 'homeward-bound',
    label: 'Homeward Bound',
    intent: 'Best-route candidate for players trying to preserve the crew and mission outcome.',
    status: 'Route pending',
    checklist: ['Preserve crew survival', 'Collect evidence before trust checks', 'Avoid reckless finale choices'],
  },
  {
    id: 'docked',
    label: 'Docked',
    intent: 'Booster Ring or Cassiopeia-state outcome that should be tested separately from survivor count.',
    status: 'Route pending',
    checklist: ['Track Booster Ring state', 'Record Cassiopeia condition', 'Change one finale variable'],
  },
  {
    id: 'mask-off',
    label: 'Mask Off',
    intent: 'Mimic exposure or identity-reveal outcome that depends on evidence and trust handling.',
    status: 'Route pending',
    checklist: ['Verify mimic clues', 'Use scanner/evidence notes', 'Avoid blind trust near finale'],
  },
  {
    id: 'hitchhiker',
    label: 'Hitchhiker',
    intent: 'Likely contamination or hidden-passenger outcome tied to what leaves the Cassiopeia.',
    status: 'Spoiler topic',
    checklist: ['Track rescue state', 'Record sample/body status', 'Check warning vs distress route'],
  },
  {
    id: 'massacre',
    label: 'Massacre / Horror',
    intent: 'Worst-route and high-death outcomes for all-endings and death-route cleanup.',
    status: 'Spoiler topic',
    checklist: ['Use copy branch only', 'Test late deaths', 'Do not overwrite clean route'],
  },
  {
    id: 'not-alone',
    label: 'Not Alone',
    intent: 'Ambiguous continuation outcome that should be compared against rescue and warning routes.',
    status: 'Spoiler topic',
    checklist: ['Record Andromeda risk', 'Track unresolved mimic evidence', 'Compare crew and ship state'],
  },
];

export function EndingIndex() {
  const [selected, setSelected] = useState(endings[0].id);
  const active = endings.find((ending) => ending.id === selected) ?? endings[0];

  return (
    <section aria-labelledby="ending-index" className="my-10 rounded-lg border border-d8020/40 bg-card/40 p-5">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-d8020">
            <Route className="h-4 w-4" />
            Ending route index
          </p>
          <h2 id="ending-index" className="text-xl font-bold text-foreground">
            Directive 8020 Ending Index
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Pick an ending intent to see what to preserve, what to test, and what still needs verification.
          </p>
        </div>
        <span className="rounded-md border border-border/50 px-3 py-2 text-xs text-muted-foreground">
          5 major ending families reported
        </span>
      </div>

      <div className="mb-4 grid gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {endings.map((ending) => (
          <button
            key={ending.id}
            type="button"
            onClick={() => setSelected(ending.id)}
            className={`rounded-md border p-3 text-left text-sm transition-colors ${
              selected === ending.id
                ? 'border-d8020 bg-d8020/15 text-foreground'
                : 'border-border/50 text-muted-foreground hover:border-d8020/50 hover:text-foreground'
            }`}
          >
            <span className="block font-semibold">{ending.label}</span>
            <span className="mt-1 block text-xs">{ending.status}</span>
          </button>
        ))}
      </div>

      <div className="rounded-lg border border-border/50 bg-background/35 p-4">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-bold text-foreground">{active.label}</h3>
          <span className="rounded bg-muted px-2 py-1 text-xs text-muted-foreground">{active.status}</span>
        </div>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{active.intent}</p>
        <div className="grid gap-3 sm:grid-cols-3">
          {active.checklist.map((item, index) => {
            const Icon = active.status === 'Spoiler topic' ? Eye : index === 0 ? CheckCircle2 : LockKeyhole;

            return (
              <div key={item} className="rounded-md border border-border/50 bg-card/40 p-3">
                <Icon className="mb-2 h-4 w-4 text-d8020" />
                <p className="text-sm text-foreground">{item}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
