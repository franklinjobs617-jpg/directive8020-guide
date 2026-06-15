import type { MetadataRoute } from 'next';
import {
 projectMist,
 thickAsThieves,
 zeroParades,
 mechanicusII,
 romestead,
 paralives,
 minaTheHollower,
 firstLight007,
 jumpKingQuest,
 starminer,
 fatekeeper,
 enginefall,
 voidlingBound,
 lunaAbyss,
 sellLemons,
 fearsToFathom,
 type GameConfig,
} from '@/lib/games';
import { voidlingEntries } from '@/lib/voidling-bound';

const BASE_URL = 'https://enjoy4game.com';

function gameSubPages(
 game: GameConfig,
 priorityBase = 0.68,
 lastModified = '2026-06-03',
): MetadataRoute.Sitemap {
 return game.guideLinks.map((link) => ({
 url: `${BASE_URL}${link.href}`,
 lastModified,
 changeFrequency: 'weekly' as const,
 priority: priorityBase,
 }));
}

export default function sitemap(): MetadataRoute.Sitemap {
 const today = '2026-06-03';

 const staticPages: MetadataRoute.Sitemap = [
 { url: BASE_URL, lastModified: today, changeFrequency: 'daily', priority: 1.0 },
 { url: `${BASE_URL}/guides`, lastModified: today, changeFrequency: 'daily', priority: 0.9 },
 { url: `${BASE_URL}/games`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
 { url: `${BASE_URL}/steam-deck`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
 { url: `${BASE_URL}/about`, lastModified: today, changeFrequency: 'monthly', priority: 0.4 },
 { url: `${BASE_URL}/privacy-policy`, lastModified: today, changeFrequency: 'yearly', priority: 0.3 },
 { url: `${BASE_URL}/terms-of-use`, lastModified: today, changeFrequency: 'yearly', priority: 0.3 },
 { url: `${BASE_URL}/copyright-infringement`, lastModified: today, changeFrequency: 'yearly', priority: 0.3 },
 ];

 // Directive 8020 pages (root-level, not under /games/)
 const d8020Pages: MetadataRoute.Sitemap = [
 { url: `${BASE_URL}/directive-8020-overview`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
 { url: `${BASE_URL}/directive-8020-system-requirements`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
 { url: `${BASE_URL}/directive-8020-release-time`, lastModified: today, changeFrequency: 'monthly', priority: 0.9 },
 { url: `${BASE_URL}/directive-8020-characters`, lastModified: today, changeFrequency: 'weekly', priority: 0.7 },
 { url: `${BASE_URL}/directive-8020-cast-actors`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
 { url: `${BASE_URL}/directive-8020-review`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
 { url: `${BASE_URL}/directive-8020-beginner-tips`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
 { url: `${BASE_URL}/directive-8020-turning-points-story-tree`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
 { url: `${BASE_URL}/directive-8020-movie-night-multiplayer`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
 { url: `${BASE_URL}/directive-8020-deluxe-edition`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
 { url: `${BASE_URL}/directive-8020-steam-deck`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
 { url: `${BASE_URL}/directive-8020-community-questions`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
 { url: `${BASE_URL}/directive-8020-death-scenes-guide`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
 { url: `${BASE_URL}/directive-8020-stealth-guide`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
 { url: `${BASE_URL}/directive-8020-collectibles-heirlooms`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
 { url: `${BASE_URL}/directive-8020-o-death-secrets-curator`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
 { url: `${BASE_URL}/directive-8020-crashing-fix`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
 { url: `${BASE_URL}/directive-8020-all-endings`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
 { url: `${BASE_URL}/directive-8020-cycle-13-explained`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
 { url: `${BASE_URL}/directive-8020-how-long-to-beat`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
 { url: `${BASE_URL}/directive-8020-how-to-save-everyone`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
 { url: `${BASE_URL}/directive-8020-choices-consequences`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
 { url: `${BASE_URL}/directive-8020-mimic-detection-survival-guide`, lastModified: today, changeFrequency: 'weekly', priority: 0.88 },
 { url: `${BASE_URL}/directive-8020-trophy-guide`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
 { url: `${BASE_URL}/directive-8020-trophy-list`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
 { url: `${BASE_URL}/directive-8020-walkthrough`, lastModified: today, changeFrequency: 'daily', priority: 0.9 },
 { url: `${BASE_URL}/directive-8020-little-star-walkthrough`, lastModified: today, changeFrequency: 'weekly', priority: 0.82 },
 { url: `${BASE_URL}/directive-8020-best-laid-plans-walkthrough`, lastModified: today, changeFrequency: 'weekly', priority: 0.82 },
 { url: `${BASE_URL}/directive-8020-the-sample-walkthrough`, lastModified: today, changeFrequency: 'weekly', priority: 0.82 },
 { url: `${BASE_URL}/directive-8020-dragnet-walkthrough`, lastModified: today, changeFrequency: 'weekly', priority: 0.82 },
 { url: `${BASE_URL}/directive-8020-mr-williams-walkthrough`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
 { url: `${BASE_URL}/directive-8020-hostile-takeover-walkthrough`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
 { url: `${BASE_URL}/directive-8020-revelation-walkthrough`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
 { url: `${BASE_URL}/directive-8020-come-true-walkthrough`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
 ];

 // Game hub pages
 const gameHubs: MetadataRoute.Sitemap = [
 projectMist, thickAsThieves, zeroParades, mechanicusII, romestead,
 paralives, minaTheHollower, firstLight007, jumpKingQuest, starminer,
 fatekeeper, enginefall, voidlingBound, lunaAbyss, sellLemons, fearsToFathom,
 ].map((game) => ({
 url: `${BASE_URL}${game.hubPath}`,
 lastModified: game.id === 'enginefall' ? '2026-06-10' : game.id === 'sell-lemons' ? '2026-06-12' : game.id === 'fears-to-fathom' ? '2026-06-11' : today,
 changeFrequency: 'daily' as const,
 priority: 0.74,
 }));

 // Auto-generate sub-pages from each game config
 const gameSubs: MetadataRoute.Sitemap = [
 ...gameSubPages(projectMist),
 ...gameSubPages(thickAsThieves),
 ...gameSubPages(zeroParades),
 ...gameSubPages(mechanicusII),
 ...gameSubPages(romestead),
 ...gameSubPages(paralives),
 ...gameSubPages(minaTheHollower),
 ...gameSubPages(firstLight007),
 ...gameSubPages(jumpKingQuest),
 ...gameSubPages(starminer),
 ...gameSubPages(fatekeeper),
 ...gameSubPages(enginefall, 0.68, '2026-06-10'),
 ...gameSubPages(voidlingBound, 0.7, '2026-06-10'),
 ...gameSubPages(lunaAbyss),
 ...gameSubPages(sellLemons, 0.72, '2026-06-12'),
 ...gameSubPages(fearsToFathom, 0.7, '2026-06-11'),
 ];

 const voidlingDetailPages: MetadataRoute.Sitemap = voidlingEntries.map((entry) => ({
 url: `${BASE_URL}/games/voidling-bound/voidlings/${entry.slug}`,
 lastModified: '2026-06-10',
 changeFrequency: 'weekly' as const,
 priority: 0.56,
 }));

 return [...staticPages, ...d8020Pages, ...gameHubs, ...gameSubs, ...voidlingDetailPages];
}
