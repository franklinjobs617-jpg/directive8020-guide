import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, SearchAnswerPanel } from '@/components/guide-blocks';
import { RomesteadArticle } from '@/components/romestead-article';
import { createRomesteadMetadata, romesteadImages } from '@/lib/romestead';

const title = 'Romestead Tips and Tricks: First Day Route, Resources, Co-op and Night Defense';
const description =
  'Romestead tips and tricks for first-day routing, early resources, compact base layouts, survivors, co-op jobs, profession choice, Steam Deck checks, and night defense.';
const canonical = '/games/romestead/tips-and-tricks';

export const metadata = createRomesteadMetadata({
  title,
  description,
  canonical,
  image: romesteadImages.screenshot2,
});

const faqs = [
  {
    question: 'What are the best Romestead beginner tips?',
    answer:
      'Keep the first base compact, gather food and basic resources first, build storage and workstations early, assign survivors to repeated chores, and prepare for night defense before exploring far.',
  },
  {
    question: 'What should I avoid early in Romestead?',
    answer:
      'Avoid overbuilding, spreading storage too far apart, sending everyone away from base, ignoring food, and chasing dungeons before tools and defense are ready.',
  },
  {
    question: 'Should I play Romestead solo or co-op first?',
    answer:
      'Solo is cleaner for learning menus and pacing. Co-op is stronger when players split jobs instead of duplicating the same gathering route.',
  },
  {
    question: 'What is the best early resource in Romestead?',
    answer:
      'Food, wood, stone, storage capacity, and basic crafting materials matter first because they support every other system.',
  },
];

const searchIntentRows = [
  {
    query: 'Romestead tips',
    answer: 'Start small: food, basic resources, storage, workstations, compact layout, survivors, then controlled exploration.',
    href: '#first-day-route',
    label: 'Tips',
  },
  {
    query: 'Romestead beginner tips',
    answer: 'Do not build wider than you can feed, supply, and defend during the first night cycle.',
    href: '#mistakes',
    label: 'Avoid',
  },
  {
    query: 'Romestead first day',
    answer: 'Use the first day to build a working settlement core before dungeons or far scouting.',
    href: '#first-day-route',
    label: 'Route',
  },
  {
    query: 'Romestead co-op tips',
    answer: 'Split jobs across gathering, crafting, scouting, and defense so the group does not create new shortages.',
    href: '#coop-tips',
    label: 'Co-op',
  },
];

const jumpLinks = [
  { href: '#first-day-route', label: 'First day' },
  { href: '#resources', label: 'Resources' },
  { href: '#mistakes', label: 'Mistakes' },
  { href: '#coop-tips', label: 'Co-op tips' },
  { href: '/games/romestead/best-profession-class', label: 'Best role' },
  { href: '/games/romestead/steam-deck-controller', label: 'Deck checks' },
];

const firstDayRows = [
  {
    step: 'Spawn and scout close',
    doThis: 'Mark nearby food, wood, stone, water, paths, and safe building space before running far away.',
    why: 'A clear local map prevents the first base from forming in an awkward or exposed spot.',
  },
  {
    step: 'Build storage early',
    doThis: 'Place storage close to the workstations you use most.',
    why: 'Resource piles become a time sink if every craft requires long walks.',
  },
  {
    step: 'Craft the basics',
    doThis: 'Prioritize basic tools, food handling, and stations that unlock more reliable production.',
    why: 'Early crafting creates the foundation for settlement growth and defense.',
  },
  {
    step: 'Recruit with purpose',
    doThis: 'Assign survivors to chores that repeat constantly instead of random tasks.',
    why: 'A useful survivor reduces pressure every day, while an unfocused one adds management noise.',
  },
  {
    step: 'Prepare night defense',
    doThis: 'Keep the base compact, light the useful areas, and avoid leaving important stations exposed.',
    why: 'Night pressure punishes wide settlements before players understand enemy behavior.',
  },
];

