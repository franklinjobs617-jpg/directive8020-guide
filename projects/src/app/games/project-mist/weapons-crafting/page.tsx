import { ActionTable, BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { ProjectMistArticle } from "@/components/project-mist-article";
import {
  createProjectMistMetadata,
  projectMistCraftingRows,
  projectMistImages,
} from "@/lib/project-mist";

const title = "Project: Mist Weapons, Crafting & Best Gear Guide";
const description =
  "Complete Project: Mist weapons and crafting guide. All weapon locations, best early gear, Gravity Gun upgrades, ammo crafting recipes, medkit formula, train base build order, and material farming tips.";
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
      "Shotgun — found in the Greenhouse facility first floor armory. High close-range damage, reveals invisible enemies, and one-shots small creatures. Craft shells at 1 gunpowder + 1 scrap metal = 4 shells. Most ammo-efficient weapon in Early Access.",
  },
  {
    question: "How do I upgrade the Gravity Gun?",
    answer:
      "Spend Blood Orbs in the perks menu. Tier 1: stronger pull. Tier 2: throw objects as projectiles (3x pistol damage). Tier 3: briefly grab enemies. Prioritize Blood Orbs for Tier 2 — it's the biggest power spike in the game.",
  },
  {
    question: "How do I craft ammo and medkits?",
    answer:
      "Ammo at workbench: gunpowder + scrap metal. Rifle: 1+1=8 rounds. Shotgun: 1+1=4 shells. Medkit: 1 cloth + 1 alcohol + 1 herb. You cannot buy ammo — crafting is the only reliable source. Scrap duplicate weapons for metal.",
  },
  {
    question: "What's the best train base build order?",
    answer:
      "Storage Depot → Workbench Tier 2 → Armory → Defensive Turrets. Storage first because it gates everything else. More storage = longer expeditions. Turrets auto-defend the train while you craft.",
  },
];

const searchIntentRows = [
  {
    query: "Project Mist weapons guide",
    answer: "Shotgun (Greenhouse armory), Rifle (Comm Tower), Gravity Gun upgrades (Blood Orbs). Shotgun is best early — reveals invisible enemies and one-shots small creatures.",
    href: "#weapons",
    label: "Weapons",
  },
  {
    query: "Project Mist crafting recipes",
    answer: "Ammo: gunpowder + scrap metal. Medkits: cloth + alcohol + herb. EMP grenade: copper wire + battery + explosive compound.",
    href: "#crafting",
    label: "Recipes",
  },
  {
    query: "Project Mist best gear",
    answer: "Shotgun + Rifle combo. Gravity Gun Tier 2. 3+ medkits. Upgrade weapons before crafting new ones.",
    href: "#best-gear",
    label: "Best",
  },
  {
    query: "Project Mist Gravity Gun upgrade",
    answer: "Spend Blood Orbs in perks menu. Rush Tier 2 — thrown objects deal 3x pistol damage. Tier 3 lets you grab enemies.",
    href: "#gravity-gun",
    label: "Gravity Gun",
  },
];

const jumpLinks = [
  { href: "#weapons", label: "All weapons" },
  { href: "#crafting", label: "Crafting" },
  { href: "#best-gear", label: "Best gear" },
  { href: "/games/project-mist/all-bosses", label: "Boss guide" },
  { href: "/games/project-mist/beginner-guide", label: "Beginner guide" },
  { href: "/games/project-mist/building-train-base", label: "Train base" },
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
      <BlufBox title="BLUF">
        The Gravity Gun is your best tool — upgrade it with Blood Orbs as soon as
        you can. The Steam page confirms crafting exists, and you can't buy ammo,
        so learning recipes matters. Specific weapon locations and crafting
        formulas below are from community reports and preview footage, not our
        own testing yet. <strong>We'll verify and update.</strong>
      </BlufBox>

      <SearchAnswerPanel
        title="Project: Mist Weapons & Crafting"
        answer="Gravity Gun with Blood Orb upgrades is your core tool. Crafting is confirmed but specific recipes need verification. Community reports are our current source — we're testing firsthand."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <section id="weapons" className="mb-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">All Weapons & Gear</h2>
        <ActionTable rows={projectMistCraftingRows} />
      </section>

      <section id="crafting" className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Crafting Recipe Quick Reference</h2>
        <div className="overflow-x-auto rounded-lg border border-border/50 bg-card/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Item</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Ingredients</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Yield</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Where to Farm Materials</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Rifle Rounds", "1 Gunpowder + 1 Scrap Metal", "8 rounds", "Military crates (gunpowder), scrap weapons (metal)"],
                ["Shotgun Shells", "1 Gunpowder + 1 Scrap Metal", "4 shells", "Same as rifle — prioritize rifle if low on both"],
                ["Medkit", "1 Cloth + 1 Alcohol + 1 Herb", "1 medkit", "Containers (cloth), kitchens (alcohol), outdoor bushes (herbs)"],
                ["EMP Grenade", "2 Copper Wire + 1 Battery + 1 Explosive Compound", "1 grenade", "Facility storage (wire/battery), military crates (compound)"],
                ["Bandage", "2 Cloth", "2 bandages", "Lootable containers throughout all areas"],
                ["Weapon Repair Kit", "2 Scrap Metal + 1 Oil", "1 kit", "Break down weapons (metal), facility machinery rooms (oil)"],
                ["Upgraded Magazine", "3 Scrap Metal + 2 Copper Wire", "1 magazine", "Hold 50% more rounds before reloading"],
              ].map((row, i) => (
                <tr key={i} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{row[0]}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row[1]}</td>
                  <td className="px-4 py-3 text-d8020 font-semibold">{row[2]}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="best-gear" className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Best Loadout Per Role</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              role: "Solo Player",
              weapons: "Shotgun (primary) + Rifle (secondary) + Pistol (backup)",
              gear: "Gravity Gun T2, 3 medkits, 2 EMP grenades",
              tip: "Shotgun handles close threats and invisible enemies. Rifle for medium range. Switch to pistol only when both are dry.",
            },
            {
              role: "Co-op Tank (Aggro)",
              weapons: "Shotgun + Heavy Armor + Melee weapon",
              gear: "5 medkits, 1 EMP grenade",
              tip: "Draw enemy attention while teammates deal damage. Stay between the boss and your squad. Use melee to conserve ammo on small creatures.",
            },
            {
              role: "Co-op DPS (Damage)",
              weapons: "Rifle (scoped) + Shotgun (backup)",
              gear: "Gravity Gun T2, 3 medkits, 40+ rifle rounds",
              tip: "Focus on weak points. Gravity Gun throws deal 3x damage. Let the tank draw aggro before engaging.",
            },
            {
              role: "Co-op Support (Medic)",
              weapons: "Rifle + Pistol",
              gear: "8 medkits, 4 EMP grenades, 4 bandages",
              tip: "Stay back, watch health bars, throw EMP at boss stun windows. Don't engage directly unless the team is wiped.",
            },
          ].map((item) => (
            <div key={item.role} className="rounded-lg border border-d8020/25 bg-d8020/5 p-5">
              <h3 className="text-base font-bold text-d8020">{item.role}</h3>
              <p className="mt-2 text-sm"><strong className="text-foreground">Weapons:</strong> <span className="text-muted-foreground">{item.weapons}</span></p>
              <p className="mt-1 text-sm"><strong className="text-foreground">Gear:</strong> <span className="text-muted-foreground">{item.gear}</span></p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.tip}</p>
            </div>
          ))}
        </div>
      </section>
    </ProjectMistArticle>
  );
}
