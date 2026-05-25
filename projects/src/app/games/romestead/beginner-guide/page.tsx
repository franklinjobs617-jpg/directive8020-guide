import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox } from '@/components/guide-blocks';
import { RomesteadArticle } from '@/components/romestead-article';
import {
  createRomesteadMetadata,
  romesteadBeginnerRows,
  romesteadImages,
} from '@/lib/romestead';

const title = 'Romestead Beginner Guide: First Day, Base Building, Survivors and Gods';
const description =
  'Romestead beginner guide for the first hour: gather resources, build workstations, organize storage, recruit survivors, prepare night defense, explore safely, and use Roman god blessings carefully.';
const canonical = '/games/romestead/beginner-guide';

export const metadata = createRomesteadMetadata({
  title,
  description,
  canonical,
  image: romesteadImages.screenshot1,
});

const faqs = [
  {
    question: 'What should I do first in Romestead?',
    answer:
      'Gather food and basic resources, build storage and early workstations, keep the first settlement compact, and prepare for night defense before pushing deep into exploration.',
  },
  {
    question: 'Should I explore dungeons immediately?',
    answer:
      'Not immediately. Scout nearby areas first, but wait until food, tools, storage, and defense are stable before treating dungeons as your main goal.',
  },
  {
    question: 'How important are survivors in Romestead?',
    answer:
      'Survivors are important because they turn repeated chores into a settlement system. Recruit with roles in mind instead of adding workers randomly.',
  },
  {
    question: 'What is the best god blessing in Romestead?',
    answer:
      'A final best blessing cannot be claimed safely during the launch window. Use blessings that match your current shortage, such as survival, production, defense, or exploration.',
  },
  {
    question: 'Can I play Romestead solo?',
    answer:
      'Yes. Steam lists Single-player, and the official description also supports co-op for groups.',
  },
  {
    question: 'What beginner mistake should I avoid?',
    answer:
      'Do not spread your base too wide before you understand night attacks, worker flow, storage needs, and defensive pressure.',
  },
];

export default function RomesteadBeginnerGuidePage() {
  return (
    <RomesteadArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Beginner Guide"
      heroImage={romesteadImages.screenshot1}
      heroAlt="Romestead early settlement and survival crafting screenshot"
      faqs={faqs}
    >
      <BlufBox title="First-Hour Plan">
        <p>
          <strong>For your first Romestead run, build stability before
          ambition.</strong> Get food, basic materials, storage, early
          workstations, and a defendable settlement layout before chasing
          distant dungeons or advanced blessings. Romestead is a survival town
          builder, so the first hour is less about perfect optimization and more
          about avoiding a settlement that cannot feed, craft, or defend itself.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2>First Day Priorities</h2>
        <ArticleImage
          src={romesteadImages.screenshot2}
          alt="Romestead first day base building screenshot"
          caption="Your first day should create a working settlement core: resources, storage, crafting, food, and a layout that can be defended when night pressure starts."
        />
        <p>
          Romestead mixes personal survival with settlement management. That
          means every early choice should answer a practical question: can you
          store materials, craft what you need, feed the group, move safely at
          night, and assign survivors to useful work? If the answer is no, fix
          that before expanding the settlement.
        </p>
      </section>

      <ActionTable rows={romesteadBeginnerRows} />

      <section className="prose-game">
        <h2>Base Layout That Survives the Launch Window</h2>
        <ArticleImage
          src={romesteadImages.planningAnimalFarm}
          alt="Romestead defensive settlement layout screenshot"
          caption="Planning illustration for a compact farm-and-animal layout. Use it as layout guidance, not as a claim about exact final Romestead UI or building placement."
        />
        <p>
          Keep early storage close to workstations, keep food production easy to
          reach, and avoid placing key stations so far apart that every craft
          becomes a long walk. If undead pressure increases at night, a tight
          settlement gives you clearer defense lanes and fewer weak edges. Save
          decorative builds for after the base has enough food, materials,
          tools, and defense.
        </p>
      </section>

      <section className="prose-game">
        <h2>Survivors, Exploration, and God Blessings</h2>
        <ArticleImage
          src={romesteadImages.planningCropHarvesting}
          alt="Romestead exploration and character progression screenshot"
          caption="Planning illustration for food and crop flow. Use survivors and blessings to solve the problem you actually have: gathering speed, defense, food pressure, crafting bottlenecks, or safer exploration."
        />
        <p>
          Survivors should reduce the chores that slow your settlement down.
          If you are always short on basic materials, assign help around
          gathering and production. If nights feel dangerous, use layout and
          roles to improve defense before exploring farther. God blessings
          should be treated as flexible support until players verify final
          balance, strongest combinations, and late-game builds.
        </p>
      </section>
    </RomesteadArticle>
  );
}
