import { ProjectMistArticle } from '@/components/project-mist-article';
import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { createProjectMistMetadata, projectMistImages, projectMistLockpickRows } from '@/lib/project-mist';

const title = 'Project: Mist Lockpick Guide - How to Open Chests';
const description =
  'Project: Mist lockpick and chest guide for Early Access: rotate the pick, raise it, avoid obstacles, hit gold pins, and troubleshoot unclear inputs.';
const canonical = '/games/project-mist/lockpick-chests';

export const metadata = createProjectMistMetadata({
  title,
  description,
  canonical,
  image: projectMistImages.crafting,
});

const faqs = [
  {
    question: 'How do you open chests in Project: Mist?',
    answer:
      'Use the lockpick minigame: rotate the pick, raise it through the path, avoid obstacles, and push it into the gold pins to unlock the chest.',
  },
  {
    question: 'What button rotates the lockpick?',
    answer:
      'A Steam discussion reply describes Space as the rotate input for the lockpick minigame.',
  },
  {
    question: 'What button raises the lockpick?',
    answer:
      'A Steam discussion reply describes the left mouse button as the input used to raise the lockpick.',
  },
  {
    question: 'Is the lockpick guide final?',
    answer:
      'No. Project: Mist is in Early Access, so lockpick inputs and minigame tuning can change with patches.',
  },
];

export default function ProjectMistLockpickChestsPage() {
  return (
    <ProjectMistArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Lockpick & Chests"
      heroImage={projectMistImages.crafting}
      heroAlt="Project: Mist lockpick and chest guide image"
      faqs={faqs}
    >
      <BlufBox title="Lockpick Answer">
        <p>
          <strong>To open locked chests, guide the lockpick through the minigame instead of forcing it.</strong>{' '}
          A Steam discussion reply describes the core flow as rotating with
          Space, raising the pick with the left mouse button, avoiding obstacles,
          and pushing into gold pins.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2>Lockpick Controls and Goal</h2>
        <ArticleImage
          src={projectMistImages.crafting}
          alt="Project: Mist chest and crafting guide visual"
          caption="Locked chests are worth learning early because facility rooms and side paths can hide useful resources, blueprints, and gear."
        />
        <p>
          The lockpick minigame is a launch-window confusion point because the
          game asks you to control angle and lift at the same time. Move slowly,
          watch the path, and aim for the gold pins rather than trying to shove
          the pick straight through every obstacle.
        </p>
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Step</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">What to do</th>
            </tr>
          </thead>
          <tbody>
            {projectMistLockpickRows.map(([step, action]) => (
              <tr key={step} className="border-b border-border/30 last:border-0">
                <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{step}</th>
                <td className="px-4 py-3 text-muted-foreground">{action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>If a Chest Still Will Not Open</h2>
        <ArticleImage
          src={projectMistImages.screenshot2}
          alt="Project: Mist locked chest troubleshooting image"
          caption="Before reporting a chest as bugged, test input focus, minigame reset, and whether the chest is actually locked or blocked by progression."
        />
        <ul>
          <li>Step away from the chest and interact again to reset the minigame.</li>
          <li>Check whether keyboard and mouse focus is still on the game window.</li>
          <li>Try a different chest to separate one stuck interactable from a general input issue.</li>
          <li>If every locked chest fails, note your build version and report it in Steam discussions.</li>
        </ul>
      </section>
    </ProjectMistArticle>
  );
}
