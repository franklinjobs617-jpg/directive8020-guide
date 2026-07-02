"use client";

import {
 Bar,
 BarChart,
 CartesianGrid,
 LabelList,
 PolarAngleAxis,
 PolarGrid,
 Radar,
 RadarChart,
 XAxis,
 YAxis,
} from "recharts";
import {
 ChartContainer,
 ChartTooltip,
 ChartTooltipContent,
 type ChartConfig,
} from "@/components/ui/chart";

const chartConfig = {
 hp: { label: "HP", color: "var(--chart-1)" },
 armor: { label: "Armor", color: "var(--chart-2)" },
 attackSpeed: { label: "Attack speed", color: "var(--chart-3)" },
 critChance: { label: "Crit chance", color: "var(--chart-4)" },
 pressure: { label: "Pressure", color: "var(--chart-2)" },
 focus: { label: "Focus", color: "var(--chart-1)" },
 value: { label: "Value", color: "var(--chart-1)" },
} satisfies ChartConfig;

const heroBaseStats = [
 { hero: "Knight", hp: 100, armor: 100, attackSpeed: 90, critChance: 50 },
 { hero: "Ranger", hp: 46, armor: 18, attackSpeed: 100, critChance: 80 },
 { hero: "Sorcerer", hp: 38, armor: 11, attackSpeed: 55, critChance: 100 },
 { hero: "Priest", hp: 73, armor: 67, attackSpeed: 90, critChance: 40 },
 { hero: "Hunter", hp: 54, armor: 33, attackSpeed: 70, critChance: 90 },
 { hero: "Slayer", hp: 88, armor: 89, attackSpeed: 70, critChance: 50 },
];

const roleRadarData = [
 { stat: "Survival", Knight: 100, Ranger: 32, Sorcerer: 25, Priest: 70, Hunter: 42, Slayer: 88 },
 { stat: "Speed", Knight: 90, Ranger: 100, Sorcerer: 55, Priest: 90, Hunter: 70, Slayer: 70 },
 { stat: "Crit", Knight: 50, Ranger: 80, Sorcerer: 100, Priest: 40, Hunter: 90, Slayer: 50 },
 { stat: "Burst", Knight: 78, Ranger: 83, Sorcerer: 92, Priest: 78, Hunter: 86, Slayer: 100 },
 { stat: "Beginner safety", Knight: 95, Ranger: 70, Sorcerer: 45, Priest: 78, Hunter: 58, Slayer: 76 },
];

const beginnerFocusData = [
 { item: "Stage progress", focus: 95 },
 { item: "Main weapon", focus: 88 },
 { item: "Core skills", focus: 82 },
 { item: "Cube check", focus: 76 },
 { item: "Rune direction", focus: 62 },
 { item: "Market", focus: 25 },
];

const cubeSpendData = [
 { item: "Known wall fix", value: 95 },
 { item: "Active hero gear", value: 86 },
 { item: "Duplicate cleanup", value: 70 },
 { item: "Unclear craft", value: 38 },
 { item: "Bench hero item", value: 30 },
 { item: "Market guess", value: 18 },
];

const bossDiagnosisData = [
 { issue: "Dying early", pressure: 92 },
 { issue: "Timing out", pressure: 88 },
 { issue: "Weak weapon", pressure: 82 },
 { issue: "Skill gaps", pressure: 74 },
 { issue: "Cube lag", pressure: 72 },
 { issue: "Random farming", pressure: 35 },
];

function ChartCard({
 title,
 note,
 children,
}: {
 title: string;
 note: string;
 children: React.ReactNode;
}) {
 return (
  <figure className="my-8 rounded-lg border border-border bg-white p-4">
   <figcaption className="mb-3">
    <h3 className="text-base font-bold text-foreground">{title}</h3>
    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{note}</p>
   </figcaption>
   {children}
  </figure>
 );
}

export function HeroBaseStatsChart() {
 return (
  <ChartCard
   title="Hero Base Stat Comparison"
   note="The bars compare the six current heroes by starting HP, armor, attack speed, and crit chance. Use them to understand role feel before chasing a finished build."
  >
   <ChartContainer config={chartConfig} className="min-h-[360px]">
    <BarChart data={heroBaseStats} margin={{ top: 18, right: 12, left: 0, bottom: 8 }}>
     <CartesianGrid vertical={false} />
     <XAxis dataKey="hero" tickLine={false} axisLine={false} />
     <YAxis tickLine={false} axisLine={false} width={32} domain={[0, 100]} />
     <ChartTooltip content={<ChartTooltipContent />} />
     <Bar dataKey="hp" fill="var(--color-hp)" radius={[4, 4, 0, 0]} />
     <Bar dataKey="armor" fill="var(--color-armor)" radius={[4, 4, 0, 0]} />
     <Bar dataKey="attackSpeed" fill="var(--color-attackSpeed)" radius={[4, 4, 0, 0]} />
     <Bar dataKey="critChance" fill="var(--color-critChance)" radius={[4, 4, 0, 0]} />
    </BarChart>
   </ChartContainer>
  </ChartCard>
 );
}

