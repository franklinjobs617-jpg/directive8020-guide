import { ArticleImage, VideoEmbed } from '@/components/article-media';
import {
  ActionTable,
  BlufBox,
  SearchAnswerPanel,
  SourceCheckTable,
  StatusPanel,
} from '@/components/guide-blocks';
import { ZeroParadesArticle } from '@/components/zero-parades-article';
import {
  createZeroParadesMetadata,
  zpBuildActionRows,
  zpBuildJumpLinks,
  zpBuildSearchIntent,
  zpBuildSourceRows,
  zpBuildStatusItems,
  zeroParadesBuildArchetypeRows,
  zeroParadesImages,
  zeroParadesSkillRows,
} from '@/lib/zero-parades';

const title = 'ZERO PARADES Best Build Guide (2026) - Skills, Roles & First-Run Advice';
const description =
 'The best build in ZERO PARADES depends on your playstyle. Compare four archetypes, specific skill picks, Conditioning tips, and first-playthrough advice for Hershel Wilk.';
const canonical = '/games/zero-parades/best-build';

export const metadata = createZeroParadesMetadata({
 title,
 description,
 canonical,
 image: zeroParadesImages.screenshot4,
});

const faqs = [
 {
 question: 'What is the best build in ZERO PARADES?',
 answer:
 'There is no single best build. The safest first-playthrough approach is the Careful Investigator archetype: invest in Deduction, Observation, Perception, and Composure, then use Exertion sparingly on mission-critical checks.',
 },
 {
 question: 'How many skills should I focus on in ZERO PARADES?',
 answer:
 'Focus on 3-5 core skills that match your chosen archetype. Spreading points across all 15 skills creates a weak build that fails at important checks.',
 },
 {
 question: 'Can I respec in ZERO PARADES?',
 answer:
 'ZERO PARADES does not appear to offer a traditional respec system. Conditioning changes can alter Hershel and the rules of play, but skill investment choices are largely permanent within a playthrough.',
 },
 {
 question: 'What build should I pick for my first playthrough?',
 answer:
 'The Careful Investigator is the safest first build because it emphasizes reading, observation, and patience over confrontation. This playstyle lets you learn the game\'s systems without committing to high-pressure routes.',
 },
 {
 question: 'What does Conditioning do to my build?',
 answer:
 'Conditioning can change Hershel and alter the rules of the game. It interacts with your skill investment by modifying how checks resolve, so change Conditioning deliberately rather than experimenting randomly.',
 },
 {
 question: 'Is there a Shivers equivalent skill in ZERO PARADES?',
 answer:
 'ZERO PARADES has its own internal voice and pressure systems that function differently from Disco Elysium\'s Shivers. The closest equivalents are skills tied to perception, intuition, and unstable mental states.',
 },
];

