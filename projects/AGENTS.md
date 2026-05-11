# Directive 8020 Guide Hub - 项目上下文

## 项目概览

Directive 8020 攻略站，为 Supermassive Games 的《黑相集：指令8020》提供全面攻略。
目标是在游戏发售日（2026-05-12）前后通过 SEO 获取英文搜索流量。

### 版本技术栈

- **Framework**: Next.js 16 (App Router, SSG)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI 组件**: shadcn/ui (基于 Radix UI)
- **Styling**: Tailwind CSS 4
- **SEO**: JSON-LD (Article, FAQPage, VideoGame Schema), Sitemap, robots.txt

## 目录结构

```
├── public/                 # 静态资源
├── scripts/                # 构建与启动脚本
├── src/
│   ├── app/                # 页面路由与布局
│   │   ├── layout.tsx          # 全局布局（暗色恐怖主题）
│   │   ├── page.tsx            # 首页攻略 Hub
│   │   ├── globals.css         # 全局样式 + 自定义暗色主题
│   │   ├── sitemap.ts          # SEO Sitemap 生成
│   │   ├── robots.ts           # robots.txt 配置
│   │   ├── guides/             # 攻略索引页
│   │   ├── directive-8020-overview/       # 游戏概览
│   │   ├── directive-8020-system-requirements/  # 系统配置要求
│   │   ├── directive-8020-release-time/   # 发售时间
│   │   ├── directive-8020-characters/     # 角色介绍
│   │   ├── directive-8020-all-endings/    # 全结局指南
│   │   ├── directive-8020-how-to-save-everyone/  # 全员存活
│   │   ├── directive-8020-choices-consequences/  # 选择与后果
│   │   ├── directive-8020-trophy-guide/   # 奖杯成就
│   │   ├── directive-8020-crashing-fix/   # 崩溃修复
│   │   └── directive-8020-walkthrough/    # 完整攻略
│   ├── components/             # 共享组件
│   │   ├── site-header.tsx     # 导航栏
│   │   ├── site-footer.tsx     # 页脚
│   │   ├── guide-card.tsx      # 攻略卡片
│   │   ├── faq-section.tsx     # FAQ 区块
│   │   ├── breadcrumb.tsx      # 面包屑导航
│   │   ├── json-ld.tsx         # JSON-LD 结构化数据
│   │   └── ui/                 # shadcn/ui 组件
│   ├── hooks/
│   └── lib/
├── next.config.ts
├── package.json
└── tsconfig.json
```

## 包管理规范

**仅允许使用 pnpm** 作为包管理器，**严禁使用 npm 或 yarn**。

## 开发规范

### 编码规范

- 默认按 TypeScript `strict` 心智写代码；优先复用当前作用域已声明的变量、函数、类型和导入
- 禁止隐式 `any` 和 `as any`；函数参数、返回值、解构项应有明确类型
- 禁止使用 head 标签，JSON-LD 放在 body 内部，metadata 通过 Next.js Metadata API 配置

### SEO 规范

- 每个页面必须有唯一的 `<title>` 和 `<meta description>`
- 每个攻略页底部必须有 FAQSection + FAQPage Schema
- URL 结构扁平化：`/directive-8020-xxx/`
- 每个页面包含 Breadcrumb + BreadcrumbList Schema
- Article Schema 标注发布日期和游戏信息
- 全局 VideoGame Schema 在 layout.tsx 中注入

### 内容策略

- Day-0 页面（已上线）：overview, system-requirements, release-time, characters, guides index
- Day-1 模板（5/12填内容）：all-endings, how-to-save-everyone, choices-consequences, trophy-guide, crashing-fix, walkthrough
- 每篇攻略独立 URL，不合并不同搜索意图的内容
- 积木式发布：先 300 词上线 → 扩充到 800 词 + FAQ → 再到 1500 词 + 截图

## 构建与测试命令

- 类型检查：`pnpm ts-check`
- Lint：`pnpm lint:build`
- 开发：`pnpm dev`（端口 5000）
- 构建：`pnpm build`
- 生产启动：`pnpm start`
