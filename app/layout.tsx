import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const mono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "미국 50주 편입 지도 — 1787~1959, 연도별로 펼쳐지는 지도",
  description:
    "1787년 델라웨어부터 1959년 하와이까지, 미국 50개 주가 연방에 가입한 역사를 인터랙티브 지도로. 재생 버튼으로 연도가 흐를 때 주가 가입 순서대로 추가되는 모습을 보고, 각 주의 국기·주도·인구 등 정보를 확인.",
  keywords: [
    "미국",
    "미국 주",
    "미국 역사",
    "50개 주",
    "주 가입",
    "델라웨어",
    "연방",
    "인터랙티브 지도",
    "타임라인",
  ],
  authors: [{ name: "nalm" }],
  openGraph: {
    title: "미국 50주 편입 지도",
    description:
      "1787~1959, 미국 50개 주가 연방에 가입한 역사를 연도별 인터랙티브 지도로.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={mono.variable}>
      <body>
        {/* Pretendard (한국어 본문) — CDN 로드, 실패 시 시스템 한글 폰트로 폴백 */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
          precedence="default"
        />
        {children}
      </body>
    </html>
  );
}
