import Image from "next/image";
import Link from "next/link";
import { BlufBox, SearchAnswerPanel, StatusPanel } from "@/components/guide-blocks";
import { TheMoundArticle } from "@/components/the-mound-omen-of-cthulhu-article";
import { theMoundOmenOfCthulhu } from "@/lib/games";
import {
  createTheMoundMetadata,
  theMoundImages,
  theMoundQuickFacts,
} from "@/lib/the-mound-omen-of-cthulhu";

const title = "The Mound: Omen of Cthulhu Guide Hub: Release Date & Platforms";
const description =
  "The Mound: Omen of Cthulhu guide hub covering the July 15, 2026 launch on PC, PS5, and Xbox Series X|S — ACE Team and Nacon's four-player co-op Lovecraftian horror expedition game.";
const canonical = "/games/the-mound-omen-of-cthulhu";

export const metadata = createTheMoundMetadata({
  title,
  description,
  canonical,
  image: theMoundImages.siteHero,
});

const faqs = [
  {
    question: "When does The Mound: Omen of Cthulhu release?",
    answer:
      "July 15, 2026, simultaneously on PC (Steam), PlayStation 5, and Xbox Series X|S.",
  },
  {
    question: "Is The Mound: Omen of Cthulhu appropriate for all ages?",
    answer:
      "No. It's rated Mature 17+ by the ESRB (Blood and Gore, Violence) and PEGI 18 (Violence). Expect intense combat, blood effects, and disturbing Lovecraftian imagery — this is not a family-friendly title.",
  },
  {
    question: "How many players is The Mound: Omen of Cthulhu?",
    answer:
      "Co-op expeditions support 2 to 4 players, coordinated through spatial voice chat. There is no solo mode confirmed — it is built as a squad experience.",
  },
  {
    question: "Is there crossplay?",
    answer:
      "Yes. Crossplay is confirmed across PC, PlayStation 5, and Xbox Series X|S at launch, so a mixed-platform squad can run expeditions together.",
  },
  {
    question: "Is there a demo?",
    answer:
      "The game was playable during Steam Next Fest, June 15-22, 2026, and drew over 200,000 demo players. Check the Steam store page for current demo availability.",
  },
];

const searchIntentRows = [
  {
    query: "The Mound Omen of Cthulhu release date",
    answer: "July 15, 2026, on PC (Steam), PS5, and Xbox Series X|S.",
    href: "/games/the-mound-omen-of-cthulhu/release-date-platforms",
    label: "Release",
  },
  {
    query: "Is The Mound Omen of Cthulhu crossplay",
    answer: "Yes — confirmed across PC, PS5, and Xbox Series X|S at launch.",
    href: "#facts",
    label: "Crossplay",
  },
  {
    query: "The Mound Omen of Cthulhu age rating",
    answer: "ESRB Mature 17+ (Blood and Gore, Violence); PEGI 18 (Violence). Not for kids.",
    href: "#facts",
    label: "Rating",
  },
];

const jumpLinks = [
  { href: "#facts", label: "Facts" },
  { href: "#guide-map", label: "Guide map" },
  { href: "/games/the-mound-omen-of-cthulhu/release-date-platforms", label: "Release & platforms" },
];

export default function TheMoundHubPage() {
  return (
    <TheMoundArticle
      title={title}
      description={description}
      canonical={canonical}
      label="The Mound: Omen of Cthulhu"
      heroImage={theMoundImages.siteHero}
      heroAlt="The Mound: Omen of Cthulhu guide hub"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="What should you know about The Mound: Omen of Cthulhu before launch?"
        answer="The Mound: Omen of Cthulhu releases July 15, 2026 on PC (Steam), PlayStation 5, and Xbox Series X|S, with confirmed crossplay across all three. It's a 2-4 player co-op Lovecraftian horror game from ACE Team and Nacon, rated Mature 17+ for Blood and Gore and Violence — not a family-friendly title. A Steam Next Fest demo in June 2026 drew over 200,000 players."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Quick Verdict">
        <p>
          <strong>A squad-focused horror expedition game with real teeth — both mechanically and in its rating.</strong>{" "}
          The sanity/hallucination system and strong Steam Next Fest turnout suggest genuine replay value for
          coordinated groups; go in expecting Mature 17+ violence, not a cozy co-op romp.
        </p>
      </BlufBox>

      <section id="facts">
        <StatusPanel
          items={theMoundQuickFacts.map(([label, value]) => ({
            label,
            value,
            status: (label === "Price" ? "needs-check" : "verified") as "verified" | "needs-check",
          }))}
        />
      </section>

      <section id="guide-map" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Guide Map</h2>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          This hub is starting with launch-day facts. More coverage — expedition tips, sanity mechanics, and
          weapon loadouts — is planned once the game is out and specific systems are confirmed.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {theMoundOmenOfCthulhu.guideLinks.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group overflow-hidden rounded-lg border border-border bg-white transition-colors hover:border-border"
            >
              <div className="relative aspect-video">
                <Image
                  src={theMoundImages.card}
                  alt={`${guide.title} guide image`}
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
    </TheMoundArticle>
  );
}
