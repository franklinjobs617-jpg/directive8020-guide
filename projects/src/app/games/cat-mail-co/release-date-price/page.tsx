import { BlufBox, SearchAnswerPanel, StatusPanel } from "@/components/guide-blocks";
import { CatMailCoArticle } from "@/components/cat-mail-co-article";
import { createCatMailCoMetadata, catMailCoImages, catMailCoSpecRows } from "@/lib/cat-mail-co";

const title = "Cat Mail Co. Release Date, Price & System Requirements";
const description =
  "Cat Mail Co. releases July 9, 2026 on PC via Steam. Here's the confirmed timeline, official system requirements, co-op details, demo save compatibility, and what's not yet announced (price).";
const canonical = "/games/cat-mail-co/release-date-price";

export const metadata = createCatMailCoMetadata({
  title,
  description,
  canonical,
  image: catMailCoImages.hero,
});

const faqs = [
  {
    question: "Why did Cat Mail Co. move from July 6 to July 9?",
    answer:
      "Maracas Studio delayed the launch by a few days to avoid competing for attention during the busiest days of the Steam Summer Sale, which runs through July 9. The studio said it was not a development-related delay.",
  },
  {
    question: "What are the Cat Mail Co. system requirements?",
    answer:
      "Officially listed minimum specs: Windows 10/11 64-bit, Intel Core i5-3330 (3.0 GHz) or AMD FX-8300 (3.3 GHz), 8 GB RAM, GeForce GTX 950 (2GB) or Radeon HD 7970 (3GB), and 4 GB of storage. No separate recommended spec has been published — the minimum spec appears to double as the primary requirement given the game's modest visual scope.",
  },
  {
    question: "Does Cat Mail Co. demo progress carry over to the full game?",
    answer:
      "Yes, confirmed by the developer — any sorting progress made in the free demo transfers directly into the full release, so demo players do not need to start over.",
  },
  {
    question: "What languages does Cat Mail Co. support?",
    answer:
      "English, French, Italian, German, Spanish, Simplified Chinese, Korean, Japanese, Polish, and Brazilian Portuguese.",
  },
  {
    question: "Is there a launch bonus for buying Cat Mail Co. early?",
    answer:
      "Yes. Players who buy during the first week of release get a free Supporter Pack containing an artbook, the full soundtrack, and an additional bonus item. After that week, the Supporter Pack becomes separate paid DLC.",
  },
];

const searchIntentRows = [
  {
    query: "Cat Mail Co release date",
    answer: "July 9, 2026 on PC via Steam — moved from an original July 6 target to avoid Summer Sale overlap.",
    href: "#release-timeline",
    label: "Release",
  },
  {
    query: "Cat Mail Co system requirements",
    answer: "Minimum: i5-3330/FX-8300, 8GB RAM, GTX 950/HD 7970, 4GB storage, Windows 10/11 64-bit.",
    href: "#specs",
    label: "Specs",
  },
  {
    query: "Cat Mail Co price",
    answer: "Not officially announced as of this writing.",
    href: "#price",
    label: "Price",
  },
];

const jumpLinks = [
  { href: "#release-timeline", label: "Release timeline" },
  { href: "#specs", label: "System requirements" },
  { href: "#price", label: "Price" },
  { href: "#demo", label: "Demo & languages" },
];

export default function CatMailCoReleaseDatePage() {
  return (
    <CatMailCoArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Release Date, Price & Specs"
      heroImage={catMailCoImages.hero}
      heroAlt="Cat Mail Co. release date and system requirements"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="When does Cat Mail Co. release and what does it need to run?"
        answer="Cat Mail Co. releases July 9, 2026 on PC via Steam. Official minimum specs are modest: an i5-3330 or FX-8300 CPU, 8GB RAM, and a GTX 950 or HD 7970 GPU. Price has not been officially announced yet. First-week buyers get a free Supporter Pack (artbook + soundtrack + bonus item)."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Short Answer">
        <p>
          <strong>July 9, 2026, PC only, and it will run on almost anything.</strong> The official minimum spec is
          a decade-old mid-range PC — this is a light, accessible game by design, matching its low-pressure
          gameplay philosophy.
        </p>
      </BlufBox>

      <section id="release-timeline">
        <h2 className="mb-4 text-xl font-bold text-foreground">Release Timeline</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Cat Mail Co. was originally announced for July 6, 2026, alongside its Steam page going live on June 9.
          A free demo ran through Steam Next Fest (June 15-22) and gathered a strong response — over 50,000
          wishlists within two weeks of announcement, climbing past 130,000 by early July. Maracas Studio then
          pushed the release three days later to July 9, explicitly to avoid launching during the busiest days of
          the Steam Summer Sale, positioning the game at the moment shoppers shift attention from discounted
          back-catalog titles to fresh releases.
        </p>
      </section>

      <section id="specs" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">System Requirements</h2>
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
              {catMailCoSpecRows.map(([component, min, rec]) => (
                <tr key={component} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-medium text-foreground">{component}</td>
                  <td className="px-4 py-3 text-muted-foreground">{min}</td>
                  <td className="px-4 py-3 text-muted-foreground">{rec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Steam and third-party listings currently show one published spec tier rather than separate
          minimum/recommended numbers — treat the table above as the confirmed baseline.
        </p>
      </section>

      <section id="price" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Price</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Cat Mail Co.'s price has not been officially announced as of this writing. Check the Steam store page
          directly closer to the July 9, 2026 launch for the confirmed figure.
        </p>
      </section>

      <section id="demo" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Demo & Language Support</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          The free demo has been live since June 12, 2026 and remains available ahead of launch. Any sorting
          progress made in the demo carries over into the full release — no need to restart. Cat Mail Co. supports
          English, French, Italian, German, Spanish, Simplified Chinese, Korean, Japanese, Polish, and Brazilian
          Portuguese.
        </p>
      </section>
    </CatMailCoArticle>
  );
}
