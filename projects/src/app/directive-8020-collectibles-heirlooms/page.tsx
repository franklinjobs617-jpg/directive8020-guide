import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';
import { ArticleImage, VideoEmbed } from '@/components/article-media';
import { ActionTable, BlufBox, RelatedGuides, SearchAnswerPanel, SourceCheckTable, StatusPanel } from '@/components/guide-blocks';
import { CollectibleChecklist } from '@/components/tools/collectible-checklist';
import { MyProgressPanel } from '@/components/tools/my-progress-panel';

export const metadata: Metadata = {
  title: 'Directive 8020 Collectibles - 65 Secrets, O Death & Heirlooms',
  description:
    'Directive 8020 collectibles guide: 65 collectibles, 50 Secrets, 10 Simms Recordings, 5 O Death Secrets, Heirlooms Retrieval, Dark Pictures relics, chapter tracking, and trophy cleanup.',
  alternates: {
    canonical: '/directive-8020-collectibles-heirlooms',
  },
};

const faqs = [
  {
    question: 'What collectibles are in Directive 8020?',
    answer:
      'Current collectible guides list 65 collectibles in Directive 8020: 50 normal Secrets, 10 Simms Recordings, and 5 O Death Secrets.',
  },
  {
    question: 'What are O Death Secrets in Directive 8020?',
    answer:
      'O Death Secrets are a five-item collectible category tied to Curator-style cleanup. Track them separately from normal Secrets and Simms Recordings.',
  },
  {
    question: 'What is the Heirlooms Retrieval mission?',
    answer:
      'Steam describes it as a Deluxe bonus mission about hidden dolls and relics from Man of Medan, Little Hope, House of Ashes, and The Devil in Me.',
  },
  {
    question: 'Do collectibles affect endings?',
    answer:
      'Some collectibles may only provide lore, but in a mimic story, evidence can affect trust decisions. Track whether a clue appears before an accusation, rescue, or finale branch.',
  },
];

const trackingRows = [
  ['Episode', 'Chapter title and scene where the item appears.'],
  ['Location', 'Room, corridor, lab, crew quarter, or objective area.'],
  ['Item type', 'Secret, clue, premonition, heirloom, log, terminal, or relic.'],
  ['Route condition', 'Whether a choice, survivor, or Turning Point is required.'],
  ['Impact', 'Lore only, dialogue option, trophy, ending clue, or mimic evidence.'],
];

const collectibleCounts = [
  ['Normal Secrets', '50', 'Main collectible route across episodes and searchable rooms.'],
  ['Simms Recordings', '10', 'Audio/log style collectibles tied to Pari Simms context and Cassiopeia background.'],
  ['O Death Secrets', '5', 'Curator-related collectible route; track separately for completion cleanup.'],
  ['Total listed collectibles', '65', 'Use this as the current 100% target for collectible route planning.'],
];

const collectibleRows = [
  { step: 'Before leaving a room', doThis: 'Check terminals, corners, personal objects, and objective-adjacent shelves.', why: 'Collectibles often sit near progression triggers.' },
  { step: 'When finding evidence', doThis: 'Record whether it appears before a trust or accusation choice.', why: 'Evidence may unlock safer mimic decisions.' },
  { step: 'When using Turning Points', doThis: 'Check whether collected items persist after rewinding.', why: 'Persistence rules change cleanup strategy.' },
  { step: 'For Heirlooms', doThis: 'Track Deluxe mission items separately from main-story clues.', why: 'Bonus mission relics may have different trophy or lore logic.' },
];

const sourceRows = [
  {
    claim: 'Current collectible coverage lists 65 total collectibles.',
    source: '100% Guides collectible guide',
    status: 'verified' as const,
    href: 'https://www.100pguides.com/guides/directive-8020-all-collectibles',
    note: 'Use for the 50 Secrets, 10 Simms Recordings, and 5 O Death Secrets structure.',
  },
  {
    claim: 'Dark Pictures Heirlooms Retrieval is Deluxe content with dolls and relics.',
    source: 'Steam store',
    status: 'verified' as const,
    href: 'https://store.steampowered.com/app/2255370/Directive_8020/',
    note: 'Use for Dark Pictures dolls, outfit pack, and Deluxe bundle intent.',
  },
  {
    claim: 'Episode 3 Food Storage / Dark Picture Doll route uses code 0402.',
    source: 'GamesRadar + Radio Times + Nerdschalk',
    status: 'verified' as const,
    href: 'https://www.gamesradar.com/games/horror/directive-8020-key-code-solutions/',
    note: 'Answer doll-location searches here and link users to Episode 3 for the code route.',
  },
];

