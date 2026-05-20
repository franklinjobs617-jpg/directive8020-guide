import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { ThickAsThievesArticle } from '@/components/thick-as-thieves-article';
import {
  createThickAsThievesMetadata,
  thickAsThievesImages,
  thickAsThievesWorthItRows,
} from '@/lib/thick-as-thieves';

const title = 'Is Thick As Thieves Worth It? Launch Price, Co-op & Short Campaign';
const description =
  'Thick As Thieves buying guide for launch day: $4.99 price, 2 maps, 16 missions, at least 4 hours, solo/co-op, PvPvE pivot, PC focus, and who should wait.';
const canonical = '/games/thick-as-thieves/is-it-worth-it';

export const metadata = createThickAsThievesMetadata({
  title,
  description,
  canonical,
  image: thickAsThievesImages.feature,
});

const faqs = [
  {
    question: 'Is Thick As Thieves worth buying at launch?',
    answer:
      'Thick As Thieves is most worth considering if you want a low-price, compact stealth heist built for solo play or two-player co-op.',
  },
  {
    question: 'How much does Thick As Thieves cost?',
    answer:
      'Official launch pricing is listed as $4.99 / EUR4.99 / GBP4.99, but players should verify local store pricing at unlock.',
  },
  {
    question: 'Is Thick As Thieves a long game?',
    answer:
      'No. Official messaging describes an introductory campaign with at least 4 hours, 2 dynamic replayable maps, and 16 missions.',
  },
  {
    question: 'Who should wait before buying?',
    answer:
      'Wait if you need reviews after launch, a long campaign, console confirmation, or proof that the shift from PvPvE to solo/co-op works well.',
  },
];

export default function ThickAsThievesWorthItPage() {
  return (
    <ThickAsThievesArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Is It Worth It?"
      heroImage={thickAsThievesImages.feature}
      heroAlt="Thick As Thieves buying guide image"
      faqs={faqs}
    >
      <BlufBox title="Buying Answer">
        <p>
          <strong>Thick As Thieves looks like a low-price, focused stealth buy, not a long campaign bet.</strong>{' '}
          The official $4.99 / EUR4.99 / GBP4.99 price fits the announced
          introductory scope: 2 dynamic replayable maps, 16 missions, at least 4
          hours, and 6 gear pieces. Buy for compact stealth routing and co-op
          experimentation; wait if you need reviews, console news, or a larger
          content promise.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2>Launch Value Snapshot</h2>
        <ArticleImage
          src={thickAsThievesImages.feature}
          alt="Thick As Thieves launch value snapshot image"
          caption="The value question is not whether the game is huge. It is whether the compact stealth package fits the low launch price and your play style."
        />
        <p>
          The biggest mistake would be judging Thick As Thieves like a
          full-price open-world campaign. Current official messaging sells a
          smaller stealth heist with replayable contracts, a low launch price,
          and optional partner co-op. That can be a good fit if you like route
          mastery, but a bad fit if you want a long story campaign on day one.
        </p>
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Buying factor</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">How to read it</th>
            </tr>
          </thead>
          <tbody>
            {thickAsThievesWorthItRows.map(([factor, reading]) => (
              <tr key={factor} className="border-b border-border/30 last:border-0">
                <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{factor}</th>
                <td className="px-4 py-3 text-muted-foreground">{reading}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>Why the PvPvE Pivot Matters</h2>
        <ArticleImage
          src={thickAsThievesImages.soloCoop}
          alt="Thick As Thieves solo and co-op pivot image"
          caption="Some older coverage framed the game around PvPvE. The current launch product is better judged as solo or two-player co-op stealth."
        />
        <p>
          Reddit and PC coverage show that some players still remember the
          earlier PvPvE pitch. For launch-day buying advice, the important point
          is expectation alignment: do not buy expecting a competitive
          extraction-style game. Buy if a compact solo/co-op stealth heist is
          what you actually want.
        </p>

        <h2>Who Should Buy Today</h2>
        <ArticleImage
          src={thickAsThievesImages.beginner}
          alt="Thick As Thieves buy today image"
          caption="The best day-one fit is a player who enjoys learning routes, replaying contracts, and testing stealth tools at a low entry price."
        />
        <ul>
          <li>You want a short-session stealth game at a low launch price.</li>
          <li>You are interested in solo play or partner co-op, not PvPvE.</li>
          <li>You enjoy replaying maps to improve routes, timing, and clean exits.</li>
        </ul>

        <h2>Who Should Wait</h2>
        <ArticleImage
          src={thickAsThievesImages.roadmap}
          alt="Thick As Thieves wait before buying image"
          caption="Waiting is reasonable if your purchase depends on reviews, console plans, long-term content, or a larger campaign."
        />
        <ul>
          <li>Wait if you need post-launch reviews before trusting the pivot.</li>
          <li>Wait if you need a confirmed console version or cross-play.</li>
          <li>Wait if 2 maps and at least 4 hours sounds too small for your taste.</li>
        </ul>
      </section>
    </ThickAsThievesArticle>
  );
}
