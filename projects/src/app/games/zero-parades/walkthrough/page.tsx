import { ArticleImage, VideoEmbed } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { ZeroParadesArticle } from '@/components/zero-parades-article';
import {
 createZeroParadesMetadata,
 zeroParadesImages,
} from '@/lib/zero-parades';

const title = 'ZERO PARADES Walkthrough - All Assignments, Choices & Endings';
const description =
 'ZERO PARADES walkthrough: assignment progression, key decision points, skill checks, missable content, time-sensitive events, and route guidance for Hershel Wilk.';
const canonical = '/games/zero-parades/walkthrough';

export const metadata = createZeroParadesMetadata({
 title,
 description,
 canonical,
 image: zeroParadesImages.screenshot1,
});

const faqs = [
 {
 question: 'Does ZERO PARADES have a walkthrough?',
 answer:
 'Yes. This page covers assignment progression, key decision points, skill checks, and route guidance. It is updated as more playthrough data becomes available.',
 },
 {
 question: 'How many assignments are in ZERO PARADES?',
 answer:
 'ZERO PARADES is structured around espionage assignments. The exact number is still being confirmed by the community, but the game offers 20-30 hours of main story content with branching routes per assignment.',
 },
 {
 question: 'Can you miss assignments in ZERO PARADES?',
 answer:
 'Yes. Some assignments and conversations are time-sensitive and can advance when you rest or move between areas. Save before major decisions and pay attention to case urgency in dialogue.',
 },
 {
 question: 'Does ZERO PARADES have multiple endings?',
 answer:
 'Yes. Routes branch from skill checks, Conditioning choices, and dialogue decisions. Multiple playthroughs with different builds reveal different outcomes.',
 },
 {
 question: 'What happens if I fail a skill check in ZERO PARADES?',
 answer:
 'Failed checks are part of the RPG structure. They can reveal information, open alternative routes, or create new consequences. Not every failure requires a reload.',
 },
];

const progressionRows = [
 ['Assignments', 'The game is structured around espionage cases, each with multiple approaches and outcomes.'],
 ['Skill checks', 'Dialogue and action checks use your 15 skills. Higher investment means more options, not guaranteed success.'],
 ['Conditioning', 'Conditioning changes can alter how assignments resolve and which routes are available.'],
 ['Time sensitivity', 'Some events advance when you rest or move between areas. The game does not always make this explicit.'],
 ['Branching', 'Failed checks, dialogue choices, and Conditioning experiments all create different routes through the same assignment.'],
];

const missableRows = [
 ['Time-limited conversations', 'Some NPC interactions advance when you rest or change areas', 'Save before resting'],
 ['Assignment deadlines', 'Main cases may have implicit deadlines expressed through dialogue urgency', 'Pay attention to case framing'],
 ['Faction relationships', 'Dialogue choices can lock out faction routes permanently', 'Save before faction meetings'],
 ['Skill-gated content', 'Some content only opens with specific skill levels', 'Check skill requirements before committing'],
];

