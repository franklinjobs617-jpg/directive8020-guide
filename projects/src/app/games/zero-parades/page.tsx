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

const title = 'ZERO PARADES Guide: Walkthrough, Best Build, GOG, PS5 & Specs';
const description =
  'ZERO PARADES guide for walkthrough, best build, GOG, PS5 status, controller support, system requirements, game length, time limits, and beginner tips.';
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
      'Yes. ZERO PARADES: For Dead Spies launched on May 21, 2026 on PC, with Steam, Epic Games Store, and GOG available for the PC release. Check the live buy button and regional price before purchasing.',
  },
  {
    question: 'Is ZERO PARADES on GOG?',
    answer:
      'Yes. ZERO PARADES is available on GOG, Steam, and Epic Games Store for PC. GOG offers a DRM-free option.',
  },
  {
    question: 'Does ZERO PARADES support controllers?',
    answer:
      'Steam lists partial controller support. Basic movement and dialogue work, but some UI elements may require mouse precision. See the controller support guide for a full breakdown of what works and what does not.',
  },
  {
    question: 'What are the system requirements for ZERO PARADES?',
    answer:
      'Minimum: Windows 10, i5 6500, 16 GB RAM, GTX 1060 6GB. Recommended: Windows 11, i5-10400, 16 GB RAM, RTX 2070. DirectX 11, 64-bit required.',
  },
  {
    question: 'Is ZERO PARADES on PS5?',
    answer:
      'PS5 is announced for 2026, but no exact PS5 launch date is public yet. Treat the PS5 version as confirmed for 2026 without a locked release window.',
  },
  {
    question: 'How long is ZERO PARADES?',
    answer:
      'A single playthrough is estimated at 20-30 hours depending on dialogue depth and exploration. Completionist runs with multiple endings and skill-check reroutes can take 40+ hours. See the game length guide for breakdown by playstyle and time-sensitive mechanics.',
  },
  {
    question: 'What is the best build in ZERO PARADES?',
    answer:
      'There is no single best build. The safest first-playthrough approach is the Careful Investigator: invest in Deduction, Observation, Perception, and Composure. See the best build guide for all four archetypes, specific skill picks, and Conditioning tips.',
  },
  {
    question: 'Does ZERO PARADES have a walkthrough?',
    answer:
      'Yes. The walkthrough covers assignment progression, key decision points, skill checks, missable content, and time-sensitive events. It is updated as more playthrough data becomes available.',
  },
  {
    question: 'What type of game is ZERO PARADES?',
    answer:
      'ZERO PARADES is a single-player espionage RPG from ZA/UM, built around skills, dialogue, Conditioning, pressure, dice checks, and consequences.',
  },
  {
    question: 'Is ZERO PARADES like Disco Elysium?',
    answer:
      'Steam describes it as an espionage RPG from the creators of Disco Elysium, so the useful comparison is dense writing, skill checks, character pressure systems, and failure-driven consequences rather than action combat.',
  },
  {
    question: 'Does ZERO PARADES have a time limit?',
    answer:
      'Some quests and assignments use time-sensitive mechanics. The game does not always make these limits explicit, so save before major conversations and pay attention to case urgency in the dialogue. Community reports suggest certain events advance when you rest or move between areas.',
  },
  {
    question: 'Are there bugs in ZERO PARADES?',
    answer:
      'Launch-day player reports mention technical issues including crashes, progression blockers, and UI glitches. ZA/UM is likely to patch these during the post-launch window. Check the Steam Community hub and recent patch notes before starting a long session.',
  },
  {
    question: 'How does crafting work in ZERO PARADES?',
    answer:
      'Crafting is not a traditional system. ZERO PARADES focuses on dialogue, skill checks, and investigation rather than item crafting. If you are looking for item creation or resource management, the game does not emphasize those mechanics.',
  },
  {
    question: 'Can I play ZERO PARADES on GeForce Now?',
    answer:
      'GeForce Now support has not been officially confirmed by ZA/UM. Some players report attempting to stream via GeForce Now with mixed results. Check the GeForce Now library and Steam Community for the latest compatibility reports.',
  },
];

const zeroParadesDecisionRows = [
  ['Want to play now', 'Use PC storefronts first: Steam, Epic Games Store, or GOG. Check the live buy button, regional price, and refund policy before purchase.'],
  ['Waiting for PS5', 'PS5 is announced for 2026, but no exact PlayStation launch date is public yet. Do not buy on PC if you only want the console version.'],
  ['Playing on Steam Deck', 'Steam Deck Verified support is listed, but text-heavy RPGs still deserve a readability and battery check before a long session.'],
  ['Comparing to Disco Elysium', 'Expect dense writing, skills, checks, failure states, and political pressure, not a combat-first action RPG.'],
  ['Unsure about price', 'The US price is $39.99. Regional prices can differ, so check the storefront you actually plan to use.'],
];

