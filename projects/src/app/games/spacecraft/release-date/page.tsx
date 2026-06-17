import Link from "next/link";
import { ArticleImage } from "@/components/article-media";
import { BlufBox, SearchAnswerPanel, StatusPanel } from "@/components/guide-blocks";
import { SpacecraftArticle } from "@/components/spacecraft-article";
import { createSpacecraftMetadata, spacecraftImages, spacecraftSpecRows } from "@/lib/spacecraft";

const title = "SpaceCraft Release Date: Early Access, Server Status, Platforms & Price";
const description =
  "SpaceCraft released into Steam Early Access on June 11, 2026. Learn the current server status, $29.99 price, 10% launch discount, PC-only platform, and Shiro Games roadmap for future updates.";
const canonical = "/games/spacecraft/release-date";

export const metadata = createSpacecraftMetadata({
  title,
  description,
  canonical,
  image: spacecraftImages.siteHero,
});

const faqs = [
  {
    question: "When exactly did SpaceCraft release?",
    answer:
      "SpaceCraft launched into Steam Early Access on June 11, 2026. The game is available exclusively on Steam for PC (Windows 10/11 64-bit). No console or Mac versions are currently announced.",
  },
  {
    question: "How much does SpaceCraft cost?",
    answer:
      "SpaceCraft is priced at $29.99 USD. A 10% launch discount brought the price to $26.99 during the initial launch window. Regional pricing varies by territory.",
  },
  {
    question: "What platforms is SpaceCraft on?",
    answer:
      "SpaceCraft is currently PC-only via Steam (Windows 10/11 64-bit). There has been no announcement regarding Mac, Linux, PlayStation, Xbox, or Nintendo Switch versions.",
  },
  {
    question: "How long will SpaceCraft be in Early Access?",
    answer:
      "Shiro Games has stated Early Access will last at least 6 months, with a full 1.0 release targeted for late 2026 or early 2027. The roadmap includes combat systems, expanded galaxy sectors, and additional ship modules.",
  },
  {
    question: "Is the SpaceCraft server online right now?",
    answer:
      "Server status fluctuates during Early Access. Check the official SpaceCraft Discord or Steam Community Hub for real-time server status. Scheduled maintenance typically occurs on Tuesdays with advance notice posted on Steam.",
  },
];

const searchIntentRows = [
  {
    query: "SpaceCraft release date",
    answer: "June 11, 2026 on Steam Early Access. PC-only (Windows 10/11), $29.99 with 10% launch discount.",
    href: "#facts",
    label: "Release",
  },
  {
    query: "SpaceCraft price",
    answer: "$29.99 USD base price. Launch discount brought it to $26.99. Regional pricing available on Steam.",
    href: "#facts",
    label: "Price",
  },
  {
    query: "SpaceCraft console release",
    answer: "No console versions (PS5, Xbox, Switch) have been announced. The game is PC-only for the foreseeable future.",
    href: "#platform-status",
    label: "Platforms",
  },
  {
    query: "SpaceCraft Early Access roadmap",
    answer: "At least 6 months of Early Access planned. Combat systems, more sectors, and additional modules coming in future updates.",
    href: "#roadmap",
    label: "Roadmap",
  },
];

const jumpLinks = [
  { href: "#facts", label: "Facts" },
  { href: "#platform-status", label: "Platforms" },
  { href: "#before-you-buy", label: "Before you buy" },
  { href: "/games/spacecraft/system-requirements", label: "Specs" },
  { href: "/games/spacecraft/steam-deck", label: "Steam Deck" },
  { href: "/games/spacecraft/is-it-worth-it", label: "Worth it?" },
];

const releaseFacts = [
  ["Release Date", "June 11, 2026 (Steam Early Access)"],
  ["Price", "$29.99 USD ($26.99 launch sale)"],
  ["Launch Discount", "10% off for initial launch window"],
  ["Platform", "PC via Steam (Windows 10/11 64-bit)"],
  ["Developer", "Shiro Games (Northgard, Wartales)"],
  ["Publisher", "Shiro Games"],
  ["Server Status", "Online — always-online MMO (check Discord for outages)"],
  ["Early Access Duration", "At least 6 months planned before 1.0"],
];

