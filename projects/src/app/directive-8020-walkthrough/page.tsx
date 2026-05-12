import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';
import { ArticleImage, VideoEmbed } from '@/components/article-media';

export const metadata: Metadata = {
  title: 'Directive 8020 Full Walkthrough - Step by Step Chapter Guide',
  description:
    'Directive 8020 walkthrough hub: spoiler-safe first run route, chapter tracking method, QTE and stealth advice, collectibles checklist, Turning Points, and best ending preparation.',
  alternates: {
    canonical: '/directive-8020-walkthrough',
  },
};

const faqs = [
  {
    question: 'Should I use a walkthrough for my first Directive 8020 playthrough?',
    answer:
      'Use a spoiler-safe walkthrough if you want help with mechanics, survival principles, and collectible tracking without ruining story outcomes. Use a full spoiler route only after your first ending or if you are targeting trophies.',
  },
  {
    question: 'How should I track chapters in Directive 8020?',
    answer:
      'For each chapter, record playable character, location, key choices, QTEs, collectibles, suspect behavior, Turning Points, and any survival or relationship changes.',
  },
  {
    question: 'What should I do after a character dies?',
    answer:
      'Check the Story Tree before replaying. The death may be tied to an earlier Turning Point involving trust, separation, relationship state, or missed evidence.',
  },
  {
    question: 'Is Directive 8020 better blind or guided?',
    answer:
      'For story impact, blind is better. For best ending, trophies, and saving everyone, guided play is more efficient. A hybrid approach works well: play blind, but track choices and collectibles carefully.',
  },
];

const chapterTemplate = [
  ['Playable character', 'Who you control and who is nearby.'],
  ['Location', 'Ship section, planet area, or objective zone.'],
  ['Main objective', 'What the game asks you to do before the next branch.'],
  ['Major choices', 'Timed choices, trust decisions, accusations, rescues, and split paths.'],
  ['QTE / stealth', 'Inputs, failures, injuries, deaths, or route changes.'],
  ['Collectibles', 'Evidence, logs, relics, secrets, and optional objects.'],
  ['Mimic clues', 'Suspicious behavior, contradictions, isolation, or impossible knowledge.'],
  ['Turning Points', 'Story Tree nodes unlocked and branches still hidden.'],
];

export default function WalkthroughPage() {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'Directive 8020 Full Walkthrough - Step by Step Chapter Guide',
          description:
            'Directive 8020 walkthrough with spoiler-safe route planning, chapter tracking, QTE and stealth advice, collectibles, Turning Points, and survival prep.',
          url: '/directive-8020-walkthrough',
          datePublished: '2026-05-12',
          dateModified: '2026-05-12',
          imageUrl: '/official-corridor-threat.jpg',
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'Walkthrough' }]} />
        <PageHero src="/official-corridor-threat.jpg" alt="Directive 8020 official corridor walkthrough screenshot" />

        <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
          Directive 8020 Full Walkthrough
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          This walkthrough hub is designed for launch day: useful before every
          chapter is fully mapped, and ready to expand into a scene-by-scene
          route. Use it to survive your first run, track choices, avoid missed
          collectibles, and prepare for best ending cleanup.
        </p>

        <VideoEmbed
          videoId="gaQkzfA14G4"
          title="Directive 8020 official walkthrough reference trailer"
          caption="Before using a spoiler-heavy walkthrough, the official video gives a clean reference for Directive 8020 gameplay: ship exploration, crew tension, mimic suspicion, and survival horror pacing."
        />

        <div className="prose-game">
          <h2>Best Way to Use This Walkthrough</h2>
          <p>
            Directive 8020 is a story game, so the right walkthrough depends on
            your goal. If you want the strongest first experience, avoid full
            spoilers and use this page as a checklist. If you want every trophy
            or the best ending, record every major branch from the start.
          </p>
          <ArticleImage
            src="/official-corridor-threat.jpg"
            alt="Directive 8020 corridor walkthrough route screenshot"
            caption="Walkthrough notes should track more than dialogue: stealth routes, corridor threats, QTE failures, and missed evidence can all change survival outcomes."
          />
          <ul>
            <li><strong>Blind story run:</strong> read only the survival rules and collectible checklist.</li>
            <li><strong>Save everyone run:</strong> track deaths, injuries, relationships, and mimic suspicion.</li>
            <li><strong>Completion run:</strong> use the chapter template and revisit Turning Points methodically.</li>
            <li><strong>Co-op run:</strong> assign one player to record choices and another to watch for clues.</li>
          </ul>

          <h2>Chapter Tracking Template</h2>
          <p>
            Each chapter guide should eventually answer the same questions. Use
            this template while playing so your first run becomes a useful route
            map rather than a one-off story file.
          </p>
        </div>

        <div className="rounded-lg border border-border/50 bg-card/30 overflow-hidden my-6">
          <table className="w-full text-sm">
            <tbody>
              {chapterTemplate.map(([label, value]) => (
                <tr key={label} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 text-foreground font-medium w-44">{label}</td>
                  <td className="px-4 py-3 text-muted-foreground">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-game">
          <h2>Spoiler-Safe Walkthrough Rules</h2>
          <p>
            These rules help without naming late-game outcomes. They are based
            on Directive 8020&apos;s confirmed systems: a mimic enemy, branching
            story, stealth, improvised weapons, Movie Night, Turning Points, and
            a Story Tree.
          </p>
          <ul>
            <li>Explore before objective exits if no chase or timer is active.</li>
            <li>Do not follow isolated characters alone unless you have proof.</li>
            <li>Preserve group communication whenever the game offers it.</li>
            <li>Choose stealth and observation before confrontation.</li>
            <li>Treat every QTE failure as potentially route-changing.</li>
            <li>After each chapter, inspect the Story Tree for hidden branches.</li>
          </ul>

          <h2>Collectibles and Evidence</h2>
          <p>
            Collectibles in Directive 8020 are likely more than lore. In a mimic
            story, logs and environmental clues can help identify contradictions
            and safer routes. The Digital Deluxe Heirlooms mission also makes
            anthology-related relics worth tracking carefully.
          </p>
          <ul>
            <li>Search crew quarters, labs, medical areas, control rooms, and wreckage paths.</li>
            <li>Inspect bodies, broken equipment, terminals, and sealed doors.</li>
            <li>Record whether a clue appears before or after a major trust decision.</li>
            <li>Check if collectibles remain saved when using Turning Points.</li>
          </ul>

          <h2>QTE, Stealth, and Chase Preparation</h2>
          <p>
            Directive 8020&apos;s store description emphasizes evasion,
            improvised weapons, reflexes, and stealth. That means your
            walkthrough notes should include more than dialogue choices.
          </p>
          <ul>
            <li>Lower input latency before playing: disable distracting overlays and use a stable controller.</li>
            <li>In stealth, prioritize line of sight and sound over sprinting.</li>
            <li>If a character drops an item or gets injured, mark that as a possible later consequence.</li>
            <li>When replaying, keep QTE success consistent so you can isolate choice consequences.</li>
          </ul>

          <h2>Related Route Guides</h2>
          <ul>
            <li><a href="/directive-8020-all-endings">All Endings Guide</a></li>
            <li><a href="/directive-8020-how-to-save-everyone">How to Save Everyone</a></li>
            <li><a href="/directive-8020-choices-consequences">Choices &amp; Consequences</a></li>
            <li><a href="/directive-8020-trophy-guide">Trophy &amp; Achievement Guide</a></li>
          </ul>
        </div>

        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
