import { ArticleImage, VideoEmbed } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { ZeroParadesArticle } from '@/components/zero-parades-article';
import {
  createZeroParadesMetadata,
  zeroParadesControllerRows,
  zeroParadesFeatureRows,
  zeroParadesImages,
} from '@/lib/zero-parades';

const title = 'ZERO PARADES Controller Support Guide - Partial Support Explained';
const description =
  'ZERO PARADES has partial controller support on Steam. Find out what works, what does not, keyboard vs controller comparison, and Steam Deck controller tips.';
const canonical = '/games/zero-parades/controller-support';

export const metadata = createZeroParadesMetadata({
  title,
  description,
  canonical,
  image: zeroParadesImages.screenshot4,
});

const faqs = [
  {
    question: 'Does ZERO PARADES support controllers?',
    answer:
      'Steam lists partial controller support. Basic movement and dialogue navigation work with a controller, but some UI elements may require mouse precision. Test before committing to a controller-only playthrough.',
  },
  {
    question: 'What does partial controller support mean in ZERO PARADES?',
    answer:
      'Partial controller support means the game works with a controller for core gameplay, but some menus, UI elements, or interactions may feel less precise than keyboard and mouse. It does not mean the game is unplayable with a controller.',
  },
  {
    question: 'Can I play ZERO PARADES on Steam Deck with a controller?',
    answer:
      'Yes. ZERO PARADES is Steam Deck Verified. The built-in controls work, but text-heavy RPGs benefit from testing font size and controller readability before a long session.',
  },
  {
    question: 'Is keyboard or controller better for ZERO PARADES?',
    answer:
      'Keyboard and mouse offer more precision for menu navigation and skill checks. Controller works for general gameplay and dialogue. For a text-heavy RPG, keyboard is generally more comfortable for extended sessions.',
  },
  {
    question: 'Can I remap controller buttons in ZERO PARADES?',
    answer:
      'Check the in-game settings menu for remapping options. Steam Input also allows custom controller configurations outside the game.',
  },
];

export default function ZeroParadesControllerSupportPage() {
  return (
    <ZeroParadesArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Controller Support"
      heroImage={zeroParadesImages.screenshot4}
      heroAlt="ZERO PARADES controller support guide screenshot"
      faqs={faqs}
    >
      <BlufBox title="Controller Answer">
        <p>
          <strong>ZERO PARADES has partial controller support on Steam.</strong>{' '}
          Basic movement and dialogue work with a controller, but some UI
          elements may require mouse precision. For a text-heavy espionage RPG,
          keyboard and mouse are generally more comfortable for extended
          sessions. Steam Deck users should test font size before committing.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2>What Partial Controller Support Means</h2>
        <ArticleImage
          src={zeroParadesImages.screenshot4}
          alt="ZERO PARADES controller support explanation screenshot"
          caption="Partial controller support means the game works with a controller for core gameplay, but some interactions may feel less precise than keyboard and mouse."
        />
        <p>
          Steam&apos;s &quot;partial controller support&quot; label means the
          game is functional with a controller but not fully optimized for it.
          In ZERO PARADES, this typically means: movement works, dialogue
          navigation works, but inventory management, skill menus, and some
          UI interactions may feel better with a mouse. This is common for
          text-heavy RPGs where menu precision matters.
        </p>
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Input area</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Controller status</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Confidence</th>
            </tr>
          </thead>
          <tbody>
            {zeroParadesControllerRows.map(([area, status, confidence]) => (
              <tr key={area} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{area}</td>
                <td className="px-4 py-3 text-muted-foreground">{status}</td>
                <td className="px-4 py-3 text-muted-foreground">{confidence}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>Keyboard vs Controller Comparison</h2>
        <ArticleImage
          src={zeroParadesImages.screenshot6}
          alt="ZERO PARADES keyboard vs controller comparison"
          caption="For a dialogue-heavy RPG with skill checks, keyboard and mouse generally offer more precision. Controller works for casual play and Steam Deck."
        />
        <p>
          ZERO PARADES is a reading-intensive espionage RPG. Conversations,
          skill checks, evidence review, and journal navigation are core
          gameplay loops. Keyboard and mouse handle these interactions more
          precisely because you can click specific dialogue options, hover
          over details, and navigate menus faster. Controller works for
          general movement and dialogue, but you may reach for the mouse
          during complex skill check interfaces.
        </p>
        <ul>
          <li>
            <strong>Controller is fine for:</strong> Walking, basic dialogue
            choices, Steam Deck portable play, and casual exploration.
          </li>
          <li>
            <strong>Keyboard is better for:</strong> Menu navigation, skill
            check precision, journal review, inventory management, and
            extended reading sessions.
          </li>
        </ul>
      </section>

      <section className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Controller & Steam Deck Videos</h2>
        <VideoEmbed
          videoId="3dQwbCEEln8"
          title="Zero Parades: For Dead Spies - Steam Deck Review"
          caption="Steam Flow covers Steam Deck performance, controls, text readability, and battery life."
        />
      </section>

      <section className="prose-game">
        <h2>Steam Deck Controller Tips</h2>
        <ArticleImage
          src={zeroParadesImages.screenshot8}
          alt="ZERO PARADES Steam Deck controller tips screenshot"
          caption="Steam Deck Verified means the game runs, but text-heavy RPGs still benefit from font size and readability checks before a long session."
        />
        <p>
          ZERO PARADES is Steam Deck Verified, which means the game runs
          well on the hardware. However, text-heavy RPGs present a specific
          challenge on handheld devices: small text. Before starting a long
          session on Steam Deck, check the in-game text size settings and
          test readability at your preferred viewing distance.
        </p>
        <ul>
          <li>Adjust text size to the largest comfortable setting.</li>
          <li>Test dialogue readability in the first conversation before committing to a full session.</li>
          <li>Check cloud save behavior if switching between Deck and PC.</li>
          <li>Consider using Steam Input to customize controller mappings for your preferred layout.</li>
        </ul>
      </section>

      <section className="prose-game">
        <h2>Accessibility Features</h2>
        <ArticleImage
          src={zeroParadesImages.screenshot5}
          alt="ZERO PARADES accessibility features screenshot"
          caption="Steam lists several accessibility features that improve the controller and handheld experience: adjustable text, no timed input, subtitle options, and stereo sound."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Feature</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">What it means</th>
            </tr>
          </thead>
          <tbody>
            {zeroParadesFeatureRows.map(([feature, status]) => (
              <tr key={feature} className="border-b border-border/30 last:border-0">
                <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{feature}</th>
                <td className="px-4 py-3 text-muted-foreground">{status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ZeroParadesArticle>
  );
}
