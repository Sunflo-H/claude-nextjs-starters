# Next.js 웹사이트 스타터킷

마케팅 랜딩 페이지, 인증 폼, 대시보드 레이아웃을 미리 구성해둔 Next.js 스타터킷입니다. 검증된 라이브러리 위에 실무에서 바로 재사용할 수 있는 컴포넌트만 얹었습니다.

## 기술 스택

- **프레임워크**: Next.js 16 (App Router, Turbopack), React 19, TypeScript
- **스타일**: Tailwind CSS v4 (CSS-first 설정)
- **UI 컴포넌트**: shadcn/ui (Radix UI 프리미티브), lucide-react 아이콘
- **상태관리**: Zustand
- **폼**: React Hook Form + Zod + `@hookform/resolvers`
- **다크모드**: next-themes
- **패키지 매니저**: pnpm

## 시작하기

```bash
pnpm install
pnpm dev
```

[http://localhost:3000](http://localhost:3000) 에서 결과를 확인할 수 있습니다.

기타 명령어:

```bash
pnpm lint    # ESLint 검사
pnpm build   # 프로덕션 빌드
pnpm start   # 프로덕션 서버 실행
```

## 디렉토리 구조

```
src/
├── app/
│   ├── (marketing)/     # 랜딩 페이지("/"), 문의하기("/contact") — Navbar/Footer 레이아웃
│   ├── (auth)/           # 로그인("/login") — 네브/푸터 없는 중앙 정렬 레이아웃
│   ├── dashboard/        # 대시보드("/dashboard") — Sidebar/Topbar 레이아웃
│   ├── not-found.tsx     # 커스텀 404
│   └── error.tsx         # 루트 에러 바운더리
├── components/
│   ├── ui/               # shadcn/ui 컴포넌트 (button, card, sheet, field ...)
│   ├── marketing/        # navbar, hero, features, pricing, testimonials, cta-section, footer
│   ├── dashboard/        # sidebar, topbar, stat-card
│   ├── theme/            # theme-provider, theme-toggle (다크모드)
│   ├── forms/             # login-form, contact-form (React Hook Form + Zod)
│   └── shared/            # loading-spinner, empty-state
├── lib/
│   ├── utils.ts           # cn 헬퍼 (shadcn 생성)
│   └── validations/       # Zod 스키마 (login-schema, contact-schema)
└── store/
    └── sidebar-store.ts   # Zustand 예시 스토어 (대시보드 사이드바 상태)
```

## 포함된 기능

- 반응형 마케팅 랜딩 페이지 (모바일 메뉴 포함)
- 라이트/다크/시스템 테마 전환
- Zod 스키마 기반 로그인·문의하기 폼 (검증 실패 시 에러 메시지, 성공 시 토스트)
- 축소 가능한 사이드바 + 탑바가 포함된 대시보드 레이아웃, 통계 카드, 빈 상태(Empty state)
- 커스텀 404 페이지, 루트 에러 바운더리, 로딩 스켈레톤
