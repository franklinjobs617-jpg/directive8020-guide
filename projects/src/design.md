下面把 Dribbble 风格参考中的 **字体部分直接替换成 Notion 的字体系统**，其他内容（颜色、间距、组件等）保持原样，只改字体相关的 token 和说明，得到一份完整的“带 Notion 字体的 Dribbble Style Reference”：

***

# Dribbble — Style Reference (with Notion Typography)
> gallery wall at design week — a quiet white room where one magenta spotlight circles each piece

**Theme:** light  

Dribbble reads as a curated gallery wall for creative work: white canvas, near-black typography, and one unmistakable magenta accent that marks every brand moment. The system is compact and image-first — large rounded thumbnails fill a 4-column grid while chrome stays minimal and quiet. Dark solid buttons with 8px radii carry primary actions, while the pink appears as small functional punctuation for search, PRO badges, and highlights rather than flooding large surfaces. Typography uses **Notion Inter** at relatively tight line heights, producing a dense scannable rhythm that lets the submitted work carry the visual weight.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Dribbble Pink | `#ea4c89` | `--color-dribbble-pink` | Brand signature accent — search submit button, PRO badge, logo mark, active heart, hover pulses — one vivid magenta against the monochrome canvas makes the brand unmistakable at any size |
| Midnight Ink | `#0d0c22` | `--color-midnight-ink` | Primary text, filled primary buttons, dark surface fills, icon strokes — a near-black with a cool blue undertone that reads warmer than pure black against white |
| Deep Plum | `#060318` | `--color-deep-plum` | Navigation bar fill, darkest text tokens, logo wordmark — slightly cooler and deeper than Midnight Ink for the fixed header band |
| Charcoal Plum | `#3d3d4e` | `--color-charcoal-plum` | Supporting neutral for secondary UI, dividers, and muted labels. Do not promote it to the primary CTA color |
| Smoke | `#6e6d7a` | `--color-smoke` | Secondary/muted body text, helper labels, view-count and heart-count numbers — carries the dense meta layer beneath thumbnails |
| Fog | `#9e9ea7` | `--color-fog` | Tertiary text, placeholder text, disabled icons, checkbox idle state — the lightest readable neutral |
| Mist | `#f3f3f6` | `--color-mist` | Soft surface fill, input field backgrounds, hover wells, secondary panels — the only off-white surface that sits above the page canvas |
| Frost Border | `#e2e8f2` | `--color-frost-border` | Hairline borders, divider lines, input outlines, card edges on hover — a cool-tinted off-white that reads as a boundary, not a fill |
| Muted Plum | `#524b63` | `--color-muted-plum` | Lower-emphasis dark text, link hover in dense lists, designer name secondary line — a washed dark for tertiary copy on white |
| Slate Edge | `#3a3546` | `--color-slate-edge` | Faint dark surfaces, tag backgrounds, low-key dark UI wells — bridges the gap between the deep nav black and the lighter grays |
| Paper | `#ffffff` | `--color-paper` | Page canvas, card surfaces, button text on dark fills, input text — the dominant surface of the entire product |

## Tokens — Typography (Notion)

### Notion Inter — Primary interface and heading family — the only sans used across the entire product surface, from 12px helper text to 64px hero headlines. Tabular lining numerals and localized forms are always on. Weight 600–700 carries headings and button labels; weight 400 carries body and descriptions. · `--font-notion-inter`

- **Substitute:** Inter  
- **Weights:** 400, 500, 600, 700  
- **Sizes:** 12, 14, 15, 16, 20, 22, 24, 26, 40, 42, 54, 64  
- **Line height:** 1.14–1.50 (UI), 1.20 (headings), 1.04–1.14 (display)  
- **Letter spacing:**  
  - -0.0360em at 64px  
  - -0.0350em at 54px  
  - -0.0330em at 42px  
  - -0.0240em at 40px  
  - -0.0110em at 26px  
  - -0.0060em at 24px  
  - 0.0100em at 12px  
