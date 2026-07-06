import Link from "next/link";
import { BlufBox, SearchAnswerPanel, StatusPanel } from "@/components/guide-blocks";
import { PalworldArticle } from "@/components/palworld-article";
import { createPalworldMetadata, palworldImages } from "@/lib/palworld";

const title = "Palworld World Tree & Sky Islands Preview: What's Confirmed for 1.0";
const description =
  "The World Tree and Sky Islands are the centerpiece of Palworld 1.0's new endgame region. Here is what Pocketpair has confirmed so far, what's still unofficial, and why this location matters for the story.";
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
      "The World Tree is a massive landmark that has been visible on the horizon of the Palpagos Islands since Palworld's January 2024 launch, sitting behind an impassable barrier. In 1.0, that barrier drops and the World Tree becomes the game's primary endgame region and, according to Pocketpair, the setting for the conclusion of the main story.",
  },
  {
    question: "What are the Sky Islands?",
    answer:
      "Sky Islands are floating landmasses above Palpagos, newly traversable in 1.0. Multiple outlets describe them as proper new biomes with their own Pals, villages, and structures rather than empty decorative platforms, reachable using the new Wing Pack flight gear.",
  },
  {
    question: "Do the World Tree and Sky Islands together double the map?",
    answer:
      "That is the widely reported figure across gaming outlets, but it comes from media estimates based on the reveal trailer, not an official Pocketpair number. Treat \"roughly doubles\" as a reasonable expectation, not a confirmed measurement, until the July 10 patch notes are public.",
  },
  {
    question: "What happens to the story at the World Tree?",
    answer:
      "Pocketpair has described the World Tree as where the main story concludes, framing 1.0's narrative content as story-driven missions that reveal more of the world's lore. This does not mean Palworld's development ends — Pocketpair has stated 1.0 closes the original story arc, not the game's ongoing support.",
  },
  {
    question: "What level should I be before going to the World Tree?",
    answer:
      "Pocketpair has not published an official recommended level. General coverage frames it as a high-level endgame destination with strong enemies, so treat it as post-main-progression content rather than something to rush into early, and expect official guidance to firm up once players have had time with the 1.0 patch.",
  },
];

const searchIntentRows = [
  {
    query: "Palworld World Tree location",
    answer: "Visible since 2024 on the Palpagos horizon, behind a barrier that drops with 1.0 on July 10, 2026.",
    href: "#world-tree",
    label: "World Tree",
  },
  {
    query: "Palworld Sky Islands",
    answer: "Floating landmasses above Palpagos, traversable in 1.0 with their own Pals and structures.",
    href: "#sky-islands",
    label: "Sky Islands",
  },
  {
    query: "Does Palworld 1.0 map double in size",
    answer: "Widely reported by media as \"roughly doubles\" — this is an estimate, not an official confirmed figure.",
    href: "#map-size-caveat",
    label: "Map size",
  },
];

const jumpLinks = [
  { href: "#world-tree", label: "World Tree" },
  { href: "#sky-islands", label: "Sky Islands" },
  { href: "#map-size-caveat", label: "Map size caveat" },
  { href: "#getting-there", label: "Getting there" },
  { href: "/games/palworld/1-0-everything-new", label: "Everything new" },
];

const regionFacts: [string, string][] = [
  ["World Tree — Status", "Barriered since Jan 2024 launch; opens with 1.0 on July 10, 2026"],
  ["World Tree — Role", "Primary endgame zone; setting for the main story's conclusion"],
  ["Sky Islands — Type", "Floating landmasses above Palpagos, newly traversable"],
  ["Sky Islands — Content", "New biomes with their own Pals, villages, and structures (per media reports)"],
  ["Combined map size", "Reported to roughly double vs. the 2024 launch map — media estimate, not an official figure"],
  ["Recommended level", "Not officially published — treat as high-level endgame content"],
];

