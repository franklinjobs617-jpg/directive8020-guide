import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { ThickAsThievesArticle } from '@/components/thick-as-thieves-article';
import { createThickAsThievesMetadata, thickAsThievesGearRows, thickAsThievesImages } from '@/lib/thick-as-thieves';

const title = 'Thick As Thieves Gear & Loadout Guide - First Unlock Priorities';
const description =
  'Thick As Thieves gear guide for launch day: 6 announced gear pieces, loadout roles, information tools, recovery tools, co-op support, and unverified stats.';
const canonical = '/games/thick-as-thieves/gear-loadouts';

export const metadata = createThickAsThievesMetadata({
  title,
  description,
  canonical,
  image: thickAsThievesImages.gear,
});

const faqs = [
  {
    question: 'How many gear pieces are in Thick As Thieves?',
    answer:
      'Official launch messaging describes 6 pieces of gear.',
  },
  {
    question: 'How should beginners choose gear?',
    answer:
      'Beginners should value information and recovery tools before flashy commitment tools.',
  },
  {
    question: 'Are gear stats confirmed?',
    answer:
      'Exact gear names, stats, cooldowns, costs, and unlock order still need live hands-on verification.',
  },
  {
    question: 'Does co-op change loadouts?',
    answer:
      'Yes. Co-op should reward complementary roles, with one player creating information while the other commits to objectives.',
  },
];

export default function ThickAsThievesGearPage() {
  return (
    <ThickAsThievesArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Gear & Loadouts"
      heroImage={thickAsThievesImages.gear}
      heroAlt="Thick As Thieves gear and loadout guide image"
      faqs={faqs}
    >
      <BlufBox title="Gear Answer">
        <p>
          <strong>Official launch messaging describes 6 pieces of gear, but exact stats still need testing.</strong>{' '}
          Until the live build is verified, choose loadouts by role:
          information, commitment, recovery, and co-op support.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2>Think in Loadout Roles</h2>
        <ArticleImage
          src={thickAsThievesImages.gear}
          alt="Thick As Thieves loadout roles image"
          caption="A good stealth loadout should help you understand the room, execute the objective, and recover when the plan breaks."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Loadout role</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">How to use it</th>
            </tr>
          </thead>
          <tbody>
            {thickAsThievesGearRows.map(([role, use]) => (
              <tr key={role} className="border-b border-border/30 last:border-0">
                <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{role}</th>
                <td className="px-4 py-3 text-muted-foreground">{use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>First Unlock Priorities</h2>
        <ArticleImage
          src={thickAsThievesImages.screenshot4}
          alt="Thick As Thieves first unlock priority image"
          caption="Early unlocks should widen safe options across many contracts instead of solving only one narrow mistake."
        />
        <p>
          The safest launch-day approach is to choose flexible tools first. If a
          tool helps you read the space or reset after suspicion, it will likely
          help across more contracts than a niche tool that only works after the
          room has already collapsed.
        </p>

        <h2>What Needs Live Testing</h2>
        <ArticleImage
          src={thickAsThievesImages.screenshot7}
          alt="Thick As Thieves live gear testing image"
          caption="Once the game unlocks, this page should update with exact gear names, unlock order, cooldowns, costs, and contract-specific examples."
        />
        <ul>
          <li>Exact gear names and descriptions.</li>
          <li>Unlock order through contracts or Thieves Guild progression.</li>
          <li>Cooldowns, costs, or hard-use limits.</li>
          <li>Whether solo and co-op progression share the same gear behavior.</li>
        </ul>
      </section>
    </ThickAsThievesArticle>
  );
}