- **OpenType features:** `"lnum" 0, "locl" 0`  
- **Role:** Primary interface and heading family — the only sans used across the entire product surface, from 12px helper text to 64px hero headlines. Tabular lining numerals and localized forms are always on. Weight 600–700 carries headings and button labels; weight 400 carries body and descriptions.

### Lyon Text — Sparingly used editorial serif at 32px for moments that need a magazine-cover feel — never repeated in dense UI. Its appearance is a deliberate counterpoint to the otherwise all-sans system. · `--font-lyon-text`

- **Substitute:** Source Serif Pro  
- **Weights:** 400  
- **Sizes:** 32  
- **Line height:** 1.25  
- **Role:** Sparingly used editorial serif at 32px for moments that need a magazine-cover feel — never repeated in dense UI. Its appearance is a deliberate counterpoint to the otherwise all-sans system.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.33 | 0.12px | `--text-caption` |
| body-sm | 14px | 1.43 | — | `--text-body-sm` |
| body | 16px | 1.5 | — | `--text-body` |
| subheading | 20px | 1.4 | -0.22px | `--text-subheading` |
| heading-sm | 24px | 1.27 | -0.14px | `--text-heading-sm` |
| heading | 26px | 1.23 | -0.29px | `--text-heading` |
| heading-lg | 42px | 1.14 | -1.39px | `--text-heading-lg` |
| display | 64px | 1.04 | -2.3px | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 4px  

**Density:** compact  

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 36 | 36px | `--spacing-36` |
| 40 | 40px | `--spacing-40` |
| 44 | 44px | `--spacing-44` |
| 72 | 72px | `--spacing-72` |
| 220 | 220px | `--spacing-220` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 8px |
| badges | 12px |
| inputs | 12px |
| buttons | 8px |
| thumbnails | 8px |
| hero-feature | 16px |

### Layout

- **Page max-width:** 1280px  
- **Section gap:** 40px  
- **Card padding:** 12px  
- **Element gap:** 8px  

## Components

### Filled Dark CTA
**Role:** Primary action button (Log in, Sign up, Start a Project Brief)  

