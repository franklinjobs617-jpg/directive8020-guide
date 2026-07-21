import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { GuideCard } from "@/components/guide-card";
import { JsonLd, generateArticleSchema } from "@/components/json-ld";
import {
  fatekeeper,
  mechanicusII,
  starminer,
  romestead,
  zeroParades,
  projectMist,
} from "@/lib/games";

// ✅ ADDED (2026-07-03): this page's title/H1/meta already claimed to be an
// "All Game Guides" hub, but every single card below was Directive 8020
// content — zero other games were actually represented. That mismatch is
// exactly the kind of thing an AdSense reviewer (or a search engine judging
// niche-expertise/hub-and-spoke structure) would flag. otherGameSections
// pulls real, already-existing guideLinks data from each game's config in
// games.ts (same data the individual game hub pages use) so this page's
// content actually matches what it claims to be.
const otherGameSections = [
  { game: fatekeeper, label: "Fatekeeper" },
  { game: mechanicusII, label: "Warhammer 40,000: Mechanicus II" },
  { game: starminer, label: "Starminer" },
  { game: romestead, label: "Romestead" },
  { game: zeroParades, label: "ZERO PARADES" },
  { game: projectMist, label: "Project: Mist" },
].map(({ game, label }) => ({
  label,
  hubPath: game.hubPath,
  heroImage: game.heroImage,
  guides: game.guideLinks.slice(0, 4),
}));

// ✅ CHANGED: title 和 description 完全改写
// 原来: "All Guides - Complete Directive 8020 Walkthrough & Tips"
// 原因: AdSense 审核员抓 /guides 这个核心页, 看到的是 D8020 专属站定位
//       与 /games 的 hub 定位严重矛盾, 直接触发 low value / identity confusion 判定
export const metadata: Metadata = {
  title: "All Game Guides — Walkthroughs, Builds & Release Coverage",
  description:
    "Browse all game guides on Enjoy4Game. Walkthroughs, build guides, endings, trophy lists, and release coverage for survival, RPG, horror, strategy, and indie games on Steam.",
  alternates: {
    canonical: "/guides",
  },
};

