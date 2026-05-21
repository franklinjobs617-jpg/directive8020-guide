import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { PageHero } from '@/components/page-hero';
import { FAQSection } from '@/components/faq-section';
import { JsonLd, generateArticleSchema, generateFAQSchema } from '@/components/json-ld';
import { ArticleImage, VideoEmbed } from '@/components/article-media';
import { BlufBox, SourceCheckTable } from '@/components/guide-blocks';

export const metadata: Metadata = {
  title: 'Directive 8020 Deluxe Edition - Contents, Heirlooms & Is It Worth It',
  description:
    'Directive 8020 Deluxe Edition guide: Digital Deluxe contents, Heirlooms Retrieval bonus mission, Dark Pictures Outfit Pack, filters, artbook, soundtrack, collectibles, price checks, and whether it is worth it.',
  alternates: {
    canonical: '/directive-8020-deluxe-edition',
  },
};

const faqs = [
  {
    question: 'What is included in Directive 8020 Digital Deluxe Edition?',
    answer:
      'Steam lists The Dark Pictures Outfit Pack, The Dark Pictures Heirlooms Retrieval bonus mission, three cinematic filter packs, a digital artbook, and the exclusive soundtrack.',
  },
  {
    question: 'Is the Heirlooms Retrieval mission important?',
    answer:
      'It is a bonus mission focused on hidden dolls and relics from earlier Dark Pictures games. It may matter for collectible hunters, lore fans, and possibly achievement completion depending on the final achievement list.',
  },
  {
    question: 'Are the Deluxe filters gameplay content?',
    answer:
      'The filters are visual customization items inspired by 60s, 70s, and 80s space-mission aesthetics. They change presentation rather than core story routes.',
  },
  {
    question: 'Does Directive 8020 Deluxe Edition include story DLC?',
    answer:
      'The clearest gameplay item is the Heirlooms Retrieval bonus mission. Treat the rest of the bundle as cosmetics, filters, artbook, and soundtrack content unless your storefront lists additional story DLC.',
  },
  {
    question: 'Should I buy the Deluxe Edition?',
    answer:
      'It is most valuable if you care about anthology references, collectibles, bonus missions, concept art, soundtrack, and replay presentation. If you only want the main story once, the base game is likely enough.',
  },
];

const deluxeItems = [
  {
    name: 'The Dark Pictures Outfit Pack',
    value: 'Cosmetic costumes inspired by earlier anthology characters, used aboard the Cassiopeia.',
  },
  {
    name: 'Heirlooms Retrieval bonus mission',
    value: 'A secret assignment about hidden dolls and relics from Man of Medan, Little Hope, House of Ashes, and The Devil in Me.',
  },
  {
    name: 'Cinematic Filter Pack',
    value: '60s black-and-white, 70s film-grain, and 80s VHS-style filters for replay atmosphere.',
  },
  {
    name: 'Digital artbook',
    value: 'Concept art for Tau Ceti f, the Cassiopeia, and creature/body-horror designs.',
  },
  {
    name: 'Exclusive soundtrack',
    value: 'Music and soundscape content for players who want the full production package.',
  },
];

const valueRows = [
  ['Collectors', 'Worth considering', 'Heirlooms Retrieval and anthology references are the strongest fit.'],
  ['Trophy hunters', 'Check achievement impact first', 'Bonus mission or collectibles may matter only if platform achievements include them.'],
  ['One-run story players', 'Base game is usually enough', 'Outfits, filters, artbook, and soundtrack do not change the core route.'],
  ['Screenshot / replay players', 'More valuable', 'Filters and outfits add replay presentation value.'],
  ['Price-sensitive buyers', 'Compare upgrade price live', 'Regional discounts and bundles can change the value quickly.'],
];

const priceRows = [
  ['Base game price', 'Check Steam, PlayStation Store, or Xbox Store before purchase.', 'Live storefront value can change by region, sale, or bundle.'],
  ['Digital Deluxe upgrade', 'Treat as a store-specific add-on price, not a fixed global price.', 'Only quote exact numbers after checking the active storefront locale.'],
  ['Best value threshold', 'Better for replay-focused players than one-route story players.', 'Bonus mission, cosmetics, filters, artbook, and soundtrack matter most if you plan multiple runs.'],
];

const sourceRows = [
  {
    claim: 'Digital Deluxe includes outfits, bonus mission, filters, artbook, and soundtrack.',
    source: 'Steam store',
    status: 'verified' as const,
    href: 'https://store.steampowered.com/app/2255370/Directive_8020/',
    note: 'Use Steam for item names and store feature confirmation.',
  },
  {
    claim: 'Directive 8020 is officially live on PS5, Xbox Series X|S, and PC.',
    source: 'Supermassive launch post',
    status: 'verified' as const,
    href: 'https://www.supermassivegames.com/news/directive-8020-live',
    note: 'Use this for platform availability and launch status.',
  },
  {
    claim: 'Exact price depends on storefront, edition, region, and current discount.',
    source: 'Storefront check required',
    status: 'needs-check' as const,
    href: 'https://store.steampowered.com/app/2255370/Directive_8020/',
    note: 'Do not hard-code a global price without rechecking the target store.',
  },
];

