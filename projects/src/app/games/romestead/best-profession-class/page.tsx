import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, SearchAnswerPanel } from '@/components/guide-blocks';
import { RomesteadArticle } from '@/components/romestead-article';
import { createRomesteadMetadata, romesteadImages } from '@/lib/romestead';

const title = 'Romestead Best Profession & Class Guide: First Role, Co-op Jobs and Builds';
const description =
  'Romestead best profession and class guide for choosing a first role by food, gathering, crafting, defense, exploration, co-op needs, and settlement goals.';
const canonical = '/games/romestead/best-profession-class';

export const metadata = createRomesteadMetadata({
  title,
  description,
  canonical,
  image: romesteadImages.planningVillageMarket,
});

const faqs = [
  {
    question: 'What is the best profession in Romestead?',
    answer:
      'There is no safe final best profession yet. Pick the role that solves your first shortage: food, materials, crafting speed, defense, or exploration safety.',
  },
  {
    question: 'What is the best class for solo players?',
    answer:
      'Solo players should favor a flexible role that helps early gathering, food, and survival before specializing into deep crafting or combat.',
  },
  {
    question: 'What is the best class for co-op?',
    answer:
      'Co-op groups should split jobs. One player handles food and gathering, one handles crafting and storage, one scouts, and one prepares defense.',
  },
  {
    question: 'Can I change profession later?',
    answer:
      'Treat respec and late-role switching as something to verify in your current build. Avoid choices that assume unlimited resets until the game proves it.',
  },
];

const searchIntentRows = [
  {
    query: 'Romestead best profession',
    answer: 'Choose by your current bottleneck. Food and gathering are safest early; defense and exploration become stronger once the base works.',
    href: '#profession-table',
    label: 'Role pick',
  },
  {
    query: 'Romestead best class',
    answer: 'For a first save, flexible survival and gathering value beats a narrow late-game build.',
    href: '#solo-vs-coop',
    label: 'First save',
  },
  {
    query: 'Best profession for co-op',
    answer: 'Split jobs across food, crafting, scouting, and defense so the group does not duplicate the same early role.',
    href: '#coop-roles',
    label: 'Co-op',
  },
  {
    query: 'Romestead builds',
    answer: 'Treat builds as settlement solutions: solve shortages first, then specialize once recipes and night pressure are clearer.',
    href: '#build-rules',
    label: 'Builds',
  },
];

const jumpLinks = [
  { href: '#profession-table', label: 'Best profession' },
  { href: '#solo-vs-coop', label: 'Solo vs co-op' },
  { href: '#coop-roles', label: 'Co-op roles' },
  { href: '#build-rules', label: 'Build rules' },
  { href: '/games/romestead/beginner-guide', label: 'Beginner route' },
  { href: '/games/romestead/tips-and-tricks', label: 'Tips' },
];

const professionRows = [
  ['Food and farming focus', 'Solo beginners, cautious co-op groups', 'Use when hunger, recovery, and routine gathering slow the settlement.'],
  ['Gathering and materials focus', 'Fast base setup', 'Use when wood, stone, and basic materials block every workstation.'],
  ['Crafting and storage focus', 'Organized builders', 'Use when the group has resources but wastes time moving or crafting.'],
  ['Defense focus', 'Players struggling at night', 'Use when undead pressure breaks the settlement before morning.'],
  ['Exploration focus', 'Scouts and dungeon groups', 'Use after food, tools, storage, and defense are stable.'],
  ['Blessing-focused build', 'Experimenters', 'Use only after you know which shortage the blessing is meant to solve.'],
];

