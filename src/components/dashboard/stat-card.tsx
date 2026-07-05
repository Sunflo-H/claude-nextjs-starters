import { TrendingDown, TrendingUp, type LucideIcon } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StatCardProps {
  title: string
  value: string
  icon: LucideIcon
  trend?: { value: string; direction: "up" | "down" }
  description?: string
}

export function StatCard({ title, value, icon: Icon, trend, description }: StatCardProps) {
  return (
    <Card>
      <CardContent className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">{title}</p>
          <Icon className="size-4 text-muted-foreground" />
        </div>
        <p className="text-2xl font-bold">{value}</p>
        {trend && (
          <div className="flex items-center gap-1 text-xs">
            <span
              className={cn(
                "flex items-center gap-0.5",
                trend.direction === "up" ? "text-emerald-500" : "text-red-500"
              )}
            >
              {trend.direction === "up" ? (
                <TrendingUp className="size-3" />
              ) : (
                <TrendingDown className="size-3" />
              )}
              {trend.value}
            </span>
            {description && <span className="text-muted-foreground">{description}</span>}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
