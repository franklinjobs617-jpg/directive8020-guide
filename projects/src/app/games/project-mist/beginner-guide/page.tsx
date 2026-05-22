import { ProjectMistArticle } from "@/components/project-mist-article";
import { ArticleImage } from "@/components/article-media";
import { BlufBox, ActionTable } from "@/components/guide-blocks";
import {
  createProjectMistMetadata,
  projectMistDemoLootRows,
  projectMistDemoRiskRows,
  projectMistDemoRouteRows,
  projectMistImages,
  projectMistLockpickRows,
} from "@/lib/project-mist";

const title = "Project: Mist Beginner Guide: First Hour, Train Base, Gravity Gun & Co-op Survival";
const description =
  "Project: Mist beginner guide: first-hour priorities, Gravity Gun tips, train base upgrades, lockpicking, co-op roles, facility runs, and what to avoid on your first Early Access session.";
const canonical = "/games/project-mist/beginner-guide";

export const metadata = createProjectMistMetadata({
  title,
  description,
  canonical,
  image: projectMistImages.beginner,
});

const faqs = [
  {
    question: "What should beginners do first in Project: Mist?",
    answer:
      "Test controls, gather food and bandages, reach the train base early, learn lockpicking, and avoid deep facility runs before you understand creature pressure and retreat routes.",
  },
  {
    question: "How important is the Gravity Gun in Project: Mist?",
    answer:
      "The Gravity Gun is a core system because Steam highlights using physics to move objects, control space, and turn the environment into a weapon.",
  },
  {
    question: "Should beginners play Project: Mist solo or co-op?",
    answer:
      "Both are supported. Solo is slower and easier to control, while co-op helps divide scouting, defense, crafting, and combat if the group communicates.",
  },
  {
    question: "Does Project: Mist have co-op?",
    answer:
      "Yes. Steam lists single-player, multi-player, co-op, and online co-op. Steam page copy describes seamless 1-4 player co-op.",
  },
  {
    question: "Is this beginner guide final?",
    answer:
      "No. Project: Mist is an Early Access game, so route and balance advice should be treated as launch-window guidance until patches stabilize.",
  },
  {
    question: "Should beginners learn lockpicking early?",
    answer:
      "Yes. Locked chests can hold useful resources, and Steam discussions show lockpicking is a common launch-window confusion point.",
  },
];

const firstDayRows = [
  {
    step: "1. Test controls",
    doThis:
      "Save, open the starter chest, test flashlight, inventory, crafting, quick slots, and objective tracking before leaving the safe room.",
    why: "The opening teaches survival UI before the first real route decision.",
  },
  {
    step: "2. Secure basics",
    doThis:
      "Gather food, water, bandages, ammo, bear traps, and crafting materials before committing to the greenhouse route.",
    why: "The demo route can create ammo and health pressure before the boss, so entering light is risky.",
  },
  {
    step: "3. Mark retreat paths",
    doThis:
      "Reach the train, handle the mech-part objective, then treat the greenhouse as a planned facility run.",
    why: "Early gameplay footage ties train progress to the mech part and greenhouse access card objective.",
  },
  {
    step: "4. Learn creature behavior",
    doThis:
      "Avoid the power whale, study facility enemies, and save explosives for encounters with clear weak-point hints.",
    why: "Demo dialogue explicitly warns against provoking the whale and gives a boss weak-point clue later.",
  },
];

