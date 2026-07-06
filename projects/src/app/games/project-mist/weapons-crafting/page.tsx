import { ArticleImage } from "@/components/article-media";
import { ActionTable, BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { ProjectMistArticle } from "@/components/project-mist-article";
import {
 createProjectMistMetadata,
 projectMistCraftingRows,
 projectMistImages,
} from "@/lib/project-mist";

const title = "Project: Mist Weapons & Crafting Guide: Gear, Ammo and Upgrades";
const description =
 "Project: Mist weapons and crafting guide for Early Access: Gravity Gun, ammo planning, gear priorities, crafting checks, upgrades, and co-op loadouts.";
const canonical = "/games/project-mist/weapons-crafting";

export const metadata = createProjectMistMetadata({
 title,
 description,
 canonical,
 image: projectMistImages.crafting,
});

const faqs = [
 {
 question: "What is the best early weapon in Project: Mist?",
 answer:
 "Do not rely on one claimed best weapon yet. Use a reliable close-range option, a medium-range backup, the Gravity Gun, and enough healing or ammo to finish the route.",
 },
 {
 question: "How important is the Gravity Gun?",
 answer:
 "The Gravity Gun is a core Project: Mist tool because official store copy and preview coverage emphasize physics interaction, object control, and environmental combat.",
 },
 {
 question: "Should I craft ammo or healing first?",
 answer:
 "Craft what fixes the next route. Before facilities, healing and backup ammo matter more than extra damage. Before bosses, repair, ammo, and a tested fallback matter most.",
 },
 {
 question: "Are exact recipes final?",
 answer:
 "No. Project: Mist is Early Access, so exact recipe costs, yields, weapon balance, and upgrade effects should be checked in the current workbench UI.",
 },
];

const searchIntentRows = [
 {
 query: "Project Mist weapons guide",
 answer:
 "Build around role and route: close-range safety, medium-range backup, Gravity Gun utility, healing, and enough ammo to retreat.",
 href: "#weapons",
 label: "Weapons",
 },
 {
 query: "Project Mist crafting recipes",
 answer:
 "Use workbenches to prepare ammo, healing, repairs, and utility items. Verify exact recipes in your current Early Access build.",
 href: "#crafting",
 label: "Crafting",
 },
 {
 query: "Project Mist best gear",
 answer:
 "Best gear depends on solo, co-op, boss, or facility route. Do not spend scarce materials before the next bottleneck is clear.",
 href: "#best-gear",
 label: "Best gear",
 },
 {
 query: "Project Mist Gravity Gun upgrade",
 answer:
 "Treat Gravity Gun upgrades as high priority when they improve every route, not only one rare fight.",
 href: "#gravity-gun",
 label: "Upgrade",
 },
];

const jumpLinks = [
 { href: "#weapons", label: "Weapons" },
 { href: "#gravity-gun", label: "Gravity Gun" },
 { href: "#crafting", label: "Crafting" },
 { href: "#best-gear", label: "Loadouts" },
 { href: "/games/project-mist/all-bosses", label: "Boss guide" },
 { href: "/games/project-mist/map-facilities", label: "Map route" },
];

const playerRows = [
 ["New player", "Carry one dependable weapon, learn the Gravity Gun, and return to the train before supplies collapse.", "Survival comes from preparation and retreat discipline, not one perfect weapon claim."],
 ["Co-op group", "Split roles between close defense, ranged damage, looting, and healing support.", "Groups waste ammo when everyone fires at the same target without tracking supplies."],
 ["Crafter", "Track ammo, healing, repair materials, and upgrade currency separately.", "A full inventory is useless if it lacks the one material blocking the next run."],
 ["Boss-focused player", "Enter arenas with tested weapons, backup healing, and Gravity Gun options.", "Boss fights punish untested loadouts more than normal rooms do."],
 ["Returning player", "Re-check recipes and upgrade behavior after patches.", "Early Access balance can change crafting yields, costs, and weapon value."],
];

const prepRows = [
 ["Before a facility", "Repair gear, craft healing, make ammo, clear inventory, and mark the exit.", "Facilities are where bad supply planning becomes expensive."],
 ["Before a boss", "Test the weapon, count healing, identify cover or throwable objects, and save manually.", "You need a fallback if the first strategy fails."],
 ["Before co-op", "Assign who carries healing, who loots materials, and who watches retreat routes.", "Role clarity preserves supplies and prevents scattered deaths."],
 ["Before upgrading", "Ask whether the upgrade improves every run or only one rare situation.", "Scarce upgrade currency should fix repeated problems first."],
];

const routeGearRows = [
 ["Short loot run", "Light weapon, small healing reserve, empty inventory space.", "The goal is to bring materials back, not win a long fight."],
 ["Greenhouse or facility run", "Reliable weapon, backup ammo, healing, repair option, and marked exit.", "Facilities create supply pressure and route confusion at the same time."],
 ["Boss route", "Tested weapon, Gravity Gun plan, healing reserve, manual save, and backup strategy.", "Boss attempts should produce information even when the first run fails."],
 ["Co-op material run", "One player tracks loot, one covers exits, one carries healing, one handles pressure.", "The team gains more by preserving supplies than by stacking damage."],
 ["Returning after patch", "Verify recipes, upgrade costs, weapon feel, and save behavior before a long route.", "Early Access changes can invalidate old assumptions without changing the page title."],
];

const verificationRows = [
 ["Recipe cost", "Check the current workbench before relying on any guide value.", "Crafting costs can change during Early Access."],
 ["Weapon value", "Test on the same enemy type before calling something best.", "One lucky fight is not a reliable loadout test."],
 ["Upgrade effect", "Record what changes after the upgrade: range, control, damage, timing, or utility.", "Useful upgrades solve repeat problems, not just stats on paper."],
 ["Material bottleneck", "Track which material stops your next craft most often.", "The best farming route is the one that fixes that bottleneck."],
];

const craftingRows = [
 ["Ammo", "Check current workbench UI", "Build-dependent", "Prioritize before facility or boss routes."],
 ["Healing", "Check current workbench UI", "Build-dependent", "Carry enough to survive a failed first attempt."],
 ["Repair item", "Check current workbench UI", "Build-dependent", "Use before boss gates and long routes."],
 ["Throwable or utility item", "Check current workbench UI", "Build-dependent", "Best for controlling dangerous rooms."],
 ["Upgrade material", "Track separately from common loot", "Scarce", "Spend only on repeated bottlenecks."],
 ["Train-base supplies", "Storage, crafting, healing, ammo, defenses", "Route support", "Keeps deeper runs from becoming one-way trips."],
];

export default function ProjectMistWeaponsPage() {
 return (
 <ProjectMistArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Weapons & Crafting"
 heroImage={projectMistImages.crafting}
 heroAlt="Project: Mist workbench crafting interface with weapons and materials"
 faqs={faqs}
 showSources={false}
 >
 <BlufBox title="Gear Rule">
 <p>
 <strong>Do not build around perfect-loadout claims that can mislead players.</strong>{" "}
 Build around the next route: facility, boss, co-op run, or train
 return. The Gravity Gun, ammo, healing, repairs, and inventory space
 matter together.
 </p>
 </BlufBox>

 <SearchAnswerPanel
 title="What gear should you bring in Project: Mist?"
 answer="Bring a practical kit: one reliable weapon, one backup option, Gravity Gun utility, healing, ammo, and enough empty inventory to bring useful materials back to the train."
 intentRows={searchIntentRows}
 jumpLinks={jumpLinks}
 />

 <section id="weapons" className="mb-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Weapons and Gear Priorities</h2>
 <ArticleImage
 src={projectMistImages.crafting}
 alt="Project: Mist crafting bench and weapon planning"
 caption="Use weapons and crafting as a preparation loop: repair, craft, restock, then enter the next facility with a real exit plan."
 />
 <ActionTable rows={projectMistCraftingRows} />
 </section>

 <section id="gravity-gun" className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Gravity Gun Upgrade Thinking</h2>
 <ArticleImage
 src={projectMistImages.gravityGun}
 alt="Project: Mist Gravity Gun upgrade and combat utility"
 caption="The Gravity Gun is valuable because it can affect movement, space control, object use, and combat preparation, not only raw damage."
 />
 <p className="leading-relaxed text-muted-foreground">
 The best upgrade is the one that improves repeated problems: unsafe
 rooms, boss pressure, blocked routes, or low-ammo fights. New players
 should use the Gravity Gun as a utility tool first. Experienced
 players should decide whether an upgrade improves every route or only
 one rare encounter.
 </p>
 </section>

 <section id="crafting" className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Crafting and Supply Checklist</h2>
 <ArticleImage
 src={projectMistImages.trainBase}
 alt="Project: Mist train base crafting preparation"
 caption="The train base is the safest place to convert loose loot into ammo, healing, repairs, and route readiness."
 />
 <div className="overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Item type</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Recipe handling</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Certainty</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best use</th>
 </tr>
 </thead>
 <tbody>
 {craftingRows.map((row) => (
 <tr key={row[0]} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{row[0]}</td>
 <td className="px-4 py-3 text-muted-foreground">{row[1]}</td>
 <td className="px-4 py-3 text-foreground font-semibold">{row[2]}</td>
 <td className="px-4 py-3 text-muted-foreground">{row[3]}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </section>

 <section id="best-gear" className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">New Player vs Experienced Player Gear Plan</h2>
 <ArticleImage
 src={projectMistImages.multiplayer}
 alt="Project: Mist co-op weapon and crafting roles"
 caption="The best loadout changes by role. Solo players need flexibility; co-op groups need clear supply ownership."
 />
 <div className="overflow-x-auto rounded-lg border border-border bg-white">
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
 </section>

 <section className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Preparation Checklist</h2>
 <div className="overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <tbody>
 {prepRows.map(([moment, action, why]) => (
 <tr key={moment} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{moment}</th>
 <td className="px-4 py-3 text-muted-foreground">{action}</td>
 <td className="px-4 py-3 text-muted-foreground">{why}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </section>

 <section className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Gear Plan by Route Type</h2>
 <ArticleImage
 src={projectMistImages.facilities}
 alt="Project: Mist facility gear route planning"
 caption="A useful gear plan starts with the route type: short loot run, facility push, boss attempt, co-op material run, or patch recheck."
 />
 <p className="mb-4 leading-relaxed text-muted-foreground">
 The same item can be good or bad depending on the route. A short loot
 run wants empty space and low commitment. A facility run wants
 healing, ammo, and exit discipline. A boss route wants a tested kit
 and a save point. Co-op needs role ownership. This is why this page
 does not pretend one universal loadout solves every Project: Mist
 problem.
 </p>
 <div className="overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <tbody>
 {routeGearRows.map(([route, gear, why]) => (
 <tr key={route} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{route}</th>
 <td className="px-4 py-3 text-muted-foreground">{gear}</td>
 <td className="px-4 py-3 text-muted-foreground">{why}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </section>

 <section className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">What to Check in Your Build</h2>
 <p className="mb-4 leading-relaxed text-muted-foreground">
 Project: Mist is exactly the type of Early Access game where bad
 guides become harmful: a recipe changes, a weapon is tuned, an
 upgrade behaves differently, or a route gets patched. Use this
 verification table whenever a claim looks too exact.
 </p>
 <div className="overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <tbody>
 {verificationRows.map(([item, check, reason]) => (
 <tr key={item} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{item}</th>
 <td className="px-4 py-3 text-muted-foreground">{check}</td>
 <td className="px-4 py-3 text-muted-foreground">{reason}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </section>
 </ProjectMistArticle>
 );
}