export default function ZeroParadesWalkthroughPage() {
 return (
 <ZeroParadesArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Walkthrough"
 heroImage={zeroParadesImages.screenshot1}
 heroAlt="ZERO PARADES walkthrough guide screenshot"
 faqs={faqs}
 >
 <BlufBox title="Walkthrough Answer">
 <p>
 <strong>ZERO PARADES is structured around espionage assignments with
 branching routes.</strong> Each assignment can be approached through
 different skills, Conditioning choices, and dialogue decisions. This
 walkthrough covers progression structure, key decision points, and
 missable content. Use the table of contents to jump to what you need.
 </p>
 </BlufBox>

 <section className="prose-game">
 <h2>How ZERO PARADES Progression Works</h2>
 <ArticleImage
 src={zeroParadesImages.screenshot1}
 alt="ZERO PARADES progression structure screenshot"
 caption="ZERO PARADES is organized around assignments, not chapters. Each assignment has multiple routes depending on your skills and choices."
 />
 <p>
 Unlike linear RPGs, ZERO PARADES does not follow a strict
 chapter-by-chapter structure. Instead, the game is organized around
 espionage assignments that Hershel Wilk must complete. Each assignment
 offers multiple approaches based on your skill investment, Conditioning
 state, and dialogue choices. The game tracks your decisions and
 adjusts consequences accordingly.
 </p>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">System</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">How it affects progression</th>
 </tr>
 </thead>
 <tbody>
 {progressionRows.map(([system, effect]) => (
 <tr key={system} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{system}</td>
 <td className="px-4 py-3 text-muted-foreground">{effect}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="my-10">
 <h2 className="mb-4 text-xl font-bold text-foreground">Walkthrough Videos</h2>
 <VideoEmbed
 videoId="1iYsSKBOhl8"
 title="Zero Parades: For Dead Spies 100% Walkthrough Guide Part 1 Day 1"
 caption="VGS walkthrough covering the opening assignment, key decisions, and skill check routing."
 />
 <VideoEmbed
 videoId="NToUPZjUiGk"
 title="Zero Parades For Dead Spies Full Gameplay Walkthrough Part 1"
 caption="Full gameplay walkthrough with no commentary for players who want to see routes without spoilers from narration."
 />
 </section>

 <section className="prose-game">
 <h2>Assignment Structure</h2>
 <ArticleImage
 src={zeroParadesImages.screenshot3}
 alt="ZERO PARADES assignment walkthrough screenshot"
 caption="Each assignment has objectives, key conversations, skill check gates, and branching consequences. Save before entering a new assignment area."
 />
 <p>
 Each assignment in ZERO PARADES follows a general pattern: receive the
 case, investigate the context, make decisions under pressure, and
 face consequences. The specific objectives, NPCs, and skill checks
 vary by assignment, but the core loop stays consistent. Your build
 determines which paths are available and which checks you can pass.
 </p>
 <ul>
 <li>
 <strong>Case briefing:</strong> Read carefully. Names, factions,
 and job titles are likely to matter later.
 </li>
 <li>
 <strong>Investigation phase:</strong> Use your core skills to
 gather information. Different skills reveal different clues.
 </li>
 <li>
 <strong>Decision points:</strong> Conversations with informants,
 rivals, and faction members create branching paths.
 </li>
 <li>
 <strong>Consequences:</strong> Your choices affect future
 assignments, faction relationships, and available routes.
 </li>
 </ul>
 </section>

 <section className="prose-game">
 <h2>Missable Content and Time-Sensitive Events</h2>
 <ArticleImage
 src={zeroParadesImages.screenshot5}
 alt="ZERO PARADES missable content warning screenshot"
 caption="Some content is time-sensitive. Save often and pay attention to dialogue urgency to avoid missing key assignments or conversations."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">What can be missed</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Prevention</th>
 </tr>
 </thead>
 <tbody>
 {missableRows.map(([what, why, prevention]) => (
 <tr key={what} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{what}</td>
 <td className="px-4 py-3 text-muted-foreground">{why}</td>
 <td className="px-4 py-3 text-muted-foreground">{prevention}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>Key Decision Framework</h2>
 <ArticleImage
 src={zeroParadesImages.screenshot6}
 alt="ZERO PARADES decision framework screenshot"
 caption="Every major decision in ZERO PARADES involves a trade-off. There is no universal best choice, only the choice that fits your build and goals."
 />
 <p>
 ZERO PARADES is designed so that no single route is objectively
 correct. Failed checks can reveal information that successful checks
 miss. Aggressive approaches close diplomatic routes but open
 confrontation paths. The game rewards multiple playthroughs with
 different builds because each archetype sees different sides of the
 same assignment.
 </p>
 <ul>
 <li>
 <strong>Before a major conversation:</strong> Save manually. Check
 your pressure state. Confirm your core skills are high enough for
 the checks you want to attempt.
 </li>
 <li>
 <strong>During a conversation:</strong> Read carefully. Faction
 affiliations, contradictions, and hidden motives are often embedded
 in dialogue wording.
 </li>
 <li>
 <strong>After a failed check:</strong> Do not reload immediately.
 Some failures create new information or open alternative routes
 that a successful check would have missed.
 </li>
 </ul>
 </section>

 <section className="prose-game">
 <h2>Endings and Replay Value</h2>
 <ArticleImage
 src={zeroParadesImages.screenshot7}
 alt="ZERO PARADES endings and replay value screenshot"
 caption="Multiple endings reward different builds and decision patterns. A second playthrough with a different archetype reveals entirely new routes."
 />
 <p>
 ZERO PARADES has multiple endings determined by your accumulated
 choices, skill investment, Conditioning state, and faction
 relationships. A Careful Investigator playthrough will see different
 outcomes than a Forceful Operative or Unstable Wildcard run. The
 game is designed for replay value: each build reveals different
 information and opens different routes through the same assignments.
 </p>
 </section>
 </ZeroParadesArticle>
 );
}
