import Image from "next/image";
import Link from "next/link";
import { ArticleImage } from "@/components/article-media";
import { BlufBox, SearchAnswerPanel, StatusPanel } from "@/components/guide-blocks";
import { SpacecraftArticle } from "@/components/spacecraft-article";
import { spacecraft } from "@/lib/games";
import {
  createSpacecraftMetadata,
  spacecraftImages,
  spacecraftQuickFacts,
  spacecraftStartRows,
} from "@/lib/spacecraft";

const title = "SpaceCraft Guide: Beginner Tips, Ship Building, Mining, Automation & Trading";
const description =
  "SpaceCraft guide hub covering release date, beginner tips, ship building, mining, automation, trading, faction wars, base defense, and buying advice for Shiro Games' space survival MMO.";
const canonical = "/games/spacecraft";

export const metadata = createSpacecraftMetadata({
  title,
  description,
  canonical,
  image: spacecraftImages.siteHero,
});

const faqs = [
  {
    question: "Is SpaceCraft single-player or online only?",
    answer:
      "SpaceCraft is an always-online MMO. There is no offline single-player mode. All players share the same persistent universe, and an active broadband internet connection is required at all times.",
  },
  {
    question: "How do I build my first ship?",
    answer:
      "Complete the tutorial first. Then gather basic ores (iron, copper, quartz), craft a Reactor Core, Thrusters, and a Mining Laser. Assemble them on a basic frame at any station or outpost. Your first ship should be a simple mining vessel — do not try to build a combat-ready cruiser immediately.",
  },
  {
    question: "What is the best way to make money?",
    answer:
      "Early game: mine and sell raw Deuterium and rare metals at station markets. Mid game: automate production lines and sell crafted ship parts (engines, reactors, weapons) on the player market. Late game: sell complete ship blueprints for passive income.",
  },
  {
    question: "Does SpaceCraft have PvP?",
    answer:
      "PvP combat is not yet implemented as of the June 2026 Early Access launch. Shiro Games has confirmed PvE pirate encounters and PvP combat are planned for future updates. Currently, players interact through the economy and Corporation system.",
  },
  {
    question: "How do Corporations work?",
    answer:
      "Corporations are player-run guilds. Form one from the social menu to share resources, assign roles (Officer, Engineer, Pilot, Recruit), coordinate fleet operations, and compete for sector control. Corporation members gain shared access to corp stations and storage depots.",
  },
];

const searchIntentRows = [
  {
    query: "SpaceCraft release date",
    answer: "SpaceCraft launched into Steam Early Access on June 11, 2026, priced at $29.99 with a 10% launch discount.",
    href: "/games/spacecraft/release-date",
    label: "Release",
  },
  {
    query: "SpaceCraft beginner guide",
    answer: "Complete the tutorial, mine basic ores, build a simple ship with Reactor Core and Mining Laser, and stay within 3 sectors of the starter zone.",
    href: "/games/spacecraft/beginner-guide",
    label: "Start here",
  },
  {
    query: "SpaceCraft best ship build",
    answer: "Ships are fully modular — no pre-built classes. Medium Cruisers (S-tier) with balanced shields, power grid, and energy weapons are the current meta.",
    href: "/games/spacecraft/ship-building",
    label: "Ships",
  },
  {
    query: "Is SpaceCraft worth it?",
    answer: "Buy now if you enjoy factory automation and Early Access. Wait 6-12 months for combat and more content. Skip if you want offline single-player.",
    href: "/games/spacecraft/is-it-worth-it",
    label: "Verdict",
  },
  {
    query: "SpaceCraft system requirements",
    answer: "Minimum: Windows 10, i3-8350K, 8GB RAM, GTX 1060, 25GB storage. Recommended: i5-11400T, 16GB RAM, RTX 3060.",
    href: "/games/spacecraft/system-requirements",
    label: "Specs",
  },
];

const jumpLinks = [
  { href: "#facts", label: "Facts" },
  { href: "#start-here", label: "Start here" },
  { href: "#guide-map", label: "Guide map" },
  { href: "/games/spacecraft/beginner-guide", label: "Beginner" },
  { href: "/games/spacecraft/ship-building", label: "Ships" },
  { href: "/games/spacecraft/is-it-worth-it", label: "Worth it?" },
];

function getGuideImage(href: string) {
  if (href.includes("release")) return spacecraftImages.siteHero;
  if (href.includes("beginner")) return spacecraftImages.shipBuilding;
  if (href.includes("ship-building")) return spacecraftImages.shipBuilding;
  if (href.includes("mining")) return spacecraftImages.mining;
  if (href.includes("automation")) return spacecraftImages.automation;
  if (href.includes("trading")) return spacecraftImages.trading;
  if (href.includes("combat")) return spacecraftImages.combat;
  if (href.includes("worth")) return spacecraftImages.worthIt;
  return spacecraftImages.siteHero;
}

export default function SpacecraftHubPage() {
  return (
    <SpacecraftArticle
      title={title}
      description={description}
      canonical={canonical}
      label="SpaceCraft"
      heroImage={spacecraftImages.siteHero}
      heroAlt="SpaceCraft space survival MMO guide hub hero image"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="What should you know before starting SpaceCraft?"
        answer="SpaceCraft is an online space survival MMO from Shiro Games (creators of Northgard and Wartales) launched in Early Access on June 11, 2026. It combines asteroid mining, modular ship building, factory automation, player-driven trading, and Corporation (guild) management in a persistent galaxy. Combat systems are not yet implemented — the Early Access period focuses on the economic and building core loop."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Quick Verdict">
        <p>
          <strong>SpaceCraft is for players who enjoy factory automation, space exploration, and MMO economies.</strong>{" "}
          It is NOT a fast-paced action game — expect slow-burn progression, always-online requirements, and Early Access roughness. If you enjoy Satisfactory, EVE Online, or No Man's Sky, you will find the core loop satisfying. If you need combat, polished content, or offline play, wait for the full release.
        </p>
      </BlufBox>

      <section id="facts">
        <StatusPanel
          items={spacecraftQuickFacts.map(([label, value]) => ({
            label,
            value,
            status: (label === "Steam Review" || label === "Server Status" ? "needs-check" : "verified") as "verified" | "needs-check",
          }))}
        />
      </section>

      <section id="start-here" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Start Here by Need</h2>
        <ArticleImage
          src={spacecraftImages.shipBuilding}
          alt="SpaceCraft guide hub ship building and exploration"
          caption="Use this hub to navigate every aspect of SpaceCraft: from your first mining laser to running a fully automated industrial Corporation. Each guide below addresses a specific player need."
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
              {spacecraftStartRows.map(([need, answer, href]) => (
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

      <section id="guide-map" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">SpaceCraft Guide Map</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {spacecraft.guideLinks.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group overflow-hidden rounded-lg border border-border bg-white transition-colors hover:border-border"
            >
              <div className="relative aspect-video">
                <Image
                  src={getGuideImage(guide.href)}
                  alt={`${guide.title} SpaceCraft guide image`}
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
    </SpacecraftArticle>
  );
}
