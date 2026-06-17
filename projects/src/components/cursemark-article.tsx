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
import { RelatedGuides } from "@/components/guide-blocks";
import { cursemark } from "@/lib/games";
import {
  cursemarkImages,
  cursemarkLastModified,
  getCursemarkRelated,
} from "@/lib/cursemark";

interface FAQItem {
  question: string;
  answer: string;
}

interface CursemarkArticleProps {
  title: string;
  description: string;
  canonical: string;
  label: string;
  heroImage?: string;
  heroAlt: string;
  faqs: FAQItem[];
  children: ReactNode;
}

export function CursemarkArticle({
  title,
  description,
  canonical,
  label,
  heroImage = cursemark.heroImage,
  heroAlt,
  faqs,
  children,
}: CursemarkArticleProps) {
  const breadcrumbItems =
    canonical === cursemark.hubPath
      ? [
          { label: "Games", href: "/games" },
          { label: "Cursemark", href: canonical },
        ]
      : [
          { label: "Games", href: "/games" },
          { label: "Cursemark", href: cursemark.hubPath },
          { label, href: canonical },
        ];

  return (
    <>
      <JsonLd data={generateVideoGameSchema(cursemark)} />
      <JsonLd
        data={generateArticleSchema({
          title,
          description,
          url: canonical,
          datePublished: cursemark.releaseDate,
          dateModified: cursemarkLastModified,
          imageUrl: heroImage,
          game: cursemark,
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

        <ArticleImage
          src={cursemarkImages.runes}
          alt="Cursemark rune crafting interface showing elemental combinations"
          caption="Cursemark's rune system is its defining feature. Socket runes into four ability slots to transform your attacks, spells, wards, and ultimates. Hidden elemental synergies reward experimentation."
        />
        <RelatedGuides guides={getCursemarkRelated(canonical)} />
        <ArticleImage
          src={cursemarkImages.bosses}
          alt="Cursemark boss encounter in a dark fantasy arena"
          caption="Each of Cursemark's 3 biomes features unique bosses. Learn attack patterns, exploit elemental weaknesses, and collect legendary loot. Permanent shortcuts unlock as you explore."
        />
        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
