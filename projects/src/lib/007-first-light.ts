import type { Metadata } from 'next';
import { firstLight007, type GameGuideLink } from '@/lib/games';

export const firstLightLastModified = '2026-05-27';
export const firstLightSteamUrl = 'https://store.steampowered.com/app/3768760/007_First_Light/';
export const firstLightOfficialUrl = 'https://www.ioi.dk/007-first-light';
export const firstLightPlayStationUrl =
  'https://store.playstation.com/en-us/product/EP3969-PPSA11386_00-007FIRSTLIGHT000';
export const firstLightSupportUrl =
  'https://007firstlight-support.zendesk.com/hc/en-us/articles/36274996432797-007-First-Light-Global-Launch-Times';
export const firstLightLaunchTrailerUrl = 'https://www.youtube.com/watch?v=7wp3CkognPI';
export const firstLightGameplayUrl = 'https://www.youtube.com/watch?v=yEZjDyj_REQ';
export const firstLightRedditReviewUrl =
  'https://www.reddit.com/r/pcgaming/comments/1to4vju/007_first_light_review_thread/';
export const firstLightRedditPreloadUrl =
  'https://www.reddit.com/r/Games/comments/1tncd3e/007_first_light_will_not_have_a_preload_on_steam/';
export const firstLightSteamDeckHQUrl =
  'https://steamdeckhq.com/news/007-first-light-steam-deck-first-impressions/';
export const firstLightTechPowerUpUrl =
  'https://www.techpowerup.com/review/007-first-light-performance-benchmark/';

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
  ['Early access', 'Pre-order access was listed as a 24-hour Deluxe Edition upgrade before standard launch.'],
  ['Developer / Publisher', 'IO Interactive A/S.'],
  ['Genre', 'Single-player espionage action-adventure with stealth, shooting, driving, gadgets, and cinematic missions.'],
  ['Steam features', 'Single-player and Family Sharing. Steam also lists Denuvo Anti-Tamper and a third-party EULA.'],
  ['Reviews', 'Review coverage should now be checked directly on current critic pages and Steam.'],
  ['Preload', 'Steam page copy does not confirm a universal preload; check your purchased platform library close to unlock.'],
  ['Steam Deck', 'No Steam Deck Verified label is confirmed in this guide. Treat handheld performance as player-report dependent.'],
  ['PC storage', '80 GB available space, SSD required.'],
];

export const firstLightTrendRows = [
  ['007 First Light review embargo', 'Review intent is the strongest current search signal. Check the review page first for embargo, reviews, Denuvo, Steam reviews, and buy-or-wait guidance.'],
  ['007 First Light early access', 'Pre-order access was tied to the 24-hour Deluxe Edition upgrade; standard launch is May 27, 2026.'],
  ['007 First Light release time', 'Use the official global launch-time post or your platform countdown for the exact local unlock.'],
  ['007 First Light preload', 'Do not assume preload until the platform library offers it; Steam store copy confirms the release and early-access offer, not a universal preload.'],
  ['007 First Light Steam Deck', 'Treat Steam Deck support as unverified unless Steam or strong player reports confirm the handheld experience.'],
  ['007 First Light Denuvo', 'Steam lists Denuvo Anti-Tamper and a third-party EULA, so PC buyers should factor DRM into the purchase decision.'],
  ['007 First Light PS5', 'The PlayStation Store lists 007 First Light for PS5; check your region for price and local unlock timing.'],
  ['007 First Light Australia', 'Australian players should check the local storefront countdown because time zones can shift the visible date or unlock hour.'],
];

