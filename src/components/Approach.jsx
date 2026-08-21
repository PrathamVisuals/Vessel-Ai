import { ScanLine, SlidersHorizontal, BrainCog, Eye, ArrowRight, ArrowDown } from "lucide-react";
import useInView from "../hooks/useInView.js";

const STEPS = [
  {
    n: "01",
    icon: ScanLine,
    title: "Medical Image",
    body: "Relevant medical imaging data is provided as the input.",
  },
  {
    n: "02",
    icon: SlidersHorizontal,
    title: "Preprocessing",
    body: "Images are resized, normalized and enhanced before entering the model.",
  },
  {
    n: "03",
    icon: BrainCog,
    title: "AI Analysis",
    body: "Deep learning techniques analyze image features associated with vessel abnormalities.",
  },
  {
    n: "04",
    icon: Eye,
    title: "Visual Insight",
    body: "The system presents an interpretable visual result for further review.",
  },
];

export default function Approach() {
  const [ref, inView] = useInView();

  return (
    <section id="approach" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div ref={ref} className={inView ? "animate-fade-up" : "opacity-0"}>
        <span className="eyebrow">Our Approach</span>
        <h2 className="section-heading mt-4 max-w-2xl">
          From medical image to AI-assisted insight.
        </h2>
      </div>

      <div className="mt-16 flex flex-col lg:flex-row lg:items-stretch">
        {STEPS.map((step, i) => (
          <div key={step.n} className="flex flex-1 flex-col lg:flex-row lg:items-center">
            <div
              className={`card group relative flex-1 p-7 hover:-translate-y-1.5 hover:border-cyan-scan/30 ${
                inView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: inView ? `${i * 0.14 + 0.15}s` : "0s" }}
            >
              <span className="font-mono text-3xl font-semibold text-panel-line transition-colors duration-300 group-hover:text-cyan-scan/25">
                {step.n}
              </span>
              <div className="mt-3 flex h-11 w-11 items-center justify-center rounded-xl border border-panel-line bg-white/[0.03] transition-colors duration-300 group-hover:border-cyan-scan/40 group-hover:bg-cyan-scan/[0.08]">
                <step.icon className="h-5 w-5 text-cyan-scan" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-display text-lg font-medium text-ink">{step.title}</h3>
              <p className="body-copy mt-2.5 text-[15px]">{step.body}</p>
            </div>

            {i < STEPS.length - 1 && (
              <div className="flex items-center justify-center py-3 text-ink-faint lg:px-3 lg:py-0">
                <ArrowDown className="h-5 w-5 lg:hidden" />
                <ArrowRight className="hidden h-5 w-5 lg:block" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
