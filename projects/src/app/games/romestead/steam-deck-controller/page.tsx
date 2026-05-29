import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, SearchAnswerPanel, StatusPanel } from '@/components/guide-blocks';
import { RomesteadArticle } from '@/components/romestead-article';
import { createRomesteadMetadata, romesteadImages } from '@/lib/romestead';

const title = 'Romestead Steam Deck & Controller Guide: Handheld Checks, Settings and Co-op';
const description =
  'Romestead Steam Deck and controller guide covering current support status, handheld checks, UI readability, performance testing, co-op comfort, and safe setup steps.';
const canonical = '/games/romestead/steam-deck-controller';

export const metadata = createRomesteadMetadata({
  title,
  description,
  canonical,
  image: romesteadImages.screenshot3,
});

const faqs = [
  {
    question: 'Is Romestead Steam Deck Verified?',
    answer:
      'Treat Steam Deck support as unconfirmed until the live compatibility badge and player reports are stable. Test the demo or refund-window opening hour before planning a long handheld save.',
  },
  {
    question: 'Does Romestead support controller?',
    answer:
      'Controller comfort needs a live check. Romestead has settlement menus, crafting, building, inventory, combat, and co-op actions, so button mapping and UI readability matter more than whether the game simply launches.',
  },
  {
    question: 'What should I test first on Steam Deck?',
    answer:
      'Test text size, inventory movement, building placement, combat, nighttime visibility, co-op joining, save behavior, and battery heat before committing to a long settlement.',
  },
  {
    question: 'Should I buy Romestead only for Steam Deck?',
    answer:
      'Wait for stronger handheld reports if Steam Deck is your only platform. Buy sooner only if you also have a Windows PC fallback.',
  },
];

const searchIntentRows = [
  {
    query: 'Romestead Steam Deck',
    answer: 'Use a cautious live-test approach: compatibility, text size, building controls, combat, and save behavior all need checking.',
    href: '#deck-checklist',
    label: 'Handheld',
  },
  {
    query: 'Romestead controller support',
    answer: 'Controller comfort should be tested across building, crafting, inventory, combat, and co-op, not only the main menu.',
    href: '#controller-checks',
    label: 'Controls',
  },
  {
    query: 'Romestead handheld settings',
    answer: 'Start with readable UI, stable frame pacing, lower effects if needed, and short test saves before long sessions.',
    href: '#first-hour-test',
    label: 'Setup',
  },
  {
    query: 'Romestead co-op on Deck',
    answer: 'Join a small session first and verify chat, menus, inventory, host save behavior, and nighttime combat readability.',
    href: '#coop-handheld',
    label: 'Co-op',
  },
];

const jumpLinks = [
  { href: '#deck-status', label: 'Deck status' },
  { href: '#first-hour-test', label: 'First-hour test' },
  { href: '#controller-checks', label: 'Controller checks' },
  { href: '#coop-handheld', label: 'Co-op' },
  { href: '/games/romestead/beginner-guide', label: 'Beginner route' },
  { href: '/games/romestead/system-requirements', label: 'PC specs' },
];

const firstHourRows = [
  {
    step: 'Boot and display',
    doThis: 'Check launch, resolution, text readability, brightness, and whether night scenes remain readable.',
    why: 'A town builder with crafting and combat becomes tiring quickly if small UI text or dark scenes are hard to read.',
  },
  {
    step: 'Inventory and crafting',
    doThis: 'Move items, craft basic tools, open storage, and navigate workstation menus with controller input.',
    why: 'These actions repeat constantly, so awkward controls matter more than a single combat test.',
  },
  {
    step: 'Building placement',
    doThis: 'Place foundations, workstations, storage, and defensive pieces with the handheld controls you plan to use.',
    why: 'Romestead is a settlement game; uncomfortable placement can slow every session.',
  },
  {
    step: 'Combat and night pressure',
    doThis: 'Fight basic enemies, dodge or reposition, and check frame pacing when the settlement is active.',
    why: 'Handheld performance can feel fine in daylight gathering and worse once combat and effects stack.',
  },
  {
    step: 'Save and co-op check',
    doThis: 'Make a short save, reload it, then join or host a small session if co-op is part of your plan.',
    why: 'A stable save and comfortable group flow matter before you invest hours into one settlement.',
  },
];

