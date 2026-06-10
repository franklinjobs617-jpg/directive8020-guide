import Image from "next/image";
import Link from "next/link";
import { StarminerArticle } from "@/components/starminer-article";
import { ArticleImage } from "@/components/article-media";
import { BlufBox, SearchAnswerPanel, StatusPanel } from "@/components/guide-blocks";
import { starminer } from "@/lib/games";
import {
 createStarminerMetadata,
 starminerFirstHourRows,
 starminerImages,
 starminerModeRows,
 starminerQuickFacts,
 starminerStartRows,
} from "@/lib/starminer";

const title = "Starminer Guide Hub ?Beginner Tips, Ships, Mining & Defense";
const description =
 "Starminer Early Access guide hub: beginner tips, Campaign, Sandbox, Survival, ship building, mining logistics, heat management, alien defense, and PC specs.";
const canonical = "/games/starminer";

export const metadata = createStarminerMetadata({
 title,
 description,
 canonical,
 image: starminerImages.hero,
});

const faqs = [
 {
 question: "When does Starminer release?",
 answer:
 "Steam lists Starminer for May 27, 2026. SteamDB lists 27 May 2026 at 16:00 UTC, but players should check the Steam store button for live availability because store state can change on launch day.",
 },
 {
 question: "What kind of game is Starminer?",
 answer:
 "Starminer is a PC Early Access interstellar mining sandbox about modular stations, ship design, asteroid mining, production chains, heat pressure, pirates, aliens, and real-time fleet defense.",
 },
 {
 question: "Which Starminer mode should beginners play first?",
 answer:
 "Campaign is the safest first save because the official FAQ says it introduces core mechanics and lore through missions. Sandbox and Survival are better after you understand basic systems.",
 },
 {
 question: "Does Starminer have multiplayer at launch?",
 answer:
 "Steam currently confirms single-player. The official FAQ describes multiplayer as a development priority, so it should be treated as planned rather than a confirmed launch feature.",
 },
 {
 question: "Can Starminer run on low-end PCs?",
 answer:
 "The official minimum spec lists Windows 10 32-bit, i3-10100 or Ryzen 3 3100, 8 GB RAM, GTX 1050 or RX 560, DirectX 11, and 7 GB storage. Recommended specs are not listed yet.",
 },
 {
 question: "Is Starminer Steam Deck verified?",
 answer:
 "Steam Deck status is not a confirmed buying signal yet. Treat Deck play as unknown until the live compatibility badge and player reports are stable.",
 },
 {
 question: "Does Starminer have a roadmap?",
 answer:
 "The official FAQ describes priorities such as multiplayer, modding, and blueprint sharing, but those should be treated as planned features rather than launch features.",
 },
 {
 question: "Can you rename ships in Starminer?",
 answer:
 "Use the live build to confirm ship naming and management details. This hub focuses on confirmed systems and practical setup rather than unverified interface claims.",
 },
];

const searchIntentRows = [
 {
 query: "What should I do first in Starminer?",
 answer: "Start Campaign, build small, stabilize power and mining, watch heat, then add storage and defenses before expanding.",
 href: "#first-session-route",
 label: "First save",
 },
 {
 query: "Is Starminer available now?",
 answer: "Steam lists May 27, 2026; check the live Steam store button before buying or installing.",
 href: "/games/starminer/release-date",
 label: "Availability",
 },
 {
 query: "Ship or station first?",
 answer: "Build a compact starter station first, then add specialized mining, hauling, patrol, and warship designs.",
 href: "/games/starminer/ship-building",
 label: "Build order",
 },
 {
 query: "How does mining automation work?",
 answer: "Treat mining as a chain: asteroid extraction, refining, storage, production, research, repairs, then link gates.",
 href: "/games/starminer/mining-logistics",
 label: "Logistics",
 },
 {
 query: "Why am I getting attacked?",
 answer: "Expansion can raise heat and pressure, so defense needs power, weapons, patrols, and repair reserves.",
 href: "/games/starminer/heat-aliens-defense",
 label: "Defense",
 },
];

const jumpLinks = [
 { href: "#start-here", label: "Start here" },
 { href: "#first-session-route", label: "First session" },
 { href: "#modes", label: "Modes" },
 { href: "#status-faq", label: "Status FAQ" },
 { href: "/games/starminer/beginner-guide", label: "Beginner guide" },
 { href: "/games/starminer/is-it-worth-it", label: "Worth it" },
];

function getGuideImage(href: string) {
 if (href.includes("release")) return starminerImages.frontier;
 if (href.includes("beginner")) return starminerImages.station;
 if (href.includes("system")) return starminerImages.hero;
 if (href.includes("modes")) return starminerImages.survival;
 if (href.includes("ship")) return starminerImages.build;
 if (href.includes("resources")) return starminerImages.officialMining;
 if (href.includes("mining")) return starminerImages.mining;
 if (href.includes("heat")) return starminerImages.combat;
 if (href.includes("multiplayer")) return starminerImages.fleet;
 return starminerImages.logistics;
}

