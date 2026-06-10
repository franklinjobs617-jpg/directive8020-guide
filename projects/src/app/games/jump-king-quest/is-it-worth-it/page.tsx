import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { JumpKingQuestArticle } from '@/components/jump-king-quest-article';
import {
 createJumpKingQuestMetadata,
 jumpKingQuestImages,
 jumpKingQuestWorthRows,
} from '@/lib/jump-king-quest';

const title = 'Is JUMP KING QUEST Worth It? Reviews, Difficulty & Multiplayer';
const description =
 'JUMP KING QUEST launch-window buying guide: Steam review signal, difficulty fit, Jump King 1 expectations, co-op and PvP value, controller cautions, and who should buy or wait.';
const canonical = '/games/jump-king-quest/is-it-worth-it';

export const metadata = createJumpKingQuestMetadata({
 title,
 description,
 canonical,
 image: jumpKingQuestImages.pvp,
});

const faqs = [
 {
 question: 'Is JUMP KING QUEST worth buying now?',
 answer:
 'It is worth considering if you want difficult climbing mixed with combat, exploration, online co-op, online PvP, and a fresh 1.0 launch.',
 },
 {
 question: 'What do Steam reviews say about JUMP KING QUEST?',
 answer:
 'Steam currently shows a Very Positive user review signal, but launch-window buyers should still read recent reviews for difficulty, controller, combat, and multiplayer expectations.',
 },
 {
 question: 'Should Jump King fans buy JUMP KING QUEST?',
 answer:
 'Jump King fans should consider it if they want the formula expanded with combat, progression, exploration, and online systems. Wait if you only want a pure original-style climb.',
 },
 {
 question: 'Is JUMP KING QUEST good for co-op?',
 answer:
 'Co-op is one of the clearest reasons to consider it, but groups should test invites, party flow, input comfort, and whether multiplayer pressure is fun for them.',
 },
 {
 question: 'Who should wait before buying JUMP KING QUEST?',
 answer:
 'Wait if you need broad late-game route guides, settled balance consensus, verified controller comfort, or clear reports from your exact multiplayer setup.',
 },
];

export default function JumpKingQuestWorthItPage() {
 return (
 <JumpKingQuestArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Is It Worth It"
 heroImage={jumpKingQuestImages.pvp}
 heroAlt="JUMP KING QUEST buying guide image"
 faqs={faqs}
 >
 <BlufBox title="Fast Verdict">
 <p>
 <strong>JUMP KING QUEST is a buy-now candidate for players who want
 hard platforming with combat, exploration, online co-op, and online
 PvP.</strong> It is a wait candidate if you need a pure Jump King 1
 style climb, settled balance reports, verified controller comfort, or
 complete route guidance before starting.
 </p>
 </BlufBox>

 <section className="prose-game">
 <h2>Buy Now or Wait</h2>
 <ArticleImage
 src={jumpKingQuestImages.combat}
 alt="JUMP KING QUEST official video frame showing combat and platforming pressure"
 caption="The buying decision depends on whether you want the 1.0 launch blend of climbing, combat, progression, online co-op, and PvP rather than a solved route guide."
 />
 <p>
 The strongest reason to buy now is clear genre fit. JUMP KING QUEST
 is not selling only a nostalgic return to the first game. Steam
 describes climbing, fighting, exploration, character customization,
 online co-op, and online PvP, while the current user review signal is
 Very Positive. That is promising, but it does not remove launch-week
 unknowns around controller comfort, balance, and group flow.
 </p>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player situation</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best current guidance</th>
 </tr>
 </thead>
 <tbody>
 {jumpKingQuestWorthRows.map(([decision, guidance]) => (
 <tr key={decision} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{decision}</td>
 <td className="px-4 py-3 text-muted-foreground">{guidance}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>Who This Fits Best</h2>
 <ArticleImage
 src={jumpKingQuestImages.coop}
 alt="JUMP KING QUEST official video frame showing online co-op context"
 caption="Co-op and PvP are part of the Steam feature set, so the best-fit player is comfortable with difficult movement and social failure loops."
 />
 <p>
 JUMP KING QUEST fits players who like learning through repeated
 failure, do not mind a hard first hour, and enjoy systems that can
 turn a climb into a shared story. If your group likes laughing through
 bad jumps, recovering from messy screens, and testing strange builds
 before a wiki is mature, launch week is a reasonable time to try it.
 </p>
 </section>

 <section className="prose-game">
 <h2>Who Should Wait</h2>
 <ArticleImage
 src={jumpKingQuestImages.phantom}
 alt="JUMP KING QUEST Phantom Update buying advice image"
 caption="Wait if you need broad player reports on late-game balance, controller comfort, multiplayer stability, or solved routes before committing."
 />
 <p>
 Waiting makes sense if you mainly want finished community routes,
 boss or area breakdowns, complete build consensus, or clear reports
 from players using your exact controller and co-op setup. The game is
 already at 1.0, but launch-window information is still uneven, so the
 safest buyer posture is to match the purchase to your tolerance for
 difficult movement and early community discovery.
 </p>
 </section>
 </JumpKingQuestArticle>
 );
}
