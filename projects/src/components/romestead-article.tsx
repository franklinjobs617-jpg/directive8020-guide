import type { ReactNode } from 'react';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { ArticleImage } from '@/components/article-media';
import {
  JsonLd,
  generateArticleSchema,
  generateFAQSchema,
  generateVideoGameSchema,
} from '@/components/json-ld';
import { RelatedGuides, SourceCheckTable } from '@/components/guide-blocks';
import { romestead } from '@/lib/games';
import {
  getRomesteadRelated,
  romesteadImages,
  romesteadLastModified,
  romesteadSourceRows,
} from '@/lib/romestead';

interface FAQItem {
  question: string;
  answer: string;
}

interface RomesteadArticleProps {
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

export function RomesteadArticle({
  title,
  description,
  canonical,
  label,
  heroImage = romestead.heroImage,
  heroAlt,
  faqs,
  children,
  showSources = true,
}: RomesteadArticleProps) {
  const breadcrumbItems =
    canonical === romestead.hubPath
      ? [
          { label: 'Games', href: '/games' },
          { label: 'Romestead', href: canonical },
        ]
      : [
          { label: 'Games', href: '/games' },
          { label: 'Romestead', href: romestead.hubPath },
          { label, href: canonical },
        ];

  return (
    <>
      <JsonLd data={generateVideoGameSchema(romestead)} />
      <JsonLd
        data={generateArticleSchema({
          title,
          description,
          url: canonical,
          datePublished: romestead.releaseDate,
          dateModified: romesteadLastModified,
          imageUrl: heroImage,
          game: romestead,
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

        {showSources && (
          <>
            <ArticleImage
              src={romesteadImages.screenshot5}
              alt="Romestead official source check screenshot"
              caption="Use official Steam and SteamDB pages for release timing, Early Access status, platform support, features, language support, and PC requirements."
            />
            <SourceCheckTable
              title="Official Links and Source Checks"
              rows={romesteadSourceRows}
            />
          </>
        )}
        <ArticleImage
          src={romesteadImages.screenshot2}
          alt="Romestead related guide settlement screenshot"
          caption="Use the related guides to move from launch facts to beginner priorities, co-op setup, PC specs, and Early Access buying decisions."
        />
        <RelatedGuides guides={getRomesteadRelated(canonical)} />
        <ArticleImage
          src={romesteadImages.screenshot6}
          alt="Romestead FAQ gameplay screenshot"
          caption="Check release timing, co-op support, Early Access risk, requirements, and platform status before starting a long settlement run."
        />
        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
