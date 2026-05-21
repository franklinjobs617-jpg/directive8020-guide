import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';
import { ArticleImage, VideoEmbed } from '@/components/article-media';
import { ActionTable, BlufBox, RelatedGuides, SourceCheckTable, StatusPanel } from '@/components/guide-blocks';
import { DeathSceneTracker } from '@/components/tools/death-scene-tracker';
import { MyProgressPanel } from '@/components/tools/my-progress-panel';

export const metadata: Metadata = {
  title: 'Directive 8020 All Deaths - 44 Death Scenes Checklist',
  description:
    'Directive 8020 all deaths guide: 44 death scenes checklist, chapter triggers, victims, avoid methods, Turning Points recovery, mimic deaths, stealth deaths, death spiral, and trophy cleanup.',
  alternates: {
    canonical: '/directive-8020-death-scenes-guide',
  },
};

const faqs = [
  {
    question: 'How many death scenes are in Directive 8020?',
    answer:
      'Directive 8020 has 44 reported death scenes. Use Turning Points after one clean route to capture all deaths by victim, chapter, trigger, and avoid method.',
  },
  {
    question: 'Can deaths be undone with Turning Points?',
    answer:
      'Most major route deaths should be testable through Turning Points, but the correct rewind point may be earlier than the final QTE. Check relationship, evidence, and separation choices before the death.',
  },
  {
    question: 'Should I collect all deaths before saving everyone?',
    answer:
      'No. Finish a clean survival route first, then branch from Turning Points to collect death scenes. That prevents your main save from becoming difficult to clean up.',
  },
];

const deathCategories = [
  ['Mimic attack', 'Trusting, following, or failing to identify an impostor.', 'Verify isolated crew members and preserve group communication.'],
  ['Stealth failure', 'Being seen, making noise, or choosing a poor hiding route.', 'Crouch-walk, use cover, and do not sprint in threat zones.'],
  ['QTE failure', 'Missing reaction prompts during chases, combat, or escape.', 'Stabilize input device and replay with consistent timing.'],
  ['Relationship failure', 'A character refuses help because trust was damaged earlier.', 'Avoid needless blame and record relationship changes.'],
  ['Evidence failure', 'Missing a clue that unlocks safer later options.', 'Search labs, terminals, crew rooms, and objective-adjacent spaces.'],
  ['Finale branch', 'Late-game survivor combinations or mission choices.', 'Use late Story Tree nodes after one full ending.'],
];

const deathIntentRows = [
  ['directive 8020 deaths', 'A broad all-deaths query; answer with 44 death scenes and a tracker immediately.'],
  ['directive 8020 all deaths', 'Completion intent; emphasize checklist order, victims, triggers, and Turning Points.'],
  ['directive 8020 death spiral', 'Special ending-state intent; explain separately from normal death-scene collection.'],
  ['directive 8020 save everyone deaths', 'Survival intent; every death entry needs an avoid method.'],
];

const deathCaptureRows = [
  { step: 'Clean route first', doThis: 'Finish one route with as many survivors as possible.', why: 'You need a stable base before branching into deaths.' },
  { step: 'Late deaths next', doThis: 'Test finale and late-game deaths from nearby Turning Points.', why: 'These are usually fastest to capture after one ending.' },
  { step: 'System deaths', doThis: 'Replay stealth, QTE, and mimic choices one at a time.', why: 'This separates mechanical failures from story choices.' },
  { step: 'Document avoid method', doThis: 'Every death entry must include how to prevent it.', why: 'The page serves both all-deaths viewers and save-everyone players.' },
];

const sourceRows = [
  {
    claim: 'Launch coverage reports 44 death scenes.',
    source: 'GamesRadar / preview coverage',
    status: 'verified' as const,
    href: 'https://www.gamesradar.com/games/horror/directive-8020-save-everyone/',
    note: 'Use this as the headline count until the full in-game checklist is fully captured.',
  },
  {
    claim: 'A special "death spiral" ending is discussed in preview interviews.',
    source: 'PSU preview',
    status: 'verified' as const,
    href: 'https://www.psu.com/news/directive-8020-hands-on-preview/',
    note: 'Treat this as a special ending-state concept, not a normal death scene category.',
  },
  {
    claim: 'Community discussion is still unsure about the full death structure.',
    source: 'Reddit death-structure thread',
    status: 'working' as const,
    href: 'https://www.reddit.com/r/DarkPicturesAnthology/comments/1tg5q9y/directive_8020_death_structure_for_those_who_want/',
    note: 'Use Reddit as a demand and pattern signal, not as final canon.',
  },
];

