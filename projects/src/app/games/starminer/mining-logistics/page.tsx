import Link from "next/link";
import { StarminerArticle } from "@/components/starminer-article";
import { ArticleImage } from "@/components/article-media";
import { BlufBox } from "@/components/guide-blocks";
import {
  createStarminerMetadata,
  starminerImages,
  starminerLogisticsRows,
} from "@/lib/starminer";

const title = "Starminer Mining & Logistics Guide: Asteroids, Production, Research & Link Gates";
const description =
  "Starminer mining and logistics guide for asteroid extraction, refining, production chains, automated logistics, research, link gates, profit, maintenance, and expansion planning.";
const canonical = "/games/starminer/mining-logistics";

export const metadata = createStarminerMetadata({
  title,
  description,
  canonical,
  image: starminerImages.mining,
});

const faqs = [
  {
    question: "What is the main mining loop in Starminer?",
    answer:
      "The loop is to extract resources from asteroids, refine them into usable materials, feed production chains, research new modules and tools, then expand while keeping maintenance and defense supplied.",
  },
  {
    question: "What are link gates in Starminer?",
    answer:
      "Steam says players can build link gates to access new riches in new sectors of space. Build them after your current mining, logistics, and defense network is stable.",
  },
  {
    question: "Should I use resources for profit or fleet expansion?",
    answer:
      "Both are part of the official pitch. Beginners should reserve enough resources for maintenance, defense, and research before turning every material into profit or expansion.",
  },
  {
    question: "How do I avoid logistics problems?",
    answer:
      "Keep production chains readable, avoid expanding faster than storage and refining can support, and pause when materials start piling up or starving key modules.",
  },
  {
    question: "When should I research new modules?",
    answer:
      "Research when the current station is stable enough to support new modules and when a clear bottleneck needs a better tool, ship role, or production step.",
  },
];

const bottleneckRows = [
  ["Asteroids are mined but production stalls", "Check refining and storage before adding more miners."],
  ["Refined goods pile up", "Add production demand or improve transport paths."],
  ["Research feels slow", "Stabilize inputs and stop spending every material on expansion."],
  ["New sector feels risky", "Delay link gates until current defenses and maintenance reserves are strong."],
  ["Repairs consume the network", "Reduce heat pressure and improve defense before scaling extraction."],
];

export default function StarminerMiningLogisticsPage() {
  return (
    <StarminerArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Mining & Logistics"
      heroImage={starminerImages.mining}
      heroAlt="Starminer mining and logistics asteroid extraction image"
      faqs={faqs}
    >
      <BlufBox title="Logistics Rule">
        <p>
          <strong>Do not expand past the weakest link in the chain.</strong>{" "}
          Starminer turns asteroid mining into a full network: extraction,
          refining, production, research, link gates, maintenance, and defense.
          If any step is unstable, bigger ships from the{" "}
          <Link href="/games/starminer/ship-building">ship building guide</Link>{" "}
          will only make the problem more expensive.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2>The Core Resource Loop</h2>
        <ArticleImage
          src={starminerImages.mining}
          alt="Starminer asteroid mining and refining logistics guide image"
          caption="Mining is not just gathering: resources must be extracted, refined, moved, spent, defended, and sometimes saved for repairs."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">System</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player takeaway</th>
            </tr>
          </thead>
          <tbody>
            {starminerLogisticsRows.map(([system, takeaway]) => (
              <tr key={system} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{system}</td>
                <td className="px-4 py-3 text-muted-foreground">{takeaway}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>Profit Versus Maintenance</h2>
        <ArticleImage
          src={starminerImages.logistics}
          alt="Starminer production chains and maintenance planning image"
          caption="The strongest logistics network keeps enough material for research, repairs, defenses, and expansion instead of spending every input immediately."
        />
        <p>
          Steam frames Starminer around profit, resource processing, fleet
          maintenance, missions, and expansion. That creates a real tradeoff:
          resources can become money, modules, research, repairs, or defenses.
          Beginners should avoid treating every asteroid as pure expansion fuel.
          Keep a reserve for maintenance and defense before building link gates
          or oversized ships.
        </p>
        <p>
          The moment expansion raises heat faster than your defenses can handle,
          move to the{" "}
          <Link href="/games/starminer/heat-aliens-defense">
            heat and defense guide
          </Link>
          . Mining more can solve material shortages, but it can also invite
          more danger if the station is already exposed.
        </p>
      </section>

      <section className="prose-game">
        <h2>Diagnose the Bottleneck</h2>
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Problem</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Fix before expanding</th>
            </tr>
          </thead>
          <tbody>
            {bottleneckRows.map(([problem, fix]) => (
              <tr key={problem} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{problem}</td>
                <td className="px-4 py-3 text-muted-foreground">{fix}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>When to Build Link Gates</h2>
        <p>
          Link gates should not be the first answer to a local bottleneck. Build
          them when the current sector can support its own mining, refining,
          storage, repair needs, and defense coverage. A new sector offers new
          riches, but it also stretches the network. If the current base is
          already underpowered or undefended, a link gate creates more surface
          area for failure.
        </p>
        <p>
          If this is your first save, follow the{" "}
          <Link href="/games/starminer/beginner-guide">beginner route</Link>{" "}
          first. If your build is stable and you want a better fleet before
          crossing sectors, use the{" "}
          <Link href="/games/starminer/ship-building">ship building guide</Link>
          .
        </p>
      </section>
    </StarminerArticle>
  );
}
