import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, SearchAnswerPanel, SourceCheckTable, StatusPanel } from '@/components/guide-blocks';
import { ParalivesArticle } from '@/components/paralives-article';
import {
 createParalivesMetadata,
 paralivesImages,
 paralivesModsActionRows,
 paralivesModsJumpLinks,
 paralivesModsRows,
 paralivesModsSearchIntent,
 paralivesModsSourceRows,
 paralivesModsStatusItems,
} from '@/lib/paralives';

const title = 'Paralives Mods & CC Guide: Steam Workshop, Houses and Parafolks';
const description =
 'Paralives mods and CC guide for the in-game modding interface, Steam Workshop, community-made houses, Parafolks, custom content checks, and safe Early Access saves.';
const canonical = '/games/paralives/mods-cc';

export const metadata = createParalivesMetadata({
 title,
 description,
 canonical,
 image: paralivesImages.life,
});

const faqs = [
 {
 question: 'Does Paralives have mods?',
 answer:
 'Yes. Steam describes an in-game modding interface for editing or adding content to the game.',
 },
 {
 question: 'Does Paralives use Steam Workshop?',
 answer:
 'Yes. Steam lists community-made mods, houses, and Parafolks through Steam Workshop.',
 },
 {
 question: 'Is Paralives CC available at launch?',
 answer:
 'Custom content depends on the community and Workshop item availability, so check recent items, ratings, and compatibility notes before installing.',
 },
 {
 question: 'How should I protect my save before adding mods?',
 answer:
 'Keep a clean save, add a few items at a time, and remove outdated Workshop items after Early Access updates if they cause issues.',
 },
];

export default function ParalivesModsCcPage() {
 return (
 <ParalivesArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Mods & CC"
 heroImage={paralivesImages.life}
 heroAlt="Paralives mods and custom content life simulation screenshot"
 faqs={faqs}
 >
 <BlufBox title="Mods Answer">
 <p>
 <strong>Paralives supports modding and Steam Workshop sharing.</strong>{' '}
 Steam describes an in-game modding interface plus community-made mods,
 houses, and Parafolks through Workshop. Because the game is in Early
 Access, protect important saves before loading many items at once.
 </p>
 </BlufBox>

 <SearchAnswerPanel
 title="Paralives Mods and CC Quick Answer"
 answer="Steam lists an in-game modding interface and Steam Workshop support for mods, houses, and Parafolks. Workshop volume may take time to grow. Keep a clean save and add mods a few at a time."
 intentRows={paralivesModsSearchIntent}
 jumpLinks={paralivesModsJumpLinks}
 />

 <StatusPanel items={paralivesModsStatusItems} />

 <section className="prose-game">
 <h2 id="mods-overview">Safe Workshop Checklist</h2>
 <ArticleImage
 src={paralivesImages.life}
 alt="Paralives life simulation screenshot for mods and custom content"
 caption="Workshop content is most useful when you install slowly, read item notes, and keep a clean save before testing houses, Parafolks, and custom content."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Mod topic</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Current answer</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player note</th>
 </tr>
 </thead>
 <tbody>
 {paralivesModsRows.map(([topic, answer, note]) => (
 <tr key={topic} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{topic}</td>
 <td className="px-4 py-3 text-muted-foreground">{answer}</td>
 <td className="px-4 py-3 text-muted-foreground">{note}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2 id="mods-workshop">Steam Workshop and CC at Launch</h2>
 <p>
 Steam Workshop is the listed place to share and install
 community-made mods, houses, and Parafolks. Workshop volume may take
 time to grow after Early Access launch, so sort by recent and rating
 instead of relying on item age. Custom content (CC) is part of the
 modding and Workshop ecosystem, but the right anchor for any
 compatibility question is the item's notes and the current Early
 Access patch version.
 </p>
 </section>

 <section className="prose-game">
 <h2 id="mods-cc">Custom Content and Author Notes</h2>
 <p>
 Treat CC items like any other mod. Read the author notes for required
 versions, dependencies, and load order hints before installing on a
 save you care about. If the item is from a new creator or has few
 ratings, test on a clean save first and keep a backup of the working
 save. This keeps Workshop experiments from spreading into your main
 family tree.
 </p>
 </section>

 <section className="prose-game">
 <h2 id="mods-safety">Save Safety and Early Access Updates</h2>
 <p>
 Early Access updates can change how mods and CC load. After a major
 patch, re-test your Workshop and mod list and remove items that no
 longer load. Keep a clean save, add a few items at a time, and avoid
 loading every Workshop favorite in a single pass. A short re-test
 after each patch is the cheapest way to keep saves stable.
 </p>
 </section>

 <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">5-Step Mods Plan</h2>
 <ActionTable rows={paralivesModsActionRows} />

 <SourceCheckTable title="Paralives Mods and CC Sources" rows={paralivesModsSourceRows} />
 </ParalivesArticle>
 );
}
