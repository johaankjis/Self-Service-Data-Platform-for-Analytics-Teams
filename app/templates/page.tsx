import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileCode, Copy, Download } from "lucide-react"
import Link from "next/link"

export default function TemplatesPage() {
  const templates = [
    {
      id: 1,
      name: "MongoDB Atlas Ingestion",
      description: "Standard template for ingesting semi-structured data from MongoDB Atlas",
      version: "v2.1",
      usage: 12,
      category: "NoSQL",
      lastUpdated: "2 days ago",
    },
    {
      id: 2,
      name: "PostgreSQL Batch Load",
      description: "Optimized template for batch loading structured data into PostgreSQL",
      version: "v3.0",
      usage: 18,
      category: "SQL",
      lastUpdated: "1 week ago",
    },
    {
      id: 3,
      name: "Real-time Event Stream",
      description: "Template for streaming event data with schema validation",
      version: "v1.5",
      usage: 8,
      category: "Streaming",
      lastUpdated: "3 days ago",
    },
    {
      id: 4,
      name: "CSV File Import",
      description: "Simple template for importing CSV files with automatic type inference",
      version: "v2.3",
      usage: 25,
      category: "File",
      lastUpdated: "5 days ago",
    },
    {
      id: 5,
      name: "API Data Sync",
      description: "Template for syncing data from external REST APIs",
      version: "v1.8",
      usage: 15,
      category: "API",
      lastUpdated: "1 day ago",
    },
    {
      id: 6,
      name: "Data Contract Template",
      description: "Enforce data quality and governance with predefined contracts",
      version: "v2.0",
      usage: 22,
      category: "Governance",
      lastUpdated: "4 days ago",
    },
  ]

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mb-8">
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground mb-4 inline-block">
          ← Back to Dashboard
        </Link>
        <h1 className="text-4xl font-bold mb-2">Ingestion Templates</h1>
        <p className="text-muted-foreground text-lg">
          Reusable templates to streamline data onboarding and reduce setup time from 2 days to 4 hours
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <Card key={template.id} className="p-6 flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <FileCode className="h-8 w-8 text-blue-400" />
              <Badge variant="secondary">{template.version}</Badge>
            </div>
            <h3 className="text-lg font-semibold mb-2">{template.name}</h3>
            <p className="text-sm text-muted-foreground mb-4 flex-1">{template.description}</p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
              <span>Used by {template.usage} teams</span>
              <span>•</span>
              <span>{template.lastUpdated}</span>
            </div>
            <div className="flex gap-2">
              <Button variant="default" size="sm" className="flex-1">
                <Copy className="h-4 w-4 mr-2" />
                Use Template
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
