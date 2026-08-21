import useInView from "../hooks/useInView.js";

const ROADMAP = [
  { tag: "Current", title: "AI Image Analysis", state: "current" },
  { tag: "Next", title: "Vessel Segmentation", state: "next" },
  { tag: "Future", title: "Severity Estimation", state: "future" },
  { tag: "Future", title: "Automated Reporting", state: "future" },
  { tag: "Long-Term", title: "Clinical Decision Support", state: "future" },
];

export default function FutureVision() {
  const [ref, inView] = useInView();

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div ref={ref} className={inView ? "animate-fade-up" : "opacity-0"}>
        <span className="eyebrow">Roadmap</span>
        <h2 className="section-heading mt-4 max-w-2xl">
          From detection to decision support.
        </h2>
        <p className="body-copy mt-4 max-w-xl">
          Only the first milestone reflects work completed today. Everything
          past it is a future direction, not a shipped feature.
        </p>
      </div>

      <div className="relative mt-16 pl-8 sm:pl-10">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-panel-line sm:left-[11px]" />
        <div className="flex flex-col gap-10">
          {ROADMAP.map((item, i) => (
            <div
              key={item.title}
              className={`relative flex items-start gap-5 ${inView ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: inView ? `${i * 0.1 + 0.1}s` : "0s" }}
            >
              <span
                className={`absolute -left-8 top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full sm:-left-10 ${
                  item.state === "current"
                    ? "bg-cyan-scan shadow-glow"
                    : "border-2 border-panel-line bg-void"
                }`}
              />
              <div>
                <span
                  className={`font-mono text-[11px] uppercase tracking-[0.18em] ${
                    item.state === "current" ? "text-cyan-scan" : "text-ink-faint"
                  }`}
                >
                  {item.tag}
                </span>
                <h3
                  className={`mt-1.5 font-display text-xl ${
                    item.state === "current" ? "text-ink" : "text-ink-muted"
                  }`}
                >
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
