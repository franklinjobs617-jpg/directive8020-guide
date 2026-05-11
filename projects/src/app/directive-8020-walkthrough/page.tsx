import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';

export const metadata: Metadata = {
  title: 'Directive 8020 Full Walkthrough - Step by Step Chapter Guide',
  description:
    'Complete Directive 8020 walkthrough covering every chapter. Step-by-step guide with all choices, QTEs, collectibles, and the best decisions to keep everyone alive.',
  alternates: {
    canonical: '/directive-8020-walkthrough',
  },
};

const faqs = [
  {
    question: 'How long is Directive 8020?',
    answer:
      'Directive 8020 takes approximately 6-8 hours for a single playthrough. Getting all endings and 100% completion may take 15-25 hours, though the Turning Points system makes this faster than previous Dark Pictures games.',
  },
  {
    question: 'How many chapters are in Directive 8020?',
    answer:
      'The full chapter list will be confirmed on launch day. Based on the series pattern, expect 8-12 chapters plus a prologue and epilogue.',
  },
  {
    question: 'Is there a missable content in Directive 8020?',
    answer:
      'Yes, many choices and collectibles can be missed. However, the Turning Points system lets you rewind to specific moments without replaying the entire game, making it easier to find anything you missed.',
  },
];

export default function WalkthroughPage() {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'Directive 8020 Full Walkthrough - Step by Step Chapter Guide',
          description:
            'Complete Directive 8020 walkthrough with all choices, QTEs, collectibles, and optimal decisions.',
          url: '/directive-8020-walkthrough',
          datePublished: '2026-05-12',
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'Walkthrough' }]} />
        <PageHero src="/walkthrough-card.jpg" alt="Directive 8020 full chapter walkthrough" />

        <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
          Directive 8020 Full Walkthrough
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Step-by-step chapter guide with every choice, QTE, and collectible
          mapped out.
        </p>

        <div className="rounded-lg border border-d8020/40 bg-d8020/10 p-6 mb-8 text-center">
          <p className="text-sm text-d8020 font-semibold mb-2">
            Walkthrough Coming Launch Day
          </p>
          <p className="text-sm text-muted-foreground">
            Full chapter-by-chapter walkthrough will be published starting May
            12, 2026. Individual chapter guides will be released as we
            progress through the game.
          </p>
        </div>

        <div className="prose-game">
          <h2>Walkthrough Structure</h2>
          <p>
            Each chapter guide will include:
          </p>
          <ul>
            <li><strong>Full story path:</strong> Every scene and story beat in order</li>
            <li><strong>All dialogue choices:</strong> Every option and which is optimal for keeping characters alive</li>
            <li><strong>QTE sequences:</strong> When they happen and what happens if you fail them</li>
            <li><strong>Collectible locations:</strong> Every secret, clue, and hidden item in the chapter</li>
            <li><strong>Turning Points:</strong> Key moments where the story branches and how to access them later</li>
            <li><strong>Character-specific tips:</strong> How your actions affect each character in this chapter</li>
          </ul>

          <h2>Chapter List</h2>
          <p>
            <em>Chapter breakdown will be added on launch day. Check back on May 12!</em>
          </p>

          <h2>General Tips Before You Start</h2>
          <ul>
            <li><strong>Pay attention to clues:</strong> Environmental clues help you identify the mimic. Examine everything you can.</li>
            <li><strong>Don&apos;t rush dialogue:</strong> The timer on choices can be stressful, but you usually have more time than you think.</li>
            <li><strong>Trust your instincts:</strong> If someone seems &ldquo;off,&rdquo; they might be the mimic. The game rewards careful observation.</li>
            <li><strong>Use headphones:</strong> Audio cues are important for detecting the mimic and surviving encounters.</li>
            <li><strong>Check the Story Tree regularly:</strong> It shows you which paths are available and which characters are at risk.</li>
          </ul>

          <h2>Related Guides</h2>
          <ul>
            <li><a href="/directive-8020-all-endings">All Endings Guide</a></li>
            <li><a href="/directive-8020-how-to-save-everyone">How to Save Everyone</a></li>
            <li><a href="/directive-8020-choices-consequences">Choices &amp; Consequences</a></li>
            <li><a href="/directive-8020-trophy-guide">Trophy &amp; Achievement Guide</a></li>
          </ul>
        </div>

        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
