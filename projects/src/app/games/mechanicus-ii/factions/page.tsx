import { ArticleImage } from '@/components/article-media';
import {
  ActionTable,
  BlufBox,
  SearchAnswerPanel,
  SourceCheckTable,
  StatusPanel,
} from '@/components/guide-blocks';
import { MechanicusIIArticle } from '@/components/mechanicus-ii-article';
import {
  createMechanicusIIMetadata,
  mechanicusIIBuildDirectionRows,
  mechanicusIIFactionComparisonRows,
  mechanicusIIFactionRows,
  mechanicusIIImages,
  mechanicusIIUnitRoleRows,
  m2FactionsActionRows,
  m2FactionsJumpLinks,
  m2FactionsSearchIntent,
  m2FactionsSourceRows,
  m2FactionsStatusItems,
} from '@/lib/mechanicus-ii';

const title = 'Mechanicus 2 Factions Guide: Necron Units, Best Leaders & Adeptus Campaign';
const description =
 'Mechanicus 2 factions guide: best Necron units, Necron leaders ranking, Adeptus Mechanicus vs Necrons campaign comparison, builds, and first-campaign pick for new players.';
const canonical = '/games/mechanicus-ii/factions';

export const metadata = createMechanicusIIMetadata({
 title,
 description,
 canonical,
 image: mechanicusIIImages.screenshot2,
});

const faqs = [
 {
 question: 'What factions are playable in Mechanicus II?',
 answer:
 'Steam describes two distinct campaigns: the Adeptus Mechanicus and the Necrons.',
 },
 {
 question: 'Who leads the Adeptus Mechanicus campaign?',
 answer:
 'Steam names Magos Dominus Faustinius as the Adeptus Mechanicus campaign commander.',
 },
 {
 question: 'Who leads the Necron campaign?',
 answer:
 'Steam names Vargard Nefershah as the Necron campaign commander.',
 },
 {
 question: 'Which faction is best in Mechanicus II?',
 answer:
 'Adeptus Mechanicus is the safest first pick for players who played Mechanicus 1 — their Cognition resource system and tech-priest gameplay feel familiar, and Magos Dominus Faustinius has clearer starting support. Necrons are the stronger pick if you want the new experience: Dominion pressure rewards aggressive play and Reanimation Protocols provide recovery insurance. Pick Adeptus Mechanicus for a methodical learning curve; pick Necrons for forward-pressure gameplay.',
 },
 {
 question: 'Which Mechanicus II faction should I play first?',
 answer:
 'Choose Adeptus Mechanicus first if you want the more familiar tech-priest campaign; choose Necrons first if the new playable perspective is the main appeal.',
 },
 {
 question: 'What are the best units and builds in Mechanicus II?',
 answer:
 'Necron Warriors and Skitarii Rangers are the safest first picks — they provide reliable damage and keep your faction resource (Dominion or Cognition) flowing. Add Canoptek Wraiths as mobile bodyguards for your leader. For a first build, focus on leader protection, cover discipline, one reliable ranged threat, and resource stability. Avoid replacing all core infantry with flashy specialists until you understand mission pacing.',
 },
 {
 question: 'Are the Leagues of Votann playable in Mechanicus II?',
 answer:
 'Current store descriptions focus playable campaigns on Adeptus Mechanicus and Necrons. Preview coverage says the Leagues of Votann appear in the story, but not as a playable third campaign faction.',
 },
 {
 question: 'What are the best Necron units in Mechanicus II?',
 answer:
 'Necron Warriors are the most reliable backbone — Dominion-stable infantry that benefit most from Reanimation Protocols. Canoptek Wraiths excel as mobile screeners that protect your leaders without heavy Dominion investment. Immortals are the step up when you need heavier ranged output that can still hold ground. Build around one clear attack axis per mission rather than spreading Dominion thin.',
 },
 {
 question: 'Who are the best Necron leaders in Mechanicus II?',
 answer:
 'Vargard Nefershah is your primary campaign anchor — his loss means campaign failure, so protection is always first. For secondary lords, prioritize passive Dominion generation over frontline damage output; a lord that builds economy reliably is more valuable than a damage dealer across a full campaign.',
 },];

