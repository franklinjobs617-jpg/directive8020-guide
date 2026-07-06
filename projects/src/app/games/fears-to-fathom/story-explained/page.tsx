import Link from 'next/link';
import { ArticleImage } from '@/components/article-media';
import { createFearsToFathomMetadata, fearsToFathomImages } from '@/lib/fears-to-fathom';

const title = 'Fears to Fathom Scratch Creek: Story & Ending Explained - The Cult, Miss Julia & Connor Hawkins';
const description =
 'Full story breakdown of Fears to Fathom: Scratch Creek. Who is the Scratch Creek cult? What really happened at Miss Julia\'s house? The Connor Hawkins (Ironbark Lookout) connection explained, and what each ending means for Marcus and Tessa.';
const canonical = '/games/fears-to-fathom/story-explained';

export const metadata = createFearsToFathomMetadata({ title, description, canonical, image: fearsToFathomImages.missJulia });

const storySections = [
 {
  title: 'Who Are Marcus and Tessa?',
  content:
   'Marcus Reed and Tessa Langley are a young couple moving for Marcus\'s career. They are driving through rural Oregon with a trailer of their belongings. The game opens with them packing up their home -?Tessa texts her father, who confirms they must leave tonight. From the start, there is an unspoken tension: Marcus is the one moving for work, and Tessa is following. This dynamic shapes how the cult perceives them -?Marcus as the primary target (the one making decisions), Tessa as collateral.',
 },
 {
  title: 'What Is Scratch Creek?',
  content:
   'Scratch Creek is a small, abandoned Oregon town that appears on the map after the couple\'s crash. It is not on normal maps -?the NavGo GPS only shows it after the Interstate detour. The town is a front for a decades-old cult that lures travelers off the highway, traps them, and uses them in rituals. Newspaper clippings found in the farmhouse basement reveal that people have been going missing in Scratch Creek for over 20 years. The town\'s abandoned appearance is deliberate -?it keeps outsiders curious enough to explore, but just unsettling enough to leave quickly. Those who stay are never seen again.',
 },
 {
  title: 'The Cult -?Who Are They?',
  content:
   'The cult operates through a network of seemingly helpful locals: Buck (the gas station owner), Harry (Buck\'s assistant), Bill (the farmhouse owner), his wife Charlotte, and Miss Julia (the bed & breakfast host). Together they form a trap: Buck directs stranded travelers to Bill, Bill sends them to Miss Julia, and Miss Julia prepares them for the ritual. The cult\'s goal is sacrifice -?travelers are used as "replacements" in a ritual that keeps the cult members alive or appeases whatever entity they worship. Miss Julia mentions "using you as replacements" during the 3:33 AM conversation that Tessa overhears.',
 },
 {
  title: 'Miss Julia\'s House -?What Really Happens There',
  content:
   'Miss Julia\'s bed & breakfast is the cult\'s preparation chamber. Every detail is designed to separate and weaken the victims: Marcus is sent to the church basement (isolated, in the dark), Tessa is kept in the house (watched, but not directly threatened yet). The towel puzzle is a deliberate misdirection -?it forces Marcus into the church basement alone, where the secret tunnel connects directly to Miss Julia\'s basement. This is how the cult moves victims without being seen. The guest book that Tessa signs is not a real guest book -?it is a record of who has been through the house. Every name in it belongs to someone the cult has killed. The 3:33 AM timing is significant: in many occult traditions, 3:00 AM to 3:33 AM is the "witching hour" when the barrier between worlds is thinnest.',
 },
 {
  title: 'The Church Basement & the Secret Tunnel',
  content:
   'The church with the red glowing window is not a real church -?it is a disguised ritual site. The basement contains the laundry room (a practical cover), but the back room reveals the truth: a secret tunnel connecting to Miss Julia\'s house. The tunnel is how cult members move between locations without being seen on the roads. When Marcus retrieves the towels and the door locks behind him, this is intentional -?the cult wants to trap him. Finding the tunnel is not a puzzle solution; it is the cult\'s mistake. They did not expect a victim to explore the back room. The tunnel leads directly into Miss Julia\'s basement (the door that was "off limits" earlier), which is why the cult members are angry when Marcus emerges from it.',
 },
 {
  title: 'C. Hawkins -?The Ironbark Lookout Connection',
  content:
   'Connor Hawkins (marked as "C. Hawkins" on the coffin) is the antagonist from Fears to Fathom: Ironbark Lookout, a previous episode in the series. In Ironbark Lookout, Connor was a fire lookout who became a serial killer. His appearance in Scratch Creek confirms that the Fears to Fathom universe is connected -?the cult that operates in Scratch Creek is part of a larger network of killers and cultists across rural America. Connor\'s coffin in the 3:33 AM escape sequence suggests he is either a victim of the cult (they turned on him) or an ally (he provided victims to them). The game intentionally leaves this ambiguous. His presence is a reward for series fans -?you do not need to know who he is to understand Scratch Creek, but recognizing him adds a deeper layer of dread.',
 },
 {
  title: 'The 3:33 AM Escape -?Why It Works',
  content:
   'The escape sequence succeeds because Marcus and Tessa do what no previous victims did: they stick together. Every other victim was successfully separated and picked off. Marcus hides under the bed (not the wardrobe -?the wardrobe is where the stalker checks first), Tessa returns at the right moment, and they run together. In the tunnel, choosing the coffin room (right turn) instead of the church (straight) is the critical decision. The church door is locked -?running straight means death. The coffins are where the cult stores previous victims\' bodies. Hiding inside them is the last thing the cult expects -?it is the one place they will not look.',
 },
 {
  title: 'The True Ending -?What It Means',
  content:
   'The True Ending (escaping by car after unhooking the trailer) is about shedding the past. The trailer represents everything Marcus and Tessa brought with them -?their old life, their belongings, the weight of their relationship tension. Unhooking it is not just a gameplay mechanic; it is symbolic. They leave behind everything material and escape with only each other. When they call the police from the main road, it is the first time an outside authority learns about Scratch Creek. The final shot -?the town in the distance at sunrise -?suggests the cycle may finally be broken. But the radio playing about "two more missing people" in the alternate endings implies the cult is still active.',
 },
 {
  title: 'The Alternate Endings -?What They Mean',
  content:
   '<strong>Interstate Ending (stay on 5 North):</strong> You never reach Scratch Creek. You arrive late but safely. This is the "ignorance is bliss" ending -?Marcus and Tessa never learn what lurks in the town, but they survive. The downside: the cult continues operating, and more victims will be taken.\n\n<strong>Backroads Ending (turn left at the fork):</strong> You get lost and find the highway again. Like the Interstate ending, this is a narrow escape through luck rather than action. The cult is never confronted.\n\n<strong>Death at 3:33 AM:</strong> The most common death. Failing the escape sequence means Marcus and Tessa become two more names in the guest book. Their bodies join the others in the coffins.\n\n<strong>Death at Bill\'s House:</strong> You made it through the worst, only to fail at the last moment. The trailer -?the weight of the past -?literally drags you down.',
 },
];

