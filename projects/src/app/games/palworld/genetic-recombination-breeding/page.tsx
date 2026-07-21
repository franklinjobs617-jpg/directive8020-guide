import Link from "next/link";
import { BlufBox, SearchAnswerPanel, StatusPanel } from "@/components/guide-blocks";
import { PalworldArticle } from "@/components/palworld-article";
import { createPalworldMetadata, palworldImages } from "@/lib/palworld";

const title = "Palworld Mutation Explained (formerly rumored as \"Genetic Recombination\")";
const description =
  "Palworld 1.0's real new breeding mechanic is called Mutation, not the pre-launch rumor name \"Genetic Recombination.\" Here's how Mutation actually works, plus how classic breeding still works underneath it.";
const canonical = "/games/palworld/genetic-recombination-breeding";

export const metadata = createPalworldMetadata({
  title,
  description,
  canonical,
  image: palworldImages.campfire,
});

const faqs = [
  {
    question: "Is Palworld's new breeding system called Genetic Recombination?",
    answer:
      "No. \"Genetic Recombination\" was a pre-launch community/media nickname based on early speculation. The official 1.0 patch notes (live since July 10, 2026) name the actual system Mutation, and it works differently than the pre-launch rumors described — it is not about fusing genes from Legendary Pals.",
  },
  {
    question: "How does Mutation actually work in Palworld?",
    answer:
      "Every normal breeding attempt has a small chance to produce a Mutated Egg instead of a regular one. A Pal hatched from a Mutated Egg has higher base stats and one of five mutation-exclusive passive skills. It's layered on top of classic breeding, not a separate system you opt into — you're always breeding normally, just with a chance at a bonus.",
  },
  {
    question: "What are the odds of getting a Mutation?",
    answer:
      "Pocketpair has not published an exact official percentage. Community testing after launch commonly cites roughly 1% per breeding attempt with a standard Cake, rising to around 3% with certain new cakes. Treat these as community-measured estimates, not confirmed official numbers, until Pocketpair states a figure directly.",
  },
  {
    question: "Do the new cakes affect Mutation chance?",
    answer:
      "Yes. 1.0 adds new cake types alongside the original recipe: a Mushroom Cake (reported to slightly raise mutation-related stat chances), a Vegetable Cake (produces two eggs from one breeding attempt instead of one), and a Deluxe Vegetable Cake (reported to further increase Mutation chance). Exact numeric effects are still being measured by the community post-launch.",
  },
  {
    question: "Does Mutation replace classic breeding?",
    answer:
      "No. The classic Breeding Farm mechanic (assign a male and female Pal, supply Cake, get an egg with inherited stats and passive skills) works exactly as it did before 1.0. Mutation is a chance-based bonus layered on top of that same process, not a separate menu or system.",
  },
  {
    question: "Why did this site use to call it Genetic Recombination?",
    answer:
      "Before 1.0 launched, we published a preview page using the same \"Genetic Recombination\" name that was circulating across pre-launch coverage, while explicitly flagging that the mechanic's real name and rules were not yet public. Now that the official patch notes confirm the real system is called Mutation and works differently than the rumor described, this page has been corrected to match the verified, post-launch facts.",
  },
];

const searchIntentRows = [
  {
    query: "Palworld Genetic Recombination",
    answer: "This was a pre-launch rumor name. The real, official 1.0 system is called Mutation and works differently.",
    href: "#mutation-explained",
    label: "Real name",
  },
  {
    query: "Palworld Mutation odds",
    answer: "Community estimates suggest roughly 1% per breeding attempt, up to ~3% with certain cakes — not an official Pocketpair figure.",
    href: "#mutation-explained",
    label: "Odds",
  },
  {
    query: "How does Palworld breeding work",
    answer: "Male + female Pal + Cake in a Breeding Farm produces an egg; stats average from parent Potential, with a chance to inherit active and passive skills.",
    href: "#classic-breeding",
    label: "Classic breeding",
  },
];

const jumpLinks = [
  { href: "#mutation-explained", label: "Mutation explained" },
  { href: "#classic-breeding", label: "Classic breeding" },
  { href: "#new-cakes", label: "New cakes" },
  { href: "#name-correction", label: "About the name change" },
  { href: "/games/palworld/1-0-everything-new", label: "Everything new" },
];

