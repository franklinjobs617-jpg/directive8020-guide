import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, SearchAnswerPanel, SourceCheckTable, StatusPanel } from '@/components/guide-blocks';
import { VoidlingBoundArticle } from '@/components/voidling-bound-article';
import { createVoidlingBoundMetadata, voidlingAbilitySlots, voidlingBoundImages, voidlingGuideFaqs } from '@/lib/voidling-bound';
import { vbAttributesActionRows, vbAttributesJumpLinks, vbAttributesSearchIntent, vbAttributesSourceRows, vbAttributesStatusItems } from '@/lib/voidling-bound';

const title = 'Voidling Bound Attributes Guide: Agility, Strength, Vitality, Perks & Best Builds';
const description =
 'Compare Voidling Bound attributes: agility, strength, vitality, perks, modules, and natures. Learn how to read ability slots and match stats to your playstyle.';
const canonical = '/games/voidling-bound/attributes-guide';

export const metadata = createVoidlingBoundMetadata({ title, description, canonical, image: voidlingBoundImages.screenshot1 });

export default function VoidlingBoundAttributesGuidePage() {
 return (
 <VoidlingBoundArticle title={title} description={description} canonical={canonical} label="Attributes Guide" heroImage={voidlingBoundImages.screenshot1} heroAlt="Voidling Bound attributes guide image" faqs={voidlingGuideFaqs.attributes}>
 <BlufBox title="Attribute Rule">
 <p>
 <strong>Attributes only matter after the role is clear.</strong> Agility, strength, vitality, perks, modules, natures, and level support a plan; they do not replace the need to understand species role and ability slots.
 </p>
 </BlufBox>

 <SearchAnswerPanel
 title="Voidling Bound Attributes Quick Answer"
 answer="Read role first, ability slots second, then agility, strength, vitality, perks, modules, and natures from the wiki snapshot. This guide stops at comparison logic and does not publish best-build claims."
 intentRows={vbAttributesSearchIntent}
 jumpLinks={vbAttributesJumpLinks}
 />

 <StatusPanel items={vbAttributesStatusItems} />

 <section className="prose-game">
 <h2 id="attributes-workflow">Read Ability Slots Before Stat Words</h2>
 <ArticleImage src={voidlingBoundImages.hero} alt="Voidling Bound ability slots and attributes screenshot" caption="The current database exposes ability slots such as Primary, Secondary, Defense, Movement, Ultimate, and Perk where the wiki text provides them." />
 <p>
 The current parsed database includes these ability slot labels: {voidlingAbilitySlots.join(', ')}. Those labels are the best starting point for attribute decisions because they explain what the Voidling actually does. A stat bonus is only useful if it supports a real action pattern. A faster creature that still cannot survive the fight, or a stronger creature whose ability range does not fit the player, is not automatically better.
 </p>
 <p>
 Start with the role. Then ask what attribute would make that role work better. Agility can matter for movement, repositioning, and avoiding damage. Strength can matter when a build depends on damage pressure. Vitality can matter when a species needs to stay close or survive mistakes. Perks and modules matter when they change the way a kit behaves, but their value depends on the rest of the kit.
 </p>
 </section>

 <section className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Attribute Reading Matrix</h2>
 <div className="overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Question</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">What to check</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Where to go next</th>
 </tr>
 </thead>
 <tbody>
 {[
 ['Do I die too fast?', 'Defense, movement, vitality, range, and whether the species wants close contact.', '/games/voidling-bound/beginner-guide'],
 ['Do fights take too long?', 'Primary and Secondary ability descriptions, strength support, element branch, and role fit.', '/games/voidling-bound/database'],
 ['Does this evolution fit my plan?', 'Species, rarity, element, changed ability slots, and related entries.', '/games/voidling-bound/evolution-guide'],
 ['Should I breed for this?', 'Target role, branch identity, eggs, mutagens, splicing, and confirmed source wording.', '/games/voidling-bound/breeding-guide'],
 ['Which species fits my playstyle?', 'Species summary, ability slot pattern, element branch, and movement type.', '/games/voidling-bound/beginner-guide'],
 ['How do modules change my build?', 'Module name, matching ability type, perk synergy, and element identity.', '/games/voidling-bound/database'],
 ].map(([question, check, href]) => (
 <tr key={question} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{question}</td>
 <td className="px-4 py-3 text-muted-foreground">{check}</td>
 <td className="px-4 py-3"><Link href={href} className="text-foreground hover:underline">Open guide</Link></td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </section>

 <section className="prose-game">
 <h2 id="attributes-stats">How to Use Attributes for Decisions</h2>
 <ArticleImage src={voidlingBoundImages.screenshot2} alt="Voidling Bound attributes and build comparison screenshot" caption="Compare ability slots first, then match attributes to the problem you are solving: agility for movement, strength for pressure, vitality for survival." />
 <p>
 The correct workflow is: identify the problem, filter the database, open the detail entry, read ability slots, then decide which attribute would solve the problem. Use agility for movement and repositioning, strength for damage pressure, vitality for survival and close contact. Perks, modules, natures, and level needs support a plan — they do not replace understanding species role and ability slots.
 </p>
 <p>
 This guide uses wiki-derived data for comparison, not artificial rankings. Best-build or tier-list claims would need stable testing data across patches, which a wiki snapshot cannot provide. Use the Attribute Reading Matrix above to match your question to the right guide, then use the database for entry-level decisions.
 </p>
 </section>

 <section className="prose-game">
 <h2 id="attributes-perks">Perks and Modules</h2>
 <p>
 Perks and modules matter when they change the way a kit behaves, but
 their value depends on the rest of the kit. A perk that adds a status
 effect is only useful if the entry can apply that status in real
 fights. A module that boosts a damage type is only useful if the
 Primary or Secondary ability actually scales with that type. Read
 the perk and module text against the ability list before forming a
 plan.
 </p>
 <p>
 The wiki snapshot should be the anchor for any patch-sensitive claim
 about perks, modules, or status effects. If the wiki updates a perk
 description, refresh this page against the new wording rather than
 trusting older guide copy.
 </p>
 </section>

 <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">5-Step Attribute Plan</h2>
 <ActionTable rows={vbAttributesActionRows} />

 <SourceCheckTable title="Voidling Bound Attributes Sources" rows={vbAttributesSourceRows} />
 </VoidlingBoundArticle>
 );
}
