"use client";

import { TIMELINE_END, TIMELINE_START, TOTAL_STATES } from "@/data/states";

type Props = {
  currentDate: number;
  isPlaying: boolean;
  speed: number;
  joinedCount: number;
  onPlayToggle: () => void;
  onSpeed: (s: number) => void;
  onSeek: (ms: number) => void;
  onPrev: () => void;
  onNext: () => void;
  onReset: () => void;
};

const DAY = 86_400_000;

export function PlaybackControls({
  currentDate,
  isPlaying,
  speed,
  joinedCount,
  onPlayToggle,
  onSpeed,
  onSeek,
  onPrev,
  onNext,
  onReset,
}: Props) {
  const pct = ((currentDate - TIMELINE_START) / (TIMELINE_END - TIMELINE_START)) * 100;
  const year = new Date(currentDate).getUTCFullYear();
  const atEnd = currentDate >= TIMELINE_END - DAY;

  return (
    <div className="ctrl">
      <div className="ctrl-buttons">
        <button className="ctrl-btn" onClick={onReset} title="처음으로" aria-label="처음으로">
          ⏮
        </button>
        <button className="ctrl-btn" onClick={onPrev} title="이전 가입" aria-label="이전 가입 주">
          ◀
        </button>
        <button
          className="ctrl-play"
          onClick={onPlayToggle}
          title={atEnd ? "다시 재생" : isPlaying ? "일시정지" : "재생"}
          aria-label={atEnd ? "다시 재생" : isPlaying ? "일시정지" : "재생"}
        >
          {atEnd ? "↺" : isPlaying ? "❚❚" : "▶"}
        </button>
        <button className="ctrl-btn" onClick={onNext} title="다음 가입" aria-label="다음 가입 주">
          ▶
        </button>
      </div>

      <div className="ctrl-slider-wrap">
        <div className="ctrl-track" aria-hidden="true">
          <div className="ctrl-fill" style={{ width: `${Math.min(100, Math.max(0, pct))}%` }} />
        </div>
        <input
          className="ctrl-slider"
          type="range"
          min={TIMELINE_START}
          max={TIMELINE_END}
          step={DAY}
          value={currentDate}
          onChange={(e) => onSeek(Number(e.target.value))}
          aria-label="연도 슬라이더"
        />
        <div className="ctrl-ticks" aria-hidden="true">
          <span>1787</span>
          <span>1803</span>
          <span>1821</span>
          <span>1845</span>
          <span>1865</span>
          <span>1889</span>
          <span>1912</span>
          <span>1959</span>
        </div>
      </div>

      <div className="ctrl-readout">
        <div className="ctrl-year" key={year}>
          {year}
        </div>
        <div className="ctrl-count">
          <span className="ctrl-count-n">{joinedCount}</span>
          <span className="ctrl-count-t">/{TOTAL_STATES}</span>
        </div>
      </div>

      <div className="ctrl-speed" role="group" aria-label="재생 속도">
        {[0.5, 1, 2].map((s) => (
          <button
            key={s}
            className={`spd${speed === s ? " active" : ""}`}
            onClick={() => onSpeed(s)}
            aria-pressed={speed === s}
          >
            {s}×
          </button>
        ))}
      </div>
    </div>
  );
}
