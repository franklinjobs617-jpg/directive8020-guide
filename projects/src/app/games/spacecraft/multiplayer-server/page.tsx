import Link from "next/link";
import { ArticleImage } from "@/components/article-media";
import { BlufBox, SearchAnswerPanel } from "@/components/guide-blocks";
import { SpacecraftArticle } from "@/components/spacecraft-article";
import { createSpacecraftMetadata, spacecraftImages } from "@/lib/spacecraft";

const title = "SpaceCraft Multiplayer Guide: Servers, Co-op, PvP Zones & How to Play with Friends";
const description =
  "SpaceCraft multiplayer guide covering server browser, how to find and join friends, Corporation (guild) system, PvP zones, safe sectors, co-op fleet operations, and player economy interaction.";
const canonical = "/games/spacecraft/multiplayer-server";

export const metadata = createSpacecraftMetadata({
  title,
  description,
  canonical,
  image: spacecraftImages.siteHero,
});

const faqs = [
  {
    question: "How do I play SpaceCraft with friends?",
    answer:
      "SpaceCraft is an always-online MMO — all players share the same persistent universe. To play with friends, coordinate your starting sector, use the in-game friends list to locate each other, and form a Corporation (guild) from the social menu. Corporations allow shared resources, assigned roles, and coordinated fleet operations.",
  },
  {
    question: "Can I choose a specific server?",
    answer:
      "No. The game places all players in the same persistent universe with regional sharding for latency purposes. You cannot manually select a server. To find friends, agree on a meeting point (star system or station) and travel there. The universe is large but FTL jumps make long-distance travel manageable.",
  },
  {
    question: "How do Corporations work?",
    answer:
      "Corporations are player-run guilds with up to 100 members. Create or join one from the social menu. Corporations provide shared storage depots, corp-only stations, role-based permissions (Officer, Engineer, Pilot, Recruit), and coordinated fleet operations. Corporation membership costs a small recurring credit fee.",
  },
  {
    question: "Are there safe zones in SpaceCraft?",
    answer:
      "Yes. Starter sectors and station-proximate space (within 50km of any NPC station) are safe zones where PvP will be disabled when combat is implemented. High-value sectors, contested zones, and deep space are dangerous areas where PvP can occur. Currently, with combat not yet implemented, all sectors are effectively safe zones.",
  },
];

const searchIntentRows = [
  {
    query: "SpaceCraft how to play with friends",
    answer: "Coordinate starting sectors, use friends list to locate each other, meet at a station, and form a Corporation together.",
    href: "#playing-with-friends",
    label: "Co-op",
  },
  {
    query: "SpaceCraft Corporation guide",
    answer: "Up to 100 members. Roles: Officer, Engineer, Pilot, Recruit. Shared storage, corp stations, fleet operations. Small recurring fee.",
    href: "#corporations",
    label: "Corps",
  },
  {
    query: "SpaceCraft server selection",
    answer: "No manual server selection. All players share one persistent universe with regional sharding. Coordinate meeting points with friends.",
    href: "#server-info",
    label: "Servers",
  },
];

const jumpLinks = [
  { href: "#server-info", label: "Server info" },
  { href: "#playing-with-friends", label: "Playing with friends" },
  { href: "#corporations", label: "Corporations" },
  { href: "#fleet-operations", label: "Fleet ops" },
  { href: "/games/spacecraft/factions-guide", label: "Factions" },
  { href: "/games/spacecraft/combat-guide", label: "Combat" },
];