export default function ProjectMistBeginnerGuidePage() {
  return (
    <ProjectMistArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Beginner Guide"
      heroImage={projectMistImages.beginner}
      heroAlt="Project: Mist beginner survival guide image"
      faqs={faqs}
    >
      <BlufBox title="First-Day Rule">
        <p>
          <strong>
            Play the first session like a systems test, not a full clear.
          </strong>{" "}
          Learn the Gravity Gun, secure basic resources, return to the moving
          train base early, and treat every deep facility trip as optional until
          you understand enemy pressure.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2>First Day Priorities</h2>
        <ArticleImage
          src={projectMistImages.beginner}
          alt="Project: Mist first day beginner guide visual"
          caption="A strong first save should produce information: controls, safe routes, resource loops, and return paths."
        />
      </section>
      <ActionTable rows={firstDayRows} />

      <section className="prose-game">
        <h2>Demo Route: What to Do in Order</h2>
        <ArticleImage
          src={projectMistImages.firstSteps}
          alt="Project: Mist demo route first steps image"
          caption="The demo route gives beginners a clean order: starter supplies, train, mech part, greenhouse, then facility progress."
        />
        <p>
          The opening route is clearer than a generic survival checklist: get
          supplied, reach the train, find the mech part, then enter the
          greenhouse with enough resources to survive the facility. Treat this
          as demo guidance because Early Access routes can change.
        </p>
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Step</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Beginner takeaway</th>
            </tr>
          </thead>
          <tbody>
            {projectMistDemoRouteRows.map(([step, takeaway]) => (
              <tr key={step} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{step}</td>
                <td className="px-4 py-3 text-muted-foreground">{takeaway}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>Use the Gravity Gun as a Survival Tool</h2>
        <ArticleImage
          src={projectMistImages.gravityGun}
          alt="Project: Mist Gravity Gun beginner guide image"
          caption="Use the Gravity Gun to block paths, move debris, interrupt pressure, and solve movement problems before spending scarce resources."
        />
        <p>
          Steam describes the Gravity Gun as a way to move objects, manipulate
          enemies or debris, control space, and turn the environment into a
          weapon. That makes it a utility tool first and a damage tool second.
        </p>
      </section>

      <section className="prose-game">
        <h2>Learn Lockpicking Before Deep Facility Runs</h2>
        <ArticleImage
          src={projectMistImages.crafting}
          alt="Project: Mist beginner lockpick and chest image"
          caption="Lockpicking is worth learning early because locked chests and side rooms can support ammo, healing, crafting, and upgrades."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Lockpick step</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Beginner habit</th>
            </tr>
          </thead>
          <tbody>
            {projectMistLockpickRows.slice(0, 4).map(([step, habit]) => (
              <tr key={step} className="border-b border-border/30 last:border-0">
                <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{step}</th>
                <td className="px-4 py-3 text-muted-foreground">{habit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">

        <h2>Train Base Priorities</h2>
        <ArticleImage
          src={projectMistImages.trainBase}
          alt="Project: Mist train base beginner guide image"
          caption="The train base should reduce friction: store resources, support repairs, create safety, and make the next run easier."
        />
        <ul>
          <li>
            <strong>Storage first:</strong> Keep materials organized so crafting
            and repairs do not stall during co-op sessions.
          </li>
          <li>
            <strong>Defense second:</strong> Upgrade defenses before pushing
            into more dangerous areas.
          </li>
          <li>
            <strong>Utility third:</strong> Add upgrades that support longer
            trips, safer returns, and better resource conversion.
          </li>
        </ul>

        <h2>Facility Runs and Early Danger</h2>
        <ArticleImage
          src={projectMistImages.facilities}
          alt="Project: Mist facility beginner route image"
          caption="Facilities are likely progression hotspots. Enter them only after you know your exit route and have enough supplies to recover."
        />
        <p>
          Public gameplay coverage points to facility routes, traversal hazards,
          and utility loot. That means beginners should avoid treating every
          building like a quick loot room. Check visibility, retreat options,
          and resource pressure before committing.
        </p>
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Facility finding</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Beginner use</th>
            </tr>
          </thead>
          <tbody>
            {projectMistDemoLootRows.map(([finding, use]) => (
              <tr key={finding} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{finding}</td>
                <td className="px-4 py-3 text-muted-foreground">{use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>Beginner Mistakes to Avoid</h2>
        <ArticleImage
          src={projectMistImages.creatures}
          alt="Project: Mist beginner danger and creature image"
          caption="The safest beginner mindset is to observe large threats first, then spend ammo or explosives only after the game gives a clear reason."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Risk</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Safer habit</th>
            </tr>
          </thead>
          <tbody>
            {projectMistDemoRiskRows.map(([risk, habit]) => (
              <tr key={risk} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{risk}</td>
                <td className="px-4 py-3 text-muted-foreground">{habit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ProjectMistArticle>
  );
}
