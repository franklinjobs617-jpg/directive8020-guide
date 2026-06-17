import Link from "next/link";
import { ArticleImage } from "@/components/article-media";
import { ActionTable, BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { SpacecraftArticle } from "@/components/spacecraft-article";
import { createSpacecraftMetadata, spacecraftImages } from "@/lib/spacecraft";

const title = "SpaceCraft Mining Guide: Asteroids, Best Resources, Mining Lasers & Drones";
const description =
  "SpaceCraft mining guide for asteroid extraction, resource scanning, mining laser types, best ores to sell, refinery chains, drone automation, and optimal mining ship loadouts.";
const canonical = "/games/spacecraft/mining-guide";

export const metadata = createSpacecraftMetadata({
  title,
  description,
  canonical,
  image: spacecraftImages.mining,
});

const faqs = [
  {
    question: "What should I mine first in SpaceCraft?",
    answer:
      "Start with basic ores: Iron (from Ferric Stone), Copper (from Cupric Stone), and Quartz (from Grey Quartz deposits). These are needed for all early-game crafting. Prioritize Deuterium extraction as soon as possible — it is the bottleneck resource for all Tier 2 propulsion technology.",
  },
  {
    question: "What is the best mining laser?",
    answer:
      "Carry both a Simple Mining Laser (unlimited durability, used for basic ores) and an Overclocked Mining Laser (faster extraction, used for complex metals like Malachite and Azurite). The Overclocked laser cannot be repaired — use it sparingly on high-value targets only.",
  },
  {
    question: "How do I set up automated mining?",
    answer:
      "Purchase a Personal Factory, scan a planet for resource deposits, land near your chosen spot, place an Outpost Core, connect Extractors to the deposit, power them with solar arrays or generators, and deploy mining drones. Automated mining continues while you are offline or in other sectors.",
  },
  {
    question: "Which resources sell for the most?",
    answer:
      "Deuterium, Malachite, and Azurite command the highest market prices. However, crafted ship parts (engines, reactors, weapons) sell for significantly more than raw ore. For maximum profit, refine ore into components before selling.",
  },
];

const resourceRows = [
  ["Iron (Ferric Stone)", "Starter sectors, common asteroids", "Simple Mining Laser", "Low", "Basic ship frames, basic components, all early-game crafting"],
  ["Copper (Cupric Stone)", "Starter sectors, common asteroids", "Simple Mining Laser", "Low", "Wiring, electronics, power grid components"],
  ["Quartz (Grey Quartz)", "Starter sectors, asteroid fields", "Simple Mining Laser", "Low-Medium", "Glass, optics, sensor arrays, basic shielding"],
  ["Deuterium", "Gas giants, nebula sectors", "Specialized Extractor", "High", "Tier 2+ propulsion fuel, reactor upgrades, advanced thrusters"],
  ["Malachite", "Mid-game sectors, rare asteroids", "Overclocked Mining Laser", "Very High", "Advanced electronics, high-grade wiring, capital ship components"],
  ["Azurite", "Deep space sectors, rare deposits", "Overclocked Mining Laser", "Very High", "Shield generators, reactor cooling, advanced energy weapons"],
  ["Titanium", "Mid-game asteroid belts", "Simple Mining Laser", "Medium-High", "Armor plating, reinforced frames, military-grade hulls"],
  ["Gold", "Rare asteroid deposits, all sectors", "Either laser type", "High", "Premium electronics, trading currency, Corporation vault reserves"],
];

const laserRows = [
  ["Simple Mining Laser", "Unlimited", "Low", "Basic ores", "Starter gear — your workhorse for iron, copper, quartz, and titanium"],
  ["Overclocked Mining Laser", "Limited (cannot repair)", "High", "Complex metals", "For Malachite, Azurite, and Gold. Use sparingly — once durability is gone, it is destroyed"],
  ["Heavy Extractor", "Unlimited", "Medium", "Gas and liquid", "Specialized for Deuterium and gas giant resources. Cannot mine solid asteroids"],
  ["Drone Mining Bay", "Unlimited (drone energy)", "Medium", "All (automated)", "Deploys mining drones for automated extraction. Requires Outpost Core and power source"],
];

const automationSteps = [
  { step: "1", doThis: "Purchase a Personal Factory (~200 credits) from any station market.", why: "The Personal Factory is required to build Outpost Cores and Extractors. It is your gateway to automation." },
  { step: "2", doThis: "Scan planets from orbit using your ship's scanner. Look for unclaimed resource deposits with high concentration percentages.", why: "Deposit concentration determines extraction rate. A 70%+ concentration deposit produces significantly more resources than a 30% one." },
  { step: "3", doThis: "Land near your chosen deposit and place an Outpost Core. This claims the area and serves as your automation hub.", why: "The Outpost Core is the central controller for all automated buildings. Without it, Extractors and drones cannot function." },
  { step: "4", doThis: "Place Extractors directly on resource deposits. Connect them to power sources — solar arrays for safe sectors, generators for hostile zones.", why: "Extractors must be placed on the deposit node. Power is essential — an unpowered Extractor produces nothing." },
  { step: "5", doThis: "Deploy cargo drones from the Outpost Core to automatically transport extracted resources to your storage depot or station market.", why: "Drones eliminate manual hauling. They run continuously and can be routed to multiple drop-off points for efficient logistics." },
];

const searchIntentRows = [
  {
    query: "SpaceCraft best ore to mine",
    answer: "Start with Iron, Copper, and Quartz. Rush Deuterium for Tier 2 propulsion. Malachite and Azurite are the highest-value late-game ores.",
    href: "#resources",
    label: "Ores",
  },
  {
    query: "SpaceCraft mining laser comparison",
    answer: "Simple Laser = unlimited durability for basic ores. Overclocked Laser = faster but finite (cannot repair). Heavy Extractor = gases only.",
    href: "#lasers",
    label: "Lasers",
  },
  {
    query: "SpaceCraft automated mining setup",
    answer: "Buy a Personal Factory, scan planets, place Outpost Core, connect Extractors to power, deploy drones for automated hauling.",
    href: "#automation",
    label: "Auto",
  },
];

const jumpLinks = [
  { href: "#resources", label: "Resources" },
  { href: "#lasers", label: "Mining lasers" },
  { href: "#automation", label: "Automation" },
  { href: "/games/spacecraft/ship-building", label: "Ship builds" },
  { href: "/games/spacecraft/factory-automation", label: "Factories" },
  { href: "/games/spacecraft/trading-economy", label: "Selling" },
];

export default function SpacecraftMiningGuidePage() {
  return (
    <SpacecraftArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Mining Guide"
      heroImage={spacecraftImages.mining}
      heroAlt="SpaceCraft asteroid mining and resource guide"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="What should I mine first in SpaceCraft?"
        answer="Start with basic ores: Iron (from Ferric Stone), Copper (from Cupric Stone), and Quartz (from Grey Quartz deposits). These are needed for all early-game crafting. Prioritize Deuterium extraction as soon as possible — it is the bottleneck resource for all Tier 2 propulsion technology."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Laser Rule">
        <p>
          <strong>Always carry both a Simple Mining Laser and an Overclocked Mining Laser.</strong>{" "}
          Use the Simple Laser for basic mining (unlimited durability) and save the Overclocked laser for complex metals like Malachite and Azurite. The Overclocked laser cannot be repaired — use it sparingly.
        </p>
      </BlufBox>

      <section id="resources" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Resources and Where to Find Them</h2>
        <ArticleImage
          src={spacecraftImages.mining}
          alt="SpaceCraft asteroid mining resource map"
          caption="Knowing which laser to use on each resource and where to find high-concentration deposits is the difference between struggling for credits and building an industrial empire."
        />
        <div className="overflow-x-auto rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-mist">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Resource</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Location</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Best Tool</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Market Value</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Primary Use</th>
              </tr>
            </thead>
            <tbody>
              {resourceRows.map(([name, location, tool, value, use]) => (
                <tr key={name} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{location}</td>
                  <td className="px-4 py-3 text-muted-foreground">{tool}</td>
                  <td className="px-4 py-3 text-muted-foreground">{value}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="lasers" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Mining Laser Comparison</h2>
        <div className="overflow-x-auto rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-mist">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Laser Type</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Durability</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Speed</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Best For</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Notes</th>
              </tr>
            </thead>
            <tbody>
              {laserRows.map(([type, durability, speed, bestFor, notes]) => (
                <tr key={type} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{type}</td>
                  <td className="px-4 py-3 text-muted-foreground">{durability}</td>
                  <td className="px-4 py-3 text-muted-foreground">{speed}</td>
                  <td className="px-4 py-3 text-muted-foreground">{bestFor}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="automation" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">How to Set Up Automated Mining</h2>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          Automated mining is the key milestone that transforms SpaceCraft from a manual grind into an industrial operation. Once set up, your outposts generate resources continuously — even while you are offline or operating in other sectors.
        </p>
      </section>

      <ActionTable rows={automationSteps} />

      <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
        Once your automated mining is operational, the next step is building production lines to refine those resources into valuable components. See our{" "}
        <Link href="/games/spacecraft/factory-automation" className="text-foreground underline">factory automation guide</Link>{" "}
        for the complete production chain setup. For selling your output, check our{" "}
        <Link href="/games/spacecraft/trading-economy" className="text-foreground underline">trading and economy guide</Link>.
      </p>
    </SpacecraftArticle>
  );
}
