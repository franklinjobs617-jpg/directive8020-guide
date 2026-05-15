import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';
import { ArticleImage } from '@/components/article-media';
import { BlufBox, RelatedGuides, StatusPanel } from '@/components/guide-blocks';

export const metadata: Metadata = {
  title: 'Directive 8020 Cycle 13 Explained - Ending & Booster Ring',
  description:
    'Directive 8020 Cycle 13 explained with spoiler-aware context for the ending, Booster Ring, Cassiopeia outcome, Eisele Destiny, and Story Tree cleanup.',
  alternates: {
    canonical: '/directive-8020-cycle-13-explained',
  },
};

const faqs = [
  {
    question: 'What is Cycle 13 in Directive 8020?',
    answer:
      'Cycle 13 is a late-story and ending-related Directive 8020 topic. Treat it as spoiler content and read ending explanations only after finishing Come True once.',
  },
  {
    question: 'Is Cycle 13 connected to the Booster Ring?',
    answer:
      'Cycle 13 and the Booster Ring are both finale-context search topics, so they should be read together with the all-endings guide and Come True route notes.',
  },
  {
    question: 'Should I read Cycle 13 spoilers before playing?',
    answer:
      'No. Finish at least one route first, then use Cycle 13 explanation pages for finale interpretation and alternate ending cleanup.',
  },
  {
    question: 'Does Eisele Destiny matter for the ending?',
    answer:
      'Eisele Destiny is a character-specific route topic players search around the ending. Track it as a possible finale condition and verify changes through the Story Tree.',
  },
];

const explanationRows = [
  ['Cycle 13', 'Late-story ending topic', 'Read after finishing Come True once; use it to interpret the finale and alternate outcomes.'],
  ['Booster Ring', 'Finale-context objective term', 'Track it separately from survivor count because mission outcome can shape ending meaning.'],
  ['Cassiopeia outcome', 'Ship and crew result', 'Record the final ship state, not only which characters lived.'],
  ['Eisele Destiny', 'Character-specific route flag', 'Track whether Eisele-related choices change available finale context.'],
  ['Story Tree cleanup', 'Replay method', 'Change one late condition at a time so the ending difference is understandable.'],
];

const sourceRows = [
  ['Destructoid ending explanation', 'Cycle 13, Booster Ring, Cassiopeia outcome, and finale interpretation demand.', 'https://www.destructoid.com/directive-8020-story-and-endings-explained/'],
  ['GamesRadar episode guide', 'Come True as the final episode and eight-episode route structure.', 'https://www.gamesradar.com/games/horror/directive-8020-length-episodes/'],
  ['TechRadar Turning Points interview', 'Why Story Tree replay exists for keeping characters alive and all-ending cleanup.', 'https://www.techradar.com/gaming/directive-8020-executive-producer-says-the-turning-points-system-was-added-for-players-who-want-to-keep-everyone-alive-but-also-for-a-big-percentage-of-our-hardcore-fans-that-will-replay-the-game-to-get-all-endings'],
];

const transcriptRevealRows = [
  ['Memory copy', 'Late transcript scenes describe personalities and memories being copied before the mission route begins.', 'Explains why identity is more complicated than simple human-versus-alien suspicion.'],
  ['Synthetic bodies', 'The reveal connects those copied memories to replacement bodies used during the mission cycle.', 'Track survivor state separately from original-person identity when explaining endings.'],
  ['Chain of missions', 'The transcript points to more than one Cassiopeia-style mission rather than a single rescue follow-up.', 'Cycle 13 should be interpreted as a repeat-program topic, not only one ending label.'],
  ['Earth and Corinth knowledge', 'Late disclosures suggest powerful groups knew more about the life form and mission risk than the crew did.', 'Adds motive context for warnings, rescue denial, and one-way mission implications.'],
  ['Oracle protocol', 'Oracle appears tied to late truth management and distress response.', 'Record whether the player saw Oracle data before judging a finale route.'],
];

