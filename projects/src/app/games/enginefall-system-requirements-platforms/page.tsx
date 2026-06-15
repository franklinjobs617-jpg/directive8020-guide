// ================================================================
// 文件: src/app/games/enginefall-system-requirements-platforms/page.tsx
// 操作: 修改现有页面（不是新建）
// 改动点: 2处
// ================================================================

// ----------------------------------------------------------------
// ✅ CHANGE 1: metadata — 更新 title 和 description
// 位置: 文件顶部 export const metadata
// ----------------------------------------------------------------
// 原 title（当前）:
//   "Enginefall System Requirements 2026 - PC Specs, Steam Deck & Console Status"
//   （这个已经不错，保留结构，稍微优化）
// 改为:
//   "Is Enginefall on PS5, Xbox or Console? — PC System Requirements & Platform Status"
//
// 原 description 改为:
//   "Enginefall is PC-only (Steam) — no PS5 or Xbox release confirmed.
//    Console versions planned after full PC launch. Full 2026 PC system
//    requirements, Steam Deck status, and platform FAQ."
//
// 为什么: 当前曝光最高的词群是 「is enginefall on ps5/xbox/console」(合计52次曝光)
//         而不是 system requirements。把答案放进 title，点击率立刻提升。

export const updatedMetadata = {
  title:
    'Is Enginefall on PS5, Xbox or Console? — PC System Requirements & Platform Status',
  description:
    'Enginefall is PC-only (Steam) — no PS5 or Xbox release confirmed. Console versions planned after full PC launch. Full 2026 PC system requirements and Steam Deck status.',
  alternates: {
    canonical: '/games/enginefall-system-requirements-platforms',
  },
};

// ----------------------------------------------------------------
// ✅ CHANGE 2: 在 H1 下方加「Console & Platform Status」专区
// 位置: <h1>...</h1> 之后，System Requirements 表格之前
// ----------------------------------------------------------------

// 插入以下 JSX 块:
/*
<section className="mb-10">
  <h2 className="mb-4 text-2xl font-bold text-foreground">
    Is Enginefall on PS5, Xbox, or Console?
  </h2>

  // Quick answer callout
  <div className="mb-5 rounded-lg border border-border bg-mist/60 p-5">
    <p className="mb-1 text-sm font-semibold text-foreground">Platform status (June 2026)</p>
    <p className="text-sm leading-6 text-muted-foreground">
      <strong className="text-foreground">Enginefall is currently PC-only via Steam.</strong>
      {' '}No PS5 or Xbox release date has been confirmed by developer Red Rover Interactive.
      Console versions are planned for after the full PC 1.0 launch, but no timeline
      has been announced.
    </p>
  </div>

  // Platform table
  <div className="overflow-x-auto">
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr className="border-b border-border">
          <th className="py-2 pr-6 text-left font-medium text-muted-foreground">Platform</th>
          <th className="py-2 text-left font-medium text-muted-foreground">Status</th>
        </tr>
      </thead>
      <tbody>
        {[
          ['Windows PC (Steam)', '✓ Available — playtest / Coming Soon 2026'],
          ['PS5',               '✗ Not confirmed — no release date announced'],
          ['Xbox',              '✗ Not confirmed — no release date announced'],
          ['Steam Deck',        '⚠ Not officially verified — runs via PC specs'],
          ['Mac / Linux',       '✗ Not announced'],
        ].map(([platform, status]) => (
          <tr key={platform} className="border-b border-border">
            <td className="py-3 pr-6 font-medium text-foreground">{platform}</td>
            <td className="py-3 text-muted-foreground">{status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>
*/

// ----------------------------------------------------------------
// ✅ CHANGE 3: 在现有 FAQ Schema 里追加4条 console 相关 FAQ
// 位置: generateFAQSchema([...]) 数组末尾追加
// ----------------------------------------------------------------
/*
{
  question: 'Is Enginefall on PS5?',
  answer:
    'No. Enginefall is not on PS5. The game is currently PC-only via Steam. No PS5 release date has been confirmed by developer Red Rover Interactive. Console versions are planned for after the full PC launch.',
},
{
  question: 'Is Enginefall on Xbox?',
  answer:
    'No. Enginefall is not on Xbox. The game is PC-exclusive during its current development period. An Xbox release has not been officially announced.',
},
{
  question: 'Is Enginefall coming to console?',
  answer:
    'Console versions of Enginefall are planned by developer Red Rover Interactive, but no official release date has been confirmed. The PC version via Steam launches first. Check the official Enginefall site for updates.',
},
{
  question: 'What platforms is Enginefall on?',
  answer:
    'Enginefall is available on Windows PC via Steam. It is not currently available on PS5, Xbox, Nintendo Switch, Mac, or Linux.',
},
*/
