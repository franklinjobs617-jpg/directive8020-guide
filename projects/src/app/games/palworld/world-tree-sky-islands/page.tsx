import Link from "next/link";
import { BlufBox, SearchAnswerPanel, StatusPanel } from "@/components/guide-blocks";
import { PalworldArticle } from "@/components/palworld-article";
import { createPalworldMetadata, palworldImages } from "@/lib/palworld";

const title = "Palworld World Tree & Sunreach (Sky Islands) Explained: What's Actually There";
const description =
  "Palworld 1.0's two new regions, confirmed from the official patch notes: the World Tree endgame zone (Panthalus questline, Radiant Gems, Awakening) and Sunreach, the floating Sky Islands archipelago.";
const canonical = "/games/palworld/world-tree-sky-islands";

export const metadata = createPalworldMetadata({
  title,
  description,
  canonical,
  image: palworldImages.siteHero,
});

const faqs = [
  {
    question: "What is the World Tree in Palworld?",
    answer:
      "The World Tree is a landmark visible on the Palpagos horizon since Palworld's January 2024 launch, locked behind a barrier until 1.0. It's now the game's endgame region, opened via the Panthalus questline, and the setting for the main story's conclusion — the 'Sealed Calamity' finale and a level-80 boss fight against Zenara & Astralym.",
  },
  {
    question: "What is Sunreach (the Sky Islands)?",
    answer:
      "Sunreach is the official name for Palworld 1.0's floating-island region — an archipelago suspended above Palpagos by Paldium energy, reached via the Feybreak tower's portal. It's a full new biome with its own civilization, unique Pals, and the Auri & Shaolong tower boss pair. \"Sky Islands\" was the pre-launch community/media nickname for this region before the official patch notes named it Sunreach.",
  },
  {
    question: "Do the World Tree and Sunreach double the map?",
    answer:
      "Multiple outlets covering the official 1.0 patch notes independently describe the two new regions as roughly doubling Palworld's playable map, making it the largest content expansion in the game's history. This is now backed by the actual patch notes and post-launch coverage, not just pre-launch trailer estimates.",
  },
  {
    question: "What happens at the World Tree story-wise?",
    answer:
      "The reworked main story leads through Palpagos, the tower bosses, and finally to the World Tree for a proper ending — the 'Sealed Calamity' — resolving the mystery of why the factions fight over the towers. Pocketpair has said this closes the original story arc but is intentionally open-ended, and your save continues afterward; it does not mean the end of Palworld's development.",
  },
  {
    question: "What do I need before going to the World Tree or Sunreach?",
    answer:
      "Both are endgame content gated behind progression: the World Tree opens through the Panthalus questline and centers on collecting Radiant Gems for the new Awakening system (which pushes a Pal's stats past their normal cap), while Sunreach is reached via the Feybreak tower's portal. Treat both as post-main-progression destinations, not places to rush into early with an undergeared team.",
  },
];

const searchIntentRows = [
  {
    query: "Palworld World Tree location",
    answer: "Visible since 2024 on the Palpagos horizon; opens via the Panthalus questline with 1.0.",
    href: "#world-tree",
    label: "World Tree",
  },
  {
    query: "Palworld Sunreach / Sky Islands",
    answer: "Sunreach is the official name — a floating archipelago above Palpagos, reached via the Feybreak tower portal.",
    href: "#sunreach",
    label: "Sunreach",
  },
  {
    query: "Does Palworld 1.0 map double in size",
    answer: "Yes, confirmed by post-launch patch-note coverage — the two new regions roughly double the map.",
    href: "#map-size",
    label: "Map size",
  },
];

const jumpLinks = [
  { href: "#world-tree", label: "World Tree" },
  { href: "#sunreach", label: "Sunreach" },
  { href: "#map-size", label: "Map size" },
  { href: "#getting-there", label: "Getting there" },
  { href: "/games/palworld/1-0-everything-new", label: "Everything new" },
];

const worldTreeFacts: [string, string][] = [
  ["Status", "Barriered since Jan 2024 launch; opened with 1.0 on July 10, 2026"],
  ["Unlocked via", "The Panthalus questline"],
  ["Core mechanic", "Collect Radiant Gems to power the new Awakening system (push a Pal's stats past its normal cap)"],
  ["Exclusive resource", "Paloxite ore, found only at the World Tree"],
  ["Story role", "Setting for the main story's conclusion — the \"Sealed Calamity\" finale"],
  ["Endgame boss", "Level-80 fight against Zenara & Astralym"],
];

