import type { ReactNode } from 'react';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { ArticleImage, VideoEmbed } from '@/components/article-media';
import {
  JsonLd,
  generateArticleSchema,
  generateVideoGameSchema,
} from '@/components/json-ld';
import { RelatedGuides, SourceCheckTable } from '@/components/guide-blocks';
import { zeroParades } from '@/lib/games';
import {
  getZeroParadesRelated,
  zeroParadesImages,
  zeroParadesLastModified,
  zeroParadesSourceRows,
  zeroParadesVideos,
} from '@/lib/zero-parades';

interface FAQItem {
  question: string;
  answer: string;
}

interface ZeroParadesArticleProps {
  title: string;
  description: string;
  canonical: string;
  label: string;
  heroImage?: string;
  heroAlt: string;
  faqs: FAQItem[];
  children: ReactNode;
  showSources?: boolean;
}

export function ZeroParadesArticle({
  title,
  description,
  canonical,
  label,
  heroImage = zeroParades.heroImage,
  heroAlt,
  faqs,
  children,
  showSources = true,
}: ZeroParadesArticleProps) {
  const breadcrumbItems =
    canonical === zeroParades.hubPath
      ? [
          { label: 'Games', href: '/games' },
          { label: 'ZERO PARADES', href: canonical },
        ]
      : [
          { label: 'Games', href: '/games' },
          { label: 'ZERO PARADES', href: zeroParades.hubPath },
          { label, href: canonical },
        ];

  return (
    <>
      <JsonLd data={generateVideoGameSchema(zeroParades)} />
      <JsonLd
        data={generateArticleSchema({
          title,
          description,
          url: canonical,
          datePublished: zeroParades.releaseDate,
          dateModified: zeroParadesLastModified,
          imageUrl: heroImage,
          game: zeroParades,
        })}
      />

      <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <Breadcrumb items={breadcrumbItems} />
        <PageHero src={heroImage} alt={heroAlt} />
        <h1 className="mb-4 text-3xl font-black leading-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>

        {children}

        <section className="prose-game">
          <h2>Official Videos to Watch First</h2>
          <p>
            The official gameplay and showcase videos are the quickest way to
            judge ZERO PARADES' tone, dialogue density, interface, and
            pressure-driven RPG systems.
          </p>
        </section>
        <VideoEmbed
          videoId={zeroParadesVideos[0].id}
          title={zeroParadesVideos[0].title}
          caption={zeroParadesVideos[0].caption}
        />

        {showSources && (
          <>
            <ArticleImage
              src={zeroParadesImages.screenshot7}
              alt="ZERO PARADES storefront and platform notes image"
              caption="Steam covers the PC store page, ZA/UM covers official game details, and PlayStation-facing coverage covers later PS5 timing."
            />
            <SourceCheckTable
              title="Official Links and Store Pages"
              rows={zeroParadesSourceRows}
            />
          </>
        )}
        <ArticleImage
          src={zeroParadesImages.screenshot8}
          alt="ZERO PARADES related guide image"
          caption="Use the next section when you need platform details, first-session advice, PC specs, Steam Deck setup, or buying guidance."
        />
        <RelatedGuides guides={getZeroParadesRelated(canonical)} />
        <ArticleImage
          src={zeroParadesImages.screenshot6}
          alt="ZERO PARADES FAQ image"
          caption="Check release status, PS5 timing, Steam Deck support, PC specs, languages, and whether ZERO PARADES fits your tastes."
        />
        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
