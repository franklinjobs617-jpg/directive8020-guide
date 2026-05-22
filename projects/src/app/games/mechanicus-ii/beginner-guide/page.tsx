import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox } from '@/components/guide-blocks';
import { MechanicusIIArticle } from '@/components/mechanicus-ii-article';
import {
  createMechanicusIIMetadata,
  mechanicusIIBeginnerRows,
  mechanicusIIImages,
} from '@/lib/mechanicus-ii';

const title = 'Warhammer 40,000: Mechanicus II Beginner Guide';
const description =
  'Spoiler-light Mechanicus II beginner guide for choosing a first campaign, using cover, reading terrain, managing Cognition or Dominion, turn order, and launch-week traps.';
const canonical = '/games/mechanicus-ii/beginner-guide';

export const metadata = createMechanicusIIMetadata({
  title,
  description,
  canonical,
  image: mechanicusIIImages.screenshot1,
});

const faqs = [
  {
    question: 'Which Mechanicus II campaign should I start first?',
    answer:
      'Start with the faction whose tactical rhythm sounds clearer to you. Adeptus Mechanicus is the safer first pick if you want a more methodical Imperial perspective; Necrons are better if you want the tomb-world campaign fantasy immediately.',
  },
  {
    question: 'Is this a full Mechanicus II walkthrough?',
    answer:
      'No. This is a spoiler-light launch guide. Full mission routes and best-unit claims need more completed campaign testing.',
  },
  {
    question: 'What should beginners focus on first?',
    answer:
      'Use cover, check terrain, watch turn order, protect specialists, and learn your faction resource before chasing advanced builds.',
  },
  {
    question: 'Can I ignore the campaign layer?',
    answer:
      'No. Steam describes territory control and resource management, so campaign decisions matter beyond individual battles.',
  },
];

export default function MechanicusIIBeginnerGuidePage() {
  return (
    <MechanicusIIArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Beginner Guide"
      heroImage={mechanicusIIImages.screenshot1}
      heroAlt="Warhammer 40,000 Mechanicus II beginner guide battlefield image"
      faqs={faqs}
    >
      <BlufBox title="First-Session Plan">
        <p>
          <strong>Mechanicus II beginners should treat the first campaign as a
          tactics lesson, not a race to find the best build.</strong> Pick one
          faction, learn how cover and terrain affect survival, protect key
          units, and watch how territory control and resource spending affect
          the next battle.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2>Beginner Priorities</h2>
        <ArticleImage
          src={mechanicusIIImages.screenshot2}
          alt="Warhammer 40,000 Mechanicus II tactical beginner priorities image"
          caption="Mechanicus II rewards reading the battlefield before moving units into exposed lines of fire."
        />
        <p>
          The first mistake in a turn-based tactics game is usually impatience.
          Mechanicus II asks players to manage battles, faction capabilities,
          territory, and resources. That means a good opening run should build
          habits: check cover, read terrain, identify safe attack angles, and
          spend resources only after the campaign layer starts to make sense.
          Public descriptions and previews also point to destructible cover,
          environmental hazards, and turn-order manipulation, so a safe tile can
          become unsafe after the battlefield changes.
        </p>
      </section>

      <ActionTable
        rows={mechanicusIIBeginnerRows.map(([step, doThis]) => ({
          step,
          doThis,
          why: 'This keeps the first campaign readable while launch-week meta advice is still unproven.',
        }))}
      />

      <section className="prose-game">
        <h2>Cognition, Dominion, and Turn Order</h2>
        <p>
          Treat faction resources as part of survival. Adeptus Mechanicus runs
          should pay attention to Cognition decisions, while Necron runs should
          watch Dominion pressure. Do not spend these systems only for immediate
          damage if the next enemy turn will leave a key unit exposed. In early
          battles, a defensive turn that protects a specialist can be more
          valuable than a greedy attack.
        </p>

        <h2>What to Avoid in the First Hours</h2>
        <p>
          Avoid treating early tier lists as final. Launch-week tactics games
          change quickly as players discover difficulty spikes, hidden unit
          value, and faction economy pressure. Also avoid splitting attention
          between both campaigns too early. Mechanicus II is built around two
          sides of the conflict, but each side deserves enough time for its
          resource and combat rhythm to become clear.
        </p>
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">If you are struggling with</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Try this first</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Units dying too fast', 'End turns in cover and stop overextending after one good attack.'],
              ['Low resources', 'Delay upgrades until you know which campaign layer bottleneck matters most.'],
              ['Bad damage trades', 'Use terrain and line of sight before spending high-value actions.'],
              ['Faction confusion', 'Stay with one campaign long enough to understand its core loop.'],
            ].map(([problem, answer]) => (
              <tr key={problem} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{problem}</td>
                <td className="px-4 py-3 text-muted-foreground">{answer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MechanicusIIArticle>
  );
}
