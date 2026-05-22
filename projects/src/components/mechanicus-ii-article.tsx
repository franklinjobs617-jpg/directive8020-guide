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
import { mechanicusII } from '@/lib/games';
import {
  getMechanicusIIRelated,
  mechanicusIIImages,
  mechanicusIILastModified,
  mechanicusIISourceRows,
} from '@/lib/mechanicus-ii';

interface FAQItem {
  question: string;
  answer: string;
}

interface MechanicusIIArticleProps {
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

export function MechanicusIIArticle({
  title,
  description,
  canonical,
  label,
  heroImage = mechanicusII.heroImage,
  heroAlt,
  faqs,
  children,
  showSources = true,
}: MechanicusIIArticleProps) {
  const breadcrumbItems =
    canonical === mechanicusII.hubPath
      ? [
          { label: 'Games', href: '/games' },
          { label: 'Mechanicus II', href: canonical },
        ]
      : [
          { label: 'Games', href: '/games' },
          { label: 'Mechanicus II', href: mechanicusII.hubPath },
          { label, href: canonical },
        ];

  return (
    <>
      <JsonLd data={generateVideoGameSchema(mechanicusII)} />
      <JsonLd
        data={generateArticleSchema({
          title,
          description,
          url: canonical,
          datePublished: mechanicusII.releaseDate,
          dateModified: mechanicusIILastModified,
          imageUrl: heroImage,
          game: mechanicusII,
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
              src={mechanicusIIImages.screenshot3}
              alt="Warhammer 40,000 Mechanicus II official source check image"
              caption="Use official store pages for release status, platform support, features, system requirements, and current review signals."
            />
            <SourceCheckTable
              title="Official Links and Source Checks"
              rows={mechanicusIISourceRows}
            />
          </>
        )}
        <ArticleImage
          src={mechanicusIIImages.screenshot4}
          alt="Warhammer 40,000 Mechanicus II related guide image"
          caption="Use the related guides to move from release facts to beginner tactics, factions, PC specs, and buying guidance."
        />
        <RelatedGuides guides={getMechanicusIIRelated(canonical)} />
        <ArticleImage
          src={mechanicusIIImages.screenshot2}
          alt="Warhammer 40,000 Mechanicus II FAQ image"
          caption="Check platforms, factions, reviews, requirements, and campaign fit before starting a long run."
        />
        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
