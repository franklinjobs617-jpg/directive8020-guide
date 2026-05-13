import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';
import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, RelatedGuides, StatusPanel } from '@/components/guide-blocks';

export const metadata: Metadata = {
  title: 'How Long Is Directive 8020? Length, Episodes & 100%',
  description:
    'How long is Directive 8020? One playthrough takes about 8 hours, full outcome cleanup can take around 30 hours, with 8 episodes from Little Star to Come True.',
  alternates: {
    canonical: '/directive-8020-how-long-to-beat',
  },
};

const faqs = [
  {
    question: 'How long is Directive 8020?',
    answer:
      'One playthrough of Directive 8020 takes about 8 hours, depending on choices, exploration, and collectible hunting.',
  },
  {
    question: 'How long does it take to see everything in Directive 8020?',
    answer:
      'Seeing every major outcome can take around 30 hours because some consequences require replaying full episode stretches, not only the final choice.',
  },
  {
    question: 'How many episodes are in Directive 8020?',
    answer:
      'Directive 8020 has 8 episodes: Little Star, Best Laid Plans, The Sample, Dragnet, Mr. Williams, Hostile Takeover, Revelation, and Come True.',
  },
  {
    question: 'Does Movie Night make Directive 8020 longer?',
    answer:
      'Movie Night can make a run longer because players discuss choices, pass control, and may spend more time debating trust and mimic clues.',
  },
];

const lengthRows = [
  ['Main story', 'About 8 hours', 'Best estimate for one completed route without trying to see every branch.'],
  ['Completion / all major outcomes', 'Around 30 hours', 'Requires two to three runs or heavy Turning Points cleanup.'],
  ['Episode count', '8 episodes', 'The story runs from Little Star to Come True.'],
  ['Collectible cleanup', '65 listed collectibles', '50 normal Secrets, 10 Simms Recordings, and 5 O Death Secrets.'],
];

const episodeRows = [
  ['1', 'Little Star', 'Shorter setup chapter; good for control, QTE, and baseline route notes.'],
  ['2', 'Best Laid Plans', 'Shorter early chapter with relationship and major-choice setup.'],
  ['3', 'The Sample', 'Lab evidence and first major danger checks can affect later routes.'],
  ['4', 'Dragnet', 'More stealth, decisions, replay value, and possible crew loss.'],
  ['5', 'Mr. Williams', 'Longer mid-game story chapter where earlier choices can start showing consequences.'],
  ['6', 'Hostile Takeover', 'More branching, with scenes affected by who survived this far.'],
  ['7', 'Revelation', 'Late setup with 50-50 style decisions and final-state preparation.'],
  ['8', 'Come True', 'Finale chapter with QTEs, carrying outcomes, and ending cleanup value.'],
];

const planningRows = [
  {
    step: 'Blind first run',
    doThis: 'Plan for about 8 hours and avoid route guides unless someone dies or you get stuck.',
    why: 'This preserves the story impact while still giving you one complete route.',
  },
  {
    step: 'Best ending run',
    doThis: 'Use Turning Points after one route and repair deaths from the earliest relevant branch.',
    why: 'Some deaths are caused by earlier choices, not only the final QTE.',
  },
  {
    step: 'Completion run',
    doThis: 'Budget around 30 hours for endings, deaths, collectibles, and route variants.',
    why: 'Some consequences only reveal themselves after playing forward through later episodes.',
  },
  {
    step: 'Movie Night run',
    doThis: 'Add extra time for group debates, controller passing, and chapter-end Story Tree checks.',
    why: 'Co-op slows the run but makes trust decisions more fun.',
  },
];

const sourceRows = [
  ['GamesRadar episode guide', '8-hour first playthrough, around 30-hour full outcome estimate, and episode list.', 'https://www.gamesradar.com/games/horror/directive-8020-length-episodes/'],
  ['TechRadar review', 'Eight roughly hour-long episode framing and Turning Points replay context.', 'https://www.techradar.com/gaming/directive-8020-review'],
  ['100% Guides collectibles', '65-collectible structure for completion planning.', 'https://www.100pguides.com/guides/directive-8020-all-collectibles'],
];

