import { ArticleImage } from '@/components/article-media';
import { BlufBox, SearchAnswerPanel } from '@/components/guide-blocks';
import { ProjectMistArticle } from '@/components/project-mist-article';
import { createProjectMistMetadata, projectMistImages, projectMistLockpickRows } from '@/lib/project-mist';

const title = 'Project: Mist Lockpick Guide - How to Open Chests';
const description =
  'Project: Mist lockpick and chest guide for Early Access: rotate the pick, raise it, avoid obstacles, hit gold pins, and troubleshoot unclear inputs or stuck locked chests.';
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
      'Use the lockpick minigame: rotate the pick, raise it through the channel, avoid obstacles, and push it into the gold pins to unlock the chest.',
  },
  {
    question: 'What button rotates the lockpick?',
    answer:
      'A launch-window Steam discussion reply describes Space as the rotate input for the lockpick minigame. Check the in-game keybind screen after patches.',
  },
  {
    question: 'What button raises the lockpick?',
    answer:
      'A launch-window Steam discussion reply describes the left mouse button as the input used to raise the lockpick. Treat this as patch-sensitive until the game UI explains it clearly.',
  },
  {
    question: 'Why will a locked chest not open?',
    answer:
      'Most failures come from input focus, moving too quickly through the minigame, missing the gold pin angle, or an Early Access interaction bug. Reset the chest, test another chest, then report build version and steps if it still fails.',
  },
];

const searchIntentRows = [
  {
    query: 'Project Mist lockpick',
    answer:
      'Rotate the pick, raise it slowly, avoid obstacles, and hit the gold pins. Launch-window player replies point to Space for rotation and left mouse button for lift.',
    href: '#controls',
    label: 'Controls',
  },
  {
    query: 'Project Mist how to open chests',
    answer:
      'Do not force the pick straight through. Adjust angle first, lift only when the path is clear, and reset if the pick catches on the route.',
    href: '#method',
    label: 'Method',
  },
  {
    query: 'Project Mist chest bug',
    answer:
      'Test input focus, reset the minigame, try another chest, and record build version, location, and exact steps before reporting it as a bug.',
    href: '#troubleshooting',
    label: 'Fixes',
  },
];

