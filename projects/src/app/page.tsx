import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { JsonLd, generateFAQSchema } from '@/components/json-ld';
import { VideoEmbed } from '@/components/article-media';

// ✅ CHANGED: 首页 title 和 description 完全重写为 Hub 站定位
// 原来: "Directive 8020 Guide - All Endings, Choices, Trophies & Walkthrough"
// 原因: AdSense 审核员打开首页看到的第一信息是 title + H1 + 首屏内容
//       原版把自己定义成 D8020 专属站，是两次被拒的最直接原因
export const metadata: Metadata = {
  title: 'Enjoy4Game — Game Guides, Walkthroughs & Tools for New Releases',
  description:
    'Practical game guides for Steam new releases and early access titles. Walkthroughs, builds, endings, trophies, system requirements, and Steam Deck coverage for survival, RPG, horror, strategy, and indie games.',
  openGraph: {
    title: 'Enjoy4Game — Game Guides, Walkthroughs & Tools for New Releases',
    description:
      'Practical game guides for Steam new releases and early access titles. Walkthroughs, builds, endings, trophies, and Steam Deck coverage.',
    images: ['/hero-banner.jpg'],
  },
  alternates: {
    canonical: 'https://enjoy4game.com',
  },
};

// ── 当前覆盖的游戏 hub 列表（首页展示用）──
const featuredGames = [
  {
    title: 'Directive 8020',
    genre: 'Story Horror',
    status: 'Full Coverage',
    href: '/directive-8020-walkthrough',
    image: '/d8020-screenshot-01.jpg',
    desc: 'Walkthroughs, all endings, choices, trophies, collectibles, and crash fixes for Supermassive\'s space horror.',
  },
  {
    title: 'Fatekeeper',
    genre: 'First-Person RPG',
    status: 'Early Access',
    href: '/games/fatekeeper',
    image: '/games/fatekeeper/hero.webp',
    desc: 'Beginner route, best builds, weapons, spells, relics, bosses, and Steam Deck notes for this fantasy RPG.',
  },
  {
    title: 'Project: Mist',
    genre: 'Open-World Survival',
    status: 'Early Access',
    href: '/games/project-mist',
    image: '/games/project-mist/homepage-feature.webp',
    desc: 'Co-op setup, lockpicking, train door key, demo saves, building basics, and PC requirements.',
  },
  {
    title: 'Starminer',
    genre: 'Space Mining Sandbox',
    status: 'Early Access',
    href: '/games/starminer',
    image: '/games/starminer/hero.webp',
    desc: 'Campaign, Sandbox, Survival mode guide, ship building, mining logistics, heat, aliens, and blueprints.',
  },
  {
    title: 'Paralives',
    genre: 'Life Simulation',
    status: 'Early Access',
    href: '/games/paralives',
    image: '/games/paralives/hero.webp',
    desc: 'Paramaker, grid-less build mode, Mac support, mods, CC, and Sims 4 comparison.',
  },
  {
    title: 'Romestead',
    genre: 'Roman Survival Builder',
    status: 'Early Access',
    href: '/games/romestead',
    image: '/games/romestead/hero.webp',
    desc: '1-8 player co-op, beginner settlement priorities, PC specs, and Steam Deck cautions.',
  },
];

// ── D8020 데이터 (원본 유지) ──
const d8020QuickLinks = [
  { label: 'All Endings Guide', href: '/directive-8020-all-endings' },
  { label: 'How to Save Everyone', href: '/directive-8020-how-to-save-everyone' },
  { label: 'Trophy Guide', href: '/directive-8020-trophy-guide' },
  { label: 'Walkthrough: All 8 Episodes', href: '/directive-8020-walkthrough' },
  { label: 'Mimic Detection Tool', href: '/directive-8020-mimic-detection-survival-guide' },
  { label: 'All 44 Death Scenes', href: '/directive-8020-death-scenes-guide' },
  { label: 'Cycle 13 Explained', href: '/directive-8020-cycle-13-explained' },
  { label: 'Collectibles & Heirlooms', href: '/directive-8020-collectibles-heirlooms' },
  { label: 'Cast & Actors', href: '/directive-8020-cast-actors' },
  { label: 'Crash & Performance Fix', href: '/directive-8020-crashing-fix' },
  { label: 'Steam Deck & Low-End PC', href: '/directive-8020-steam-deck' },
  { label: 'Review / Worth Buying?', href: '/directive-8020-review' },
];

