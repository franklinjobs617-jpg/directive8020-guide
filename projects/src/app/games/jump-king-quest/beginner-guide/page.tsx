import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox } from '@/components/guide-blocks';
import { JumpKingQuestArticle } from '@/components/jump-king-quest-article';
import {
  createJumpKingQuestMetadata,
  jumpKingQuestBeginnerRows,
  jumpKingQuestComparisonRows,
  jumpKingQuestImages,
} from '@/lib/jump-king-quest';

const title = 'JUMP KING QUEST Beginner Guide: First Hour, Combat & Co-op Tips';
const description =
  'Spoiler-light JUMP KING QUEST beginner guide for first-hour priorities, climbing discipline, combat basics, solo vs co-op starts, and what changes if you came from Jump King.';
const canonical = '/games/jump-king-quest/beginner-guide';

export const metadata = createJumpKingQuestMetadata({
  title,
  description,
  canonical,
  image: jumpKingQuestImages.climb,
});

const faqs = [
  {
    question: 'What should beginners do first in JUMP KING QUEST?',
    answer:
      'Start by learning jump commitment, recovery routes, enemy spacing, and whether you prefer solo rhythm before adding online co-op pressure.',
  },
  {
    question: 'Is JUMP KING QUEST just like Jump King?',
    answer:
      'No. It keeps difficult climbing, but Steam describes combat, exploration, character customization, online co-op, and online PvP.',
  },
  {
    question: 'Should I start solo or co-op?',
    answer:
      'Start solo for a short session if you need movement confidence, then play co-op once your group understands the basic climbing rhythm.',
  },
  {
    question: 'Is JUMP KING QUEST a Souls-like?',
    answer:
      'Steam user tags include Souls-like, but the safer explanation is that it mixes difficult platforming, combat pressure, and repeated learning through failure.',
  },
];

export default function JumpKingQuestBeginnerPage() {
  return (
    <JumpKingQuestArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Beginner Guide"
      heroImage={jumpKingQuestImages.climb}
      heroAlt="JUMP KING QUEST beginner guide climbing image"
      faqs={faqs}
    >
      <BlufBox title="First-Hour Plan">
        <p>
          <strong>Beginners should treat JUMP KING QUEST as climbing plus
          combat, not only Jump King with online features.</strong> Learn jump
          commitment, read enemy space, avoid panic recoveries, and try a short
          solo session before a serious co-op climb if your group is new.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2>First-Hour Priorities</h2>
        <ArticleImage
          src={jumpKingQuestImages.combat}
          alt="JUMP KING QUEST official video frame showing combat pressure"
          caption="Official video frames show that the sequel asks players to manage climbing rhythm and enemy pressure at the same time."
        />
        <p>
          The first mistake is treating every screen like a pure jump puzzle.
          Quest adds enemies, routes, other players, and progression pressure,
          so the right early habit is to slow down. Look for recovery routes,
          then decide whether a jump, fight, or retreat is the least expensive
          mistake.
        </p>
      </section>

      <ActionTable rows={jumpKingQuestBeginnerRows} />

      <section className="prose-game">
        <h2>If You Came From Jump King</h2>
        <p>
          The original Jump King trained players to care about timing and
          memory. Those skills still help, but they are not the whole game
          here. Steam presents Quest as a climbing action-adventure with
          combat, exploration, customization, online co-op, and PvP.
        </p>
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player type</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Old habit</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Quest adjustment</th>
            </tr>
          </thead>
          <tbody>
            {jumpKingQuestComparisonRows.map(([type, oldHabit, adjustment]) => (
              <tr key={type} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{type}</td>
                <td className="px-4 py-3 text-muted-foreground">{oldHabit}</td>
                <td className="px-4 py-3 text-muted-foreground">{adjustment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>Common Early Mistakes</h2>
        <ArticleImage
          src={jumpKingQuestImages.pvp}
          alt="JUMP KING QUEST official video frame showing player pressure"
          caption="Online play can be helpful, funny, or chaotic depending on whether the group understands the climbing and combat rhythm."
        />
        <p>
          Avoid chasing a solved route on day one. The more useful first
          session is a note-taking session: where did you fall, what enemy
          forced the mistake, and did another player help or distract? That is
          the practical experience players need before advanced routes make
          sense.
        </p>
      </section>
    </JumpKingQuestArticle>
  );
}
