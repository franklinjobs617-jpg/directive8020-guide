import Link from "next/link";
import { BlufBox, SearchAnswerPanel, StatusPanel } from "@/components/guide-blocks";
import { PalworldArticle } from "@/components/palworld-article";
import { createPalworldMetadata, palworldImages } from "@/lib/palworld";

const title = "Palworld Genetic Recombination Breeding Preview (Pre-1.0)";
const description =
  "What's confirmed so far about Palworld 1.0's new Genetic Recombination breeding system, how classic breeding still works today, and why every existing breeding calculator needs an update once 1.0 launches July 10, 2026.";
const canonical = "/games/palworld/genetic-recombination-breeding";

export const metadata = createPalworldMetadata({
  title,
  description,
  canonical,
  image: palworldImages.campfire,
});

const faqs = [
  {
    question: "What is Genetic Recombination?",
    answer:
      "Genetic Recombination is a new breeding system confirmed for Palworld 1.0 (July 10, 2026) that lets players fuse genes from high-level Legendary Pals to create unique variant offspring that inherit specific traits. Multiple outlets describe it as a competitive breeding/min-maxing layer that did not exist during Early Access.",
  },
  {
    question: "Does Genetic Recombination replace the current breeding system?",
    answer:
      "Not based on anything confirmed so far. Every source describing Genetic Recombination frames it as an additional system layered on top of breeding, not a replacement for it. The classic Breeding Farm mechanic (assign a male and female Pal, supply Cake, get an egg with inherited stats and passive skills) is expected to keep working as it does today.",
  },
  {
    question: "Why do existing Palworld breeding calculators need to be updated for 1.0?",
    answer:
      "Every breeding calculator live today (palworld.gg, palpedia.net, paldb.cc, and others) is built around the current stat-averaging formula and passive-skill inheritance rules. None of them can account for Genetic Recombination because Pocketpair has not published its exact rules yet. Multiple hosting/guide sites have already publicly said they plan to update their calculators once the mechanic is confirmed — we're one of them.",
  },
  {
    question: "Are the exact odds and rules for Genetic Recombination known yet?",
    answer:
      "No. Coverage repeatedly notes that results \"vary based on server settings\" and that \"exact limits will matter a lot\" once players can test it directly. Treat any specific percentage, formula, or requirement you see for Genetic Recombination before July 10, 2026 as speculation, not confirmed mechanics.",
  },
  {
    question: "How does classic Palworld breeding work today?",
    answer:
      "Assign one male and one female Pal (any two compatible species) to a Breeding Farm with at least one Cake. After time passes, you get an egg. The resulting Pal's core stats are generally based on averaging the parents' \"Potential\" values, and each parent has a 50% chance per skill to pass down an active skill it currently knows, plus a chance to inherit passive skills. This system is unaffected by anything confirmed about 1.0 so far.",
  },
];

const searchIntentRows = [
  {
    query: "Palworld Genetic Recombination",
    answer: "A new 1.0 breeding system for fusing genes from Legendary Pals into variant offspring — additional to, not a replacement for, classic breeding.",
    href: "#what-is-confirmed",
    label: "What it is",
  },
  {
    query: "Palworld breeding calculator 1.0",
    answer: "Existing calculators only cover classic breeding — none support Genetic Recombination yet, since the exact rules aren't public.",
    href: "#calculator-status",
    label: "Calculator status",
  },
  {
    query: "How does Palworld breeding work",
    answer: "Male + female Pal + Cake in a Breeding Farm produces an egg; stats average from parent Potential, with a chance to inherit active and passive skills.",
    href: "#classic-breeding",
    label: "Classic breeding",
  },
];

const jumpLinks = [
  { href: "#what-is-confirmed", label: "What's confirmed" },
  { href: "#classic-breeding", label: "Classic breeding" },
  { href: "#calculator-status", label: "Calculator status" },
  { href: "#what-happens-july-10", label: "After July 10" },
  { href: "/games/palworld/1-0-everything-new", label: "Everything new" },
];

