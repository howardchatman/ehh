"use client";

import { useEffect, useRef, useState } from "react";

export default function AmbientSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const audio = new Audio("/ocean-waves.wav");
    audio.loop = true;
    audio.volume = 0.35;
    audio.addEventListener("canplaythrough", () => setReady(true));
    audioRef.current = audio;
    return () => { audio.pause(); audio.src = ""; };
  }, []);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Mute ocean sounds" : "Play ocean sounds"}
      title={playing ? "Mute ocean sounds" : "Play ocean sounds"}
      style={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        zIndex: 50,
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        border: "1px solid rgba(28,184,200,0.35)",
        background: playing
          ? "rgba(28,184,200,0.15)"
          : "rgba(10,37,64,0.6)",
        backdropFilter: "blur(8px)",
        cursor: ready ? "pointer" : "default",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: ready ? 1 : 0.4,
        transition: "background 0.3s, border-color 0.3s, opacity 0.3s",
        padding: 0,
      }}
      onMouseEnter={(e) => {
        if (!ready) return;
        (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(28,184,200,0.7)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(28,184,200,0.35)";
      }}
    >
      {playing ? (
        /* Sound-on: three animated bars */
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="2" y="5" width="2.5" height="8" rx="1.25" fill="rgba(28,184,200,0.9)">
            <animate attributeName="height" values="8;4;8" dur="1.2s" repeatCount="indefinite" />
            <animate attributeName="y" values="5;7;5" dur="1.2s" repeatCount="indefinite" />
          </rect>
          <rect x="7.75" y="3" width="2.5" height="12" rx="1.25" fill="rgba(28,184,200,0.9)">
            <animate attributeName="height" values="12;5;12" dur="0.9s" repeatCount="indefinite" />
            <animate attributeName="y" values="3;6.5;3" dur="0.9s" repeatCount="indefinite" />
          </rect>
          <rect x="13.5" y="6" width="2.5" height="6" rx="1.25" fill="rgba(28,184,200,0.9)">
            <animate attributeName="height" values="6;10;6" dur="1.5s" repeatCount="indefinite" />
            <animate attributeName="y" values="6;4;6" dur="1.5s" repeatCount="indefinite" />
          </rect>
        </svg>
      ) : (
        /* Sound-off: wave icon */
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(28,184,200,0.7)" strokeWidth="1.5" strokeLinecap="round">
          <path d="M3 18 Q6 12 9 18" />
          <path d="M9 18 Q12 6 15 18" />
          <path d="M15 18 Q18 12 21 18" />
        </svg>
      )}
    </button>
  );
}
