import { ProjectMistArticle } from '@/components/project-mist-article';
import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { createProjectMistMetadata, projectMistImages } from '@/lib/project-mist';

const title = 'Project: Mist Multiplayer Co-op - 1-4 Players, Solo & Crossplay Status';
const description =
  'Project: Mist multiplayer and co-op guide: Steam 1-4 player online co-op, solo play, host checks, crossplay status, console caution, and Early Access group roles.';
const canonical = '/games/project-mist/multiplayer-co-op';

export const metadata = createProjectMistMetadata({
  title,
  description,
  canonical,
  image: projectMistImages.multiplayer,
});

const faqs = [
  {
    question: 'How many players can play Project: Mist co-op?',
    answer:
      'Steam describes Project: Mist as seamless 1-4 player co-op.',
  },
  {
    question: 'Can Project: Mist be played solo?',
    answer:
      'Yes. Steam lists single-player, and the store description says players can take on the story-driven campaign alone or with friends.',
  },
  {
    question: 'Does Project: Mist have online co-op?',
    answer:
      'Yes. Steam lists co-op and online co-op for Project: Mist.',
  },
  {
    question: 'Does Project: Mist have cross-play?',
    answer:
      'Cross-play is not confirmed by the current Steam listing. Do not assume cross-platform multiplayer unless Chicken Launcher announces it.',
  },
  {
    question: 'Does Project: Mist have local co-op?',
    answer:
      'Local co-op or split-screen is not confirmed by the current Steam listing. The confirmed multiplayer mode is online co-op.',
  },
];

const coOpRoles = [
  ['Scout', 'Marks threats, abandoned facilities, resource routes, and safe retreat paths.'],
  ['Builder', 'Upgrades the moving train base, places defenses, and manages storage priorities.'],
  ['Controller', 'Uses Gravity Gun positioning, debris, and terrain to slow danger before it reaches the group.'],
  ['Quartermaster', 'Tracks food, crafted tools, ammunition, healing, and repair needs between trips.'],
];

const multiplayerQuestionRows = [
  ['How many players?', 'Project: Mist is described as 1-4 player online co-op.'],
  ['Is solo supported?', 'Yes. Steam lists single-player, so you can play without a group.'],
  ['Is it local co-op?', 'Local co-op and split-screen are not confirmed by the current Steam feature list.'],
  ['Is cross-play confirmed?', 'No. Cross-play is not confirmed, and console versions are not currently confirmed.'],
  ['Can Xbox or PlayStation players join?', 'No confirmed Xbox or PlayStation version is listed, so console co-op should not be assumed.'],
];

const steamFeatureRows = [
  ['Single-player', 'Listed on Steam.'],
  ['Multi-player', 'Listed on Steam.'],
  ['Co-op / online co-op', 'Listed on Steam, with page copy describing 1-4 player co-op.'],
  ['Steam Cloud', 'Listed on Steam; useful for saves but not a guarantee against save bugs.'],
  ['Family Sharing', 'Listed on Steam.'],
  ['Cross-play', 'Not confirmed by the current Steam listing.'],
  ['Local co-op / split-screen', 'Not confirmed; current Steam features point to online co-op.'],
  ['Console co-op', 'Not confirmed because Xbox and PlayStation versions are not confirmed.'],
];

export default function ProjectMistMultiplayerPage() {
  return (
    <ProjectMistArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Multiplayer & Co-op"
      heroImage={projectMistImages.multiplayer}
      heroAlt="Project: Mist multiplayer and co-op guide image"
      faqs={faqs}
    >
      <BlufBox title="Co-op Answer">
        <p>
          <strong>Project: Mist supports solo play and online co-op.</strong>{' '}
          Steam lists single-player, multi-player, co-op, and online co-op, and
          the page copy describes seamless <strong>1-4 player co-op</strong>.
          Local split-screen, cross-play, Xbox co-op, and PlayStation co-op are
          not confirmed by the current Steam listing.
        </p>
      </BlufBox>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player question</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Direct answer</th>
            </tr>
          </thead>
          <tbody>
            {multiplayerQuestionRows.map(([question, answer]) => (
              <tr key={question} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{question}</td>
                <td className="px-4 py-3 text-muted-foreground">{answer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>Multiplayer Status</h2>
        <ArticleImage
          src={projectMistImages.multiplayer}
          alt="Project: Mist multiplayer guide visual"
          caption="Project: Mist should be treated as an online co-op survival game, not a confirmed local split-screen or cross-play title."
        />
        <p>
          The current Steam listing confirms enough for a player-facing answer:
          Project: Mist supports solo play and online co-op. What is not
          confirmed from the current listing is local split-screen, cross-play,
          dedicated servers, console multiplayer, and save transfer rules.
        </p>
      </section>

      <section className="prose-game">
        <h2>Steam Feature Checklist</h2>
        <ArticleImage
          src={projectMistImages.screenshot4}
          alt="Project: Mist Steam multiplayer feature checklist image"
          caption="Use confirmed Steam feature labels for co-op expectations, and avoid assuming cross-play or local split-screen."
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
            {steamFeatureRows.map(([feature, status]) => (
              <tr key={feature} className="border-b border-border/30 last:border-0">
                <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{feature}</th>
                <td className="px-4 py-3 text-muted-foreground">{status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>Suggested Co-op Roles</h2>
        <ArticleImage
          src={projectMistImages.trainBase}
          alt="Project: Mist train base co-op role image"
          caption="Co-op should orbit the moving train base: scouting and fighting are useful only if the group returns with resources and upgrade progress."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Role</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Job</th>
            </tr>
          </thead>
          <tbody>
            {coOpRoles.map(([role, job]) => (
              <tr key={role} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{role}</td>
                <td className="px-4 py-3 text-muted-foreground">{job}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>What to Verify After Launch</h2>
        <ArticleImage
          src={projectMistImages.screenshot5}
          alt="Project: Mist multiplayer verification screenshot"
          caption="Early Access multiplayer pages should update once host saves, difficulty scaling, disconnect behavior, and inventory sharing are tested."
        />
        <ul>
          <li>Whether hosts and clients share story progress in the same way.</li>
          <li>Whether a demo save interacts with Early Access saves.</li>
          <li>Whether difficulty scales with player count.</li>
          <li>Whether disconnects preserve inventory and base changes.</li>
        </ul>
      </section>
    </ProjectMistArticle>
  );
}
