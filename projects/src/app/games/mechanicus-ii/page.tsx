import Image from 'next/image';
import Link from 'next/link';
import { ArticleImage, VideoEmbed } from '@/components/article-media';
import { BlufBox, StatusPanel } from '@/components/guide-blocks';
import { MechanicusIIArticle } from '@/components/mechanicus-ii-article';
import { mechanicusII } from '@/lib/games';
import {
  createMechanicusIIMetadata,
  mechanicusIIFeatureRows,
  mechanicusIIImages,
  mechanicusIIQuickFacts,
  mechanicusIIVideos,
} from '@/lib/mechanicus-ii';

const title = 'Warhammer 40,000: Mechanicus II Guide Hub - Release, Factions & Beginner Tips';
const description =
  'Warhammer 40,000: Mechanicus II guide hub for the May 21 launch: release date, PS5, Xbox, Steam, Steam Deck, Adeptus Mechanicus, Necrons, beginner tactics, PC specs, and buying advice.';
const canonical = '/games/mechanicus-ii';

export const metadata = createMechanicusIIMetadata({
  title,
  description,
  canonical,
  image: mechanicusIIImages.hero,
});

const faqs = [
  {
    question: 'What is Warhammer 40,000: Mechanicus II?',
    answer:
      'Warhammer 40,000: Mechanicus II is a turn-based tactics and strategy sequel from Bulwark Studios and Kasedo Games with Adeptus Mechanicus and Necron campaigns.',
  },
  {
    question: 'When did Warhammer 40,000: Mechanicus II release?',
    answer:
      'Warhammer 40,000: Mechanicus II released on May 21, 2026.',
  },
  {
    question: 'What platforms is Mechanicus II on?',
    answer:
      'The current confirmed live platform set is PC via Steam, PlayStation 5, and Xbox Series X|S. Epic has a product page, but it shows Coming Soon at the latest check.',
  },
  {
    question: 'Can you play as Necrons in Mechanicus II?',
    answer:
      'Yes. Steam describes distinct campaigns for both the Adeptus Mechanicus and the Necrons.',
  },
  {
    question: 'Is Mechanicus II multiplayer?',
    answer:
      'Steam currently lists single-player features, not multiplayer or co-op.',
  },
  {
    question: 'Is Mechanicus II supported on Steam Deck?',
    answer:
      'No. The official Steam FAQ and Steam Deck compatibility data list Mechanicus II as unsupported on Steam Deck at launch.',
  },
];

function getGuideImage(href: string) {
  if (href.includes('beginner')) return mechanicusIIImages.screenshot1;
  if (href.includes('factions')) return mechanicusIIImages.screenshot2;
  if (href.includes('system')) return mechanicusIIImages.screenshot3;
  if (href.includes('steam-deck')) return mechanicusIIImages.screenshot3;
  if (href.includes('worth')) return mechanicusIIImages.screenshot4;
  return mechanicusIIImages.capsule;
}

export default function MechanicusIIHubPage() {
  return (
    <MechanicusIIArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Mechanicus II"
      heroImage={mechanicusIIImages.hero}
      heroAlt="Warhammer 40,000 Mechanicus II Steam key art"
      faqs={faqs}
    >
      <BlufBox title="Launch Snapshot">
        <p>
          <strong>Warhammer 40,000: Mechanicus II released on May 21, 2026
          for PC, PS5, and Xbox Series X|S.</strong> It is a single-player
          turn-based tactics sequel built around two campaign perspectives:
          the Adeptus Mechanicus and the Necrons. Steam currently shows Mixed
          user reviews, a 10% introductory offer ending May 28, 2026, 34
          achievements, Steam Cloud, and Family Sharing. Steam Deck is listed as
          unsupported at launch.
        </p>
      </BlufBox>

      <StatusPanel
        items={mechanicusIIQuickFacts.map(([label, value]) => ({
          label,
          value,
          status: 'verified' as const,
        }))}
      />

      <section className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Mechanicus II Guide Map</h2>
        <ArticleImage
          src={mechanicusIIImages.capsule}
          alt="Warhammer 40,000 Mechanicus II guide hub image"
          caption="Start with the guide that matches your problem: launch status, first campaign, faction choice, PC requirements, or buying risk."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {mechanicusII.guideLinks.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group overflow-hidden rounded-lg border border-border/50 bg-card/30 transition-colors hover:border-emerald-400/40"
            >
              <div className="relative aspect-video">
                <Image
                  src={getGuideImage(guide.href)}
                  alt={guide.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/25 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-foreground group-hover:text-emerald-300">
                  {guide.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {guide.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="prose-game">
        <h2>What Players Need First</h2>
        <p>
          Mechanicus II is not a generic Warhammer 40,000 page. It is a
          specific launch-week tactics game with specific user questions:
          which platform can play it, whether Necrons are playable, what PC
          specs are required, whether Steam Deck is a safe option, whether the
          Mixed review signal should change a buying decision, and which
          campaign is a better first fit.
        </p>
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">System</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Current public answer</th>
            </tr>
          </thead>
          <tbody>
            {mechanicusIIFeatureRows.map(([system, answer]) => (
              <tr key={system} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{system}</td>
                <td className="px-4 py-3 text-muted-foreground">{answer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Official Video Reference</h2>
        <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
          Use the official trailer for tone, faction framing, and release
          context. Do not treat trailer footage as proof of final best units,
          campaign balance, or mission routes.
        </p>
        <VideoEmbed
          videoId={mechanicusIIVideos[0].id}
          title={mechanicusIIVideos[0].title}
          caption={mechanicusIIVideos[0].caption}
        />
      </section>
    </MechanicusIIArticle>
  );
}
