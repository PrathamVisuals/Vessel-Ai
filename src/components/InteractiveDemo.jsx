import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle, RotateCcw, Check, Loader2, Circle, AlertTriangle } from "lucide-react";
import VesselVisual from "./VesselVisual.jsx";
import useInView from "../hooks/useInView.js";

const STAGES = [
  "Loading medical image...",
  "Preprocessing image...",
  "Detecting vessel structures...",
  "Analyzing potential abnormalities...",
  "Analysis complete",
];

const STAGE_DELAYS = [1200, 1300, 1500, 1500]; // ms between successive stages

export default function InteractiveDemo() {
  const [sectionRef, inView] = useInView();
  const [stage, setStage] = useState(0); // 0 = idle, 1..5 = progress through STAGES
  const timeouts = useRef([]);

  const clearTimers = () => {
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
  };

  useEffect(() => () => clearTimers(), []);

  const run = () => {
    clearTimers();
    setStage(1);
    let acc = 0;
    STAGE_DELAYS.forEach((delay, idx) => {
      acc += delay;
      timeouts.current.push(setTimeout(() => setStage(idx + 2), acc));
    });
  };

  const reset = () => {
    clearTimers();
    setStage(0);
  };

  const isIdle = stage === 0;
  const isComplete = stage === 5;
  const isScanning = stage === 3 || stage === 4;
  const isDim = stage === 2;
  const isFlagged = stage >= 4;

  const statusLabel = isIdle ? "IDLE" : isComplete ? "COMPLETE" : "RUNNING";
  const statusColor = isIdle ? "text-ink-faint" : isComplete ? "text-cyan-scan" : "text-amber-flag";

  return (
    <section id="demo" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div ref={sectionRef} className={`text-center ${inView ? "animate-fade-up" : "opacity-0"}`}>
        <span className="eyebrow">Live Walkthrough</span>
        <h2 className="section-heading mx-auto mt-4 max-w-2xl">
          See the AI workflow in action.
        </h2>
        <p className="body-copy mx-auto mt-4 max-w-lg">
          A simulated, step-by-step walkthrough of how VesselAI processes an
          image — from raw input to a reviewable visual result.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Scanner console panel */}
        <div className="card overflow-hidden">
          <div className="flex items-center justify-between border-b border-panel-line bg-white/[0.02] px-5 py-3.5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="ml-3 font-mono text-xs text-ink-faint">scanner.viewer</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className={`h-1.5 w-1.5 rounded-full ${isIdle ? "bg-ink-faint" : "bg-cyan-scan animate-pulse"}`} />
              <span className={`font-mono text-[11px] tracking-[0.15em] ${statusColor}`}>{statusLabel}</span>
            </div>
          </div>

          <div className="relative mx-auto max-w-sm p-6 sm:max-w-md">
            <VesselVisual scanning={isScanning} dim={isDim} flagged={isFlagged} grid />
          </div>

          <div className="border-t border-panel-line px-5 py-4">
            {!isComplete ? (
              <button
                onClick={run}
                disabled={!isIdle}
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isIdle ? (
                  <>
                    <PlayCircle className="h-4 w-4" /> Run AI Analysis
                  </>
                ) : (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Analyzing…
                  </>
                )}
              </button>
            ) : (
              <button onClick={reset} className="btn-secondary w-full">
                <RotateCcw className="h-4 w-4" /> Reset Analysis
              </button>
            )}
          </div>
        </div>

        {/* Telemetry + result */}
        <div className="flex flex-col gap-6">
          <div className="card p-6">
            <span className="eyebrow">Process Log</span>
            <ul className="mt-4 flex flex-col gap-3.5">
              {STAGES.map((label, i) => {
                const idx = i + 1;
                const active = stage === idx && !isComplete;
                const isDoneReal = stage > idx;
                return (
                  <li key={label} className="flex items-center gap-3">
                    {isDoneReal || (isComplete && idx === 5) ? (
                      <Check className="h-4 w-4 shrink-0 text-cyan-scan" />
                    ) : active ? (
                      <Loader2 className="h-4 w-4 shrink-0 animate-spin text-amber-flag" />
                    ) : (
                      <Circle className="h-3.5 w-3.5 shrink-0 text-panel-line" />
                    )}
                    <span
                      className={`font-mono text-[13px] ${
                        isDoneReal || (isComplete && idx === 5)
                          ? "text-ink"
                          : active
                          ? "text-amber-flag"
                          : "text-ink-faint"
                      }`}
                    >
                      {label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="card relative flex-1 overflow-hidden p-6">
            <AnimatePresence mode="wait">
              {isComplete ? (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-center justify-between">
                    <span className="eyebrow">AI Analysis</span>
                    <span className="stamp">
                      <AlertTriangle className="h-3 w-3" /> Simulated
                    </span>
                  </div>
                  <div className="mt-5 space-y-4 border-t border-panel-line pt-4 font-mono text-[13px]">
                    <div>
                      <p className="text-ink-faint">Vessel structure</p>
                      <p className="mt-1 text-ink">Region detected</p>
                    </div>
                    <div>
                      <p className="text-ink-faint">Potential abnormality</p>
                      <p className="mt-1 text-amber-flag">Highlighted region requires review</p>
                    </div>
                    <div>
                      <p className="text-ink-faint">Confidence</p>
                      <p className="mt-1 text-ink">Demo visualization</p>
                    </div>
                    <div>
                      <p className="text-ink-faint">Status</p>
                      <p className="mt-1 text-ink">For research demonstration</p>
                    </div>
                  </div>
                  <p className="mt-5 border-t border-panel-line pt-4 text-xs leading-relaxed text-ink-faint">
                    Simulated AI demonstration — not a medical diagnosis.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex h-full min-h-[220px] flex-col items-center justify-center text-center"
                >
                  <span className="eyebrow">Result</span>
                  <p className="body-copy mt-3 max-w-[220px] text-sm">
                    Run the analysis to reveal a simulated result card here.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
