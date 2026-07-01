/** 히어로 — 타이틀 + 도입 */
export function Header() {
  return (
    <header className="hero">
      <div className="shell">
        <div className="hero-eyebrow">United States · 1787–1959</div>
        <h1 className="hero-title">
          미국 <span className="accent">50개 주</span>가
          <br />
          편입되는 역사
        </h1>
        <p className="hero-sub">A Republic of 50 States · An Interactive Atlas</p>
        <p className="hero-lead">
          1787년 최초의 주 <strong>델라웨어</strong>부터 1959년 <strong>하와이</strong>까지.
          재생 버튼을 누르면 연도가 흐르며 주가 가입 순서대로 지도에 추가됩니다. 슬라이더로
          원하는 시점으로 이동하고, 각 주를 눌러 <strong>국기와 정보</strong>를 확인하세요.
        </p>
        <div className="hero-rule" />
      </div>
    </header>
  );
}
