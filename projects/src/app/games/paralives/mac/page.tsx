import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, SearchAnswerPanel, SourceCheckTable, StatusPanel } from '@/components/guide-blocks';
import { ParalivesArticle } from '@/components/paralives-article';
import {
 createParalivesMetadata,
 paralivesImages,
 paralivesMacActionRows,
 paralivesMacJumpLinks,
 paralivesMacRows,
 paralivesMacSearchIntent,
 paralivesMacSourceRows,
 paralivesMacStatusItems,
 paralivesSpecRows,
} from '@/lib/paralives';

const title = 'Paralives Mac Guide: Apple Silicon Requirements, M2, M3 & Settings';
const description =
 'Paralives Mac guide for official Apple silicon support, M2 minimum, M3 recommended, macOS Big Sur 11, 12 GB RAM, 16 GB RAM, and performance settings.';
const canonical = '/games/paralives/mac';

export const metadata = createParalivesMetadata({
 title,
 description,
 canonical,
 image: paralivesImages.town,
});

const faqs = [
 {
 question: 'Is Paralives on Mac?',
 answer:
 'Yes. Steam lists Mac support for Paralives.',
 },
 {
 question: 'Does Paralives work on Intel Mac?',
 answer:
 'The official Mac requirements say an Apple processor is required, so Intel Mac users should not assume support.',
 },
 {
 question: 'What Mac is required for Paralives?',
 answer:
 'The listed minimum is macOS Big Sur 11 or newer, Apple M2, and 12 GB RAM. The recommended target is Apple M3 with 16 GB RAM.',
 },
 {
 question: 'What should I do if Paralives runs slowly on Mac?',
 answer:
 'The official requirements advise lowering display resolution and other graphics settings if framerate is low.',
 },
];

export default function ParalivesMacPage() {
 return (
 <ParalivesArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Mac"
 heroImage={paralivesImages.town}
 heroAlt="Paralives Mac guide open world town screenshot"
 faqs={faqs}
 >
 <BlufBox title="Mac Answer">
 <p>
 <strong>Paralives officially supports Mac, but the listed Mac target is Apple silicon.</strong>{' '}
 Steam lists Apple M2 and 12 GB RAM as the minimum, Apple M3 and 16 GB
 RAM as recommended, and macOS Big Sur 11 or newer. Intel Mac support
 should not be assumed from the current requirements.
 </p>
 </BlufBox>

 <SearchAnswerPanel
 title="Paralives Mac Quick Answer"
 answer="Mac support requires Apple silicon. Minimum: M2 and 12 GB RAM. Recommended: M3 and 16 GB RAM. macOS Big Sur 11 or newer. Intel Mac is not in the listed support path."
 intentRows={paralivesMacSearchIntent}
 jumpLinks={paralivesMacJumpLinks}
 />

 <StatusPanel items={paralivesMacStatusItems} />

 <section className="prose-game">
 <h2 id="mac-support">Mac Support Table</h2>
 <ArticleImage
 src={paralivesImages.town}
 alt="Paralives Mac support town screenshot"
 caption="Mac players should check Apple silicon model, memory, macOS version, and graphics settings before building a large household."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <tbody>
 {paralivesMacRows.map(([factor, answer, status]) => (
 <tr key={factor} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{factor}</th>
 <td className="px-4 py-3 text-muted-foreground">{answer}</td>
 <td className="px-4 py-3 text-muted-foreground">{status}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2 id="mac-apple-silicon">Windows and Mac Requirements</h2>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Spec</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Minimum</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Recommended</th>
 </tr>
 </thead>
 <tbody>
 {paralivesSpecRows.map(([spec, minimum, recommended]) => (
 <tr key={spec} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{spec}</td>
 <td className="px-4 py-3 text-muted-foreground">{minimum}</td>
 <td className="px-4 py-3 text-muted-foreground">{recommended}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2 id="mac-intel">Intel Mac and Unsupported Hardware</h2>
 <p>
 The official Mac requirements say an Apple processor is required, so
 Intel Macs are not supported by the listed requirements. Players on
 older Mac hardware should plan around a Windows PC, a newer Apple
 silicon Mac, or a Steam Deck test under refund rules. Treat the
 current Mac requirements as the support boundary until Steam updates
 the listing.
 </p>
 </section>

 <section className="prose-game">
 <h2 id="mac-performance">Performance Settings and Stability</h2>
 <p>
 If framerate drops on Mac, lower display resolution and graphics
 settings before changing anything else. The official requirement
 note repeats this advice. For long saves, run a small household first
 to confirm stability, then grow the home, the family, and the town
 footprint over time.
 </p>
 </section>

 <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">5-Step Mac Plan</h2>
 <ActionTable rows={paralivesMacActionRows} />

 <SourceCheckTable title="Paralives Mac Sources" rows={paralivesMacSourceRows} />
 </ParalivesArticle>
 );
}
