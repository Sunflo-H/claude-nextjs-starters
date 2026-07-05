import Link from "next/link"

interface FooterColumn {
  title: string
  links: { label: string; href: string }[]
}

interface FooterProps {
  columns?: FooterColumn[]
}

const defaultColumns: FooterColumn[] = [
  {
    title: "제품",
    links: [
      { label: "기능", href: "/#features" },
      { label: "요금제", href: "/#pricing" },
    ],
  },
  {
    title: "회사",
    links: [
      { label: "문의하기", href: "/contact" },
      { label: "로그인", href: "/login" },
    ],
  },
]

export function Footer({ columns = defaultColumns }: FooterProps) {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:justify-between">
        <div>
          <Link href="/" className="text-lg font-semibold">
            스타터킷
          </Link>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            Next.js 기반 웹사이트를 빠르게 시작할 수 있는 스타터킷입니다.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-16">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-medium">{column.title}</p>
              <ul className="mt-3 flex flex-col gap-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-border/50 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} 스타터킷. All rights reserved.
      </div>
    </footer>
  )
}
