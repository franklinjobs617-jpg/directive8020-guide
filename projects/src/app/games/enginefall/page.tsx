import { EnginefallGuidePage } from '@/components/enginefall-article';
import { createEnginefallMetadata, enginefallImages, enginefallPages } from '@/lib/enginefall';

const page = enginefallPages.hub;

export const metadata = createEnginefallMetadata({
  title: page.title,
  description: page.description,
  canonical: page.canonical,
  image: enginefallImages.hero,
});

export default function EnginefallHubPage() {
  return <EnginefallGuidePage page={page} />;
}
