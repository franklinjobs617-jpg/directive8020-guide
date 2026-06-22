import Image from 'next/image';
import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { Breadcrumb } from '@/components/breadcrumb';
import { FAQSection } from '@/components/faq-section';
import {
 JsonLd,
 generateArticleSchema,
 generateFAQSchema,
 generateVideoGameSchema,
} from '@/components/json-ld';
import {
 mistfallHunterGame,
 mistfallHunterLastModified,
 mistfallHunterOfficialUrl,
 mistfallHunterSteamUrl,
 type MistfallPageData,
} from '@/lib/mistfall-hunter';

function DataTable({ columns, rows }: { columns: string[]; rows: string[][] }) {
 return (
  <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
   <table className="w-full text-sm">
    <thead>
     <tr className="border-b border-border bg-mist">
      {columns.map((column) => (
       <th key={column} className="px-4 py-3 text-left font-semibold text-foreground">
        {column}
       </th>
      ))}
     </tr>
    </thead>
    <tbody>
     {rows.map((row) => (
      <tr key={row.join('|')} className="border-b border-border last:border-0">
       {row.map((cell, index) => (
        <td
         key={`${row[0]}-${index}`}
         className={index === 0 ? 'px-4 py-3 font-semibold text-foreground' : 'px-4 py-3 text-muted-foreground'}
        >
         {cell}
        </td>
       ))}
      </tr>
     ))}
    </tbody>
   </table>
  </div>
 );
}

function Checklist({ items }: { items: string[] }) {
 return (
  <ul className="my-6 grid gap-3">
   {items.map((item) => (
    <li key={item} className="rounded-lg border border-border bg-white p-4 text-sm leading-relaxed text-muted-foreground">
     <span className="font-semibold text-foreground">Check: </span>
     {item}
    </li>
   ))}
  </ul>
 );
}

export function MistfallHunterArticle({ page }: { page: MistfallPageData }) {
 return (
  <>
   <JsonLd data={generateVideoGameSchema(mistfallHunterGame)} />
   <JsonLd
    data={generateArticleSchema({
     title: page.title,
     description: page.description,
     url: page.canonical,
     datePublished: mistfallHunterLastModified,
     dateModified: mistfallHunterLastModified,
     imageUrl: page.heroImage,
     game: mistfallHunterGame,
    })}
   />
   <JsonLd data={generateFAQSchema(page.faqs)} />

   <article className="mx-auto max-w-[960px] px-4 py-8 sm:px-6">
    <Breadcrumb
     items={[
      { label: 'Games', href: '/games' },
      { label: 'Mistfall Hunter', href: '/games/mistfall-hunter' },
      { label: page.label, href: page.canonical },
     ]}
    />

    <figure className="mb-8 overflow-hidden rounded-lg border border-border bg-white">
     <div className="relative aspect-[16/7] bg-mist">
      <Image
       src={page.heroImage}
       alt={page.heroAlt}
       fill
       priority
       className="object-cover"
       sizes="(max-width: 768px) 100vw, 960px"
      />
     </div>
     <figcaption className="border-t border-border bg-white px-4 py-3 text-xs leading-relaxed text-muted-foreground">
      {page.heroCaption}
     </figcaption>
    </figure>

    <p className="mb-3 text-xs font-bold uppercase tracking-[0.12px] text-dribbble-pink">
     Mistfall Hunter guide
    </p>
    <h1 className="mb-4 text-[34px] font-bold leading-[1.06] tracking-[-1px] text-foreground sm:text-[52px] sm:leading-[1.08] sm:tracking-[-1.2px]">
     {page.title}
    </h1>
    <p className="mb-6 text-lg leading-relaxed text-muted-foreground">{page.description}</p>

    <section className="my-8 rounded-lg border border-border bg-mist p-5">
     <h2 className="mb-2 text-xs font-bold uppercase tracking-[0.12px] text-foreground">Quick Answer</h2>
     <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
      <strong className="text-foreground">{page.quickAnswer.split('.')[0]}.</strong>
      {page.quickAnswer.slice(page.quickAnswer.indexOf('.') + 1)}
     </p>
    </section>

    {page.sections.map((section) => (
     <section key={section.id} id={section.id} className="my-10 scroll-mt-24">
      <div className="prose-game">
       <h2>{section.title}</h2>
       {section.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
       ))}
      </div>

      {section.image ? (
       <ArticleImage
        src={section.image}
        alt={section.imageAlt ?? `${section.title} Mistfall Hunter guide image`}
        caption={section.imageCaption ?? 'Official Mistfall Hunter image used for guide context.'}
       />
      ) : null}

      {section.columns && section.rows ? <DataTable columns={section.columns} rows={section.rows} /> : null}
      {section.checklist ? <Checklist items={section.checklist} /> : null}
     </section>
    ))}

    <section className="my-10 rounded-lg border border-border bg-white p-5">
     <h2 className="text-xl font-bold tracking-[-0.22px] text-foreground">Official Links</h2>
     <div className="mt-4 grid gap-3 sm:grid-cols-2">
      {[
       ['Steam store page', mistfallHunterSteamUrl],
       ['Official website', mistfallHunterOfficialUrl],
      ].map(([label, href]) => (
       <a
        key={href}
        href={href}
        target="_blank"
        rel="noreferrer"
        className="rounded-lg border border-border bg-mist p-3 text-sm font-semibold text-foreground transition-colors hover:border-dribbble-pink"
       >
        {label}
       </a>
      ))}
     </div>
    </section>

    <section className="my-10 rounded-lg border border-border bg-mist p-5">
     <h2 className="text-xl font-bold tracking-[-0.22px] text-foreground">Guide Notes</h2>
     <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{page.updatedNote}</p>
     <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{page.sourceNote}</p>
    </section>

    <section className="my-10 border-t border-border pt-8">
     <h2 className="mb-4 text-xl font-bold tracking-[-0.22px] text-foreground">Next Mistfall Hunter Guides</h2>
     <div className="grid gap-3 sm:grid-cols-2">
      {page.related.map((guide) => (
       <Link
        key={guide.href}
        href={guide.href}
        className="rounded-lg border border-border bg-white p-4 transition-colors hover:border-dribbble-pink"
       >
        <h3 className="text-sm font-semibold text-foreground">{guide.title}</h3>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{guide.description}</p>
       </Link>
      ))}
     </div>
    </section>

    <FAQSection faqs={page.faqs} />
   </article>
  </>
 );
}
