import { ArrowRight } from "lucide-react";
import useInView from "../hooks/useInView.js";

export default function FinalCTA() {
  const [ref, inView] = useInView();
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden px-6 py-24 lg:px-10 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-radial opacity-30" />
      <div
        ref={ref}
        className={`relative mx-auto max-w-2xl text-center ${inView ? "animate-fade-up" : "opacity-0"}`}
      >
        <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
          Reimagining medical image analysis with AI.
        </h2>
        <p className="body-copy mx-auto mt-5 max-w-lg">
          Exploring how computer vision and deep learning can assist the
          interpretation of complex vascular images.
        </p>
        <button onClick={() => scrollTo("pipeline")} className="btn-primary mt-8">
          Explore the AI Workflow
          <ArrowRight className="h-4 w-4" />
        </button>
        <p className="mt-8 font-mono text-xs uppercase tracking-[0.15em] text-ink-faint">
          VesselAI · AI-Based Medical Imaging Research
        </p>
      </div>
    </section>
  );
}
