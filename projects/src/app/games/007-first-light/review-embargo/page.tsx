import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { FirstLightArticle } from '@/components/007-first-light-article';
import {
  createFirstLightMetadata,
  firstLightImages,
  firstLightPlayerConcernRows,
  firstLightReviewRows,
  firstLightReviewSourceRows,
} from '@/lib/007-first-light';

const title = '007 First Light Review Embargo Lifted? Reviews, Denuvo & Worth It';
const description =
  '007 First Light review embargo and buying guide covering whether reviews are out, Steam user reviews, Denuvo, Steam Deck caution, PC performance, and who should buy or wait.';
const canonical = '/games/007-first-light/review-embargo';

export const metadata = createFirstLightMetadata({
  title,
  description,
  canonical,
  image: firstLightImages.background,
});

const faqs = [
  {
    question: 'Are 007 First Light reviews out?',
    answer:
      'Check current critic coverage and Steam after the May 27 launch window because review and user-review signals can change quickly on release day.',
  },
  {
    question: 'What is the 007 First Light review embargo?',
    answer:
      'The review embargo is the time before outlets can publish reviews. Once reviews are live, use current review coverage instead of older countdown wording.',
  },
  {
    question: 'Is 007 First Light worth buying now?',
    answer:
      'Buy now if reviews and player reports match what you want from an IO Interactive Bond origin story. Wait if PC performance, Denuvo, Steam Deck, or user reviews matter most.',
  },
  {
    question: 'Does 007 First Light use Denuvo?',
    answer:
      'Steam lists Denuvo Anti-Tamper and a third-party EULA, so PC buyers who care about DRM should factor that into the buying decision.',
  },
  {
    question: 'Is 007 First Light Steam Deck verified?',
    answer:
      'No Steam Deck Verified label is confirmed in this guide. Wait for a Steam rating or strong player reports before treating handheld play as safe.',
  },
];

export default function FirstLightReviewEmbargoPage() {
  return (
    <FirstLightArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Reviews"
      heroImage={firstLightImages.background}
      heroAlt="007 First Light action scene review embargo and buying guide image"
      faqs={faqs}
    >
      <BlufBox title="Buy or Wait">
        <p>
          <strong>For 007 First Light, the review question is now about current
          reviews, Steam user reviews, Denuvo, PC performance, and Steam Deck
          proof.</strong> Buy if the published coverage matches the Bond origin
          story you want. Wait if you need broader player reports, handheld
          testing, or more confidence in PC performance.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2>Review Embargo and Buying Checklist</h2>
        <ArticleImage
          src={firstLightImages.reviewCombat}
          alt="007 First Light agent close-up review and buying decision image"
          caption="The useful buying question is not whether the trailer looks good; it is whether current reviews, Steam user reports, performance, DRM, and platform timing match your risk tolerance."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player situation</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best answer</th>
            </tr>
          </thead>
          <tbody>
            {firstLightReviewRows.map(([situation, answer]) => (
              <tr key={situation} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{situation}</td>
                <td className="px-4 py-3 text-muted-foreground">{answer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>Where to Check Review Scores</h2>
        <p>
          Players searching for Metacritic, OpenCritic, IGN, and Steam reviews
          are usually trying to separate one outlet&apos;s opinion from the
          wider launch-window consensus. Use the sources below as different
          signals instead of treating any single score as the complete answer.
        </p>
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Review source</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">How to use it</th>
            </tr>
          </thead>
          <tbody>
            {firstLightReviewSourceRows.map(([source, use]) => (
              <tr key={source} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{source}</td>
                <td className="px-4 py-3 text-muted-foreground">{use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>What to Check in Reviews First</h2>
        <p>
          For this game, the most useful review details will be mission freedom,
          stealth quality, shooting feel, driving sections, gadget usefulness,
          story pacing, replay modifiers, PC performance, and how close the
          structure feels to IO Interactive&apos;s best mission design.
        </p>
      </section>

      <section className="prose-game">
        <h2>What Players Are Checking After Launch</h2>
        <ArticleImage
          src={firstLightImages.reviewStealth}
          alt="007 First Light city stealth image for post-launch player concerns"
          caption="Post-launch player questions are clustering around review status, preload limits, Denuvo, PC performance, Steam Deck, and PS5 or PS5 Pro performance."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player concern</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Useful answer</th>
            </tr>
          </thead>
          <tbody>
            {firstLightPlayerConcernRows.map(([concern, answer]) => (
              <tr key={concern} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{concern}</td>
                <td className="px-4 py-3 text-muted-foreground">{answer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>Denuvo, Steam Reviews, and Steam Deck</h2>
        <p>
          PC buyers should check the Denuvo listing, current Steam user reviews,
          and early performance reports before treating the release as a safe
          day-one purchase. Steam Deck users should be more cautious: unless a
          Steam Deck rating or strong player reports appear, handheld
          performance is still a separate question from normal PC specs.
        </p>
      </section>
    </FirstLightArticle>
  );
}