export function HeroRoleRadarChart() {
 return (
  <ChartCard
   title="Role Shape Radar"
   note="This chart turns base stats into role shape, so you can see why Knight feels safer, Ranger and Hunter lean into physical pressure, and Sorcerer favors burst."
  >
   <ChartContainer config={chartConfig} className="min-h-[420px]">
    <RadarChart data={roleRadarData} margin={{ top: 24, right: 48, bottom: 24, left: 48 }}>
     <PolarGrid />
     <PolarAngleAxis dataKey="stat" tickLine={false} />
     <ChartTooltip content={<ChartTooltipContent />} />
     <Radar name="Knight" dataKey="Knight" stroke="var(--chart-2)" fill="var(--chart-2)" fillOpacity={0.12} />
     <Radar name="Ranger" dataKey="Ranger" stroke="var(--chart-1)" fill="var(--chart-1)" fillOpacity={0.10} />
     <Radar name="Sorcerer" dataKey="Sorcerer" stroke="var(--chart-5)" fill="var(--chart-5)" fillOpacity={0.08} />
     <Radar name="Priest" dataKey="Priest" stroke="var(--chart-3)" fill="var(--chart-3)" fillOpacity={0.08} />
    </RadarChart>
   </ChartContainer>
  </ChartCard>
 );
}

export function BeginnerFocusChart() {
 return (
  <ChartCard
   title="First-Hour Upgrade Order"
   note="Start with the checks that usually move a new account forward: stage progress, the main weapon, core skills, Cube, then runes. Market play can wait."
  >
   <ChartContainer config={chartConfig} className="min-h-[320px]">
    <BarChart data={beginnerFocusData} layout="vertical" margin={{ top: 12, right: 34, left: 24, bottom: 8 }}>
     <CartesianGrid horizontal={false} />
     <XAxis type="number" domain={[0, 100]} hide />
     <YAxis dataKey="item" type="category" tickLine={false} axisLine={false} width={110} />
     <ChartTooltip content={<ChartTooltipContent />} />
     <Bar dataKey="focus" fill="var(--color-focus)" radius={4}>
      <LabelList dataKey="focus" position="right" className="fill-foreground" fontSize={12} />
     </Bar>
    </BarChart>
   </ChartContainer>
  </ChartCard>
 );
}

export function CubeSpendChart() {
 return (
  <ChartCard
   title="Cube Material Choices"
   note="Spend when the result helps the wall you are facing or strengthens an active hero. Hold materials when the craft is unclear."
  >
   <ChartContainer config={chartConfig} className="min-h-[320px]">
    <BarChart data={cubeSpendData} layout="vertical" margin={{ top: 12, right: 34, left: 24, bottom: 8 }}>
     <CartesianGrid horizontal={false} />
     <XAxis type="number" domain={[0, 100]} hide />
     <YAxis dataKey="item" type="category" tickLine={false} axisLine={false} width={120} />
     <ChartTooltip content={<ChartTooltipContent />} />
     <Bar dataKey="value" fill="var(--color-value)" radius={4}>
      <LabelList dataKey="value" position="right" className="fill-foreground" fontSize={12} />
     </Bar>
    </BarChart>
   </ChartContainer>
  </ChartCard>
 );
}

export function BossDiagnosisChart() {
 return (
   <ChartCard
   title="Boss Wall First Checks"
   note="Start with the symptom that matches your run. Dying early and timing out need different fixes, so random farming should be the last fallback."
  >
   <ChartContainer config={chartConfig} className="min-h-[320px]">
    <BarChart data={bossDiagnosisData} layout="vertical" margin={{ top: 12, right: 34, left: 24, bottom: 8 }}>
     <CartesianGrid horizontal={false} />
     <XAxis type="number" domain={[0, 100]} hide />
     <YAxis dataKey="issue" type="category" tickLine={false} axisLine={false} width={104} />
     <ChartTooltip content={<ChartTooltipContent />} />
     <Bar dataKey="pressure" fill="var(--color-pressure)" radius={4}>
      <LabelList dataKey="pressure" position="right" className="fill-foreground" fontSize={12} />
     </Bar>
    </BarChart>
   </ChartContainer>
  </ChartCard>
 );
}
