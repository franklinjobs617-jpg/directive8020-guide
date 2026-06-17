import Link from "next/link";
import { ArticleImage } from "@/components/article-media";
import { BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { SpacecraftArticle } from "@/components/spacecraft-article";
import { createSpacecraftMetadata, spacecraftImages } from "@/lib/spacecraft";

const title = "SpaceCraft Trading Guide: Market Routes, Best Items to Sell, Station Trading & Credit Farming";
const description =
  "SpaceCraft trading and economy guide covering best trade routes, player-driven market mechanics, supply and demand tracking, credit farming methods, and interstellar trading strategies.";
const canonical = "/games/spacecraft/trading-economy";

export const metadata = createSpacecraftMetadata({
  title,
  description,
  canonical,
  image: spacecraftImages.trading,
});

const faqs = [
  {
    question: "How do I make money fast in SpaceCraft?",
    answer:
      "Early game: mine and sell raw Deuterium and rare metals at station markets. Mid game: set up automated production lines and sell crafted ship parts (engines, reactors, weapons) on the player market — these have much higher profit margins than raw ore. Late game: sell complete ship blueprints to other players for passive income.",
  },
  {
    question: "How does the player-driven economy work?",
    answer:
      "Every transaction shifts market prices. Prices are not fixed — they respond to supply and demand in real time. Buy low at resource-heavy systems where miners dump raw ore, and sell high at manufacturing hubs where factories need materials. Corporation-controlled sectors often have manipulated prices, so check multiple markets before committing to a trade.",
  },
  {
    question: "What are the best trading routes?",
    answer:
      "Check the in-game market board for price differentials between systems. Generally, buy raw ore at mining outpost systems and sell at factory hubs. Buy crafted components at industrial systems and sell at frontier stations. The most profitable routes change frequently — successful traders check prices before every cargo run.",
  },
  {
    question: "How do I read supply and demand indicators?",
    answer:
      "Each station market shows supply (green bar) and demand (red bar) for every item. High supply means low prices (good for buying). High demand means high prices (good for selling). Look for items with long red bars — the station is desperate for that resource and will pay premium prices.",
  },
];

const sellRows = [
  ["Early Game (0-10 hrs)", "Raw Deuterium", "Station Market (any)", "30-50%", "Simple mining, no processing required. Sell at any station for quick credits."],
  ["Early Game (0-10 hrs)", "Malachite / Azurite", "Station Market (any)", "40-60%", "Use Overclocked laser sparingly. High-value raw ore in constant demand."],
  ["Mid Game (10-50 hrs)", "Basic Components", "Player Market", "50-80%", "Iron Ore processed through Assembler. Low input cost, reliable demand."],
  ["Mid Game (10-50 hrs)", "Electronic Components", "Player Market", "60-100%", "Copper + Quartz processed. Higher margin than Basic Components."],
  ["Mid Game (10-50 hrs)", "Thruster Units", "Player Market", "80-150%", "Premium crafted item. Every player needs thrusters. Sell in bulk for best prices."],
  ["Late Game (50+ hrs)", "Reactor Cores", "Player Market", "100-200%", "Complex crafting chain. Limited supply, constant demand from ship builders."],
  ["Late Game (50+ hrs)", "Ship Blueprints", "Player Market", "200-500%", "Passive income. Design once, sell unlimited copies. Best late-game money maker."],
];

const searchIntentRows = [
  {
    query: "SpaceCraft how to make money",
    answer: "Early: mine and sell Deuterium. Mid: automate production of ship parts. Late: sell ship blueprints for passive income.",
    href: "#best-items",
    label: "Money",
  },
  {
    query: "SpaceCraft trading routes",
    answer: "Buy raw ore at mining systems, sell at factory hubs. Buy components at industrial systems, sell at frontier stations.",
    href: "#routes",
    label: "Routes",
  },
  {
    query: "SpaceCraft player market tips",
    answer: "Prices shift with every transaction. Watch supply/demand bars. Buy when supply is high (green), sell when demand is high (red).",
    href: "#supply-demand",
    label: "Market",
  },
];

const jumpLinks = [
  { href: "#best-items", label: "Best items" },
  { href: "#routes", label: "Trade routes" },
  { href: "#supply-demand", label: "Supply & demand" },
  { href: "/games/spacecraft/factory-automation", label: "Automation" },
  { href: "/games/spacecraft/mining-guide", label: "Mining" },
  { href: "/games/spacecraft/factions-guide", label: "Factions" },
];

export default function SpacecraftTradingPage() {
  return (
    <SpacecraftArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Trading & Economy"
      heroImage={spacecraftImages.trading}
      heroAlt="SpaceCraft trading and economy guide"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="How do I make money fast in SpaceCraft?"
        answer="Early game: mine and sell raw Deuterium and rare metals at station markets. Mid game: set up automated production lines and sell crafted ship parts (engines, reactors, weapons) on the player market — these have much higher profit margins than raw ore. Late game: sell complete ship blueprints to other players for passive income."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Market Reality">
        <p>
          <strong>The SpaceCraft economy is fully player-driven.</strong>{" "}
          Every transaction shifts market prices. Buy low at resource-heavy systems, sell high at manufacturing hubs. Pay attention to Corporation-controlled sectors — they often manipulate local prices.
        </p>
      </BlufBox>

      <section id="best-items" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Best Items to Sell at Each Stage</h2>
        <ArticleImage
          src={spacecraftImages.trading}
          alt="SpaceCraft trading market routes and credit farming"
          caption="The most profitable items to sell change as you progress. Raw ore works early, but crafted components and blueprints dominate the late-game economy."
        />
        <div className="overflow-x-auto rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-mist">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Stage</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Item</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Market</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Profit Margin</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Strategy</th>
              </tr>
            </thead>
            <tbody>
              {sellRows.map(([stage, item, market, margin, strategy]) => (
                <tr key={`${stage}-${item}`} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{stage}</td>
                  <td className="px-4 py-3 font-semibold text-foreground">{item}</td>
                  <td className="px-4 py-3 text-muted-foreground">{market}</td>
                  <td className="px-4 py-3 text-muted-foreground">{margin}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{strategy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="routes" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Trading Routes Strategy</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Successful trading in SpaceCraft is about identifying price differentials between systems. The general principle: <strong>buy where it is abundant, sell where it is scarce.</strong> Mining outpost systems have surplus raw ore and low prices — buy there. Manufacturing hubs need raw materials and pay premium prices — sell there. Frontier stations lack everything and pay the highest prices, but the travel distance and risk must be factored into your profit calculation.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Corporation-controlled sectors are a special case. Large Corporations often manipulate local prices by flooding or starving specific markets. Before trading in Corporation territory, check the market board for unusual price patterns — they may indicate an artificial market that will correct suddenly.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          For setting up the production lines that create your trade goods, see our{" "}
          <Link href="/games/spacecraft/factory-automation" className="text-foreground underline">factory automation guide</Link>.
          For securing your trade routes through faction territory, see our{" "}
          <Link href="/games/spacecraft/factions-guide" className="text-foreground underline">factions guide</Link>.
        </p>
      </section>

      <section id="supply-demand" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Reading Supply and Demand Indicators</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Every station market displays supply and demand bars for each item. <strong>Green bar (supply):</strong> how much of this item is available at this station — long green means low prices, good for buying. <strong>Red bar (demand):</strong> how much this station needs this item — long red means high prices, good for selling. The ideal trade target is an item with a short green bar (low supply) AND a long red bar (high demand) — this means the station is desperate and will pay well above average market price.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Advanced traders watch for market trends over time rather than snapshot prices. If a system's raw ore demand has been rising for several days, a factory expansion is likely underway — position yourself to supply it before other traders catch on. Market intelligence is as valuable as cargo capacity in SpaceCraft.
        </p>
      </section>
    </SpacecraftArticle>
  );
}
