import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { ZeroParadesArticle } from '@/components/zero-parades-article';
import {
 createZeroParadesMetadata,
 zeroParadesBeginnerRows,
 zeroParadesImages,
} from '@/lib/zero-parades';

const title = 'ZERO PARADES Beginner Guide - Skills, Conditioning & Exertion';
const description =
 'Spoiler-light ZERO PARADES beginner guide for skills, Conditioning, Exertion, Fatigue, Anxiety, Delirium, dialogue checks, saves, and first-session espionage RPG habits.';
const canonical = '/games/zero-parades/beginner-guide';

export const metadata = createZeroParadesMetadata({
 title,
 description,
 canonical,
 image: zeroParadesImages.screenshot2,
});

const faqs = [
 {
 question: 'What should I do first in ZERO PARADES?',
 answer:
 'Start by choosing an espionage identity and skill direction, then read conversations carefully before spending Exertion or changing Conditioning.',
 },
 {
 question: 'Should I reload failed checks in ZERO PARADES?',
 answer:
 'Not automatically. Failure is part of the RPG structure, so treat failed checks as story information unless the outcome blocks the route you want.',
 },
 {
 question: 'What is Conditioning in ZERO PARADES?',
 answer:
 'Conditioning changes Hershel Wilk and can alter the rules of the game, so beginners should change it deliberately instead of treating it like a simple stat swap.',
 },
 {
 question: 'How should I use Exertion?',
 answer:
 'Use Exertion on important checks, not every uncertain roll, because pressure systems such as Fatigue, Anxiety, and Delirium can create longer-term costs.',
 },
];

const pressureRows = [
 ['Fatigue', 'Physical and mental drain from pushing too hard.', 'Do not spend pressure just to optimize minor dialogue.'],
 ['Anxiety', 'Psychological strain under espionage pressure.', 'Pause before escalating high-stakes encounters.'],
 ['Delirium', 'A dangerous pressure state tied to pushing beyond limits.', 'Treat it as a route risk until you understand the consequence.'],
 ['Exertion', 'A way to push dice rolls in your favor.', 'Use for checks that match your build or mission goal.'],
];

export default function ZeroParadesBeginnerGuidePage() {
 return (
 <ZeroParadesArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Beginner Guide"
 heroImage={zeroParadesImages.screenshot2}
 heroAlt="ZERO PARADES beginner guide screenshot"
 faqs={faqs}
 >
 <BlufBox title="Beginner Answer">
 <p>
 <strong>Do not play ZERO PARADES like a perfect-check simulator.</strong>{' '}
 Pick a skill identity, read motives, save before risky conversations,
 and use Exertion only when the outcome matters. Failure is part of the
 RPG structure, not always a reason to reload.
 </p>
 </BlufBox>

 <section className="prose-game">
 <h2>First-Session Priorities</h2>
 <ArticleImage
 src={zeroParadesImages.screenshot2}
 alt="ZERO PARADES first-session beginner guide screenshot"
 caption="Your first job is to understand Hershel Wilk as an operant: skills, pressure, Conditioning, and conversation choices all shape the assignment."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Priority</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player habit</th>
 </tr>
 </thead>
 <tbody>
 {zeroParadesBeginnerRows.map(([priority, habit]) => (
 <tr key={priority} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{priority}</th>
 <td className="px-4 py-3 text-muted-foreground">{habit}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>Skills and Conditioning</h2>
 <ArticleImage
 src={zeroParadesImages.screenshot4}
 alt="ZERO PARADES skills and Conditioning screenshot"
 caption="Steam describes 15 skills and Conditioning effects that can change Hershel and the rules of play. Build around a role instead of spreading points randomly."
 />
 <p>
 The safest beginner mindset is to define how your CASCADE operates:
 deduction, subterfuge, violence, persuasion, reflexes, or a stranger
 cover story for every room. The game promises multiple ways through
 problems, so a focused build should create clearer options than a
 scattered one.
 </p>

 <h2>Pressure Management</h2>
 <ArticleImage
 src={zeroParadesImages.screenshot5}
 alt="ZERO PARADES pressure and Exertion screenshot"
 caption="Exertion can help a roll, but pressure is not free. Use it when the mission, relationship, or route consequence justifies the cost."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">System</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">What it means</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Beginner rule</th>
 </tr>
 </thead>
 <tbody>
 {pressureRows.map(([system, meaning, rule]) => (
 <tr key={system} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{system}</td>
 <td className="px-4 py-3 text-muted-foreground">{meaning}</td>
 <td className="px-4 py-3 text-muted-foreground">{rule}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>Dialogue and Save Habits</h2>
 <ArticleImage
 src={zeroParadesImages.screenshot6}
 alt="ZERO PARADES dialogue and save advice screenshot"
 caption="Steam lists Save Anytime, so use it before risky conversations, not after you have already pushed a bad pressure state too far."
 />
 <ul>
 <li>Save before major conversations, faction meetings, or suspicious informants.</li>
 <li>Read repeated wording carefully; in a spy RPG, phrasing can be evidence.</li>
 <li>Do not spend pressure on every small check just because the option appears.</li>
 <li>Let some failed rolls stand if they reveal motives or open a different route.</li>
 <li>Keep notes on names, cover stories, ideological factions, and contradictions.</li>
 </ul>
 </section>
 </ZeroParadesArticle>
 );
}
