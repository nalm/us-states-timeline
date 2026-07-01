# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# Project: 미국 50주 편입 인터랙티브 지도

- **Source content:** 나무위키 [미국/주](https://namu.wiki/w/%EB%AF%B8%EA%B5%AD/%EC%A3%BC) — 50주 가입일·순서·주도·최대도시·면적·인구(2020)·하원의석.
- **Stack:** Next.js 16 + React 19 + TypeScript (App Router) + d3-geo/topojson-client(지도 path 생성만).
- **Data-driven:** 모든 주 데이터는 `data/states.ts`. 콘텐츠는 컴포넌트가 아닌 이 파일에서 편집.
- **Design system:** `app/globals.css` — 지도책(Atlas) 다크 테마. CSS 변수.
- **Interaction:** 시간 구동(time-driven). `MapTimeline`이 `currentDate` 상태 + 타이머로 연도 진행, 주는 `admissionDate <= currentDate`면 "가입" 처리. (형제 프로젝트들과 달리 스크롤 구동이 아님.)
- **Static assets:** `public/geo/us-states-10m.json`(지도 TopoJSON, us-atlas) + `public/flags/{ABBR}.svg`(주 국기 50, Wikimedia PD). 정적 export 자급화.
- **Sibling reference:** `../quantum-mechanics-timeline`, `../semiconductor-ai-timeline` (동일 빌드/배포 패턴의 검증된 형제 프로젝트).
