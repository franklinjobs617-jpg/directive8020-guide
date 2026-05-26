import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { FirstLightArticle } from '@/components/007-first-light-article';
import {
  createFirstLightMetadata,
  firstLightImages,
  firstLightSpecRows,
} from '@/lib/007-first-light';

const title = '007 First Light System Requirements and PC Specs';
const description =
  'Official 007 First Light PC requirements: Windows 10/11, 16 GB RAM, GTX 1660 or RX 5700 minimum, RTX 3060 Ti or RX 6700 XT recommended, 80 GB SSD, and DLSS notes.';
const canonical = '/games/007-first-light/system-requirements';

export const metadata = createFirstLightMetadata({
  title,
  description,
  canonical,
  image: firstLightImages.header,
});

const faqs = [
  {
    question: 'What are the minimum 007 First Light PC requirements?',
    answer:
      'Steam lists Windows 10/11 64-bit, Intel Core i5-9500 or Ryzen 5 3500, 16 GB RAM, GTX 1660 or RX 5700, 80 GB storage, and SSD required.',
  },
  {
    question: 'What are the recommended 007 First Light PC requirements?',
    answer:
      'Steam lists Windows 10/11 64-bit, Intel Core i5-13500 or Ryzen 5 7600, 16 GB RAM, RTX 3060 Ti or RX 6700 XT, 80 GB storage, and SSD required.',
  },
  {
    question: 'Does 007 First Light require an SSD?',
    answer: 'Yes. Steam lists SSD required in both minimum and recommended requirements.',
  },
  {
    question: 'How much storage does 007 First Light need?',
    answer: 'Steam lists 80 GB of available storage.',
  },
];

export default function FirstLightSystemRequirementsPage() {
  return (
    <FirstLightArticle
      title={title}
      description={description}
      canonical={canonical}
      label="System Requirements"
      heroImage={firstLightImages.header}
      heroAlt="007 First Light PC specs image"
      faqs={faqs}
    >
      <BlufBox title="PC Specs Answer">
        <p>
          <strong>007 First Light requires 16 GB RAM and an SSD even at the
          minimum tier.</strong> The minimum GPU tier starts at GTX 1660 or RX
          5700, while the recommended tier moves to RTX 3060 Ti or RX 6700 XT.
          Plan for 80 GB of available storage.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2>Minimum and Recommended Specs</h2>
        <ArticleImage
          src={firstLightImages.background}
          alt="007 First Light action scene PC requirements image"
          caption="The PC requirement that matters most for launch planning is the 80 GB SSD requirement plus a 16 GB RAM baseline."
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
            {firstLightSpecRows.map(([component, minimum, recommended]) => (
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
        <h2>Launch Performance Checks</h2>
        <p>
          Specs do not guarantee smooth performance in every mission. During
          the first session, check shader or traversal stutter, driving
          sections, dense stealth areas, cutscene transitions, controller
          response, and whether your SSD has enough free space beyond the 80 GB
          install requirement.
        </p>

        <h2>DLSS, Path Tracing, and Future Updates</h2>
        <p>
          Steam news says launch PC features include uncapped framerate, NVIDIA
          DLSS 4.5 Super Resolution, and DLSS Dynamic Multi Frame Generation.
          It also says path tracing and DLSS Ray Reconstruction are planned for
          Summer 2026, so do not expect those features to be part of the first
          launch-day visual baseline.
        </p>
      </section>
    </FirstLightArticle>
  );
}
