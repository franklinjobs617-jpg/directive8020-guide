import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { JsonLd, generateFAQSchema } from '@/components/json-ld';

export const metadata: Metadata = {
  title: 'How to Extract in Enginefall — Skyhook & Dagger Guide',
  description:
    'How to extract in Enginefall: use the Skyhook to send items out safely without ending your run, or return to your Dagger to end the session. Full extraction guide for the 2026 playtest build.',
  alternates: {
    canonical: '/games/enginefall/how-to-extract',
  },
};

export default function EnginefallHowToExtractPage() {
  return (
    <div className="site-shell py-8">
      <JsonLd
        data={generateFAQSchema([
          {
            question: 'How do you extract in Enginefall?',
            answer:
              'There are two ways to extract in Enginefall: use the Skyhook to safely send a few high-value items out of the train without ending your run, or return to your Dagger shuttle with your full backpack to end the session and keep everything you are carrying.',
          },
          {
            question: 'What is the Skyhook in Enginefall?',
            answer:
              'The Skyhook is an extraction mechanic in Enginefall that lets you send a limited number of items safely out of the train without ending your current run. It is useful when you find high-value loot early and want to secure it before continuing deeper.',
          },
          {
            question: 'What happens if you die before extracting in Enginefall?',
            answer:
              'If you die before extracting in Enginefall, you lose the items in your backpack. Items already sent via Skyhook are safe. Your Dagger and its stored items are not affected by dying on a run.',
          },
          {
            question: 'Can you extract solo in Enginefall?',
            answer:
              'Yes. Solo play is possible in Enginefall and extraction works the same way — use the Skyhook for partial extraction or return to your Dagger to end the run. The game is built around social PvP pressure so solo runs are harder but viable.',
          },
        ])}
      />

      <Breadcrumb
        items={[
          { label: 'Games', href: '/games' },
          { label: 'Enginefall', href: '/games/enginefall' },
          { label: 'How to Extract', href: '/games/enginefall/how-to-extract' },
        ]}
      />

      <h1 className="mb-3 text-[36px] font-bold leading-tight tracking-tight text-foreground sm:text-[44px]">
        How to Extract in Enginefall
      </h1>
      <p className="mb-8 text-sm text-muted-foreground">
        June 2026 playtest build · Updated for current mechanics
      </p>

      {/* Quick answer */}
      <div className="mb-8 rounded-lg border border-border bg-mist/50 p-5">
        <p className="mb-1 text-sm font-semibold text-foreground">Quick answer</p>
        <p className="text-sm leading-6 text-muted-foreground">
          Enginefall has <strong className="text-foreground">two extraction methods</strong>: the{' '}
          <strong className="text-foreground">Skyhook</strong> (send items out mid-run without
          leaving) or <strong className="text-foreground">returning to your Dagger</strong> (end
          the run, keep your full backpack). Dying before either means losing unextracted items.
        </p>
      </div>

      <div className="max-w-3xl space-y-10 text-base leading-7">

        <section>
          <h2 className="mb-3 text-2xl font-bold text-foreground">
            Method 1: Skyhook — extract items without ending your run
          </h2>
          <p className="text-muted-foreground">
            The Skyhook lets you send high-value items safely out of the train mid-raid.
            Your run continues — you stay on the train, keep exploring, and the extracted
            items are secured regardless of what happens next.
          </p>
          <div className="mt-4 rounded-lg border border-border bg-white p-4">
            <p className="mb-2 text-sm font-semibold text-foreground">Steps:</p>
            <ol className="list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
              <li>Find a Skyhook extraction point on the train (look for the extraction marker).</li>
              <li>Open your inventory and select the items to send out.</li>
              <li>Confirm the extraction — those items are now safe.</li>
              <li>Continue your run. The Skyhook has a per-use item limit.</li>
            </ol>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            <strong className="text-foreground">What to prioritize:</strong> rare loot, crafting
            materials your Dagger needs, or anything you cannot afford to lose. Leave bulk items
            for the Dagger run.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-bold text-foreground">
            Method 2: Return to your Dagger — end the run
          </h2>
          <p className="text-muted-foreground">
            Your Dagger is your personal shuttle docked at the tail of the train. Returning to it
            ends your current raid and keeps everything in your backpack. This is the standard
            extraction for ending a full session.
          </p>
          <div className="mt-4 rounded-lg border border-border bg-white p-4">
            <p className="mb-2 text-sm font-semibold text-foreground">Steps:</p>
            <ol className="list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
              <li>Head back toward the tail of the train.</li>
              <li>Watch for other players — the return route is the highest-pressure PvP zone.</li>
              <li>Board your Dagger to end the session.</li>
              <li>All carried items are saved and contribute to Dagger upgrades.</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-bold text-foreground">When to extract</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-white p-4">
              <p className="mb-2 text-sm font-semibold text-foreground">Extract now when:</p>
              <ul className="list-disc space-y-1 pl-4 text-sm text-muted-foreground">
                <li>Backpack is near capacity with valuable loot</li>
                <li>Health is low and no recovery materials left</li>
                <li>You found a rare item worth ending early for</li>
                <li>Multiple players are closing in on your position</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-white p-4">
              <p className="mb-2 text-sm font-semibold text-foreground">Keep pushing when:</p>
              <ul className="list-disc space-y-1 pl-4 text-sm text-muted-foreground">
                <li>Skyhook charges left to secure priority items first</li>
                <li>Next car has a schematic your Dagger upgrade needs</li>
                <li>Health and supplies are in good shape</li>
                <li>Time remaining in the session is substantial</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-bold text-foreground">Common extraction mistakes</h2>
          <ul className="list-disc space-y-3 pl-6 text-muted-foreground">
            <li>
              <strong className="text-foreground">Overstaying the session</strong> — each raid has
              a roughly five-hour window before the enginefall event. Most item losses happen to
              players who pushed past their supply window.
            </li>
            <li>
              <strong className="text-foreground">Not checking exits first</strong> — before
              committing to looting a new car, locate your exit route. Getting cornered is the
              leading cause of pre-extraction deaths.
            </li>
            <li>
              <strong className="text-foreground">Skipping the Skyhook on valuable finds</strong> —
              if you find something rare early, Skyhook it immediately. Don't carry it for the
              full session and risk losing it to a player ambush near the Dagger.
            </li>
          </ul>
        </section>

        {/* Related links */}
        <section className="rounded-lg border border-border bg-mist/30 p-5">
          <p className="mb-3 text-sm font-semibold text-foreground">More Enginefall guides</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {[
              ['Beginner Guide — First Run Survival', '/games/enginefall-beginner-guide'],
              ['Dagger Guide — Your Rail Base & Upgrades', '/games/enginefall-dagger-guide'],
              ['Conductor Guide — Train Control', '/games/enginefall-conductor-guide'],
              ['System Requirements & Console Status', '/games/enginefall-system-requirements-platforms'],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-md border border-border bg-white px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-mist hover:text-foreground"
              >
                {label} →
              </a>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
