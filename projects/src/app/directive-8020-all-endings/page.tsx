import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';

export const metadata: Metadata = {
  title: 'Directive 8020 All Endings Guide - How to Get Every Ending',
  description:
    'Complete guide to all endings in Directive 8020. How to unlock the best ending, worst ending, and every secret ending. Full requirements and decision paths explained.',
  alternates: {
    canonical: '/directive-8020-all-endings',
  },
};

const faqs = [
  {
    question: 'How many endings does Directive 8020 have?',
    answer:
      'The exact number of endings will be confirmed on launch day. Based on previous Dark Pictures games, expect multiple distinct endings determined by which characters survive and the cumulative effect of your choices throughout the story.',
  },
  {
    question: 'What is the best ending in Directive 8020?',
    answer:
      'The best ending typically involves keeping all characters alive and making morally positive choices. Our complete guide will detail the exact requirements on launch day.',
  },
  {
    question: 'Can I see all endings in one playthrough?',
    answer:
      'No, you cannot see all endings in a single playthrough. However, the new Turning Points system allows you to rewind to key decisions and experience different branches without starting over completely.',
  },
  {
    question: 'Does the Curator affect the endings?',
    answer:
      'The Curator is expected to return in Directive 8020 as in previous Dark Pictures games. While he does not directly change the endings, his hints and observations can guide you toward or away from certain outcomes.',
  },
];

export default function AllEndingsPage() {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'Directive 8020 All Endings Guide - How to Get Every Ending',
          description:
            'Complete guide to all endings in Directive 8020. Unlock the best ending, worst ending, and every secret ending.',
          url: '/directive-8020-all-endings',
          datePublished: '2026-05-12',
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'All Endings' }]} />
        <PageHero src="/endings-card.jpg" alt="Directive 8020 all endings guide" />

        <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
          Directive 8020: All Endings Guide
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Every ending in Directive 8020, how to unlock each one, and the
          requirements for the best and worst outcomes.
        </p>

        {/* Coming Soon Banner */}
        <div className="rounded-lg border border-d8020/40 bg-d8020/10 p-6 mb-8 text-center">
          <p className="text-sm text-d8020 font-semibold mb-2">
            Guide In Progress
          </p>
          <p className="text-sm text-muted-foreground">
            This guide will be fully updated with detailed ending descriptions,
            requirements, and decision paths on launch day (May 12, 2026).
            Check back after the game releases.
          </p>
        </div>

        <div className="prose-game">
          <h2>Understanding Endings in Directive 8020</h2>
          <p>
            Like previous entries in The Dark Pictures Anthology, Directive 8020
            features multiple endings determined by the cumulative effect of
            your choices throughout the game. The key factors that determine
            your ending include:
          </p>
          <ul>
            <li><strong>Character survival:</strong> Which characters live or die significantly impacts the ending you receive</li>
            <li><strong>Key decisions:</strong> Certain critical choices directly alter the story&apos;s conclusion</li>
            <li><strong>Relationships:</strong> How characters relate to each other can change their fates</li>
            <li><strong>Hidden clues:</strong> Finding secrets and collectibles may unlock additional ending details</li>
          </ul>

          <h2>How the Ending System Works</h2>
          <p>
            Directive 8020 introduces the <strong>Turning Points</strong> system,
            which changes how you approach multiple endings. Instead of replaying
            the entire game to see different outcomes, you can rewind to key
            decision points and explore alternate paths.
          </p>
          <p>
            The <strong>Story Tree</strong> gives you a visual map of all the
            branches you&apos;ve discovered and the ones you haven&apos;t. This
            makes it much easier to track which endings you&apos;ve unlocked and
            which remain to be found.
          </p>

          <h2>Ending Categories (Expected)</h2>
          <p>
            Based on the series pattern, expect endings to fall into these categories:
          </p>
          <ul>
            <li><strong>Best Ending:</strong> All characters survive, mission succeeds</li>
            <li><strong>Good Ending:</strong> Most characters survive with some sacrifices</li>
            <li><strong>Bad Ending:</strong> Significant casualties, mission compromised</li>
            <li><strong>Worst Ending:</strong> Everyone dies, mission fails completely</li>
            <li><strong>Secret Ending:</strong> Hidden ending requiring specific conditions</li>
          </ul>
        </div>

        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
