import Link from "next/link";
import { BlufBox, SearchAnswerPanel, StatusPanel } from "@/components/guide-blocks";
import { PalworldArticle } from "@/components/palworld-article";
import { createPalworldMetadata, palworldImages } from "@/lib/palworld";

const title = "Everything New in Palworld 1.0: World Tree, Sky Islands, Wing Pack & More";
const description =
  "A full rundown of everything Pocketpair has confirmed for the July 10, 2026 Palworld 1.0 release: the World Tree, Sky Islands, Wing Pack, PvP, Paint Mode, new Pals, Tower Boss rework, and Genetic Recombination breeding.";
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
      "The headline additions are the World Tree endgame region and the Sky Islands (both together roughly doubling the playable map), a Wing Pack for gear-slot flight, PvP mode, Paint Mode for base customization, a reworked Tower Boss system, an overhauled Genetic Recombination breeding system, and the largest new-Pal roster drop in the game's history.",
  },
  {
    question: "Is Palworld 1.0 getting PvP?",
    answer:
      "Yes. PvP mode is confirmed for 1.0, alongside Paint Mode. Palworld has always had the underlying pieces (weapons, mounts, Pal abilities, traps, base defense), but structured player-vs-player combat has not been available during Early Access.",
  },
  {
    question: "What is the Wing Pack?",
    answer:
      "The Wing Pack is new flight/gliding gear that occupies a character gear slot instead of one of your five Pal party slots — previously, gliding or flying meant dedicating a Pal (like Galeclaw or Jetragon) to the job. Reports describe it as also allowing combat actions (firing weapons, throwing Pal Spheres) while gliding.",
  },
  {
    question: "How many new Pals are in Palworld 1.0?",
    answer:
      "Pocketpair has described it as the largest single batch of new Pals in the game's history, with the Paldeck expected to pass 200 entries. Named newcomers reported so far include Bull Dou, Dualith, Dupin, Lee Fan, Oidia, Seek, Vanusa, Hartalis, a Legendary sky-dragon, a giant Whale Pal, and a Pal that transforms into a usable sword.",
  },
  {
    question: "Are the Tower Bosses changing in 1.0?",
    answer:
      "Yes. Pocketpair has described the rework as making Tower Bosses \"much more dynamic and engaging.\" Reports describe each boss fighting in a region-themed arena instead of a generic tower room, with new attack patterns and, according to some outlets, post-fight recruitment quests that let you add defeated bosses to your Pal roster.",
  },
  {
    question: "Is any of this still unconfirmed?",
    answer:
      "Some. Pocketpair's full patch notes (reported at around 27 pages) stay under wraps until launch day, July 10, 2026. Exact numbers, POIs, and mechanical details for newer features like Server Clustering and Sky Islands traversal are expected to firm up only once the patch notes go live.",
  },
];

const searchIntentRows = [
  {
    query: "Palworld 1.0 new features",
    answer: "World Tree, Sky Islands, Wing Pack, PvP, Paint Mode, Tower Boss rework, Genetic Recombination breeding, and the largest new-Pal drop yet.",
    href: "#feature-list",
    label: "Overview",
  },
  {
    query: "Palworld 1.0 new Pals",
    answer: "Paldeck expected to pass 200 entries; confirmed names include Bull Dou, Dualith, Dupin, Hartalis, and a sword-transforming Pal.",
    href: "#new-pals",
    label: "New Pals",
  },
  {
    query: "Palworld 1.0 PvP",
    answer: "Yes — PvP mode is confirmed, alongside Paint Mode for base customization.",
    href: "#pvp-and-paint-mode",
    label: "PvP",
  },
];

const jumpLinks = [
  { href: "#feature-list", label: "Feature list" },
  { href: "#new-pals", label: "New Pals" },
  { href: "#pvp-and-paint-mode", label: "PvP & Paint Mode" },
  { href: "#still-unconfirmed", label: "Still unconfirmed" },
  { href: "/games/palworld/world-tree-sky-islands", label: "World Tree" },
];

