import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd, generateWebPageSchema } from "@/components/json-ld";
import { projectMistImages } from "@/lib/project-mist";
import { thickAsThievesImages } from "@/lib/thick-as-thieves";
import { minaImages } from "@/lib/mina-the-hollower";
import { zeroParadesImages } from "@/lib/zero-parades";
import { mechanicusIIImages } from "@/lib/mechanicus-ii";
import { romesteadImages } from "@/lib/romestead";
import { firstLightImages } from "@/lib/007-first-light";
import { jumpKingQuestImages } from "@/lib/jump-king-quest";
import { paralivesImages } from "@/lib/paralives";
import { starminerImages } from "@/lib/starminer";
import { lunaAbyssImages } from "@/lib/luna-abyss";
import { fatekeeperImages } from "@/lib/fatekeeper";

const title = "Game Guide Hubs - Enjoy4Game Guides";
const description =
  "Browse Enjoy4Game guide hubs for horror, survival, stealth, tactics, life simulation, fantasy RPGs, space mining sandboxes, punishment platforming, James Bond action-adventure, espionage RPG, gothic action-adventure, sci-fi FPS, Roman survival town building, and story-driven games, including Luna Abyss, Fatekeeper, Starminer, Paralives, JUMP KING QUEST, 007 First Light, Directive 8020, Project: Mist, Romestead, Warhammer 40,000: Mechanicus II, ZERO PARADES, Thick As Thieves, and Mina the Hollower.";

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
    "Romestead guide",
    "Warhammer 40,000 Mechanicus II guide",
    "JUMP KING QUEST guide",
    "007 First Light guide",
    "Thick As Thieves guide",
    "Mina the Hollower guide",
    "Paralives guide",
    "Starminer guide",
    "Luna Abyss guide",
    "Fatekeeper guide",
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
    title: "Luna Abyss",
    href: "/games/luna-abyss",
    label: "Sci-fi FPS",
    body: "Post-launch hub for Game Pass, Steam Deck settings, system requirements, achievements, walkthrough, ending explained, crash fixes, and buying advice.",
    image: lunaAbyssImages.hero,
  },
  {
    title: "Fatekeeper",
    href: "/games/fatekeeper",
    label: "First-person fantasy RPG",
    body: "Steam Early Access guide hub for release timing, first 30 minutes, safe builds, weapons, spells, relics, bosses, Steam Deck checks, and buyer advice.",
    image: fatekeeperImages.siteHero,
  },
  {
    title: "Starminer",
    href: "/games/starminer",
    label: "Space mining sandbox",
    body: "Early Access release checks, Campaign, Sandbox, Survival, beginner route, ship building, mining logistics, heat, aliens, blueprints, PC specs, and buying advice.",
    image: starminerImages.hero,
  },
  {
    title: "Paralives",
    href: "/games/paralives",
    label: "Life simulation",
    body: "Early Access status, Paramaker character creation, grid-less build mode, Mac support, Steam Deck cautions, mods, CC, pets, babies, and Sims 4 or inZOI comparisons.",
    image: paralivesImages.hero,
  },
  {
    title: "Directive 8020",
    href: "/",
    label: "Story horror",
    body: "Walkthroughs, endings, choices, trophies, survival routes, collectibles, cast notes, and PC troubleshooting.",
    image: "/hero-banner.jpg",
  },
  {
    title: "007 First Light",
    href: "/games/007-first-light",
    label: "James Bond action-adventure",
    body: "Reviews, review embargo status, Denuvo, Steam Deck caution, release time, preload checks, PS5 status, PC specs, and spoiler-light beginner tips.",
    image: firstLightImages.hero,
  },
  {
    title: "JUMP KING QUEST",
    href: "/games/jump-king-quest",
    label: "Punishment platformer",
    body: "1.0 Phantom Update coverage: release status, Steam PC facts, beginner tips, online co-op, online PvP, controller notes, reviews, and buying advice.",
    image: jumpKingQuestImages.hero,
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
    title: "Romestead",
    href: "/games/romestead",
    label: "Roman survival town builder",
    body: "Steam Early Access launch timing, 1-8 player co-op, beginner settlement priorities, PC specs, Steam Deck cautions, and buying advice.",
    image: romesteadImages.hero,
  },
  {
    title: "Warhammer 40,000: Mechanicus II",
    href: "/games/mechanicus-ii",
    label: "Turn-based tactics",
    body: "Launch guide hub for release status, PC/PS5/Xbox platforms, Steam Deck status, Adeptus Mechanicus, Necrons, beginner tactics, and buying advice.",
    image: mechanicusIIImages.hero,
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
                facts, life-sim features, co-op, survival or stealth basics,
                saves, contracts, PC requirements, platform checks, and buying
                expectations.
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
              If you are playing Luna Abyss, start with Game Pass and platform
              checks, then move to Steam Deck settings, achievements,
              walkthrough, ending explained, or crash fixes. If you are playing
              Directive 8020, start with the walkthrough,
              endings, choices, or trophy guides. If you are trying Project:
              Mist, start with the Early Access hub. If you are playing JUMP
              KING QUEST, start with the 1.0 release hub, then check beginner
              tips, online co-op, online PvP, controller notes, or buying
              advice depending on your first question. If you are playing
              Paralives, start with Early Access, Paramaker, build mode, Mac,
              Steam Deck, mods, or comparison pages depending on whether you
              are buying now or planning a first household. If you are playing
              Mechanicus II, start with release status, factions, beginner
              tactics, system requirements, Steam Deck performance, or buying
              advice. If you are trying ZERO PARADES, start with release status,
              beginner skills, system
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
