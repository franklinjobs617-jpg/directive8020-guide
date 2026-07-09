import { BlufBox, SearchAnswerPanel, StatusPanel } from "@/components/guide-blocks";
import { TheMoundArticle } from "@/components/the-mound-omen-of-cthulhu-article";
import { createTheMoundMetadata, theMoundImages } from "@/lib/the-mound-omen-of-cthulhu";

const title = "The Mound: Omen of Cthulhu Release Date, Platforms & Price";
const description =
  "The Mound: Omen of Cthulhu releases July 15, 2026 on PC, PS5, and Xbox Series X|S with full crossplay. Here's the confirmed platform list, co-op details, content rating, and what's not yet announced (price).";
const canonical = "/games/the-mound-omen-of-cthulhu/release-date-platforms";

export const metadata = createTheMoundMetadata({
  title,
  description,
  canonical,
  image: theMoundImages.hero,
});

const faqs = [
  {
    question: "What platforms is The Mound: Omen of Cthulhu on?",
    answer:
      "PC via Steam, PlayStation 5, and Xbox Series X|S, all releasing simultaneously on July 15, 2026 with confirmed crossplay across all three.",
  },
  {
    question: "Is The Mound: Omen of Cthulhu on Xbox One or PS4?",
    answer:
      "No. The confirmed platforms are current-generation only: PC, PlayStation 5, and Xbox Series X|S. No last-gen console version has been announced.",
  },
  {
    question: "What is the age rating for The Mound: Omen of Cthulhu?",
    answer:
      "ESRB Mature 17+ for Blood and Gore, Violence, and Users Interact. PEGI rates it 18 for Violence. This is a mature-rated horror game, not suitable for children.",
  },
  {
    question: "How much does The Mound: Omen of Cthulhu cost?",
    answer:
      "Official pricing has not been confirmed as of this writing. Check the Steam store page closer to the July 15, 2026 release for the final price.",
  },
  {
    question: "Is there a pre-order bonus?",
    answer:
      "Yes. Nacon has confirmed a pre-order bonus called the Lost Explorers' Swords Pack, which includes two exclusive cosmetic looks for your sword.",
  },
];

const searchIntentRows = [
  {
    query: "The Mound Omen of Cthulhu platforms",
    answer: "PC (Steam), PS5, and Xbox Series X|S — all launching July 15, 2026, with crossplay.",
    href: "#platform-table",
    label: "Platforms",
  },
  {
    query: "The Mound Omen of Cthulhu age rating",
    answer: "ESRB Mature 17+ (Blood and Gore, Violence); PEGI 18 (Violence).",
    href: "#rating",
    label: "Rating",
  },
  {
    query: "The Mound Omen of Cthulhu price",
    answer: "Not officially confirmed as of this writing.",
    href: "#not-confirmed",
    label: "Price",
  },
];

const jumpLinks = [
  { href: "#platform-table", label: "Platforms" },
  { href: "#rating", label: "Content rating" },
  { href: "#not-confirmed", label: "Not confirmed" },
  { href: "#demo", label: "Demo history" },
];

const platformRows: [string, string][] = [
  ["PC (Steam)", "Confirmed — releases July 15, 2026, crossplay enabled"],
  ["PlayStation 5", "Confirmed — releases July 15, 2026, crossplay enabled"],
  ["Xbox Series X|S", "Confirmed — releases July 15, 2026, crossplay enabled"],
  ["PS4 / Xbox One", "Not announced — current-gen only"],
  ["Nintendo Switch / Switch 2", "Not announced"],
  ["Price", "Not officially confirmed yet"],
];

export default function TheMoundReleaseDatePage() {
  return (
    <TheMoundArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Release Date & Platforms"
      heroImage={theMoundImages.hero}
      heroAlt="The Mound: Omen of Cthulhu release date and platforms"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="When and where does The Mound: Omen of Cthulhu release?"
        answer="The Mound: Omen of Cthulhu releases July 15, 2026 on PC (Steam), PlayStation 5, and Xbox Series X|S, with confirmed crossplay across all three — no last-gen console version. It's rated Mature 17+ (ESRB) / 18 (PEGI) for blood and violence. Price has not been officially confirmed yet."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Short Answer">
        <p>
          <strong>July 15, 2026, three current-gen platforms, full crossplay, and a firm Mature rating.</strong>{" "}
          If your squad spans PC and console, you can play together at launch — just know this is a genuinely
          violent horror game, not a light co-op romp.
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

      <section id="rating" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Content Rating: What to Expect</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          The ESRB rates The Mound: Omen of Cthulhu Mature 17+ for Blood and Gore and Violence, plus Users
          Interact for online co-op chat. Official rating summaries describe first-person combat against
          undead and eldritch creatures using swords, pistols, and knives, with impact sounds, blood-splatter
          effects, and some enemies being decapitated. Environments also depict bloodstains and severed heads
          on spikes. PEGI separately rates the game 18 for Violence. This is not a game for younger players or
          anyone sensitive to graphic combat imagery.
        </p>
      </section>

      <section id="not-confirmed" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">What's Not Confirmed Yet</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Official pricing has not been announced as of this writing. There is also no last-gen console version
          (PS4, Xbox One) or Nintendo platform announced — confirmed platforms remain PC, PS5, and Xbox Series
          X|S only.
        </p>
      </section>

      <section id="demo" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Demo History</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          The Mound: Omen of Cthulhu was playable during Steam Next Fest, June 15-22, 2026, and reportedly drew
          more than 200,000 demo players — a strong turnout for a co-op horror title from a mid-size publisher.
          Check the official Steam page for whether the demo remains available closer to the July 15 launch.
        </p>
      </section>
    </TheMoundArticle>
  );
}
