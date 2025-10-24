import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Terminal, Copy, Shield, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function CLIPage() {
  const commands = [
    {
      name: "dataset register",
      description: "Register a new dataset with schema validation",
      usage: "dataplatform dataset register --name <name> --schema <path>",
      example: "dataplatform dataset register --name user_events --schema ./schema.json",
    },
    {
      name: "dataset validate",
      description: "Validate dataset schema against data contract",
      usage: "dataplatform dataset validate --name <name>",
      example: "dataplatform dataset validate --name user_events",
    },
    {
      name: "template create",
      description: "Create a new ingestion template",
      usage: "dataplatform template create --type <type> --output <path>",
      example: "dataplatform template create --type mongodb --output ./template.yaml",
    },
    {
      name: "storage optimize",
      description: "Optimize storage indexes and query performance",
      usage: "dataplatform storage optimize --dataset <name>",
      example: "dataplatform storage optimize --dataset user_analytics",
    },
    {
      name: "rbac grant",
      description: "Grant RBAC permissions to users or teams",
      usage: "dataplatform rbac grant --user <user> --role <role> --dataset <name>",
      example: "dataplatform rbac grant --user analytics-team --role read --dataset user_events",
    },
  ]

  const features = [
    {
      icon: Shield,
      title: "RBAC Enforcement",
      description: "Role-based access control eliminates shared credentials",
    },
    {
      icon: CheckCircle2,
      title: "Schema Validation",
      description: "Automatic validation against data contracts",
    },
    {
      icon: Terminal,
      title: "Modular Commands",
      description: "Composable CLI utilities for complex workflows",
    },
  ]

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mb-8">
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground mb-4 inline-block">
          ← Back to Dashboard
        </Link>
        <h1 className="text-4xl font-bold mb-2">CLI Utilities</h1>
        <p className="text-muted-foreground text-lg">Command-line tools for dataset management with RBAC enforcement</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {features.map((feature) => (
          <Card key={feature.title} className="p-6">
            <feature.icon className="h-8 w-8 text-emerald-400 mb-4" />
            <h3 className="font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </Card>
        ))}
      </div>

      <Card className="p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Installation</h2>
        <div className="bg-muted rounded-lg p-4 font-mono text-sm flex items-center justify-between">
          <code>go install github.com/dataplatform/cli@latest</code>
          <Button variant="ghost" size="sm">
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </Card>

      <div className="space-y-6">
        {commands.map((command) => (
          <Card key={command.name} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Terminal className="h-5 w-5 text-cyan-400" />
                  <h3 className="text-lg font-semibold">{command.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{command.description}</p>
              </div>
              <Badge variant="secondary">Go</Badge>
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-xs text-muted-foreground mb-2">Usage:</div>
                <div className="bg-muted rounded-lg p-3 font-mono text-sm">
                  <code>{command.usage}</code>
                </div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-2">Example:</div>
                <div className="bg-muted rounded-lg p-3 font-mono text-sm flex items-center justify-between">
                  <code>{command.example}</code>
                  <Button variant="ghost" size="sm">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
