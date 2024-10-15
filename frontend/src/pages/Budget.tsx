import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { Bar, BarChart } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "x", desktop: 73 },
  { month: "x", desktop: 186 },
  { month: "x", desktop: 305 },
  { month: "x", desktop: 237 },
  { month: "x", desktop: 209 },
  { month: "x", desktop: 214 },
  { month: "x", desktop: 305 },
  { month: "x", desktop: 237 },
  { month: "x", desktop: 186 },
  { month: "x", desktop: 214 },
  { month: "x", desktop: 209 },
  { month: "x", desktop: 73 },
];

const Budget = () => {
  const [budget, setBudget] = useState<number | null>(1000);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold pb-[6rem]">What's your budget?</h1>
      <p>Price range: up to CHF {budget}</p>
      <Slider defaultValue={[50]} max={100} step={1} />
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default Budget;
