import Image from "next/image";
import Link from "next/link";
import { BlufBox, SearchAnswerPanel, StatusPanel } from "@/components/guide-blocks";
import { ForensicsCrimeSceneDetectiveArticle } from "@/components/forensics-crime-scene-detective-article";
import { forensicsCrimeSceneDetective } from "@/lib/games";
import {
  createForensicsCrimeSceneDetectiveMetadata,
  forensicsCrimeSceneDetectiveImages,
  forensicsCrimeSceneDetectiveQuickFacts,
} from "@/lib/forensics-crime-scene-detective";

const title = "Forensics: Crime Scene Detective Guide Hub: Release Date & Platforms";
const description =
  "Forensics: Crime Scene Detective guide hub covering the July 13, 2026 launch on PC, PS5, and Xbox Series X|S — a realistic crime lab simulator developed with Germany's State Criminal Police Office Rhineland-Palatinate.";
const canonical = "/games/forensics-crime-scene-detective";

export const metadata = createForensicsCrimeSceneDetectiveMetadata({
  title,
  description,
  canonical,
  image: forensicsCrimeSceneDetectiveImages.siteHero,
});

const faqs = [
  {
    question: "When does Forensics: Crime Scene Detective release?",
    answer:
      "July 13, 2026, on PC (Steam), PlayStation 5, and Xbox Series X|S. A PS5 physical edition is also planned.",
  },
  {
    question: "Is Forensics: Crime Scene Detective based on real forensic work?",
    answer:
      "Yes. It was developed in close collaboration with Germany's State Criminal Police Office Rhineland-Palatinate (LKA RLP), and missions are inspired by real-world scenarios and professional forensic methodology.",
  },
  {
    question: "Is there a demo?",
    answer:
      "Yes, a free demo has been live on Steam since Steam Next Fest in June 2026. As of early July 2026, the developer reported over 100,000 wishlists and 80,000+ demo downloads.",
  },
  {
    question: "How much does Forensics: Crime Scene Detective cost?",
    answer:
      "Pricing has not been officially announced yet as of this writing. Check the Steam store page closer to the July 13, 2026 release for the confirmed price.",
  },
  {
    question: "What are the system requirements?",
    answer:
      "Not officially published yet. We'll update this page once Steam lists confirmed minimum and recommended specs.",
  },
];

const searchIntentRows = [
  {
    query: "Forensics Crime Scene Detective release date",
    answer: "July 13, 2026, on PC (Steam), PS5, and Xbox Series X|S.",
    href: "/games/forensics-crime-scene-detective/release-date-platforms",
    label: "Release",
  },
  {
    query: "Forensics Crime Scene Detective price",
    answer: "Not officially announced yet.",
    href: "/games/forensics-crime-scene-detective/release-date-platforms",
    label: "Price",
  },
  {
    query: "Is Forensics Crime Scene Detective real",
    answer: "Developed with Germany's LKA RLP state police, based on real forensic methodology and scenarios.",
    href: "#facts",
    label: "Authenticity",
  },
];

const jumpLinks = [
  { href: "#facts", label: "Facts" },
  { href: "#guide-map", label: "Guide map" },
  { href: "/games/forensics-crime-scene-detective/release-date-platforms", label: "Release & platforms" },
];

export default function ForensicsCrimeSceneDetectiveHubPage() {
  return (
    <ForensicsCrimeSceneDetectiveArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Forensics: Crime Scene Detective"
      heroImage={forensicsCrimeSceneDetectiveImages.siteHero}
      heroAlt="Forensics: Crime Scene Detective guide hub"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="What should you know about Forensics: Crime Scene Detective before launch?"
        answer="Forensics: Crime Scene Detective releases July 13, 2026 on PC (Steam), PlayStation 5, and Xbox Series X|S. It's a realistic crime lab simulator developed with Germany's State Criminal Police Office Rhineland-Palatinate (LKA RLP), where you investigate crime scenes and analyze evidence in the lab to incriminate or exonerate suspects. A free demo is live now, with 100,000+ wishlists and 80,000+ demo downloads reported by the developer as of early July. Price and system requirements are not yet officially announced."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Quick Verdict">
        <p>
          <strong>A distinctive, credibly-researched take on the CSI genre — first of its kind on PlayStation and Xbox.</strong>{" "}
          Real police-office collaboration and evidence-driven case outcomes set it apart from typical detective
          games. Strong pre-launch demo numbers suggest real audience interest; price and specs are still pending.
        </p>
      </BlufBox>

      <section id="facts">
        <StatusPanel
          items={forensicsCrimeSceneDetectiveQuickFacts.map(([label, value]) => ({
            label,
            value,
            status: (label === "Price" || label === "System Requirements" ? "needs-check" : "verified") as "verified" | "needs-check",
          }))}
        />
      </section>

      <section id="guide-map" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Guide Map</h2>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          This hub is starting with launch-day facts. More coverage — including case walkthroughs and tips — is
          planned once the game is out and specific cases are confirmed.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {forensicsCrimeSceneDetective.guideLinks.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group overflow-hidden rounded-lg border border-border bg-white transition-colors hover:border-border"
            >
              <div className="relative aspect-video">
                <Image
                  src={forensicsCrimeSceneDetectiveImages.card}
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
    </ForensicsCrimeSceneDetectiveArticle>
  );
}
