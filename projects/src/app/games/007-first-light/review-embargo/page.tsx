import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { FirstLightArticle } from '@/components/007-first-light-article';
import {
  createFirstLightMetadata,
  firstLightImages,
  firstLightReviewRows,
} from '@/lib/007-first-light';

const title = '007 First Light Review Embargo, Reviews & Worth It';
const description =
  '007 First Light review embargo and buying guide covering review timing, Steam user reviews, early access caution, Denuvo, PC performance, and who should buy or wait.';
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
      'Check current critic coverage and Steam after launch. Steam showed no user reviews before the full release window, so early-access footage should not be treated as review consensus.',
  },
  {
    question: 'What is the 007 First Light review embargo?',
    answer:
      'Review embargo timing is separate from release timing. Use published critic reviews only after they appear, and do not infer scores from trailer or early-access access alone.',
  },
  {
    question: 'Is 007 First Light worth buying early?',
    answer:
      'Buy early if you want an IO Interactive Bond origin story and are comfortable without full review consensus. Wait if PC performance, Denuvo, or user reviews matter to you.',
  },
  {
    question: 'Does 007 First Light use Denuvo?',
    answer:
      'Steam lists Denuvo Anti-Tamper and a third-party EULA, so PC buyers who care about DRM should factor that into the buying decision.',
  },
];

export default function FirstLightReviewEmbargoPage() {
  return (
    <FirstLightArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Review Embargo"
      heroImage={firstLightImages.background}
      heroAlt="007 First Light action scene review embargo and buying guide image"
      faqs={faqs}
    >
      <BlufBox title="Buy or Wait">
        <p>
          <strong>Do not treat early access as a review score.</strong> 007
          First Light is a strong early-buy fit if you specifically want IO
          Interactive&apos;s James Bond origin story. Wait if you need critic
          reviews, Steam user reviews, console reports, PC performance proof, or
          more comfort with Denuvo.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2>Review and Buying Checklist</h2>
        <ArticleImage
          src={firstLightImages.hero}
          alt="007 First Light agent close-up review and buying decision image"
          caption="The useful buying question is not whether the trailer looks good; it is whether reviews, performance, DRM, and platform timing match your risk tolerance."
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
        <h2>What to Read in Reviews</h2>
        <p>
          For this game, the most useful review details will be mission freedom,
          stealth quality, shooting feel, driving sections, gadget usefulness,
          story pacing, replay modifiers, PC performance, and how close the
          structure feels to IO Interactive&apos;s best mission design.
        </p>

        <h2>What Reviews Should Not Decide Alone</h2>
        <p>
          A Bond origin story can be a good fit for one player and a poor fit
          for another even with the same score. If you want a pure sandbox,
          wait for mission-structure details. If you want a cinematic spy
          campaign with stealth, driving, gadgets, and action, the launch
          materials already show the intended lane.
        </p>
      </section>
    </FirstLightArticle>
  );
}
