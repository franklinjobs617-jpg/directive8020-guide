import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, SearchAnswerPanel, SourceCheckTable, StatusPanel } from '@/components/guide-blocks';
import { JumpKingQuestArticle } from '@/components/jump-king-quest-article';
import {
 createJumpKingQuestMetadata,
 jumpKingQuestImages,
 jumpKingQuestMultiplayerActionRows,
 jumpKingQuestMultiplayerJumpLinks,
 jumpKingQuestMultiplayerRows,
 jumpKingQuestMultiplayerSearchIntent,
 jumpKingQuestMultiplayerSourceRows,
 jumpKingQuestMultiplayerStatusItems,
} from '@/lib/jump-king-quest';

const title = 'JUMP KING QUEST Multiplayer, Co-op, PvP & Controller Support';
const description =
 'JUMP KING QUEST multiplayer and controller guide covering Steam-listed single-player, online co-op, online PvP, Steam Cloud, Family Sharing, controller checks, and unconfirmed split-screen or crossplay status.';
const canonical = '/games/jump-king-quest/multiplayer-controller';

export const metadata = createJumpKingQuestMetadata({
 title,
 description,
 canonical,
 image: jumpKingQuestImages.coop,
});

const faqs = [
 {
 question: 'Is JUMP KING QUEST multiplayer?',
 answer:
 'Yes. Steam lists Single-player, Online Co-op, and Online PvP for JUMP KING QUEST.',
 },
 {
 question: 'Does JUMP KING QUEST have co-op?',
 answer:
 'Yes. Steam lists Online Co-op, and the store description says players can create a party with friends during the climb.',
 },
 {
 question: 'Does JUMP KING QUEST have PvP?',
 answer:
 'Yes. Steam lists Online PvP, and the store description describes a PvP duel system.',
 },
 {
 question: 'Does JUMP KING QUEST support controllers?',
 answer:
 'Controller support should be checked on your exact setup before a long session because comfort matters in a precision platformer.',
 },
 {
 question: 'Is JUMP KING QUEST split-screen or couch co-op?',
 answer:
 'Split-screen and couch co-op are not confirmed in the current public Steam feature labels.',
 },
 {
 question: 'Does JUMP KING QUEST have crossplay?',
 answer:
 'Crossplay is not confirmed because PC via Steam is the verified public platform covered in this guide.',
 },
];

export default function JumpKingQuestMultiplayerControllerPage() {
 return (
 <JumpKingQuestArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Multiplayer & Controller"
 heroImage={jumpKingQuestImages.coop}
 heroAlt="JUMP KING QUEST multiplayer guide image"
 faqs={faqs}
 >
 <BlufBox title="Multiplayer Answer">
 <p>
 <strong>JUMP KING QUEST lists Single-player, Online Co-op, and
 Online PvP on Steam.</strong> The current safe answer is that online
 play is part of the game, but split-screen, couch co-op, and crossplay
 are not confirmed in the public Steam feature labels. Controller
 comfort should be tested on your own setup before committing to a long
 climb.
 </p>
 </BlufBox>

 <SearchAnswerPanel
 title="JUMP KING QUEST Multiplayer Quick Answer"
 answer="Steam lists Single-player, Online Co-op, and Online PvP. Split-screen, couch co-op, and crossplay are not confirmed. Controller comfort and party setup should be tested during refund rules."
 intentRows={jumpKingQuestMultiplayerSearchIntent}
 jumpLinks={jumpKingQuestMultiplayerJumpLinks}
 />

 <StatusPanel items={jumpKingQuestMultiplayerStatusItems} />

 <section className="prose-game">
 <h2 id="multiplayer-confirmed">Confirmed Multiplayer Features</h2>
 <ArticleImage
 src={jumpKingQuestImages.pvp}
 alt="JUMP KING QUEST official video frame showing online player pressure"
 caption="Steam lists online co-op and online PvP, while the store description frames nearby players as possible helpers, distractions, duel opponents, or threats."
 />
 <p>
 The multiplayer question is not just whether the game has co-op. JUMP
 KING QUEST is built around a difficult climb where other players can
 affect the feel of a route. That makes party setup, duel expectations,
 communication, and controller comfort important before you turn the
 game into a long group session.
 </p>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Feature</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Current answer</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Confidence</th>
 </tr>
 </thead>
 <tbody>
 {jumpKingQuestMultiplayerRows.map(([feature, answer, confidence]) => (
 <tr key={feature} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{feature}</td>
 <td className="px-4 py-3 text-muted-foreground">{answer}</td>
 <td className="px-4 py-3 text-muted-foreground">{confidence}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2 id="multiplayer-modes">Solo, Co-op, and PvP: How to Choose</h2>
 <ArticleImage
 src={jumpKingQuestImages.climb}
 alt="JUMP KING QUEST official video frame showing climbing route pressure"
 caption="Start solo if you need movement consistency. Add co-op once your group can survive a few route mistakes without turning every fall into noise."
 />
 <p>
 Solo is the cleanest way to learn jump timing, fall recovery, enemy
 spacing, and route reading. Co-op is best when the group wants shared
 failure and can talk through risky jumps. PvP is the chaos option:
 useful for players who want interference and duels, but not the best
 first mode for learning basic climbing discipline.
 </p>
 </section>

 <section className="prose-game">
 <h2 id="multiplayer-pvp">PvP, Interference, and Duel Expectations</h2>
 <p>
 Treat online PvP as chaos-first until your group understands the mode.
 Duel framing and player interference are part of the store description,
 so routes that feel safe in solo or co-op can become contested in PvP.
 Decide on voice, party setup, and recovery rules before a long PvP
 session, and refund if the experience does not match your tolerance.
 </p>
 </section>

 <section className="prose-game">
 <h2 id="multiplayer-controller">Controller Checks Before a Long Climb</h2>
 <ArticleImage
 src={jumpKingQuestImages.header}
 alt="JUMP KING QUEST controller and setup guide image"
 caption="Precision platformers are sensitive to input comfort. Test jump charge, attack inputs, menus, camera movement, and Steam Cloud behavior before a long run."
 />
 <ul>
 <li>Test your preferred controller for jump charge consistency.</li>
 <li>Check whether combat inputs feel comfortable during platforming pressure.</li>
 <li>Confirm menus, inventory, and character screens are usable without switching inputs.</li>
 <li>Use a short climb to test Steam Cloud and save behavior before changing devices.</li>
 <li>Keep keyboard and mouse ready if your controller layout feels awkward.</li>
 </ul>
 </section>

 <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">5-Step Multiplayer Plan</h2>
 <ActionTable rows={jumpKingQuestMultiplayerActionRows} />

 <SourceCheckTable title="JUMP KING QUEST Multiplayer Sources" rows={jumpKingQuestMultiplayerSourceRows} />
 </JumpKingQuestArticle>
 );
}
