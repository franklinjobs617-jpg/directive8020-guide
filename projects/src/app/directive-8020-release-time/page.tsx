import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';
import { VideoEmbed } from '@/components/article-media';

export const metadata: Metadata = {
  title: 'Directive 8020 Release Time - Steam Unlock Time by Region',
  description:
    'Directive 8020 release time by region: Steam unlock time, US, UK, Europe, China, Japan and Australia conversion, pre-order bonus, Deluxe Edition content, and launch-day checklist.',
  alternates: {
    canonical: '/directive-8020-release-time',
  },
};

const faqs = [
  {
    question: 'What time does Directive 8020 unlock on Steam?',
    answer:
      'SteamDB lists the Directive 8020 Steam release for May 12, 2026 at 14:00 UTC. That converts to 7:00 AM PT, 10:00 AM ET, 3:00 PM BST, 4:00 PM CEST, and 10:00 PM China Standard Time on May 12.',
  },
  {
    question: 'Does Directive 8020 release on the same day for console?',
    answer:
      'The official release date is May 12, 2026 for PlayStation 5, Xbox Series X|S, and PC. Console store unlocks can follow local storefront timing, so use your PlayStation or Xbox countdown as the final source for console access.',
  },
  {
    question: 'What is included in the Directive 8020 Digital Deluxe upgrade?',
    answer:
      'The Steam page lists The Dark Pictures Outfit Pack, the Heirlooms Retrieval bonus mission, three cinematic filter packs, a digital artbook, and the exclusive soundtrack as Digital Deluxe content.',
  },
  {
    question: 'Is Directive 8020 available on PS4 or Xbox One?',
    answer:
      'No. Directive 8020 is listed for PlayStation 5, Xbox Series X|S, and PC. It is not a last-generation PS4 or Xbox One release.',
  },
];

const regions = [
  { region: 'UTC', zone: 'UTC', time: '2:00 PM', date: 'May 12' },
  { region: 'West Coast US', zone: 'PT', time: '7:00 AM', date: 'May 12' },
  { region: 'East Coast US', zone: 'ET', time: '10:00 AM', date: 'May 12' },
  { region: 'United Kingdom', zone: 'BST', time: '3:00 PM', date: 'May 12' },
  { region: 'Central Europe', zone: 'CEST', time: '4:00 PM', date: 'May 12' },
  { region: 'China', zone: 'CST', time: '10:00 PM', date: 'May 12' },
  { region: 'Japan', zone: 'JST', time: '11:00 PM', date: 'May 12' },
  { region: 'Australia East', zone: 'AEST', time: '12:00 AM', date: 'May 13' },
  { region: 'New Zealand', zone: 'NZST', time: '2:00 AM', date: 'May 13' },
];

const deluxeItems = [
  'The Dark Pictures Outfit Pack with costumes inspired by earlier anthology entries',
  'The Dark Pictures Heirlooms Retrieval bonus mission',
  'Cinematic Filter Pack with 60s, 70s, and 80s visual filters',
  'Digital artbook with concept art for Tau Ceti f, the Cassiopeia, and creature designs',
  'Exclusive soundtrack',
];

export default function ReleaseTimePage() {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'Directive 8020 Release Time - Steam Unlock Time by Region',
          description:
            'Directive 8020 release time by region, Steam unlock conversion, Deluxe Edition content, and launch-day checklist.',
          url: '/directive-8020-release-time',
          datePublished: '2026-05-10',
          dateModified: '2026-05-12',
          imageUrl: '/official-ship-interior.jpg',
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'Release Time' }]} />
        <PageHero src="/official-ship-interior.jpg" alt="Directive 8020 official ship interior screenshot" />

        <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
          Directive 8020 Release Time
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Directive 8020 launches on May 12, 2026. For PC players, the Steam
          unlock is listed for 14:00 UTC, which puts the game live during the
          morning in North America and late evening in China and Japan.
        </p>

        <VideoEmbed
          videoId="gaQkzfA14G4"
          title="Directive 8020 official launch trailer"
          caption="Use the official trailer to confirm whether Directive 8020 is the right launch-day purchase for you: sci-fi horror, branching decisions, mimic paranoia, stealth, and cinematic survival."
        />

        <div className="rounded-lg border border-d8020/35 bg-d8020/10 p-5 mb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-d8020 mb-2">
            Confirmed Steam Timing
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            SteamDB tracks the PC release countdown as <strong className="text-foreground">May 12,
            2026 at 14:00 UTC</strong>. Console storefronts can unlock at different
            local times, so this table is safest for Steam and a practical
            reference for launch-day planning.
          </p>
        </div>

        <div className="prose-game">
          <h2>Unlock Times by Region</h2>
          <p>
            Use the table below to convert the Steam release into your local
            time. If your console store shows a separate countdown, trust that
            storefront for console access.
          </p>
        </div>

        <div className="rounded-lg border border-border/50 bg-card/30 overflow-hidden my-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left text-muted-foreground font-medium">Region</th>
                <th className="px-4 py-3 text-left text-muted-foreground font-medium">Timezone</th>
                <th className="px-4 py-3 text-left text-muted-foreground font-medium">Unlock Time</th>
                <th className="px-4 py-3 text-left text-muted-foreground font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {regions.map((r) => (
                <tr key={`${r.region}-${r.zone}`} className="border-b border-border/20 last:border-0">
                  <td className="px-4 py-3 text-foreground font-medium">{r.region}</td>
                  <td className="px-4 py-3 text-muted-foreground">{r.zone}</td>
                  <td className="px-4 py-3 text-foreground">{r.time}</td>
                  <td className="px-4 py-3 text-d8020 font-medium">{r.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-game">
          <h2>Platforms and Storefronts</h2>
          <p>
            Directive 8020 is listed for <strong>PlayStation 5</strong>,{' '}
            <strong>Xbox Series X|S</strong>, and <strong>PC via Steam</strong>.
            It is a current-generation release, with no PS4 or Xbox One version
            listed on official storefronts.
          </p>

          <h2>Pre-Order and Digital Deluxe Content</h2>
          <p>
            Steam currently lists a limited-time Digital Deluxe upgrade for
            purchases. This matters for guide readers because one Deluxe item is
            a bonus mission tied to anthology collectibles, which may create
            extra collectible or achievement routes.
          </p>
          <ul>
            {deluxeItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Launch-Day Checklist</h2>
          <p>
            Before the unlock, set up the game like a story-heavy horror title:
            minimize anything that can cause interruptions, make sure your
            display and audio settings are stable, and avoid spoilers until you
            decide whether your first run is blind or optimized.
          </p>
          <ul>
            <li>Install the latest GPU driver if you are playing on PC.</li>
            <li>Keep at least 40 GB free, plus extra room for unpacking and patches.</li>
            <li>Use headphones if possible; audio cues matter in mimic and stealth scenes.</li>
            <li>Decide whether to play blind first or use Turning Points aggressively.</li>
            <li>For co-op, plan Movie Night assignments before starting the story.</li>
          </ul>
        </div>

        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
