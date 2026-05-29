# Gaming Guide Hub 全站内容深度优化计划 (Multi-Game)

本计划旨在对该综合游戏攻略网站（Hub 站）进行全站内容审计与质量升级，消除所有占位符、无价值方法论模板，实装能真正解决英文玩家痛点的核心攻略数据。

---

## 核心设计决策 (User Review Required)

作为一个面向英文玩家的游戏攻略 Hub，全站内容的真实性与详尽度决定了搜索引擎的权威度评分（EEAT）以及用户的实际留存率。我们必须在**所有游戏**的攻略页面上推行“实装攻略，拒绝占位”的策略。

> [!IMPORTANT]
> **多游戏深度审计与重构：**
> 1. **Directive 8020（科幻恐怖）**：率先实装 8 个章节的精准选项、QTE 判定方法、65个收集品位置、5个主要角色的生还路线。
> 2. **Project: Mist（开放世界生存）**：实装重力枪（Gravity Gun）使用技巧、火车移动基地升级顺序、巨型怪物打法、联机防闪退建议。
> 3. **Starminer（太空采矿）**：补充飞船设计流程、热力与外星人防御机制、采矿物流优化。
> 4. **Luna Abyss（第一人称射击）**：细化 Steam Deck 优化设置、Boss 战机制、结局触发逻辑。
> 5. **Fatekeeper（动作RPG）**：升级各职业最佳配装（Best Builds）、法术/武器获取。

> [!WARNING]
> **占位语专项清理：**
> 检查并彻底删除全站 `.ts` 数据文件中存在的 *"Replace this row..."*、*"needs check"*、*"pending verification"* 等表示尚未完成、会降低玩家信任度的过渡语，取而代之的是当前版本已被玩家确认的游戏数据。

---

## 优化步骤与修改内容

### 1. 逐步重构数据层文件 (`src/lib/*.ts`)

#### [MODIFY] [directive-8020-characters.ts](file:///e:/%E5%89%8D%E7%AB%AF%20github/gonglue/directive8020-guide/projects/src/lib/directive-8020-characters.ts) & [episode-walkthroughs.ts](file:///e:/%E5%89%8D%E7%AB%AF%20github/gonglue/directive8020-guide/projects/src/lib/episode-walkthroughs.ts)
*   **优化内容**：
    *   在 `episode-walkthroughs.ts` 中，为所有 8 个章节的 walkthrough 填充具体动作（比如 Episode 3 的冷冻室解谜及密码 `0402` ）。
    *   移除所有的“笔记提示词（Record/Write down）”，将其修改为直观的路线行文。
    *   重写 `quickSaveRows` 和 `survivorRows`，把抽象定性建议改成具体抉择步骤。

#### [MODIFY] [project-mist.ts](file:///e:/%E5%89%8D%E7%AB%AF%20github/gonglue/directive8020-guide/projects/src/lib/project-mist.ts)
*   **优化内容**：
    *   充实开锁机制 (`projectMistLockpickRows`)，提供更细化的操作说明。
    *   更新移动基地建设 (`projectMistBuildingRows`)，补充目前版本（抢先体验阶段）中玩家最关心的防御设施建造次序。
    *   更新配置要求与价格快照，使其文字在 2026 年更具时效性与准确性。

#### [MODIFY] [starminer.ts](file:///e:/%E5%89%8D%E7%AB%AF%20github/gonglue/directive8020-guide/projects/src/lib/starminer.ts)、[fatekeeper.ts](file:///e:/%E5%89%8D%E7%AB%AF%20github/gonglue/directive8020-guide/projects/src/lib/fatekeeper.ts) 等其他 10 款游戏的数据文件
*   **优化内容**：
    *   遍历其余游戏的数据集，删除任何占位性的问答（FAQ）或清单。
    *   根据英文社区（Steam Discussions, Reddit）的最新反馈，填充真正卡关的解谜密码、Boss 打法和配置推荐。

---

### 2. 前端展示层清理 (`src/app/` 路由页面)

#### [MODIFY] 检查并清理各游戏页面的占位元素
*   **重点检查对象**：
    *   `/directive-8020-how-to-save-everyone/page.tsx`
    *   `/directive-8020-choices-consequences/page.tsx`
    *   以及 `games/` 子目录下的各个页面组件。
*   **优化内容**：移除页面渲染逻辑中的临时提示或过渡标签。

---

## 验证计划

### 1. 编译安全测试
*   每次修改 `.ts` 数据文件后，必须在工作区运行 `npm run build` 或 `coze build`。
*   确保导出的数据字段类型（Type）契合 Next.js 的静态属性注入（GetStaticProps 或 Server Components 传参），杜绝类型签名冲突导致的构建失败。

### 2. SEO 元数据与结构化数据校验
*   对修改后的每一个游戏页面，运行 `npm run dev` 并在浏览器中校对 JSON-LD 结构，确保没有空的 FAQSchema 或 ArticleSchema 节点。

### 3. 内容与词汇审计
*   利用自动化过滤或全局搜索，确认无 `"replace"`、`"placeholder"`、`"TODO"` 等字眼出现在对公网展示的英文页面中。
