import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 이 사이트는 100% 정적(클라이언트 인터랙션만, 동적 서버 기능 없음).
  // Vercel은 Next.js를 네이티브로 빌드해 페이지를 정적 프리렌더로 서브한다.
  // (output:"export"는 Vercel 표준 Next.js 빌드와 충돌하므로 사용하지 않음.)
};

export default nextConfig;
