import { useState } from "react";
import {
  FileInput,
  SlidersHorizontal,
  Layers,
  GitBranch,
  BrainCog,
  MonitorSmartphone,
} from "lucide-react";
import useInView from "../hooks/useInView.js";

const STAGES = [
  {
    icon: FileInput,
    title: "Input Image",
    body: "The raw medical image is provided as the starting point for analysis.",
  },
  {
    icon: SlidersHorizontal,
    title: "Image Preprocessing",
    body: "Normalization, resizing, enhancement and augmentation.",
  },
  {
    icon: Layers,
    title: "Feature Extraction",
    body: "The model learns meaningful visual patterns from the image.",
  },
  {
    icon: GitBranch,
    title: "Vessel Detection",
    body: "Relevant vessel structures are identified.",
  },
  {
    icon: BrainCog,
    title: "Analysis",
    body: "The model evaluates learned patterns associated with potential abnormalities.",
  },
  {
    icon: MonitorSmartphone,
    title: "Visual Output",
    body: "The result is presented in a human-readable visual format.",
  },
];

export default function Pipeline() {
  const [ref, inView] = useInView();
  const [active, setActive] = useState(0);

  return (
    <section id="pipeline" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div ref={ref} className={inView ? "animate-fade-up" : "opacity-0"}>
        <span className="eyebrow">Under The Hood</span>
        <h2 className="section-heading mt-4 max-w-2xl">
          What happens behind the image?
        </h2>
        <p className="body-copy mt-4 max-w-xl">
          Hover or tap a stage to see what happens there.
        </p>
      </div>

      <div className="relative mt-16">
        {/* connecting line - desktop */}
        <div className="absolute left-0 right-0 top-6 hidden h-px bg-panel-line lg:block">
          <div
            className="h-full bg-gradient-to-r from-cyan-scan to-blue-deep transition-all duration-500"
            style={{ width: `${(active / (STAGES.length - 1)) * 100}%` }}
          />
        </div>

        <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {STAGES.map((stage, i) => (
            <button
              key={stage.title}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              className={`group flex flex-col items-center text-center lg:items-center ${
                inView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: inView ? `${i * 0.08 + 0.1}s` : "0s" }}
            >
              <span
                className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-void transition-all duration-300 ${
                  active === i
                    ? "border-cyan-scan shadow-glow text-cyan-scan"
                    : "border-panel-line text-ink-faint group-hover:border-cyan-scan/40 group-hover:text-cyan-scan/70"
                }`}
              >
                <stage.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span
                className={`mt-3 max-w-[9rem] font-mono text-[11px] uppercase tracking-wide transition-colors duration-300 ${
                  active === i ? "text-ink" : "text-ink-faint"
                }`}
              >
                {stage.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="card mt-10 p-7">
        <div className="flex items-start gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-scan/30 bg-cyan-scan/[0.08]">
            {(() => {
              const Icon = STAGES[active].icon;
              return <Icon className="h-5 w-5 text-cyan-scan" strokeWidth={1.75} />;
            })()}
          </span>
          <div>
            <h3 className="font-display text-lg font-medium text-ink">
              {STAGES[active].title}
            </h3>
            <p className="body-copy mt-1.5 text-[15px]">{STAGES[active].body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
