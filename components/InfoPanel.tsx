"use client";

import { byAbbr, statesByAdmission, TOTAL_STATES } from "@/data/states";

type Props = {
  abbr: string | null; // selected ?? hovered
  currentDate: number; // epoch ms
  joinedCount: number;
  onSelect: (abbr: string | null) => void;
};

function fmtDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${y}년 ${m}월 ${d}일`;
}
function fmtNum(n: number) {
  return n.toLocaleString("ko-KR");
}

export function InfoPanel({ abbr, currentDate, joinedCount, onSelect }: Props) {
  const state = abbr ? byAbbr.get(abbr) : undefined;
  const year = new Date(currentDate).getUTCFullYear();

  // 현재 시점 기준 최근(직전) 가입 주들 — 채널 느낌용
  const recent = statesByAdmission.filter((s) => {
    const ms = Date.parse(`${s.admissionDate}T00:00:00Z`);
    return ms <= currentDate && ms > currentDate - 1000 * 60 * 60 * 24 * 365 * 3;
  });
  const lastJoined = [...statesByAdmission]
    .filter((s) => Date.parse(`${s.admissionDate}T00:00:00Z`) <= currentDate)
    .slice(-1)[0];

  return (
    <div className="panel">
      <div className="panel-snap">
        <div className="snap-year">{year}</div>
        <div className="snap-bar">
          <div className="snap-count">
            <strong>{joinedCount}</strong>
            <span>/ {TOTAL_STATES}</span>
          </div>
          <div className="snap-progress" aria-hidden="true">
            <div
              className="snap-progress-fill"
              style={{ width: `${(joinedCount / TOTAL_STATES) * 100}%` }}
            />
          </div>
        </div>
        <div className="snap-recent">
          {lastJoined ? (
            <>
              <span className="snap-recent-label">최근 가입</span>
              <span className="snap-recent-name">
                {lastJoined.nameKo} · {lastJoined.admissionOrder}번째
              </span>
            </>
          ) : (
            <span className="snap-recent-empty">아직 가입한 주가 없습니다 — ▶ 재생</span>
          )}
        </div>
      </div>

      <div className="panel-divider" />

      {state ? (
        <div className="panel-state">
          <button
            className="panel-close"
            onClick={() => onSelect(null)}
            aria-label="선택 해제"
            title="선택 해제"
          >
            ✕
          </button>
          <div className="panel-flag-wrap">
            <img
              src={`/flags/${state.abbr}.svg`}
              alt={`${state.nameKo} 주 기`}
              className="panel-flag"
              loading="lazy"
            />
            <span className="panel-abbr">{state.abbr}</span>
          </div>
          <h2 className="panel-name">
            {state.nameKo}
            <span className="panel-name-en">{state.nameEn}</span>
          </h2>
          <div className="panel-nick">{state.nicknameKo}</div>

          <dl className="panel-facts">
            <div>
              <dt>연방 가입</dt>
              <dd>
                {fmtDate(state.admissionDate)}
                <span className="ord">({state.admissionOrder}번째)</span>
              </dd>
            </div>
            <div>
              <dt>주도</dt>
              <dd>
                {state.capitalKo}
                <span className="en">{state.capitalEn}</span>
              </dd>
            </div>
            <div>
              <dt>최대 도시</dt>
              <dd>
                {state.largestCityKo}
                <span className="en">{state.largestCityEn}</span>
              </dd>
            </div>
            <div>
              <dt>면적</dt>
              <dd>{fmtNum(state.areaKm2)} km²</dd>
            </div>
            <div>
              <dt>인구(2020)</dt>
              <dd>{fmtNum(state.population2020)}명</dd>
            </div>
            <div>
              <dt>하원 의석</dt>
              <dd>{state.houseSeats}석</dd>
            </div>
            <div>
              <dt>구역</dt>
              <dd>{state.region}</dd>
            </div>
          </dl>

          {recent.length > 1 && (
            <div className="panel-related">
              <span className="panel-related-label">근처 시점 가입</span>
              <span>{recent.map((s) => s.nameKo).join(" · ")}</span>
            </div>
          )}
        </div>
      ) : (
        <div className="panel-empty">
          <p className="panel-empty-title">주를 선택하세요</p>
          <p className="panel-empty-body">
            지도의 주를 클릭·호버하면 <strong>국기</strong>와 주도·인구·가입일 등의{" "}
            <strong>정보</strong>가 표시됩니다.
          </p>
          <ul className="panel-legend">
            <li><span className="lg lg-on" /> 가입된 주</li>
            <li><span className="lg lg-dim" /> 미가입(아직 영토)</li>
            <li><span className="lg lg-sel" /> 선택된 주</li>
          </ul>
        </div>
      )}
    </div>
  );
}
