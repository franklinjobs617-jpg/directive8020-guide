import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { MinaArticle } from '@/components/mina-the-hollower-article';
import {
  createMinaMetadata,
  minaFeatureRows,
  minaImages,
  minaMacLinuxSpecs,
  minaWindowsSpecs,
} from '@/lib/mina-the-hollower';

const title = 'Mina the Hollower System Requirements - PC, Mac & Linux Specs';
const description =
  'Official Mina the Hollower system requirements from Steam: Windows 8+, 4 GB RAM, DirectX 12, 860 MB storage, macOS 11 with M1, Linux support, controller, and Steam Cloud.';
const canonical = '/games/mina-the-hollower/system-requirements';

export const metadata = createMinaMetadata({
  title,
  description,
  canonical,
  image: minaImages.screenshot2,
});

const faqs = [
  {
    question: 'What are Mina the Hollower minimum PC specs?',
    answer:
      'Steam lists Windows 8 or later, Intel Core 4th generation or AMD Bulldozer, 4 GB RAM, Intel HD 5000 or Radeon HD 7000 or Nvidia 900 Series graphics, DirectX 12, and 860 MB storage.',
  },
  {
    question: 'Does Mina the Hollower have recommended PC specs?',
    answer:
      'Steam does not list a detailed recommended tier yet; it only notes a 64-bit processor and operating system.',
  },
  {
    question: 'Does Mina the Hollower support Mac?',
    answer:
      'Yes. Steam lists macOS 11 or later, Apple M1 or later, 4 GB RAM, and 860 MB storage as the Mac minimum.',
  },
  {
    question: 'Does Mina the Hollower support controller?',
    answer:
      'Yes. Steam lists full controller support for Mina the Hollower.',
  },
];

export default function MinaSystemRequirementsPage() {
  return (
    <MinaArticle
      title={title}
      description={description}
      canonical={canonical}
      label="System Requirements"
      heroImage={minaImages.screenshot2}
      heroAlt="Mina the Hollower system requirements guide image"
      faqs={faqs}
    >
      <BlufBox title="Specs Answer">
        <p>
          <strong>Mina the Hollower has lightweight minimum specs by modern PC standards.</strong>{' '}
          Steam lists 4 GB RAM, 860 MB storage, DirectX 12 on Windows, and
          support for Windows, macOS, and Linux. The detailed recommended tier
          is not published yet, so this page does not invent one.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2>Windows Minimum Specs</h2>
        <ArticleImage
          src={minaImages.screenshot2}
          alt="Mina the Hollower Windows minimum specs"
          caption="Steam lists a clear Windows minimum, but no detailed recommended performance target yet."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Component</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Official minimum or note</th>
            </tr>
          </thead>
          <tbody>
            {minaWindowsSpecs.map(([component, value]) => (
              <tr key={component} className="border-b border-border/30 last:border-0">
                <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{component}</th>
                <td className="px-4 py-3 text-muted-foreground">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>Mac, Linux, Controller, and Cloud</h2>
        <ArticleImage
          src={minaImages.screenshot3}
          alt="Mina the Hollower Mac Linux controller and cloud support"
          caption="Steam lists macOS and Linux support alongside full controller support and Steam Cloud."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Area</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Official note</th>
            </tr>
          </thead>
          <tbody>
            {minaMacLinuxSpecs.map(([area, note]) => (
              <tr key={area} className="border-b border-border/30 last:border-0">
                <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{area}</th>
                <td className="px-4 py-3 text-muted-foreground">{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>Steam Feature Support</h2>
        <ArticleImage
          src={minaImages.screenshot7}
          alt="Mina the Hollower Steam features"
          caption="Controller support and Steam Cloud are practical setup details to check before choosing PC or handheld play."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Feature</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {minaFeatureRows.slice(1, 6).map(([feature, status]) => (
              <tr key={feature} className="border-b border-border/30 last:border-0">
                <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{feature}</th>
                <td className="px-4 py-3 text-muted-foreground">{status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MinaArticle>
  );
}
