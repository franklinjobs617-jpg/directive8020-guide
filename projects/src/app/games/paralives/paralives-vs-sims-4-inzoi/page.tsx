import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, SearchAnswerPanel, SourceCheckTable, StatusPanel } from '@/components/guide-blocks';
import { ParalivesArticle } from '@/components/paralives-article';
import {
 createParalivesMetadata,
 paralivesComparisonActionRows,
 paralivesComparisonJumpLinks,
 paralivesComparisonRows,
 paralivesComparisonSearchIntent,
 paralivesComparisonSourceRows,
 paralivesComparisonStatusItems,
 paralivesImages,
} from '@/lib/paralives';

const title = 'Paralives vs Sims 4 vs inZOI: Which Life Sim Should You Play?';
const description =
 'Paralives vs Sims 4 vs inZOI comparison for life-sim players choosing between Early Access customization, established content depth, realism, mods, Mac support, and building tools.';
const canonical = '/games/paralives/paralives-vs-sims-4-inzoi';

export const metadata = createParalivesMetadata({
 title,
 description,
 canonical,
 image: paralivesImages.hero,
});

const faqs = [
 {
 question: 'Is Paralives better than The Sims 4?',
 answer:
 'Paralives is better if you want a new Early Access life sim with flexible building and Paramaker customization. The Sims 4 is stronger if you want a large existing content library right now.',
 },
 {
 question: 'Is Paralives like inZOI?',
 answer:
 'Both are modern life sims, but Paralives leans into stylized customization and flexible building while inZOI is commonly searched for its realistic presentation.',
 },
 {
 question: 'Should Sims 4 players buy Paralives now?',
 answer:
 'Buy now if you enjoy Early Access development and want to test Paralives building, Paramaker, and Workshop support. Wait if you need years of expansion content immediately.',
 },
 {
 question: 'Is Life by You a current alternative to Paralives?',
 answer:
 'Life by You is useful for market context, but it is not a current buying alternative after cancellation.',
 },
];

export default function ParalivesComparisonPage() {
 return (
 <ParalivesArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Comparison"
 heroImage={paralivesImages.hero}
 heroAlt="Paralives life sim comparison screenshot"
 faqs={faqs}
 >
 <BlufBox title="Comparison Answer">
 <p>
 <strong>Choose Paralives for flexible building, Paramaker, Mac support, Workshop sharing, and a fresh Early Access life-sim project.</strong>{' '}
 Choose The Sims 4 if you want the safest existing content library
 today. Watch inZOI if visual realism is your main priority.
 </p>
 </BlufBox>

 <SearchAnswerPanel
 title="Paralives vs Sims 4 vs inZOI Quick Answer"
 answer="Paralives: Early Access customization, flexible building, Mac support, Workshop. Sims 4: mature content library and CC ecosystem. inZOI: realism-focused direction. Pick by dimension, not by hype."
 intentRows={paralivesComparisonSearchIntent}
 jumpLinks={paralivesComparisonJumpLinks}
 />

 <StatusPanel items={paralivesComparisonStatusItems} />

 <section className="prose-game">
 <h2 id="comparison-strengths">Life Sim Comparison Table</h2>
 <ArticleImage
 src={paralivesImages.hero}
 alt="Paralives life simulation screenshot for Sims 4 and inZOI comparison"
 caption="The best choice depends on what you value most: flexible building, content depth, visual realism, mod ecosystem, or Early Access participation."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Game</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Main strength</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best for</th>
 </tr>
 </thead>
 <tbody>
 {paralivesComparisonRows.map(([game, strength, fit]) => (
 <tr key={game} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{game}</td>
 <td className="px-4 py-3 text-muted-foreground">{strength}</td>
 <td className="px-4 py-3 text-muted-foreground">{fit}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2 id="comparison-direction">Direction and Realism</h2>
 <p>
 Paralives leans into stylized customization and flexible building.
 The Sims 4 sits in the middle of the market with familiar systems and
 years of expansions. inZOI is commonly searched for its realistic
 visual direction. If realism is your main priority, inZOI is the
 shortlist. If you care more about building tools and modding, both
 Paralives and The Sims 4 belong on your shortlist, with very
 different content timelines.
 </p>
 </section>

 <section className="prose-game">
 <h2 id="comparison-fit">Best Fit by Player Type</h2>
 <p>
 Pick by dimension, not by hype. If you want flexible building,
 Paramaker, Mac support, and Workshop sharing with a free-update
 pledge, Paralives is the right fit. If you want the deepest existing
 content library and a familiar system, The Sims 4 is the safe pick.
 If you want realism and a different life-sim fantasy, inZOI is the
 shortlist. Life by You is useful as search context, not a current
 buying alternative.
 </p>
 </section>

 <section className="prose-game">
 <h2 id="comparison-context">Market Context and Roadmap</h2>
 <p>
 The wider life-sim market has moved quickly in the last few years.
 Paralives is in Early Access with a published feature set and a
 free-update pledge. The Sims 4 has years of expansions and a deep CC
 community. inZOI is positioned around realism. Life by You is no
 longer a current buying alternative. Pick the game that matches your
 dimension, not the loudest marketing message.
 </p>
 </section>

 <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">5-Step Comparison Plan</h2>
 <ActionTable rows={paralivesComparisonActionRows} />

 <SourceCheckTable title="Paralives vs Sims 4 vs inZOI Sources" rows={paralivesComparisonSourceRows} />
 </ParalivesArticle>
 );
}
