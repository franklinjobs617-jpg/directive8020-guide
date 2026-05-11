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
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  imageUrl?: string;
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
      name: 'Directive 8020 Guide Hub',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Directive 8020 Guide Hub',
    },
    about: {
      '@type': 'VideoGame',
      name: 'Directive 8020',
      gamePlatform: ['PlayStation 5', 'Xbox Series X|S', 'PC'],
      genre: ['Survival Horror', 'Interactive Drama', 'Adventure'],
      developer: {
        '@type': 'Organization',
        name: 'Supermassive Games',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Bandai Namco Entertainment',
      },
      datePublished: '2026-05-12',
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

export function generateVideoGameSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: 'Directive 8020',
    description:
      'A cinematic sci-fi survival horror adventure from Supermassive Games. When a colony ship reaches a distant planet, the crew discovers a deadly alien threat that can perfectly mimic its prey.',
    gamePlatform: ['PlayStation 5', 'Xbox Series X|S', 'PC'],
    genre: ['Survival Horror', 'Interactive Drama', 'Adventure'],
    applicationCategory: 'Game',
    operatingSystem: 'Windows, PlayStation 5, Xbox Series X|S',
    developer: {
      '@type': 'Organization',
      name: 'Supermassive Games',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Bandai Namco Entertainment',
    },
    datePublished: '2026-05-12',
    url: 'https://store.steampowered.com/app/2255370/Directive_8020/',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/PreOrder',
    },
  };
}
