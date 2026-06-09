import { ArticleImage } from '@/components/article-media';
import { BlufBox, SearchAnswerPanel } from '@/components/guide-blocks';
import { MechanicusIIArticle } from '@/components/mechanicus-ii-article';
import {
  createMechanicusIIMetadata,
  mechanicusIIFactionComparisonRows,
  mechanicusIIImages,
} from '@/lib/mechanicus-ii';

const title = 'Mechanicus II Leaders Guide: Faustinius, Nefershah & Safety';
const description =
  'Warhammer 40,000: Mechanicus II leaders guide for Faustinius, Nefershah, leader safety, death risk, faction resources, and first campaign choice.';
const canonical = '/games/mechanicus-ii/leaders-guide';

export const metadata = createMechanicusIIMetadata({
  title,
  description,
  canonical,
  image: mechanicusIIImages.screenshot1,
});

const faqs = [
  {
    question: 'Who are the main leaders in Mechanicus II?',
    answer:
      'Steam and official descriptions center the dual campaigns around Adeptus Mechanicus leadership and the Necron side, including Magos Dominus Faustinius and Vargard Nefershah.',
  },
  {
    question: 'Should I protect leaders in Mechanicus II?',
    answer:
      'Yes. Treat leaders as mission-critical until a mission proves otherwise. Losing or exposing a leader can cost more than losing a normal unit.',
  },
  {
    question: 'Which leader or faction should I play first?',
    answer:
      'Pick Adeptus Mechanicus first if you want the familiar tech-priest campaign rhythm. Pick Necrons first if the sequel appeal is playing the new opposing perspective.',
  },
  {
    question: 'Are Necron leaders different from Mechanicus leaders?',
    answer:
      'Yes. Necron play is tied to Dominion pressure and reanimation identity, while Adeptus Mechanicus play is tied to Cognition and tech-priest control.',
  },
  {
    question: 'Is this a final leader tier list?',
    answer:
      'No. Launch-window leader advice should focus on safety, resources, and faction role until completed campaign data and patch behavior are stable.',
  },
];

const searchIntentRows = [
  {
    query: 'Mechanicus 2 leaders',
    answer:
      'Treat leaders as campaign anchors: protect them, learn their faction resource, and avoid exposing them for greedy damage trades.',
    href: '#leader-rules',
    label: 'Leaders',
  },
  {
    query: 'Mechanicus 2 Necron leaders',
    answer:
      'Necron leader play should account for Dominion, reanimation pressure, and bodyguard positioning instead of copying Mechanicus habits.',
    href: '#necron-leaders',
    label: 'Necrons',
  },
  {
    query: 'Mechanicus 2 Faustinius',
    answer:
      'Use Faustinius as a safer first-campaign anchor if you want the more familiar Adeptus Mechanicus perspective.',
    href: '#faustinius',
    label: 'AdMech',
  },
  {
    query: 'Mechanicus 2 faction leaders',
    answer:
      'Leader choice is also a faction choice: Cognition and Dominion change how you read turns, safety, and resources.',
    href: '#campaign-choice',
    label: 'Faction',
  },
];

const jumpLinks = [
  { href: '#leader-rules', label: 'Leader rules' },
  { href: '#campaign-choice', label: 'Campaign choice' },
  { href: '#faustinius', label: 'Faustinius' },
  { href: '#necron-leaders', label: 'Necrons' },
  { href: '/games/mechanicus-ii/factions', label: 'Factions' },
  { href: '/games/mechanicus-ii/unit-tier-list', label: 'Units' },
];

const leaderRules = [
  ['Protect the leader first', 'Do not expose a leader just to finish one enemy.', 'Leader loss can create mission failure or a reset even if the trade looks good.'],
  ['Read faction resource before moving', 'Check Cognition or Dominion pressure before spending actions.', 'Leader value is tied to the faction economy, not only damage.'],
  ['Use cover and bodyguards', 'Move normal units first when they can reveal danger safely.', 'Specialists and leaders should not be the first object thrown into unknown range.'],
  ['Avoid split squads early', 'Keep leader support close until you know the map rhythm.', 'Separated leaders are harder to rescue after enemy activation.'],
  ['Diagnose failure honestly', 'Ask whether the loss came from leader exposure, resource spending, or objective misunderstanding.', 'This prevents repeating the same reset with a different unit.'],
];

