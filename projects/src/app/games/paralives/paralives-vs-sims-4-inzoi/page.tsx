import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { ParalivesArticle } from '@/components/paralives-article';
import {
  createParalivesMetadata,
  paralivesComparisonRows,
  paralivesImages,
} from '@/lib/paralives';

const title = 'Paralives vs Sims 4 vs inZOI: Which Life Sim Should You Play?';
const description =
  'Paralives vs Sims 4 vs inZOI comparison for life-sim players choosing between Early Access customization, established content depth, realism, mods, Mac support, and building tools.';
const canonical = '/games/paralives/paralives-vs-sims-4-inzoi';

export const metadata = createParalivesMetadata({
  title,
  description,
  canonical,
  image: paralivesImages.hero,
});

const faqs = [
  {
    question: 'Is Paralives better than The Sims 4?',
    answer:
      'Paralives is better if you want a new Early Access life sim with flexible building and Paramaker customization. The Sims 4 is stronger if you want a large existing content library right now.',
  },
  {
    question: 'Is Paralives like inZOI?',
    answer:
      'Both are modern life sims, but Paralives leans into stylized customization and flexible building while inZOI is commonly searched for its realistic presentation.',
  },
  {
    question: 'Should Sims 4 players buy Paralives now?',
    answer:
      'Buy now if you enjoy Early Access development and want to test Paralives building, Paramaker, and Workshop support. Wait if you need years of expansion content immediately.',
  },
  {
    question: 'Is Life by You a current alternative to Paralives?',
    answer:
      'Life by You is useful for market context, but it is not a current buying alternative after cancellation.',
  },
];

export default function ParalivesComparisonPage() {
  return (
    <ParalivesArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Comparison"
      heroImage={paralivesImages.hero}
      heroAlt="Paralives life sim comparison screenshot"
      faqs={faqs}
    >
      <BlufBox title="Comparison Answer">
        <p>
          <strong>Choose Paralives for flexible building, Paramaker, Mac support, Workshop sharing, and a fresh Early Access life-sim project.</strong>{' '}
          Choose The Sims 4 if you want the safest existing content library
          today. Watch inZOI if visual realism is your main priority.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2>Life Sim Comparison Table</h2>
        <ArticleImage
          src={paralivesImages.hero}
          alt="Paralives life simulation screenshot for Sims 4 and inZOI comparison"
          caption="The best choice depends on what you value most: flexible building, content depth, visual realism, mod ecosystem, or Early Access participation."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Game</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Main strength</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best for</th>
            </tr>
          </thead>
          <tbody>
            {paralivesComparisonRows.map(([game, strength, fit]) => (
              <tr key={game} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{game}</td>
                <td className="px-4 py-3 text-muted-foreground">{strength}</td>
                <td className="px-4 py-3 text-muted-foreground">{fit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ParalivesArticle>
  );
}
