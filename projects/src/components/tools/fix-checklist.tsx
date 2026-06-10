'use client';

import { useState } from 'react';
import { Wrench } from 'lucide-react';

const fixes = {
 'Fatal Error': ['Update GPU driver', 'Verify Steam files', 'Disable overlays', 'Repair Visual C++ Redistributables'],
 'Save Error': ['Disable controlled folder access for testing', 'Check cloud sync', 'Free disk space', 'Avoid force-closing during autosave'],
 'PC Performance': ['Move to SSD', 'Cap FPS', 'Lower shadows/reflections', 'Close capture and monitoring apps'],
};

type FixType = keyof typeof fixes;

export function FixChecklist() {
 const [type, setType] = useState<FixType>('Fatal Error');

 return (
 <section aria-labelledby="fix-checklist" className="my-10 rounded-lg border border-border bg-white p-5">
 <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12px] text-foreground">
 <Wrench className="h-4 w-4" />
 Troubleshooting picker
 </p>
 <h2 id="fix-checklist" className="text-xl font-bold text-foreground">
 Directive 8020 Fix Checklist
 </h2>
 <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
 {(Object.keys(fixes) as FixType[]).map((item) => (
 <button
 key={item}
 type="button"
 onClick={() => setType(item)}
 className={`shrink-0 rounded-md border px-3 py-2 text-sm ${type === item ? 'border-border bg-mist text-foreground' : 'border-border text-muted-foreground'}`}
 >
 {item}
 </button>
 ))}
 </div>
 <ol className="mt-4 grid gap-3 sm:grid-cols-2">
 {fixes[type].map((fix, index) => (
 <li key={fix} className="rounded-md border border-border bg-mist p-3 text-sm text-foreground">
 <span className="mr-2 text-foreground">{index + 1}.</span>
 {fix}
 </li>
 ))}
 </ol>
 </section>
 );
}
