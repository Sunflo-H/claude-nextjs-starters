import Link from "next/link"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { LoginForm } from "@/components/forms/login-form"

export default function LoginPage() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">로그인</CardTitle>
        <CardDescription>계정에 로그인하고 대시보드를 이용해보세요.</CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
        <p className="mt-4 text-center text-sm text-muted-foreground">
          계정이 없으신가요?{" "}
          <Link href="/contact" className="font-medium text-foreground hover:underline">
            문의하기
          </Link>
        </p>
      </CardContent>
    </Card>
  )
}
