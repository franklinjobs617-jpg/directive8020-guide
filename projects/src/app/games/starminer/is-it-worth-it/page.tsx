import Link from "next/link";
import { StarminerArticle } from "@/components/starminer-article";
import { ArticleImage } from "@/components/article-media";
import {
  ActionTable,
  BlufBox,
  SearchAnswerPanel,
  SourceCheckTable,
  StatusPanel,
} from "@/components/guide-blocks";
import {
  createStarminerMetadata,
  starminerImages,
  starminerWorthRows,
  smWorthItActionRows,
  smWorthItJumpLinks,
  smWorthItSearchIntent,
  smWorthItSourceRows,
  smWorthItStatusItems,
} from "@/lib/starminer";

const title = "Is Starminer Worth It? Early Access Buying Advice, Fit, Risks & Who Should Wait";
const description =
 "Is Starminer worth it? Buying advice for builders, logistics players, space sim fans, Early Access skeptics, Steam Deck users, and players waiting for reviews or price.";
const canonical = "/games/starminer/is-it-worth-it";

export const metadata = createStarminerMetadata({
 title,
 description,
 canonical,
 image: starminerImages.logistics,
});

const faqs = [
 {
 question: "Is Starminer worth buying at launch?",
 answer:
 "It is most likely worth considering for players who enjoy modular building, mining logistics, factory-style planning, and Early Access testing. Wait if you need reviews, price confirmation, Steam Deck support, multiplayer, or modding at launch.",
 },
 {
 question: "Who is Starminer best for?",
 answer:
 "Starminer is best for players who like engineering sandboxes, resource chains, station building, ship design, and defense planning more than scripted story progression.",
 },
 {
 question: "Should Steam Deck players buy Starminer now?",
 answer:
 "Steam Deck compatibility is not confirmed by current store data, so Steam Deck players should wait for compatibility results or trusted player reports.",
 },
 {
 question: "Does Starminer have reviews yet?",
 answer:
 "Review and user-review status should be checked once the Steam store is live. Do not rely on review assumptions before launch availability is clear.",
 },
 {
 question: "Should I wait for multiplayer or mods?",
 answer:
 "Yes, if those are must-have features. Current data confirms single-player and blueprint save/recall, while multiplayer, modding, and community sharing are planned rather than guaranteed at launch.",
 },
];

const decisionRows = [
 ["Buy or wishlist", "You want modular construction, mining logistics, Early Access iteration, and solo systems mastery."],
 ["Wait for reviews", "You need proof of performance, balance, content depth, price value, or late-game stability."],
 ["Wait for updates", "You need multiplayer, modding, community blueprint sharing, or Steam Workshop support."],
 ["Wait for compatibility", "You plan to play mainly on Steam Deck or hardware below the official minimum spec."],
 ["Start with caution", "You like the premise but want to test Campaign before committing to long Sandbox or Survival saves."],
];

export default function StarminerWorthItPage() {
 return (
 <StarminerArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Is It Worth It?"
 heroImage={starminerImages.logistics}
 heroAlt="Starminer worth it buying advice image"
 faqs={faqs}
 >
 <BlufBox title="Buying Verdict">
 <p>
 <strong>
 Starminer is a good watchlist or buy candidate if you want a
 systems-heavy solo space construction sandbox.
 </strong>{" "}
 Wait if your decision depends on price, user reviews, recommended
 specs, Steam Deck support, multiplayer, modding, or community
 blueprint sharing. Start from the{" "}
 <Link href="/games/starminer">Starminer guide hub</Link> if you want
 all launch facts in one place.
 </p>
 </BlufBox>

 <SearchAnswerPanel
 title="Is Starminer Worth It? Quick Answer"
 answer="Worth considering for systems-focused solo builders. Wait if your decision depends on price, user reviews, recommended specs, Steam Deck support, multiplayer, modding, or community blueprint sharing. Plan a small Campaign save before committing to a long build."
 intentRows={smWorthItSearchIntent}
 jumpLinks={smWorthItJumpLinks}
 />

 <StatusPanel items={smWorthItStatusItems} />

 <section id="worthit-anchor" className="prose-game">
 <h2>Who Starminer Fits</h2>
 <ArticleImage
 src={starminerImages.logistics}
 alt="Starminer buyer fit and Early Access value image"
 caption="Starminer is strongest for players who enjoy designing systems: ships, stations, mining routes, production chains, heat control, and defenses."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player type</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Fit</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why</th>
 </tr>
 </thead>
 <tbody>
 {starminerWorthRows.map(([player, fit, why]) => (
 <tr key={player} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{player}</td>
 <td className="px-4 py-3 text-muted-foreground">{fit}</td>
 <td className="px-4 py-3 text-muted-foreground">{why}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>Buy, Wait, or Wishlist?</h2>
 <ArticleImage
 src={starminerImages.frontier}
 alt="Starminer buy wait wishlist decision image"
 caption="The safest buying decision depends on what you need confirmed: price, reviews, performance, compatibility, or planned features."
 />
 </section>

 <div className="my-6 overflow-hidden rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Decision</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Use this rule</th>
 </tr>
 </thead>
 <tbody>
 {decisionRows.map(([decision, rule]) => (
 <tr key={decision} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{decision}</td>
 <td className="px-4 py-3 text-muted-foreground">{rule}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2>What to Check Before Buying</h2>
 <p>
 Start with the{" "}
 <Link href="/games/starminer/release-date">release date page</Link>{" "}
 and confirm whether the Steam store button is live. Then check the{" "}
 <Link href="/games/starminer/system-requirements">system requirements</Link>{" "}
 against your PC. If you expect handheld play, wait for Steam Deck
 compatibility data. If you expect co-op, mods, or shared blueprints,
 read the{" "}
 <Link href="/games/starminer/multiplayer-mods-blueprints">
 multiplayer, mods, and blueprints guide
 </Link>{" "}
 before buying.
 </p>
 <p>
 If the core solo loop sounds right, plan your first save with the{" "}
 <Link href="/games/starminer/beginner-guide">beginner guide</Link>{" "}
 and the{" "}
 <Link href="/games/starminer/game-modes">game modes guide</Link>.
 Those pages help you avoid turning an Early Access first session into
 a confusing build experiment.
 </p>
 </section>

 <h2 className="mb-4 mt-10 text-2xl font-bold text-foreground">5-Step Buy-or-Wait Plan</h2>
 <ActionTable rows={smWorthItActionRows} />

 <SourceCheckTable title="Starminer Worth-It Sources" rows={smWorthItSourceRows} />
 </StarminerArticle>
 );
}
