import { ArticleImage } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { MechanicusIIArticle } from '@/components/mechanicus-ii-article';
import {
  createMechanicusIIMetadata,
  mechanicusIIFactionRows,
  mechanicusIIImages,
} from '@/lib/mechanicus-ii';

const title = 'Warhammer 40,000: Mechanicus II Factions Guide';
const description =
  'Mechanicus II factions guide covering the Adeptus Mechanicus, Necrons, dual campaigns, leaders, battlefield identity, and what still needs hands-on testing.';
const canonical = '/games/mechanicus-ii/factions';

export const metadata = createMechanicusIIMetadata({
  title,
  description,
  canonical,
  image: mechanicusIIImages.screenshot2,
});

const faqs = [
  {
    question: 'What factions are playable in Mechanicus II?',
    answer:
      'Steam describes two distinct campaigns: the Adeptus Mechanicus and the Necrons.',
  },
  {
    question: 'Who leads the Adeptus Mechanicus campaign?',
    answer:
      'Steam names Magos Dominus Faustinius as the Adeptus Mechanicus campaign commander.',
  },
  {
    question: 'Who leads the Necron campaign?',
    answer:
      'Steam names Vargard Nefershah as the Necron campaign commander.',
  },
  {
    question: 'Which faction is best in Mechanicus II?',
    answer:
      'It is too early to call a final best faction. Choose by campaign fantasy and tactical preference until more completed runs and patches settle the meta.',
  },
];

export default function MechanicusIIFactionsPage() {
  return (
    <MechanicusIIArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Factions"
      heroImage={mechanicusIIImages.screenshot2}
      heroAlt="Warhammer 40,000 Mechanicus II factions image"
      faqs={faqs}
    >
      <BlufBox title="Faction Answer">
        <p>
          <strong>Mechanicus II lets players experience both the Adeptus
          Mechanicus and the Necrons through distinct campaigns.</strong> That
          is the central faction answer. The unsafe claim is calling one side
          the best before enough campaign data, difficulty reports, and balance
          updates exist.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2>Adeptus Mechanicus vs Necrons</h2>
        <ArticleImage
          src={mechanicusIIImages.screenshot1}
          alt="Warhammer 40,000 Mechanicus II Adeptus Mechanicus and Necrons image"
          caption="The faction choice changes campaign perspective and battlefield priorities, not just unit visuals."
        />
        <p>
          The faction question matters because Mechanicus II is built around
          two sides of the conflict. The Adeptus Mechanicus campaign follows
          Magos Dominus Faustinius, while the Necron campaign follows Vargard
          Nefershah. For players, this means the first decision is about
          perspective, tactical identity, and how much they want to learn at
          once.
        </p>
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Faction choice</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best current reading</th>
            </tr>
          </thead>
          <tbody>
            {mechanicusIIFactionRows.map(([choice, answer]) => (
              <tr key={choice} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{choice}</td>
                <td className="px-4 py-3 text-muted-foreground">{answer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>How to Choose a First Campaign</h2>
        <p>
          Choose Adeptus Mechanicus first if you want the sequel to feel closer
          to the tech-priest identity that made the first Mechanicus stand out.
          Choose Necrons first if the new playable perspective is the reason
          you are here. Either way, stay with the campaign long enough to learn
          its economy before judging final difficulty or unit strength.
        </p>
      </section>
    </MechanicusIIArticle>
  );
}
