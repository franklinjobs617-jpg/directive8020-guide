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
import { RelatedGuides, SourceCheckTable } from "@/components/guide-blocks";
import { palworld } from "@/lib/games";
import {
  palworldLastModified,
  palworldSourceRows,
  getPalworldRelated,
} from "@/lib/palworld";

interface FAQItem {
  question: string;
  answer: string;
}

interface PalworldArticleProps {
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

// NOTE (2026-07-06): only one real image asset exists for Palworld right
// now (public/best-of/games/palworld.webp, reused for every image slot via
// palworldImages in src/lib/palworld.ts) — unlike spacecraft-article.tsx,
// this template does NOT insert extra <ArticleImage> blocks with distinct
// captions, since repeating the same thumbnail with different captions
// would look broken. Add real screenshots (Steam press kit / Pocketpair
// media kit — check usage terms first) and then bring this in line with
// the other game article templates.
export function PalworldArticle({
  title,
  description,
  canonical,
  label,
  heroImage = palworld.heroImage,
  heroAlt,
  faqs,
  children,
  showSources = true,
}: PalworldArticleProps) {
  const breadcrumbItems =
    canonical === palworld.hubPath
      ? [
          { label: "Games", href: "/games" },
          { label: "Palworld", href: canonical },
        ]
      : [
          { label: "Games", href: "/games" },
          { label: "Palworld", href: palworld.hubPath },
          { label, href: canonical },
        ];

  return (
    <>
      <JsonLd data={generateVideoGameSchema(palworld)} />
      <JsonLd
        data={generateArticleSchema({
          title,
          description,
          url: canonical,
          datePublished: palworld.releaseDate,
          dateModified: palworldLastModified,
          imageUrl: heroImage,
          game: palworld,
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-[960px] px-4 py-8 sm:px-6">
        <Breadcrumb items={breadcrumbItems} />
        <PageHero src={heroImage} alt={heroAlt} />
        <h1 className="mb-4 text-[36px] font-bold leading-[1.06] tracking-[-1.1px] text-foreground sm:text-[54px] sm:leading-[1.08] sm:tracking-[-1.39px]">
          {title}
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>

        {children}

        {showSources && (
          <SourceCheckTable
            title="Official Links and Source Checks"
            rows={palworldSourceRows}
          />
        )}
        <RelatedGuides guides={getPalworldRelated(canonical)} />
        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
