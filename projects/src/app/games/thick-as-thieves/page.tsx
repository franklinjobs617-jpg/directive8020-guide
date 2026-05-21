import Image from 'next/image';
import Link from 'next/link';
import { ArticleImage, VideoEmbed } from '@/components/article-media';
import { BlufBox, StatusPanel } from '@/components/guide-blocks';
import { ThickAsThievesArticle } from '@/components/thick-as-thieves-article';
import { thickAsThieves } from '@/lib/games';
import {
  createThickAsThievesMetadata,
  thickAsThievesBeginnerRows,
  thickAsThievesCampaignRows,
  thickAsThievesGscOpportunityRows,
  thickAsThievesImages,
  thickAsThievesLaunchCheckRows,
  thickAsThievesQuickFacts,
  thickAsThievesVideos,
} from '@/lib/thick-as-thieves';

const title = 'Thick As Thieves Guide Hub - Release, Co-op, Stealth & Contracts';
const description =
  'Thick As Thieves guide hub for the live PC launch: release facts, solo and online co-op, local co-op status, PS5 caution, beginner stealth, contracts, PC specs, and roadmap.';
const canonical = '/games/thick-as-thieves';

export const metadata = createThickAsThievesMetadata({
  title,
  description,
  canonical,
  image: thickAsThievesImages.hero,
});

const faqs = [
  {
    question: 'When does Thick As Thieves release?',
    answer:
      'Thick As Thieves launched on May 20, 2026 for PC storefronts. Check the live Steam or Epic Games Store button in your region before buying.',
  },
  {
    question: 'Can Thick As Thieves be played solo?',
    answer:
      'Yes. Official FAQ wording says Thick As Thieves can be played solo or with a partner in crime.',
  },
  {
    question: 'Does Thick As Thieves have local co-op or couch co-op?',
    answer:
      'Local co-op or couch co-op is not confirmed in current public materials. The safe answer is solo play or online co-op with one partner.',
  },
  {
    question: 'Is Thick As Thieves on PS5?',
    answer:
      'No PS5 launch is confirmed. Current public materials focus on PC, with console plans not announced.',
  },
  {
    question: 'How much content is in Thick As Thieves at launch?',
    answer:
      'Official messaging describes an introductory campaign with 2 dynamic replayable maps, 16 missions, at least 4 hours, and 6 pieces of gear.',
  },
  {
    question: 'Is Thick As Thieves a live service game?',
    answer:
      'No. The official FAQ says Thick As Thieves is not a live service game, although more content is intended after launch.',
  },
];

function getGuideImage(href: string) {
  if (href.includes('solo')) return thickAsThievesImages.soloCoop;
  if (href.includes('beginner')) return thickAsThievesImages.beginner;
  if (href.includes('contracts')) return thickAsThievesImages.contracts;
  if (href.includes('system')) return thickAsThievesImages.specs;
  if (href.includes('gear')) return thickAsThievesImages.gear;
  if (href.includes('roadmap')) return thickAsThievesImages.roadmap;
  if (href.includes('worth')) return thickAsThievesImages.feature;
  return thickAsThievesImages.release;
}

