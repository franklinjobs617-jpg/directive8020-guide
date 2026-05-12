import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';
import { ArticleImage, VideoEmbed } from '@/components/article-media';

export const metadata: Metadata = {
  title: 'Directive 8020 Turning Points & Story Tree Explained',
  description:
    'Directive 8020 Turning Points and Story Tree guide: how rewind works, how to track branches, save characters, unlock hidden paths, and plan all endings.',
  alternates: {
    canonical: '/directive-8020-turning-points-story-tree',
  },
};

const faqs = [
  {
    question: 'What are Turning Points in Directive 8020?',
    answer:
      'Turning Points are key decision nodes in Directive 8020 that let you revisit important branches, try different choices, save crew members from previous deaths, and uncover hidden paths in the Story Tree.',
  },
  {
    question: 'Is the Story Tree useful for all endings?',
    answer:
      'Yes. The Story Tree is the most useful tool for all endings because it shows which branches you have seen, which paths remain hidden, and where a different choice may change the finale.',
  },
  {
    question: 'Should I rewind immediately after every mistake?',
    answer:
      'Not always. If you want a natural first playthrough, finish your first ending before rewinding. If you are saving everyone or hunting trophies, rewind after major deaths, locked branches, or missed evidence.',
  },
  {
    question: 'Can Turning Points replace a full replay?',
    answer:
      'Turning Points should reduce the need for full replays, but some trophies, modes, or route conditions may still require longer replay sections depending on how the game stores state.',
  },
];

const branchSignals = [
  'A character dies, is injured, or becomes separated.',
  'A relationship visibly improves or worsens.',
  'A trust decision happens after someone was isolated.',
  'A clue changes what dialogue options are available.',
  'The Story Tree marks a node as unexplored or locked.',
  'A finale or ending changes because of an earlier crew state.',
];

export default function TurningPointsPage() {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'Directive 8020 Turning Points & Story Tree Explained',
          description:
            'Guide to Directive 8020 Turning Points, Story Tree branches, rewind strategy, hidden paths, all endings, and save-everyone planning.',
          url: '/directive-8020-turning-points-story-tree',
          datePublished: '2026-05-12',
          dateModified: '2026-05-12',
          imageUrl: '/d8020-screenshot-06.jpg',
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'Turning Points & Story Tree' }]} />
        <PageHero src="/d8020-screenshot-06.jpg" alt="Directive 8020 Turning Points and Story Tree screenshot" />

        <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
          Directive 8020 Turning Points &amp; Story Tree Explained
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Turning Points and the Story Tree are the most important new systems
          in Directive 8020. They turn a branching horror story into something
          you can map, revisit, and optimize for all endings, trophies, and
          save-everyone routes.
        </p>

        <VideoEmbed
          videoId="gaQkzfA14G4"
          title="Directive 8020 official trailer with Turning Points context"
          caption="The official trailer gives the story context for why Turning Points matter: every trust choice can reshape who survives aboard the Cassiopeia."
        />

        <div className="prose-game">
          <h2>How Turning Points Change the Game</h2>
          <p>
            Older Dark Pictures runs often required full replays to test
            different choices. Directive 8020 is built around a more visible
            branching structure. Turning Points let you return to key moments,
            choose differently, and watch how the Story Tree changes.
          </p>
          <p>
            That does not make choices meaningless. It makes route testing more
            practical. If a character dies, the question becomes: which Turning
            Point caused the death, and how far back do you need to go to change
            the conditions?
          </p>

          <ArticleImage
            src="/d8020-screenshot-06.jpg"
            alt="Directive 8020 Story Tree branch planning"
            caption="Use the Story Tree as a route map: endings, hidden paths, character deaths, and trophy cleanup should all be tracked from Turning Points."
          />

          <h2>When to Rewind</h2>
          <p>
            Rewinding too often can ruin tension, but refusing to rewind can
            waste hours if you are targeting a specific route. Choose your style
            before starting.
          </p>
          <ul>
            <li><strong>Blind run:</strong> do not rewind until you reach an ending.</li>
            <li><strong>Save everyone:</strong> rewind after any death, serious injury, or irreversible separation.</li>
            <li><strong>All endings:</strong> finish one route, then branch from late-game Turning Points first.</li>
            <li><strong>Trophy cleanup:</strong> change one branch at a time and record what unlocked.</li>
          </ul>

          <h2>Branch Signals to Track</h2>
          <p>
            Not every line of dialogue is equally important. Prioritize choices
            with visible state changes or mimic-related risk.
          </p>
          <ul>
            {branchSignals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>

          <h2>Best Route Testing Method</h2>
          <ol>
            <li>Complete a chapter and open the Story Tree.</li>
            <li>Write down all visible Turning Points and locked branches.</li>
            <li>Pick one branch and replay from the earliest relevant node.</li>
            <li>Keep QTE results and exploration consistent while changing only one choice.</li>
            <li>Compare survival, relationship, evidence, and ending-state changes.</li>
          </ol>
        </div>

        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
