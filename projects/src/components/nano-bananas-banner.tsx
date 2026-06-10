import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function NanoBananasBanner() {
 return (
 <aside className="border-b border-border bg-white">
 <Link
 href="https://nanobananas.me/"
 target="_blank"
 rel="nofollow sponsored noreferrer"
 className="group site-shell flex min-h-9 items-center justify-center gap-2 py-1.5 text-center text-xs font-medium leading-snug text-muted-foreground transition-colors hover:text-foreground sm:min-h-10 sm:gap-3 sm:text-sm"
 >
 <span className="ui-pink-badge hidden sm:inline-flex">
 NEW
 </span>
 <span className="min-w-0">
 007 First Light launch guides are live: release date, preorder notes,
 beginner routes, stealth prep, screenshots, and official sources.
 </span>
 <span className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-border bg-white px-2 py-0.5 font-semibold text-foreground transition-colors group-hover:border-dribbble-pink">
 Open Hub
 <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
 </span>
 </Link>
 </aside>
 );
}
