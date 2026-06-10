import { ArticleImage } from '@/components/article-media';
import {
 ActionTable,
 BlufBox,
 SearchAnswerPanel,
 SourceCheckTable,
 StatusPanel,
} from '@/components/guide-blocks';
import { ThickAsThievesArticle } from '@/components/thick-as-thieves-article';
import {
 createThickAsThievesMetadata,
 tatStealthActionRows,
 tatStealthJumpLinks,
 tatStealthSearchIntent,
 tatStealthSourceRows,
 tatStealthStatusItems,
 thickAsThievesBeginnerRows,
 thickAsThievesImages,
} from '@/lib/thick-as-thieves';

const title = 'Thick As Thieves Beginner Stealth Guide - First Heist Tips';
const description =
 'Thick As Thieves beginner guide for first heists: route planning, stealth habits, exits, co-op roles, alert recovery, and launch-day mistakes to avoid.';
const canonical = '/games/thick-as-thieves/beginner-stealth-guide';

export const metadata = createThickAsThievesMetadata({
 title,
 description,
 canonical,
 image: thickAsThievesImages.beginner,
});

const faqs = [
 {
 question: 'How should beginners start Thick As Thieves?',
 answer:
 'Beginners should treat the first contract as a learning run: read the room, plan the exit, then chase loot.',
 },
 {
 question: 'Should I play solo or co-op first?',
 answer:
 'Start solo if you want to learn routes cleanly; start co-op if you want shared problem solving and can communicate.',
 },
 {
 question: 'Is Thick As Thieves more stealth or action?',
 answer:
 'Current official messaging frames it as a first-person stealth-action heist game, so stealth routing should come before brute force.',
 },
 {
 question: 'Can this guide include final mission routes?',
 answer:
 'Not yet. Mission-specific routes need hands-on verification after the Steam unlock.',
 },
];

export default function ThickAsThievesBeginnerPage() {
 return (
 <ThickAsThievesArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Beginner Stealth Guide"
 heroImage={thickAsThievesImages.beginner}
 heroAlt="Thick As Thieves beginner stealth guide image"
 faqs={faqs}
 >
 <BlufBox title="First-Heist Rule">
 <p>
 <strong>Plan the exit before you chase the prize.</strong> Thick As
 Thieves should be approached as a stealth-routing game first: entry,
 sightlines, patrol timing, reset space, objective, then extraction.
 </p>
 </BlufBox>

 <SearchAnswerPanel
 title="Thick As Thieves Beginner Stealth Quick Answer"
 answer="Treat the first contract as a scouting run: read sightlines, plan the exit, then commit to the objective. Use slow movement, identify patrols and cameras, and abort early on alert chain. Solo is best for clean route learning, co-op only with a partner who can communicate."
 intentRows={tatStealthSearchIntent}
 jumpLinks={tatStealthJumpLinks}
 />

 <StatusPanel items={tatStealthStatusItems} />

 <section id="first-run-mindset" className="prose-game">
 <ArticleImage
 src={thickAsThievesImages.beginner}
 alt="Thick As Thieves first-run stealth mindset image"
 caption="Your first run should create information, not a perfect score. Learn how rooms communicate risk before optimizing loot."
 />
 <p>
 The trailers sell stealth, timing, and route knowledge more than raw
 fighting. That means the most useful launch-day advice is not a fake
 full walkthrough. It is a reliable decision framework that keeps you
 from turning one suspicious movement into a failed heist.
 </p>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Priority</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">How to play it</th>
 </tr>
 </thead>
 <tbody>
 {thickAsThievesBeginnerRows.map(([priority, habit]) => (
 <tr key={priority} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{priority}</th>
 <td className="px-4 py-3 text-muted-foreground">{habit}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2 id="route-before-loot">Route Before Loot</h2>
 <ArticleImage
 src={thickAsThievesImages.screenshot3}
 alt="Thick As Thieves route before loot image"
 caption="In stealth games, optional loot becomes safe only after you know how to leave with it."
 />
 <p>
 Before touching the objective, ask where you entered, where you can
 hide, and how you will leave if the room changes. If you cannot answer
 those questions, you are not ready to maximize loot. You are still
 scouting.
 </p>

 <h2 id="coop-beginner-roles">Co-op Beginner Roles</h2>
 <ArticleImage
 src={thickAsThievesImages.screenshot6}
 alt="Thick As Thieves co-op beginner roles image"
 caption="A partner is most useful when one player watches timing and exits while the other handles the risky interaction."
 />
 <ul>
 <li>One player calls patrol timing and abort signals.</li>
 <li>One player commits to the objective only when the route is clear.</li>
 <li>Both players agree on the exit before optional loot detours.</li>
 </ul>
 </section>

 <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">5-Step Beginner Plan</h2>
 <ActionTable rows={tatStealthActionRows} />

 <SourceCheckTable title="Thick As Thieves Beginner Sources" rows={tatStealthSourceRows} />
 </ThickAsThievesArticle>
 );
}
