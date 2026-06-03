import { ActionTable, BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { FatekeeperArticle } from "@/components/fatekeeper-article";
import {
  createFatekeeperMetadata,
  fatekeeperCrashRows,
  fatekeeperImages,
} from "@/lib/fatekeeper";

const title = "Fatekeeper Crashing, Black Screen & Performance Fix Guide";
const description =
  "Fatekeeper crashing on startup? Black screen, low FPS, stutter, or UE5 errors? Complete PC troubleshooting guide with driver checks, settings fixes, and Early Access workarounds.";
const canonical = "/games/fatekeeper/crashing-fix";

export const metadata = createFatekeeperMetadata({
  title,
  description,
  canonical,
  image: fatekeeperImages.hero,
});

const faqs = [
  {
    question: "Why does Fatekeeper crash on startup?",
    answer:
      "The most common causes are outdated GPU drivers, conflicting overlay apps (Discord, RivaTuner, GeForce Experience), or missing DirectX 12 support. Update drivers, disable overlays, and verify Steam file integrity first.",
  },
  {
    question: "How do I fix the black screen in Fatekeeper?",
    answer:
      "Try adding -dx11 to Steam launch options as a fallback if DX12 causes a black screen. Also check that your GPU meets the minimum requirement (RTX 3070 or RX 6800 XT).",
  },
  {
    question: "Why is my FPS so low in Fatekeeper?",
    answer:
      "Fatekeeper runs on Unreal Engine 5 and has high hardware requirements. Lower shadows and post-processing first, set Effects to Medium, and cap FPS to 60 in your GPU driver settings.",
  },
  {
    question: "How do I stop Fatekeeper from stuttering?",
    answer:
      "Enable V-Sync in-game, cap FPS to 60 in driver settings, close background apps, and make sure the game is installed on an SSD. UE5 games are sensitive to shader compilation stutter on first launch.",
  },
  {
    question: "Controller not working in Fatekeeper?",
    answer:
      "Disable Steam Input for Fatekeeper: Steam Library → right-click Fatekeeper → Properties → Controller → Disable Steam Input. Some controllers work better with native support than Steam's input wrapper.",
  },
];

const searchIntentRows = [
  {
    query: "Fatekeeper crashing fix",
    answer: "Update GPU drivers, verify Steam files, disable overlays, and try -dx11 launch option.",
    href: "#startup-crash",
    label: "Crash fix",
  },
  {
    query: "Fatekeeper black screen",
    answer: "Add -dx11 to Steam launch options. Lower resolution in config before launching.",
    href: "#black-screen",
    label: "Black screen",
  },
  {
    query: "Fatekeeper low FPS fix",
    answer: "Lower shadows and post-processing. Cap FPS to 60. Ensure installation is on an SSD.",
    href: "#low-fps",
    label: "FPS",
  },
  {
    query: "Fatekeeper controller not working",
    answer: "Disable Steam Input in game properties. Use native controller support instead.",
    href: "#controller",
    label: "Controller",
  },
  {
    query: "Fatekeeper system requirements",
    answer: "Minimum: RTX 3070 / RX 6800 XT, 16 GB RAM, 20 GB SSD. Recommended: 32 GB RAM.",
    href: "/games/fatekeeper/release-date",
    label: "Specs",
  },
];

const jumpLinks = [
  { href: "#startup-crash", label: "Crash fix" },
  { href: "#black-screen", label: "Black screen" },
  { href: "#low-fps", label: "Low FPS" },
  { href: "#controller", label: "Controller" },
  { href: "#save-backup", label: "Save backup" },
  { href: "/games/fatekeeper/release-date", label: "Specs" },
  { href: "/games/fatekeeper/length", label: "Save file" },
];

export default function FatekeeperCrashingPage() {
  return (
    <FatekeeperArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Crashing & Performance Fix"
      heroImage={fatekeeperImages.hero}
      heroAlt="Fatekeeper performance troubleshooting and crash fix guide"
      faqs={faqs}
    >
      <BlufBox title="BLUF">
        Fatekeeper runs on <strong>Unreal Engine 5</strong> and has high PC
        requirements (RTX 3070 / RX 6800 XT minimum). Most launch-window issues are
        caused by <strong>outdated GPU drivers</strong>,{" "}
        <strong>overlay conflicts</strong> (Discord, RivaTuner, GeForce Experience),
        or <strong>DX12 instability</strong>. The fastest fix for startup crashes:
        update drivers → verify Steam files → disable overlays → add{" "}
        <strong>-dx11</strong> to launch options as a fallback. Always install on an
        SSD. Back up your save folder before applying major patches.
      </BlufBox>

      <SearchAnswerPanel
        title="Fatekeeper Crash & Performance Fixes"
        answer="Update GPU drivers, verify game files in Steam, disable overlay apps, and try -dx11 launch option for DX12 crashes. Lower shadows and effects for FPS. Cap framerate to 60."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <section id="quick-fixes">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Quick First Steps</h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          Before diving into specific fixes, run through these three steps. They
          resolve the majority of Early Access launch problems.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              step: "1. Update GPU Drivers",
              desc: "Download the latest driver from NVIDIA (Game Ready) or AMD (Adrenalin). Clean install if you haven't updated in a while.",
            },
            {
              step: "2. Verify Game Files",
              desc: "Steam Library → right-click Fatekeeper → Properties → Installed Files → Verify integrity of game files.",
            },
            {
              step: "3. Disable Overlays",
              desc: "Turn off Discord overlay, RivaTuner/Afterburner, GeForce Experience overlay, and Windows Game Bar before launching.",
            },
          ].map((item) => (
            <div key={item.step} className="rounded-lg border border-d8020/30 bg-d8020/5 p-5">
              <p className="text-sm font-bold text-d8020">{item.step}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="all-fixes" className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">All Known Fixes</h2>
        <ActionTable rows={fatekeeperCrashRows} />
      </section>

      <section id="startup-crash" className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Startup Crash Details</h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          If Fatekeeper crashes immediately after launching, the root cause is
          usually one of these:
        </p>
        <ol className="list-decimal space-y-3 pl-5 text-sm leading-relaxed text-muted-foreground">
          <li>
            <strong>GPU driver too old.</strong> UE5 games require recent driver
            versions. Check that you're on the latest Game Ready (NVIDIA) or
            Adrenalin (AMD) driver.
          </li>
          <li>
            <strong>Overlay conflict.</strong> Discord, RivaTuner, GeForce
            Experience, and Windows Game Bar can all interfere with UE5's rendering
            pipeline. Disable them one by one to identify the culprit.
          </li>
          <li>
            <strong>Missing Visual C++ redistributables.</strong> Download and
            install the latest Visual C++ Redistributable from Microsoft's official
            site.
          </li>
          <li>
            <strong>Corrupted shader cache.</strong> Clear your GPU shader cache:
            NVIDIA Control Panel → Manage 3D Settings → Shader Cache Size → Disabled
            → Apply → re-enable → Apply. Or use Disk Cleanup on Windows and check
            "DirectX Shader Cache."
          </li>
        </ol>
      </section>

      <section id="black-screen" className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Black Screen Fix</h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          A black screen on launch usually indicates a DirectX 12 compatibility
          issue. The most reliable workaround:
        </p>
        <div className="overflow-hidden rounded-lg border border-border/50 bg-card/30">
          <div className="border-b border-border/50 bg-card/50 px-5 py-3">
            <p className="text-sm font-semibold text-foreground">Steam Launch Options</p>
          </div>
          <div className="p-5">
            <code className="text-sm text-d8020">-dx11</code>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Right-click Fatekeeper in Steam Library → Properties → General → set
              Launch Options to <strong>-dx11</strong>. This forces the game to use
              DirectX 11 instead of DirectX 12, which resolves black screen issues
              on some GPU configurations.
            </p>
          </div>
        </div>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Also try: lower your desktop resolution to 1920×1080 before launching,
          disable HDR in Windows display settings, and run the game in windowed mode
          by adding <strong>-windowed</strong> to launch options.
        </p>
      </section>

      <section id="low-fps" className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Low FPS & Performance Optimization</h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          Fatekeeper is a UE5 title with demanding requirements. Even with an RTX
          3070, you may need to adjust settings for stable performance.
        </p>
        <div className="space-y-3">
          {[
            { setting: "Shadow Quality", recommendation: "Medium or Low", impact: "High — shadows are the biggest GPU cost in UE5" },
            { setting: "Post-Processing", recommendation: "Medium", impact: "Medium — affects motion blur, bloom, and ambient occlusion" },
            { setting: "Effects Quality", recommendation: "Medium", impact: "High — particle effects during combat hit FPS hard" },
            { setting: "Texture Quality", recommendation: "High (if 8GB+ VRAM)", impact: "Low performance impact, high visual impact" },
            { setting: "Resolution", recommendation: "1920×1080", impact: "Highest — do not run at 1440p or 4K without an RTX 4080+" },
            { setting: "FPS Cap", recommendation: "60 FPS in driver settings", impact: "Prevents spike-induced stutter" },
            { setting: "V-Sync", recommendation: "On (in-game)", impact: "Eliminates screen tearing; enable in-game not in driver" },
            { setting: "DLSS / FSR", recommendation: "Check in-game — if available, set to Quality", impact: "Can boost FPS 20-40% on supported GPUs" },
          ].map((item) => (
            <div key={item.setting} className="flex flex-wrap items-center gap-4 rounded-md border border-border/40 bg-background/30 p-4">
              <div className="min-w-[140px]">
                <p className="text-sm font-semibold text-foreground">{item.setting}</p>
              </div>
              <div className="flex-1">
                <p className="text-sm text-d8020 font-medium">→ {item.recommendation}</p>
                <p className="text-xs text-muted-foreground">{item.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="controller" className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Controller Problems</h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          Fatekeeper is a first-person melee game — controller feel matters. If your
          controller isn't detected or behaves oddly:
        </p>
        <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
          <li><strong>Disable Steam Input:</strong> Steam Library → right-click Fatekeeper → Properties → Controller → Override for Fatekeeper → Disable Steam Input.</li>
          <li><strong>Use a wired connection.</strong> Bluetooth latency can make melee timing feel off.</li>
          <li><strong>Xbox controllers</strong> have the best native support. PlayStation controllers may need DS4Windows as a bridge.</li>
          <li>If using a PlayStation controller with DS4Windows, enable "Hide DS4 Controller" in DS4Windows settings to prevent double-input.</li>
        </ol>
      </section>

      <section id="save-backup" className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Preventative: Back Up Your Saves</h2>
        <p className="leading-relaxed text-muted-foreground">
          During Early Access, major patches can occasionally break save
          compatibility. Back up your save folder regularly:
        </p>
        <div className="mt-3 rounded-lg border border-yellow-400/30 bg-yellow-400/5 p-4">
          <p className="text-sm leading-relaxed text-yellow-300">
            <strong>Save location:</strong>{" "}
            <code>%USERPROFILE%\AppData\Local\Fatekeeper\Saved\SaveGames</code>
            <br />
            Copy the entire SaveGames folder to a backup location before applying
            any major patch or verifying game files. This is the single most
            important precaution during Early Access.
          </p>
        </div>
      </section>
    </FatekeeperArticle>
  );
}