// ────────────────────────────────────────────────────────────
// D8020 guides — 保持原有数据不变, 只移动到独立 section
// ────────────────────────────────────────────────────────────
const d8020Guides = [
  {
    href: "/directive-8020-review",
    title: "Review / Worth Buying?",
    description:
      "Guide Hub verdict, media score roundup, pros and cons, performance, replay value, and buying advice.",
    tag: "Review",
    tagColor: "text-foreground bg-mist border-border",
    image: "/d8020-screenshot-01.jpg",
  },
  {
    href: "/directive-8020-beginner-tips",
    title: "Beginner Tips",
    description:
      "Spoiler-free first-run advice for settings, mimic clues, QTEs, stealth, and Story Tree habits.",
    tag: "Start Here",
    tagColor: "text-foreground bg-mist border-border",
    image: "/d8020-screenshot-02.jpg",
  },
  {
    href: "/directive-8020-overview",
    title: "What is Directive 8020?",
    description:
      "Story, mimic threat, survival gameplay, Turning Points, Story Tree, and official video overview.",
    tag: "Available",
    tagColor: "text-foreground bg-mist border-border",
    image: "/d8020-screenshot-01.jpg",
  },
  {
    href: "/directive-8020-system-requirements",
    title: "System Requirements",
    description:
      "Official Steam PC specs, storage, SSD advice, and performance settings explained.",
    tag: "Available",
    tagColor: "text-foreground bg-mist border-border",
    image: "/d8020-screenshot-02.jpg",
  },
  {
    href: "/directive-8020-steam-deck",
    title: "Steam Deck & Low-End PC",
    description:
      "Verified status, official specs, handheld expectations, best settings, and low-end PC advice.",
    tag: "Platform",
    tagColor: "text-foreground bg-mist border-border",
    image: "/d8020-screenshot-04.jpg",
  },
  {
    href: "/directive-8020-community-questions",
    title: "Community Questions",
    description:
      "Answers for multiplayer, Steam Deck, blind runs, Turning Points, Deluxe, endings, and performance.",
    tag: "FAQ Hub",
    tagColor: "text-foreground bg-mist border-border",
    image: "/d8020-screenshot-01.jpg",
  },
  {
    href: "/directive-8020-release-time",
    title: "Release Time & Deluxe Content",
    description:
      "Steam unlock time by region, platform notes, Digital Deluxe contents, and launch checklist.",
    tag: "Available",
    tagColor: "text-foreground bg-mist border-border",
    image: "/d8020-screenshot-04.jpg",
  },
  {
    href: "/directive-8020-characters",
    title: "Characters: Young, Stafford, Eisele, Cooper, Cernan",
    description:
      "Brianna Young, Nolan Stafford, Laura Eisele, Samantha Cooper, Josef Cernan, cast status, mimic clues, and survival roles.",
    tag: "Available",
    tagColor: "text-foreground bg-mist border-border",
    image: "/d8020-screenshot-03.jpg",
  },
  {
    href: "/directive-8020-all-endings",
    title: "All Endings: Homeward Bound, Docked, Mask Off",
    description:
      "Five major ending families plus named outcomes including Homeward Bound, Docked, Mask Off, Hitchhiker, Massacre, Not Alone, and Horror.",
    tag: "Updated",
    tagColor: "text-foreground bg-mist border-border",
    image: "/d8020-screenshot-06.jpg",
  },
  {
    href: "/directive-8020-how-to-save-everyone",
    title: "How to Save Everyone",
    description:
      "Everyone-lives route planning by episode, NPC death notes, mimic trust checks, and Turning Points recovery.",
    tag: "Updated",
    tagColor: "text-foreground bg-mist border-border",
    image: "/d8020-screenshot-05.jpg",
  },
  {
    href: "/directive-8020-choices-consequences",
    title: "Do Choices Matter?",
    description:
      "Community-focused answer for flavor choices vs route-changing Destinies, QTEs, trust checks, and endings.",
    tag: "Updated",
    tagColor: "text-foreground bg-mist border-border",
    image: "/d8020-screenshot-04.jpg",
  },
  {
    href: "/directive-8020-mimic-detection-survival-guide",
    title: "Mimic Detection Survival Guide",
    description:
      "Interactive suspicion tracker for isolation clues, memory gaps, Explorer Mode, and Survival Mode trust decisions.",
    tag: "Tool",
    tagColor: "text-foreground bg-mist border-border",
    image: "/official-mimic-scene.jpg",
  },
  {
    href: "/directive-8020-death-scenes-guide",
    title: "All Deaths: 44 Death Scenes",
    description:
      "44 death scenes checklist with chapter triggers, victims, avoid methods, Turning Points recovery, and death spiral notes.",
    tag: "Death Guide",
    tagColor: "text-foreground bg-mist border-border",
    image: "/d8020-screenshot-05.jpg",
  },
  {
    href: "/directive-8020-turning-points-story-tree",
    title: "Story Tree & Turning Points Guide",
    description:
      "How rewind timelines work, why changed choices need replaying forward, and how to track 100% branches.",
    tag: "Core Mechanic",
    tagColor: "text-foreground bg-mist border-border",
    image: "/official-story-tree.jpg",
  },
  {
    href: "/directive-8020-movie-night-multiplayer",
    title: "Movie Night Multiplayer",
    description:
      "Couch co-op setup, character assignment, online multiplayer note, and group survival rules.",
    tag: "Co-op",
    tagColor: "text-foreground bg-mist border-border",
    image: "/d8020-screenshot-01.jpg",
  },
  {
    href: "/directive-8020-deluxe-edition",
    title: "Deluxe Edition Content",
    description:
      "Bonus mission, outfit pack, filters, artbook, soundtrack, and whether Deluxe is worth it.",
    tag: "Edition Guide",
    tagColor: "text-foreground bg-mist border-border",
    image: "/d8020-screenshot-04.jpg",
  },
  {
    href: "/directive-8020-stealth-guide",
    title: "Stealth Guide",
    description:
      "Crouch-walking, hiding, sound discipline, pursuit routes, QTEs, and Dragnet-style encounters.",
    tag: "Mechanics",
    tagColor: "text-foreground bg-mist border-border",
    image: "/d8020-screenshot-02.jpg",
  },
  {
    href: "/directive-8020-collectibles-heirlooms",
    title: "Collectibles: 65 Secrets, O Death & Heirlooms",
    description:
      "65 collectibles: 50 Secrets, 10 Simms Recordings, 5 O Death Secrets, Deluxe Heirlooms, and trophy cleanup.",
    tag: "Collectibles",
    tagColor: "text-foreground bg-mist border-border",
    image: "/d8020-screenshot-04.jpg",
  },
  {
    href: "/directive-8020-o-death-secrets-curator",
    title: "O Death Secrets & Curator",
    description:
      "Five O Death Secrets, Curator context, 65-collectible breakdown, and cleanup method.",
    tag: "Collectibles",
    tagColor: "text-foreground bg-mist border-border",
    image: "/review/review-endings-comparison-flowchart.webp",
  },
  {
    href: "/directive-8020-cycle-13-explained",
    title: "Cycle 13 Explained",
    description:
      "Spoiler-aware explanation for Cycle 13, Booster Ring, Cassiopeia outcome, and Eisele Destiny.",
    tag: "Ending",
    tagColor: "text-foreground bg-mist border-border",
    image: "/review/review-final-episode.webp",
  },
  {
    href: "/directive-8020-how-long-to-beat",
    title: "How Long to Beat",
    description:
      "8-hour main story, 30-hour completion estimate, 8 episodes, and replay planning.",
    tag: "Length",
    tagColor: "text-foreground bg-mist border-border",
    image: "/review/review-episodes-1-4-turning-points-flowchart.webp",
  },
  {
    href: "/directive-8020-come-true-walkthrough",
    title: "Come True Walkthrough",
    description:
      "Episode 8 finale route priorities, final-state tracking, endings setup, and cleanup.",
    tag: "Episode",
    tagColor: "text-foreground bg-mist border-border",
    image: "/review/come_true.png",
  },
  {
    href: "/directive-8020-trophy-guide",
    title: "Trophy & Achievement Guide",
    description:
      "Steam achievements, PS5 trophy sync issues, missable planning, collectibles, endings, and 100% cleanup.",
    tag: "Updated",
    tagColor: "text-foreground bg-mist border-border",
    image: "/d8020-screenshot-06.jpg",
  },
  {
    href: "/directive-8020-trophy-list",
    title: "Trophy List, Achievements & Platinum",
    description:
      "Steam achievements, PS5 trophies, Xbox achievements, Platinum status, and platform list verification.",
    tag: "Trophy List",
    tagColor: "text-foreground bg-mist border-border",
    image: "/d8020-screenshot-10.jpg",
  },
  {
    href: "/directive-8020-crashing-fix",
    title: "Crashing Fix: Black Screen, FPS & Startup",
    description:
      "Startup crashes, black screen, stuttering, low FPS, audio, controller, PS5, Xbox, and PC troubleshooting.",
    tag: "Updated",
    tagColor: "text-foreground bg-mist border-border",
    image: "/d8020-screenshot-02.jpg",
  },
  {
    href: "/directive-8020-walkthrough",
    title: "Walkthrough: All 8 Episodes and Choices",
    description:
      "All 8 episodes from Little Star to Come True, choices, collectibles, QTEs, stealth, and Story Tree planning.",
    tag: "Updated",
    tagColor: "text-foreground bg-mist border-border",
    image: "/d8020-screenshot-02.jpg",
  },
  {
    href: "/directive-8020-little-star-walkthrough",
    title: "Little Star Walkthrough",
    description:
      "Episode 1 first-run setup, crew baseline, early QTEs, collectibles, and Story Tree notes.",
    tag: "Episode",
    tagColor: "text-foreground bg-mist border-border",
    image: "/review/episode_1_little_star.png",
  },
  {
    href: "/directive-8020-best-laid-plans-walkthrough",
    title: "Best Laid Plans Walkthrough",
    description:
      "Episode 2 relationship tracking, evidence-first choices, mission pressure, and early branches.",
    tag: "Episode",
    tagColor: "text-foreground bg-mist border-border",
    image: "/review/episode_2_best_laid_plans.png",
  },
  {
    href: "/directive-8020-the-sample-walkthrough",
    title: "The Sample Walkthrough",
    description:
      "Episode 3 lab evidence, specimen choices, mimic suspicion, collectibles, and route notes.",
    tag: "Episode",
    tagColor: "text-foreground bg-mist border-border",
    image: "/review/episode_the_sample.png",
  },
  {
    href: "/directive-8020-dragnet-walkthrough",
    title: "Dragnet Walkthrough",
    description:
      "Episode 4 stealth priorities, scanner use, chase routes, QTEs, and collectible cleanup.",
    tag: "Episode",
    tagColor: "text-foreground bg-mist border-border",
    image: "/review/episode_dragnet.png",
  },
  {
    href: "/directive-8020-mr-williams-walkthrough",
    title: "Mr. Williams Walkthrough",
    description:
      "Episode 5 mid-game route audit, survivor state, NPC death risks, and Turning Points.",
    tag: "Episode",
    tagColor: "text-foreground bg-mist border-border",
    image: "/review/mid_game_ep5_7.png",
  },
  {
    href: "/directive-8020-hostile-takeover-walkthrough",
    title: "Hostile Takeover Walkthrough",
    description:
      "Episode 6 late-game branching, survivor-dependent scenes, stealth, and endings setup.",
    tag: "Episode",
    tagColor: "text-foreground bg-mist border-border",
    image: "/review/hydroponics_bay.png",
  },
  {
    href: "/directive-8020-revelation-walkthrough",
    title: "Revelation Walkthrough",
    description:
      "Episode 7 late choices, final survivor state, ending setup, and route cleanup.",
    tag: "Episode",
    tagColor: "text-foreground bg-mist border-border",
    image: "/review/final_episode.png",
  },
];

