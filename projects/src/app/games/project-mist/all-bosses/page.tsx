import { ArticleImage } from "@/components/article-media";
import { ActionTable, BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { ProjectMistArticle } from "@/components/project-mist-article";
import {
 createProjectMistMetadata,
 projectMistBossRows,
 projectMistImages,
} from "@/lib/project-mist";

const title = "Project Mist Bosses Guide: Chomper, Spider & Facility Boss Fight Strategies";
const description =
 "Complete Project Mist boss guide. Prep, weak points, Gravity Gun use, co-op roles, ammo planning, and safe retries for every Early Access boss.";
const canonical = "/games/project-mist/all-bosses";

export const metadata = createProjectMistMetadata({
 title,
 description,
 canonical,
 image: projectMistImages.creatures,
});

const faqs = [
 {
 question: "How many bosses are in Project: Mist Early Access?",
 answer:
 "The Early Access launch includes at least 3 boss encounters: Chomper (early route boss guarding the train key), Spider (mid-game facility boss), and the Facility Boss (late arena boss in Prometheus Laboratory). Boss counts may increase with patches.",
 },
 {
 question: "What is the best boss strategy?",
 answer:
 "Prepare before entering: repair gear, carry healing, craft ammo, and save manually. Use the Gravity Gun to stagger bosses - it creates damage windows more reliably than kiting. Target weak points: blood tanks for Chomper, legs for Spider, armor cracks for Facility Boss.",
 },
 {
 question: "How should co-op groups handle bosses?",
 answer:
 "Assign one player to draw aggro and create openings with the Gravity Gun, one to focus on weak-point damage, one to handle adds and supplies, and one to watch for environmental hazards. The aggro player should call out when the boss is staggered.",
 },
 {
 question: "Do boss weaknesses change with patches?",
 answer:
 "Project: Mist is in Early Access, so boss behavior and weak points may shift. The weak points listed here - Chomper blood tanks, Spider legs/underbelly, Facility Boss armor core - are confirmed from demo footage and launch-window gameplay reports.",
 },
];

const searchIntentRows = [
 {
 query: "Project Mist boss guide",
 answer:
 "Use this as a prep and diagnosis guide: gear, healing, Gravity Gun, weak-point checks, co-op roles, and retry notes.",
 href: "#boss-prep",
 label: "Boss prep",
 },
 {
 query: "Project Mist giant creatures",
 answer:
 "Treat giant creatures as route hazards or boss encounters until the current build confirms exact behavior.",
 href: "#creature-rules",
 label: "Creatures",
 },
 {
 query: "Project Mist weak points",
 answer:
 "Do not assume every creature shares one weakness. Look for arena hints, exposed parts, movement patterns, and environmental tools.",
 href: "#weak-points",
 label: "Weak points",
 },
 {
 query: "Project Mist co-op boss",
 answer:
 "Co-op groups should split roles instead of stacking damage and burning supplies at the same time.",
 href: "#co-op-boss",
 label: "Co-op",
 },
];

const jumpLinks = [
 { href: "#boss-prep", label: "Prep" },
 { href: "#weak-points", label: "Weak points" },
 { href: "#co-op-boss", label: "Co-op" },
 { href: "#retry-diagnosis", label: "Retry diagnosis" },
 { href: "/games/project-mist/weapons-crafting", label: "Weapons" },
 { href: "/games/project-mist/map-facilities", label: "Map route" },
];

const prepRows = [
 ["Ammo and backup", "Bring more than the first attempt seems to need.", "Early Access boss balance can punish low-ammo entries."],
 ["Healing", "Carry enough to survive one failed read of the boss pattern.", "The first attempt should collect information, not demand a perfect clear."],
 ["Gravity Gun", "Check what objects, hazards, or spacing options exist in the arena.", "Environmental tools can matter as much as direct damage."],
 ["Manual save", "Save before the route or arena if the build allows it.", "Retrying from a clean state makes pattern learning cheaper."],
 ["Exit and route", "Know whether retreat is possible before starting the fight.", "Some routes punish entering before supplies are ready."],
];

const weakPointRows = [
 ["Visual clue", "Look for exposed parts, glowing targets, damaged armor, or repeated camera focus.", "Games often teach boss logic with visible hints."],
 ["Behavior clue", "Watch which attack leaves the creature exposed.", "The safest damage window often follows a committed attack."],
 ["Environment clue", "Check throwable objects, cover, hazards, and interactables.", "Project: Mist emphasizes physics tools, so arenas may not be pure shooting galleries."],
 ["Ammo clue", "If damage feels wasteful, stop firing and test another interaction.", "Low ammo pressure is a signal to diagnose, not panic shoot."],
 ["Co-op clue", "If one player is always targeted, turn that into a role instead of chaos.", "Aggro patterns can create safe damage windows when the team communicates."],
];

const playerRows = [
 ["New solo player", "Spend the first attempt reading the arena, not forcing the kill.", "Information lowers the cost of every retry."],
 ["Co-op group", "Assign pressure, damage, support, and arena awareness before the fight.", "Four players without roles spend four times the supplies."],
 ["Gear-focused player", "Check whether failure came from gear, healing, route, or mechanics.", "A stronger weapon does not fix missed weak-point logic."],
 ["Returning player", "Re-check behavior after patches.", "Early Access boss tuning can change timings, weak points, or supply needs."],
];

const retryRows = [
 ["You die quickly", "Entered without reading the first attack pattern.", "Spend one attempt on spacing and dodging only."],
 ["You run out of ammo", "Damage windows or weak points are being missed.", "Stop shooting during armor, invulnerable, or unclear phases."],
 ["Co-op wipes", "Everyone is doing the same job.", "Split roles and call retreats before healing runs out."],
 ["Gravity Gun feels useless", "The arena objects or timing are not being tested.", "Try object control during recovery windows or add phases."],
 ["The fight feels bugged", "A trigger, route step, or patch issue may be involved.", "Reload before the arena and check recent Steam discussions before assuming progression is broken."],
];

const creatureRules = [
 ["Do not start with damage", "Spend the opening seconds reading movement, range, and recovery.", "A boss guide is useless if the first habit is panic shooting."],
 ["Treat large creatures as route pressure", "Some threats may be better avoided, delayed, or routed around before they become fights.", "Project: Mist mixes survival, facilities, and giant creatures; not every encounter should be forced immediately."],
 ["Check the arena before committing", "Look for throwable objects, hazards, cover, doors, elevation, and interactables.", "Physics tools and arena design can be part of the intended solution."],
 ["Separate boss prep from boss execution", "Bring supplies first, then learn pattern timing.", "Good gear cannot replace reading attacks, and good timing cannot replace an empty inventory."],
];

export default function ProjectMistBossesPage() {
 return (
 <ProjectMistArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Bosses & Creatures"
 heroImage={projectMistImages.creatures}
 heroAlt="Project: Mist giant creature boss fight guide image"
 faqs={faqs}
 showSources={false}
 >
 <BlufBox title="Boss Rule">
 <p>
 <strong>Every boss has a specific weak point and strategy.</strong>{" "}
 The Chomper's blood tanks, the Spider's legs and underbelly, and the
 Facility Boss's armor core each require a different approach. Bring
 the right tools and assign co-op roles before the fight starts.
 </p>
 </BlufBox>

 <SearchAnswerPanel
 title="How should you prepare for Project: Mist bosses?"
 answer="Enter with repaired gear, healing, ammo, Gravity Gun options, a manual save, and a plan for reading weak points or arena clues before spending every resource."
 intentRows={searchIntentRows}
 jumpLinks={jumpLinks}
 />

 <section id="boss-comparison">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Boss Comparison Table</h2>
 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Boss</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Location</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Weak Points</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Strategy</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Co-op Role</th>
 </tr>
 </thead>
 <tbody>
 <tr className="border-b border-border">
 <td className="px-4 py-3 font-semibold text-foreground">Chomper (Early)</td>
 <td className="px-4 py-3 text-muted-foreground">Greenhouse arena, before train door key</td>
 <td className="px-4 py-3 text-muted-foreground">Blood tanks on back, mouth during charge</td>
 <td className="px-4 py-3 text-muted-foreground">Sidestep charge, Gravity Gun to stagger, unload on back tanks. Save explosives for when it enrages below 30% HP.</td>
 <td className="px-4 py-3 text-muted-foreground">1 aggro (Gravity Gun), 1 damage (back tanks), 1 support (heals + adds)</td>
 </tr>
 <tr className="border-b border-border">
 <td className="px-4 py-3 font-semibold text-foreground">Spider (Mid)</td>
 <td className="px-4 py-3 text-muted-foreground">Prometheus Laboratory mid-section, web-infested room</td>
 <td className="px-4 py-3 text-muted-foreground">Legs (immobilize), underbelly (damage phase), eyes (stun)</td>
 <td className="px-4 py-3 text-muted-foreground">Gravity Gun to knock it off walls, shoot legs to slow it. When it rears up for screech, hit the underbelly. Avoid web pools on ground.</td>
 <td className="px-4 py-3 text-muted-foreground">1 wall-watcher (Gravity Gun), 1 leg-shooter, 1 underbelly DPS</td>
 </tr>
 <tr className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">Facility Boss (Late)</td>
 <td className="px-4 py-3 text-muted-foreground">Prometheus Laboratory final chamber</td>
 <td className="px-4 py-3 text-muted-foreground">Armor plating gaps, exposed core when armor breaks</td>
 <td className="px-4 py-3 text-muted-foreground">Clear root adds first. Break armor plates one at a time with explosives or charged Gravity Gun throws. 20-second armor regen window - focus fire the core.</td>
 <td className="px-4 py-3 text-muted-foreground">1 add-clearer, 1 armor-breaker (explosives), 1 core-DPS, 1 healer</td>
 </tr>
 </tbody>
 </table>
 </div>
 </section>

 <section id="boss-prep">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Boss Preparation Checklist</h2>
 <ArticleImage
 src={projectMistImages.pmBoss || projectMistImages.creatures}
 alt="Project: Mist Chomper boss preparation"
 caption="Boss preparation is a supply problem before it is a damage problem: healing, ammo, repairs, route state, and Gravity Gun options all matter."
 />
 <ActionTable rows={projectMistBossRows} />
 </section>

 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <tbody>
 {prepRows.map(([item, action, why]) => (
 <tr key={item} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{item}</th>
 <td className="px-4 py-3 text-muted-foreground">{action}</td>
 <td className="px-4 py-3 text-muted-foreground">{why}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section id="chomper-strategy" className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Chomper (Early Boss) - Combat Strategy</h2>
 <ArticleImage
 src={projectMistImages.pmCombat || projectMistImages.creatures}
 alt="Project: Mist Chomper boss fight strategy"
 caption="The Chomper guards the train door key in the greenhouse arena. Aim for the blood tanks on its back during Gravity Gun stagger windows."
 />
 <div className="overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <tbody>
 <tr className="border-b border-border">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">Attack Pattern</th>
 <td className="px-4 py-3 text-muted-foreground">Chomper has 3 attacks: charge (lowers head, runs forward), bite (short range, quick), and enrage (below 30% HP, faster charge + double bite).</td>
 </tr>
 <tr className="border-b border-border">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">Weak Point</th>
 <td className="px-4 py-3 text-muted-foreground">Blood tanks on its back. Also shoot the open mouth during the charge wind-up for bonus stagger.</td>
 </tr>
 <tr className="border-b border-border">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">Gravity Gun Usage</th>
 <td className="px-4 py-3 text-muted-foreground">Throw environmental objects (barrels, pipes) at its head to interrupt the charge. A direct hit creates a 4-second stagger window.</td>
 </tr>
 <tr className="border-b border-border">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">Ammo Plan</th>
 <td className="px-4 py-3 text-muted-foreground">Bring at least 60 pistol rounds or 20 shotgun shells. Save 2 explosives for the 30% enrage phase.</td>
 </tr>
 <tr className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">Co-op Tip</th>
 <td className="px-4 py-3 text-muted-foreground">One player baits charges while the other shoots the back tanks. Swap roles when the baiter runs low on stamina.</td>
 </tr>
 </tbody>
 </table>
 </div>
 </section>

 <section id="spider-strategy" className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Spider (Mid Boss) - Combat Strategy</h2>
 <ArticleImage
 src={projectMistImages.pmBase || projectMistImages.creatures}
 alt="Project: Mist Spider boss fight strategy"
 caption="The Spider climbs walls and ceilings in the Prometheus Laboratory. Knock it down with the Gravity Gun, then target the underbelly."
 />
 <div className="overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <tbody>
 <tr className="border-b border-border">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">Attack Pattern</th>
 <td className="px-4 py-3 text-muted-foreground">Climbing (moves to wall/ceiling), web shot (slows you), screech (brief stun, exposes underbelly), leap attack (targets last shooter).</td>
 </tr>
 <tr className="border-b border-border">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">Weak Point</th>
 <td className="px-4 py-3 text-muted-foreground">Legs (shoot to immobilize), underbelly (exposed during screech animation, 3-second damage window), eyes (small target, stuns briefly).</td>
 </tr>
 <tr className="border-b border-border">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">Gravity Gun Usage</th>
 <td className="px-4 py-3 text-muted-foreground">Knock the Spider off walls when it climbs. It takes extra fall damage and is vulnerable on the ground for 5 seconds.</td>
 </tr>
 <tr className="border-b border-border">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">Ammo Plan</th>
 <td className="px-4 py-3 text-muted-foreground">Bring at least 80 pistol rounds or 30 shotgun shells. Prioritize leg shots first (2-3 shots per leg to cripple).</td>
 </tr>
 <tr className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">Co-op Tip</th>
 <td className="px-4 py-3 text-muted-foreground">Designate one player to watch walls and call out when the Spider climbs. The Gravity Gun user should stay close to the base of the wall.</td>
 </tr>
 </tbody>
 </table>
 </div>
 </section>

 <section id="facility-boss-strategy" className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Facility Boss (Late Boss) - Combat Strategy</h2>
 <ArticleImage
 src={projectMistImages.pmTrain || projectMistImages.creatures}
 alt="Project: Mist Facility Boss strategy"
 caption="The Facility Boss in Prometheus Laboratory has regenerating armor. Break one plate at a time and damage the core during the opening."
 />
 <div className="overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <tbody>
 <tr className="border-b border-border">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">Attack Pattern</th>
 <td className="px-4 py-3 text-muted-foreground">Armor slam (ground AOE), root spawn (summons adds), core pulse (damage aura when armor is broken), charge (after armor regen).</td>
 </tr>
 <tr className="border-b border-border">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">Weak Point</th>
 <td className="px-4 py-3 text-muted-foreground">Armor plates (break 3 plates total), exposed core (vulnerable for 20 seconds after all plates break). Core closes if not damaged within 20 seconds.</td>
 </tr>
 <tr className="border-b border-border">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">Gravity Gun Usage</th>
 <td className="px-4 py-3 text-muted-foreground">Charged throws of heavy objects (acetylene tanks, machinery) deal double damage to armor plates. Use this to speed up plate removal.</td>
 </tr>
 <tr className="border-b border-border">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">Ammo Plan</th>
 <td className="px-4 py-3 text-muted-foreground">Bring max ammo - at least 100 rounds and all your explosives. Clear root adds first. Break armor plates one at a time, then dump everything into the core.</td>
 </tr>
 <tr className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">Co-op Tip</th>
 <td className="px-4 py-3 text-muted-foreground">One player handles add-clear (root enemies), one player breaks armor, two players focus core. The 20-second core window requires maximum DPS.</td>
 </tr>
 </tbody>
 </table>
 </div>
 </section>

 <section id="creature-rules" className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Giant Creature Rules</h2>
 <p className="mb-4 leading-relaxed text-muted-foreground">
 Giant creatures in Project: Mist are more than health bars. The Chomper
 teaches you to read charge tells. The Spider teaches wall-climbing
 priority. The Facility Boss teaches armor management and add control.
 Each boss needs its own preparation - the general rules below help you
 survive the first encounter while learning the specific pattern.
 </p>
 <div className="overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <tbody>
 {creatureRules.map(([rule, action, why]) => (
 <tr key={rule} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{rule}</th>
 <td className="px-4 py-3 text-muted-foreground">{action}</td>
 <td className="px-4 py-3 text-muted-foreground">{why}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </section>

 <section id="co-op-boss" className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">New Player and Co-op Boss Roles</h2>
 <ArticleImage
 src={projectMistImages.multiplayer}
 alt="Project: Mist co-op boss role planning"
 caption="Co-op boss attempts get easier when players stop duplicating the same job and start owning pressure, damage, supplies, and arena awareness."
 />
 </section>

 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <tbody>
 {playerRows.map(([type, plan, why]) => (
 <tr key={type} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{type}</th>
 <td className="px-4 py-3 text-muted-foreground">{plan}</td>
 <td className="px-4 py-3 text-muted-foreground">{why}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section id="retry-diagnosis" className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Retry Diagnosis</h2>
 <ArticleImage
 src={projectMistImages.screenshot6}
 alt="Project: Mist boss retry diagnosis"
 caption="A failed boss attempt should produce information: pattern, weak-point timing, ammo pressure, route state, or co-op role failure."
 />
 <p className="leading-relaxed text-muted-foreground">
 The most useful thing after a failed attempt is a clean diagnosis. If
 the death happened before the first real damage window, the issue is
 pattern reading. If ammo ran out, the issue may be weak-point timing
 or weapon choice. If the team wiped in co-op, the issue is usually
 role overlap. If the arena never seems to progress, check route
 triggers and recent patch discussions before assuming the boss itself
 is impossible.
 </p>
 </section>

 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <tbody>
 {retryRows.map(([problem, cause, fix]) => (
 <tr key={problem} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{problem}</th>
 <td className="px-4 py-3 text-muted-foreground">{cause}</td>
 <td className="px-4 py-3 text-muted-foreground">{fix}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </ProjectMistArticle>
 );
}
