import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, SearchAnswerPanel } from '@/components/guide-blocks';
import { RomesteadArticle } from '@/components/romestead-article';
import {
  createRomesteadMetadata,
  romesteadBeginnerRows,
  romesteadImages,
} from '@/lib/romestead';

const title = 'Romestead Beginner Guide — Best Profession, Tips & First Day';
const description =
  'Romestead beginner guide: pick the best profession, survive your first day, gather resources, build a base, assign survivor jobs, set up co-op roles, and prepare night defense.';
const canonical = '/games/romestead/beginner-guide';

export const metadata = createRomesteadMetadata({
  title,
  description,
  canonical,
  image: romesteadImages.screenshot1,
});

const faqs = [
  {
    question: 'What should I do first in Romestead?',
    answer:
      'Gather food and basic resources, build storage and early workstations, keep the first settlement compact, and prepare for night defense before pushing deep into exploration.',
  },
  {
    question: 'Should I explore dungeons immediately?',
    answer:
      'Not immediately. Scout nearby areas first, but wait until food, tools, storage, and defense are stable before treating dungeons as your main goal.',
  },
  {
    question: 'How important are survivors in Romestead?',
    answer:
      'Survivors are important because they turn repeated chores into a settlement system. Recruit with roles in mind instead of adding workers randomly.',
  },
  {
    question: 'What is the best god blessing in Romestead?',
    answer:
      'A final best blessing cannot be claimed safely during the launch window. Use blessings that match your current shortage, such as survival, production, defense, or exploration.',
  },
  {
    question: 'Can I play Romestead solo?',
    answer:
      'Yes. Steam lists Single-player, and the official description also supports co-op for groups.',
  },
  {
    question: 'What beginner mistake should I avoid?',
    answer:
      'Do not spread your base too wide before you understand night attacks, worker flow, storage needs, and defensive pressure.',
  },
];

const searchIntentRows = [
  {
    query: 'Romestead guide',
    answer: 'Start with food, wood, stone, storage, workstations, compact layout, survivors, then night defense.',
    href: '#first-30-minutes',
    label: 'First day',
  },
  {
    query: 'Romestead tips',
    answer: 'Do not explore far or build wide until food, storage, tools, and defense are stable.',
    href: '#early-resources',
    label: 'Tips',
  },
  {
    query: 'Best profession or best class',
    answer: 'Pick the role that solves your first shortage: food, materials, crafting, defense, or scouting.',
    href: '#profession-choice',
    label: 'Build choice',
  },
  {
    query: 'Romestead co-op',
    answer: 'Split jobs across gathering, crafting, scouting, and defense instead of duplicating the same task.',
    href: '/games/romestead/multiplayer-coop',
    label: 'Group play',
  },
  {
    query: 'Romestead Steam Deck',
    answer: 'Treat handheld support as a live test: check text size, menus, building controls, combat, saves, and co-op.',
    href: '/games/romestead/steam-deck-controller',
    label: 'Handheld',
  },
];

const jumpLinks = [
  { href: '#first-30-minutes', label: 'First 30 minutes' },
  { href: '#early-resources', label: 'Resources' },
  { href: '#profession-choice', label: 'Best class' },
  { href: '#base-layout', label: 'Base layout' },
  { href: '/games/romestead/tips-and-tricks', label: 'More tips' },
  { href: '/games/romestead/best-profession-class', label: 'Profession guide' },
];

const firstThirtyRows = [
  ['0-5 minutes', 'Scout close food, wood, stone, safe terrain, and nearby threats.', 'You need a build site and resource picture before placing the first core.'],
  ['5-10 minutes', 'Gather basic materials and avoid long-distance exploration.', 'Early walking time is expensive when no storage or workstations exist.'],
  ['10-15 minutes', 'Place storage near the first crafting area.', 'Storage discipline makes every later craft faster.'],
  ['15-20 minutes', 'Build the first workstations and basic tools.', 'Tools and workstations turn loose materials into repeatable progress.'],
  ['20-25 minutes', 'Start food handling and assign survivors to repeated chores.', 'Food and labor flow prevent the settlement from stalling.'],
  ['25-30 minutes', 'Compact the layout and prepare for night pressure.', 'A smaller base is easier to defend and repair while you are learning enemy behavior.'],
];

const resourcePriorityRows = [
  ['Food', 'First priority', 'Supports gathering, exploration, recovery, and longer work sessions.'],
  ['Wood and stone', 'First priority', 'Needed for early structures, tools, storage, and defense.'],
  ['Storage capacity', 'First priority', 'Keeps materials usable and makes shortages visible.'],
  ['Workstation inputs', 'Second priority', 'Unlocks better crafting once survival basics are handled.'],
  ['Defense materials', 'Second priority', 'Prevents night attacks from undoing the first day.'],
  ['Dungeon resources', 'Later priority', 'Useful after the base can run without everyone nearby.'],
];

const professionChoiceRows = [
  ['Solo first save', 'Flexible food and gathering role', 'One player must cover every system, so broad value beats narrow specialization.'],
  ['Co-op group', 'Split food, crafting, scouting, and defense', 'Groups progress faster when each player solves a different settlement problem.'],
  ['Builder player', 'Crafting and storage focus', 'Best if resource handling and workstation flow are the main bottleneck.'],
  ['Combat player', 'Defense focus', 'Best if nights are breaking the settlement before morning.'],
  ['Explorer player', 'Scouting focus after the base works', 'Best once food, tools, and defense can support travel away from base.'],
];

