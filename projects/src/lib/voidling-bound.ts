import type { Metadata } from 'next';
import { voidlingBound, type GameGuideLink } from '@/lib/games';
import { voidlingBoundWikiData } from '@/lib/voidling-bound-wiki-data';

export const voidlingBoundLastModified = '2026-06-10';
export const voidlingBoundSteamUrl = 'https://store.steampowered.com/app/2004680/Voidling_Bound/';
export const voidlingBoundWikiUrl = 'https://voidlingbound.wiki.gg/wiki/Voidling_Bound_Wiki';
export const voidlingBoundSpeciesUrl = 'https://voidlingbound.wiki.gg/wiki/Species';

export const voidlingBoundImages = {
  hero: '/games/voidling-bound/hero.webp',
  header: '/games/voidling-bound/header.webp',
  capsule: '/games/voidling-bound/capsule.webp',
  card: '/games/voidling-bound/card.webp',
  screenshot1: '/games/voidling-bound/screenshot-1.webp',
  screenshot2: '/games/voidling-bound/screenshot-2.webp',
  screenshot3: '/games/voidling-bound/screenshot-3.webp',
};

export type VoidlingBoundWikiData = typeof voidlingBoundWikiData;
export type VoidlingEntry = VoidlingBoundWikiData['voidlings'][number];
export type VoidlingSpecies = VoidlingBoundWikiData['species'][number];

export const voidlingBoundData = voidlingBoundWikiData;
export { voidlingBoundWikiData };
export const voidlingEntries = voidlingBoundWikiData.voidlings;
export const voidlingSpecies = voidlingBoundWikiData.species;

export const voidlingRarities = [...new Set(voidlingEntries.map((entry) => entry.rarity))];
export const voidlingElements = [...new Set(voidlingEntries.map((entry) => entry.element))].filter(Boolean).sort();
export const voidlingSpeciesNames = voidlingSpecies.map((species) => species.name);
export const voidlingAbilitySlots = [
  ...new Set(voidlingEntries.flatMap((entry) => entry.abilities.map((ability) => ability.slot))),
].sort();

export const voidlingQuickFacts = [
  ['Release status', 'Released on Steam on June 9, 2026'],
  ['Developer / Publisher', 'Hatchery Games'],
  ['Steam app', 'Voidling Bound app 2004680'],
  ['Database source', 'Voidling Bound Wiki snapshot'],
  ['Wiki license', voidlingBoundWikiData.wiki.license],
  ['Species count', `${voidlingSpecies.length} playable species listed on the Species page`],
  ['Voidling entries', `${voidlingEntries.length} wiki-derived evolution entries`],
  ['Local wiki images', `${voidlingEntries.filter((entry) => entry.image.includes('/wiki/')).length} compressed local WebP images currently mapped`],
] as const;

export const voidlingSourceRows = [
  {
    claim: 'Steam release and game identity',
    source: 'Steam store',
    status: 'verified' as const,
    href: voidlingBoundSteamUrl,
    note: 'Used for release state, developer, publisher, genre, platform, screenshots, and Steam page identity.',
  },
  {
    claim: 'Species, abilities, and mutation-tree descriptions',
    source: 'Voidling Bound Wiki Species page',
    status: 'verified' as const,
    href: voidlingBoundSpeciesUrl,
    note: `Snapshot revision ${voidlingBoundWikiData.wiki.speciesRevisionId}, updated ${voidlingBoundWikiData.wiki.speciesUpdatedAt}.`,
  },
  {
    claim: 'All Voidling entries, rarity tiers, elements, and ability rows',
    source: 'Voidling Bound Wiki evolution pages',
    status: 'verified' as const,
    href: voidlingBoundWikiUrl,
    note: 'Generated from wiki.gg parse API pages such as List of Kwipeck Evolutions, List of Gilick Evolutions, and the other species evolution pages.',
  },
  {
    claim: 'Images and creature artwork',
    source: 'Voidling Bound Wiki file pages',
    status: 'verified' as const,
    href: voidlingBoundWikiData.wiki.licenseUrl,
    note: 'Images are downloaded locally, converted to WebP, and attributed under the wiki license.',
  },
];

