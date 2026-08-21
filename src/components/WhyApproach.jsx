import { Eye, Users, ScalingIcon } from "lucide-react";
import useInView from "../hooks/useInView.js";

const CARDS = [
  {
    icon: Eye,
    title: "Visual",
    body: "Instead of returning only a numerical prediction, the system aims to make relevant image regions easier to interpret.",
  },
  {
    icon: Users,
    title: "Assistive",
    body: "The system is designed as an AI-assisted tool, not a replacement for medical professionals.",
  },
  {
    icon: ScalingIcon,
    title: "Scalable",
    body: "The architecture can potentially be extended to additional imaging types and analysis tasks.",
  },
];

export default function WhyApproach() {
  const [ref, inView] = useInView();

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div ref={ref} className={inView ? "animate-fade-up" : "opacity-0"}>
        <span className="eyebrow">Why This Approach</span>
        <h2 className="section-heading mt-4 max-w-2xl">
          Designed to support, not replace, clinical judgment.
        </h2>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {CARDS.map((card, i) => (
          <div
            key={card.title}
            className={`card p-8 ${inView ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: inView ? `${i * 0.12 + 0.15}s` : "0s" }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-scan/25 bg-cyan-scan/[0.06]">
              <card.icon className="h-6 w-6 text-cyan-scan" strokeWidth={1.6} />
            </div>
            <h3 className="mt-6 font-display text-xl font-medium text-ink">{card.title}</h3>
            <p className="body-copy mt-3">{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
