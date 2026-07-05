import Link from "next/link"

import { Button } from "@/components/ui/button"

interface CtaSectionProps {
  title?: string
  description?: string
  buttonLabel?: string
  href?: string
}

export function CtaSection({
  title = "지금 바로 시작해보세요",
  description = "가입 없이도 스타터킷 구조를 살펴보고 팀에 맞게 커스터마이즈할 수 있습니다.",
  buttonLabel = "무료로 시작하기",
  href = "/login",
}: CtaSectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="flex flex-col items-center gap-6 rounded-2xl bg-primary px-6 py-16 text-center text-primary-foreground">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        <p className="max-w-xl text-primary-foreground/80">{description}</p>
        <Button asChild size="lg" variant="secondary">
          <Link href={href}>{buttonLabel}</Link>
        </Button>
      </div>
    </section>
  )
}
