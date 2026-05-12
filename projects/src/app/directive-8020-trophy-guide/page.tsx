import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';
import { ArticleImage } from '@/components/article-media';

export const metadata: Metadata = {
  title: 'Directive 8020 Trophy & Achievement Guide - Full List & Unlock Tips',
  description:
    'Directive 8020 trophy and achievement guide: Steam achievements, likely trophy categories, missable route planning, Turning Points cleanup, collectibles, endings, and 100% strategy.',
  alternates: {
    canonical: '/directive-8020-trophy-guide',
  },
};

const faqs = [
  {
    question: 'Does Directive 8020 have Steam achievements?',
    answer:
      'Yes. Steam lists Steam Achievements for Directive 8020. The exact public achievement list should be verified at launch before writing individual trophy names.',
  },
  {
    question: 'Are Directive 8020 trophies missable?',
    answer:
      'Choice-driven Supermassive games usually include missable trophies tied to endings, character survival, deaths, collectibles, and specific decisions. Turning Points should make cleanup easier than replaying the entire game.',
  },
  {
    question: 'Should I use Turning Points for trophy cleanup?',
    answer:
      'Yes. Turning Points and the Story Tree are likely the most efficient way to revisit specific choices, deaths, and hidden paths for achievements without repeating a full playthrough.',
  },
  {
    question: 'What should I track for 100% completion?',
    answer:
      'Track character survival, major choices, collectibles, hidden paths, endings, Movie Night progress if relevant, and any bonus mission or Deluxe content objectives.',
  },
];

const trophyBuckets = [
  {
    name: 'Story progression',
    value: 'Chapter and finale trophies that unlock naturally as you complete the game.',
  },
  {
    name: 'Survival outcomes',
    value: 'Trophies for keeping characters alive, allowing specific deaths, or reaching certain crew states.',
  },
  {
    name: 'Ending routes',
    value: 'Best ending, bad ending, worst ending, and route-specific finale outcomes.',
  },
  {
    name: 'Collectibles and evidence',
    value: 'Logs, secrets, clues, heirlooms, or objects that explain the mimic and the Dark Pictures universe.',
  },
  {
    name: 'Choice-specific',
    value: 'Achievements tied to trusting, accusing, saving, abandoning, or confronting characters at key points.',
  },
  {
    name: 'Mode and replay systems',
    value: 'Possible trophies involving Movie Night, Turning Points, Story Tree completion, or Survivor-style play.',
  },
];

export default function TrophyGuidePage() {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'Directive 8020 Trophy & Achievement Guide - Full List & Unlock Tips',
          description:
            'Directive 8020 trophy guide covering achievement categories, missable planning, Turning Points cleanup, collectibles, endings, and 100% strategy.',
          url: '/directive-8020-trophy-guide',
          datePublished: '2026-05-12',
          dateModified: '2026-05-12',
          imageUrl: '/d8020-screenshot-06.jpg',
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'Trophy Guide' }]} />
        <PageHero src="/d8020-screenshot-06.jpg" alt="Directive 8020 Story Tree trophy guide screenshot" />

        <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
          Directive 8020 Trophy &amp; Achievement Guide
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Directive 8020 supports Steam achievements and is built around
          branching routes, deaths, endings, collectibles, and Turning Points.
          This guide gives you a 100% strategy that avoids wasted full replays
          while the exact public trophy names are being verified.
        </p>

        <div className="prose-game">
          <h2>How to Approach 100% Completion</h2>
          <p>
            Do not trophy-hunt Directive 8020 like a linear action game. The
            efficient route is to complete one strong blind or semi-blind run,
            document the Story Tree, then use Turning Points to clean up
            alternate deaths, trust decisions, and endings.
          </p>
          <ol>
            <li>Finish one full playthrough and note every death, ending, and major locked branch.</li>
            <li>Collect as much evidence as possible before route cleanup.</li>
            <li>Use Turning Points to branch into alternate outcomes one at a time.</li>
            <li>Save full replay modes or challenge routes for last.</li>
            <li>Only chase specific hidden achievements once the Story Tree is mostly mapped.</li>
          </ol>

          <h2>Expected Trophy Categories</h2>
        </div>

        <div className="grid gap-4 my-6 sm:grid-cols-2">
          {trophyBuckets.map((bucket) => (
            <section key={bucket.name} className="rounded-lg border border-border/50 bg-card/30 p-5">
              <h3 className="text-base font-bold text-foreground mb-2">{bucket.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{bucket.value}</p>
            </section>
          ))}
        </div>

        <div className="prose-game">
          <h2>Missable Trophy Planning</h2>
          <p>
            The most expensive trophies in this genre are not the automatic
            chapter trophies. They are the route-specific trophies that require
            a character to be alive, dead, trusted, blamed, or present at a
            particular scene. Track these conditions from the start:
          </p>
          <ul>
            <li><strong>Character state:</strong> alive, dead, injured, separated, or suspected.</li>
            <li><strong>Relationship state:</strong> who trusts whom and who refused help.</li>
            <li><strong>Evidence state:</strong> which clues were found before accusation scenes.</li>
            <li><strong>Ending state:</strong> who survives into the finale and what mission choice is made.</li>
            <li><strong>Branch state:</strong> which Turning Points still show unexplored paths.</li>
          </ul>

          <h2>Collectibles and Deluxe Mission Notes</h2>
          <p>
            The Digital Deluxe content listed on Steam includes a bonus mission
            called <strong>The Dark Pictures Heirlooms Retrieval</strong>, which
            involves hidden dolls and relics from Man of Medan, Little Hope,
            House of Ashes, and The Devil in Me. If achievements connect to this
            content, collectible tracking will matter even outside the main
            story route.
          </p>

          <ArticleImage
            src="/d8020-screenshot-09.jpg"
            alt="Directive 8020 collectible route screenshot"
            caption="Collectible and achievement cleanup should focus on searchable ship spaces: crew areas, terminals, labs, medical rooms, and objective-adjacent corners."
          />
          <ul>
            <li>Search rooms before triggering obvious exits.</li>
            <li>Rotate camera angles in dark interiors; collectibles may be near equipment or bunks.</li>
            <li>Record chapter, room name, and nearby objective for every collectible.</li>
            <li>Check whether collectibles persist after rewinding with Turning Points.</li>
          </ul>

          <h2>Turning Points Cleanup Strategy</h2>
          <p>
            Turning Points are the main tool for reducing replay time. The
            correct method is controlled branching: change one decision, observe
            the trophy or Story Tree result, then return and test the next
            branch.
          </p>
          <ul>
            <li>Use one clean survival route as your base file.</li>
            <li>Do death-related trophies after saving everyone, not before.</li>
            <li>Do ending trophies in clusters from the nearest finale Turning Point.</li>
            <li>Leave mode-specific trophies for a separate run if the game marks them separately.</li>
          </ul>
        </div>

        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