export default function DeathScenesPage() {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'Directive 8020 All Deaths - 44 Death Scenes Checklist',
          description:
            'Directive 8020 all deaths guide with 44 death scenes checklist, triggers, chapters, victims, avoid methods, Turning Points recovery, death spiral, and trophy cleanup.',
          url: '/directive-8020-death-scenes-guide',
          datePublished: '2026-05-12',
          dateModified: '2026-05-21',
          imageUrl: '/d8020-screenshot-11.jpg',
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'Death Scenes' }]} />
        <PageHero src="/d8020-screenshot-11.jpg" alt="Directive 8020 death scenes guide screenshot" />

        <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
          Directive 8020 All Deaths: 44 Death Scenes Checklist
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Directive 8020 has <strong className="text-foreground">44 reported
          death scenes</strong>. Use this all-deaths tracker after one clean
          playthrough: map every death by chapter, victim, trigger, avoid
          method, and nearest Turning Point instead of replaying blindly.
        </p>

        <BlufBox>
          <p>
            <strong>Use deaths as a controlled checklist, not a first-run goal.</strong>
            Preview coverage cites 44 death scenes. Capture them from a clean
            completed route by branching through Turning Points, and always log
            the avoid method alongside the trigger.
          </p>
        </BlufBox>

        <StatusPanel
          items={[
            { label: 'Death count', value: '44 deaths reported by preview coverage; final in-game checklist still needs capture.', status: 'working' },
            { label: 'Exact death list', value: 'Needs episode-by-episode recording and screenshots.', status: 'needs-check' },
            { label: 'Capture method', value: 'Turning Point branching and one-variable testing are ready to use.', status: 'verified' },
            { label: 'Spoiler handling', value: 'Death categories are visible; exact late-game deaths should be spoiler-labeled after capture.', status: 'working' },
          ]}
        />

        <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
          <table className="w-full text-sm">
            <tbody>
              {deathIntentRows.map(([query, answer]) => (
                <tr key={query} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground w-56">{query}</td>
                  <td className="px-4 py-3 text-muted-foreground">{answer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <VideoEmbed
          videoId="oeiMw0KD7w0"
          title="Directive 8020 gameplay trailer for death route context"
          caption="Gameplay footage is useful for spotting death-risk systems: stealth pressure, QTE timing, mimic encounters, and Story Tree recovery."
        />

        <MyProgressPanel />
        <DeathSceneTracker />

        <div className="prose-game">
          <h2>How to Use This Checklist</h2>
          <p>
            Do not collect deaths on your first serious save-everyone route.
            First, finish a clean ending and map the Story Tree. Then use
            Turning Points to branch into dangerous choices one at a time.
          </p>
          <ol>
            <li>Record the chapter and playable character.</li>
            <li>Record the death trigger: trust, stealth, QTE, evidence, relationship, or finale.</li>
            <li>Record the nearest Turning Point and whether an earlier choice is required.</li>
            <li>Record the avoid method so the death guide also helps survival players.</li>
          </ol>

          <h2>Death Capture Plan</h2>
          <ActionTable rows={deathCaptureRows} />
        </div>

        <SourceCheckTable title="Death Spiral Source Check" rows={sourceRows} />

        <div className="rounded-lg border border-border/50 bg-card/30 overflow-hidden my-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left text-muted-foreground font-medium">Category</th>
                <th className="px-4 py-3 text-left text-muted-foreground font-medium">Likely trigger</th>
                <th className="px-4 py-3 text-left text-muted-foreground font-medium">Avoid method</th>
              </tr>
            </thead>
            <tbody>
              {deathCategories.map(([category, trigger, avoid]) => (
                <tr key={category} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 text-foreground font-medium">{category}</td>
                  <td className="px-4 py-3 text-muted-foreground">{trigger}</td>
                  <td className="px-4 py-3 text-muted-foreground">{avoid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-game">
          <h2>Death Entry Template</h2>
          <p>
            Each confirmed death should eventually use the same format. This
            makes the page useful both for “all deaths” searches and for players
            trying to prevent a specific death.
          </p>
          <ul>
            <li><strong>Death number:</strong> 1 of 44 after verification.</li>
            <li><strong>Episode:</strong> Little Star, Dragnet, or the verified chapter title.</li>
            <li><strong>Victim:</strong> Young, Eisele, Cernan, Stafford, Cooper, or other confirmed character.</li>
            <li><strong>Trigger:</strong> choice, QTE, stealth, relationship, evidence, or finale branch.</li>
            <li><strong>How to avoid:</strong> exact safer choice or earlier Turning Point condition.</li>
          </ul>

          <ArticleImage
            src="/d8020-screenshot-02.jpg"
            alt="Directive 8020 death scene stealth risk"
            caption="Many deaths in Directive 8020 should be mapped by system: stealth failure, QTE failure, trust failure, or missing evidence."
          />
        </div>

        <RelatedGuides
          guides={[
            {
              href: '/directive-8020-walkthrough',
              title: 'Full Walkthrough',
              description: 'Use episode anchors to place each death in the right chapter.',
            },
            {
              href: '/directive-8020-how-to-save-everyone',
              title: 'How to Save Everyone',
              description: 'Every death entry should include the prevention route.',
            },
            {
              href: '/directive-8020-stealth-guide',
              title: 'Stealth Guide',
              description: 'Map stealth deaths separately from choice deaths.',
            },
            {
              href: '/directive-8020-trophy-guide',
              title: 'Trophy Guide',
              description: 'Check whether all-deaths or death-category trophies exist.',
            },
          ]}
        />

        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
