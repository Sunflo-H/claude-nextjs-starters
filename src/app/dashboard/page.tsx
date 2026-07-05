import { DollarSign, ShoppingCart, Users, Activity } from "lucide-react"

import { StatCard } from "@/components/dashboard/stat-card"
import { EmptyState } from "@/components/shared/empty-state"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">대시보드</h1>
        <p className="text-sm text-muted-foreground">오늘의 핵심 지표를 확인하세요.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="총 매출"
          value="₩12,450,000"
          icon={DollarSign}
          trend={{ value: "+12.5%", direction: "up" }}
          description="지난달 대비"
        />
        <StatCard
          title="신규 주문"
          value="342"
          icon={ShoppingCart}
          trend={{ value: "+4.1%", direction: "up" }}
          description="지난주 대비"
        />
        <StatCard
          title="활성 사용자"
          value="1,204"
          icon={Users}
          trend={{ value: "-2.3%", direction: "down" }}
          description="지난주 대비"
        />
        <StatCard
          title="서버 가동률"
          value="99.9%"
          icon={Activity}
          description="최근 30일"
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>최근 활동</CardTitle>
        </CardHeader>
        <CardContent>
          <EmptyState
            title="최근 활동이 없습니다"
            description="새로운 활동이 발생하면 이곳에 표시됩니다."
          />
        </CardContent>
      </Card>
    </div>
  )
}
