import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { BlufBox, SearchAnswerPanel } from '@/components/guide-blocks';
import { MechanicusIIArticle } from '@/components/mechanicus-ii-article';
import {
  createMechanicusIIMetadata,
  mechanicusIIImages,
  mechanicusIIWalkthroughProblemRows,
  mechanicusIIWalkthroughRows,
} from '@/lib/mechanicus-ii';

const title = 'Mechanicus II Missions Walkthrough: Objectives, Consoles and Route Help';
const description =
  'Warhammer 40,000: Mechanicus II missions walkthrough for objective reading, green consoles, marked tiles, leader safety, failure diagnosis, faction resources, and campaign route help.';
const canonical = '/games/mechanicus-ii/missions-walkthrough';

export const metadata = createMechanicusIIMetadata({
  title,
  description,
  canonical,
  image: mechanicusIIImages.screenshot4,
});

const faqs = [
  {
    question: 'Is this a full mission list for Mechanicus II?',
    answer:
      'This page is a spoiler-light mission help page. Use it for objective flow, consoles, marked tiles, leader safety, and failed-attempt diagnosis while full mission routes settle.',
  },
  {
    question: 'What do I do when a mission will not progress?',
    answer:
      'Check objective wording, green consoles, highlighted tiles, interaction range, leader survival, specialist position, remaining enemies, and line of sight.',
  },
  {
    question: 'Should I restart a failed mission immediately?',
    answer:
      'First identify the failure cause: leader exposure, resource waste, objective misunderstanding, interactable range, or enemy activation order.',
  },
  {
    question: 'Can I use one walkthrough for both campaigns?',
    answer:
      'Use the same mission-reading habits, but remember that Adeptus Mechanicus and Necron campaigns have different resources, leaders, and tactical rhythms.',
  },
];

const searchIntentRows = [
  {
    query: 'Mechanicus II missions',
    answer: 'Read each mission by objective, leader role, interactable tiles, faction resource state, and enemy activation order.',
    href: '#mission-flow',
    label: 'Mission flow',
  },
  {
    query: 'Mechanicus II walkthrough',
    answer: 'Use a spoiler-light route: inspect objectives, test consoles, protect leaders, and diagnose failed attempts.',
    href: '#mission-flow',
    label: 'Walkthrough',
  },
  {
    query: 'Green console objective',
    answer: 'Move a suitable unit close enough to test interaction range before assuming the console is decorative or broken.',
    href: '#console-checks',
    label: 'Objectives',
  },
  {
    query: 'Mechanicus II mission stuck',
    answer: 'Check objective text, marked tiles, leader survival, specialists, line of sight, and remaining enemies before restarting.',
    href: '#stuck-routing',
    label: 'Stuck',
  },
];

const jumpLinks = [
  { href: '#mission-flow', label: 'Mission flow' },
  { href: '#console-checks', label: 'Consoles' },
  { href: '#stuck-routing', label: 'Stuck routing' },
  { href: '#campaign-routing', label: 'Campaign route' },
  { href: '/games/mechanicus-ii/walkthrough', label: 'Main walkthrough' },
  { href: '/games/mechanicus-ii/tips-and-tricks', label: 'Tips' },
];

const routingRows = [
  ['Before launch', 'Check campaign side, leader role, unit roles, resource state, and objective wording.'],
  ['Opening turn', 'Identify cover, hazards, interactable objects, enemy firing lanes, and safe trigger units.'],
  ['Objective phase', 'Move close to marked tiles or consoles and test interactions before ending the turn.'],
  ['Pressure phase', 'Protect the leader, preserve a useful action, and avoid greedy exposed attacks.'],
  ['Failed attempt', 'Record the exact cause before retrying so the next run fixes the real problem.'],
];

export default function MechanicusIIMissionsWalkthroughPage() {
  return (
    <MechanicusIIArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Missions Walkthrough"
      heroImage={mechanicusIIImages.screenshot4}
      heroAlt="Warhammer 40,000 Mechanicus II mission walkthrough battlefield image"
      faqs={faqs}
      showSources={false}
    >
      <SearchAnswerPanel
        title="How should you progress Mechanicus II missions?"
        answer="Treat every mission as a sequence of objective reading, leader protection, console or marked-tile checks, faction resource management, and failure diagnosis. Do not restart until you know whether the problem was positioning, interaction range, turn order, or a missed objective clue."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Mission Rule">
        <p>
          <strong>A stuck mission is usually a checklist problem first.</strong>{' '}
          Read the objective, test marked tiles, protect the required unit, and
          check line of sight before treating the map as broken.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2 id="mission-flow">Mission Flow Table</h2>
        <ArticleImage
          src={mechanicusIIImages.screenshot4}
          alt="Warhammer 40,000 Mechanicus II mission flow and objective route image"
          caption="Break missions into opening, objective, pressure, and failed-attempt phases so route problems become easier to fix."
        />
      </section>

      <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Mission moment</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">What to do</th>
            </tr>
          </thead>
          <tbody>
            {mechanicusIIWalkthroughRows.map(([moment, action]) => (
              <tr key={moment} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{moment}</td>
                <td className="px-4 py-3 text-muted-foreground">{action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2 id="console-checks">Green Console and Marked Tile Checks</h2>
        <p>
          Green consoles, marked tiles, and highlighted spaces should be tested
          before you spend your last safe action. Move the right unit close
          enough to interact, rotate the camera, and verify that the leader or
          required specialist is alive and in range.
        </p>
      </section>

      <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Route check</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Use it when</th>
            </tr>
          </thead>
          <tbody>
            {routingRows.map(([check, use]) => (
              <tr key={check} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{check}</td>
                <td className="px-4 py-3 text-muted-foreground">{use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2 id="stuck-routing">If a Mission Feels Stuck</h2>
      </section>

      <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Problem</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">First fix</th>
            </tr>
          </thead>
          <tbody>
            {mechanicusIIWalkthroughProblemRows.map(([problem, fix]) => (
              <tr key={problem} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{problem}</td>
                <td className="px-4 py-3 text-muted-foreground">{fix}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2 id="campaign-routing">Campaign Routing Advice</h2>
        <ArticleImage
          src={mechanicusIIImages.screenshot1}
          alt="Warhammer 40,000 Mechanicus II campaign route and leader safety image"
          caption="Stay with one campaign long enough to understand its leader, resource pressure, and mission rhythm before swapping sides."
        />
        <p>
          The same mission-reading habits help both campaigns, but the route
          pressure changes by faction. If you need role advice, use the{' '}
          <Link href="/games/mechanicus-ii/best-units-builds">best units and builds guide</Link>.
          If you need broad tactical habits, use{' '}
          <Link href="/games/mechanicus-ii/tips-and-tricks">tips and tricks</Link>.
        </p>
      </section>
    </MechanicusIIArticle>
  );
}
