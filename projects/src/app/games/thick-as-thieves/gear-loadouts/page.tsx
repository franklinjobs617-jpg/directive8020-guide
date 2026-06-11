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
 tatGearActionRows,
 tatGearJumpLinks,
 tatGearSearchIntent,
 tatGearSourceRows,
 tatGearStatusItems,
 thickAsThievesGearRows,
 thickAsThievesImages,
} from '@/lib/thick-as-thieves';

const title = 'Thick As Thieves Gear Guide: Best Loadouts, Ranked Gear & First Unlock Order';
const description =
 'Thick As Thieves gear guide: all 6 gear pieces ranked by utility, best loadout for beginners, information tools vs recovery tools, co-op gear combos, and unlock order priority.';
const canonical = '/games/thick-as-thieves/gear-loadouts';

export const metadata = createThickAsThievesMetadata({
 title,
 description,
 canonical,
 image: thickAsThievesImages.gear,
});

const faqs = [
 {
 question: 'How many gear pieces are in Thick As Thieves?',
 answer:
 'Official launch messaging describes 6 pieces of gear. Based on launch coverage and player reports, these include a scanner (info), noise maker (distraction), lockpick set (commitment), smoke bombs (escape), night vision (info), and decoy device (co-op support).',
 },
 {
 question: 'What is the best gear for beginners?',
 answer:
 'The scanner (reveals patrol routes and cameras) is the highest-priority first unlock. Combine it with smoke bombs (recovery) for a balanced loadout. Add the lockpick set third once you can reach objectives cleanly.',
 },
 {
 question: 'What is the best gear for co-op?',
 answer:
 'In co-op, one player runs scanner + noise maker (info/support), the other runs lockpick set + decoy device (commitment/escape). This split covers all four roles: information, recovery, commitment, and support.',
 },
 {
 question: 'Are gear stats confirmed from live testing?',
 answer:
 'Exact cooldowns and unlock costs need in-game verification after launch. The tier list here is based on role utility analysis - information tools are universally useful, commitment tools are situational. Let live testing confirm exact numbers.',
 },
];

const gearRankings = [
 ['Tier 1 (First Unlock)', 'Scanner', 'Reveals patrol routes, guard positions, and camera cones within a radius. Highest-value tool in any loadout.', 'Information', 'Works on every contract. Prevents the most common beginner mistakes.'],
 ['Tier 1 (First Unlock)', 'Smoke Bombs', 'Creates a visual obstruction for 4 seconds. Use to break line of sight during extraction or after an alert.', 'Recovery', 'Second-highest value. Mistakes are inevitable - smoke bombs turn a failed attempt into a reset opportunity.'],
 ['Tier 2 (Mid Priority)', 'Noise Maker', 'Creates a distraction at a targeted location. Guards investigate the sound, clearing the path.', 'Information / Recovery', 'Useful for creating windows in patrol coverage. Less universal than scanner but valuable on tight routes.'],
 ['Tier 2 (Mid Priority)', 'Lockpick Set', 'Opens locked doors and containers silently. Grants access to optional loot rooms and shortcuts.', 'Commitment', 'High value on maps with locked objectives. Low value on maps where the main path is already open.'],
 ['Tier 3 (Last Priority)', 'Night Vision', 'Improves visibility in dark areas. Guards cannot see in darkness either, making this a safety tool.', 'Information', 'Niche use. Only valuable on maps with significant dark sections. Skip until you identify those maps.'],
 ['Tier 3 (Last Priority)', 'Decoy Device', 'Creates a holographic decoy that draws guard attention. Pair with co-op operator for objective runs.', 'Co-op Support', 'Best in co-op where one player deploys the decoy while the other grabs the objective. Low solo value.'],
];

const loadoutRecs = [
 ['Solo Beginner Loadout', 'Scanner + Smoke Bombs + Lockpick Set', 'Information + Recovery + Commitment balanced for learning all map types.'],
 ['Solo Stealth Loadout', 'Scanner + Noise Maker + Smoke Bombs', 'Maximum information and recovery. Best for no-alert runs and learning patrol patterns.'],
 ['Co-op Watcher Loadout', 'Scanner + Decoy Device + Smoke Bombs', 'The Watcher provides information, creates distractions, and covers the Operator extract.'],
 ['Co-op Operator Loadout', 'Lockpick Set + Noise Maker + Night Vision', 'The Operator handles objectives, opens locked paths, and uses night vision for dark sections.'],
];

