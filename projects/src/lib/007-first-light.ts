import type { Metadata } from 'next';
import { firstLight007, type GameGuideLink } from '@/lib/games';

export const firstLightLastModified = '2026-05-26';
export const firstLightSteamUrl = 'https://store.steampowered.com/app/3768760/007_First_Light/';
export const firstLightOfficialUrl = 'https://www.ioi.dk/007-first-light';
export const firstLightPlayStationUrl =
  'https://store.playstation.com/en-us/product/EP3969-PPSA11386_00-007FIRSTLIGHT000';
export const firstLightSupportUrl =
  'https://007firstlight-support.zendesk.com/hc/en-us/articles/36274996432797-007-First-Light-Global-Launch-Times';
export const firstLightLaunchTrailerUrl = 'https://www.youtube.com/watch?v=7wp3CkognPI';
export const firstLightGameplayUrl = 'https://www.youtube.com/watch?v=yEZjDyj_REQ';

export const firstLightImages = {
  hero: '/games/007-first-light/agent-closeup.webp',
  header: '/games/007-first-light/city-stealth.webp',
  background: '/games/007-first-light/action-scene.webp',
  card: '/games/007-first-light/card.webp',
  deluxe: '/games/007-first-light/casino.webp',
};

export const firstLightVideos = [
  {
    id: '7wp3CkognPI',
    title: '007 First Light - Official Launch Trailer',
    caption:
      'Official launch trailer for the May 27 release, young Bond setup, globetrotting missions, driving, stealth, and action tone.',
  },
  {
    id: 'yEZjDyj_REQ',
    title: '007 First Light - First 13 Minutes of Gameplay',
    caption:
      'Official opening gameplay video. It contains early mission spoilers, so use it only if you want to preview the start before playing.',
  },
];

export const firstLightQuickFacts = [
  ['Release date', 'May 27, 2026 on Steam.'],
  ['Verified platforms here', 'PC via Steam and PlayStation 5 via PlayStation Store. Check your regional storefront for local price and unlock timing.'],
  ['Early access', 'Pre-order bonus includes a free Deluxe Edition upgrade with 24-hour early access.'],
  ['Developer / Publisher', 'IO Interactive A/S.'],
  ['Genre', 'Single-player espionage action-adventure with stealth, shooting, driving, gadgets, and cinematic missions.'],
  ['Steam features', 'Single-player and Family Sharing. Steam also lists Denuvo Anti-Tamper and a third-party EULA.'],
  ['Reviews', 'No Steam user reviews are shown before the full release window.'],
  ['Preload', 'Steam page copy does not confirm a universal preload; check your purchased platform library close to unlock.'],
  ['PC storage', '80 GB available space, SSD required.'],
];

export const firstLightTrendRows = [
  ['007 First Light early access', 'Pre-order includes 24-hour early access through the free Deluxe Edition upgrade.'],
  ['007 First Light release time', 'Use the official global launch-time post or your platform countdown for the exact local unlock.'],
  ['007 First Light preload', 'Do not assume preload until the platform library offers it; Steam store copy confirms the release and early-access offer, not a universal preload.'],
  ['007 First Light review embargo', 'Treat embargo timing as separate from user reviews. Wait for published reviews before using scores to decide.'],
  ['007 First Light PS5', 'The PlayStation Store lists 007 First Light as a PS5 pre-order; check your region for local price and unlock timing.'],
  ['007 First Light Australia', 'Australian players should check the local storefront countdown because time zones can shift the visible date or unlock hour.'],
];

export const firstLightReleaseRows = [
  ['Standard release', 'May 27, 2026 on Steam.'],
  ['24-hour early access', 'Included with the free Deluxe Edition upgrade for pre-orders, according to Steam store and Steam news copy.'],
  ['Pre-order bonus', 'Deluxe Edition upgrade with four outfits, Agent’s Mark weapon skin, and four Gleaming gadget skins.'],
  ['Preload', 'Not universally confirmed in Steam page copy; check your Steam or PS5 library status after purchase.'],
  ['Review timing', 'No Steam user reviews before full release; critic review timing should be checked when embargo coverage appears.'],
  ['Australia / time zones', 'Use the platform countdown rather than only the calendar date, because local storefront timing can differ by region.'],
];

export const firstLightSpecRows = [
  ['OS', 'Microsoft Windows 10/11, 64-bit', 'Microsoft Windows 10/11, 64-bit'],
  ['Processor', 'Intel Core i5-9500 / AMD Ryzen 5 3500', 'Intel Core i5-13500 / AMD Ryzen 5 7600'],
  ['Memory', '16 GB RAM', '16 GB RAM'],
  ['Graphics', 'NVIDIA GeForce GTX 1660 / AMD RX 5700 / Intel discrete GPU equivalent', 'NVIDIA GeForce RTX 3060 Ti / AMD RX 6700 XT / Intel discrete GPU equivalent'],
  ['Storage', '80 GB available space; SSD required', '80 GB available space; SSD required'],
  ['PC feature note', 'Steam news lists uncapped framerate and DLSS 4.5 Super Resolution / DLSS Dynamic Multi Frame Generation at launch.', 'Path tracing and DLSS Ray Reconstruction are described as arriving in Summer 2026.'],
];

