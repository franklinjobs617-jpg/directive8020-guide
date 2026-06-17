import Link from "next/link";
import { ArticleImage } from "@/components/article-media";
import { BlufBox, SearchAnswerPanel, StatusPanel } from "@/components/guide-blocks";
import { SpacecraftArticle } from "@/components/spacecraft-article";
import { createSpacecraftMetadata, spacecraftImages } from "@/lib/spacecraft";

const title = "SpaceCraft Steam Deck Guide: Compatibility, Settings & Performance";
const description =
  "SpaceCraft Steam Deck compatibility guide covering Proton status, performance settings, control mapping, battery life expectations, and whether the always-online MMO plays well on handheld.";
const canonical = "/games/spacecraft/steam-deck";

export const metadata = createSpacecraftMetadata({
  title,
  description,
  canonical,
  image: spacecraftImages.siteHero,
});

const faqs = [
  {
    question: "Does SpaceCraft work on Steam Deck?",
    answer:
      "SpaceCraft is not officially Steam Deck Verified as of June 2026. The always-online MMO requirement and heavy CPU load from automation systems make handheld play challenging. Some players report 25-35 FPS on low settings via Proton Experimental, but the experience is not optimized for Deck.",
  },
  {
    question: "What Proton version should I use?",
    answer:
      "Community reports suggest Proton Experimental provides the best compatibility as of June 2026. Proton GE (Glorious Eggroll) may offer better performance but has not been widely tested. Standard Proton versions (8.0, 9.0) have reported stability issues with SpaceCraft's networking layer.",
  },
  {
    question: "How is battery life on Steam Deck?",
    answer:
      "Expect 1.5-2.5 hours of battery life when playing SpaceCraft on Steam Deck. The always-online Wi-Fi connection, CPU-heavy automation calculations, and 3D rendering combine to drain the battery quickly. Playing plugged in is recommended for sessions longer than an hour.",
  },
  {
    question: "Is the UI readable on the Steam Deck screen?",
    answer:
      "SpaceCraft's UI was designed for desktop monitors. Text elements, market board interfaces, and ship building menus can be difficult to read on the 7-inch Deck screen. There is no UI scaling option as of the June 2026 Early Access launch.",
  },
];

const deckFacts = [
  ["Steam Deck Verified", "No — not officially verified as of June 2026"],
  ["Proton Compatibility", "Proton Experimental recommended (community tested)"],
  ["Performance (Low Settings)", "25-35 FPS reported in starter sectors; drops to 15-20 FPS in busy sectors"],
  ["Battery Life", "1.5-2.5 hours (always-online Wi-Fi drains battery faster)"],
  ["UI Readability", "Small text and complex menus — no UI scaling option available"],
  ["Control Support", "Partial — keyboard and mouse recommended for ship building and market menus"],
  ["Offline Play", "Not possible — always-online requirement makes Deck play dependent on stable Wi-Fi"],
  ["Recommendation", "Not recommended in current Early Access state. Wait for official verification or performance patches."],
];

const searchIntentRows = [
  {
    query: "SpaceCraft Steam Deck compatibility",
    answer: "Not officially verified. Proton Experimental works with 25-35 FPS on low settings. Always-online requirement and small UI are major issues.",
    href: "#facts",
    label: "Status",
  },
  {
    query: "SpaceCraft Steam Deck settings",
    answer: "Low graphics preset, 720p resolution, Proton Experimental, capped at 30 FPS. Expect 1.5-2.5 hours battery life.",
    href: "#settings",
    label: "Settings",
  },
  {
    query: "Is SpaceCraft playable on Steam Deck?",
    answer: "Technically playable but not recommended. Performance, UI size, battery life, and always-online requirement create a suboptimal experience.",
    href: "#verdict",
    label: "Verdict",
  },
];