const platformRows = [
  ["PC (Windows 10/11)", "Confirmed — Steam Early Access"],
  ["Mac", "Not supported — no announcement"],
  ["Linux / SteamOS", "Not supported — Proton compatibility unverified"],
  ["PlayStation 5", "Not announced"],
  ["Xbox Series X|S", "Not announced"],
  ["Nintendo Switch / Switch 2", "Not announced"],
];

export default function SpacecraftReleaseDatePage() {
  return (
    <SpacecraftArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Release Date"
      heroImage={spacecraftImages.siteHero}
      heroAlt="SpaceCraft release date and Early Access launch guide"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="When did SpaceCraft release and what does it cost?"
        answer="SpaceCraft launched into Steam Early Access on June 11, 2026. It is priced at $29.99 with a 10% launch discount bringing it to $26.99. The game is PC-only (Windows 10/11) and requires an always-online internet connection."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Release Summary">
        <p>
          <strong>SpaceCraft is in Early Access with at least 6 months planned before 1.0.</strong>{" "}
          Expect regular updates, server maintenance, and evolving systems. Combat systems are NOT yet implemented as of launch. If you are buying for combat or a complete experience, wait for the full release or at least a major content update.
        </p>
      </BlufBox>

      <section id="facts">
        <StatusPanel
          items={releaseFacts.map(([label, value]) => ({
            label,
            value,
            status: (label === "Server Status" || label === "Early Access Duration" ? "needs-check" : "verified") as "verified" | "needs-check",
          }))}
        />
      </section>

      <section id="platform-status" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Platform Status</h2>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          SpaceCraft is currently a PC-exclusive title. Shiro Games has not announced plans for console or Mac releases. The always-online MMO architecture makes platform expansion more complex than a typical single-player game.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-mist">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Platform</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {platformRows.map(([platform, status]) => (
                <tr key={platform} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-medium text-foreground">{platform}</td>
                  <td className="px-4 py-3 text-muted-foreground">{status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="before-you-buy" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Before You Buy: Verification Checklist</h2>
        <ArticleImage
          src={spacecraftImages.shipBuilding}
          alt="SpaceCraft ship construction before buying"
          caption="Before purchasing SpaceCraft, verify these items to ensure the game meets your expectations at its current Early Access stage."
        />
        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-1 text-foreground font-bold">1.</span>
            <span><strong>Check the Steam page</strong> for the most current Early Access description and scope notes from Shiro Games. The feature list may change during Early Access.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 text-foreground font-bold">2.</span>
            <span><strong>Verify system requirements</strong> against your PC specs. SpaceCraft needs a stable broadband connection — Wi-Fi dropouts will disconnect you. See our{" "}
              <Link href="/games/spacecraft/system-requirements" className="text-foreground underline">system requirements guide</Link> for full details.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 text-foreground font-bold">3.</span>
            <span><strong>Join the official Discord</strong> to monitor server status and community sentiment. Server stability during Early Access launch is variable.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 text-foreground font-bold">4.</span>
            <span><strong>Understand the always-online requirement.</strong> There is no offline mode. Server maintenance, internet outages, or Shiro Games server issues will prevent you from playing.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 text-foreground font-bold">5.</span>
            <span><strong>Read our{" "}
              <Link href="/games/spacecraft/is-it-worth-it" className="text-foreground underline">is it worth it guide</Link>
            </strong> for a detailed analysis of whether SpaceCraft matches your gaming preferences at its current Early Access stage.</span>
          </li>
        </ul>
      </section>

      <section id="roadmap" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">What Is Coming in Early Access</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Shiro Games has outlined several major features planned during the Early Access period. The highest-priority items include combat systems (PvE pirate encounters and PvP), expanded galaxy sectors with new resource types, additional ship modules and weapon types, Corporation warfare and territory control mechanics, and performance optimization. All timelines are estimates and subject to change. Follow the official Steam announcements and{" "}
          <Link href="/games/spacecraft/combat-guide" className="text-foreground underline">our combat guide</Link>{" "}
          for the latest confirmed feature status.
        </p>
      </section>
    </SpacecraftArticle>
  );
}
