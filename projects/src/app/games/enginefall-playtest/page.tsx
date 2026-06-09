import { EnginefallGuidePage } from '@/components/enginefall-article';
import { createEnginefallMetadata, enginefallPages } from '@/lib/enginefall';

const page = enginefallPages.playtest;

export const metadata = createEnginefallMetadata({
  title: page.title,
  description: page.description,
  canonical: page.canonical,
  image: page.heroImage,
});

export default function EnginefallPlaytestPage() {
  return <EnginefallGuidePage page={page} />;
}
