"use client"

import Link from "next/link"
import {
  ChevronLeft,
  ChevronRight,
  Home,
  LayoutDashboard,
  Settings,
  Users,
  type LucideIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { useSidebarStore } from "@/store/sidebar-store"

interface NavItem {
  label: string
  href: string
  icon: LucideIcon
}

const navItems: NavItem[] = [
  { label: "홈", href: "/dashboard", icon: Home },
  { label: "개요", href: "/dashboard", icon: LayoutDashboard },
  { label: "사용자", href: "/dashboard", icon: Users },
  { label: "설정", href: "/dashboard", icon: Settings },
]

function SidebarNav({ isCollapsed }: { isCollapsed: boolean }) {
  return (
    <nav className="flex flex-col gap-1 p-2">
      {navItems.map((item) => {
        const link = (
          <Link
            key={item.label}
            href={item.href}
            aria-label={item.label}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
              isCollapsed && "justify-center px-0"
            )}
          >
            <item.icon className="size-4 shrink-0" />
            {!isCollapsed && item.label}
          </Link>
        )

        if (!isCollapsed) {
          return link
        }

        return (
          <Tooltip key={item.label}>
            <TooltipTrigger asChild>{link}</TooltipTrigger>
            <TooltipContent side="right">{item.label}</TooltipContent>
          </Tooltip>
        )
      })}
    </nav>
  )
}

export function Sidebar() {
  const isOpen = useSidebarStore((state) => state.isOpen)
  const isCollapsed = useSidebarStore((state) => state.isCollapsed)
  const setOpen = useSidebarStore((state) => state.setOpen)
  const toggleCollapsed = useSidebarStore((state) => state.toggleCollapsed)

  return (
    <>
      <aside
        className={cn(
          "hidden shrink-0 border-r border-border/50 transition-all duration-200 md:flex md:flex-col",
          isCollapsed ? "md:w-16" : "md:w-56"
        )}
      >
        <div className="flex-1 overflow-y-auto">
          <SidebarNav isCollapsed={isCollapsed} />
        </div>
        <div className="border-t border-border/50 p-2">
          <Button
            variant="ghost"
            size="icon"
            className="w-full"
            onClick={toggleCollapsed}
          >
            {isCollapsed ? (
              <ChevronRight className="size-4" />
            ) : (
              <ChevronLeft className="size-4" />
            )}
            <span className="sr-only">사이드바 축소/확장</span>
          </Button>
        </div>
      </aside>

      <Sheet open={isOpen} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-56 p-0">
          <SheetHeader>
            <SheetTitle>메뉴</SheetTitle>
          </SheetHeader>
          <SidebarNav isCollapsed={false} />
        </SheetContent>
      </Sheet>
    </>
  )
}
