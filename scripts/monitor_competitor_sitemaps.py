#!/usr/bin/env python3
"""
竞品大站 Sitemap 监控脚本
用途：定时抓取 Poki/Y8 等游戏大站的 sitemap，对比前后变化，发现新增/下架游戏

用法：
  python monitor_competitor_sitemaps.py              # 抓取所有，与上次快照对比
  python monitor_competitor_sitemaps.py --site poki  # 只抓 Poki
  python monitor_competitor_sitemaps.py --diff-only  # 不抓取，只对比最近两次快照

依赖：requests（pip install requests）
"""

import requests
import xml.etree.ElementTree as ET
import json
import os
import sys
import argparse
from datetime import datetime, timezone, timedelta
from pathlib import Path
from typing import Dict, List, Tuple, Optional

# ============================================================
# 配置
# ============================================================

DATA_DIR = Path(__file__).parent.parent / "tbh_data" / "competitor_sitemaps"

SITES = {
    "poki": {
        "name": "Poki",
        "robots_txt": "https://poki.com/robots.txt",
        "sitemap_index_pattern": "/en/sitemaps/index.xml",
        "game_sitemap_pattern": "/en/sitemaps/games.xml",
        "ua": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
    },
    "y8": {
        "name": "Y8",
        "robots_txt": "https://www.y8.com/robots.txt",
        # Y8 的 sitemap 结构待验证
        "sitemap_index": None,
        "game_sitemap": None,
        "ua": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
    },
}

# 东亚时区
TZ = timezone(timedelta(hours=8))


# ============================================================
# 核心逻辑
# ============================================================

def fetch_xml(url: str, ua: str = None) -> Optional[ET.Element]:
    """抓取 XML sitemap，返回 root element"""
    headers = {"User-Agent": ua or SITES["poki"]["ua"]}
    try:
        resp = requests.get(url, headers=headers, timeout=30)
        resp.raise_for_status()
        return ET.fromstring(resp.text)
    except Exception as e:
        print(f"[ERROR] 抓取 {url} 失败: {e}")
        return None


def parse_sitemap_index(root: ET.Element) -> List[Dict]:
    """解析 sitemap index，返回子 sitemap 列表"""
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    sitemaps = []
    for sitemap_elem in root.findall(".//sm:sitemap", ns):
        loc = sitemap_elem.find("sm:loc", ns)
        lastmod = sitemap_elem.find("sm:lastmod", ns)
        sitemaps.append({
            "loc": loc.text.strip() if loc is not None else None,
            "lastmod": lastmod.text.strip() if lastmod is not None else None,
        })
    return sitemaps


def parse_urlset(root: ET.Element) -> List[Dict]:
    """解析 urlset，返回所有 URL 条目"""
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    urls = []
    for url_elem in root.findall(".//sm:url", ns):
        loc = url_elem.find("sm:loc", ns)
        lastmod = url_elem.find("sm:lastmod", ns)
        changefreq = url_elem.find("sm:changefreq", ns)
        priority = url_elem.find("sm:priority", ns)
        urls.append({
            "loc": loc.text.strip() if loc is not None else None,
            "lastmod": lastmod.text.strip() if lastmod is not None else None,
            "changefreq": changefreq.text.strip() if changefreq is not None else None,
            "priority": priority.text.strip() if priority is not None else None,
        })
    return urls


def extract_game_slugs(urls: List[Dict], base_pattern: str = "/en/g/") -> List[str]:
    """从 URL 列表中提取游戏 slug"""
    slugs = []
    for u in urls:
        loc = u["loc"]
        if base_pattern in loc:
            # https://poki.com/en/g/game-name → game-name
            slug = loc.split(base_pattern)[-1].rstrip("/")
            slugs.append(slug)
    return slugs


