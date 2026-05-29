import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';
import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, RelatedGuides, StatusPanel } from '@/components/guide-blocks';

export const metadata: Metadata = {
  title: 'Directive 8020 Save Everyone Guide - Keep All Crew Alive',
  description:
    'Directive 8020 save everyone guide: how to keep Young, Stafford, Eisele, Cooper, and Cernan alive with mimic trust checks, QTEs, stealth, relationships, and Turning Points recovery.',
  alternates: {
    canonical: '/directive-8020-how-to-save-everyone',
  },
};

const faqs = [
  {
    question: 'Is it possible to save everyone in Directive 8020?',
    answer:
      'Yes. Directive 8020 is built around variable survival outcomes, and Turning Points let you revisit deaths and repair a route through the Story Tree.',
  },
  {
    question: 'Who do you need to keep alive in Directive 8020?',
    answer:
      'Track Young, Stafford, Eisele, Cooper, and Cernan as the main crew survival targets, then record supporting-character deaths separately.',
  },
  {
    question: 'Can NPC characters die in Directive 8020?',
    answer:
      'Yes. Some non-playable or supporting characters can die, and those deaths may shape scenes even if they are not part of the main playable survivor route.',
  },
  {
    question: 'What is the biggest survival risk in Directive 8020?',
    answer:
      'The mimic is the biggest new risk because trust decisions are no longer simple relationship choices. A crew member who looks safe may be an alien copy, so verification matters before rescue, pursuit, or separation choices.',
  },
  {
    question: 'Should I rewind with Turning Points immediately after a death?',
    answer:
      'If you are trying to save everyone, yes, but rewind to the earliest relevant Turning Point. A death may be caused by an earlier relationship or evidence choice, not only the final QTE.',
  },
  {
    question: 'Do failed QTEs matter for saving everyone?',
    answer:
      'Yes. In Supermassive games, failed QTEs can injure, separate, or kill characters. Treat every QTE and stealth sequence as survival-critical until proven otherwise.',
  },
];

const survivalRules = [
  'Keep the group together unless the game gives a clear reason to split.',
  'Verify isolated crew members before trusting or following them.',
  'Choose evidence and communication over speed when no immediate timer is present.',
  'Avoid aggressive relationship damage between characters who may need to rescue each other.',
  'Succeed at QTEs, stealth prompts, and combat reactions.',
  'Use Turning Points to test one changed decision at a time.',
];

const quickSaveRows = [
  ['Young', 'Maintain high Loyal relationship; choose Help Stafford in Episode 8 and pass the final shuttle QTEs.', 'Primary protagonist and decision maker.'],
  ['Stafford', 'In Episode 3 cabin crash, choose Stay Seated and Buckle In; choose Help Stafford in Episode 8 chase.', 'Will die instantly if standing during crash or left behind in Ep 8.'],
  ['Eisele', 'In Episode 6 imposter scene, choose to Test Eisele and select the newcomer as the real one.', 'Imposter test failure results in immediate death.'],
  ['Cooper', 'Pass all Episode 4 stealth sequences and locker breath QTEs; avoid early injuries.', 'Lethal injuries in chase scenes trigger delayed deaths.'],
  ['Cernan', 'Ensure Young de-escalates the Episode 6 Williams standoff (choose Stand Down/Lower Weapon).', 'Williams survival is required to clear Cernan\'s route dependencies.'],
];

const survivorRows = [
  { step: 'Young', doThis: 'Build Loyal trait; choose Help Stafford in Ep 8 and succeed in detonating the oxygen tank QTE.', why: 'Young is the main shuttle pilot; her final action determines crew escape success.' },
  { step: 'Stafford', doThis: 'Must Buckle In during Ep 3 cabin depressurization. Young must choose Help Stafford in Ep 8.', why: 'Scripted cabin impact or abandonment in the final corridor triggers instant death.' },
  { step: 'Eisele', doThis: 'In Ep 6 imposter standoff, choose Test instead of shooting, then select the newcomer.', why: 'Choosing the wrong clone or firing prematurely causes Eisele\'s instant death.' },
  { step: 'Cooper', doThis: 'Pass all Ep 4 stealth corridors and lockers breath QTEs without alerting the hunter.', why: 'Stealth mistakes trigger high-difficulty chases that lead to lethal injuries.' },
  { step: 'Cernan', doThis: 'De-escalate the Ep 6 standoff with Williams by choosing Stand Down / Lower Weapon.', why: 'Williams must survive to verify Cernan\'s bio-signals and secure group trust.' },
];

