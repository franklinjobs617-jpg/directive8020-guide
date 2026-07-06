import { ArticleImage } from '@/components/article-media';
import { BlufBox, StatusPanel } from '@/components/guide-blocks';
import { RomesteadArticle } from '@/components/romestead-article';
import {
 createRomesteadMetadata,
 romesteadImages,
 romesteadQuickFacts,
 romesteadReleaseRows,
} from '@/lib/romestead';

const title = 'Romestead Release Date, Unlock Time, Early Access and Demo';
const description =
 'Romestead release guide with Steam date, SteamDB unlock timing, Early Access status, PC platform facts, demo checks, console status, Steam Deck cautions, and launch notes.';
const canonical = '/games/romestead/release-date';

export const metadata = createRomesteadMetadata({
 title,
 description,
 canonical,
 image: romesteadImages.capsule,
});

const faqs = [
 {
 question: 'What is the Romestead release date?',
 answer:
 'Steam displays May 25, 2026, while SteamDB unlock timing points to May 26, 2026 at 06:30 UTC. Use your local Steam page for the final unlock button in your region.',
 },
 {
 question: 'Is Romestead out as a full game?',
 answer:
 'No. Romestead is an Early Access release, not a finished 1.0 launch.',
 },
 {
 question: 'How long will Romestead be in Early Access?',
 answer:
 'The Steam Early Access section says the developer expects roughly 1-2 years before the full release.',
 },
 {
 question: 'Is Romestead on Xbox or PlayStation?',
 answer:
 'Current official store data verifies PC via Steam. Xbox and PlayStation versions are not confirmed at this check.',
 },
 {
 question: 'Does Romestead have a demo?',
 answer:
 'Demo availability should be checked directly on Steam because demo buttons can change around launch and festivals.',
 },
 {
 question: 'Is Romestead Steam Deck verified?',
 answer:
 'Steam Deck Support is not confirmed at this check, so Deck-first buyers should wait for launch reports or an official compatibility label.',
 },
];

export default function RomesteadReleaseDatePage() {
 return (
 <RomesteadArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Release Date"
 heroImage={romesteadImages.capsule}
 heroAlt="Romestead Steam capsule art for release date and Early Access"
 faqs={faqs}
 >
 <BlufBox title="Direct Answer">
 <p>
 <strong>Romestead is a Steam Early Access PC game with a May 25,
 2026 Steam store date and a SteamDB unlock time pointing to May 26,
 2026 at 06:30 UTC.</strong> That date difference is normal for global
 Steam launches because store display dates and UTC unlock timing can
 look different by region. The practical answer is to check the Steam
 button in your own region before setting a launch-night co-op plan.
 </p>
 </BlufBox>

 <StatusPanel
 items={romesteadQuickFacts.slice(0, 8).map(([label, value]) => ({
 label,
 value,
 status: 'verified' as const,
 }))}
 />

 <section className="prose-game">
 <h2>Release Timing and Platform Status</h2>
 <ArticleImage
 src={romesteadImages.screenshot3}
 alt="Romestead exploration screenshot for release and platform status"
 caption="The launch answer should separate what is verified from what still needs post-unlock testing: PC Steam is confirmed, while console and Steam Deck claims need stronger evidence."
 />
 <p>
 Romestead should be treated as a live Steam Early Access launch
 window, not as a finished 1.0 release. PC via Steam is the confirmed
 platform. The store page lists Online Co-op, LAN Co-op, Steam Cloud,
 and Family Sharing, but players should still test saves, controller
 comfort, performance, and co-op stability after unlock.
 </p>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Question</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Current answer</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player note</th>
 </tr>
 </thead>
 <tbody>
 {romesteadReleaseRows.map(([question, answer, note]) => (
 <tr key={question} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{question}</td>
 <td className="px-4 py-3 text-muted-foreground">{answer}</td>
 <td className="px-4 py-3 text-muted-foreground">{note}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>What Early Access Means Here</h2>
 <ArticleImage
 src={romesteadImages.screenshot5}
 alt="Romestead settlement management screenshot for Early Access expectations"
 caption="Early Access can be the right choice for players who want to help shape a survival town builder, but it is not the same buying decision as a finished 1.0 release."
 />
 <p>
 The Early Access label matters because Romestead combines several
 systems that can change with patches: crafting, settlement economy,
 worker behavior, combat tuning, co-op stability, dungeon rewards, and
 performance. Buy during Early Access only if you are comfortable with
 iteration. Wait for 1.0 or broader player reports if you need stable
 late-game balance, final content depth, or comfortable handheld play.
 </p>
 </section>
 </RomesteadArticle>
 );
}
