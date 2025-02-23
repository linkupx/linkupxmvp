# GolfMVP

골프 프로와 레슨을 연결하는 PWA 플랫폼입니다.

## 기술 스택

- Next.js
- TypeScript
- Tailwind CSS
- Supabase
- PWA

## 시작하기

1. 저장소 클론
```bash
git clone https://github.com/your-username/golfmvp-app.git
cd golfmvp-app
```

2. 의존성 설치
```bash
npm install
```

3. 환경 변수 설정
`.env.local` 파일을 생성하고 다음 변수들을 설정하세요:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. 개발 서버 실행
```bash
npm run dev
```

## 배포

이 프로젝트는 Vercel에 배포됩니다. main 브랜치에 push하면 자동으로 배포가 진행됩니다.

## 주요 기능

- 골프 프로 검색 및 필터링
- 레슨 예약 시스템
- 리뷰 및 평점 시스템
- 포인트 적립 및 사용
- 프로필 관리

## 라이선스

MIT

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
