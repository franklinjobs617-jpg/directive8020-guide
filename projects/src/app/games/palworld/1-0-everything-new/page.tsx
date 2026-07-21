import Link from "next/link";
import { BlufBox, SearchAnswerPanel, StatusPanel } from "@/components/guide-blocks";
import { PalworldArticle } from "@/components/palworld-article";
import { createPalworldMetadata, palworldImages } from "@/lib/palworld";

const title = "Everything New in Palworld 1.0: 72 Pals, Sunreach, World Tree & More";
const description =
  "The confirmed Palworld 1.0 patch notes, in full: 72 new Pals, the Sunreach and World Tree regions, the Mutation breeding rework, Awakening, level 80 cap, Wing Pack, PvP, Paint Mode, and Tower Boss changes.";
const canonical = "/games/palworld/1-0-everything-new";

export const metadata = createPalworldMetadata({
  title,
  description,
  canonical,
  image: palworldImages.hero,
});

const faqs = [
  {
    question: "What are the biggest new features in Palworld 1.0?",
    answer:
      "The headline additions are two new regions — the World Tree endgame zone and Sunreach (previously nicknamed \"Sky Islands\" pre-launch) — which together roughly double the map, plus 72 new Pals, a level cap raised from 65 to 80, the new Awakening and Mutation systems, a gear-slot Wing Pack for flight, PvP mode, Paint Mode, and a reworked Tower Boss system.",
  },
  {
    question: "Is Palworld 1.0 getting PvP?",
    answer:
      "Yes. PvP mode is confirmed and live in 1.0, alongside Paint Mode. Palworld always had the underlying pieces (weapons, mounts, Pal abilities, traps, base defense), but structured player-vs-player combat was not available during Early Access.",
  },
  {
    question: "What is the Wing Pack?",
    answer:
      "The Wing Pack is flight/gliding gear that occupies a character gear slot instead of one of your five Pal party slots — previously, gliding or flying meant dedicating a Pal (like Galeclaw or Jetragon) to the job. It supports combat actions (firing weapons, throwing Pal Spheres) while gliding, which matters for exploring Sunreach's floating islands.",
  },
  {
    question: "How many new Pals are in Palworld 1.0?",
    answer:
      "72 new Pals — 47 brand-new species plus 25 variants of existing Pals — taking the total Paldeck to 287. This is the largest single batch of new Pals the game has ever added, alongside a Partner Skill rework affecting 200+ existing Pals and over 100 new animations.",
  },
  {
    question: "Are the Tower Bosses changing in 1.0?",
    answer:
      "Yes. Tower Boss fights are now roughly 5 minutes instead of 10, and coverage describes more dynamic fights with region-themed elements. Sunreach also adds its own tower boss pair, Auri & Shaolong, fought on the Azure Tapestry.",
  },
  {
    question: "Did Server Clustering make it into 1.0?",
    answer:
      "No. Server Clustering was announced ahead of the 1.0 reveal but does not appear in the official patch notes published July 10, 2026, and no configuration for it is documented at launch. Treat it as a feature that was announced but not delivered at launch, not as something currently available.",
  },
];

const searchIntentRows = [
  {
    query: "Palworld 1.0 new features",
    answer: "72 new Pals, Sunreach and World Tree regions, Mutation breeding rework, Awakening, level 80 cap, Wing Pack, PvP, and Paint Mode.",
    href: "#feature-list",
    label: "Overview",
  },
  {
    query: "Palworld 1.0 new Pals",
    answer: "72 new Pals (47 new species + 25 variants), taking the Paldeck to 287 total.",
    href: "#new-pals",
    label: "New Pals",
  },
  {
    query: "Palworld 1.0 PvP",
    answer: "Yes — PvP mode is live, alongside Paint Mode for base customization.",
    href: "#pvp-and-paint-mode",
    label: "PvP",
  },
];

const jumpLinks = [
  { href: "#feature-list", label: "Feature list" },
  { href: "#new-pals", label: "New Pals" },
  { href: "#pvp-and-paint-mode", label: "PvP & Paint Mode" },
  { href: "#not-included", label: "What didn't make it" },
  { href: "/games/palworld/world-tree-sky-islands", label: "World Tree & Sunreach" },
];

