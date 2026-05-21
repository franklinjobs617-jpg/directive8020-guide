import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { ZeroParadesArticle } from '@/components/zero-parades-article';
import {
  createZeroParadesMetadata,
  zeroParadesFeatureRows,
  zeroParadesImages,
} from '@/lib/zero-parades';

const title = 'ZERO PARADES Steam Deck Guide - Compatibility, Controls & Text';
const description =
  'ZERO PARADES Steam Deck guide: Steam Deck Verified context, GTX 1060 PC baseline, partial controller support, text readability, Save Anytime, Steam Cloud, and handheld setup checks.';
const canonical = '/games/zero-parades/steam-deck';

export const metadata = createZeroParadesMetadata({
  title,
  description,
  canonical,
  image: zeroParadesImages.screenshot4,
});

const faqs = [
  {
    question: 'Is ZERO PARADES Steam Deck Verified?',
    answer:
      'Yes, ZERO PARADES is listed as Steam Deck Verified. Still test text size, controller prompts, and Steam Cloud sync before a long handheld session.',
  },
  {
    question: 'Can ZERO PARADES work well on handheld?',
    answer:
      'It may be a good handheld fit because Steam lists Save Anytime, adjustable text size, and partial controller support, but text readability and performance are still worth checking first.',
  },
  {
    question: 'Does ZERO PARADES support controller?',
    answer:
      'Steam lists partial controller support, which means players should test prompts, menus, and dialogue navigation before assuming controller-only play is ideal.',
  },
  {
    question: 'Does ZERO PARADES have Steam Cloud?',
    answer:
      'Yes. Steam lists Steam Cloud, but always check sync after the first save before switching between PC and Deck.',
  },
];

const deckRows = [
  ['Steam Deck status', 'Steam Deck Verified.', 'Check the live badge on your own Steam account.'],
  ['Controls', 'Partial controller support is listed.', 'Test dialogue, menus, and skill screens.'],
  ['Text', 'Adjustable text size is listed.', 'Increase text size before a long handheld session.'],
  ['Saving', 'Save Anytime and Steam Cloud are listed.', 'Make one test save and confirm cloud sync.'],
  ['Performance', 'Minimum spec is GTX 1060 6GB with 16 GB RAM.', 'Use cautious expectations until real Deck reports exist.'],
];

export default function ZeroParadesSteamDeckPage() {
  return (
    <ZeroParadesArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Steam Deck"
      heroImage={zeroParadesImages.screenshot4}
      heroAlt="ZERO PARADES Steam Deck compatibility screenshot"
      faqs={faqs}
    >
      <BlufBox title="Steam Deck Answer">
        <p>
          <strong>ZERO PARADES is listed as Steam Deck Verified.</strong>{' '}
          The handheld-friendly features are Save Anytime, adjustable text size,
          Steam Cloud, and no timed-input requirement. Still test menu prompts,
          text size, and cloud sync before moving a long save between devices.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2>Deck Readiness Checklist</h2>
        <ArticleImage
          src={zeroParadesImages.screenshot4}
          alt="ZERO PARADES Steam Deck readiness screenshot"
          caption="Steam Deck Verified is useful, but narrative RPG comfort still depends on text size, menus, saves, and controller prompts."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Deck factor</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Current answer</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">What to do</th>
            </tr>
          </thead>
          <tbody>
            {deckRows.map(([factor, signal, action]) => (
              <tr key={factor} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{factor}</td>
                <td className="px-4 py-3 text-muted-foreground">{signal}</td>
                <td className="px-4 py-3 text-muted-foreground">{action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>Steam Features That Matter on Deck</h2>
        <ArticleImage
          src={zeroParadesImages.screenshot5}
          alt="ZERO PARADES handheld feature screenshot"
          caption="Save Anytime, Steam Cloud, adjustable text size, and no timed-input requirement are the most useful handheld signals."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <tbody>
            {zeroParadesFeatureRows.slice(2, 7).map(([feature, status]) => (
              <tr key={feature} className="border-b border-border/30 last:border-0">
                <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{feature}</th>
                <td className="px-4 py-3 text-muted-foreground">{status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ZeroParadesArticle>
  );
}
