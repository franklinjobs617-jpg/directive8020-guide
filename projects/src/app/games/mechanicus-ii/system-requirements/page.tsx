import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { MechanicusIIArticle } from '@/components/mechanicus-ii-article';
import {
  createMechanicusIIMetadata,
  mechanicusIIImages,
  mechanicusIISpecRows,
} from '@/lib/mechanicus-ii';

const title = 'Warhammer 40,000: Mechanicus II System Requirements';
const description =
  'Official Mechanicus II PC requirements for Windows 10 64-bit, 12 GB RAM, GTX 1660 or RX 5600 XT minimum, RTX 2070 or RX 6600 XT recommended, DirectX 12, and 25 GB storage.';
const canonical = '/games/mechanicus-ii/system-requirements';

export const metadata = createMechanicusIIMetadata({
  title,
  description,
  canonical,
  image: mechanicusIIImages.screenshot3,
});

const faqs = [
  {
    question: 'What are the minimum Mechanicus II PC requirements?',
    answer:
      'Steam lists Windows 10 64-bit, Intel Core i7-7700 or AMD Ryzen 5 1600, 12 GB RAM, GTX 1660 6GB or RX 5600 XT 6GB, DirectX 12, and 25 GB storage.',
  },
  {
    question: 'What are the recommended Mechanicus II PC requirements?',
    answer:
      'Steam lists Windows 10 64-bit, Intel Core i5-9600K or AMD Ryzen 5 3600, 16 GB RAM, RTX 2070 8GB or RX 6600 XT 8GB, DirectX 12, and 25 GB storage.',
  },
  {
    question: 'Does Mechanicus II require DirectX 12?',
    answer: 'Yes. Steam lists DirectX 12 for both minimum and recommended PC requirements.',
  },
  {
    question: 'How much storage does Mechanicus II need?',
    answer: 'Steam lists 25 GB of available storage.',
  },
];

export default function MechanicusIISystemRequirementsPage() {
  return (
    <MechanicusIIArticle
      title={title}
      description={description}
      canonical={canonical}
      label="System Requirements"
      heroImage={mechanicusIIImages.screenshot3}
      heroAlt="Warhammer 40,000 Mechanicus II system requirements image"
      faqs={faqs}
    >
      <BlufBox title="PC Specs Answer">
        <p>
          <strong>Mechanicus II has official Steam PC requirements.</strong>
          The minimum target starts at 12 GB RAM with a GTX 1660 6GB or RX 5600
          XT 6GB, and the recommended target moves to 16 GB RAM with an RTX
          2070 8GB or RX 6600 XT 8GB. Both tiers list Windows 10 64-bit,
          DirectX 12, and 25 GB storage.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2>Minimum and Recommended Specs</h2>
        <ArticleImage
          src={mechanicusIIImages.screenshot4}
          alt="Warhammer 40,000 Mechanicus II PC requirements image"
          caption="Turn-based tactics games still need stable frame pacing, readable UI, and smooth battlefield camera control."
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
            {mechanicusIISpecRows.map(([component, minimum, recommended]) => (
              <tr key={component} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{component}</td>
                <td className="px-4 py-3 text-muted-foreground">{minimum}</td>
                <td className="px-4 py-3 text-muted-foreground">{recommended}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>What the Specs Do Not Prove</h2>
        <p>
          Requirements are a baseline, not a performance guarantee. Launch
          buyers should still check player reports for shader stutter, long
          battle loading, ultrawide UI behavior, controller button labels, laptop
          thermals, and late-campaign slowdown. This is especially relevant for
          tactics games because readable UI and stable camera movement matter
          more than peak frame rate alone.
        </p>
      </section>
    </MechanicusIIArticle>
  );
}