const sunreachFacts: [string, string][] = [
  ["Official name", "Sunreach — previously known by the community/media nickname \"Sky Islands\" pre-launch"],
  ["Type", "Floating archipelago suspended above Palpagos by Paldium energy"],
  ["Reached via", "The Feybreak tower's portal"],
  ["Exclusive resource", "Soralite ore, found only in Sunreach"],
  ["Tower bosses", "Auri & Shaolong, fought on the Azure Tapestry"],
  ["Content", "A full new biome with its own civilization and unique Pals, not a reskinned zone"],
];

export default function PalworldWorldTreeSkyIslandsPage() {
  return (
    <PalworldArticle
      title={title}
      description={description}
      canonical={canonical}
      label="World Tree & Sunreach"
      heroImage={palworldImages.siteHero}
      heroAlt="Palworld World Tree and Sunreach Sky Islands"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="What are the World Tree and Sunreach in Palworld 1.0?"
        answer="The World Tree is Palworld 1.0's endgame region and story conclusion, unlocked via the Panthalus questline and centered on collecting Radiant Gems for the new Awakening system. Sunreach — known before launch by the community nickname 'Sky Islands' — is a floating archipelago above Palpagos reached via the Feybreak tower's portal. Together, post-launch coverage of the official patch notes confirms they roughly double Palworld's map, the largest content expansion in the game's history."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Short Answer">
        <p>
          <strong>The World Tree is the story-ending endgame zone; Sunreach is the new floating-island region once called "Sky Islands."</strong>{" "}
          Both are confirmed in the official 1.0 patch notes (live since July 10, 2026), and together they roughly
          double the playable map.
        </p>
      </BlufBox>

      <section id="world-tree">
        <h2 className="mb-4 text-xl font-bold text-foreground">The World Tree</h2>
        <StatusPanel
          items={worldTreeFacts.map(([label, value]) => ({ label, value, status: "verified" as const }))}
        />
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          The World Tree has loomed on the Palpagos horizon since Palworld's original January 2024 launch, always
          visible but locked behind a barrier. With 1.0, the Panthalus questline opens the region as the game's
          primary endgame zone and hosts the conclusion of the main story — the reworked story now leads players
          through Palpagos, the tower bosses, and finally to the World Tree for a proper ending: the "Sealed
          Calamity" finale, capped by a level-80 fight against Zenara &amp; Astralym. The core activity here is
          collecting Radiant Gems to fuel the new Awakening system, which pushes a Pal's stats past their normal
          cap. Pocketpair has been clear this closes the original story arc — not the game's development — and
          your save continues afterward.
        </p>
      </section>

      <section id="sunreach" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Sunreach (Formerly "Sky Islands")</h2>
        <StatusPanel
          items={sunreachFacts.map(([label, value]) => ({ label, value, status: "verified" as const }))}
        />
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Before launch, this region was widely referred to by its trailer nickname, "Sky Islands." The official
          1.0 patch notes name it <strong>Sunreach</strong> — a full new biome, not a reskinned zone, with its own
          civilization, unique Pals, and the Auri &amp; Shaolong tower boss pair fought on the Azure Tapestry.
          It's reached via the Feybreak tower's portal, and its exclusive ore, Soralite, is needed for some of
          1.0's new top-tier crafting recipes (alongside Paloxite from the World Tree). See our{" "}
          <Link href="/games/palworld/1-0-everything-new" className="text-foreground underline">
            everything new in 1.0 overview
          </Link>{" "}
          for how the Wing Pack fits into exploring Sunreach.
        </p>
      </section>

      <section id="map-size" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Does the Map Really Double?</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Yes — this is now confirmed by post-launch coverage of the official patch notes, not just pre-launch
          trailer estimates. The World Tree and Sunreach together are widely described as roughly doubling
          Palworld's playable map compared to the original 2024 launch, making 1.0 the largest single content
          expansion the game has received. Beyond these two headline regions, 1.0 also adds 7 smaller islands
          across volcano, desert, and ruins biomes.
        </p>
      </section>

      <section id="getting-there" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">What You'll Need Before Going</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Both regions are gated behind progression rather than open from the start. The World Tree unlocks
          through the Panthalus questline, and its core loop revolves around collecting Radiant Gems for the
          Awakening system — treat it as content for a team that has already cleared the main tower bosses, not
          somewhere to rush into early. Sunreach is reached via the Feybreak tower's portal, so you'll need to
          have cleared that tower first. Check our{" "}
          <Link href="/games/palworld/1-0-release-date" className="text-foreground underline">
            1.0 release date guide
          </Link>{" "}
          for platform and timing details.
        </p>
      </section>
    </PalworldArticle>
  );
}
