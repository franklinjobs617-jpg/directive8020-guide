import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function NanoBananasBanner() {
  return (
    <aside className="border-b border-lime-300/60 bg-lime-300 text-slate-950">
      <Link
        href="https://nanobananas.me/"
        target="_blank"
        rel="nofollow sponsored noreferrer"
        className="mx-auto flex min-h-9 max-w-6xl items-center justify-center gap-2 px-3 py-1.5 text-center text-xs font-medium leading-snug hover:underline sm:min-h-10 sm:gap-3 sm:px-6 sm:text-sm"
      >
        <span className="hidden rounded-md bg-white/80 px-2 py-0.5 font-mono text-xs font-bold shadow-sm sm:inline">
          NEW
        </span>
        <span className="min-w-0">
          007 First Light launch guides are live: release date, preorder notes,
          beginner routes, stealth prep, screenshots, and official sources.
        </span>
        <span className="inline-flex shrink-0 items-center gap-1 font-semibold underline underline-offset-2">
          Open Hub
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
      </Link>
    </aside>
  );
}
