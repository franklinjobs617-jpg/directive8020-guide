import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, RelatedGuides } from '@/components/guide-blocks';
import { MechanicusIIArticle } from '@/components/mechanicus-ii-article';
import {
 createMechanicusIIMetadata,
 mechanicusIIBeginnerRows,
 mechanicusIIBuildDirectionRows,
 mechanicusIIFirstHourRows,
 mechanicusIIImages,
} from '@/lib/mechanicus-ii';

const title = 'Mechanicus II Beginner Guide: Which Campaign First, Best Units, Tips & Builds 2026';
const description =
 'New to Warhammer 40,000: Mechanicus II? Learn which campaign to pick first (Adeptus Mechanicus vs Necrons), best beginner units and builds, cover tactics, Cognition and Dominion explained, and tips to avoid common early mistakes.';
const canonical = '/games/mechanicus-ii/beginner-guide';

export const metadata = createMechanicusIIMetadata({
 title,
 description,
 canonical,
 image: mechanicusIIImages.screenshot1,
});

const faqs = [
 {
 question: 'Which Mechanicus II campaign should I start first?',
 answer:
 'Start with the faction whose tactical rhythm sounds clearer to you. Adeptus Mechanicus is the safer first pick if you want a more methodical Imperial perspective; Necrons are better if you want the tomb-world campaign fantasy immediately.',
 },
 {
 question: 'Is this a full Mechanicus II walkthrough?',
 answer:
 'No. This is a spoiler-light launch guide. Full mission routes and best-unit claims need more completed campaign testing.',
 },
 {
 question: 'What should beginners focus on first?',
 answer:
 'Use cover, check terrain, watch turn order, protect specialists and named leaders, inspect objectives, and learn your faction resource before chasing advanced builds.',
 },
 {
 question: 'What is the best beginner build in Mechanicus II?',
 answer:
 'Use a safe role-based build first: protect the leader, keep one reliable ranged threat, preserve resource flow, and avoid final tier-list claims until the campaign meta is tested.',
 },
 {
 question: 'Why did my Mechanicus II mission fail so fast?',
 answer:
 'Early failures usually come from exposing a leader, missing an interactable objective, overextending out of cover, or spending resources before checking the next enemy turn.',
 },
 {
 question: 'Can I ignore the campaign layer?',
 answer:
 'No. Steam describes territory control and resource management, so campaign decisions matter beyond individual battles.',
 },
];

const firstCampaignRows = [
 ['Adeptus Mechanicus first', 'Best if you want a methodical start with tech-priest identity, Cognition decisions, and a closer link to the original Mechanicus fantasy.'],
 ['Necrons first', 'Best if the new playable perspective is your main reason to play and you want to learn Dominion pressure from the start.'],
 ['Beginner build direction', 'Protect specialists, value cover, avoid greedy damage trades, and build around the faction resource before chasing advanced unit combos.'],
 ['Steam Deck check', 'Mechanicus II is listed as unsupported on Steam Deck at launch, so handheld-first players should read the Steam Deck guide before buying or committing a campaign.'],
];

