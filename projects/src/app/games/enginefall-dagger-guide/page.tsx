import { EnginefallGuidePage } from '@/components/enginefall-article';
import { createEnginefallMetadata, enginefallPages } from '@/lib/enginefall';

const page = enginefallPages.dagger;

export const metadata = createEnginefallMetadata({
  title: page.title,
  description: page.description,
  canonical: page.canonical,
  image: page.heroImage,
});

export default function EnginefallDaggerGuidePage() {
  return <EnginefallGuidePage page={page} />;
}
