import Link from "next/link";
import { ActionTable, BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { StarminerArticle } from "@/components/starminer-article";
import {
  createStarminerMetadata,
  starminerBlueprintRows,
  starminerImages,
} from "@/lib/starminer";

const title = "Starminer Ship Blueprints: 5 Best Starter Designs with Module Lists";
const description =
  "Complete Starminer ship blueprint guide with 5 proven starter designs: mining ship, hauler, patrol boat, research station, and defense platform. Module lists, build order, and role-specific tips.";
const canonical = "/games/starminer/ship-blueprints";

export const metadata = createStarminerMetadata({
  title,
  description,
  canonical,
  image: starminerImages.build,
});

const faqs = [
  {
    question: "What is the best starter ship in Starminer?",
    answer:
      "A dedicated mining ship with 2x T1 Mining Lasers, 1x Basic Smelter, 2x Cargo modules, 4x Small Thrusters, 1x Small Reactor, and 1x Crew Quarters. Keep it under 6 hulk spheres long so it can dock at the mothership.",
  },
  {
    question: "How do I save and reuse ship blueprints?",
    answer:
      "Once a ship design is stable, use the blueprint save function in the build menu. Saved blueprints can be placed and constructed at any construction socket. Multiple blueprints can be built simultaneously if you have the materials.",
  },
  {
    question: "How big should my ship be?",
    answer:
      "Keep ships under 5-6 hulk spheres in length to ensure they can dock inside the mothership. Larger designs are possible for stations and capital ships, but early-game ships should be compact and specialized.",
  },
  {
    question: "Should I build one big ship or many small ones?",
    answer:
      "Many small, specialized ships are better than one multi-role vessel. Separate mining, hauling, patrol, and research functions so you can iterate on each design independently and replace losses without crippling your entire operation.",
  },
];

const searchIntentRows = [
  {
    query: "Starminer ship blueprints",
    answer: "5 starter designs: mining ship (2 lasers + smelter), hauler (4 cargo), patrol boat (2 pulse lasers + shield), research station, and defense platform.",
    href: "#starter-designs",
    label: "Designs",
  },
  {
    query: "Starminer best starter ship",
    answer: "Mining ship: 2x T1 Mining Lasers, 1x Basic Smelter, 2x Cargo, 4x Small Thrusters, 1x Small Reactor, 1x Crew Quarters. Total ~12 modules.",
    href: "#mining-ship",
    label: "Starter",
  },
  {
    query: "Starminer ship design tips",
    answer: "Build by role, not by size. Keep mass balanced. Match thrusters to weight. Leave power reserve for weapons and shields.",
    href: "#design-principles",
    label: "Tips",
  },
  {
    query: "Starminer how to save blueprint",
    answer: "Save from the build menu after testing. Blueprints can be reconstructed at any socket with available materials.",
    href: "/games/starminer/multiplayer-mods-blueprints",
    label: "Save",
  },
];

const jumpLinks = [
  { href: "#design-principles", label: "Design principles" },
  { href: "#starter-designs", label: "5 starter designs" },
  { href: "/games/starminer/ship-building", label: "Ship mechanics" },
  { href: "/games/starminer/mining-logistics", label: "Mining & logistics" },
  { href: "/games/starminer/heat-aliens-defense", label: "Heat & defense" },
  { href: "/games/starminer/make-money", label: "Make money" },
];

export default function StarminerBlueprintsPage() {
  return (
    <StarminerArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Ship Blueprints"
      heroImage={starminerImages.build}
      heroAlt="Starminer modular ship construction showing hulk spheres, thrusters, and mining lasers"
      faqs={faqs}
      showSources={false}
    >
      <BlufBox title="BLUF">
        Build specialized ships by role, not one multi-purpose vessel. Your first
        ship should be a <strong>mining ship</strong> (2x T1 Mining Lasers + Basic
        Smelter + 2x Cargo). Second: a <strong>hauler</strong> (4x Cargo, no mining
        gear) to double throughput. Third: a <strong>patrol boat</strong> when heat
        hits yellow (150+ kW). Keep all ships under <strong>6 hulk spheres</strong>{" "}
        long to dock at the mothership. Save every working design as a blueprint.
      </BlufBox>

      <SearchAnswerPanel
        title="Starminer Ship Blueprints & Starter Designs"
        answer="5 role-specific designs: mining ship, hauler, patrol boat, research station, and defense platform. Each with complete module lists, build order, and when to build them."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <section id="design-principles">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Ship Design Principles</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { title: "Build by Role", desc: "Each ship does one job. A miner mines. A hauler hauls. A patrol boat fights. Mixing roles creates expensive ships that do everything poorly." },
            { title: "Keep It Compact", desc: "Ships under 6 hulk spheres dock at the mothership. Larger ships are harder to maneuver, defend, and supply. Expand only when the role demands it." },
            { title: "Balance Mass & Thrust", desc: "Every module adds mass. More mass needs more thrust. Heavier ships burn more fuel and turn slower. Match your thruster count to your cargo weight." },
            { title: "Leave Power Reserve", desc: "Weapons, shields, and production modules all draw power. If your reactor runs at 100%, one hit can cascade into a total shutdown. Keep 20% reserve." },
            { title: "Manage Heat", desc: "Every active module generates heat. Mining lasers and smelters are the worst offenders. Build radiators at a 2:1 ratio to heat-generating modules." },
            { title: "Save Blueprints", desc: "Once a design works, save it. Blueprints let you rebuild instantly at any construction socket. Test in Sandbox mode before committing in Campaign." },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-border/50 bg-card/30 p-5">
              <h3 className="text-base font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="starter-designs" className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">5 Starter Ship Designs</h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          These designs are tested against Early Access launch mechanics. All use
          T1/T2 modules available in the first 10 hours. Build them in order — each
          design assumes you already have the previous one operational.
        </p>
        <ActionTable rows={starminerBlueprintRows} />
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Build Order Strategy</h2>
        <div className="space-y-4">
          {[
            { phase: "Phase 1 (0-2 hours)", builds: ["Mining Ship x2"], goal: "Stable ore income. Two miners keep one smelter running constantly. Sell surplus iron to fund the hauler." },
            { phase: "Phase 2 (2-5 hours)", builds: ["Hauler x1", "Research Station x1"], goal: "Double throughput. Hauler moves ore while miners keep mining. Research station unlocks T2 modules." },
            { phase: "Phase 3 (5-8 hours)", builds: ["Patrol Boat x1", "Upgrade miners to T2 lasers"], goal: "Heat is climbing. Patrol boat handles scouts. T2 lasers improve yield by ~30%." },
            { phase: "Phase 4 (8+ hours)", builds: ["Defense Platform x1", "Second Hauler", "Expand to second sector"], goal: "Heat consistently hits orange. Defense platform protects mining ops. Second hauler supports expansion." },
          ].map((phase) => (
            <div key={phase.phase} className="rounded-lg border border-d8020/25 bg-d8020/5 p-5">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-sm font-bold text-d8020">{phase.phase}</span>
                <span className="text-xs text-muted-foreground">Build: {phase.builds.join(" · ")}</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{phase.goal}</p>
            </div>
          ))}
        </div>
      </section>
    </StarminerArticle>
  );
}
