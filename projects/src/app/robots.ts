import { MetadataRoute } from 'next';

const BASE_URL = 'https://enjoy4game.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/static/'],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
