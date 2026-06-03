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
      "The Steam store page mentions multiple giant creature encounters. We've seen references to about five major fights in community discussions, but we haven't confirmed the exact count or names ourselves yet. The developer plans to add more bosses during Early Access.",
  },
  {
    question: "What's the best approach for boss fights?",
    answer:
      "Bring more ammo and medkits than you think you'll need. The Gravity Gun is useful for throwing objects during fights. In co-op, split roles — one player draws attention while others deal damage. Beyond that, we're still testing and will update this page with specifics.",
  },
  {
    question: "How do I beat the first boss?",
    answer:
      "We're still working on confirming boss strategies through actual gameplay. In the meantime, the Steam Community Discussions have active threads where players share what's working for them. Check there for the latest.",
  },
];

const searchIntentRows = [
  {
    query: "Project Mist boss guide",
    answer: "We're documenting boss fights as we play through the game. The Steam store page confirms multiple giant creature encounters. Check back for updates.",
    href: "#boss-list",
    label: "Bosses",
  },
  {
    query: "Project Mist boss tips",
    answer: "Stock up on ammo and medkits before boss areas. Use the Gravity Gun during fights. Co-op helps — split aggro and damage roles.",
    href: "#boss-prep",
    label: "Tips",
  },
  {
    query: "Project Mist giant creatures",
    answer: "Steam page mentions giant creatures as a core feature. We're working through these fights and testing strategies. Updates coming.",
    href: "#boss-list",
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
        We haven't fought these bosses ourselves yet — the specific names and
        strategies below come from Steam community reports and preview coverage,
        not firsthand testing. Treat them as a starting point, not a guarantee.{" "}
        <strong>We'll update this page after we've put in the hours.</strong>
      </BlufBox>

      <SearchAnswerPanel
        title="Project: Mist Boss & Creature Guide"
        answer="We're still documenting the boss fights. Check the Steam Community Discussions for the latest player-reported strategies, or join our Reddit to share what you've found."
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
