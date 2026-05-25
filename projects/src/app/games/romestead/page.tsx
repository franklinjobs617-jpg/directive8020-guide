import Image from 'next/image';
import Link from 'next/link';
import { ArticleImage, VideoEmbed } from '@/components/article-media';
import { BlufBox, StatusPanel } from '@/components/guide-blocks';
import { RomesteadArticle } from '@/components/romestead-article';
import { romestead } from '@/lib/games';
import {
  createRomesteadMetadata,
  romesteadImages,
  romesteadQuickFacts,
  romesteadVideos,
} from '@/lib/romestead';

const title = 'Romestead Guide Hub: Release Date, Co-op, Early Access & Beginner Tips';
const description =
  'Romestead guide hub for Steam Early Access: release timing, 1-8 player co-op, PC requirements, beginner settlement priorities, Steam Deck cautions, and buy-or-wait advice.';
const canonical = '/games/romestead';

export const metadata = createRomesteadMetadata({
  title,
  description,
  canonical,
  image: romesteadImages.hero,
});

const faqs = [
  {
    question: 'What is Romestead?',
    answer:
      'Romestead is a Roman-inspired survival crafting and town-building game from Beartwigs and Three Friends with settlement building, survivor recruitment, exploration, dungeons, undead night attacks, and co-op.',
  },
  {
    question: 'When does Romestead release?',
    answer:
      'Steam displays May 25, 2026, while SteamDB unlock timing points to May 26, 2026 at 06:30 UTC. Check your local Steam page before planning a launch session.',
  },
  {
    question: 'Is Romestead Early Access?',
    answer:
      'Yes. Romestead is launching through Steam Early Access, and the developer expects roughly 1-2 years before the full 1.0 release.',
  },
  {
    question: 'How many players can play Romestead?',
    answer:
      'The official Steam description lists 1-8 players, and Steam feature labels include Online Co-op and LAN Co-op.',
  },
  {
    question: 'Is Romestead on Xbox, PlayStation, or Steam Deck?',
    answer:
      'PC via Steam is the verified platform right now. Xbox and PlayStation versions are not confirmed in current official store data, and Steam Deck support needs launch testing.',
  },
  {
    question: 'What should beginners do first in Romestead?',
    answer:
      'Start with resources, food, storage, workstations, and a compact defensive settlement before pushing far into dungeons or distant biomes.',
  },
];

function getGuideImage(href: string) {
  if (href.includes('beginner')) return romesteadImages.screenshot1;
  if (href.includes('multiplayer')) return romesteadImages.screenshot3;
  if (href.includes('system')) return romesteadImages.screenshot4;
  if (href.includes('worth')) return romesteadImages.screenshot5;
  return romesteadImages.capsule;
}

export default function RomesteadHubPage() {
  return (
    <RomesteadArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Romestead"
      heroImage={romesteadImages.hero}
      heroAlt="Romestead Steam key art showing Roman-inspired survival town building"
      faqs={faqs}
    >
      <BlufBox title="Launch Snapshot">
        <p>
          <strong>Romestead is a Steam Early Access survival crafting and
          town-building game for PC.</strong> Steam shows May 25, 2026, while
          SteamDB unlock timing points to May 26, 2026 at 06:30 UTC. The safest
          player answer is to check your local Steam page before planning a
          co-op session. Official Steam information lists 1-8 players, Online
          Co-op, LAN Co-op, Steam Cloud, Family Sharing, and an Early Access
          window expected to last about 1-2 years.
        </p>
      </BlufBox>

      <StatusPanel
        items={romesteadQuickFacts.map(([label, value]) => ({
          label,
          value,
          status: label.includes('Controller') ? 'needs-check' : 'verified',
        }))}
      />

      <section className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Romestead Guide Map</h2>
        <ArticleImage
          src={romesteadImages.capsule}
          alt="Romestead guide hub settlement image"
          caption="Start with the guide that matches the decision in front of you: release timing, first settlement steps, co-op setup, PC specs, or Early Access buying risk."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {romestead.guideLinks.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group overflow-hidden rounded-lg border border-border/50 bg-card/30 transition-colors hover:border-emerald-400/40"
            >
              <div className="relative aspect-video">
                <Image
                  src={getGuideImage(guide.href)}
                  alt={guide.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/25 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-foreground group-hover:text-emerald-300">
                  {guide.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {guide.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="prose-game">
        <h2>What Players Need First</h2>
        <ArticleImage
          src={romesteadImages.screenshot1}
          alt="Romestead early settlement building screenshot"
          caption="Official Romestead imagery shows the survival loop players need to understand first: gather, craft, organize the settlement, survive night pressure, then explore wider routes."
        />
        <p>
          Romestead is not just a Roman theme page. The useful launch questions
          are practical: whether the game is actually unlocked in your region,
          whether your group can play together, whether Early Access is worth
          buying now, what PC specs are needed, and which first-hour choices
          prevent a weak settlement from falling behind.
        </p>
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player question</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Best current answer</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Is it out?', 'Steam shows May 25, 2026; SteamDB unlock timing points to May 26, 2026 at 06:30 UTC.'],
              ['Is it finished?', 'No. It is an Early Access game, with roughly 1-2 years expected before 1.0.'],
              ['Can I play with friends?', 'Yes, official info lists 1-8 players with Online Co-op and LAN Co-op.'],
              ['Is it on console?', 'Not confirmed in current official store data. PC via Steam is verified.'],
              ['Should I buy now?', 'Buy if Early Access town-building co-op is your thing; wait if you need polished 1.0, Deck proof, or console support.'],
            ].map(([question, answer]) => (
              <tr key={question} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{question}</td>
                <td className="px-4 py-3 text-muted-foreground">{answer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>Settlement Planning Illustration</h2>
        <ArticleImage
          src={romesteadImages.planningFarmOverview}
          alt="Romestead-style settlement planning illustration"
          caption="Planning illustration for layout thinking: keep farms, animal pens, storage, and work areas readable before the settlement grows too wide."
        />
        <p>
          A good Romestead settlement should be easy to read at a glance. Keep
          animal pens, crops, storage, and workstations close enough that jobs
          make sense, but leave room for paths and defense. This illustration is
          for planning the layout idea; official screenshots should be used for
          exact in-game visuals.
        </p>
      </section>

      <section className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Official Video Reference</h2>
        <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
          Use the official trailer for the tone and feature framing. Do not use
          trailer footage as proof of final balance, best builds, late-game
          stability, or exact dungeon routes.
        </p>
        <VideoEmbed
          videoId={romesteadVideos[0].id}
          title={romesteadVideos[0].title}
          caption={romesteadVideos[0].caption}
        />
      </section>
    </RomesteadArticle>
  );
}
