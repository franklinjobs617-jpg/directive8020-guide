import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, SearchAnswerPanel, SourceCheckTable, StatusPanel } from '@/components/guide-blocks';
import { ParalivesArticle } from '@/components/paralives-article';
import {
 createParalivesMetadata,
 paralivesCharacterActionRows,
 paralivesCharacterJumpLinks,
 paralivesCharacterSearchIntent,
 paralivesCharacterSourceRows,
 paralivesCharacterStatusItems,
 paralivesImages,
 paralivesParamakerRows,
} from '@/lib/paralives';

const title = 'Paralives Character Creation Guide: Paramaker, Outfits & Personality';
const description =
 'Paralives character creation guide for Paramaker: height, face and body features, outfits, personality, family setup, Parafolks, and first household planning.';
const canonical = '/games/paralives/character-creation';

export const metadata = createParalivesMetadata({
 title,
 description,
 canonical,
 image: paralivesImages.paramaker,
});

const faqs = [
 {
 question: 'What is the Paralives character creator called?',
 answer:
 'The Paralives character creator is called the Paramaker.',
 },
 {
 question: 'Can you change height in Paralives?',
 answer:
 'Yes. Steam describes height adjustment as one of the Paramaker features.',
 },
 {
 question: 'Can you customize faces, bodies, and outfits?',
 answer:
 'Yes. The Paramaker lets players tweak facial and body features, design outfits, and create different looks for Parafolks.',
 },
 {
 question: 'Do personalities matter in Paralives?',
 answer:
 'Yes. Steam describes personality traits, skills, wants, needs, and emotions as part of the life-sim layer.',
 },
];

export default function ParalivesCharacterCreationPage() {
 return (
 <ParalivesArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Character Creation"
 heroImage={paralivesImages.paramaker}
 heroAlt="Paralives Paramaker character creation screenshot"
 faqs={faqs}
 >
 <BlufBox title="Paramaker Answer">
 <p>
 <strong>Paralives has an advanced character creator called the Paramaker.</strong>{' '}
 Use it to set a Parafolk&apos;s height, facial and body features,
 outfits, and personality. For a first household, build the person
 before the wardrobe: body shape, face, story role, daily outfit, then
 personality.
 </p>
 </BlufBox>

 <SearchAnswerPanel
 title="Paralives Character Creation Quick Answer"
 answer="Paramaker is the creator. Use it for height, body, face, outfit, and personality. Concept first, body second, outfit last, then plan the household role."
 intentRows={paralivesCharacterSearchIntent}
 jumpLinks={paralivesCharacterJumpLinks}
 />

 <StatusPanel items={paralivesCharacterStatusItems} />

 <section className="prose-game">
 <h2 id="character-workflow">First Parafolk Workflow</h2>
 <ArticleImage
 src={paralivesImages.paramaker}
 alt="Paralives Paramaker character creation tools screenshot"
 caption="Start with the Parafolk concept, then shape height, body, face, outfit, and personality so the household has a clear story before moving into a home."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Paramaker step</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">What to do</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why it helps</th>
 </tr>
 </thead>
 <tbody>
 {paralivesParamakerRows.map(([step, action, reason]) => (
 <tr key={step} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{step}</td>
 <td className="px-4 py-3 text-muted-foreground">{action}</td>
 <td className="px-4 py-3 text-muted-foreground">{reason}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2 id="character-personality">Character Ideas That Work Well Early</h2>
 <p>
 For a first save, make two or three Parafolks with obvious differences:
 one social character, one career-focused character, and one homebody
 who benefits from a well-designed house. That gives you reasons to
 test relationships, careers, needs, emotions, and build-mode flow
 without waiting for a huge family tree.
 </p>
 </section>

 <section className="prose-game">
 <h2 id="character-household">Household and Home Planning</h2>
 <p>
 After the Parafolks are ready, plan the household. Pick careers,
 relationships, and a home layout that supports the people in it. A
 homebody lives well in a cozy space with reading nooks. A
 career-focused character benefits from a home office. A social
 character needs space to host. This is where Paramaker choices meet
 build-mode planning.
 </p>
 </section>

 <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">5-Step Paramaker Plan</h2>
 <ActionTable rows={paralivesCharacterActionRows} />

 <SourceCheckTable title="Paralives Character Creation Sources" rows={paralivesCharacterSourceRows} />
 </ParalivesArticle>
 );
}
