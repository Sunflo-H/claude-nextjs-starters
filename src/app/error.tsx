"use client"

import { useEffect } from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 px-4 py-24 text-center">
      <p className="text-sm font-medium text-muted-foreground">오류 발생</p>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        문제가 발생했습니다
      </h1>
      <p className="max-w-md text-muted-foreground">
        일시적인 오류일 수 있습니다. 다시 시도하거나 홈으로 이동해주세요.
      </p>
      <div className="flex gap-3">
        <Button onClick={reset} variant="outline">
          다시 시도
        </Button>
        <Button asChild>
          <Link href="/">홈으로 돌아가기</Link>
        </Button>
      </div>
    </div>
  )
}
