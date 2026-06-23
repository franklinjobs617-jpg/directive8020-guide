# Enjoy4Game Website Code Plan

## 1. Goal

Build `enjoy4game.com` as a scalable game-guide publishing system with these requirements:

- New game hubs and guide pages can be added quickly.
- Every page is SSR or prerendered and crawlable.
- SEO-critical outputs are consistent: title, description, canonical, schema, sitemap, robots, internal links, local images.
- Content logic is data-driven where possible, not copied page by page.
- Operations remain safe when the site grows from dozens of pages to hundreds of pages.

This document is both a codebase map and an execution plan.

## 2. Current State

### 2.1 Framework and runtime

- Framework: `Next.js 16` App Router
- Language: `TypeScript`
- Styling: global CSS + component-level utility classes
- Deployment: Vercel-style output and caching behavior
- Rendering: mixed static prerender and server-rendered App Router pages

### 2.2 Current code layout

Main workspace:

- `projects/src/app`
  - route pages
  - `layout.tsx`
  - `sitemap.ts`
  - `robots.ts`
  - `globals.css`
- `projects/src/components`
  - per-game article renderers
  - shared page blocks
  - shared SEO/schema helpers
  - UI components
- `projects/src/lib`
  - per-game data/config files
  - shared game registry
  - page data constants
- `projects/public`
  - local game images and static assets
- `projects/scripts`
  - sync/download/build-support scripts

### 2.3 Current strengths

- Route structure already supports game hubs and child pages.
- JSON-LD helpers already exist.
- Sitemap and robots are code-driven.
- Several games already use centralized data files.
- Local image assets are already part of the workflow.

### 2.4 Current weaknesses

- Architecture is partially standardized but not fully unified.
- Some pages still use one-off page logic instead of a reusable page model.
- Some SEO rules are enforced by habit rather than code.
- Shared guide components still expose internal-style status concepts that should not appear in public content.
- Robots and rendering rules need tighter ownership because one small mistake can affect all crawlability.
- There is no single source-of-truth document for page creation, QA, deployment, and GSC submission.

## 3. Architecture Principles

### 3.1 Content-first, not component-first

For this site, the core unit is not a React component.  
The core unit is a guide page with:

- search intent
- first-screen answer
- structured sections
- schema
- internal links
- update notes
- local media

Components should render this model. They should not define the model.

### 3.2 Data-driven page generation

Every game should have a single data module that owns:

- game metadata
- image registry
- guide link registry
- per-page metadata
- FAQ data
- section data
- table/checklist data

This avoids drift between:

- page title vs H1
- sitemap vs real routes
- `/games` directory card vs actual guide cluster
- schema vs on-page facts

### 3.3 SSR and crawlability are hard requirements

Every guide page must:

- return meaningful HTML without JS execution
- expose title, meta description, canonical, H1, FAQ content, and main answer in initial HTML
- avoid relying on client-only rendering for critical content

### 3.4 Public content rules must be encoded

Do not rely on manual memory alone.  
The code and QA workflow should actively prevent:

- internal research language
- GSC mentions
- competitor mentions
- confidence labels
- verification labels
- remote-image drift

## 4. Recommended Target Structure

### 4.1 App routes

Recommended route pattern:

```text
src/app/
  page.tsx
  games/
    page.tsx
    [game-slug]/
      page.tsx
      [guide-slug]/
        page.tsx
```

Practical note:

- Existing direct routes can remain.
- New work should move toward one consistent pattern.
- One-off top-level game routes like `enginefall-beginner-guide` should eventually be normalized under `/games/enginefall/...`.

### 4.2 Data layer

Recommended pattern:

```text
src/lib/
  games.ts
  game-pages/
    mistfall-hunter.ts
    enginefall.ts
    fatekeeper.ts
    ...
```

Each game data file should export:

- `gameSchemaConfig`
- `images`
- `guideLinks`
- `pageMap`
- `createMetadata()`
- optional helpers like `getRelatedGuides()`

### 4.3 Rendering layer

Recommended shared renderer types:

```text
src/components/guides/
  guide-article-shell.tsx
  guide-hero.tsx
  guide-table.tsx
  guide-checklist.tsx
  guide-related-links.tsx
  guide-faq.tsx
  guide-source-note.tsx
```

