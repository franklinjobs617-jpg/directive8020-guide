import type { ReactNode } from 'react';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { ArticleImage } from '@/components/article-media';
import { JsonLd, generateArticleSchema, generateFAQSchema, generateVideoGameSchema } from '@/components/json-ld';
import { RelatedGuides, SourceCheckTable } from '@/components/guide-blocks';
import { projectMist } from '@/lib/games';
import { getProjectMistRelated, projectMistImages, projectMistLastModified, projectMistSourceRows } from '@/lib/project-mist';

interface FAQItem {
  question: string;
  answer: string;
}

interface ProjectMistArticleProps {
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

export function ProjectMistArticle({
  title,
  description,
  canonical,
  label,
  heroImage = projectMist.heroImage,
  heroAlt,
  faqs,
  children,
  dateModified = projectMistLastModified,
  showSources = true,
}: ProjectMistArticleProps) {
  const breadcrumbItems =
    canonical === projectMist.hubPath
      ? [
          { label: 'Games', href: '/games' },
          { label: 'Project: Mist', href: canonical },
        ]
      : [
          { label: 'Games', href: '/games' },
          { label: 'Project: Mist', href: projectMist.hubPath },
          { label, href: canonical },
        ];

  return (
    <>
      <JsonLd data={generateVideoGameSchema(projectMist)} />
      <JsonLd
        data={generateArticleSchema({
          title,
          description,
          url: canonical,
          datePublished: projectMist.releaseDate,
          dateModified,
          imageUrl: heroImage,
          game: projectMist,
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
              src={projectMistImages.screenshot1}
              alt="Project: Mist source-check image"
              caption="Project: Mist is in Early Access, so the guide separates official Steam facts from hands-on demo notes and community reports."
            />
            <SourceCheckTable title="Project: Mist Source Check" rows={projectMistSourceRows} />
          </>
        )}
        <ArticleImage
          src={projectMistImages.screenshot2}
          alt="Project: Mist related guide image"
          caption="Use the related guides to move from release facts to specs, co-op, first-day survival, and troubleshooting."
        />
        <RelatedGuides guides={getProjectMistRelated(canonical)} />
        <ArticleImage
          src={projectMistImages.screenshot3}
          alt="Project: Mist FAQ image"
          caption="The FAQ answers focus on quick launch facts players usually need before buying or starting a run."
        />
        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
