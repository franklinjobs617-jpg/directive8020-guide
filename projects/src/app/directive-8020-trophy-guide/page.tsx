import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema, generateHowToSchema } from '@/components/json-ld';
import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, RelatedGuides, StatusPanel } from '@/components/guide-blocks';
import { TrophyProgressTracker } from '@/components/tools/trophy-progress-tracker';

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
    question: 'Why are Directive 8020 PS5 trophies not showing?',
    answer:
      'Some players report that PS5 trophies may not appear immediately in the online trophy view. Check the local console trophy list and wait for PlayStation Network data to sync before assuming the list is missing.',
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

const platinumRows = [
  { step: 'Run 1', doThis: 'Blind or semi-blind survival run while collecting as much evidence as possible.', why: 'Creates the base Story Tree and preserves story impact.' },
  { step: 'Run 2', doThis: 'Save-everyone cleanup using Turning Points and relationship repair.', why: 'Builds the best route before destructive trophy branches.' },
  { step: 'Run 3', doThis: 'Endings and deaths cleanup from late Turning Points.', why: 'Fastest way to collect route-specific trophies.' },
  { step: 'Final cleanup', doThis: 'Collectibles, Heirlooms, Movie Night, and mode-specific requirements.', why: 'These are easier once route locks are known.' },
];

const platformIssues = [
  ['PS5 trophy list not showing', 'Check the local console trophy screen, then wait for PSN sync before relying on online trophy databases.'],
  ['Steam achievements visible', 'Steam lists achievements as a store feature, but exact names should be captured from the live achievement list.'],
  ['Missable route trophies', 'Use Turning Points only after one clean route so deaths and endings do not corrupt the base save.'],
  ['Collectible trophies', 'Use the 65-collectible structure: 50 normal Secrets, 10 Simms Recordings, and 5 O Death Secrets.'],
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
          dateModified: '2026-05-13',
          imageUrl: '/d8020-screenshot-06.jpg',
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />
      <JsonLd
        data={generateHowToSchema({
          name: 'How to plan Directive 8020 trophy cleanup',
          description:
            'A conservative trophy cleanup route for Directive 8020 using one clean route, Turning Points, endings, deaths, collectibles, and final platform checks.',
          url: '/directive-8020-trophy-guide',
          steps: [
            {
              name: 'Complete one full route',
              text: 'Finish one natural playthrough and record deaths, endings, collectibles, and major Story Tree branches.',
            },
            {
              name: 'Build a save-everyone base',
              text: 'Use Turning Points to repair deaths and preserve a clean survivor route before destructive trophy cleanup.',
            },
            {
              name: 'Branch for endings and deaths',
              text: 'Change one late-game variable at a time so each ending or death result can be verified.',
            },
            {
              name: 'Finish collectibles and platform checks',
              text: 'Complete Secrets, Simms Recordings, O Death Secrets, Heirlooms, mode checks, and verified platform trophy names.',
            },
          ],
        })}
      />

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

        <BlufBox>
          <p>
            <strong>Do not trophy hunt randomly.</strong> Finish one route,
            build a save-everyone base, then use Turning Points for endings,
            deaths, collectibles, Heirlooms, Movie Night, and any Survival Mode
            cleanup. For platform status, PS5 trophies, Steam achievements, and
            Platinum planning, use the <a href="/directive-8020-trophy-list">Directive
            8020 trophy list</a>.
          </p>
        </BlufBox>

        <StatusPanel
          items={[
            { label: 'Steam achievements', value: 'Steam lists achievements for Directive 8020.', status: 'verified' },
            { label: 'Exact trophy names', value: 'Use live platform lists before final names; some PS5 trophy views may lag behind local console data.', status: 'working' },
            { label: 'Cleanup method', value: 'Story Tree and Turning Points are the central route-planning tools.', status: 'verified' },
            { label: 'Collectible route', value: 'Current guides list 65 total collectibles including 5 O Death Secrets.', status: 'verified' },
          ]}
        />

        <TrophyProgressTracker />

        <div className="prose-game">
          <h2>Current Verification Note</h2>
          <p>
            The tracker above separates confirmed systems from route-planning
            tasks. Steam confirms achievements as a platform feature, Movie
            Night couch co-op is listed publicly, and the 65-collectible
            structure is trackable. Exact platform trophy names and any
            Platinum-specific requirements should still be checked against the
            live PS5, Xbox, or Steam achievement list before being treated as
            final.
          </p>

          <h2>Trophy Guide vs Trophy List</h2>
          <p>
            This page is the 100% strategy guide. It explains cleanup order,
            missable planning, Turning Points, collectibles, endings, and route
            control. The separate trophy list page tracks platform-specific
            queries such as Steam achievements, PS5 trophies, Xbox achievements,
            and Platinum status.
          </p>

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

          <h2>Recommended Platinum Route</h2>
          <ActionTable rows={platinumRows} />

          <h2>Platform Trophy Issues Players Are Searching</h2>
          <p>
            After launch, trophy searches are not only about the final list.
            Players also look for missing PS5 trophy data, Steam achievement
            visibility, and which trophies are missable.
          </p>
        </div>

        <div className="rounded-lg border border-border/50 bg-card/30 overflow-hidden my-6">
          <table className="w-full text-sm">
            <tbody>
              {platformIssues.map(([issue, fix]) => (
                <tr key={issue} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 text-foreground font-medium w-48">{issue}</td>
                  <td className="px-4 py-3 text-muted-foreground">{fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-game">
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

        <RelatedGuides
          guides={[
            {
              href: '/directive-8020-trophy-list',
              title: 'Trophy List',
              description: 'Check Steam achievements, PS5 trophies, Xbox achievements, and Platinum status.',
            },
            {
              href: '/directive-8020-collectibles-heirlooms',
              title: 'Collectibles & Heirlooms',
              description: 'Track secrets, clues, Deluxe relics, and route-locked items.',
            },
            {
              href: '/directive-8020-all-endings',
              title: 'All Endings',
              description: 'Use finale branches for ending-related achievements.',
            },
            {
              href: '/directive-8020-death-scenes-guide',
              title: 'All Death Scenes',
              description: 'Check death-related trophies after the save-everyone route.',
            },
            {
              href: '/directive-8020-movie-night-multiplayer',
              title: 'Movie Night',
              description: 'Plan local co-op trophies and character assignment.',
            },
          ]}
        />

        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
