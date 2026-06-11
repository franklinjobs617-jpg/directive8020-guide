import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, SearchAnswerPanel, StatusPanel } from '@/components/guide-blocks';
import { LunaAbyssArticle, LunaInfoTable } from '@/components/luna-abyss-article';
import { LunaProgressChecklist } from '@/components/tools/luna-progress-checklist';
import {
 createLunaAbyssMetadata,
 laBeginnerActionRows,
 laBeginnerJumpLinks,
 laBeginnerSearchIntent,
 laBeginnerStatusItems,
 lunaAbyssBeginnerRows,
 lunaAbyssImages,
 lunaAbyssNextRunSteps,
} from '@/lib/luna-abyss';

const title = 'Luna Abyss Beginner Guide: First Hour Tips, Weapon Builds & Color Shield Strategies';
const description =
 'Spoiler-light Luna Abyss beginner guide for settings, movement, dash timing, bullet-hell combat, exploration habits, first secrets, and achievement-safe progress.';
const canonical = '/games/luna-abyss/beginner-guide';

export const metadata = createLunaAbyssMetadata({
 title,
 description,
 canonical,
 image: lunaAbyssImages.screenshot5,
});

const shieldColorRows = [
 ['Red shield', 'Use blue or cold-aligned weapons.', 'Red shields are common on basic Scourge infantry. Blue weapons strip them in fewer shots.'],
 ['Blue shield', 'Use red or fire-aligned weapons.', 'Blue shields appear on heavier units. Red damage types break the barrier faster than neutral fire.'],
 ['Purple shield', 'Use white or light-aligned weapons.', 'Purple shields guard elite units and minibosses. Matching the damage color prevents prolonged shield-trading.'],
 ['Yellow shield', 'Use green or poison-aligned weapons.', 'Yellow shields are rare but durable. Green damage prevents the shield from regenerating during a reload window.'],
 ['Unshielded', 'Any weapon works. Prioritize raw DPS.', 'Unshielded enemies take full damage from all types. Use your highest-DPS option to clear chaff quickly.'],
];

const weaponBuildRows = [
 ['Safe all-rounder', 'Mid-range rifle (matching area shield color) + fast pistol (neutral)', 'The rifle handles shielded enemies while the pistol clears unshielded chaff and maintains mobility. Best for first-time players learning arena layouts.'],
 ['Aggressive brawler', 'Shotgun or burst weapon (color-matched) + close-range SMG', 'High burst damage for shield stripping followed by fast follow-up. Riskier because it requires closing distance, but faster against most non-boss encounters.'],
 ['Precision picker', 'Semi-auto rifle (color-matched) + long-range scope option', 'Strong at range and ammo-efficient. Weaker in close-quarters arena pressure. Best for players who want to approach combat methodically.'],
 ['Balanced hybrid', 'Primary color-matched weapon + utility tool (heal / grenade / deployable)', 'Sacrifices raw damage for survivability and utility. Recommended if you find yourself running out of resources or taking too much chip damage.'],
];

const faqs = [
 {
 question: 'What should I do first in Luna Abyss?',
 answer:
 'Set subtitles, text size, camera sensitivity, brightness, and difficulty in the first safe area, then practice sprint, jump, dash, and arena movement before focusing on achievements.',
 },
 {
 question: 'Should I chase Luna Abyss achievements on the first run?',
 answer:
 'Track obvious secrets and boss outcomes during the first playthrough, but save serious achievement cleanup until after one natural route.',
 },
 {
 question: 'How does the color shield system work?',
 answer:
 'Enemy shields have color affinities. Matching your weapon damage type or color to the shield type breaks them faster and conserves ammo. The shield color chart above shows each combination.',
 },
 {
 question: 'Is Luna Abyss more about shooting or movement?',
 answer:
 'Both movement and shooting matter. Dash timing, platforming, and bullet pattern awareness are as important as aim in most encounters.',
 },
 {
 question: 'Can I change difficulty in Luna Abyss?',
 answer:
 'Steam lists adjustable difficulty as an accessibility category. Check difficulty options before starting a long session.',
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
 <SearchAnswerPanel
 title="Quick Start: First Hour in Luna Abyss"
 answer="Set comfort settings first, learn dash timing, match weapon color to enemy shields, use arena space before chasing damage, and save serious achievement cleanup for after one natural route."
 intentRows={laBeginnerSearchIntent}
 jumpLinks={laBeginnerJumpLinks}
 />

 <BlufBox title="First-Hour Answer">
 <p>
 <strong>Do not turn the first hour into a completion run.</strong>{' '}
 Luna Abyss rewards comfort with movement, dash timing, camera
 sensitivity, and arena awareness. Learn those first, then return for
 achievements and ending cleanup.
 </p>
 </BlufBox>

 <StatusPanel items={laBeginnerStatusItems} />

 <ActionTable rows={laBeginnerActionRows} />

 <h2 id="shield-colors" className="mb-3 mt-10 text-2xl font-bold tracking-[-0.29px] text-foreground">
 Color Shield Matchup Guide
 </h2>
 <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
 Each enemy shield color reacts differently to weapon damage types.
 Matching the correct damage color to the shield strips it faster and
 conserves ammo during arena pressure.
 </p>
 <LunaInfoTable
 columns={['Shield color', 'Best weapon match', 'Notes']}
 rows={shieldColorRows}
 />

 <ArticleImage
 src={lunaAbyssImages.laShield}
 alt="Luna Abyss color shield system shown on a Scourge enemy"
 caption="Matching weapon color to shield type is the fastest way to end arena pressure. Mis-matched shields absorb damage and waste ammo."
 />

 <h2 id="weapon-builds" className="mb-3 mt-10 text-2xl font-bold tracking-[-0.29px] text-foreground">
 Weapon Build Recommendations for First-Time Players
 </h2>
 <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
 Pick one build style based on your preferred combat approach. All
 builds assume you match weapon color to the dominant shield type in
 the area.
 </p>
 <LunaInfoTable
 columns={['Build name', 'Weapon setup', 'Best for']}
 rows={weaponBuildRows}
 />

 <ArticleImage
 src={lunaAbyssImages.laCombat}
 alt="Luna Abyss combat screenshot showing weapon use in an arena"
 caption="Combat arenas reward movement, shield awareness, and weapon switching over raw aim. Use arena space to spot shield types before engaging."
 />

 <LunaProgressChecklist title="First Session Checklist" steps={lunaAbyssNextRunSteps.slice(0, 4)} compact />

 <ArticleImage
 src={lunaAbyssImages.screenshot6}
 alt="Luna Abyss first-hour exploration screenshot"
 caption="Build the habit of checking side paths after fights. Exploration and story clues matter more when you return for achievements."
 />
 </LunaAbyssArticle>
 );
}