const featureRows: [string, string][] = [
  ["World Tree", "New endgame region, previously visible but barriered since 2024. Hosts the conclusion of the main story."],
  ["Sky Islands", "Floating landmasses above Palpagos, newly traversable, with their own Pals and structures."],
  ["Map size", "Reported to roughly double versus the original 2024 launch map (World Tree + Sky Islands combined)."],
  ["Wing Pack", "Gear-slot flight/gliding equipment — no longer costs a Pal party slot to fly or glide."],
  ["PvP Mode", "Structured player-vs-player combat, newly added in 1.0."],
  ["Paint Mode", "Base and structure customization/painting tool."],
  ["Genetic Recombination", "New breeding system: fuse genes from high-level Legendary Pals to create variant offspring."],
  ["Tower Boss rework", "Bosses reworked for more dynamic fights; reported region-themed arenas and new attack patterns."],
  ["Wildlife Sanctuary overhaul", "Each sanctuary gets its own ecosystem, unique materials, rare Pals, and bosses."],
  ["Server Clustering", "Links multiple dedicated server instances together for larger communities."],
  ["New Pals", "Largest batch in the game's history; Paldeck expected to exceed 200 entries."],
  ["Patch notes length", "Reported at roughly 27 pages, kept confidential (\"Top Secret\") until launch day."],
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
        answer="Pocketpair has confirmed a new World Tree endgame region and Sky Islands (together roughly doubling the map), a gear-slot Wing Pack for flight, PvP mode, Paint Mode, a Tower Boss rework, an overhauled Genetic Recombination breeding system, and the largest new-Pal roster in the game's history. Full patch notes (~27 pages) stay confidential until the July 10, 2026 launch."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Short Answer">
        <p>
          <strong>This is Pocketpair's biggest update ever — new region, new flight system, PvP, and the largest Pal drop yet.</strong>{" "}
          Most headline features are confirmed via official trailers and social posts, but exact numbers and mechanics
          are still pending the full patch notes on launch day.
        </p>
      </BlufBox>

      <section id="feature-list">
        <h2 className="mb-4 text-xl font-bold text-foreground">Confirmed 1.0 Features at a Glance</h2>
        <StatusPanel
          items={featureRows.map(([label, value]) => ({
            label,
            value,
            status: (label === "Map size" || label === "Patch notes length" ? "needs-check" : "verified") as "verified" | "needs-check",
          }))}
        />
      </section>

      <section id="new-pals" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">New Pals in 1.0</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Pocketpair has been releasing short daily teaser clips ahead of launch, and the Paldeck is expected to pass
          200 entries once 1.0 lands — the largest single addition of new Pals the game has had. Names reported so
          far across official posts and gaming outlets include Bull Dou, Dualith, Dupin (a cat-like jester), Lee Fan,
          Oidia, Seek, Vanusa, and Hartalis, alongside a Legendary sky-dragon, a giant Whale Pal, and a Pal that
          transforms into a usable two-handed sword in combat. Exact stats, typings, and the full roster are expected
          with the official patch notes on July 10.
        </p>
      </section>

      <section id="pvp-and-paint-mode" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">PvP Mode and Paint Mode</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Palworld has always had the underlying pieces for player-vs-player combat — weapons, mounts, Pal abilities,
          traps, and base defenses — but structured PvP has not been part of Early Access. 1.0 adds it directly,
          alongside Paint Mode, a customization tool for painting and decorating bases and structures. Expect an
          adjustment period as players find out which Pals, weapons, and tactics that felt balanced in PvE turn out
          to be overpowered against other players.
        </p>
      </section>

      <section id="still-unconfirmed" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">What Is Still Unconfirmed</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Pocketpair has kept the full patch notes — reported at roughly 27 pages — confidential ahead of launch.
          Features like Server Clustering and the exact scope of Sky Islands traversal have been described in
          general terms through trailers and social posts, but specific numbers, POIs, and mechanics are expected to
          firm up only once the patch goes live on July 10, 2026. Treat anything not directly attributed to an
          official Pocketpair post or the eventual patch notes as unconfirmed. See our{" "}
          <Link href="/games/palworld/world-tree-sky-islands" className="text-foreground underline">
            World Tree & Sky Islands preview
          </Link>{" "}
          for a closer look at the new region, and our{" "}
          <Link href="/games/palworld/1-0-release-date" className="text-foreground underline">
            1.0 release date guide
          </Link>{" "}
          for exact timing.
        </p>
      </section>
    </PalworldArticle>
  );
}
