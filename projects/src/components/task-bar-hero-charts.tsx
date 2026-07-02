"use client";

import { taskBarHeroStatComparison, taskBarHeroData } from "@/lib/task-bar-hero";
import {
 Card,
 CardHeader,
 CardTitle,
 CardDescription,
 CardContent,
} from "@/components/ui/card";
import {
 Table,
 TableHeader,
 TableBody,
 TableRow,
 TableHead,
 TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

/** Progress bar with a value label, scaled from 0 to max */
function StatBar({ value, max, color }: { value: number; max: number; color: string }) {
 const pct = Math.min((value / max) * 100, 100);
 return (
  <div className="flex items-center gap-3 min-w-[160px]">
   <span className="w-14 shrink-0 text-right font-mono text-xs tabular-nums text-muted-foreground">
    {value}
   </span>
   <div className="flex-1 h-2.5 rounded-full bg-muted overflow-hidden">
    <div
     className="h-full rounded-full transition-all"
     style={{ width: `${pct}%`, backgroundColor: color }}
    />
   </div>
  </div>
 );
}

// --- Hero Lv1 stat table ------------------------------------------------

export function HeroStatTable() {
 const maxHp = Math.max(...taskBarHeroData.map((h) => h.hp));
 const maxAtk = Math.max(...taskBarHeroData.map((h) => h.atk));
 const maxArmor = Math.max(...taskBarHeroData.map((h) => h.armor));
 const maxSpd = Math.max(...taskBarHeroData.map((h) => h.attackSpeed));

 return (
  <Card className="my-8">
   <CardHeader>
    <CardTitle>Hero Stat Comparison (Lv1 Base)</CardTitle>
    <CardDescription>
     Actual Lv1 base stats from game files (v1.00.09). Bar width shows each
     hero&apos;s standing relative to the category max. Knight has 130 HP (max),
     Sorcerer has 50 HP (lowest) — that gap explains their roles.
    </CardDescription>
   </CardHeader>
   <CardContent className="overflow-x-auto">
    <Table>
     <TableHeader>
      <TableRow>
       <TableHead>Hero</TableHead>
       <TableHead>HP</TableHead>
       <TableHead>ATK</TableHead>
       <TableHead>Armor</TableHead>
       <TableHead>ATK Speed</TableHead>
       <TableHead>Crit DMG</TableHead>
       <TableHead>DLC</TableHead>
      </TableRow>
     </TableHeader>
     <TableBody>
      {taskBarHeroData.map((h) => (
       <TableRow key={h.name}>
        <TableCell className="font-semibold">{h.name}</TableCell>
        <TableCell><StatBar value={h.hp} max={maxHp} color="#2563eb" /></TableCell>
        <TableCell><StatBar value={h.atk} max={maxAtk} color="#dc2626" /></TableCell>
        <TableCell><StatBar value={Math.round(h.armor * 100)} max={Math.round(maxArmor * 100)} color="#059669" /></TableCell>
        <TableCell><StatBar value={h.attackSpeed} max={maxSpd} color="#d97706" /></TableCell>
        <TableCell className="text-muted-foreground">{h.critDamage}x</TableCell>
        <TableCell>
         {h.dlc ? <Badge variant="secondary">DLC</Badge> : <Badge>Free</Badge>}
        </TableCell>
       </TableRow>
      ))}
     </TableBody>
    </Table>
   </CardContent>
  </Card>
 );
}

// --- 4-Dimension role comparison ----------------------------------------

export function HeroRoleComparisonTable() {
 const maxSurvival = Math.max(...taskBarHeroStatComparison.map((h) => h.survival));
 const maxBurst = Math.max(...taskBarHeroStatComparison.map((h) => h.burst));
 const maxDps = Math.max(...taskBarHeroStatComparison.map((h) => h.sustainedDps));
 const maxSpeed = Math.max(...taskBarHeroStatComparison.map((h) => h.clearSpeed));

 return (
  <Card className="my-8">
   <CardHeader>
    <CardTitle>4-Dimension Role Comparison (Computed from Lv1 Base)</CardTitle>
    <CardDescription>
     Computed values from raw game data: Survival (HP × Armor), Burst (Crit% ×
     Crit DMG), Sustained DPS (ATK × ATK Speed), Clear Speed (Move Speed). Not
     opinion scores — just the math.
    </CardDescription>
   </CardHeader>
   <CardContent className="overflow-x-auto">
    <Table>
     <TableHeader>
      <TableRow>
       <TableHead>Hero</TableHead>
       <TableHead>Survival</TableHead>
       <TableHead>Burst</TableHead>
       <TableHead>Sustained DPS</TableHead>
       <TableHead>Clear Speed</TableHead>
       <TableHead>Free?</TableHead>
      </TableRow>
     </TableHeader>
     <TableBody>
      {taskBarHeroStatComparison.map((h) => (
       <TableRow key={h.hero}>
        <TableCell className="font-semibold">{h.hero}</TableCell>
        <TableCell><StatBar value={Math.round(h.survival)} max={Math.round(maxSurvival)} color="#2563eb" /></TableCell>
        <TableCell><StatBar value={Math.round(h.burst * 100)} max={Math.round(maxBurst * 100)} color="#dc2626" /></TableCell>
        <TableCell><StatBar value={Math.round(h.sustainedDps)} max={Math.round(maxDps)} color="#d97706" /></TableCell>
        <TableCell><StatBar value={h.clearSpeed} max={maxSpeed} color="#059669" /></TableCell>
        <TableCell>
         {h.free ? <Badge>Free</Badge> : <Badge variant="secondary">DLC</Badge>}
        </TableCell>
       </TableRow>
      ))}
     </TableBody>
    </Table>
   </CardContent>
  </Card>
 );
}

// --- Cube XP efficiency -------------------------------------------------

export function CubeEfficiencyTable() {
 return (
  <Card className="my-8">
   <CardHeader>
    <CardTitle>Cube XP Efficiency by Operation</CardTitle>
    <CardDescription>
     Synthesis gives 5 XP per material. Alchemy gives 3 XP. That is a 40%
     efficiency gap. The bars compare XP per material — same input, very
     different results.
    </CardDescription>
   </CardHeader>
   <CardContent className="overflow-x-auto">
    <Table>
     <TableHeader>
      <TableRow>
       <TableHead>Operation</TableHead>
       <TableHead>XP / material</TableHead>
       <TableHead>Hours to Cube 15</TableHead>
       <TableHead>Best level range</TableHead>
       <TableHead className="hidden sm:table-cell">Example recipe</TableHead>
      </TableRow>
     </TableHeader>
     <TableBody>
      <TableRow>
       <TableCell className="font-semibold">Synthesis</TableCell>
       <TableCell><StatBar value={5} max={5} color="#059669" /></TableCell>
       <TableCell className="text-muted-foreground">~11</TableCell>
       <TableCell className="text-muted-foreground">1-14 primary, 15+ still main</TableCell>
       <TableCell className="text-muted-foreground hidden sm:table-cell">10x Basic Shard = 50 XP</TableCell>
      </TableRow>
      <TableRow>
       <TableCell className="font-semibold">Alchemy</TableCell>
       <TableCell><StatBar value={3} max={5} color="#dc2626" /></TableCell>
       <TableCell className="text-muted-foreground">~19</TableCell>
       <TableCell className="text-muted-foreground">20+ only, keep under 20%</TableCell>
       <TableCell className="text-muted-foreground hidden sm:table-cell">15x Basic Shard = 45 XP</TableCell>
      </TableRow>
      <TableRow>
       <TableCell className="font-semibold">Crafting</TableCell>
       <TableCell className="text-muted-foreground">Varies</TableCell>
       <TableCell className="text-muted-foreground">N/A</TableCell>
       <TableCell className="text-muted-foreground">All levels (targeted gear)</TableCell>
       <TableCell className="text-muted-foreground hidden sm:table-cell">Bronze → Iron → Silver ingot</TableCell>
      </TableRow>
      <TableRow>
       <TableCell className="font-semibold">Decoration / Engraving / Inscription</TableCell>
       <TableCell className="text-muted-foreground">N/A</TableCell>
       <TableCell className="text-muted-foreground">N/A</TableCell>
       <TableCell className="text-muted-foreground">Mid to end-game</TableCell>
       <TableCell className="text-muted-foreground hidden sm:table-cell">Gem sockets / rune effects / scroll affixes</TableCell>
      </TableRow>
     </TableBody>
    </Table>
   </CardContent>
  </Card>
 );
}

// --- Rune priority ------------------------------------------------------

export function RunePriorityTable() {
 const rows = [
  { priority: 1, name: "Rune of Command", desc: "Unlocks an extra hero slot. Single highest-ROI node.", cost: "Low", color: "#059669" },
  { priority: 2, name: "Offline (Repose → Hoarding → Training)", desc: "Passive gold and EXP while logged off.", cost: "Low-Med", color: "#2563eb" },
  { priority: 3, name: "Rune of Mainspring (auto-open)", desc: "Auto-opens chests. Saves hours of clicking.", cost: "Medium", color: "#d97706" },
  { priority: 4, name: "Rune of Wealth / Growth", desc: "Gold and EXP gain rate. Farm efficiency.", cost: "Med-High", color: "#dc2626" },
  { priority: 5, name: "Combat / Cube nodes", desc: "ATK%, Armor%, Cube efficiency. Do last.", cost: "High", color: "#7c3aed" },
 ];

 return (
  <Card className="my-8">
   <CardHeader>
    <CardTitle>Rune Priority Order</CardTitle>
    <CardDescription>
     The Rune Tree has 197 nodes. Spreading points is the fastest way to stall.
     Push one route until the next unlock threshold.
    </CardDescription>
   </CardHeader>
   <CardContent className="overflow-x-auto">
    <Table>
     <TableHeader>
      <TableRow>
       <TableHead className="w-16">Priority</TableHead>
       <TableHead>Rune</TableHead>
       <TableHead className="hidden sm:table-cell">Why</TableHead>
       <TableHead className="w-24">Cost</TableHead>
      </TableRow>
     </TableHeader>
     <TableBody>
      {rows.map((r) => (
       <TableRow key={r.priority}>
        <TableCell>
         <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-muted-foreground">{r.priority}</span>
          <div className="w-12 h-1.5 rounded-full bg-muted overflow-hidden">
           <div className="h-full rounded-full" style={{ width: `${100 - (r.priority - 1) * 25}%`, backgroundColor: r.color }} />
          </div>
         </div>
        </TableCell>
        <TableCell className="font-semibold">{r.name}</TableCell>
        <TableCell className="text-muted-foreground hidden sm:table-cell">{r.desc}</TableCell>
        <TableCell><Badge variant="outline">{r.cost}</Badge></TableCell>
       </TableRow>
      ))}
     </TableBody>
    </Table>
   </CardContent>
  </Card>
 );
}
