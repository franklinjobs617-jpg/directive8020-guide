import { ArticleImage } from "@/components/article-media";
import { ActionTable, BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { ProjectMistArticle } from "@/components/project-mist-article";
import {
 createProjectMistMetadata,
 projectMistBossRows,
 projectMistImages,
} from "@/lib/project-mist";

const title = "Project: Mist Bosses & Giant Creatures Guide: Prep, Weak Points and Co-op";
const description =
 "Project: Mist boss and giant creature guide for Early Access: boss prep, Gravity Gun use, weak-point checks, co-op roles, ammo planning, and safe retries.";
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
 "Official store copy confirms giant creature and boss-style encounters, but exact boss counts and names should be treated as patch-sensitive until verified in the current build.",
 },
 {
 question: "What is the best boss strategy?",
 answer:
 "Prepare before entering: repair gear, carry healing, craft ammo, test the Gravity Gun, save manually, and identify whether the fight gives weak-point or environmental clues.",
 },
 {
 question: "How should co-op groups handle bosses?",
 answer:
 "Assign one player to pressure or distraction, one to damage windows, one to supplies or revives, and one to route awareness if the arena has hazards or adds.",
 },
 {
 question: "Are boss weaknesses final?",
 answer:
 "No. Project: Mist is Early Access, so boss behavior, weak points, damage values, and arena rules can change with patches.",
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
 <strong>Do not trust fake certainty on Early Access bosses.</strong>{" "}
 Use this page to prepare, read weak-point clues, assign co-op roles,
 and diagnose failed attempts. Exact boss names and values should be
 verified against the current build.
 </p>
 </BlufBox>

 <SearchAnswerPanel
 title="How should you prepare for Project: Mist bosses?"
 answer="Enter with repaired gear, healing, ammo, Gravity Gun options, a manual save, and a plan for reading weak points or arena clues before spending every resource."
 intentRows={searchIntentRows}
 jumpLinks={jumpLinks}
 />

 <section id="boss-prep">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Boss Preparation Checklist</h2>
 <ArticleImage
 src={projectMistImages.creatures}
 alt="Project: Mist giant creature preparation"
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

 <section id="weak-points" className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Weak-Point and Arena Clues</h2>
 <ArticleImage
 src={projectMistImages.gravityGun}
 alt="Project: Mist Gravity Gun boss arena clues"
 caption="Project: Mist's physics identity means boss arenas should be checked for objects, hazards, cover, and interactables, not only weak spots."
 />
 </section>

 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <tbody>
 {weakPointRows.map(([clue, check, reason]) => (
 <tr key={clue} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{clue}</th>
 <td className="px-4 py-3 text-muted-foreground">{check}</td>
 <td className="px-4 py-3 text-muted-foreground">{reason}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section id="creature-rules" className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Giant Creature Rules</h2>
 <p className="mb-4 leading-relaxed text-muted-foreground">
 Giant creatures in Project: Mist should be read as survival problems,
 not only health bars. A new player needs to survive the first pattern.
 A co-op group needs to avoid four people spending the same resource.
 A returning player needs to check whether a patch changed the route
 or arena. These rules keep the page useful even before every exact
 boss value is verified.
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
