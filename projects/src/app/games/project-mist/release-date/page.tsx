import { ProjectMistArticle } from '@/components/project-mist-article';
import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { createProjectMistMetadata, projectMistImages } from '@/lib/project-mist';

const title = 'Project: Mist Release Date, Early Access, Demo & Price Notes';
const description =
  'Project: Mist release date guide covering Steam Early Access, demo status, price notes, PC platform status, and what to check before launch.';
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
      'Steam lists Project: Mist with a 19 May, 2026 release date and Early Access status.',
  },
  {
    question: 'Is Project: Mist Early Access?',
    answer:
      'Yes. The Steam page currently presents Project: Mist as an Early Access release.',
  },
  {
    question: 'Does Project: Mist have a demo?',
    answer:
      'Steam shows a Project: Mist demo option on the store page, so players can test the game before buying if the demo remains available in their region.',
  },
  {
    question: 'Will Project: Mist price change after Early Access?',
    answer:
      'Secondary Early Access coverage and Steam notes indicate the price is planned to increase when the full version releases.',
  },
];

const launchChecks = [
  ['Steam status', 'Check whether the store button says Coming Soon, Early Access, or Play Now in your region.'],
  ['Demo access', 'Use the demo to test performance, controls, and co-op expectations before buying.'],
  ['Build version', 'Read the latest Steam news before a group run because demo and Early Access builds can differ.'],
  ['Price', 'Check your local Steam currency because Early Access pricing can vary by region.'],
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
          <strong>Steam lists Project: Mist for 19 May, 2026 in Early Access.</strong>{' '}
          The safest launch-day answer is to treat Steam as the source of truth,
          then use Steam news for demo and feedback updates.
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
          <strong>19 May, 2026</strong>. The platform data points to Windows
          10/11 64-bit, not macOS, Linux, PlayStation, or Xbox.
        </p>

        <h2>Demo and Early Access Context</h2>
        <ArticleImage
          src={projectMistImages.demo}
          alt="Project: Mist demo and pricing visual"
          caption="Steam Community launch news makes the demo important: it lets players test performance, co-op readiness, and controls before committing to an Early Access build."
        />
        <p>
          Steam shows a demo option, and Steam Community launch messaging points
          players toward testing and feedback. Use the demo as a practical
          filter: if your PC struggles there, wait for patches or lower settings
          before buying into a longer co-op run.
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
