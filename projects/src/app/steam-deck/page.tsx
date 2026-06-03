import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd, generateWebPageSchema } from "@/components/json-ld";

const title = "Steam Deck Game Guides - Compatibility, Settings & Performance";
const description =
  "Steam Deck guides for the latest PC games. Check compatibility, best settings, controller support, performance tips, and whether each game runs well on Steam Deck before you buy.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  keywords: [
    "Steam Deck game guides",
    "Steam Deck compatibility",
    "Steam Deck settings",
    "Steam Deck performance",
    "Steam Deck controller support",
    "handheld gaming guides",
    "best Steam Deck games 2026",
  ],
  alternates: {
    canonical: "/steam-deck",
  },
  openGraph: {
    title,
    description,
    url: "/steam-deck",
    type: "website",
  },
};

const steamDeckGames = [
  {
    title: "Fatekeeper",
    href: "/games/fatekeeper/steam-deck-controller",
    status: "Needs Testing",
    statusColor: "text-yellow-300 border-yellow-300/30 bg-yellow-300/10",
    body: "Steam Deck status, controller comfort, UI readability, performance checks, and refund-window testing advice for Fatekeeper.",
    image: "/games/fatekeeper/hero.webp",
  },
  {
    title: "Starminer",
    href: "/games/starminer/system-requirements",
    status: "Unknown (Early Access)",
    statusColor: "text-yellow-300 border-yellow-300/30 bg-yellow-300/10",
    body: "Early Access space mining sim — Steam Deck status not yet confirmed. Check PC specs and handheld expectations before buying.",
    image: "/games/starminer/hero.webp",
  },
  {
    title: "Paralives",
    href: "/games/paralives/steam-deck",
    status: "Caution Advised",
    statusColor: "text-red-300 border-red-300/30 bg-red-300/10",
    body: "Steam Deck compatibility cautions, control checks, graphics settings, cloud saves, and handheld buying advice for the life sim.",
    image: "/games/paralives/hero.jpg",
  },
  {
    title: "Directive 8020",
    href: "/directive-8020-steam-deck",
    status: "Unverified",
    statusColor: "text-yellow-300 border-yellow-300/30 bg-yellow-300/10",
    body: "Steam Deck and low-end PC guide. Start with low settings, 30 FPS cap, and treat Deck support as unverified until Steam rating appears.",
    image: "/hero-banner.jpg",
  },
  {
    title: "Luna Abyss",
    href: "/games/luna-abyss/steam-deck-settings",
    status: "Playable (30 FPS)",
    statusColor: "text-green-300 border-green-300/30 bg-green-300/10",
    body: "Steam Deck setup for 30 FPS target, control checks, battery expectations, and reported handheld performance notes.",
    image: "/games/luna-abyss/hero.jpg",
  },
  {
    title: "Warhammer 40,000: Mechanicus II",
    href: "/games/mechanicus-ii/steam-deck-performance",
    status: "Unsupported",
    statusColor: "text-red-300 border-red-300/30 bg-red-300/10",
    body: "Steam Deck unsupported status, PC performance checks, controller cautions, UI readability, and buyer advice for handheld players.",
    image: "/games/mechanicus-ii/hero.webp",
  },
  {
    title: "Romestead",
    href: "/games/romestead/steam-deck-controller",
    status: "Needs Testing",
    statusColor: "text-yellow-300 border-yellow-300/30 bg-yellow-300/10",
    body: "Steam Deck status, controller checks, handheld setup, UI readability, co-op comfort, and launch-window cautions.",
    image: "/games/romestead/hero.webp",
  },
  {
    title: "Mina the Hollower",
    href: "/games/mina-the-hollower/steam-deck",
    status: "Likely Good Fit",
    statusColor: "text-green-300 border-green-300/30 bg-green-300/10",
    body: "Steam Deck Verified context, controls, cloud saves, display expectations, and pre-launch checks for the pixel-art action-adventure.",
    image: "/games/mina-the-hollower/hero.jpg",
  },
  {
    title: "ZERO PARADES",
    href: "/games/zero-parades/steam-deck",
    status: "Verified",
    statusColor: "text-green-300 border-green-300/30 bg-green-300/10",
    body: "Steam Deck Verified context, controller support, text readability, saves, and handheld checks for the espionage RPG.",
    image: "/games/zero-parades/hero.jpg",
  },
  {
    title: "007 First Light",
    href: "/games/007-first-light/review-embargo",
    status: "Caution Advised",
    statusColor: "text-red-300 border-red-300/30 bg-red-300/10",
    body: "Steam Deck caution noted in reviews. Denuvo, PC specs, and performance concerns for handheld players.",
    image: "/games/007-first-light/hero.webp",
  },
  {
    title: "JUMP KING QUEST",
    href: "/games/jump-king-quest/multiplayer-controller",
    status: "Likely Good Fit",
    statusColor: "text-green-300 border-green-300/30 bg-green-300/10",
    body: "Controller support confirmed. Lightweight pixel-art platformer should run well on Steam Deck — verify after 1.0 launch.",
    image: "/games/jump-king-quest/hero.webp",
  },
  {
    title: "Project: Mist",
    href: "/games/project-mist/system-requirements",
    status: "Unknown",
    statusColor: "text-yellow-300 border-yellow-300/30 bg-yellow-300/10",
    body: "Open-world survival horror in Early Access. No Steam Deck data yet — check system requirements and controller support status.",
    image: "/games/project-mist/hero.webp",
  },
];

