import { ProjectMistArticle } from "@/components/project-mist-article";
import { ArticleImage } from "@/components/article-media";
import { BlufBox, ActionTable } from "@/components/guide-blocks";
import {
 createProjectMistMetadata,
 projectMistDemoLootRows,
 projectMistDemoRiskRows,
 projectMistDemoRouteRows,
 projectMistImages,
 projectMistLockpickRows,
} from "@/lib/project-mist";

const title = "Project: Mist Beginner Guide: First Hour, Train Base, Gravity Gun & Co-op Survival";
const description =
 "Project: Mist beginner guide: first-hour priorities, Gravity Gun tips, train base upgrades, lockpicking, co-op roles, facility runs, and what to avoid on your first Early Access session.";
const canonical = "/games/project-mist/beginner-guide";

export const metadata = createProjectMistMetadata({
 title,
 description,
 canonical,
 image: projectMistImages.beginner,
});

const faqs = [
 {
 question: "What should beginners do first in Project: Mist?",
 answer:
 "Test controls, gather food and bandages, reach the train base early, learn lockpicking, and avoid deep facility runs before you understand creature pressure and retreat routes.",
 },
 {
 question: "How important is the Gravity Gun in Project: Mist?",
 answer:
 "The Gravity Gun is a core system because Steam highlights using physics to move objects, control space, and turn the environment into a weapon.",
 },
 {
 question: "Should beginners play Project: Mist solo or co-op?",
 answer:
 "Both are supported. Solo is slower and easier to control, while co-op helps divide scouting, defense, crafting, and combat if the group communicates.",
 },
 {
 question: "Does Project: Mist have co-op?",
 answer:
 "Yes. Steam lists single-player, multi-player, co-op, and online co-op. Steam page copy describes seamless 1-4 player co-op.",
 },
 {
 question: "Is this beginner guide final?",
 answer:
 "Project: Mist is in Early Access so routes and balance may shift. The first-hour tips here - grab starter chest supplies, head to the train, learn the Gravity Gun, avoid the power whale - are confirmed from demo and launch-window gameplay.",
 },
 {
 question: "Should beginners learn lockpicking early?",
 answer:
 "Yes. Locked chests can hold useful resources like ammo, healing items, and upgrade materials. Spend 2-3 minutes practicing in the safe room before heading out.",
 },
];

const firstDayRows = [
 {
 step: "1. Grab starter chest supplies",
 doThis:
 "Open the small chest in the wake-up room immediately. Take bandages, food, water, and the flashlight. Save the game before leaving the room.",
 why: "The starter chest gives you the basics for surviving the first route segment. Saving early creates a clean restart point if things go wrong.",
 },
 {
 step: "2. Follow the compass to the train",
 doThis:
 "After leaving the wake-up room, follow the compass marker and map toward the Midway Bridge. The train is the first major base objective.",
 why: "The train base is your safe return point, storage hub, and crafting station. Reaching it early makes every subsequent run less risky.",
 },
 {
 step: "3. Grab the mech part before pushing into facilities",
 doThis:
 "The demo route points west to a busted mech part. Collect it before entering the greenhouse - it unlocks the train repair objective.",
 why: "Skipping the mech part blocks the train gate progress. The greenhouse route opens fully only after the mech part is handled.",
 },
 {
 step: "4. Learn lockpicking in the first facility",
 doThis:
 "When you find a locked chest, practice the lockpick minigame: Space to rotate, left mouse to raise. Gold pins unlock the chest.",
 why: "Locked chests in the greenhouse and Prometheus Laboratory contain ammo, healing items, and blueprints. Lockpicking is the difference between surviving and struggling.",
 },
 {
 step: "5. Treat the Greenhouse as a planned facility run",
 doThis:
 "Before entering the greenhouse, check your ammo count, healing supplies, and exit route. Do not enter low on resources.",
 why: "The greenhouse contains the access card needed for later progress, but it also has corrosive floors and root enemies that punish careless entry.",
 },
];