const jumpLinks = [
  { href: "#facts", label: "Deck status" },
  { href: "#settings", label: "Best settings" },
  { href: "#battery", label: "Battery life" },
  { href: "#verdict", label: "Verdict" },
  { href: "/games/spacecraft/system-requirements", label: "PC specs" },
  { href: "/games/spacecraft/crashing-fix", label: "Crash fix" },
];

export default function SpacecraftSteamDeckPage() {
  return (
    <SpacecraftArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Steam Deck"
      heroImage={spacecraftImages.siteHero}
      heroAlt="SpaceCraft Steam Deck compatibility guide"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="Does SpaceCraft work on Steam Deck?"
        answer="SpaceCraft is not officially Steam Deck Verified as of June 2026. The always-online MMO requirement and heavy CPU load from automation systems make handheld play challenging. Some players report 25-35 FPS on low settings via Proton Experimental, but the experience is not optimized for Deck."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Deck Verdict">
        <p>
          <strong>SpaceCraft is not recommended for Steam Deck in its current Early Access state.</strong>{" "}
          The always-online requirement, small UI elements, and CPU-heavy automation systems create a suboptimal handheld experience. Wait for official Deck verification or performance patches.
        </p>
      </BlufBox>

      <section id="facts">
        <StatusPanel
          items={deckFacts.map(([label, value]) => ({
            label,
            value,
            status: (label === "Performance (Low Settings)" || label === "Battery Life" ? "needs-check" : "verified") as "verified" | "needs-check",
          }))}
        />
      </section>

      <section id="settings" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Community-Reported Best Settings</h2>
        <ArticleImage
          src={spacecraftImages.shipBuilding}
          alt="SpaceCraft Steam Deck performance settings"
          caption="While not officially supported, players have found settings that make SpaceCraft playable on Steam Deck. Expect compromises in both visuals and performance."
        />
        <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
          <li><strong>Graphics preset:</strong> Low (all settings at minimum)</li>
          <li><strong>Resolution:</strong> 1280x720 (native Deck resolution — do not upscale)</li>
          <li><strong>FPS cap:</strong> 30 FPS (via Steam Deck performance overlay)</li>
          <li><strong>Proton version:</strong> Proton Experimental (force in game properties under Compatibility)</li>
          <li><strong>TDP limit:</strong> 10W (reduces heat and extends battery with minimal FPS loss)</li>
          <li><strong>GPU clock:</strong> Lock at 1000MHz for stable frame times</li>
          <li><strong>FSR:</strong> Off (SpaceCraft does not benefit from FSR at native resolution)</li>
          <li><strong>Shadow quality:</strong> Off or Minimum (the single biggest FPS gain on Deck)</li>
        </ul>
      </section>

      <section id="battery" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Battery Life Expectations</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          SpaceCraft is particularly demanding on Steam Deck battery life due to three factors: the always-online Wi-Fi connection continuously transmits and receives data, the CPU-heavy automation calculations run even when you are stationary, and the 3D rendering of asteroid fields and player structures is GPU-intensive. With the recommended settings above and a 10W TDP limit, expect <strong>1.5-2.5 hours</strong> of battery life on an LCD Deck and slightly more (2-3 hours) on an OLED Deck. Playing plugged in is recommended for any session longer than an hour.
        </p>
      </section>

      <section id="verdict" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Final Verdict: Should You Play on Steam Deck?</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          <strong>Not right now.</strong> While SpaceCraft is technically playable on Steam Deck via Proton Experimental, the combination of always-online requirement (tethers you to stable Wi-Fi), small UI elements (designed for desktop monitors, not 7-inch screens), sub-30 FPS performance, and short battery life creates an experience that does not match what the game offers on a desktop PC. If Steam Deck is your only gaming device, wait for official verification and performance optimization patches. For current play, see our{" "}
          <Link href="/games/spacecraft/system-requirements" className="text-foreground underline">system requirements guide</Link>{" "}
          for desktop hardware that runs SpaceCraft well.
        </p>
      </section>
    </SpacecraftArticle>
  );
}