export default function Cycle13ExplainedPage() {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'Directive 8020 Cycle 13 Explained - Ending & Booster Ring',
          description:
            'Directive 8020 Cycle 13 explained with spoiler-aware context for the ending, Booster Ring, Cassiopeia outcome, Eisele Destiny, and Story Tree cleanup.',
          url: '/directive-8020-cycle-13-explained',
          datePublished: '2026-05-13',
          dateModified: '2026-05-15',
          imageUrl: '/review/review-endings-comparison-flowchart.webp',
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'Cycle 13 Explained', href: '/directive-8020-cycle-13-explained' }]} />
        <PageHero src="/review/review-endings-comparison-flowchart.webp" alt="Directive 8020 Cycle 13 ending explanation flowchart" />

        <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
          Directive 8020 Cycle 13 Explained
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Cycle 13 is a spoiler-heavy ending topic in Directive 8020. This page
          is for players who have reached Come True at least once and want a
          clean way to understand Cycle 13, the Booster Ring, Cassiopeia
          outcome, Eisele Destiny, and Story Tree cleanup without mixing every
          ending variable together.
        </p>

        <BlufBox>
          <p>
            <strong>Spoiler warning:</strong> finish Episode 8: Come True before
            using this page. Cycle 13 is best understood alongside the Booster
            Ring, final survivor state, Cassiopeia outcome, and Eisele-related
            route conditions.
          </p>
        </BlufBox>

        <StatusPanel
          items={[
            { label: 'Spoiler level', value: 'Finale and ending explanation content.', status: 'needs-check' },
            { label: 'Best use', value: 'Read after one completed route, then branch with Turning Points.', status: 'verified' },
            { label: 'Related route', value: 'Come True is the final episode and should be logged before ending cleanup.', status: 'verified' },
            { label: 'Source policy', value: 'Uses ending explanation coverage and verified episode structure, not forum claims as facts.', status: 'verified' },
          ]}
        />

        <div className="prose-game">
          <h2>Cycle 13, Booster Ring, and Ending Context</h2>
          <p>
            Players usually search Cycle 13 after finishing the game because it
            is not a basic walkthrough question. It belongs with ending
            explanation, Booster Ring context, Cassiopeia outcome, and
            character-specific route flags such as Eisele Destiny.
          </p>
        </div>

        <div className="rounded-lg border border-border/50 bg-card/30 overflow-hidden my-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Topic</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Type</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">How to use it</th>
              </tr>
            </thead>
            <tbody>
              {explanationRows.map(([topic, type, use]) => (
                <tr key={topic} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{topic}</td>
                  <td className="px-4 py-3 text-muted-foreground">{type}</td>
                  <td className="px-4 py-3 text-muted-foreground">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-game">
          <h2>What the Full-Game Transcript Adds</h2>
          <p>
            This is a spoiler-heavy interpretation section. The transcript
            supports a clearer Cycle 13 explanation by separating the reveal
            into memory copying, synthetic bodies, repeat missions, Earth and
            Corinth knowledge, and Oracle protocols.
          </p>
        </div>

        <div className="rounded-lg border border-border/50 bg-card/30 overflow-hidden my-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Transcript evidence</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">What happens</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Guide use</th>
              </tr>
            </thead>
            <tbody>
              {transcriptRevealRows.map(([evidence, whatHappens, use]) => (
                <tr key={evidence} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{evidence}</td>
                  <td className="px-4 py-3 text-muted-foreground">{whatHappens}</td>
                  <td className="px-4 py-3 text-muted-foreground">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-game">
          <h2>How to Test Cycle 13 Routes Safely</h2>
          <p>
            Do not replay randomly after seeing one ending. Use a clean
            final-state note, then change one variable from the nearest late
            Turning Point.
          </p>
          <ol>
            <li>Finish Come True once and record survivors, deaths, and mission outcome.</li>
            <li>Record whether Booster Ring, Cassiopeia, and Eisele-related conditions changed.</li>
            <li>Open the Story Tree and identify the nearest finale Turning Point.</li>
            <li>Change one variable only: survivor state, mission choice, evidence state, or Destiny condition.</li>
            <li>Compare the new ending against the original route note.</li>
          </ol>

          <ArticleImage
            src="/review/review-final-episode.webp"
            alt="Directive 8020 finale route state before Cycle 13 cleanup"
            caption="Cycle 13 cleanup should start from a recorded final state: survivors, deaths, mission outcome, evidence, and any Eisele or Booster Ring conditions."
          />

          <h2>Sources Used</h2>
          <p>
            Ending explanation pages must be source-aware because incorrect
            finale claims can mislead players. This page uses current ending
            coverage and verified episode structure, then tells players how to
            test the route themselves.
          </p>
        </div>

        <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Source</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Used for</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Link</th>
              </tr>
            </thead>
            <tbody>
              {sourceRows.map(([source, use, href]) => (
                <tr key={source} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{source}</td>
                  <td className="px-4 py-3 text-muted-foreground">{use}</td>
                  <td className="px-4 py-3">
                    <a href={href} target="_blank" rel="noreferrer" className="text-d8020 underline underline-offset-4">
                      Open source
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <RelatedGuides
          guides={[
            {
              href: '/directive-8020-come-true-walkthrough',
              title: 'Come True Walkthrough',
              description: 'Record final state before interpreting Cycle 13.',
            },
            {
              href: '/directive-8020-all-endings',
              title: 'All Endings Guide',
              description: 'Use this for five-ending route cleanup.',
            },
            {
              href: '/directive-8020-how-to-save-everyone',
              title: 'How to Save Everyone',
              description: 'Build the clean survivor route before testing endings.',
            },
            {
              href: '/directive-8020-o-death-secrets-curator',
              title: 'O Death Secrets',
              description: 'Clean up Curator-related collectible context.',
            },
          ]}
        />

        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
