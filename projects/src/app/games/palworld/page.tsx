import Image from "next/image";
import Link from "next/link";
import { BlufBox, SearchAnswerPanel, StatusPanel } from "@/components/guide-blocks";
import { PalworldArticle } from "@/components/palworld-article";
import { palworld } from "@/lib/games";
import {
  createPalworldMetadata,
  palworldImages,
  palworldQuickFacts,
  palworldStartRows,
} from "@/lib/palworld";

const title = "Palworld Guide Hub: 1.0 Release Date, System Requirements & Save Data";
const description =
  "Palworld guide hub covering the July 10, 2026 1.0 release, system requirements, save-data guidance for the Early Access transition, and upcoming World Tree and Genetic Recombination breeding coverage.";
const canonical = "/games/palworld";

export const metadata = createPalworldMetadata({
  title,
  description,
  canonical,
  image: palworldImages.siteHero,
});

const faqs = [
  {
    question: "When does Palworld leave Early Access?",
    answer:
      "Palworld's full 1.0 release is confirmed for July 10, 2026, on PC (Steam), PlayStation 5, and Xbox Series X|S/Xbox One, more than two and a half years after its January 19, 2024 Early Access launch.",
  },
  {
    question: "Will Palworld 1.0 wipe my existing save?",
    answer:
      "No. Pocketpair has confirmed existing worlds and dedicated servers carry over to 1.0 without a forced wipe. A fresh start is recommended, not required, since progression and area unlocks are being overhauled.",
  },
  {
    question: "What is new in Palworld 1.0?",
    answer:
      "The headline additions are the World Tree endgame region, a second major island (together roughly doubling the map), the largest single batch of new Pals in the game's history, a new Genetic Recombination breeding system, PvP mode, and Server Clustering for dedicated servers.",
  },
  {
    question: "Is Palworld available on mobile?",
    answer:
      "Pocketpair's official site lists iOS/Android alongside PC, PlayStation 5, and Xbox as supported platforms. Check the official Pocketpair page and your regional app store for current availability and any 1.0-specific mobile notes.",
  },
  {
    question: "Do I need a powerful PC to run Palworld?",
    answer:
      "No. The official minimum spec is a 2013-era quad-core i5, 16GB RAM, and a GTX 1050 — modest by current standards. The recommended spec (i9-9900K, 32GB RAM, RTX 2070) is a much bigger jump, aimed at smooth 1080p performance.",
  },
];

const searchIntentRows = [
  {
    query: "Palworld 1.0 release date",
    answer: "July 10, 2026, simultaneously on PC (Steam), PlayStation 5, and Xbox Series X|S/Xbox One.",
    href: "/games/palworld/1-0-release-date",
    label: "Release",
  },
  {
    query: "Palworld system requirements",
    answer: "Minimum: i5-3570K, 16GB RAM, GTX 1050. Recommended: i9-9900K, 32GB RAM, RTX 2070.",
    href: "/games/palworld/system-requirements",
    label: "Specs",
  },
  {
    query: "Does Palworld 1.0 wipe your save",
    answer: "No — existing saves and dedicated servers carry over. A fresh start is optional, not forced.",
    href: "/games/palworld/save-data-1-0",
    label: "Save data",
  },
];

const jumpLinks = [
  { href: "#facts", label: "Facts" },
  { href: "#start-here", label: "Start here" },
  { href: "#guide-map", label: "Guide map" },
  { href: "/games/palworld/1-0-release-date", label: "1.0 release" },
  { href: "/games/palworld/system-requirements", label: "Specs" },
  { href: "/games/palworld/save-data-1-0", label: "Save data" },
];

export default function PalworldHubPage() {
  return (
    <PalworldArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Palworld"
      heroImage={palworldImages.siteHero}
      heroAlt="Palworld 1.0 guide hub hero image"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="What should you know before Palworld 1.0 launches?"
        answer="Palworld's full 1.0 release lands July 10, 2026 on PC, PlayStation 5, and Xbox, ending two and a half years of Early Access. Existing saves carry over — nothing is force-wiped. The update adds the World Tree endgame region, a second island roughly doubling the map, the largest Pal roster drop yet, a new Genetic Recombination breeding system, PvP mode, and Server Clustering."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Quick Verdict">
        <p>
          <strong>If you already own Palworld, 1.0 is a free update — just back up your save before July 10.</strong>{" "}
          If you are considering buying, the 1.0 launch (plus a pre-launch discount) is the best entry point yet: the
          Early Access rough edges Pocketpair has spent two-plus years addressing are the whole point of this release.
        </p>
      </BlufBox>

      <section id="facts">
        <StatusPanel
          items={palworldQuickFacts.map(([label, value]) => ({
            label,
            value,
            status: (label === "Price" ? "needs-check" : "verified") as "verified" | "needs-check",
          }))}
        />
      </section>

      <section id="start-here" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Start Here by Need</h2>
        <div className="overflow-x-auto rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-mist">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player need</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best answer</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Guide</th>
              </tr>
            </thead>
            <tbody>
              {palworldStartRows.map(([need, answer, href]) => (
                <tr key={need} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{need}</td>
                  <td className="px-4 py-3 text-muted-foreground">{answer}</td>
                  <td className="px-4 py-3">
                    <Link href={href} className="text-foreground hover:underline">
                      Open guide
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="guide-map" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Palworld Guide Map</h2>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          This hub is growing ahead of the July 10, 2026 1.0 launch. World Tree, Genetic Recombination
          breeding (including a breeding calculator), and full 1.0 patch coverage are coming as official
          details are confirmed.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {palworld.guideLinks.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group overflow-hidden rounded-lg border border-border bg-white transition-colors hover:border-border"
            >
              <div className="relative aspect-video">
                <Image
                  src={palworldImages.card}
                  alt={`${guide.title} Palworld guide image`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-foreground group-hover:text-foreground">
                  {guide.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {guide.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PalworldArticle>
  );
}
