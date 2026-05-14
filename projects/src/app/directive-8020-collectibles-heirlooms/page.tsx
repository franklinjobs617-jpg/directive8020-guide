import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';
import { ArticleImage, VideoEmbed } from '@/components/article-media';
import { ActionTable, BlufBox, RelatedGuides, StatusPanel } from '@/components/guide-blocks';
import { CollectibleChecklist } from '@/components/tools/collectible-checklist';
import { MyProgressPanel } from '@/components/tools/my-progress-panel';

export const metadata: Metadata = {
  title: 'Directive 8020 Collectibles & Heirlooms Guide',
  description:
    'Directive 8020 collectibles guide: secrets, clues, premonitions, Heirlooms Retrieval bonus mission, Dark Pictures relics, chapter tracking, and trophy cleanup.',
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

export default function CollectiblesPage() {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'Directive 8020 Collectibles & Heirlooms Guide',
          description:
            'Directive 8020 collectibles guide covering secrets, clues, premonitions, Heirlooms Retrieval, Dark Pictures relics, chapter tracking, and trophies.',
          url: '/directive-8020-collectibles-heirlooms',
          datePublished: '2026-05-12',
          dateModified: '2026-05-13',
          imageUrl: '/d8020-screenshot-09.jpg',
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'Collectibles & Heirlooms' }]} />
        <PageHero src="/d8020-screenshot-09.jpg" alt="Directive 8020 collectibles and heirlooms guide screenshot" />

        <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
          Directive 8020 Collectibles &amp; Heirlooms Guide
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Collectibles in Directive 8020 matter for more than completion. In a
          mimic story, clues and environmental evidence can help you decide who
          is human, which branch is safe, and what route to replay through
          Turning Points.
        </p>

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

          <h2>What to Track</h2>
          <p>
            Every item should be logged with its chapter, room, route condition,
            and whether it affects story, trophies, Curator cleanup, or mimic
            suspicion. Separate O Death Secrets from normal Secrets so the
            completion route stays clear.
          </p>

          <h2>Collectible Count Breakdown</h2>
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
          <h2>Collectible Cleanup Plan</h2>
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

          <h2>Heirlooms Retrieval Notes</h2>
          <p>
            The Digital Deluxe upgrade includes The Dark Pictures Heirlooms
            Retrieval, a bonus mission tied to dolls and relics from earlier
            anthology games. This is likely the most important collectible
            content for series fans, so keep a separate checklist for heirlooms
            instead of mixing them with main-story evidence.
          </p>
        </div>

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
