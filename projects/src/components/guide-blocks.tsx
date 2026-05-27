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
  rows: ActionRow[];
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
  rows: SourceCheckRow[];
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
  verified: 'text-green-400 bg-green-400/10 border-green-400/30',
  'needs-check': 'text-yellow-300 bg-yellow-300/10 border-yellow-300/30',
  working: 'text-d8020 bg-d8020/15 border-d8020/30',
};

const statusLabels = {
  verified: 'Confirmed',
  'needs-check': 'Pending update',
  working: 'Working route',
};

export function BlufBox({ title = 'BLUF', children }: BlufBoxProps) {
  return (
    <section className="my-8 rounded-lg border border-d8020/35 bg-d8020/10 p-5">
      <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-d8020">{title}</h2>
      <div className="text-sm leading-relaxed text-muted-foreground [&_strong]:text-foreground">
        {children}
      </div>
    </section>
  );
}

export function SearchAnswerPanel({ title, answer, intentRows, jumpLinks }: SearchAnswerPanelProps) {
  return (
    <section className="my-8 overflow-hidden rounded-lg border border-d8020/40 bg-gradient-to-b from-d8020/15 to-card/35">
      <div className="border-b border-d8020/20 p-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-d8020">Search Answer</p>
        <h2 className="text-xl font-black leading-tight text-foreground">{title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {answer}
        </p>
      </div>

      <div className="grid gap-4 p-5 lg:grid-cols-[1fr_220px]">
        <div>
          <h3 className="mb-3 text-sm font-bold text-foreground">What you probably searched for</h3>
          <div className="grid gap-2">
            {intentRows.map((row) => (
              <Link
                key={row.query}
                href={row.href}
                className="group rounded-md border border-border/45 bg-background/35 p-3 transition-colors hover:border-d8020/45"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <p className="text-sm font-semibold text-foreground">{row.query}</p>
                  {row.label ? (
                    <span className="w-fit rounded border border-d8020/30 bg-d8020/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-d8020">
                      {row.label}
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground group-hover:text-foreground">
                  {row.answer}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <nav aria-label="Page jump links" className="rounded-md border border-border/45 bg-background/35 p-3">
          <h3 className="mb-3 text-sm font-bold text-foreground">Jump to</h3>
          <div className="flex flex-wrap gap-2 lg:flex-col">
            {jumpLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded border border-border/40 bg-card/40 px-3 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:border-d8020/40 hover:text-foreground"
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
    <section className="my-8 rounded-lg border border-border/50 bg-card/30 p-5">
      <h2 className="mb-4 text-lg font-bold text-foreground">Key Facts</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.label} className="rounded-md border border-border/40 bg-background/30 p-3">
            <div className="mb-2 flex items-center justify-between gap-3">
              <dt className="text-xs text-muted-foreground">{item.label}</dt>
              <span className={`rounded border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${statusStyles[item.status]}`}>
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
    <div className="my-6 overflow-x-auto rounded-lg border border-border/50 bg-card/30">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border/50 bg-card/50">
            <th className="px-4 py-3 text-left font-medium text-muted-foreground">Step</th>
            <th className="px-4 py-3 text-left font-medium text-muted-foreground">Do this</th>
            <th className="px-4 py-3 text-left font-medium text-muted-foreground">Why it matters</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.step} className="border-b border-border/30 last:border-0">
              <td className="px-4 py-3 font-semibold text-foreground">{row.step}</td>
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
    <section className="my-10 rounded-lg border border-border/50 bg-card/30 p-5">
      <h2 className="mb-4 text-lg font-bold text-foreground">Next Guides</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {guides.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="rounded-md border border-border/40 bg-background/30 p-4 transition-colors hover:border-d8020/40"
          >
            <h3 className="text-sm font-semibold text-foreground">{guide.title}</h3>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{guide.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function SourceCheckTable({ title = 'Source Check', rows }: SourceCheckTableProps) {
  return (
    <section className="my-8">
      <h2 className="mb-3 text-lg font-bold text-foreground">{title}</h2>
      <div className="overflow-x-auto rounded-lg border border-border/50 bg-card/30">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-card/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player question</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Official link</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Player note</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.claim} className="border-b border-border/30 last:border-0">
                <td className="px-4 py-3 font-semibold text-foreground">{row.claim}</td>
                <td className="px-4 py-3">
                  <a href={row.href} target="_blank" rel="noreferrer" className="text-d8020 hover:underline">
                    {row.source}
                  </a>
                </td>
                <td className="px-4 py-3">
                  <span className={`inline-flex rounded border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${statusStyles[row.status]}`}>
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