export default function FearsToFathomStoryExplainedPage() {
 return (
  <main className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
   <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{title}</h1>

   <p className="mt-4 text-base text-muted-foreground leading-relaxed">
    Fears to Fathom: Scratch Creek is not just a co-op horror game - it is a story about
    a decades-old cult operating in rural Oregon, a couple caught in its trap, and a
    connection to the larger Fears to Fathom universe. This guide explains the full story.
   </p>

   <div className="mt-6 rounded-lg border-2 border-yellow-200 bg-yellow-50 p-4">
    <p className="text-sm font-bold text-yellow-900">Spoiler Warning</p>
    <p className="mt-1 text-sm text-yellow-800">
     This page contains complete story spoilers for Fears to Fathom: Scratch Creek,
     including all endings and connections to Ironbark Lookout. Read after finishing the game.
    </p>
   </div>

   <ArticleImage
    src={fearsToFathomImages.missJulia}
    alt="Fears to Fathom: Scratch Creek - Miss Julia's house and the cult's secret"
    caption="Miss Julia's bed & breakfast is the cult's preparation chamber. Every guest who signed the book is dead."
   />

   {storySections.map((section) => (
    <section key={section.title} className="mt-8">
     <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
     {section.content.includes('strong>') ? (
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground"
       dangerouslySetInnerHTML={{ __html: section.content.split('\n\n').map(p => `<p>${p}</p>`).join('') }} />
     ) : (
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{section.content}</p>
     )}
    </section>
   ))}

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
    Reference note: Destructoid, TheGamer, Fandom Wiki, community lore discussions, in-game documents. Last updated June 15, 2026.
   </p>
  </main>
 );
}