export default function ThickAsThievesHubPage() {
  return (
    <ThickAsThievesArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Thick As Thieves"
      heroImage={thickAsThievesImages.hero}
      heroAlt="Thick As Thieves key art"
      faqs={faqs}
    >
      <BlufBox title="Launch-Day Snapshot">
        <p>
          <strong>Thick As Thieves launched on May 20, 2026 for PC
          storefronts.</strong> For GSC queries, the key first-screen answers
          are: solo play is supported, online co-op is framed as playing with
          one partner, local/couch co-op is not confirmed, and PS5 or Xbox
          versions are not announced.
        </p>
      </BlufBox>

      <StatusPanel
        items={thickAsThievesQuickFacts.map(([label, value]) => ({
          label,
          value,
          status: 'verified' as const,
        }))}
      />

      <section className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Thick As Thieves Guide Map</h2>
        <ArticleImage
          src={thickAsThievesImages.feature}
          alt="Thick As Thieves guide hub feature image"
          caption="Start with the page that matches your launch-day question: unlock status, co-op, stealth basics, campaign scope, PC specs, gear, or roadmap expectations."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {thickAsThieves.guideLinks.map((guide) => (
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

      <section className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Search Questions This Hub Answers</h2>
        <ArticleImage
          src={thickAsThievesImages.soloCoop}
          alt="Thick As Thieves local co-op PS5 and online co-op answer image"
          caption="GSC impressions are already showing local co-op and PS5 queries, so the hub gives a direct answer instead of hiding it in a later FAQ."
        />
        <div className="overflow-hidden rounded-lg border border-border/50 bg-card/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Search intent</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Direct answer</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Where to continue</th>
              </tr>
            </thead>
            <tbody>
              {thickAsThievesGscOpportunityRows.map(([intent, answer, next]) => (
                <tr key={intent} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{intent}</td>
                  <td className="px-4 py-3 text-muted-foreground">{answer}</td>
                  <td className="px-4 py-3 text-muted-foreground">{next}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="prose-game">
        <h2>What Players Need to Know First</h2>
        <ArticleImage
          src={thickAsThievesImages.release}
          alt="Thick As Thieves release and platform image"
          caption="The launch page should stay precise: Steam date, PC focus, official price guidance, compact campaign scope, and what still needs live testing."
        />
        <p>
          Thick As Thieves is being positioned as a compact first-person stealth
          heist game, not a huge open-world RPG or live-service season platform.
          That framing matters because Reddit discussion around the launch is
          already focused on expectations: low launch price, smaller campaign
          scope, the pivot from an earlier PvPvE pitch, and whether solo/co-op
          stealth still feels substantial.
        </p>
      </section>

      <section className="prose-game">
        <h2>Launch-Day Checks</h2>
        <ArticleImage
          src={thickAsThievesImages.screenshot4}
          alt="Thick As Thieves launch-day checklist image"
          caption="Before committing a full co-op session, verify the unlock state, local price, host behavior, controller support, and Steam Cloud sync."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Check</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">What to verify</th>
            </tr>
          </thead>
          <tbody>
            {thickAsThievesLaunchCheckRows.map(([check, value]) => (
              <tr key={check} className="border-b border-border/30 last:border-0">
                <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{check}</th>
                <td className="px-4 py-3 text-muted-foreground">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Official Video References</h2>
        <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
          These official videos are embedded for visual context. The guide only
          uses them for observable tone, setting, and stealth framing, not for
          unlisted mechanics.
        </p>
        <VideoEmbed
          videoId={thickAsThievesVideos[0].id}
          title={thickAsThievesVideos[0].title}
          caption={thickAsThievesVideos[0].caption}
        />
        <div className="grid gap-4 md:grid-cols-2">
          {thickAsThievesVideos.slice(1).map((video) => (
            <VideoEmbed
              key={video.id}
              videoId={video.id}
              title={video.title}
              caption={video.caption}
            />
          ))}
        </div>
      </section>

      <section className="prose-game">
        <h2>Beginner Stealth Priorities</h2>
        <ArticleImage
          src={thickAsThievesImages.beginner}
          alt="Thick As Thieves beginner stealth priority image"
          caption="First-run success should come from information, route planning, and clean exits before loot greed."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Priority</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player habit</th>
            </tr>
          </thead>
          <tbody>
            {thickAsThievesBeginnerRows.map(([priority, habit]) => (
              <tr key={priority} className="border-b border-border/30 last:border-0">
                <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{priority}</th>
                <td className="px-4 py-3 text-muted-foreground">{habit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>Campaign Scope Without Hype</h2>
        <ArticleImage
          src={thickAsThievesImages.contracts}
          alt="Thick As Thieves campaign scope image"
          caption="The official campaign scope is compact but concrete: 2 replayable maps, 16 missions, at least 4 hours, and 6 gear pieces."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Scope item</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Current official reading</th>
            </tr>
          </thead>
          <tbody>
            {thickAsThievesCampaignRows.map(([item, value]) => (
              <tr key={item} className="border-b border-border/30 last:border-0">
                <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{item}</th>
                <td className="px-4 py-3 text-muted-foreground">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ThickAsThievesArticle>
  );
}
