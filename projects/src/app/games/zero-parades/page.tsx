import Image from 'next/image';
import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { BlufBox, StatusPanel } from '@/components/guide-blocks';
import { ZeroParadesArticle } from '@/components/zero-parades-article';
import { zeroParades } from '@/lib/games';
import {
  createZeroParadesMetadata,
  zeroParadesBeginnerRows,
  zeroParadesFeatureRows,
  zeroParadesImages,
  zeroParadesLaunchCheckRows,
  zeroParadesQuickFacts,
  zeroParadesWorthItRows,
} from '@/lib/zero-parades';

const title = 'ZERO PARADES Guide - Release Date, Beginner Tips, Specs & PS5';
const description =
  'ZERO PARADES: For Dead Spies guide hub for launch day: Steam release date, PC and PS5 status, beginner tips, skills, Conditioning, Exertion, system requirements, Steam Deck, and buying advice.';
const canonical = '/games/zero-parades';

export const metadata = createZeroParadesMetadata({
  title,
  description,
  canonical,
  image: zeroParadesImages.hero,
});

const faqs = [
  {
    question: 'Is ZERO PARADES: For Dead Spies out today?',
    answer:
      'Yes. ZERO PARADES: For Dead Spies is announced for May 21, 2026 on PC, with Steam, Epic Games Store, and GOG listed by ZA/UM launch information. Check the live buy button and regional price before purchasing.',
  },
  {
    question: 'What type of game is ZERO PARADES?',
    answer:
      'ZERO PARADES is a single-player espionage RPG from ZA/UM, built around skills, dialogue, Conditioning, pressure, dice checks, and consequences.',
  },
  {
    question: 'Is ZERO PARADES on PS5?',
    answer:
      'PS5 is announced for 2026, but no exact PS5 launch date is public yet.',
  },
  {
    question: 'Is ZERO PARADES like Disco Elysium?',
    answer:
      'Steam describes it as an espionage RPG from the creators of Disco Elysium, so the useful comparison is dense writing, skill checks, internal character systems, and failure-driven consequences rather than action combat.',
  },
];

function getGuideImage(href: string) {
  if (href.includes('release')) return zeroParadesImages.screenshot1;
  if (href.includes('beginner')) return zeroParadesImages.screenshot2;
  if (href.includes('system')) return zeroParadesImages.screenshot3;
  if (href.includes('steam-deck')) return zeroParadesImages.screenshot4;
  if (href.includes('worth')) return zeroParadesImages.screenshot5;
  return zeroParadesImages.hero;
}

export default function ZeroParadesHubPage() {
  return (
    <ZeroParadesArticle
      title={title}
      description={description}
      canonical={canonical}
      label="ZERO PARADES"
      heroImage={zeroParadesImages.hero}
      heroAlt="ZERO PARADES: For Dead Spies official Steam key art"
      faqs={faqs}
    >
      <BlufBox title="Launch Answer">
        <p>
          <strong>ZERO PARADES: For Dead Spies is a May 21, 2026 PC launch.</strong>{' '}
          ZA/UM launch information lists Steam, Epic Games Store, GOG,
          $39.99, and Steam Deck Verified support. PS5 is
          announced for 2026, but no exact PS5 date is public yet.
        </p>
      </BlufBox>

      <StatusPanel
        items={zeroParadesQuickFacts.slice(0, 8).map(([label, value]) => ({
          label,
          value,
          status: 'verified' as const,
        }))}
      />

      <section className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">ZERO PARADES Guide Map</h2>
        <ArticleImage
          src={zeroParadesImages.screenshot1}
          alt="ZERO PARADES guide hub screenshot"
          caption="Start with release status if you are deciding whether to buy today, then use beginner, specs, Steam Deck, and worth-it pages based on your next question."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {zeroParades.guideLinks.map((guide) => (
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
        <h2>What Players Need to Know First</h2>
        <ArticleImage
          src={zeroParadesImages.screenshot2}
          alt="ZERO PARADES first things to know screenshot"
          caption="ZERO PARADES is a reading, skill-check, and consequence RPG. The first useful habit is to understand your operant build before forcing every roll."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Feature</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Current status</th>
            </tr>
          </thead>
          <tbody>
            {zeroParadesFeatureRows.map(([feature, status]) => (
              <tr key={feature} className="border-b border-border/30 last:border-0">
                <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{feature}</th>
                <td className="px-4 py-3 text-muted-foreground">{status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>Launch-Day Player Questions</h2>
        <ArticleImage
          src={zeroParadesImages.screenshot3}
          alt="ZERO PARADES launch-day player questions screenshot"
          caption="The most useful launch-day answers are practical: PC availability, PS5 timing, price, languages, controller support, and Steam Deck setup."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Check</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player note</th>
            </tr>
          </thead>
          <tbody>
            {zeroParadesLaunchCheckRows.map(([check, value]) => (
              <tr key={check} className="border-b border-border/30 last:border-0">
                <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{check}</th>
                <td className="px-4 py-3 text-muted-foreground">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>Spoiler-Light First-Session Priorities</h2>
        <ArticleImage
          src={zeroParadesImages.screenshot4}
          alt="ZERO PARADES beginner priorities screenshot"
          caption="Your first run should focus on reading motives, managing pressure, testing skills, and saving before high-stakes conversations."
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
            {zeroParadesBeginnerRows.slice(0, 5).map(([priority, habit]) => (
              <tr key={priority} className="border-b border-border/30 last:border-0">
                <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{priority}</th>
                <td className="px-4 py-3 text-muted-foreground">{habit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>Should You Buy It Today?</h2>
        <ArticleImage
          src={zeroParadesImages.screenshot5}
          alt="ZERO PARADES buying advice screenshot"
          caption="The strongest fit is players who want an espionage RPG with dense writing, skill checks, weird politics, failure states, and internal character systems."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Buyer type</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Recommendation</th>
            </tr>
          </thead>
          <tbody>
            {zeroParadesWorthItRows.map(([type, recommendation]) => (
              <tr key={type} className="border-b border-border/30 last:border-0">
                <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{type}</th>
                <td className="px-4 py-3 text-muted-foreground">{recommendation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ZeroParadesArticle>
  );
}
