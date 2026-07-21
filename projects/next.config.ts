import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // 2026-07-20: /directive-8020-cast-actors and /directive-8020-characters
  // were both targeting the same "cast/actors/face models" search intent
  // (keyword cannibalization — GSC showed 101 impr/0 clicks on cast-actors
  // vs 201 impr/3 clicks on characters, neither ranking well because they
  // split the same signal). Consolidating onto /directive-8020-characters,
  // the better-performing page, via a permanent redirect so the removed
  // page's link equity transfers instead of just disappearing.
  async redirects() {
    return [
      {
        source: '/directive-8020-cast-actors',
        destination: '/directive-8020-characters',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
