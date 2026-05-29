import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { BlufBox, SearchAnswerPanel } from '@/components/guide-blocks';
import { ParalivesArticle } from '@/components/paralives-article';
import {
  createParalivesMetadata,
  paralivesBuildRows,
  paralivesImages,
} from '@/lib/paralives';

const title = 'Paralives Build Mode Guide: Gridless Building, Paramaker, Workshop & Limits';
const description =
  'Paralives build mode guide for gridless homes, curved walls, split-level floors, Paramaker, Steam Workshop, object resizing, recoloring, build limits, and Early Access caveats.';
const canonical = '/games/paralives/build-mode';

export const metadata = createParalivesMetadata({
  title,
  description,
  canonical,
  image: paralivesImages.build,
});

const faqs = [
  {
    question: 'Does Paralives have grid-less building?',
    answer:
      'Yes. Steam describes Paralives as supporting truly grid-less construction.',
  },
  {
    question: 'Can you build curved walls in Paralives?',
    answer:
      'Yes. Curved walls are listed as one of the official building features.',
  },
  {
    question: 'Can you make split-level floors?',
    answer:
      'Yes. Steam lists split-level floors among the building tools.',
  },
  {
    question: 'Does Paralives support Steam Workshop for builds?',
    answer:
      'Steam Workshop support is part of the official feature set for sharing houses, Parafolks, and custom content, but players should check the live Early Access build for current upload and browser behavior.',
  },
  {
    question: 'What is Paramaker in Paralives?',
    answer:
      'Paramaker is the character-creation side of Paralives. Build mode and Paramaker connect through shared homes, households, styles, and Workshop sharing.',
  },
  {
    question: 'Are all roadmap build features available now?',
    answer:
      'No. Separate live Early Access tools from roadmap features and check the current build before planning around a promised limit or tool.',
  },
  {
    question: 'Can objects be resized and recolored?',
    answer:
      'Yes. Steam describes resizing, recoloring, stacking, and freely placing furniture, decor, and clutter objects.',
  },
];

const searchIntentRows = [
  {
    query: 'Paralives build mode',
    answer: 'Build mode focuses on gridless construction, curved walls, split levels, object resizing, recoloring, stacking, and free placement.',
    href: '#build-features',
    label: 'Build',
  },
  {
    query: 'Gridless building',
    answer: 'Plan the shape first, then test room flow before using curved walls, split levels, and heavy clutter.',
    href: '#first-house',
    label: 'Layout',
  },
  {
    query: 'Paramaker and build mode',
    answer: 'Paramaker handles Parafolks, while build mode creates homes; both matter for households and shared Workshop creations.',
    href: '#paramaker-workshop',
    label: 'Creation',
  },
  {
    query: 'Paralives build limits',
    answer: 'Check the live Early Access build for current limits, performance behavior, and what remains roadmap-only.',
    href: '#live-vs-roadmap',
    label: 'Limits',
  },
];

const jumpLinks = [
  { href: '#build-features', label: 'Build tools' },
  { href: '#first-house', label: 'First house' },
  { href: '#paramaker-workshop', label: 'Paramaker' },
  { href: '#live-vs-roadmap', label: 'Live vs roadmap' },
  { href: '/games/paralives/mods-cc', label: 'Mods and CC' },
  { href: '/games/paralives/early-access', label: 'Early Access' },
];

const liveVsRoadmapRows = [
  ['Use as live build focus', 'Gridless placement, curved walls, split-level planning, resizing, recoloring, object stacking, basic home flow.'],
  ['Check before relying on it', 'Workshop upload flow, current object limits, performance with clutter-heavy homes, and mod browser behavior.'],
  ['Treat as roadmap-sensitive', 'Any feature described for future updates, expanded build limits, or tools not visible in your current Early Access version.'],
  ['Best player habit', 'Build one compact test home first, then scale after pathing, readability, and performance feel stable.'],
];

export default function ParalivesBuildModePage() {
  return (
    <ParalivesArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Build Mode"
      heroImage={paralivesImages.build}
      heroAlt="Paralives build mode grid-less home screenshot"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="What can you do in Paralives build mode right now?"
        answer="Paralives build mode is built around flexible home creation: gridless construction, curved walls, split-level floors, object resizing, recoloring, stacking, and free placement. Check the live Early Access build for current Workshop behavior, build limits, and roadmap-only tools."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Build Mode Answer">
        <p>
          <strong>Paralives build mode is built around flexibility.</strong>{' '}
          Plan the shape first, then place rooms, stairs, and daily-use objects
          before decorating. Grid-less tools, curved walls, split levels,
          resizing, recoloring, and object stacking are powerful, but they work
          best when the house still has a readable floor plan.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2 id="build-features">First House Checklist</h2>
        <ArticleImage
          src={paralivesImages.build}
          alt="Paralives build mode flexible home design screenshot"
          caption="The first build should prove the tools: one compact home, clear movement paths, readable rooms, and only then detailed clutter and color work."
        />
      </section>

      <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Build feature</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Use it for</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Beginner caution</th>
            </tr>
          </thead>
          <tbody>
            {paralivesBuildRows.map(([feature, use, caution]) => (
              <tr key={feature} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{feature}</td>
                <td className="px-4 py-3 text-muted-foreground">{use}</td>
                <td className="px-4 py-3 text-muted-foreground">{caution}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2 id="first-house">Best First Build Order</h2>
        <p>
          Start with a small one-story home, then add a curved exterior or split
          level after the main rooms work. Test bedrooms, kitchen, bathroom,
          living space, and door flow before adding clutter. Once the house
          functions, use recolors and resizing to make each room feel personal
          without breaking the layout.
        </p>

        <h2 id="paramaker-workshop">Paramaker, Workshop, and Shared Homes</h2>
        <p>
          Paramaker is where Parafolks take shape; build mode is where their
          home becomes playable. If you care about shared creations, read the{' '}
          <Link href="/games/paralives/mods-cc">mods and custom content guide</Link>{' '}
          after your first test home works. Workshop support is useful, but the
          current Early Access build should decide how much you rely on shared
          uploads, downloads, and large decorated houses.
        </p>

        <h2 id="live-vs-roadmap">Available Now Versus Roadmap-Sensitive</h2>
      </section>

      <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player takeaway</th>
            </tr>
          </thead>
          <tbody>
            {liveVsRoadmapRows.map(([status, takeaway]) => (
              <tr key={status} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{status}</td>
                <td className="px-4 py-3 text-muted-foreground">{takeaway}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ParalivesArticle>
  );
}