export const firstLightBeginnerRows = [
  ['Start quiet, then escalate', 'The store describes silent and loud approaches. Try stealth, gadgets, and bluffing before turning every encounter into a firefight.'],
  ['Use gadgets as access tools', 'Gadgets are not only combat toys. Treat them as ways to infiltrate, distract, bypass, or create safer entries.'],
  ['Respect firearms noise', 'If an encounter can be solved quietly, save gunfire for failed stealth, forced combat, or open action sequences.'],
  ['Watch mission modifiers', 'Steam describes replaying favorite missions with additional modifiers, so record which route you used the first time.'],
  ['Expect driving segments', 'The official copy highlights iconic vehicles. Learn mission pacing before assuming every level is pure stealth.'],
  ['Avoid opening spoilers', 'The official first 13 minutes video is useful, but it shows the opening mission. Skip it if you want a blind start.'],
];

export const firstLightReviewRows = [
  ['Buy early if', 'You want an IO Interactive Bond origin story and are comfortable playing before full user-review consensus.'],
  ['Wait if', 'You need critic reviews, Steam user reviews, PC performance proof, Denuvo comfort, or console-specific reports.'],
  ['Review embargo', 'Use published critic reviews only after they appear. Do not treat trailer footage or early-access access as a review score.'],
  ['Steam user reviews', 'Steam showed no user reviews before the full release window; check again after standard launch access opens.'],
  ['Best fit', 'Players who like cinematic stealth-action, mission replay, gadgets, disguising or bluffing routes, driving, and third-person action.'],
  ['Poor fit', 'Players looking for co-op, multiplayer, a pure Hitman-style sandbox, or a fully reviewed post-launch consensus on day one.'],
];

export const firstLightSourceRows = [
  {
    claim: 'Steam lists 007 First Light for May 27, 2026 with IO Interactive as developer and publisher.',
    source: 'Steam store',
    status: 'verified' as const,
    href: firstLightSteamUrl,
    note: 'Use for release date, Steam feature labels, system requirements, Denuvo, EULA, language support, and PC purchase state.',
  },
  {
    claim: 'Pre-orders include a free Deluxe Edition upgrade with 24-hour early access.',
    source: 'Steam store and Steam news copy',
    status: 'verified' as const,
    href: firstLightSteamUrl,
    note: 'Use for early access and pre-order bonus wording. Do not expand it into unsupported platform-specific claims.',
  },
  {
    claim: 'Global launch times are handled by the official support page.',
    source: '007 First Light support',
    status: 'working' as const,
    href: firstLightSupportUrl,
    note: 'Use for exact local unlock timing when accessible; otherwise tell players to check their platform countdown.',
  },
  {
    claim: 'The PlayStation Store lists 007 First Light as a PS5 pre-order.',
    source: 'PlayStation Store',
    status: 'verified' as const,
    href: firstLightPlayStationUrl,
    note: 'Use for PS5 availability and regional price checks. Do not infer Xbox or Switch status from the PS listing.',
  },
  {
    claim: 'The official launch trailer frames the May 27 release and the young Bond origin story.',
    source: 'Official YouTube launch trailer',
    status: 'verified' as const,
    href: firstLightLaunchTrailerUrl,
    note: 'Use for visual context and tone, not review conclusions.',
  },
  {
    claim: 'The official first 13 minutes video shows opening gameplay and includes spoilers.',
    source: 'Official YouTube gameplay video',
    status: 'verified' as const,
    href: firstLightGameplayUrl,
    note: 'Use for opening gameplay context while warning players who want a blind start.',
  },
];

export const firstLightRelatedGuides: GameGuideLink[] = [
  {
    title: '007 First Light Guide Hub',
    href: firstLight007.hubPath,
    description:
      'Start here for release timing, early access, preload checks, reviews, PC specs, and spoiler-light beginner guidance.',
  },
  ...firstLight007.guideLinks,
];

export function getFirstLightRelated(excludeHref: string) {
  return firstLightRelatedGuides.filter((guide) => guide.href !== excludeHref).slice(0, 6);
}

const firstLightKeywords = [
  '007 First Light',
  '007 First Light early access',
  '007 First Light release date',
  '007 First Light release time',
  '007 First Light preload',
  '007 First Light review embargo',
  'James Bond First Light',
];

export function createFirstLightMetadata({
  title,
  description,
  canonical,
  image = firstLightImages.hero,
}: {
  title: string;
  description: string;
  canonical: string;
  image?: string;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: firstLightKeywords,
    authors: [{ name: 'Enjoy4Game Guides' }],
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [image],
      type: 'article',
      siteName: 'Enjoy4Game Guides',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}
