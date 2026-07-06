import { ArticleImage, VideoEmbed } from '@/components/article-media';
import {
  ActionTable,
  BlufBox,
  SearchAnswerPanel,
} from '@/components/guide-blocks';
import { ZeroParadesArticle } from '@/components/zero-parades-article';
import {
  createZeroParadesMetadata,
  zpLengthActionRows,
  zpLengthJumpLinks,
  zpLengthSearchIntent,
  zeroParadesImages,
  zeroParadesLengthRows,
  zeroParadesTimeLimitRows,
} from '@/lib/zero-parades';

const title = 'ZERO PARADES Length & Time Limit Guide: How Long to Beat and What Advances Time';
const description =
 'ZERO PARADES playtime planning guide: 20-30 hour first-run estimate, 30-40 hour thorough route, 40+ hour completionist route, time-sensitive events, and replay value.';
const canonical = '/games/zero-parades/length';

export const metadata = createZeroParadesMetadata({
 title,
 description,
 canonical,
 image: zeroParadesImages.screenshot3,
});

const faqs = [
 {
 question: 'How long is ZERO PARADES?',
 answer:
 'A single playthrough is estimated at 20-30 hours depending on dialogue depth and exploration. Completionist runs with multiple endings and skill-check reroutes can take 40+ hours.',
 },
 {
 question: 'Does ZERO PARADES have a time limit?',
 answer:
 'Some quests and assignments use time-sensitive mechanics. The game does not always make these limits explicit, so save before major conversations and pay attention to case urgency in dialogue.',
 },
 {
 question: 'Are time-limited quests explicit in ZERO PARADES?',
 answer:
 'Not always. Some events may advance after rests, travel, or major case decisions, so save before committing to a new lead.',
 },
 {
 question: 'How many endings does ZERO PARADES have?',
 answer:
 'ZERO PARADES has multiple endings determined by skill checks, Conditioning choices, dialogue decisions, and faction relationships. Use the walkthrough before chasing a full route list.',
 },
 {
 question: 'How long is a completionist playthrough?',
 answer:
 'Completionist runs that explore all routes, test Conditioning experiments, and see multiple endings can take 40+ hours. A single focused playthrough is 20-30 hours.',
 },
 {
 question: 'What affects game length in ZERO PARADES?',
 answer:
 'Dialogue depth, exploration thoroughness, skill-check reroutes, Conditioning experiments, and how often you reload failed checks all affect total playtime.',
 },
];

const lengthPlanningRows = [
  ['Focused run', '20-30 hours', 'Use this for one playthrough with moderate dialogue exploration.'],
  ['Thorough run', '30-40 hours', 'Use this if you read deeply, explore side content, and follow reroutes.'],
  ['Completionist planning', '40+ hours', 'Use this if you want multiple endings, Conditioning experiments, and route comparison.'],
  ['Time-sensitive events', 'Save before rests and major decisions', 'Some events can advance without an obvious timer.'],
  ['Replay value', 'Different builds change outcomes', 'A second archetype can reveal routes the first playthrough missed.'],
];