Midnight Ink (#0d0c22) fill, white text, **Notion Inter** 14px weight **600**, 8px radius, 10px 18px padding. No shadow. Becomes the visual anchor on the page — high contrast, compact, never decorative.

### Ghost Navigation Button
**Role:** Secondary text link in the nav band  

No fill, no border, white text at **Notion Inter** 14px weight **500** on the Deep Plum (#060318) nav. Hover adds a subtle white-alpha wash. Padding 8px horizontal. A small 4px-tall chevron pairs with dropdown triggers.

### Dribbble Pink Search Submit
**Role:** Search action button — the only persistent pink element on most pages  

Dribbble Pink (#ea4c89) fill, white magnifier icon, 8px right-side radius anchoring the search input. Sits flush against the Mist (#f3f3f6) input field. 12px radius on the right edge where it meets the input.

### Search Input
**Role:** Primary search field in the hero  

Mist (#f3f3f6) fill, no visible border, Frost Border (#e2e8f2) on focus, Smoke (#6e6d7a) placeholder, **Notion Inter** 14px. Pill-shaped with 12px radius on the left, flush with the pink submit on the right. Height ~44px.

### Category Pill
**Role:** Popular-tag filter chip below the search bar  

White fill, Frost Border (#e2e8f2) 1px border, Smoke (#6e6d7a) text, 9999px radius, 6px 14px padding, **Notion Inter** 13px weight **500**. The 'Popular:' lead-in label is bold Midnight Ink. Hover darkens text to Midnight Ink.

### Filter Tab
**Role:** Category navigation in the content band (Discover, Animation, Branding, etc.)  

No fill or border by default. **Notion Inter** 14px weight **500**, Smoke text. Active tab adds a 2px Midnight Ink underline and shifts text to Midnight Ink. Spacing: 16px horizontal padding between tabs.

### Filter Dropdown Trigger
**Role:** 'Popular' and 'Filters' selectors  

White fill, Frost Border (#e2e8f2) 1px border, 8px radius, **Notion Inter** 14px weight **500**, Midnight Ink text. Right-aligned chevron at Fog (#9e9ea7). Padding 8px 12px.

### Shot Thumbnail Card
**Role:** Single piece of design work in the discovery grid  

8px radius around the image itself (no card chrome — the image IS the card). Image fills a 1:1-ish aspect container. Meta block below the image: 12px gap. Designer avatar 24px circle, name in **Notion Inter** 13px weight **600** Midnight Ink, PRO badge 11px pill in pink, heart icon + count in Smoke, view count in Smoke.

### PRO Badge
**Role:** Marks paying/designer-tier accounts next to usernames  

Dribbble Pink (#ea4c89) fill, white 'PRO' text, 4px radius, 2px 6px padding, **Notion Inter** 9px weight **700** uppercase. Sits inline with the designer name in a 12px tag list.

### Hero Showcase Device
**Role:** Large featured-work frame in the hero column  

Dark device frame around a 16:9 design composition, 16px outer radius, Midnight Ink (#0d0c22) frame fill. Holds the rotating featured work with a QClay attribution strip below in a white pill, 12px radius, **Notion Inter** 11px.

### Start a Project Brief Card
**Role:** Inline call-to-action band between hero and grid  

Full-width row, no fill (transparent on the white canvas), separated by 1px Frost Border dividers above and below. Left: outlined 'Start a Project Brief' button (Midnight Ink border, Midnight Ink text, 8px radius). Right: descriptive **Notion Inter** 14px Smoke text.

### Top Navigation Bar
**Role:** Fixed dark band at the top of every page  

Deep Plum (#060318) fill, 64px tall. Left: white Dribbble wordmark. Center: dropdowns (Explore, Hire Talent, Get Hired, Community) in **Notion Inter** 14px weight **500** white. Right: 'Sign up' ghost link, 'Log in' filled Midnight Ink button. Bottom border: none, but the contrast against the white canvas does the work.

### Bottom Promo Banner
**Role:** Persistent dark call-to-action strip at the page foot  

Full-width Deep Plum (#060318) fill, ~56px tall. White **Notion Inter** 13px text. Right-side CTA: white-fill button with Midnight Ink text, 8px radius. Used for feature announcements (Dribbble Select, year-end lists).

## Do's and Don'ts

### Do
- Use #ea4c89 only for brand-anchored moments: search submit, PRO badge, logo mark, heart-fill, and one-per-page highlight. Never paint a large surface pink.
- Set filled primary buttons to #0d0c22 fill, white text, 8px radius, 10px 18px padding, **Notion Inter** 14px weight **600**.
- Build the navigation as a 64px tall #060318 band with white text in **Notion Inter** 14px weight **500** — never add a shadow or border beneath it.
- Use **Notion Inter** at **48px** (or closest from Notion scale: **42px / 64px**) weight **700** with line-height **1.08–1.14** for hero headlines; let the work below it provide the visual weight.
- Keep the 4-column thumbnail grid on a pure white canvas with 8px image radius and 12px meta gap — no card backgrounds, no shadows, no dividers between tiles.
- Render the PRO badge as #ea4c89 fill, white text, 4px radius, **Notion Inter** 9px weight **700** uppercase, inline with the designer name.
- Maintain 40px between content bands and 8px between meta items in the shot card — the rhythm should feel dense but breathable.

### Don't
- Don't use #ea4c89 for body text, icons, borders, or large fills — it loses its meaning when overused.
- Don't add drop shadows to cards, buttons, or the navigation — the system relies on color contrast and 8px radii for hierarchy.
- Don't use any color other than Midnight Ink or Deep Plum for filled dark buttons — avoid #3d3d4 for primary CTAs.
- Don't apply radii above 16px to standard UI — thumbnails are 8px, hero frames are 16px, and anything rounder reads as wrong.
- Don't introduce a second accent color — the palette is monochrome plus one magenta, and a second accent will dilute the brand signal.
- Don't set body copy below 12px or above 16px — the system compresses information at 13–14px and reserves 48px for the hero only.
- Don't decorate the dark navigation with gradients, glows, or transparency — keep it a flat #060318 band.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#ffffff` | Page background, thumbnail wells, dominant product surface |
| 1 | Soft Surface | `#f3f3f6` | Input fields, hover wells, search bar fill, subtle panel separation |
| 2 | Hairline Edge | `#e2e8f2` | Borders and dividers that read as boundaries, not as fills |
| 3 | Mid Dark | `#3d3d4e` | Secondary button fills, dark meta badges |
| 4 | Top Bar | `#060318` | Fixed navigation band, primary dark CTA fills, deepest surface |

## Elevation

- **Navigation bar:** `none — dark fill separates it from the white canvas without any shadow`  
- **Shot thumbnails:** `none — content is the surface, no card elevation`  
- **Buttons:** `none — contrast and weight carry hierarchy`  

## Imagery

The site is image-first by definition: every primary content unit is a user-uploaded design thumbnail filling an 8px-radius container. The product itself uses almost no decorative imagery — the hero pairs text with a single dark device frame showing a featured work, and the rest of the page is the community's work. No lifestyle photography, no illustrations, no abstract graphics. Icons are simple monochrome line glyphs in Fog (#9e9ea7) or Midnight Ink at 1.5–2px stroke weight. Avatars are 24px circles with no border. The visual hierarchy is: submitted work > brand pink > everything else recedes.

## Layout

Fixed dark top navigation (64px) spans full width. Below: max-width ~1280px centered content. Hero is a 2-column split — left half holds a **42px–64px** headline (**Notion Inter** weight 700), search input with pink submit, category pills, and the Start a Project Brief inline CTA; right half shows a 16:9 dark device frame with the featured work. Beneath the hero: a horizontal filter tab strip (Discover, Animation, Branding, Illustration, Mobile, Print, Product Design, Typography, Web) with 'Filters' dropdown pinned right. Main content is a 4-column responsive grid of shot thumbnails, each with a tight meta row below. A full-width dark promo banner anchors the page foot. Cards have no visible chrome — the work is the card.

## Agent Prompt Guide

**Quick Color Reference**
- text: #0d0c22 (primary), #6e6d7a (secondary), #9e9ea7 (tertiary)  
- background: #ffffff (canvas), #f3f3f6 (soft surface)  
- border: #e2e8f2 (hairline), #060318 (dark edge)  
- accent: #ea4c89 (Dribbble Pink — brand signature)  
- primary action: no distinct CTA color  

**Example Component Prompts**

1. *Hero headline block*: White background. **42px–64px Notion Inter** weight 700, #0d0c22, line-height **1.04–1.14**. Body subtext at 16px **Notion Inter** weight 400, #6e6d7a. Search field: #f3f3f6 fill, 12px radius, **Notion Inter** 14px placeholder in #9e9ea7, pink (#ea4c89) submit button anchored to the right with 8px radius on the right edge.

2. *Shot thumbnail card*: 8px radius image filling a 1:1-ish container on white. Below: 24px circle avatar, designer name at **Notion Inter** 13px weight **600** in #0d0c22, pink (#ea4c89) PRO badge (4px radius, **Notion Inter** 9px weight 700 uppercase white), heart icon + count at **Notion Inter** 13px in #6e6d7a.

3. *Category filter pill*: 9999px radius, 1px #e2e8f2 border, white fill, **Notion Inter** 13px weight **500** in #6e6d7a, 6px 14px padding. Hover shifts text to #0d0c22.

4. *Top navigation bar*: 64px tall, #060318 fill spanning full width. Dribbble wordmark in white **Notion Inter** 18px weight **700** at left. Nav links in **Notion Inter** 14px weight **500** white, 24px gaps. Right side: 'Sign up' ghost link, 'Log in' filled #0d0c22 button (8px radius, 10px 18px padding, white text).

5. *PRO badge*: #ea4c89 fill, white 'PRO' text, **Notion Inter** 9px weight 700 uppercase, 4px radius, 2px 6px padding — always inline with a username, never standalone.

## Similar Brands

- **Behance** — Same gallery-grid layout for creative work with a single brand accent (Behance blue) against a near-monochrome palette and tight meta rows  
- **Pinterest** — Same image-first masonry approach where the submitted content carries the visual weight and the chrome stays near-white with small accent punctuation  
- **Readymag** — Same near-black/white palette with one vivid brand color and compact 4px-based spacing — both treat the work as the hero and keep UI chrome quiet  
- **Cargo** — Same portfolio-first gallery approach with rounded 8px thumbnails and a flat dark navigation band, though Cargo trends more editorial  
- **Are.na** — Same restraint — the content blocks are the design, and the surrounding chrome is almost invisible, with category navigation done as quiet text tabs  

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-dribbble-pink: #ea4c89;
  --color-midnight-ink: #0d0c22;
  --color-deep-plum: #060318;
  --color-charcoal-plum: #3d3d4e;
  --color-smoke: #6e6d7a;
  --color-fog: #9e9ea7;
  --color-mist: #f3f3f6;
  --color-frost-border: #e2e8f2;
  --color-muted-plum: #524b4e;
  --color-slate-edge: #3a3546;
  --color-paper: #ffffff;

  /* Typography — Font Families (Notion) */
  --font-notion-inter: 'Notion Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-lyon-text: 'Lyon Text', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale (Notion) */
  --text-caption: 12px;
  --leading-caption: 1.33;
  --tracking-caption: 0.12px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.22px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.27;
  --tracking-heading-sm: -0.14px;
  --text-heading: 26px;
  --leading-heading: 1.23;
  --tracking-heading: -0.29px;
  --text-heading-lg: 42px;
  --leading-heading-lg: 1.14;
  --tracking-heading-lg: -1.39px;
  --text-display: 64px;
  --leading-display: 1.04;
  --tracking-display: -2.3px;

  /* Typography — Weights (Notion) */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-72: 72px;
  --spacing-220: 220px;

  /* Layout */
  --page-max-width: 1280px;
  --section-gap: 40px;
  --card-padding: 12px;
  --element-gap: 8px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;

  /* Named Radii */
  --radius-cards: 8px;
  --radius-badges: 12px;
  --radius-inputs: 12px;
  --radius-buttons: 8px;
  --radius-thumbnails: 8px;
  --radius-hero-feature: 16px;

  /* Surfaces */
  --surface-canvas: #ffffff;
  --surface-soft-surface: #f3f3f6;
  --surface-hairline-edge: #e2e8f2;
  --surface-mid-dark: #3d3d4e;
  --surface-top-bar: #060318;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-dribbble-pink: #ea4c89;
  --color-midnight-ink: #0d0c22;
  --color-deep-plum: #060318;
  --color-charcoal-plum: #3d3d4e;
  --color-smoke: #6e6d7a;
  --color-fog: #9e9ea7;
  --color-mist: #f3f3f6;
  --color-frost-border: #e2e8f2;
  --color-muted-plum: #524b63;
  --color-slate-edge: #3a3546;
  --color-paper: #ffffff;

  /* Typography (Notion) */
  --font-notion-inter: 'Notion Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-lyon-text: 'Lyon Text', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale (Notion) */
  --text-caption: 12px;
  --leading-caption: 1.33;
  --tracking-caption: 0.12px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.22px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.27;
  --tracking-heading-sm: -0.14px;
  --text-heading: 26px;
  --leading-heading: 1.23;
  --tracking-heading: -0.29px;
  --text-heading-lg: 42px;
  --leading-heading-lg: 1.14;
  --tracking-heading-lg: -1.39px;
  --text-display: 64px;
  --leading-display: 1.04;
  --tracking-display: -2.3px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-72: 72px;
  --spacing-220: 220px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;
}
```