const statusFacts: [string, string][] = [
  ["Official name", "Mutation (not \"Genetic Recombination\" — that was a pre-launch rumor name)"],
  ["What it does", "Small chance per breeding attempt to produce a Mutated Egg with higher stats and 1 of 5 exclusive passive skills"],
  ["Replaces classic breeding?", "No — it's a bonus layered on top of the existing Breeding Farm system"],
  ["Exact odds published?", "No official percentage from Pocketpair; community estimates cluster around 1%, up to ~3% with certain cakes"],
  ["Existing calculators support it?", "Most pre-1.0 calculators are built for the classic stat-average formula only and may not yet account for Mutation"],
];

export default function PalworldMutationPage() {
  return (
    <PalworldArticle
      title={title}
      description={description}
      canonical={canonical}
      label={'Mutation (formerly "Genetic Recombination")'}
      heroImage={palworldImages.campfire}
      heroAlt="Palworld breeding and Mutation system"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="What is Palworld's real 1.0 breeding mechanic actually called?"
        answer="It's called Mutation, not the pre-launch rumor name 'Genetic Recombination.' Every breeding attempt has a small chance (community estimates: roughly 1%, up to ~3% with certain cakes) to produce a Mutated Egg with higher base stats and an exclusive passive skill. It sits on top of the unchanged classic breeding system, not as a replacement."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Correction — the pre-launch name was wrong">
        <p>
          <strong>Before 1.0 launched, this page (and much of the wider internet) referred to this system as "Genetic Recombination" based on pre-launch rumors.</strong>{" "}
          The official July 10, 2026 patch notes confirm the real system is called <strong>Mutation</strong>, and
          it works differently than the fuse-Legendary-genes rumor described. This page has been corrected to
          match the verified, post-launch mechanic.
        </p>
      </BlufBox>

      <section id="mutation-explained">
        <h2 className="mb-4 text-xl font-bold text-foreground">How Mutation Actually Works</h2>
        <StatusPanel
          items={statusFacts.map(([label, value]) => ({
            label,
            value,
            status: (label === "Exact odds published?" ? "needs-check" : "verified") as "verified" | "needs-check",
          }))}
        />
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Mutation is not a separate system you opt into — every time you breed two Pals normally, there's a small
          chance the result is a <strong>Mutated Egg</strong> instead of a standard one. A Pal hatched from a
          Mutated Egg has higher base stats than a normal offspring and gets one of five mutation-exclusive
          passive skills that cannot be obtained any other way. Community testing since launch commonly cites
          roughly a 1% chance per breeding attempt with a standard Cake — Pocketpair has not published an
          official percentage, so treat community numbers as estimates that may be refined as more players test
          it, not a guaranteed rate.
        </p>
      </section>

      <section id="classic-breeding" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">How Classic Breeding Still Works</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          This part is unchanged by 1.0: assign a male and female Pal (any two compatible species) to a Breeding
          Farm, supply at least one Cake, and wait for an egg. The resulting Pal's stats generally average the
          parents' underlying &quot;Potential&quot; values, and each parent has roughly a 50% chance to pass down
          an active skill it currently knows (not just equipped skills), plus a chance to inherit passive skills —
          most efficiently when parents share only the passives you actually want, since extra unwanted passives
          dilute the odds of a clean combination. Mutation is simply a chance, on top of this same process, at a
          better-than-normal result.
        </p>
      </section>

      <section id="new-cakes" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">New Cakes and Mutation Chance</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          1.0 adds new cake recipes alongside the original: a <strong>Mushroom Cake</strong>, reported to slightly
          raise mutation-related stat outcomes; a <strong>Vegetable Cake</strong>, which produces two eggs from a
          single breeding attempt instead of one; and a <strong>Deluxe Vegetable Cake</strong>, reported to
          further increase Mutation chance beyond the standard rate. Exact numeric effects for each cake are still
          being measured by the community post-launch — we'll update this section with firmer numbers as more
          testing data becomes available.
        </p>
      </section>

      <section id="name-correction" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Why This Page Used to Say "Genetic Recombination"</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Ahead of the July 10, 2026 launch, pre-launch coverage across the internet — including an earlier
          version of this page — used the name "Genetic Recombination" for Palworld's rumored new breeding
          mechanic, describing it as fusing genes from high-level Legendary Pals. That name and description never
          appeared in Pocketpair's official materials; it was a community/media label attached to pre-launch
          speculation. The official patch notes confirm the real system is called Mutation and works as described
          above. If you see another guide still using "Genetic Recombination" with a detailed combo list, treat
          that as a sign it wasn't updated against the real patch notes. See our{" "}
          <Link href="/games/palworld/1-0-everything-new" className="text-foreground underline">
            everything new in 1.0 overview
          </Link>{" "}
          for how Mutation fits alongside the rest of the update.
        </p>
      </section>
    </PalworldArticle>
  );
}
