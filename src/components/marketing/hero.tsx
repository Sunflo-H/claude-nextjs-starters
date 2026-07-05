import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

interface HeroProps {
  title?: string
  subtitle?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export function Hero({
  title = "빠르게 만드는 다음 웹사이트",
  subtitle = "Next.js, shadcn/ui, Zustand, React Hook Form이 준비된 스타터킷으로 아이디어를 바로 제품으로 만들어보세요.",
  primaryCta = { label: "시작하기", href: "/login" },
  secondaryCta = { label: "문의하기", href: "/contact" },
}: HeroProps) {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-24 text-center sm:px-6 sm:py-32">
      <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-6xl">
        {title}
      </h1>
      <p className="max-w-2xl text-lg text-muted-foreground text-balance">
        {subtitle}
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg">
          <Link href={primaryCta.href}>
            {primaryCta.label}
            <ArrowRight className="size-4" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
        </Button>
      </div>
    </section>
  )
}
