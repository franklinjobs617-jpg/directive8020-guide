import Image from "next/image";
import Link from "next/link";
import { BlufBox, SearchAnswerPanel, StatusPanel } from "@/components/guide-blocks";
import { CatMailCoArticle } from "@/components/cat-mail-co-article";
import { catMailCo } from "@/lib/games";
import {
  createCatMailCoMetadata,
  catMailCoImages,
  catMailCoQuickFacts,
} from "@/lib/cat-mail-co";

const title = "Cat Mail Co. Guide Hub: Release Date, Price & Co-op Details";
const description =
  "Cat Mail Co. guide hub covering the July 9, 2026 launch on PC — Maracas Studio's cozy cat postal management sim with 4-player co-op, a day/night mystery, and a Steam Next Fest demo that hit 96%+ positive.";
const canonical = "/games/cat-mail-co";

export const metadata = createCatMailCoMetadata({
  title,
  description,
  canonical,
  image: catMailCoImages.siteHero,
});

const faqs = [
  {
    question: "When does Cat Mail Co. release?",
    answer:
      "July 9, 2026, on PC via Steam. The launch was shifted a few days later than the original July 6 target so it wouldn't compete for attention during the busiest days of the Steam Summer Sale.",
  },
  {
    question: "Is Cat Mail Co. multiplayer?",
    answer:
      "Yes, up to 4 players in online co-op, alongside a full single-player mode. In co-op, players can divide the postal workflow — one on the scale, another on stamps and labels, others loading the outgoing boat.",
  },
  {
    question: "Is there a Cat Mail Co. demo?",
    answer:
      "Yes. The free demo has been live since June 12, 2026 and was one of the standout entries of Steam Next Fest June 2026, rated 96-97% positive. Progress made in the demo carries over into the full release.",
  },
  {
    question: "How much does Cat Mail Co. cost?",
    answer:
      "Official pricing has not been announced as of this writing. Check the Steam store page closer to launch for the confirmed price.",
  },
  {
    question: "What platforms is Cat Mail Co. on?",
    answer:
      "PC via Steam only, at launch. No console or mobile version has been announced.",
  },
];

const searchIntentRows = [
  {
    query: "Cat Mail Co release date",
    answer: "July 9, 2026, on PC (Steam).",
    href: "/games/cat-mail-co/release-date-price",
    label: "Release",
  },
  {
    query: "Cat Mail Co co-op",
    answer: "Yes — up to 4 players online, plus full single-player.",
    href: "#facts",
    label: "Co-op",
  },
  {
    query: "Cat Mail Co system requirements",
    answer: "Minimum: i5-3330/FX-8300, 8GB RAM, GTX 950/HD 7970, 4GB storage.",
    href: "/games/cat-mail-co/release-date-price",
    label: "Specs",
  },
];

const jumpLinks = [
  { href: "#facts", label: "Facts" },
  { href: "#guide-map", label: "Guide map" },
  { href: "/games/cat-mail-co/release-date-price", label: "Release, price & specs" },
];

export default function CatMailCoHubPage() {
  return (
    <CatMailCoArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Cat Mail Co."
      heroImage={catMailCoImages.siteHero}
      heroAlt="Cat Mail Co. guide hub"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="What should you know about Cat Mail Co. before launch?"
        answer="Cat Mail Co. releases July 9, 2026 on PC via Steam — a cozy cat-themed postal management sim from Belgian studio Maracas Studio, with up to 4-player online co-op and a day/night mystery woven through the mail you sort. The free demo has been live since June 12 and was one of the standout hits of Steam Next Fest June 2026, rated 96-97% positive, with 130,000+ wishlists ahead of launch. Price has not been officially announced yet."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Quick Verdict">
        <p>
          <strong>A calm, no-pressure management sim with real co-op depth, not just a solo timesink with friends watching.</strong>{" "}
          The demo's near-universal positive reception and steady wishlist growth suggest this lands well for fans
          of stress-free sims like Unpacking or Moving Out's calmer cousins.
        </p>
      </BlufBox>

      <section id="facts">
        <StatusPanel
          items={catMailCoQuickFacts.map(([label, value]) => ({
            label,
            value,
            status: (label === "Price" ? "needs-check" : "verified") as "verified" | "needs-check",
          }))}
        />
      </section>

      <section id="guide-map" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Guide Map</h2>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          This hub is starting with launch-day facts. More coverage is planned once the game is out and specific
          mechanics (postage rules, night-time package mysteries, co-op workflow tips) are confirmed.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {catMailCo.guideLinks.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group overflow-hidden rounded-lg border border-border bg-white transition-colors hover:border-border"
            >
              <div className="relative aspect-video">
                <Image
                  src={catMailCoImages.card}
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
    </CatMailCoArticle>
  );
}
