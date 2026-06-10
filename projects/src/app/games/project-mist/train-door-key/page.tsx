import { ProjectMistArticle } from '@/components/project-mist-article';
import { ArticleImage } from '@/components/article-media';
import {
  ActionTable,
  BlufBox,
  SearchAnswerPanel,
  SourceCheckTable,
  StatusPanel,
} from '@/components/guide-blocks';
import {
  createProjectMistMetadata,
  pmTrainKeyActionRows,
  pmTrainKeyJumpLinks,
  pmTrainKeySearchIntent,
  pmTrainKeySourceRows,
  pmTrainKeyStatusItems,
  projectMistImages,
  projectMistTrainDoorRows,
} from '@/lib/project-mist';

const title = 'Project: Mist Train Door Key - Missing Key and Route Checks';
const description =
 'Project: Mist train door key guide covering the early route, mech part, greenhouse, boss-gate check, and what to do if the key console is missing.';
const canonical = '/games/project-mist/train-door-key';

export const metadata = createProjectMistMetadata({
 title,
 description,
 canonical,
 image: projectMistImages.trainBase,
});

const faqs = [
 {
 question: 'Where is the train door key in Project: Mist?',
 answer:
 'Early gameplay points players through the train, mech part, greenhouse, and boss route before the train door key step resolves.',
 },
 {
 question: 'What if the train door key is missing?',
 answer:
 'A Steam discussion reply says the key console should appear after killing the early boss; if it does not, reload before the arena and report the issue if it repeats.',
 },
 {
 question: 'Do you need the mech part first?',
 answer:
 'Yes, early route footage ties train progress to the busted mech part before the greenhouse and later access-card steps.',
 },
 {
 question: 'Is this route final?',
 answer:
 'No. This is launch-window Early Access guidance based on Steam discussion signals and early gameplay footage.',
 },
];

export default function ProjectMistTrainDoorKeyPage() {
 return (
 <ProjectMistArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Train Door Key"
 heroImage={projectMistImages.trainBase}
 heroAlt="Project: Mist train door key guide image"
 faqs={faqs}
 >
 <BlufBox title="Missing Key Answer">
 <p>
 <strong>If the train door key step does not resolve, check the route before assuming the save is broken.</strong>{' '}
 The early route points through the train, a busted mech part,
 greenhouse access, and an arena/boss checkpoint. Steam discussion
 replies say the key console should appear after that boss step.
 </p>
 </BlufBox>

 <SearchAnswerPanel
 title="Project: Mist Train Door Key Quick Answer"
 answer="The early route points through the train, a mech part, the greenhouse, and a boss step. Steam discussion replies say the key console should appear after the early boss. Reload before the arena first."
 intentRows={pmTrainKeySearchIntent}
 jumpLinks={pmTrainKeyJumpLinks}
 />

 <StatusPanel items={pmTrainKeyStatusItems} />

 <section id="route-order" className="prose-game">
 <h2>Route Checks Before the Key</h2>
 <ArticleImage
 src={projectMistImages.firstSteps}
 alt="Project: Mist train route guide visual"
 caption="The first route is objective-driven: wake-up room, Midway Bridge, train, mech part, greenhouse, then deeper facility progress."
 />
 <p>
 Do not skip route objectives just because the train is visible early.
 Gameplay footage shows the train as an early base objective, but the
 engine and gate problems push you toward the mech part and greenhouse
 before later train access makes sense.
 </p>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Checkpoint</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">What to verify</th>
 </tr>
 </thead>
 <tbody>
 {projectMistTrainDoorRows.map(([checkpoint, check]) => (
 <tr key={checkpoint} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{checkpoint}</th>
 <td className="px-4 py-3 text-muted-foreground">{check}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section id="missing-key" className="prose-game">
 <h2>When to Treat It as a Bug</h2>
 <ArticleImage
 src={projectMistImages.screenshot6}
 alt="Project: Mist missing train key troubleshooting image"
 caption="Early Access route blockers should be reported with the location, boss state, save state, and whether the key console appeared after reload."
 />
 <p>
 If the boss is dead, the route objective is complete, and the key
 console still never appears after a reload, treat the issue as a
 launch-window bug candidate. Do not delete saves immediately; capture
 the build version and the exact objective state first.
 </p>
 </section>

 <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">5-Step Missing Key Recovery Plan</h2>
 <ActionTable rows={pmTrainKeyActionRows} />

 <section id="boss-gate" className="prose-game">
 <h2>Boss Gate and Key Console Timing</h2>
 <p>
 A Steam discussion reply says the key console should appear after
 killing the early boss. If the console never appears after a clean
 boss kill, the most useful next step is a reload from before the
 arena and a second attempt. If the issue repeats, capture the build
 version, last location, and save state before reporting it in Steam
 Discussions.
 </p>
 </section>

 <section id="bug-report" className="prose-game">
 <h2>Reporting a Missing Key Bug</h2>
 <p>
 A useful bug report explains the build version, the route state, the
 boss state, and whether the key console appeared after a reload. Do
 not delete the save as a first response, because the original state
 is often what developers need to confirm a real bug. If the issue
 repeats, post in Steam Discussions and wait for an official
 response.
 </p>
 </section>

 <SourceCheckTable title="Project: Mist Train Door Key Sources" rows={pmTrainKeySourceRows} />
 </ProjectMistArticle>
 );
}
