import type { ReactNode } from 'react';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { ArticleImage } from '@/components/article-media';
import { JsonLd, generateArticleSchema, generateFAQSchema, generateVideoGameSchema } from '@/components/json-ld';
import { RelatedGuides, SourceCheckTable } from '@/components/guide-blocks';
import { firstLight007 } from '@/lib/games';
import {
  firstLightImages,
  firstLightLastModified,
  firstLightSourceRows,
  getFirstLightRelated,
} from '@/lib/007-first-light';

interface FAQItem {
  question: string;
  answer: string;
}

interface FirstLightArticleProps {
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

export function FirstLightArticle({
  title,
  description,
  canonical,
  label,
  heroImage = firstLight007.heroImage,
  heroAlt,
  faqs,
  children,
  showSources = true,
}: FirstLightArticleProps) {
  const breadcrumbItems =
    canonical === firstLight007.hubPath
      ? [
          { label: 'Games', href: '/games' },
          { label: '007 First Light', href: canonical },
        ]
      : [
          { label: 'Games', href: '/games' },
          { label: '007 First Light', href: firstLight007.hubPath },
          { label, href: canonical },
        ];

  return (
    <>
      <JsonLd data={generateVideoGameSchema(firstLight007)} />
      <JsonLd
        data={generateArticleSchema({
          title,
          description,
          url: canonical,
          datePublished: firstLightLastModified,
          dateModified: firstLightLastModified,
          imageUrl: heroImage,
          game: firstLight007,
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
              src={firstLightImages.background}
              alt="007 First Light source check and launch guide image"
              caption="Use official store, support, and video sources for release timing, early access, system requirements, and gameplay claims."
            />
            <SourceCheckTable title="007 First Light Official Links and References" rows={firstLightSourceRows} />
          </>
        )}
        <ArticleImage
          src={firstLightImages.header}
          alt="007 First Light related guides image"
          caption="Use the related guides to move from early access timing to reviews, PC specs, and spoiler-light first-session advice."
        />
        <RelatedGuides guides={getFirstLightRelated(canonical)} />
        <ArticleImage
          src={firstLightImages.deluxe}
          alt="007 First Light FAQ and launch planning image"
          caption="Check reviews, Denuvo, Steam Deck reports, platform timing, early access history, and PC requirements before planning a launch session."
        />
        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
