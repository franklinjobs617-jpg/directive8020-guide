import Link from "next/link";
import { ArticleImage } from "@/components/article-media";
import { ActionTable, BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { SpacecraftArticle } from "@/components/spacecraft-article";
import { createSpacecraftMetadata, spacecraftImages } from "@/lib/spacecraft";

const title = "SpaceCraft Automation Guide: Factories, Production Lines, Conveyors & Logistics";
const description =
  "SpaceCraft factory automation guide covering production lines, conveyor logistics, assembler ratios, power management, drone networks, cargo ship routes, and industrial scaling strategies.";
const canonical = "/games/spacecraft/factory-automation";

export const metadata = createSpacecraftMetadata({
  title,
  description,
  canonical,
  image: spacecraftImages.automation,
});

const faqs = [
  {
    question: "How does automation work in SpaceCraft?",
    answer:
      "SpaceCraft's automation system is inspired by Factorio and Satisfactory. You build planetary outposts, deploy Extractors on resource deposits, connect them to power sources, and set up production lines using drones and cargo ships for automated mining, refining, and interplanetary logistics.",
  },
  {
    question: "What is the most important rule for automation?",
    answer:
      "Power management is the foundation of automation. One Reactor Core can support 3-4 production buildings. Always over-build power before adding more production — a power outage halts your entire supply chain.",
  },
  {
    question: "Should I use drones or cargo ships for logistics?",
    answer:
      "Drones are best for short-range, high-frequency transport within a single planetary system. Cargo ships are better for interplanetary logistics over long distances. Most established players use a hybrid: drones for outpost-to-station runs, cargo ships for system-to-system trade routes.",
  },
  {
    question: "What is the best early automation chain?",
    answer:
      "Iron Ore to Basic Components to Ship Frames is the most profitable early automation chain. It requires minimal setup (Extractor + Assembler + power) and produces items that are in constant demand on the player market.",
  },
];

const setupSteps = [
  { step: "1", doThis: "Establish at least one automated mining outpost before building factories. Factories need a steady resource input.", why: "A factory without raw materials is a waste of credits and power. Secure your resource supply chain first." },
  { step: "2", doThis: "Build a Power Plant or deploy multiple solar arrays near your factory site. Ensure total power output exceeds your planned production demand by 20%.", why: "Power shortage cascades: one offline assembler stops the next, which stops the next. Over-build power as insurance." },
  { step: "3", doThis: "Place Assemblers in a linear production chain. Each Assembler takes one input and produces one output. Connect them with conveyor lines or drone routes.", why: "Linear chains are easier to debug than branching networks. Master the simple chain before attempting complex multi-input production." },
  { step: "4", doThis: "Set up cargo drone routes from your mining outpost to your factory input depot. Configure the route frequency based on production speed.", why: "Drones automate raw material delivery. Set route frequency to match production consumption — too fast wastes drone energy, too slow starves assemblers." },
  { step: "5", doThis: "Add a Storage Depot at the end of each production chain to buffer output. Connect the depot to station markets via cargo ship for automated selling.", why: "Buffered storage prevents production stoppage when demand fluctuates. Automated selling turns your factory into a passive income source." },
  { step: "6", doThis: "Scale by duplicating successful production chains rather than building larger single chains. Parallel identical chains are easier to manage and debug.", why: "Parallel chains are fault-tolerant. If one chain breaks, the others continue producing. A single mega-chain failure stops everything." },
];

const chainRows = [
  ["Iron Ore", "Assembler (Basic Components)", "Basic Components", "Medium", "Foundation of all crafting — always in demand on the player market"],
  ["Copper Ore + Quartz", "Assembler (Electronics)", "Electronic Components", "High", "Required for advanced modules. High profit margin with minimal input complexity"],
  ["Basic Components + Electronic Components", "Assembler (Ship Parts)", "Thruster Units", "Very High", "Premium crafted goods. Every player needs thrusters — constant market demand"],
  ["Iron Ore + Titanium", "Assembler (Armor Plating)", "Reinforced Hull Sections", "High", "Used in all mid-game ships. Sell to combat-focused players and Corporations"],
  ["Deuterium", "Refinery (Fuel Processing)", "Refined Deuterium", "Very High", "Essential for Tier 2+ propulsion. Limited supply, constant demand — excellent margins"],
];

const searchIntentRows = [
  {
    query: "SpaceCraft factory setup guide",
    answer: "Secure mining first, over-build power, use linear production chains, and add drone logistics for automated material delivery.",
    href: "#setup-steps",
    label: "Setup",
  },
  {
    query: "SpaceCraft best production chain",
    answer: "Iron Ore to Basic Components to Ship Frames is the most profitable and reliable early automation chain.",
    href: "#best-chains",
    label: "Chains",
  },
  {
    query: "SpaceCraft drone vs cargo ship",
    answer: "Drones for short-range in-system transport. Cargo ships for interplanetary long-distance trade routes. Hybrid approach is optimal.",
    href: "#logistics",
    label: "Logistics",
  },
];

const jumpLinks = [
  { href: "#setup-steps", label: "Setup steps" },
  { href: "#best-chains", label: "Best chains" },
  { href: "#logistics", label: "Logistics" },
  { href: "/games/spacecraft/mining-guide", label: "Mining" },
  { href: "/games/spacecraft/trading-economy", label: "Trading" },
  { href: "/games/spacecraft/base-building", label: "Bases" },
];

export default function SpacecraftFactoryAutomationPage() {
  return (
    <SpacecraftArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Factory & Automation"
      heroImage={spacecraftImages.automation}
      heroAlt="SpaceCraft factory automation and production lines guide"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="How does automation work in SpaceCraft?"
        answer="SpaceCraft's automation system is inspired by Factorio and Satisfactory. You build planetary outposts, deploy Extractors on resource deposits, connect them to power sources, and set up production lines using drones and cargo ships for automated mining, refining, and interplanetary logistics."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Power First">
        <p>
          <strong>Power management is the foundation of automation.</strong>{" "}
          One Reactor Core can support 3-4 production buildings. Always over-build power before adding more production — a power outage halts your entire supply chain.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2 id="setup-steps">Automation Setup Steps</h2>
        <ArticleImage
          src={spacecraftImages.automation}
          alt="SpaceCraft automated production facility with drone networks"
          caption="Building a reliable automated production line requires careful planning of power, input logistics, and output storage. Start simple and scale incrementally."
        />
      </section>

      <ActionTable rows={setupSteps} />

      <section id="best-chains" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Best Early Automation Chains</h2>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          These production chains offer the best return on investment for early-game factories. Start with the Iron Ore chain and expand into Electronics once you have stable power and logistics.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-mist">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Input</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Process</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Output</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Profit Margin</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Notes</th>
              </tr>
            </thead>
            <tbody>
              {chainRows.map(([input, process, output, profit, notes]) => (
                <tr key={output} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{input}</td>
                  <td className="px-4 py-3 text-muted-foreground">{process}</td>
                  <td className="px-4 py-3 font-semibold text-foreground">{output}</td>
                  <td className="px-4 py-3 text-muted-foreground">{profit}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="logistics" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Drone vs Cargo Ship Logistics</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          <strong>Drones</strong> are your short-range workhorses. They are fast, cheap to operate, and ideal for moving resources between outposts and stations within the same planetary system. Configure drone routes with a frequency that matches your production consumption rate. Too fast wastes drone energy; too slow starves your assemblers of input materials.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          <strong>Cargo Ships</strong> handle interplanetary logistics. They have massive cargo capacity and can travel between star systems, but they are slower and more expensive to operate. Use cargo ships for selling finished goods at distant markets where prices are higher, or for importing rare resources from sectors you do not have outposts in.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          <strong>Hybrid approach:</strong> Most successful industrial operations use drones for local transport (outpost to local station) and cargo ships for long-distance trade (system to system). This minimizes operating costs while maximizing market access.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          For the mining outposts that feed your factories, see our{" "}
          <Link href="/games/spacecraft/mining-guide" className="text-foreground underline">mining guide</Link>.
          For selling your factory output at the best prices, see our{" "}
          <Link href="/games/spacecraft/trading-economy" className="text-foreground underline">trading and economy guide</Link>.
          For building the stations that house your factories, see our{" "}
          <Link href="/games/spacecraft/base-building" className="text-foreground underline">base building guide</Link>.
        </p>
      </section>
    </SpacecraftArticle>
  );
}
