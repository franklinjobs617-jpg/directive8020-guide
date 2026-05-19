import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd, generateWebPageSchema } from "@/components/json-ld";
import { projectMistImages } from "@/lib/project-mist";

const title = "Game Guide Hubs - Enjoy4Game Guides";
const description =
  "Browse Enjoy4Game game guide hubs, including the existing Directive 8020 guide cluster and new Project: Mist Early Access coverage.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/games",
  },
};

const gameCards = [
  {
    title: "Directive 8020",
    href: "/",
    label: "Current main hub",
    body: "Existing walkthroughs, endings, choices, trophies, crash fixes, and route tools remain on their original flat URLs.",
    image: "/hero-banner.jpg",
  },
  {
    title: "Project: Mist",
    href: "/games/project-mist",
    label: "New Early Access cluster",
    body: "Release date, Steam facts, system requirements, co-op, beginner route, and Early Access troubleshooting.",
    image: projectMistImages.hero,
  },
];

export default function GamesPage() {
  return (
    <>
      <JsonLd
        data={generateWebPageSchema({
          title,
          description,
          url: "/games",
          siteName: "Enjoy4Game Guides",
        })}
      />
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Breadcrumb items={[{ label: "Games", href: "/games" }]} />

        <section className="relative mb-12 overflow-hidden rounded-lg border border-border/50 bg-card/30">
          <div className="relative aspect-[21/9] min-h-[260px]">
            <Image
              src={projectMistImages.feature}
              alt="Enjoy4Game survival guide hub feature image"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1152px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/78 to-background/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-3xl p-6 sm:p-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                Public game index
              </p>
              <h1 className="text-3xl font-black leading-tight text-foreground sm:text-5xl">
                Game Guide Hubs
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                A shared entry point for game-specific guide clusters. Directive
                8020 keeps its current URLs; new games can start inside a clean
                `/games/[game]` structure.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="mb-6 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            <figure className="overflow-hidden rounded-lg border border-border/50 bg-card/30">
              <div className="relative aspect-video">
                <Image
                  src={projectMistImages.screenshot4}
                  alt="Project: Mist island and facility image for game guide directory"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 460px"
                />
              </div>
              <figcaption className="px-4 py-3 text-xs leading-relaxed text-muted-foreground">
                New game clusters use directory paths, while existing Directive
                8020 URLs remain untouched.
              </figcaption>
            </figure>
            <div>
              <h2 className="mb-3 text-xl font-bold text-foreground">
                Current Hubs
              </h2>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                This page prevents new games from becoming isolated while
                keeping the current Directive 8020 traffic pattern stable. It
                gives Google and users one broad collection page without forcing
                a migration of pages that already have clicks.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {gameCards.map((game) => (
                  <Link
                    key={game.href}
                    href={game.href}
                    className="group overflow-hidden rounded-lg border border-border/50 bg-card/30 transition-colors hover:border-emerald-400/40"
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={game.image}
                        alt={`${game.title} guide hub`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/25 to-transparent" />
                    </div>
                    <div className="p-5">
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                        {game.label}
                      </p>
                      <h3 className="text-base font-bold text-foreground group-hover:text-emerald-300">
                        {game.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {game.body}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[1fr_360px]">
          <div className="prose-game">
            <h2>How New Game Clusters Work</h2>
            <p>
              New games should start with a game hub, then child guide pages
              under that game. Project: Mist uses this model immediately, so its
              release-date, specs, multiplayer, beginner, and crash-fix pages
              reinforce one cluster instead of scattering across unrelated
              paths.
            </p>
            <ul>
              <li>Public index: `/games`</li>
              <li>Game hub: `/games/project-mist`</li>
              <li>Guide pages: `/games/project-mist/[guide]`</li>
              <li>Legacy Directive 8020 pages: unchanged flat URLs</li>
            </ul>
          </div>
          <figure className="overflow-hidden rounded-lg border border-border/50 bg-card/30">
            <div className="relative aspect-[4/3]">
              <Image
                src={projectMistImages.facilities}
                alt="Project: Mist facility image for guide cluster structure"
                fill
                className="object-cover"
                sizes="360px"
              />
            </div>
            <figcaption className="px-4 py-3 text-xs leading-relaxed text-muted-foreground">
              Each game cluster links internally through its own hub, while the
              `/games` page provides a public bridge between clusters.
            </figcaption>
          </figure>
        </section>
      </div>
    </>
  );
}
