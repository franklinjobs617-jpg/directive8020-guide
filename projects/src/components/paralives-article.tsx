import type { ReactNode } from 'react';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { ArticleImage, VideoEmbed } from '@/components/article-media';
import {
  JsonLd,
  generateArticleSchema,
  generateFAQSchema,
  generateVideoGameSchema,
} from '@/components/json-ld';
import { RelatedGuides, SourceCheckTable } from '@/components/guide-blocks';
import { paralives } from '@/lib/games';
import {
  getParalivesRelated,
  paralivesImages,
  paralivesLastModified,
  paralivesSourceRows,
  paralivesVideos,
} from '@/lib/paralives';

interface FAQItem {
  question: string;
  answer: string;
}

interface ParalivesArticleProps {
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

export function ParalivesArticle({
  title,
  description,
  canonical,
  label,
  heroImage = paralives.heroImage,
  heroAlt,
  faqs,
  children,
  showSources = true,
}: ParalivesArticleProps) {
  const breadcrumbItems =
    canonical === paralives.hubPath
      ? [
          { label: 'Games', href: '/games' },
          { label: 'Paralives', href: canonical },
        ]
      : [
          { label: 'Games', href: '/games' },
          { label: 'Paralives', href: paralives.hubPath },
          { label, href: canonical },
        ];

  return (
    <>
      <JsonLd data={generateVideoGameSchema(paralives)} />
      <JsonLd
        data={generateArticleSchema({
          title,
          description,
          url: canonical,
          datePublished: paralives.releaseDate,
          dateModified: paralivesLastModified,
          imageUrl: heroImage,
          game: paralives,
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

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

        <section className="my-10">
          <h2 className="mb-4 text-xl font-bold text-foreground">Official Video Reference</h2>
          <VideoEmbed
            videoId={paralivesVideos[0].id}
            title={paralivesVideos[0].title}
            caption={paralivesVideos[0].caption}
          />
        </section>

        {showSources && (
          <>
            <ArticleImage
              src={paralivesImages.town}
              alt="Paralives official source check town screenshot"
              caption="Use official Steam and Paralives channels for release status, supported platforms, requirements, roadmap features, and Workshop support."
            />
            <SourceCheckTable
              title="Official Links and Community Checks"
              rows={paralivesSourceRows}
            />
          </>
        )}
        <ArticleImage
          src={paralivesImages.home}
          alt="Paralives related guide home building screenshot"
          caption="Use the related guides to move from Early Access status into Paramaker, build mode, Mac, Steam Deck, mods, and life-sim comparisons."
        />
        <RelatedGuides guides={getParalivesRelated(canonical)} />
        <ArticleImage
          src={paralivesImages.life}
          alt="Paralives FAQ life simulation screenshot"
          caption="Check platform support, system requirements, roadmap features, and Workshop compatibility before building a long-term household."
        />
        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
