import Link from 'next/link';

interface BlufBoxProps {
 title?: string;
 children: React.ReactNode;
}

interface StatusItem {
 label: string;
 value: string;
 status: 'verified' | 'needs-check' | 'working';
}

interface StatusPanelProps {
 items: StatusItem[];
}

interface ActionRow {
 step: string;
 doThis: string;
 why: string;
}

interface ActionTableProps {
 rows: readonly ActionRow[];
}

interface RelatedGuide {
 href: string;
 title: string;
 description: string;
}

interface RelatedGuidesProps {
 guides: RelatedGuide[];
}

interface SourceCheckRow {
 claim: string;
 source: string;
 status: 'verified' | 'needs-check' | 'working';
 href: string;
 note: string;
}

interface SourceCheckTableProps {
 title?: string;
 rows: readonly SourceCheckRow[];
}

interface SearchIntentRow {
 query: string;
 answer: string;
 href: string;
 label?: string;
}

interface JumpLink {
 href: string;
 label: string;
}

interface SearchAnswerPanelProps {
 title: string;
 answer: string;
 intentRows: SearchIntentRow[];
 jumpLinks: JumpLink[];
}

const statusStyles = {
 verified: 'bg-midnight-ink text-white border-midnight-ink',
 'needs-check': 'bg-mist text-smoke border-border',
 working: 'bg-dribbble-pink text-white border-dribbble-pink',
};

const statusLabels = {
 verified: 'Official',
 'needs-check': 'Not announced',
 working: 'May change',
};

export function BlufBox({ title = 'BLUF', children }: BlufBoxProps) {
 return (
 <section className="my-8 rounded-lg border border-border bg-mist p-5">
 <h2 className="mb-2 text-xs font-bold uppercase tracking-[0.12px] text-foreground">{title}</h2>
 <div className="max-w-3xl text-sm leading-7 text-muted-foreground [&_strong]:text-foreground">
 {children}
 </div>
 </section>
 );
}

export function SearchAnswerPanel({ title, answer, intentRows, jumpLinks }: SearchAnswerPanelProps) {
 return (
 <section className="my-8 overflow-hidden rounded-lg border border-border bg-white">
 <div className="border-b border-border p-5">
 <p className="mb-2 text-xs font-bold uppercase tracking-[0.12px] text-dribbble-pink">Quick Answer</p>
 <h2 className="text-[26px] font-bold leading-tight tracking-[-0.29px] text-foreground">{title}</h2>
 <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
 {answer}
 </p>
 </div>

 <div className="grid gap-4 p-5 lg:grid-cols-[1fr_220px]">
 <div>
 <h3 className="mb-3 text-sm font-semibold text-foreground">What you probably searched for</h3>
 <div className="grid gap-3">
 {intentRows.map((row) => (
 <Link
 key={row.query}
 href={row.href}
 className="group rounded-lg border border-border bg-white p-3 transition-colors hover:border-dribbble-pink"
 >
 <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
 <p className="text-sm font-semibold text-foreground">{row.query}</p>
 {row.label ? (
 <span className="ui-pink-badge w-fit">
 {row.label}
 </span>
 ) : null}
 </div>
 <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
 {row.answer}
 </p>
 </Link>
 ))}
 </div>
 </div>

 <nav aria-label="Page jump links" className="rounded-lg border border-border bg-mist p-3">
 <h3 className="mb-3 text-sm font-semibold text-foreground">Jump to</h3>
 <div className="flex flex-wrap gap-2 lg:flex-col">
 {jumpLinks.map((link) => (
 <Link
 key={link.href}
 href={link.href}
 className="ui-pill bg-white"
 >
 {link.label}
 </Link>
 ))}
 </div>
 </nav>
 </div>
 </section>
 );
}

export function StatusPanel({ items }: StatusPanelProps) {
 return (
 <section className="my-8 rounded-lg border border-border bg-white p-5">
 <h2 className="mb-4 text-xl font-bold tracking-[-0.22px] text-foreground">Key Facts</h2>
 <div className="grid gap-3 sm:grid-cols-2">
 {items.map((item) => (
 <div key={item.label} className="rounded-lg border border-border bg-mist p-3">
 <div className="mb-2 flex items-center justify-between gap-3">
 <dt className="text-xs text-muted-foreground">{item.label}</dt>
 <span className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12px] ${statusStyles[item.status]}`}>
 {statusLabels[item.status]}
 </span>
 </div>
 <dd className="text-sm font-semibold leading-relaxed text-foreground">{item.value}</dd>
 </div>
 ))}
 </div>
 </section>
 );
}

export function ActionTable({ rows }: ActionTableProps) {
 return (
 <div className="my-6 overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-semibold text-foreground">Step</th>
 <th className="px-4 py-3 text-left font-semibold text-foreground">Do this</th>
 <th className="px-4 py-3 text-left font-semibold text-foreground">Why it matters</th>
 </tr>
 </thead>
 <tbody>
 {rows.map((row) => (
 <tr key={row.step} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-medium text-foreground">{row.step}</td>
 <td className="px-4 py-3 text-muted-foreground">{row.doThis}</td>
 <td className="px-4 py-3 text-muted-foreground">{row.why}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 );
}

export function RelatedGuides({ guides }: RelatedGuidesProps) {
 return (
 <section className="my-10 border-t border-border pt-8">
 <h2 className="mb-4 text-xl font-bold tracking-[-0.22px] text-foreground">Next Guides</h2>
 <div className="grid gap-3 sm:grid-cols-2">
 {guides.map((guide) => (
 <Link
 key={guide.href}
 href={guide.href}
 className="rounded-lg border border-border bg-white p-4 transition-colors hover:border-dribbble-pink"
 >
 <h3 className="text-sm font-semibold text-foreground">{guide.title}</h3>
 <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{guide.description}</p>
 </Link>
 ))}
 </div>
 </section>
 );
}

export function SourceCheckTable({ title = 'Source Notes', rows }: SourceCheckTableProps) {
 return (
 <section className="my-8">
 <h2 className="mb-3 text-xl font-bold tracking-[-0.22px] text-foreground">{title}</h2>
 <div className="overflow-x-auto rounded-lg border border-border bg-white">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b border-border bg-mist">
 <th className="px-4 py-3 text-left font-semibold text-foreground">Player question</th>
 <th className="px-4 py-3 text-left font-semibold text-foreground">Source</th>
 <th className="px-4 py-3 text-left font-semibold text-foreground">Status</th>
 <th className="px-4 py-3 text-left font-semibold text-foreground">Player note</th>
 </tr>
 </thead>
 <tbody>
 {rows.map((row) => (
 <tr key={row.claim} className="border-b border-border last:border-0">
 <td className="px-4 py-3 font-medium text-foreground">{row.claim}</td>
 <td className="px-4 py-3">
 <a href={row.href} target="_blank" rel="noreferrer" className="font-medium text-foreground underline decoration-border hover:decoration-dribbble-pink">
 {row.source}
 </a>
 </td>
 <td className="px-4 py-3">
 <span className={`inline-flex rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12px] ${statusStyles[row.status]}`}>
 {statusLabels[row.status]}
 </span>
 </td>
 <td className="px-4 py-3 text-muted-foreground">{row.note}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </section>
 );
}