export function createVoidlingBoundMetadata({
  title,
  description,
  canonical,
  image = voidlingBoundImages.hero,
}: {
  title: string;
  description: string;
  canonical: string;
  image?: string;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: [
      'Voidling Bound',
      'Voidling Bound guide',
      'Voidling Bound database',
      'Voidling Bound all voidlings',
      'Voidling Bound evolutions',
      'Voidling Bound elements',
      'Voidling Bound wiki',
    ],
    authors: [{ name: 'Enjoy4Game Guides' }],
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [image],
      type: 'article',
      siteName: 'Enjoy4Game Guides',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export function getVoidlingBySlug(slug: string) {
  return voidlingEntries.find((entry) => entry.slug === slug);
}

export function getSpeciesByName(name: string) {
  return voidlingSpecies.find((species) => species.name === name);
}

export function getVoidlingsBySpecies(name: string) {
  return voidlingEntries.filter((entry) => entry.species === name);
}

export function getRelatedVoidlings(entry: VoidlingEntry) {
  return voidlingEntries
    .filter((candidate) => candidate.slug !== entry.slug && (candidate.species === entry.species || candidate.element === entry.element))
    .slice(0, 6);
}

export function getVoidlingBoundRelated(currentPath: string): GameGuideLink[] {
  return voidlingBound.guideLinks.filter((guide) => guide.href !== currentPath).slice(0, 6);
}

export const voidlingBoundRelatedGuides: GameGuideLink[] = [
  ...voidlingBound.guideLinks,
];

export const voidlingGuideFaqs = {
  hub: [
    {
      question: 'Is Voidling Bound out now?',
      answer: 'Yes. Voidling Bound released on Steam on June 9, 2026, and the current Enjoy4Game coverage treats it as a live PC game, not a coming-soon title.',
    },
    {
      question: 'What is the most useful Voidling Bound page to bookmark?',
      answer: 'The database page is the most useful page to bookmark because it lets you search and filter wiki-derived Voidlings by species, rarity, element, and ability slot.',
    },
    {
      question: 'Does this site copy the wiki?',
      answer: 'No. The wiki is used as the data source, but this site restructures the data into search, filters, comparisons, route explanations, and beginner-friendly guide articles.',
    },
  ],
  database: [
    {
      question: 'Where does the Voidling Bound database data come from?',
      answer: 'The database is generated from Voidling Bound Wiki pages on wiki.gg, especially Species and the nine List of Species Evolutions pages, with Steam used for store-level facts.',
    },
    {
      question: 'Can I search by evolution, element, or ability?',
      answer: 'Yes. The database supports text search plus filters for species, rarity, element, and ability slot, so players can find a Voidling by name, branch, or combat role.',
    },
    {
      question: 'Are the images official?',
      answer: 'The creature images are local compressed copies of wiki.gg images attributed under the Voidling Bound Wiki license, and the hub images come from Steam assets.',
    },
  ],
  beginner: [
    {
      question: 'Which Voidling Bound species should beginners start with?',
      answer: 'Kwipeck is the tutorial starter and the safest first species to understand ability slots, but beginners should compare Gilick, Kerapin, and Gwigoon once close range, defense, or minion play sounds more appealing.',
    },
    {
      question: 'Should beginners chase rare evolutions immediately?',
      answer: 'No. Beginners should first learn species ability slots, mission flow, hatching, training, and elemental branches before treating rarity as the only goal.',
    },
    {
      question: 'When should I use the database?',
      answer: 'Use the database whenever a name, element, ability, or rarity tier is unclear; it is built for quick lookup during breeding, evolution planning, and team comparison.',
    },
  ],
  evolution: [
    {
      question: 'How many species evolution trees are in the database?',
      answer: `The current snapshot includes ${voidlingSpecies.length} species pages and ${voidlingEntries.length} Voidling evolution entries from the wiki-derived data.`,
    },
    {
      question: 'Does every evolution change every ability?',
      answer: 'No. Many evolutions keep some base abilities while changing element, primary attacks, perks, or branch identity, so players should compare specific entries instead of assuming a full kit swap.',
    },
    {
      question: 'Are tier lists included?',
      answer: 'No. This cluster avoids fake tier lists. It explains evolution reading and database comparison from wiki-confirmed facts instead.',
    },
  ],
  breeding: [
    {
      question: 'Is breeding important in Voidling Bound?',
      answer: 'Yes. The wiki structure includes breeding, eggs, golden eggs, mutagens, splicing, and related stations, so breeding is a real progression topic rather than a cosmetic side note.',
    },
    {
      question: 'Should breeding decisions start from rarity or role?',
      answer: 'Start from role and species branch first, then use rarity and element as filters. A rare-looking result is not useful if its ability pattern does not fit the job.',
    },
    {
      question: 'Does this guide invent hidden breeding formulas?',
      answer: 'No. It explains how to track confirmed systems and where to check the database, but it does not invent hidden formulas that are not present in the wiki snapshot.',
    },
  ],
  elements: [
    {
      question: 'Which elements appear in Voidling Bound evolutions?',
      answer: `The database currently includes ${voidlingElements.join(', ')} element labels across the wiki-derived Voidling entries.`,
    },
    {
      question: 'Should I choose evolutions only by element?',
      answer: 'No. Element is one filter; ability slot, species role, perk changes, rarity, and player comfort matter just as much.',
    },
    {
      question: 'Does Neutral mean weak?',
      answer: 'No. Neutral in the database means the entry is not assigned to one of the branch elements in that row; it should not be treated as a weakness claim.',
    },
  ],
  attributes: [
    {
      question: 'What attributes should I compare first?',
      answer: 'Compare role first, then ability slots, then attribute support such as agility, strength, vitality, modules, perks, natures, and level needs.',
    },
    {
      question: 'Are modules and perks final?',
      answer: 'No. The page uses the current wiki snapshot and treats modules, perks, and attribute interactions as data that should be refreshed when the wiki changes.',
    },
    {
      question: 'Is this a best-build page?',
      answer: 'No. It is an attribute-reading guide. Best-build claims would need stable balance data and testing, not just wiki field extraction.',
    },
  ],
};
