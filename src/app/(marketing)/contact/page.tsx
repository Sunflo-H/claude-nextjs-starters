import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ContactForm } from "@/components/forms/contact-form"

export default function ContactPage() {
  return (
    <div className="mx-auto flex max-w-lg flex-1 flex-col justify-center px-4 py-16 sm:px-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">문의하기</CardTitle>
          <CardDescription>궁금한 점을 남겨주시면 빠르게 답변드리겠습니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
    </div>
  )
}
