import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { ActionTable, BlufBox, SearchAnswerPanel, SourceCheckTable, StatusPanel } from '@/components/guide-blocks';
import { VoidlingBoundArticle } from '@/components/voidling-bound-article';
import { createVoidlingBoundMetadata, voidlingBoundImages, voidlingGuideFaqs } from '@/lib/voidling-bound';
import { vbControlsActionRows, vbControlsJumpLinks, vbControlsSearchIntent, vbControlsSourceRows, vbControlsStatusItems } from '@/lib/voidling-bound';

const title = 'Voidling Bound Controls: Keyboard Keybinds, Controller Support & Remap Guide';
const description =
 'Complete Voidling Bound controls guide: default keyboard keybinds (WASD, abilities, dodge), Xbox controller layout, Steam Deck setup, and how to remap every key in settings.';
const canonical = '/games/voidling-bound/controls';

export const metadata = createVoidlingBoundMetadata({ title, description, canonical, image: voidlingBoundImages.hero });

export default function VoidlingBoundControlsGuidePage() {
 return (
 <VoidlingBoundArticle title={title} description={description} canonical={canonical} label="Controls Guide" heroImage={voidlingBoundImages.hero} heroAlt="Voidling Bound controls and keybinds guide image" faqs={voidlingGuideFaqs.controls}>
 <BlufBox title="Controls Rule">
 <p>
 <strong>Learn the 12 core keys, then customize.</strong> Voidling Bound supports full key remapping for both keyboard and controller. Start with the defaults, adjust for comfort, and master dodge timing for high-difficulty content.
 </p>
 </BlufBox>

 <SearchAnswerPanel
 title="Voidling Bound Controls Quick Answer"
 answer="WASD move, left click Primary Attack, right click Secondary Attack, V melee, Q Defense, E Movement, R Ultimate, Shift sprint, Ctrl dodge, Space jump, F interact, Esc menu. Full remap in Settings > Controls."
 intentRows={vbControlsSearchIntent}
 jumpLinks={vbControlsJumpLinks}
 />

 <StatusPanel items={vbControlsStatusItems} />

 <ActionTable rows={vbControlsActionRows} />

 <section className="prose-game" id="controls-keyboard">
 <h2>Default Keyboard Controls</h2>
 <div className="overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist/40">
 <th className="px-4 py-3 text-left font-semibold text-foreground w-1/3">Action</th>
 <th className="px-4 py-3 text-left font-semibold text-foreground">Key</th>
 </tr>
 </thead>
 <tbody>
 {[
 ['Move', 'W A S D'],
 ['Sprint', 'Left Shift'],
 ['Jump', 'Space'],
 ['Dodge / Evade', 'Left Ctrl'],
 ['Primary Attack', 'Left Mouse'],
 ['Secondary Attack', 'Right Mouse'],
 ['Melee Attack', 'V'],
 ['Defense Skill', 'Q'],
 ['Movement Skill', 'E'],
 ['Ultimate Skill', 'R'],
 ['Interact', 'F'],
 ['Reload', 'R (context)'],
 ['Pause / Menu', 'Esc'],
 ].map(([action, key]) => (
 <tr key={action} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-medium text-foreground">{action}</td>
 <td className="px-4 py-3 text-muted-foreground"><kbd className="rounded border border-border bg-mist/60 px-2 py-0.5 text-xs font-mono">{key}</kbd></td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </section>

 <section className="prose-game" id="controls-controller">
 <h2>Controller Layout (Xbox)</h2>
 <div className="overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist/40">
 <th className="px-4 py-3 text-left font-semibold text-foreground w-1/3">Action</th>
 <th className="px-4 py-3 text-left font-semibold text-foreground">Button</th>
 </tr>
 </thead>
 <tbody>
 {[
 ['Move', 'Left Stick'],
 ['Camera', 'Right Stick'],
 ['Sprint', 'L3 (Left Stick Press)'],
 ['Jump', 'A'],
 ['Dodge / Evade', 'B'],
 ['Primary Attack', 'RT / R2'],
 ['Secondary Attack', 'LT / L2'],
 ['Melee Attack', 'RB / R1'],
 ['Defense Skill', 'LB / L1'],
 ['Movement Skill', 'Y / Triangle'],
 ['Ultimate Skill', 'X / Square'],
 ['Interact', 'X / Square (context)'],
 ['Pause / Menu', 'Menu Button'],
 ].map(([action, button]) => (
 <tr key={action} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-medium text-foreground">{action}</td>
 <td className="px-4 py-3 text-muted-foreground"><kbd className="rounded border border-border bg-mist/60 px-2 py-0.5 text-xs font-mono">{button}</kbd></td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 <p className="mt-4 text-sm text-muted-foreground">
 Steam Deck uses the same Xbox layout natively. All controller buttons can be remapped in Settings {'>'} Controls.
 </p>
 </section>

 <section className="prose-game" id="controls-dodge">
 <h2>Dodge Mechanics</h2>
 <ArticleImage src={voidlingBoundImages.screenshot1} alt="Voidling Bound dodge and evasion mechanics" caption="Mastering dodge timing is critical for high-difficulty missions and Abyss endgame layers." />
 <p>
 The dodge (Ctrl on keyboard, B on controller) provides invincibility frames during the dodge animation. This makes it your primary survival tool against heavy attacks, boss abilities, and area-of-effect damage. Unlike sprint, the dodge has a brief cooldown and cannot be spammed — timing matters more than frequency.
 </p>
 <p>
 Practice dodge timing in early missions. Each species has slightly different dodge distance and recovery speed. Some species have abilities that enhance or replace the standard dodge — check the ability slot labels in the{' '}
 <Link href="/games/voidling-bound/database">database</Link> for species-specific mobility options.
 </p>
 </section>

 <section className="prose-game" id="controls-combos">
 <h2>Ability Combos and Rhythm</h2>
 <p>
 Each Voidling species has four ability slots mapped to Q (Defense), E (Movement), R (Ultimate), and V (Melee). The Primary (left click) and Secondary (right click) attacks form your basic combat loop. A typical combo rotation is: open with Secondary Attack, follow with Defense (Q) for protection, use Movement (E) to reposition, then Slam Ultimate (R) when the window opens.
 </p>
 <p>
 Ability cooldowns vary by species and evolution branch. The same species on different element branches may have different cooldown lengths. Use the training mode to practice your specific species\u2019s combo rhythm before real missions.
 </p>
 </section>

 <section className="prose-game" id="controls-remap">
 <h2>Custom Remapping</h2>
 <p>
 All keybinds can be fully customized in Settings {'>'} Controls. Common adjustments include: rebinding Melee (V) to a mouse thumb button for faster access, swapping Dodge (Ctrl) to Shift if Ctrl feels awkward, or moving Ultimate (R) to a more accessible key if you play a species that relies on it heavily.
 </p>
 <p>
 Controller players can remap every button independently. The Steam Input layer also allows per-game profiles for deeper customization on Steam Deck and PC.<br />
 For more combat tips, see the{' '}
 <Link href="/games/voidling-bound/beginner-guide">Beginner Guide</Link> or browse species builds in the{' '}
 <Link href="/games/voidling-bound/database">Database</Link>.
 </p>
 </section>

 <SourceCheckTable title="Voidling Bound Controls Sources" rows={vbControlsSourceRows} />
 </VoidlingBoundArticle>
 );
}
