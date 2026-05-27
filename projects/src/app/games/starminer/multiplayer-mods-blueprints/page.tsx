import Link from "next/link";
import { StarminerArticle } from "@/components/starminer-article";
import { ArticleImage } from "@/components/article-media";
import { BlufBox } from "@/components/guide-blocks";
import {
  createStarminerMetadata,
  starminerFeatureStatusRows,
  starminerImages,
} from "@/lib/starminer";

const title = "Starminer Multiplayer, Mods & Blueprints: Confirmed Features vs Planned Support";
const description =
  "Starminer multiplayer, mods, and blueprints guide separating confirmed single-player and blueprint save/recall from planned multiplayer, modding, and community sharing.";
const canonical = "/games/starminer/multiplayer-mods-blueprints";

export const metadata = createStarminerMetadata({
  title,
  description,
  canonical,
  image: starminerImages.fleet,
});

const faqs = [
  {
    question: "Does Starminer have multiplayer at launch?",
    answer:
      "Current Steam data confirms single-player. The official FAQ describes multiplayer as a development priority, so it should be treated as planned rather than confirmed at launch.",
  },
  {
    question: "Does Starminer support mods?",
    answer:
      "Modding is described as a development priority, but current store data does not confirm live mod support. Do not assume Workshop or mod tools until official confirmation appears.",
  },
  {
    question: "Are Starminer blueprints confirmed?",
    answer:
      "Yes. The official FAQ says players can save and recall personal blueprints. Community blueprint sharing is planned, not guaranteed for launch.",
  },
  {
    question: "Does Starminer support Steam Workshop?",
    answer:
      "Steam Workshop is not confirmed by the current Steam feature labels. Treat it as unknown unless the developer or store page confirms it later.",
  },
  {
    question: "What should solo players expect?",
    answer:
      "Solo play is the reliable current assumption. Focus on Campaign, Sandbox, Survival, blueprint saving, and personal design iteration.",
  },
];

export default function StarminerMultiplayerModsBlueprintsPage() {
  return (
    <StarminerArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Multiplayer, Mods & Blueprints"
      heroImage={starminerImages.fleet}
      heroAlt="Starminer multiplayer mods blueprints feature status image"
      faqs={faqs}
    >
      <BlufBox title="Feature Status">
        <p>
          <strong>
            Treat Starminer as single-player at launch unless official store
            labels change.
          </strong>{" "}
          Personal blueprint save and recall is confirmed. Multiplayer, modding,
          and community blueprint sharing are planned or development priorities,
          not guaranteed live features. Use the{" "}
          <Link href="/games/starminer">Starminer guide hub</Link> for connected
          launch coverage without overclaiming features.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2>Confirmed vs Planned Features</h2>
        <ArticleImage
          src={starminerImages.fleet}
          alt="Starminer confirmed and planned feature status image"
          caption="Blueprint save and recall is the practical confirmed design feature. Multiplayer, modding, and community sharing should be watched as Early Access roadmap items."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Feature</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player note</th>
            </tr>
          </thead>
          <tbody>
            {starminerFeatureStatusRows.map(([feature, status, note]) => (
              <tr key={feature} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{feature}</td>
                <td className="px-4 py-3 text-muted-foreground">{status}</td>
                <td className="px-4 py-3 text-muted-foreground">{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>How to Use Blueprints Safely</h2>
        <ArticleImage
          src={starminerImages.build}
          alt="Starminer blueprint save and recall building image"
          caption="Save blueprints after a design proves stable. A broken blueprint only repeats the same power, mass, heat, or logistics problem faster."
        />
        <p>
          Blueprints are most useful after a design survives real use. Save a
          compact starter station once mining, refining, storage, and power are
          stable. Save mining ships after they can feed production without
          creating route problems. Save defensive ships after they have enough
          power and purpose to justify their cost.
        </p>
        <p>
          If a blueprint keeps reproducing a weak design, return to the{" "}
          <Link href="/games/starminer/ship-building">ship building guide</Link>{" "}
          and check mass, thrust, power, tonnage, and role. If the design works
          but the network cannot feed it, use the{" "}
          <Link href="/games/starminer/mining-logistics">logistics guide</Link>.
        </p>
      </section>

      <section className="prose-game">
        <h2>What to Watch During Early Access</h2>
        <p>
          For planned features, watch the Steam store, official site, and any
          developer posts for exact wording. Multiplayer should not be described
          as live until player counts or multiplayer labels appear officially.
          Modding should not be described as live until tools, Workshop support,
          or documentation appears officially. Community blueprint sharing should
          not be treated as active until sharing behavior is confirmed.
        </p>
        <p>
          If these features are important to your buying decision, read{" "}
          <Link href="/games/starminer/is-it-worth-it">Is Starminer Worth It?</Link>{" "}
          before buying and check the{" "}
          <Link href="/games/starminer/release-date">release date page</Link>{" "}
          for current launch-source notes.
        </p>
      </section>
    </StarminerArticle>
  );
}
