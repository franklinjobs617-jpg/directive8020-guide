import Link from "next/link";
import { ArticleImage } from "@/components/article-media";
import { BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { FatekeeperArticle } from "@/components/fatekeeper-article";
import {
  createFatekeeperMetadata,
  fatekeeperExplorationRows,
  fatekeeperImages,
} from "@/lib/fatekeeper";

const title = "Fatekeeper World & Exploration Guide: Ruins, Caves, Forests, Lore and Backtracking";
const description =
  "Fatekeeper world and exploration guide for handcrafted areas, ruins, caves, forests, hidden lore, relic checks, side paths, backtracking, and safe route planning.";
const canonical = "/games/fatekeeper/world-exploration";

export const metadata = createFatekeeperMetadata({
  title,
  description,
  canonical,
  image: fatekeeperImages.exploration,
});

const faqs = [
  {
    question: "Is Fatekeeper open world?",
    answer:
      "Fatekeeper follows a focused narrative path while inviting exploration through handcrafted areas, side paths, hidden lore, relics, and encounters.",
  },
  {
    question: "Should I explore every side path?",
    answer:
      "Explore when you have enough health, resources, and a clear route back. Do not turn every first run into a risky full clear.",
  },
  {
    question: "What should I track while exploring?",
    answer:
      "Track lore objects, relic clues, locked or risky routes, enemy types, and places worth revisiting after better gear or spells.",
  },
  {
    question: "Can I backtrack in Fatekeeper?",
    answer:
      "Backtracking rules should be confirmed in the live build. Mark routes and revisit after new gear, spells, or safer combat habits.",
  },
];

const searchIntentRows = [
  {
    query: "Fatekeeper world",
    answer: "Expect a focused narrative route with handcrafted areas that reward side exploration.",
    href: "#world-structure",
    label: "World",
  },
  {
    query: "Fatekeeper exploration",
    answer: "Explore side paths when resources and a return route are safe.",
    href: "#exploration-table",
    label: "Explore",
  },
  {
    query: "Fatekeeper hidden lore",
    answer: "Record lore objects with location context before moving on.",
    href: "#tracking",
    label: "Lore",
  },
  {
    query: "Fatekeeper relic locations",
    answer: "Track room, nearby enemy, route condition, and whether backtracking is possible.",
    href: "/games/fatekeeper/relics-upgrades",
    label: "Relics",
  },
];

const jumpLinks = [
  { href: "#world-structure", label: "World" },
  { href: "#exploration-table", label: "Route table" },
  { href: "#tracking", label: "Tracking" },
  { href: "/games/fatekeeper/beginner-guide", label: "Beginner" },
  { href: "/games/fatekeeper/relics-upgrades", label: "Relics" },
  { href: "/games/fatekeeper/bosses-enemies", label: "Enemies" },
];

const trackingRows = [
  ["Lore object", "Location, nearby enemy, story clue, and whether it hints at a route."],
  ["Relic clue", "Room, route condition, nearby hazard, and build fit."],
  ["Locked route", "What blocked progress: combat, key, traversal, gear, or unclear objective."],
  ["Hard enemy", "Enemy type, attack pattern, and what build change might help."],
  ["Return point", "Why the area deserves a second visit after better gear or spells."],
];

export default function FatekeeperWorldExplorationPage() {
  return (
    <FatekeeperArticle
      title={title}
      description={description}
      canonical={canonical}
      label="World & Exploration"
      heroImage={fatekeeperImages.siteWorldPoster}
      heroAlt="Fatekeeper world exploration ruins and forests image"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="How does exploration work in Fatekeeper?"
        answer="Fatekeeper follows a focused narrative path, but handcrafted areas reward curiosity with hidden lore, relics, and encounters. Explore side paths when resources are safe, track what you find, and return later if a route feels too risky."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Exploration Rule">
        <p>
          <strong>Explore deliberately, not compulsively.</strong> A side path
          is worth checking when you can survive the return route and record
          what the area teaches.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2 id="world-structure">World Structure</h2>
        <ArticleImage
          src={fatekeeperImages.siteWorldPoster}
          alt="Fatekeeper handcrafted exploration area image"
          caption="Fatekeeper uses a focused route with exploration value in ruins, caverns, forests, sanctuaries, lore objects, relics, and encounters."
        />
        <p>
          The world is not only a combat corridor. It should be read as a
          sequence of safe route, side question, reward check, and return point.
          If a path becomes enemy-heavy, use the{" "}
          <Link href="/games/fatekeeper/bosses-enemies">bosses and enemies guide</Link>{" "}
          before forcing progress.
        </p>

        <h2 id="exploration-table">Exploration Route Table</h2>
      </section>

      <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Route moment</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">How to handle it</th>
            </tr>
          </thead>
          <tbody>
            {fatekeeperExplorationRows.map(([moment, action]) => (
              <tr key={moment} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{moment}</td>
                <td className="px-4 py-3 text-muted-foreground">{action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2 id="tracking">What to Track</h2>
        <ArticleImage
          src={fatekeeperImages.siteHero}
          alt="Fatekeeper lore relic and backtracking route image"
          caption="Track lore, relic clues, hard enemies, locked paths, and return points so exploration stays useful."
        />
      </section>

      <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Track</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Details</th>
            </tr>
          </thead>
          <tbody>
            {trackingRows.map(([item, details]) => (
              <tr key={item} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{item}</td>
                <td className="px-4 py-3 text-muted-foreground">{details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </FatekeeperArticle>
  );
}
