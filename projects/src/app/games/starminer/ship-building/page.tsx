import Link from "next/link";
import { StarminerArticle } from "@/components/starminer-article";
import { ArticleImage } from "@/components/article-media";
import { BlufBox } from "@/components/guide-blocks";
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
        <h2>Core Ship Building Tradeoffs</h2>
        <ArticleImage
          src={starminerImages.build}
          alt="Starminer modular ship building tradeoffs image"
          caption="Good designs balance mass, thrust, power, tonnage, footprint, and role instead of maximizing a single number."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Tradeoff</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player takeaway</th>
            </tr>
          </thead>
          <tbody>
            {starminerShipRows.map(([tradeoff, takeaway]) => (
              <tr key={tradeoff} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{tradeoff}</td>
                <td className="px-4 py-3 text-muted-foreground">{takeaway}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>Build by Role</h2>
        <ArticleImage
          src={starminerImages.fleet}
          alt="Starminer mining ships patrol ships and warships role planning image"
          caption="Specialized roles keep the fleet readable: one design mines, one hauls, one patrols, one fights, and the station supports the loop."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Build type</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Prioritize</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Use case</th>
            </tr>
          </thead>
          <tbody>
            {roleRows.map(([type, priority, use]) => (
              <tr key={type} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{type}</td>
                <td className="px-4 py-3 text-muted-foreground">{priority}</td>
                <td className="px-4 py-3 text-muted-foreground">{use}</td>
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
