import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb } from '@/components/breadcrumb';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema, generateVideoGameSchema } from '@/components/json-ld';
import { BlufBox, RelatedGuides } from '@/components/guide-blocks';

const title =
 'Warhammer 40,000: Rogue Trader DLC Guide 2026: Best Start Order, New Save Advice, and Patch 1.6 Changes';
const description =
 'Decide whether to start Rogue Trader with DLC, whether you need a new save, when to play Void Shadows, Lex Imperialis, and The Infinite Museion, and what Patch 1.6 changes for builds and augmentations.';
const canonical = '/games/warhammer-40000-rogue-trader/dlc-guide-2026';
const heroImage =
 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2186680/header.jpg';
const lastModified = '2026-06-18';

const rogueTraderGame = {
 id: 'warhammer-40000-rogue-trader',
 name: 'Warhammer 40,000: Rogue Trader',
 guidePublisher: 'Enjoy4Game Guides',
 description:
  'A story-rich classical RPG from Owlcat Games set in the Koronus Expanse, with turn-based combat, choices, companions, voidship travel, and campaign-integrated DLC.',
 platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S', 'Mac'],
 genres: ['CRPG', 'RPG', 'Turn-Based Tactics', 'Warhammer 40K'],
 developer: 'Owlcat Games',
 publisher: 'Owlcat Games',
 releaseDate: '2023-12-07',
 operatingSystem: 'Windows, macOS, PlayStation 5, Xbox Series X|S',
 url: 'https://store.steampowered.com/app/2186680/Warhammer_40000_Rogue_Trader/',
 availability: 'https://schema.org/InStock',
};

const statusRows = [
 ['Base game', 'Released December 7, 2023', 'Use this if you want the main campaign before buying DLC.'],
 ['Void Shadows', 'Campaign-integrated DLC', 'Best experienced during a fresh or early campaign because it adds shipboard story content.'],
 ['Lex Imperialis', 'Campaign-integrated DLC', 'Plan around party and story timing instead of treating it as a post-game add-on.'],
 ['The Infinite Museion', 'Released June 11, 2026', 'Adds Trazyn-linked content, Eogunn Februs, rare artefacts, puzzles, and augmentations.'],
 ['Update 1.6', 'Live with the June 2026 DLC window', 'Changes several build assumptions, including Operative, Assassin, Uralon, Pasqal, Forge World, and fixes.'],
 ['Steam Deck', 'Listed as Steam Deck Verified on Steam', 'Still test text comfort and long-session battery expectations before committing a long campaign.'],
];

const saveRows = [
 ['New player', 'Yes', 'Nothing important if DLC is enabled before starting.', 'Start a fresh campaign with the DLC you intend to play enabled.'],
 ['Act 1', 'Usually the safest early save state', 'Minimal pacing loss compared with adding DLC much later.', 'Continue if DLC is already enabled; restart only if you want a clean role-play setup.'],
 ['Act 2', 'Likely workable for some DLC content', 'Some companion pacing and shipboard context may feel compressed.', 'Continue if you dislike replaying; restart if you care about story flow.'],
 ['Act 3', 'Riskier midpoint', 'You may miss the clean introduction cadence for integrated side stories.', 'Only continue if you accept uneven pacing or are testing access.'],
 ['Act 4', 'May access later DLC content', 'Earlier relationship beats, ship events, or setup can be weaker or absent.', 'Use the save if you only want late content; start fresh for the best full DLC run.'],
 ['Act 5 / completed save', 'Not ideal for a full DLC experience', 'Campaign-integrated content is not built like a separate post-game mode.', 'Treat a fresh run as the default unless an official prompt clearly opens the content.'],
];

const dlcOrderRows = [
 ['Base campaign + enabled DLC', 'Fresh run', 'The DLC is woven into the campaign, so starting with it enabled gives the cleanest pacing.', 'Skip DLC only if you are sampling the base game first.'],
 ['Void Shadows', 'Early-to-mid campaign', 'Shipboard and companion-style content benefits from time inside the full campaign.', 'Skip first if you only want the shortest base-game test.'],
 ['Lex Imperialis', 'After you understand party roles', 'It is easier to judge its faction and story additions once the campaign systems are readable.', 'Skip first if you are still learning basic combat and companion management.'],
 ['The Infinite Museion', 'Best after you know your party and build direction', 'Augmentations, rare artefacts, puzzles, and Trazyn-linked choices land better when you know what your run needs.', 'Skip early if you do not want build trade-offs or puzzle detours yet.'],
];

