import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox } from '@/components/guide-blocks';
import { VoidlingBoundArticle } from '@/components/voidling-bound-article';
import { createVoidlingBoundMetadata, voidlingBoundImages, voidlingGuideFaqs } from '@/lib/voidling-bound';

const title = 'Voidling Bound Breeding Guide: Eggs, Golden Eggs, Splicing, Mutagens and Lineage Planning';
const description =
 'Voidling Bound breeding guide explaining eggs, golden eggs, splicing, mutagens, species planning, evolution lookup, and how to avoid fake hidden formulas.';
const canonical = '/games/voidling-bound/breeding-guide';

export const metadata = createVoidlingBoundMetadata({ title, description, canonical, image: voidlingBoundImages.screenshot3 });

const rows = [
 { step: 'Define the target', doThis: 'Choose the species role and element branch before chasing rarity.', why: 'Breeding without a target creates clutter instead of progression.' },
 { step: 'Check the database', doThis: 'Filter by species, rarity, and element to see the possible destination names.', why: 'The database keeps names, branches, and ability slots in one place.' },
 { step: 'Track systems', doThis: 'Separate hatching, eggs, golden eggs, mutagens, splicing, and stations as different questions.', why: 'Mixing systems together creates fake formulas and bad guide copy.' },
 { step: 'Verify changes', doThis: 'Return to the wiki source link when exact wording or patch-sensitive behavior matters.', why: 'The wiki is the source of truth for this cluster.' },
];

export default function VoidlingBoundBreedingGuidePage() {
 return (
 <VoidlingBoundArticle title={title} description={description} canonical={canonical} label="Breeding Guide" heroImage={voidlingBoundImages.screenshot3} heroAlt="Voidling Bound breeding and progression guide image" faqs={voidlingGuideFaqs.breeding}>
 <BlufBox title="Breeding Rule">
 <p>
 <strong>Breeding is a planning system, not a magic answer machine.</strong> The wiki exposes breeding-related topics such as eggs, golden eggs, mutagens, splicing, and stations. This guide explains how to organize those systems without inventing unconfirmed formulas.
 </p>
 </BlufBox>

 <ActionTable rows={rows} />

 <section className="prose-game">
 <h2>Start Breeding With a Role Target</h2>
 <ArticleImage src={voidlingBoundImages.hero} alt="Voidling Bound breeding guide role planning image" caption="Breeding decisions should start from species role and branch target, then move into rarity and attribute support." />
 <p>
 The wrong way to approach breeding is to start with “what is the rarest result?” That question ignores the reason the creature exists in your team. A better first question is role: do you need range, defense, close-range burst, minion pressure, mobility, status pressure, or a specific species identity? Once the role is clear, rarity and element become filters rather than distractions.
 </p>
 <p>
 Voidling Bound has enough named systems that sloppy content can easily become fake. Breeding, eggs, golden eggs, mutagens, splicing, and stations are connected progression topics, but they are not the same action. A useful guide keeps them separate until the source data proves how they interact. That is why this page links back to the database instead of pretending to know every hidden formula.
 </p>
 </section>

 <section className="prose-game">
 <h2>Eggs, Golden Eggs, Mutagens, and Splicing</h2>
 <ArticleImage src={voidlingBoundImages.screenshot1} alt="Voidling Bound eggs mutagens and splicing guide screenshot" caption="Use database targets to keep breeding, mutagens, and splicing decisions tied to real species and evolution data." />
 <p>
 Treat eggs as the start of the lineage question. Treat golden eggs as a separate priority question until you confirm exactly how they behave in your current build. Treat mutagens as branch or change tools only where the wiki or in-game result supports that use. Treat splicing as its own station-driven system rather than a synonym for breeding. This separation prevents the most common guide failure: one paragraph that uses five system names as if they are interchangeable.
 </p>
 <p>
 The practical loop is simple. Pick a species target, open the{' '}
 <Link href="/games/voidling-bound/database">database</Link>
 , filter possible evolutions, then decide whether breeding or splicing is actually the next action. If the target is still vague, return to the{' '}
 <Link href="/games/voidling-bound/evolution-guide">evolution guide</Link>
 {' '}and read the branch structure first.
 </p>
 </section>
 </VoidlingBoundArticle>
 );
}
