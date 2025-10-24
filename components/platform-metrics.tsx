import { Card } from "@/components/ui/card"
import { TrendingDown, Clock, Users } from "lucide-react"

export function PlatformMetrics() {
  const metrics = [
    {
      label: "Onboarding Time",
      value: "4 hours",
      change: "-75%",
      trend: "down",
      description: "Reduced from 2 days",
      icon: Clock,
    },
    {
      label: "Platform Adoption",
      value: "+30%",
      change: "+30%",
      trend: "up",
      description: "Teams using CLI utilities",
      icon: Users,
    },
    {
      label: "Query Latency",
      value: "-35%",
      change: "-35%",
      trend: "down",
      description: "Hybrid storage optimization",
      icon: TrendingDown,
    },
    {
      label: "Support Tickets",
      value: "-50%",
      change: "-50%",
      trend: "down",
      description: "After documentation",
      icon: TrendingDown,
    },
  ]

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric) => (
        <Card key={metric.label} className="p-6">
          <div className="flex items-start justify-between mb-4">
            <metric.icon className="h-5 w-5 text-muted-foreground" />
            <span className={`text-sm font-medium ${metric.trend === "up" ? "text-emerald-400" : "text-blue-400"}`}>
              {metric.change}
            </span>
          </div>
          <div className="text-3xl font-bold mb-1">{metric.value}</div>
          <div className="text-sm text-muted-foreground">{metric.label}</div>
          <div className="text-xs text-muted-foreground mt-2">{metric.description}</div>
        </Card>
      ))}
    </div>
  )
}
