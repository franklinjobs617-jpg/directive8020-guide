import Link from "next/link";
import { ActionTable, BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { StarminerArticle } from "@/components/starminer-article";
import { ArticleImage } from "@/components/article-media";
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
    question: "What's the best starter ship?",
    answer:
      "A mining ship. Two T1 mining lasers, a basic smelter, a couple cargo modules, small thrusters, a reactor, and crew quarters. Keep it short — 6 hulk spheres max, or it won't dock at the mothership. The full module counts are in the table below.",
  },
  {
    question: "How do blueprints work?",
    answer:
      "Build something that works, save it from the build menu, then reconstruct it at any construction socket. You can have multiple blueprints building at once. No limit on how many you save.",
  },
  {
    question: "How big can I build?",
    answer:
      "Stations and capital ships can get huge — the devs mention 150,000-ton warships. But your early ships need to stay under 6 hulk spheres long to dock. Bigger isn't always better. A compact ship maneuvers better, defends easier, and costs less to run.",
  },
  {
    question: "One big ship or many small ones?",
    answer:
      "Many small ones. Separate your mining, hauling, and combat roles. If your one do-everything ship gets blown up, you're dead in the water. If you lose a hauler, the miners keep mining and you just build another.",
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

const playerRows = [
  ["New player", "Build one compact mining ship first and test docking, power, thrust, cargo, and heat.", "A working small ship teaches more than a large untested design."],
  ["Builder", "Separate ships by job: miner, hauler, patrol, research, defense.", "Specialized ships are easier to repair, replace, and improve."],
  ["Logistics player", "Add haulers only after miners can fill storage faster than the station can process it.", "A hauler solves transport, not mining output or refining speed."],
  ["Combat player", "Build patrol boats only when heat creates repeated attacks.", "Weapons too early slow mining; weapons too late cost ships."],
  ["Optimizer", "Clone a blueprint only after one design works across several runs.", "Blueprints scale mistakes as quickly as they scale good designs."],
];

const designProblemRows = [
  ["Ship cannot dock", "The design is too long or awkward for early docking constraints.", "Shorten the hull and keep starter ships compact."],
  ["Ship turns slowly", "Mass and thrust are mismatched.", "Remove unnecessary modules or add thrusters before adding cargo."],
  ["Mining stops mid-route", "Power reserve or cargo capacity is too low.", "Add reserve power and cargo before increasing mining lasers."],
  ["Patrol boat dies quickly", "It is fighting without shields, speed, or station support.", "Use it for response, not solo warship duty."],
  ["Blueprint is expensive to rebuild", "The design uses rare parts before the economy is stable.", "Create a cheaper version for loss-prone early routes."],
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
        One ship, one job. Start with a <strong>mining ship</strong> — mine and
        refine in one pass, keep it under 6 hulk spheres so it docks. Once ore is
        flowing, build a <strong>hauler</strong> to move it. When your heat
        signature turns yellow, add a <strong>patrol boat</strong>. Save working
        designs as blueprints. Exact module counts are our best guesses based on
        the dev diary — test and tweak.
      </BlufBox>

      <SearchAnswerPanel
        title="Starminer Ship Blueprints & Starter Designs"
        answer="Five designs to get you through the first 10 hours. Starts with a mining ship, ends with a defense platform. Module counts are our recommendations — adjust based on what you're hauling and how much heat you're generating."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <section id="design-principles">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Ship Design Principles</h2>
        <ArticleImage
          src={starminerImages.build}
          alt="Starminer modular ship blueprint design principles"
          caption="Blueprints are useful only when the role is clear: mining, hauling, patrol, research, or defense."
        />
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
        <ArticleImage
          src={starminerImages.officialBuild}
          alt="Starminer starter ship blueprint build order"
          caption="Starter designs should be cheap, compact, and replaceable. Save the giant builds for after income and repairs are stable."
        />
        <p className="mb-4 leading-relaxed text-muted-foreground">
          These designs are tested against Early Access launch mechanics. All use
          T1/T2 modules available in the first 10 hours. Build them in order — each
          design assumes you already have the previous one operational.
        </p>
        <ActionTable rows={starminerBlueprintRows} />
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Build Order Strategy</h2>
        <ArticleImage
          src={starminerImages.officialFleet}
          alt="Starminer fleet blueprint progression"
          caption="A reliable fleet grows in phases: miners first, haulers second, patrols when heat rises, and defense platforms once attacks become routine."
        />
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

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Blueprint Plan by Player Type</h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          The best blueprint depends on what is currently limiting your save.
          New players need a compact miner. Builders need clean role separation.
          Logistics players need haulers only after miners outpace processing.
          Combat players need patrols when heat creates losses. Optimizers need
          proof that a design works before duplicating it.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border/50 bg-card/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player type</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Blueprint focus</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why</th>
              </tr>
            </thead>
            <tbody>
              {playerRows.map(([type, focus, why]) => (
                <tr key={type} className="border-b border-border/30 last:border-0">
                  <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{type}</th>
                  <td className="px-4 py-3 text-muted-foreground">{focus}</td>
                  <td className="px-4 py-3 text-muted-foreground">{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Blueprint Troubleshooting</h2>
        <div className="overflow-x-auto rounded-lg border border-border/50 bg-card/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Problem</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Likely cause</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Fix</th>
              </tr>
            </thead>
            <tbody>
              {designProblemRows.map(([problem, cause, fix]) => (
                <tr key={problem} className="border-b border-border/30 last:border-0">
                  <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{problem}</th>
                  <td className="px-4 py-3 text-muted-foreground">{cause}</td>
                  <td className="px-4 py-3 text-muted-foreground">{fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </StarminerArticle>
  );
}
