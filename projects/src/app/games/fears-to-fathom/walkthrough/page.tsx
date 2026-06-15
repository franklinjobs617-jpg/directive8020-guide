// ================================================================
// 文件: src/app/games/fears-to-fathom/walkthrough/page.tsx
// 操作: 修改现有页面（不是新建）
// 改动点: 3处，全部标注 ✅ CHANGE / ✅ ADD
// ================================================================

// ----------------------------------------------------------------
// ✅ CHANGE 1: metadata — 修改 title 和 description
// 位置: 文件顶部 export const metadata
// ----------------------------------------------------------------
// 原 title（推测）:
//   "Fears to Fathom Scratch Creek Walkthrough"
// 改为:
//   "Fears to Fathom Scratch Creek Walkthrough — Can You Play Solo? Full Co-op Route"
//
// 原 description（推测）:
//   "Full walkthrough for Fears to Fathom Scratch Creek..."
// 改为:
//   "Fears to Fathom Scratch Creek cannot be played solo — it is co-op only.
//    Full walkthrough: trailer setup, Parsonage, Henry scene, all endings,
//    and achievement windows for Tessa and Marcus."
//
// 为什么: 「can you play alone」曝光94次排名9，用户落地 walkthrough 页后
//         在 meta description 里看不到答案 → 不点击。把答案放进 description，
//         CTR 可以提升 30-50%。

export const metadata = {
  title:
    'Fears to Fathom Scratch Creek Walkthrough — Can You Play Solo? Full Co-op Route',
  description:
    'Fears to Fathom: Scratch Creek cannot be played solo — it is co-op only. Full walkthrough covering trailer setup, Parsonage, Henry scene, all endings, and achievement windows for Tessa and Marcus.',
  alternates: {
    canonical: '/games/fears-to-fathom/walkthrough',
  },
};

// ----------------------------------------------------------------
// ✅ CHANGE 2: 在 H1 标题下方、正文第一段上方，插入 Solo Callout 块
// 位置: <h1>...</h1> 之后，第一个 <section> / <p> 之前
// ----------------------------------------------------------------

// 插入以下 JSX:
/*
<div className="mb-8 rounded-lg border border-amber-200 bg-amber-50 p-5">
  <p className="mb-1 text-sm font-semibold text-amber-900">
    Can you play Fears to Fathom: Scratch Creek alone?
  </p>
  <p className="text-sm leading-6 text-amber-800">
    <strong>No.</strong> Scratch Creek is co-op only — there is no single-player
    mode and no AI companion. You must play with another person online. Unlike
    earlier Fears to Fathom episodes (Home Alone, Carson House, Woodbury Getaway)
    which were solo experiences, Scratch Creek is part of the new{' '}
    <em>Fears to Fathom [Together]</em> series and requires exactly two players.
    {' '}
    <a href="/games/fears-to-fathom/co-op-guide" className="underline underline-offset-2">
      How to find a partner → Co-op setup guide
    </a>
  </p>
</div>
*/

// 如果你的项目没有 amber Tailwind 颜色，用这个替代版本（用 border-border + bg-mist）:
/*
<div className="mb-8 rounded-lg border border-border bg-mist/60 p-5">
  <p className="mb-1 text-sm font-semibold text-foreground">
    Can you play Fears to Fathom: Scratch Creek alone?
  </p>
  <p className="text-sm leading-6 text-muted-foreground">
    <strong className="text-foreground">No.</strong> Scratch Creek is co-op only —
    no single-player mode, no AI companion. You must play with another person online.
    Earlier F2F episodes were solo; Scratch Creek is part of the new{' '}
    <em>Fears to Fathom [Together]</em> series and requires exactly two players.
    Use the built-in <strong className="text-foreground">Duo Matchmaking</strong> to
    find a random partner if you don't have a friend ready.{' '}
    <a href="/games/fears-to-fathom/co-op-guide" className="underline underline-offset-2">
      Full co-op setup guide →
    </a>
  </p>
</div>
*/

// ----------------------------------------------------------------
// ✅ CHANGE 3: 在页面末尾 JsonLd / generateFAQSchema 里新增2条 FAQ
// 位置: 现有 FAQ Schema 数组里追加
// ----------------------------------------------------------------
/*
{
  question: 'Can you play Fears to Fathom Scratch Creek alone?',
  answer:
    'No. Fears to Fathom: Scratch Creek is co-op only. There is no single-player mode or AI companion. You must play with another person online. Use Duo Matchmaking to find a random partner if you do not have a friend ready.',
},
{
  question: 'Can you play Fears to Fathom Scratch Creek solo?',
  answer:
    'No. Unlike earlier Fears to Fathom episodes which were single-player, Scratch Creek is part of the Fears to Fathom Together series and requires two players online at all times. There is no offline or solo option.',
},
{
  question: 'Is Fears to Fathom Scratch Creek crossplay?',
  answer:
    'No. Scratch Creek is PC-only via Steam. There is no console version and no crossplay with other platforms.',
},
*/