const dollRows = [
  ['Dark Picture Doll searches', 'These usually refer to the Deluxe Heirlooms Retrieval content and anthology relics, not the main 65-item collectible count.'],
  ['Episode 3 Food Storage doll route', 'Use the currently reported 0402 code route as a source-checked clue, then confirm it against your own Story Tree state.'],
  ['O Death collectibles', 'Track the 5 O Death Secrets separately from normal Secrets because they support Curator-style cleanup intent.'],
  ['Main story evidence', 'Do not mix lore evidence with Deluxe relics when planning trophies or ending-route notes.'],
];

const searchIntentRows = [
  {
    query: 'How many collectibles are there?',
    answer: 'Current guides list 65 total collectibles: 50 normal Secrets, 10 Simms Recordings, and 5 O Death Secrets.',
    href: '#collectible-count',
    label: 'Quick answer',
  },
  {
    query: 'All collectibles',
    answer: 'Track each item by episode, room, route condition, impact, and whether it persists after Turning Points.',
    href: '#cleanup-plan',
    label: 'Checklist',
  },
  {
    query: 'Dolls or Dark Picture dolls',
    answer: 'Doll searches usually point to Deluxe Heirlooms Retrieval and the Episode 3 Food Storage doll/code route.',
    href: '#dolls',
    label: 'Dolls',
  },
  {
    query: 'O Death Secrets',
    answer: 'There are 5 O Death Secrets in the current collectible structure; keep them separate from normal Secrets.',
    href: '#collectible-count',
    label: 'Curator route',
  },
  {
    query: 'Do collectibles affect endings?',
    answer: 'Treat evidence as route context until item-by-item ending impact is verified through choices and Story Tree testing.',
    href: '#what-to-track',
    label: 'Caveat',
  },
];

const jumpLinks = [
  { href: '#collectible-count', label: '65 collectibles' },
  { href: '#cleanup-plan', label: 'Cleanup plan' },
  { href: '#what-to-track', label: 'What to track' },
  { href: '#dolls', label: 'Dolls' },
  { href: '/directive-8020-trophy-guide', label: 'Trophies' },
  { href: '/directive-8020-walkthrough', label: 'Walkthrough' },
];

