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
      availability: game.availability ?? 'https://schema.org/InStock',
    },
  };
}
