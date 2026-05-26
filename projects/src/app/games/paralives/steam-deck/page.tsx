import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { ParalivesArticle } from '@/components/paralives-article';
import {
  createParalivesMetadata,
  paralivesDeckRows,
  paralivesImages,
} from '@/lib/paralives';

const title = 'Paralives Steam Deck Guide: Compatibility, Controls & Settings';
const description =
  'Paralives Steam Deck guide for compatibility status, Proton cautions, controls, build mode comfort, graphics settings, cloud saves, and handheld buying advice.';
const canonical = '/games/paralives/steam-deck';

export const metadata = createParalivesMetadata({
  title,
  description,
  canonical,
  image: paralivesImages.home,
});

const faqs = [
  {
    question: 'Is Paralives Steam Deck Verified?',
    answer:
      'No official Steam Deck Verified claim is available in the checked Steam data. Treat Steam Deck play as unverified until Steam or reliable player reports confirm it.',
  },
  {
    question: 'Can Paralives run on Steam Deck?',
    answer:
      'It may be testable through Proton, but official support is clearer for Windows PC and Apple silicon Mac than for Steam Deck.',
  },
  {
    question: 'What should Steam Deck players test first?',
    answer:
      'Test menus, Paramaker controls, build-mode cursor precision, text size, cloud saves, and framerate in a small house before starting a long save.',
  },
  {
    question: 'Should I buy Paralives only for Steam Deck?',
    answer:
      'Only do that if you are comfortable testing quickly and using Steam refund rules if performance or controls do not work for your setup.',
  },
];

export default function ParalivesSteamDeckPage() {
  return (
    <ParalivesArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Steam Deck"
      heroImage={paralivesImages.home}
      heroAlt="Paralives home building screenshot for Steam Deck guide"
      faqs={faqs}
    >
      <BlufBox title="Deck Answer">
        <p>
          <strong>Paralives should be treated as unverified on Steam Deck right now.</strong>{' '}
          The game has Windows support, Mac support, mouse-friendly life-sim
          tools, Paramaker, build mode, and Workshop systems, but the checked
          official Steam data does not provide a Steam Deck Verified claim.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2>Deck Testing Checklist</h2>
        <ArticleImage
          src={paralivesImages.home}
          alt="Paralives home and interface screenshot for Steam Deck testing"
          caption="A handheld test should focus on the parts that life sims rely on most: pointer precision, menus, build tools, text, saves, and stable framerate."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Deck factor</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Current answer</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">What to do</th>
            </tr>
          </thead>
          <tbody>
            {paralivesDeckRows.map(([factor, answer, action]) => (
              <tr key={factor} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{factor}</td>
                <td className="px-4 py-3 text-muted-foreground">{answer}</td>
                <td className="px-4 py-3 text-muted-foreground">{action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ParalivesArticle>
  );
}
