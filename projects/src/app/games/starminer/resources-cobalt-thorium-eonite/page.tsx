import { ArticleImage } from '@/components/article-media';
import { BlufBox, SearchAnswerPanel } from '@/components/guide-blocks';
import { StarminerArticle } from '@/components/starminer-article';
import { createStarminerMetadata, starminerImages } from '@/lib/starminer';

const title = 'Starminer Resources Guide: Cobalt, Thorium, Eonite & Mining';
const description =
  'Starminer resources guide for cobalt, thorium, eonite, silicates, iron, water ice, mining priorities, selling, research, reactors, and repairs.';
const canonical = '/games/starminer/resources-cobalt-thorium-eonite';

export const metadata = createStarminerMetadata({
  title,
  description,
  canonical,
  image: starminerImages.mining,
});

const faqs = [
  {
    question: 'Where do you get cobalt in Starminer?',
    answer:
      'Treat cobalt as a higher-value mining target tied to debris fields and C-class asteroid planning. Scout resource nodes before building a permanent extraction loop.',
  },
  {
    question: 'Should I sell thorium in Starminer?',
    answer:
      'Thorium can be valuable, but do not auto-sell every unit. Keep some for reactor and expansion needs before converting surplus into credits.',
  },
  {
    question: 'What is eonite used for in Starminer?',
    answer:
      'Use eonite as a later planning resource until your save confirms the exact module or upgrade bottleneck. Do not spend rare materials without a build goal.',
  },
  {
    question: 'What resources should beginners mine first?',
    answer:
      'Start with basic construction and power materials, then move into cobalt, thorium, and rarer resources after storage, refining, and defense are stable.',
  },
  {
    question: 'Is this a final resource database?',
    answer:
      'No. Starminer is Early Access, so this page focuses on resource decisions and route planning rather than claiming every final node location.',
  },
];

const searchIntentRows = [
  {
    query: 'Starminer cobalt',
    answer:
      'Prioritize cobalt after basic construction is stable because it supports income, research planning, and higher-value mining routes.',
    href: '#cobalt',
    label: 'Cobalt',
  },
  {
    query: 'Starminer thorium',
    answer:
      'Thorium is high-value, but reserve some for reactor and expansion needs before selling surplus.',
    href: '#thorium',
    label: 'Thorium',
  },
  {
    query: 'Starminer eonite',
    answer:
      'Treat eonite as a rare-resource bottleneck. Stockpile until your tech or module plan proves where it is needed.',
    href: '#eonite',
    label: 'Eonite',
  },
  {
    query: 'Starminer resources',
    answer:
      'Mine by bottleneck: construction first, power second, income third, rare materials after storage and defense can support them.',
    href: '#resource-priority',
    label: 'Priority',
  },
];

const jumpLinks = [
  { href: '#resource-priority', label: 'Priority' },
  { href: '#cobalt', label: 'Cobalt' },
  { href: '#thorium', label: 'Thorium' },
  { href: '#eonite', label: 'Eonite' },
  { href: '/games/starminer/make-money', label: 'Money' },
  { href: '/games/starminer/mining-logistics', label: 'Logistics' },
];

const resourceRows = [
  ['Iron / base metals', 'Construction, repairs, early modules', 'Mine first because every station plan depends on cheap materials.'],
  ['Silicates / silicone chain', 'Research lab, electronics, production support', 'Keep a reserve before spending on optional expansion.'],
  ['Water ice', 'Support and survival-style logistics', 'Useful when longer routes and crew systems start to matter.'],
  ['Cobalt', 'Higher-value mining, research planning, early income', 'Scout and preserve access once basic mining is stable.'],
  ['Thorium', 'High-value sale target and reactor planning', 'Sell surplus only after saving fuel or upgrade reserves.'],
  ['Eonite', 'Rare-resource bottleneck and later tech planning', 'Stockpile until the exact module need is verified in your save.'],
];

