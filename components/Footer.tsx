/** 푸터 — 출처 및 크레딧 */
export function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-inner">
          <span className="src">
            자료 기반:{" "}
            <a
              href="https://namu.wiki/w/%EB%AF%B8%EA%B5%AD/%EC%A3%BC"
              target="_blank"
              rel="noopener noreferrer"
            >
              나무위키 · 미국/주
            </a>
          </span>
          <span>주 국기: Wikimedia Commons (Public Domain)</span>
          <span>지도: us-atlas TopoJSON</span>
          <span>
            <a
              href="https://github.com/nalm/us-states-timeline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </span>
          <span>US States Timeline · nalm</span>
        </div>
      </div>
    </footer>
  );
}
