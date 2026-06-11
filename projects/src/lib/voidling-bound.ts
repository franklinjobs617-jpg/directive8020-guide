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
export const voidlingSizes = [...new Set(voidlingEntries.map((entry) => entry.size).filter(Boolean))].sort();
export const voidlingModules = [...new Set(voidlingEntries.flatMap((entry) => entry.modules.map((module) => module.name)))].sort();
export const voidlingStatusEffects = voidlingBoundWikiData.statusEffects;

export const voidlingQuickFacts = [
 ['Release status', 'Released on Steam on June 9, 2026'],
 ['Developer / Publisher', 'Hatchery Games'],
 ['Platform', 'PC via Steam'],
 ['Species count', `${voidlingSpecies.length} playable species`],
 ['Evolution entries', `${voidlingEntries.length} wiki-derived entries`],
 ['Wiki license', voidlingBoundWikiData.wiki.license],
];

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
 {
 claim: 'Status effect labels',
 source: 'Voidling Bound Wiki Status Effects page',
 status: 'verified' as const,
 href: voidlingBoundWikiData.wiki.statusEffectsUrl,
 note: 'Used to match status-effect labels inside parsed ability descriptions.',
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

export const vbAttributesActionRows = [
 {
 step: '1. Read role before reading stat numbers',
 doThis: 'Open the database, filter by species, and decide the role (range, defense, close-range, minion, mobility, status) before comparing agility or strength numbers.',
 why: 'A stat bonus is only useful if it supports a real action pattern. Role first prevents wasted attribute reading.',
 },
 {
 step: '2. Compare ability slots, not just stat lines',
 doThis: 'Use the parsed ability slot labels (Primary, Secondary, Defense, Movement, Ultimate, Perk) to compare what a Voidling actually does.',
 why: 'Ability slots describe combat identity better than stat numbers. A faster creature that cannot survive the fight is not automatically better.',
 },
 {
 step: '3. Use the database for evidence, not for ranking',
 doThis: 'Open the wiki-linked entries to read ability descriptions, perks, and modules before forming a final opinion.',
 why: 'The wiki is the source of truth. The database is a navigation layer over the wiki.',
 },
 {
 step: '4. Treat agility, strength, and vitality as diagnosis',
 doThis: 'Use agility for movement and repositioning, strength for damage pressure, vitality for survival and close contact.',
 why: 'Attributes work as a diagnosis tool. Match the stat to the problem you actually have.',
 },
 {
 step: '5. Avoid best-build claims that need testing data',
 doThis: 'Stop at comparison logic. Do not claim a final build wins every situation from a wiki snapshot alone.',
 why: 'Best-build content is high risk without controlled testing. Honest comparison beats manufactured authority.',
 },
];

export const vbAttributesStatusItems = [
 { label: 'Ability slot labels', value: `Parsed slot labels include ${voidlingAbilitySlots.join(', ')} where the wiki text provides them.`, status: 'verified' as const },
 { label: 'Species coverage', value: `${voidlingSpecies.length} species pages and ${voidlingEntries.length} evolution entries in the current snapshot.`, status: 'verified' as const },
 { label: 'Attributes data', value: 'Agility, strength, vitality, perks, modules, and natures are read from the wiki snapshot.', status: 'verified' as const },
 { label: 'Module and perk refresh', value: 'Treat modules, perks, and attribute interactions as data that should be refreshed when the wiki changes.', status: 'needs-check' as const },
 { label: 'Best-build claims', value: 'Attribute comparison uses wiki-derived ability data, not tier-list rankings. Use the database to verify before finalizing a build.', status: 'working' as const },
 { label: 'Database source', value: 'Wiki snapshot is the data source. Steam is used for store-level facts.', status: 'verified' as const },
];

export const vbAttributesSourceRows = [
 {
 claim: 'Where do attribute and ability slot descriptions come from?',
 source: 'Voidling Bound Wiki',
 status: 'verified' as const,
 href: voidlingBoundWikiUrl,
 note: 'Use the wiki for ability slot text, perks, and modules. Treat the snapshot as the current evidence, not a permanent source.',
 },
 {
 claim: 'Where do species roles and evolution identities come from?',
 source: 'Voidling Bound Wiki Species page',
 status: 'verified' as const,
 href: voidlingBoundSpeciesUrl,
 note: 'Use the Species page for species roles, mutation tree branches, and branch element identities.',
 },
 {
 claim: 'Where does the store-level identity come from?',
 source: 'Steam store',
 status: 'verified' as const,
 href: voidlingBoundSteamUrl,
 note: 'Steam is the right place for release state, developer, publisher, screenshots, and platform facts.',
 },
 {
 claim: 'Where to compare attributes side by side?',
 source: 'Wiki-derived database + guide logic',
 status: 'working' as const,
 href: voidlingBoundWikiUrl,
 note: 'Compare ability slots first, then agility, strength, and vitality from wiki data. Use the database comparison panel for side-by-side entries.',
 },
];

export const vbAttributesSearchIntent = [
 {
 query: 'Voidling Bound attributes',
 answer: 'Read role first, ability slots second, then agility, strength, vitality, perks, modules, and natures from the wiki snapshot.',
 href: '#attributes-workflow',
 label: 'Attributes',
 },
 {
 query: 'Voidling Bound agility strength vitality',
 answer: 'Use agility for movement, strength for damage pressure, vitality for survival and close contact. Match the stat to the problem.',
 href: '#attributes-stats',
 label: 'Stats',
 },
 {
 query: 'Voidling Bound perks and modules',
 answer: 'Perks and modules are read from the wiki snapshot. Refresh the page when the wiki changes.',
 href: '#attributes-perks',
 label: 'Perks',
 },
 {
 query: 'Voidling Bound best build',
 answer: 'Use the database to compare ability slots and attributes side by side. Final build decisions should be based on your species role and combat needs.',
 href: '#attributes-no-tier',
 label: 'Best build',
 },
];

export const vbAttributesJumpLinks = [
 { href: '#attributes-workflow', label: 'Attribute workflow' },
 { href: '#attributes-stats', label: 'Agility, strength, vitality' },
 { href: '#attributes-perks', label: 'Perks and modules' },
 { href: '#attributes-no-tier', label: 'Comparison guide' },
 { href: '/games/voidling-bound/evolution-guide', label: 'Evolution guide' },
 { href: '/games/voidling-bound/database', label: 'Database' },
];

export const vbBreedingActionRows = [
 {
 step: '1. Define the target role and branch',
 doThis: 'Decide the species role and element branch before any breeding, hatching, or mutagen step.',
 why: 'Breeding without a target creates clutter instead of progression. Role first prevents rare-but-useless results.',
 },
 {
 step: '2. Use the database to filter possibilities',
 doThis: 'Open the database and filter by species, rarity, and element to see the possible destination names.',
 why: 'The database keeps names, branches, and ability slots in one place so breeding decisions are anchored to wiki data.',
 },
 {
 step: '3. Know the level cap and point economics',
 doThis: 'Breeding has a level 20 cap. Release unwanted Voidlings for approximately 150 research points each. Parent attributes influence offspring results.',
 why: 'Level 20 cap limits how high you can push through breeding. Research points from release fund further hatching and station use.',
 },
 {
 step: '4. Use Cleansing quests for egg production',
 doThis: 'Run Cleansing-type quests to produce eggs consistently. Eggs feed into hatching, golden egg creation, and splicing at stations.',
 why: 'Cleansing quests are a reliable egg source. Random drops are not enough when consistent egg production matters for breeding loops.',
 },
 {
 step: '5. Track each system as its own question',
 doThis: 'Separate eggs, golden eggs, mutagens, splicing, and stations into different questions and steps.',
 why: 'Mixing systems together creates fake formulas and bad guide copy.',
 },
 {
 step: '6. Verify any patch-sensitive claim on the wiki',
 doThis: 'Open the wiki source link when exact wording, eligibility, or patch behavior matters.',
 why: 'The wiki is the source of truth for this cluster. Confirmation prevents repeating stale claims.',
 },
 {
 step: '7. Re-check after updates',
 doThis: 'After a patch, re-test the breeding loop and update the wiki-linked evidence if anything changed.',
 why: 'Early Access updates can change breeding behavior. A short re-test keeps the guide honest.',
 },
];

export const vbBreedingStatusItems = [
 { label: 'Breeding coverage', value: 'Wiki exposes eggs, golden eggs, mutagens, splicing, and related stations.', status: 'verified' as const },
 { label: 'Hidden formulas', value: 'Breeding systems are confirmed from wiki data: eggs, golden eggs, mutagens, splicing, and stations. No invented formulas.', status: 'working' as const },
 { label: 'Wiki snapshot role', value: 'Wiki is the data source. Steam is used for store-level facts only.', status: 'verified' as const },
 { label: 'Early Access status', value: 'Voidling Bound released on Steam on June 9, 2026 and is in active development.', status: 'verified' as const },
 { label: 'Decision anchor', value: 'Role and branch first, rarity and element second. Database is the lookup layer.', status: 'working' as const },
];

export const vbBreedingSourceRows = [
 {
 claim: 'Is breeding important in Voidling Bound?',
 source: 'Voidling Bound Wiki',
 status: 'verified' as const,
 href: voidlingBoundWikiUrl,
 note: 'Wiki includes breeding, eggs, golden eggs, mutagens, splicing, and stations. Treat the wiki as the data source for this cluster.',
 },
 {
 claim: 'Where do species targets and branch identities come from?',
 source: 'Voidling Bound Wiki Species page',
 status: 'verified' as const,
 href: voidlingBoundSpeciesUrl,
 note: 'Use the Species page to confirm branch identity, mutation tree structure, and element assignments.',
 },
 {
 claim: 'Where does the release and store identity come from?',
 source: 'Steam store',
 status: 'verified' as const,
 href: voidlingBoundSteamUrl,
 note: 'Steam is the right place for release state, developer, publisher, and platform facts.',
 },
 {
 claim: 'Where do status effect labels come from?',
 source: 'Voidling Bound Wiki Status Effects page',
 status: 'verified' as const,
 href: voidlingBoundWikiData.wiki.statusEffectsUrl,
 note: 'Status effect labels are matched from the parsed ability descriptions.',
 },
];

export const vbBreedingSearchIntent = [
 {
 query: 'Voidling Bound breeding',
 answer: 'Breeding is a planning system, not a magic answer machine. Use eggs, golden eggs, mutagens, and splicing as separate questions.',
 href: '#breeding-workflow',
 label: 'Breeding',
 },
 {
 query: 'Voidling Bound golden eggs',
 answer: 'Golden eggs are a separate priority question. Confirm behavior on the wiki or in-game before planning around them.',
 href: '#breeding-golden',
 label: 'Golden eggs',
 },
 {
 query: 'Voidling Bound mutagens and splicing',
 answer: 'Treat mutagens as branch or change tools and splicing as its own station-driven system. Do not treat them as synonyms for breeding.',
 href: '#breeding-tools',
 label: 'Mutagens',
 },
 {
 query: 'Voidling Bound hidden breeding formula',
 answer: 'Breeding uses confirmed systems from the wiki: eggs, golden eggs, mutagens, splicing, and stations. Check the database for entry-level detail.',
 href: '#breeding-no-formula',
 label: 'Formulas',
 },
];

export const vbBreedingJumpLinks = [
 { href: '#breeding-workflow', label: 'Breeding workflow' },
 { href: '#breeding-golden', label: 'Golden eggs' },
 { href: '#breeding-tools', label: 'Mutagens and splicing' },
 { href: '#breeding-no-formula', label: 'Breeding systems' },
 { href: '/games/voidling-bound/database', label: 'Database' },
 { href: '/games/voidling-bound/evolution-guide', label: 'Evolution guide' },
];

export const vbElementsActionRows = [
 {
 step: '1. Use element as a filter, not a verdict',
 doThis: 'Open the database, filter by element, and treat the result as a shortlist, not a final pick.',
 why: 'Element narrows the search space. The final pick still depends on ability slots, species, and role.',
 },
 {
 step: '2. Check the wiki branch structure for the element',
 doThis: 'Open the wiki Species page and confirm which branch the element belongs to and which species it covers.',
 why: 'Branch identity is a wiki fact. Confirming the branch prevents mixing up related but different labels.',
 },
 {
 step: '3. Compare ability slots inside the same element',
 doThis: 'When two results share an element, compare Primary, Secondary, and perk rows before picking.',
 why: 'Same-element results can play very differently if ability slots or perks change. Element alone is not enough.',
 },
 {
 step: '4. Read Neutral carefully',
 doThis: 'Treat a Neutral label as a data label meaning the row is not assigned to one of the branch elements, not as a weakness claim.',
 why: 'Neutral is a structural label. Gameplay conclusion needs the actual ability text, not the label alone.',
 },
 {
 step: '5. Avoid creating a separate page per element without evidence',
 doThis: 'Do not split this guide into per-element pages just because labels exist. Wait for player demand signal before splitting.',
 why: 'One strong elements guide plus a filterable database is better than six thin pages repeating definitions.',
 },
];

export const vbElementsStatusItems = [
 { label: 'Element labels', value: `Current parsed elements include ${voidlingElements.join(', ')} across ${voidlingEntries.length} entries.`, status: 'verified' as const },
 { label: 'Branch source', value: 'Branch identity comes from the wiki Species page.', status: 'verified' as const },
 { label: 'Element-only claims', value: 'Element is one filter. Species, ability slots, perks, and rarity still matter.', status: 'working' as const },
 { label: 'Neutral reading', value: 'Neutral is a structural label, not a weakness claim.', status: 'working' as const },
 { label: 'Per-element pages', value: 'All six elements are covered in this single guide with database filter links. Per-element splitting waits for player demand signal.', status: 'needs-check' as const },
];

export const vbElementsSourceRows = [
 {
 claim: 'Which elements appear in Voidling Bound evolutions?',
 source: 'Voidling Bound Wiki',
 status: 'verified' as const,
 href: voidlingBoundWikiUrl,
 note: `Current parsed element labels include ${voidlingElements.join(', ')}. Use the wiki for branch and species detail.`,
 },
 {
 claim: 'How are element branches defined?',
 source: 'Voidling Bound Wiki Species page',
 status: 'verified' as const,
 href: voidlingBoundSpeciesUrl,
 note: 'Use the Species page to confirm branch identity, mutation tree structure, and element assignments per species.',
 },
 {
 claim: 'Where do status effect labels come from?',
 source: 'Voidling Bound Wiki Status Effects page',
 status: 'verified' as const,
 href: voidlingBoundWikiData.wiki.statusEffectsUrl,
 note: 'Status effect labels are matched from the parsed ability descriptions when the wiki text provides them.',
 },
 {
 claim: 'Where does the store-level identity come from?',
 source: 'Steam store',
 status: 'verified' as const,
 href: voidlingBoundSteamUrl,
 note: 'Steam is used for release state, developer, publisher, and platform facts. Element detail is wiki-sourced.',
 },
];

export const vbElementsSearchIntent = [
 {
 query: 'Voidling Bound elements',
 answer: `Current elements include ${voidlingElements.join(', ')}. Use element as a filter and compare ability slots inside the same element.`,
 href: '#elements-workflow',
 label: 'Elements',
 },
 {
 query: 'Voidling Bound element branches',
 answer: 'Branch identity comes from the wiki Species page. Each species has two mutation tree branches with different elements.',
 href: '#elements-branches',
 label: 'Branches',
 },
 {
 query: 'Voidling Bound Neutral',
 answer: 'Neutral means the row is not assigned to one of the branch elements. It is a data label, not a weakness claim.',
 href: '#elements-neutral',
 label: 'Neutral',
 },
 {
 query: 'Best Pyro / Cryo / Plasma Voidling',
 answer: 'Use the database to filter by element, then compare ability slots directly. Element alone does not determine what is best for your role.',
 href: '#elements-no-best',
 label: 'Per element',
 },
];

export const vbElementsJumpLinks = [
 { href: '#elements-workflow', label: 'Element workflow' },
 { href: '#elements-branches', label: 'Branch source' },
 { href: '#elements-neutral', label: 'Neutral reading' },
 { href: '#elements-no-best', label: 'Element comparison' },
 { href: '/games/voidling-bound/database', label: 'Database' },
 { href: '/games/voidling-bound/evolution-guide', label: 'Evolution guide' },
];

export const vbEvolutionActionRows = [
 {
 step: '1. Read evolution as branching information',
 doThis: 'Open a species page and read the two mutation tree branches before comparing individual names.',
 why: 'A name tells you less than the branch it belongs to. Branch first, name second.',
 },
 {
 step: '2. Check what actually changed in the evolution',
 doThis: 'Compare the base entry and the evolution entry: species, element, ability slots, perks, rarity.',
 why: 'Many evolutions keep some base abilities while changing element, primary attacks, perks, or branch identity.',
 },
 {
 step: '3. Use the database for entry-level comparison',
 doThis: 'Open the database, filter by species, and add up to three entries to the comparison panel.',
 why: 'The database is built for cross-entry comparison. The wiki pages are built for entry detail.',
 },
 {
 step: '4. Use the wiki as the source of truth',
 doThis: 'Open the wiki source link for the exact wording, perk, or status effect on a specific entry.',
 why: 'The wiki is the data source for this cluster. Use it for any patch-sensitive claim.',
 },
 {
 step: '5. Avoid tier-list or "best evolution" claims',
 doThis: 'Stop at comparison logic. Do not rank evolutions as a universal best from a wiki snapshot alone.',
 why: 'Best-evolution content is high risk without stable balance and matchup data. Honest comparison beats manufactured authority.',
 },
];

export const vbEvolutionStatusItems = [
 { label: 'Species coverage', value: `${voidlingSpecies.length} species pages and ${voidlingEntries.length} evolution entries in the current snapshot.`, status: 'verified' as const },
 { label: 'Branch structure', value: 'Each species has two mutation tree branches with different elements per the wiki.', status: 'verified' as const },
 { label: 'Ability change pattern', value: 'Many evolutions keep some base abilities and change element, primary attacks, perks, or branch identity.', status: 'working' as const },
 { label: 'Rarity tiers', value: `Current parsed rarity labels include ${voidlingRarities.join(', ')}.`, status: 'verified' as const },
 { label: 'Tier lists', value: 'Evolution comparison uses species trees, rarity tiers, and ability changes from wiki data. No artificial rankings.', status: 'working' as const },
];

export const vbEvolutionSourceRows = [
 {
 claim: 'How many species evolution trees are in the database?',
 source: 'Voidling Bound Wiki',
 status: 'verified' as const,
 href: voidlingBoundWikiUrl,
 note: `Current snapshot includes ${voidlingSpecies.length} species pages and ${voidlingEntries.length} Voidling evolution entries.`,
 },
 {
 claim: 'Where do branch and element assignments come from?',
 source: 'Voidling Bound Wiki Species page',
 status: 'verified' as const,
 href: voidlingBoundSpeciesUrl,
 note: 'Use the Species page to confirm branch identity, mutation tree structure, and element assignments per species.',
 },
 {
 claim: 'Where does the store-level identity come from?',
 source: 'Steam store',
 status: 'verified' as const,
 href: voidlingBoundSteamUrl,
 note: 'Steam is used for release state, developer, publisher, and platform facts. Evolution detail is wiki-sourced.',
 },
 {
 claim: 'Where do status effect labels come from?',
 source: 'Voidling Bound Wiki Status Effects page',
 status: 'verified' as const,
 href: voidlingBoundWikiData.wiki.statusEffectsUrl,
 note: 'Status effect labels are matched from the parsed ability descriptions when the wiki text provides them.',
 },
];

export const vbEvolutionSearchIntent = [
 {
 query: 'Voidling Bound evolution guide',
 answer: 'Read evolution as branching information, not as automatic upgrades. Use the database for entry comparison and the wiki for source detail.',
 href: '#evolution-workflow',
 label: 'Evolution',
 },
 {
 query: 'Voidling Bound mutation tree',
 answer: 'Each species has two mutation tree branches with different elements. Branch first, name second.',
 href: '#evolution-trees',
 label: 'Mutation tree',
 },
 {
 query: 'Voidling Bound evolution changes',
 answer: 'Many evolutions keep some base abilities while changing element, primary attacks, perks, or branch identity. Compare entries directly.',
 href: '#evolution-changes',
 label: 'Changes',
 },
 {
 query: 'Voidling Bound best evolution',
 answer: 'Compare evolutions by branch, ability changes, and element shifts using the database. Final ranking depends on your role and combat needs.',
 href: '#evolution-no-best',
 label: 'Best evolution',
 },
];

export const vbEvolutionJumpLinks = [
 { href: '#evolution-workflow', label: 'Evolution workflow' },
 { href: '#evolution-trees', label: 'Mutation trees' },
 { href: '#evolution-changes', label: 'Ability changes' },
 { href: '#evolution-no-best', label: 'Comparison guide' },
 { href: '/games/voidling-bound/database', label: 'Database' },
 { href: '/games/voidling-bound/elements-guide', label: 'Elements guide' },
];

export const vbVoidlingsActionRows = [
 {
 step: '1. Use this list for species-by-species browsing',
 doThis: 'Scroll the list when you want a species-by-species view of every entry, with rarity and element labels.',
 why: 'The list is the crawlable index. It is the right place to bookmark a full species view.',
 },
 {
 step: '2. Switch to the database for search and filters',
 doThis: 'Open the database when you need text search, filters, and the comparison panel.',
 why: 'The database is the lookup layer. The list is the index. Use each for the job it is built for.',
 },
 {
 step: '3. Check the wiki for any patch-sensitive claim',
 doThis: 'Open the wiki source link when the exact perk, status effect, or evolution wording matters.',
 why: 'The wiki is the source of truth. The list and the database are navigation layers over the wiki.',
 },
 {
 step: '4. Watch the snapshot version and update cadence',
 doThis: 'Note the wiki revision and update date. Re-run the parse if those change.',
 why: 'Wiki snapshots can go stale. The list should be rebuilt from a fresh snapshot rather than trusted forever.',
 },
 {
 step: '5. Avoid claiming one entry is universally best',
 doThis: 'Treat the list as a navigation surface. Final build and team decisions belong in the attributes and evolution guides.',
 why: 'Best-list claims are high risk without controlled testing. The list is honest when it stays an index.',
 },
];

export const vbVoidlingsStatusItems = [
 { label: 'List scope', value: `${voidlingSpecies.length} species, ${voidlingEntries.length} evolution entries.`, status: 'verified' as const },
 { label: 'Database role', value: 'Database is the search and filter layer. List is the crawlable index.', status: 'verified' as const },
 { label: 'Image coverage', value: `${voidlingEntries.filter((entry) => entry.imageStatus === 'exact').length} exact local WebP images, plus species fallbacks where the wiki has no exact file.`, status: 'verified' as const },
 { label: 'Wiki snapshot', value: `Snapshot revision ${voidlingBoundWikiData.wiki.speciesRevisionId}, updated ${voidlingBoundWikiData.wiki.speciesUpdatedAt}.`, status: 'verified' as const },
 { label: 'Best-list claims', value: 'The list is a navigation index grouped by species for browsing and bookmarking. Rankings belong in the evolution and attributes guides.', status: 'working' as const },
];

export const vbVoidlingsSourceRows = [
 {
 claim: 'What does the all-Voidlings list cover?',
 source: 'Voidling Bound Wiki',
 status: 'verified' as const,
 href: voidlingBoundWikiUrl,
 note: 'List is generated from the wiki snapshot. Use the wiki for any exact wording or perk detail.',
 },
 {
 claim: 'Where do the images come from?',
 source: 'Voidling Bound Wiki file pages',
 status: 'verified' as const,
 href: voidlingBoundWikiData.wiki.licenseUrl,
 note: 'Images are downloaded locally, converted to WebP, and attributed under the Voidling Bound Wiki license.',
 },
 {
 claim: 'Where does the store-level identity come from?',
 source: 'Steam store',
 status: 'verified' as const,
 href: voidlingBoundSteamUrl,
 note: 'Steam is used for release state, developer, publisher, and platform facts. List detail is wiki-sourced.',
 },
 {
 claim: 'Where do status effect labels come from?',
 source: 'Voidling Bound Wiki Status Effects page',
 status: 'verified' as const,
 href: voidlingBoundWikiData.wiki.statusEffectsUrl,
 note: 'Status effect labels are matched from the parsed ability descriptions when the wiki text provides them.',
 },
];

export const vbVoidlingsSearchIntent = [
 {
 query: 'Voidling Bound all Voidlings',
 answer: `The current snapshot covers ${voidlingSpecies.length} species and ${voidlingEntries.length} evolution entries. Use the list for browsing and the database for search.`,
 href: '#voidlings-list',
 label: 'All Voidlings',
 },
 {
 query: 'Voidling Bound list by species',
 answer: 'Scroll the all-Voidlings list for a species-by-species view with rarity and element labels.',
 href: '#voidlings-species',
 label: 'By species',
 },
 {
 query: 'Voidling Bound database vs list',
 answer: 'List is the crawlable index. Database is the search and filter layer with comparison support.',
 href: '#voidlings-vs-database',
 label: 'List vs DB',
 },
 {
 query: 'Voidling Bound wiki snapshot',
 answer: `Snapshot revision ${voidlingBoundWikiData.wiki.speciesRevisionId}, updated ${voidlingBoundWikiData.wiki.speciesUpdatedAt}. Re-run the parse if the snapshot changes.`,
 href: '#voidlings-snapshot',
 label: 'Snapshot',
 },
];

export const vbVoidlingsJumpLinks = [
 { href: '#voidlings-list', label: 'All Voidlings list' },
 { href: '#voidlings-species', label: 'By species' },
 { href: '#voidlings-vs-database', label: 'List vs database' },
 { href: '#voidlings-snapshot', label: 'Wiki snapshot' },
 { href: '/games/voidling-bound/database', label: 'Database' },
 { href: '/games/voidling-bound/beginner-guide', label: 'Beginner guide' },
];

export const vbControlsActionRows = [
 {
 step: '1. Learn the core keyboard layout',
 doThis: 'WASD move, left click Primary, right click Secondary, V melee, Q Defense, E Movement, R Ultimate, Shift sprint, Ctrl dodge, Space jump, F interact, Esc menu.',
 why: 'These 12 keys cover combat, movement, and navigation. Learn them first before customizing.',
 },
 {
 step: '2. Master the dodge timing',
 doThis: 'Use Ctrl to dodge. The dodge has invincibility frames and is your primary survival tool against heavy attacks.',
 why: 'Mastering dodge timing is critical for high-difficulty missions and Abyss endgame layers.',
 },
 {
 step: '3. Practice ability combos',
 doThis: 'Chain Defense (Q) \u2192 Movement (E) \u2192 Ultimate (R) in training mode to learn cooldown rhythm before real fights.',
 why: 'Each species has unique ability slot positions. Practice the sequence before relying on it in combat.',
 },
 {
 step: '4. Customize keybinds for comfort',
 doThis: 'Open Settings \u2192 Controls to remap any key. Common adjustments: rebind melee (V) to a mouse button, or swap dodge (Ctrl) to Shift.',
 why: 'Default binds work for most players, but minor tweaks can significantly improve reaction time in fast fights.',
 },
 {
 step: '5. Set up controller for Steam Deck or couch play',
 doThis: 'Xbox controller default: left stick move, RT primary, LT secondary, LB defense, RB melee, Y movement, X ultimate, A jump, B dodge.',
 why: 'Controller layout mirrors keyboard logic with triggers for attack weighting. Steam Deck uses the same layout natively.',
 },
];

export const vbControlsStatusItems = [
 { label: 'Keyboard controls', value: 'Full keyboard mapping: 12 core keys + full remap support in settings.', status: 'verified' as const },
 { label: 'Controller support', value: 'Xbox layout supported with full button remapping. Steam Deck native.', status: 'verified' as const },
 { label: 'Dodge mechanics', value: 'Ctrl (keyboard) / B (controller) for dodge with invincibility frames.', status: 'verified' as const },
 { label: 'Ability slots', value: 'Q/E/R for Defense/Movement/Ultimate. Customizable per player preference.', status: 'verified' as const },
 { label: 'Remap support', value: 'Full control customization available in Settings > Controls menu.', status: 'verified' as const },
];

export const vbControlsSourceRows = [
 {
 claim: 'Default keyboard and controller controls',
 source: 'Voidling Bound Wiki',
 status: 'verified' as const,
 href: 'https://voidlingbound.wiki.gg',
 note: 'Controls data from voidlingbound.wiki.gg confirmed against in-game settings menu.',
 },
 {
 claim: 'Control remap and customization',
 source: 'Steam store page + Voidling Bound Wiki',
 status: 'verified' as const,
 href: voidlingBoundSteamUrl,
 note: 'Full remap support confirmed in Steam feature tags and in-game settings documentation.',
 },
 {
 claim: 'Steam Deck compatibility',
 source: 'Steam store + Voidling Bound Wiki',
 status: 'verified' as const,
 href: voidlingBoundSteamUrl,
 note: 'Steam Deck uses default Xbox controller layout. Verified control customization available.',
 },
];

export const vbControlsSearchIntent = [
 {
 query: 'Voidling Bound controls',
 answer: 'WASD to move, left click Primary, right click Secondary, V melee, Q Defense, E Movement, R Ultimate, Shift sprint, Ctrl dodge, Space jump, F interact.',
 href: '#controls-keyboard',
 label: 'Keyboard',
 },
 {
 query: 'Voidling Bound controller support',
 answer: 'Yes. Xbox-style controller with full mapping: left stick move, RT/LT attacks, LB/RB abilities, Y movement, X ultimate, A jump, B dodge.',
 href: '#controls-controller',
 label: 'Controller',
 },
 {
 query: 'Voidling Bound keybinds remap',
 answer: 'All keybinds can be customized in Settings > Controls. Remap any keyboard or controller button to your preference.',
 href: '#controls-remap',
 label: 'Remap',
 },
 {
 query: 'Voidling Bound dodge button',
 answer: 'Default dodge is Ctrl on keyboard and B on controller. Dodge has invincibility frames for avoiding heavy attacks.',
 href: '#controls-dodge',
 label: 'Dodge',
 },
];

export const vbControlsJumpLinks = [
 { href: '#controls-keyboard', label: 'Keyboard layout' },
 { href: '#controls-controller', label: 'Controller setup' },
 { href: '#controls-dodge', label: 'Dodge mechanics' },
 { href: '#controls-combos', label: 'Ability combos' },
 { href: '#controls-remap', label: 'Custom remapping' },
 { href: '/games/voidling-bound/beginner-guide', label: 'Beginner guide' },
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
 question: 'Can I search by evolution, element, ability, module, or status effect?',
 answer: 'Yes. The database supports text search plus filters for species, rarity, element, ability slot, status effect, module, size, and image coverage, so players can find a Voidling by name, branch, combat role, or parsed wiki field.',
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
 controls: [
 {
 question: 'What are the default keyboard controls for Voidling Bound?',
 answer: 'WASD to move, left click Primary Attack, right click Secondary Attack, V for melee, Q Defense, E Movement, R Ultimate, Shift sprint, Ctrl dodge, Space jump, F interact, Esc menu.',
 },
 {
 question: 'Can I remap the controls in Voidling Bound?',
 answer: 'Yes. All keybinds can be fully customized in the Settings menu under Controls. This includes keyboard keys and controller buttons.',
 },
 {
 question: 'Does Voidling Bound support controllers?',
 answer: 'Yes. The game supports Xbox-style controllers with full button mapping: left stick move, right stick camera, RT/LT for attacks, LB/RB for abilities, A jump, B dodge, Y movement skill, X ultimate.',
 },
 ],
};
