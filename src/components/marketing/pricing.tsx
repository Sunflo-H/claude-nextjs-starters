import Link from "next/link"
import { Check } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface PricingPlan {
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
}

interface PricingProps {
  plans?: PricingPlan[]
}

const defaultPlans: PricingPlan[] = [
  {
    name: "스타터",
    price: "무료",
    description: "개인 프로젝트나 사이드 프로젝트에 적합합니다.",
    features: ["기본 컴포넌트", "커뮤니티 지원", "1개 프로젝트"],
  },
  {
    name: "프로",
    price: "₩29,000/월",
    description: "성장하는 팀을 위한 요금제입니다.",
    features: ["모든 컴포넌트", "우선 지원", "무제한 프로젝트", "대시보드 템플릿"],
    highlighted: true,
  },
  {
    name: "엔터프라이즈",
    price: "문의",
    description: "대규모 조직을 위한 맞춤 지원을 제공합니다.",
    features: ["전담 매니저", "SLA 보장", "온보딩 지원", "맞춤 계약"],
  },
]

export function Pricing({ plans = defaultPlans }: PricingProps) {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">요금제</h2>
        <p className="mt-3 text-muted-foreground">필요에 맞는 요금제를 선택하세요.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={cn(plan.highlighted && "ring-2 ring-primary")}
          >
            <CardHeader>
              <div className="flex items-center gap-2">
                <CardTitle className="text-lg">{plan.name}</CardTitle>
                {plan.highlighted && <Badge>인기</Badge>}
              </div>
              <p className="text-2xl font-bold">{plan.price}</p>
              <p className="text-sm text-muted-foreground">{plan.description}</p>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-col gap-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="size-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" variant={plan.highlighted ? "default" : "outline"}>
                <Link href="/login">시작하기</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