export default function MechanicusIIFactionsPage() {
 return (
 <MechanicusIIArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Factions"
 heroImage={mechanicusIIImages.screenshot2}
 heroAlt="Warhammer 40,000 Mechanicus II factions image"
 faqs={faqs}
 >
 <BlufBox title="Faction Answer">
 <p>
 <strong>Mechanicus 2 lets players experience both the Adeptus
 Mechanicus and the Necrons through distinct campaigns.</strong> That
 is the central faction answer. The better first question is not
 which side wins a tier list, but which resource loop you want to
 learn first: Cognition for Adeptus Mechanicus or Dominion pressure
 for Necrons.
 </p>
 </BlufBox>

 <SearchAnswerPanel
 title="Mechanicus II Factions Quick Answer"
 answer="Two playable campaigns: Adeptus Mechanicus led by Magos Dominus Faustinius and Necrons led by Vargard Nefershah. The Leagues of Votann appear in the story, not as a third playable campaign. Pick your first side by resource identity, leader style, and how much new rules pressure you want."
 intentRows={m2FactionsSearchIntent}
 jumpLinks={m2FactionsJumpLinks}
 />

 <StatusPanel items={m2FactionsStatusItems} />

 <section id="faction-anchor" className="prose-game">
 <h2>Adeptus Mechanicus vs Necrons</h2>
 <ArticleImage
 src={mechanicusIIImages.screenshot1}
 alt="Warhammer 40,000 Mechanicus II Adeptus Mechanicus and Necrons image"
 caption="The faction choice changes campaign perspective and battlefield priorities, not just unit visuals."
 />
 <p>
 The faction question matters because Mechanicus II is built around
 two sides of the conflict. The Adeptus Mechanicus campaign follows
 Magos Dominus Faustinius, while the Necron campaign follows Vargard
 Nefershah. For players, this means the first decision is about
 perspective, tactical identity, and how much they want to learn at
 once. Adeptus Mechanicus players should expect Cognition decisions,
 while Necron players should expect Dominion decisions.
 </p>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Faction choice</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best current reading</th>
 </tr>
 </thead>
 <tbody>
 {mechanicusIIFactionRows.map(([choice, answer]) => (
 <tr key={choice} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{choice}</td>
 <td className="px-4 py-3 text-muted-foreground">{answer}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>Faction Comparison for New Players</h2>
 <p>
 The practical choice is not only lore. It changes which resource you
 learn first, which leader you protect, and whether you want the sequel
 to feel closer to the original Mechanicus or to start from the new
 Necron perspective.
 </p>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Faction or force</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">What it means</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best use</th>
 </tr>
 </thead>
 <tbody>
 {mechanicusIIFactionComparisonRows.map(([force, meaning, use]) => (
 <tr key={force} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{force}</td>
 <td className="px-4 py-3 text-muted-foreground">{meaning}</td>
 <td className="px-4 py-3 text-muted-foreground">{use}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>Units and Build Guidance</h2>
 <ArticleImage
 src={mechanicusIIImages.screenshot3}
 alt="Warhammer 40,000 Mechanicus II units and builds image"
 caption="Unit value should be judged by battlefield role, faction resource pressure, and campaign consistency, not only damage numbers."
 />
 <p>
 Best-unit questions are useful only when they include the job a unit
 needs to do. Use the table below to judge units by role, resource
 stability, leader protection, objective pressure, and whether the
 same value repeats across missions.
 </p>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
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

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
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
 <h2 id="necron-units-leaders">Necron Units and Best Leaders</h2>
 <p>
  Players searching for Necron unit builds and leader rankings land on this page most often, so this section addresses those directly.
 </p>
 <p>
  <strong>Best Necron leaders:</strong> Vargard Nefershah (the campaign commander) is your primary anchor — his loss triggers a campaign failure state, so protecting him is always the first priority. Evaluate secondary lords by their passive Dominion generation rather than frontline damage output; Dominion pressure is what makes the Necron economy work, and a lord that generates it without needing kills is more reliable across a full campaign than one who only contributes when winning.
 </p>
 <p>
  <strong>Best Necron units by role:</strong> Necron Warriors are the backbone — the most Dominion-stable infantry and the primary beneficiary of Reanimation Protocols. Canoptek Wraiths are the best mobile screeners: they keep your leaders alive, apply flank pressure, and do not draw Dominion investment the way heavier units do. Immortals step up from Warriors when you need heavier ranged output that can still hold a position. Avoid stacking Cryptek support units early — they amplify an already-working force, not a struggling one.
 </p>
 <p>
  <strong>Common Necron mistake:</strong> Spreading Dominion across multiple aggressive units simultaneously. Pick one axis of attack per mission — Warriors hold, Wraiths screen, one Immortal or lord pushes the objective — and funnel Dominion there rather than diluting it.
 </p>
 </section>

 <section className="prose-game">
 <h2 id="votann-status">Are the Leagues of Votann Playable?</h2>
 <p>
 The safest current answer is no: the confirmed playable campaign
 structure is Adeptus Mechanicus and Necrons. Public preview coverage
 says the Leagues of Votann appear in the story, which makes them
 important for lore and mission context, but current store descriptions
 do not present them as a third playable campaign faction.
 </p>

 <h2>How to Choose a First Campaign</h2>
 <p>
 Choose Adeptus Mechanicus first if you want the sequel to feel closer
 to the tech-priest identity that made the first Mechanicus stand out.
 Choose Necrons first if the new playable perspective is the reason
 you are here. Either way, stay with the campaign long enough to learn
 its economy before judging final difficulty or unit strength.
 </p>
 </section>

 <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">5-Step Faction Decision</h2>
 <ActionTable rows={m2FactionsActionRows} />

 <SourceCheckTable title="Mechanicus II Faction Sources" rows={m2FactionsSourceRows} />
 </MechanicusIIArticle>
 );
}
