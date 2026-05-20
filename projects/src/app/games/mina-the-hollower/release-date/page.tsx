import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { MinaArticle } from '@/components/mina-the-hollower-article';
import {
  createMinaMetadata,
  minaImages,
  minaLaunchCheckRows,
  minaQuickFacts,
} from '@/lib/mina-the-hollower';

const title = 'Mina the Hollower Release Date, Platforms, Demo & Unlock Status';
const description =
  'Mina the Hollower release guide: Steam shows May 28, 2026, official/platform coverage says May 29, 2026, with PC, Mac, Linux, PS5, Xbox, Switch, and Switch 2 notes.';
const canonical = '/games/mina-the-hollower/release-date';

export const metadata = createMinaMetadata({
  title,
  description,
  canonical,
  image: minaImages.screenshot1,
});

const faqs = [
  {
    question: 'What is the Mina the Hollower release date?',
    answer:
      'Steam currently lists May 28, 2026, while Yacht Club Games and platform coverage announce May 29, 2026; the difference is likely storefront timing by region.',
  },
  {
    question: 'What platforms is Mina the Hollower on?',
    answer:
      'Steam lists Windows, macOS, and Linux, while platform coverage reports PS5, Xbox Series X|S, Nintendo Switch, and Nintendo Switch 2.',
  },
  {
    question: 'Is Mina the Hollower Early Access?',
    answer:
      'No. Current Steam and official messaging do not frame Mina the Hollower as an Early Access release.',
  },
  {
    question: 'Does the Mina the Hollower demo progress transfer?',
    answer:
      'Do not assume demo progress transfers unless Yacht Club Games or the storefront explicitly confirms it.',
  },
];

export default function MinaReleaseDatePage() {
  return (
    <MinaArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Release Date"
      heroImage={minaImages.screenshot1}
      heroAlt="Mina the Hollower release date guide image"
      faqs={faqs}
    >
      <BlufBox title="Release Answer">
        <p>
          <strong>Use Steam for your local unlock, but do not ignore the May 29 announcement date.</strong>{' '}
          Steam currently shows May 28, 2026 and coming_soon=true. Yacht Club
          Games and platform coverage announce May 29, 2026. The player-safe
          answer is to check your live storefront near launch because dates can
          display differently by region and platform.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2>Release Date Status</h2>
        <ArticleImage
          src={minaImages.screenshot1}
          alt="Mina the Hollower release date and storefront status"
          caption="Steam is the best source for local PC unlock timing, while official platform announcements explain the broader May 29 launch messaging."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Fact</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Current reading</th>
            </tr>
          </thead>
          <tbody>
            {minaQuickFacts.slice(0, 8).map(([fact, value]) => (
              <tr key={fact} className="border-b border-border/30 last:border-0">
                <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{fact}</th>
                <td className="px-4 py-3 text-muted-foreground">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>Platform Notes</h2>
        <ArticleImage
          src={minaImages.screenshot2}
          alt="Mina the Hollower platform notes"
          caption="PC players can use Steam for Windows, macOS, and Linux details. Console players should verify the live PS5, Xbox, Switch, or Switch 2 storefront before launch."
        />
        <p>
          Steam currently confirms Windows, macOS, and Linux support. Platform
          coverage reports PS5, Xbox Series X|S, Nintendo Switch, and Nintendo
          Switch 2. Until every storefront is live in your region, avoid
          assuming cross-save, exact unlock hour, or identical pricing across
          platforms.
        </p>

        <h2>Launch-Week Checklist</h2>
        <ArticleImage
          src={minaImages.screenshot3}
          alt="Mina the Hollower launch week checklist"
          caption="Close to launch, check date display, price, demo wording, Steam Deck badge, and reviews before making a platform decision."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Check</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why it matters</th>
            </tr>
          </thead>
          <tbody>
            {minaLaunchCheckRows.map(([check, value]) => (
              <tr key={check} className="border-b border-border/30 last:border-0">
                <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{check}</th>
                <td className="px-4 py-3 text-muted-foreground">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MinaArticle>
  );
}
