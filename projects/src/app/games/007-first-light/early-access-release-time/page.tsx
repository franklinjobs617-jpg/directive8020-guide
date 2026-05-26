import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { FirstLightArticle } from '@/components/007-first-light-article';
import {
  createFirstLightMetadata,
  firstLightImages,
  firstLightReleaseRows,
} from '@/lib/007-first-light';

const title = '007 First Light Early Access, Release Time & Preload';
const description =
  '007 First Light release date and early access guide: May 27 launch, 24-hour early access, pre-order Deluxe upgrade, preload status, Australia timing, and review timing.';
const canonical = '/games/007-first-light/early-access-release-time';

export const metadata = createFirstLightMetadata({
  title,
  description,
  canonical,
  image: firstLightImages.deluxe,
});

const faqs = [
  {
    question: 'When is the 007 First Light release date?',
    answer: 'Steam lists 007 First Light for May 27, 2026.',
  },
  {
    question: 'When does 007 First Light early access start?',
    answer:
      'Pre-orders include 24-hour early access through the free Deluxe Edition upgrade. For the exact local hour, use the official launch-time post or your platform countdown.',
  },
  {
    question: 'Does 007 First Light have preload?',
    answer:
      'Steam page copy does not confirm a universal preload. Check your Steam, PS5, or other platform library after purchase rather than assuming preload is available everywhere.',
  },
  {
    question: 'What is the 007 First Light release date in Australia?',
    answer:
      'Use your Australian storefront countdown for the final local unlock. Time zones can shift the visible date or hour compared with the Steam calendar date.',
  },
];

export default function FirstLightEarlyAccessPage() {
  return (
    <FirstLightArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Early Access"
      heroImage={firstLightImages.deluxe}
      heroAlt="007 First Light casino early access planning image"
      faqs={faqs}
    >
      <BlufBox title="Direct Answer">
        <p>
          <strong>007 First Light launches May 27, 2026, and pre-orders include
          24-hour early access through a free Deluxe Edition upgrade.</strong>
          Use the platform countdown for the exact local unlock time, especially
          if you are in Australia or another region where the calendar date can
          look different.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2>Release, Early Access, and Preload Checklist</h2>
        <ArticleImage
          src={firstLightImages.header}
          alt="007 First Light city stealth release time and early access image"
          caption="The urgent launch questions are release date, 24-hour early access, pre-order bonus, preload availability, and local unlock time."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Launch question</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Current answer</th>
            </tr>
          </thead>
          <tbody>
            {firstLightReleaseRows.map(([question, answer]) => (
              <tr key={question} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{question}</td>
                <td className="px-4 py-3 text-muted-foreground">{answer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>What Comes With the Free Deluxe Upgrade?</h2>
        <p>
          Steam lists the pre-order upgrade as four outfits, the Agent&apos;s
          Mark weapon skin, and four Gleaming gadget skins: Lighter, Earphones,
          Dart Gun, and Pen. Treat these as bonus cosmetics and early access
          access, not as proof of extra story missions.
        </p>

        <h2>How to Check Preload Safely</h2>
        <p>
          Preload is a platform-library feature, not just a marketing line. If
          your library shows an install or preload button, use that. If it does
          not, wait for your platform countdown instead of deleting files,
          changing regions, or buying another edition just to force a preload.
        </p>
      </section>
    </FirstLightArticle>
  );
}
