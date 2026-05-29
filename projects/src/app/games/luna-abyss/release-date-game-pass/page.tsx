import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, StatusPanel } from '@/components/guide-blocks';
import { LunaAbyssArticle, LunaInfoTable } from '@/components/luna-abyss-article';
import {
  createLunaAbyssMetadata,
  lunaAbyssImages,
  lunaAbyssQuickFacts,
  lunaAbyssReleaseRows,
} from '@/lib/luna-abyss';

const title = 'Luna Abyss Game Pass, Release Date, Price & Platforms';
const description =
  'Luna Abyss release date and platform guide covering Game Pass, Xbox Cloud, Play Anywhere, Steam price checks, PS5, Xbox Series X|S, and PC.';
const canonical = '/games/luna-abyss/release-date-game-pass';

export const metadata = createLunaAbyssMetadata({
  title,
  description,
  canonical,
  image: lunaAbyssImages.screenshot1,
});

const faqs = [
  {
    question: 'When did Luna Abyss release?',
    answer: 'Luna Abyss released on May 21, 2026.',
  },
  {
    question: 'Is Luna Abyss on Game Pass?',
    answer:
      'Yes. The Xbox Store displays Game Pass availability for Luna Abyss as of May 28, 2026.',
  },
  {
    question: 'Is Luna Abyss on Xbox Cloud Gaming?',
    answer:
      'Yes. The Xbox Store displays Xbox Cloud Gaming support as of May 28, 2026.',
  },
  {
    question: 'Does Luna Abyss support Xbox Play Anywhere?',
    answer:
      'Yes. The Xbox Store displays Xbox Play Anywhere support as of May 28, 2026.',
  },
  {
    question: 'Should I buy Luna Abyss on Steam or play on Game Pass?',
    answer:
      'Use Game Pass if you already subscribe or want lower risk. Use Steam if achievements, Steam Deck, refund window, or Steam library ownership matters more.',
  },
];

const platformRows = [
  ['Steam PC', 'Available now', 'Best for Steam achievements, Steam Cloud, controller support, and Steam Deck testing.'],
  ['Xbox Game Pass', 'Available now', 'Best if you already subscribe and want a low-risk first run.'],
  ['Xbox Cloud Gaming', 'Available now', 'Best for quick testing, but input latency can matter in platforming and bullet-hell combat.'],
  ['Xbox Play Anywhere', 'Available now', 'Useful if you want Xbox ecosystem continuity between console and PC.'],
  ['PlayStation 5', 'Available now', 'Best for players who want console trophies and a local console setup.'],
];

export default function LunaAbyssReleaseDateGamePassPage() {
  return (
    <LunaAbyssArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Game Pass"
      heroImage={lunaAbyssImages.screenshot1}
      heroAlt="Luna Abyss platform and Game Pass guide screenshot"
      faqs={faqs}
    >
      <BlufBox title="Platform Answer">
        <p>
          <strong>Luna Abyss released on May 21, 2026 and is available through
          Game Pass.</strong> As of May 28, 2026, the Xbox Store also displays
          Xbox Cloud Gaming and Xbox Play Anywhere support. Steam is still the
          cleanest route for Steam achievements, Steam Cloud, and Deck testing.
        </p>
      </BlufBox>

      <StatusPanel
        items={lunaAbyssQuickFacts.slice(0, 5).map(([label, value]) => ({
          label,
          value,
          status: 'verified' as const,
        }))}
      />

      <LunaInfoTable columns={['Platform', 'Status', 'Use this route if']} rows={platformRows} />

      <ActionTable rows={lunaAbyssReleaseRows} />

      <section className="prose-game">
        <h2>Price and Storefront Checks</h2>
        <p>
          Steam returned a 20 percent launch discount in the queried storefront
          as of May 28, 2026, but regional price and sale timing can change.
          Check the live storefront before choosing between a purchase and Game
          Pass access.
        </p>
      </section>

      <ArticleImage
        src={lunaAbyssImages.screenshot2}
        alt="Luna Abyss buying route screenshot"
        caption="Choose the storefront based on how you plan to play: Game Pass for low-risk access, Steam for achievements and Deck testing, or console storefronts for platform comfort."
      />
    </LunaAbyssArticle>
  );
}
