import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/breadcrumb';
import { JsonLd } from '@/components/json-ld';

const contactEmail = 'stephen@enjoy4game.com';
const siteName = 'Enjoy4Game Guides';
const siteUrl = 'https://enjoy4game.com';
const pageTitle = `About ${siteName} - Game Walkthroughs, Builds & Strategy Guides`;
const pageDescription =
 'Learn about Enjoy4Game Guides: who we are, how we write game guides, our editorial standards, and how to get in touch. Independent, player-first game coverage for PC, Steam Deck, and console.';

export const metadata: Metadata = {
 title: pageTitle,
 description: pageDescription,
 alternates: {
 canonical: '/about',
 },
 openGraph: {
 title: pageTitle,
 description: pageDescription,
 url: '/about',
 type: 'website',
 },
};

const organizationSchema = {
 '@context': 'https://schema.org',
 '@type': 'Organization',
 name: siteName,
 url: siteUrl,
 email: contactEmail,
 description:
 'Independent player-first game guides covering survival horror, RPG, life simulation, strategy, and indie games. Walkthroughs, builds, tips, system requirements, Steam Deck checks, and buying advice.',
 sameAs: ['https://www.reddit.com/r/enjoy4game/'],
 foundingDate: '2026-05-10',
};

const featuredGames = [
 {
 title: 'Fatekeeper',
 href: '/games/fatekeeper',
 desc: 'First-person fantasy action RPG from Paraglacial & THQ Nordic. Builds, weapons, relics, bosses, and Steam Deck checks.',
 },
 {
 title: 'Starminer',
 href: '/games/starminer',
 desc: 'Space mining sandbox from CoolAndGoodGames & Paradox Arc. Ship building, mining logistics, heat management, and blueprints.',
 },
 {
 title: 'Directive 8020',
 href: '/',
 desc: 'Sci-fi survival horror from Supermassive Games. Full walkthroughs, all endings, trophy guide, cast, and Story Tree planning.',
 },
 {
 title: 'Project: Mist',
 href: '/games/project-mist',
 desc: 'Open-world survival horror from Chicken Launcher. Train base building, crafting, co-op, lockpicking, and crash fixes.',
 },
 {
 title: 'Paralives',
 href: '/games/paralives',
 desc: 'Sandbox life simulation from Paralives Studio. Paramaker, build mode, Mac support, mods, and Sims 4 vs inZOI comparisons.',
 },
 {
 title: 'Warhammer 40,000: Mechanicus II',
 href: '/games/mechanicus-ii',
 desc: 'Turn-based tactics from Bulwark Studios & Kasedo Games. Faction guides, unit builds, campaign walkthroughs, and Steam Deck performance.',
 },
 {
 title: 'ZERO PARADES',
 href: '/games/zero-parades',
 desc: 'Espionage RPG from ZA/UM. Beginner skills, best builds, walkthrough, system requirements, and controller support.',
 },
 {
 title: 'Thick As Thieves',
 href: '/games/thick-as-thieves',
 desc: 'Stealth heist game from OtherSide Entertainment. Beginner stealth, solo vs co-op, contracts, gear, and roadmap.',
 },
 {
 title: 'Romestead',
 href: '/games/romestead',
 desc: 'Roman survival town builder from Beartwigs & Three Friends. Beginner tips, co-op, professions, gods, and Steam Deck.',
 },
 {
 title: 'JUMP KING QUEST',
 href: '/games/jump-king-quest',
 desc: 'Punishment platformer from Nexile. 1.0 Phantom Update coverage, beginner tips, co-op, PvP, and controller notes.',
 },
 {
 title: 'Luna Abyss',
 href: '/games/luna-abyss',
 desc: 'Bullet-hell FPS from Kwalee Labs. Game Pass, Steam Deck settings, walkthrough, achievements, ending explained.',
 },
 {
 title: '007 First Light',
 href: '/games/007-first-light',
 desc: 'James Bond origin story from IO Interactive. Release time, reviews, Denuvo, system requirements, and beginner tips.',
 },
 {
 title: 'Mina the Hollower',
 href: '/games/mina-the-hollower',
 desc: 'Gothic action-adventure from Yacht Club Games. Platforms, Steam Deck, beginner guide, trophy guide, and buying advice.',
 },
];