Use per-game custom components only when the page format is materially different.  
Otherwise prefer one shared article shell with page data input.

### 4.4 Assets

Recommended asset structure:

```text
public/games/
  mistfall-hunter/
    hero.webp
    screenshot-1.webp
    ...
  enginefall/
  fatekeeper/
  ...
```

Rules:

- Store public page media locally.
- Prefer WebP.
- Compress before release.
- Keep image naming predictable.

## 5. Page Model Standard

Every guide page should be represented by a predictable shape:

```ts
type GuidePageData = {
  title: string
  description: string
  canonical: string
  label: string
  heroImage: string
  heroAlt: string
  heroCaption: string
  quickAnswer: string
  updatedNote: string
  sourceNote: string
  sections: GuideSection[]
  faqs: FAQItem[]
  related: GameGuideLink[]
}
```

Each section should support:

- paragraphs
- optional image
- optional table
- optional checklist

This model is already close to how the best recent pages are being built.

## 6. SEO and Indexing Layer

### 6.1 Required on every page

- `title`
- meta description
- canonical
- one H1
- visible first-screen answer
- FAQ content
- Article schema
- FAQPage schema
- Breadcrumb schema
- VideoGame schema where relevant
- local images with alt text
- related internal links

### 6.2 Required site-level files

- `src/app/sitemap.ts`
- `src/app/robots.ts`
- global metadata defaults in `layout.tsx`

### 6.3 Robots policy

Target rules:

- allow all public content
- do not block Google from fetching CSS, JS, and image resources needed for rendering
- block only truly private or useless paths

Recommended direction:

```text
User-Agent: *
Allow: /
Disallow: /api/
Sitemap: https://enjoy4game.com/sitemap.xml
```

Do not block `/_next/` unless there is a very specific reason and the SEO/rendering impact is fully understood.

### 6.4 Schema policy

Use absolute URLs for:

- canonical
- Open Graph images
- schema `url`
- schema image URLs where possible

Avoid mixed relative/absolute structured data fields.

## 7. Rendering Strategy

### 7.1 Target default

Default to static prerender or cached server rendering for guide pages.

That means:

- no client-only content for the main answer
- no dependence on browser-only fetch for critical page text
- no delayed injection of title/H1/FAQ

### 7.2 When client components are allowed

Client components are fine for:

- calculators
- trackers
- progress tools
- filters
- local-interaction widgets

But they should not own:

- page title
- primary answer
- FAQ text
- page body copy

### 7.3 Verification rule

Before publishing a page, verify:

- raw HTML contains title, description, H1, quick answer, and core content
- Googlebot receives the same 200 response
- page is present in sitemap

## 8. Internal Linking Plan

Each game cluster should follow this pattern:

- hub links to every child guide
- every child links back to hub
- every child links to at least 2 sibling guides
- `/games` links to each active hub

Recommended link graph per game:

```text
/games
  -> /games/[game]
    -> child 1
    -> child 2
    -> child 3
    -> child 4
  child 1 -> hub + child 2 + child 3
  child 2 -> hub + child 1 + child 4
  child 3 -> hub + child 2 + child 4
  child 4 -> hub + child 1 + child 3
```

## 9. Content Production Workflow

### 9.1 New game workflow

1. Research the game:
   - official store
   - official site
   - public player questions
   - SERP page type
2. Decide whether the game deserves:
   - hub only
   - 3-5 page mini cluster
   - no launch yet
3. Create local image set
4. Create game data file
5. Create route files
6. Add `/games` card
7. Add sitemap entries
8. Verify rendered HTML
9. Submit sitemap and priority URLs to GSC

### 9.2 Existing page optimization workflow

1. Check GSC data
2. Check live page HTML
3. Check current SERP intent
4. Check official facts
5. Check user task mismatch
6. Decide:
   - rewrite content
   - improve first screen
   - change TDH
   - merge
   - leave alone

## 10. Image Pipeline

### 10.1 Rules

- Download official assets or permitted public materials.
- Convert to WebP.
- Resize to practical widths.
- Keep hero and section images locally.

### 10.2 Suggested sizes

- hero: `1200-1600px`
- body screenshots: `960-1280px`
- cards/capsules: `480-640px`

