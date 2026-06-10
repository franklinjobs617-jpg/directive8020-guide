import Link from "next/link";
import { ArticleImage, VideoEmbed } from "@/components/article-media";
import { BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { FatekeeperArticle } from "@/components/fatekeeper-article";
import {
 createFatekeeperMetadata,
 fatekeeperBuildRows,
 fatekeeperImages,
 fatekeeperVideos,
} from "@/lib/fatekeeper";

const title = "Fatekeeper Best Builds: Safe Beginner, Spellblade, Heavy, Dagger & Magic";
const description =
 "Fatekeeper best builds guide with a safe beginner build, spellblade, heavy weapon, dagger-style agility, magic focus, relic synergy, and Early Access meta caveats.";
const canonical = "/games/fatekeeper/best-builds";

export const metadata = createFatekeeperMetadata({
 title,
 description,
 canonical,
 image: fatekeeperImages.magic,
});

const faqs = [
 {
 question: "What is the best beginner build in Fatekeeper?",
 answer:
 "The safest beginner build is balanced melee with one useful spell and relics that improve survival or consistency.",
 },
 {
 question: "Is there a final best build?",
 answer:
 "No final meta should be claimed until the live build is tested across weapons, spells, relics, enemy types, and patches.",
 },
 {
 question: "Is spellblade good in Fatekeeper?",
 answer:
 "Spellblade is the safest flexible direction because it lets melee handle routine fights while spells solve range, pressure, or openings.",
 },
 {
 question: "Should I use heavy weapons or fast weapons?",
 answer:
 "Use heavy weapons if you can read recovery windows. Use faster weapons if you prefer shorter punish windows and more movement.",
 },
];

const searchIntentRows = [
 {
 query: "Fatekeeper best build",
 answer: "Use balanced melee plus one useful spell until final weapon, spell, and relic data is tested.",
 href: "#build-table",
 label: "Best start",
 },
 {
 query: "Fatekeeper spellblade build",
 answer: "Use melee for routine pressure and spells for openings, range, or enemy control.",
 href: "#build-table",
 label: "Flexible",
 },
 {
 query: "Fatekeeper heavy build",
 answer: "Heavy builds need enemy pattern knowledge because slow attacks punish bad timing.",
 href: "#build-table",
 label: "Timing",
 },
 {
 query: "Fatekeeper magic build",
 answer: "Magic builds should wait until spell cost, range, and recovery feel reliable in the live build.",
 href: "#build-rules",
 label: "Caution",
 },
];

const jumpLinks = [
 { href: "#build-table", label: "Build table" },
 { href: "#build-rules", label: "Rules" },
 { href: "#upgrade-path", label: "Upgrade path" },
 { href: "/games/fatekeeper/weapons-spells", label: "Weapons" },
 { href: "/games/fatekeeper/relics-upgrades", label: "Relics" },
 { href: "/games/fatekeeper/bosses-enemies", label: "Bosses" },
];

const upgradeRows = [
 ["First upgrade", "Improve the tool used in nearly every fight.", "Consistent value beats niche power."],
 ["Second upgrade", "Support the same style with armor, spell reliability, or relic synergy.", "A coherent build makes mistakes easier to diagnose."],
 ["Third upgrade", "Add a counter for the enemy type that is stopping progress.", "Builds should solve current friction, not imagined late-game problems."],
 ["Do not rush", "Avoid spreading upgrades across heavy, fast, and pure magic at once.", "A scattered build hides which system is actually working."],
];

export default function FatekeeperBestBuildsPage() {
 return (
 <FatekeeperArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Best Builds"
 heroImage={fatekeeperImages.siteGearPoster}
 heroAlt="Fatekeeper best builds sword and magic image"
 faqs={faqs}
 >
 <SearchAnswerPanel
 title="What is the best Fatekeeper build for a first run?"
 answer="The safest first Fatekeeper build is balanced melee plus one purposeful spell. It teaches weapon timing, spell use, relic synergy, and enemy reading without pretending the final Early Access meta is solved."
 intentRows={searchIntentRows}
 jumpLinks={jumpLinks}
 />

 <BlufBox title="Build Answer">
 <p>
 <strong>Start flexible, then specialize after the game shows you what is hard.</strong>{" "}
 A build should solve the enemy, resource, or timing problem in front
 of you. Final tier lists can wait for tested weapons, spells, relics,
 and patch context.
 </p>
 </BlufBox>

 <section className="prose-game">
 <h2 id="build-table">Build Directions</h2>
 <ArticleImage
 src={fatekeeperImages.siteGearPoster}
 alt="Fatekeeper spellblade and magic build image"
 caption="Builds should be judged by repeatable value: melee safety, spell purpose, armor fit, relic synergy, and enemy coverage."
 />
 </section>

 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Build</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Core idea</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best use</th>
 </tr>
 </thead>
 <tbody>
 {fatekeeperBuildRows.map(([build, idea, use]) => (
 <tr key={build} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{build}</td>
 <td className="px-4 py-3 text-muted-foreground">{idea}</td>
 <td className="px-4 py-3 text-muted-foreground">{use}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <VideoEmbed {...fatekeeperVideos.overview} />

 <section className="prose-game">
 <h2 id="build-rules">Rules for Judging a Build</h2>
 <p>
 A build is good when it survives normal enemies, handles one difficult
 enemy type, and gives you a clear answer when a fight goes wrong. If
 the problem is gear choice, read{" "}
 <Link href="/games/fatekeeper/weapons-spells">weapons and spells</Link>.
 If the problem is passive power, read{" "}
 <Link href="/games/fatekeeper/relics-upgrades">relics and upgrades</Link>.
 </p>

 <h2 id="upgrade-path">Safe Upgrade Path</h2>
 <ArticleImage
 src={fatekeeperImages.weapons}
 alt="Fatekeeper safe build upgrade path image"
 caption="A safe upgrade path improves the tool used every fight before investing in niche counters or unverified late-game combinations."
 />
 </section>

 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Upgrade point</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Spend toward</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Reason</th>
 </tr>
 </thead>
 <tbody>
 {upgradeRows.map(([point, spend, reason]) => (
 <tr key={point} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{point}</td>
 <td className="px-4 py-3 text-muted-foreground">{spend}</td>
 <td className="px-4 py-3 text-muted-foreground">{reason}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </FatekeeperArticle>
 );
}
