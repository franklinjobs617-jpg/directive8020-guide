import type { Metadata } from "next";
import { fatekeeper, type GameGuideLink } from "@/lib/games";

export const fatekeeperLastModified = "2026-05-29";
export const fatekeeperSteamUrl =
  "https://store.steampowered.com/app/2186990/Fatekeeper/";
export const fatekeeperOfficialUrl = "https://fatekeeper.thqnordic.com/";

export const fatekeeperImages = {
  hero: "/games/fatekeeper/hero.webp",
  card: "/games/fatekeeper/card.webp",
  world: "/games/fatekeeper/world.webp",
  combat: "/games/fatekeeper/combat.webp",
  magic: "/games/fatekeeper/magic.webp",
  relics: "/games/fatekeeper/relics.webp",
  bosses: "/games/fatekeeper/bosses.webp",
  weapons: "/games/fatekeeper/weapons.webp",
  exploration: "/games/fatekeeper/exploration.webp",
  deck: "/games/fatekeeper/deck.webp",
  worthIt: "/games/fatekeeper/worth-it.webp",
  siteHero: "/games/fatekeeper/site-hero.webp",
  siteWorldPoster: "/games/fatekeeper/site-world-poster.webp",
  siteCombatPoster: "/games/fatekeeper/site-combat-poster.webp",
  siteGearPoster: "/games/fatekeeper/site-gear-poster.webp",
  siteYoutubeThumb: "/games/fatekeeper/site-youtube-thumb.webp",
};

export const fatekeeperVideos = {
  overview: {
    videoId: "ZeBHDscQKOE",
    title: "Fatekeeper official gameplay overview",
    caption:
      "Watch the official Fatekeeper footage for a quick read on first-person melee, magic, ruins, enemies, and the game's fantasy tone before choosing a guide route.",
  },
};

export const fatekeeperQuickFacts = [
  ["Steam date", "Steam lists Fatekeeper for 2 Jun, 2026."],
  ["Unlock caveat", "SteamDB tracking points to 2 June 2026 at 17:00 UTC; check Steam in your region before planning a session."],
  ["Developer / Publisher", "Paraglacial / THQ Nordic."],
  ["Platform", "Windows PC via Steam is the confirmed public platform."],
  ["Genre", "First-person fantasy action RPG with melee, magic, relics, armor, weapons, and focused exploration."],
  ["Launch state", "Early Access, not a finished 1.0 release."],
  ["Content scope", "The Early Access description points to about 2 hours now and a full-version target around 15 hours."],
  ["Steam features", "Single-player, Steam Cloud, and Family Sharing."],
  ["Language", "English is listed on Steam."],
];

export const fatekeeperSpecRows = [
  ["OS", "Windows 10 or 11 x64", "Windows 10 or 11 x64"],
  ["Processor", "Intel Core i7-10700K / AMD Ryzen 5 3600X", "Intel Core i7-10700K / AMD Ryzen 5 3600X"],
  ["Memory", "16 GB RAM", "32 GB RAM"],
  ["Graphics", "NVIDIA GeForce RTX 3070 or AMD Radeon RX 6800 XT with 8 GB VRAM", "NVIDIA GeForce RTX 3070 or AMD Radeon RX 6800 XT with 8 GB VRAM"],
  ["DirectX", "Version 12", "Version 12"],
  ["Storage", "20 GB available space", "20 GB available space"],
];

export const fatekeeperStartRows = [
  ["Need release info?", "Check Steam date, UTC caveat, Early Access status, PC platform, and console caveats.", "/games/fatekeeper/release-date"],
  ["Need the first 30 minutes?", "Start with survival habits: block, dodge, test spell cost, read enemies, and explore slowly.", "/games/fatekeeper/beginner-guide"],
  ["Need a safe build?", "Use a balanced melee-and-magic setup until final weapon, spell, and relic numbers are verified.", "/games/fatekeeper/best-builds"],
  ["Choosing weapons or spells?", "Pick one reliable melee option, one spell purpose, and upgrades that support the same plan.", "/games/fatekeeper/weapons-spells"],
  ["Tracking relics?", "Record what each relic changes before replacing it or building around it.", "/games/fatekeeper/relics-upgrades"],
  ["Stuck on enemies?", "Read patterns first, then adjust range, stamina pressure, spell timing, and relic support.", "/games/fatekeeper/bosses-enemies"],
  ["Steam Deck or controller?", "Treat Deck support as unconfirmed and test UI, performance, combat, and saves first.", "/games/fatekeeper/steam-deck-controller"],
  ["Should you buy now?", "Weigh the short Early Access scope against your interest in first-person fantasy RPG testing.", "/games/fatekeeper/is-it-worth-it"],
  ["Exploring the world?", "Use a deliberate route through ruins, caves, forests, lore objects, and backtracking checks.", "/games/fatekeeper/world-exploration"],
];

export const fatekeeperFirstThirtyRows = [
  { step: "0-5 minutes", doThis: "Open settings, check mouse or controller comfort, and confirm brightness before combat starts.", why: "First-person melee needs readable motion, timing, and UI before difficulty can be judged fairly." },
  { step: "5-10 minutes", doThis: "Test light attacks, heavy commitment, block or dodge timing, and the recovery after each action.", why: "Fatekeeper rewards how you wield a build, not just what you equip." },
  { step: "10-15 minutes", doThis: "Cast your first spell in a safe fight and note range, cost, timing, and recovery.", why: "Magic should solve a specific problem instead of becoming panic damage." },
  { step: "15-20 minutes", doThis: "Inspect every weapon, armor, relic, and stat change before replacing gear.", why: "The game emphasizes meaningful loadouts, so blind swapping can weaken a working setup." },
  { step: "20-25 minutes", doThis: "Explore one side path, then return to the main route before resources run thin.", why: "The world rewards curiosity, but Early Access routes should stay recoverable." },
  { step: "25-30 minutes", doThis: "Choose one build direction and stop spreading upgrades across unrelated styles.", why: "Focused progression makes the short Early Access slice easier to evaluate." },
];

