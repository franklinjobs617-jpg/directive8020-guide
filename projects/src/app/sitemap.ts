import type { MetadataRoute } from 'next';

const BASE_URL = 'https://enjoy4game.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: '2026-05-10',
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/guides`,
      lastModified: '2026-05-10',
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/directive-8020-overview`,
      lastModified: '2026-05-10',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/directive-8020-system-requirements`,
      lastModified: '2026-05-10',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/directive-8020-release-time`,
      lastModified: '2026-05-10',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/directive-8020-characters`,
      lastModified: '2026-05-12',
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/directive-8020-review`,
      lastModified: '2026-05-12',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/directive-8020-beginner-tips`,
      lastModified: '2026-05-12',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/directive-8020-turning-points-story-tree`,
      lastModified: '2026-05-12',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/directive-8020-movie-night-multiplayer`,
      lastModified: '2026-05-12',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/directive-8020-deluxe-edition`,
      lastModified: '2026-05-12',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/directive-8020-steam-deck`,
      lastModified: '2026-05-12',
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/directive-8020-community-questions`,
      lastModified: '2026-05-12',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/directive-8020-death-scenes-guide`,
      lastModified: '2026-05-12',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/directive-8020-stealth-guide`,
      lastModified: '2026-05-12',
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/directive-8020-collectibles-heirlooms`,
      lastModified: '2026-05-12',
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/directive-8020-crashing-fix`,
      lastModified: '2026-05-12',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/directive-8020-all-endings`,
      lastModified: '2026-05-12',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/directive-8020-how-to-save-everyone`,
      lastModified: '2026-05-12',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/directive-8020-choices-consequences`,
      lastModified: '2026-05-12',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/directive-8020-trophy-guide`,
      lastModified: '2026-05-12',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/directive-8020-walkthrough`,
      lastModified: '2026-05-12',
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  return pages;
}
