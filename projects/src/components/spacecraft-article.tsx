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
import { spacecraft } from "@/lib/games";
import {
  spacecraftImages,
  spacecraftLastModified,
  spacecraftSourceRows,
  getSpacecraftRelated,
} from "@/lib/spacecraft";

interface FAQItem {
  question: string;
  answer: string;
}

interface SpacecraftArticleProps {
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

export function SpacecraftArticle({
  title,
  description,
  canonical,
  label,
  heroImage = spacecraft.heroImage,
  heroAlt,
  faqs,
  children,
  showSources = true,
}: SpacecraftArticleProps) {
  const breadcrumbItems =
    canonical === spacecraft.hubPath
      ? [
          { label: "Games", href: "/games" },
          { label: "SpaceCraft", href: canonical },
        ]
      : [
          { label: "Games", href: "/games" },
          { label: "SpaceCraft", href: spacecraft.hubPath },
          { label, href: canonical },
        ];

  return (
    <>
      <JsonLd data={generateVideoGameSchema(spacecraft)} />
      <JsonLd
        data={generateArticleSchema({
          title,
          description,
          url: canonical,
          datePublished: spacecraft.releaseDate,
          dateModified: spacecraftLastModified,
          imageUrl: heroImage,
          game: spacecraft,
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
            rows={spacecraftSourceRows}
          />
        )}
        <ArticleImage
          src={spacecraftImages.automation}
          alt="SpaceCraft automated production facility with drones and conveyors"
          caption="SpaceCraft's automation system lets you build planetary outposts with drones, cargo ships, and production lines. Scale from a single mining laser to an industrial empire."
        />
        <RelatedGuides guides={getSpacecraftRelated(canonical)} />
        <ArticleImage
          src={spacecraftImages.combat}
          alt="SpaceCraft ship combat with lasers and shields"
          caption="Combat is planned for future Early Access updates. Until then, master ship design, power grid management, and fleet coordination with your Corporation."
        />
        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
