import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, SearchAnswerPanel } from '@/components/guide-blocks';
import { MechanicusIIArticle } from '@/components/mechanicus-ii-article';
import {
  createMechanicusIIMetadata,
  mechanicusIIFirstHourRows,
  mechanicusIIImages,
} from '@/lib/mechanicus-ii';

const title = 'Mechanicus II Tips and Tricks: Cover, Consoles, Leaders and Early Missions';
const description =
  'Warhammer 40,000: Mechanicus II tips and tricks for first missions, cover, green consoles, marked tiles, turn order, faction resources, leader safety, and early build mistakes.';
const canonical = '/games/mechanicus-ii/tips-and-tricks';

export const metadata = createMechanicusIIMetadata({
  title,
  description,
  canonical,
  image: mechanicusIIImages.screenshot3,
});

const faqs = [
  {
    question: 'What is the most important Mechanicus II beginner tip?',
    answer:
      'Protect named leaders and use cover before chasing damage. A safe position with a smaller hit is often better than exposing a specialist.',
  },
  {
    question: 'What should I do when a mission objective will not advance?',
    answer:
      'Read the objective again, move near green consoles or marked tiles, check interaction range, keep the required unit alive, and verify line of sight before restarting.',
  },
  {
    question: 'Should I switch campaigns often?',
    answer:
      'No. Stay with one campaign for several missions so Cognition or Dominion rules become readable before judging difficulty.',
  },
  {
    question: 'What is the biggest early mistake?',
    answer:
      'Ending turns in open ground for a greedy attack is the most common early tactical mistake.',
  },
];

const searchIntentRows = [
  {
    query: 'Mechanicus II tips',
    answer: 'Use cover, protect leaders, check turn order, test green consoles, and spend faction resources after reading the objective.',
    href: '#first-hour',
    label: 'Tips',
  },
  {
    query: 'Mechanicus II stuck',
    answer: 'Before restarting, check objective text, interactable tiles, unit range, leader survival, and remaining enemies.',
    href: '#stuck-checklist',
    label: 'Stuck',
  },
  {
    query: 'Green consoles',
    answer: 'Treat green consoles or marked tiles as objective clues and move a suitable unit close enough to test interaction range.',
    href: '#objective-clues',
    label: 'Objectives',
  },
  {
    query: 'Mechanicus II beginner guide',
    answer: 'Pick one campaign, learn its resource, protect the leader, and use role-based units before chasing final builds.',
    href: '/games/mechanicus-ii/beginner-guide',
    label: 'Beginner',
  },
];

const jumpLinks = [
  { href: '#first-hour', label: 'First hour' },
  { href: '#objective-clues', label: 'Consoles' },
  { href: '#stuck-checklist', label: 'Stuck checklist' },
  { href: '#early-mistakes', label: 'Mistakes' },
  { href: '/games/mechanicus-ii/best-units-builds', label: 'Builds' },
  { href: '/games/mechanicus-ii/missions-walkthrough', label: 'Missions' },
];

const stuckRows = [
  ['Objective text', 'Re-read the exact verb: reach, interact, survive, destroy, scan, or protect.'],
  ['Green console or tile', 'Move close enough to test whether an interaction appears.'],
  ['Required unit', 'Check whether a leader or specialist must be alive and nearby.'],
  ['Turn order', 'Do not spend the last safe action before checking the next enemy activation.'],
  ['Line of sight', 'Rotate the camera and verify the unit can actually see or reach the target.'],
  ['Remaining enemies', 'Some objectives may wait for a wave, trigger, or final enemy state.'],
];

const mistakeRows = [
  ['Leaving leaders exposed', 'Leader damage can break a route faster than losing a normal unit.'],
  ['Spending resources too early', 'Save Cognition or Dominion until you know the next objective and enemy turn.'],
  ['Ignoring destructible cover', 'A safe tile may become unsafe after terrain changes.'],
  ['Splitting too far', 'Specialists can become isolated from support or objective triggers.'],
  ['Trusting final tier lists too soon', 'Patch, faction, difficulty, and mission context matter.'],
];

const firstHourActionRows = mechanicusIIFirstHourRows.map(([step, doThis]) => ({
  step,
  doThis,
  why: 'This keeps early missions readable while you learn objectives, leaders, cover, and faction resource pressure.',
}));

export default function MechanicusIITipsAndTricksPage() {
  return (
    <MechanicusIIArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Tips and Tricks"
      heroImage={mechanicusIIImages.screenshot3}
      heroAlt="Warhammer 40,000 Mechanicus II tips and tactical combat image"
      faqs={faqs}
      showSources={false}
    >
      <SearchAnswerPanel
        title="What should new Mechanicus II players do first?"
        answer="Pick one campaign, protect named leaders, use cover every turn, check green consoles or marked tiles before assuming a mission is stuck, and keep faction resources stable before chasing aggressive damage builds."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="First Tactical Rule">
        <p>
          <strong>Survive the next enemy activation before optimizing damage.</strong>{' '}
          Mechanicus II rewards clean positioning, objective reading, and
          resource discipline more than one greedy attack.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2 id="first-hour">First-Hour Tips</h2>
        <ArticleImage
          src={mechanicusIIImages.screenshot3}
          alt="Warhammer 40,000 Mechanicus II first hour tactical tips"
          caption="The first hour should teach cover, turn order, objective markers, leader safety, and faction resource pressure."
        />
      </section>

      <ActionTable rows={firstHourActionRows} />

      <section className="prose-game">
        <h2 id="objective-clues">Green Consoles, Marked Tiles, and Objective Clues</h2>
        <p>
          If a mission does not advance, look for the battlefield clue before
          restarting. Move a suitable unit near highlighted tiles, green
          consoles, or objective objects, then check whether the interaction
          appears only at close range.
        </p>
      </section>

      <section className="prose-game">
        <h2 id="stuck-checklist">Stuck Checklist</h2>
      </section>

      <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Check</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">What to do</th>
            </tr>
          </thead>
          <tbody>
            {stuckRows.map(([check, action]) => (
              <tr key={check} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{check}</td>
                <td className="px-4 py-3 text-muted-foreground">{action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2 id="early-mistakes">Early Mistakes to Avoid</h2>
        <ArticleImage
          src={mechanicusIIImages.screenshot4}
          alt="Warhammer 40,000 Mechanicus II early mission mistake checklist"
          caption="Most early losses come from exposed leaders, open-ground attacks, resource waste, or missed objective interactions."
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
            {mistakeRows.map(([mistake, reason]) => (
              <tr key={mistake} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{mistake}</td>
                <td className="px-4 py-3 text-muted-foreground">{reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>Where to Go Next</h2>
        <p>
          Use the <Link href="/games/mechanicus-ii/best-units-builds">best units and builds guide</Link>{' '}
          when you need role-based squads, the{' '}
          <Link href="/games/mechanicus-ii/missions-walkthrough">missions walkthrough</Link>{' '}
          when an objective blocks progress, and the{' '}
          <Link href="/games/mechanicus-ii/factions">factions guide</Link>{' '}
          when you are choosing between Adeptus Mechanicus and Necrons.
        </p>
      </section>
    </MechanicusIIArticle>
  );
}