export default function HowLongToBeatPage() {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'How Long Is Directive 8020? Length, Episodes & 100%',
          description:
            'Directive 8020 length guide covering 8-hour main story estimate, 30-hour completion estimate, 8 episodes, collectibles, Movie Night, and Turning Points replay.',
          url: '/directive-8020-how-long-to-beat',
          datePublished: '2026-05-13',
          dateModified: '2026-05-13',
          imageUrl: '/review/review-episodes-1-4-turning-points-flowchart.webp',
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'How Long to Beat', href: '/directive-8020-how-long-to-beat' }]} />
        <PageHero src="/review/review-episodes-1-4-turning-points-flowchart.webp" alt="Directive 8020 episode length and Story Tree guide" />

        <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
          How Long Is Directive 8020?
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Directive 8020 takes about 8 hours for one playthrough and around 30
          hours if you want to see every major outcome. The game has 8 episodes,
          and late consequences can require replaying whole episode stretches
          even with Turning Points.
        </p>

        <BlufBox>
          <p>
            <strong>Short answer:</strong> plan for <strong>about 8 hours</strong>
            for one Directive 8020 route, and <strong>around 30 hours</strong>
            for all major outcomes, endings, deaths, collectibles, and Story
            Tree cleanup.
          </p>
        </BlufBox>

        <StatusPanel
          items={[
            { label: 'Main story', value: 'About 8 hours for one playthrough.', status: 'verified' },
            { label: 'Completion estimate', value: 'Around 30 hours for major outcome cleanup.', status: 'verified' },
            { label: 'Episodes', value: '8 episodes from Little Star to Come True.', status: 'verified' },
            { label: 'Completion variables', value: 'Endings, deaths, collectibles, Movie Night, and Turning Points can change time.', status: 'working' },
          ]}
        />

        <div className="prose-game">
          <h2>Directive 8020 Length Summary</h2>
          <p>
            The biggest mistake is treating Directive 8020 like a fixed linear
            game. A first ending is manageable in one long day, but full route
            cleanup takes much longer because consequences can carry across
            multiple episodes.
          </p>
        </div>

        <div className="rounded-lg border border-border/50 bg-card/30 overflow-hidden my-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Goal</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Time</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Condition</th>
              </tr>
            </thead>
            <tbody>
              {lengthRows.map(([goal, time, condition]) => (
                <tr key={goal} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{goal}</td>
                  <td className="px-4 py-3 text-d8020 font-semibold">{time}</td>
                  <td className="px-4 py-3 text-muted-foreground">{condition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-game">
          <h2>All Episodes and What Affects Length</h2>
          <p>
            Directive 8020 gets more variable as it approaches the finale.
            Early episodes are more linear; later episodes depend more on
            survivor state, route choices, QTEs, and whether you are chasing
            alternate outcomes.
          </p>
        </div>

        <div className="rounded-lg border border-border/50 bg-card/30 overflow-hidden my-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Episode</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Title</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Length factor</th>
              </tr>
            </thead>
            <tbody>
              {episodeRows.map(([number, title, note]) => (
                <tr key={title} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{number}</td>
                  <td className="px-4 py-3 text-d8020 font-semibold">{title}</td>
                  <td className="px-4 py-3 text-muted-foreground">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-game">
          <h2>Best Time Plan by Player Type</h2>
          <ActionTable rows={planningRows} />

          <ArticleImage
            src="/review/review-final-episode.webp"
            alt="Directive 8020 finale length and completion route"
            caption="The finale is where length estimates stretch: ending variants, survivor state, O Death progress, and late QTEs can all require replay."
          />

          <h2>Sources Used</h2>
          <p>
            This page uses source-backed length estimates and keeps route
            conditions visible so players can understand why their completion
            time may differ.
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
              href: '/directive-8020-walkthrough',
              title: 'Full Walkthrough',
              description: 'Use all 8 episode pages in order.',
            },
            {
              href: '/directive-8020-come-true-walkthrough',
              title: 'Come True Walkthrough',
              description: 'Plan finale replay and ending cleanup.',
            },
            {
              href: '/directive-8020-all-endings',
              title: 'All Endings',
              description: 'Use for five-ending route planning.',
            },
            {
              href: '/directive-8020-collectibles-heirlooms',
              title: 'Collectibles & Heirlooms',
              description: 'Track the 65 listed collectibles.',
            },
          ]}
        />

        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
