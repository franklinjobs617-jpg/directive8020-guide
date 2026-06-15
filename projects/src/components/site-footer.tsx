import Link from "next/link";
import { MessageSquare } from "lucide-react";

const footerGroups = [
  // ✅ CHANGED: "Quick Links" 从纯D8020链接 → 保留D8020核心但加入多游戏入口
  {
    title: "Quick Links",
    links: [
      ["All Game Hubs", "/games"],
      ["Full Walkthrough", "/directive-8020-walkthrough"],
      ["All Endings Guide", "/directive-8020-all-endings"],
      ["How to Save Everyone", "/directive-8020-how-to-save-everyone"],
      ["Trophy Guide", "/directive-8020-trophy-guide"],
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
      ["Steam Deck Guide", "/directive-8020-steam-deck"],
    ],
  },
  // ✅ CHANGED: "More Game Guides" 链接全部改为站内链接
  // 原来: 4个外链指向竞争站 (minathehollower.base64pro.top / ipooket.com 等)
  // 原因: 这些外链在 AdSense 审核时是严重减分项
  //       审核员会认为你在给竞争站导流，站点价值定位混乱
  //       同时这些域名看起来是 SEO 农场站，与你的品牌形象不符
  {
    title: "More Game Guides",
    links: [
      ["Project: Mist Guide", "/games/project-mist"],
      ["Fatekeeper Guide", "/games/fatekeeper"],
      ["Starminer Guide", "/games/starminer"],
      ["Paralives Guide", "/games/paralives"],
      ["Romestead Guide", "/games/romestead"],
      ["Mina the Hollower", "/games/mina-the-hollower"],
      ["Grow a Garden 2 Wiki ↗", "https://growagarden2pet.wiki"],
    ],
  },
  // ✅ CHANGED: Terms 路径从 /terms-of-use → /terms (与新建页面路径一致)
  // ✅ REMOVED: /copyright-infringement (该页面不存在，404 对审核有害)
  // ✅ KEPT: /about /privacy-policy (与新建页面路径匹配)
  {
    title: "Site",
    links: [
      ["About", "/about"],
      ["Privacy Policy", "/privacy-policy"],
      ["Terms of Service", "/terms"],
      ["Contact", "/about#contact"],
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-deep-plum text-white">
      <div className="site-shell py-10">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_repeat(4,1fr)]">

          {/* ✅ CHANGED: brand tagline 从 D8020 专属 → Hub 站定位 */}
          {/* 原来: "Directive 8020 Guides" + "Your comprehensive guide to surviving the Cassiopeia" */}
          {/* 原因: Footer 的品牌描述是审核员判断站点性质的重要信号
                    原版在 Footer 层面也把自己定义成单游戏站 */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="ui-pink-badge">GUIDES</span>
              <span className="text-sm font-bold">Enjoy4Game</span>
            </div>
            <h3 className="text-xl font-bold tracking-[-0.22px]">
              Game Guides for Steam Releases
            </h3>
            <p className="mt-3 max-w-xs text-sm leading-6 text-white/62">
              Walkthroughs, builds, endings, trophies, and tools for survival,
              RPG, horror, strategy, and indie games on Steam.
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

          {/* ✅ CHANGED: copyright 声明更新为 Hub 站通用版本 */}
          {/* 原来: "Not affiliated with Supermassive Games or Bandai Namco. Fan-made guide." */}
          {/* 现在: 更通用，适合多游戏站；保留独立性声明 */}
          <p className="text-xs leading-5 text-white/54">
            © {new Date().getFullYear()} Enjoy4Game. Independent fan-made guide site.
            Not affiliated with any game developer or publisher.
            Contact:{" "}
            <a
              href="mailto:support@enjoy4game.com"
              className="underline underline-offset-2 hover:text-white/80"
            >
              support@enjoy4game.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
