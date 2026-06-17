import Link from "next/link";
import { ArticleImage } from "@/components/article-media";
import { BlufBox, SearchAnswerPanel, StatusPanel } from "@/components/guide-blocks";
import { SpacecraftArticle } from "@/components/spacecraft-article";
import { createSpacecraftMetadata, spacecraftImages, spacecraftSpecRows } from "@/lib/spacecraft";

const title = "SpaceCraft System Requirements: Minimum, Recommended PC Specs & Performance";
const description =
  "Official SpaceCraft system requirements for PC. Minimum and recommended specs (Intel i3-8350K / i5-11400T, GTX 1060 / RTX 3060, 8-16GB RAM, 25GB storage), performance optimization, and hardware compatibility.";
const canonical = "/games/spacecraft/system-requirements";

export const metadata = createSpacecraftMetadata({
  title,
  description,
  canonical,
  image: spacecraftImages.siteHero,
});

const faqs = [
  {
    question: "Can my PC run SpaceCraft?",
    answer:
      "SpaceCraft minimum specs: Windows 10 64-bit, Intel i3-8350K, 8GB RAM, Geforce 1060, 25GB storage (targets 1080p at 30fps). Recommended: Intel i5-11400T, 16GB RAM, Geforce 3060, 25GB storage (targets 1440p at 60fps). An always-online broadband connection is required.",
  },
  {
    question: "Does SpaceCraft support Windows 11?",
    answer:
      "Yes. SpaceCraft officially supports Windows 10 64-bit and Windows 11 64-bit. Windows 11 users should ensure DirectX 12 is installed (via Windows Update) for the recommended experience, though DirectX 11 is the minimum requirement.",
  },
  {
    question: "Why does SpaceCraft need an always-online connection?",
    answer:
      "SpaceCraft is a persistent-universe MMO. All player actions — mining, trading, building — happen on shared servers. There is no offline single-player mode. Internet stability matters as much as hardware specifications for a smooth experience.",
  },
  {
    question: "How can I improve SpaceCraft performance?",
    answer:
      "Lower shadow quality and draw distance first — these have the highest performance impact. Disable background applications, update GPU drivers, and install the game on an SSD rather than HDD. If you are on a laptop, ensure you are using the dedicated GPU, not integrated graphics.",
  },
];

const searchIntentRows = [
  {
    query: "SpaceCraft minimum requirements",
    answer: "Windows 10 64-bit, i3-8350K, 8GB RAM, GTX 1060, 25GB storage. Targets 1080p at 30fps.",
    href: "#specs",
    label: "Minimum",
  },
  {
    query: "SpaceCraft recommended specs",
    answer: "Windows 10 64-bit, i5-11400T, 16GB RAM, RTX 3060, 25GB storage. Targets 1440p at 60fps.",
    href: "#specs",
    label: "Recommended",
  },
  {
    query: "SpaceCraft performance optimization",
    answer: "Lower shadows and draw distance, use SSD, update GPU drivers, close background apps, and ensure dedicated GPU on laptops.",
    href: "#optimization",
    label: "Optimize",
  },
];

const jumpLinks = [
  { href: "#specs", label: "Specs" },
  { href: "#will-it-run", label: "Will it run?" },
  { href: "#optimization", label: "Optimization" },
  { href: "/games/spacecraft/steam-deck", label: "Steam Deck" },
  { href: "/games/spacecraft/crashing-fix", label: "Crash fix" },
  { href: "/games/spacecraft/release-date", label: "Release" },
];

const specItems = [
  ["OS", "Windows 10/11 64-bit", "Windows 10/11 64-bit"],
  ["CPU", "Intel i3-8350K", "Intel i5-11400T"],
  ["RAM", "8 GB", "16 GB"],
  ["GPU", "Nvidia Geforce 1060", "Nvidia Geforce 3060"],
  ["Storage", "25 GB available space", "25 GB available space"],
  ["DirectX", "Version 11", "Version 12"],
  ["Target", "1080p @ 30 fps", "1440p @ 60 fps"],
  ["Network", "Broadband Internet (always-online)", "Broadband Internet"],
];

