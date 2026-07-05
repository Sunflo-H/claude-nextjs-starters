import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

interface Testimonial {
  name: string
  role: string
  initials: string
  quote: string
}

interface TestimonialsProps {
  testimonials?: Testimonial[]
}

const defaultTestimonials: Testimonial[] = [
  {
    name: "김민준",
    role: "프로덕트 매니저",
    initials: "김민",
    quote: "덕분에 랜딩 페이지 초안을 하루 만에 완성했습니다. 디자인 고민이 확 줄었어요.",
  },
  {
    name: "이서연",
    role: "프론트엔드 개발자",
    initials: "이서",
    quote: "폼 검증과 다크모드까지 이미 되어 있어서 비즈니스 로직에만 집중할 수 있었습니다.",
  },
  {
    name: "박지훈",
    role: "스타트업 대표",
    initials: "박지",
    quote: "대시보드 레이아웃이 필요했는데 그대로 가져다 써도 될 정도로 완성도가 높습니다.",
  },
]

export function Testimonials({ testimonials = defaultTestimonials }: TestimonialsProps) {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">사용자 후기</h2>
        <p className="mt-3 text-muted-foreground">이미 많은 팀이 이 스타터킷으로 시작했습니다.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name}>
            <CardContent className="flex flex-col gap-4">
              <p className="text-sm text-muted-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