export const firstLightReleaseRows = [
  ['Standard release', 'May 27, 2026 on Steam.'],
  ['24-hour early access', 'Listed as part of the free Deluxe Edition upgrade for pre-orders before standard launch.'],
  ['Deluxe bonus', "Four outfits, Agent's Mark weapon skin, and four Gleaming gadget skins."],
  ['Preload', 'Not universally confirmed in Steam page copy; check your Steam or PS5 library status after purchase.'],
  ['Review timing', 'Review coverage should be checked on current critic pages and Steam after the May 27 launch window.'],
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
  ['Review embargo', 'Treat the embargo question as time-sensitive. After reviews publish, use current critic reviews and Steam user reviews instead of older countdown wording.'],
  ['Buy now if', 'You want an IO Interactive Bond origin story and current reviews confirm the mission design, stealth, driving, and PC performance match your expectations.'],
  ['Wait if', 'You need broader Steam user reviews, console-specific reports, Steam Deck proof, PC performance proof, or more comfort with Denuvo.'],
  ['Steam user reviews', 'Check Steam after launch access opens because user review volume can change quickly during the first 24-72 hours.'],
  ['Steam Deck', 'Wait for a Steam Deck rating or strong player reports before treating handheld play as safe.'],
  ['Denuvo', 'Steam lists Denuvo Anti-Tamper and a third-party EULA, which matters for PC buyers who avoid DRM.'],
  ['Best fit', 'Players who like cinematic stealth-action, mission replay, gadgets, disguising or bluffing routes, driving, and third-person action.'],
  ['Poor fit', 'Players looking for co-op, multiplayer, a pure Hitman-style sandbox, or a fully reviewed post-launch consensus on day one.'],
];

export const firstLightPlayerConcernRows = [
  ['Review embargo / reviews', 'Check whether current critic reviews and Steam user reviews are live before using older embargo countdown posts.'],
  ['No preload', 'Community discussion is focused on Steam and Xbox preload limits, while PlayStation preload appears to be the safer platform path.'],
  ['Denuvo', 'Steam lists Denuvo Anti-Tamper, and PC players are asking whether DRM affects performance, offline comfort, or Steam Deck use.'],
  ['PC performance', 'Early benchmark and player-report demand is about frame pacing, DLSS/FSR behavior, CPU limits, and whether the listed specs match real play.'],
  ['Steam Deck', 'Early handheld reports are promising but settings-dependent, so Deck players should wait for settings guidance or test within refund limits.'],
  ['PS5 / PS5 Pro', 'Console players are comparing base PS5 image quality, performance mode, and PS5 Pro sharpness rather than only asking whether PS5 exists.'],
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
    claim: 'Pre-orders included a free Deluxe Edition upgrade with 24-hour early access before standard launch.',
    source: 'Steam store and Steam news copy',
    status: 'verified' as const,
    href: firstLightSteamUrl,
    note: 'Use for early access and Deluxe bonus wording. Do not expand it into unsupported platform-specific claims.',
  },
  {
    claim: 'Global launch times are handled by the official support page.',
    source: '007 First Light support',
    status: 'working' as const,
    href: firstLightSupportUrl,
    note: 'Use for exact local unlock timing when accessible; otherwise tell players to check their platform countdown.',
  },
  {
    claim: 'The PlayStation Store lists 007 First Light for PS5.',
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
  {
    claim: 'Players are discussing review scores, PC performance, Denuvo, and Steam user-review timing after launch.',
    source: 'Reddit review thread',
    status: 'working' as const,
    href: firstLightRedditReviewUrl,
    note: 'Use as a demand signal for what players are checking, not as final proof of quality or performance.',
  },
  {
    claim: 'Players are asking about no preload on Steam and Xbox, and how that affects early access value.',
    source: 'Reddit preload discussion',
    status: 'working' as const,
    href: firstLightRedditPreloadUrl,
    note: 'Use as a community concern. For final preload status, players should still check their platform library.',
  },
  {
    claim: 'Steam Deck interest is active, with early reports depending heavily on low settings and upscaling.',
    source: 'Steam Deck HQ first impressions',
    status: 'working' as const,
    href: firstLightSteamDeckHQUrl,
    note: 'Use for player-facing handheld caution until Steam shows a rating or broader settings reports settle.',
  },
  {
    claim: 'PC players are looking for benchmark evidence beyond the official requirement table.',
    source: 'TechPowerUp benchmark review',
    status: 'working' as const,
    href: firstLightTechPowerUpUrl,
    note: 'Use as a performance reference, while keeping hardware-specific claims tied to the benchmark source.',
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