export default function PalworldWorldTreeSkyIslandsPage() {
  return (
    <PalworldArticle
      title={title}
      description={description}
      canonical={canonical}
      label="World Tree & Sky Islands"
      heroImage={palworldImages.siteHero}
      heroAlt="Palworld World Tree and Sky Islands preview"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="What are the World Tree and Sky Islands in Palworld 1.0?"
        answer="The World Tree is a long-teased landmark that opens as the game's endgame region and story conclusion when 1.0 releases July 10, 2026. Sky Islands are newly traversable floating landmasses above Palpagos with their own Pals and structures. Together, media outlets estimate they roughly double the playable map — though that figure comes from trailer analysis, not an official Pocketpair number."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Short Answer">
        <p>
          <strong>The World Tree is the story-ending endgame zone; Sky Islands are the new floating biomes above it.</strong>{" "}
          Both open July 10, 2026. The "map roughly doubles" figure is a media estimate — solid as an expectation,
          not as a confirmed measurement.
        </p>
      </BlufBox>

      <section id="world-tree">
        <h2 className="mb-4 text-xl font-bold text-foreground">The World Tree</h2>
        <StatusPanel
          items={regionFacts.slice(0, 2).map(([label, value]) => ({ label, value, status: "verified" as const }))}
        />
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          The World Tree has loomed on the Palpagos horizon since Palworld's original January 2024 launch, always
          visible but locked behind an impassable barrier. Pocketpair's communications lead has framed 1.0 plainly:
          players are finally going to find out what is going on with that tree. The region opens as the game's
          primary endgame zone and, according to Pocketpair, hosts the conclusion of the main story — 1.0 adds
          proper story-driven missions for the first time, described as fragments of a larger narrative about the
          world's truth. Pocketpair has been clear that this closes the original story arc, not the game's
          development — further support and content are expected to continue afterward.
        </p>
      </section>

      <section id="sky-islands" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Sky Islands</h2>
        <StatusPanel
          items={regionFacts.slice(2, 4).map(([label, value]) => ({ label, value, status: "verified" as const }))}
        />
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Sky Islands are floating landmasses above Palpagos, shown in the 1.0 reveal trailer with players flying
          upward into the clouds to reach them. Coverage describes them as proper new biomes rather than decorative
          scenery — with their own Pals, villages, and cabins built into the sky — reachable using the new Wing Pack
          flight gear (see our{" "}
          <Link href="/games/palworld/1-0-everything-new" className="text-foreground underline">
            everything new in 1.0 overview
          </Link>{" "}
          for Wing Pack details). Earlier coverage sometimes described this addition as "a second major island"
          rather than "Sky Islands" specifically — those are likely the same reveal described two different ways by
          outlets working from the same trailer, but until official patch notes confirm exact terminology, both
          descriptions are circulating.
        </p>
      </section>

      <section id="map-size-caveat" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">About That "Map Doubles" Figure</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Multiple gaming outlets independently report that the World Tree region and Sky Islands together roughly
          double Palworld's playable landmass compared to the original 2024 launch map. That repetition across
          independent sources makes it a reasonable expectation. What it is <em>not</em> is an official, precise
          figure from Pocketpair — it is media estimation based on the Summer Game Fest 2026 reveal trailer.
          Pocketpair itself has said the team focused on quality and story integration rather than publishing raw
          size numbers. Treat "roughly doubles" as directionally reliable and expect a more precise picture once
          players can explore the region after July 10.
        </p>
      </section>

      <section id="getting-there" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">What You'll Need Before Going</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Pocketpair has not published an official recommended level or gear checklist for the World Tree or Sky
          Islands as of this writing. General coverage frames the World Tree as strong, high-level endgame content
          — not a place to rush into with a fresh, undergeared team — and the Sky Islands are described as requiring
          real traversal tools (the Wing Pack in particular) rather than ground-based movement alone. Check our{" "}
          <Link href="/games/palworld/1-0-release-date" className="text-foreground underline">
            1.0 release date guide
          </Link>{" "}
          for exact launch timing so you know when this region actually becomes accessible.
        </p>
      </section>
    </PalworldArticle>
  );
}
