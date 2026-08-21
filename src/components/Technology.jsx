import { Eye, Network, Sparkles, Shapes, MessageSquareText } from "lucide-react";
import useInView from "../hooks/useInView.js";

const CARDS = [
  {
    icon: Eye,
    title: "Computer Vision",
    body: "Extract meaningful patterns from medical images.",
  },
  {
    icon: Network,
    title: "Deep Learning",
    body: "Learn complex visual representations from training data.",
  },
  {
    icon: Sparkles,
    title: "Image Processing",
    body: "Prepare and enhance input images before analysis.",
  },
  {
    icon: Shapes,
    title: "Segmentation",
    body: "Identify relevant vessel structures and regions.",
  },
  {
    icon: MessageSquareText,
    title: "Explainable AI",
    body: "Make model outputs easier to understand and review.",
  },
];

export default function Technology() {
  const [ref, inView] = useInView();

  return (
    <section id="technology" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div ref={ref} className={inView ? "animate-fade-up" : "opacity-0"}>
        <span className="eyebrow">Technology</span>
        <h2 className="section-heading mt-4 max-w-2xl">
          The technology behind VesselAI.
        </h2>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {CARDS.map((card, i) => (
          <div
            key={card.title}
            className={`card group p-6 hover:-translate-y-1.5 hover:border-cyan-scan/30 ${
              inView ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: inView ? `${i * 0.1 + 0.15}s` : "0s" }}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-panel-line bg-white/[0.03] transition-colors duration-300 group-hover:border-cyan-scan/40 group-hover:bg-cyan-scan/[0.08]">
              <card.icon className="h-5 w-5 text-cyan-scan" strokeWidth={1.75} />
            </div>
            <h3 className="mt-5 font-display text-base font-medium text-ink">{card.title}</h3>
            <p className="body-copy mt-2 text-sm">{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
