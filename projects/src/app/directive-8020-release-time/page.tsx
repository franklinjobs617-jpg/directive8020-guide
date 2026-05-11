import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';

export const metadata: Metadata = {
  title: 'Directive 8020 Release Time - Unlock Time by Region & Pre-Load',
  description:
    'When does Directive 8020 unlock in your region? Exact release times for US, UK, Europe, Australia, Japan, and more. Pre-load details and edition comparison.',
  alternates: {
    canonical: '/directive-8020-release-time',
  },
};

const faqs = [
  {
    question: 'What time does Directive 8020 unlock on Steam?',
    answer:
      'Based on typical Steam release patterns for major titles, Directive 8020 is expected to unlock at 9:00 AM PT / 12:00 PM ET on May 12, 2026. However, the exact time may vary — check the Steam countdown on the store page for the definitive unlock time.',
  },
  {
    question: 'Can I pre-load Directive 8020?',
    answer:
      'Pre-load availability has not been officially confirmed yet. Major Steam releases typically enable pre-loading 24-48 hours before launch. We will update this page as soon as pre-load information is available.',
  },
  {
    question: 'What is the Directive 8020 Deluxe Edition?',
    answer:
      'The Deluxe Edition includes additional content beyond the base game. Currently, pre-ordering any edition grants a free upgrade to the Deluxe Edition for a limited time. Exact Deluxe Edition contents will be confirmed closer to launch.',
  },
  {
    question: 'Is there early access for Directive 8020?',
    answer:
      'No early access period has been announced. All players will gain access on the official release date of May 12, 2026, regardless of which edition they purchase.',
  },
];

const regions = [
  { region: 'West Coast US', zone: 'PT', time: '9:00 AM', date: 'May 12' },
  { region: 'East Coast US', zone: 'ET', time: '12:00 PM', date: 'May 12' },
  { region: 'United Kingdom', zone: 'GMT', time: '5:00 PM', date: 'May 12' },
  { region: 'Central Europe', zone: 'CET', time: '6:00 PM', date: 'May 12' },
  { region: 'Eastern Europe', zone: 'EET', time: '7:00 PM', date: 'May 12' },
  { region: 'Japan', zone: 'JST', time: '2:00 AM', date: 'May 13' },
  { region: 'Australia (AEST)', zone: 'AEST', time: '4:00 AM', date: 'May 13' },
  { region: 'New Zealand', zone: 'NZST', time: '6:00 AM', date: 'May 13' },
];

export default function ReleaseTimePage() {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'Directive 8020 Release Time - Unlock Time by Region & Pre-Load',
          description:
            'When does Directive 8020 unlock in your region? Exact release times, pre-load details, and edition comparison.',
          url: '/directive-8020-release-time',
          datePublished: '2026-05-10',
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'Release Time' }]} />
        <PageHero src="/release-time-card.jpg" alt="Directive 8020 release time and unlock schedule" />

        <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
          Directive 8020 Release Time
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          When does Directive 8020 unlock in your timezone? Here are the
          expected release times for every region, plus pre-load info and
          edition details.
        </p>

        <div className="prose-game">
          <h2>Official Release Date</h2>
          <p>
            Directive 8020 launches on <strong>May 12, 2026</strong> on
            PlayStation 5, Xbox Series X|S, and PC (Steam). The game will be
            available in both physical and digital editions.
          </p>

          <h2>Unlock Times by Region</h2>
          <p>
            The exact unlock times are based on typical Steam release patterns
            for major Bandai Namco titles. Console players on PlayStation and
            Xbox should expect similar timing. Check the Steam store page
            countdown for the definitive time.
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
                <tr key={r.zone} className="border-b border-border/20 last:border-0">
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
          <h2>Pre-Load Information</h2>
          <p>
            Pre-load availability has not yet been officially confirmed.
            Typically, Steam enables pre-loading 24-48 hours before launch for
            pre-ordered titles. When pre-load becomes available, you can start
            downloading the game files so you&apos;re ready to play the moment it
            unlocks.
          </p>
          <p>
            To prepare for launch day:
          </p>
          <ul>
            <li>Add the game to your Steam wishlist and pre-order if desired</li>
            <li>Ensure you have enough free storage space (estimated 50-70 GB)</li>
            <li>Update your GPU drivers to the latest version</li>
            <li>Clear your download cache in Steam settings for faster pre-load</li>
          </ul>

          <h2>Editions &amp; Pricing</h2>
          <p>
            Directive 8020 is available in the following editions:
          </p>
          <ul>
            <li>
              <strong>Standard Edition:</strong> The base game. Currently
              available for pre-order with a free Deluxe Edition upgrade
              (limited time offer).
            </li>
            <li>
              <strong>Deluxe Edition:</strong> Includes the base game plus
              additional bonus content. Pre-ordering the Standard Edition
              during the promotional period grants this upgrade for free.
            </li>
          </ul>
          <p>
            Pre-order on Steam or your platform&apos;s digital store to secure
            the free Deluxe Edition upgrade while the promotion lasts.
          </p>
        </div>

        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
