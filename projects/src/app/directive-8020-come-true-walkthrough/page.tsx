import type { Metadata } from 'next';
import { EpisodeWalkthroughPage } from '@/components/episode-walkthrough-page';
import { episodeWalkthroughs } from '@/lib/episode-walkthroughs';

const data = episodeWalkthroughs['directive-8020-come-true-walkthrough'];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.description,
  alternates: { canonical: `/${data.slug}` },
};

export default function Page() {
  return <EpisodeWalkthroughPage data={data} />;
}
