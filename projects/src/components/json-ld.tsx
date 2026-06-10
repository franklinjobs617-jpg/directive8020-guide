import { directive8020, type GameSchemaConfig } from '@/lib/games';

interface JsonLdProps {
 data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
 return (
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
 />
 );
}

export function generateArticleSchema({
 title,
 description,
 url,
 datePublished,
 dateModified,
 imageUrl,
 game = directive8020,
}: {
 title: string;
 description: string;
 url: string;
 datePublished: string;
 dateModified?: string;
 imageUrl?: string;
 game?: GameSchemaConfig;
}) {
 return {
 '@context': 'https://schema.org',
 '@type': 'Article',
 headline: title,
 description,
 url,
 datePublished,
 dateModified: dateModified || datePublished,
 author: {
 '@type': 'Organization',
 name: game.guidePublisher,
 },
 publisher: {
 '@type': 'Organization',
 name: game.guidePublisher,
 },
 about: {
 '@type': 'VideoGame',
 name: game.name,
 gamePlatform: game.platforms,
 genre: game.genres,
 developer: {
 '@type': 'Organization',
 name: game.developer,
 },
 publisher: {
 '@type': 'Organization',
 name: game.publisher,
 },
 datePublished: game.releaseDate,
 },
 ...(imageUrl && {
 image: {
 '@type': 'ImageObject',
 url: imageUrl,
 },
 }),
 };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
 return {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: faqs.map((faq) => ({
 '@type': 'Question',
 name: faq.question,
 acceptedAnswer: {
 '@type': 'Answer',
 text: faq.answer,
 },
 })),
 };
}

export function generateHowToSchema({
 name,
 description,
 url,
 steps,
}: {
 name: string;
 description: string;
 url: string;
 steps: { name: string; text: string }[];
}) {
 return {
 '@context': 'https://schema.org',
 '@type': 'HowTo',
 name,
 description,
 url,
 step: steps.map((step, index) => ({
 '@type': 'HowToStep',
 position: index + 1,
 name: step.name,
 text: step.text,
 })),
 };
}

export function generateBreadcrumbSchema(
 items: { name: string; url: string }[]
) {
 return {
 '@context': 'https://schema.org',
 '@type': 'BreadcrumbList',
 itemListElement: items.map((item, index) => ({
 '@type': 'ListItem',
 position: index + 1,
 name: item.name,
 item: item.url,
 })),
 };
}

export function generateWebPageSchema({
 title,
 description,
 url,
 siteName = 'Directive 8020 Guide Hub',
}: {
 title: string;
 description: string;
 url: string;
 siteName?: string;
}) {
 return {
 '@context': 'https://schema.org',
 '@type': 'WebPage',
 name: title,
 description,
 url,
 isPartOf: {
 '@type': 'WebSite',
 name: siteName,
 url: 'https://enjoy4game.com',
 },
 publisher: {
 '@type': 'Organization',
 name: siteName,
 },
 };
}

export function generateVideoGameSchema(game: GameSchemaConfig = directive8020) {
 return {
 '@context': 'https://schema.org',
 '@type': 'VideoGame',
 name: game.name,
 description: game.description,
 gamePlatform: game.platforms,
 genre: game.genres,
 applicationCategory: 'Game',
 operatingSystem: game.operatingSystem,
 developer: {
 '@type': 'Organization',
 name: game.developer,
 },
 publisher: {
 '@type': 'Organization',
 name: game.publisher,
 },
 datePublished: game.releaseDate,
 url: game.url,
 offers: {
 '@type': 'Offer',
 priceCurrency: 'USD',
 ...(game.id === 'thick-as-thieves' && { price: '4.99' }),
 ...(game.id === 'zero-parades' && { price: '39.99' }),
 availability: game.availability ?? 'https://schema.org/InStock',
 },
 };
}

export function generateOrganizationSchema() {
 return {
 '@context': 'https://schema.org',
 '@type': 'Organization',
 name: 'Enjoy4Game Guides',
 url: 'https://enjoy4game.com',
 email: 'stephen@enjoy4game.com',
 description:
 'Independent player-first game guides covering survival horror, RPG, life simulation, strategy, and indie games.',
 sameAs: ['https://www.reddit.com/r/enjoy4game/'],
 foundingDate: '2026-05-10',
 };
}

export function generateReviewSchema({
 name,
 description,
 url,
 reviewBody,
 ratingValue = 4,
 author = 'Enjoy4Game Guides',
 datePublished,
 game,
}: {
 name: string;
 description: string;
 url: string;
 reviewBody: string;
 ratingValue?: number;
 author?: string;
 datePublished: string;
 game: GameSchemaConfig;
}) {
 return {
 '@context': 'https://schema.org',
 '@type': 'Review',
 name,
 description,
 url,
 author: {
 '@type': 'Organization',
 name: author,
 },
 datePublished,
 reviewBody,
 itemReviewed: {
 '@type': 'VideoGame',
 name: game.name,
 gamePlatform: game.platforms,
 genre: game.genres,
 developer: {
 '@type': 'Organization',
 name: game.developer,
 },
 publisher: {
 '@type': 'Organization',
 name: game.publisher,
 },
 datePublished: game.releaseDate,
 },
 reviewRating: {
 '@type': 'Rating',
 ratingValue,
 bestRating: 5,
 worstRating: 1,
 },
 };
}
