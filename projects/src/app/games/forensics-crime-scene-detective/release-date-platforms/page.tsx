import { BlufBox, SearchAnswerPanel, StatusPanel } from "@/components/guide-blocks";
import { ForensicsCrimeSceneDetectiveArticle } from "@/components/forensics-crime-scene-detective-article";
import { createForensicsCrimeSceneDetectiveMetadata, forensicsCrimeSceneDetectiveImages } from "@/lib/forensics-crime-scene-detective";

const title = "Forensics: Crime Scene Detective Release Date, Platforms & Price";
const description =
  "Forensics: Crime Scene Detective releases July 13, 2026 on PC, PS5, and Xbox Series X|S. Here's the confirmed platform list, demo access, pre-launch momentum, and what's not yet announced (price, system requirements).";
const canonical = "/games/forensics-crime-scene-detective/release-date-platforms";

export const metadata = createForensicsCrimeSceneDetectiveMetadata({
  title,
  description,
  canonical,
  image: forensicsCrimeSceneDetectiveImages.hero,
});

const faqs = [
  {
    question: "What platforms is Forensics: Crime Scene Detective releasing on?",
    answer:
      "PC via Steam, PlayStation 5, and Xbox Series X|S, all on July 13, 2026. It is described by the publisher as the first game of its kind on PlayStation 5 and Xbox Series X|S. A PS5 physical edition is also planned.",
  },
  {
    question: "How much wishlist/demo momentum does the game have before launch?",
    answer:
      "The developer reported over 100,000 wishlists and more than 80,000 demo downloads as of early July 2026, roughly a week before release. The free demo has been live since Steam Next Fest in June 2026.",
  },
  {
    question: "Is the price announced?",
    answer:
      "Not as of this writing. Check the official Steam store page closer to July 13, 2026 for the confirmed price.",
  },
  {
    question: "Are system requirements published?",
    answer:
      "Not yet. Given the first-person, single-location investigation gameplay shown in previews and the demo, it is unlikely to be a particularly demanding game, but treat any specific numbers you see before an official Steam listing as unconfirmed.",
  },
  {
    question: "Who is developing and publishing the game?",
    answer:
      "Binary Impact and Alchemical Works are the developers, with Aerosoft GmbH publishing. The game was made in close collaboration with Germany's State Criminal Police Office Rhineland-Palatinate (LKA RLP) as technical advisor.",
  },
];

const searchIntentRows = [
  {
    query: "Forensics Crime Scene Detective platforms",
    answer: "PC (Steam), PS5, and Xbox Series X|S — all launching July 13, 2026.",
    href: "#platform-table",
    label: "Platforms",
  },
  {
    query: "Forensics Crime Scene Detective wishlist demo numbers",
    answer: "100,000+ wishlists and 80,000+ demo downloads reported by the developer in early July 2026.",
    href: "#momentum",
    label: "Momentum",
  },
  {
    query: "Forensics Crime Scene Detective price",
    answer: "Not officially announced as of this writing.",
    href: "#not-confirmed",
    label: "Price",
  },
];

const jumpLinks = [
  { href: "#platform-table", label: "Platforms" },
  { href: "#momentum", label: "Pre-launch momentum" },
  { href: "#not-confirmed", label: "Not confirmed" },
  { href: "#demo", label: "Demo" },
];

const platformRows: [string, string][] = [
  ["PC (Steam)", "Confirmed — releases July 13, 2026, free demo live now"],
  ["PlayStation 5", "Confirmed — digital + physical edition, releases July 13, 2026"],
  ["Xbox Series X|S", "Confirmed — releases July 13, 2026"],
  ["Nintendo Switch / Switch 2", "Not announced"],
  ["Price", "Not officially announced yet"],
];

export default function ForensicsCrimeSceneDetectiveReleaseDatePage() {
  return (
    <ForensicsCrimeSceneDetectiveArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Release Date & Platforms"
      heroImage={forensicsCrimeSceneDetectiveImages.hero}
      heroAlt="Forensics: Crime Scene Detective release date and platforms"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="When and where does Forensics: Crime Scene Detective release?"
        answer="Forensics: Crime Scene Detective releases July 13, 2026 on PC (Steam), PlayStation 5, and Xbox Series X|S — the publisher's first game of this kind on PlayStation and Xbox. A free demo has been live since Steam Next Fest in June 2026, and the developer reported over 100,000 wishlists and 80,000+ demo downloads in early July. Price and system requirements are not yet officially announced."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Short Answer">
        <p>
          <strong>July 13, 2026, three platforms, no staggered rollout.</strong> This is Aerosoft's first
          console release of this kind, built with real input from Germany's LKA RLP police office. Try the free
          demo now if you want to test the tone before price and specs are confirmed.
        </p>
      </BlufBox>

      <section id="platform-table">
        <h2 className="mb-4 text-xl font-bold text-foreground">Platform Status</h2>
        <StatusPanel
          items={platformRows.map(([label, value]) => ({
            label,
            value,
            status: (label === "Price" ? "needs-check" : "verified") as "verified" | "needs-check",
          }))}
        />
      </section>

      <section id="momentum" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Pre-Launch Momentum</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          The developer posted on Steam Community in early July 2026 thanking players for over 100,000 wishlists
          and more than 80,000 demo downloads, roughly two weeks before release. The demo has been live since Steam
          Next Fest in June 2026, and the studio has published multiple devlogs discussing tutorial and UX
          refinements based on player feedback from the demo period.
        </p>
      </section>

      <section id="not-confirmed" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">What's Not Confirmed Yet</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Official pricing and system requirements have not been published as of this writing. Nintendo Switch or
          Switch 2 versions have not been announced either. We will update this page once Steam lists these
          details.
        </p>
      </section>

      <section id="demo" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">The Free Demo</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          A free demo is live now on Steam as part of Steam Next Fest. It covers early crime scene investigation
          and lab analysis mechanics — tutorial cases where players collect fingerprints, analyze digital devices,
          and submit reports. Player discussions on Steam show some early confusion around specific tutorial steps
          (like locating all required evidence), which the developer has been actively addressing in devlogs ahead
          of the full release.
        </p>
      </section>
    </ForensicsCrimeSceneDetectiveArticle>
  );
}
