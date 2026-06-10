import Link from "next/link";
import { MessageSquare } from "lucide-react";

const footerGroups = [
 {
 title: "Quick Links",
 links: [
 ["Full Walkthrough", "/directive-8020-walkthrough"],
 ["All Endings Guide", "/directive-8020-all-endings"],
 ["How to Save Everyone", "/directive-8020-how-to-save-everyone"],
 ["Trophy Guide", "/directive-8020-trophy-guide"],
 ["Trophy List", "/directive-8020-trophy-list"],
 ["Choices & Consequences", "/directive-8020-choices-consequences"],
 ],
 },
 {
 title: "Resources",
 links: [
 ["System Requirements", "/directive-8020-system-requirements"],
 ["Release Time", "/directive-8020-release-time"],
 ["Characters", "/directive-8020-characters"],
 ["Cast & Actors", "/directive-8020-cast-actors"],
 ],
 },
 {
 title: "More Game Guides",
 links: [
 ["Project: Mist Guide", "/games/project-mist"],
 ["Thick As Thieves Guide", "/games/thick-as-thieves"],
 ["Thick As Thieves Release", "/games/thick-as-thieves/release-date"],
 ["Mina the Hollower Guide", "/games/mina-the-hollower"],
 ["Mina Steam Deck", "/games/mina-the-hollower/steam-deck"],
 ],
 },
 {
 title: "Site",
 links: [
 ["About", "/about"],
 ["Privacy Policy", "/privacy-policy"],
 ["Terms of Use", "/terms-of-use"],
 ["Copyright Infringement", "/copyright-infringement"],
 ],
 },
];

const externalLinks = [
 ["Mina the Hollower", "https://minathehollower.base64pro.top/"],
 ["Romestead", "https://ipooket.com/"],
 ["Fate Keeper Guide", "https://fatekeeperguide.online/"],
 ["Romestead Guide", "http://romesteadguide.top/"],
];

export function SiteFooter() {
 return (
 <footer className="mt-16 bg-deep-plum text-white">
 <div className="site-shell py-10">
 <div className="grid gap-8 lg:grid-cols-[1.15fr_repeat(4,1fr)]">
 <div>
 <div className="mb-4 inline-flex items-center gap-2">
 <span className="ui-pink-badge">GUIDES</span>
 <span className="text-sm font-bold">Enjoy4Game</span>
 </div>
 <h3 className="text-xl font-bold tracking-[-0.22px]">
 Directive 8020 Guides
 </h3>
 <p className="mt-3 max-w-xs text-sm leading-6 text-white/62">
 Your comprehensive guide to surviving the Cassiopeia. All endings,
 choices, characters, and more.
 </p>
 </div>

 {footerGroups.map((group) => (
 <div key={group.title}>
 <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.12px] text-white">
 {group.title}
 </h3>
 <ul className="space-y-2">
 {group.links.map(([label, href]) => (
 <li key={href}>
 <Link
 href={href}
 className="text-sm text-white/62 transition-colors hover:text-white"
 >
 {label}
 </Link>
 </li>
 ))}
 {group.title === "Site" &&
 externalLinks.map(([label, href]) => (
 <li key={href}>
 <a
 href={href}
 target="_blank"
 rel="noopener noreferrer"
 className="text-sm text-white/62 transition-colors hover:text-white"
 >
 {label}
 </a>
 </li>
 ))}
 </ul>
 </div>
 ))}
 </div>

 <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 lg:flex-row lg:items-center lg:justify-between">
 <Link
 href="https://www.reddit.com/r/enjoy4game/"
 className="inline-flex w-fit items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-deep-plum transition-colors hover:bg-mist"
 >
 <MessageSquare className="h-4 w-4" />
 Join our community: r/enjoy4game
 </Link>
 <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
 <p className="text-xs leading-5 text-white/54">
 Not affiliated with Supermassive Games or Bandai Namco. Fan-made guide.
 </p>
 <a
 href="https://www.foundrlist.com/product/directive8020?utm_source=badge&amp;utm_medium=embed"
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex shrink-0"
 >
 <img
 src="https://www.foundrlist.com/api/badge/directive8020"
 alt="Featured on FoundrList"
 width={75}
 height={24}
 className="h-6 w-auto opacity-90 grayscale transition-opacity hover:opacity-100"
 />
 </a>
 </div>
 </div>
 </div>
 </footer>
 );
}