const routeMilestones = [
  ['Episodes 1-2', 'Build stable relationships and avoid reckless blame before the mimic threat fully dominates decisions.'],
  ['Episodes 3-4', 'Prioritize evidence, sample context, stealth success, and scanner awareness before the route opens wider.'],
  ['Episode 5: Mr. Williams', 'Audit everyone alive, every clue found, and every unresolved suspicion before mid-game fallout locks in.'],
  ['Episode 6: Hostile Takeover', 'Treat survivor-dependent scenes carefully because who is alive can change what you can save next.'],
  ['Episode 7: Revelation', 'Handle late 50-50 style decisions one at a time and preserve mission-critical information.'],
  ['Episode 8: Come True', 'Use the best-ending base route, then branch for alternate endings only after everyone survives.'],
];

export default function SaveEveryonePage() {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'Directive 8020 Save Everyone Guide - Keep All Crew Alive',
          description:
            'Directive 8020 survival guide covering how to keep Young, Stafford, Eisele, Cooper, and Cernan alive with mimic trust checks, QTEs, stealth, relationships, and Turning Points recovery.',
          url: '/directive-8020-how-to-save-everyone',
          datePublished: '2026-05-12',
          dateModified: '2026-05-21',
          imageUrl: '/d8020-screenshot-05.jpg',
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'How to Save Everyone' }]} />
        <PageHero src="/d8020-screenshot-05.jpg" alt="Directive 8020 official mimic horror scene screenshot" />

        <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
          Directive 8020 Save Everyone Guide
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          To save everyone in Directive 8020, track Young, Stafford, Eisele,
          Cooper, and Cernan separately, then protect the route with mimic
          verification, group safety, relationship control, clean QTEs, stealth
          discipline, and careful Turning Points replay.
        </p>

        <BlufBox>
          <p>
            <strong>To save everyone, protect both people and information.</strong>
            Keep Young, Eisele, Cernan, Stafford, and Cooper alive by verifying
            isolated crew members, passing QTEs, preserving relationships,
            collecting evidence before accusations, and rewinding to the
            earliest relevant Turning Point after any death.
          </p>
        </BlufBox>

        <StatusPanel
          items={[
            { label: 'Playable survivor list', value: 'Young, Eisele, Cernan, Stafford, and Cooper are used as the working route table.', status: 'working' },
            { label: 'Exact save choices', value: 'Use chapter route testing and Turning Points for option-by-option cleanup.', status: 'working' },
            { label: 'Survival method', value: 'QTEs, relationships, evidence, stealth, and Turning Points are reliable guide categories.', status: 'verified' },
            { label: 'NPC deaths', value: 'Supporting-character deaths should be tracked separately from the five playable survivor route.', status: 'working' },
          ]}
        />

        <div className="prose-game">
          <h2>Quick Crew Survival Table</h2>
          <p>
            Start with the crew checklist, then use the longer route sections
            below when a death actually happens. The fastest way to recover a
            save-everyone route is to identify whose risk changed and replay
            from the earliest relevant Turning Point.
          </p>
        </div>

        <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Crew member</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Save priority</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why it matters</th>
              </tr>
            </thead>
            <tbody>
              {quickSaveRows.map(([crew, priority, reason]) => (
                <tr key={crew} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{crew}</td>
                  <td className="px-4 py-3 text-muted-foreground">{priority}</td>
                  <td className="px-4 py-3 text-muted-foreground">{reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-game">
          <h2>Core Survival Rules</h2>
          <p>
            Saving everyone in a Supermassive game is usually about preventing a
            chain reaction. A small argument can make a later rescue fail. A
            missed clue can make a trust choice harder. Directive 8020 adds an
            alien that can imitate crew members, so your safest route is to
            protect both bodies and information.
          </p>
          <ul>
            {survivalRules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>

          <h2>Everyone Lives Route Table</h2>
          <p>
            Use this table to trace the exact choices and requirements for each survivor.
            Replay from the nearest Turning Point if a character dies.
          </p>
          <ActionTable rows={survivorRows} />

          <h2>Save-Everyone Chapter Milestones</h2>
          <p>
            Use these milestones to keep the everyone-lives route organized.
            They are not a replacement for exact choices, but they tell you what
            each section of the route is trying to protect.
          </p>
        </div>

        <div className="rounded-lg border border-border/50 bg-card/30 overflow-hidden my-6">
          <table className="w-full text-sm">
            <tbody>
              {routeMilestones.map(([episode, goal]) => (
                <tr key={episode} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 text-foreground font-medium w-48">{episode}</td>
                  <td className="px-4 py-3 text-muted-foreground">{goal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-game">
          <h2>The Mimic Rule: Trust Requires Proof</h2>
          <p>
            In earlier anthology games, helping another character is often the
            moral or relationship-positive option. In Directive 8020, the same
            instinct can be dangerous. If a character has been isolated, appears
            suddenly, or asks you to separate from the group, treat the scene as
            a verification test.
          </p>

          <ArticleImage
            src="/d8020-screenshot-03.jpg"
            alt="Directive 8020 Young survival route screenshot"
            caption="For save-everyone routing, treat major characters like Young as both decision makers and survival anchors: their relationships, evidence, and location can shape later branches."
          />
          <ul>
            <li><strong>Ask what they know:</strong> memory and context checks are safer than blind loyalty.</li>
            <li><strong>Look for witnesses:</strong> a character seen by others is easier to trust.</li>
            <li><strong>Do not isolate twice:</strong> if someone returned from isolation, avoid following them alone.</li>
            <li><strong>Preserve communication:</strong> routes that let the group confirm facts are usually safer.</li>
          </ul>

          <h2>QTE and Stealth Strategy</h2>
          <p>
            Directive 8020 includes more active survival language than earlier
            entries: evasion, stealth, improvised weapons, and lightning
            reflexes. For a save-everyone run, assume every action sequence can
            matter until the Story Tree proves it does not.
          </p>
          <ul>
            <li>Use a controller or keyboard setup you are comfortable with before starting.</li>
            <li>Turn off distractions and overlays that can steal focus.</li>
            <li>In stealth scenes, choose observation and cover over speed.</li>
            <li>If a QTE failure injures a character, mark it as a possible later-death setup.</li>
          </ul>

          <h2>Relationship Management</h2>
          <p>
            The cleanest survival routes in these games usually require
            characters to cooperate under pressure. That does not mean always
            choosing the nicest line. It means avoiding reckless insults,
            needless blame, and choices that make one character refuse to save
            another later.
          </p>
          <ul>
            <li>Choose calm, evidence-based dialogue when the crew is divided.</li>
            <li>Do not accuse without proof unless the alternative is immediate danger.</li>
            <li>Keep high-conflict pairs from making isolated life-or-death choices.</li>
            <li>Favor routes that share information with the group.</li>
          </ul>

          <h2>How to Recover a Death with Turning Points</h2>
          <p>
            When someone dies, do not automatically replay the final seconds.
            Work backward. The visible death may only be the last step in a
            route that went bad earlier.
          </p>
          <ol>
            <li>Open the Story Tree and identify the death branch.</li>
            <li>Find the earliest nearby Turning Point tied to separation, trust, evidence, or relationship status.</li>
            <li>Replay that section and change only one decision.</li>
            <li>If the same death happens, move one Turning Point earlier.</li>
            <li>Once the character survives, note the exact condition that changed.</li>
          </ol>

          <h2>First-Run Survival Checklist</h2>
          <p>
            Keep this checklist beside the walkthrough page if you want to avoid
            major spoilers while still playing for a strong survival outcome.
          </p>
          <ul>
            <li>Did anyone split from the group?</li>
            <li>Did they return with proof of where they were?</li>
            <li>Did a choice damage a relationship before a dangerous scene?</li>
            <li>Did you miss a clue before a trust decision?</li>
            <li>Did a failed QTE cause injury, lost equipment, or separation?</li>
          </ul>
        </div>

        <RelatedGuides
          guides={[
            {
              href: '/directive-8020-walkthrough',
              title: 'Full Walkthrough',
              description: 'Use the episode guide to identify the exact Turning Point before each death.',
            },
            {
              href: '/directive-8020-choices-consequences',
              title: 'Choices & Consequences',
              description: 'Map which dialogue, trust, and action choices alter survivor state.',
            },
            {
              href: '/directive-8020-all-endings',
              title: 'All Endings Guide',
              description: 'Use the everyone-lives route as the base for best ending testing.',
            },
            {
              href: '/directive-8020-stealth-guide',
              title: 'Stealth Guide',
              description: 'Avoid route damage from pursuit failures and noisy movement.',
            },
          ]}
        />

        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
