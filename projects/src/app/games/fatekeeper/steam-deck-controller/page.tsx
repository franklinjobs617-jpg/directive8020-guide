import Link from "next/link";
import { ArticleImage } from "@/components/article-media";
import { ActionTable, BlufBox, SearchAnswerPanel, StatusPanel } from "@/components/guide-blocks";
import { FatekeeperArticle } from "@/components/fatekeeper-article";
import { createFatekeeperMetadata, fatekeeperImages } from "@/lib/fatekeeper";

const title = "Fatekeeper Steam Deck & Controller Guide: Compatibility, UI and Performance Checks";
const description =
 "Fatekeeper Steam Deck and controller guide covering compatibility status, controller comfort, UI readability, combat testing, performance checks, save behavior, and PC fallback advice.";
const canonical = "/games/fatekeeper/steam-deck-controller";

export const metadata = createFatekeeperMetadata({
 title,
 description,
 canonical,
 image: fatekeeperImages.deck,
});

const faqs = [
 {
 question: "Is Fatekeeper Steam Deck compatibility?",
 answer:
 "Treat Steam Deck status as unconfirmed until the live compatibility badge and stable player reports are available.",
 },
 {
 question: "Does Fatekeeper support controller?",
 answer:
 "Controller comfort should be tested in the live build. First-person melee, spell aiming, inventory, UI text, and quick reactions all matter.",
 },
 {
 question: "Should I buy Fatekeeper only for Steam Deck?",
 answer:
 "Wait for stronger compatibility reports if Steam Deck is your only device. A Windows PC fallback is safer during Early Access.",
 },
 {
 question: "What should I test first on handheld?",
 answer:
 "Test UI readability, frame pacing, input latency, melee timing, spell aiming, inventory navigation, heat, battery, and save reloads.",
 },
];

const searchIntentRows = [
 {
 query: "Fatekeeper Steam Deck",
 answer: "Deck status should be treated as unknown until the live compatibility badge and player reports are stable.",
 href: "#deck-status",
 label: "Deck",
 },
 {
 query: "Fatekeeper controller",
 answer: "Test melee timing, spell aiming, inventory, menus, and UI readability before committing to a long save.",
 href: "#controller-checks",
 label: "Controls",
 },
 {
 query: "Fatekeeper performance",
 answer: "The official PC baseline is demanding, so test frame pacing and effects-heavy combat early.",
 href: "#first-hour-test",
 label: "Performance",
 },
 {
 query: "Fatekeeper handheld",
 answer: "Do a refund-window test before buying only for handheld play.",
 href: "#first-hour-test",
 label: "Handheld",
 },
];

const jumpLinks = [
 { href: "#deck-status", label: "Deck status" },
 { href: "#first-hour-test", label: "First-hour test" },
 { href: "#controller-checks", label: "Controller" },
 { href: "/games/fatekeeper/release-date", label: "Release" },
 { href: "/games/fatekeeper/beginner-guide", label: "Beginner guide" },
 { href: "/games/fatekeeper/is-it-worth-it", label: "Worth it" },
];

const firstHourRows = [
 { step: "Boot and display", doThis: "Check launch, resolution, text size, brightness, and menu readability.", why: "Small UI text or dark scenes can make handheld play uncomfortable before combat starts." },
 { step: "Melee timing", doThis: "Fight a normal enemy and test block, dodge, light attack, heavy attack, and recovery.", why: "First-person melee depends on input timing and frame pacing." },
 { step: "Spell aiming", doThis: "Cast in a safe fight and check aim comfort, button mapping, cost reading, and recovery.", why: "Magic that feels awkward on controller can break a build." },
 { step: "Inventory", doThis: "Inspect weapons, armor, relics, and upgrades without rushing.", why: "Fatekeeper is gear-driven, so menu comfort matters." },
 { step: "Save reload", doThis: "Create a short save, reload it, and confirm Steam Cloud behavior if switching devices.", why: "A stable save path matters before a long Early Access run." },
];

const controllerRows = [
 ["Melee", "Can you attack, block, dodge, and recover without input delay?"],
 ["Magic", "Can you aim, cast, cancel, and read cost quickly?"],
 ["Inventory", "Can you compare weapons, armor, relics, and upgrades comfortably?"],
 ["Camera", "Can you track fast enemies without motion discomfort?"],
 ["Text", "Can you read item descriptions, lore, and menu labels in handheld mode?"],
 ["Performance", "Does combat stay stable when effects and enemies stack?"],
];

export default function FatekeeperSteamDeckControllerPage() {
 return (
 <FatekeeperArticle
 title={title}
 description={description}
 canonical={canonical}
 label="Steam Deck & Controller"
 heroImage={fatekeeperImages.deck}
 heroAlt="Fatekeeper Steam Deck and controller testing image"
 faqs={faqs}
 >
 <SearchAnswerPanel
 title="Is Fatekeeper good on Steam Deck or controller?"
 answer="Treat Fatekeeper Steam Deck support as unconfirmed until the live badge and player reports are stable. Test UI readability, first-person melee timing, spell aiming, inventory comfort, frame pacing, and save reloads before a long handheld run."
 intentRows={searchIntentRows}
 jumpLinks={jumpLinks}
 />

 <BlufBox title="Handheld Rule">
 <p>
 <strong>Do not judge Fatekeeper from the title screen.</strong>{" "}
 The real handheld test is combat timing, spell aiming, item reading,
 inventory comparison, and save reliability.
 </p>
 </BlufBox>

 <div id="deck-status">
 <StatusPanel
 items={[
 { label: "Steam Deck badge", value: "Check the live Steam compatibility badge before buying for Deck only.", status: "needs-check" },
 { label: "Controller comfort", value: "Needs live testing across combat, spells, menus, and item comparison.", status: "working" },
 { label: "PC fallback", value: "Windows PC is the confirmed platform and safest Early Access fallback.", status: "verified" },
 { label: "Hardware pressure", value: "Official PC requirements are demanding, so handheld performance should not be assumed.", status: "working" },
 ]}
 />
 </div>

 <section className="prose-game">
 <h2 id="first-hour-test">First-Hour Handheld Test</h2>
 <ArticleImage
 src={fatekeeperImages.siteYoutubeThumb}
 alt="Fatekeeper handheld performance and controller test image"
 caption="A real handheld test covers display, combat timing, spell aiming, inventory, save reloads, and frame pacing."
 />
 </section>

 <ActionTable rows={firstHourRows} />

 <section className="prose-game">
 <h2 id="controller-checks">Controller Comfort Checklist</h2>
 <p>
 If these checks fail, consider a Windows PC first or wait for tested
 settings. If they pass, continue with the{" "}
 <Link href="/games/fatekeeper/beginner-guide">beginner guide</Link>{" "}
 and keep the build simple until performance is stable.
 </p>
 </section>

 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Area</th>
 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Pass condition</th>
 </tr>
 </thead>
 <tbody>
 {controllerRows.map(([area, check]) => (
 <tr key={area} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-semibold text-foreground">{area}</td>
 <td className="px-4 py-3 text-muted-foreground">{check}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </FatekeeperArticle>
 );
}
