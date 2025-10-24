import { Card } from "@/components/ui/card"
import { Database, FileCode, Terminal, BookOpen } from "lucide-react"
import Link from "next/link"

export function QuickActions() {
  const actions = [
    {
      title: "Ingestion Templates",
      description: "Browse reusable data ingestion templates",
      icon: FileCode,
      href: "/templates",
      color: "text-blue-400",
    },
    {
      title: "Dataset Management",
      description: "Register and manage datasets",
      icon: Database,
      href: "/datasets",
      color: "text-cyan-400",
    },
    {
      title: "CLI Utilities",
      description: "Access CLI tools and commands",
      icon: Terminal,
      href: "/cli",
      color: "text-emerald-400",
    },
    {
      title: "Documentation",
      description: "View platform docs and SLAs",
      icon: BookOpen,
      href: "/docs",
      color: "text-violet-400",
    },
  ]

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {actions.map((action) => (
        <Link key={action.title} href={action.href}>
          <Card className="p-6 hover:bg-accent transition-colors cursor-pointer h-full">
            <action.icon className={`h-8 w-8 mb-4 ${action.color}`} />
            <h3 className="font-semibold mb-2">{action.title}</h3>
            <p className="text-sm text-muted-foreground">{action.description}</p>
          </Card>
        </Link>
      ))}
    </div>
  )
}
