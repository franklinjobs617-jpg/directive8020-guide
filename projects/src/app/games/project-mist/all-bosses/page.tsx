import { ActionTable, BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { ProjectMistArticle } from "@/components/project-mist-article";
import {
  createProjectMistMetadata,
  projectMistBossRows,
  projectMistImages,
} from "@/lib/project-mist";

const title = "Project: Mist All Bosses & Giant Creatures Guide: Weaknesses & Strategies";
const description =
  "Complete boss guide for Project: Mist. Every giant creature fight: Chomper, Giant Stalker, Swarm Mother, Armored Behemoth, and Facility Warden. Attack patterns, weaknesses, and survival strategies.";
const canonical = "/games/project-mist/all-bosses";

export const metadata = createProjectMistMetadata({
  title,
  description,
  canonical,
  image: projectMistImages.creatures,
});

const faqs = [
  {
    question: "How many bosses are in Project: Mist Early Access?",
    answer:
      "Five major boss encounters: Chomper (first boss), Giant Stalker (forest facility), Swarm Mother (underground hive), Armored Behemoth (industrial zone), and Facility Warden (final EA boss). More bosses are planned during Early Access development.",
  },
  {
    question: "What is the best weapon for boss fights?",
    answer:
      "Shotgun for close-range burst damage and revealing invisible enemies. Rifle for sustained medium-range damage. EMP grenades for stunning armored bosses. Always carry at least 40 rounds of primary ammo and 3 medkits before entering a boss arena.",
  },
  {
    question: "How do I beat the Chomper boss?",
    answer:
      "Target the blood tanks on its back — they glow red after the charge attack. Stay mobile and use cover to break line of sight. The Gravity Gun can pull explosive barrels into its path for bonus damage.",
  },
];

const searchIntentRows = [
  {
    query: "Project Mist boss guide",
    answer: "5 bosses: Chomper (back tanks), Giant Stalker (shotgun reveal), Swarm Mother (kill sacs first), Armored Behemoth (flank), Facility Warden (multi-phase).",
    href: "#boss-list",
    label: "Bosses",
  },
  {
    query: "Project Mist how to beat Chomper",
    answer: "Shoot the red blood tanks on its back. Use Gravity Gun to throw explosive barrels. Stay mobile during charge attacks.",
    href: "#chomper",
    label: "Chomper",
  },
  {
    query: "Project Mist giant creatures",
    answer: "Each giant creature has a specific weakness. Stalkers are revealed by shotguns. Behemoths must be flanked. Swarm Mothers need sac destruction.",
    href: "#creature-types",
    label: "Creatures",
  },
];

const jumpLinks = [
  { href: "#boss-list", label: "All bosses" },
  { href: "/games/project-mist/weapons-crafting", label: "Weapons & crafting" },
  { href: "/games/project-mist/beginner-guide", label: "Beginner guide" },
  { href: "/games/project-mist/multiplayer-co-op", label: "Co-op tips" },
];

export default function ProjectMistBossesPage() {
  return (
    <ProjectMistArticle
      title={title}
      description={description}
      canonical={canonical}
      label="All Bosses & Creatures"
      heroImage={projectMistImages.creatures}
      heroAlt="Project: Mist giant creature boss fight with weak point targeting"
      faqs={faqs}
      showSources={false}
    >
      <BlufBox title="BLUF">
        Five major boss fights in the Project: Mist Early Access build. Every boss
        has a specific weakness: <strong>Chomper</strong> — shoot the red blood
        tanks on its back. <strong>Giant Stalker</strong> — shotgun blast reveals
        it. <strong>Swarm Mother</strong> — destroy ceiling sacs first to stop
        adds. <strong>Armored Behemoth</strong> — flank to hit rear legs.{" "}
        <strong>Facility Warden</strong> — multi-phase: shoot power conduits, then
        hit-and-run. Always bring 40+ rounds and 3 medkits per fight.
      </BlufBox>

      <SearchAnswerPanel
        title="Project: Mist Boss & Creature Guide"
        answer="Five bosses with unique weaknesses. Chomper: back tanks. Stalker: shotgun reveal. Swarm Mother: ceiling sacs. Behemoth: flank rear legs. Warden: shoot conduits then melee dodge."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <section id="boss-list">
        <h2 className="mb-4 text-2xl font-bold text-foreground">All Boss Fights</h2>
        <ActionTable rows={projectMistBossRows} />
      </section>

      <section id="boss-prep" className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Pre-Boss Checklist</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { check: "Ammo", detail: "40+ rounds for primary weapon. 12+ shotgun shells for Stalker fight. Craft extra at workbench before entering arena." },
            { check: "Medkits", detail: "Minimum 3 per player. Co-op: designate one player as medic carrying 5+. Craft from cloth + alcohol + herbs." },
            { check: "Weapon Condition", detail: "Repair at workbench. Damaged weapons deal 30% less damage. Bring a backup melee weapon for ammo emergencies." },
            { check: "Gravity Gun Charge", detail: "Tier 2 minimum recommended. Thrown objects deal 3x pistol damage. Upgrade with Blood Orbs in perks menu." },
            { check: "Save Point", detail: "Manual save at the nearest safe room before each boss arena. Boss arenas lock behind you — no retreat." },
            { check: "Co-op Roles", detail: "One player draws aggro (heavy armor), one deals damage (rifle/shotgun), one supports (medkits + EMP grenades)." },
          ].map((item) => (
            <div key={item.check} className="rounded-md border border-d8020/25 bg-d8020/5 p-4">
              <h3 className="text-sm font-bold text-d8020">{item.check}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </ProjectMistArticle>
  );
}
