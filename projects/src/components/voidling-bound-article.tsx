import type { ReactNode } from 'react';
import Link from 'next/link';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { ArticleImage } from '@/components/article-media';
import { JsonLd, generateArticleSchema, generateFAQSchema, generateVideoGameSchema } from '@/components/json-ld';
import { RelatedGuides, SourceCheckTable } from '@/components/guide-blocks';
import { voidlingBound } from '@/lib/games';
import {
  getVoidlingBoundRelated,
  voidlingBoundImages,
  voidlingBoundLastModified,
  voidlingSourceRows,
  voidlingBoundWikiData,
} from '@/lib/voidling-bound';

interface FAQItem {
  question: string;
  answer: string;
}

interface VoidlingBoundArticleProps {
  title: string;
  description: string;
  canonical: string;
  label: string;
  heroImage?: string;
  heroAlt: string;
  faqs: FAQItem[];
  children: ReactNode;
  dateModified?: string;
  showSources?: boolean;
}

export function VoidlingBoundArticle({
  title,
  description,
  canonical,
  label,
  heroImage = voidlingBoundImages.hero,
  heroAlt,
  faqs,
  children,
  dateModified = voidlingBoundLastModified,
  showSources = true,
}: VoidlingBoundArticleProps) {
  const breadcrumbItems =
    canonical === voidlingBound.hubPath
      ? [
          { label: 'Games', href: '/games' },
          { label: 'Voidling Bound', href: canonical },
        ]
      : [
          { label: 'Games', href: '/games' },
          { label: 'Voidling Bound', href: voidlingBound.hubPath },
          { label, href: canonical },
        ];

  return (
    <>
      <JsonLd data={generateVideoGameSchema(voidlingBound)} />
      <JsonLd
        data={generateArticleSchema({
          title,
          description,
          url: canonical,
          datePublished: voidlingBound.releaseDate,
          dateModified,
          imageUrl: heroImage,
          game: voidlingBound,
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
              src={voidlingBoundImages.screenshot2}
              alt="Voidling Bound source-backed guide screenshot"
              caption="Voidling Bound pages use Steam for store facts and the wiki.gg database as the structured source for species, evolutions, elements, and abilities."
            />
            <SourceCheckTable title="Voidling Bound Sources and Verification" rows={voidlingSourceRows} />
          </>
        )}

        <section className="my-8 rounded-lg border border-border/50 bg-card/30 p-5">
          <h2 className="mb-3 text-lg font-bold text-foreground">Data and Image Attribution</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Voidling data and creature images are derived from the{' '}
            <Link href="https://voidlingbound.wiki.gg/wiki/Voidling_Bound_Wiki" target="_blank" rel="noreferrer" className="text-d8020 hover:underline">
              Voidling Bound Wiki
            </Link>{' '}
            under the{' '}
            <Link href={voidlingBoundWikiData.wiki.licenseUrl} target="_blank" rel="noreferrer" className="text-d8020 hover:underline">
              {voidlingBoundWikiData.wiki.license}
            </Link>
            . Steam images are used for store-level visual context. Snapshot generated on {voidlingBoundWikiData.generatedAt.slice(0, 10)}.
          </p>
        </section>

        <RelatedGuides guides={getVoidlingBoundRelated(canonical)} />
        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
