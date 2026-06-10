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
  pmBaseActionRows,
  pmBaseJumpLinks,
  pmBaseSearchIntent,
  pmBaseSourceRows,
  pmBaseStatusItems,
  projectMistBuildingRows,
  projectMistImages,
} from '@/lib/project-mist';

const title = 'Project: Mist Train Base Building Guide - Storage, Defense & Limits';
const description =
 'Project: Mist train base building guide for Early Access: moving base priorities, storage, defenses, layout, doors/windows questions, and patch expectations.';
const canonical = '/games/project-mist/building-train-base';

export const metadata = createProjectMistMetadata({
 title,
 description,
 canonical,
 image: projectMistImages.trainBase,
});

const faqs = [
 {
 question: 'Can you build a base in Project: Mist?',
 answer:
 'Yes. Steam describes a moving train base that can be upgraded, fortified, defended, and customized during progression.',
 },
 {
 question: 'Should I build storage or defenses first?',
 answer:
 'Build storage first if crafting and repairs are stalling, then add defenses before longer trips into dangerous areas.',
 },
 {
 question: 'Are doors and windows confirmed?',
 answer:
 'Steam discussions show players asking about doors and windows, with replies indicating they are planned for future patches rather than something to rely on immediately.',
 },
 {
 question: 'Is train building final in Early Access?',
 answer:
 'No. Train building is an Early Access system, so available pieces, costs, and limits can change with patches.',
 },
];

export default function ProjectMistBuildingTrainBasePage() {
 return (
 <ProjectMistArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Train Base Building"
 heroImage={projectMistImages.trainBase}
 heroAlt="Project: Mist train base building guide image"
 faqs={faqs}
 >
 <BlufBox title="Base Building Answer">
 <p>
 <strong>Build the train base to reduce risk between runs, not just to decorate.</strong>{' '}
 Steam describes the train as a moving base you can upgrade, fortify,
 defend, and customize. In Early Access, prioritize storage, defenses,
 repairs, and resource flow before assuming every building piece is
 available.
 </p>
 </BlufBox>

 <SearchAnswerPanel
 title="Project: Mist Train Base Quick Answer"
 answer="The train is a moving base that can be upgraded, fortified, defended, and customized. In Early Access, build storage first, defenses before long trips, and treat doors and windows as future patches."
 intentRows={pmBaseSearchIntent}
 jumpLinks={pmBaseJumpLinks}
 />

 <StatusPanel items={pmBaseStatusItems} />

 <section id="base-priorities" className="prose-game">
 <h2>Train Base Priorities</h2>
 <ArticleImage
 src={projectMistImages.trainBase}
 alt="Project: Mist train base priority guide visual"
 caption="The train should make the next trip easier: better storage, safer returns, stronger defenses, and faster crafting decisions."
 />
 <p>
 The train base is the safest place to turn scattered loot into a plan.
 If a co-op group returns with food, water, ammo materials, and repair
 parts but cannot find anything, the base is failing its job.
 </p>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Building topic</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Current guidance</th>
 </tr>
 </thead>
 <tbody>
 {projectMistBuildingRows.map(([topic, guidance]) => (
 <tr key={topic} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{topic}</th>
 <td className="px-4 py-3 text-muted-foreground">{guidance}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>Co-op Building Roles</h2>
 <ArticleImage
 src={projectMistImages.multiplayer}
 alt="Project: Mist co-op train base building image"
 caption="In co-op, split base work so one player sorts storage, one plans defenses, and one prepares the next route."
 />
 <ul>
 <li>Assign one player to storage so materials do not disappear into random containers.</li>
 <li>Assign one player to defenses before entering longer facility routes.</li>
 <li>Assign one player to crafting and ammo so the group knows when to retreat.</li>
 </ul>
 </section>

 <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">5-Step Base Building Plan</h2>
 <ActionTable rows={pmBaseActionRows} />

 <section id="storage-vs-defense" className="prose-game">
 <h2>Storage vs Defense Priority</h2>
 <p>
 The most common Early Access base failure is not too few defenses but
 too little storage discipline. Sort materials first, then add
 defenses, then plan the train repair objective. This order keeps the
 group productive instead of arguing over missing parts.
 </p>
 </section>

 <section id="doors-windows" className="prose-game">
 <h2>Doors and Windows: Plan for Future Patches</h2>
 <p>
 Steam discussion replies indicate that doors, windows, and expanded
 structures are planned for later patches. Do not build a layout that
 depends on pieces that are not yet confirmed in the current build.
 </p>
 </section>

 <section id="coop-roles" className="prose-game">
 <h2>Co-op Building Roles in Practice</h2>
 <p>
 The simplest co-op split for the moving base is a builder, a
 defender, a quartermaster, and a scout. The scout handles route
 scouting, the builder places defenses, the quartermaster sorts
 storage, and the defender covers the return trip. Rotate the
 quartermaster role so no one is stuck sorting loot for every run.
 </p>
 </section>

 <SourceCheckTable title="Project: Mist Train Base Sources" rows={pmBaseSourceRows} />
 </ProjectMistArticle>
 );
}