def fetch_poki_games() -> Tuple[List[str], List[Dict]]:
    """抓取 Poki 所有游戏"""
    print("[Poki] 抓取游戏 sitemap...")
    game_sitemap_url = "https://poki.com/en/sitemaps/games.xml"
    root = fetch_xml(game_sitemap_url, SITES["poki"]["ua"])
    if root is None:
        return [], []

    urls = parse_urlset(root)
    slugs = extract_game_slugs(urls, "/en/g/")

    # 找出有 lastmod 的游戏（Poki 用 lastmod 标记近期操作过的游戏）
    recent_slugs = extract_game_slugs(
        [u for u in urls if u.get("lastmod")],
        "/en/g/"
    )

    print(f"[Poki] 共 {len(slugs)} 个游戏，其中 {len(recent_slugs)} 个近期更新")
    return slugs, urls


def save_snapshot(site_key: str, slugs: List[str], urls: List[Dict]) -> str:
    """保存快照到 JSON 文件"""
    today = datetime.now(TZ).strftime("%Y-%m-%d")
    filename = f"{site_key}_{today}.json"
    filepath = DATA_DIR / filename

    # 去重
    unique_slugs = list(dict.fromkeys(slugs))

    data = {
        "site": site_key,
        "fetched_at": datetime.now(TZ).isoformat(),
        "total_games": len(unique_slugs),
        "game_slugs": unique_slugs,
        "urls_with_lastmod": [u for u in urls if u.get("lastmod")],
    }

    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f"[{site_key}] 快照已保存: {filepath} ({len(unique_slugs)} 个游戏)")
    return str(filepath)


def find_previous_snapshot(site_key: str, current_file: str = None) -> Optional[str]:
    """找到最近一次的快照文件（排除当前这次）"""
    files = sorted(DATA_DIR.glob(f"{site_key}_*.json"), reverse=True)
    for f in files:
        if current_file and str(f) == current_file:
            continue
        return str(f)
    return None


def diff_snapshots(old_file: str, new_file: str) -> Dict:
    """对比两次快照，返回差异"""
    with open(old_file, "r", encoding="utf-8") as f:
        old_data = json.load(f)
    with open(new_file, "r", encoding="utf-8") as f:
        new_data = json.load(f)

    old_slugs = set(old_data.get("game_slugs", []))
    new_slugs = set(new_data.get("game_slugs", []))

    added = sorted(new_slugs - old_slugs)
    removed = sorted(old_slugs - new_slugs)
    unchanged = sorted(old_slugs & new_slugs)

    return {
        "old_file": os.path.basename(old_file),
        "new_file": os.path.basename(new_file),
        "old_count": len(old_slugs),
        "new_count": len(new_slugs),
        "added": added,
        "added_count": len(added),
        "removed": removed,
        "removed_count": len(removed),
        "unchanged_count": len(unchanged),
    }


def print_diff_report(diff: Dict, site_name: str):
    """打印对比报告"""
    print(f"\n{'='*60}")
    print(f"  {site_name} Sitemap 对比报告")
    print(f"  {diff['old_file']} → {diff['new_file']}")
    print(f"{'='*60}")
    print(f"  旧快照游戏数: {diff['old_count']}")
    print(f"  新快照游戏数: {diff['new_count']}")
    print(f"  变化: {diff['new_count'] - diff['old_count']:+d}")
    print()

    if diff["added"]:
        print(f"  🆕 新增游戏 ({diff['added_count']} 个):")
        for slug in diff["added"]:
            print(f"     - {slug}  →  https://poki.com/en/g/{slug}")

    if diff["removed"]:
        print(f"  🗑️  下架/移除游戏 ({diff['removed_count']} 个):")
        for slug in diff["removed"]:
            print(f"     - {slug}")

    if not diff["added"] and not diff["removed"]:
        print("  ✅ 无变化，游戏列表与上次一致")

    print(f"\n  保持不变: {diff['unchanged_count']} 个游戏")
    print(f"{'='*60}\n")


