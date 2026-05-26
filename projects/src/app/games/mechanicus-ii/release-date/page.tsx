import { ArticleImage } from '@/components/article-media';
import { BlufBox, StatusPanel } from '@/components/guide-blocks';
import { MechanicusIIArticle } from '@/components/mechanicus-ii-article';
import {
  createMechanicusIIMetadata,
  mechanicusIIEditionRows,
  mechanicusIIImages,
  mechanicusIIQuickFacts,
} from '@/lib/mechanicus-ii';

const title = 'Warhammer 40,000: Mechanicus II Release Date: Steam, PS5, Xbox & Price';
const description =
  'Warhammer 40,000: Mechanicus II released May 21, 2026. Check PC, PS5, Xbox Series X|S, Steam price, launch discount, reviews, achievements, editions, and Epic store status.';
const canonical = '/games/mechanicus-ii/release-date';

export const metadata = createMechanicusIIMetadata({
  title,
  description,
  canonical,
  image: mechanicusIIImages.capsule,
});

const faqs = [
  {
    question: 'When is the Warhammer 40,000: Mechanicus II release date?',
    answer: 'Warhammer 40,000: Mechanicus II released on May 21, 2026.',
  },
  {
    question: 'Is Mechanicus II on PS5 and Xbox?',
    answer: 'Yes. The current platform set includes PlayStation 5 and Xbox Series X|S alongside PC.',
  },
  {
    question: 'Is Mechanicus II on Steam?',
    answer: 'Yes. Mechanicus II is available on Steam. Epic also has a product page, but players should check its current regional store state directly before buying there.',
  },
  {
    question: 'How much does Mechanicus II cost?',
    answer: 'Steam lists the US base price at $39.99, with a $35.99 introductory price at the latest check.',
  },
  {
    question: 'Does Mechanicus II have Steam achievements?',
    answer: 'Yes. Steam currently lists 34 achievements.',
  },
  {
    question: 'What is in the Mechanicus II Omnissiah Edition?',
    answer:
      'The official FAQ describes the Omnissiah Edition as the base game plus a digital artbook, complete original soundtrack, and in-game legacy soundtrack.',
  },
];

export default function MechanicusIIReleaseDatePage() {
  return (
    <MechanicusIIArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Release Date"
      heroImage={mechanicusIIImages.capsule}
      heroAlt="Warhammer 40,000 Mechanicus II release date platform image"
      faqs={faqs}
    >
      <BlufBox title="Direct Answer">
        <p>
          <strong>Warhammer 40,000: Mechanicus II released on May 21,
          2026.</strong> The current confirmed platform set is PC via Steam,
          PlayStation 5, and Xbox Series X|S. Epic also has a store page, so
          check its current regional store state before buying there. Steam lists the US
          base price at $39.99, a $35.99 introductory Steam price at the
          latest check, a 10% offer ending May 28, 2026, Mixed user reviews,
          34 achievements, Steam Cloud, and Family Sharing.
        </p>
      </BlufBox>

      <StatusPanel
        items={mechanicusIIQuickFacts.map(([label, value]) => ({
          label,
          value,
          status: 'verified' as const,
        }))}
      />

      <section className="prose-game">
        <h2>Platform and Storefront Answer</h2>
        <ArticleImage
          src={mechanicusIIImages.screenshot1}
          alt="Warhammer 40,000 Mechanicus II platform and storefront image"
          caption="PC players can check Steam first for confirmed purchase status, while console players should use the PS5 or Xbox Series X|S store page in their region."
        />
        <p>
          Mechanicus II is a current release, not an upcoming listing. For
          players, the useful platform answer is simple: Steam PC, PS5, and
          Xbox Series X|S are confirmed live storefronts. Steam is the best
          source for PC feature labels such as achievements, cloud saves,
          language support, and system requirements. Epic has a product page,
          but its current store state should be checked directly before using
          it as a purchase option.
        </p>
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Question</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Answer</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Release date', 'May 21, 2026', 'Store-listed'],
              ['PC storefronts', 'Steam is live; Epic has a product page that should be checked directly in your region', 'Store-checked'],
              ['Console platforms', 'PS5 and Xbox Series X|S', 'Store-listed'],
              ['US Steam price', '$39.99 base price; $35.99 introductory price at latest check', 'Steam-listed'],
              ['Launch discount', '10% introductory offer ending May 28, 2026', 'Steam-listed'],
              ['Review signal', 'Mixed Steam user reviews at latest check; read recent reviews for performance and campaign-structure concerns', 'Steam-listed'],
              ['Achievements', '34 Steam achievements', 'Steam-listed'],
              ['Steam Deck', 'Unsupported at launch according to official FAQ and compatibility data', 'FAQ-listed'],
            ].map(([question, answer, status]) => (
              <tr key={question} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{question}</td>
                <td className="px-4 py-3 text-muted-foreground">{answer}</td>
                <td className="px-4 py-3 text-muted-foreground">{status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>Standard Edition, Omnissiah Edition, and Upgrade DLC</h2>
        <p>
          Mechanicus II has more than one buying route on Steam. Players who
          only want the campaigns can start with the Standard Edition. Players
          who want soundtrack and artbook extras should compare the Omnissiah
          Edition or the upgrade DLC before buying.
        </p>
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Edition question</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player answer</th>
            </tr>
          </thead>
          <tbody>
            {mechanicusIIEditionRows.map(([question, answer]) => (
              <tr key={question} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{question}</td>
                <td className="px-4 py-3 text-muted-foreground">{answer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>What the Release Page Should Not Claim</h2>
        <p>
          A release page can confirm date, platform, price, store features, and
          language support. It should not claim final best units, optimal
          campaign routes, perfect performance on every console, or a settled
          review consensus while launch-week reviews are still moving.
        </p>
      </section>
    </MechanicusIIArticle>
  );
}
