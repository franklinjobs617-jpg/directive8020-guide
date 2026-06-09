# TBH Item Database — Data Pipeline Plan
> 不需要玩游戏。全部数据从公开 API 获取。

---

## Phase 0: Market Data Extraction (1-2 hours coding)

### Step 1: Paginate Steam Market API

```python
import requests
import time
import json

BASE_URL = "https://steamcommunity.com/market/search/render/"
PARAMS = {
    "appid": 3678970,
    "norender": 1,
    "count": 100,
}

all_items = []
for start in range(0, 700, 100):
    params = {**PARAMS, "start": start}
    resp = requests.get(BASE_URL, params=params)
    data = resp.json()
    items = data.get("results", [])
    all_items.extend(items)
    print(f"Fetched {start+len(items)}/{data['total_count']}")
    time.sleep(1.5)  # rate limit

with open("tbh_items_raw.json", "w") as f:
    json.dump(all_items, f, indent=2)

print(f"Total: {len(all_items)} items")
```

### Step 2: Parse Item Names → Structured Fields

```python
import re

RARITIES = ["Cosmic", "Divine", "Celestial", "Beyond", "Arcana",
            "Immortal", "Legendary", "Rare", "Uncommon", "Common"]

SLOTS = [
    "Bow", "Sword", "Armor", "Staff", "Scepter", "Tome",
    "Boots", "Arrow", "Crossbow", "Gloves", "Helmet", "Earring",
    "Shield", "Ring", "Amulet", "Bracelet", "Sub Weapon", "Main Weapon"
]

ITEM_TYPES = [
    "Soulstone", "Crafting Material", "Decoration Material",
    "Engraving Material", "Inscription Material", "Offering Material"
]

def parse_item(item):
    name = item["name"]
    parsed = {
        "name": name,
        "hash_name": item["hash_name"],
        "market_price_cents": item.get("sell_price", 0),
        "market_supply": item.get("sell_listings", 0),
        "type": item.get("asset_description", {}).get("type", ""),
    }

    # Extract rarity from name: (Immortal), (Arcana), etc.
    rarity_match = re.search(r"\((\w+)\)", name)
    if rarity_match:
        parsed["rarity"] = rarity_match.group(1)

    # Extract grade: trailing A, B, C
    grade_match = re.search(r"\s([A-C])$", name)
    if grade_match:
        parsed["grade"] = grade_match.group(1)

    # Identify equipment slot
    for slot in SLOTS:
        if slot in name:
            parsed["slot"] = slot
            break

    # Extract level from asset_description (format: "Bow - Lv. 65")
    desc = item.get("asset_description", {}).get("type", "")
    lv_match = re.search(r"Lv\.\s*(\d+)", desc)
    if lv_match:
        parsed["level_requirement"] = int(lv_match.group(1))

    # Classify as equipment vs material
    if any(r in name for r in RARITIES[3:]):  # Legendary+
        parsed["category"] = "equipment"
    elif parsed.get("type") in ITEM_TYPES:
        parsed["category"] = "material"
    else:
        parsed["category"] = "other"

    return parsed
```

### Step 3: Output Structured JSON

After parsing, the output looks like:

```json
{
  "name": "Limitless Bow (Immortal) A",
  "rarity": "Immortal",
  "grade": "A",
  "slot": "Bow",
  "level_requirement": 65,
  "category": "equipment",
  "market_price_cents": 184,
  "market_supply": 15
}
```

### What we get from Market API alone:

| 字段 | 覆盖率 | 来源 |
|------|--------|------|
| 物品名称 | 100% | API `name` |
| 稀有度 | ~70% (装备类) | 从名称解析 |
| 装备槽位 | ~60% (装备类) | 从名称解析 |
| 等级需求 | ~60% (装备类) | 从 `asset_description` 解析 |
| 品级 (A/B/C) | ~50% (装备类) | 从名称尾缀解析 |
| 物品类型 | 100% | 从 `asset_description.type` |
| 市场价格 | 100% | API `sell_price` |
| 市场供给量 | 100% | API `sell_listings` |

---

## Phase 1: Cross-reference with Guide Content (2-4 hours)

Guides already mention:

| 数据点 | 来源 |
|--------|------|
| 职业 → 装备槽映射 | Mobalytics, DTGRE (e.g. Knight=Sword+Armor+Shield) |
| 宠物列表 & 效果 | Destructoid, AllThings.how |
| Cube 系统机制 | GrindnStrat, NeonLightsMedia |
| 符文树节点 | KosGuides, NineWiki (已有交互式工具!) |
| 技能信息 | Mobalytics (逐职业技能说明) |

