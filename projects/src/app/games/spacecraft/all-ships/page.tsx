import Link from "next/link";
import { ArticleImage } from "@/components/article-media";
import { BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { SpacecraftArticle } from "@/components/spacecraft-article";
import { createSpacecraftMetadata, spacecraftImages } from "@/lib/spacecraft";

const title = "SpaceCraft All Ships List: Stats, Unlock Requirements, Tier Rankings & Best Picks";
const description =
  "Complete SpaceCraft ship database with all ship stats, unlock requirements, tier rankings (S to D), role recommendations, and comparison tables for mining, combat, trading, and exploration.";
const canonical = "/games/spacecraft/all-ships";

export const metadata = createSpacecraftMetadata({
  title,
  description,
  canonical,
  image: spacecraftImages.shipBuilding,
});

const faqs = [
  {
    question: "What are all the ships in SpaceCraft?",
    answer:
      "SpaceCraft does not have pre-built ship classes — you design your own ships using modular parts. However, the community has established four major archetypes: Light Interceptors (A-tier, fast scouts), Medium Cruisers (S-tier, balanced multi-role), Heavy Dreadnoughts (B-tier, slow tanks), and Capital Flagships (S-tier, drone carriers). This guide covers the optimal part configurations for each role.",
  },
  {
    question: "How do I unlock new ships?",
    answer:
      "Ships in SpaceCraft are fully modular — there are no unlockable ship classes. You unlock individual components (frames, reactors, thrusters, weapons) through the tech tree by spending Tech Points. Your ship is defined by the components you install, not a pre-made hull. Blueprints for optimal configurations can be saved and shared with other players.",
  },
  {
    question: "What is the best ship for beginners?",
    answer:
      "A basic Medium Cruiser with a Reactor Core, two Thrusters, a Simple Mining Laser, and a Cargo Hold is the optimal beginner ship. It is affordable, survivable, and functional for all early-game activities. Do not attempt to build a Capital Flagship or Heavy Dreadnought until you have significant resources and Corporation support.",
  },
  {
    question: "What is the tier list for SpaceCraft ships?",
    answer:
      "S-Tier: Medium Cruiser (best all-rounder), Capital Flagship (best late-game carrier). A-Tier: Light Interceptor (best scout/explorer). B-Tier: Heavy Dreadnought (overkill for current content, extremely slow). No ship archetype is below B-Tier — SpaceCraft's modular system means even a poorly optimized ship can be effective if piloted well.",
  },
];

const comparisonRows = [
  ["Light Interceptor", "A", "Very High", "Very Low", "Very Low", "Exploration, scouting, courier missions", "Light frame, efficient thrusters, extended sensors. Minimal cargo and no armor."],
  ["Medium Cruiser", "S", "Medium", "Medium", "Medium", "Mining, trading, general purpose", "Balanced reactor, shields, and cargo. The community's recommended all-rounder configuration."],
  ["Heavy Dreadnought", "B", "Very Low", "Very High", "Very High", "Fleet defense, sector control (future)", "Maximum armor and shields. Extremely slow. High power draw. Overkill for current EA content."],
  ["Capital Flagship", "S", "Low", "High", "High (drone-based)", "Drone carrier, fleet command, endgame", "Deploys mining and combat drones. Corporation-level resources required. Massive cargo and drone bays."],
  ["Mining Barge", "A", "Low", "Low", "None", "Dedicated mining operations", "Multiple mining lasers, massive cargo holds, drone bay. Defenseless — requires escort in dangerous sectors."],
  ["Trade Hauler", "A", "Medium", "Low", "None", "Interstellar cargo transport", "Maximum cargo capacity, efficient engines, minimal defenses. Designed for safe-route bulk trading."],
];

const bestForRows = [
  ["Best Mining Ship", "Mining Barge (A-Tier)", "Multiple mining lasers, massive cargo, drone bay for automated extraction. Pair with a Corporation escort for deep-space mining."],
  ["Best Combat Ship", "Capital Flagship (S-Tier)", "Maximum weapon hardpoints, drone squadrons, fleet command capabilities. Combat not yet implemented — this is a future-proof build."],
  ["Best Trading Ship", "Trade Hauler (A-Tier)", "Maximum cargo-to-engine ratio. Efficient FTL drive for long-distance routes. Minimal defenses — stick to safe sectors."],
  ["Best Exploration Ship", "Light Interceptor (A-Tier)", "Fastest speed, longest sensor range, lowest fuel consumption. Can reach uncharted sectors before competitors."],
  ["Best Beginner Ship", "Medium Cruiser (S-Tier)", "Affordable, survivable, functional for all activities. The safest first build for learning all game mechanics."],
  ["Best Solo Player Ship", "Medium Cruiser (S-Tier)", "Versatile enough for mining, trading, and exploration without needing Corporation support. The true jack-of-all-trades."],
];

const searchIntentRows = [
  {
    query: "SpaceCraft ship tier list",
    answer: "S: Medium Cruiser, Capital Flagship. A: Light Interceptor, Mining Barge, Trade Hauler. B: Heavy Dreadnought. No archetype below B-tier.",
    href: "#comparison",
    label: "Tiers",
  },
  {
    query: "SpaceCraft best ship for each role",
    answer: "Mining: Barge. Combat: Flagship. Trading: Hauler. Exploration: Interceptor. Beginner: Cruiser. Solo: Cruiser.",
    href: "#best-for",
    label: "Best picks",
  },
  {
    query: "How to unlock ships in SpaceCraft",
    answer: "Ships are fully modular — no unlockable classes. You research components through the tech tree and assemble your own designs.",
    href: "#how-ships-work",
    label: "How ships work",
  },
];

const jumpLinks = [
  { href: "#how-ships-work", label: "How ships work" },
  { href: "#comparison", label: "Ship comparison" },
  { href: "#best-for", label: "Best picks" },
  { href: "/games/spacecraft/ship-building", label: "Ship building" },
  { href: "/games/spacecraft/tech-tree", label: "Tech tree" },
  { href: "/games/spacecraft/beginner-guide", label: "Beginner guide" },
];

export default function SpacecraftAllShipsPage() {
  return (
    <SpacecraftArticle
      title={title}
      description={description}
      canonical={canonical}
      label="All Ships"
      heroImage={spacecraftImages.shipBuilding}
      heroAlt="SpaceCraft complete ship database and tier list"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="What are all the ships in SpaceCraft?"
        answer="SpaceCraft does not have pre-built ship classes — you design your own ships using modular parts. However, the community has established four major archetypes: Light Interceptors (A-tier, fast scouts), Medium Cruisers (S-tier, balanced multi-role), Heavy Dreadnoughts (B-tier, slow tanks), and Capital Flagships (S-tier, drone carriers). This guide covers the optimal part configurations for each role."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Fully Modular">
        <p>
          <strong>Ships in SpaceCraft are fully modular — there are no 'unlockable' ship classes.</strong>{" "}
          This guide covers community-optimized part configurations and archetypes. Your ship is defined by the components you install, not a pre-made hull.
        </p>
      </BlufBox>

      <section id="how-ships-work" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">How Ship Stats Work</h2>
        <ArticleImage
          src={spacecraftImages.shipBuilding}
          alt="SpaceCraft complete ship database and comparison"
          caption="Understanding how ship stats interact with your module choices is the key to designing effective vessels. Every component you install changes multiple stats simultaneously."
        />
        <p className="text-sm leading-relaxed text-muted-foreground">
          SpaceCraft ships have no inherent stats — every number comes from the components you install. <strong>Speed</strong> is determined by your thrust-to-mass ratio (more thrusters = faster, more armor/cargo = slower). <strong>Armor</strong> comes from armor plating modules and hull reinforcement. <strong>Firepower</strong> depends on installed weapons and their power allocation. <strong>Cargo</strong> capacity is purely from Cargo Hold modules. The art of ship design is balancing these competing demands within your Reactor Core's power budget.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          A ship's <strong>Tier ranking</strong> reflects its overall effectiveness and cost-efficiency for its intended role. S-Tier configurations achieve the best results with the most efficient resource investment. B-Tier configurations are functional but either overpriced, overspecialized, or inefficient compared to higher-tier alternatives.
        </p>
      </section>

      <section id="comparison" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Ship Archetype Comparison</h2>
        <div className="overflow-x-auto rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-mist">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Archetype</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Tier</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Speed</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Armor</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Firepower</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Best Role</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Key Components</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map(([name, tier, speed, armor, firepower, role, components]) => (
                <tr key={name} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{name}</td>
                  <td className="px-4 py-3 font-bold text-foreground">{tier}</td>
                  <td className="px-4 py-3 text-muted-foreground">{speed}</td>
                  <td className="px-4 py-3 text-muted-foreground">{armor}</td>
                  <td className="px-4 py-3 text-muted-foreground">{firepower}</td>
                  <td className="px-4 py-3 text-muted-foreground">{role}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{components}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="best-for" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Best Ship for Each Role</h2>
        <div className="overflow-x-auto rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-mist">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Role</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Best Pick</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Why</th>
              </tr>
            </thead>
            <tbody>
              {bestForRows.map(([role, pick, reason]) => (
                <tr key={role} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{role}</td>
                  <td className="px-4 py-3 font-bold text-foreground">{pick}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          For detailed instructions on designing and optimizing each archetype, see our{" "}
          <Link href="/games/spacecraft/ship-building" className="text-foreground underline">ship building guide</Link>.
          For the tech tree unlocks needed to access advanced components, see our{" "}
          <Link href="/games/spacecraft/tech-tree" className="text-foreground underline">tech tree guide</Link>.
          If you are new to SpaceCraft, start with our{" "}
          <Link href="/games/spacecraft/beginner-guide" className="text-foreground underline">beginner guide</Link>{" "}
          before diving into ship optimization.
        </p>
      </section>
    </SpacecraftArticle>
  );
}