export default function RomesteadBeginnerGuidePage() {
  return (
    <RomesteadArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Beginner Guide"
      heroImage={romesteadImages.screenshot1}
      heroAlt="Romestead early settlement and survival crafting screenshot"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="What should you do first in Romestead?"
        answer="For the first day, build a compact working settlement before chasing dungeons: gather food, wood, stone, and basic materials; place storage and workstations; assign survivors to repeated chores; choose a role that fixes your first shortage; and prepare night defense."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="First-Hour Plan">
        <p>
          <strong>For your first Romestead run, build stability before
          ambition.</strong> Get food, basic materials, storage, early
          workstations, and a defendable settlement layout before chasing
          distant dungeons or advanced blessings. Romestead is a survival town
          builder, so the first hour is less about perfect efficiency and more
          about avoiding a settlement that cannot feed, craft, or defend itself.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2>First Day Priorities</h2>
        <ArticleImage
          src={romesteadImages.screenshot2}
          alt="Romestead first day base building screenshot"
          caption="Your first day should create a working settlement core: resources, storage, crafting, food, and a layout that can be defended when night pressure starts."
        />
        <p>
          Romestead mixes personal survival with settlement management. That
          means every early choice should answer a practical question: can you
          store materials, craft what you need, feed the group, move safely at
          night, and assign survivors to useful work? If the answer is no, fix
          that before expanding the settlement.
        </p>
      </section>

      <ActionTable rows={romesteadBeginnerRows} />

      <section className="prose-game">
        <h2 id="first-30-minutes">First 30 Minutes Route</h2>
        <p>
          Use the opening half hour to make the settlement functional. The goal
          is not a perfect Roman town yet; it is a base that can store
          materials, craft basics, feed workers, and survive the first pressure
          spike.
        </p>
      </section>

      <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Time</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Do this</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why</th>
            </tr>
          </thead>
          <tbody>
            {firstThirtyRows.map(([time, action, why]) => (
              <tr key={time} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{time}</td>
                <td className="px-4 py-3 text-muted-foreground">{action}</td>
                <td className="px-4 py-3 text-muted-foreground">{why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2 id="early-resources">Early Resource Priorities</h2>
        <p>
          If a choice does not improve food, materials, storage, crafting, or
          defense during the first day, it can usually wait. Save long
          exploration and decorative building for after the settlement works.
        </p>
      </section>

      <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Priority</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">When to focus it</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Reason</th>
            </tr>
          </thead>
          <tbody>
            {resourcePriorityRows.map(([priority, timing, reason]) => (
              <tr key={priority} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{priority}</td>
                <td className="px-4 py-3 text-muted-foreground">{timing}</td>
                <td className="px-4 py-3 text-muted-foreground">{reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2 id="profession-choice">Best Profession or Class for Beginners</h2>
        <p>
          The safest first role is the one that removes your current shortage.
          Use the{' '}
          <Link href="/games/romestead/best-profession-class">best profession and class guide</Link>{' '}
          for a deeper role split, especially if you are planning co-op.
        </p>
      </section>

      <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player goal</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best early direction</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why it works</th>
            </tr>
          </thead>
          <tbody>
            {professionChoiceRows.map(([goal, direction, reason]) => (
              <tr key={goal} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{goal}</td>
                <td className="px-4 py-3 text-muted-foreground">{direction}</td>
                <td className="px-4 py-3 text-muted-foreground">{reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2 id="base-layout">Base Layout That Survives the Launch Window</h2>
        <ArticleImage
          src={romesteadImages.planningAnimalFarm}
          alt="Romestead-style defensive settlement layout planning illustration"
          caption="Planning illustration for a compact farm-and-animal layout. Use it as layout guidance, not as a claim about exact final Romestead UI or building placement."
        />
        <p>
          Keep early storage close to workstations, keep food production easy to
          reach, and avoid placing key stations so far apart that every craft
          becomes a long walk. If undead pressure increases at night, a tight
          settlement gives you clearer defense lanes and fewer weak edges. Save
          decorative builds for after the base has enough food, materials,
          tools, and defense.
        </p>
      </section>

      <section className="prose-game">
        <h2>Survivors, Exploration, and God Blessings</h2>
        <ArticleImage
          src={romesteadImages.planningCropHarvesting}
          alt="Romestead-style crop flow and food planning illustration"
          caption="Planning illustration for food and crop flow. Use survivors and blessings to solve the problem you actually have: gathering speed, defense, food pressure, crafting bottlenecks, or safer exploration."
        />
        <p>
          Survivors should reduce the chores that slow your settlement down.
          If you are always short on basic materials, assign help around
          gathering and production. If nights feel dangerous, use layout and
          roles to improve defense before exploring farther. God blessings
          should be treated as flexible support until players verify final
          balance, strongest combinations, and late-game builds.
        </p>
        <p>
          If you are playing with friends, use the{' '}
          <Link href="/games/romestead/multiplayer-coop">co-op guide</Link>{' '}
          to split jobs cleanly. If you are playing handheld, run the{' '}
          <Link href="/games/romestead/steam-deck-controller">Steam Deck and controller checks</Link>{' '}
          before assigning yourself a fast combat or precise building role.
        </p>
      </section>
    </RomesteadArticle>
  );
}
