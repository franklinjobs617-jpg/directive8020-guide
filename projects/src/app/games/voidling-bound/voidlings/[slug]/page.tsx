import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BlufBox } from '@/components/guide-blocks';
import { VoidlingBoundArticle } from '@/components/voidling-bound-article';
import {
  createVoidlingBoundMetadata,
  getRelatedVoidlings,
  getSpeciesByName,
  getVoidlingBySlug,
  voidlingBoundImages,
  voidlingEntries,
  voidlingGuideFaqs,
} from '@/lib/voidling-bound';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return voidlingEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getVoidlingBySlug(slug);
  if (!entry) return {};
  return createVoidlingBoundMetadata({
    title: `${entry.name} Voidling Bound: Species, Rarity, Element, Abilities and Evolution Data`,
    description: `${entry.name} database page for Voidling Bound with species, rarity, element, ability notes, wiki source link, and related evolutions.`,
    canonical: `/games/voidling-bound/voidlings/${entry.slug}`,
    image: entry.image,
  });
}

export default async function VoidlingDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getVoidlingBySlug(slug);
  if (!entry) notFound();
  const species = getSpeciesByName(entry.species);
  const related = getRelatedVoidlings(entry);
  const canonical = `/games/voidling-bound/voidlings/${entry.slug}`;
  const title = `${entry.name} Voidling Bound: Species, Rarity, Element and Abilities`;
  const description = `${entry.name} is a ${entry.rarity} ${entry.species} Voidling with ${entry.element} element data in the current wiki-derived database snapshot.`;

  return (
    <VoidlingBoundArticle
      title={title}
      description={description}
      canonical={canonical}
      label={entry.name}
      heroImage={entry.image}
      heroAlt={`${entry.name} Voidling Bound wiki image`}
      faqs={voidlingGuideFaqs.database}
      showSources={false}
    >
      <BlufBox title="Database Entry">
        <p>
          <strong>{entry.name}</strong> is listed as a {entry.rarity.toLowerCase()} {entry.species} entry with {entry.element} element data in the current Voidling Bound Wiki snapshot. This page is a structured lookup entry, not a tier-list verdict.
        </p>
      </BlufBox>

      <section className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <figure className="overflow-hidden rounded-lg border border-border/50 bg-card/30">
          <div className="relative aspect-video">
            <Image src={entry.image} alt={`${entry.name} Voidling Bound creature artwork`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 320px" />
          </div>
          <figcaption className="px-4 py-3 text-xs leading-relaxed text-muted-foreground">
            Local WebP image derived from the Voidling Bound Wiki where available.
          </figcaption>
        </figure>

        <div className="overflow-x-auto rounded-lg border border-border/50 bg-card/30">
          <table className="w-full text-sm">
            <tbody>
              {[
                ['Species', entry.species],
                ['Rarity', entry.rarity],
                ['Element', entry.element],
                ['Color', entry.color || 'Not parsed'],
                ['Eye', entry.eye || 'Not parsed'],
                ['Size', entry.size || 'Not parsed'],
              ].map(([label, value]) => (
                <tr key={label} className="border-b border-border/30 last:border-0">
                  <th scope="row" className="w-32 px-4 py-3 text-left font-semibold text-foreground">{label}</th>
                  <td className="px-4 py-3 text-muted-foreground">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="prose-game">
        <h2>{entry.name} Ability Notes</h2>
        <p>
          The ability rows below come from the wiki-derived evolution entry. They are useful for identifying the role of the Voidling, but they should not be read as balance rankings. A player comparing {entry.name} should check which ability slot changes, whether the element branch fits the team plan, and whether the species role still matches the way they want to fight.
        </p>
      </section>

      <div className="overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Slot</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Ability</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Description</th>
            </tr>
          </thead>
          <tbody>
            {entry.abilities.map((ability) => (
              <tr key={`${ability.slot}-${ability.name}`} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{ability.slot}</td>
                <td className="px-4 py-3 text-muted-foreground">{ability.name}</td>
                <td className="px-4 py-3 text-muted-foreground">{ability.description || 'No parsed description in this snapshot.'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {species && (
        <section className="prose-game">
          <h2>{entry.species} Species Context</h2>
          <p>{species.summary}</p>
        </section>
      )}

      <section className="prose-game">
        <h2>Source and Next Steps</h2>
        <p>
          Check the original{' '}
          <Link href={entry.wikiUrl} target="_blank" rel="noreferrer">
            wiki section for {entry.name}
          </Link>
          {' '}when exact wording matters. Then use the{' '}
          <Link href="/games/voidling-bound/evolution-guide">evolution guide</Link>
          {' '}to understand branch structure, the{' '}
          <Link href="/games/voidling-bound/elements-guide">elements guide</Link>
          {' '}to compare element identity, or the{' '}
          <Link href="/games/voidling-bound/database">database</Link>
          {' '}to filter similar entries.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Related Voidlings</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {related.map((relatedEntry) => (
            <Link key={relatedEntry.slug} href={`/games/voidling-bound/voidlings/${relatedEntry.slug}`} className="rounded-md border border-border/50 bg-card/30 p-4 transition-colors hover:border-d8020/40">
              <h3 className="text-sm font-bold text-foreground">{relatedEntry.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{relatedEntry.species} | {relatedEntry.rarity} | {relatedEntry.element}</p>
            </Link>
          ))}
        </div>
      </section>

      <Image src={voidlingBoundImages.screenshot1} alt="Voidling Bound guide navigation image" width={1280} height={720} className="mt-8 rounded-lg border border-border/50" />
    </VoidlingBoundArticle>
  );
}
