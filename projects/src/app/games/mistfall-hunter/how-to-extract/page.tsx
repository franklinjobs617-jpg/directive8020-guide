import { MistfallHunterArticle } from '@/components/mistfall-hunter-article';
import { createMistfallHunterMetadata, mistfallHunterPages } from '@/lib/mistfall-hunter';

const page = mistfallHunterPages.extract;

export const metadata = createMistfallHunterMetadata({
 title: page.title,
 description: page.description,
 canonical: page.canonical,
 image: page.heroImage,
});

export default function MistfallHunterHowToExtractPage() {
 return <MistfallHunterArticle page={page} />;
}
