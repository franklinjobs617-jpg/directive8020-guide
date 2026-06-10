"use client";

import { useState } from "react";
import { Filter } from "lucide-react";

type ChoiceGoal =
 | "Best Route"
 | "Trophy Cleanup"
 | "Death Route"
 | "Ending Route";

const goals: ChoiceGoal[] = [
 "Best Route",
 "Trophy Cleanup",
 "Death Route",
 "Ending Route",
];

const rows = [
 {
 choice: "Trust an isolated crew member",
 goal: "Best Route",
 impact: "Verify identity first; do not split the group without proof.",
 status: "High priority",
 },
 {
 choice: "Skip optional evidence",
 goal: "Ending Route",
 impact: "Can weaken later accusation or mimic-check branches.",
 status: "Route risk",
 },
 {
 choice: "Fail a chase QTE",
 goal: "Death Route",
 impact: "Useful for death cleanup only after preserving a clean save.",
 status: "Cleanup only",
 },
 {
 choice: "Use Turning Points after one ending",
 goal: "Trophy Cleanup",
 impact:
 "Best way to test deaths, endings, and collectibles one variable at a time.",
 status: "Recommended",
 },
 {
 choice: "Preserve relationships",
 goal: "Best Route",
 impact: "Keeps rescue and warning options available longer.",
 status: "High priority",
 },
 {
 choice: "Branch from finale node",
 goal: "Ending Route",
 impact:
 "Fastest way to compare ending variants without replaying the whole story.",
 status: "Recommended",
 },
];

export function ChoiceImpactFilter() {
 const [goal, setGoal] = useState<ChoiceGoal>("Best Route");
 const visibleRows = rows.filter((row) => row.goal === goal);

 return (
 <section
 aria-labelledby="choice-impact-filter"
 className="my-10 rounded-lg border border-border bg-white p-5"
 >
 <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12px] text-foreground">
 <Filter className="h-4 w-4" />
 Interactive decision filter
 </p>
 <h2
 id="choice-impact-filter"
 className="text-xl font-bold text-foreground"
 >
 Directive 8020 Choice Impact Filter
 </h2>
 <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
 Choose your goal and focus only on the decisions that matter for that
 route.
 </p>

 <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
 {goals.map((item) => (
 <button
 key={item}
 type="button"
 onClick={() => setGoal(item)}
 className={`shrink-0 rounded-md border px-3 py-2 text-sm transition-colors ${
 goal === item
 ? "border-border bg-mist text-foreground"
 : "border-border text-muted-foreground hover:border-border hover:text-foreground"
 }`}
 >
 {item}
 </button>
 ))}
 </div>

 <div className="mt-4 grid gap-3">
 {visibleRows.map((row) => (
 <div
 key={row.choice}
 className="rounded-lg border border-border bg-mist p-4"
 >
 <div className="mb-2 flex flex-wrap items-center gap-2">
 <h3 className="text-base font-semibold text-foreground">
 {row.choice}
 </h3>
 <span className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground">
 {row.status}
 </span>
 </div>
 <p className="text-sm leading-relaxed text-muted-foreground">
 {row.impact}
 </p>
 </div>
 ))}
 </div>
 </section>
 );
}
