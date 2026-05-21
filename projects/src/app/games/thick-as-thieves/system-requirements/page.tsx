import { ArticleImage } from "@/components/article-media";
import { BlufBox } from "@/components/guide-blocks";
import { ThickAsThievesArticle } from "@/components/thick-as-thieves-article";
import {
  createThickAsThievesMetadata,
  thickAsThievesImages,
  thickAsThievesSpecs,
  thickAsThievesSteamFeatureRows,
} from "@/lib/thick-as-thieves";

const title =
  "Thick As Thieves System Requirements - PC Specs, SSD & Controller";
const description =
  "Official Thick As Thieves PC system requirements: Windows 10/11, 12-16 GB RAM, GTX 1060 to RTX 2070, DirectX 12, SSD required, controller, and Steam Cloud.";
const canonical = "/games/thick-as-thieves/system-requirements";

export const metadata = createThickAsThievesMetadata({
  title,
  description,
  canonical,
  image: thickAsThievesImages.specs,
});

const faqs = [
  {
    question: "What are Thick As Thieves minimum PC specs?",
    answer:
      "Steam lists Windows 10, Intel Core i5-4570, 12 GB RAM, GTX 1060 6GB or equivalent, DirectX 12, broadband internet, 10 GB storage, and SSD required.",
  },
  {
    question: "What are Thick As Thieves recommended specs?",
    answer:
      "Steam lists Windows 11, Intel Core i7-8700, 16 GB RAM, RTX 2070 8GB or equivalent, DirectX 12, broadband internet, 10 GB storage, and SSD required.",
  },
  {
    question: "Does Thick As Thieves require SSD?",
    answer:
      "Yes. Steam lists SSD required in both minimum and recommended requirements.",
  },
  {
    question: "Does Thick As Thieves support controller?",
    answer: "Yes. Steam lists full controller support.",
  },
];

export default function ThickAsThievesSystemRequirementsPage() {
  return (
    <ThickAsThievesArticle
      title={title}
      description={description}
      canonical={canonical}
      label="System Requirements"
      heroImage={thickAsThievesImages.specs}
      heroAlt="Thick As Thieves PC system requirements guide image"
      faqs={faqs}
    >
      <BlufBox title="Specs Answer">
        <p>
          <strong>
            Thick As Thieves requires an SSD and DirectX 12 on PC.
          </strong>{" "}
          The official Steam minimum is a Windows 10 PC with 12 GB RAM and a GTX
          1060 6GB-class GPU. The recommended tier moves to Windows 11, 16 GB
          RAM, and an RTX 2070 8GB-class GPU.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2>Minimum and Recommended Specs</h2>
        <ArticleImage
          src={thickAsThievesImages.specs}
          alt="Thick As Thieves minimum and recommended specs image"
          caption="The SSD requirement is not optional on the Steam page, so low-end PC advice should start with storage and memory, not just GPU."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                Component
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                Minimum
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                Recommended
              </th>
            </tr>
          </thead>
          <tbody>
            {thickAsThievesSpecs.map(([component, minimum, recommended]) => (
              <tr
                key={component}
                className="border-b border-border/30 last:border-0"
              >
                <th
                  scope="row"
                  className="px-4 py-3 text-left font-semibold text-foreground"
                >
                  {component}
                </th>
                <td className="px-4 py-3 text-muted-foreground">{minimum}</td>
                <td className="px-4 py-3 text-muted-foreground">
                  {recommended}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>Controller, Cloud, and Accessibility</h2>
        <ArticleImage
          src={thickAsThievesImages.screenshot3}
          alt="Thick As Thieves controller and Steam Cloud image"
          caption="Steam lists full controller support, Steam Cloud, Family Sharing, adjustable difficulty, and playable without timed input."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                Feature
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {thickAsThievesSteamFeatureRows
              .slice(2, 6)
              .map(([feature, status]) => (
                <tr
                  key={feature}
                  className="border-b border-border/30 last:border-0"
                >
                  <th
                    scope="row"
                    className="px-4 py-3 text-left font-semibold text-foreground"
                  >
                    {feature}
                  </th>
                  <td className="px-4 py-3 text-muted-foreground">{status}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>Launch PC Checklist</h2>
        <ArticleImage
          src={thickAsThievesImages.screenshot8}
          alt="Thick As Thieves PC launch checklist image"
          caption="After unlock, test controller prompts, cloud sync, SSD loading behavior, and co-op stability before a long session."
        />
        <ul>
          <li>Install on SSD, not a hard drive.</li>
          <li>Update GPU drivers before first launch.</li>
          <li>Run one short contract to test controller and cloud sync.</li>
          <li>
            For co-op, test host and reconnect behavior before committing a full
            evening.
          </li>
        </ul>
      </section>
    </ThickAsThievesArticle>
  );
}
