import Link from "next/link";
import { ArticleImage } from "@/components/article-media";
import { BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { SpacecraftArticle } from "@/components/spacecraft-article";
import { createSpacecraftMetadata, spacecraftImages } from "@/lib/spacecraft";

const title = "Is SpaceCraft Worth It? Early Access Review, Content Scope & Buy or Wait";
const description =
  "Is SpaceCraft worth buying? Early Access analysis covering $29.99 price, Shiro Games track record (Northgard, Wartales), Mixed Steam reviews, current content scope, server health, and buy/wait/skip verdict.";
const canonical = "/games/spacecraft/is-it-worth-it";

export const metadata = createSpacecraftMetadata({
  title,
  description,
  canonical,
  image: spacecraftImages.worthIt,
});

const faqs = [
  {
    question: "Should I buy SpaceCraft right now?",
    answer:
      "Buy SpaceCraft now if you enjoy factory automation games and are comfortable with Early Access roughness. Wait 6-12 months if you want combat systems, more content, and better optimization. Skip if you want an offline single-player experience or dislike always-online MMOs. At $29.99 ($26.99 launch sale), the current content is fair for automation fans but disappointing for those expecting a complete game.",
  },
  {
    question: "Is SpaceCraft worth $29.99?",
    answer:
      "For factory automation and space sim fans, the $29.99 price is reasonable for the current content scope. You get a functional mining, building, automation, and trading loop with dozens of hours of potential gameplay. However, the lack of combat, always-online requirement, and Early Access bugs mean the value proposition depends heavily on your genre preferences.",
  },
  {
    question: "What do Steam reviews say about SpaceCraft?",
    answer:
      "SpaceCraft has Mixed reviews on Steam (69% positive as of launch). Positive reviews praise the satisfying automation loop, modular ship building, and Shiro Games' track record. Negative reviews cite always-online requirement, barebones content, network instability, and missing combat as dealbreakers. The review split reflects that SpaceCraft delivers strongly for its target audience but disappoints players who expected a broader experience.",
  },
  {
    question: "How does Shiro Games' track record affect the decision?",
    answer:
      "Shiro Games has a strong track record with Northgard (Very Positive, 90%+) and Wartales (Very Positive, 90%+). Both games launched in Early Access and improved significantly over time. This pattern suggests SpaceCraft will follow a similar trajectory — buy now if you trust the developer's history of post-launch support, wait if you want the polished final product.",
  },
];

const prosConsRows = [
  ["Satisfying factory automation loop inspired by Factorio and Satisfactory", "No combat systems at launch — a major missing feature"],
  ["Deep modular ship building with meaningful design decisions", "Always-online requirement with no offline single-player mode"],
  ["Player-driven economy creates emergent gameplay", "Mixed Steam reviews (69%) — quality varies by play session"],
  ["Shiro Games has an excellent Early Access track record", "Server instability during peak hours causes disconnections"],
  ["Corporation (guild) system enables meaningful social play", "Barebones content beyond the core automation loop"],
  ["$29.99 price is fair for the content scope", "Small UI elements and no UI scaling option"],
];

const buyWaitSkipRows = [
  ["Buy If", "You love Factorio, Satisfactory, or similar factory automation games", "The core automation and building loop is solid. You will get dozens of hours of satisfying gameplay from the current systems."],
  ["Buy If", "You want an MMO economy without full-loot PvP pressure (yet)", "SpaceCraft's economic focus without active combat makes it a lower-stress MMO than EVE Online."],
  ["Buy If", "You trust Shiro Games' Early Access track record", "Northgard and Wartales both launched in EA and became excellent games. If you are willing to grow with the game, buy now."],
  ["Wait If", "You want combat, PvP, or a complete feature set", "Combat is not yet implemented. The full game vision is 6-12 months away at minimum."],
  ["Wait If", "You want polished performance and bug-free gameplay", "Early Access means bugs, crashes, and server issues. These will improve but are not resolved at launch."],
  ["Wait If", "You are unsure about the always-online requirement", "Wait for free weekends or Steam sale periods to try the game with less financial risk."],
  ["Skip If", "You want an offline single-player experience", "SpaceCraft is online-only. There is no single-player mode and no plans for one."],
  ["Skip If", "Mixed Steam reviews are a dealbreaker for you", "The current 69% rating reflects genuine issues. If you only buy Very Positive games, wait for the rating to improve."],
  ["Skip If", "You want a space combat game, not an automation game", "SpaceCraft is fundamentally an automation game in a space setting. If you want dogfighting, play Everspace 2 or Elite Dangerous."],
];

const searchIntentRows = [
  {
    query: "Is SpaceCraft worth buying?",
    answer: "Buy if you enjoy factory automation and Early Access. Wait 6-12 months for combat and polish. Skip if you want offline single-player.",
    href: "#verdict",
    label: "Verdict",
  },
  {
    query: "SpaceCraft review score",
    answer: "Mixed (69% positive) on Steam. Positive: automation loop, ship building, dev track record. Negative: always-online, no combat, barebones content.",
    href: "#community-sentiment",
    label: "Reviews",
  },
  {
    query: "SpaceCraft price worth it?",
    answer: "$29.99 ($26.99 launch sale). Fair for automation fans, disappointing for players expecting a complete MMO experience.",
    href: "#price-analysis",
    label: "Price",
  },
];

const jumpLinks = [
  { href: "#verdict", label: "Final verdict" },
  { href: "#pros-cons", label: "Pros & cons" },
  { href: "#buy-wait-skip", label: "Buy/Wait/Skip" },
  { href: "#community-sentiment", label: "Reviews" },
  { href: "/games/spacecraft/beginner-guide", label: "Beginner guide" },
  { href: "/games/spacecraft/release-date", label: "Release info" },
];

export default function SpacecraftWorthItPage() {
  return (
    <SpacecraftArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Is It Worth It?"
      heroImage={spacecraftImages.worthIt}
      heroAlt="SpaceCraft buying guide - is it worth it"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="Should I buy SpaceCraft?"
        answer="Buy SpaceCraft now if you enjoy factory automation games and are comfortable with Early Access roughness. Wait 6-12 months if you want combat systems, more content, and better optimization. Skip if you want an offline single-player experience or dislike always-online MMOs. At $29.99 ($26.99 launch sale), the current content is fair for automation fans but disappointing for those expecting a complete game."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Final Verdict">
        <p>
          <strong>BUY if you love Satisfactory/Factorio and want a space MMO version.</strong>{" "}
          WAIT if you want combat, polished content, or offline play. SKIP if always-online or Mixed Steam reviews are dealbreakers for you.
        </p>
      </BlufBox>

      <section id="verdict" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">The Verdict</h2>
        <ArticleImage
          src={spacecraftImages.worthIt}
          alt="Is SpaceCraft worth buying - Early Access analysis"
          caption="SpaceCraft is a promising foundation with a satisfying core loop, but Early Access means missing features, bugs, and server issues. Your enjoyment depends heavily on your tolerance for Early Access roughness and your love of factory automation."
        />
        <p className="text-sm leading-relaxed text-muted-foreground">
          SpaceCraft is a game of clear strengths and clear weaknesses. The modular ship building, factory automation, and player-driven economy create a uniquely satisfying loop that no other space MMO currently offers. However, the always-online requirement, missing combat systems, and Early Access technical issues mean the game is not for everyone at this stage. Your decision should be based on whether the core automation loop excites you enough to tolerate the rough edges.
        </p>
      </section>

      <section id="pros-cons" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Pros and Cons</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-white p-5">
            <h3 className="mb-3 text-sm font-bold text-green-700 uppercase tracking-[0.12px]">Pros</h3>
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground list-disc pl-4">
              {prosConsRows.filter(([pro]) => pro).map(([pro]) => (
                <li key={pro}>{pro}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-white p-5">
            <h3 className="mb-3 text-sm font-bold text-red-700 uppercase tracking-[0.12px]">Cons</h3>
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground list-disc pl-4">
              {prosConsRows.filter(([, con]) => con).map(([, con]) => (
                <li key={con}>{con}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="buy-wait-skip" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Buy If / Wait If / Skip If</h2>
        <div className="overflow-x-auto rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-mist">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Decision</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Condition</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Why</th>
              </tr>
            </thead>
            <tbody>
              {buyWaitSkipRows.map(([decision, condition, reason]) => (
                <tr key={`${decision}-${condition}`} className="border-b border-border last:border-0">
                  <td className={`px-4 py-3 font-bold ${decision === "Buy If" ? "text-green-700" : decision === "Wait If" ? "text-amber-700" : "text-red-700"}`}>{decision}</td>
                  <td className="px-4 py-3 text-muted-foreground">{condition}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="price-analysis" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Price Analysis: $29.99 for What You Get</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          At $29.99 (or $26.99 with the launch discount), SpaceCraft sits in the mid-range of Early Access pricing. For comparison: Satisfactory launched at $29.99 with a similar Early Access scope and is now $39.99 at 1.0. Factorio never goes on sale but provides hundreds of hours of polished gameplay at $35. SpaceCraft currently offers a solid 20-40 hours of content for players who engage with the automation loop, with the potential for significantly more as updates add features.
        </p>
      </section>

      <section id="community-sentiment" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Community Sentiment Summary</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          SpaceCraft launched to <strong>Mixed reviews (69% positive)</strong> on Steam. The review consensus: the core automation and building loop is genuinely good, Shiro Games' track record inspires confidence, but the always-online requirement, missing combat, and barebones content at launch are significant drawbacks. Positive reviewers tend to be factory automation fans who see the potential. Negative reviewers tend to be players who expected a more complete MMO experience at launch.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          For the full feature list and current game status, see our{" "}
          <Link href="/games/spacecraft/release-date" className="text-foreground underline">release date and Early Access guide</Link>.
          If you decide to buy, start with our{" "}
          <Link href="/games/spacecraft/beginner-guide" className="text-foreground underline">beginner guide</Link>.
        </p>
      </section>
    </SpacecraftArticle>
  );
}
