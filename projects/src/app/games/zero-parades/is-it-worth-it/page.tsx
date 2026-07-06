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
  zpWorthItActionRows,
  zpWorthItJumpLinks,
  zpWorthItSearchIntent,
  zpWorthItSourceRows,
  zpWorthItStatusItems,
  zeroParadesImages,
  zeroParadesWorthItRows,
} from '@/lib/zero-parades';

const title = 'Is ZERO PARADES Worth It? Buying Advice for Disco Elysium Fans';
const description =
 'Is ZERO PARADES: For Dead Spies worth it? Launch buying advice for Disco Elysium fans, narrative RPG players, PS5 users, Steam Deck players, controller users, and cautious buyers.';
const canonical = '/games/zero-parades/is-it-worth-it';

export const metadata = createZeroParadesMetadata({
 title,
 description,
 canonical,
 image: zeroParadesImages.screenshot5,
});

const faqs = [
 {
 question: 'Is ZERO PARADES worth buying at launch?',
 answer:
 'It is worth considering if you want a ZA/UM espionage RPG with dense writing, skill checks, pressure systems, and failure-driven consequences. Wait if you need PS5 timing, broader player reviews, or regional price confirmation.',
 },
 {
 question: 'Should Disco Elysium fans buy ZERO PARADES?',
 answer:
 'Disco Elysium fans are the clearest audience, but the expectation should be an espionage RPG with its own operant, Conditioning, and pressure systems rather than a simple sequel.',
 },
 {
 question: 'Should PS5 players wait?',
 answer:
 'Yes, PS5 players should wait for an exact PS5 date or live storefront page before planning around the console version.',
 },
 {
 question: 'Is ZERO PARADES action-heavy?',
 answer:
 'Steam frames it around espionage, skills, dice checks, dialogue, pressure, and consequences, not action-combat progression.',
 },
];

const comparisonRows = [
 ['Disco Elysium fans', 'Strong fit', 'Same studio lineage and dense narrative RPG positioning, but not a direct sequel.'],
 ['CRPG / tabletop fans', 'Strong fit', 'Skill checks, dice pressure, failure, and consequence systems are central.'],
 ['Action players', 'Weak fit', 'The appeal is investigation and dialogue, not real-time combat.'],
 ['Steam Deck users', 'Good fit, test first', 'Steam Deck compatibility is listed, but text size and prompts still matter.'],
 ['PS5 players', 'Wait', 'PS5 is announced for 2026, but no exact launch date is public yet.'],
];

export default function ZeroParadesWorthItPage() {
 return (
 <ZeroParadesArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Is It Worth It"
 heroImage={zeroParadesImages.screenshot5}
 heroAlt="ZERO PARADES buying advice screenshot"
 faqs={faqs}
 >
      <BlufBox title="Buying Answer">
        <p>
          <strong>Buy ZERO PARADES at launch if you want a dense ZA/UM espionage RPG.</strong>{' '}
          Wait if you mainly care about PS5, controller polish, launch bug
          reports, regional pricing, or broad player consensus.
        </p>
      </BlufBox>

      <SearchAnswerPanel
        title="Is ZERO PARADES Worth It Quick Answer"
        answer="Buy if you want a ZA/UM espionage RPG with dense writing, skill checks, and pressure systems. Wait if you need PS5 timing, broad player reviews, or proof that launch bugs are resolved. US price is $39.99."
        intentRows={zpWorthItSearchIntent}
        jumpLinks={zpWorthItJumpLinks}
      />

      <StatusPanel items={zpWorthItStatusItems} />

      <section className="prose-game">
        <h2 id="who-should-buy-wait-or-skip">Who Should Buy, Wait, or Skip</h2>
 <ArticleImage
 src={zeroParadesImages.screenshot5}
 alt="ZERO PARADES worth it buying advice screenshot"
 caption="The best fit is players who want writing, investigation, ideological conflict, skill checks, and consequences rather than action combat."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Buyer type</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Verdict</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why</th>
 </tr>
 </thead>
 <tbody>
 {comparisonRows.map(([type, verdict, why]) => (
 <tr key={type} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{type}</td>
 <td className="px-4 py-3 text-muted-foreground">{verdict}</td>
 <td className="px-4 py-3 text-muted-foreground">{why}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>Launch Buying Checklist</h2>
 <ArticleImage
 src={zeroParadesImages.screenshot6}
 alt="ZERO PARADES launch buying checklist screenshot"
 caption="Before buying, check regional price, language support, controller behavior, Steam Deck comfort, and whether your platform is actually available."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
        <tbody>
          {zeroParadesWorthItRows.map(([topic, advice]) => (
            <tr key={topic} className="border-b border-border last:border-0">
              <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{topic}</th>
              <td className="px-4 py-3 text-muted-foreground">{advice}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      <section className="prose-game">
        <h2 id="disco-elysium-expectations">Disco Elysium Expectations and Calibrations</h2>
        <p>
          Disco Elysium fans are the clearest audience for ZERO PARADES, but
          the expectation should be an espionage RPG with its own operant,
          Conditioning, and pressure systems rather than a direct sequel.
          ZA/UM lineage shows up in the writing density, ideological
          conflict, and skill-check-driven dialogue. The structure is
          different: assignments instead of a single investigation, with
          branching routes per case.
        </p>
        <p>
          If you want Disco Elysium specifically, treat ZERO PARADES as a
          companion purchase, not a replacement. If you want a ZA/UM
          espionage RPG with its own identity, it is a strong fit on launch.
          The wait signal is launch bug reports, not the lineage question.
        </p>
      </section>

      <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">5-Step Buying Plan</h2>
      <ActionTable rows={zpWorthItActionRows} />

      <SourceCheckTable
        title="ZERO PARADES Buying Sources"
        rows={zpWorthItSourceRows}
      />
    </ZeroParadesArticle>
 );
}
