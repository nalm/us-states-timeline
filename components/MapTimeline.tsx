"use client";

import { useEffect, useRef, useState } from "react";
import {
  admissionMs,
  TIMELINE_END,
  TIMELINE_START,
} from "@/data/states";
import { USMap } from "./USMap";
import { InfoPanel } from "./InfoPanel";
import { PlaybackControls } from "./PlaybackControls";

// 1× 속도에서 1초당 진행하는 가상 연수 (→ 전 구간 약 57초)
const YEARS_PER_SEC_AT_1X = 3;
const YEAR_MS = 365.25 * 86_400_000;

export function MapTimeline() {
  const [currentDate, setCurrentDate] = useState(TIMELINE_START);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [selected, setSelected] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const rafRef = useRef<number | null>(null);

  // 재생 루프 — rAF + 실제 경과시간 기반 (speed 비례, 부드러운 진행)
  useEffect(() => {
    if (!isPlaying) return;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      setCurrentDate((prev) => {
        const addMs = (dt / 1000) * YEARS_PER_SEC_AT_1X * speed * YEAR_MS;
        const next = prev + addMs;
        if (next >= TIMELINE_END) {
          setIsPlaying(false);
          return TIMELINE_END;
        }
        return next;
      });
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isPlaying, speed]);

  const joinedCount = admissionMs.filter((a) => a.ms <= currentDate).length;

  const jumpEvent = (dir: 1 | -1) => {
    setIsPlaying(false);
    setCurrentDate((prev) => {
      if (dir === 1) {
        const nxt = admissionMs.find((a) => a.ms > prev + 1);
        return nxt ? nxt.ms : TIMELINE_END;
      }
      const prevEvt = [...admissionMs].reverse().find((a) => a.ms < prev - 1);
      return prevEvt ? prevEvt.ms : TIMELINE_START;
    });
  };

  const reset = () => {
    setIsPlaying(false);
    setCurrentDate(TIMELINE_START);
    setSelected(null);
  };

  const playToggle = () => {
    if (currentDate >= TIMELINE_END) {
      reset();
      setIsPlaying(true);
      return;
    }
    setIsPlaying((p) => !p);
  };

  return (
    <section className="mt-shell" aria-label="미국 주 편입 지도">
      <div className="mt-stage">
        <USMap
          currentDate={currentDate}
          selected={selected}
          hovered={hovered}
          onSelect={setSelected}
          onHover={setHovered}
        />
      </div>

      <aside className="mt-side">
        <InfoPanel
          abbr={selected ?? hovered}
          currentDate={currentDate}
          joinedCount={joinedCount}
          onSelect={setSelected}
        />
      </aside>

      <div className="mt-ctrl">
        <PlaybackControls
          currentDate={currentDate}
          isPlaying={isPlaying}
          speed={speed}
          joinedCount={joinedCount}
          onPlayToggle={playToggle}
          onSpeed={setSpeed}
          onSeek={(ms) => {
            setIsPlaying(false);
            setCurrentDate(ms);
          }}
          onPrev={() => jumpEvent(-1)}
          onNext={() => jumpEvent(1)}
          onReset={reset}
        />
      </div>
    </section>
  );
}
