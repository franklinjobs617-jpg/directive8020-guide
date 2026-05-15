import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';
import { ArticleImage, VideoEmbed } from '@/components/article-media';
import { ActionTable, BlufBox, RelatedGuides, StatusPanel } from '@/components/guide-blocks';

interface EpisodeFact {
  label: string;
  value: string;
}

interface EpisodeChecklistRow {
  step: string;
  doThis: string;
  why: string;
}

interface EpisodeWalkthroughData {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  h1: string;
  episodeNumber: string;
  episodeName: string;
  heroImage: string;
  alt: string;
  videoId: string;
  intro: string;
  bluf: string;
  verifiedSummary: string;
  routeFocus: string;
  spoilerNote: string;
  facts: EpisodeFact[];
  checklist: EpisodeChecklistRow[];
  collectibles: string[];
  routeWarnings: string[];
  faqs: { question: string; answer: string }[];
}

const sourceRows = [
  ['GamesRadar episode guide', 'Episode order, chapter role, rough length, and replay guidance.', 'https://www.gamesradar.com/games/horror/directive-8020-length-episodes/'],
  ['100% Guides collectibles', '65 collectibles, episode collectible notes, Simms Recordings, and O Death cleanup.', 'https://www.100pguides.com/guides/directive-8020-all-collectibles'],
  ['PC Gamer preview', 'Eight-episode structure, first-run blind advice, and Turning Points replay method.', 'https://www.pcgamer.com/games/horror/directive-8020-is-using-an-episodic-structure-straight-out-of-a-limited-tv-series-to-be-mindful-of-peoples-time/'],
];

export function EpisodeWalkthroughPage({ data }: { data: EpisodeWalkthroughData }) {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: data.metaTitle,
          description: data.description,
          url: `/${data.slug}`,
          datePublished: '2026-05-13',
          dateModified: '2026-05-15',
          imageUrl: data.heroImage,
        })}
      />
      <JsonLd data={generateFAQSchema(data.faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <Breadcrumb
          items={[
            { label: 'Walkthrough', href: '/directive-8020-walkthrough' },
            { label: data.episodeName, href: `/${data.slug}` },
          ]}
        />
        <PageHero src={data.heroImage} alt={data.alt} />

        <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
          {data.h1}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          {data.intro}
        </p>

        <BlufBox>
          <p>
            <strong>Short route note:</strong> {data.bluf}
          </p>
        </BlufBox>

        <StatusPanel
          items={[
            { label: 'Episode', value: `${data.episodeNumber}: ${data.episodeName}`, status: 'verified' },
            { label: 'Source status', value: data.verifiedSummary, status: 'verified' },
            { label: 'Route focus', value: data.routeFocus, status: 'working' },
            { label: 'Spoiler policy', value: data.spoilerNote, status: 'working' },
          ]}
        />

        <VideoEmbed
          videoId={data.videoId}
          title={`${data.episodeName} Directive 8020 reference video`}
          caption={`Use this official Directive 8020 video as visual context while following the ${data.episodeName} walkthrough. Exact route outcomes still depend on your Story Tree state.`}
        />

        <div className="prose-game">
          <h2>{data.episodeName} Quick Facts</h2>
          <p>
            This page is written as a focused chapter guide, not a copied
            transcript. It uses verified episode structure and collectible
            coverage, then tells you what to watch for while playing.
          </p>
        </div>

        <div className="rounded-lg border border-border/50 bg-card/30 overflow-hidden my-6">
          <table className="w-full text-sm">
            <tbody>
              {data.facts.map((fact) => (
                <tr key={fact.label} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 text-foreground font-medium w-44">{fact.label}</td>
                  <td className="px-4 py-3 text-muted-foreground">{fact.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-game">
          <h2>Step-by-Step Route Priorities</h2>
          <p>
            Follow these priorities before you replay the chapter. If you change
            a choice, keep QTE success, exploration, and survivor state as
            consistent as possible so the Story Tree result is readable.
          </p>
          <ActionTable rows={data.checklist} />

          <ArticleImage
            src={data.heroImage}
            alt={`${data.episodeName} Directive 8020 walkthrough scene`}
            caption={`${data.episodeName} should be tracked by objective, survivor state, collectibles, QTEs, Turning Points, and any route condition that carries into later episodes.`}
          />

          <h2>Collectibles and Search Notes</h2>
          <p>
            Current collectible coverage lists 65 total collectibles across the
            game. Use this section as a route reminder, then use the dedicated
            collectibles page for exact cleanup.
          </p>
          <ul>
            {data.collectibles.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Route Warnings</h2>
          <ul>
            {data.routeWarnings.map((warning) => (
              <li key={warning}>{warning}</li>
            ))}
          </ul>

          <h2>Sources Used</h2>
          <p>
            These sources are linked because the page contains launch-sensitive
            route facts. Reddit and forum posts are useful demand signals, but
            the facts here are based on guide, review, or official coverage.
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
              description: 'Return to the main eight-episode route hub.',
            },
            {
              href: '/directive-8020-how-to-save-everyone',
              title: 'How to Save Everyone',
              description: 'Use this if a death or split path affects later episodes.',
            },
            {
              href: '/directive-8020-choices-consequences',
              title: 'Choices & Consequences',
              description: 'Check whether a choice is flavor text or route-changing.',
            },
            {
              href: '/directive-8020-collectibles-heirlooms',
              title: 'Collectibles & Heirlooms',
              description: 'Clean up Secrets, Simms Recordings, and O Death items.',
            },
          ]}
        />

        <FAQSection faqs={data.faqs} />
      </article>
    </>
  );
}

export type { EpisodeWalkthroughData };