const routeRows = [
  {
    step: 'Pick a shortage',
    doThis: 'Name the problem your settlement has right now: food, materials, crafting, defense, or scouting.',
    why: 'A role is only strong if it fixes the problem that is slowing your save.',
  },
  {
    step: 'Choose a flexible first role',
    doThis: 'Favor early gathering and survival value if this is your first solo save.',
    why: 'Flexible roles recover from mistakes better than narrow late-game plans.',
  },
  {
    step: 'Split co-op jobs',
    doThis: 'Avoid four players taking the same role unless the group has a specific plan.',
    why: 'Duplicate jobs create shortages elsewhere, especially around storage and defense.',
  },
  {
    step: 'Delay final build claims',
    doThis: 'Do not chase a final meta build until recipes, scaling, and night pressure are clearer.',
    why: 'Early Access balance can change, and a claimed best class may not match your patch or group size.',
  },
];

const coopRows = [
  ['Player 1', 'Food, farming, and nearby gathering', 'Keeps the settlement alive while others branch out.'],
  ['Player 2', 'Crafting, storage, and workstation flow', 'Prevents resource piles from turning into menu chaos.'],
  ['Player 3', 'Scouting and dungeon preparation', 'Finds new routes without dragging the whole group away from base.'],
  ['Player 4', 'Defense and night response', 'Keeps attacks from interrupting every production cycle.'],
];

export default function RomesteadBestProfessionClassPage() {
  return (
    <RomesteadArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Best Profession & Class"
      heroImage={romesteadImages.planningVillageMarket}
      heroAlt="Romestead best profession and class settlement role planning image"
      faqs={faqs}
      showSources={false}
    >
      <SearchAnswerPanel
        title="What is the best profession or class in Romestead?"
        answer="The best first Romestead profession is the one that fixes your immediate settlement shortage. Solo players should pick flexible food, gathering, and survival value first; co-op groups should split food, crafting, scouting, and defense roles."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Role Rule">
        <p>
          <strong>Pick for the save you are playing, not for a final tier list.</strong>{' '}
          Romestead combines survival, town building, co-op, and night defense,
          so an early role should solve a practical bottleneck before it chases
          a late-game fantasy.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2 id="profession-table">Profession Choice by Player Goal</h2>
        <ArticleImage
          src={romesteadImages.planningVillageMarket}
          alt="Romestead profession and class choice by settlement goal"
          caption="The best early role depends on what your settlement lacks: food, materials, crafting flow, defense, or safe exploration."
        />
      </section>

      <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Role direction</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best fit</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why to choose it</th>
            </tr>
          </thead>
          <tbody>
            {professionRows.map(([role, fit, reason]) => (
              <tr key={role} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{role}</td>
                <td className="px-4 py-3 text-muted-foreground">{fit}</td>
                <td className="px-4 py-3 text-muted-foreground">{reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2 id="solo-vs-coop">Solo Versus Co-op Class Choice</h2>
        <p>
          Solo players need flexibility because one person must gather, build,
          fight, craft, and explore. Co-op players can specialize earlier, but
          only if the group agrees on who handles repeated chores. Use the{' '}
          <Link href="/games/romestead/multiplayer-coop">multiplayer and co-op guide</Link>{' '}
          if group roles matter more than solo efficiency.
        </p>
      </section>

      <ActionTable rows={routeRows} />

      <section className="prose-game">
        <h2 id="coop-roles">Simple Four-Player Role Split</h2>
        <ArticleImage
          src={romesteadImages.screenshot3}
          alt="Romestead co-op class and profession role split"
          caption="Co-op classes work best when players cover different settlement jobs instead of duplicating the same early task."
        />
      </section>

      <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Slot</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Job</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Value</th>
            </tr>
          </thead>
          <tbody>
            {coopRows.map(([slot, job, value]) => (
              <tr key={slot} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{slot}</td>
                <td className="px-4 py-3 text-muted-foreground">{job}</td>
                <td className="px-4 py-3 text-muted-foreground">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2 id="build-rules">Build Rules That Stay Useful</h2>
        <p>
          A strong Romestead build starts with the first day: food, tools,
          storage, compact layout, and night defense. After that, specialize
          around the bottleneck you keep feeling. If you are still learning the
          survival loop, return to the{' '}
          <Link href="/games/romestead/beginner-guide">beginner guide</Link>{' '}
          before locking in a narrow role.
        </p>
      </section>
    </RomesteadArticle>
  );
}
