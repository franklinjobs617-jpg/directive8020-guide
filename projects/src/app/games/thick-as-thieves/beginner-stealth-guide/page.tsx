import { ArticleImage } from '@/components/article-media';
import {
 ActionTable,
 BlufBox,
 SearchAnswerPanel,
 SourceCheckTable,
 StatusPanel,
} from '@/components/guide-blocks';
import { ThickAsThievesArticle } from '@/components/thick-as-thieves-article';
import {
 createThickAsThievesMetadata,
 tatStealthActionRows,
 tatStealthJumpLinks,
 tatStealthSearchIntent,
 tatStealthSourceRows,
 tatStealthStatusItems,
 thickAsThievesBeginnerRows,
 thickAsThievesImages,
} from '@/lib/thick-as-thieves';

const title = 'Thick As Thieves Beginner Stealth Guide: 5-Step Heist Plan, Gear Priority & Co-op Roles';
const description =
 'Thick As Thieves beginner stealth guide: 5-step heist walkthrough, gear priority table for early unlocks, route planning, gadgets, co-op roles, and launch-day tips.';
const canonical = '/games/thick-as-thieves/beginner-stealth-guide';

export const metadata = createThickAsThievesMetadata({
 title,
 description,
 canonical,
 image: thickAsThievesImages.beginner,
});

const faqs = [
 {
 question: 'How should beginners start Thick As Thieves?',
 answer:
 'Treat the first contract as a learning run: pause at the entry, identify patrol routes and cameras, then plan your exit path before chasing loot. Do not attempt a perfect score on the first try.',
 },
 {
 question: 'Should I play solo or co-op first?',
 answer:
 'Start solo to learn patrol patterns and sightlines without coordination overhead. Switch to co-op once you understand the basic route - a partner is most useful when you already know how the map flows.',
 },
 {
 question: 'Is Thick As Thieves more stealth or action?',
 answer:
 'Stealth first. The game rewards route knowledge, timing, and clean extraction over combat. Alerting guards quickly escalates - aborting early and resetting is better than fighting through the alert state.',
 },
 {
 question: 'What gear should beginners unlock first?',
 answer:
 'Prioritize information tools that reveal patrols and sightlines. Rescue tools come second for recovering from mistakes. Commitment tools for objectives are lowest priority until you know the routes.',
 },
];

const gearPriorityRows = [
 ['Information Tools (Priority 1)', 'Reveal patrol routes, camera cones, and guard positions before committing.', 'Prevents the most common beginner mistake: walking into an unknown room and triggering an alert.'],
 ['Recovery Tools (Priority 2)', 'Reset after an alarm, mask noise, or create a distraction to break guard focus.', 'Beginners will make mistakes. Recovery tools turn a failed attempt into a learning experience instead of a failed run.'],
 ['Commitment Tools (Priority 3)', 'Help secure objectives faster, pick locks, or disable security systems.', 'Only useful once you can reach the objective cleanly. A commitment tool with no information tool leads to forced errors.'],
 ['Co-op Support Gear (Variable)', 'Extra gear that helps a partner: shared sightlines, coordinated distractions, paired movement tools.', 'Value depends on whether you play with a regular partner. Solo players can skip co-op gear until they have the core loadout.'],
];

const heistSteps = [
 {
 step: 'Step 1: Scout the Perimeter',
 doThis: 'Before entering the building, walk the full exterior. Identify every door, window, and ledge. Note where guards patrol and how often they pass each entry point.',
 why: 'Most heists fail in the first 30 seconds because the thief chooses a bad entry. A full perimeter scout gives you 2-3 safe entry options instead of gambling on the first door you see.',
 },
 {
 step: 'Step 2: Mark Patrol Routes',
 doThis: 'Once inside, pause at the first piece of cover and watch one full patrol cycle. Note when guards overlap, where cameras sweep, and which paths are briefly unguarded.',
 why: 'Patrol timing is the core mechanic of Thick As Thieves. Knowing the 5-second gap between two guards turning is worth more than any gadget.',
 },
 {
 step: 'Step 3: Establish a Safe Reset Point',
 doThis: 'Identify a room or corner that is off the patrol path. Clear it of loot later. For now, mark it as your fallback position if an alarm triggers.',
 why: 'Every heist needs a safe zone. Knowing where to retreat prevents panic decisions that turn one mistake into a chain of alerts.',
 },
 {
 step: 'Step 4: Secure the Objective with an Exit Plan',
 doThis: 'Before grabbing the target item, confirm your extraction route is clear. If guards have moved since your scout, wait for the next patrol cycle.',
 why: 'Grabbing the objective is the most dangerous moment - guards converge on the target location. A clean exit beats a risky grab every time.',
 },
 {
 step: 'Step 5: Extract Cleanly or Abort Early',
 doThis: 'Leave the way you planned, not the way you came unless it is still safe. If an alarm sounds during extraction, abort to the reset point and wait for the alert to cool down.',
 why: 'Aborting early preserves your gear and the mission progress. One clean reset beats a noisy extraction that fails at the last door.',
 },
];

