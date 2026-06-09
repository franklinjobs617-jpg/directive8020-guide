import { ProjectMistArticle } from '@/components/project-mist-article';
import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { createProjectMistMetadata, projectMistImages, projectMistWorthItRows } from '@/lib/project-mist';

const title = 'Is Project: Mist Worth It in Early Access? Price, Reviews & Risk';
const description =
  'Project: Mist buying guide for Early Access: launch price snapshot, Mixed reviews, co-op value, demo caution, refund checks, and who should wait.';
const canonical = '/games/project-mist/is-it-worth-it';

export const metadata = createProjectMistMetadata({
  title,
  description,
  canonical,
  image: projectMistImages.hero,
});

const faqs = [
  {
    question: 'Is Project: Mist worth buying now?',
    answer:
      'Project: Mist is most worth considering if you accept Early Access risk and want physics survival, online co-op, giant creatures, and a moving train base.',
  },
  {
    question: 'What is the Project: Mist Steam price snapshot?',
    answer:
      'The US Steam store snapshot showed $24.99 on 9 June, 2026. Regional prices and discounts can change, so check your local store before buying.',
  },
  {
    question: 'What are the Steam reviews like?',
    answer:
      'Steam reviews were Mixed from 169 reviews in the 9 June, 2026 snapshot, so read recent reviews before buying.',
  },
  {
    question: 'Who should wait for patches?',
    answer:
      'Wait if you need polished saves, stable performance, complete building systems, confirmed long content length, or fewer Early Access bugs.',
  },
];

export default function ProjectMistWorthItPage() {
  return (
    <ProjectMistArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Is It Worth It?"
      heroImage={projectMistImages.hero}
      heroAlt="Project: Mist Early Access buying guide image"
      faqs={faqs}
    >
      <BlufBox title="Buying Answer">
        <p>
          <strong>Project: Mist is a high-potential Early Access buy, not a polished safe bet.</strong>{' '}
          The strongest reasons to buy now are co-op survival, Gravity Gun
          physics, giant creature encounters, and the moving train base. The
          strongest reasons to wait are Mixed launch reviews, save/demo reports,
          performance uncertainty, and systems that may change.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2>Launch Price and Review Snapshot</h2>
        <ArticleImage
          src={projectMistImages.hero}
          alt="Project: Mist Early Access value guide visual"
          caption="Buying advice should use dated facts because Steam discounts, review count, and player sentiment can move quickly after launch."
        />
        <p>
          On 9 June, 2026, the US Steam store snapshot showed $24.99. Steam
          reviews were Mixed from 169 reviews in the same snapshot. Those
          numbers are useful for context, but your final decision should use
          the current store page and recent reviews in your region.
        </p>
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Buying factor</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">How to read it</th>
            </tr>
          </thead>
          <tbody>
            {projectMistWorthItRows.map(([factor, reading]) => (
              <tr key={factor} className="border-b border-border/30 last:border-0">
                <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{factor}</th>
                <td className="px-4 py-3 text-muted-foreground">{reading}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>Buy Now If These Are Your Priorities</h2>
        <ArticleImage
          src={projectMistImages.creatures}
          alt="Project: Mist creature and co-op value image"
          caption="The strongest appeal is unusual survival pressure: physics tools, huge creatures, co-op role splitting, and a mobile train base."
        />
        <ul>
          <li>You want survival horror with physics-driven combat and traversal.</li>
          <li>You plan to play online co-op and accept Early Access rough edges.</li>
          <li>You like testing systems while developers are actively collecting feedback.</li>
        </ul>

        <h2>Wait If These Are Deal Breakers</h2>
        <ArticleImage
          src={projectMistImages.screenshot6}
          alt="Project: Mist wait for patches guide image"
          caption="Waiting is reasonable if save stability, complete building tools, or smoother performance matters more than playing at launch."
        />
        <ul>
          <li>You need stable saves and no launch-window progression blockers.</li>
          <li>You want confirmed campaign length and finished building systems.</li>
          <li>You prefer buying after roadmap details and early patches are published.</li>
        </ul>
      </section>
    </ProjectMistArticle>
  );
}
