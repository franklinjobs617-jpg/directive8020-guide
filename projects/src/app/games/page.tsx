import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd, generateWebPageSchema } from "@/components/json-ld";
import { projectMistImages } from "@/lib/project-mist";

const title = "Game Guide Hubs - Enjoy4Game Guides";
const description =
  "Browse Enjoy4Game guide hubs for horror, survival, and story-driven games, including Directive 8020 and Project: Mist.";

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
    label: "Story horror",
    body: "Walkthroughs, endings, choices, trophies, survival routes, collectibles, cast notes, and PC troubleshooting.",
    image: "/hero-banner.jpg",
  },
  {
    title: "Project: Mist",
    href: "/games/project-mist",
    label: "Open-world survival",
    body: "Early Access facts, demo route notes, system requirements, co-op, Gravity Gun, train base, and first-day survival help.",
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
                Game guide directory
              </p>
              <h1 className="text-3xl font-black leading-tight text-foreground sm:text-5xl">
                Game Guide Hubs
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Pick a game and jump into practical guides: release facts,
                beginner routes, choices, endings, co-op setup, PC specs, and
                troubleshooting.
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
                Project: Mist coverage focuses on what new players need first:
                the demo route, survival basics, PC requirements, and co-op.
              </figcaption>
            </figure>
            <div>
              <h2 className="mb-3 text-xl font-bold text-foreground">
                Current Hubs
              </h2>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                Start with the game you are playing, then move to the guide that
                matches your next question. Each hub keeps the most useful
                articles close together so you do not have to search the site
                page by page.
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
            <h2>How to Use This Page</h2>
            <p>
              If you are playing Directive 8020, start with the walkthrough,
              endings, choices, or trophy guides. If you are trying Project:
              Mist, start with the Early Access hub, then check the beginner,
              system requirements, multiplayer, or crash-fix pages depending on
              what you need next.
            </p>
            <ul>
              <li>Use a game hub when you are not sure which guide comes first.</li>
              <li>Use beginner pages before reading route-heavy or spoiler-heavy content.</li>
              <li>Use system and crash-fix pages before blaming a save or reinstalling.</li>
              <li>Use co-op pages before starting a shared session with friends.</li>
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
              Guide hubs are built for fast decisions: what to play, what to
              check first, and what to avoid wasting time on.
            </figcaption>
          </figure>
        </section>
      </div>
    </>
  );
}
