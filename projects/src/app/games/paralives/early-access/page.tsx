import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox } from '@/components/guide-blocks';
import { ParalivesArticle } from '@/components/paralives-article';
import {
 createParalivesMetadata,
 paralivesEarlyAccessRows,
 paralivesImages,
} from '@/lib/paralives';

const title = 'Paralives Early Access Guide: Release Status, Roadmap & Reviews';
const description =
 'Paralives Early Access guide for release status, launch features, roadmap items, free updates, Steam reviews, pets, babies, Workshop support, Mac, and Steam Deck cautions.';
const canonical = '/games/paralives/early-access';

export const metadata = createParalivesMetadata({
 title,
 description,
 canonical,
 image: paralivesImages.hero,
});

const faqs = [
 {
 question: 'Is Paralives Early Access?',
 answer:
 'Yes. Paralives launched through Steam Early Access on May 25, 2026.',
 },
 {
 question: 'What is included in Paralives Early Access?',
 answer:
 'Steam lists home building, Paramaker character creation, open-world town play, careers, relationships, needs, emotions, children, group actions, an in-game modding interface, and Steam Workshop support.',
 },
 {
 question: 'Are pets in Paralives?',
 answer:
 'Dogs, cats, and horses are listed as features to be added during the Early Access phase, so players should not treat them as a guaranteed launch-day feature.',
 },
 {
 question: 'Are babies and children in Paralives?',
 answer:
 'Steam lists having children and growing up as key features, while family tree is listed as a feature to be added during Early Access.',
 },
 {
 question: 'Will Paralives updates be free?',
 answer:
 'Steam states that more features and content will be added during Early Access and after through exclusively free updates.',
 },
];

export default function ParalivesEarlyAccessPage() {
 return (
 <ParalivesArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Early Access"
 heroImage={paralivesImages.hero}
 heroAlt="Paralives Early Access town and household screenshot"
 faqs={faqs}
 >
 <BlufBox title="Early Access Answer">
 <p>
 <strong>Paralives is playable now, but it is still an Early Access life sim.</strong>{' '}
 Buy it if the current tools already sound worth your time: Paramaker,
 flexible building, open-world town play, relationships, children,
 careers, needs, emotions, modding, and Workshop sharing. Wait if your
 must-have features are pets, weather, seasons, vehicles, pools,
 events, story progression, family tree, gardening, fishing, or town
 editing.
 </p>
 </BlufBox>

 <section className="prose-game">
 <h2>What to Verify Before Starting a Long Save</h2>
 <ArticleImage
 src={paralivesImages.town}
 alt="Paralives Early Access open world town screenshot"
 caption="Early Access is best approached with a test household first: confirm performance, saves, building comfort, Workshop content, and the systems you care about most."
 />
 </section>

 <ActionTable rows={paralivesEarlyAccessRows} />

 <section className="prose-game">
 <h2>Best Early Access Fit</h2>
 <p>
 Paralives is a good fit if you want to experiment with a new life sim
 while it grows and you enjoy building, character creation, and sharing
 community content. It is a weaker fit if you want a decade-sized
 content library, established mod compatibility, or fully settled
 simulation balance before you commit to a household.
 </p>
 </section>
 </ParalivesArticle>
 );
}
