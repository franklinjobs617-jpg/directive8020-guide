import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function NanoBananasBanner() {
  return (
    <aside className="border-b border-blue-500/20 bg-[#050711] text-slate-200">
      <Link
        href="https://nanobananas.me/"
        target="_blank"
        rel="nofollow sponsored noreferrer"
        className="group mx-auto flex min-h-9 max-w-6xl items-center justify-center gap-2 px-3 py-1.5 text-center text-xs font-medium leading-snug transition-colors hover:text-white sm:min-h-10 sm:gap-3 sm:px-6 sm:text-sm"
      >
        <span className="hidden rounded border border-blue-400/35 bg-blue-500/10 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-blue-300 sm:inline">
          NEW
        </span>
        <span className="min-w-0 text-slate-300">
          007 First Light launch guides are live: release date, preorder notes,
          beginner routes, stealth prep, screenshots, and official sources.
        </span>
        <span className="inline-flex shrink-0 items-center gap-1 rounded border border-blue-400/30 bg-blue-500/10 px-2 py-0.5 font-semibold text-blue-300 transition-colors group-hover:border-blue-300/60 group-hover:text-blue-200">
          Open Hub
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
      </Link>
    </aside>
  );
}
