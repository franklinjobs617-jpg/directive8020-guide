import Link from 'next/link';
import { createFearsToFathomMetadata, fearsToFathomImages } from '@/lib/fears-to-fathom';

const title = 'Fears to Fathom Scratch Creek Troubleshooting: Fix Dark Screen, Bugs, Crashes & Stuck Points';
const description =
 'Fix common Fears to Fathom: Scratch Creek issues. How to make the game brighter (no VHS toggle), fix matchmaking errors, stuck at the trailer escape, crashing on startup, black screen bugs, voice chat not working, and more.';
const canonical = '/games/fears-to-fathom/troubleshooting';

export const metadata = createFearsToFathomMetadata({ title, description, canonical, image: fearsToFathomImages.escape333 });

const issues = [
 {
  title: 'Game Is Too Dark -Cannot See Anything',
  severity: 'high',
  fix: 'Scratch Creek removed the VHS filter toggle that was available in previous episodes. There is no in-game brightness setting. Workarounds:<br/><br/>1. <strong>Increase your monitor/TV brightness</strong> -set it to 80-90% for this game.<br/>2. <strong>Use your graphics card control panel:</strong> NVIDIA Control Panel â?Adjust desktop color settings â?increase Brightness + Gamma. AMD Radeon Software â?Display â?Custom Color â?increase Brightness.<br/>3. <strong>Calibrate before the dark sections:</strong> The church basement and 3:33 AM chase are the darkest parts. Adjust your settings during the daytime sections so you are ready.<br/>4. <strong>Use the flashlight properly:</strong> The flashlight has limited range. Point it at the ground ahead of you, not straight forward -this illuminates more of your path.',
  note: 'The developer has not confirmed whether a brightness/VHS toggle will be added in a future patch. Many players have requested this on Steam discussions.',
 },
 {
  title: 'Stuck at Final Chase -Trailer Will Not Unhook',
  severity: 'high',
  fix: 'This is the #1 stuck point. The game gives zero prompts about unhooking the trailer. Here is the exact fix:<br/><br/>1. After hiding in the trailer and waiting for the man to enter the house, <strong>both players jump out</strong>.<br/>2. <strong>Only ONE player approaches the hitch</strong> (the connection point between car and trailer). If both players crowd the hitch, the interaction prompt may not appear.<br/>3. Walk slowly toward the hitch from the side. Stop and wait -the prompt can take a moment to register.<br/>4. If the prompt still does not appear: <strong>step away, stop pressing all buttons, and re-approach from a clean angle</strong> (directly from the driver\'s side).<br/>5. Once the trailer is unhooked, both players get in the car and drive.<br/><br/><strong>Do NOT try to escape on foot.</strong> You must use the car. Do NOT drive with the trailer attached -the car stalls instantly.',
  note: 'This is not a bug -it is a deliberate puzzle with poor communication. The developer intended for players to figure out the unhook step themselves.',
 },
 {
  title: 'Matchmaking Not Working -Cannot Find a Partner',
  severity: 'medium',
  fix: 'If the "Find Survivor" matchmaking is not connecting:<br/><br/>1. <strong>Check your Steam download region.</strong> Steam â?Settings â?Downloads â?Download Region. Set it to a major city near you.<br/>2. <strong>Restart the game.</strong> Matchmaking sometimes breaks after being in a private lobby.<br/>3. <strong>Use the Discord server instead.</strong> The official Fears to Fathom Discord and the Rayll Studios Discord have dedicated looking-for-group channels. Post there with your Steam friend code.<br/>4. <strong>Invite a Steam friend directly.</strong> From the main menu, click Connect â?invite a friend from your Steam friends list. This is more reliable than public matchmaking.<br/>5. <strong>Check server status.</strong> If no one is online, matchmaking will time out. Try during peak hours (evenings/weekends US time).',
 },
 {
  title: 'Voice Chat / Proximity Chat Not Working',
  severity: 'medium',
  fix: 'The game uses spatial/proximity voice chat. If you cannot hear your partner:<br/><br/>1. <strong>Check your default microphone in Windows:</strong> Settings â?Sound â?Input â?select your mic. The game uses the Windows default device.<br/>2. <strong>Check Steam voice settings:</strong> Steam â?Settings â?Voice â?make sure your mic is detected and the voice threshold is not too high.<br/>3. <strong>You may be too far apart.</strong> Proximity chat only works when characters are near each other. If you are separated (e.g., Marcus in the church, Tessa in the house), use the <strong>in-game text messaging system</strong> instead (press Tab to open the phone).<br/>4. <strong>Steam Overlay must be enabled.</strong> Disabling the overlay breaks voice chat. Check Steam â?Settings â?In Game â?Enable Steam Overlay.',
 },
 {
  title: 'Game Crashes on Startup / Black Screen',
  severity: 'high',
  fix: 'If the game shows a black screen or crashes immediately:<br/><br/>1. <strong>Verify game files.</strong> Steam â?Library â?right-click Fears to Fathom: Scratch Creek â?Properties â?Installed Files â?Verify integrity of game files.<br/>2. <strong>Update your GPU drivers.</strong> NVIDIA: GeForce Experience or nvidia.com. AMD: Adrenalin Software.<br/>3. <strong>Run the game in Windowed mode.</strong> Add <code>-windowed</code> to the launch options (Steam â?Properties â?General â?Launch Options).<br/>4. <strong>Check your antivirus.</strong> Some AV software (especially Bitdefender and McAfee) blocks the game\'s executable. Add an exception for the game folder.<br/>5. <strong>Disable overlays.</strong> Discord overlay, NVIDIA overlay, and Xbox Game Bar can conflict. Disable them one at a time to identify the culprit.<br/>6. <strong>Reinstall the game.</strong> It is only ~2GB -a clean reinstall often fixes stubborn startup issues.',
 },
 {
  title: 'Audio Cutting Out / No Sound',
  severity: 'low',
  fix: 'Audio issues are usually caused by output device conflicts:<br/><br/>1. <strong>Check your default audio output.</strong> Right-click the speaker icon â?Sounds â?Playback â?set your speakers/headphones as default.<br/>2. <strong>Disable other audio devices</strong> you are not using (especially virtual audio cables, Bluetooth headsets, and monitor speakers).<br/>3. <strong>Plug in headphones before launching the game.</strong> Switching audio devices mid-game can cause the game to lose its audio output.<br/>4. <strong>Set audio quality to 16-bit 44100 Hz</strong> in your playback device properties (Advanced tab). Some games conflict with higher sample rates.',
 },
 {
  title: 'Achievement Did Not Unlock',
  severity: 'low',
  fix: 'Some achievements require BOTH players to meet the condition:<br/><br/>1. <strong>Eavesdropper</strong> and <strong>Down in the Dark</strong> are per-player. If you are playing as Tessa and Marcus triggers one, YOU do not get it -you need to play as Marcus yourself.<br/>2. <strong>Survivor</strong> requires both players to complete the escape. If one player disconnects during the finale, the achievement may not unlock.<br/>3. <strong>Holy Cow</strong> (Cow Clicker 100M points) takes ~30 minutes of continuous clicking. It does not save progress if you exit the minigame. Do it in one session.<br/>4. <strong>Who\'s Watching?</strong> and <strong>The Drifter</strong> are missable -you cannot go back for them after passing their trigger points. Use a new save or checkpoint reload.',
 },
];