export default function StarminerHubPage() {
 return (
 <StarminerArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Starminer"
 heroImage={starminerImages.hero}
 heroAlt="Starminer official Steam key art"
 faqs={faqs}
 >
 <SearchAnswerPanel
 title="What is the best way to start Starminer?"
 answer="Start in Campaign, build a compact station, stabilize power, mining, storage, and heat, then expand into specialized ships and automation only after the first production loop can defend and repair itself."
 intentRows={searchIntentRows}
 jumpLinks={jumpLinks}
 />

 <BlufBox title="Quick Verdict">
 <p>
 <strong>
 Start Starminer like an engineering problem, not a race to build
 the biggest station.
 </strong>{" "}
 Steam lists May 27, 2026 for Early Access, but players should verify
 the live Steam button before buying or installing. Once in game,
 begin with Campaign, stabilize mining and power, keep heat under
 control, then expand into larger ships, link gates, and stronger
 defenses.
 </p>
 </BlufBox>

 <StatusPanel
 items={starminerQuickFacts.map(([label, value]) => ({
 label,
 value,
 status: label === "Release" ? ("needs-check" as const) : ("verified" as const),
 }))}
 />

 <section id="start-here" className="my-10">
 <h2 className="mb-4 text-xl font-bold text-foreground">Start Here by Need</h2>
 <ArticleImage
 src={starminerImages.feature}
 alt="Starminer guide hub systems map image"
 caption="Use this hub as a route map: release checks, first-hour setup, mode choice, PC specs, ship design, mining, defense, feature status, and buying advice all connect."
 />
 <div className="overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player need</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best answer</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Guide</th>
 </tr>
 </thead>
 <tbody>
 {starminerStartRows.map(([need, answer, href]) => (
 <tr key={need} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{need}</td>
 <td className="px-4 py-3 text-muted-foreground">{answer}</td>
 <td className="px-4 py-3">
 <Link href={href} className="text-foreground hover:underline">
 Open guide
 </Link>
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </section>

 <section className="my-10">
 <h2 className="mb-4 text-xl font-bold text-foreground">Starminer Guide Map</h2>
 <div className="grid gap-4 sm:grid-cols-2">
 {starminer.guideLinks.map((guide) => (
 <Link
 key={guide.href}
 href={guide.href}
 className="group overflow-hidden rounded-lg border border-border bg-white transition-colors hover:border-border"
 >
 <div className="relative aspect-video">
 <Image
 src={getGuideImage(guide.href)}
 alt={`${guide.title} Starminer guide image`}
 fill
 className="object-cover transition-transform duration-500 group-hover:scale-105"
 sizes="(max-width: 768px) 100vw, 50vw"
 />
 <div className="absolute inset-0 opacity-30" />
 </div>
 <div className="p-5">
 <h3 className="text-base font-bold text-foreground group-hover:text-foreground">
 {guide.title}
 </h3>
 <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
 {guide.description}
 </p>
 </div>
 </Link>
 ))}
 </div>
 </section>

 <section className="prose-game">
 <h2>What Starminer Is Really About</h2>
 <ArticleImage
 src={starminerImages.build}
 alt="Starminer modular construction and station building guide image"
 caption="Starminer is about connected systems: every module, mining route, power decision, and defense choice affects the next expansion."
 />
 <p>
 Starminer is not just a space game with mining in the background. The
 official pitch centers on building ships and stations module by
 module, balancing materials, power, tonnage, size, and defense while
 running a growing industrial network. The more you mine and build, the
 more your heat signature rises, and that pressure turns expansion into
 a risk decision instead of a simple upgrade ladder.
 </p>
 <p>
 That is why the first useful question is not "what is the biggest
 thing I can build?" It is "what can this station support without
 collapsing under logistics, power demand, or attacks?" Use the{" "}
 <Link href="/games/starminer/beginner-guide">Starminer beginner guide</Link>{" "}
 for the first save, then move to{" "}
 <Link href="/games/starminer/ship-building">ship building</Link>,{" "}
 <Link href="/games/starminer/mining-logistics">mining logistics</Link>,
 and <Link href="/games/starminer/heat-aliens-defense">heat defense</Link>{" "}
 once you know where the first bottleneck appears.
 </p>
 </section>

 <section id="modes" className="my-10">
 <h2 className="mb-4 text-xl font-bold text-foreground">Modes at a Glance</h2>
 <ArticleImage
 src={starminerImages.survival}
 alt="Starminer Campaign Sandbox and Survival mode comparison image"
 caption="Campaign teaches the systems, Sandbox supports self-directed building, and Survival stress-tests defense under enemy pressure."
 />
 <div className="overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Mode</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Use it for</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">First-run advice</th>
 </tr>
 </thead>
 <tbody>
 {starminerModeRows.map(([mode, use, advice]) => (
 <tr key={mode} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{mode}</td>
 <td className="px-4 py-3 text-muted-foreground">{use}</td>
 <td className="px-4 py-3 text-muted-foreground">{advice}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </section>

 <section className="prose-game">
 <h2 id="first-session-route">First Session Route</h2>
 <p>
 The cleanest first session is a learning loop: choose Campaign, build
 small, stabilize mining, avoid uncontrolled heat growth, and save a
 proven blueprint. This keeps the Starminer hub connected to a real
 player path instead of leaving you with a list of detached articles.
 </p>
 </section>

 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Step</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Do this</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why it matters</th>
 </tr>
 </thead>
 <tbody>
 {starminerFirstHourRows.map((row) => (
 <tr key={row.step} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{row.step}</td>
 <td className="px-4 py-3 text-muted-foreground">{row.doThis}</td>
 <td className="px-4 py-3 text-muted-foreground">{row.why}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 <section className="prose-game">
 <h2 id="status-faq">Small Status Questions</h2>
 <ArticleImage
 src={starminerImages.fleet}
 alt="Starminer roadmap Steam Deck and ship management status image"
 caption="For status questions, check the live build and store labels before treating roadmap or interface details as final."
 />
 <p>
 Steam Deck compatibility, roadmap timing, multiplayer, modding,
 community blueprint sharing, and ship-management interface details
 should be checked against the live build. For now, use this hub for
 confirmed single-player setup, modular building, mining automation,
 heat pressure, and defense planning.
 </p>
 </section>
 </StarminerArticle>
 );
}
