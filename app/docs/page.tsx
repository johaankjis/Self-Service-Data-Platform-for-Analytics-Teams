import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Shield, Zap, FileText } from "lucide-react"
import Link from "next/link"

export default function DocsPage() {
  const slas = [
    {
      metric: "Onboarding Time",
      target: "< 4 hours",
      current: "3.8 hours",
      status: "met",
    },
    {
      metric: "Query Latency (P95)",
      target: "< 500ms",
      current: "325ms",
      status: "met",
    },
    {
      metric: "Platform Uptime",
      target: "99.9%",
      current: "99.95%",
      status: "met",
    },
    {
      metric: "Support Response",
      target: "< 2 hours",
      current: "1.5 hours",
      status: "met",
    },
  ]

  const docs = [
    {
      title: "Getting Started",
      description: "Quick start guide for new teams",
      icon: Zap,
      sections: ["Installation", "First Dataset", "CLI Setup", "RBAC Configuration"],
    },
    {
      title: "Ingestion Templates",
      description: "Complete guide to data ingestion",
      icon: FileText,
      sections: ["Template Types", "Data Contracts", "Schema Validation", "Best Practices"],
    },
    {
      title: "Storage Architecture",
      description: "Hybrid storage design patterns",
      icon: BookOpen,
      sections: ["MongoDB Atlas", "PostgreSQL", "Indexing Strategies", "Query Optimization"],
    },
    {
      title: "Security & Governance",
      description: "RBAC and compliance guidelines",
      icon: Shield,
      sections: ["Access Control", "Data Contracts", "Audit Logs", "Compliance"],
    },
  ]

  const glossary = [
    {
      term: "Data Contract",
      definition: "A formal agreement defining schema, quality rules, and SLAs for a dataset",
    },
    {
      term: "Ingestion Template",
      definition: "Reusable configuration for standardized data onboarding workflows",
    },
    {
      term: "Hybrid Storage",
      definition: "Architecture combining MongoDB Atlas (semi-structured) and PostgreSQL (structured)",
    },
    {
      term: "RBAC",
      definition: "Role-Based Access Control for secure dataset permissions",
    },
  ]

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mb-8">
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground mb-4 inline-block">
          ← Back to Dashboard
        </Link>
        <h1 className="text-4xl font-bold mb-2">Documentation & SLAs</h1>
        <p className="text-muted-foreground text-lg">
          Comprehensive platform documentation and service level agreements
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Service Level Agreements</h2>
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-semibold text-sm">Metric</th>
                  <th className="text-left p-4 font-semibold text-sm">Target</th>
                  <th className="text-left p-4 font-semibold text-sm">Current</th>
                  <th className="text-left p-4 font-semibold text-sm">Status</th>
                </tr>
              </thead>
              <tbody>
                {slas.map((sla) => (
                  <tr key={sla.metric} className="border-b border-border last:border-0">
                    <td className="p-4 font-medium">{sla.metric}</td>
                    <td className="p-4 text-muted-foreground">{sla.target}</td>
                    <td className="p-4 font-semibold text-emerald-400">{sla.current}</td>
                    <td className="p-4">
                      <Badge variant="default" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                        {sla.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Documentation</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {docs.map((doc) => (
            <Card key={doc.title} className="p-6">
              <doc.icon className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{doc.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{doc.description}</p>
              <div className="space-y-2">
                {doc.sections.map((section) => (
                  <div key={section} className="text-sm text-muted-foreground flex items-center gap-2">
                    <div className="h-1 w-1 rounded-full bg-muted-foreground" />
                    {section}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Glossary</h2>
        <Card className="p-6">
          <div className="space-y-4">
            {glossary.map((item) => (
              <div key={item.term} className="pb-4 border-b border-border last:border-0 last:pb-0">
                <h4 className="font-semibold mb-1">{item.term}</h4>
                <p className="text-sm text-muted-foreground">{item.definition}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
