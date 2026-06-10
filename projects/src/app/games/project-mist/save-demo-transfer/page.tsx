import { ProjectMistArticle } from '@/components/project-mist-article';
import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { createProjectMistMetadata, projectMistImages, projectMistSaveRows } from '@/lib/project-mist';

const title = 'Project: Mist Demo Saves, Save Transfer & Infinite Loading';
const description =
 'Project: Mist save guide for Early Access: demo save transfer caution, infinite loading reports, Steam Cloud checks, fresh-start testing, and safe bug reports.';
const canonical = '/games/project-mist/save-demo-transfer';

export const metadata = createProjectMistMetadata({
 title,
 description,
 canonical,
 image: projectMistImages.demo,
});

const faqs = [
 {
 question: 'Do Project: Mist demo saves transfer?',
 answer:
 'Do not assume Project: Mist demo saves transfer safely unless the current Steam news or developer replies confirm it for your build.',
 },
 {
 question: 'Why is my demo save stuck loading?',
 answer:
 'Steam discussions include launch-window reports of demo-save loading issues, so test a fresh Early Access save before reinstalling or deleting data.',
 },
 {
 question: 'Does Project: Mist support Steam Cloud?',
 answer:
 'Yes. Steam lists Steam Cloud for Project: Mist, so check sync state before deleting or replacing local saves.',
 },
 {
 question: 'Should I delete saves to fix loading?',
 answer:
 'Do not delete saves first. Back up data, test a new save, verify files, and report repeatable loading loops with your build version.',
 },
];

export default function ProjectMistSaveDemoTransferPage() {
 return (
 <ProjectMistArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Demo Saves & Transfer"
 heroImage={projectMistImages.demo}
 heroAlt="Project: Mist demo save and transfer guide image"
 faqs={faqs}
 >
 <BlufBox title="Save Safety Answer">
 <p>
 <strong>Do not treat demo saves as safe Early Access saves by default.</strong>{' '}
 Steam lists Steam Cloud, but launch-window discussions include
 demo-save loading questions. Back up before deleting anything, then
 test whether a fresh Early Access save loads normally.
 </p>
 </BlufBox>

 <section className="prose-game">
 <h2>Safe Save Checks</h2>
 <ArticleImage
 src={projectMistImages.demo}
 alt="Project: Mist demo save check image"
 caption="Demo and Early Access builds can differ, so save handling should be cautious until the developer confirms exact transfer behavior."
 />
 <p>
 Save problems are high-risk because a bad troubleshooting step can
 destroy progress. Start with reversible checks: verify files, inspect
 Steam Cloud sync, test a new save, and avoid deleting the old save
 until you know whether the problem is save-specific or build-wide.
 </p>
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Save issue</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Safer response</th>
 </tr>
 </thead>
 <tbody>
 {projectMistSaveRows.map(([issue, response]) => (
 <tr key={issue} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{issue}</th>
 <td className="px-4 py-3 text-muted-foreground">{response}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>What to Include in a Save Bug Report</h2>
 <ArticleImage
 src={projectMistImages.screenshot7}
 alt="Project: Mist save bug report image"
 caption="A useful report explains the build, save origin, last location, cloud status, and exact loading behavior."
 />
 <ul>
 <li>Whether the save started in the demo or the Early Access build.</li>
 <li>The last objective or location before the loading loop.</li>
 <li>Whether Steam Cloud was enabled before and after the issue.</li>
 <li>Whether a new save loads correctly on the same PC.</li>
 </ul>
 </section>
 </ProjectMistArticle>
 );
}
