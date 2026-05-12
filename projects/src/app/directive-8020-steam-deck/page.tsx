import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';
import { ArticleImage, VideoEmbed } from '@/components/article-media';

export const metadata: Metadata = {
  title: 'Directive 8020 Steam Deck & Low-End PC Guide',
  description:
    'Directive 8020 Steam Deck and low-end PC guide: verified status, official PC specs, expected performance limits, best settings, controller support, and troubleshooting.',
  alternates: {
    canonical: '/directive-8020-steam-deck',
  },
};

const faqs = [
  {
    question: 'Is Directive 8020 Steam Deck verified?',
    answer:
      'At launch planning time, treat Steam Deck support as unverified unless the Steam store shows a Deck rating for your region. The official minimum GPU is RTX 2060 or RX 5700, which is above Steam Deck-class hardware.',
  },
  {
    question: 'Can Directive 8020 run on Steam Deck?',
    answer:
      'It may launch if compatibility is good, but the official minimum requirements are demanding. Expect to use low settings, a 30 FPS cap, lower resolution or upscaling, and an SSD install if testing on handheld PC hardware.',
  },
  {
    question: 'Does Directive 8020 support controller?',
    answer:
      'Yes. Steam lists full controller support, which is good for Steam Deck and couch play. Test button prompts before committing to a QTE-heavy save-everyone run.',
  },
  {
    question: 'What settings should I try first on Steam Deck?',
    answer:
      'Start with 720p or 800p, low shadows, low reflections, low post-processing, motion blur off, FPS capped at 30, and subtitles enabled. Raise brightness carefully because the game is very dark.',
  },
];

const settings = [
  ['Resolution', '1280x800 or 1280x720'],
  ['Frame cap', '30 FPS'],
  ['Shadows', 'Low'],
  ['Reflections', 'Low'],
  ['Post-processing', 'Low or Medium'],
  ['Textures', 'Low first, raise only if VRAM allows'],
  ['Motion blur', 'Off'],
  ['Subtitles', 'On'],
];

export default function SteamDeckPage() {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'Directive 8020 Steam Deck & Low-End PC Guide',
          description:
            'Directive 8020 Steam Deck and low-end PC guide with verified status, official specs, best settings, controller support, and troubleshooting.',
          url: '/directive-8020-steam-deck',
          datePublished: '2026-05-12',
          dateModified: '2026-05-12',
          imageUrl: '/official-corridor-threat.jpg',
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'Steam Deck & Low-End PC' }]} />
        <PageHero src="/official-corridor-threat.jpg" alt="Directive 8020 Steam Deck and low-end PC settings guide" />

        <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
          Directive 8020 Steam Deck &amp; Low-End PC Guide
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Steam Deck is one of the first questions PC players ask, but Directive
          8020&apos;s official minimum specs are high. This page gives a practical
          testing plan without pretending handheld performance is guaranteed.
        </p>

        <VideoEmbed
          videoId="oeiMw0KD7w0"
          title="Directive 8020 gameplay trailer for performance reference"
          caption="The gameplay trailer shows the kind of dark corridors, effects, mimic encounters, and Story Tree systems that can stress low-end hardware."
        />

        <div className="prose-game">
          <h2>Steam Deck Status</h2>
          <p>
            Until Steam displays an official Deck rating, treat Directive 8020
            as <strong>not verified</strong>. The official minimum requirement
            lists an RTX 2060 or RX 5700, which is well above Steam Deck-class
            GPU performance. That does not automatically mean it cannot run,
            but it means expectations should be conservative.
          </p>

          <ArticleImage
            src="/official-ship-interior.jpg"
            alt="Directive 8020 dark ship interior performance reference"
            caption="Directive 8020 uses dark ship interiors, cinematic lighting, and stealth readability. On handheld screens, brightness and frame pacing matter as much as raw resolution."
          />

          <h2>Recommended First-Test Settings</h2>
        </div>

        <div className="rounded-lg border border-border/50 bg-card/30 overflow-hidden my-6">
          <table className="w-full text-sm">
            <tbody>
              {settings.map(([label, value]) => (
                <tr key={label} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 text-foreground font-medium w-40">{label}</td>
                  <td className="px-4 py-3 text-muted-foreground">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-game">
          <h2>Low-End PC Priority Order</h2>
          <p>
            If your PC is below or near the minimum spec, do not lower
            everything randomly. Protect readability first, then reduce the most
            expensive effects.
          </p>
          <ol>
            <li>Cap FPS to 30 or 60 before changing visuals.</li>
            <li>Lower shadows, reflections, and post-processing.</li>
            <li>Lower textures only if VRAM is maxed out.</li>
            <li>Turn off motion blur if dark scenes feel unclear.</li>
            <li>Keep subtitles on for story decisions and mimic clues.</li>
          </ol>

          <h2>When to Stop Tweaking</h2>
          <p>
            Directive 8020 is a choice-heavy horror game. If settings make it
            hard to see enemies, read expressions, or react to QTEs, the game is
            no longer just visually worse; it becomes harder to survive. Use a
            stable 30 FPS route if that keeps input timing and readability
            reliable.
          </p>
        </div>

        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