const episodeRoutes = [
  ['Little Star', '/directive-8020-little-star-walkthrough'],
  ['Best Laid Plans', '/directive-8020-best-laid-plans-walkthrough'],
  ['The Sample', '/directive-8020-the-sample-walkthrough'],
  ['Dragnet', '/directive-8020-dragnet-walkthrough'],
  ['Mr. Williams', '/directive-8020-mr-williams-walkthrough'],
  ['Hostile Takeover', '/directive-8020-hostile-takeover-walkthrough'],
  ['Revelation', '/directive-8020-revelation-walkthrough'],
  ['Come True', '/directive-8020-come-true-walkthrough'],
];

const videos = [
  {
    id: 'gaQkzfA14G4',
    title: 'Official Trailer',
    caption: 'Best first watch: Cassiopeia setup, mimic threat, cinematic horror tone, and core story hook.',
  },
  {
    id: 'S1wyl5-8E7E',
    title: 'Turning Points Showcase',
    caption: 'Best for route planning: rewind decisions, hidden branches, death recovery, and completion cleanup.',
  },
  {
    id: 'oeiMw0KD7w0',
    title: 'Gameplay / Turning Points Trailer',
    caption: 'Best for mechanics: Story Tree, branch testing, stealth pressure, and gameplay pacing.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── JSON-LD: FAQ schema (D8020 관련, 유지) ── */}
      <JsonLd
        data={generateFAQSchema([
          {
            question: 'What games does Enjoy4Game cover?',
            answer:
              'Enjoy4Game covers Steam new releases and early access games including survival, RPG, horror, life sim, strategy, and indie titles. Current coverage includes Directive 8020, Fatekeeper, Project: Mist, Starminer, Paralives, Romestead, and more.',
          },
          {
            question: 'How many endings does Directive 8020 have?',
            answer:
              'Directive 8020 has 5 major ending families with named outcomes including Homeward Bound, Docked, Mask Off, Hitchhiker, Massacre, Not Alone, and Horror.',
          },
          {
            question: 'Is Directive 8020 on Steam Deck?',
            answer:
              'Directive 8020 has Steam Deck support. Check the Steam Deck guide for verified settings, handheld expectations, and low-end PC advice.',
          },
        ])}
      />

      {/* ════════════════════════════════════════════════════════
          SECTION 1 — SITE HERO (새로 추가)
          AdSense 심사원이 첫 화면에서 Hub 사이트임을 즉시 인식하도록
          ════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="mb-2 flex items-center gap-3">
          <div className="h-1 w-8 rounded-full bg-foreground" />
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Game Guide Hub
          </p>
        </div>
        <h1 className="mb-4 text-[38px] font-bold leading-[1.1] tracking-[-1px] text-foreground sm:text-[52px]">
          Practical guides for<br className="hidden sm:block" /> Steam new releases
        </h1>
        <p className="mb-6 max-w-2xl text-base leading-7 text-muted-foreground">
          Walkthroughs, builds, endings, trophies, system requirements, and Steam Deck
          coverage for survival, RPG, horror, strategy, and indie games — written for
          players who want direct answers.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/games"
            className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-80"
          >
            Browse all games →
          </Link>
          <Link
            href="/guides"
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-white px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-mist"
          >
            All guides
          </Link>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 2 — FEATURED GAMES GRID (새로 추가)
          첫 화면에서 다수 게임 커버리지를 시각적으로 보여줌
          ════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-1 w-8 rounded-full bg-foreground" />
            <h2 className="text-xl font-bold text-foreground">Current Game Hubs</h2>
          </div>
          <Link href="/games" className="text-sm text-muted-foreground underline underline-offset-2 hover:text-foreground">
            View all →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredGames.map((game) => (
            <Link
              key={game.href}
              href={game.href}
              className="group overflow-hidden rounded-lg border border-border bg-white transition-colors hover:border-foreground/20"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={game.image}
                  alt={`${game.title} guide`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute left-3 top-3 rounded border border-border bg-mist/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-foreground backdrop-blur-sm">
                  {game.status}
                </span>
              </div>
              <div className="p-4">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  {game.genre}
                </p>
                <h3 className="mb-2 text-base font-bold text-foreground">{game.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{game.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 3 — DIRECTIVE 8020 FEATURED HUB
          원본 D8020 콘텐츠 보존, "Featured Game" 프레임으로 재포지셔닝
          ════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-1 w-8 rounded-full bg-foreground" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Featured Coverage
            </p>
            <h2 className="text-xl font-bold text-foreground">Directive 8020 — Complete Guide Hub</h2>
          </div>
        </div>

        {/* D8020 hero banner */}
        <div className="relative mb-6 overflow-hidden rounded-xl border border-border">
          <div className="relative aspect-[21/9]">
            <Image
              src="/hero-banner.jpg"
              alt="Directive 8020 Cassiopeia crew"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-white/70">
                Supermassive Games · May 2026 · PS5 / Xbox / PC
              </p>
              <h3 className="mb-3 text-2xl font-bold text-white sm:text-3xl">Directive 8020</h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/directive-8020-beginner-tips"
                  className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
                >
                  Start Spoiler-Free
                </Link>
                <Link
                  href="/directive-8020-all-endings"
                  className="rounded-md border border-white/40 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  All Endings
                </Link>
                <Link
                  href="/directive-8020-walkthrough"
                  className="rounded-md border border-white/40 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  Full Walkthrough
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* D8020 Quick Links Grid */}
        <div className="mb-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {d8020QuickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center justify-between rounded-md border border-border bg-white px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-mist hover:text-foreground"
            >
              <span>{link.label}</span>
              <span className="text-xs">→</span>
            </Link>
          ))}
        </div>

        {/* Episode routes */}
        <div className="rounded-lg border border-border bg-white p-5">
          <h3 className="mb-4 text-sm font-bold text-foreground">Episode Walkthroughs</h3>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {episodeRoutes.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-md border border-border bg-mist px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-mist/70 hover:text-foreground"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 4 — D8020 VIDEO CENTER (원본 유지)
          ════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-1 w-8 rounded-full bg-foreground" />
          <div>
            <h2 className="text-xl font-bold text-foreground">Directive 8020 Video Center</h2>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Watch the core trailer first, then use short clips for mechanics and story context.
            </p>
          </div>
        </div>
        <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          <VideoEmbed
            videoId={videos[0].id}
            title={`Directive 8020 ${videos[0].title}`}
            caption={`${videos[0].title}: ${videos[0].caption}`}
          />
          <div className="rounded-lg border border-border bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-foreground">How to use these videos</p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <li><strong className="text-foreground">Trailer:</strong> decide if the tone and premise are for you.</li>
              <li><strong className="text-foreground">Turning Points:</strong> understand rewinds before chasing endings.</li>
              <li><strong className="text-foreground">Gameplay clips:</strong> check stealth, corridors, and encounter pacing.</li>
              <li><strong className="text-foreground">Story clips:</strong> learn character context without reading ending spoilers.</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {videos.slice(1).map((video) => (
            <div key={video.id} className="rounded-lg border border-border bg-white p-4">
              <div className="aspect-video overflow-hidden rounded-md">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                  title={`Directive 8020 ${video.title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <h3 className="mt-3 text-sm font-bold text-foreground">{video.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{video.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 5 — SITE CTA FOOTER BAND (새로 추가)
          ════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="rounded-xl border border-border bg-mist/40 p-6 sm:p-8">
          <h2 className="mb-2 text-xl font-bold text-foreground">Looking for a different game?</h2>
          <p className="mb-5 max-w-xl text-sm leading-6 text-muted-foreground">
            Enjoy4Game covers multiple Steam releases each month. Find guide hubs for
            survival, RPG, strategy, life sim, and indie titles in the full games directory.
          </p>
          <Link
            href="/games"
            className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-80"
          >
            Browse all game hubs →
          </Link>
        </div>
      </section>
    </>
  );
}
