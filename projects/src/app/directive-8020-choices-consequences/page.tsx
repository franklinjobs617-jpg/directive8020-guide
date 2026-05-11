import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';

export const metadata: Metadata = {
  title: 'Directive 8020 All Choices & Consequences - Decision Map',
  description:
    'Every choice in Directive 8020 and its consequences. Complete decision map showing all major choices, branching paths, and how each decision affects the story and character survival.',
  alternates: {
    canonical: '/directive-8020-choices-consequences',
  },
};

const faqs = [
  {
    question: 'Do all choices matter in Directive 8020?',
    answer:
      'While not every single choice has major consequences, many decisions significantly impact the story. Key choices can determine whether characters live or die, alter relationships between crew members, and change the ending you receive.',
  },
  {
    question: 'Can I undo a choice in Directive 8020?',
    answer:
      'Yes! The Turning Points system allows you to rewind to key decision moments and choose a different path. This is useful if you want to see the consequences of different choices without replaying the entire game.',
  },
  {
    question: 'How do I know which choices are important?',
    answer:
      'Important choices are typically marked by dramatic pauses, character close-ups, or the signature Dark Pictures &ldquo;choice timer.&rdquo; The Story Tree also shows you which decision points led to significant branches.',
  },
];

export default function ChoicesConsequencesPage() {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'Directive 8020 All Choices & Consequences - Decision Map',
          description:
            'Every choice in Directive 8020 and its consequences. Complete decision map and branching paths.',
          url: '/directive-8020-choices-consequences',
          datePublished: '2026-05-12',
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'Choices & Consequences' }]} />
        <PageHero src="/choices-card.jpg" alt="Directive 8020 choices and consequences guide" />

        <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
          Directive 8020: All Choices &amp; Consequences
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Every major decision mapped out. Know exactly what happens before you
          choose — no more guessing.
        </p>

        <div className="rounded-lg border border-d8020/40 bg-d8020/10 p-6 mb-8 text-center">
          <p className="text-sm text-d8020 font-semibold mb-2">
            Guide In Progress
          </p>
          <p className="text-sm text-muted-foreground">
            Full choice-and-consequence mapping will be published on launch day
            (May 12, 2026). Below is the framework for how choices work in
            Directive 8020.
          </p>
        </div>

        <div className="prose-game">
          <h2>How Choices Work in Directive 8020</h2>
          <p>
            Directive 8020 features several types of decisions that affect the
            story:
          </p>
          <ul>
            <li><strong>Timed dialogue choices:</strong> You have a limited window to choose your response. The timer adds pressure and realism.</li>
            <li><strong>Action decisions:</strong> Real-time choices during stealth or escape sequences where you must act quickly.</li>
            <li><strong>Relationship choices:</strong> How you interact with other characters affects their willingness to help you later.</li>
            <li><strong>Trust decisions:</strong> Given the mimic mechanic, deciding whether to trust someone is a recurring and high-stakes choice.</li>
          </ul>

          <h2>The Mimic Mechanic &amp; Trust</h2>
          <p>
            The most unique aspect of Directive 8020&apos;s choice system is the
            mimic. Since the alien can disguise itself as any crew member,
            choosing to trust someone is always a gamble. Key questions
            throughout the game include:
          </p>
          <ul>
            <li>Is this person really who they say they are?</li>
            <li>Should I help them or protect myself?</li>
            <li>Are they acting normally, or are they the alien?</li>
            <li>Should I warn others about my suspicions?</li>
          </ul>
          <p>
            Getting the trust decisions wrong can lead to deadly consequences.
            Our guide will map out every trust-related choice and its outcome.
          </p>

          <h2>Choice Categories</h2>
          <p>
            Based on the series pattern, choices in Directive 8020 fall into
            these categories:
          </p>
          <ul>
            <li><strong>Critical Choices:</strong> Directly determine whether a character lives or dies</li>
            <li><strong>Relationship Choices:</strong> Affect how characters interact and whether they help each other</li>
            <li><strong>Story Choices:</strong> Change the narrative direction and available paths</li>
            <li><strong>Hidden Choices:</strong> Subtle decisions that have delayed consequences</li>
          </ul>

          <h2>Full Choice Map</h2>
          <p>
            <em>Complete choice-by-choice breakdown with consequences will be added on launch day.</em> Each
            entry will include:
          </p>
          <ul>
            <li>The choice and its two (or more) options</li>
            <li>Immediate consequences of each option</li>
            <li>Long-term effects on the story and characters</li>
            <li>Which ending path the choice leads toward</li>
          </ul>
        </div>

        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
