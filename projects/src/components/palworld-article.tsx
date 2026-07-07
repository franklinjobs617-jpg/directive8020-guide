import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageHero } from "@/components/page-hero";
import { FAQSection } from "@/components/faq-section";
import { ArticleImage } from "@/components/article-media";
import {
  JsonLd,
  generateArticleSchema,
  generateFAQSchema,
  generateVideoGameSchema,
} from "@/components/json-ld";
import { RelatedGuides, SourceCheckTable } from "@/components/guide-blocks";
import { palworld } from "@/lib/games";
import {
  palworldImages,
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

// UPDATE (2026-07-06): real official Steam screenshots/capsule art were
// provided and are now in public/games/palworld/ (see palworldImages in
// src/lib/palworld.ts for the source note). This template now includes one
// <ArticleImage>, matching the pattern used by other game article
// templates (e.g. spacecraft-article.tsx).
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
        <p className="mb-2 text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
        <p className="mb-8 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Last updated: {new Date(palworldLastModified).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        {children}

        <ArticleImage
          src={palworldImages.campfire}
          alt="Palworld characters and Pals gathered at a campfire crafting station"
          caption="Palworld blends base-building, crafting, and creature-collecting — Pals help fight, farm, and work alongside players across the Palpagos Islands."
        />

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