### Mapping classes to equipment slots:

```
Knight   → Sword, Shield, Armor, Gloves, Boots, Helmet
Ranger   → Bow, Arrow, Armor, Gloves, Boots, Helmet
Sorcerer → Staff, Armor, Gloves, Boots, Helmet, Earring
Priest   → Scepter, Tome, Armor, Gloves, Boots, Helmet
Hunter   → Crossbow, Arrow, Armor, Gloves, Boots, Helmet
Slayer   → Sword, Sub Weapon, Armor, Gloves, Boots, Helmet
```

### Cube stat mapping (from guides):

| Decoration Material | Stat Bonus |
|--------------------|------------|
| Emerald | ??? (likely poison/acid damage) |
| Ruby | Fire Damage +% |
| Sapphire | Cold Damage +% |
| Topaz | Lightning Damage +% |
| Amethyst | ??? |
| Diamond | ??? |
| Obsidian Shard | ??? |

> ⚠️ 这部分需要更多数据。可以从 Steam 讨论 (玩家问 "sapphire cold damage % becomes physical") 反推。

---

## Phase 2: Community Crowdsourcing (ongoing)

### Steam Discussions scraping:

已发现有价值讨论：
- 玩家问 "Any build suggestions for Hunter?" → 可以提取为 FAQ
- "噩梦3-10的boss该怎么过" → 终局内容需求
- "Sapphire cold damage % becomes physical" → Cube bug/机制信息

### 可以自动化的社区数据收集：

1. **Steam Discussions RSS**: `https://steamcommunity.com/app/3678970/discussions/` (需解析HTML)
2. **Reddit 搜索**: 目前不存在，但可以监控 r/TaskBarHero (需要创建)
3. **B站评论**: 从已有视频的评论区提取玩家问题

---

## Phase 3: Database Schema

```sql
-- Core items table
CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    hash_name VARCHAR(255) UNIQUE,
    category VARCHAR(50),        -- equipment / material / soulstone / offering
    rarity VARCHAR(20),          -- Common ... Cosmic
    grade CHAR(1),               -- A / B / C
    slot VARCHAR(50),            -- Bow / Sword / Armor / ...
    level_requirement INT,
    class_restriction VARCHAR(50), -- Knight / Ranger / ...
    market_price_cents INT,
    market_supply INT,
    cube_slot_type VARCHAR(50),  -- Decoration / Engraving / Inscription
    stat_bonus TEXT,             -- e.g. "+15% Fire Damage"
    drop_location TEXT,          -- e.g. "Act 2-5 Boss"
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Class-equipment mapping
CREATE TABLE class_equipment (
    class_name VARCHAR(50),
    slot VARCHAR(50),
    PRIMARY KEY (class_name, slot)
);

-- Cube materials
CREATE TABLE cube_materials (
    material_name VARCHAR(255) PRIMARY KEY,
    category VARCHAR(50),        -- Decoration / Engraving / Inscription
    possible_stats TEXT[],        -- e.g. ["+Fire Damage", "+Attack Speed"]
    rarity_requirement VARCHAR(20) -- min item rarity to use
);
```

---

## Phase 4: Automated Pipeline (daily refresh)

```
Cron Job (daily):
  1. Hit Steam Market API → get latest prices & supply for 681 items
  2. Diff against existing DB → update price_history table
  3. New items? → parse & insert
  4. Generate "hot items" list (largest price/supply changes)
  5. (Optional) Scrape Steam Discussions for new bug reports / mechanics info
```

---

## What we CAN NOT get without game access (and workarounds)

| 缺失数据 | 替代方案 |
|----------|---------|
| 物品图标 | Steam 库存 CDN 通常提供 item icon URL (需要找到 CDN 地址) |
| 详细数值 (攻击力等) | 社区贡献 → 让玩家提交截图 |
| 掉落率 | 社区数据众包 → 统计 1000 次掉落 |
| 伤害公式 | 社区众包 + 反推 → 用 DPS 计算器让玩家输入数值来验证 |
| 怪物属性 | SteamDB 补丁日志 + 玩家报告 |

---

## 最低可行方案 (MVP) — 1天内可完成

```
上午 (2h):  写 Python 脚本 → 抓取全部 681 个物品 → 结构化 JSON
下午 (2h):  写静态站点 → 搜索/筛选/排序 → 部署到 Vercel
晚上 (1h):  写 1 篇配套攻略 → 链接到数据库 → SEO 开始生效
```

**不需要**：玩游戏、数据库服务器、后端框架。
**只需要**：Python 脚本 + 静态 JSON + 一个简单的搜索页面。