### 10.3 Tooling

Current practical approach:

- `ffmpeg` for conversion and compression

Recommended later improvement:

- one shared image-sync script per game source type
- manifest output listing local asset paths and source URLs

## 11. Shared Component Rules

### 11.1 Components to keep shared

- breadcrumb
- json-ld helper
- article image
- FAQ section
- related guides block
- generic table/checklist blocks

### 11.2 Components to reduce

Current per-game article components are useful but can become a maintenance burden.  
Long term, reduce duplication by moving repeated patterns into a shared article shell.

### 11.3 Public-safe component policy

Shared content blocks must not expose:

- `verified`
- `working`
- `needs-check`
- `confidence`
- internal research wording

If such logic is useful internally, keep it out of public renderer props.

## 12. Code Quality Rules

### 12.1 Type safety

- keep page data strongly typed
- avoid ad hoc object shapes per page
- prefer shared interfaces in `lib`

### 12.2 Naming

- URL slug and file naming should match
- image key names should be predictable
- use one canonical page label per guide

### 12.3 Absolute ownership

Each new game cluster should clearly own:

- one data file
- one image folder
- route files under one path
- one entry in sitemap logic

## 13. Deployment and Release Plan

### 13.1 Release checklist

Before deploy:

- `npx tsc --noEmit`
- confirm no public-risk words in new pages
- confirm local images exist
- confirm sitemap contains pages
- confirm robots does not block required rendering assets

After deploy:

- fetch live HTML with `curl`
- check 200 status
- check canonical
- check H1 in raw HTML
- check sitemap live output
- request indexing in GSC for hub + top priority child pages

### 13.2 GSC submission order

1. submit sitemap
2. inspect hub page
3. inspect strongest problem page
4. inspect remaining child pages if needed

## 14. Testing Plan

### 14.1 Minimum automated checks

- TypeScript compile
- `rg` scan for banned public phrases
- route existence check
- sitemap inclusion check

### 14.2 Recommended future checks

- HTML snapshot check for title/H1/canonical/schema presence
- robots regression check
- sitemap regression check
- image existence check

### 14.3 Manual checks

- mobile first screen
- desktop first screen
- no overlapping text
- image loads correctly
- table/checklist visible without JS dependency

## 15. Immediate Refactor Priorities

### P0

- Fix `robots.ts` so crawl/render assets are not blocked.
- Standardize schema URLs to absolute URLs.
- Keep all new guide images local.

### P1

- Build a shared `GuideArticleShell`.
- Move new game clusters to a single repeatable page model.
- Reduce custom article duplication where the format is identical.

### P2

- Normalize route structure for outlier pages like top-level one-off game guides.
- Add small QA scripts for HTML/schema/sitemap verification.
- Add a content manifest or registry for all live game clusters.

## 16. Recommended File Ownership Model

For each new game:

- `src/lib/[game].ts`
  - metadata, sections, FAQ, links, image map
- `src/components/[game]-article.tsx`
  - only if game truly needs custom rendering
- `src/app/games/[game]/...`
  - route files
- `public/games/[game]/`
  - local assets

If a game does not need unique rendering, do not create a dedicated component.

## 17. Long-Term Target

The site should evolve toward:

- one consistent game-guide framework
- one consistent SEO framework
- one consistent image pipeline
- one consistent publishing checklist

That gives you:

- faster page launches
- fewer indexing failures
- less drift between content and metadata
- easier maintenance as the site scales

## 18. Execution Order

Recommended order for implementation:

1. fix crawlability foundation
2. standardize page model
3. standardize guide shell
4. standardize image workflow
5. standardize release QA
6. normalize legacy route outliers

## 19. Definition of Done

A game cluster is considered complete only when:

- live page returns 200
- page content is present in raw HTML
- canonical is correct
- schema is present
- local images load
- sitemap includes URLs
- `/games` links to hub
- hub links to children
- child pages link back to hub and siblings
- GSC submission is completed

## 20. Recommended Next Document

After this code plan, the next useful document should be:

- `CONTENT-PUBLISHING-SOP.md`

That SOP should cover:

- research checklist
- page brief template
- banned phrases
- image checklist
- GSC submission checklist
- post-publish monitoring checklist
