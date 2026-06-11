import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, SearchAnswerPanel, SourceCheckTable, StatusPanel } from '@/components/guide-blocks';
import { ParalivesArticle } from '@/components/paralives-article';
import {
 createParalivesMetadata,
 paralivesDeckActionRows,
 paralivesDeckJumpLinks,
 paralivesDeckRows,
 paralivesDeckSearchIntent,
 paralivesDeckSourceRows,
 paralivesDeckStatusItems,
 paralivesImages,
} from '@/lib/paralives';

const title = 'Paralives Steam Deck Guide: Compatibility, Controls & Settings';
const description =
 'Paralives Steam Deck guide for compatibility status, Proton cautions, controls, build mode comfort, graphics settings, cloud saves, and handheld buying advice.';
const canonical = '/games/paralives/steam-deck';

export const metadata = createParalivesMetadata({
 title,
 description,
 canonical,
 image: paralivesImages.home,
});

const faqs = [
 {
 question: 'Is Paralives Steam Deck Verified?',
 answer:
 'No Steam Deck Verified claim is available in the checked Steam data. Treat Deck play as unverified until Steam or player reports confirm it.',
 },
 {
 question: 'Can Paralives run on Steam Deck?',
 answer:
 'It may be testable through Proton, but official support is clearer for Windows PC and Apple silicon Mac than for Steam Deck.',
 },
 {
 question: 'What should Steam Deck players test first?',
 answer:
 'Test menus, Paramaker controls, build-mode cursor precision, text size, cloud saves, and framerate in a small house before starting a long save.',
 },
 {
 question: 'Should I buy Paralives only for Steam Deck?',
 answer:
 'Only if you are comfortable testing quickly and using Steam refund rules if performance or controls do not work for your setup.',
 },
];

export default function ParalivesSteamDeckPage() {
 return (
 <ParalivesArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Steam Deck"
 heroImage={paralivesImages.home}
 heroAlt="Paralives home building screenshot for Steam Deck guide"
 faqs={faqs}
 >
 <BlufBox title="Deck Answer">
 <p>
 <strong>Paralives is not Steam Deck Verified based on the checked Steam data.</strong>{' '}
 The game has Windows support, Mac support, mouse-friendly life-sim
 tools, Paramaker, build mode, and Workshop systems, but no Steam Deck
 Verified claim appears in the checked official Steam data.
 </p>
 </BlufBox>

 <SearchAnswerPanel
 title="Paralives Steam Deck Quick Answer"
 answer="No Steam Deck Verified claim appears in the checked official Steam data. Test trackpad, build mode, framerate, and text size within Steam refund rules."
 intentRows={paralivesDeckSearchIntent}
 jumpLinks={paralivesDeckJumpLinks}
 />

 <StatusPanel items={paralivesDeckStatusItems} />

 <section className="prose-game">
 <h2 id="deck-status">Deck Testing Checklist</h2>
 <ArticleImage
 src={paralivesImages.home}
 alt="Paralives home and interface screenshot for Steam Deck testing"
 caption="A handheld test should focus on the parts that life sims rely on most: pointer precision, menus, build tools, text, saves, and stable framerate."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Deck factor</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Current answer</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">What to do</th>
 </tr>
 </thead>
 <tbody>
 {paralivesDeckRows.map(([factor, answer, action]) => (
 <tr key={factor} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{factor}</td>
 <td className="px-4 py-3 text-muted-foreground">{answer}</td>
 <td className="px-4 py-3 text-muted-foreground">{action}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2 id="deck-controls">Controls, Build Mode, and Text Size</h2>
 <p>
 Life sims rely on pointer precision. Test trackpad, mouse region, and
 any community layouts for build mode before committing to a long
 session. Check text size in Paramaker, Workshop, and the in-game
 menus. If text feels small at Deck resolution, raise UI scale and
 re-test menus before starting a household.
 </p>
 </section>

 <section className="prose-game">
 <h2 id="deck-performance">Performance and Settings</h2>
 <p>
 If framerate drops on Deck, lower display resolution and graphics
 settings before changing anything else. The official Windows and Mac
 requirements repeat this advice. Use Proton with a small household
 first to confirm a stable framerate, then grow the home, the family,
 and the town footprint over time.
 </p>
 </section>

 <section className="prose-game">
 <h2 id="deck-buying">Buying Advice and Desktop Backup</h2>
 <p>
 Buy Paralives for Steam Deck only if you are willing to test
 quickly and use Steam refund rules if performance or controls do not
 work for your setup. Keep a Windows PC or Apple silicon Mac as the
 safe supported path, then treat Deck as an experiment. Do not start a
 long Paralives save on Deck before confirming the controls and
 framerate for your specific hardware.
 </p>
 </section>

 <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">5-Step Deck Plan</h2>
 <ActionTable rows={paralivesDeckActionRows} />

 <SourceCheckTable title="Paralives Steam Deck Sources" rows={paralivesDeckSourceRows} />
 </ParalivesArticle>
 );
}