const quickRefRows = [
  ["Can I run it at minimum?", "i3-8350K or equivalent, 8GB RAM, GTX 1060. Most gaming PCs from the last 5 years meet or exceed this.", "Yes"],
  ["Can I run it at recommended?", "i5-11400T or equivalent, 16GB RAM, RTX 3060. Mid-range gaming PCs from 2020 or newer.", "Yes"],
  ["Can I run it on a laptop?", "Gaming laptop with dedicated GPU only. Integrated graphics (Intel UHD/Iris Xe) will NOT work well.", "Gaming laptop only"],
  ["Can I run it on integrated graphics?", "Not recommended. GTX 1060 is the minimum. Integrated graphics lack dedicated VRAM and processing power.", "No"],
  ["Do I need an SSD?", "Not listed as required, but strongly recommended. HDD load times are significant. 25GB is manageable for any SSD.", "Strongly recommended"],
  ["Do I need fast internet?", "Stable broadband is required. Speed matters less than stability — Wi-Fi dropouts disconnect you.", "Stability > speed"],
];

export default function SpacecraftSystemRequirementsPage() {
  return (
    <SpacecraftArticle
      title={title}
      description={description}
      canonical={canonical}
      label="System Requirements"
      heroImage={spacecraftImages.siteHero}
      heroAlt="SpaceCraft PC system requirements guide"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="Can my PC run SpaceCraft?"
        answer="SpaceCraft minimum specs: Windows 10 64-bit, Intel i3-8350K, 8GB RAM, Geforce 1060, 25GB storage (targets 1080p at 30fps). Recommended: Intel i5-11400T, 16GB RAM, Geforce 3060, 25GB storage (targets 1440p at 60fps). An always-online broadband connection is required."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Internet Matters">
        <p>
          <strong>The always-online MMO requirement means internet stability matters as much as hardware.</strong>{" "}
          Even the best PC will struggle with server-side lag during peak hours. Test your connection to Shiro Games servers before upgrading hardware.
        </p>
      </BlufBox>

      <section id="specs">
        <StatusPanel
          items={specItems.map(([label, minValue, recValue]) => ({
            label,
            value: `Min: ${minValue} | Rec: ${recValue}`,
            status: "verified" as const,
          }))}
        />
      </section>

      <section id="will-it-run" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Will It Run? Quick Reference</h2>
        <ArticleImage
          src={spacecraftImages.shipBuilding}
          alt="SpaceCraft system requirements and PC performance"
          caption="SpaceCraft's system requirements are moderate for a 2026 MMO, but the always-online requirement and CPU-heavy automation systems mean your CPU and internet connection matter more than raw GPU power."
        />
        <div className="overflow-x-auto rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-mist">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Question</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Details</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Verdict</th>
              </tr>
            </thead>
            <tbody>
              {quickRefRows.map(([question, details, verdict]) => (
                <tr key={question} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{question}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{details}</td>
                  <td className="px-4 py-3 font-semibold text-foreground">{verdict}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="optimization" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Performance Optimization Tips</h2>
        <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
          <li><strong>Lower shadow quality first.</strong> Shadows are the single biggest GPU performance drain in SpaceCraft. Dropping from Ultra to Medium shadows can increase FPS by 15-20% with minimal visual impact.</li>
          <li><strong>Reduce draw distance.</strong> SpaceCraft renders the entire visible sector. Lowering draw distance reduces the number of objects rendered, especially in busy sectors with many player structures.</li>
          <li><strong>Install on SSD.</strong> Not technically required, but the difference in load times and sector transition smoothness between HDD and SSD is dramatic. The 25GB install size makes this an easy upgrade.</li>
          <li><strong>Update GPU drivers.</strong> Shiro Games optimizes for the latest Nvidia and AMD drivers. Running outdated drivers can cause performance issues and crashes.</li>
          <li><strong>Close background applications.</strong> SpaceCraft is CPU-heavy due to automation calculations. Browsers, streaming apps, and other CPU-intensive programs will reduce performance.</li>
          <li><strong>Laptop users: force dedicated GPU.</strong> Many laptops default to integrated graphics for games. In Windows Graphics Settings, add SpaceCraft and set it to "High Performance" (your dedicated Nvidia/AMD GPU).</li>
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          If you are experiencing crashes or connection issues, see our{" "}
          <Link href="/games/spacecraft/crashing-fix" className="text-foreground underline">crashing and performance fix guide</Link>.
          For Steam Deck compatibility, see our{" "}
          <Link href="/games/spacecraft/steam-deck" className="text-foreground underline">Steam Deck guide</Link>.
        </p>
      </section>
    </SpacecraftArticle>
  );
}
