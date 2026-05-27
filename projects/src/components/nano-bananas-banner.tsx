import Link from "next/link";
import { ArrowUpRight, Crosshair } from "lucide-react";

export function NanoBananasBanner() {
  return (
    <aside className="border-b border-sky-300/20 bg-slate-950">
      <div className="mx-auto max-w-6xl px-3 py-3 sm:px-6 sm:py-4">
        <Link
          href="https://nanobananas.me/"
          target="_blank"
          rel="nofollow sponsored noreferrer"
          className="group grid gap-3 overflow-hidden rounded-lg border border-sky-300/30 bg-[radial-gradient(circle_at_10%_15%,rgba(56,189,248,0.24),transparent_30%),linear-gradient(135deg,rgba(2,6,23,0.98),rgba(15,23,42,0.95)_50%,rgba(12,74,110,0.9))] p-4 text-left shadow-[0_14px_44px_rgba(0,0,0,0.3)] transition-colors hover:border-sky-200/50 sm:grid-cols-[1fr_auto] sm:items-center sm:p-5"
        >
          <div className="min-w-0">
            <div className="mb-2 inline-flex max-w-full items-center gap-2 rounded-full border border-sky-300/30 bg-sky-300/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-sky-200 sm:px-3 sm:text-[11px]">
              <Crosshair className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span className="truncate">007 First Light guide hub</span>
            </div>
            <h2 className="max-w-3xl text-balance text-lg font-black leading-tight text-white sm:text-2xl">
              Playing 007 First Light next? Start with source-backed launch guides
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-sky-50/82">
              Release facts, preorder notes, beginner routes, stealth prep,
              screenshots, videos, and official sources in one fast hub.
            </p>
          </div>
          <div className="flex items-center gap-3 sm:justify-end">
            <span className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-sky-300 px-4 py-2.5 text-sm font-black text-slate-950 transition-transform group-hover:scale-[1.03] sm:w-auto sm:px-5 sm:py-3">
              Open Hub
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="hidden text-xs font-semibold uppercase tracking-wider text-sky-100/70 md:block">
              Updated guides
            </span>
          </div>
        </Link>
      </div>
    </aside>
  );
}
