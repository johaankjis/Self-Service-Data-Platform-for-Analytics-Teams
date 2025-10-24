import { DashboardOverview } from "@/components/dashboard-overview"
import { PlatformMetrics } from "@/components/platform-metrics"
import { RecentActivity } from "@/components/recent-activity"
import { QuickActions } from "@/components/quick-actions"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 text-balance">Data Platform</h1>
            <p className="text-muted-foreground text-lg">
              Self-service analytics platform for streamlined data operations
            </p>
          </div>

          <QuickActions />

          <div className="grid gap-6 mt-6">
            <PlatformMetrics />
            <div className="grid lg:grid-cols-2 gap-6">
              <DashboardOverview />
              <RecentActivity />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