const controllerRows = [
  ['Building', 'Can you rotate, place, cancel, and adjust objects without fighting the cursor?'],
  ['Inventory', 'Can you split stacks, move resources, and open storage quickly?'],
  ['Crafting', 'Are workstation menus readable and easy to navigate?'],
  ['Combat', 'Can you aim, dodge, interact, and swap tools under pressure?'],
  ['Co-op', 'Can you communicate roles and manage menus while other players keep moving?'],
  ['Comfort', 'Does a 30-minute session still feel readable and responsive?'],
];

export default function RomesteadSteamDeckControllerPage() {
  return (
    <RomesteadArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Steam Deck & Controller"
      heroImage={romesteadImages.screenshot3}
      heroAlt="Romestead co-op and handheld controller planning screenshot"
      faqs={faqs}
      showSources={false}
    >
      <SearchAnswerPanel
        title="Is Romestead good on Steam Deck or controller?"
        answer="Romestead should be treated as a live-test handheld game until compatibility, UI readability, building controls, combat, co-op flow, and save behavior are comfortable on your device. Test the first hour before committing to a long settlement."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="Handheld Rule">
        <p>
          <strong>Do not judge Romestead on Steam Deck from the main menu.</strong>{' '}
          A real test needs gathering, crafting, building placement, inventory
          movement, combat, night visibility, and a save reload.
        </p>
      </BlufBox>

      <div id="deck-status">
        <StatusPanel
          items={[
            { label: 'Steam Deck badge', value: 'Check the live Steam compatibility badge before buying for handheld only.', status: 'needs-check' },
            { label: 'Controller comfort', value: 'Needs hands-on testing across building, crafting, combat, and menus.', status: 'working' },
            { label: 'Best fallback', value: 'Windows PC remains the safer primary platform for long Early Access saves.', status: 'verified' },
            { label: 'Co-op handheld play', value: 'Test small sessions first before planning an 8-player settlement from Deck.', status: 'working' },
          ]}
        />
      </div>

      <section className="prose-game">
        <h2 id="first-hour-test">First-Hour Steam Deck Test</h2>
        <ArticleImage
          src={romesteadImages.screenshot4}
          alt="Romestead Steam Deck first hour exploration and settlement check"
          caption="A good handheld test includes exploration, base work, inventory flow, building placement, combat, and save behavior."
        />
      </section>

      <ActionTable rows={firstHourRows} />

      <section className="prose-game">
        <h2 id="controller-checks">Controller Comfort Checklist</h2>
        <p>
          Romestead is not only a combat game. The controller test should focus
          on repeated settlement actions because those are what you will do for
          hours: placing structures, moving resources, navigating crafting
          menus, and reacting when night pressure starts.
        </p>
      </section>

      <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Area</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Pass condition</th>
            </tr>
          </thead>
          <tbody>
            {controllerRows.map(([area, check]) => (
              <tr key={area} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{area}</td>
                <td className="px-4 py-3 text-muted-foreground">{check}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose-game">
        <h2 id="coop-handheld">Co-op on Handheld</h2>
        <ArticleImage
          src={romesteadImages.screenshot3}
          alt="Romestead co-op handheld comfort check"
          caption="For co-op, verify host flow, menus, inventory, combat readability, and role communication before a long group save."
        />
        <p>
          If you plan to play co-op from handheld, start with two to four
          players before a larger group. Assign one player to gathering, one to
          early storage and workstations, and one to scouting. If menus slow
          you down on Deck, use the{' '}
          <Link href="/games/romestead/multiplayer-coop">co-op guide</Link>{' '}
          to pick a simpler first-session role.
        </p>
      </section>
    </RomesteadArticle>
  );
}
