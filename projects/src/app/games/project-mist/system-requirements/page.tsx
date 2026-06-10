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
  pmSpecActionRows,
  pmSpecJumpLinks,
  pmSpecSearchIntent,
  pmSpecSourceRows,
  pmSpecStatusItems,
  projectMistImages,
  projectMistMinimumSpecs,
} from '@/lib/project-mist';

const title = 'Project: Mist System Requirements - Official Minimum PC Specs';
const description =
 'Official Project: Mist PC system requirements from Steam: Windows 10/11, 8 GB RAM, GTX 750 / Radeon HD 7770, DirectX 11, storage, and low-end PC notes.';
const canonical = '/games/project-mist/system-requirements';

export const metadata = createProjectMistMetadata({
 title,
 description,
 canonical,
 image: projectMistImages.facilities,
});

const faqs = [
 {
 question: 'What are the official Project: Mist minimum PC specs?',
 answer:
 'Steam lists Windows 10/11 64-bit, a 3.2 GHz dual core processor, 8 GB RAM, GTX 750 or Radeon HD 7770, DirectX 11, and 20 GB storage.',
 },
 {
 question: 'What are the Project: Mist recommended specs?',
 answer:
 'Steam does not list recommended Project: Mist PC specs yet, so the minimum requirements are the only official baseline.',
 },
 {
 question: 'Can Project: Mist run on 8 GB RAM?',
 answer:
 'Yes, 8 GB RAM is listed in the official minimum requirements, but closing browsers, launchers, and capture apps is safer on 8 GB systems.',
 },
 {
 question: 'Does Project: Mist require DirectX 11?',
 answer:
 'Steam lists DirectX Version 11 in the official minimum requirements.',
 },
];

const specDecisionRows = [
 ['8 GB RAM PC', 'Meets the official minimum, but close browsers, Discord streams, capture tools, and extra launchers before playing.'],
 ['GTX 750 / Radeon HD 7770 class GPU', 'Meets the listed GPU floor. Start on low settings and prioritize stable frame pacing.'],
 ['No recommended specs listed', 'Do not assume high settings are safe. Use the minimum as a launch baseline and leave extra headroom for co-op.'],
 ['20 GB storage', 'Keep more than 20 GB free so Steam can patch and unpack files without running out of space.'],
 ['Co-op performance', 'Test solo first. If solo is unstable, co-op will be harder to troubleshoot because network and host load add more variables.'],
];

export default function ProjectMistSystemRequirementsPage() {
 return (
 <ProjectMistArticle
 title={title}
 description={description}
 canonical={canonical}
 label="System Requirements"
 heroImage={projectMistImages.facilities}
 heroAlt="Project: Mist official Steam screenshot showing an abandoned facility"
 faqs={faqs}
 >
 <BlufBox title="Specs Answer">
 <p>
 <strong>Project: Mist has modest official minimum specs on Steam:</strong>{' '}
 Windows 10/11 64-bit, 3.2 GHz dual core CPU, 8 GB RAM, GTX 750 or
 Radeon HD 7770, DirectX 11, and 20 GB storage. Recommended specs are
 not listed yet.
 </p>
 </BlufBox>

 <SearchAnswerPanel
 title="Project: Mist System Requirements Quick Answer"
 answer="Steam lists Windows 10/11 64-bit, 3.2 GHz dual core CPU, 8 GB RAM, GTX 750 or Radeon HD 7770, DirectX 11, and 20 GB storage. Recommended specs are not listed yet."
 intentRows={pmSpecSearchIntent}
 jumpLinks={pmSpecJumpLinks}
 />

 <StatusPanel items={pmSpecStatusItems} />

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">PC situation</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">What to do</th>
 </tr>
 </thead>
 <tbody>
 {specDecisionRows.map(([situation, guidance]) => (
 <tr key={situation} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{situation}</td>
 <td className="px-4 py-3 text-muted-foreground">{guidance}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section id="min-spec" className="prose-game">
 <h2>Minimum Requirements</h2>
 <ArticleImage
 src={projectMistImages.facilities}
 alt="Project: Mist system requirements visual"
 caption="The game combines open-world traversal, facilities, physics, and co-op, so the minimum spec should be treated as the floor for a stable first test."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Component</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Official minimum requirement</th>
 </tr>
 </thead>
 <tbody>
 {projectMistMinimumSpecs.map(([label, value]) => (
 <tr key={label} className="border-b border-border last:border-0">
 <th scope="row" className="w-40 px-4 py-3 text-left font-medium text-muted-foreground">{label}</th>
 <td className="px-4 py-3 text-foreground">{value}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section id="rec-spec" className="prose-game">
 <h2>Recommended Requirements</h2>
 <ArticleImage
 src={projectMistImages.screenshot3}
 alt="Project: Mist performance planning screenshot"
 caption="Steam does not yet list a recommended tier, so do not fabricate a benchmark target for the page."
 />
 <p>
 Steam does not list recommended Project: Mist system requirements yet.
 For now, use the minimum spec as the official floor and leave extra
 headroom if you want smoother co-op, recording, or higher visual
 settings.
 </p>

 <h2 id="8gb-ram">Low-End PC Advice</h2>
 <ArticleImage
 src={projectMistImages.screenshot6}
 alt="Project: Mist low-end PC advice image"
 caption="Start with the lowest settings that keep inputs readable, then raise only the options that do not hurt frame pacing."
 />
 <ul>
 <li>
 <strong>8 GB RAM:</strong> Close browsers, Discord streams, capture
 tools, and extra launchers before playing.
 </li>
 <li>
 <strong>Older GPUs:</strong> Start low and prioritize stable frame
 time over image quality.
 </li>
 <li>
 <strong>Storage:</strong> Keep more than 20 GB free so Steam can
 patch, unpack, and maintain cache files.
 </li>
 <li>
 <strong>Co-op:</strong> If multiplayer feels unstable, test solo
 performance first so you can separate PC load from network issues.
 </li>
 </ul>
 </section>

 <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">5-Step Spec Planning Plan</h2>
 <ActionTable rows={pmSpecActionRows} />

 <section id="storage-dx" className="prose-game">
 <h2>Storage, DirectX, and Co-op Headroom</h2>
 <p>
 The Steam minimum lists 20 GB storage and DirectX 11. Keep more than
 20 GB free so Steam can patch, unpack, and maintain cache files. For
 co-op, leave extra headroom on the host PC because save, scaling, and
 network traffic all add load beyond a single-player benchmark.
 </p>
 </section>

 <SourceCheckTable title="Project: Mist System Requirements Sources" rows={pmSpecSourceRows} />
 </ProjectMistArticle>
 );
}