export const fatekeeperBuildRows = [
  ["Safe beginner build", "One reliable melee weapon, one utility or ranged spell, medium-risk relic choices, and defensive habits.", "Best first run because it teaches every system without relying on unknown final numbers."],
  ["Spellblade", "Melee pressure backed by spells for openings, interrupts, or ranged punishment.", "Best if you want sword-and-sorcery flexibility."],
  ["Heavy weapon", "Slower attacks, stronger commitment, careful spacing, and relics that support survival.", "Best if you can read enemy recovery windows."],
  ["Dagger or agility style", "Faster movement, tighter punish windows, and lower tolerance for bad trades.", "Best after enemy patterns feel readable."],
  ["Magic focus", "Spell schools, resource discipline, and range control before melee cleanup.", "Best after spell cost and cooldown behavior are tested."],
];

export const fatekeeperWeaponSpellRows = [
  ["Melee baseline", "Keep one weapon that handles normal enemies reliably.", "Do not judge a weapon from one fight; test range, recovery, and stamina pressure."],
  ["Spell purpose", "Assign each spell a job: opener, ranged punish, crowd control, or emergency pressure.", "Spells are strongest when they solve a specific combat problem."],
  ["Upgrade focus", "Upgrade the tool you use every fight before side options.", "Early resources should make your common route safer."],
  ["Armor fit", "Use armor to support your real play style, not the style you wish you were playing.", "A fast build and heavy defensive habits can work against each other."],
  ["Relic synergy", "Equip relics that reinforce your weapon or spell plan.", "Random bonuses are weaker than a coherent loadout."],
];

export const fatekeeperRelicRows = [
  ["Before equipping", "Record what the relic changes and which build it supports."],
  ["After one fight", "Check whether it changed your survival, damage window, spell timing, or exploration value."],
  ["Before replacing", "Compare the old and new relic against the same enemy type if possible."],
  ["For builds", "Do not call a relic best until it helps across several fights, not one lucky room."],
  ["For completion", "Track relic location, route condition, and whether backtracking is possible."],
];

export const fatekeeperEnemyRows = [
  ["New enemy", "Stay at mid range, bait one attack, and learn recovery before committing."],
  ["Shielded or armored foe", "Test whether spells, heavy attacks, or positioning create safer openings."],
  ["Fast enemy", "Use spacing and short punish windows instead of long animation commitments."],
  ["Boss-style fight", "Spend the first attempt reading patterns, not forcing a full damage race."],
  ["Repeated death", "Change one variable at a time: range, spell timing, weapon speed, armor, or relic."],
];

export const fatekeeperWorthRows = [
  ["Buy at Early Access launch if", "You want a short first-person fantasy RPG slice and enjoy testing melee, spells, relics, and builds early."],
  ["Wait if", "You need a complete 15-hour campaign, settled reviews, final balance, Steam Deck proof, or full build databases."],
  ["Best fit", "Players who enjoy focused fantasy RPGs, reactive melee, spell timing, gear experiments, hidden lore, and handcrafted spaces."],
  ["Poor fit", "Players looking for co-op, multiplayer, a finished open world, console play, or a long 1.0 campaign right away."],
  ["Main risk", "The Early Access slice is short, so value depends on how much you want to test the foundation before the full game."],
];

export const fatekeeperExplorationRows = [
  ["Main path", "Follow the focused route until combat and resource flow are stable."],
  ["Side path", "Explore when you have enough health, spell resources, and a route back."],
  ["Lore object", "Read and record location context before moving on."],
  ["Relic clue", "Mark the room, nearby enemy type, and any route condition."],
  ["Backtracking", "Return after new gear, spells, or safer combat habits make the route less risky."],
];

export const fatekeeperRelatedGuides: GameGuideLink[] = [
  {
    title: "Fatekeeper Guide Hub",
    href: fatekeeper.hubPath,
    description:
      "Start here for release status, Early Access scope, beginner route, builds, weapons, spells, relics, bosses, PC checks, and buying advice.",
  },
  ...fatekeeper.guideLinks,
];

export function getFatekeeperRelated(excludeHref: string) {
  return fatekeeperRelatedGuides.filter((guide) => guide.href !== excludeHref).slice(0, 6);
}

const fatekeeperKeywords = [
  "Fatekeeper",
  "Fatekeeper guide",
  "Fatekeeper release date",
  "Fatekeeper beginner guide",
  "Fatekeeper best builds",
  "Fatekeeper weapons",
  "Fatekeeper spells",
  "Fatekeeper relics",
  "Fatekeeper Steam Deck",
  "Fatekeeper worth it",
];

export function createFatekeeperMetadata({
  title,
  description,
  canonical,
  image = fatekeeperImages.hero,
}: {
  title: string;
  description: string;
  canonical: string;
  image?: string;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords: fatekeeperKeywords,
    authors: [{ name: "Enjoy4Game Guides" }],
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [image],
      type: "article",
      siteName: "Enjoy4Game Guides",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
