import { BlufBox, SearchAnswerPanel, StatusPanel } from "@/components/guide-blocks";
import { MothkeepArticle } from "@/components/mothkeep-article";
import { createMothkeepMetadata, mothkeepImages } from "@/lib/mothkeep";

const title = "Mothkeep Release Date, Length & Price";
const description =
  "Mothkeep releases July 10, 2026 on PC via Steam. Here's how long it takes to complete, demo details, and what's not yet announced (price).";
const canonical = "/games/mothkeep/release-date-length";

export const metadata = createMothkeepMetadata({
  title,
  description,
  canonical,
  image: mothkeepImages.hero,
});

const faqs = [
  {
    question: "When exactly does Mothkeep come out?",
    answer: "July 10, 2026, on PC via Steam. No other platforms have been announced.",
  },
  {
    question: "How many hours does it take to complete Mothkeep?",
    answer:
      "The developer describes Mothkeep as a short game, roughly 2-4 hours to document its full roster of moth species — closer to an evening's session than a long-term commitment.",
  },
  {
    question: "Is Mothkeep worth it for a short game?",
    answer:
      "That depends on what you're looking for. If you want a long-term time sink, this isn't it — Mothkeep is explicitly built as a brief, quiet nature-documentation experience. If you want a calm couple of hours learning about real moth species with a relaxing hidden-object-style loop, the short length is the point, not a downside.",
  },
  {
    question: "Does the Mothkeep demo save carry over to the full game?",
    answer:
      "This has not been officially confirmed by the developer as of this writing. Check the Steam store page or the developer's Discord closer to launch for a direct answer.",
  },
  {
    question: "How much does Mothkeep cost?",
    answer:
      "Price has not been officially announced as of this writing. Check the Steam store page closer to the July 10, 2026 release for the confirmed price.",
  },
];

const searchIntentRows = [
  {
    query: "Mothkeep release date",
    answer: "July 10, 2026, on PC via Steam.",
    href: "#release",
    label: "Release",
  },
  {
    query: "How long is Mothkeep",
    answer: "Roughly 2-4 hours, per the developer's own description.",
    href: "#length",
    label: "Length",
  },
  {
    query: "Mothkeep price",
    answer: "Not officially announced as of this writing.",
    href: "#price",
    label: "Price",
  },
];

const jumpLinks = [
  { href: "#release", label: "Release date" },
  { href: "#length", label: "Length" },
  { href: "#price", label: "Price" },
  { href: "#demo", label: "Demo" },
];

export default function MothkeepReleaseDatePage() {
  return (
    <MothkeepArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Release Date & Length"
      heroImage={mothkeepImages.hero}
      heroAlt="Mothkeep release date and length"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="When does Mothkeep release and how long is it?"
        answer="Mothkeep releases July 10, 2026 on PC via Steam. It's a short game — roughly 2-4 hours, per the solo developer's own description — built as a brief, cozy nature-documentation experience rather than a long-term commitment. Price has not been officially announced yet."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Short Answer">
        <p>
          <strong>July 10, 2026, and it's meant to be short — 2 to 4 hours.</strong> This is a deliberate design
          choice from a solo developer's first Steam release, not an early-access placeholder length.
        </p>
      </BlufBox>

      <section id="release">
        <h2 className="mb-4 text-xl font-bold text-foreground">Release Date</h2>
        <StatusPanel
          items={[
            { label: "Release Date", value: "July 10, 2026", status: "verified" as const },
            { label: "Platform", value: "PC (Steam) only", status: "verified" as const },
            { label: "Developer", value: "Ivette Schmidt (solo, first Steam release)", status: "verified" as const },
          ]}
        />
      </section>

      <section id="length" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">How Long Is Mothkeep?</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          The developer describes Mothkeep as a short experience — roughly 2-4 hours to document the full roster
          of moth species across the game's habitats. This is by design: Mothkeep is explicitly built as a quiet,
          bite-sized nature game, not a long-term time sink. If you're looking for dozens of hours of content,
          temper your expectations; if you want a calm evening learning about real Central European moths, the
          short runtime is the intended experience.
        </p>
      </section>

      <section id="price" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Price</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Official pricing has not been announced as of this writing. Check the Steam store page directly closer
          to the July 10, 2026 launch for the confirmed price.
        </p>
      </section>

      <section id="demo" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Demo</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          A free demo has been live on Steam ahead of launch, covering an introductory area and a subset of the
          game's moth species. Whether demo progress carries over into the full release has not been officially
          confirmed — check the Steam page or the developer's Discord for the latest word before you buy.
        </p>
      </section>
    </MothkeepArticle>
  );
}
