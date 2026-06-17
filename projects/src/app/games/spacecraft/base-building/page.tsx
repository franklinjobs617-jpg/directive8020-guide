import Link from "next/link";
import { ArticleImage } from "@/components/article-media";
import { ActionTable, BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { SpacecraftArticle } from "@/components/spacecraft-article";
import { createSpacecraftMetadata, spacecraftImages } from "@/lib/spacecraft";

const title = "SpaceCraft Base Building Guide: Stations, Defense Turrets, Storage & Expansion";
const description =
  "SpaceCraft base building guide covering space station construction, defense turret placement, storage depot management, docking bay expansion, power grid design, and strategic placement in hostile sectors.";
const canonical = "/games/spacecraft/base-building";

export const metadata = createSpacecraftMetadata({
  title,
  description,
  canonical,
  image: spacecraftImages.automation,
});

const faqs = [
  {
    question: "How do I build a base in SpaceCraft?",
    answer:
      "Purchase a Personal Factory (~200 credits), scan planets from orbit for unclaimed resource deposits, land near your chosen spot, and place an Outpost Core. Connect Extractors, power sources (solar arrays or generators), and storage depots. Once the core is operational, add drones and cargo ships for automation.",
  },
  {
    question: "Where should I build my first base?",
    answer:
      "Build your first base in a safe, low-traffic sector within your faction's territory. Hostile sectors offer better resources but require substantial defense investment. An undefended base in a contested zone will be looted or destroyed. Starter sectors near faction stations are ideal for learning base mechanics.",
  },
  {
    question: "How do defense turrets work?",
    answer:
      "Defense turrets provide automated protection for your base. They require power and ammunition (for kinetic turrets) or direct power feed (for energy turrets). Turret effectiveness depends on placement — overlapping fields of fire prevent blind spots. Defense turrets are most important for bases in contested or high-value sectors.",
  },
  {
    question: "How do I expand my base?",
    answer:
      "Upgrade your Outpost Core to increase the build radius and structure limit. Add docking bays to accommodate more ships. Expand storage depots as production scales. Add drone bays for automated logistics. Each expansion increases power consumption — always upgrade your power infrastructure before adding new structures.",
  },
];

const buildSteps = [
  { step: "1", doThis: "Purchase a Personal Factory (~200 credits) and scan planets from orbit using your ship's scanner for unclaimed resource deposits.", why: "Personal Factory unlocks Outpost Core construction. Scanning reveals deposit concentration and identifies unclaimed territory." },
  { step: "2", doThis: "Land near the chosen deposit and place an Outpost Core. Position it centrally within the buildable area.", why: "The Outpost Core is the heart of your base. Central placement maximizes the buildable radius for future expansion." },
  { step: "3", doThis: "Build a Power Plant or deploy solar arrays. Calculate total power needs and over-build by 30% for future expansion headroom.", why: "Power is the first bottleneck. Under-powered bases have stalled production and inactive defenses. Over-build from the start." },
  { step: "4", doThis: "Place Extractors on resource deposits and connect them to the power grid. Configure extraction rate based on your production needs.", why: "Extractors are your resource income source. Place them directly on deposit nodes — offset placement drastically reduces output." },
  { step: "5", doThis: "Add Storage Depots near the Outpost Core. Configure depot categories (raw ore, refined materials, components, fuel) for organized inventory.", why: "Organized storage prevents inventory chaos. Categorized depots make it easy to find resources and monitor stock levels at a glance." },
  { step: "6", doThis: "Install defense turrets at the perimeter. Overlap fields of fire to eliminate blind spots. Connect turrets to the power grid and stock ammunition if using kinetic turrets.", why: "An undefended base is a target. Even in safe sectors, turrets deter opportunistic raiders and (when combat arrives) will be essential for survival." },
  { step: "7", doThis: "Build a Docking Bay for ship access. Start with a basic bay (2 ship capacity) and upgrade as your fleet grows.", why: "Docking Bays allow you and Corporation members to land, refuel, and transfer cargo at your base. Essential for logistics." },
];

const turretRows = [
  ["Kinetic Turret", "Medium", "Medium", "Ammunition", "Standard defense. Good all-around performance. Requires ammo resupply."],
  ["Energy Turret", "High", "High", "Direct Power", "Premium defense. Higher damage, no ammo needed, but significant power draw."],
  ["Missile Battery", "Very High", "Low", "Missiles", "Heavy anti-ship defense. Slow fire rate but devastating damage. Expensive ammunition."],
  ["Point Defense", "Low", "Very High", "Direct Power", "Anti-drone and anti-missile defense. Rapid fire, low damage per shot. Protects against swarm attacks."],
];

const searchIntentRows = [
  {
    query: "SpaceCraft base building guide",
    answer: "Buy Personal Factory, scan planets, place Outpost Core, connect Extractors to power, add storage, turrets, and docking bays.",
    href: "#build-steps",
    label: "Build",
  },
  {
    query: "SpaceCraft best base location",
    answer: "First base: safe, low-traffic sector in faction territory near resource deposits. Avoid contested zones until you can afford defenses.",
    href: "#location",
    label: "Location",
  },
  {
    query: "SpaceCraft defense turret types",
    answer: "Kinetic (ammo-based, balanced), Energy (high power draw, high damage), Missile (anti-ship), Point Defense (anti-drone/missile).",
    href: "#turret-types",
    label: "Turrets",
  },
];

const jumpLinks = [
  { href: "#build-steps", label: "Build steps" },
  { href: "#location", label: "Best locations" },
  { href: "#turret-types", label: "Turret types" },
  { href: "/games/spacecraft/factory-automation", label: "Automation" },
  { href: "/games/spacecraft/mining-guide", label: "Mining" },
  { href: "/games/spacecraft/factions-guide", label: "Factions" },
];

export default function SpacecraftBaseBuildingPage() {
  return (
    <SpacecraftArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Base Building"
      heroImage={spacecraftImages.automation}
      heroAlt="SpaceCraft base building and defense guide"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="How do I build a base in SpaceCraft?"
        answer="Purchase a Personal Factory (~200 credits), scan planets from orbit for unclaimed resource deposits, land near your chosen spot, and place an Outpost Core. Connect Extractors, power sources (solar arrays or generators), and storage depots. Once the core is operational, add drones and cargo ships for automation."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Location Matters">
        <p>
          <strong>Build your first base in a safe, low-traffic sector.</strong>{" "}
          Hostile sectors offer better resources but require substantial defense investment. An undefended base in a contested zone will be looted or destroyed.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2 id="build-steps">Base Building Step-by-Step</h2>
        <ArticleImage
          src={spacecraftImages.automation}
          alt="SpaceCraft planetary base construction and defense layout"
          caption="A well-planned base starts with the Outpost Core and grows outward with power, extractors, storage, defenses, and docking infrastructure."
        />
      </section>

      <ActionTable rows={buildSteps} />

      <section id="location" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Best Planets for Early Bases</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          <strong>Starter sector planets</strong> are the safest choice for your first base. They have moderate resource deposits, faction station proximity, and minimal player competition. Specifically, look for planets with at least two different resource deposit types and a deposit concentration of 50% or higher. Planets with Ferric Stone and Cupric Stone deposits in the same area are ideal — they provide both Iron and Copper for early crafting.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          <strong>Avoid:</strong> Planets in frontier sectors (high player traffic, future PvP zones), gas giants (cannot land, only orbital stations), and planets in Corporation-controlled contested zones (you may lose access if the controlling Corporation changes). As you gain experience, mid-game planets with Deuterium or Titanium deposits become attractive, but they require significant defense investment.
        </p>
      </section>

      <section id="turret-types" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Defense Turret Types</h2>
        <div className="overflow-x-auto rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-mist">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Turret Type</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Damage</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Fire Rate</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Resource</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Notes</th>
              </tr>
            </thead>
            <tbody>
              {turretRows.map(([type, damage, fireRate, resource, notes]) => (
                <tr key={type} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{type}</td>
                  <td className="px-4 py-3 text-muted-foreground">{damage}</td>
                  <td className="px-4 py-3 text-muted-foreground">{fireRate}</td>
                  <td className="px-4 py-3 text-muted-foreground">{resource}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          For integrating your base with automated production, see our{" "}
          <Link href="/games/spacecraft/factory-automation" className="text-foreground underline">factory automation guide</Link>.
          For mining outpost optimization, see our{" "}
          <Link href="/games/spacecraft/mining-guide" className="text-foreground underline">mining guide</Link>.
        </p>
      </section>
    </SpacecraftArticle>
  );
}
