import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageHero } from "@/components/page-hero";
import { FAQSection } from "@/components/faq-section";
import {
  JsonLd,
  generateArticleSchema,
  generateFAQSchema,
  generateVideoGameSchema,
} from "@/components/json-ld";
import { ArticleImage } from "@/components/article-media";
import { RelatedGuides, SourceCheckTable } from "@/components/guide-blocks";
import { forensicsCrimeSceneDetective } from "@/lib/games";
import {
  forensicsCrimeSceneDetectiveImages,
  forensicsCrimeSceneDetectiveLastModified,
  forensicsCrimeSceneDetectiveSourceRows,
  getForensicsCrimeSceneDetectiveRelated,
} from "@/lib/forensics-crime-scene-detective";

interface FAQItem {
  question: string;
  answer: string;
}

interface ForensicsCrimeSceneDetectiveArticleProps {
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

export function ForensicsCrimeSceneDetectiveArticle({
  title,
  description,
  canonical,
  label,
  heroImage = forensicsCrimeSceneDetective.heroImage,
  heroAlt,
  faqs,
  children,
  showSources = true,
}: ForensicsCrimeSceneDetectiveArticleProps) {
  const breadcrumbItems =
    canonical === forensicsCrimeSceneDetective.hubPath
      ? [
          { label: "Games", href: "/games" },
          { label: "Forensics: Crime Scene Detective", href: canonical },
        ]
      : [
          { label: "Games", href: "/games" },
          { label: "Forensics: Crime Scene Detective", href: forensicsCrimeSceneDetective.hubPath },
          { label, href: canonical },
        ];

  return (
    <>
      <JsonLd data={generateVideoGameSchema(forensicsCrimeSceneDetective)} />
      <JsonLd
        data={generateArticleSchema({
          title,
          description,
          url: canonical,
          datePublished: forensicsCrimeSceneDetective.releaseDate,
          dateModified: forensicsCrimeSceneDetectiveLastModified,
          imageUrl: heroImage,
          game: forensicsCrimeSceneDetective,
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-[960px] px-4 py-8 sm:px-6">
        <Breadcrumb items={breadcrumbItems} />
        <PageHero src={heroImage} alt={heroAlt} />
        <h1 className="mb-4 text-[36px] font-bold leading-[1.06] tracking-[-1.1px] text-foreground sm:text-[54px] sm:leading-[1.08] sm:tracking-[-1.39px]">
          {title}
        </h1>
        <p className="mb-2 text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
        <p className="mb-8 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Last updated: {new Date(forensicsCrimeSceneDetectiveLastModified).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        {children}

        <ArticleImage
          src={forensicsCrimeSceneDetectiveImages.evidenceRoom}
          alt="Forensics: Crime Scene Detective evidence markers and forensic equipment at a crime scene"
          caption="Numbered evidence markers, cameras, and laser trajectory tools — the game's crime scene investigation loop before cases move to lab analysis."
        />

        {showSources && (
          <SourceCheckTable
            title="Official Links and Source Checks"
            rows={forensicsCrimeSceneDetectiveSourceRows}
          />
        )}
        <RelatedGuides guides={getForensicsCrimeSceneDetectiveRelated(canonical)} />
        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
