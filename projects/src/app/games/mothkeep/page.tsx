import Image from "next/image";
import Link from "next/link";
import { BlufBox, SearchAnswerPanel, StatusPanel } from "@/components/guide-blocks";
import { MothkeepArticle } from "@/components/mothkeep-article";
import { mothkeep } from "@/lib/games";
import {
  createMothkeepMetadata,
  mothkeepImages,
  mothkeepQuickFacts,
} from "@/lib/mothkeep";

const title = "Mothkeep Guide Hub: Release Date, Length & Price";
const description =
  "Mothkeep guide hub covering the July 10, 2026 launch on PC — a short, cozy moth-documenting game by solo developer Ivette Schmidt, with real Central European moth species and no combat or multiplayer.";
const canonical = "/games/mothkeep";

export const metadata = createMothkeepMetadata({
  title,
  description,
  canonical,
  image: mothkeepImages.siteHero,
});

const faqs = [
  {
    question: "When does Mothkeep release?",
    answer: "July 10, 2026, on PC via Steam.",
  },
  {
    question: "How long is Mothkeep?",
    answer:
      "The developer describes it as a short experience, roughly 2-4 hours to document the game's full roster of moth species.",
  },
  {
    question: "Is Mothkeep multiplayer?",
    answer:
      "No. Mothkeep is entirely singleplayer — no multiplayer, PvP, or trading of any kind.",
  },
  {
    question: "Are the moths in Mothkeep real species?",
    answer:
      "Yes. The game documents a curated selection of moths native to Central Europe, with each species shown across its growth stages from egg to adult.",
  },
  {
    question: "Is there a Mothkeep demo?",
    answer:
      "Yes, a free demo has been live on Steam ahead of the July 10, 2026 launch, covering an introductory area and a subset of moth species.",
  },
];

const searchIntentRows = [
  {
    query: "Mothkeep release date",
    answer: "July 10, 2026, on PC via Steam.",
    href: "/games/mothkeep/release-date-length",
    label: "Release",
  },
  {
    query: "How long is Mothkeep",
    answer: "Roughly 2-4 hours, per the developer.",
    href: "/games/mothkeep/release-date-length",
    label: "Length",
  },
  {
    query: "Mothkeep multiplayer",
    answer: "No — entirely singleplayer.",
    href: "#facts",
    label: "Multiplayer",
  },
];

const jumpLinks = [
  { href: "#facts", label: "Facts" },
  { href: "#guide-map", label: "Guide map" },
  { href: "/games/mothkeep/release-date-length", label: "Release & length" },
];

export default function MothkeepHubPage() {
  return (
    <MothkeepArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Mothkeep"
      heroImage={mothkeepImages.siteHero}
      heroAlt="Mothkeep guide hub"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="What should you know about Mothkeep before launch?"
        answer="Mothkeep releases July 10, 2026 on PC via Steam — a short (2-4 hour), entirely singleplayer nature-documentation game by solo developer Ivette Schmidt, where you explore a peaceful sanctuary and record real Central European moth species across their life stages. No combat, no multiplayer. A free demo is live now on Steam, and price has not been officially announced yet."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Quick Verdict">
        <p>
          <strong>A tiny, gentle nature game built by one person — treat it as a short, quiet break, not a big-budget experience.</strong>{" "}
          The moth species are drawn from real Central European wildlife, giving it genuine educational value
          alongside the cozy hidden-object-style gameplay loop.
        </p>
      </BlufBox>

      <section id="facts">
        <StatusPanel
          items={mothkeepQuickFacts.map(([label, value]) => ({
            label,
            value,
            status: (label === "Price" ? "needs-check" : "verified") as "verified" | "needs-check",
          }))}
        />
      </section>

      <section id="guide-map" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Guide Map</h2>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          This hub is starting with launch-day facts. More coverage — moth species lists and habitat locations —
          is planned once the full game is out and confirmed.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {mothkeep.guideLinks.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group overflow-hidden rounded-lg border border-border bg-white transition-colors hover:border-border"
            >
              <div className="relative aspect-video">
                <Image
                  src={mothkeepImages.card}
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
    </MothkeepArticle>
  );
}