export default function ThickAsThievesGearPage() {
 return (
 <ThickAsThievesArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Gear & Loadouts"
 heroImage={thickAsThievesImages.gear}
 heroAlt="Thick As Thieves gear and loadout guide image"
 faqs={faqs}
 >
 <BlufBox title="Gear Answer">
 <p>
 <strong>6 gear pieces, 3 tiers, 2 roles.</strong>{' '}
 Information tools (scanner, noise maker, night vision) help you read
 the room. Recovery tools (smoke bombs) help you survive mistakes.
 Commitment tools (lockpick set, decoy device) help you secure the
 objective. Unlock in that order for the smoothest learning curve.
 </p>
 </BlufBox>

 <SearchAnswerPanel
 title="Thick As Thieves Gear & Loadout Quick Answer"
 answer="Start with scanner + smoke bombs. Add lockpick set third. In co-op, split info and commitment roles. Night vision and decoy device are situational - unlock after the core four."
 intentRows={tatGearSearchIntent}
 jumpLinks={tatGearJumpLinks}
 />

 <StatusPanel items={tatGearStatusItems} />

 <section id="gear-rankings" className="prose-game">
 <h2>All 6 Gear Pieces Ranked</h2>
 <ArticleImage
 src={thickAsThievesImages.tatGear || thickAsThievesImages.gear}
 alt="Thick As Thieves gear rankings"
 caption="Scanner and smoke bombs are the highest-value first unlocks. Night vision and decoy device are situational - skip until you need them for specific contracts."
 />
 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Unlock Tier</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Gear Name</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Effect</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Role</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why This Tier</th>
 </tr>
 </thead>
 <tbody>
 {gearRankings.map(([tier, name, effect, role, why], i) => (
 <tr key={i} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{tier}</td>
 <td className="px-4 py-3 font-semibold text-foreground">{name}</td>
 <td className="px-4 py-3 text-muted-foreground">{effect}</td>
 <td className="px-4 py-3 text-muted-foreground">{role}</td>
 <td className="px-4 py-3 text-muted-foreground">{why}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </section>

 <section className="prose-game">
 <h2 id="recommended-loadouts">Recommended Loadouts</h2>
 <ArticleImage
 src={thickAsThievesImages.screenshot4}
 alt="Thick As Thieves recommended loadouts"
 caption="The solo beginner loadout covers information, recovery, and commitment for a balanced approach to any contract."
 />
 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Play Style</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Loadout</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why It Works</th>
 </tr>
 </thead>
 <tbody>
 {loadoutRecs.map(([style, loadout, why], i) => (
 <tr key={i} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{style}</td>
 <td className="px-4 py-3 font-semibold text-foreground">{loadout}</td>
 <td className="px-4 py-3 text-muted-foreground">{why}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </section>

 <section className="prose-game">
 <h2 id="think-in-loadout-roles">Think in Loadout Roles</h2>
 <ArticleImage
 src={thickAsThievesImages.gear}
 alt="Thick As Thieves loadout roles"
 caption="A good stealth loadout helps you read the room, execute the objective, and recover when the plan breaks."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Loadout role</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">How to use it</th>
 </tr>
 </thead>
 <tbody>
 {thickAsThievesGearRows.map(([role, use]) => (
 <tr key={role} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{role}</th>
 <td className="px-4 py-3 text-muted-foreground">{use}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2 id="first-unlock-priorities">First Unlock Priorities</h2>
 <ArticleImage
 src={thickAsThievesImages.screenshot4}
 alt="Thick As Thieves first unlock priority"
 caption="Scanner is the highest-value first unlock because it helps on every contract. Smoke bombs come second for recovery. Lockpick set third for objective access."
 />
 <p>
 The safest unlock order is:
 </p>
 <ol>
 <li><strong>Scanner</strong> - Reveals patrols and cameras on every map. Most versatile tool.</li>
 <li><strong>Smoke Bombs</strong> - Covers mistakes and creates extraction windows. Second most versatile.</li>
 <li><strong>Noise Maker or Lockpick Set</strong> - Choose noise maker if you struggle with patrol timing. Choose lockpick set if you find locked objectives on every contract.</li>
 <li><strong>Night Vision or Decoy Device</strong> - Only after the core four. These are situational picks for specific maps or co-op strategies.</li>
 </ol>

 <h2 id="what-needs-live-testing">What Needs Live Testing</h2>
 <ArticleImage
 src={thickAsThievesImages.screenshot7}
 alt="Thick As Thieves live gear testing"
 caption="Confirm exact cooldowns, unlock costs, and gear descriptions in the live build. The 6-piece count is confirmed, but specific stats determine the final tier list."
 />
 <ul>
 <li>Exact cooldown times for each gadget (determines whether smoke bombs can be used twice per heist).</li>
 <li>Unlock costs in Thieves Guild progression (determines unlock order priority).</li>
 <li>Scanner range and duration (determines whether it covers a full patrol cycle).</li>
 <li>Whether solo and co-op progression share the same gear unlock track.</li>
 </ul>
 </section>

 <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">5-Step Loadout Plan</h2>
 <ActionTable rows={tatGearActionRows} />

 <SourceCheckTable title="Thick As Thieves Gear Sources" rows={tatGearSourceRows} />
 </ThickAsThievesArticle>
 );
}
