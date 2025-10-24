import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, AlertCircle, Clock } from "lucide-react"

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      action: "Dataset registered",
      dataset: "user_analytics_v2",
      user: "analytics-team",
      status: "success",
      time: "5 min ago",
    },
    {
      id: 2,
      action: "Ingestion template created",
      dataset: "mongodb_template_v3",
      user: "data-eng",
      status: "success",
      time: "12 min ago",
    },
    {
      id: 3,
      action: "Schema validation",
      dataset: "product_events",
      user: "platform-admin",
      status: "pending",
      time: "18 min ago",
    },
    {
      id: 4,
      action: "Query optimization",
      dataset: "customer_data",
      user: "analytics-team",
      status: "success",
      time: "25 min ago",
    },
    {
      id: 5,
      action: "RBAC policy updated",
      dataset: "financial_reports",
      user: "security-team",
      status: "warning",
      time: "32 min ago",
    },
  ]

  return (
    <Card className="p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-1">Recent Activity</h3>
        <p className="text-sm text-muted-foreground">Latest platform operations</p>
      </div>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
            <div className="mt-1">
              {activity.status === "success" && <CheckCircle2 className="h-5 w-5 text-emerald-400" />}
              {activity.status === "pending" && <Clock className="h-5 w-5 text-blue-400" />}
              {activity.status === "warning" && <AlertCircle className="h-5 w-5 text-amber-400" />}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-sm">{activity.action}</span>
                <Badge variant="secondary" className="text-xs">
                  {activity.dataset}
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{activity.user}</span>
                <span>•</span>
                <span>{activity.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
