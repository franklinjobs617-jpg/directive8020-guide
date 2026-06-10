import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, StatusPanel } from '@/components/guide-blocks';
import { LunaAbyssArticle, LunaInfoTable } from '@/components/luna-abyss-article';
import {
 createLunaAbyssMetadata,
 lunaAbyssImages,
 lunaAbyssWalkthroughRows,
} from '@/lib/luna-abyss';

const title = 'Luna Abyss Walkthrough - Spoiler-Light Route, Bosses & Secrets';
const description =
 'Luna Abyss walkthrough route for first-run setup, Greymont lore, movement gates, combat arenas, boss prep, secrets, achievements, and ending cleanup.';
const canonical = '/games/luna-abyss/walkthrough';

export const metadata = createLunaAbyssMetadata({
 title,
 description,
 canonical,
 image: lunaAbyssImages.screenshot6,
});

const faqs = [
 {
 question: 'Does Luna Abyss need a walkthrough?',
 answer:
 'A full first run can be played blind, but a spoiler-light walkthrough helps with movement gates, combat arenas, secrets, achievements, and post-ending cleanup.',
 },
 {
 question: 'Should I read the Luna Abyss ending before using the walkthrough?',
 answer:
 'No. Use this walkthrough first, finish once, then read the ending explained page when the main story beats are no longer spoilers.',
 },
 {
 question: 'What should I track during the Luna Abyss walkthrough?',
 answer:
 'Track combat arenas, boss outcomes, side paths, story terms, secrets, and any achievement that appears tied to a location or challenge.',
 },
 {
 question: 'Is this walkthrough spoiler-free?',
 answer:
 'It is spoiler-light. It avoids final interpretation and focuses on practical route habits.',
 },
];

const routeRows = [
 ['First safe stretch', 'Set controls, readability, and FPS before route pressure begins.'],
 ['Movement gates', 'Use sprint, jump, dash, and route timing as survival tools.'],
 ['Combat arenas', 'Read bullet patterns, enemy spacing, and exits before chasing damage.'],
 ['Lore rooms', 'Track Greymont, Scourge, All-Father, Collective, Aylin, and Fawkes references.'],
 ['Post-credits', 'Move to ending explained, achievements, and missed secrets.'],
];

export default function LunaAbyssWalkthroughPage() {
 return (
 <LunaAbyssArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Walkthrough"
 heroImage={lunaAbyssImages.screenshot6}
 heroAlt="Luna Abyss walkthrough screenshot"
 faqs={faqs}
 >
 <BlufBox title="Walkthrough Answer">
 <p>
 <strong>Use this as a route plan, not a script.</strong> Luna Abyss is
 strongest when the first run keeps some mystery. Track movement,
 arena pressure, secrets, and lore terms, then use the ending and
 achievement pages after credits.
 </p>
 </BlufBox>

 <StatusPanel
 items={[
 { label: 'Spoiler level', value: 'Spoiler-light route structure, no final interpretation first.', status: 'working' },
 { label: 'Core loop', value: 'First-person platforming, bullet-hell combat, bosses, secrets, and story clues.', status: 'verified' },
 { label: 'Cleanup path', value: 'Achievements and ending notes should follow one complete route.', status: 'working' },
 { label: 'Best companion page', value: 'Use beginner guide first if controls or movement feel unstable.', status: 'working' },
 ]}
 />

 <LunaInfoTable columns={['Route phase', 'What to do']} rows={routeRows} />

 <ActionTable rows={lunaAbyssWalkthroughRows} />

 <ArticleImage
 src={lunaAbyssImages.screenshot7}
 alt="Luna Abyss boss and route cleanup screenshot"
 caption="After the first route, turn your notes into cleanup targets: missed side rooms, boss achievements, and ending questions."
 />
 </LunaAbyssArticle>
 );
}