const leaderRows = [
  ['Magos Dominus Faustinius', 'Adeptus Mechanicus anchor', 'Best first if you want continuity from the first Mechanicus and a methodical tech-priest campaign.'],
  ['Vargard Nefershah', 'Necron campaign anchor', 'Best first if you want the new playable side and are ready to learn Dominion and reanimation logic.'],
  ['Faction specialists', 'Mission support and resource pressure', 'Evaluate by how they keep leaders alive and stabilize the faction economy.'],
  ['Normal units', 'Bodyguards, objective runners, and damage tools', 'Their job is to protect the leader and make the next turn safer.'],
];

const mistakeRows = [
  ['Greedy leader attack', 'A leader moves into open ground for one kill.', 'Use a normal unit, delay the attack, or set cover first.'],
  ['Ignoring resource flow', 'Actions are spent without checking Cognition or Dominion needs.', 'Plan the turn around the resource bottleneck.'],
  ['Treating both factions the same', 'Necrons are played like cover-first Mechanicus units.', 'Adapt to Dominion, reanimation, and faction identity.'],
  ['Following a tier list blindly', 'A leader or unit is copied without matching mission, faction, or patch context.', 'Use role fit first, tier claims second.'],
];

const playerLevelRows = [
  ['New player', 'Keep leaders behind cover or bodyguards until the mission objective is clear.', 'Early losses usually come from exposing important units before reading turn order.'],
  ['Mechanicus 1 veteran', 'Do not assume the sequel rewards the same campaign habits.', 'Mechanicus II adds stronger leader framing, dual campaign identity, and different faction pressures.'],
  ['Necron-first player', 'Build turns around Dominion pressure and reanimation identity.', 'Necrons should not be played as a cover-first AdMech reskin.'],
  ['Tactics veteran', 'Evaluate leaders by action economy, objective safety, and resource stability.', 'Raw damage is only one part of leader value in a campaign tactics game.'],
  ['Completionist', 'Track which failures came from leader exposure, resource use, or objective triggers.', 'Clean notes help repeat missions with a better plan instead of a different guess.'],
];

const diagnosticRows = [
  ['Leader dies before the objective advances', 'The leader is acting before the map is understood.', 'Scout with safer units, identify interactables, then move the leader.'],
  ['You run out of faction resources', 'Cognition or Dominion is being treated as an afterthought.', 'Plan resource generation before spending on damage or movement.'],
  ['Necron turns feel weak', 'The squad is waiting too long to build Dominion pressure.', 'Advance with protection and use damage to start the faction economy.'],
  ['AdMech turns feel slow', 'The squad is not creating safe Cognition value.', 'Use positioning and support units to make resource flow predictable.'],
  ['Tier list advice fails', 'The recommendation does not match your mission, difficulty, or current patch.', 'Switch from tier labels to role needs: protection, objective, damage, or resource support.'],
];

