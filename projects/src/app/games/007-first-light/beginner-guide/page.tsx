import { ArticleImage, VideoEmbed } from '@/components/article-media';
import { BlufBox } from '@/components/guide-blocks';
import { FirstLightArticle } from '@/components/007-first-light-article';
import {
  createFirstLightMetadata,
  firstLightBeginnerRows,
  firstLightImages,
  firstLightVideos,
} from '@/lib/007-first-light';

const title = '007 First Light Beginner Guide: Stealth, Gadgets & Combat';
const description =
  'Spoiler-light 007 First Light beginner guide for stealth, gadgets, bluffing, firefights, driving, mission replay, modifiers, and avoiding opening spoilers.';
const canonical = '/games/007-first-light/beginner-guide';

export const metadata = createFirstLightMetadata({
  title,
  description,
  canonical,
  image: firstLightImages.hero,
});

const faqs = [
  {
    question: 'Should I play 007 First Light stealthy or loud?',
    answer:
      'Start stealth-first and escalate only when needed. Steam describes silent and loud options, including fists, firepower, gadgets, infiltration, and bluffing past guards.',
  },
  {
    question: 'Are gadgets important in 007 First Light?',
    answer:
      'Yes. Steam copy highlights gadgets as part of infiltration, so treat them as route tools rather than only combat items.',
  },
  {
    question: 'Can you replay missions in 007 First Light?',
    answer:
      'Steam says players can replay favorite missions with additional modifiers, which makes recording your first route useful.',
  },
  {
    question: 'Should I watch the first 13 minutes before playing?',
    answer:
      'Only if you are comfortable with opening mission spoilers. The official video is useful for gameplay context but not necessary for a blind start.',
  },
];

export default function FirstLightBeginnerGuidePage() {
  return (
    <FirstLightArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Beginner Guide"
      heroImage={firstLightImages.hero}
      heroAlt="007 First Light agent close-up beginner guide image"
      faqs={faqs}
    >
      <BlufBox title="First Mission Plan">
        <p>
          <strong>Start like a spy, not like a shooter.</strong> Try stealth,
          gadgets, observation, and bluffing before loud combat. 007 First Light
          supports action, but the store description makes it clear that the
          interesting choice is how you approach a mission.
        </p>
      </BlufBox>

      <section className="prose-game">
        <h2>First-Session Priorities</h2>
        <ArticleImage
          src={firstLightImages.background}
          alt="007 First Light action scene stealth and gadget beginner guide image"
          caption="The first useful habit is reading a room before acting: guards, routes, cover, gadgets, and exits matter before the first shot."
        />
      </section>

      <div className="my-6 overflow-hidden rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Beginner habit</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why it matters</th>
            </tr>
          </thead>
          <tbody>
            {firstLightBeginnerRows.map(([habit, reason]) => (
              <tr key={habit} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{habit}</td>
                <td className="px-4 py-3 text-muted-foreground">{reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2>How to Think About Mission Replay</h2>
        <p>
          Because Steam describes replaying missions with additional modifiers,
          your first run should be clean and readable. Note whether you used
          stealth, gadgets, bluffing, driving, or open combat. That makes a
          second route more useful than simply replaying the same choices.
        </p>

        <h2>Opening Gameplay Video</h2>
        <p>
          The official first 13 minutes video is helpful if you want to see
          pacing and controls, but it shows opening mission content. Skip it if
          your priority is a blind first mission.
        </p>
      </section>

      <VideoEmbed
        videoId={firstLightVideos[1].id}
        title={firstLightVideos[1].title}
        caption={firstLightVideos[1].caption}
      />
    </FirstLightArticle>
  );
}
