import Image from "next/image";
import Link from "next/link";
import { BlufBox, SearchAnswerPanel, StatusPanel } from "@/components/guide-blocks";
import { MoonlightPeaksArticle } from "@/components/moonlight-peaks-article";
import { moonlightPeaks } from "@/lib/games";
import {
  createMoonlightPeaksMetadata,
  moonlightPeaksImages,
  moonlightPeaksQuickFacts,
} from "@/lib/moonlight-peaks";

const title = "Moonlight Peaks Guide Hub: Release Date, Platforms & Price";
const description =
  "Moonlight Peaks guide hub covering the July 7, 2026 launch across PC, Switch, Switch 2, and Android — platforms, price, demo access, and what's confirmed vs. not for this cozy gothic vampire life-sim.";
const canonical = "/games/moonlight-peaks";

export const metadata = createMoonlightPeaksMetadata({
  title,
  description,
  canonical,
  image: moonlightPeaksImages.siteHero,
});

const faqs = [
  {
    question: "When does Moonlight Peaks release?",
    answer:
      "Moonlight Peaks released July 7, 2026, simultaneously on PC (Steam), Nintendo Switch, Nintendo Switch 2, and Android via Google Play.",
  },
  {
    question: "Is Moonlight Peaks coming to PS5, Xbox, or iOS?",
    answer:
      "No platform announcement has been made for PlayStation, Xbox, or iOS. Confirmed platforms are PC (Steam), Nintendo Switch, Nintendo Switch 2, and Android.",
  },
  {
    question: "How much does Moonlight Peaks cost?",
    answer:
      "The standard edition on PC and Nintendo Switch is $34.99. The dedicated Nintendo Switch 2 Edition is $39.99. A 15% launch-week discount applies at release, and pricing can vary by region.",
  },
  {
    question: "Is there a Moonlight Peaks demo?",
    answer:
      "Yes. A free demo is available on Steam and the Nintendo eShop, covering character creation and a slice of cozy activities like fishing, flower arranging, and embroidery. No save carryover to the full game has been confirmed.",
  },
  {
    question: "Does Moonlight Peaks have multiplayer?",
    answer:
      "No. Moonlight Peaks is a single-player-only experience with no multiplayer or co-op mode.",
  },
];

const searchIntentRows = [
  {
    query: "Moonlight Peaks release date",
    answer: "July 7, 2026, simultaneously on PC, Switch, Switch 2, and Android.",
    href: "/games/moonlight-peaks/release-date-platforms",
    label: "Release",
  },
  {
    query: "Moonlight Peaks price",
    answer: "$34.99 standard (PC/Switch); $39.99 Switch 2 Edition; 15% launch discount.",
    href: "/games/moonlight-peaks/release-date-platforms",
    label: "Price",
  },
  {
    query: "Is Moonlight Peaks on PS5",
    answer: "No — only PC, Switch, Switch 2, and Android are confirmed.",
    href: "/games/moonlight-peaks/release-date-platforms",
    label: "Platforms",
  },
];

const jumpLinks = [
  { href: "#facts", label: "Facts" },
  { href: "#guide-map", label: "Guide map" },
  { href: "/games/moonlight-peaks/release-date-platforms", label: "Release & platforms" },
];

export default function MoonlightPeaksHubPage() {
  return (
    <MoonlightPeaksArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Moonlight Peaks"
      heroImage={moonlightPeaksImages.siteHero}
      heroAlt="Moonlight Peaks guide hub"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="What should you know about Moonlight Peaks on launch day?"
        answer="Moonlight Peaks released July 7, 2026 on PC (Steam), Nintendo Switch, Nintendo Switch 2, and Android — with no PS5, Xbox, or iOS version announced. It's $34.99 standard ($39.99 for the Switch 2 Edition), single-player only, and a free demo is available now. This cozy gothic life-sim casts you as a vampire building a nocturnal farm in a magical mountain town."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Quick Verdict">
        <p>
          <strong>A five-platform simultaneous launch is unusual for an indie life-sim and signals real publisher backing.</strong>{" "}
          Early reviews are mixed-positive (7 to 9.5 out of 10 across outlets) — a competent, well-produced take on
          the Stardew Valley formula with a distinct gothic-vampire hook, rather than a genre reinvention.
        </p>
      </BlufBox>

      <section id="facts">
        <StatusPanel
          items={moonlightPeaksQuickFacts.map(([label, value]) => ({
            label,
            value,
            status: "verified" as const,
          }))}
        />
      </section>

      <section id="guide-map" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Moonlight Peaks Guide Map</h2>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          This hub is starting with launch-day facts. More coverage is planned as official system requirements,
          farming mechanics, and romance details are confirmed.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {moonlightPeaks.guideLinks.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group overflow-hidden rounded-lg border border-border bg-white transition-colors hover:border-border"
            >
              <div className="relative aspect-video">
                <Image
                  src={moonlightPeaksImages.card}
                  alt={`${guide.title} Moonlight Peaks guide image`}
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
    </MoonlightPeaksArticle>
  );
}
