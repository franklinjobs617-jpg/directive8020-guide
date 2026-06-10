import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { ParalivesArticle } from '@/components/paralives-article';
import {
 createParalivesMetadata,
 paralivesImages,
 paralivesModsRows,
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

 <section className="prose-game">
 <h2>Safe Workshop Checklist</h2>
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
 </ParalivesArticle>
 );
}