const statusFacts: [string, string][] = [
  ["Confirmed", "Genetic Recombination lets players fuse genes from high-level Legendary Pals into variant offspring"],
  ["Replaces classic breeding?", "No indication of this — appears to be an additional system"],
  ["Exact odds/rules published?", "Not yet — expected with the July 10, 2026 patch notes"],
  ["Results consistency", "Reported to vary based on server settings"],
  ["Existing calculators support it?", "No — all current tools are built for the classic stat-average formula only"],
];

export default function PalworldGeneticRecombinationPage() {
  return (
    <PalworldArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Genetic Recombination (Preview)"
      heroImage={palworldImages.campfire}
      heroAlt="Palworld breeding preview ahead of Genetic Recombination"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="What do we know about Genetic Recombination before 1.0 launches?"
        answer="Genetic Recombination is a confirmed new Palworld 1.0 system that lets players fuse genes from high-level Legendary Pals to create variant offspring with inherited traits. It appears to sit alongside classic breeding, not replace it. Exact odds and rules are not public yet — every current breeding calculator, including this page, needs the July 10, 2026 patch notes before it can model the new system accurately."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="This Page Is a Placeholder — Read This First">
        <p>
          <strong>This is a preview page, not a calculator yet.</strong> Genetic Recombination's exact rules are
          not public as of this writing. Once Palworld 1.0 launches on July 10, 2026 and Pocketpair's patch notes
          confirm the real mechanics, this page will be upgraded into an interactive breeding calculator that
          covers both classic breeding and Genetic Recombination. Bookmark it and check back after launch.
        </p>
      </BlufBox>

      <section id="what-is-confirmed">
        <h2 className="mb-4 text-xl font-bold text-foreground">What's Confirmed So Far</h2>
        <StatusPanel
          items={statusFacts.map(([label, value]) => ({
            label,
            value,
            status: (label === "Confirmed" ? "verified" : "needs-check") as "verified" | "needs-check",
          }))}
        />
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Multiple outlets covering the Palworld 1.0 reveal describe Genetic Recombination the same way: a system
          for fusing genes from high-level Legendary Pals to produce unique variant offspring that inherit specific
          traits. Coverage frames it as adding a genuine competitive breeding layer for late-game min-maxing,
          something Early Access breeding did not really have. None of the coverage suggests it removes or changes
          how the existing Breeding Farm works for ordinary Pals.
        </p>
      </section>

      <section id="classic-breeding" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">How Classic Breeding Works Today</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          This part is stable and unaffected by anything confirmed about 1.0: assign a male and female Pal (any two
          compatible species) to a Breeding Farm, supply at least one Cake, and wait for an egg. The resulting Pal's
          stats generally average the parents' underlying &quot;Potential&quot; values, and each parent has roughly
          a 50% chance to pass down an active skill it currently knows (not just equipped skills), plus a chance to
          inherit passive skills — most efficiently when parents share only the passives you actually want, since
          extra unwanted passives dilute the odds of getting a clean combination. This is the system every current
          Palworld breeding calculator online is built around.
        </p>
      </section>

      <section id="calculator-status" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Why No Calculator Supports Genetic Recombination Yet</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Every Palworld breeding calculator currently online — including well-established ones — was built for
          the classic stat-average and passive-inheritance system described above. None of them can model Genetic
          Recombination correctly, because Pocketpair has not published the actual rules: what &quot;fusing genes
          from Legendary Pals&quot; requires, what the success odds look like, or how server settings change the
          outcome. Several other Palworld coverage sites have already publicly said they plan to update their
          breeding tools once the mechanic is confirmed. We are doing the same — this page is that placeholder,
          not a finished tool.
        </p>
      </section>

      <section id="what-happens-july-10" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">What Happens After July 10</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Once Pocketpair's 1.0 patch notes confirm Genetic Recombination's actual mechanics, this page will be
          rebuilt into an interactive breeding calculator — covering both classic breeding combinations and the new
          Legendary gene-fusion system, in the same style as our other in-guide tools. Check our{" "}
          <Link href="/games/palworld/1-0-release-date" className="text-foreground underline">
            1.0 release date guide
          </Link>{" "}
          for exact launch timing, and our{" "}
          <Link href="/games/palworld/1-0-everything-new" className="text-foreground underline">
            everything new in 1.0 overview
          </Link>{" "}
          for how Genetic Recombination fits alongside the rest of the update.
        </p>
      </section>
    </PalworldArticle>
  );
}
