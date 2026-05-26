import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { MechanicusIIArticle } from '@/components/mechanicus-ii-article';
import {
  createMechanicusIIMetadata,
  mechanicusIIImages,
  mechanicusIIPerformanceCheckRows,
  mechanicusIIPerformanceTriageRows,
  mechanicusIISpecRows,
  mechanicusIISteamDeckRows,
} from '@/lib/mechanicus-ii';

const title = 'Warhammer 40,000: Mechanicus II Steam Deck and Performance Guide';
const description =
  'Mechanicus II Steam Deck and performance guide covering unsupported Deck status, PC requirements, controller cautions, UI readability, save checks, and launch-week buyer advice.';
const canonical = '/games/mechanicus-ii/steam-deck-performance';

export const metadata = createMechanicusIIMetadata({
  title,
  description,
  canonical,
  image: mechanicusIIImages.screenshot3,
});

const faqs = [
  {
    question: 'Is Warhammer 40,000: Mechanicus II Steam Deck Verified?',
    answer:
      'No. The official Steam FAQ and Steam Deck compatibility data list Mechanicus II as unsupported on Steam Deck at launch.',
  },
  {
    question: 'Should I buy Mechanicus II if I mainly play on Steam Deck?',
    answer:
      'Steam Deck-first buyers should wait for clearer compatibility updates or broad player reports. Unsupported status does not always mean impossible to launch, but it is not a safe recommendation.',
  },
  {
    question: 'What PC specs does Mechanicus II need?',
    answer:
      'Steam lists Windows 10 64-bit, DirectX 12, 25 GB storage, 12 GB RAM minimum, and 16 GB RAM recommended.',
  },
  {
    question: 'Does Mechanicus II support controllers?',
    answer:
      'Steam lists Xbox controller support, but handheld players should still check button labels, menu navigation, and text readability before committing to a long campaign.',
  },
  {
    question: 'What should I test first after installing Mechanicus II?',
    answer:
      'Check text size, battle camera movement, turn processing, load times, cloud saves, and frame pacing during effects-heavy tactical fights.',
  },
];

export default function MechanicusIISteamDeckPerformancePage() {
  return (
    <MechanicusIIArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Steam Deck & Performance"
      heroImage={mechanicusIIImages.screenshot3}
      heroAlt="Warhammer 40,000 Mechanicus II Steam Deck and performance guide image"
      faqs={faqs}
    >
      <BlufBox title="Steam Deck Answer">
        <p>
          <strong>Mechanicus II is not a safe Steam Deck-first purchase at
          launch.</strong> The official Steam FAQ and Steam Deck compatibility
          data list the game as unsupported on Deck. PC and console players have
          clearer launch paths; handheld-first buyers should wait for fresh
          compatibility reports, patch notes, or a changed Steam Deck rating.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2>Steam Deck Status</h2>
        <ArticleImage
          src={mechanicusIIImages.screenshot4}
          alt="Warhammer 40,000 Mechanicus II tactical battlefield performance image"
          caption="A turn-based tactics game still needs readable UI, stable camera movement, comfortable controls, and predictable frame pacing."
        />
        <p>
          Unsupported status should be read carefully. It does not prove that
          every Deck user will fail to open the game, and it does not replace
          later patch testing. It does mean the game should not be treated as a
          verified handheld experience at launch. For Mechanicus II, that
          matters because long tactical sessions depend on readable text,
          reliable menu navigation, clear controller labels, and a camera that
          remains comfortable during repeated battles.
        </p>
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Question</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Current answer</th>
            </tr>
          </thead>
          <tbody>
            {mechanicusIISteamDeckRows.map(([question, answer]) => (
              <tr key={question} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{question}</td>
                <td className="px-4 py-3 text-muted-foreground">{answer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>PC Performance Checklist</h2>
        <p>
          Steam requirements are a starting point, not a full performance
          promise. Mechanicus II uses tactical battlefields, cover, terrain,
          environmental interactions, campaign screens, and turn processing.
          The practical question is not only whether the game opens; it is
          whether the whole campaign remains comfortable after the first few
          missions.
        </p>
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">If this feels wrong</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Try first</th>
            </tr>
          </thead>
          <tbody>
            {mechanicusIIPerformanceTriageRows.map(([problem, fix]) => (
              <tr key={problem} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{problem}</td>
                <td className="px-4 py-3 text-muted-foreground">{fix}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">When to check</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">What to look for</th>
            </tr>
          </thead>
          <tbody>
            {mechanicusIIPerformanceCheckRows.map(([moment, check]) => (
              <tr key={moment} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{moment}</td>
                <td className="px-4 py-3 text-muted-foreground">{check}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>Official PC Requirements</h2>
        <p>
          If your hardware is below the minimum tier, wait for player reports
          from similar systems before buying. If your hardware is near the
          minimum tier, the most important early checks are battle load times,
          camera smoothness, frame pacing during effects, and whether menus stay
          responsive after moving between tactical battles and the campaign
          layer.
        </p>
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Component</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Minimum</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Recommended</th>
            </tr>
          </thead>
          <tbody>
            {mechanicusIISpecRows.map(([component, minimum, recommended]) => (
              <tr key={component} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{component}</td>
                <td className="px-4 py-3 text-muted-foreground">{minimum}</td>
                <td className="px-4 py-3 text-muted-foreground">{recommended}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>Who Should Wait</h2>
        <p>
          Wait if Steam Deck is your main device, if you need large text and
          relaxed handheld controls, or if your PC is close to the minimum
          requirement line. Also wait if you want tested late-campaign
          performance, because a tactics game can feel fine in an opening fight
          and still become uncomfortable when battles, maps, effects, and UI
          states get busier.
        </p>
        <p>
          Buy on PC or console sooner if you meet the recommended PC tier or
          prefer a fixed console storefront and are comfortable checking current
          platform reviews. For Steam users, use the first session to test
          display readability, save behavior, controller comfort, and battle
          pacing before settling into a long campaign.
        </p>
      </section>
    </MechanicusIIArticle>
  );
}
