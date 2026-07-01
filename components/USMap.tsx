"use client";

import { useEffect, useState } from "react";
import { geoAlbersUsa, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import { byFips, type USState } from "@/data/states";

type Feat = {
  fips: string;
  state: USState | null; // null = 준주/DC (50주 아님)
  d: string;
  cx: number;
  cy: number;
};

const W = 960;
const H = 600;

type Props = {
  currentDate: number; // epoch ms
  selected: string | null; // abbr
  hovered: string | null; // abbr
  onSelect: (abbr: string | null) => void;
  onHover: (abbr: string | null) => void;
};

export function USMap({ currentDate, selected, hovered, onSelect, onHover }: Props) {
  const [feats, setFeats] = useState<Feat[] | null>(null);
  const [error, setError] = useState(false);

  // TopoJSON 로드 + 투영/패스 계산 (1회)
  useEffect(() => {
    let cancelled = false;
    fetch("/geo/us-states-10m.json")
      .then((r) => r.json())
      .then((topo: unknown) => {
        // topojson-client 의 feature() 로 Topology → FeatureCollection
        const fc = feature(
          topo as never,
          (topo as { objects: { states: never } }).objects.states,
        ) as unknown as GeoJSON.FeatureCollection<GeoJSON.Geometry, { name?: string }>;
        const projection = geoAlbersUsa().fitExtent(
          [
            [18, 18],
            [W - 18, H - 18],
          ],
          fc,
        );
        const path = geoPath(projection);
        const arr: Feat[] = fc.features.map((f) => {
          const fips = String(f.id ?? "").padStart(2, "0");
          const [cx, cy] = path.centroid(f);
          return {
            fips,
            state: byFips.get(fips) ?? null,
            d: path(f) ?? "",
            cx,
            cy,
          };
        });
        if (!cancelled) setFeats(arr);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return <div className="map-loading">지도 데이터를 불러오지 못했습니다.</div>;
  }
  if (!feats) {
    return <div className="map-loading">지도를 불러오는 중…</div>;
  }

  const activeAbbr = hovered ?? selected;

  return (
    <svg
      className="map"
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label="미국 50주 지도 — 연도별 가입 시각화"
    >
      {feats.map((f) => {
        const st = f.state;
        const isState = Boolean(st);
        const joined = isState && Date.parse(`${st!.admissionDate}T00:00:00Z`) <= currentDate;
        const isSelected = st?.abbr === selected;
        const isActive = st?.abbr === activeAbbr;
        const cls = [
          "state",
          joined ? "is-joined" : "",
          isActive ? "is-active" : "",
          isSelected ? "is-selected" : "",
          isState ? "" : "is-terra",
        ]
          .filter(Boolean)
          .join(" ");
        return (
          <path
            key={f.fips}
            d={f.d}
            className={cls}
            tabIndex={isState ? 0 : -1}
            onClick={() => {
              if (!st) return;
              onSelect(st.abbr === selected ? null : st.abbr);
            }}
            onMouseEnter={() => st && onHover(st.abbr)}
            onMouseLeave={() => onHover(null)}
            onFocus={() => st && onHover(st.abbr)}
            onBlur={() => onHover(null)}
          >
            <title>{st ? `${st.nameKo} (${st.abbr})` : ""}</title>
          </path>
        );
      })}
      {/* 활성(호버/선택) 주 약자 라벨 */}
      {feats.map((f) => {
        const st = f.state;
        if (!st || st.abbr !== activeAbbr || !Number.isFinite(f.cx)) return null;
        return (
          <text
            key={`label-${f.fips}`}
            className="state-label"
            x={f.cx}
            y={f.cy}
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {st.abbr}
          </text>
        );
      })}
    </svg>
  );
}