def analyze_game_categories(slugs: List[str]) -> Dict[str, int]:
    """从游戏 slug 简单分析品类分布（基于关键词）"""
    category_keywords = {
        "merge": "合成/合并",
        "race": "竞速",
        "car": "赛车",
        "soccer": "足球",
        "basketball": "篮球",
        "puzzle": "解谜",
        "dress": "换装",
        "makeup": "化妆",
        "clicker": "挂机/点击",
        "simulator": "模拟",
        "survival": "生存",
        "battle": "战斗",
        "fighter": "格斗",
        "shooter": "射击",
        "sniper": "狙击",
        "craft": "建造",
        "parkour": "跑酷",
        "run": "跑酷",
        "surgery": "手术",
        "cooking": "烹饪",
        "fashion": "时尚",
        "salon": "沙龙",
        "draw": "绘画",
        "brainrot": "脑洞",
        "stupidella": "Stupidella系列",
        "papa": "Papa系列",
        "subway": "地铁跑酷",
        "johnny": "Johnny系列",
        "dasi": "Dasi系列",
        "stickman": "火柴人",
        "io": ".io 多人",
        "drift": "漂移",
        "obby": "Obby障碍",
        "tag": "捉人",
    }

    counts = {}
    for slug in slugs:
        slug_lower = slug.lower()
        for keyword, label in category_keywords.items():
            if keyword in slug_lower:
                counts[label] = counts.get(label, 0) + 1

    return dict(sorted(counts.items(), key=lambda x: x[1], reverse=True))


# ============================================================
# 主入口
# ============================================================

def main():
    parser = argparse.ArgumentParser(description="竞品大站 Sitemap 监控")
    parser.add_argument("--site", type=str, default=None,
                        help="指定站点 (poki, y8)，不指定则抓全部")
    parser.add_argument("--diff-only", action="store_true",
                        help="只对比最近两次快照，不抓取")
    parser.add_argument("--show-categories", action="store_true",
                        help="显示游戏品类分布")
    args = parser.parse_args()

    os.makedirs(DATA_DIR, exist_ok=True)

    sites_to_check = [args.site] if args.site else list(SITES.keys())

    for site_key in sites_to_check:
        site = SITES[site_key]

        if args.diff_only:
            # 只对比最近两次快照
            files = sorted(DATA_DIR.glob(f"{site_key}_*.json"), reverse=True)
            if len(files) < 2:
                print(f"[{site_key}] 快照文件不足，至少需要 2 个才能对比")
                continue
            diff = diff_snapshots(str(files[1]), str(files[0]))
            print_diff_report(diff, site["name"])

            if args.show_categories:
                with open(files[0], "r", encoding="utf-8") as f:
                    data = json.load(f)
                cats = analyze_game_categories(data["game_slugs"])
                print("  品类分布 Top 15:")
                for cat, count in list(cats.items())[:15]:
                    print(f"    {cat}: {count}")
            continue

        # 抓取 + 保存 + 对比
        if site_key == "poki":
            slugs, urls = fetch_poki_games()
            if not slugs:
                continue
            new_file = save_snapshot(site_key, slugs, urls)

            # 品类分析
            if args.show_categories:
                cats = analyze_game_categories(slugs)
                print("\n  品类分布 Top 15:")
                for cat, count in list(cats.items())[:15]:
                    print(f"    {cat}: {count}")

            # 对比上次快照
            prev_file = find_previous_snapshot(site_key, new_file)
            if prev_file:
                diff = diff_snapshots(prev_file, new_file)
                print_diff_report(diff, site["name"])
            else:
                print(f"[{site_key}] 这是第一次抓取，无法对比。下次运行时会自动对比。")

        elif site_key == "y8":
            print("[Y8] Y8 的 sitemap 结构尚未验证，需要先手动确认 URL 模式")
            # TODO: Y8 的结构不同，需要先探测
            continue


if __name__ == "__main__":
    main()
