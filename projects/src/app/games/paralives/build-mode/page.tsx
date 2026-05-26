import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { ParalivesArticle } from '@/components/paralives-article';
import {
  createParalivesMetadata,
  paralivesBuildRows,
  paralivesImages,
} from '@/lib/paralives';

const title = 'Paralives Build Mode Guide: Grid-less Building, Curved Walls & Decor';
const description =
  'Paralives build mode guide for grid-less homes, curved walls, split-level floors, object resizing, recoloring, stacking, free placement, and first house planning.';
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
    question: 'Can objects be resized and recolored?',
    answer:
      'Yes. Steam describes resizing, recoloring, stacking, and freely placing furniture, decor, and clutter objects.',
  },
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
        <h2>First House Checklist</h2>
        <ArticleImage
          src={paralivesImages.build}
          alt="Paralives build mode flexible home design screenshot"
          caption="The first build should prove the tools: one compact home, clear movement paths, readable rooms, and only then detailed clutter and color work."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
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
        <h2>Best First Build Order</h2>
        <p>
          Start with a small one-story home, then add a curved exterior or split
          level after the main rooms work. Test bedrooms, kitchen, bathroom,
          living space, and door flow before adding clutter. Once the house
          functions, use recolors and resizing to make each room feel personal
          without breaking the layout.
        </p>
      </section>
    </ParalivesArticle>
  );
}
