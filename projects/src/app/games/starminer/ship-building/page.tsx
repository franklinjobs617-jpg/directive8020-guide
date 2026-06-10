import Link from "next/link";
import { StarminerArticle } from "@/components/starminer-article";
import { ArticleImage } from "@/components/article-media";
import { BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import {
 createStarminerMetadata,
 starminerImages,
 starminerShipRows,
} from "@/lib/starminer";

const title = "Starminer Ship Building Guide: Modules, Mass, Thrust, Power & Warships";
const description =
 "Starminer ship building guide for modular construction, mass, thrust, power, tonnage, station size, mining ships, warships, blueprints, and defense roles.";
const canonical = "/games/starminer/ship-building";

export const metadata = createStarminerMetadata({
 title,
 description,
 canonical,
 image: starminerImages.build,
});

const faqs = [
 {
 question: "How does ship building work in Starminer?",
 answer:
 "Starminer focuses on modular construction. Players build ships and stations piece by piece while balancing materials, power, tonnage, size, mass, and role.",
 },
 {
 question: "Should I build one huge station or many smaller ships?",
 answer:
 "Both are possible, but beginners should avoid oversized first builds. Smaller specialized ships and compact stations are easier to diagnose, supply, and defend.",
 },
 {
 question: "Why does mass matter in Starminer?",
 answer:
 "Mass affects how practical a design is to move, support, power, and defend. A heavy design needs enough thrust, energy, materials, and purpose to justify itself.",
 },
 {
 question: "Are blueprints confirmed in Starminer?",
 answer:
 "The official FAQ confirms blueprint save and recall. Community blueprint sharing is planned and should not be treated as a launch feature until confirmed.",
 },
 {
 question: "When should I build warships?",
 answer:
 "Build warships after your mining and production network can support maintenance and after heat or enemy pressure makes static defenses insufficient.",
 },
];

const roleRows = [
 ["Starter station", "Compact modules, clear resource paths, power reserve", "Learning and diagnosis"],
 ["Mining ship", "Extraction capacity, safe routing, support range", "Feeding production"],
 ["Hauler", "Storage and movement efficiency", "Moving materials without blocking production"],
 ["Patrol ship", "Speed, coverage, and reliable power", "Protecting mining routes and outer assets"],
 ["Warship", "Weapons, armor, power reserve, and repair support", "Responding to aliens or pirates"],
 ["Mega station", "Redundant power, layered defense, clean logistics", "Late-game industrial control"],
];

const searchIntentRows = [
 {
 query: "Starminer ship building",
 answer: "Build by role first: starter station, mining ship, hauler, patrol ship, warship, then larger stations.",
 href: "#starter-layouts",
 label: "Build order",
 },
 {
 query: "Station vs ship",
 answer: "A station is easier to diagnose early; ships become safer once power, mining, storage, and defense are stable.",
 href: "#station-vs-ship",
 label: "Choice",
 },
 {
 query: "Mass, thrust, power and heat",
 answer: "Every added module increases support demands. Check movement, energy reserve, heat risk, and supply before scaling.",
 href: "#power-heat-mass",
 label: "Tradeoff",
 },
 {
 query: "Starminer warships",
 answer: "Build warships after the mining network can support weapons, repair, power reserve, and patrol coverage.",
 href: "#build-by-role",
 label: "Defense",
 },
];

const jumpLinks = [
 { href: "#starter-layouts", label: "Starter layouts" },
 { href: "#station-vs-ship", label: "Station vs ship" },
 { href: "#power-heat-mass", label: "Power and heat" },
 { href: "#build-by-role", label: "Build roles" },
 { href: "/games/starminer/mining-logistics", label: "Logistics" },
 { href: "/games/starminer/heat-aliens-defense", label: "Defense" },
];

const starterLayoutRows = [
 ["Compact starter station", "Power core, storage, basic mining support, short routes", "Best first build because problems are easy to see."],
 ["Dedicated mining ship", "Extraction tools, enough power, safe storage handoff", "Use after the station can process incoming materials."],
 ["Small hauler", "Storage, movement efficiency, safe route coverage", "Use when mined resources wait too long before refining."],
 ["Patrol craft", "Speed, weapons, power reserve, route coverage", "Use when mining paths attract pressure or outer modules need response time."],
];

const stationVsShipRows = [
 ["Starter station", "Stable power, simple logistics, easy storage, easier repairs", "Less flexible and can become a large heat target if overbuilt."],
 ["Mining ship", "Moves to resources and keeps extraction flexible", "Needs support, power, storage handoff, and protection."],
 ["Warship", "Responds to attacks and protects routes", "Consumes production, power, repairs, and attention."],
 ["Mega station", "Strong production center with layered systems", "Only safe after logistics and defense are proven."],
];

const supportRows = [
 ["Power", "Every module needs enough reserve to keep mining, movement, weapons, and repairs from starving each other."],
 ["Heat", "Expansion can raise pressure, so growth should include defense and repair capacity."],
 ["Mass", "A heavier ship needs a clear role, enough thrust, and a network that can afford it."],
 ["Size", "Large builds are harder to defend and diagnose unless internal paths stay readable."],
 ["Storage", "A ship that mines faster than it unloads creates a logistics bottleneck."],
];

export default function StarminerShipBuildingPage() {
 return (
 <StarminerArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Ship Building"
 heroImage={starminerImages.build}
 heroAlt="Starminer ship building modular construction image"
 faqs={faqs}
 >
 <SearchAnswerPanel
 title="What should you build first in Starminer?"
 answer="Build a compact starter station before chasing huge ships. Once power, mining, storage, heat, and basic defense are stable, add specialized mining ships, haulers, patrol craft, and warships by role."
 intentRows={searchIntentRows}
 jumpLinks={jumpLinks}
 />

 <BlufBox title="Design Rule">
 <p>
 <strong>Every Starminer build needs a role before it needs size.</strong>{" "}
 A mining ship, patrol ship, warship, and station solve different
 problems. If you only chase mass or tonnage, you may create something
 expensive that your{" "}
 <Link href="/games/starminer/mining-logistics">logistics network</Link>{" "}
 cannot support or your{" "}
 <Link href="/games/starminer/heat-aliens-defense">defenses</Link>{" "}
 cannot protect.
 </p>
 </BlufBox>

 <section className="prose-game">
 <h2 id="starter-layouts">Starter Layouts That Make Sense</h2>
 <ArticleImage
 src={starminerImages.station}
 alt="Starminer starter station and ship layout planning image"
 caption="The safest first layout is compact, powered, easy to supply, and easy to defend."
 />
 </section>

 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Starter layout</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Core pieces</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best use</th>
 </tr>
 </thead>
 <tbody>
 {starterLayoutRows.map(([layout, pieces, use]) => (
 <tr key={layout} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{layout}</td>
 <td className="px-4 py-3 text-muted-foreground">{pieces}</td>
 <td className="px-4 py-3 text-muted-foreground">{use}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2 id="power-heat-mass">Core Ship Building Tradeoffs</h2>
 <ArticleImage
 src={starminerImages.build}
 alt="Starminer modular ship building tradeoffs image"
 caption="Good designs balance mass, thrust, power, tonnage, footprint, and role instead of maximizing a single number."
 />
 </section>

 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Tradeoff</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player takeaway</th>
 </tr>
 </thead>
 <tbody>
 {starminerShipRows.map(([tradeoff, takeaway]) => (
 <tr key={tradeoff} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{tradeoff}</td>
 <td className="px-4 py-3 text-muted-foreground">{takeaway}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Support system</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Design rule</th>
 </tr>
 </thead>
 <tbody>
 {supportRows.map(([system, rule]) => (
 <tr key={system} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{system}</td>
 <td className="px-4 py-3 text-muted-foreground">{rule}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2 id="build-by-role">Build by Role</h2>
 <ArticleImage
 src={starminerImages.fleet}
 alt="Starminer mining ships patrol ships and warships role planning image"
 caption="Specialized roles keep the fleet readable: one design mines, one hauls, one patrols, one fights, and the station supports the loop."
 />
 </section>

 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Build type</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Prioritize</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Use case</th>
 </tr>
 </thead>
 <tbody>
 {roleRows.map(([type, priority, use]) => (
 <tr key={type} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{type}</td>
 <td className="px-4 py-3 text-muted-foreground">{priority}</td>
 <td className="px-4 py-3 text-muted-foreground">{use}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2 id="station-vs-ship">Station Versus Ship Tradeoff</h2>
 <p>
 A station is usually the better first build because power, storage,
 refining, and repairs are easier to inspect. Ships become stronger
 once the station can support their role without starving production
 or raising heat faster than defense can respond.
 </p>
 </section>

 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Choice</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Strength</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Risk</th>
 </tr>
 </thead>
 <tbody>
 {stationVsShipRows.map(([choice, strength, risk]) => (
 <tr key={choice} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{choice}</td>
 <td className="px-4 py-3 text-muted-foreground">{strength}</td>
 <td className="px-4 py-3 text-muted-foreground">{risk}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>When to Scale Up</h2>
 <p>
 Scaling up should happen after a smaller design proves it can do its
 job. A mining ship should feed production without stranding resources.
 A patrol ship should cover the route it was built for. A warship
 should have enough power and repair support to survive more than one
 encounter. Once a design works, save it as a blueprint and use it as a
 base for experiments.
 </p>
 <p>
 If the ship works but materials are constantly missing, pause here and
 read the{" "}
 <Link href="/games/starminer/mining-logistics">mining and logistics guide</Link>
 . If the ship works in quiet space but fails under attack, continue to{" "}
 <Link href="/games/starminer/heat-aliens-defense">
 heat, aliens, and defense
 </Link>
 . If you are still learning the interface, return to the{" "}
 <Link href="/games/starminer/beginner-guide">beginner guide</Link>{" "}
 before building larger.
 </p>
 </section>
 </StarminerArticle>
 );
}
