import { ProjectMistArticle } from "@/components/project-mist-article";
import { ArticleImage } from "@/components/article-media";
import { BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import {
 createProjectMistMetadata,
 projectMistFacilityRows,
 projectMistImages,
 projectMistMapRouteRows,
} from "@/lib/project-mist";

const title = "Project: Mist Map & Facilities Guide: Train Route, Markers and Loot";
const description =
 "Project: Mist map guide for Early Access: train route, map markers, facilities, greenhouse, Prometheus Laboratory, loot rooms, and safe return planning.";
const canonical = "/games/project-mist/map-facilities";

export const metadata = createProjectMistMetadata({
 title,
 description,
 canonical,
 image: projectMistImages.facilities,
});

const faqs = [
 {
 question: "Does Project: Mist have a map?",
 answer:
 "Yes. Early route guidance uses map and compass markers, but this guide treats the map as route planning rather than a complete coordinate atlas.",
 },
 {
 question: "Where should I go first on the Project: Mist map?",
 answer:
 "Follow the opening markers toward Midway Bridge and the train, then use the train base as your route hub before deeper facility runs.",
 },
 {
 question: "What facilities matter early in Project: Mist?",
 answer:
 "The greenhouse and Prometheus Laboratory route matter early because they connect objectives, loot checks, crafting stations, hazards, and boss-gate progress.",
 },
 {
 question: "Is there an official Project: Mist interactive map?",
 answer:
 "No official interactive map is confirmed in the current Steam store data. Use in-game markers and treat third-party route notes as patch-sensitive.",
 },
 {
 question: "How should co-op groups handle facilities?",
 answer:
 "Send one player to track objectives, one to watch exits, one to handle loot, and one to control creature pressure before committing to deeper rooms.",
 },
];

const searchIntentRows = [
 {
 query: "Project Mist map",
 answer:
 "Use the map and compass markers to reach the train first, then plan facility trips from the train base instead of wandering blind.",
 href: "#route-order",
 label: "Route",
 },
 {
 query: "Project Mist facilities",
 answer:
 "Facilities are progression and loot hotspots. Enter with healing, ammo, lockpicking knowledge, and a known exit route.",
 href: "#facilities",
 label: "Loot",
 },
 {
 query: "Project Mist train location",
 answer:
 "The first clean route is wake-up room, Midway Bridge, train, mech part, greenhouse, then deeper facility progress.",
 href: "#train-base",
 label: "Train",
 },
 {
 query: "Project Mist greenhouse",
 answer:
 "Treat the greenhouse as an early facility run, not a casual side building. Prepare before pushing inside.",
 href: "#greenhouse",
 label: "Facility",
 },
];

const jumpLinks = [
 { href: "#route-order", label: "Route order" },
 { href: "#train-base", label: "Train base" },
 { href: "#facilities", label: "Facilities" },
 { href: "#greenhouse", label: "Greenhouse" },
 { href: "#co-op-map", label: "Co-op route" },
 { href: "/games/project-mist/train-door-key", label: "Train key" },
];

const routePlanningRows = [
 [
 "Before leaving a safe room",
 "Check objective text, supplies, healing, ammo, flashlight, quick slots, and save state.",
 "Bad route decisions are expensive when you have no storage loop yet.",
 ],
 [
 "Before entering a facility",
 "Mark the entrance, the exit, locked containers, crafting stations, and dangerous rooms.",
 "Facilities are useful, but getting trapped with low supplies turns loot into a liability.",
 ],
 [
 "Before returning to the train",
 "Convert materials, sort loot, repair, heal, and decide the next objective marker.",
 "The train base is the route reset point, not just decoration.",
 ],
 [
 "Before a boss gate",
 "Top up ammo, bring healing, check weak-point hints, and avoid starting the fight tired or overloaded.",
 "Early Access fights can punish unprepared exploration more than direct combat skill.",
 ],
];

const coOpRows = [
 [
 "Navigator",
 "Keeps map markers, objective order, and return path visible to the group.",
 ],
 [
 "Scout",
 "Checks side rooms, hazards, and locked containers without pulling the whole team forward.",
 ],
 [
 "Quartermaster",
 "Tracks ammo, healing, food, crafting materials, and what should return to the train.",
 ],
 [
 "Defender",
 "Controls creature pressure, watches exits, and calls retreats before the team overcommits.",
 ],
];

const playerLevelRows = [
 [
 "New solo player",
 "Follow objective markers, reach the train, and stop pushing when healing or ammo runs low.",
 "The first goal is to learn the route loop, not to clear every facility room.",
 ],
 [
 "Returning demo player",
 "Re-check route gates, save behavior, and facility order before assuming demo habits still work.",
 "Early Access builds can change objectives, bugs, and item placement.",
 ],
 [
 "Co-op group",
 "Assign navigation, scouting, loot tracking, and defense before entering the greenhouse or lab route.",
 "Groups fail when everyone moves forward and nobody owns retreat, supplies, or markers.",
 ],
 [
 "Completion-focused player",
 "Record locked rooms, upgrade stations, bosses, and missing key steps on each facility pass.",
 "A notes-first route prevents repeated full clears for one missed object.",
 ],
 [
 "Speed-focused player",
 "Skip optional rooms until train, mech part, greenhouse, and laboratory routing are stable.",
 "The fastest route is usually the one with fewer failed pushes and fewer forced reloads.",
 ],
];

const routeProblemRows = [
 [
 "You cannot find the train",
 "You are wandering before committing to the opening map and compass markers.",
 "Return to the objective route and use Midway Bridge as the early anchor.",
 ],
 [
 "The greenhouse feels too hard",
 "You entered it like a side building instead of a facility run.",
 "Bring healing, ammo, and a planned exit before pushing deeper.",
 ],
 [
 "The group keeps splitting",
 "No one owns navigation or retreat calls.",
 "Assign a navigator and make the train return point explicit before entering.",
 ],
 [
 "Facility loot feels random",
 "Rooms are being cleared without tracking containers, benches, stations, and locks.",
 "Use each run to map one category: loot, upgrades, locked rooms, or boss gates.",
 ],
 [
 "A key or gate seems missing",
 "A prior objective, boss, console, or route trigger may be incomplete.",
 "Check the train key guide and reload before treating it as a permanent bug.",
 ],
];

export default function ProjectMistMapFacilitiesPage() {
 return (
 <ProjectMistArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Map & Facilities"
 heroImage={projectMistImages.facilities}
 heroAlt="Project: Mist map and facilities route guide image"
 faqs={faqs}
 >
 <SearchAnswerPanel
 title="What is the best Project: Mist map route to follow first?"
 answer="Follow the early map and compass markers to the train, use the train as your route hub, then push into the mech-part, greenhouse, and Prometheus Laboratory path only after you have supplies and a return plan."
 intentRows={searchIntentRows}
 jumpLinks={jumpLinks}
 />

 <BlufBox title="Map Answer">
 <p>
 <strong>Do not treat the early map like a full open-world checklist.</strong>{" "}
 The high-ROI route is objective first: reach the train, stabilize your
 mobile base, then use facilities as planned runs for loot, crafting,
 upgrades, and progression.
 </p>
 </BlufBox>

 <section className="prose-game">
 <h2 id="route-order">Early Map Route Order</h2>
 <ArticleImage
 src={projectMistImages.firstSteps}
 alt="Project: Mist early map route order image"
 caption="The safest early route is objective-led: wake-up room, Midway Bridge, train, mech part, greenhouse, then deeper facility pressure."
 />
 <p>
 Project: Mist rewards route discipline more than random looting. The
 opening markers point you toward a survival loop: secure supplies,
 reach the train, solve the next route blocker, and only then spend
 time inside facilities. This page does not claim a final coordinate
 map because Early Access routes can change with patches.
 New players should treat the route as a tutorial for systems:
 objective tracking, safe returns, lockpicking, crafting, and boss
 gates. Experienced players should treat it as a repeatable route that
 can be shortened only after the dangerous rooms and exit points are
 understood.
 </p>
 </section>

 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Map stop</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">What to do there</th>
 </tr>
 </thead>
 <tbody>
 {projectMistMapRouteRows.map(([stop, action]) => (
 <tr key={stop} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">
 {stop}
 </th>
 <td className="px-4 py-3 text-muted-foreground">{action}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2 id="train-base">Use the Train Base as the Map Hub</h2>
 <ArticleImage
 src={projectMistImages.trainBase}
 alt="Project: Mist train base route hub image"
 caption="The train matters because it turns exploration into a repeatable loop: leave, loot, survive, return, upgrade, and choose the next marker."
 />
 <p>
 The train is the first map anchor that changes how you should explore.
 Before the train, every detour risks wasting supplies. After the
 train, each facility run can be planned around storage, crafting,
 defense, and a safe return.
 </p>
 </section>

 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Timing</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Route action</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why it matters</th>
 </tr>
 </thead>
 <tbody>
 {routePlanningRows.map(([timing, action, reason]) => (
 <tr key={timing} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">
 {timing}
 </th>
 <td className="px-4 py-3 text-muted-foreground">{action}</td>
 <td className="px-4 py-3 text-muted-foreground">{reason}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2 id="facilities">Facility Checklist</h2>
 <ArticleImage
 src={projectMistImages.facilities}
 alt="Project: Mist facility route planning image"
 caption="Facilities are not just scenery. They can contain loot, crafting checks, upgrades, hazards, and progression blockers."
 />
 <p>
 The mistake is treating every facility like a quick container room.
 Facilities should be entered with a purpose: find a station, collect
 a resource, clear a blocker, check a locked room, or push the next
 objective. If none of those are true, return to the train before your
 supplies collapse.
 </p>
 </section>

 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Facility feature</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">How to use it</th>
 </tr>
 </thead>
 <tbody>
 {projectMistFacilityRows.map(([feature, use]) => (
 <tr key={feature} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">
 {feature}
 </th>
 <td className="px-4 py-3 text-muted-foreground">{use}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2 id="greenhouse">Greenhouse and Prometheus Laboratory Route</h2>
 <ArticleImage
 src={projectMistImages.screenshot4}
 alt="Project: Mist greenhouse and laboratory route image"
 caption="The greenhouse and laboratory path should be treated as progression content with resource checks, not as a casual first detour."
 />
 <p>
 The early route points from the train and mech-part objective toward
 the greenhouse, then deeper laboratory pressure. Prepare before this
 step. Bring healing, ammo, lockpicking patience, and a clear exit
 route. If you are short on supplies, the correct move is to return to
 the train rather than force the facility.
 For old saves or returning demo players, the important check is not
 memory. It is build state. If a patch changed progression, item
 placement, or a gate trigger, the cleanest route is to verify the
 objective chain again instead of assuming the old path is still exact.
 </p>
 </section>

 <section className="prose-game">
 <h2 id="co-op-map">Co-op Map Roles</h2>
 <ArticleImage
 src={projectMistImages.multiplayer}
 alt="Project: Mist co-op map roles image"
 caption="Co-op groups move faster only when roles are clear. Four players wandering separately create more risk, not less."
 />
 <p>
 In co-op, route quality matters more than player count. A scattered
 team burns supplies, misses objectives, and triggers fights before
 the train is ready. Assign roles before entering a facility.
 </p>
 </section>

 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Role</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Map job</th>
 </tr>
 </thead>
 <tbody>
 {coOpRows.map(([role, job]) => (
 <tr key={role} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">
 {role}
 </th>
 <td className="px-4 py-3 text-muted-foreground">{job}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>New Player vs Returning Player Route Plan</h2>
 <ArticleImage
 src={projectMistImages.screenshot5}
 alt="Project: Mist route planning for new and returning players"
 caption="The best map route changes by player type: beginners need safe loops, while returning players need patch-aware objective checks."
 />
 <p>
 A map guide has to serve two different readers. New players need a
 safe sequence and a reason to stop before overcommitting. Returning
 players need a way to check whether old demo knowledge still applies.
 Co-op groups need role clarity because four players can create four
 different mistakes at once. Use the table below to choose the route
 discipline that matches your session.
 </p>
 </section>
 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player type</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Route plan</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why</th>
 </tr>
 </thead>
 <tbody>
 {playerLevelRows.map(([type, plan, why]) => (
 <tr key={type} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">
 {type}
 </th>
 <td className="px-4 py-3 text-muted-foreground">{plan}</td>
 <td className="px-4 py-3 text-muted-foreground">{why}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>Map and Facility Problem Diagnosis</h2>
 <ArticleImage
 src={projectMistImages.screenshot6}
 alt="Project: Mist facility route troubleshooting"
 caption="Most route problems come from missed objective chains, poor supply timing, split co-op movement, or treating a facility like a small loot room."
 />
 </section>
 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Problem</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Likely cause</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Fix</th>
 </tr>
 </thead>
 <tbody>
 {routeProblemRows.map(([problem, cause, fix]) => (
 <tr key={problem} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">
 {problem}
 </th>
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
