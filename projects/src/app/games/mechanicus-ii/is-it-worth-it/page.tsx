import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { MechanicusIIArticle } from '@/components/mechanicus-ii-article';
import {
  createMechanicusIIMetadata,
  mechanicusIIImages,
  mechanicusIIReviewConcernRows,
  mechanicusIIWorthRows,
} from '@/lib/mechanicus-ii';

const title = 'Is Warhammer 40,000: Mechanicus II Worth It?';
const description =
  'Mechanicus II buying guide for launch week: price, Steam discount, Mixed reviews, Steam Deck unsupported status, Adeptus Mechanicus and Necron campaigns, and who should wait.';
const canonical = '/games/mechanicus-ii/is-it-worth-it';

export const metadata = createMechanicusIIMetadata({
  title,
  description,
  canonical,
  image: mechanicusIIImages.buyer,
});

const faqs = [
  {
    question: 'Is Mechanicus II worth buying at launch?',
    answer:
      'It is worth considering if you want a new Warhammer 40K tactics game with Adeptus Mechanicus and Necron campaigns. Wait if Mixed reviews, Steam Deck unsupported status, performance uncertainty, or launch-week balance risk matters to you.',
  },
  {
    question: 'Should I buy Mechanicus II on PC or console?',
    answer:
      'PC has visible Steam details for specs, achievements, cloud saves, reviews, and discount timing. Console players should check PS5 or Xbox store performance reports before buying.',
  },
  {
    question: 'Does Mechanicus II have enough new material?',
    answer:
      'The strongest new hook is the dual-campaign structure with playable Adeptus Mechanicus and Necron perspectives.',
  },
  {
    question: 'Should I wait for walkthroughs and build guides?',
    answer:
      'Wait if you need solved late-campaign routes, final best units, and settled balance advice. Buy sooner if role-based tactics guidance is enough for your first run.',
  },
  {
    question: 'Should I wait for reviews?',
    answer:
      'Waiting is reasonable if you need stable user consensus. Steam currently shows Mixed user reviews at the latest check.',
  },
  {
    question: 'Should I buy Mechanicus II for Steam Deck?',
    answer:
      'Steam Deck-first buyers should wait. The official Steam FAQ and compatibility data list Mechanicus II as unsupported on Deck at launch.',
  },
];

export default function MechanicusIIWorthItPage() {
  return (
    <MechanicusIIArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Is It Worth It"
      heroImage={mechanicusIIImages.buyer}
      heroAlt="Warhammer 40,000 Mechanicus II buying guide image"
      faqs={faqs}
    >
      <BlufBox title="Buy or Wait">
        <p>
          <strong>Buy Mechanicus II now if you specifically want a new
          Warhammer 40K turn-based tactics game with Adeptus Mechanicus and
          Necron campaigns.</strong> Try more research first if Mixed Steam
          reviews, Steam Deck unsupported status, launch-week balance, or
          platform-specific performance would strongly affect your decision.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2>Fast Buyer Verdict</h2>
        <ArticleImage
          src={mechanicusIIImages.worthItBanner}
          alt="Warhammer 40,000 Mechanicus II is it worth it banner"
          caption="The buying decision depends on your appetite for turn-based Warhammer tactics and your tolerance for launch-week review uncertainty."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player situation</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best move</th>
            </tr>
          </thead>
          <tbody>
            {mechanicusIIWorthRows.map(([situation, answer]) => (
              <tr key={situation} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{situation}</td>
                <td className="px-4 py-3 text-muted-foreground">{answer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>What the Steam Review Signal Means</h2>
        <p>
          Steam currently shows Mixed user reviews at the latest check. That is
          a caution signal, not a full stop. For launch-week strategy games,
          review complaints often cluster around performance, UI clarity,
          balance, pacing, and whether the sequel improves enough over the
          first game. Read the review text before reducing the whole decision
          to a single label.
        </p>
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Review concern</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">How to judge it</th>
            </tr>
          </thead>
          <tbody>
            {mechanicusIIReviewConcernRows.map(([concern, advice]) => (
              <tr key={concern} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{concern}</td>
                <td className="px-4 py-3 text-muted-foreground">{advice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>Who Should Wait</h2>
        <p>
          Wait if you need a settled best-unit meta, polished late-campaign
          balance, Steam Deck support, console-specific performance reports, or
          a broad review consensus. The current pages should help with facts and
          first-session direction, but they should not pretend the full campaign
          has already been solved.
        </p>
        <p>
          Buy sooner if the value is the experience itself: learning the
          Adeptus Mechanicus and Necron campaigns, comparing the sequel with
          the first Mechanicus, and solving tactical missions without needing a
          completed wiki beside you. Wait if your purchase depends on exact
          mission routes, confirmed late-game builds, or broad platform
          performance consensus.
        </p>
      </section>
    </MechanicusIIArticle>
  );
}
