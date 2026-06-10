import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { BlufBox, SearchAnswerPanel } from '@/components/guide-blocks';
import { MechanicusIIArticle } from '@/components/mechanicus-ii-article';
import {
 createMechanicusIIMetadata,
 mechanicusIIBuildDirectionRows,
 mechanicusIIImages,
 mechanicusIIUnitRoleRows,
} from '@/lib/mechanicus-ii';

const title = 'Mechanicus II Best Units & Builds: Roles, Factions and Safe First Builds';
const description =
 'Warhammer 40,000: Mechanicus II best units and builds guide with role-based unit value, safe first builds, faction resources, leader protection, and launch-window cautions.';
const canonical = '/games/mechanicus-ii/best-units-builds';

export const metadata = createMechanicusIIMetadata({
 title,
 description,
 canonical,
 image: mechanicusIIImages.screenshot5,
});

const faqs = [
 {
 question: 'What are the best units in Mechanicus II?',
 answer:
 'Final best-unit claims are not safe yet. Judge units by leader safety, objective interaction, resource flow, durability, and repeatable value across missions.',
 },
 {
 question: 'What is the safest first build in Mechanicus II?',
 answer:
 'Use leader protection, reliable cover play, one consistent ranged threat, and faction resource stability before chasing aggressive damage builds.',
 },
 {
 question: 'Are Adeptus Mechanicus or Necron builds better?',
 answer:
 'Neither side should be called universally better yet. Pick builds around the faction resource and mission problems you are actually facing.',
 },
 {
 question: 'Should I copy a tier list?',
 answer:
 'Only if it matches your patch, campaign side, difficulty, and mission context. Role-based unit value is safer early than a fixed tier list.',
 },
];

const searchIntentRows = [
 {
 query: 'Mechanicus II best units',
 answer: 'Judge units by role value: leader protection, objective access, ranged pressure, resource support, and survivability.',
 href: '#unit-roles',
 label: 'Units',
 },
 {
 query: 'Mechanicus II builds',
 answer: 'Start with a safe build that protects leaders, uses cover, and keeps faction resources stable.',
 href: '#build-directions',
 label: 'Builds',
 },
 {
 query: 'Adeptus Mechanicus build',
 answer: 'Build around Cognition stability, specialist protection, and controlled trades until late-game data is clearer.',
 href: '#faction-builds',
 label: 'Faction',
 },
 {
 query: 'Necron build',
 answer: 'Build around Dominion pressure, durable bodies, objective timing, and mission control rather than raw damage alone.',
 href: '#faction-builds',
 label: 'Faction',
 },
];

const jumpLinks = [
 { href: '#unit-roles', label: 'Unit roles' },
 { href: '#build-directions', label: 'Builds' },
 { href: '#faction-builds', label: 'Faction builds' },
 { href: '#mistakes', label: 'Mistakes' },
 { href: '/games/mechanicus-ii/factions', label: 'Factions' },
 { href: '/games/mechanicus-ii/tips-and-tricks', label: 'Tips' },
];

const factionBuildRows = [
 ['Adeptus Mechanicus', 'Cognition stability, specialist safety, reliable ranged pressure, objective control.', 'Best first if you want a methodical tech-priest campaign rhythm.'],
 ['Necrons', 'Dominion pressure, durable bodies, objective timing, and controlled aggression.', 'Best first if the sequel appeal is playing the other side of the conflict.'],
 ['Mixed advice to avoid', 'A build copied without patch, difficulty, campaign, or mission context.', 'Too easy to follow a strong-sounding route that does not match your save.'],
];

const mistakeRows = [
 ['Chasing damage first', 'A high-damage unit is weak if it exposes the leader or loses objective timing.'],
 ['Ignoring faction resource flow', 'Cognition and Dominion pressure should shape upgrades and ability use.'],
 ['Treating cover as permanent', 'Battlefield objects and hazards can change safe tiles.'],
 ['Copying an endgame list early', 'A list made for another patch, faction, or difficulty may mislead your first campaign.'],
];

export default function MechanicusIIBestUnitsBuildsPage() {
 return (
 <MechanicusIIArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Best Units & Builds"
 heroImage={mechanicusIIImages.screenshot5}
 heroAlt="Warhammer 40,000 Mechanicus II unit customization and build planning image"
 faqs={faqs}
 showSources={false}
 >
 <SearchAnswerPanel
 title="What are the best units and builds in Mechanicus II?"
 answer="Use role-based builds first: protect leaders, hold cover, keep faction resources stable, bring one reliable ranged threat, and choose units that can solve objectives. Final tier-list claims should wait for patch, difficulty, and campaign context."
 intentRows={searchIntentRows}
 jumpLinks={jumpLinks}
 />

 <BlufBox title="Build Rule">
 <p>
 <strong>The best early build is the one that survives mistakes.</strong>{' '}
 Damage matters, but leader safety, objective access, cover discipline,
 and faction resource flow decide whether a mission stays recoverable.
 </p>
 </BlufBox>

 <section className="prose-game">
 <h2 id="unit-roles">Best Unit Roles to Prioritize</h2>
 <ArticleImage
 src={mechanicusIIImages.screenshot3}
 alt="Warhammer 40,000 Mechanicus II unit role and tactical build image"
 caption="Evaluate units by battlefield job before treating any list as final: leader anchor, frontline, ranged specialist, runner, or resource enabler."
 />
 </section>

 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Unit role</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">What it solves</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">How to judge it</th>
 </tr>
 </thead>
 <tbody>
 {mechanicusIIUnitRoleRows.map(([role, solves, judge]) => (
 <tr key={role} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{role}</td>
 <td className="px-4 py-3 text-muted-foreground">{solves}</td>
 <td className="px-4 py-3 text-muted-foreground">{judge}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2 id="build-directions">Safe Build Directions</h2>
 <p>
 A first campaign build should reduce resets. Once you understand turn
 order, objectives, and enemy pressure, you can shift into more
 aggressive or specialized routes.
 </p>
 </section>

 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Build direction</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">What it means</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">When it helps</th>
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
 <h2 id="faction-builds">Faction Build Starting Points</h2>
 <ArticleImage
 src={mechanicusIIImages.screenshot2}
 alt="Warhammer 40,000 Mechanicus II Adeptus Mechanicus and Necron build planning image"
 caption="Faction builds should reflect resource pressure and campaign side, not a universal tier list."
 />
 </section>

 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Campaign side</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Build focus</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">First-run fit</th>
 </tr>
 </thead>
 <tbody>
 {factionBuildRows.map(([side, focus, fit]) => (
 <tr key={side} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{side}</td>
 <td className="px-4 py-3 text-muted-foreground">{focus}</td>
 <td className="px-4 py-3 text-muted-foreground">{fit}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2 id="mistakes">Build Mistakes to Avoid</h2>
 <ul>
 {mistakeRows.map(([mistake, reason]) => (
 <li key={mistake}>
 <strong>{mistake}:</strong> {reason}
 </li>
 ))}
 </ul>
 <p>
 If you are still choosing a campaign side, read the{' '}
 <Link href="/games/mechanicus-ii/factions">factions guide</Link>.
 If a mission itself is blocking progress, use the{' '}
 <Link href="/games/mechanicus-ii/missions-walkthrough">missions walkthrough</Link>.
 </p>
 </section>
 </MechanicusIIArticle>
 );
}
