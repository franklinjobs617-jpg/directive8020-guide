import Link from "next/link";
import { ArticleImage } from "@/components/article-media";
import { BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { SpacecraftArticle } from "@/components/spacecraft-article";
import { createSpacecraftMetadata, spacecraftImages } from "@/lib/spacecraft";

const title = "SpaceCraft Ship Building Guide: Designs, Modules, Upgrades & Best Ships";
const description =
  "Complete SpaceCraft ship building guide covering modular designs, engine types, weapon mounts, cargo optimization, shield generators, heat management, and best early-game ship builds for 2026.";
const canonical = "/games/spacecraft/ship-building";

export const metadata = createSpacecraftMetadata({
  title,
  description,
  canonical,
  image: spacecraftImages.shipBuilding,
});

const faqs = [
  {
    question: "What is the best ship in SpaceCraft?",
    answer:
      "There is no single best ship — your build depends on your role. For mining, prioritize cargo holds and mining lasers. For combat (coming in future updates), stack weapons and shields. For trading, maximize cargo and engine speed. Medium Cruisers (S-tier) with balanced shields, power grid, and energy weapons are the current community-preferred multi-role configuration.",
  },
  {
    question: "How does modular ship building work?",
    answer:
      "SpaceCraft ships are fully modular. You start with a basic frame and install individual components: Reactor Core (power), Thrusters (movement), Mining Lasers or Weapons (tools), Cargo Holds (storage), Shield Generators (defense), and Heat Sinks (cooling). Each module draws power from your reactor, so balancing your power grid is essential.",
  },
  {
    question: "What is the most important ship building rule?",
    answer:
      "Bury your reactor deep inside the ship surrounded by armor. Use a 2:1 ratio of shield generators to heat sinks. Never take a new design into high-risk sectors without sandbox stress-testing first.",
  },
  {
    question: "Can I have multiple ships?",
    answer:
      "Yes, you can own multiple ships and switch between them at any station or outpost with a docking bay. Players typically maintain a mining ship, a trading hauler, and eventually a combat vessel. Each ship must be built and upgraded separately.",
  },
];

const archetypeRows = [
  ["Tank", "Low", "Low", "Very High", "Very High", "Fleet defense, sector control. Stack heavy armor, multiple shield generators, reinforced reactor housing."],
  ["Glass Cannon", "Very High", "Medium", "Low", "Low", "High-damage hit-and-run attacks. Overclocked weapons, minimal armor, maximum engines. Vulnerable to sustained fire."],
  ["Scout", "Very High", "Low", "Low", "Low", "Exploration, sector scanning, courier missions. Light frame, efficient thrusters, extended sensor arrays."],
  ["Industrialist", "Low", "Very High", "Medium", "Medium", "Mining and hauling. Multiple cargo holds, dual mining lasers, drone bay for automated extraction."],
];

const metaRows = [
  ["Light Interceptor", "A", "A-tier scout. Fast, agile, low cost. Best for exploration and courier runs. Do not take into combat — one direct hit disables it."],
  ["Medium Cruiser", "S", "S-tier multi-role. Balanced shields, weapons, and cargo. The community-preferred general-purpose build. Use a 2:1 shield-to-heat-sink ratio."],
  ["Heavy Dreadnought", "B", "B-tier tank. Massive armor and shields, but extremely slow. High power draw requires largest reactor class. Overkill for current Early Access content."],
  ["Capital Flagship", "S", "S-tier drone carrier. Deploys mining and combat drones. Requires Corporation-level resources to build and maintain. Endgame fleet command ship."],
];

const searchIntentRows = [
  {
    query: "SpaceCraft best ship build",
    answer: "Medium Cruiser (S-tier) with balanced shields, power grid, and energy weapons is the current community meta.",
    href: "#meta-builds",
    label: "Meta",
  },
  {
    query: "SpaceCraft ship design tips",
    answer: "Bury the reactor in armor, use 2:1 shield-to-heat-sink ratio, and stress-test new designs in safe sectors first.",
    href: "#design-tips",
    label: "Tips",
  },
  {
    query: "SpaceCraft ship modules explained",
    answer: "Every ship is built from modular parts: Reactor Core, Thrusters, Weapons/Mining Lasers, Cargo Holds, Shield Generators, and Heat Sinks.",
    href: "#ship-archetypes",
    label: "Modules",
  },
];

const jumpLinks = [
  { href: "#ship-archetypes", label: "Archetypes" },
  { href: "#meta-builds", label: "Meta 2026" },
  { href: "#design-tips", label: "Design tips" },
  { href: "/games/spacecraft/beginner-guide", label: "Beginner" },
  { href: "/games/spacecraft/mining-guide", label: "Mining" },
  { href: "/games/spacecraft/combat-guide", label: "Combat" },
];

export default function SpacecraftShipBuildingPage() {
  return (
    <SpacecraftArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Ship Building"
      heroImage={spacecraftImages.shipBuilding}
      heroAlt="SpaceCraft ship building and design guide"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="How do I build the best ship in SpaceCraft?"
        answer="There is no single best ship — your build depends on your role. For mining, prioritize cargo holds and mining lasers. For combat (coming in future updates), stack weapons and shields. For trading, maximize cargo and engine speed. The meta for 2026 favors Medium Cruisers (S-tier) with balanced shields, power grid, and energy weapons."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Golden Rule">
        <p>
          <strong>Bury your reactor deep inside the ship surrounded by armor.</strong>{" "}
          Use a 2:1 ratio of shield generators to heat sinks. Never take a new design into high-risk sectors without sandbox stress-testing first.
        </p>
      </BlufBox>

      <section id="ship-archetypes" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Ship Archetypes</h2>
        <ArticleImage
          src={spacecraftImages.shipBuilding}
          alt="SpaceCraft modular ship construction and design archetypes"
          caption="SpaceCraft ships are defined by their module configuration, not a pre-made hull class. Each archetype serves a distinct role in the galaxy."
        />
        <div className="overflow-x-auto rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-mist">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Archetype</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Speed</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Cargo</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Armor</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Firepower</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Best Use</th>
              </tr>
            </thead>
            <tbody>
              {archetypeRows.map(([name, speed, cargo, armor, firepower, bestUse]) => (
                <tr key={name} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{speed}</td>
                  <td className="px-4 py-3 text-muted-foreground">{cargo}</td>
                  <td className="px-4 py-3 text-muted-foreground">{armor}</td>
                  <td className="px-4 py-3 text-muted-foreground">{firepower}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{bestUse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="meta-builds" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Meta Ship Builds 2026</h2>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          These are the community-optimized ship configurations for the current Early Access meta. All builds are based on modular part combinations — no pre-built hulls exist in SpaceCraft. Tier rankings reflect current gameplay balance as of June 2026.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-mist">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Build</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Tier</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Design Notes</th>
              </tr>
            </thead>
            <tbody>
              {metaRows.map(([build, tier, notes]) => (
                <tr key={build} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{build}</td>
                  <td className="px-4 py-3 font-bold text-foreground">{tier}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="design-tips" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Pro Design Tips</h2>
        <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
          <li><strong>Reactor placement:</strong> Bury your Reactor Core in the center of your ship, surrounded by at least one layer of armor on all sides. A destroyed reactor disables your entire ship.</li>
          <li><strong>Heat management:</strong> Every active module generates heat. Use a 2:1 ratio of Shield Generators to Heat Sinks. Overheating causes module shutdown in order of power draw (highest first).</li>
          <li><strong>Power budget:</strong> Add up the power draw of every installed module. Your Reactor Core's output must exceed this total by at least 15% to handle surge demands during combat or emergency maneuvers.</li>
          <li><strong>Thruster placement:</strong> Place thrusters symmetrically around your center of mass. Asymmetric thruster placement causes drift that makes mining and combat significantly harder.</li>
          <li><strong>Cargo positioning:</strong> Place Cargo Holds near the center of the ship. Full cargo holds shift your center of mass — centralized placement minimizes handling impact.</li>
          <li><strong>Sandbox testing:</strong> Before taking any new design into a dangerous sector, fly it in a safe zone. Test acceleration, turning, power draw under load, and heat buildup. One design flaw in a hostile sector can mean losing your entire ship.</li>
          <li><strong>Modularity principle:</strong> Design ships with modular sections that can be swapped without rebuilding the entire frame. This saves enormous resources as you upgrade individual components over time.</li>
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          For combat-specific ship configurations, see our{" "}
          <Link href="/games/spacecraft/combat-guide" className="text-foreground underline">combat guide</Link>
          {" "}(note: combat not yet implemented). For mining-optimized builds, check our{" "}
          <Link href="/games/spacecraft/mining-guide" className="text-foreground underline">mining guide</Link>.
          For the complete ship database, see{" "}
          <Link href="/games/spacecraft/all-ships" className="text-foreground underline">all ships</Link>.
        </p>
      </section>
    </SpacecraftArticle>
  );
}
