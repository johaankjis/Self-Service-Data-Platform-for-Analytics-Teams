import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Database, Search, Plus, MoreVertical } from "lucide-react"
import Link from "next/link"

export default function DatasetsPage() {
  const datasets = [
    {
      id: 1,
      name: "user_analytics_v2",
      storage: "PostgreSQL",
      size: "2.4 GB",
      records: "1.2M",
      owner: "analytics-team",
      status: "active",
      lastSync: "5 min ago",
    },
    {
      id: 2,
      name: "product_events",
      storage: "MongoDB Atlas",
      size: "5.8 GB",
      records: "3.5M",
      owner: "data-eng",
      status: "active",
      lastSync: "12 min ago",
    },
    {
      id: 3,
      name: "customer_profiles",
      storage: "PostgreSQL",
      size: "1.1 GB",
      records: "850K",
      owner: "analytics-team",
      status: "active",
      lastSync: "18 min ago",
    },
    {
      id: 4,
      name: "transaction_logs",
      storage: "MongoDB Atlas",
      size: "12.3 GB",
      records: "8.2M",
      owner: "platform-admin",
      status: "syncing",
      lastSync: "2 min ago",
    },
    {
      id: 5,
      name: "marketing_campaigns",
      storage: "PostgreSQL",
      size: "450 MB",
      records: "125K",
      owner: "marketing-team",
      status: "active",
      lastSync: "25 min ago",
    },
    {
      id: 6,
      name: "financial_reports",
      storage: "PostgreSQL",
      size: "3.2 GB",
      records: "2.1M",
      owner: "finance-team",
      status: "active",
      lastSync: "32 min ago",
    },
  ]

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mb-8">
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground mb-4 inline-block">
          ← Back to Dashboard
        </Link>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Dataset Management</h1>
            <p className="text-muted-foreground text-lg">
              Register, validate, and manage datasets across hybrid storage
            </p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Register Dataset
          </Button>
        </div>
      </div>

      <Card className="p-6 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search datasets..." className="pl-10" />
        </div>
      </Card>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 font-semibold text-sm">Dataset Name</th>
                <th className="text-left p-4 font-semibold text-sm">Storage</th>
                <th className="text-left p-4 font-semibold text-sm">Size</th>
                <th className="text-left p-4 font-semibold text-sm">Records</th>
                <th className="text-left p-4 font-semibold text-sm">Owner</th>
                <th className="text-left p-4 font-semibold text-sm">Status</th>
                <th className="text-left p-4 font-semibold text-sm">Last Sync</th>
                <th className="text-left p-4 font-semibold text-sm"></th>
              </tr>
            </thead>
            <tbody>
              {datasets.map((dataset) => (
                <tr key={dataset.id} className="border-b border-border last:border-0 hover:bg-accent/50">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <Database className="h-5 w-5 text-blue-400" />
                      <span className="font-medium">{dataset.name}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <Badge variant="outline">{dataset.storage}</Badge>
                  </td>
                  <td className="p-4 text-sm text-muted-foreground">{dataset.size}</td>
                  <td className="p-4 text-sm text-muted-foreground">{dataset.records}</td>
                  <td className="p-4 text-sm text-muted-foreground">{dataset.owner}</td>
                  <td className="p-4">
                    <Badge variant={dataset.status === "active" ? "default" : "secondary"}>{dataset.status}</Badge>
                  </td>
                  <td className="p-4 text-sm text-muted-foreground">{dataset.lastSync}</td>
                  <td className="p-4">
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
