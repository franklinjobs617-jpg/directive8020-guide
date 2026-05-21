import { ArticleImage } from "@/components/article-media";
import { BlufBox } from "@/components/guide-blocks";
import { ThickAsThievesArticle } from "@/components/thick-as-thieves-article";
import {
  createThickAsThievesMetadata,
  thickAsThievesImages,
} from "@/lib/thick-as-thieves";

const title = "Thick As Thieves Co-op Guide - Online Partner, Solo & Local Co-op Status";
const description =
  "Thick As Thieves solo and co-op guide: online partner co-op, local co-op and couch co-op status, PS5 caution, session planning, host checks, and what is not confirmed.";
const canonical = "/games/thick-as-thieves/solo-coop";

export const metadata = createThickAsThievesMetadata({
  title,
  description,
  canonical,
  image: thickAsThievesImages.soloCoop,
});

const faqs = [
  {
    question: "Can Thick As Thieves be played solo?",
    answer: "Yes. The official FAQ says Thick As Thieves can be played solo.",
  },
  {
    question: "How many players are in co-op?",
    answer:
      "Current official wording says you can play with a partner in crime, so two-player co-op is the safest interpretation before live testing.",
  },
  {
    question: "Does Thick As Thieves have online co-op?",
    answer: "Yes. Steam lists co-op and online co-op for Thick As Thieves.",
  },
  {
    question: "Does Thick As Thieves have split-screen?",
    answer: "Split-screen, couch co-op, and local co-op are not confirmed in current public materials.",
  },
  {
    question: "Can I play Thick As Thieves co-op on PS5?",
    answer:
      "No PS5 version is confirmed in current public materials, so PS5 co-op is not a confirmed launch option.",
  },
];

const coOpRows = [
  [
    "Solo learning",
    "Best for understanding routes, alert states, and gear timing without another player adding noise.",
  ],
  [
    "Partner scouting",
    "One player watches patrols, exits, and timing while the other commits to the objective.",
  ],
  [
    "Host test",
    "Run one short contract first to verify invites, progress ownership, reconnects, and cloud sync.",
  ],
  [
    "Communication",
    "Use short callouts for entry, wait, abort, and exit instead of narrating every movement.",
  ],
  [
    "Open questions",
    "Public matchmaking, host migration, local co-op, console co-op, and cross-play are not confirmed.",
  ],
];

export default function ThickAsThievesSoloCoopPage() {
  return (
    <ThickAsThievesArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Solo & Co-op"
      heroImage={thickAsThievesImages.soloCoop}
      heroAlt="Thick As Thieves solo and co-op guide image"
      faqs={faqs}
    >
      <BlufBox title="Co-op Answer">
        <p>
          <strong>Thick As Thieves supports solo play and online co-op.</strong>{" "}
          Steam lists co-op and online co-op, while the official FAQ frames
          co-op as playing with one partner in crime. Do not assume
          local co-op, couch co-op, split-screen, PS5 co-op, cross-play, or
          dedicated servers unless official materials add them.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2>Solo Versus Co-op</h2>
        <ArticleImage
          src={thickAsThievesImages.soloCoop}
          alt="Thick As Thieves solo versus co-op visual"
          caption="Solo is cleaner for learning; co-op is stronger when players divide information and execution instead of duplicating movement."
        />
        <p>
          Solo play should be the best first choice if you want to learn how
          contracts behave. Co-op should be the best first choice if you want
          social route planning and can communicate clearly. A partner can cover
          risk, but a second player can also make stealth messier if both people
          chase loot without a shared exit plan.
        </p>

        <h2>Co-op Launch Checklist</h2>
        <ArticleImage
          src={thickAsThievesImages.screenshot6}
          alt="Thick As Thieves co-op launch checklist image"
          caption="Before a full co-op session, verify host rules, reconnect behavior, voice chat, and whether both players keep progress."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                Topic
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                Player guidance
              </th>
            </tr>
          </thead>
          <tbody>
            {coOpRows.map(([topic, guidance]) => (
              <tr
                key={topic}
                className="border-b border-border/30 last:border-0"
              >
                <th
                  scope="row"
                  className="px-4 py-3 text-left font-semibold text-foreground"
                >
                  {topic}
                </th>
                <td className="px-4 py-3 text-muted-foreground">{guidance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ThickAsThievesArticle>
  );
}
