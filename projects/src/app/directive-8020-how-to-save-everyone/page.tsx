import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';

export const metadata: Metadata = {
  title: 'How to Save Everyone in Directive 8020 - Full Survival Guide',
  description:
    'Keep every character alive in Directive 8020. Step-by-step survival guide covering every chapter, decision point, QTE, and relationship choice to save the entire Cassiopeia crew.',
  alternates: {
    canonical: '/directive-8020-how-to-save-everyone',
  },
};

const faqs = [
  {
    question: 'Is it possible to save everyone in Directive 8020?',
    answer:
      'Based on the Dark Pictures series tradition, yes, it is possible to keep all characters alive. However, it requires making the correct choices at every critical moment and succeeding in all QTEs. The Turning Points system makes this easier by letting you rewind to fix mistakes.',
  },
  {
    question: 'What happens if a character dies?',
    answer:
      'When a character dies, they are gone for the rest of that playthrough. Their story ends, and other characters will react to their death. However, with Turning Points, you can rewind to the decision that led to their death and try a different choice.',
  },
  {
    question: 'Do I need to use Turning Points to save everyone?',
    answer:
      'Not necessarily. If you make all the right choices on your first try, you can save everyone without using Turning Points. However, most players will likely need to rewind at least a few times to achieve a full survival playthrough.',
  },
];

export default function SaveEveryonePage() {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'How to Save Everyone in Directive 8020 - Full Survival Guide',
          description:
            'Keep every character alive in Directive 8020. Step-by-step guide to save the entire crew.',
          url: '/directive-8020-how-to-save-everyone',
          datePublished: '2026-05-12',
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'How to Save Everyone' }]} />
        <PageHero src="/save-everyone-card.jpg" alt="Directive 8020 how to save everyone guide" />

        <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
          How to Save Everyone in Directive 8020
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Complete survival guide for every character. Step-by-step
          instructions for keeping the entire Cassiopeia crew alive.
        </p>

        <div className="rounded-lg border border-d8020/40 bg-d8020/10 p-6 mb-8 text-center">
          <p className="text-sm text-d8020 font-semibold mb-2">
            Guide In Progress
          </p>
          <p className="text-sm text-muted-foreground">
            Detailed character-by-character survival instructions will be
            published on launch day (May 12, 2026). Below is a general
            framework based on the series mechanics.
          </p>
        </div>

        <div className="prose-game">
          <h2>General Survival Principles</h2>
          <p>
            Based on the entire Dark Pictures series, these principles apply
            to keeping characters alive in Directive 8020:
          </p>
          <ul>
            <li><strong>Never rush decisions:</strong> Take your time with dialogue choices. Aggressive or reckless options often lead to death.</li>
            <li><strong>Succeed at every QTE:</strong> Failed quick-time events are one of the most common causes of character death. Stay alert.</li>
            <li><strong>Keep the group together:</strong> Characters who split from the group are more vulnerable to the alien threat.</li>
            <li><strong>Build positive relationships:</strong> Characters who trust each other are more likely to help in critical moments.</li>
            <li><strong>Be suspicious:</strong> The alien can mimic anyone. If a character is acting strangely, be cautious in your interactions.</li>
            <li><strong>Use stealth when possible:</strong> The new stealth mechanics give you an alternative to direct confrontation.</li>
          </ul>

          <h2>Using Turning Points to Save Characters</h2>
          <p>
            The Turning Points system is your best tool for achieving a full
            survival playthrough. Here&apos;s how to use it effectively:
          </p>
          <ul>
            <li><strong>Play naturally first:</strong> Make your best guesses on the first run and see what happens.</li>
            <li><strong>Check the Story Tree:</strong> After each chapter, review which branches led to negative outcomes.</li>
            <li><strong>Rewind strategically:</strong> Go back to the earliest Turning Point that could change a character&apos;s fate.</li>
            <li><strong>Try different choices:</strong> Sometimes the &ldquo;obvious&rdquo; safe choice is actually the wrong one.</li>
          </ul>

          <h2>Chapter-by-Chapter Survival Guide</h2>
          <p>
            <em>Detailed chapter-by-chapter instructions will be added on launch day.</em> Each
            chapter section will include:
          </p>
          <ul>
            <li>All critical decision points and the correct choices</li>
            <li>QTE sequences that must be completed successfully</li>
            <li>Character-specific danger moments</li>
            <li>Hidden clues that affect survival outcomes</li>
          </ul>
        </div>

        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
