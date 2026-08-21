import { useId } from "react";

/**
 * A stylised branching vessel tree rendered as SVG.
 * Reused across the Hero, Interactive Demo, Augmentation and Report
 * sections so the same "instrument" keeps reappearing throughout the page.
 *
 * Props:
 *  - scanning: show the vertical scan sweep + pulsing nodes
 *  - dim: mute the vessel opacity (used mid-preprocessing)
 *  - flagged: highlight the flagged segment/node in amber
 *  - grid: render the faint scan grid behind the vessel
 *  - noise: overlay a grain/noise filter (augmentation demo)
 *  - style: extra CSS (used for rotate/scale/brightness/contrast demo)
 *  - className
 */
export default function VesselVisual({
  scanning = false,
  dim = false,
  flagged = false,
  grid = true,
  noise = false,
  style = {},
  className = "",
}) {
  const uid = useId().replace(/:/g, "");

  return (
    <div className={`relative ${className}`} style={style}>
      <svg
        viewBox="0 0 480 520"
        className="h-full w-full overflow-visible"
        role="img"
        aria-label="Stylised branching vessel structure used for demonstration"
      >
        <defs>
          <linearGradient id={`vessel-grad-${uid}`} x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#3E7BFA" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#34D8E8" stopOpacity="0.9" />
          </linearGradient>

          <radialGradient id={`glow-${uid}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#34D8E8" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#34D8E8" stopOpacity="0" />
          </radialGradient>

          <linearGradient id={`scan-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#34D8E8" stopOpacity="0" />
            <stop offset="50%" stopColor="#34D8E8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#34D8E8" stopOpacity="0" />
          </linearGradient>

          <filter id={`noise-${uid}`}>
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" result="n" />
            <feColorMatrix
              in="n"
              type="matrix"
              values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.5 0"
            />
          </filter>

          <clipPath id={`clip-${uid}`}>
            <rect x="0" y="0" width="480" height="520" rx="24" />
          </clipPath>
        </defs>

        <g clipPath={`url(#clip-${uid})`}>
          {/* background scan grid */}
          {grid && (
            <g opacity="0.5">
              {Array.from({ length: 13 }).map((_, i) => (
                <line
                  key={`v-${i}`}
                  x1={i * 40}
                  y1="0"
                  x2={i * 40}
                  y2="520"
                  stroke="#1D2A38"
                  strokeWidth="1"
                />
              ))}
              {Array.from({ length: 14 }).map((_, i) => (
                <line
                  key={`h-${i}`}
                  x1="0"
                  y1={i * 40}
                  x2="480"
                  y2={i * 40}
                  stroke="#1D2A38"
                  strokeWidth="1"
                />
              ))}
            </g>
          )}

          <circle cx="240" cy="260" r="200" fill={`url(#glow-${uid})`} opacity={dim ? 0.15 : 0.35} />

          {/* vessel tree */}
          <g
            fill="none"
            strokeLinecap="round"
            style={{ transition: "opacity 0.6s ease" }}
            opacity={dim ? 0.35 : 1}
          >
            {/* trunk */}
            <path
              d="M240,500 C240,440 236,400 234,350"
              stroke={`url(#vessel-grad-${uid})`}
              strokeWidth="10"
            />
            {/* primary bifurcation left */}
            <path
              d="M234,350 C210,320 170,305 118,296"
              stroke={`url(#vessel-grad-${uid})`}
              strokeWidth="7"
            />
            {/* primary bifurcation right */}
            <path
              d="M234,350 C255,315 292,298 336,286"
              stroke={`url(#vessel-grad-${uid})`}
              strokeWidth="7"
            />
            {/* left sub-branch a */}
            <path
              d="M118,296 C90,270 78,235 82,190"
              stroke={`url(#vessel-grad-${uid})`}
              strokeWidth="4.5"
            />
            {/* left sub-branch b */}
            <path
              d="M118,296 C104,320 78,332 44,330"
              stroke={`url(#vessel-grad-${uid})`}
              strokeWidth="4"
            />
            {/* right sub-branch a — this is the segment we "flag" */}
            <path
              id={`flag-segment-${uid}`}
              d="M336,286 C360,255 368,218 358,178"
              stroke={flagged ? "#E8A34D" : `url(#vessel-grad-${uid})`}
              strokeWidth={flagged ? 6 : 4.5}
              style={{ transition: "all 0.5s ease" }}
            />
            {/* right sub-branch b */}
            <path
              d="M336,286 C362,308 396,314 428,306"
              stroke={`url(#vessel-grad-${uid})`}
              strokeWidth="4"
            />
            {/* fine tertiary vessels for texture */}
            <path d="M82,190 C74,160 84,132 108,112" stroke={`url(#vessel-grad-${uid})`} strokeWidth="2.5" opacity="0.8" />
            <path d="M358,178 C368,150 362,120 340,98" stroke={flagged ? "#E8A34D" : `url(#vessel-grad-${uid})`} strokeWidth={flagged ? 3.2 : 2.5} opacity="0.85" />
            <path d="M44,330 C20,338 4,356 4,380" stroke={`url(#vessel-grad-${uid})`} strokeWidth="2.2" opacity="0.7" />
            <path d="M428,306 C448,316 462,334 462,356" stroke={`url(#vessel-grad-${uid})`} strokeWidth="2.2" opacity="0.7" />
          </g>

          {/* nodes */}
          {[
            { cx: 234, cy: 350, r: 5 },
            { cx: 118, cy: 296, r: 4 },
            { cx: 336, cy: 286, r: 4, flag: true },
            { cx: 82, cy: 190, r: 3 },
            { cx: 358, cy: 178, r: 3.4, flag: true },
            { cx: 44, cy: 330, r: 3 },
            { cx: 428, cy: 306, r: 3 },
          ].map((n, i) => (
            <circle
              key={i}
              cx={n.cx}
              cy={n.cy}
              r={n.r}
              fill={flagged && n.flag ? "#E8A34D" : "#EAF2F8"}
              className={scanning ? "animate-pulse-node" : ""}
              style={{
                filter:
                  flagged && n.flag
                    ? "drop-shadow(0 0 6px rgba(232,163,77,0.9))"
                    : "drop-shadow(0 0 4px rgba(52,216,232,0.8))",
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}

          {flagged && (
            <circle
              cx="358"
              cy="178"
              r="26"
              fill="none"
              stroke="#E8A34D"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              opacity="0.8"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 358 178"
                to="360 358 178"
                dur="12s"
                repeatCount="indefinite"
              />
            </circle>
          )}

          {/* scan sweep */}
          {scanning && (
            <rect
              x="0"
              y="0"
              width="480"
              height="90"
              fill={`url(#scan-${uid})`}
              className="animate-scan-sweep"
            />
          )}

          {noise && (
            <rect x="0" y="0" width="480" height="520" filter={`url(#noise-${uid})`} opacity="0.5" />
          )}
        </g>

        <rect
          x="0.5"
          y="0.5"
          width="479"
          height="519"
          rx="24"
          fill="none"
          stroke="#1D2A38"
        />
      </svg>
    </div>
  );
}
