import { CursemarkArticle } from "@/components/cursemark-article";
import { createCursemarkMetadata, cursemarkImages } from "@/lib/cursemark";
import { BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { ArticleImage } from "@/components/article-media";
import Link from "next/link";

const title = "Cursemark Steam Deck Guide: Compatibility, Settings & Performance";
const description =
  "Cursemark Steam Deck compatibility guide for the dark fantasy action roguelite. Verified status, Proton compatibility, performance settings, control mapping, battery life, and handheld tips.";
const canonical = "/games/cursemark/steam-deck";

const faqs = [
  {
    question: "Does Cursemark work on Steam Deck?",
    answer:
      "Yes, Cursemark works very well on Steam Deck. This dark fantasy action roguelite from CLYDE Games has full controller support built in, extremely low system requirements, and runs at a stable 60 FPS on Deck at default settings. The pixel-art visual style scales perfectly to the 800p screen. You can use either the native Linux build or the Windows version via Proton — both deliver identical performance.",
  },
  {
    question: "What is the official Steam Deck compatibility rating for Cursemark?",
    answer:
      "At launch, Cursemark was listed as Playable on Steam Deck, with the only caveat being that some text in the rune crafting interface may appear small on the 7-inch screen. Valve's review notes that all functionality is accessible using the default controller configuration, and the game launches and runs without any manual tweaking required. A stronger Deck rating may follow if the developer improves UI scaling in a future update.",
  },
  {
    question: "How many hours of battery life does Cursemark get on Steam Deck?",
    answer:
      "Cursemark is extremely power-efficient on Steam Deck. At 60 FPS with default settings and screen brightness at 50%, you can expect 4-5 hours of battery life on an LCD Deck and 5-6 hours on an OLED Deck. Locking the framerate to 30 FPS extends this to 6-7 hours. The low power draw makes Cursemark one of the best Steam Deck games for long trips or sessions away from a charger.",
  },
  {
    question: "Should I use the native Linux version or Proton?",
    answer:
      "Both work equally well. The native Linux build launches slightly faster and uses marginally less battery. Proton (the Windows version) receives updates simultaneously with the main Windows branch and has been tested to work flawlessly with no graphical or audio issues. If you use cloud saves and also play on a Windows desktop, use Proton for seamless cross-device save syncing. Otherwise, the native build is recommended for optimal battery life.",
  },
  {
    question: "Do the controls work well on Steam Deck?",
    answer:
      "Cursemark has full controller support and plays excellently on Steam Deck. The default control mappings are sensible: left stick for movement, right stick for aiming/dodging direction, face buttons for attacks and abilities, and triggers for dodge and interact. The trackpads can be mapped as quick-access slots for rune swapping or item use. Consider mapping the back grip buttons to dodge and ultimate for easier access during intense boss fights.",
  },
];

const settingsRows = [
  {
    setting: "Resolution",
    recommendation: "1280x800 (native Steam Deck resolution).",
    notes: "Cursemark's pixel art scales perfectly to 800p. No need to lower resolution — the game is not GPU-limited.",
  },
  {
    setting: "Framerate Cap",
    recommendation: "60 FPS (smooth) or 40 FPS (balanced) or 30 FPS (maximum battery).",
    notes: "60 FPS is easily achievable. Lock to 40 FPS via the Steam Deck quick-access menu for a great balance of smoothness and battery life.",
  },
  {
    setting: "Particle Quality",
    recommendation: "Medium.",
    notes: "High particle quality can cause minor frame drops during Ice Trail + Chain Lightning combos. Medium eliminates this with barely any visual difference on the 800p screen.",
  },
  {
    setting: "Shadow Quality",
    recommendation: "Low or Off.",
    notes: "Pixel-art shadows have minimal visual impact but can save a small amount of GPU power. Turn off for maximum battery life with no meaningful visual downgrade.",
  },
  {
    setting: "V-Sync",
    recommendation: "Off (use Steam Deck's built-in frame limiter instead).",
    notes: "In-game V-Sync can introduce slight input lag. The Steam Deck's system-level frame limiter is more efficient and avoids this.",
  },
  {
    setting: "TDP Limit",
    recommendation: "4W-5W.",
    notes: "Cursemark uses very little power. Setting a 5W TDP limit in the quick-access menu caps power draw while maintaining 60 FPS, maximizing battery life.",
  },
  {
    setting: "GPU Clock",
    recommendation: "Leave at default (no manual underclock needed).",
    notes: "The game's GPU demand is so low that manual GPU clock settings provide negligible battery savings. Focus on TDP limit instead.",
  },
];

const controlMapping = [
  {
    button: "Left Stick",
    action: "Movement.",
    tip: "Standard movement. Click to toggle walk/run.",
  },
  {
    button: "Right Stick",
    action: "Aim / Dodge direction.",
    tip: "Controls dodge roll direction. Sensitivity can be adjusted in the controller settings menu.",
  },
  {
    button: "A Button",
    action: "Basic Attack.",
    tip: "Tap for light attack combo. Hold for charged attack.",
  },
  {
    button: "B Button",
    action: "Dodge Roll.",
    tip: "Most-used button. Consider mapping to a back grip for easier access during boss fights.",
  },
  {
    button: "X Button",
    action: "Spell Ability.",
    tip: "Activates your socketed spell rune. Cooldown indicator appears above the ability icon.",
  },
  {
    button: "Y Button",
    action: "Ultimate Ability.",
    tip: "Long cooldown. Map to a back grip button to avoid accidental activation.",
  },
  {
    button: "L1 / LB",
    action: "Ward Ability / Interact.",
    tip: "Context-sensitive: interacts with objects, NPCs, and wells when near them.",
  },
  {
    button: "R1 / RB",
    action: "Use consumable / Botyl.",
    tip: "Quick-heal. Keep your thumb near this during boss fights.",
  },
  {
    button: "L4 / R4 (Back Grips)",
    action: "Customizable — recommended: Dodge (B) and Ultimate (Y).",
    tip: "Back grip buttons are ideal for dodge and ultimate. Keeps your thumbs on the sticks during intense combat.",
  },
  {
    button: "Right Trackpad",
    action: "Mouse cursor (rune menu navigation).",
    tip: "Useful for precise rune socketing in the crafting menu. Set trackpad sensitivity to medium.",
  },
];

export const metadata = createCursemarkMetadata({
  title,
  description,
  canonical,
  image: cursemarkImages.siteHero,
});

export default function Page() {
  return (
    <CursemarkArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Steam Deck"
      heroImage={cursemarkImages.hero}
      heroAlt="Cursemark Steam Deck compatibility guide"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="Does Cursemark work on Steam Deck?"
        answer="Yes, Cursemark works well on Steam Deck. This dark fantasy action roguelite from CLYDE Games has full controller support built in, low system requirements, and runs at a stable 60 FPS on Deck at default settings. The pixel-art visual style scales perfectly to the 800p screen."
        intentRows={[
          {
            query: "Cursemark Steam Deck battery life",
            answer: "4-5 hours at 60 FPS, 6-7 hours at 30 FPS. Extremely power efficient thanks to pixel-art visuals.",
            href: "/games/cursemark/steam-deck",
            label: "Battery",
          },
          {
            query: "Cursemark Steam Deck settings",
            answer: "1280x800 native, 60 FPS, Medium particles, 4-5W TDP limit. Runs perfectly out of the box.",
            href: "/games/cursemark/steam-deck",
            label: "Settings",
          },
        ]}
        jumpLinks={[
          { href: "#settings", label: "Best settings" },
          { href: "#controls", label: "Control mapping" },
          { href: "#battery", label: "Battery tips" },
        ]}
      />

      <BlufBox>
        <p>
          <strong>Cursemark is an excellent Steam Deck game.</strong>{" "}
          Low power draw, full controller support, and save-anywhere functionality make it perfect for short handheld
          sessions. Expect 4-5 hours of battery life on a full charge. Cursemark, the dark fantasy action roguelite
          from CLYDE Games, is one of the best Deck-friendly roguelites available in Early Access.
        </p>
      </BlufBox>

      <section id="settings" className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Recommended Steam Deck Settings</h2>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          Cursemark runs well on Steam Deck with minimal tweaking, but these optimized settings maximize both
          performance and battery life:
        </p>
        <div className="overflow-x-auto rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-mist">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Setting</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Recommendation</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Notes</th>
              </tr>
            </thead>
            <tbody>
              {settingsRows.map((row) => (
                <tr key={row.setting} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-medium text-foreground">{row.setting}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.recommendation}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <ArticleImage
        src={cursemarkImages.hero}
        alt="Cursemark running on Steam Deck with default control layout"
        caption="Cursemark's pixel-art style and 2.5D perspective are perfectly suited to the Steam Deck's 800p screen. Text in the rune menu can be small — use the Steam Deck magnifier (Steam button + L1) if needed."
      />

      <section id="controls" className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Control Mapping Reference</h2>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          Default Steam Deck control mappings. All controls can be remapped via the Steam Input configuration menu.
          Back grip buttons are highly recommended for dodge and ultimate abilities.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-mist">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Button</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Default Action</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Recommended Tip</th>
              </tr>
            </thead>
            <tbody>
              {controlMapping.map((row) => (
                <tr key={row.button} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-medium text-foreground">{row.button}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.action}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.tip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="battery" className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Battery Life Optimization</h2>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          Cursemark is one of the most battery-friendly games you can play on Steam Deck. Here is what to expect
          and how to squeeze out even more playtime:
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-white p-5">
            <h3 className="mb-2 text-base font-bold text-foreground">LCD Deck (Original)</h3>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
              <li><strong>60 FPS, 50% brightness:</strong> 4-5 hours</li>
              <li><strong>40 FPS, 50% brightness:</strong> 5-6 hours</li>
              <li><strong>30 FPS, 40% brightness:</strong> 6-7 hours</li>
              <li><strong>Ultra-saving (30 FPS, 5W TDP, low particles):</strong> 7+ hours</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-white p-5">
            <h3 className="mb-2 text-base font-bold text-foreground">OLED Deck</h3>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
              <li><strong>60 FPS, 50% brightness:</strong> 5-6 hours</li>
              <li><strong>40 FPS, 50% brightness:</strong> 6-7 hours</li>
              <li><strong>30 FPS, 40% brightness:</strong> 7-8 hours</li>
              <li><strong>Ultra-saving (30 FPS, 5W TDP, low particles):</strong> 8+ hours</li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Set a <strong>4-5W TDP limit</strong> in the Steam Deck quick-access menu (Performance tab) for the best
          balance of stable 60 FPS and maximum battery life. At 5W, Cursemark consistently maintains 60 FPS during
          normal gameplay with only minor dips during the most particle-heavy boss encounters. For even longer
          sessions, lock to 40 FPS — the lower framerate is barely noticeable in a 2.5D pixel-art game and
          extends battery life by 1-2 hours.
        </p>
      </section>

      <section className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Steam Deck Specific Tips</h2>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
          <li>
            <strong className="text-foreground">Use offline mode for travel:</strong> Cursemark is fully playable
            offline. Enable Steam's Offline Mode before traveling to ensure uninterrupted play without an internet
            connection.
          </li>
          <li>
            <strong className="text-foreground">Cloud saves work seamlessly:</strong> Steam Cloud automatically syncs
            your save data between Deck and desktop. Start a run on your PC, continue it on Deck during your commute,
            and finish it back at your desk — progress transfers instantly.
          </li>
          <li>
            <strong className="text-foreground">Magnifier for small text:</strong> Hold the Steam button and press L1
            to activate the system magnifier. Useful for reading rune descriptions in the crafting menu, which can
            appear small on the 7-inch screen.
          </li>
          <li>
            <strong className="text-foreground">Gyro aiming optional:</strong> Cursemark does not require precise aiming,
            but some players enjoy gyro for rune menu navigation. Enable gyro as a mouse input on right trackpad touch
            in the Steam Input settings if you prefer motion-controlled cursor movement.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Related Guides</h2>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
          <li>
            <Link href="/games/cursemark/system-requirements" className="text-foreground underline hover:no-underline">
              Cursemark System Requirements
            </Link>{" "}
            — full PC specs, Linux support details, and known performance issues.
          </li>
          <li>
            <Link href="/games/cursemark/is-it-worth-it" className="text-foreground underline hover:no-underline">
              Is Cursemark Worth It?
            </Link>{" "}
            — buying advice that factors in Steam Deck compatibility and portable play value.
          </li>
          <li>
            <Link href="/games/cursemark/beginner-guide" className="text-foreground underline hover:no-underline">
              Cursemark Beginner Guide
            </Link>{" "}
            — first run tips optimized for controller and handheld play.
          </li>
        </ul>
      </section>
    </CursemarkArticle>
  );
}
