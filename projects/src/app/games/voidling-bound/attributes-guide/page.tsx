import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { VoidlingBoundArticle } from '@/components/voidling-bound-article';
import { createVoidlingBoundMetadata, voidlingAbilitySlots, voidlingBoundImages, voidlingGuideFaqs } from '@/lib/voidling-bound';

const title = 'Voidling Bound Attributes Guide: Agility, Strength, Vitality, Perks, Modules and Natures';
const description =
 'Voidling Bound attributes guide for reading ability slots, agility, strength, vitality, perks, modules, natures, levels, and database comparisons.';
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

 <section className="prose-game">
 <h2>Read Ability Slots Before Stat Words</h2>
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
 <h2>Why This Is Not a Best-Build Page</h2>
 <ArticleImage src={voidlingBoundImages.screenshot2} alt="Voidling Bound attributes and build comparison screenshot" caption="A useful attribute guide explains comparison logic; a best-build page needs stable testing data that this snapshot does not claim to have." />
 <p>
 Best-build content is high risk when the data source is a wiki snapshot and the game is newly released. The page can truthfully explain how to read agility, strength, vitality, perks, modules, natures, levels, and ability slots. It cannot truthfully say which final build wins every situation without controlled testing. That is why this guide focuses on comparison logic and sends users back to detail pages for exact entries.
 </p>
 <p>
 The correct workflow is: identify the problem, filter the database, open the detail entry, read ability slots, then decide which attribute would solve the problem. This keeps the content useful for players without manufacturing authority the site does not have.
 </p>
 </section>

 <section className="prose-game">
 <h2>Practical Attribute Questions During Play</h2>
 <p>
 Use attributes as diagnosis. If a fight feels chaotic, the answer may be movement, range, or defense rather than raw damage. If enemies survive too long, check whether the Primary or Secondary ability is built for sustained pressure, burst, area control, or status application. If a creature feels good in easy fights but fails under pressure, vitality and defensive tools may matter more than a larger damage number.
 </p>
 <p>
 This also helps with database searching. A player who searches only “highest strength?can miss the actual problem. A player who searches by species, ability slot, and element first can then use attribute language to refine the decision. That order keeps the guide useful for both new and experienced players.
 </p>
 </section>
 </VoidlingBoundArticle>
 );
}