export default function MechanicusIILeadersGuidePage() {
  return (
    <MechanicusIIArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Leaders Guide"
      heroImage={mechanicusIIImages.screenshot1}
      heroAlt="Warhammer 40,000 Mechanicus II leader bridge screenshot"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="How should you use leaders in Mechanicus II?"
        answer="Use leaders as protected campaign anchors, not disposable damage pieces. Pick your first side by faction resource and campaign identity, then build turns around leader safety, cover, bodyguards, and objective timing."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Leader Rule">
        <p>
          <strong>Leader safety beats one greedy attack.</strong> If a leader
          must leave cover, trigger an objective, or stand near threat range,
          ask what protects the next enemy activation before confirming the
          move.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2 id="leader-rules">Leader Rules for the First Campaign</h2>
        <ArticleImage
          src={mechanicusIIImages.screenshot3}
          alt="Mechanicus II tactical leader safety screenshot"
          caption="Leader mistakes usually come from exposure, resource waste, or objective confusion, not from raw unit stats alone."
        />
      </section>
      <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Rule</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Do this</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why</th>
            </tr>
          </thead>
          <tbody>
            {leaderRules.map(([rule, action, why]) => (
              <tr key={rule} className="border-b border-border/30 last:border-0">
                <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{rule}</th>
                <td className="px-4 py-3 text-muted-foreground">{action}</td>
                <td className="px-4 py-3 text-muted-foreground">{why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2 id="campaign-choice">Leader and Campaign Choice</h2>
        <ArticleImage
          src={mechanicusIIImages.screenshot2}
          alt="Mechanicus II Necron and Adeptus Mechanicus campaign leaders"
          caption="The leader question is also a campaign question: the two sides change resources, safety rules, and turn priorities."
        />
      </section>
      <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Leader or group</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Role</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best first reading</th>
            </tr>
          </thead>
          <tbody>
            {leaderRows.map(([leader, role, reading]) => (
              <tr key={leader} className="border-b border-border/30 last:border-0">
                <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{leader}</th>
                <td className="px-4 py-3 text-muted-foreground">{role}</td>
                <td className="px-4 py-3 text-muted-foreground">{reading}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2 id="faustinius">Faustinius and Adeptus Mechanicus Leaders</h2>
        <p>
          Adeptus Mechanicus is the safer first pick if you want continuity
          from the first game and a more familiar tech-priest control fantasy.
          Read every mission around Cognition, cover, and specialist safety.
          New players should avoid moving a leader first unless the tile,
          enemy range, and next activation are already understood. Experienced
          players can take sharper positions, but only when the move improves
          objective timing or resource flow instead of chasing one isolated
          kill.
        </p>

        <h2 id="necron-leaders">Nefershah and Necron Leaders</h2>
        <p>
          Necron leaders should not be played like a reskinned Mechanicus
          campaign. Dominion pressure, reanimation identity, and bodyguard
          positioning change how you trade damage and when you advance.
          The practical question is not whether Necrons are tougher. It is
          whether the leader can push pressure while still keeping a recovery
          path open if the enemy turn goes badly.
        </p>
      </section>

      <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Faction</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Leader context</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">First pick if</th>
            </tr>
          </thead>
          <tbody>
            {mechanicusIIFactionComparisonRows.slice(0, 2).map(([faction, context, fit]) => (
              <tr key={faction} className="border-b border-border/30 last:border-0">
                <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{faction}</th>
                <td className="px-4 py-3 text-muted-foreground">{context}</td>
                <td className="px-4 py-3 text-muted-foreground">{fit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>Common Leader Mistakes</h2>
        <ArticleImage
          src={mechanicusIIImages.screenshot4}
          alt="Mechanicus II battlefield leader mistake diagnosis"
          caption="Leader mistakes are easier to fix when you separate exposure, objective timing, resource spending, and faction identity."
        />
      </section>
      <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Mistake</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">What it looks like</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Fix</th>
            </tr>
          </thead>
          <tbody>
            {mistakeRows.map(([mistake, symptom, fix]) => (
              <tr key={mistake} className="border-b border-border/30 last:border-0">
                <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{mistake}</th>
                <td className="px-4 py-3 text-muted-foreground">{symptom}</td>
                <td className="px-4 py-3 text-muted-foreground">{fix}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>New Player vs Veteran Leader Priorities</h2>
        <ArticleImage
          src={mechanicusIIImages.screenshot5}
          alt="Mechanicus II leader customization and veteran planning"
          caption="New players need safety rules. Veteran tactics players need a way to judge whether leader risk improves the whole turn."
        />
        <p>
          This page is not trying to replace unit tier lists. It fills a
          different gap in the SERP: how leaders should be read by different
          player types. A new player needs clear safety rules. A returning
          Mechanicus player needs to avoid importing old habits blindly. A
          Necron-first player needs to learn the faction economy before judging
          the campaign. A tactics veteran needs a framework for deciding when a
          leader risk is worth taking.
        </p>
      </section>
      <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player type</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Leader priority</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why</th>
            </tr>
          </thead>
          <tbody>
            {playerLevelRows.map(([type, priority, why]) => (
              <tr key={type} className="border-b border-border/30 last:border-0">
                <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{type}</th>
                <td className="px-4 py-3 text-muted-foreground">{priority}</td>
                <td className="px-4 py-3 text-muted-foreground">{why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>Leader Failure Diagnosis</h2>
        <p>
          When a mission falls apart, do not only ask which unit is best. Ask
          what kind of failure happened. Leader pages from competitors often
          list names, but players need diagnosis: was the leader exposed, was
          the resource economy broken, was the objective misunderstood, or was
          the faction being played with the wrong assumptions?
        </p>
      </section>
      <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Symptom</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Likely cause</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Correction</th>
            </tr>
          </thead>
          <tbody>
            {diagnosticRows.map(([symptom, cause, correction]) => (
              <tr key={symptom} className="border-b border-border/30 last:border-0">
                <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{symptom}</th>
                <td className="px-4 py-3 text-muted-foreground">{cause}</td>
                <td className="px-4 py-3 text-muted-foreground">{correction}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MechanicusIIArticle>
  );
}
