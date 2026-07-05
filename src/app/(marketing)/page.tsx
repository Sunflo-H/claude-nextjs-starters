import { Hero } from "@/components/marketing/hero"
import { Features } from "@/components/marketing/features"
import { Pricing } from "@/components/marketing/pricing"
import { Testimonials } from "@/components/marketing/testimonials"
import { CtaSection } from "@/components/marketing/cta-section"

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <CtaSection />
    </>
  )
}
