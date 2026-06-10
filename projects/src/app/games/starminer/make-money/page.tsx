import { ActionTable, BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { StarminerArticle } from "@/components/starminer-article";
import { ArticleImage } from "@/components/article-media";
import {
 createStarminerMetadata,
 starminerMoneyRows,
 starminerImages,
} from "@/lib/starminer";

const title = "Starminer How to Make Money Fast: Credits, Trade & Debt Clearing Guide";
const description =
 "How to earn credits fast in Starminer. Best resources to sell (Cobalt 72/unit, Thorium 360/unit), mission efficiency, automated trade routes, debt clearing strategy, and passive income setups.";
const canonical = "/games/starminer/make-money";

export const metadata = createStarminerMetadata({
 title,
 description,
 canonical,
 image: starminerImages.mining,
});

const faqs = [
 {
 question: "How do I make money fast in Starminer?",
 answer:
 "Focus on Cobalt (72 credits/unit) and Thorium (360 credits/unit). Cobalt is found in debris fields and C-class asteroids. Thorium is rarer but clears your starting debt with one chunk. Sell at trade stations within 1000m range.",
 },
 {
 question: "What resource sells for the most in Starminer?",
 answer:
 "Thorium Chunks sell for 360 credits each ?the highest-value early resource. Cobalt at 72/unit is the best consistent income. Iron (12/unit) and Silicone (12/unit) are too cheap to sell ?use them for construction instead.",
 },
 {
 question: "How do I clear my starting debt?",
 answer:
 "Sell 2-3 Thorium Chunks or ~10 Cobalt units at a trade station. Accept mining delivery missions from the Operations Interface for bonus credits. Clear debt in the first 2 hours to avoid compounding interest.",
 },
];

const searchIntentRows = [
 {
 query: "Starminer how to make money",
 answer: "Sell Cobalt (72/unit) and Thorium (360/unit). Use T2 Metal Storage for auto-selling. Complete missions for bonus credits.",
 href: "#best-resources",
 label: "Resources",
 },
 {
 query: "Starminer best resource to sell",
 answer: "Thorium: 360 credits/unit (C-class asteroids). Cobalt: 72 credits/unit (debris fields). Iron: 12 credits/unit (too cheap, use for building).",
 href: "#price-table",
 label: "Prices",
 },
 {
 query: "Starminer credits farm",
 answer: "Build 2 mining ships targeting C-class asteroids. Auto-sell surplus via T2 Metal Storage at nearby trade station.",
 href: "#automation",
 label: "Farm",
 },
 {
 query: "Starminer debt clearing",
 answer: "Clear starting debt within 2 hours. Interest compounds and eats into expansion budget.",
 href: "#clear-debt",
 label: "Debt",
 },
];

const jumpLinks = [
 { href: "#best-resources", label: "Best resources" },
 { href: "#price-table", label: "Price table" },
 { href: "#automation", label: "Automation" },
 { href: "#clear-debt", label: "Clear debt" },
 { href: "#missions", label: "Missions" },
 { href: "/games/starminer/mining-logistics", label: "Mining guide" },
];

const playerRows = [
 ["New player", "Clear debt with safe cobalt and mission income before building expensive ships.", "Debt interest quietly slows every later decision, so early stability beats flashy expansion."],
 ["Builder", "Keep iron, silicone, copper, and power-chain materials before selling surplus.", "A builder who sells construction inputs has to buy progress back later."],
 ["Trader", "Use storage thresholds and haulers to move only true surplus into trade.", "Automation should sell excess, not drain the materials needed for research and repairs."],
 ["Optimizer", "Measure whether mining, refining, hauling, or trade distance is limiting credits.", "The best money route is the one that fixes the slowest link, not always more miners."],
];

const moneyProblemRows = [
 ["Credits are low but storage is full", "Surplus is not reaching a buyer.", "Add trade routing, haulers, or auto-sell thresholds near a station."],
 ["Debt will not go down", "Income is being reinvested before interest is controlled.", "Set a debt payment target before buying new modules."],
 ["Research is blocked", "Too much cobalt or silicone-chain material was sold.", "Keep research reserves before selling high-value surplus."],
 ["Ships keep delaying profit", "Repairs, fuel, or power costs are eating the route.", "Shrink the route or add defense before scaling income."],
];

export default function StarminerMoneyPage() {
 return (
 <StarminerArticle
 title={title}
 description={description}
 canonical={canonical}
 label="How to Make Money"
 heroImage={starminerImages.mining}
 heroAlt="Starminer asteroid mining with mining lasers extracting valuable resources"
 faqs={faqs}
 showSources={false}
 >
 <BlufBox title="BLUF">
 Cobalt and Thorium. That's where the money is. Cobalt sells for 72 a unit
 and piles up in debris fields. Thorium goes for 360 a chunk ?two of them
 clear your starting debt. Iron and Silicone are 12 each, barely worth
 hauling to a station. Sell those only if you're desperate. Build a T2
 Metal Storage and let it auto-sell while you focus on expansion. Prices
 sourced from TheGameSlayer's guide ?test and adjust.
 </BlufBox>

 <SearchAnswerPanel
 title="Starminer Money Making Guide"
 answer="Cobalt and Thorium are your cash crops. Build a T2 Metal Storage and let it auto-sell. Clear debt early ?interest stacks up. Missions add income and XP on the side."
 intentRows={searchIntentRows}
 jumpLinks={jumpLinks}
 />

 <section id="best-resources" className="mb-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Best Resources to Sell</h2>
 <ArticleImage
 src={starminerImages.mining}
 alt="Starminer mining resources for credit income"
 caption="Fast money starts with knowing what is safe to sell and what must stay reserved for construction, power, research, and repairs."
 />
 <ActionTable rows={starminerMoneyRows} />
 </section>

 <section id="price-table" className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Resource Price Comparison</h2>
 <div className="overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Resource</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Price (cr/unit)</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best Source</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Sell or Keep?</th>
 </tr>
 </thead>
 <tbody>
 {[
 ["Thorium Chunk", "360", "C-class asteroids", "Sell (save 2-3 for reactor fuel)"],
 ["Cobalt", "72", "Debris fields, C-class asteroids", "Sell ?best consistent income"],
 ["Gold", "48", "Rare asteroid nodes", "Sell ?no early-game crafting use"],
 ["Copper", "20", "Sector 2 asteroids", "Keep for wiring and solar panels"],
 ["Carbon", "18", "Sector 1 common", "Keep for life support and plastic"],
 ["Iron", "12", "Sector 1 abundant", "Keep ?essential for hull and frame"],
 ["Silicone", "12", "Sector 1 common", "Keep ?needed for most electronics"],
 ["Ice", "6", "Sector 1 ubiquitous", "Keep for coolant and reaction mass"],
 ].map((row, i) => (
 <tr key={i} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{row[0]}</td>
 <td className="px-4 py-3 text-foreground font-semibold">{row[1]}</td>
 <td className="px-4 py-3 text-muted-foreground">{row[2]}</td>
 <td className="px-4 py-3 text-muted-foreground">{row[3]}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </section>

 <section id="automation" className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Automated Income Setup</h2>
 <ArticleImage
 src={starminerImages.logistics}
 alt="Starminer automated trade and logistics route"
 caption="Automation is useful only after storage, refining, and trade distance are understood. Bad automation sells the materials your station still needs."
 />
 <p className="mb-4 leading-relaxed text-muted-foreground">
 Once you have stable mining, automate your income to focus on expansion:
 </p>
 <ol className="list-decimal space-y-3 pl-5 text-sm leading-relaxed text-muted-foreground">
 <li>Build a <strong>T2 Metal Storage</strong> module next to your refinery.</li>
 <li>Set automation trigger: when storage reaches 80% capacity, auto-sell surplus at the nearest trade station (must be within 1000m for direct trade).</li>
 <li>For stations beyond 1000m, set up automated transport triggers (infinite range) to move processed goods to a hub station near a trade depot.</li>
 <li>Process raw ore into ingots before selling ?a Basic Smelter converts ore to ingots at 3-5x value density per cargo space.</li>
 <li>Build dedicated hauler ships to run trade routes between your mining ops and trade stations.</li>
 </ol>
 </section>

 <section id="clear-debt" className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Debt Clearing Priority</h2>
 <ArticleImage
 src={starminerImages.frontier}
 alt="Starminer early expansion and debt clearing route"
 caption="Debt clearing is not glamorous, but it keeps early expansion from bleeding credits into interest instead of ships, labs, and defenses."
 />
 <div className="rounded-lg border border-border bg-mist p-5">
 <p className="text-sm leading-relaxed text-muted-foreground">
 <strong>Clear your starting debt in the first 2 hours.</strong> Interest
 compounds over time and eats into your expansion budget. Two Thorium
 Chunks or ~10 Cobalt units will cover it. Sell to the Governance ship at
 a trading lane for the best price. Debt-free, every credit goes toward
 growth instead of interest payments.
 </p>
 </div>
 </section>

 <section id="missions" className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Mission Income</h2>
 <p className="mb-4 leading-relaxed text-muted-foreground">
 Missions from the Operations Interface provide structured income plus bonus
 XP. Prioritize these types:
 </p>
 <div className="grid gap-3 sm:grid-cols-2">
 {[
 { type: "Mining Delivery", reward: "Credits + XP + reputation", tip: "Accept missions for resources you're already mining. Don't chase rare materials for a single mission." },
 { type: "Defense Contracts", reward: "High credits + combat XP", tip: "Only accept after you have a patrol boat or defense platform. Don't fight with mining ships." },
 { type: "Exploration", reward: "XP + map data + anomaly scans", tip: "Good for breaking up the mining loop. Reveals new asteroid fields and trade stations." },
 { type: "Trade Missions", reward: "Credits + trade reputation", tip: "Combine with your automated trade routes for passive mission completion." },
 ].map((m) => (
 <div key={m.type} className="rounded-md border border-border bg-mist p-4">
 <h3 className="text-sm font-bold text-foreground">{m.type}</h3>
 <p className="mt-1 text-xs text-foreground">{m.reward}</p>
 <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{m.tip}</p>
 </div>
 ))}
 </div>
 </section>

 <section className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">New Player vs Optimizer Money Plan</h2>
 <p className="mb-4 leading-relaxed text-muted-foreground">
 Money advice changes by save state. Beginners need debt control and
 safe income. Builders need to avoid selling construction inputs.
 Traders need storage thresholds. Optimizers need to diagnose the slow
 link in the chain before adding more miners.
 </p>
 <div className="overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player type</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Money plan</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why</th>
 </tr>
 </thead>
 <tbody>
 {playerRows.map(([type, plan, why]) => (
 <tr key={type} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{type}</th>
 <td className="px-4 py-3 text-muted-foreground">{plan}</td>
 <td className="px-4 py-3 text-muted-foreground">{why}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </section>

 <section className="mt-10">
 <h2 className="mb-4 text-2xl font-bold text-foreground">Money Problem Diagnosis</h2>
 <div className="overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Problem</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Likely cause</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Fix</th>
 </tr>
 </thead>
 <tbody>
 {moneyProblemRows.map(([problem, cause, fix]) => (
 <tr key={problem} className="border-b border-border last:border-0">
 <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{problem}</th>
 <td className="px-4 py-3 text-muted-foreground">{cause}</td>
 <td className="px-4 py-3 text-muted-foreground">{fix}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </section>
 </StarminerArticle>
 );
}
