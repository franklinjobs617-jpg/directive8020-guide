import { EnginefallGuidePage } from '@/components/enginefall-article';
import { createEnginefallMetadata, enginefallPages } from '@/lib/enginefall';

const page = enginefallPages.platforms;

export const metadata = createEnginefallMetadata({
 title: page.title,
 description: page.description,
 canonical: page.canonical,
 image: page.heroImage,
});

export default function EnginefallSystemRequirementsPlatformsPage() {
 return <EnginefallGuidePage page={page} />;
}