export default function ThickAsThievesBeginnerPage() {
 return (
 <ThickAsThievesArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Beginner Stealth Guide"
 heroImage={thickAsThievesImages.beginner}
 heroAlt="Thick As Thieves beginner stealth guide image"
 faqs={faqs}
 >
 <BlufBox title="First-Heist Rule">
 <p>
 <strong>Plan the exit before you chase the prize.</strong> Thick As
 Thieves rewards route knowledge over reflexes. A 30-second scout at
 the entry prevents a 10-minute recovery inside. Treat every contract
 as a puzzle to be read, not a room to be rushed.
 </p>
 </BlufBox>

 <SearchAnswerPanel
 title="Thick As Thieves Beginner Stealth Quick Answer"
 answer="Treat the first contract as a scouting run: read sightlines, plan the exit, then commit to the objective. Use slow movement, identify patrols and cameras, and abort early on alert chain. Unlock information tools first, recovery tools second, commitment tools last."
 intentRows={tatStealthSearchIntent}
 jumpLinks={tatStealthJumpLinks}
 />

 <StatusPanel items={tatStealthStatusItems} />

 <section id="first-run-mindset" className="prose-game">
 <ArticleImage
 src={thickAsThievesImages.tatStealth || thickAsThievesImages.beginner}
 alt="Thick As Thieves first-run stealth mindset"
 caption="Your first run should create information, not a perfect score. Learn how rooms communicate risk before optimizing loot."
 />
 <p>
 Thick As Thieves is a stealth routing game. The best players are not
 the fastest - they are the ones who read patrols, plan exits, and
 abort early when the plan breaks. Use the 5-step heist plan below
 to build consistent habits from your first contract.
 </p>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Priority</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">How to play it</th>
 </tr>
 </thead>
 <tbody>
 {thickAsThievesBeginnerRows.map(([priority, habit]) => (
 <tr key={priority} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{priority}</th>
 <td className="px-4 py-3 text-muted-foreground">{habit}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2 id="five-step-heist">5-Step Heist Guide</h2>
 <ArticleImage
 src={thickAsThievesImages.tatHeist || thickAsThievesImages.screenshot3}
 alt="Thick As Thieves 5-step heist guide"
 caption="Every heist follows the same 5-step structure: scout, mark, reset, secure, extract. Master the process, and every contract becomes predictable."
 />
 <ActionTable rows={heistSteps} />
 </section>

 <section className="prose-game">
 <h2 id="gear-priority">Gear & Gadget Priority Table</h2>
 <ArticleImage
 src={thickAsThievesImages.tatGear || thickAsThievesImages.gear}
 alt="Thick As Thieves gear priority guide"
 caption="Unlock order matters: information tools first, recovery tools second, commitment tools last. This order maximizes your success rate on early contracts."
 />
 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Gear Category</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Role in a Heist</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why This Priority</th>
 </tr>
 </thead>
 <tbody>
 {gearPriorityRows.map(([category, role, why]) => (
 <tr key={category} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{category}</td>
 <td className="px-4 py-3 text-muted-foreground">{role}</td>
 <td className="px-4 py-3 text-muted-foreground">{why}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </section>

 <section className="prose-game">
 <h2 id="route-before-loot">Route Before Loot</h2>
 <ArticleImage
 src={thickAsThievesImages.screenshot3}
 alt="Thick As Thieves route before loot"
 caption="Optional loot becomes safe only after you know how to leave with it."
 />
 <p>
 Before touching the objective, ask three questions:
 </p>
 <ol>
 <li><strong>Where did I enter?</strong> Is that path still safe, or have guards moved?</li>
 <li><strong>Where can I hide?</strong> Identify 2-3 dark corners or closets off the patrol path.</li>
 <li><strong>How will I leave if the room changes?</strong> Guards shift positions after an alarm. Have a backup exit.</li>
 </ol>
 <p>
 If you cannot answer all three, you are still scouting. Do not commit
 to the objective until you have a clean exit plan.
 </p>

 <h2 id="coop-beginner-roles">Co-op Beginner Roles</h2>
 <ArticleImage
 src={thickAsThievesImages.screenshot6}
 alt="Thick As Thieves co-op roles"
 caption="A partner is most useful when one player watches timing and exits while the other handles the risky interaction."
 />
 <p>
 In co-op, the most common beginner mistake is both players doing the
 same thing. Instead, divide the heist into two roles:
 </p>
 <ul>
 <li><strong>Watcher:</strong> Calls patrol timing, marks guard positions, and gives the abort signal. Stays near the exit.</li>
 <li><strong>Operator:</strong> Commits to the objective only when the Watcher confirms the route is clear. Handles the risky interaction.</li>
 <li><strong>Both:</strong> Agree on the exit plan before any optional loot detours. If the Operator triggers an alarm, the Watcher calls the abort immediately.</li>
 </ul>
 </section>

 <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">5-Step Beginner Plan</h2>
 <ActionTable rows={tatStealthActionRows} />

 <SourceCheckTable title="Thick As Thieves Beginner Sources" rows={tatStealthSourceRows} />
 </ThickAsThievesArticle>
 );
}