export default function ZeroParadesLengthPage() {
 return (
 <ZeroParadesArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Game Length"
 heroImage={zeroParadesImages.screenshot3}
 heroAlt="ZERO PARADES game length guide screenshot"
 faqs={faqs}
 >
      <BlufBox title="Length Answer">
        <p>
          <strong>Plan around 20-30 hours for one ZERO PARADES playthrough.</strong>{' '}
          Completionist runs with multiple endings and full exploration can take
          40+ hours. Some quests are time-sensitive, and the game does not
          always make these limits explicit. Save before resting and pay
          attention to case urgency in dialogue.
        </p>
      </BlufBox>

      <SearchAnswerPanel
        title="ZERO PARADES Length Quick Answer"
        answer="Plan around 20-30 hours for one playthrough. Thorough runs are 30-40 hours. Completionist runs with multiple endings and Conditioning experiments are 40+ hours. Some events are time-sensitive but the game does not always flag them with explicit timers."
        intentRows={zpLengthSearchIntent}
        jumpLinks={zpLengthJumpLinks}
      />

      <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-mist">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Planning point</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player answer</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">How to use it</th>
            </tr>
          </thead>
          <tbody>
            {lengthPlanningRows.map(([point, answer, guidance]) => (
              <tr key={point} className="border-b border-border last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{point}</td>
                <td className="px-4 py-3 text-muted-foreground">{answer}</td>
                <td className="px-4 py-3 text-muted-foreground">{guidance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2 id="game-length-by-playstyle">Game Length by Playstyle</h2>
 <ArticleImage
 src={zeroParadesImages.screenshot3}
 alt="ZERO PARADES game length breakdown screenshot"
 caption="How long ZERO PARADES takes depends on how you play: speed-run, main story, thorough exploration, or completionist."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Playstyle</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Estimated time</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Description</th>
 </tr>
 </thead>
 <tbody>
 {zeroParadesLengthRows.map(([playstyle, time, description]) => (
 <tr key={playstyle} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{playstyle}</td>
 <td className="px-4 py-3 text-muted-foreground">{time}</td>
 <td className="px-4 py-3 text-muted-foreground">{description}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="my-10">
 <h2 className="mb-4 text-xl font-bold text-foreground">Video References</h2>
 <VideoEmbed
 videoId="LimxCkN-Mgc"
 title="Zero Parades: For Dead Spies Review - An RPG Masterclass"
 caption="GamingBolt review discussing game depth, playtime expectations, and replay value across multiple playthroughs."
 />
 </section>

 <section className="prose-game">
 <h2>What Extends Playtime</h2>
 <ArticleImage
 src={zeroParadesImages.screenshot5}
 alt="ZERO PARADES factors affecting playtime screenshot"
 caption="Dialogue depth, skill-check reroutes, Conditioning experiments, and route exploration all add hours to a playthrough."
 />
 <p>
 ZERO PARADES is a reading-heavy RPG where playtime varies
 significantly based on how you engage with the content. Players who
 read every dialogue option, test skill checks, and explore faction
 relationships will spend significantly more time than those who push
 through the main assignment path.
 </p>
 <ul>
 <li>
 <strong>Dialogue depth:</strong> Reading every conversation option
 and investigating motives adds hours but reveals more of the story.
 </li>
 <li>
 <strong>Skill-check reroutes:</strong> Failed checks sometimes
 open new paths that require additional exploration.
 </li>
 <li>
 <strong>Conditioning experiments:</strong> Changing Conditioning
 and seeing how it affects the game adds replay time.
 </li>
 <li>
 <strong>Reload habits:</strong> Players who reload failed checks
 spend more time per assignment than those who accept consequences.
 </li>
 </ul>
 </section>

 <section className="prose-game">
 <h2>Time-Sensitive Mechanics</h2>
 <ArticleImage
 src={zeroParadesImages.screenshot6}
 alt="ZERO PARADES time-sensitive mechanics screenshot"
 caption="Some events advance when you rest or move between areas. The game warns through dialogue urgency, not always explicit timers."
 />
 <p>
 Some events may advance after rests, travel, or major case decisions.
 The game does not always make these limits explicit with a visible
 timer. Instead, urgency may be communicated through dialogue tone,
 case framing, or NPC behavior. Save before resting, changing areas, or
 committing to a new lead if you have unfinished business.
 </p>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Trigger</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">What can advance</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Source</th>
 </tr>
 </thead>
 <tbody>
 {zeroParadesTimeLimitRows.map(([trigger, effect, source]) => (
 <tr key={trigger} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{trigger}</td>
 <td className="px-4 py-3 text-muted-foreground">{effect}</td>
 <td className="px-4 py-3 text-muted-foreground">{source}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>Multiple Endings and Replay Value</h2>
 <ArticleImage
 src={zeroParadesImages.screenshot7}
 alt="ZERO PARADES multiple endings screenshot"
 caption="Different builds see different outcomes. A second playthrough with a different archetype reveals routes the first playthrough missed."
 />
 <p>
 ZERO PARADES has multiple endings shaped by your accumulated choices,
 skill investment, Conditioning state, and faction relationships. A
 Careful Investigator playthrough produces different outcomes than a
 Forceful Operative or Unstable Wildcard run. This means a single
 playthrough sees only a fraction of the game&apos;s content, making
 replay value a significant factor in total game length.
 </p>
 <ul>
 <li>
 <strong>First playthrough:</strong> Focus on one archetype and
 accept your consequences. 20-30 hours.
 </li>
 <li>
 <strong>Second playthrough:</strong> Try a different archetype to
 see routes and outcomes you missed. 15-25 hours (familiar with
 systems).
 </li>
 <li>
          <strong>Completionist:</strong> Experiment with Conditioning,
          test edge cases, and explore all major routes. 40+ hours total.
        </li>
      </ul>
      </section>

      <section className="prose-game">
        <h2 id="replay-vs-completionist">Replay Run vs Completionist Run</h2>
        <p>
          A common confusion is treating a replay run and a completionist
          run as the same thing. They are not. A replay run is a focused
          second playthrough with a different build, usually 15-25 hours
          because you already understand the systems. A completionist run
          is a single playthrough that explores every route, tests
          Conditioning experiments, and reads every dialogue option,
          usually 40+ hours.
        </p>
        <p>
          Players who want the most content per hour should plan a focused
          first run, then a second replay with a different archetype.
          Players who want one long save should plan for 40+ hours and
          resist the urge to reload every failed check, since reloading
          is one of the biggest playtime multipliers in the game.
        </p>
      </section>

      <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">5-Step Length Plan</h2>
      <ActionTable rows={zpLengthActionRows} />

    </ZeroParadesArticle>
 );
}
