import { MistfallHunterArticle } from '@/components/mistfall-hunter-article';
import { createMistfallHunterMetadata, mistfallHunterPages } from '@/lib/mistfall-hunter';

const page = mistfallHunterPages.classes;

export const metadata = createMistfallHunterMetadata({
 title: page.title,
 description: page.description,
 canonical: page.canonical,
 image: page.heroImage,
});

export default function MistfallHunterBestClassesPage() {
 return <MistfallHunterArticle page={page} />;
}
