import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, StatusPanel } from '@/components/guide-blocks';
import { LunaAbyssArticle, LunaInfoTable } from '@/components/luna-abyss-article';
import {
 createLunaAbyssMetadata,
 lunaAbyssImages,
 lunaAbyssMinimumSpecs,
 lunaAbyssPerformanceRows,
 lunaAbyssRecommendedSpecs,
} from '@/lib/luna-abyss';

const title = 'Luna Abyss System Requirements - Minimum, Recommended & FPS Setup';
const description =
 'Official Luna Abyss PC system requirements with GTX 1060 minimum, GTX 1660 recommended, 8 GB RAM, DirectX 12, 15 GB storage, and FPS setup checks.';
const canonical = '/games/luna-abyss/system-requirements';

export const metadata = createLunaAbyssMetadata({
 title,
 description,
 canonical,
 image: lunaAbyssImages.screenshot3,
});

const faqs = [
 {
 question: 'What are the Luna Abyss minimum PC requirements?',
 answer:
 'Steam lists Windows 11 64-bit, i5-8600K or Ryzen 5 2600, 8 GB RAM, GTX 1060 6GB or RX 580, DirectX 12, and 15 GB storage.',
 },
 {
 question: 'What are the Luna Abyss recommended PC requirements?',
 answer:
 'Steam lists Windows 11 64-bit, i5-10600K or Ryzen 5 3600, 8 GB RAM, GTX 1660 or RX 590, DirectX 12, and 15 GB storage.',
 },
 {
 question: 'Does Luna Abyss need an SSD?',
 answer:
 'Steam lists 15 GB storage but does not mark an SSD requirement in the visible PC spec lines. A fast internal drive is still the safer choice for smooth loading and patching.',
 },
 {
 question: 'Can Luna Abyss run on a GTX 1060?',
 answer:
 'A GTX 1060 6GB is listed as the minimum Nvidia GPU. Start with conservative settings and cap FPS if frame pacing is uneven.',
 },
];

export default function LunaAbyssSystemRequirementsPage() {
 return (
 <LunaAbyssArticle
 title={title}
 description={description}
 canonical={canonical}
 label="System Requirements"
 heroImage={lunaAbyssImages.screenshot3}
 heroAlt="Luna Abyss system requirements screenshot"
 faqs={faqs}
 >
 <BlufBox title="Specs Answer">
 <p>
 <strong>Minimum:</strong> Windows 11 64-bit, i5-8600K / Ryzen 5 2600,
 8 GB RAM, GTX 1060 6GB / RX 580, DirectX 12, and 15 GB storage.{' '}
 <strong>Recommended:</strong> i5-10600K / Ryzen 5 3600, 8 GB RAM,
 GTX 1660 / RX 590, DirectX 12, and 15 GB storage.
 </p>
 </BlufBox>

 <StatusPanel
 items={[
 { label: 'Minimum GPU', value: 'GTX 1060 6GB / Radeon RX 580.', status: 'verified' },
 { label: 'Recommended GPU', value: 'GTX 1660 / Radeon RX 590.', status: 'verified' },
 { label: 'Memory', value: '8 GB RAM for minimum and recommended tiers.', status: 'verified' },
 { label: 'Storage', value: '15 GB available space.', status: 'verified' },
 ]}
 />

 <section className="prose-game">
 <h2>Minimum Requirements</h2>
 </section>
 <LunaInfoTable columns={['Component', 'Minimum']} rows={lunaAbyssMinimumSpecs} />

 <section className="prose-game">
 <h2>Recommended Requirements</h2>
 </section>
 <LunaInfoTable columns={['Component', 'Recommended']} rows={lunaAbyssRecommendedSpecs} />

 <ActionTable rows={lunaAbyssPerformanceRows} />

 <ArticleImage
 src={lunaAbyssImages.screenshot4}
 alt="Luna Abyss PC performance screenshot"
 caption="Frame pacing matters because Luna Abyss mixes first-person platforming, dash timing, and bullet-hell combat."
 />
 </LunaAbyssArticle>
 );
}