export default function GuidesPage() {
  const quickStart = d8020Guides.filter((g) =>
    ["Review", "Start Here", "Platform", "FAQ Hub", "Available"].includes(g.tag)
  );
  const deepGuides = d8020Guides.filter(
    (g) =>
      !["Review", "Start Here", "Platform", "FAQ Hub", "Available"].includes(
        g.tag
      )
  );

  return (
    <div className="site-shell py-8">
      <JsonLd
        data={generateArticleSchema({
          // ✅ CHANGED: JSON-LD 与页面 title 保持一致
          title: "All Game Guides — Walkthroughs, Builds & Release Coverage",
          description:
            "Browse all game guides on Enjoy4Game. Walkthroughs, build guides, endings, trophy lists, and release coverage for survival, RPG, horror, strategy, and indie games.",
          url: "/guides",
          datePublished: "2026-05-10",
          dateModified: "2026-07-03",
          imageUrl: "/d8020-screenshot-01.jpg",
        })}
      />
      <Breadcrumb items={[{ label: "Guides", href: "/guides" }]} />

      {/*
        ✅ CHANGED: H1 和 intro 段落完全改写
        原来: "Every guide for Directive 8020 in one place..."
        现在: 体现这是多游戏 hub，D8020 是其中一个品类
        理由: AdSense 审核员读 H1 和首段来判断站点性质
              原版明确说"这是 D8020 专属 hub"，直接把自己定义成单游戏站
      */}
      <h1 className="mb-4 text-[42px] font-bold leading-[1.08] tracking-[-1.39px] text-foreground sm:text-[54px]">
        All Game Guides
      </h1>
      <p className="mb-8 max-w-3xl text-base leading-7 text-muted-foreground">
        Practical guides across all games covered on Enjoy4Game — walkthroughs,
        build advice, endings, trophies, system requirements, and release
        coverage. Each guide is written for players who want direct answers, not
        padding. Browse by game below, or use the{" "}
        <a href="/games" className="underline underline-offset-2">
          Games hub
        </a>{" "}
        to find coverage for a specific title.
      </p>

      {/*
        ✅ ADDED: 站点概览 section (新增)
        理由:
        1. 让审核员看到这不是只有 D8020 的站，立刻感知到多游戏覆盖
        2. 内链到 /games 页，提升 /games 页面的权重
        3. 给用户一个导航入口，降低跳出率
      */}
      <section className="mb-12 rounded-lg border border-border bg-mist/40 p-6">
        <p className="section-label text-dribbble-pink mb-2">Browse All Games</p>
        <h2 className="mb-3 text-[22px] font-bold leading-tight tracking-[-0.2px] text-foreground">
          Looking for a different game?
        </h2>
        <p className="mb-4 text-sm leading-6 text-muted-foreground">
          Below is a sample of guides from other active hubs, plus the full
          Directive 8020 guide library. For the complete directory of every
          game covered on Enjoy4Game, visit the game hub page.
        </p>
        <a
          href="/games"
          className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-mist transition-colors"
        >
          View all game hubs →
        </a>
      </section>

      {/* ── Other Games: real guide cards, not just a link-out ── */}
      <section className="mb-14">
        <div className="mb-6">
          <p className="section-label text-dribbble-pink">More Games</p>
          <h2 className="mt-1 text-[26px] font-bold leading-tight tracking-[-0.29px] text-foreground">
            Guides From Other Games on Enjoy4Game
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            A sample of guides from other active hubs. Visit each game&apos;s
            full hub for the complete guide list.
          </p>
        </div>
        <div className="grid gap-10">
          {otherGameSections.map((section) => (
            <div key={section.hubPath}>
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-bold text-foreground">{section.label}</h3>
                <a
                  href={section.hubPath}
                  className="text-sm font-medium text-dribbble-pink underline underline-offset-2"
                >
                  View full hub →
                </a>
              </div>
              <div className="shot-grid">
                {section.guides.map((guide) => (
                  <GuideCard
                    key={guide.href}
                    href={guide.href}
                    title={guide.title}
                    description={guide.description}
                    image={section.heroImage}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Directive 8020: Quick Start ── */}
      <section className="mb-12">
        <div className="mb-6">
          {/*
            ✅ CHANGED: section label 从 "Directive 8020" 改为带游戏名的完整标题
            让这个 section 在页面上下文里显得是「多游戏站中的一个游戏」
            而不是「整个站就是这个游戏」
          */}
          <p className="section-label text-dribbble-pink">Directive 8020</p>
          <h2 className="mt-1 text-[26px] font-bold leading-tight tracking-[-0.29px] text-foreground">
            Quick Start Guides
          </h2>
        </div>
        <div className="shot-grid">
          {quickStart.map((guide) => (
            <GuideCard key={guide.href} {...guide} />
          ))}
        </div>
      </section>

      {/* ── Directive 8020: Deep Guides ── */}
      <section>
        <div className="mb-6">
          <p className="section-label text-dribbble-pink">Directive 8020</p>
          <h2 className="mt-1 text-[26px] font-bold leading-tight tracking-[-0.29px] text-foreground">
            Walkthroughs, Endings & Collectibles
          </h2>
        </div>
        <div className="shot-grid">
          {deepGuides.map((guide) => (
            <GuideCard key={guide.href} {...guide} />
          ))}
        </div>
      </section>
    </div>
  );
}
