import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/breadcrumb';
import { JsonLd, generateWebPageSchema } from '@/components/json-ld';

const contactEmail = 'admin@enjoy4game.com';
const pageTitle = 'About Directive 8020 Guide Hub';
const pageDescription =
  'About Directive 8020 Guide Hub, an unofficial fan-made resource for walkthroughs, endings, trophies, survival routes, and practical player guides.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <JsonLd
        data={generateWebPageSchema({
          title: pageTitle,
          description: pageDescription,
          url: '/about',
        })}
      />
      <Breadcrumb items={[{ label: 'About' }]} />

      <h1 className="mb-4 text-3xl font-black leading-tight text-foreground sm:text-4xl">
        About Directive 8020 Guide Hub
      </h1>
      <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
        Directive 8020 Guide Hub is an unofficial English-language player
        resource built around practical guides, route planning, review context,
        and launch-window troubleshooting for Directive 8020.
      </p>

      <div className="prose-game">
        <h2>What We Publish</h2>
        <p>
          The site focuses on player-useful content: full walkthrough structure,
          all endings planning, save-everyone routes, trophy cleanup,
          collectibles, stealth advice, system requirements, Steam Deck notes,
          review context, and community questions. The goal is to answer the
          searcher quickly, then give enough detail for the next decision.
        </p>

        <h2>Editorial Standards</h2>
        <p>
          We prioritize clear BLUF summaries, structured tables, checklists,
          FAQ sections, internal links, and update notes. When information is
          not fully verified, pages should say so rather than pretending launch
          data is final. Route pages are expected to improve as more player
          captures, patch notes, and ending confirmations become available.
        </p>

        <h2>Unofficial Status</h2>
        <p>
          This site is not affiliated with, endorsed by, sponsored by, or
          operated by Supermassive Games or Bandai Namco. Directive 8020, The
          Dark Pictures Anthology, related characters, official artwork,
          screenshots, trailers, logos, and trademarks belong to their
          respective owners.
        </p>

        <h2>Useful Starting Points</h2>
        <ul>
          <li>
            <Link href="/directive-8020-review">Directive 8020 Review</Link>
          </li>
          <li>
            <Link href="/directive-8020-walkthrough">Full Walkthrough</Link>
          </li>
          <li>
            <Link href="/directive-8020-all-endings">All Endings Guide</Link>
          </li>
          <li>
            <Link href="/directive-8020-trophy-guide">Trophy Guide</Link>
          </li>
          <li>
            <Link href="/directive-8020-how-to-save-everyone">
              How to Save Everyone
            </Link>
          </li>
        </ul>

        <h2>Contact</h2>
        <p>
          For corrections, rights questions, or site feedback, contact{' '}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
        </p>
      </div>
    </article>
  );
}
