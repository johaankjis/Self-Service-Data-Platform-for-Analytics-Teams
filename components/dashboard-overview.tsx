"use client"

import { Card } from "@/components/ui/card"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { time: "00:00", datasets: 45, queries: 120 },
  { time: "04:00", datasets: 48, queries: 95 },
  { time: "08:00", datasets: 52, queries: 180 },
  { time: "12:00", datasets: 55, queries: 240 },
  { time: "16:00", datasets: 58, queries: 210 },
  { time: "20:00", datasets: 60, queries: 150 },
  { time: "24:00", datasets: 62, queries: 130 },
]

export function DashboardOverview() {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-1">Platform Activity</h3>
        <p className="text-sm text-muted-foreground">Dataset registrations and query volume</p>
      </div>
      <ChartContainer
        config={{
          datasets: {
            label: "Datasets",
            color: "hsl(var(--chart-1))",
          },
          queries: {
            label: "Queries",
            color: "hsl(var(--chart-2))",
          },
        }}
        className="h-[300px]"
      >
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis dataKey="time" className="text-xs" />
          <YAxis className="text-xs" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Area
            type="monotone"
            dataKey="datasets"
            stroke="hsl(var(--chart-1))"
            fill="hsl(var(--chart-1))"
            fillOpacity={0.2}
          />
          <Area
            type="monotone"
            dataKey="queries"
            stroke="hsl(var(--chart-2))"
            fill="hsl(var(--chart-2))"
            fillOpacity={0.2}
          />
        </AreaChart>
      </ChartContainer>
    </Card>
  )
}
