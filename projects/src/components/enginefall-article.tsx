import type { ReactNode } from 'react';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { ArticleImage } from '@/components/article-media';
import { JsonLd, generateArticleSchema, generateFAQSchema, generateVideoGameSchema } from '@/components/json-ld';
import { BlufBox, RelatedGuides, SearchAnswerPanel, SourceCheckTable, StatusPanel } from '@/components/guide-blocks';
import { enginefall } from '@/lib/games';
import {
  enginefallImages,
  enginefallLastModified,
  enginefallSourceRows,
  getEnginefallRelated,
  type EnginefallPageData,
} from '@/lib/enginefall';

interface FAQItem {
  question: string;
  answer: string;
}

interface EnginefallArticleProps {
  title: string;
  description: string;
  canonical: string;
  label: string;
  heroImage?: string;
  heroAlt: string;
  sourceImage?: string;
  sourceImageAlt?: string;
  sourceImageCaption?: string;
  relatedImage?: string;
  relatedImageAlt?: string;
  relatedImageCaption?: string;
  faqImage?: string;
  faqImageAlt?: string;
  faqImageCaption?: string;
  faqs: FAQItem[];
  children: ReactNode;
  dateModified?: string;
  showSources?: boolean;
}

export function EnginefallArticle({
  title,
  description,
  canonical,
  label,
  heroImage = enginefall.heroImage,
  heroAlt,
  sourceImage = enginefallImages.screenshot8,
  sourceImageAlt = 'Enginefall official source verification image from Steam screenshots',
  sourceImageCaption = 'Enginefall is still in playtest and demo coverage, so the source table separates confirmed official facts from media impressions and community signals.',
  relatedImage = enginefallImages.screenshot9,
  relatedImageAlt = 'Enginefall related guide image showing official train combat',
  relatedImageCaption = 'Use the related guides to move from release facts to playtest access, first-run survival, Conductor progression, Dagger planning, and platform checks.',
  faqImage = enginefallImages.screenshot5,
  faqImageAlt = 'Enginefall FAQ image showing official rail survival gameplay',
  faqImageCaption = 'Because the June 2026 build is not the final launch version, each answer separates stable facts from playtest-sensitive details.',
  faqs,
  children,
  dateModified = enginefallLastModified,
  showSources = true,
}: EnginefallArticleProps) {
  const breadcrumbItems =
    canonical === enginefall.hubPath
      ? [
          { label: 'Games', href: '/games' },
          { label: 'Enginefall', href: canonical },
        ]
      : [
          { label: 'Games', href: '/games' },
          { label: 'Enginefall', href: enginefall.hubPath },
          { label, href: canonical },
        ];

  return (
    <>
      <JsonLd data={generateVideoGameSchema(enginefall)} />
      <JsonLd
        data={generateArticleSchema({
          title,
          description,
          url: canonical,
          datePublished: enginefall.releaseDate,
          dateModified,
          imageUrl: heroImage,
          game: enginefall,
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
              src={sourceImage}
              alt={sourceImageAlt}
              caption={sourceImageCaption}
            />
            <SourceCheckTable title="Enginefall Sources and Verification" rows={enginefallSourceRows} />
          </>
        )}
        <ArticleImage
          src={relatedImage}
          alt={relatedImageAlt}
          caption={relatedImageCaption}
        />
        <RelatedGuides guides={getEnginefallRelated(canonical)} />
        <ArticleImage
          src={faqImage}
          alt={faqImageAlt}
          caption={faqImageCaption}
        />
        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}

export function EnginefallGuidePage({ page }: { page: EnginefallPageData }) {
  return (
    <EnginefallArticle
      title={page.title}
      description={page.description}
      canonical={page.canonical}
      label={page.label}
      heroImage={page.heroImage}
      heroAlt={page.heroAlt}
      sourceImage={page.sourceImage}
      sourceImageAlt={page.sourceImageAlt}
      sourceImageCaption={page.sourceImageCaption}
      relatedImage={page.relatedImage}
      relatedImageAlt={page.relatedImageAlt}
      relatedImageCaption={page.relatedImageCaption}
      faqImage={page.faqImage}
      faqImageAlt={page.faqImageAlt}
      faqImageCaption={page.faqImageCaption}
      faqs={page.faqs}
    >
      <BlufBox title={page.blufTitle}>
        {page.bluf.map((paragraph: any) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </BlufBox>

      <StatusPanel
        items={page.quickFacts.map(([label, value, status]:any[]) => ({
          label,
          value,
          status,
        }))}
      />

      <SearchAnswerPanel
        title={page.answerTitle}
        answer={page.answer}
        intentRows={page.intentRows}
        jumpLinks={page.jumpLinks}
      />

      {page.sections.map((section) => (
        <section key={section.id} id={section.id} className="my-10 scroll-mt-24">
          <h2 className="mb-4 text-2xl font-bold text-foreground">{section.title}</h2>
          {section.image ? (
            <ArticleImage
              src={section.image}
              alt={section.imageAlt}
              caption={section.caption}
            />
          ) : null}
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {section.rows ? (
            <div className="mt-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/50 bg-card/50">
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">{section.tableHeadings[0]}</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">{section.tableHeadings[1]}</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">{section.tableHeadings[2]}</th>
                  </tr>
                </thead>
                <tbody>
                  {section.rows.map(([first, second, third]) => (
                    <tr key={`${first}-${second}`} className="border-b border-border/30 last:border-0">
                      <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{first}</th>
                      <td className="px-4 py-3 text-muted-foreground">{second}</td>
                      <td className="px-4 py-3 text-muted-foreground">{third}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}
        </section>
      ))}
    </EnginefallArticle>
  );
}