const patchRows = [
 ['Operative buffs', 'Old Operative advice may underrate the archetype after Update 1.6.', 'Do not blindly follow pre-1.6 builds without checking the date.'],
 ['Assassin bonus-turn relevance', 'Assassin planning can change when bonus-turn behavior matters more.', 'Treat old Assassin routes as a starting point, not a final answer.'],
 ['Uralon rework', 'Party and enemy assumptions around Uralon can shift.', 'Check whether a build guide was updated for 1.6 before copying it.'],
 ['Pasqal / Forge World changes', 'Tech-focused and origin-based choices may have different value.', 'Delay irreversible build decisions until your current patch is clear.'],
 ['Talent UI quality-of-life', 'Build planning should be easier to read in-game.', 'Use the in-game tooltips before trusting a spreadsheet or old Steam guide.'],
 ['Bug fixes and hotfixes', 'The DLC launch window can still receive fixes.', 'Check current patch notes if a quest, puzzle, or achievement behaves differently.'],
];

const augmentationRows = [
 ['You want stronger role identity', 'Augmentations can push a character toward a clearer combat niche.', 'A stronger niche can make the character less flexible.', 'Players still learning party roles.'],
 ['You are optimizing a late build', 'Implants can add another layer to damage, support, or durability planning.', 'Patch changes can invalidate exact best-in-slot advice.', 'Players copying old builds without checking patch version.'],
 ['You like tech-priest fantasy', 'The system fits the body-modification and artefact theme of the DLC.', 'Role-play flavor can conflict with optimal party balance.', 'Players who dislike mechanical trade-offs in story choices.'],
 ['You struggle with enemy tech pressure', 'Some choices may help a specific tactical plan.', 'EMP vulnerability and compatibility risks can punish careless picks.', 'Players who do not want extra weaknesses to track.'],
];

const buyerRows = [
 ['New CRPG player', 'Start with the base game or a discounted bundle if you are not sure you like long Owlcat campaigns.'],
 ['Warhammer lore fan', 'The DLC-heavy route is more attractive because Trazyn, artefacts, and faction flavor are part of the appeal.'],
 ['Returning player', 'A fresh run is the cleanest way to see DLC pacing, but a late save can work for sampling specific content.'],
 ['Build optimizer', 'Wait for updated 1.6 build notes before treating any build page as final.'],
 ['Completionist', 'Plan a fresh run and track DLC achievements early, especially if you care about missables.'],
 ['Wait-for-sale player', 'Waiting is reasonable if you only want the base story or do not want to replay a long campaign.'],
];

const faqs = [
 {
  question: 'Do I need a new save for Rogue Trader DLC?',
  answer:
   'A new save is the safest recommendation if you want the cleanest DLC pacing. Some later content may work from an existing save, but campaign-integrated DLC usually feels better when enabled before a full run.',
 },
 {
  question: 'Which Rogue Trader DLC should I play first?',
  answer:
   'Start the campaign with the DLC enabled, then let the game introduce each DLC thread naturally. If you are choosing what to buy first, prioritize the DLC that matches your main interest: shipboard story, faction content, or The Infinite Museion’s Trazyn and augmentation hook.',
 },
 {
  question: 'Can I start The Infinite Museion in Act 4?',
  answer:
   'Act 4 may allow access to some later DLC content, but it is not the best default for a full DLC run. Use an Act 4 save to sample content, not to judge the complete pacing.',
 },
 {
  question: 'Is Patch 1.6 enough reason to replay Rogue Trader?',
  answer:
   'It can be, especially if you want to test the DLC, updated archetypes, Uralon changes, Pasqal and Forge World adjustments, or new augmentation decisions. If you only finished the base story recently, wait unless the DLC hook interests you.',
 },
 {
  question: 'Are Rogue Trader builds from Patch 1.5 outdated?',
  answer:
   'Some may still work, but any build relying on Operative, Assassin, Uralon, Pasqal, Forge World, or DLC equipment should be checked against Patch 1.6 before you copy it.',
 },
 {
  question: 'Is The Infinite Museion worth buying?',
  answer:
   'It is most worth considering if you want Trazyn-linked story content, Eogunn Februs, rare artefacts, puzzles, and augmentation choices. Wait if you mainly want a solved build meta or do not plan to replay the campaign.',
 },
];

