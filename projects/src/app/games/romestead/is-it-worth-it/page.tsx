import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { RomesteadArticle } from '@/components/romestead-article';
import {
  createRomesteadMetadata,
  romesteadImages,
  romesteadWorthRows,
} from '@/lib/romestead';

const title = 'Is Romestead Worth It in Early Access? Buy Now or Wait';
const description =
  'Romestead Early Access buying guide: who should buy now, who should try a demo first, who should wait, co-op value, Steam Deck risk, 1.0 expectations, and launch-window checks.';
const canonical = '/games/romestead/is-it-worth-it';

export const metadata = createRomesteadMetadata({
  title,
  description,
  canonical,
  image: romesteadImages.screenshot5,
});

const faqs = [
  {
    question: 'Is Romestead worth buying in Early Access?',
    answer:
      'Romestead is worth considering if you want a Roman-inspired survival town builder on PC and are comfortable with Early Access changes. Wait if you need a finished 1.0 game, verified Steam Deck support, or settled late-game reports.',
  },
  {
    question: 'Should I buy Romestead for co-op?',
    answer:
      'Co-op is a strong reason to watch Romestead because official info lists 1-8 players, Online Co-op, and LAN Co-op. Test host saves, reconnects, and scaling before committing a large group.',
  },
  {
    question: 'Should Steam Deck users buy Romestead now?',
    answer:
      'Steam Deck-first users should wait for verified compatibility or strong launch reports because Deck support is not confirmed at this check.',
  },
  {
    question: 'Is Romestead good for solo players?',
    answer:
      'Romestead can fit solo players who enjoy survival crafting, building, and settlement management, but solo pacing and late-game balance need post-launch player evidence.',
  },
  {
    question: 'How risky is Romestead Early Access?',
    answer:
      'The main risks are unfinished content, changing balance, performance variation, co-op bugs, UI rough edges, and late-game systems that may not be fully documented yet.',
  },
  {
    question: 'Should I wait for Romestead 1.0?',
    answer:
      'Wait for 1.0 if you want a more complete game, final balance, broader reviews, stable late-game systems, and fewer launch-window unknowns.',
  },
];

export default function RomesteadWorthItPage() {
  return (
    <RomesteadArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Is It Worth It"
      heroImage={romesteadImages.screenshot5}
      heroAlt="Romestead Early Access buying decision screenshot"
      faqs={faqs}
    >
      <BlufBox title="Fast Verdict">
        <p>
          <strong>Romestead is a buy-now candidate for players who want a
          Roman-inspired survival crafting town builder and are comfortable with
          Early Access.</strong> It is a wait candidate for players who need a
          finished 1.0 release, verified Steam Deck support, console versions,
          polished controller support, proven late-game balance, or a settled
          review consensus. Co-op groups should test the launch build before
          making it the group&apos;s main long-term world.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2>Buy Now, Try First, or Wait</h2>
        <ArticleImage
          src={romesteadImages.screenshot1}
          alt="Romestead buy now or wait settlement screenshot"
          caption="The buying decision depends less on theme alone and more on your tolerance for Early Access systems, co-op testing, and post-launch balance changes."
        />
        <p>
          Romestead has a clear hook: build and defend a Roman-inspired
          settlement while gathering, crafting, recruiting survivors, exploring,
          and fighting undead pressure. That hook is enough for some players,
          but Early Access changes the buying question. The right choice depends
          on whether you want to participate in the launch window or wait for a
          more settled 1.0 version.
        </p>
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Decision</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best current guidance</th>
            </tr>
          </thead>
          <tbody>
            {romesteadWorthRows.map(([decision, guidance]) => (
              <tr key={decision} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{decision}</td>
                <td className="px-4 py-3 text-muted-foreground">{guidance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>Co-op Value and Group Risk</h2>
        <ArticleImage
          src={romesteadImages.screenshot3}
          alt="Romestead co-op value screenshot"
          caption="Co-op is one of Romestead's strongest launch hooks, but groups should verify session stability before investing many hours into one world."
        />
        <p>
          The official 1-8 player support makes Romestead attractive for
          friends who like dividing work across a shared base. One player can
          build, another can gather, another can scout, and another can focus on
          defense or farming. The risk is that launch-window co-op can expose
          save, reconnect, scaling, and resource-sharing issues that a solo
          player may never see. Start with a short test world before the group
          commits to a long settlement.
        </p>
      </section>

      <section className="prose-game">
        <h2>What to Check Before Keeping the Game</h2>
        <ArticleImage
          src={romesteadImages.planningVillageMarket}
          alt="Romestead launch-window checklist screenshot"
          caption="Planning illustration for settlement growth and production value. Use the first session to test the parts that matter to your purchase: performance, controls, building, co-op, saves, and whether the survival loop feels good."
        />
        <ul>
          <li>Does your PC hold stable performance while gathering, building, and fighting?</li>
          <li>Are the crafting, inventory, and building menus comfortable for long sessions?</li>
          <li>Does co-op joining, leaving, and reconnecting work for your group?</li>
          <li>Do saves and Steam Cloud behave the way you expect?</li>
          <li>Does the Early Access content feel deep enough for the price in your region?</li>
        </ul>
      </section>
    </RomesteadArticle>
  );
}