const jumpLinks = [
  { href: '#controls', label: 'Controls' },
  { href: '#method', label: 'Method' },
  { href: '#troubleshooting', label: 'Troubleshooting' },
  { href: '/games/project-mist/map-facilities', label: 'Map & Facilities' },
  { href: '/games/project-mist/weapons-crafting', label: 'Weapons & Crafting' },
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
          Launch-window Steam discussion replies describe the core flow as
          rotating with Space, raising the pick with the left mouse button,
          avoiding obstacles, and pushing into gold pins. This is Early Access,
          so treat exact input labels as patch-sensitive and confirm them in the
          current keybind screen when possible.
        </p>
      </BlufBox>

      <SearchAnswerPanel
        title="Project: Mist Lockpick Quick Answer"
        answer="Rotate first, lift slowly, avoid obstacles, and hit the gold pins. If a chest still will not open, reset the interactable, test another chest, and separate input confusion from a real Early Access bug."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <section id="controls" className="prose-game">
        <h2>Lockpick Controls and Goal</h2>
        <ArticleImage
          src={projectMistImages.crafting}
          alt="Project: Mist locked chest and crafting guide visual"
          caption="Locked chests are worth learning early because facility rooms and side paths can hide useful resources, blueprints, and gear."
        />
        <p>
          The lockpick minigame is a launch-window confusion point because it
          asks you to control angle and lift at the same time. The goal is not
          to shove the pick straight through the lock. The goal is to read the
          channel, rotate until the path lines up, lift only when the path is
          clear, and touch the gold pins without catching the pick on blockers.
          If the movement feels unclear, slow down first. Fast input makes the
          minigame look broken even when the chest is responding.
        </p>
      </section>

      <section id="method" className="mt-8">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Step-by-Step Chest Method</h2>
        <div className="overflow-hidden rounded-lg border border-border/50 bg-card/30">
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
      </section>

      <ArticleImage
        src={projectMistImages.facilities}
        alt="Project: Mist facility route where locked chests can appear"
        caption="Facility runs are where locked containers matter most, because resources, crafting stops, and upgrade checks sit close together."
      />

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">New Player vs Returning Player Advice</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-lg border border-border/50 bg-card/30 p-5">
            <h3 className="text-base font-bold text-foreground">If this is your first chest</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>Stop trying to lift immediately. Rotate until the path is readable.</li>
              <li>Use short inputs instead of holding every button at once.</li>
              <li>Watch the gold pins, not only the tip of the pick.</li>
              <li>Back out and re-open the chest if the camera or input feels stuck.</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border/50 bg-card/30 p-5">
            <h3 className="text-base font-bold text-foreground">If you already know the minigame</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>Prioritize chests near facilities, side rooms, and train-base return routes.</li>
              <li>Skip risky containers if health, ammo, or co-op timing is already strained.</li>
              <li>Record any chest that fails after a reset, because that may be patch data.</li>
              <li>Compare the reward against travel cost before backtracking only for one chest.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="troubleshooting" className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">If a Chest Still Will Not Open</h2>
        <ArticleImage
          src={projectMistImages.screenshot2}
          alt="Project: Mist locked chest troubleshooting route"
          caption="Before reporting a chest as bugged, test input focus, minigame reset, and whether the chest is actually locked or blocked by progression."
        />
        <div className="overflow-x-auto rounded-lg border border-border/50 bg-card/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Problem</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Likely cause</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Fix</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Pick rotates but never reaches pins', 'Angle is wrong or you are lifting too early.', 'Rotate first, lift in short bursts, and watch the channel before pushing.'],
                ['Nothing responds', 'Game window, input focus, or keybind state may be wrong.', 'Click back into the game, test movement, then reopen the chest.'],
                ['One chest fails but others work', 'Single interactable may be stuck or progression-gated.', 'Mark the location, leave, reload, and test after the next save point.'],
                ['Every locked chest fails', 'Input mapping, build bug, or controller conflict.', 'Try keyboard and mouse, check keybinds, then report the build and steps.'],
                ['Reward feels not worth it', 'The route cost is higher than the container value.', 'Prioritize chests near facilities, blueprints, and resource-dense rooms.'],
              ].map(([problem, cause, fix]) => (
                <tr key={problem} className="border-b border-border/30 last:border-0">
                  <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{problem}</th>
                  <td className="px-4 py-3 text-muted-foreground">{cause}</td>
                  <td className="px-4 py-3 text-muted-foreground">{fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Which Chests Are Worth Opening?</h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          Not every locked chest deserves the same effort. The best containers
          are the ones that sit near a useful route: facility benches, upgrade
          stations, side rooms that already contain resources, and paths that
          loop back to the train base. A chest in a dangerous branch can still
          be worth it, but only if you can return safely after spending health,
          ammo, or time. In co-op, one player should check the container while
          another watches enemy pressure so the group does not lose more than
          the chest can possibly return.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border/50 bg-card/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Chest location</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Priority</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why it matters</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Facility side room', 'High', 'Likely to sit near crafting, upgrades, and resource conversion.'],
                ['Train-base return path', 'High', 'Easy to bank rewards and recover before the next push.'],
                ['Enemy-heavy branch', 'Medium', 'Open only when health, ammo, and retreat route are stable.'],
                ['Long backtrack route', 'Low', 'Delay unless you know the reward type or need completion notes.'],
              ].map(([location, priority, reason]) => (
                <tr key={location} className="border-b border-border/30 last:border-0">
                  <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{location}</th>
                  <td className="px-4 py-3 text-muted-foreground">{priority}</td>
                  <td className="px-4 py-3 text-muted-foreground">{reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <ArticleImage
        src={projectMistImages.trainBase}
        alt="Project: Mist train base return route after opening locked chests"
        caption="The safest chest route is one that lets you return to the train, sort materials, craft, and reset before the next facility push."
      />

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Bug Report Checklist</h2>
        <p className="leading-relaxed text-muted-foreground">
          Early Access bug reports are only useful when they are reproducible.
          If a locked chest truly fails after the checks above, record the build
          version, whether you used keyboard or controller, the chest location,
          whether other chests work, what happened after reloading, and the last
          quest or facility objective you completed. That separates "the input
          was unclear" from "this interactable is broken," which helps both
          players and developers.
        </p>
      </section>
    </ProjectMistArticle>
  );
}
