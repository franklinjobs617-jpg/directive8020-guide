import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';
import { ArticleImage } from '@/components/article-media';

export const metadata: Metadata = {
  title: 'How to Save Everyone in Directive 8020 - Full Survival Guide',
  description:
    'How to save everyone in Directive 8020: spoiler-safe survival rules, mimic trust checks, QTE and stealth advice, relationship management, and Turning Points recovery strategy.',
  alternates: {
    canonical: '/directive-8020-how-to-save-everyone',
  },
};

const faqs = [
  {
    question: 'Is it possible to save everyone in Directive 8020?',
    answer:
      'The Dark Pictures Anthology structure is built around variable survival outcomes, and Directive 8020 includes Turning Points to revisit deaths. A full survival route should be possible or at least directly trackable through the Story Tree after launch.',
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

export default function SaveEveryonePage() {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'How to Save Everyone in Directive 8020 - Full Survival Guide',
          description:
            'Spoiler-safe Directive 8020 survival guide covering mimic trust checks, QTEs, stealth, relationships, and Turning Points recovery.',
          url: '/directive-8020-how-to-save-everyone',
          datePublished: '2026-05-12',
          dateModified: '2026-05-12',
          imageUrl: '/d8020-screenshot-05.jpg',
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'How to Save Everyone' }]} />
        <PageHero src="/d8020-screenshot-05.jpg" alt="Directive 8020 official mimic horror scene screenshot" />

        <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
          How to Save Everyone in Directive 8020
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          A full survival route depends on chapter-specific testing, but you can
          start playing intelligently now. This guide explains the survival
          logic Directive 8020 is built around: mimic verification, group
          safety, relationship control, QTE discipline, and Turning Points.
        </p>

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

        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
