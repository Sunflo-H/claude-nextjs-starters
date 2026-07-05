"use client"

import { Bell, Menu, Search } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { useSidebarStore } from "@/store/sidebar-store"

export function Topbar() {
  const toggleOpen = useSidebarStore((state) => state.toggleOpen)

  return (
    <header className="flex h-16 shrink-0 items-center gap-4 border-b border-border/50 px-4 sm:px-6">
      <Button
        variant="outline"
        size="icon"
        className="md:hidden"
        onClick={toggleOpen}
      >
        <Menu className="size-4" />
        <span className="sr-only">사이드바 열기</span>
      </Button>

      <div className="relative hidden flex-1 max-w-sm sm:block">
        <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="검색..." className="pl-9" />
      </div>

      <div className="ml-auto flex items-center gap-2">
        <ThemeToggle />

        <Button variant="outline" size="icon" className="relative">
          <Bell className="size-4" />
          <Badge className="absolute -top-1 -right-1 size-2 rounded-full p-0" />
          <span className="sr-only">알림</span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Avatar size="sm">
                <AvatarFallback>홍길</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>프로필</DropdownMenuItem>
            <DropdownMenuItem>설정</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">로그아웃</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
