import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { ZeroParadesArticle } from '@/components/zero-parades-article';
import {
  createZeroParadesMetadata,
  zeroParadesImages,
  zeroParadesSpecs,
} from '@/lib/zero-parades';

const title = 'ZERO PARADES System Requirements - Minimum & Recommended PC Specs';
const description =
  'Official ZERO PARADES PC system requirements from Steam: Windows 10/11, i5 6500 to i5-10400, 16 GB RAM, GTX 1060 to RTX 2070, DirectX 11, and launch setup notes.';
const canonical = '/games/zero-parades/system-requirements';

export const metadata = createZeroParadesMetadata({
  title,
  description,
  canonical,
  image: zeroParadesImages.screenshot3,
});

const faqs = [
  {
    question: 'What are ZERO PARADES minimum PC specs?',
    answer:
      'Steam lists Windows 10, Intel Core i5 6500, 16 GB RAM, Nvidia GTX 1060 6GB GDDR5, DirectX 11, and a 64-bit processor and operating system.',
  },
  {
    question: 'What are ZERO PARADES recommended PC specs?',
    answer:
      'Steam lists Windows 11, Intel Core i5-10400, 16 GB RAM, Nvidia RTX 2070 8GB GDDR6, DirectX 11, and a 64-bit processor and operating system.',
  },
  {
    question: 'How much storage does ZERO PARADES need?',
    answer:
      'The Steam requirements section does not list a storage requirement yet, so check the live storefront before clearing disk space.',
  },
  {
    question: 'Does ZERO PARADES need a high-end PC?',
    answer:
      'The minimum GTX 1060 and recommended RTX 2070 targets are moderate by modern standards, but 16 GB RAM is listed for both tiers.',
  },
];

const setupRows = [
  ['GPU', 'Start at GTX 1060 6GB or better; RTX 2070 is the recommended target.'],
  ['RAM', 'Keep background apps low because 16 GB is listed for both tiers.'],
  ['Display', 'Use readable UI scaling and text size before judging performance.'],
  ['Controller', 'Steam lists partial controller support, so check prompts before couch or handheld play.'],
  ['Saves', 'Steam lists Save Anytime and Steam Cloud; test cloud sync after the first session.'],
];

export default function ZeroParadesSystemRequirementsPage() {
  return (
    <ZeroParadesArticle
      title={title}
      description={description}
      canonical={canonical}
      label="System Requirements"
      heroImage={zeroParadesImages.screenshot3}
      heroAlt="ZERO PARADES PC system requirements screenshot"
      faqs={faqs}
    >
      <BlufBox title="Specs Answer">
        <p>
          <strong>Minimum:</strong> Windows 10, i5 6500, 16 GB RAM, GTX 1060
          6GB, DirectX 11. <strong>Recommended:</strong> Windows 11, i5-10400,
          16 GB RAM, RTX 2070 8GB, DirectX 11.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2>Minimum and Recommended Specs</h2>
        <ArticleImage
          src={zeroParadesImages.screenshot3}
          alt="ZERO PARADES minimum and recommended PC specs screenshot"
          caption="The Steam specs are moderate for GPU, but 16 GB RAM appears in both minimum and recommended tiers."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Component</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Minimum</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Recommended</th>
            </tr>
          </thead>
          <tbody>
            {zeroParadesSpecs.map(([component, minimum, recommended]) => (
              <tr key={component} className="border-b border-border/30 last:border-0">
                <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{component}</th>
                <td className="px-4 py-3 text-muted-foreground">{minimum}</td>
                <td className="px-4 py-3 text-muted-foreground">{recommended}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>What to Check Before First Launch</h2>
        <ArticleImage
          src={zeroParadesImages.screenshot4}
          alt="ZERO PARADES PC setup screenshot"
          caption="For a dense narrative RPG, readability and input comfort can matter as much as raw FPS."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <tbody>
            {setupRows.map(([topic, advice]) => (
              <tr key={topic} className="border-b border-border/30 last:border-0">
                <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{topic}</th>
                <td className="px-4 py-3 text-muted-foreground">{advice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ZeroParadesArticle>
  );
}
