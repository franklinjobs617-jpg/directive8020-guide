import { ProjectMistArticle } from '@/components/project-mist-article';
import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { createProjectMistMetadata, projectMistImages, projectMistLaunchSnapshotRows } from '@/lib/project-mist';

const title = 'Project: Mist Release Date, Early Access, Demo & Price Notes';
const description =
  'Project: Mist release date guide updated for Early Access launch: Steam live status, price snapshot, demo notes, PC platform status, and roadmap timing.';
const canonical = '/games/project-mist/release-date';

export const metadata = createProjectMistMetadata({
  title,
  description,
  canonical,
  image: projectMistImages.release,
});

const faqs = [
  {
    question: 'What is the Project: Mist release date?',
    answer:
      'Project: Mist released into Steam Early Access on 19 May, 2026.',
  },
  {
    question: 'Is Project: Mist Early Access?',
    answer:
      'Yes. The Steam page currently presents Project: Mist as an Early Access release.',
  },
  {
    question: 'Does Project: Mist have a demo?',
    answer:
      'Steam app data still references a Project: Mist demo app, but launch-window discussions include demo and save issues, so check the current store button before relying on it.',
  },
  {
    question: 'Will Project: Mist price change after Early Access?',
    answer:
      'Secondary Early Access coverage and Steam notes indicate the price is planned to increase when the full version releases.',
  },
];

const launchChecks = [
  ['Steam status', 'Project: Mist is live in Early Access; check the current store button in your region before buying.'],
  ['Demo access', 'Check whether the demo is still available for your account and whether demo saves behave correctly.'],
  ['Build version', 'Read the latest Steam news before a group run because demo and Early Access builds can differ.'],
  ['Price', 'The US store snapshot was $22.49 on 20 May, 2026; check your local Steam currency before purchase.'],
  ['Save data', 'Do not assume demo saves transfer unless Chicken Launcher confirms it.'],
];

export default function ProjectMistReleaseDatePage() {
  return (
    <ProjectMistArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Release Date"
      heroImage={projectMistImages.release}
      heroAlt="Project: Mist release date and platform guide image"
      faqs={faqs}
    >
      <BlufBox title="Release Answer">
        <p>
          <strong>Project: Mist is live in Steam Early Access as of 19 May, 2026.</strong>{' '}
          Treat Steam as the source of truth for availability and local price,
          then use Steam news and discussions for launch-window demo, save, and
          roadmap updates.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2>Release Date and Platform</h2>
        <ArticleImage
          src={projectMistImages.release}
          alt="Project: Mist release date visual"
          caption="Project: Mist is currently a PC Steam release, so console or cross-platform claims need official confirmation before they appear in guides."
        />
        <p>
          The current Steam listing gives the key facts: Project: Mist is a PC
          game from Chicken Launcher with a listed release date of{' '}
          <strong>19 May, 2026</strong>. It is now live in Early Access. The
          platform data points to Windows
          10/11 64-bit, not macOS, Linux, PlayStation, or Xbox.
        </p>

        <h2>Price, Reviews, and Roadmap Snapshot</h2>
        <ArticleImage
          src={projectMistImages.screenshot4}
          alt="Project: Mist price and review snapshot image"
          caption="Price and review counts change quickly after launch, so this page keeps those facts dated instead of treating them as permanent."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Item</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Verified snapshot</th>
            </tr>
          </thead>
          <tbody>
            {projectMistLaunchSnapshotRows.map(([item, value]) => (
              <tr key={item} className="border-b border-border/30 last:border-0">
                <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{item}</th>
                <td className="px-4 py-3 text-muted-foreground">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">

        <h2>Demo and Early Access Context</h2>
        <ArticleImage
          src={projectMistImages.demo}
          alt="Project: Mist demo and pricing visual"
          caption="Steam Community launch news makes the demo important: it lets players test performance, co-op readiness, and controls before committing to an Early Access build."
        />
        <p>
          Steam shows a demo option, and Steam Community launch messaging points
          players toward testing and feedback. Because players are already
          discussing demo-save issues, use the demo as a practical filter but
          do not assume demo progress will carry cleanly into the Early Access
          build.
        </p>

        <h2>Launch Checklist</h2>
        <ArticleImage
          src={projectMistImages.screenshot2}
          alt="Project: Mist launch checklist screenshot"
          caption="Launch-day checks should focus on store state, build version, demo behavior, and local pricing instead of speculative route advice."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Check</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">What to do</th>
            </tr>
          </thead>
          <tbody>
            {launchChecks.map(([check, action]) => (
              <tr key={check} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{check}</td>
                <td className="px-4 py-3 text-muted-foreground">{action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ProjectMistArticle>
  );
}
