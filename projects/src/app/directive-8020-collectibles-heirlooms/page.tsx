import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';
import { ArticleImage, VideoEmbed } from '@/components/article-media';

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
      'Expect story clues, secrets, environmental evidence, and Deluxe Heirlooms content. Exact collectible names and counts should be filled from in-game capture after launch.',
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
          dateModified: '2026-05-12',
          imageUrl: '/official-ship-interior.jpg',
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'Collectibles & Heirlooms' }]} />
        <PageHero src="/official-ship-interior.jpg" alt="Directive 8020 collectibles and heirlooms guide screenshot" />

        <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
          Directive 8020 Collectibles &amp; Heirlooms Guide
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Collectibles in Directive 8020 matter for more than completion. In a
          mimic story, clues and environmental evidence can help you decide who
          is human, which branch is safe, and what route to replay through
          Turning Points.
        </p>

        <VideoEmbed
          videoId="gaQkzfA14G4"
          title="Directive 8020 official trailer for collectible context"
          caption="Use official footage to identify likely searchable spaces: ship corridors, terminals, labs, crew areas, and dark objective rooms."
        />

        <div className="prose-game">
          <h2>What to Track</h2>
          <p>
            The exact collectible list should be completed from in-game capture,
            but the tracking format can be prepared now. Every item should be
            logged with its chapter, room, route condition, and whether it
            affects story, trophies, or mimic suspicion.
          </p>
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
            src="/official-story-tree.jpg"
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

        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
