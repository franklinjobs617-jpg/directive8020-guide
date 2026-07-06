import Link from "next/link";
import { BlufBox, SearchAnswerPanel, StatusPanel } from "@/components/guide-blocks";
import { PalworldArticle } from "@/components/palworld-article";
import { createPalworldMetadata, palworldImages, palworldSpecRows } from "@/lib/palworld";

const title = "Palworld System Requirements: Minimum & Recommended PC Specs";
const description =
  "Official Palworld minimum and recommended PC specs from Steam, plus console and mobile support, and what the bigger 1.0 map might mean for performance.";
const canonical = "/games/palworld/system-requirements";

export const metadata = createPalworldMetadata({
  title,
  description,
  canonical,
  image: palworldImages.siteHero,
});

const faqs = [
  {
    question: "What are the minimum requirements to run Palworld?",
    answer:
      "Officially: Windows 10 64-bit, an Intel Core i5-3570K (or equivalent quad-core), 16GB RAM, an Nvidia GeForce GTX 1050 (2GB), DirectX 11, and 40GB of storage. This is a modest bar by 2026 standards — most gaming PCs from the last decade should meet it.",
  },
  {
    question: "What are the recommended specs for smooth performance?",
    answer:
      "Officially: an Intel Core i9-9900K (or equivalent 8-core), 32GB RAM, and an Nvidia GeForce RTX 2070. The jump from minimum to recommended is unusually large — 32GB RAM in particular is a high bar most mid-range gaming PCs from this era do not meet.",
  },
  {
    question: "Will Palworld 1.0 need a beefier PC than the current version?",
    answer:
      "Pocketpair has not announced any change to the official system requirements for 1.0 as of this writing. However, the World Tree region and second island roughly double the map, so real-world performance (not the official minimum bar) may be more demanding, especially with a full base and many Pals active. Confirm official spec updates on Steam closer to July 10, 2026.",
  },
  {
    question: "Can Palworld run on Steam Deck?",
    answer:
      "Palworld is not currently Deck Verified by Valve, but many players report it runs on Steam Deck with adjusted settings. Battery life and frame rate will be below desktop performance given the minimum-spec GPU requirement already sits above the Deck's integrated graphics in demanding scenes.",
  },
  {
    question: "Is Palworld playable on mobile?",
    answer:
      "Pocketpair's official site lists mobile (iOS/Android) as a supported platform alongside PC, PlayStation 5, and Xbox. Mobile hardware requirements have not been published in the same detail as PC specs — check your device's app store listing for compatibility.",
  },
];

const searchIntentRows = [
  {
    query: "Palworld minimum requirements",
    answer: "i5-3570K, 16GB RAM, GTX 1050 (2GB), DirectX 11, 40GB storage.",
    href: "#specs",
    label: "Minimum",
  },
  {
    query: "Palworld recommended requirements",
    answer: "i9-9900K, 32GB RAM, RTX 2070, 40GB storage.",
    href: "#specs",
    label: "Recommended",
  },
  {
    query: "Will Palworld 1.0 need better specs",
    answer: "No official change announced yet; the bigger 1.0 map may affect real-world performance even if the official minimum stays the same.",
    href: "#will-1-0-change-this",
    label: "1.0 impact",
  },
];

const jumpLinks = [
  { href: "#specs", label: "Specs" },
  { href: "#will-1-0-change-this", label: "1.0 impact" },
  { href: "#other-platforms", label: "Other platforms" },
  { href: "/games/palworld/1-0-release-date", label: "1.0 release" },
];

export default function PalworldSystemRequirementsPage() {
  return (
    <PalworldArticle
      title={title}
      description={description}
      canonical={canonical}
      label="System Requirements"
      heroImage={palworldImages.siteHero}
      heroAlt="Palworld system requirements PC specs"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="What PC specs do you need to run Palworld?"
        answer="Minimum: Windows 10 64-bit, Intel i5-3570K, 16GB RAM, GTX 1050 (2GB), 40GB storage. Recommended: Intel i9-9900K, 32GB RAM, RTX 2070. These are the official Steam-listed specs as of July 2026 — Pocketpair has not announced a change for the 1.0 release."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Quick Verdict">
        <p>
          <strong>The minimum spec is easy to hit; the recommended spec is a big jump, especially the 32GB RAM.</strong>{" "}
          If your PC is from the last five years with a mid-range GPU, you will likely land somewhere between
          minimum and recommended — playable, but not maxed out.
        </p>
      </BlufBox>

      <section id="specs">
        <h2 className="mb-4 text-xl font-bold text-foreground">Official Minimum vs. Recommended Specs</h2>
        <div className="overflow-x-auto rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-mist">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Component</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Minimum</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Recommended</th>
              </tr>
            </thead>
            <tbody>
              {palworldSpecRows.map(([component, min, rec]) => (
                <tr key={component} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-medium text-foreground">{component}</td>
                  <td className="px-4 py-3 text-muted-foreground">{min}</td>
                  <td className="px-4 py-3 text-muted-foreground">{rec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="will-1-0-change-this" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Will Palworld 1.0 Need a Better PC?</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Pocketpair has not published updated official specs for the July 10, 2026 1.0 release. That said, the
          World Tree region and a second major island roughly double the playable map, and the update adds the
          largest batch of new Pals the game has seen. Even if the official minimum/recommended numbers do not
          change, real-world performance in busy bases, PvP, and the new zones may be more demanding than the
          Early Access baseline. Check the{" "}
          <Link href="/games/palworld/1-0-release-date" className="text-foreground underline">
            1.0 release date guide
          </Link>{" "}
          and the official Steam page close to launch for any spec updates.
        </p>
      </section>

      <section id="other-platforms" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Console, Steam Deck, and Mobile</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          On PlayStation 5 and Xbox Series X|S, Palworld runs on fixed console hardware — no configuration
          needed beyond storage space. Xbox One support exists but expect the lowest settings tier and reduced
          resolution. Palworld is not currently Deck Verified by Valve, though many players report it runs on
          Steam Deck with adjusted settings and reduced battery life. Mobile (iOS/Android) is listed as a
          supported platform on Pocketpair&apos;s official site — check your device&apos;s app store listing for
          specific hardware requirements.
        </p>
      </section>
    </PalworldArticle>
  );
}