export default function SpacecraftMultiplayerPage() {
  return (
    <SpacecraftArticle
      title={title}
      description={description}
      canonical={canonical}
      label="Multiplayer & Co-op"
      heroImage={spacecraftImages.siteHero}
      heroAlt="SpaceCraft multiplayer and co-op guide"
      faqs={faqs}
    >
      <SearchAnswerPanel
        title="How do I play SpaceCraft with friends?"
        answer="SpaceCraft is an always-online MMO — all players share the same persistent universe. To play with friends, coordinate your starting sector, use the in-game friends list to locate each other, and form a Corporation (guild) from the social menu. Corporations allow shared resources, assigned roles, and coordinated fleet operations."
        intentRows={searchIntentRows}
        jumpLinks={jumpLinks}
      />

      <BlufBox title="One Universe">
        <p>
          <strong>You cannot choose a specific server — the game places all players in the same persistent universe.</strong>{" "}
          To find friends, agree on a meeting point (star system or station) and travel there. The universe is large but FTL jumps make long-distance travel manageable.
        </p>
      </BlufBox>

      <section id="server-info" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Server Architecture</h2>
        <ArticleImage
          src={spacecraftImages.trading}
          alt="SpaceCraft multiplayer server and Corporation gameplay"
          caption="SpaceCraft's persistent universe means every player you encounter is real. The economy, territory control, and faction politics are all player-driven."
        />
        <p className="text-sm leading-relaxed text-muted-foreground">
          SpaceCraft uses a single persistent universe with regional sharding for latency optimization. When you log in, the game automatically places you in the regional shard with the lowest latency to your location. Players in different regions can still interact — the sharding is transparent and affects only connection quality, not gameplay access.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          <strong>Connection troubleshooting:</strong> If you experience high latency, verify your internet connection stability first. SpaceCraft requires a consistent broadband connection — Wi-Fi dropouts will disconnect you. If server-side issues are suspected, check the official Discord for server status announcements. Scheduled maintenance typically occurs on Tuesdays.
        </p>
      </section>

      <section id="playing-with-friends" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">How to Play with Friends</h2>
        <ol className="space-y-3 text-sm leading-relaxed text-muted-foreground list-decimal pl-5">
          <li><strong>Coordinate starting sectors.</strong> When creating your character, you can choose a starting sector. Agree with your friends on the same sector so you begin within reasonable travel distance of each other.</li>
          <li><strong>Add friends via the social menu.</strong> Open the in-game friends list (default key: O), search for your friend's character name, and send a friend request. Once accepted, you can see their online status and current location.</li>
          <li><strong>Meet at a neutral station.</strong> Agree on a specific station as your meeting point. Stations in starter sectors are ideal — they are safe, have market access, and are centrally located.</li>
          <li><strong>Form a Corporation.</strong> Once together, one player creates a Corporation (costs ~500 credits) and invites the others. This unlocks shared storage, coordinated fleet navigation, and Corporation chat.</li>
          <li><strong>Set shared goals.</strong> Decide as a group: mining fleet, trading company, or (when combat arrives) combat squadron. Specializing your Corporation gives you a competitive advantage over solo players.</li>
        </ol>
      </section>

      <section id="corporations" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">How Corporations Work</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Corporations are the core social structure in SpaceCraft. They function as player-run guilds with formal role hierarchies: <strong>Owner</strong> (full control, can disband), <strong>Officer</strong> (manage members, access corp vaults), <strong>Engineer</strong> (build and modify corp stations and ships), <strong>Pilot</strong> (fly corp ships, access shared hangars), and <strong>Recruit</strong> (basic membership, limited access).
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          <strong>Corporation benefits:</strong> Shared storage depots accessible to all members; corp-only stations with discounted services; coordinated fleet navigation (jump together, share sensor data); role-based ship access (corp-owned ships usable by authorized members); and Corporation chat channel. <strong>Cost:</strong> Creating a Corporation costs ~500 credits, plus a small recurring maintenance fee (~50 credits/week).
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          For how Corporations interact with the faction system and territory control, see our{" "}
          <Link href="/games/spacecraft/factions-guide" className="text-foreground underline">factions guide</Link>.
          For combat fleet operations (future content), see our{" "}
          <Link href="/games/spacecraft/combat-guide" className="text-foreground underline">combat guide</Link>.
        </p>
      </section>

      <section id="fleet-operations" className="my-10">
        <h2 className="mb-4 text-xl font-bold text-foreground">Co-op Fleet Operations</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Fleet operations allow Corporation members to coordinate their ships for large-scale activities. <strong>Coordinated jumping:</strong> Fleet members can synchronize FTL jumps so the entire group arrives at the destination simultaneously. <strong>Shared sensors:</strong> Fleet members share sensor data, giving the group a much larger detection radius than any single ship. <strong>Formation flying:</strong> Ships in a fleet can lock relative positions for organized travel and (when combat arrives) tactical formations.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          <strong>Fleet mining operations:</strong> The most productive current use of fleet mechanics. One player scouts for high-concentration deposits while others prepare Extractors and Outpost Cores. Once a deposit is found, the fleet deploys simultaneously — mining output multiplies with each additional player.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          <strong>Note:</strong> Combat fleet operations (squadron tactics, focus fire, coordinated shield cycling) are dependent on the combat system implementation. The fleet mechanics infrastructure exists, but combat applications await the combat content update.
        </p>
      </section>
    </SpacecraftArticle>
  );
}
