import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, StatusPanel } from '@/components/guide-blocks';
import { LunaAbyssArticle, LunaInfoTable } from '@/components/luna-abyss-article';
import {
 createLunaAbyssMetadata,
 lunaAbyssAchievementRows,
 lunaAbyssImages,
} from '@/lib/luna-abyss';

const title = 'Luna Abyss Achievements & Trophy Guide - 45 Steam Achievements';
const description =
 'Luna Abyss achievements and trophy guide for 45 Steam achievements, PS5 trophy checks, secrets, combat cleanup, boss routes, ending cleanup, and missable planning.';
const canonical = '/games/luna-abyss/achievements-trophy-guide';

export const metadata = createLunaAbyssMetadata({
 title,
 description,
 canonical,
 image: lunaAbyssImages.screenshot7,
});

const faqs = [
 {
 question: 'How many Steam achievements does Luna Abyss have?',
 answer:
 'Steam Community shows 45 public Luna Abyss achievement rows as of May 28, 2026.',
 },
 {
 question: 'Does Luna Abyss have PS5 trophies?',
 answer:
 'Luna Abyss is on PS5, but exact PlayStation trophy names should be verified from PlayStation trophy data before treating them as final.',
 },
 {
 question: 'Should I chase Luna Abyss achievements on the first playthrough?',
 answer:
 'Do a natural first route, track obvious secrets and boss outcomes, then use cleanup routes after you understand movement and story gates.',
 },
 {
 question: 'Are Luna Abyss achievements missable?',
 answer:
 'Treat combat, boss, secret, and ending-style achievements as potentially missable until you know replay and chapter behavior from your platform.',
 },
];

const categoryRows = [
 ['Story progress', 'Finish major route beats and unlock natural progression achievements.'],
 ['Combat and bosses', 'Replay or practice arenas where achievements appear tied to challenge behavior.'],
 ['Secrets and exploration', 'Return to side paths after movement skills and route knowledge improve.'],
 ['Ending and lore', 'Read ending notes after credits, then map hidden or interpretation-related cleanup.'],
 ['Platform trophies', 'Verify PS5 trophy names separately from Steam achievement rows.'],
];

export default function LunaAbyssAchievementsTrophyGuidePage() {
 return (
 <LunaAbyssArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Achievements"
 heroImage={lunaAbyssImages.screenshot7}
 heroAlt="Luna Abyss achievements and trophy guide screenshot"
 faqs={faqs}
 >
 <BlufBox title="Achievement Answer">
 <p>
 <strong>Steam has 45 public Luna Abyss achievement rows as of May 28,
 2026.</strong> Do not force a perfect first route. Finish once, then
 group cleanup by story progress, bosses, combat behavior, secrets,
 and ending interpretation.
 </p>
 </BlufBox>

 <StatusPanel
 items={[
 { label: 'Steam achievements', value: '45 public achievement rows visible on Steam Community.', status: 'verified' },
 { label: 'PS5 trophies', value: 'Exact trophy names need platform trophy verification.', status: 'needs-check' },
 { label: 'Best first route', value: 'Natural first completion with notes for obvious secrets and boss outcomes.', status: 'working' },
 { label: 'Cleanup risk', value: 'Treat combat, boss, secret, and ending-style unlocks as route-sensitive until tested.', status: 'working' },
 ]}
 />

 <LunaInfoTable columns={['Achievement category', 'Cleanup approach']} rows={categoryRows} />

 <ActionTable rows={lunaAbyssAchievementRows} />

 <ArticleImage
 src={lunaAbyssImages.screenshot3}
 alt="Luna Abyss achievement cleanup screenshot"
 caption="Achievement cleanup should start after route knowledge, because movement, boss patterns, and secrets are easier to plan with context."
 />
 </LunaAbyssArticle>
 );
}
