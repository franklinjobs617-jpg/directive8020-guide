import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';

export const metadata: Metadata = {
  title: 'Directive 8020 Trophy & Achievement Guide - Full List & Unlock Tips',
  description:
    'Complete Directive 8020 trophy and achievement guide. Full list of all trophies, unlock requirements, missable achievements, and tips for getting 100% completion.',
  alternates: {
    canonical: '/directive-8020-trophy-guide',
  },
};

const faqs = [
  {
    question: 'How many trophies does Directive 8020 have?',
    answer:
      'The full trophy list will be revealed on launch day. Based on previous Dark Pictures games, expect approximately 30-40 trophies including a Platinum trophy on PlayStation.',
  },
  {
    question: 'Are there missable trophies in Directive 8020?',
    answer:
      'Yes, based on the series tradition, many trophies are tied to specific choices and can be missed in a single playthrough. However, the Turning Points system makes it easier to go back and unlock missable trophies without restarting.',
  },
  {
    question: 'How long does it take to get 100% achievements?',
    answer:
      'Estimating 15-25 hours for full completion, depending on how efficiently you use Turning Points to revisit different story branches. This is significantly faster than previous Dark Pictures games which required multiple full playthroughs.',
  },
];

export default function TrophyGuidePage() {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'Directive 8020 Trophy & Achievement Guide - Full List & Unlock Tips',
          description:
            'Complete Directive 8020 trophy and achievement guide with unlock tips for 100% completion.',
          url: '/directive-8020-trophy-guide',
          datePublished: '2026-05-12',
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'Trophy Guide' }]} />
        <PageHero src="/trophy-card.jpg" alt="Directive 8020 trophy and achievement guide" />

        <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
          Directive 8020 Trophy &amp; Achievement Guide
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Full list of all trophies and achievements, with tips for unlocking
          every single one and achieving 100% completion.
        </p>

        <div className="rounded-lg border border-d8020/40 bg-d8020/10 p-6 mb-8 text-center">
          <p className="text-sm text-d8020 font-semibold mb-2">
            Guide In Progress
          </p>
          <p className="text-sm text-muted-foreground">
            The complete trophy list with detailed unlock instructions will be
            published on launch day (May 12, 2026).
          </p>
        </div>

        <div className="prose-game">
          <h2>Expected Trophy Categories</h2>
          <p>
            Based on the Dark Pictures series, Directive 8020 trophies are
            likely to fall into these categories:
          </p>
          <ul>
            <li><strong>Story progression:</strong> Unlocked automatically as you advance through the narrative</li>
            <li><strong>Character survival:</strong> Keeping specific characters alive or letting them die</li>
            <li><strong>Ending-related:</strong> Reaching specific endings or combinations of outcomes</li>
            <li><strong>Collectible:</strong> Finding all secrets, clues, or hidden items</li>
            <li><strong>Choice-specific:</strong> Making particular choices at key decision points</li>
            <li><strong>Completion:</strong> Exploring all story branches or unlocking all Turning Points</li>
          </ul>

          <h2>Tips for Efficient Trophy Hunting</h2>
          <ul>
            <li><strong>Use Turning Points:</strong> This is the biggest advantage Directive 8020 gives trophy hunters. Instead of replaying the entire game, rewind to specific decisions to unlock choice-based trophies.</li>
            <li><strong>Check the Story Tree:</strong> The Story Tree shows you which paths you haven&apos;t explored yet — these unexplored branches often correspond to unlockable trophies.</li>
            <li><strong>Play Survivor Mode last:</strong> Get all your story-related trophies first with Turning Points, then do a clean Survivor Mode run for the challenge trophies.</li>
            <li><strong>Don&apos;t skip QTEs:</strong> Many trophies require successful QTE completion. Pay attention during action sequences.</li>
          </ul>

          <h2>Full Trophy List</h2>
          <p>
            <em>Complete trophy list with descriptions and unlock tips will be added on launch day.</em>
          </p>
        </div>

        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
