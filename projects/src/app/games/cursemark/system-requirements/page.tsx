import { CursemarkArticle } from "@/components/cursemark-article";
import { createCursemarkMetadata, cursemarkImages, cursemarkSpecRows } from "@/lib/cursemark";
import { BlufBox, SearchAnswerPanel, StatusPanel } from "@/components/guide-blocks";
import { ArticleImage } from "@/components/article-media";
import Link from "next/link";

const title = "Cursemark System Requirements: Minimum, Recommended PC Specs & Performance";
const description =
  "Official Cursemark system requirements for the dark fantasy action roguelite. Minimum specs (1.7+ GHz, 512 MB RAM, Windows 10/11), recommended specs, Linux support, and performance notes.";
const canonical = "/games/cursemark/system-requirements";

const faqs = [
  {
    question: "What are the minimum system requirements for Cursemark?",
    answer:
      "Cursemark has extremely low minimum requirements: Windows 10/11 64-bit or Ubuntu 16.04+ Linux, a 1.7+ GHz processor, and just 512 MB of RAM. There is no discrete GPU requirement — integrated graphics from the last decade can run Cursemark. This dark fantasy action roguelite from CLYDE Games is designed to be accessible on almost any PC.",
  },
  {
    question: "Can I run Cursemark on a laptop with integrated graphics?",
    answer:
      "Almost certainly yes. Cursemark's pixel-art style and 2.5D perspective keep GPU demands extremely low. Any laptop with integrated graphics from the last 5 years (Intel UHD 620 or newer, AMD Radeon Vega 3 or newer) should run Cursemark at a playable 30+ FPS. The game does not require a discrete GPU at all.",
  },
  {
    question: "Does Cursemark support Linux natively?",
    answer:
      "Yes. Cursemark has native Linux support for Ubuntu 16.04 and newer distributions. The Linux build is maintained alongside the Windows build and receives the same updates. Steam Deck users can run either the native Linux version or the Windows version via Proton — both work well.",
  },
  {
    question: "Are there any known performance issues in Cursemark?",
    answer:
      "The only notable performance issue reported during Early Access is occasional frame drops when multiple Ice Trail runes create overlapping particle effects. This is most noticeable on integrated graphics and during boss fights where particle density spikes. Reducing particle quality in the settings menu resolves this. The developer CLYDE Games has acknowledged the issue and is working on particle optimization for a future patch.",
  },
  {
    question: "How much storage space does Cursemark need?",
    answer:
      "Cursemark requires approximately 500 MB of storage space. The pixel-art assets and compact scope (3 biomes in Early Access) keep the install size very small. Expect the install size to grow as more biomes and content are added throughout Early Access, but it is unlikely to ever exceed 1-2 GB given the art style.",
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
      label="System Requirements"
      heroImage={cursemarkImages.hero}
      heroAlt="Cursemark PC system requirements guide"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="Can my PC run Cursemark?"
        answer="Cursemark has very low system requirements: Windows 10/11 64-bit or Ubuntu 16.04+ Linux, a 1.7+ GHz processor, and just 512 MB of RAM. This dark fantasy roguelite from CLYDE Games is designed to run on almost any modern PC — even integrated graphics on laptops from the last 5 years should handle it at playable framerates."
        intentRows={[
          {
            query: "Cursemark minimum specs",
            answer: "1.7+ GHz CPU, 512 MB RAM, no discrete GPU required. Extremely low requirements for any modern PC.",
            href: "/games/cursemark/system-requirements",
            label: "Specs",
          },
          {
            query: "Cursemark Linux support",
            answer: "Native Linux support on Ubuntu 16.04+. Also runs on Steam Deck via native or Proton.",
            href: "/games/cursemark/system-requirements",
            label: "Linux",
          },
        ]}
        jumpLinks={[
          { href: "#specs", label: "Specs table" },
          { href: "#linux", label: "Linux support" },
          { href: "#performance", label: "Performance" },
        ]}
      />

      <BlufBox>
        <p>
          <strong>Cursemark's pixel-art style and 2.5D perspective make it extremely lightweight.</strong>{" "}
          If your PC was built in the last decade, it can almost certainly run Cursemark. The only performance
          complaints in Early Access are occasional frame drops with heavy particle effects (multiple Ice Trail
          runes active simultaneously). Cursemark, the dark fantasy action roguelite from CLYDE Games, is one
          of the most accessible PC games of 2026.
        </p>
      </BlufBox>

      <section id="specs">
        <StatusPanel
          items={[
            ...cursemarkSpecRows.map(([label, min, rec]) => ({
              label,
              value: `Minimum: ${min} | Recommended: ${rec}`,
              status: "verified" as const,
            })),
            { label: "Storage", value: "~500 MB available space.", status: "verified" as const },
            { label: "Graphics", value: "No discrete GPU required. Integrated graphics from last 5 years are sufficient.", status: "verified" as const },
            { label: "DirectX", value: "DirectX 11 (Windows). Vulkan via Proton (Linux/Steam Deck).", status: "verified" as const },
            { label: "Additional Notes", value: "Controller recommended but not required. Keyboard and mouse fully supported.", status: "verified" as const },
          ]}
        />
      </section>

      <section className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Official Specs Comparison</h2>
        <div className="overflow-x-auto rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-mist">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Component</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Minimum</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Recommended</th>
              </tr>
            </thead>
            <tbody>
              {cursemarkSpecRows.map((row, i) => (
                <tr key={i} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-medium text-foreground">{row[0]}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row[1]}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row[2]}</td>
                </tr>
              ))}
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium text-foreground">Storage</td>
                <td className="px-4 py-3 text-muted-foreground">~500 MB available space</td>
                <td className="px-4 py-3 text-muted-foreground">~500 MB available space (SSD recommended for faster loads)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-foreground">Graphics</td>
                <td className="px-4 py-3 text-muted-foreground">Integrated graphics, DirectX 11 capable</td>
                <td className="px-4 py-3 text-muted-foreground">Any discrete GPU from the last 10 years for stable 60 FPS</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          These are the official specifications listed on the Steam store page for Cursemark. The minimum specs are
          intentionally conservative — in practice, almost any PC manufactured after 2012 should run the game.
        </p>
      </section>

      <ArticleImage
        src={cursemarkImages.hero}
        alt="Cursemark running on a low-spec PC showing stable framerate"
        caption="Cursemark's pixel-art visual style means it runs smoothly even on decade-old hardware. If you can browse the web and watch YouTube, you can almost certainly play Cursemark."
      />

      <section id="linux" className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Linux Support Details</h2>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          Cursemark is one of the few Early Access roguelites to offer day-one native Linux support. The Linux build
          targets Ubuntu 16.04 LTS and newer, which covers most modern distributions (Debian, Fedora, Arch, and
          derivatives). The game uses Vulkan rendering on Linux via Proton, but a native OpenGL fallback is also
          available for older hardware.
        </p>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          <strong>Steam Deck:</strong> Cursemark works on Steam Deck out of the box. You can use either the native
          Linux version or the Windows version via Proton — both deliver stable 60 FPS performance. Full controller
          support is built in, and the pixel-art visuals scale perfectly to the 800p display. For detailed Steam Deck
          settings, see our{" "}
          <Link href="/games/cursemark/steam-deck" className="text-foreground underline hover:no-underline">
            Cursemark Steam Deck guide
          </Link>.
        </p>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          <strong>Known Linux issue:</strong> Some users on Wayland-based desktop environments have reported the game
          launching in a small window rather than fullscreen. The workaround is to add{" "}
          <code className="bg-mist px-1 py-0.5 rounded text-xs">--force-vulkan</code> as a Steam launch option,
          or switch to X11 for your Cursemark session.
        </p>
      </section>

      <section id="performance" className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Known Performance Issues and Fixes</h2>
        <div className="space-y-4">
          <div className="rounded-lg border border-border bg-white p-5">
            <h3 className="mb-2 text-base font-bold text-foreground">Particle Effect Frame Drops</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The most common performance complaint involves frame drops when multiple elemental particle effects
              overlap — particularly Ice Trail runes creating dense freezing trails while Chain Lightning arcs
              between enemies. This is most noticeable on integrated graphics. <strong>Fix:</strong> Go to Settings
              and lower Particle Quality from High to Medium or Low. The visual difference is minimal, but the
              framerate improvement is significant (often 10-15 FPS on integrated graphics).
            </p>
          </div>
          <div className="rounded-lg border border-border bg-white p-5">
            <h3 className="mb-2 text-base font-bold text-foreground">Borderless Window Stuttering</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Some users report micro-stuttering when running in borderless windowed mode, particularly on multi-monitor
              setups with different refresh rates. <strong>Fix:</strong> Switch to exclusive fullscreen mode in the
              display settings, or ensure all monitors are set to the same refresh rate. A future patch from CLYDE
              Games is expected to address this.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-white p-5">
            <h3 className="mb-2 text-base font-bold text-foreground">Linux Audio Crackling</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              A minority of Linux users on PulseAudio have reported audio crackling during combat-heavy scenes with
              many simultaneous sound effects. <strong>Fix:</strong> Switch to PipeWire (increasingly the default on
              modern distributions) or reduce the in-game SFX volume slider to 80%. This appears to be a Unity engine
              audio pipeline issue rather than a Cursemark-specific bug.
            </p>
          </div>
        </div>
      </section>

      <section className="my-8">
        <h2 className="mb-4 text-xl font-bold text-foreground">Related Guides</h2>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
          <li>
            <Link href="/games/cursemark/steam-deck" className="text-foreground underline hover:no-underline">
              Cursemark Steam Deck Guide
            </Link>{" "}
            — optimized settings, control mapping, battery life estimates, and handheld performance tips.
          </li>
          <li>
            <Link href="/games/cursemark/release-date" className="text-foreground underline hover:no-underline">
              Cursemark Release Date
            </Link>{" "}
            — platform availability details, price, and developer background.
          </li>
          <li>
            <Link href="/games/cursemark/is-it-worth-it" className="text-foreground underline hover:no-underline">
              Is Cursemark Worth It?
            </Link>{" "}
            — buying advice that factors in the game's lightweight hardware requirements.
          </li>
        </ul>
      </section>
    </CursemarkArticle>
  );
}