export default function DeluxeEditionPage() {
  return (
    <>
      <JsonLd
        data={generateArticleSchema({
          title: 'Directive 8020 Deluxe Edition - Contents, Heirlooms & Is It Worth It',
          description:
            'Directive 8020 Deluxe Edition guide covering Digital Deluxe content, Heirlooms Retrieval, outfits, filters, artbook, soundtrack, price checks, and value.',
          url: '/directive-8020-deluxe-edition',
          datePublished: '2026-05-12',
          dateModified: '2026-05-21',
          imageUrl: '/d8020-screenshot-08.jpg',
        })}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <Breadcrumb items={[{ label: 'Deluxe Edition' }]} />
        <PageHero src="/d8020-screenshot-08.jpg" alt="Directive 8020 Deluxe Edition guide screenshot" />

        <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
          Directive 8020 Deluxe Edition: Contents, Heirlooms and Is It Worth It
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          The Digital Deluxe Edition is mainly for Dark Pictures collectors and
          replay-focused players. The key question is whether the Heirlooms
          Retrieval bonus mission, outfits, filters, artbook, and soundtrack are
          worth the live upgrade price on your storefront.
        </p>

        <BlufBox title="Deluxe Answer">
          <p>
            The Deluxe Edition is worth considering if you want the{' '}
            <strong>Heirlooms Retrieval</strong> bonus mission, Dark Pictures
            outfits, cinematic filters, digital artbook, and soundtrack. If you
            only want one blind main-story run, the base game is usually enough.
          </p>
        </BlufBox>

        <VideoEmbed
          videoId="gaQkzfA14G4"
          title="Directive 8020 official video for Deluxe Edition context"
          caption="Watch the official trailer first if you are deciding whether the Deluxe Edition extras match the tone and replay style you want."
        />

        <div className="prose-game">
          <h2>Digital Deluxe Contents</h2>
          <p>
            The Steam page lists the following Digital Deluxe content. The most
            gameplay-relevant item is the Heirlooms Retrieval bonus mission,
            because it gives completionists another route to check for hidden
            collectibles and anthology references.
          </p>
        </div>

        <div className="grid gap-4 my-6">
          {deluxeItems.map((item) => (
            <section key={item.name} className="rounded-lg border border-border/50 bg-card/30 p-5">
              <h2 className="text-base font-bold text-foreground mb-2">{item.name}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.value}</p>
            </section>
          ))}
        </div>

        <div className="prose-game">
          <h2>Is Deluxe Worth It?</h2>
          <p>
            Use the table below instead of treating Deluxe as automatically good
            or bad. The value depends on whether you care about anthology
            collectibles and replay presentation, not just whether the bundle
            has more items.
          </p>
        </div>

        <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player type</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Recommendation</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why</th>
              </tr>
            </thead>
            <tbody>
              {valueRows.map(([player, verdict, reason]) => (
                <tr key={player} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{player}</td>
                  <td className="px-4 py-3 text-muted-foreground">{verdict}</td>
                  <td className="px-4 py-3 text-muted-foreground">{reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-game">
          <h2>Deluxe Edition Source Check</h2>
          <p>
            Steam localized store data and the official Dark Pictures launch
            post both describe the Deluxe upgrade as a content bundle, not a
            separate story season. The clearest gameplay addition is the
            Heirlooms Retrieval mission / extra Dark Pictures collectibles; the
            outfits, filters, artbook, and soundtrack are presentation or
            collector extras.
          </p>
        </div>

        <div className="prose-game">
          <h2>Directive 8020 Price and Edition Check</h2>
          <p>
            Price searches are high-risk because store pages can change by
            region, launch discount, platform sale, or bundle. Use this page as
            a buying framework, then confirm the live price on your own
            storefront before purchase.
          </p>
        </div>

        <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-card/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Price intent</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">What to check</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why it matters</th>
              </tr>
            </thead>
            <tbody>
              {priceRows.map(([intent, check, reason]) => (
                <tr key={intent} className="border-b border-border/30 last:border-0">
                  <td className="px-4 py-3 font-semibold text-foreground">{intent}</td>
                  <td className="px-4 py-3 text-muted-foreground">{check}</td>
                  <td className="px-4 py-3 text-muted-foreground">{reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <SourceCheckTable title="Price and Deluxe Source Check" rows={sourceRows} />

        <div className="prose-game">
          <h2>Who Should Get Deluxe?</h2>
          <p>
            Deluxe is easiest to recommend for players who already care about
            The Dark Pictures Anthology. The outfit pack and heirloom mission
            are built around earlier games, while the filters and artbook make
            more sense for players planning multiple runs.
          </p>
          <ul>
            <li><strong>Worth it:</strong> collectors, lore fans, trophy hunters, screenshot creators, and repeat players.</li>
            <li><strong>Less essential:</strong> players who only want one blind main-story playthrough.</li>
            <li><strong>Check first:</strong> whether bonus mission content affects achievements on your platform.</li>
          </ul>

          <ArticleImage
            src="/d8020-screenshot-06.jpg"
            alt="Directive 8020 Deluxe route planning screenshot"
            caption="If Deluxe content adds collectible or mission objectives, track it alongside Story Tree progress so cleanup does not become messy."
          />
        </div>

        <FAQSection faqs={faqs} />
      </article>
    </>
  );
}