const resourceRows = [
  ['Food', 'Highest early priority', 'Keeps exploration and work sessions from collapsing.'],
  ['Wood and stone', 'High early priority', 'Supports tools, workstations, storage, and defensive structures.'],
  ['Storage space', 'High early priority', 'Prevents resources from becoming scattered and hard to use.'],
  ['Crafting inputs', 'Medium priority', 'Important once basic gathering and food are stable.'],
  ['Dungeon loot', 'Later priority', 'Useful after the first base can survive without everyone nearby.'],
  ['Decorative materials', 'Low early priority', 'Save them for after the settlement works.'],
];

const mistakeRows = [
  ['Overbuilding', 'A wide base increases travel time and defensive surface area.'],
  ['Exploring too far', 'Distant scouting can leave food, storage, and night prep unfinished.'],
  ['Ignoring storage', 'Messy materials slow crafting and make shortages harder to see.'],
  ['Duplicating co-op jobs', 'Four gatherers still lose time if nobody handles food, crafting, or defense.'],
  ['Chasing a final build early', 'Early Access balance and incomplete route testing make rigid claims risky.'],
];

export default function RomesteadTipsAndTricksPage() {
  return (
    <RomesteadArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Tips and Tricks"
      heroImage={romesteadImages.screenshot2}
      heroAlt="Romestead tips and tricks early base building screenshot"
      faqs={faqs}
      showSources={false}
    >
      <SearchAnswerPanel
        title="What should beginners do first in Romestead?"
        answer="Spend the first day building a small working settlement: gather food, wood, stone, and basic materials; place storage and workstations; recruit survivors for repeated chores; and prepare night defense before exploring far."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Best Tip">
        <p>
          <strong>Romestead rewards a base that works before it looks impressive.</strong>{' '}
          Feed it, supply it, organize it, defend it, then expand.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2 id="first-day-route">First Day Route</h2>
        <ArticleImage
          src={romesteadImages.screenshot2}
          alt="Romestead first day route and base setup screenshot"
          caption="The first day should create a functional settlement core before long exploration or decorative building."
        />
      </section>

      <ActionTable rows={firstDayRows} />

      <section className="prose-game">
        <h2 id="resources">Early Resource Priorities</h2>
        <p>
          Romestead has several systems competing for attention. The safest
          early order is survival first, production second, exploration third,
          and decoration later.
        </p>
      </section>

      <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Resource</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Priority</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why it matters</th>
            </tr>
          </thead>
          <tbody>
            {resourceRows.map(([resource, priority, note]) => (
              <tr key={resource} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{resource}</td>
                <td className="px-4 py-3 text-muted-foreground">{priority}</td>
                <td className="px-4 py-3 text-muted-foreground">{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2 id="mistakes">Mistakes to Avoid</h2>
        <ArticleImage
          src={romesteadImages.screenshot5}
          alt="Romestead night defense and early mistake prevention screenshot"
          caption="Most early problems come from expanding faster than food, storage, defense, and survivors can support."
        />
      </section>

      <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Mistake</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why it hurts</th>
            </tr>
          </thead>
          <tbody>
            {mistakeRows.map(([mistake, note]) => (
              <tr key={mistake} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{mistake}</td>
                <td className="px-4 py-3 text-muted-foreground">{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2 id="coop-tips">Co-op Tips</h2>
        <p>
          In co-op, decide jobs before everyone runs in different directions.
          One player should keep food moving, one should organize crafting and
          storage, one should scout, and one should prepare night defense. Use
          the <Link href="/games/romestead/best-profession-class">profession guide</Link>{' '}
          if your group wants cleaner role choices, and check{' '}
          <Link href="/games/romestead/steam-deck-controller">Steam Deck and controller comfort</Link>{' '}
          before assigning a handheld player to fast combat or precise building.
        </p>
      </section>
    </RomesteadArticle>
  );
}