export default function MechanicusIIBeginnerGuidePage() {
 return (
 <MechanicusIIArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Beginner Guide"
 heroImage={mechanicusIIImages.screenshot1}
 heroAlt="Warhammer 40,000 Mechanicus II beginner guide battlefield image"
 faqs={faqs}
 >
 <BlufBox title="First-Session Plan">
 <p>
 <strong>Mechanicus II beginners should treat the first campaign as a
 tactics lesson, not a race to find the best build.</strong> Pick one
 faction, learn how cover and terrain affect survival, protect key
 units, and watch how territory control and resource spending affect
 the next battle. If you mainly play handheld, check the{' '}
 <Link href="/games/mechanicus-ii/steam-deck-performance" className="text-foreground hover:underline">
 Mechanicus II Steam Deck guide
 </Link>{' '}
 before treating it as a safe Deck-first campaign.
 </p>
 </BlufBox>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Beginner decision</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Recommended guidance</th>
 </tr>
 </thead>
 <tbody>
 {firstCampaignRows.map(([decision, guidance]) => (
 <tr key={decision} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{decision}</td>
 <td className="px-4 py-3 text-muted-foreground">{guidance}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>First Hour Checklist</h2>
 <ArticleImage
 src={mechanicusIIImages.screenshot4}
 alt="Warhammer 40,000 Mechanicus II first hour checklist battlefield image"
 caption="The safest early progress comes from reading objectives, protecting leaders, and treating cover as temporary."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">First-hour habit</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why it matters</th>
 </tr>
 </thead>
 <tbody>
 {mechanicusIIFirstHourRows.map(([habit, reason]) => (
 <tr key={habit} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{habit}</td>
 <td className="px-4 py-3 text-muted-foreground">{reason}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>Beginner Priorities</h2>
 <ArticleImage
 src={mechanicusIIImages.screenshot2}
 alt="Warhammer 40,000 Mechanicus II tactical beginner priorities image"
 caption="Mechanicus II rewards reading the battlefield before moving units into exposed lines of fire."
 />
 <p>
 The first mistake in a turn-based tactics game is usually impatience.
 Mechanicus II asks players to manage battles, faction capabilities,
 territory, and resources. That means a good opening run should build
 habits: check cover, read terrain, identify safe attack angles, and
 spend resources only after the campaign layer starts to make sense.
 Public descriptions and previews also point to destructible cover,
 environmental hazards, and turn-order manipulation, so a safe tile can
 become unsafe after the battlefield changes.
 </p>
 </section>

 <ActionTable
 rows={mechanicusIIBeginnerRows.map(([step, doThis]) => ({
 step,
 doThis,
 why: 'This keeps the first campaign readable while launch-week meta advice is still unproven.',
 }))}
 />

 <section className="prose-game">
 <h2>Beginner Build Direction</h2>
 <p>
 A useful beginner build is less about one perfect unit and more about
 repeatable roles. Keep the leader safe, bring enough ranged pressure
 to remove threats without overextending, and choose upgrades that
 make your faction resource easier to manage.
 </p>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Build direction</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">What it means</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">When to use it</th>
 </tr>
 </thead>
 <tbody>
 {mechanicusIIBuildDirectionRows.map(([direction, meaning, use]) => (
 <tr key={direction} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{direction}</td>
 <td className="px-4 py-3 text-muted-foreground">{meaning}</td>
 <td className="px-4 py-3 text-muted-foreground">{use}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>Cognition, Dominion, and Turn Order</h2>
 <p>
 Treat faction resources as part of survival. Adeptus Mechanicus runs
 should pay attention to Cognition decisions, while Necron runs should
 watch Dominion pressure. Do not spend these systems only for immediate
 damage if the next enemy turn will leave a key unit exposed. In early
 battles, a defensive turn that protects a specialist can be more
 valuable than a greedy attack.
 </p>

 <h2>What to Avoid in the First Hours</h2>
 <p>
 Avoid treating early tier lists as final. Launch-week tactics games
 change quickly as players discover difficulty spikes, hidden unit
 value, and faction economy pressure. Also avoid splitting attention
 between both campaigns too early. Mechanicus II is built around two
 sides of the conflict, but each side deserves enough time for its
 resource and combat rhythm to become clear.
 </p>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">If you are struggling with</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Try this first</th>
 </tr>
 </thead>
 <tbody>
 {[
 ['Units dying too fast', 'End turns in cover and stop overextending after one good attack.'],
 ['Low resources', 'Delay upgrades until you know which campaign layer bottleneck matters most.'],
 ['Bad damage trades', 'Use terrain and line of sight before spending high-value actions.'],
 ['Faction confusion', 'Stay with one campaign long enough to understand its core loop.'],
 ].map(([problem, answer]) => (
 <tr key={problem} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{problem}</td>
 <td className="px-4 py-3 text-muted-foreground">{answer}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <RelatedGuides
 guides={[
 { title: 'Mechanicus II Hub', href: '/games/mechanicus-ii', description: 'All Mechanicus II guides in one place: walkthrough, factions, units, tips, and more.' },
 { title: 'Missions Walkthrough', href: '/games/mechanicus-ii/missions-walkthrough', description: 'Mission-by-mission routing help for objectives, interactables, and campaign progression.' },
 { title: 'Factions Guide', href: '/games/mechanicus-ii/factions', description: 'Adeptus Mechanicus vs Necrons: campaign identity, battlefield strengths, and leader comparison.' },
 { title: 'Unit Tier List & Best Builds', href: '/games/mechanicus-ii/unit-tier-list', description: 'S-tier to C-tier ranking for every unit across both factions with best squad compositions.' },
 { title: 'Tips and Tricks', href: '/games/mechanicus-ii/tips-and-tricks', description: 'Practical tactics for cover, turn order, green consoles, campaign resources, and leader safety.' },
 { title: 'Leaders Guide', href: '/games/mechanicus-ii/leaders-guide', description: 'Faustinius, Nefershah, leader safety, death risk, and first-campaign decision rules.' },
 ]}
 />

 </MechanicusIIArticle>
 );
}