export const metadata: Metadata = {
 title: { absolute: title },
 description,
 keywords: [
  'Warhammer 40,000 Rogue Trader DLC guide',
  'Rogue Trader DLC order',
  'Rogue Trader new save DLC',
  'Rogue Trader Infinite Museion',
  'Rogue Trader Patch 1.6',
  'Rogue Trader augmentations',
  'Rogue Trader Void Shadows',
  'Rogue Trader Lex Imperialis',
 ],
 authors: [{ name: 'Enjoy4Game Guides' }],
 alternates: { canonical },
 openGraph: {
  title,
  description,
  url: canonical,
  images: [heroImage],
  type: 'article',
  siteName: 'Enjoy4Game Guides',
 },
 twitter: {
  card: 'summary_large_image',
  title,
  description,
  images: [heroImage],
 },
};

function SimpleTable({
 columns,
 rows,
}: {
 columns: string[];
 rows: string[][];
}) {
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

export default function RogueTraderDlcGuidePage() {
 return (
  <>
   <JsonLd data={generateVideoGameSchema(rogueTraderGame)} />
   <JsonLd
    data={generateArticleSchema({
     title,
     description,
     url: canonical,
     datePublished: lastModified,
     dateModified: lastModified,
     imageUrl: heroImage,
     game: rogueTraderGame,
    })}
   />
   <JsonLd data={generateFAQSchema(faqs)} />

   <article className="mx-auto max-w-[960px] px-4 py-8 sm:px-6">
    <Breadcrumb
     items={[
      { label: 'Games', href: '/games' },
      { label: 'Rogue Trader DLC Guide', href: canonical },
     ]}
    />

    <figure className="mb-8 overflow-hidden rounded-lg border border-border bg-white">
     <div className="relative aspect-[16/7] bg-mist">
      <Image
       src={heroImage}
       alt="Warhammer 40,000: Rogue Trader official Steam header"
       fill
       priority
       className="object-cover"
       sizes="(max-width: 768px) 100vw, 960px"
      />
     </div>
     <figcaption className="border-t border-border bg-white px-4 py-3 text-xs leading-relaxed text-muted-foreground">
      Rogue Trader is now a better DLC decision than a simple release-date question: the 2026 run depends on save timing, DLC order, and Patch 1.6 build context.
     </figcaption>
    </figure>

    <p className="mb-3 text-xs font-bold uppercase tracking-[0.12px] text-dribbble-pink">DLC route guide</p>
    <h1 className="mb-4 text-[34px] font-bold leading-[1.06] tracking-[-1px] text-foreground sm:text-[52px] sm:leading-[1.08] sm:tracking-[-1.2px]">
     {title}
    </h1>
    <p className="mb-8 text-lg leading-relaxed text-muted-foreground">{description}</p>

    <BlufBox title="Quick Answer">
     <p>
      <strong>If you are starting Rogue Trader in 2026, play with the DLC enabled from a new save unless you only want to sample the base campaign.</strong> The DLC stories are woven into the campaign, and adding them late can make pacing, companion context, and build planning feel uneven. If you already have an Act 4 save, you may be able to access some later DLC content, but a fresh run gives the cleanest experience.
     </p>
    </BlufBox>

    <section id="status" className="prose-game">
     <h2>2026 Status: What Is Actually New?</h2>
     <p>
      The reason Rogue Trader deserves a fresh 2026 check is not the base release date. The practical question is how the active DLC set and Update 1.6 change a first run or returning save. Use the table below before buying, restarting, or copying a build from an older patch.
     </p>
    </section>
    <SimpleTable columns={['Item', '2026 status', 'What it means for your run']} rows={statusRows} />

    <section id="new-save" className="prose-game">
     <h2>Should You Start a New Save?</h2>
     <p>
      For a full DLC run, a fresh save is the safest recommendation. Rogue Trader DLC is not best treated as a detached post-game mission pack; it works better when the campaign has time to introduce the new story, companions, artefacts, and build decisions.
     </p>
    </section>
    <SimpleTable
     columns={['Current save state', 'Can access DLC?', 'What you may miss', 'Recommended action']}
     rows={saveRows}
    />

    <section id="dlc-order" className="prose-game">
     <h2>Best DLC Start Order</h2>
     <p>
      The best order is less about clicking a menu option and more about campaign timing. Start with the DLC installed, then let the campaign surface each thread. If you are buying piece by piece, choose based on the kind of problem you want solved: story depth, faction flavor, or build experimentation.
     </p>
    </section>
    <SimpleTable columns={['DLC / route', 'Best timing', 'Main reason', 'Skip if']} rows={dlcOrderRows} />

    <section id="patch-16" className="prose-game">
     <h2>What Patch 1.6 Changes for Builds</h2>
     <p>
      Do not treat old build pages as wrong by default, but do treat them as dated until they mention Patch 1.6. The biggest risk is copying a pre-1.6 route for an archetype, companion, or origin that changed under the current version.
     </p>
    </section>
    <SimpleTable columns={['Patch 1.6 area', 'Why it matters', 'Player action']} rows={patchRows} />

    <section id="infinite-museion" className="prose-game">
     <h2>The Infinite Museion: What Matters</h2>
     <p>
      The Infinite Museion matters because it adds a specific 2026 hook: Trazyn-linked content, Eogunn Februs, rare artefacts, puzzles, and augmentations. That makes it more useful to returning players than a generic content drop, but it also means players should not rush in with an old build plan and expect every choice to stay clean.
     </p>
     <ul>
      <li>Treat the DLC as campaign content, not as a separate arcade-style challenge.</li>
      <li>Track mission triggers and quest state before assuming a puzzle is broken.</li>
      <li>Do not spend irreversible build choices around augmentations without checking your party role first.</li>
      <li>Completionists should track achievements from the start of the DLC rather than cleaning up blindly after the finale.</li>
     </ul>
    </section>

    <section id="augmentations" className="prose-game">
     <h2>Augmentation Decision Table</h2>
     <p>
      Augmentations are attractive because they give the run a new mechanical layer. The trade-off is that they also add compatibility, vulnerability, and patch-version questions. Use them for a clear role, not because every character needs a new toy.
     </p>
    </section>
    <SimpleTable columns={['Use case', 'Benefit', 'Risk', 'Who should wait']} rows={augmentationRows} />

    <section id="buyer-decision" className="prose-game">
     <h2>Should You Buy Rogue Trader DLC in 2026?</h2>
     <p>
      Buy DLC if you want a long campaign replay with more story texture and current build choices. Wait if you only want to sample the base game, dislike restarting long CRPGs, or need a fully solved build meta before committing.
     </p>
    </section>
    <SimpleTable columns={['Player type', 'Best decision']} rows={buyerRows} />

    <section id="bug-check" className="prose-game">
     <h2>Bug, Crash, and Hotfix Check</h2>
     <p>
      The safest troubleshooting path is simple: check the current Owlcat patch notes first, then the Steam community known-issues thread, then your save state. In a DLC launch window, a quest that looks broken may be a patch issue, a missing trigger, or an old save edge case.
     </p>
     <ul>
      <li>Check whether your game is on Update 1.6 or a later hotfix.</li>
      <li>Reload before the suspect quest trigger before reinstalling.</li>
      <li>Record your Act, DLC ownership, platform, and quest name before reporting a bug.</li>
      <li>Do not assume a build guide, puzzle guide, or achievement route is current unless it names the patch.</li>
     </ul>
    </section>

    <section id="official-links" className="my-8 rounded-lg border border-border bg-white p-5">
     <h2 className="text-xl font-bold tracking-[-0.22px] text-foreground">Official Links to Check Before You Commit</h2>
     <div className="mt-4 grid gap-3 sm:grid-cols-2">
      {[
       ['Steam store page', 'https://store.steampowered.com/app/2186680/Warhammer_40000_Rogue_Trader/'],
       ['Owlcat Update 1.6', 'https://roguetrader.owlcat.games/news/en/61'],
       ['Owlcat news archive', 'https://roguetrader.owlcat.games/news/en'],
       ['Steam DLC list', 'https://store.steampowered.com/dlc/2186680/Warhammer_40000_Rogue_Trader/'],
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

    <section id="update-log" className="prose-game">
     <h2>Update Log</h2>
     <p>
      Last updated June 18, 2026. Initial version built around the official Update 1.6 and The Infinite Museion release window. Update this guide after new Owlcat hotfixes, GSC query clusters, player reports, or confirmed route corrections.
     </p>
    </section>

    <RelatedGuides
     guides={[
      {
       title: 'Game Guide Hubs',
       href: '/games',
       description: 'Browse all Enjoy4Game guide hubs and single-page guide tests.',
      },
      {
       title: 'Mechanicus II Beginner Guide',
       href: '/games/mechanicus-ii/beginner-guide',
       description: 'Another Warhammer 40K guide focused on campaign choice, tactics, units, and safe first-session decisions.',
      },
      {
       title: 'Mechanicus II Factions Guide',
       href: '/games/mechanicus-ii/factions',
       description: 'Use this if your Warhammer 40K question is faction identity, campaign side, or unit role planning.',
      },
      {
       title: 'Directive 8020 How to Save Everyone',
       href: '/directive-8020-how-to-save-everyone',
       description: 'A route-planning guide for players who want outcome-focused campaign decisions.',
      },
     ]}
    />

    <FAQSection faqs={faqs} />
   </article>
  </>
 );
}
