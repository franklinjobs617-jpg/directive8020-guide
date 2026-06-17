import Link from "next/link";
import { ArticleImage } from "@/components/article-media";
import { ActionTable, BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { SpacecraftArticle } from "@/components/spacecraft-article";
import { createSpacecraftMetadata, spacecraftImages } from "@/lib/spacecraft";

const title = "SpaceCraft Crashing, Lag & Performance Fix: Early Access Troubleshooting";
const description =
  "SpaceCraft crash and performance troubleshooting guide for Early Access issues: startup crashes, server disconnection lag, FPS drops, driver updates, graphics settings, and connectivity fixes.";
const canonical = "/games/spacecraft/crashing-fix";

export const metadata = createSpacecraftMetadata({
  title,
  description,
  canonical,
  image: spacecraftImages.siteHero,
});

const faqs = [
  {
    question: "Why does SpaceCraft keep crashing?",
    answer:
      "The most common SpaceCraft crash fixes: update your GPU drivers, verify game files through Steam, lower graphics settings to minimum, disable background applications, and ensure your Windows is updated. Server-side disconnections are common during Early Access — check the official Discord for server status before troubleshooting locally.",
  },
  {
    question: "How do I fix SpaceCraft lag and high ping?",
    answer:
      "Server-side lag is the most common cause of performance issues in SpaceCraft. Check the official Discord or Steam Community Hub for server status. If the servers are stable, switch from Wi-Fi to a wired Ethernet connection, close bandwidth-heavy background apps, and ensure no other devices on your network are streaming or downloading large files.",
  },
  {
    question: "How do I backup my SpaceCraft save file?",
    answer:
      "SpaceCraft is an always-online MMO — your progress is stored on Shiro Games servers, not locally. There is no local save file to backup. Your account data is tied to your Steam account. If you lose progress, contact Shiro Games support through their official website or Discord.",
  },
  {
    question: "Should I reinstall SpaceCraft if it keeps crashing?",
    answer:
      "Reinstalling should be your last resort, not your first step. Most SpaceCraft crashes in Early Access are server-side or driver-related — reinstalling the game files will not fix either. Follow the troubleshooting table below before considering a reinstall.",
  },
];

const fixRows = [
  { step: "1", doThis: "Check SpaceCraft server status on the official Discord or Steam Community Hub.", why: "Most Early Access issues are server-side. If Shiro Games has posted about maintenance or outages, no local fix will help — you need to wait for server recovery." },
  { step: "2", doThis: "Update your GPU drivers to the latest version from Nvidia or AMD's website.", why: "Outdated drivers are the most common cause of startup crashes and graphical artifacts. Shiro Games optimizes for current driver versions." },
  { step: "3", doThis: "Verify game files through Steam: Library > SpaceCraft > Properties > Installed Files > Verify integrity.", why: "Corrupted or missing game files can cause crashes. Steam's verification tool automatically repairs any issues it finds." },
  { step: "4", doThis: "Lower all graphics settings to minimum, disable shadows, and reduce draw distance. Test if crashes stop.", why: "If crashes stop on low settings, your hardware is struggling with the game's demands. Gradually increase settings until you find the maximum stable configuration." },
  { step: "5", doThis: "Close all background applications: browsers, streaming apps, Discord overlay, recording software.", why: "SpaceCraft is CPU-intensive due to automation calculations. Background apps compete for CPU resources and can cause performance drops or crashes." },
  { step: "6", doThis: "Switch from Wi-Fi to a wired Ethernet connection if possible. If on Wi-Fi, move closer to your router.", why: "Packet loss on Wi-Fi causes disconnections that appear as crashes. A stable wired connection eliminates this variable." },
  { step: "7", doThis: "Disable Steam overlay, Discord overlay, and any FPS monitoring tools (MSI Afterburner, RivaTuner).", why: "Overlay injection is a common cause of game crashes in Early Access titles. Disable all overlays as a diagnostic step." },
  { step: "8", doThis: "Update Windows through Windows Update. Ensure you have the latest .NET Framework and Visual C++ Redistributables.", why: "Missing system dependencies cause mysterious crashes. A fully updated Windows installation eliminates dependency-related issues." },
];

const searchIntentRows = [
  {
    query: "SpaceCraft crash on startup",
    answer: "Update GPU drivers, verify game files, disable overlays, and update Windows. Most crashes are server-side — check Discord first.",
    href: "#fixes",
    label: "Startup",
  },
  {
    query: "SpaceCraft lag and disconnection",
    answer: "Check server status first. Switch to wired internet, close background apps, and disable bandwidth-heavy devices on your network.",
    href: "#fixes",
    label: "Lag",
  },
  {
    query: "SpaceCraft FPS drops",
    answer: "Lower shadows and draw distance, close background apps, ensure dedicated GPU is active (laptops), and update drivers.",
    href: "#fixes",
    label: "FPS",
  },
];

const jumpLinks = [
  { href: "#fixes", label: "Fix list" },
  { href: "#before-reinstall", label: "Before reinstall" },
  { href: "#save-backup", label: "Save backup" },
  { href: "/games/spacecraft/system-requirements", label: "Specs" },
  { href: "/games/spacecraft/steam-deck", label: "Steam Deck" },
  { href: "/games/spacecraft/release-date", label: "Server status" },
];

export default function SpacecraftCrashingFixPage() {
  return (
    <SpacecraftArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Crashing & Performance Fix"
      heroImage={spacecraftImages.siteHero}
      heroAlt="SpaceCraft crashing fix and troubleshooting guide"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="Why does SpaceCraft keep crashing?"
        answer="The most common SpaceCraft crash fixes: update your GPU drivers, verify game files through Steam, lower graphics settings to minimum, disable background applications, and ensure your Windows is updated. Server-side disconnections are common during Early Access — check the official Discord for server status before troubleshooting locally."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Server-Side First">
        <p>
          <strong>Most SpaceCraft crashes in Early Access are server-side, not your PC.</strong>{" "}
          Check Shiro Games' official Discord or Steam Community Hub for server status before spending hours on local troubleshooting.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2 id="fixes">Complete Troubleshooting Checklist</h2>
        <ArticleImage
          src={spacecraftImages.shipBuilding}
          alt="SpaceCraft crash troubleshooting and performance fix"
          caption="Work through these fixes in order. Most crashes are resolved by step 3. If you reach step 8 without resolution, the issue is likely server-side and requires patience, not further local troubleshooting."
        />
      </section>

      <ActionTable rows={fixRows} />

      <section id="before-reinstall" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Before You Reinstall</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Reinstalling SpaceCraft is rarely the solution and should be your absolute last resort. Before reinstalling, verify you have completed every step in the troubleshooting table above. The most common causes of persistent crashes are:
        </p>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground list-disc pl-5">
          <li><strong>Server-side issues</strong> that no local fix can resolve. Check Discord for announcements.</li>
          <li><strong>Outdated GPU drivers</strong> that a reinstall will not update. Update drivers separately.</li>
          <li><strong>Overlay conflicts</strong> that survive a reinstall because the overlay software is not part of the game. Disable overlays, do not reinstall to fix them.</li>
          <li><strong>Network instability</strong> that reinstalling game files cannot address. Test your connection independently.</li>
        </ul>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          If you have exhausted all troubleshooting steps and still experience crashes, file a bug report through the official SpaceCraft Discord with your system specifications (CPU, GPU, RAM, Windows version) and a description of when the crash occurs (startup, during mining, during FTL jump, etc.).
        </p>
      </section>

      <section id="save-backup" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Save File Backup Information</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          SpaceCraft is an always-online MMO. All player progress — ships, resources, credits, faction reputation, Corporation membership, and base structures — is stored on Shiro Games servers and linked to your Steam account. There is no local save file to backup, manage, or lose. If you experience lost progress, it is a server-side issue that Shiro Games support can investigate. Contact them through the official Discord or support website with your Steam ID and a description of what was lost.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          For system requirements and hardware compatibility, see our{" "}
          <Link href="/games/spacecraft/system-requirements" className="text-foreground underline">system requirements guide</Link>.
          For Steam Deck troubleshooting, see our{" "}
          <Link href="/games/spacecraft/steam-deck" className="text-foreground underline">Steam Deck guide</Link>.
        </p>
      </section>
    </SpacecraftArticle>
  );
}
