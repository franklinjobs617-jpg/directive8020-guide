import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, StatusPanel } from '@/components/guide-blocks';
import { LunaAbyssArticle } from '@/components/luna-abyss-article';
import { LunaProgressChecklist } from '@/components/tools/luna-progress-checklist';
import {
 createLunaAbyssMetadata,
 lunaAbyssBeginnerRows,
 lunaAbyssImages,
 lunaAbyssNextRunSteps,
} from '@/lib/luna-abyss';

const title = 'Luna Abyss Beginner Guide - First Hour, Combat, Movement & Secrets';
const description =
 'Spoiler-light Luna Abyss beginner guide for settings, movement, dash timing, bullet-hell combat, exploration habits, first secrets, and achievement-safe progress.';
const canonical = '/games/luna-abyss/beginner-guide';

export const metadata = createLunaAbyssMetadata({
 title,
 description,
 canonical,
 image: lunaAbyssImages.screenshot5,
});

const faqs = [
 {
 question: 'What should I do first in Luna Abyss?',
 answer:
 'Set subtitles, text size, camera sensitivity, brightness, and difficulty, then practice sprint, jump, dash, and arena movement before focusing on achievements.',
 },
 {
 question: 'Should I chase Luna Abyss achievements on the first run?',
 answer:
 'Track obvious secrets and boss outcomes, but save serious achievement cleanup until after one natural route.',
 },
 {
 question: 'Is Luna Abyss more about shooting or movement?',
 answer:
 'It is both. Movement, dash timing, platforming, and bullet pattern awareness matter as much as aim.',
 },
 {
 question: 'Can I change difficulty in Luna Abyss?',
 answer:
 'Steam lists adjustable difficulty as an accessibility category, so check difficulty options before the first long session.',
 },
];

export default function LunaAbyssBeginnerGuidePage() {
 return (
 <LunaAbyssArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Beginner Guide"
 heroImage={lunaAbyssImages.screenshot5}
 heroAlt="Luna Abyss beginner guide screenshot"
 faqs={faqs}
 >
 <BlufBox title="First-Hour Answer">
 <p>
 <strong>Do not turn the first hour into a completion run.</strong>{' '}
 Luna Abyss rewards comfort with movement, dash timing, camera
 sensitivity, and arena awareness. Learn those first, then return for
 achievements and ending cleanup.
 </p>
 </BlufBox>

 <StatusPanel
 items={[
 { label: 'Best first goal', value: 'Learn movement, aim, and dodge rhythm before cleanup.', status: 'working' },
 { label: 'Accessibility', value: 'Steam lists adjustable text size, difficulty, subtitles, and camera comfort categories.', status: 'verified' },
 { label: 'Achievements', value: '45 public Steam achievements are visible.', status: 'verified' },
 { label: 'Spoiler posture', value: 'Use ending and trophy pages after one natural route.', status: 'working' },
 ]}
 />

 <ActionTable rows={lunaAbyssBeginnerRows} />

 <LunaProgressChecklist title="First Session Checklist" steps={lunaAbyssNextRunSteps.slice(0, 4)} compact />

 <ArticleImage
 src={lunaAbyssImages.screenshot6}
 alt="Luna Abyss first-hour exploration screenshot"
 caption="Build the habit of checking side paths after fights. Exploration and story clues matter more when you return for achievements."
 />
 </LunaAbyssArticle>
 );
}
