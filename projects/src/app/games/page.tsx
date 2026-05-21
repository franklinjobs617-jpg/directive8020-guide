import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd, generateWebPageSchema } from "@/components/json-ld";
import { projectMistImages } from "@/lib/project-mist";
import { thickAsThievesImages } from "@/lib/thick-as-thieves";
import { minaImages } from "@/lib/mina-the-hollower";
import { zeroParadesImages } from "@/lib/zero-parades";

const title = "Game Guide Hubs - Enjoy4Game Guides";
const description =
  "Browse Enjoy4Game guide hubs for horror, survival, stealth, espionage RPG, gothic action-adventure, and story-driven games, including Directive 8020, Project: Mist, ZERO PARADES, Thick As Thieves, and Mina the Hollower.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  keywords: [
    "game guide hubs",
    "survival game guides",
    "horror game guides",
    "Directive 8020 guide",
    "Project Mist guide",
    "ZERO PARADES guide",
    "Thick As Thieves guide",
    "Mina the Hollower guide",
  ],
  authors: [{ name: "Enjoy4Game Guides" }],
  alternates: {
    canonical: "/games",
  },
  openGraph: {
    title,
    description,
    url: "/games",
    images: [projectMistImages.feature],
    type: "website",
    siteName: "Enjoy4Game Guides",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [projectMistImages.feature],
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
    body: "Early Access launch facts, co-op, lockpicking, train door key, demo saves, building, PC requirements, and crash fixes.",
    image: projectMistImages.hero,
  },
  {
    title: "ZERO PARADES: For Dead Spies",
    href: "/games/zero-parades",
    label: "Espionage RPG",
    body: "Launch-day guide hub for release status, PC/PS5 notes, beginner skills, Conditioning, Exertion, PC specs, Steam Deck, and buying advice.",
    image: zeroParadesImages.hero,
  },
  {
    title: "Thick As Thieves",
    href: "/games/thick-as-thieves",
    label: "Stealth heist",
    body: "Steam unlock facts, $4.99 launch value, solo and co-op, beginner stealth, contracts, PC specs, gear, roadmap, and console expectations.",
    image: thickAsThievesImages.hero,
  },
  {
    title: "Mina the Hollower",
    href: "/games/mina-the-hollower",
    label: "Gothic action-adventure",
    body: "Release timing, platforms, Steam Deck status, PC/Mac/Linux specs, spoiler-light beginner tips, and launch buying advice.",
    image: minaImages.hero,
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
                beginner routes, choices, endings, co-op setup, PC specs,
                Steam Deck checks, and troubleshooting.
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
                New game coverage focuses on what players need first: launch
                facts, co-op, survival or stealth basics, saves, contracts, PC
                requirements, and buying expectations.
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
              Mist, start with the Early Access hub. If you are trying ZERO
              PARADES, start with release status, beginner skills, system
              requirements, Steam Deck, or buying advice. If you are trying
              Thick As Thieves, start with the release and co-op pages, then check
              beginner stealth, contracts, system requirements, gear, or roadmap
              pages depending on what you need next. If you are waiting for
              Mina the Hollower, start with release timing, specs, Steam Deck,
              beginner tips, or buying advice.
            </p>
            <ul>
              <li>
                Use a game hub when you are not sure which guide comes first.
              </li>
              <li>
                Use beginner pages before reading route-heavy or spoiler-heavy
                content.
              </li>
              <li>
                Use system and crash-fix pages before blaming a save or
                reinstalling.
              </li>
              <li>
                Use co-op pages before starting a shared session with friends.
              </li>
            </ul>
          </div>
          <figure className="overflow-hidden rounded-lg border border-border/50 bg-card/30">
            <div className="relative aspect-[4/3]">
              <Image
                src={projectMistImages.facilities}
                alt="Project: Mist facility image for survival guide planning"
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
