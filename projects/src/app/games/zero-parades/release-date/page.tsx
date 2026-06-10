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
  zpReleaseActionRows,
  zpReleaseJumpLinks,
  zpReleaseSearchIntent,
  zpReleaseSourceRows,
  zpReleaseStatusItems,
  zeroParadesImages,
  zeroParadesLaunchCheckRows,
  zeroParadesQuickFacts,
} from '@/lib/zero-parades';

const title = 'ZERO PARADES Release Date - PC Launch, PS5, Price & Languages';
const description =
 'ZERO PARADES: For Dead Spies release guide: May 21, 2026 Steam PC launch status, PS5 2026 timing, price check, supported languages, single-player features, and launch-day storefront notes.';
const canonical = '/games/zero-parades/release-date';

export const metadata = createZeroParadesMetadata({
 title,
 description,
 canonical,
 image: zeroParadesImages.screenshot1,
});

const faqs = [
 {
 question: 'What is the ZERO PARADES release date?',
 answer:
 'ZERO PARADES: For Dead Spies is announced for May 21, 2026 on PC. Steam, Epic Games Store, and GOG are the PC storefronts; check the live buy button and regional price before purchasing.',
 },
 {
 question: 'Is ZERO PARADES on PS5?',
 answer:
 'PS5 is announced for 2026, but no exact PS5 launch date is public yet.',
 },
 {
 question: 'What platforms is ZERO PARADES on?',
 answer:
 'PC is the launch platform, with Steam, Epic Games Store, and GOG available. PS5 is announced for 2026. Steam does not list macOS, Linux, Xbox, or Switch support.',
 },
 {
 question: 'What languages does ZERO PARADES support?',
 answer:
 'Steam lists English with full audio and text support for English, German, Russian, Simplified Chinese, and Spanish - Latin America.',
 },
];

const platformRows = [
 ['PC / Steam', 'May 21, 2026 PC launch; check the live regional buy button.'],
 ['Epic Games Store', 'Available for the PC release.'],
 ['GOG', 'Available for the PC release.'],
 ['Windows', 'Confirmed by Steam platform and specs.'],
 ['PS5', 'Announced for 2026; exact date is not public yet.'],
 ['Xbox', 'No public launch listing found.'],
 ['macOS / Linux', 'No public Steam platform support listed.'],
 ['Switch', 'No public launch listing found.'],
];

export default function ZeroParadesReleaseDatePage() {
 return (
 <ZeroParadesArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Release Date"
 heroImage={zeroParadesImages.screenshot1}
 heroAlt="ZERO PARADES release date and platform guide screenshot"
 faqs={faqs}
 >
      <BlufBox title="Release Answer">
        <p>
          <strong>ZERO PARADES: For Dead Spies is a May 21, 2026 PC launch.</strong>{' '}
          Steam, Epic Games Store, and GOG are the PC storefronts. The US price
          is $39.99, Steam Deck Verified support is listed, and PS5 is announced
          for 2026 without an exact date yet.
        </p>
      </BlufBox>

      <SearchAnswerPanel
        title="ZERO PARADES Release Date Quick Answer"
        answer="May 21, 2026 on PC (Steam, Epic, GOG). US price is $39.99. PS5 is announced for 2026 with no exact date yet. Launch text support includes English, German, Russian, Simplified Chinese, and Spanish - Latin America."
        intentRows={zpReleaseSearchIntent}
        jumpLinks={zpReleaseJumpLinks}
      />

      <StatusPanel items={zpReleaseStatusItems} />

      <section className="prose-game">
        <h2 id="release-and-platform-status">Release and Platform Status</h2>
 <ArticleImage
 src={zeroParadesImages.screenshot1}
 alt="ZERO PARADES platform and release status screenshot"
 caption="The safest launch-day wording is PC first, PS5 later in 2026, and no invented Xbox, Switch, macOS, or Linux dates."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Platform</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Answer</th>
 </tr>
 </thead>
 <tbody>
 {platformRows.map(([platform, answer]) => (
 <tr key={platform} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{platform}</td>
 <td className="px-4 py-3 text-muted-foreground">{answer}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>Launch Facts to Check Before Buying</h2>
 <ArticleImage
 src={zeroParadesImages.screenshot2}
 alt="ZERO PARADES launch facts screenshot"
 caption="Before you buy, check the live buy button, PS5 timing, price, language support, controller support, and Steam Deck details."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Fact</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player answer</th>
 </tr>
 </thead>
 <tbody>
 {zeroParadesQuickFacts.map(([fact, value]) => (
 <tr key={fact} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{fact}</th>
 <td className="px-4 py-3 text-muted-foreground">{value}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>Launch-Day Storefront Checklist</h2>
 <ArticleImage
 src={zeroParadesImages.screenshot3}
 alt="ZERO PARADES launch-day checklist screenshot"
 caption="Check PS5 timing, regional price, language support, and controller behavior on the storefront you plan to use."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
        <tbody>
          {zeroParadesLaunchCheckRows.map(([check, value]) => (
            <tr key={check} className="border-b border-border last:border-0">
              <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{check}</th>
              <td className="px-4 py-3 text-muted-foreground">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      <section className="prose-game">
        <h2 id="localization-and-launch-languages">Localization and Launch Languages</h2>
        <p>
          English has full audio at launch, and the Steam language list
          names English, German, Russian, Simplified Chinese, and
          Spanish - Latin America as supported text languages. If you need
          French, Italian, Japanese, Korean, Polish, Portuguese
          (Brazilian), Traditional Chinese, or Turkish, those are
          described as planned free updates later in 2026, not launch
          content.
        </p>
        <p>
          The honest framing is: launch coverage is narrower than a
          typical AAA RPG, with a small set of major text languages plus
          English audio. The planned free update path matters if you
          play in one of the post-launch languages, but it is not a
          launch promise. Check the Steam language list before buying
          if text language is a hard requirement for you.
        </p>
      </section>

      <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">5-Step Release Plan</h2>
      <ActionTable rows={zpReleaseActionRows} />

      <SourceCheckTable
        title="ZERO PARADES Release Sources"
        rows={zpReleaseSourceRows}
      />
    </ZeroParadesArticle>
 );
}