export default function SteamDeckPage() {
  return (
    <>
      <JsonLd
        data={generateWebPageSchema({
          title,
          description,
          url: "/steam-deck",
          siteName: "Enjoy4Game Guides",
        })}
      />
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Breadcrumb items={[{ label: "Steam Deck", href: "/steam-deck" }]} />

        <section className="mb-10">
          <h1 className="text-3xl font-black leading-tight text-foreground sm:text-4xl">
            Steam Deck Game Guides
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Before you buy a new PC game for your Steam Deck, check our
            compatibility notes, best settings, controller support status, and
            handheld performance tips. Updated as games launch and patches land.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-2 text-lg font-bold text-foreground">
            How to read the status tags
          </h2>
          <div className="flex flex-wrap gap-3 text-xs">
            <span className="rounded border border-green-300/30 bg-green-300/10 px-2.5 py-1 font-semibold text-green-300">
              Verified / Likely Good Fit
            </span>
            <span className="rounded border border-yellow-300/30 bg-yellow-300/10 px-2.5 py-1 font-semibold text-yellow-300">
              Needs Testing / Unknown
            </span>
            <span className="rounded border border-red-300/30 bg-red-300/10 px-2.5 py-1 font-semibold text-red-300">
              Unsupported / Caution Advised
            </span>
          </div>
        </section>

        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steamDeckGames.map((game) => (
            <Link
              key={game.href}
              href={game.href}
              className="group overflow-hidden rounded-lg border border-border/50 bg-card/30 transition-colors hover:border-emerald-400/40"
            >
              <div className="relative aspect-video">
                <Image
                  src={game.image}
                  alt={`${game.title} Steam Deck guide`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <span
                  className={`absolute right-3 top-3 rounded border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${game.statusColor}`}
                >
                  {game.status}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-foreground group-hover:text-emerald-300">
                  {game.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {game.body}
                </p>
              </div>
            </Link>
          ))}
        </section>

        <section className="mt-12 rounded-lg border border-border/50 bg-card/30 p-6">
          <h2 className="mb-4 text-lg font-bold text-foreground">
            What We Check for Each Game
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Verified Status",
                body: "Whether Valve has officially rated the game for Steam Deck.",
              },
              {
                title: "Performance",
                body: "Target FPS, recommended settings, and whether the game holds a stable framerate.",
              },
              {
                title: "Controller Support",
                body: "Whether the game works with Deck controls natively or needs community layouts.",
              },
              {
                title: "UI Readability",
                body: "Whether text, HUD elements, and menus are legible on the 7-inch screen.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-sm font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