export default function CollectiblesPage() {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'Directive 8020 Collectibles & Heirlooms Guide',
          description:
            'Directive 8020 collectibles guide covering 65 collectibles, 50 Secrets, 10 Simms Recordings, 5 O Death Secrets, Heirlooms Retrieval, Dark Pictures relics, chapter tracking, and trophies.',
          url: '/directive-8020-collectibles-heirlooms',
          datePublished: '2026-05-12',
          dateModified: '2026-05-21',
          imageUrl: '/d8020-screenshot-09.jpg',
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'Collectibles & Heirlooms' }]} />
        <PageHero src="/d8020-screenshot-09.jpg" alt="Directive 8020 collectibles and heirlooms guide screenshot" />

        <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
          Directive 8020 Collectibles: 65 Secrets, O Death and Heirlooms
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Directive 8020 has <strong className="text-foreground">65 listed
          collectibles</strong>: 50 normal Secrets, 10 Simms Recordings, and 5
          O Death Secrets. This guide also separates Deluxe Heirlooms Retrieval
          content so completion players can track main-story collectibles,
          Curator cleanup, and Dark Pictures relics without mixing categories.
        </p>

        <SearchAnswerPanel
          title="How many Directive 8020 collectibles are there?"
          answer="Current collectible coverage lists 65 items: 50 normal Secrets, 10 Simms Recordings, and 5 O Death Secrets. Keep Deluxe Heirlooms Retrieval dolls and anthology relics in a separate checklist so completion cleanup stays readable."
          intentRows={searchIntentRows}
          jumpLinks={jumpLinks}
        />

        <BlufBox>
          <p>
            <strong>Collectibles are route data.</strong> In Directive 8020,
            current guides list <strong>65 collectibles</strong>: 50 normal
            Secrets, 10 Simms Recordings, and 5 O Death Secrets. Track every
            item by episode, room, route condition, and whether it persists
            after Turning Points.
          </p>
        </BlufBox>

        <StatusPanel
          items={[
            { label: 'Heirlooms Retrieval', value: 'Steam confirms a Deluxe bonus mission with dolls and relics from earlier anthology games.', status: 'verified' },
            { label: 'Exact collectible count', value: 'Current guides list 65 total collectibles.', status: 'verified' },
            { label: 'Story impact', value: 'Evidence impact on dialogue/endings must be verified per item.', status: 'working' },
            { label: 'Cleanup method', value: 'Episode, room, route condition, and Turning Point persistence are the required fields.', status: 'verified' },
          ]}
        />

        <VideoEmbed
          videoId="gaQkzfA14G4"
          title="Directive 8020 official trailer for collectible context"
          caption="Use official footage to identify likely searchable spaces: ship corridors, terminals, labs, crew areas, and dark objective rooms."
        />

        <MyProgressPanel />
        <CollectibleChecklist />

        <div className="prose-game">
          <h2>Checklist Accuracy Note</h2>
          <p>
            The checklist uses the current 65-collectible structure so players
            can track real completion categories now. Individual item locations
            are marked as pending until they are verified against chapter
            captures, screenshots, or reliable video routes. This avoids mixing
            confirmed counts with unverified room names.
          </p>

          <h2 id="what-to-track">What to Track</h2>
          <p>
            Every item should be logged with its chapter, room, route condition,
            and whether it affects story, trophies, Curator cleanup, or mimic
            suspicion. Separate O Death Secrets from normal Secrets so the
            completion route stays clear.
          </p>

          <h2 id="collectible-count">Collectible Count Breakdown</h2>
        </div>

        <div className="rounded-lg border border-border/50 bg-card/30 overflow-hidden my-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Collectible type</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Count</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Route note</th>
              </tr>
            </thead>
            <tbody>
              {collectibleCounts.map(([type, count, note]) => (
                <tr key={type} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 text-foreground font-medium">{type}</td>
                  <td className="px-4 py-3 text-muted-foreground">{count}</td>
                  <td className="px-4 py-3 text-muted-foreground">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-game">
          <h2 id="cleanup-plan">Collectible Cleanup Plan</h2>
          <ActionTable rows={collectibleRows} />
        </div>

        <div className="rounded-lg border border-border/50 bg-card/30 overflow-hidden my-6">
          <table className="w-full text-sm">
            <tbody>
              {trackingRows.map(([label, value]) => (
                <tr key={label} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 text-foreground font-medium w-40">{label}</td>
                  <td className="px-4 py-3 text-muted-foreground">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-game">
          <h2>Best Places to Search</h2>
          <ul>
            <li><strong>Crew quarters:</strong> personal logs, identity clues, and relationship context.</li>
            <li><strong>Labs:</strong> sample records, organism evidence, and containment clues.</li>
            <li><strong>Medical areas:</strong> injury reports, death context, and mimic clues.</li>
            <li><strong>Control rooms:</strong> ship systems, mission logs, and route-critical terminals.</li>
            <li><strong>Objective exits:</strong> check nearby corners before triggering scene transitions.</li>
          </ul>

          <ArticleImage
            src="/d8020-screenshot-06.jpg"
            alt="Directive 8020 collectibles Story Tree tracking"
            caption="If a collectible is route-locked, record the Turning Point that opens the path. That makes trophy cleanup much faster."
          />

          <h2 id="dolls">Dark Pictures Dolls and Heirlooms Notes</h2>
          <p>
            The Digital Deluxe upgrade includes The Dark Pictures Heirlooms
            Retrieval, a bonus mission tied to dolls and relics from earlier
            anthology games. This is likely the most important collectible
            content for series fans, so keep a separate checklist for heirlooms
            instead of mixing them with main-story evidence.
          </p>
        </div>

        <div className="rounded-lg border border-border/50 bg-card/30 overflow-hidden my-6">
          <table className="w-full text-sm">
            <tbody>
              {dollRows.map(([need, answer]) => (
                <tr key={need} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 text-foreground font-medium w-48">{need}</td>
                  <td className="px-4 py-3 text-muted-foreground">{answer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <SourceCheckTable title="Dark Pictures Dolls and Heirlooms Source Check" rows={sourceRows} />

        <RelatedGuides
          guides={[
            {
              href: '/directive-8020-trophy-guide',
              title: 'Trophy Guide',
              description: 'Use collectible data for 100% and platform achievement cleanup.',
            },
            {
              href: '/directive-8020-deluxe-edition',
              title: 'Deluxe Edition',
              description: 'Review what the Heirlooms Retrieval bonus mission includes.',
            },
            {
              href: '/directive-8020-choices-consequences',
              title: 'Choices & Consequences',
              description: 'Track whether evidence changes later trust decisions.',
            },
            {
              href: '/directive-8020-walkthrough',
              title: 'Full Walkthrough',
              description: 'Place every collectible inside the correct episode route.',
            },
          ]}
        />

        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