export default function AboutPage() {
 return (
 <article className="mx-auto max-w-[960px] px-4 py-8 sm:px-6">
 <JsonLd data={organizationSchema} />
 <JsonLd
 data={{
 '@context': 'https://schema.org',
 '@type': 'AboutPage',
 name: pageTitle,
 description: pageDescription,
 url: `${siteUrl}/about`,
 isPartOf: {
 '@type': 'WebSite',
 name: siteName,
 url: siteUrl,
 },
 publisher: {
 '@type': 'Organization',
 name: siteName,
 },
 }}
 />
 <Breadcrumb items={[{ label: 'About' }]} />

 <h1 className="mb-4 text-[42px] font-bold leading-[1.08] tracking-[-1.39px] text-foreground sm:text-[54px]">
 About Enjoy4Game Guides
 </h1>
 <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
 Independent, player-first game guides for PC, Steam Deck, and
 console. We write walkthroughs, builds, tips, and buying advice for
 the games we actually play - no AI filler, no scraped content, no
 cheat-trainer promotions.
 </p>

 <div className="prose-game">
 <h2>Who Runs This Site</h2>
 <p>
 Enjoy4Game Guides is run by a small team of PC gamers who have
 been playing and writing about games for years. We built this site
 because too many "game guide" sites are filled with AI-generated
 nonsense - vague advice, fake item names, zero screenshots, and
 no evidence the writer ever launched the game.
 </p>
 <p>
 Every guide here is written by someone who owns the game, has put
 in the hours, and can back up their advice with real experience.
 When we aren't sure about something, we say so. When new patches
 drop, we update. When player reports contradict what we wrote, we
 verify and correct.
 </p>

 <h2>What We Cover</h2>
 <p>
 We focus on games that other guide sites ignore: Early Access
 indie titles, niche strategy games, mid-budget RPGs, and the kind
 of games that build dedicated communities but don't get the IGN
 treatment. We also cover bigger releases like Directive 8020 and
 007 First Light when we can add depth that quick-hit news sites
 miss.
 </p>
 <p>For every game we cover, you can expect:</p>
 <ul>
 <li>
 <strong>Launch facts</strong> - exact release dates, unlock
 times, platform status, price, and edition notes
 </li>
 <li>
 <strong>Beginner guides</strong> - spoiler-light first-session
 advice that respects your blind playthrough
 </li>
 <li>
 <strong>Deep build & loadout guides</strong> - tested
 archetypes, stat priorities, gear synergies, and what to avoid
 </li>
 <li>
 <strong>Walkthroughs & boss guides</strong> - spoiler-aware
 progression with key decision points and missable content
 </li>
 <li>
 <strong>System requirements & Steam Deck checks</strong> - verified performance data, settings recommendations, and
 handheld compatibility
 </li>
 <li>
 <strong>Buying advice</strong> - honest "is it worth it?"
 assessments that factor in price, Early Access risk, content
 depth, and platform fit
 </li>
 </ul>

 <h2>Editorial Standards</h2>
 <ul>
 <li>
 <strong>Play first, write second.</strong> Every guide is based
 on direct experience with the game. No press-release rewrites.
 </li>
 <li>
 <strong>Structure for skimming.</strong> BLUF boxes, status
 panels, action tables, FAQ sections, and jump links so you can
 find the answer in seconds.
 </li>
 <li>
 <strong>Label uncertainty.</strong> When data comes from
 pre-release sources, community reports, or needs patch
 verification, we mark it clearly.
 </li>
 <li>
 <strong>Keep guides alive.</strong> Early Access games change.
 We revisit and update pages when major patches drop.
 </li>
 <li>
 <strong>No AI-generated content.</strong> We use tools to help
 with research and structure, but every word is reviewed,
 fact-checked, and approved by a human who played the game.
 </li>
 </ul>

 <h2>All Game Hubs</h2>
 <div className="grid gap-3 sm:grid-cols-2">
 {featuredGames.map((game) => (
 <Link
 key={game.href}
 href={game.href}
 className="rounded-md border border-border bg-white p-4 transition-colors hover:border-border"
 >
 <h3 className="text-sm font-bold text-foreground">
 {game.title}
 </h3>
 <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
 {game.desc}
 </p>
 </Link>
 ))}
 </div>

 <h2>Unofficial Status</h2>
 <p>
 This site is not affiliated with, endorsed by, sponsored by, or
 operated by any of the game developers or publishers whose titles
 we cover - including but not limited to Supermassive Games,
 Paraglacial, THQ Nordic, CoolAndGoodGames, Paradox Interactive,
 Chicken Launcher, Paralives Studio, Bulwark Studios, Kasedo
 Games, ZA/UM, OtherSide Entertainment, Megabit Publishing,
 Beartwigs, Three Friends, Nexile, Kwalee Labs, IO Interactive,
 Yacht Club Games, or their respective owners. All game titles,
 characters, official artwork, screenshots, trailers, logos, and
 trademarks belong to their respective owners. Images and
 screenshots are used for guide illustration and commentary
 purposes under fair use.
 </p>

 <h2>Steam Deck Coverage</h2>
 <p>
 We maintain a dedicated{' '}
 <Link href="/steam-deck" className="text-foreground hover:underline">
 Steam Deck games hub
 </Link>{' '}
 where we track compatibility, best settings, controller support,
 UI readability, and performance for every game we cover. Check
 there before buying a new release for handheld play.
 </p>

 <h2>Contact & Community</h2>
 <p>
 For corrections, rights questions, or site feedback, email{' '}
 <a href={`mailto:${contactEmail}`} className="text-foreground hover:underline">
 {contactEmail}
 </a>.
 </p>
 <p>
 Join the discussion on{' '}
 <a
 href="https://www.reddit.com/r/enjoy4game/"
 target="_blank"
 rel="noreferrer"
 className="text-foreground hover:underline"
 >
 r/enjoy4game
 </a>{' '}
 - share your own tips, report guide errors, or suggest which game
 we should cover next.
 </p>
 </div>
 </article>
 );
}