export default function ZeroParadesBestBuildPage() {
 return (
 <ZeroParadesArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Best Build"
 heroImage={zeroParadesImages.screenshot4}
 heroAlt="ZERO PARADES best build guide screenshot"
 faqs={faqs}
 >
      <BlufBox title="Build Answer">
        <p>
          <strong>There is no single best build in ZERO PARADES.</strong> The
          safest first-playthrough approach is the Careful Investigator:
          invest in Deduction, Observation, Perception, and Composure, then use
          Exertion only on mission-critical checks. Focus on 3-5 core skills
          instead of spreading across all 15.
        </p>
      </BlufBox>

      <SearchAnswerPanel
        title="ZERO PARADES Best Build Quick Answer"
        answer="No single best build. Pick an archetype, invest in 3-5 core skills, and reserve Exertion for mission-critical checks. Conditioning changes the rules, so plan it alongside your skill picks."
        intentRows={zpBuildSearchIntent}
        jumpLinks={zpBuildJumpLinks}
      />

      <StatusPanel items={zpBuildStatusItems} />

      <section className="prose-game">
        <h2 id="what-does-build-mean-in-zero-parades">What Does &quot;Build&quot; Mean in ZERO PARADES?</h2>
 <ArticleImage
 src={zeroParadesImages.screenshot4}
 alt="ZERO PARADES build system explanation screenshot"
 caption="In ZERO PARADES, a build is your skill investment, Conditioning choices, and Exertion strategy combined. It is not a gear loadout."
 />
 <p>
 Unlike loot RPGs where builds mean equipment, a ZERO PARADES build is
 defined by three systems: which of the 15 skills you raise, which
 Conditioning you adopt, and how you spend Exertion under pressure.
 Your build determines which dialogue options succeed, which routes
 open, and how Hershel handles espionage stress.
 </p>
 </section>

 <section className="prose-game">
 <h2>The 15 Skills Explained</h2>
 <ArticleImage
 src={zeroParadesImages.screenshot5}
 alt="ZERO PARADES skills list screenshot"
 caption="Each skill shapes how Hershel approaches espionage problems. Pick 3-5 that match your playstyle and leave the rest at base level."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Skill</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">What it does</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best for</th>
 </tr>
 </thead>
 <tbody>
 {zeroParadesSkillRows.map(([skill, description, archetype]) => (
 <tr key={skill} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{skill}</td>
 <td className="px-4 py-3 text-muted-foreground">{description}</td>
 <td className="px-4 py-3 text-muted-foreground">{archetype}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="my-10">
 <h2 className="mb-4 text-xl font-bold text-foreground">Build Video Guides</h2>
 <VideoEmbed
 videoId="rwGTqEpPQUI"
 title="Zero Parades For Dead Spies Gameplay Preview - Honest First Impressions"
 caption="Fextralife covers first impressions, skill systems, and early build direction for new players."
 />
 <VideoEmbed
 videoId="LimxCkN-Mgc"
 title="Zero Parades: For Dead Spies Review - An RPG Masterclass"
 caption="GamingBolt review covering skill depth, build variety, and RPG systems."
 />
 </section>

 <section className="prose-game">
 <h2>Four Build Archetypes</h2>
 <ArticleImage
 src={zeroParadesImages.screenshot3}
 alt="ZERO PARADES build archetypes screenshot"
 caption="Pick the archetype that matches how you want to solve problems: investigate, confront, manipulate, or embrace chaos."
 />
 <p>
 Steam describes four broad approaches to espionage: careful
 investigation, forceful operations, social manipulation, and unstable
 experimentation. Each archetype favors different skills, different
 Conditioning directions, and different Exertion budgets.
 </p>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Archetype</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Core skills</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best at</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Exertion style</th>
 </tr>
 </thead>
 <tbody>
 {zeroParadesBuildArchetypeRows.map(([archetype, skills, strengths, exertion]) => (
 <tr key={archetype} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{archetype}</td>
 <td className="px-4 py-3 text-muted-foreground">{skills}</td>
 <td className="px-4 py-3 text-muted-foreground">{strengths}</td>
 <td className="px-4 py-3 text-muted-foreground">{exertion}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>Best Build for a First Playthrough</h2>
 <ArticleImage
 src={zeroParadesImages.screenshot2}
 alt="ZERO PARADES first playthrough build recommendation"
 caption="The Careful Investigator is the safest first build because it rewards reading, patience, and observation over confrontation."
 />
 <p>
 For a first playthrough, the Careful Investigator is the safest
 choice. Invest in Deduction, Observation, Perception, and Composure
 as your core four. Add a fifth skill from the Social tree
 (Persuasion or Deception) if you want dialogue flexibility. This
 build lets you learn the game&apos;s systems without committing to
 high-pressure routes that punish mistakes.
 </p>
 <ul>
 <li>
 <strong>Deduction</strong> is your primary problem-solving skill
 for evidence analysis and clue connection.
 </li>
 <li>
 <strong>Observation</strong> catches details other builds miss,
 opening hidden routes and information.
 </li>
 <li>
 <strong>Perception</strong> reads body language and detects lies,
 critical for espionage dialogue.
 </li>
 <li>
 <strong>Composure</strong> maintains your cover under pressure,
 preventing exposure in tense moments.
 </li>
 </ul>
 </section>

 <section className="prose-game">
 <h2>Conditioning and Exertion Tips for Your Build</h2>
 <ArticleImage
 src={zeroParadesImages.screenshot6}
 alt="ZERO PARADES Conditioning and Exertion build tips"
 caption="Conditioning changes the rules; Exertion pushes rolls. Use both deliberately or your build will collapse under pressure."
 />
 <p>
 Conditioning is not a simple stat swap. It can change Hershel and
 alter the rules of the game, so your Conditioning direction should
 match your archetype. Investigator builds benefit from Conditioning
 that reinforces observation and patience. Operative builds can accept
 Conditioning that trades mental stability for physical capability.
 </p>
 <p>
 Exertion is your emergency tool, not your default strategy. Use it on
 checks that match your build identity and mission goals. Spending
 Exertion on every uncertain roll creates Fatigue, Anxiety, and
 Delirium pressure that can derail your run faster than any single
 failed check.
 </p>
 </section>

 <section className="prose-game">
 <h2>Common Build Mistakes to Avoid</h2>
 <ArticleImage
 src={zeroParadesImages.screenshot7}
 alt="ZERO PARADES build mistakes to avoid"
 caption="A focused build with clear weaknesses is stronger than a scattered build that fails at everything."
 />
 <ul>
 <li>
 <strong>Spreading points across too many skills.</strong> A build
 that raises 10 skills to mediocre levels fails at important checks.
 Focus on 3-5.
 </li>
 <li>
 <strong>Ignoring pressure systems.</strong> Fatigue, Anxiety, and
 Delirium are not flavor text. They create real costs that compound
 if you push Exertion too hard.
 </li>
 <li>
          <strong>Reloading every failed check.</strong> Failure is part of
          the RPG structure. Some failed checks reveal information or open
          alternative routes that a &quot;perfect&quot; run misses.
        </li>
        <li>
          <strong>Changing Conditioning randomly.</strong> Conditioning
          changes have lasting effects. Understand the cost before swapping.
        </li>
      </ul>
      </section>

      <section className="prose-game">
        <h2 id="build-vs-archetype">Build Identity vs Archetype Fluidity</h2>
        <p>
          The four archetype labels (Investigator, Operative, Social, Wildcard)
          are starting points, not hard locks. A Careful Investigator run can
          pivot to a Social Manipulator mid-game if dialogue rewards it, and a
          Forceful Operative can pick up Deduction perks to read informants
          more carefully. The mistake is to plan fluidity from the start:
          that is just spreading points again, and it produces a build that
          fails at important checks.
        </p>
        <p>
          A cleaner mental model is to pick the identity you want the game to
          remember you by, then spend the first 5-10 hours locking in core
          skills. After that, Conditioning and dialogue choices can flex the
          archetype without breaking it. The build is the spine; the
          archetype is the story your save tells.
        </p>
      </section>

      <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">5-Step Build Plan</h2>
      <ActionTable rows={zpBuildActionRows} />

      <SourceCheckTable
        title="ZERO PARADES Build Sources"
        rows={zpBuildSourceRows}
      />
    </ZeroParadesArticle>
 );
}
