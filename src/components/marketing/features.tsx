import { Layers, Palette, ShieldCheck, Zap, type LucideIcon } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

interface FeaturesProps {
  features?: Feature[]
}

const defaultFeatures: Feature[] = [
  {
    icon: Zap,
    title: "빠른 개발 속도",
    description: "Turbopack과 미리 구성된 컴포넌트로 초기 세팅 없이 바로 개발을 시작할 수 있습니다.",
  },
  {
    icon: Palette,
    title: "일관된 디자인 시스템",
    description: "shadcn/ui와 Tailwind CSS 기반으로 다크모드를 포함한 일관된 UI를 제공합니다.",
  },
  {
    icon: ShieldCheck,
    title: "타입 안전한 폼",
    description: "React Hook Form과 Zod로 런타임 검증과 타입 추론을 동시에 확보합니다.",
  },
  {
    icon: Layers,
    title: "재사용 가능한 레이아웃",
    description: "마케팅 페이지부터 대시보드까지 필요한 레이아웃이 이미 구성되어 있습니다.",
  },
]

export function Features({ features = defaultFeatures }: FeaturesProps) {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">주요 기능</h2>
        <p className="mt-3 text-muted-foreground">
          검증된 라이브러리 위에 실무에서 바로 쓸 수 있는 구성을 더했습니다.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <feature.icon className="size-8 text-primary" />
              <CardTitle className="mt-2">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
