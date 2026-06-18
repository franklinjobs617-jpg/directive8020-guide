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
import { gateGuardImages } from "@/lib/gate-guard-simulator";
import { enginefallImages } from "@/lib/enginefall";
import { voidlingBoundImages } from "@/lib/voidling-bound";
import { spacecraftImages } from "@/lib/spacecraft";
import { cursemarkImages } from "@/lib/cursemark";
import { sellLemons } from "@/lib/games";

const title = "Game Guide Hubs - Enjoy4Game Guides";
const description =
 "Browse Enjoy4Game guide hubs for horror, survival, stealth, tactics, life simulation, Roblox idle tycoon progression, fantasy RPGs, creature collectors, inspection sims, train-based crafting shooters, space mining sandboxes, punishment platforming, James Bond action-adventure, espionage RPG, gothic action-adventure, sci-fi FPS, Roman survival town building, and story-driven games, including Sell Lemons, Voidling Bound, Enginefall, Gate Guard Simulator, Luna Abyss, Fatekeeper, Starminer, Paralives, JUMP KING QUEST, 007 First Light, Directive 8020, Project: Mist, Romestead, Warhammer 40,000: Mechanicus II, ZERO PARADES, Thick As Thieves, and Mina the Hollower.";

export const metadata: Metadata = {
 title: {
 absolute: title,
 },
 description,
 keywords: [
 "game guide hubs",
 "survival game guides",
"horror game guides",
"Sell Lemons guide",
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
 "Gate Guard Simulator guide",
 "Enginefall guide",
 "Voidling Bound guide",
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
 title: "Warhammer 40,000: Rogue Trader",
 href: "/games/warhammer-40000-rogue-trader/dlc-guide-2026",
 label: "CRPG DLC guide",
 body: "Single-page 2026 DLC guide for new saves, DLC start order, Void Shadows, Lex Imperialis, The Infinite Museion, Patch 1.6, and augmentations.",
 image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2186680/header.jpg",
 },
 {
 title: "Sell Lemons",
 href: "/games/sell-lemons",
 label: "Roblox idle tycoon",
 body: "Beginner route, money fast priorities, manager upgrades, Sewer Key, UFO Key, Cosmic Farmer, Good Samaritan, and badge cleanup planning.",
 image: sellLemons.heroImage,
 },
 {
 title: "Voidling Bound",
 href: "/games/voidling-bound",
 label: "Creature collector RPG",
 body: "Wiki-derived database for all Voidlings, species, evolutions, elements, breeding, attributes, beginner route, Steam release facts, and source-backed detail pages.",
 image: voidlingBoundImages.hero,
 },
 {
 title: "Enginefall",
 href: "/games/enginefall",
 label: "Crafting extraction shooter",
 body: "June 2026 playtest hub for Steam access, release date, Titan Trains, Dagger shuttle, Conductor route, beginner extraction, PC specs, and PS5 or Xbox caveats.",
 image: enginefallImages.hero,
 },
 {
 title: "Gate Guard Simulator",
 href: "/games/gate-guard-simulator",
 label: "Inspection sim",
 body: "Pre-release hub for the 2026 Steam page, Playtest access, PC specs, Xbox and PS5 caveats, gameplay premise, and source-checked coverage scope.",
 image: gateGuardImages.hero,
 },
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
 {
 title: "SpaceCraft",
 href: "/games/spacecraft",
 label: "Space survival MMO",
 body: "Early Access launch guide for ship building, asteroid mining, factory automation, trading economy, faction wars, and Corporation management from Shiro Games.",
 image: spacecraftImages.siteHero,
 },
 {
 title: "Cursemark",
 href: "/games/cursemark",
 label: "Dark fantasy action roguelite",
 body: "Early Access guide hub for rune crafting, best builds, boss strategies, weapon choices, and beginner tips for this solo-dev roguelite from CLYDE Games.",
 image: cursemarkImages.siteHero,
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
 <div className="site-shell py-8">
 <Breadcrumb items={[{ label: "Games", href: "/games" }]} />

 <section className="mb-10 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
 <div>
 <p className="mb-3 text-xs font-bold uppercase tracking-[0.12px] text-dribbble-pink">
 Game guide directory
 </p>
 <h1 className="text-[36px] font-bold leading-[1.06] tracking-[-1.1px] text-foreground sm:text-[54px] sm:leading-[1.08] sm:tracking-[-1.39px]">
 Game Guide Hubs
 </h1>
 <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
 Pick a game and jump into practical guides: release facts,
 beginner routes, choices, endings, co-op setup, PC specs,
 Steam Deck checks, and troubleshooting.
 </p>
 <div className="mt-5 flex max-w-xl overflow-hidden rounded-xl bg-mist">
 <div className="flex min-h-11 flex-1 items-center px-4 text-sm text-fog">
 Search by game, genre, database, Steam Deck
 </div>
 <Link
 href="#current-hubs"
 className="flex min-h-11 items-center justify-center bg-dribbble-pink px-4 text-sm font-bold text-white"
 >
 Browse
 </Link>
 </div>
 <div className="mt-5 flex flex-wrap gap-2">
 {["Database", "Survival", "RPG", "Steam Deck", "New Releases"].map((label) => (
 <span key={label} className="ui-pill">
 {label}
 </span>
 ))}
 </div>
 </div>

 <div className="rounded-2xl bg-midnight-ink p-3">
 <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-mist">
 <Image
 src={projectMistImages.feature}
 alt="Enjoy4Game survival guide hub feature image"
 fill
 priority
 className="object-cover"
 sizes="(max-width: 768px) 100vw, 640px"
 />
 </div>
 </div>
 </section>

 <section id="current-hubs" className="mb-12 scroll-mt-24">
 <div className="mb-6">
 <h2 className="text-[26px] font-bold leading-tight tracking-[-0.29px] text-foreground">
 Current Hubs
 </h2>
 <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
 Start with the game you are playing, then move to the guide that
 matches your next question. Each hub keeps the most useful
 articles close together so you do not have to search the site
 page by page.
 </p>
 </div>
 <div>
 <div>
 <div className="shot-grid">
 {gameCards.map((game) => (
 <Link
 key={game.href}
 href={game.href}
 className="shot-card"
 >
 <div className="shot-thumb aspect-[4/3]">
 <Image
 src={game.image}
 alt={`${game.title} guide hub`}
 fill
 className="object-cover"
 sizes="(max-width: 768px) 100vw, 50vw"
 />
 </div>
 <div className="shot-meta">
 <div className="min-w-0">
 <div className="mb-1 flex items-center gap-2">
 <h3 className="truncate text-sm font-bold text-foreground group-hover:text-dribbble-pink">
 {game.title}
 </h3>
 <span className="ui-pink-badge">HUB</span>
 </div>
 <p className="text-xs font-semibold text-muted-foreground">{game.label}</p>
 <p className="mt-1 line-clamp-2 text-sm leading-5 text-muted-foreground">
 {game.body}
 </p>
 </div>
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
 <figure className="overflow-hidden rounded-lg border border-border bg-white">
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