export default function FearsToFathomTroubleshootingPage() {
 return (
  <main className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
   <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{title}</h1>

   <p className="mt-4 text-base text-muted-foreground leading-relaxed">
    Scratch Creek launched June 10, 2026 with a few rough edges. Here are fixes for
    the most common issues reported by players on Steam, Reddit, and community discussions.
   </p>

   <div className="mt-6 space-y-6">
    {issues.map((issue) => (
     <section key={issue.title} className="rounded-lg border border-border bg-white overflow-hidden">
      <div className={`px-5 py-3 ${
       issue.severity === 'high' ? 'bg-red-50 border-b border-red-100' :
       issue.severity === 'medium' ? 'bg-yellow-50 border-b border-yellow-100' :
       'bg-blue-50 border-b border-blue-100'
      }`}>
       <div className="flex items-center gap-2">
        <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
         issue.severity === 'high' ? 'bg-red-200 text-red-800' :
         issue.severity === 'medium' ? 'bg-yellow-200 text-yellow-800' :
         'bg-blue-200 text-blue-800'
        }`}>
         {issue.severity === 'high' ? 'CRITICAL' : issue.severity === 'medium' ? 'COMMON' : 'MINOR'}
        </span>
        <h2 className="text-base font-bold text-foreground">{issue.title}</h2>
       </div>
      </div>
      <div className="px-5 py-4">
       <div className="text-sm leading-relaxed text-muted-foreground" dangerouslySetInnerHTML={{ __html: issue.fix }} />
       {issue.note && (
        <p className="mt-3 rounded-lg bg-mist p-3 text-xs text-muted-foreground">
         <strong>Note:</strong> {issue.note}
        </p>
       )}
      </div>
     </section>
    ))}
   </div>

   <div className="mt-8 rounded-lg border border-border bg-mist p-5">
    <h3 className="mb-3 text-sm font-bold text-foreground">More Scratch Creek Guides</h3>
    <div className="flex flex-wrap gap-3">
     <Link href="/games/fears-to-fathom" className="text-sm text-foreground underline hover:no-underline">Guide Hub</Link>
     <Link href="/games/fears-to-fathom/walkthrough" className="text-sm text-foreground underline hover:no-underline">Full Walkthrough</Link>
     <Link href="/games/fears-to-fathom/all-endings" className="text-sm text-foreground underline hover:no-underline">All Endings</Link>
     <Link href="/games/fears-to-fathom/co-op-guide" className="text-sm text-foreground underline hover:no-underline">Co-op & Solo FAQ</Link>
    </div>
   </div>

   <p className="mt-10 text-xs text-muted-foreground">
    Reference note: Steam community discussions, Steam reviews, player reports on Reddit and Discord. Last updated June 15, 2026. Issues may be patched in future updates.
   </p>
  </main>
 );
}