const featureRows: [string, string][] = [
  ["World Tree", "New endgame region, previously visible but barriered since 2024. Opened via the Panthalus questline; hosts the main story's conclusion."],
  ["Sunreach", "Floating-island region above Palpagos, reached via the Feybreak tower portal — the region previously nicknamed \"Sky Islands\" pre-launch."],
  ["Map size", "Confirmed by post-launch coverage to roughly double versus the original 2024 launch map (World Tree + Sunreach combined)."],
  ["New Pals", "72 total: 47 new species + 25 variants of existing Pals. Paldeck now stands at 287."],
  ["Level cap", "Raised from 65 to 80."],
  ["Mutation", "Breeding rework: a small chance per breeding attempt to produce a Mutated Egg with higher base stats and an exclusive passive skill. Layered on top of the classic breeding system, not a replacement for it."],
  ["Awakening", "New system at the World Tree: spend Radiant Gems to push a Pal's stats past its normal cap."],
  ["Wing Pack", "Gear-slot flight/gliding equipment — no longer costs a Pal party slot to fly or glide."],
  ["PvP Mode", "Structured player-vs-player combat, newly added in 1.0."],
  ["Paint Mode", "Base and structure customization/painting tool."],
  ["Tower Boss rework", "Fights shortened from 10 to roughly 5 minutes, with more dynamic patterns."],
  ["Wildlife Sanctuary overhaul", "All three sanctuaries rebuilt as protected conservation areas with drones, searchlights, unique Pals, and bosses."],
  ["New weapons", "13 new weapons added, alongside a stack of new gear."],
  ["Global Palbox", "Lets Pals move between save files, so starting a fresh 1.0 world doesn't lose an Early Access Pal collection."],
];

export default function PalworldEverythingNewPage() {
  return (
    <PalworldArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Everything New in 1.0"
      heroImage={palworldImages.hero}
      heroAlt="Palworld 1.0 new content overview"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="What's actually new in Palworld 1.0?"
        answer="Palworld 1.0 (live since July 10, 2026) adds two new regions — the World Tree endgame zone and Sunreach, previously nicknamed 'Sky Islands' — that together roughly double the map, 72 new Pals (taking the Paldeck to 287), a level cap raised to 80, the new Mutation breeding system and Awakening progression system, a gear-slot Wing Pack, PvP mode, Paint Mode, and a reworked Tower Boss system."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Short Answer">
        <p>
          <strong>This is Pocketpair's biggest update ever — two new regions, 72 new Pals, a higher level cap, and reworked breeding and progression systems.</strong>{" "}
          The official patch notes (roughly 27 pages) went live alongside the July 10, 2026 launch, so the details
          below are drawn from confirmed post-launch coverage, not pre-launch trailer speculation.
        </p>
      </BlufBox>

      <section id="feature-list">
        <h2 className="mb-4 text-xl font-bold text-foreground">Confirmed 1.0 Features at a Glance</h2>
        <StatusPanel
          items={featureRows.map(([label, value]) => ({
            label,
            value,
            status: "verified" as const,
          }))}
        />
      </section>

      <section id="new-pals" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">New Pals in 1.0</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          1.0 adds 72 new Pals — 47 brand-new species plus 25 variants of existing Pals — taking the total Paldeck
          to 287. Most newcomers live in Sunreach, the World Tree, and the other new areas, though some joined
          existing regions, and existing habitats were rebalanced so spawns feel more natural. Alongside the new
          catches, Pocketpair shipped a Partner Skill rework affecting 200+ existing Pals, over 100 new animations,
          and a new category of World Tree Passive Skills. A full name-by-name list of every new Pal and variant is
          still being compiled across community databases — treat any single "complete list" published shortly
          after launch with some caution while that settles.
        </p>
      </section>

      <section id="pvp-and-paint-mode" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">PvP Mode and Paint Mode</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Palworld always had the underlying pieces for player-vs-player combat — weapons, mounts, Pal abilities,
          traps, and base defenses — but structured PvP was not part of Early Access. 1.0 adds it directly,
          alongside Paint Mode, a customization tool for painting and decorating bases and structures. Expect an
          adjustment period as players find out which Pals, weapons, and tactics that felt balanced in PvE turn out
          to be overpowered against other players.
        </p>
      </section>

      <section id="not-included" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">What Was Announced but Didn't Make It</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Server Clustering — linking multiple dedicated server instances together — was announced ahead of the
          1.0 reveal but does not appear in the official patch notes published July 10, 2026, and no configuration
          for it is documented at launch. Treat it as a feature that was teased but not delivered with 1.0, not as
          something currently usable. See our{" "}
          <Link href="/games/palworld/world-tree-sky-islands" className="text-foreground underline">
            World Tree &amp; Sunreach guide
          </Link>{" "}
          for a closer look at the new regions, and our{" "}
          <Link href="/games/palworld/1-0-release-date" className="text-foreground underline">
            1.0 release date guide
          </Link>{" "}
          for platform details.
        </p>
      </section>
    </PalworldArticle>
  );
}
