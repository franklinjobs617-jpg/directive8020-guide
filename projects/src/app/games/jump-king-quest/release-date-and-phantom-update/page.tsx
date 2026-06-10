import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { JumpKingQuestArticle } from '@/components/jump-king-quest-article';
import {
 createJumpKingQuestMetadata,
 jumpKingQuestImages,
 jumpKingQuestReleaseRows,
} from '@/lib/jump-king-quest';

const title = 'JUMP KING QUEST Release Date and 1.0 Phantom Update';
const description =
 'JUMP KING QUEST release date and 1.0 Phantom Update guide covering the May 25, 2026 full release, February 12, 2025 Early Access start, Steam status, review signal, and launch offer timing.';
const canonical = '/games/jump-king-quest/release-date-and-phantom-update';

export const metadata = createJumpKingQuestMetadata({
 title,
 description,
 canonical,
 image: jumpKingQuestImages.header,
});

const faqs = [
 {
 question: 'Is JUMP KING QUEST out now?',
 answer:
 'Yes. The full 1.0 launch happened on May 25, 2026, so this page covers the live Steam version.',
 },
 {
 question: 'When did JUMP KING QUEST leave Early Access?',
 answer:
 'Steam shows an Early Access start on February 12, 2025 and a full release on May 25, 2026.',
 },
 {
 question: 'What is the Phantom Update?',
 answer:
 'The Steam news hub uses Phantom Update language for the 1.0 full release that moved JUMP KING QUEST out of Early Access.',
 },
 {
 question: 'How long is the launch discount available?',
 answer:
 'Steam shows a 20% introductory offer ending June 8, 2026 at the latest check.',
 },
];

export default function JumpKingQuestReleasePage() {
 return (
 <JumpKingQuestArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Release Date"
 heroImage={jumpKingQuestImages.header}
 heroAlt="JUMP KING QUEST release date guide image"
 faqs={faqs}
 >
 <BlufBox title="Direct Answer">
 <p>
 <strong>JUMP KING QUEST released on May 25, 2026.</strong> Steam
 shows the game started Early Access on February 12, 2025 and later
 moved into 1.0 through the Phantom Update. The current Steam signal is
 Very Positive, and the latest visible launch offer is a 20%
 introductory discount ending June 8, 2026.
 </p>
 </BlufBox>

 <section className="prose-game">
 <h2>Launch Timeline</h2>
 <ArticleImage
 src={jumpKingQuestImages.phantom}
 alt="JUMP KING QUEST Phantom Update launch image"
 caption="Use this page when you need the exact transition from Early Access to 1.0, not just a general store summary."
 />
 <p>
 This is the page for people who are seeing conflicting phrases like
 Early Access, 1.0 launch, out now, or Phantom Update. The safe answer
 is that the game is already live in its 1.0 form on Steam PC. Earlier
 Early Access dates matter for history and context, but they are not
 the current launch state.
 </p>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Release fact</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Current answer</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Confidence</th>
 </tr>
 </thead>
 <tbody>
 {jumpKingQuestReleaseRows.map(([fact, answer, confidence]) => (
 <tr key={fact} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{fact}</td>
 <td className="px-4 py-3 text-muted-foreground">{answer}</td>
 <td className="px-4 py-3 text-muted-foreground">{confidence}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>Why This Matters</h2>
 <p>
 A launch-date page should answer two things fast: whether the game is
 actually out and whether the update language is talking about the
 full release or a patch milestone. For JUMP KING QUEST, the 1.0
 Phantom Update is the full release, so this page should be used as a
 clean factual reference instead of a teaser.
 </p>
 </section>
 </JumpKingQuestArticle>
 );
}
