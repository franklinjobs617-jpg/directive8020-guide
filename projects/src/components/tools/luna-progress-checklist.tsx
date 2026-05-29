'use client';

import { useEffect, useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { lunaAbyssNextRunSteps } from '@/lib/luna-abyss';

interface LunaProgressChecklistProps {
  title?: string;
  steps?: string[];
  storageKey?: string;
  compact?: boolean;
}

const defaultStorageKey = 'luna-abyss-progress:v1';

export function LunaProgressChecklist({
  title = 'Next Run Checklist',
  steps = lunaAbyssNextRunSteps,
  storageKey = defaultStorageKey,
  compact = false,
}: LunaProgressChecklistProps) {
  const [checkedIds, setCheckedIds] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  const stepRows = useMemo(
    () =>
      steps.map((step, index) => ({
        id: `step-${index}`,
        text: step,
      })),
    [steps]
  );

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          const savedIds = parsed.filter((item): item is string => typeof item === 'string');
          setCheckedIds((current) => (current.length > 0 ? current : savedIds));
        }
      }
    } catch {
      setCheckedIds((current) => current);
    } finally {
      setLoaded(true);
    }
  }, [storageKey]);

  useEffect(() => {
    if (!loaded) return;
    window.localStorage.setItem(storageKey, JSON.stringify(checkedIds));
  }, [checkedIds, loaded, storageKey]);

  function toggleStep(id: string) {
    setCheckedIds((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  }

  function clearProgress() {
    setCheckedIds([]);
  }

  return (
    <section className={`my-8 rounded-lg border border-d8020/35 bg-d8020/10 ${compact ? 'p-4' : 'p-5'}`}>
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-d8020">Saved locally</p>
          <h2 className="mt-1 text-lg font-bold text-foreground">{title}</h2>
        </div>
        <Button type="button" variant="outline" size="sm" onClick={clearProgress}>
          Clear
        </Button>
      </div>

      <div className="grid gap-3">
        {stepRows.map((step) => {
          const checked = checkedIds.includes(step.id);

          return (
            <label
              key={step.id}
              className="flex cursor-pointer items-start gap-3 rounded-md border border-border/45 bg-background/35 p-3"
            >
              <Checkbox
                checked={checked}
                onCheckedChange={() => toggleStep(step.id)}
                aria-label={step.text}
                className="mt-0.5"
              />
              <span className={checked ? 'text-sm leading-relaxed text-muted-foreground line-through' : 'text-sm leading-relaxed text-foreground'}>
                {step.text}
              </span>
            </label>
          );
        })}
      </div>
    </section>
  );
}