const decisionRows = [
  ['You are broke', 'Sell surplus cobalt or thorium after keeping upgrade reserves.', 'Credits solve debt and early expansion, but selling every rare material can delay tech.'],
  ['Research is blocked', 'Check cobalt, silicone-chain materials, and Research Lab inputs.', 'Research bottlenecks are usually resource-mix problems, not only time problems.'],
  ['Reactors are blocked', 'Protect thorium and fuel-related materials before auto-selling.', 'Power shortages cascade into mining, defense, and logistics failures.'],
  ['Repairs are blocked', 'Reserve base metals before building new modules.', 'A bigger station that cannot repair itself is weaker than a smaller stable one.'],
  ['Storage is full', 'Refine, route, or sell by priority instead of dumping everything.', 'Full storage hides real shortages and stops production chains.'],
];

const routeRows = [
  ['Starter loop', 'Mine construction materials near the first station.', 'Keeps the base repairable and cheap to expand.'],
  ['Income loop', 'Scout cobalt and thorium nodes once storage and refining work.', 'Creates credits without starving the station core.'],
  ['Research loop', 'Route cobalt and silicone-chain resources toward labs.', 'Turns mining into module unlocks.'],
  ['Defense loop', 'Reserve power and repair materials before expanding heat.', 'More mining raises risk, so defense must follow income.'],
  ['Rare loop', 'Stockpile eonite and similar scarce materials until a module requires them.', 'Rare resources are easiest to waste before the tech path is clear.'],
];

const playerLevelRows = [
  ['New player', 'Mine cheap construction materials first, then build storage and refining.', 'A basic station that can repair itself is more valuable than early rare-resource chasing.'],
  ['Debt-focused player', 'Sell surplus cobalt and thorium only after reserving upgrade and reactor needs.', 'Credits matter, but selling the wrong reserve creates a bigger bottleneck later.'],
  ['Builder', 'Stockpile materials by planned module type instead of one giant mixed pile.', 'Large builds fail when power, repairs, or logistics are missing one small resource chain.'],
  ['Logistics player', 'Route resources by destination: storage, labs, reactors, repairs, trade.', 'Starminer rewards clean flows more than raw mining volume.'],
  ['Veteran optimizer', 'Measure whether mining, refining, hauling, or selling is the current limit.', 'The best resource route is the one that fixes the slowest part of the chain.'],
];

const bottleneckRows = [
  ['Mining output is high but credits are low', 'Storage or selling route is not converting surplus.', 'Add trade handling or sell only the resources that exceed reserve targets.'],
  ['Research stalls', 'The lab is missing a specific input rather than generic ore.', 'Route cobalt and silicone-chain materials to research before expanding ships.'],
  ['Station keeps losing power', 'Fuel or reactor planning is behind expansion.', 'Reserve thorium and power-chain materials before building more consumers.'],
  ['Repairs are constant', 'Heat, defense, or layout is creating more damage than income can support.', 'Pause expansion and fund repair materials before chasing rare nodes.'],
  ['Rare materials feel useless', 'The tech plan has not reached the module that consumes them.', 'Stockpile eonite instead of selling or spending it blindly.'],
];

