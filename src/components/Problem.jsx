import { ScanEye, BrainCircuit, LifeBuoy } from "lucide-react";
import useInView from "../hooks/useInView.js";

const CARDS = [
  {
    icon: ScanEye,
    title: "Complex Images",
    body: "Medical images contain large amounts of visual information that can be difficult to analyze consistently.",
  },
  {
    icon: BrainCircuit,
    title: "Manual Interpretation",
    body: "Identifying relevant vessel patterns requires careful examination and domain expertise.",
  },
  {
    icon: LifeBuoy,
    title: "Need for Assistance",
    body: "AI can help identify potentially relevant visual patterns and provide an additional layer of analysis.",
  },
];

export default function Problem() {
  const [ref, inView] = useInView();

  return (
    <section id="problem" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div ref={ref} className={inView ? "animate-fade-up" : "opacity-0"}>
        <span className="eyebrow">The Problem</span>
        <h2 className="section-heading mt-4 max-w-2xl">
          Medical images contain more than meets the eye.
        </h2>
        <p className="body-copy mt-5 max-w-xl">
          Blood vessel abnormalities can be difficult to identify and analyze
          from complex medical images. Manual interpretation requires
          expertise, attention, and time.
        </p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {CARDS.map((card, i) => (
          <div
            key={card.title}
            className={`card group p-7 hover:-translate-y-1.5 hover:border-cyan-scan/30 ${
              inView ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: inView ? `${i * 0.12 + 0.15}s` : "0s" }}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-panel-line bg-white/[0.03] transition-colors duration-300 group-hover:border-cyan-scan/40 group-hover:bg-cyan-scan/[0.08]">
              <card.icon className="h-5 w-5 text-cyan-scan" strokeWidth={1.75} />
            </div>
            <h3 className="mt-5 font-display text-lg font-medium text-ink">{card.title}</h3>
            <p className="body-copy mt-2.5 text-[15px]">{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