export default function ProjectMistBeginnerGuidePage() {
 return (
 <ProjectMistArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Beginner Guide"
 heroImage={projectMistImages.beginner}
 heroAlt="Project: Mist beginner survival guide image"
 faqs={faqs}
 >
 <BlufBox title="First-Hour Rule">
 <p>
 <strong>
 Your first hour should achieve 3 things: reach the train, learn the Gravity Gun, and secure a retreat route.
 </strong>{" "}
 Do not chase every objective marker. The train base is your safe harbor -
 storage, crafting, and repairs all depend on it. Anything you do before
 reaching the train is a scouting run.
 </p>
 </BlufBox>

 <section className="prose-game">
 <h2>First Hour Priorities - Minute-by-Minute</h2>
 <ArticleImage
 src={projectMistImages.pmTrain || projectMistImages.beginner}
 alt="Project: Mist train base first priority"
 caption="Reach the train in the first 15-20 minutes. It becomes your crafting, storage, and safety hub for the rest of the run."
 />
 <ul>
 <li><strong>Minutes 0-5:</strong> Open starter chest, save, test flashlight and inventory. Do not leave without checking the objective screen.</li>
 <li><strong>Minutes 5-10:</strong> Follow the compass toward the train. Gather loose resources along the path but do not get sidetracked.</li>
 <li><strong>Minutes 10-20:</strong> Reach the train, deposit resources, check crafting stations. This is your new home base.</li>
 <li><strong>Minutes 20-30:</strong> Head west for the mech part. This unlocks train gate progress. Craft extra ammo before leaving.</li>
 <li><strong>Minutes 30-45:</strong> Enter the greenhouse with full supplies. Look for the access card and locked chests.</li>
 <li><strong>Minutes 45-60:</strong> Return to the train, deposit loot, repair gear, and plan the next facility run.</li>
 </ul>
 </section>
 <ActionTable rows={firstDayRows} />

 <section className="prose-game">
 <h2>Demo Route: What to Do in Order</h2>
 <ArticleImage
 src={projectMistImages.firstSteps}
 alt="Project: Mist demo route first steps image"
 caption="The demo route gives beginners a clean order: starter supplies, train, mech part, greenhouse, then facility progress."
 />
 <p>
 The opening route is straightforward once you know the steps: grab
 starter supplies, reach the train, find the mech part west of the
 bridge, then enter the greenhouse with enough resources to survive
 the facility. The Prometheus Laboratory comes last - do not enter
 until your gear is upgraded and you have at least 100 rounds.
 </p>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Step</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Beginner takeaway</th>
 </tr>
 </thead>
 <tbody>
 {projectMistDemoRouteRows.map(([step, takeaway]) => (
 <tr key={step} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{step}</td>
 <td className="px-4 py-3 text-muted-foreground">{takeaway}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>Use the Gravity Gun as a Survival Tool</h2>
 <ArticleImage
 src={projectMistImages.gravityGun}
 alt="Project: Mist Gravity Gun beginner guide image"
 caption="Use the Gravity Gun to block paths, move debris, interrupt pressure, and solve movement problems before spending scarce resources."
 />
 <p>
 The Gravity Gun does more than throw objects. Use it to:
 </p>
 <ul>
 <li><strong>Block doorways:</strong> Drag debris or crates to create cover in narrow corridors.</li>
 <li><strong>Interrupt enemies:</strong> A well-timed throw staggers most creatures, creating escape windows.</li>
 <li><strong>Solve puzzles:</strong> Some facility doors require moving heavy objects onto pressure plates.</li>
 <li><strong>Save ammo:</strong> Throwing environment objects deals damage without spending bullets.</li>
 </ul>
 <p>
 Upgrade the Gravity Gun with Blood Orbs when you find upgrade stations.
 Tier 2 adds projectile throwing - this is a major combat power spike.
 </p>
 </section>

 <section className="prose-game">
 <h2>Learn Lockpicking Before Deep Facility Runs</h2>
 <ArticleImage
 src={projectMistImages.crafting}
 alt="Project: Mist beginner lockpick and chest image"
 caption="Lockpicking is worth learning early because locked chests and side rooms can support ammo, healing, crafting, and upgrades."
 />
 <p>
 Lockpicking is a simple minigame: use Space to rotate the pick,
 left mouse to raise it, and guide it past obstacles toward the
 gold pins. Practice on the first chest you find - it only takes
 2-3 attempts to get comfortable. Each gold pin you hit unlocks
 better loot, so do not rush the final approach.
 </p>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Lockpick step</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Beginner habit</th>
 </tr>
 </thead>
 <tbody>
 {projectMistLockpickRows.slice(0, 4).map(([step, habit]) => (
 <tr key={step} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{step}</th>
 <td className="px-4 py-3 text-muted-foreground">{habit}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">

 <h2>Train Base Priorities</h2>
 <ArticleImage
 src={projectMistImages.trainBase}
 alt="Project: Mist train base beginner guide image"
 caption="The train base should reduce friction: store resources, support repairs, create safety, and make the next run easier."
 />
 <ul>
 <li>
 <strong>Storage first:</strong> Keep materials organized so crafting
 and repairs do not stall during co-op sessions.
 </li>
 <li>
 <strong>Defense second:</strong> Upgrade defenses before pushing
 into more dangerous areas.
 </li>
 <li>
 <strong>Utility third:</strong> Add upgrades that support longer
 trips, safer returns, and better resource conversion.
 </li>
 </ul>

 <h2>Facility Runs and Early Danger</h2>
 <ArticleImage
 src={projectMistImages.facilities}
 alt="Project: Mist facility beginner route image"
 caption="Facilities are progression hotspots. Enter only when you have full ammo, healing, and a clear retreat plan."
 />
 <p>
 The Prometheus Laboratory is the end goal of the early route, but
 it is also the most dangerous. Before entering:
 </p>
 <ul>
 <li><strong>Bring 100+ rounds</strong> for the root enemies and Spider boss.</li>
 <li><strong>Carry 3+ healing items</strong> for corrosive floor damage.</li>
 <li><strong>Know the exit</strong> - backtracking through the greenhouse is the only retreat path.</li>
 <li><strong>Use the crafting bench</strong> inside the facility to convert materials before the boss fight.</li>
 </ul>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Facility finding</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Beginner use</th>
 </tr>
 </thead>
 <tbody>
 {projectMistDemoLootRows.map(([finding, use]) => (
 <tr key={finding} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{finding}</td>
 <td className="px-4 py-3 text-muted-foreground">{use}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>Beginner Mistakes to Avoid</h2>
 <ArticleImage
 src={projectMistImages.creatures}
 alt="Project: Mist beginner danger and creature image"
 caption="Observe large threats first, then spend ammo or explosives only after the game gives a clear reason."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Risk</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Safer habit</th>
 </tr>
 </thead>
 <tbody>
 {projectMistDemoRiskRows.map(([risk, habit]) => (
 <tr key={risk} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{risk}</td>
 <td className="px-4 py-3 text-muted-foreground">{habit}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </ProjectMistArticle>
 );
}
