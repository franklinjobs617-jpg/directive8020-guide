import type { Metadata } from 'next';
import { fearsToFathom, type GameGuideLink } from '@/lib/games';

export const fearsToFathomLastModified = '2026-06-11';
export const fearsToFathomSteamUrl = 'https://store.steampowered.com/app/4121170/Fears_to_Fathom__Scratch_Creek/';

export const fearsToFathomImages = {
 hero: '/games/fears-to-fathom/hero.webp',
 capsule: '/games/fears-to-fathom/capsule.webp',
 // Old screenshots (kept for existing pages)
 screenshot1: '/games/fears-to-fathom/ss1.webp',
 screenshot2: '/games/fears-to-fathom/ss2.webp',
 screenshot3: '/games/fears-to-fathom/ss3.webp',
 screenshot4: '/games/fears-to-fathom/ss4.webp',
 screenshot5: '/games/fears-to-fathom/ss5.webp',
 // New Steam screenshots (1920x1080, WebP)
 packing: '/games/fears-to-fathom/ss_0.webp',
 driving: '/games/fears-to-fathom/ss_1.webp',
 town: '/games/fears-to-fathom/ss_2.webp',
 farmhouse: '/games/fears-to-fathom/ss_3.webp',
 missJulia: '/games/fears-to-fathom/ss_4.webp',
 churchBasement: '/games/fears-to-fathom/ss_5.webp',
 escape333: '/games/fears-to-fathom/ss_6.webp',
 hiding: '/games/fears-to-fathom/ss_7.webp',
 finalChase: '/games/fears-to-fathom/ss_8.webp',
 billHouse: '/games/fears-to-fathom/ss_9.webp',
};

export const fearsToFathomQuickFacts = [
 ['Release date', 'June 10, 2026'],
 ['Developer', 'Rayll Studios'],
 ['Price', 'HK$48 / ~$6.14 USD'],
 ['Players', 'Co-op only (2 players online). No single player.'],
 ['Game length', 'Approximately 2-3 hours for one playthrough'],
 ['Genre', 'Psychological horror, walking simulator, co-op'],
 ['Platform', 'PC via Steam'],
];

export function createFearsToFathomMetadata({
 title,
 description,
 canonical,
 image = fearsToFathomImages.hero,
}: {
 title: string;
 description: string;
 canonical: string;
 image?: string;
}): Metadata {
 return {
 title: { absolute: title },
 description,
 keywords: [
 'Fears to Fathom',
 'Fears to Fathom Scratch Creek',
 'Fears to Fathom walkthrough',
 'Fears to Fathom co-op',
 'Fears to Fathom guide',
 'Scratch Creek guide',
 'Fears to Fathom endings',
 ],
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
