import { ArticleImage } from '@/components/article-media';
import {
  ActionTable,
  BlufBox,
  SearchAnswerPanel,
  SourceCheckTable,
  StatusPanel,
} from '@/components/guide-blocks';
import { ZeroParadesArticle } from '@/components/zero-parades-article';
import {
  createZeroParadesMetadata,
  zpSteamDeckActionRows,
  zpSteamDeckJumpLinks,
  zpSteamDeckSearchIntent,
  zpSteamDeckSourceRows,
  zpSteamDeckStatusItems,
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

      <SearchAnswerPanel
        title="ZERO PARADES Steam Deck Quick Answer"
        answer="Steam Deck Verified is listed. The handheld-friendly features are Save Anytime, adjustable text size, Steam Cloud, and no timed-input. Still test text size, prompts, and cloud sync within the refund window before committing to a long handheld run."
        intentRows={zpSteamDeckSearchIntent}
        jumpLinks={zpSteamDeckJumpLinks}
      />

      <StatusPanel items={zpSteamDeckStatusItems} />

      <section className="prose-game">
        <h2 id="deck-readiness-checklist">Deck Readiness Checklist</h2>
 <ArticleImage
 src={zeroParadesImages.screenshot4}
 alt="ZERO PARADES Steam Deck readiness screenshot"
 caption="Steam Deck Verified is useful, but narrative RPG comfort still depends on text size, menus, saves, and controller prompts."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Deck factor</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Answer</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">What to do</th>
 </tr>
 </thead>
 <tbody>
 {deckRows.map(([factor, signal, action]) => (
 <tr key={factor} className="border-b border-border last:border-0">
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
 caption="Save Anytime, Steam Cloud, adjustable text size, and no timed-input requirement all make handheld play easier to test."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
        <tbody>
          {zeroParadesFeatureRows.slice(2, 7).map(([feature, status]) => (
            <tr key={feature} className="border-b border-border last:border-0">
              <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{feature}</th>
              <td className="px-4 py-3 text-muted-foreground">{status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      <section className="prose-game">
        <h2 id="deck-vs-pc-save-handoff">Deck vs PC Save Handoff</h2>
        <p>
          The Steam Cloud sync is reliable for most narrative RPGs, but it
          is still worth confirming a clean handoff before committing to a
          long run on the Deck. The safe sequence is: make a manual save
          on your main PC, switch to the Deck, open the game, and confirm
          the save appears. If it does not, force a sync from the Steam
          settings menu before starting play on the Deck.
        </p>
        <p>
          The reverse handoff matters too. If you finish a session on the
          Deck, force a sync before opening the game on your PC. Without
          the sync, your PC session may load an older save and the Deck
          progress appears to vanish. A 30-second sync check is cheaper
          than losing hours of dialogue choices and Conditioning
          experiments.
        </p>
      </section>

      <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">5-Step Deck Plan</h2>
      <ActionTable rows={zpSteamDeckActionRows} />

      <SourceCheckTable
        title="ZERO PARADES Steam Deck Sources"
        rows={zpSteamDeckSourceRows}
      />
    </ZeroParadesArticle>
 );
}