export default function StarminerResourcesPage() {
  return (
    <StarminerArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Resources"
      heroImage={starminerImages.mining}
      heroAlt="Starminer asteroid mining and resource guide image"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="Which Starminer resources should you mine, keep, or sell?"
        answer="Mine basic construction materials first, stabilize storage and refining, then target cobalt and thorium for income and progression. Keep rare resources such as eonite until your tech path proves the exact module bottleneck."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Resource Rule">
        <p>
          <strong>Do not sell every valuable resource just because credits are low.</strong>{' '}
          Keep enough materials for research, reactors, repairs, and defense,
          then sell surplus.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2 id="resource-priority">Resource Priority Table</h2>
        <ArticleImage
          src={starminerImages.officialMining}
          alt="Starminer mining resource priority image"
          caption="The best resource is the one that fixes the current bottleneck: construction, power, research, income, or defense."
        />
      </section>
      <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Resource</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Use</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Decision rule</th>
            </tr>
          </thead>
          <tbody>
            {resourceRows.map(([resource, use, rule]) => (
              <tr key={resource} className="border-b border-border/30 last:border-0">
                <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{resource}</th>
                <td className="px-4 py-3 text-muted-foreground">{use}</td>
                <td className="px-4 py-3 text-muted-foreground">{rule}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2 id="cobalt">Cobalt: Income and Research Planning</h2>
        <p>
          Cobalt is the first resource worth treating as a named target because
          it shows up in player searches and early progression discussions.
          Do not chase it before your base can store, refine, defend, and
          transport what you mine.
          For new players, cobalt is a milestone: it means the station is ready
          to move beyond basic survival. For experienced players, cobalt is a
          routing question: whether it should feed research, trade, storage, or
          a specific module path.
        </p>

        <h2 id="thorium">Thorium: Sell Value vs Reactor Reserve</h2>
        <p>
          Thorium is tempting as a sale resource, but power planning is the
          hidden cost. Keep a reserve for reactors, expansion, or later module
          needs before converting the rest into credits.
          If the station is already power-starved, selling thorium is usually a
          false economy. If reactors and reserves are stable, selling a surplus
          can be correct because credits help clear debt and fund the next
          expansion cycle.
        </p>

        <h2 id="eonite">Eonite and Rare-Resource Discipline</h2>
        <p>
          Rare materials should be stockpiled until your current tech path
          proves the exact demand. The mistake is spending rare resources on an
          optional module, then discovering they block a stronger upgrade later.
          This is where veteran players gain value: they delay the decision
          until the build path is clear. That is better than pretending every
          rare resource has one universal best use in every save.
        </p>
      </section>

      <section className="prose-game">
        <h2>Keep or Sell Decision Matrix</h2>
        <ArticleImage
          src={starminerImages.logistics}
          alt="Starminer resource logistics and storage guide"
          caption="Resource value changes by situation: debt, research, power, repairs, storage, and defense all change what should be kept."
        />
      </section>
      <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Situation</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best move</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Reason</th>
            </tr>
          </thead>
          <tbody>
            {decisionRows.map(([situation, move, reason]) => (
              <tr key={situation} className="border-b border-border/30 last:border-0">
                <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{situation}</th>
                <td className="px-4 py-3 text-muted-foreground">{move}</td>
                <td className="px-4 py-3 text-muted-foreground">{reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>Mining Route Progression</h2>
        <ArticleImage
          src={starminerImages.officialFleet}
          alt="Starminer fleet mining route and resource planning"
          caption="Resource planning changes once ships, stations, labs, trade routes, and defenses all compete for the same materials."
        />
      </section>
      <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Route</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Focus</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why</th>
            </tr>
          </thead>
          <tbody>
            {routeRows.map(([route, focus, why]) => (
              <tr key={route} className="border-b border-border/30 last:border-0">
                <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{route}</th>
                <td className="px-4 py-3 text-muted-foreground">{focus}</td>
                <td className="px-4 py-3 text-muted-foreground">{why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>New Player vs Optimizer Resource Plans</h2>
        <ArticleImage
          src={starminerImages.station}
          alt="Starminer station resource storage and planning"
          caption="Beginners should stabilize the station. Optimizers should measure the bottleneck: mining, refining, hauling, research, power, repair, or selling."
        />
        <p>
          The same asteroid field can be correct or wrong depending on player
          stage. A beginner should value predictable construction and repair
          materials. A money-focused player should identify safe surplus. A
          builder should stockpile by module plan. A logistics player should
          route resources by destination. Treating all players the same is why
          many resource pages feel useful for five minutes and then stop
          helping.
        </p>
      </section>
      <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player type</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Resource plan</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why</th>
            </tr>
          </thead>
          <tbody>
            {playerLevelRows.map(([type, plan, why]) => (
              <tr key={type} className="border-b border-border/30 last:border-0">
                <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{type}</th>
                <td className="px-4 py-3 text-muted-foreground">{plan}</td>
                <td className="px-4 py-3 text-muted-foreground">{why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>Resource Bottleneck Diagnosis</h2>
        <p>
          A resource problem is rarely solved by mining everything harder. The
          broken link may be storage, refining, hauling, research, power,
          repairs, or trade. Use this table before rebuilding a ship or
          abandoning a resource route.
        </p>
      </section>
      <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Problem</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Likely bottleneck</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Fix</th>
            </tr>
          </thead>
          <tbody>
            {bottleneckRows.map(([problem, bottleneck, fix]) => (
              <tr key={problem} className="border-b border-border/30 last:border-0">
                <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{problem}</th>
                <td className="px-4 py-3 text-muted-foreground">{bottleneck}</td>
                <td className="px-4 py-3 text-muted-foreground">{fix}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </StarminerArticle>
  );
}