const zeroParadesFastAnswerRows = [
  ['Is it on GOG?', 'Yes. ZERO PARADES is available on GOG, Steam, and Epic Games Store for PC.', 'Release Date & Platforms'],
  ['Does it support controllers?', 'Steam lists partial controller support, so test UI navigation and mouse-heavy menus before a long session.', 'Controller Support'],
  ['What is the best build?', 'Do not treat one build as final. Careful Investigator is the safest first-run guidance while launch balance settles.', 'Best Build'],
  ['How long is it?', 'Expect about 20-30 hours for one playthrough and 40+ hours for completionist reroutes.', 'Game Length & Time Limits'],
  ['Is it on PS5?', 'PS5 is announced for 2026, but no exact PlayStation launch date is public yet.', 'Release Date & Platforms'],
];

const zeroParadesFirstHourRows = [
  ['Read the case setup carefully', 'Names, factions, and job titles are likely to matter. Do not skip early briefings just to reach the next check faster.'],
  ['Pick a build you can role-play', 'A spy RPG is easier to read when your skills support the kind of operative you want to be: careful, forceful, social, or unstable.'],
  ['Do not force every check', 'Failure can be part of the route. Save before major conversations, but let some consequences reveal how the game reacts.'],
  ['Track pressure systems', 'Conditioning and Exertion are not just flavor terms. Watch how stress, effort, and recovery shape your next choices.'],
  ['Keep platform comfort in mind', 'If you play handheld, test font size, controller labels, and save behavior before committing to a long reading session.'],
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
          <strong>ZERO PARADES: For Dead Spies launched May 21, 2026 on PC.</strong>{' '}
          For quick decisions: it is available on GOG, Steam, and Epic Games
          Store; PS5 is announced for 2026 without an exact date; Steam lists
          partial controller support; and the safest launch-window build advice
          is to choose a role-playable skill direction instead of chasing a
          final best build.
        </p>
      </BlufBox>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Question</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Answer</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best next guide</th>
            </tr>
          </thead>
          <tbody>
            {zeroParadesFastAnswerRows.map(([question, answer, nextGuide]) => (
              <tr key={question} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{question}</td>
                <td className="px-4 py-3 text-muted-foreground">{answer}</td>
                <td className="px-4 py-3 text-muted-foreground">{nextGuide}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <StatusPanel
        items={zeroParadesQuickFacts.slice(0, 8).map(([label, value]) => ({
          label,
          value,
          status: 'verified' as const,
        }))}
      />

      <section className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Choose Your Next Step</h2>
        <ArticleImage
          src={zeroParadesImages.screenshot1}
          alt="ZERO PARADES guide hub screenshot"
          caption="Use this hub to check today's PC launch, then jump to beginner tips, PC specs, Steam Deck setup, or buying advice."
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
          caption="ZERO PARADES is a reading, skill-check, and consequence RPG. Understand your operant build before forcing every roll."
        />
        <p>
          ZERO PARADES is now a live PC launch, so the most useful first answer
          is practical: where you can play, whether PS5 is ready, what kind of
          RPG it is, and whether your platform is comfortable for a long
          text-heavy session. Treat the game as an espionage role-playing case,
          not a checklist of perfect outcomes.
        </p>
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Feature</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">What it means</th>
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

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player situation</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Direct guidance</th>
            </tr>
          </thead>
          <tbody>
            {zeroParadesDecisionRows.map(([situation, guidance]) => (
              <tr key={situation} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{situation}</td>
                <td className="px-4 py-3 text-muted-foreground">{guidance}</td>
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
          caption="Check PC availability, PS5 timing, price, languages, controller support, and Steam Deck setup before you commit to a platform."
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
        <p>
          The first hour should teach you how the game wants to be read. Move
          slowly through the setup, pay attention to who benefits from each
          instruction, and treat a failed check as information instead of an
          automatic reload. If the route starts to feel unstable, write down
          which pressure system, skill, or conversation choice pushed it there.
        </p>
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

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">First-hour habit</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why it helps</th>
            </tr>
          </thead>
          <tbody>
            {zeroParadesFirstHourRows.map(([habit, reason]) => (
              <tr key={habit} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{habit}</td>
                <td className="px-4 py-3 text-muted-foreground">{reason}</td>
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
          caption="The strongest fit is players who want an espionage RPG with dense writing, skill checks, weird politics, failure states, and character pressure systems."
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
