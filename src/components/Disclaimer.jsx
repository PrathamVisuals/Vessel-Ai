import { Info } from "lucide-react";

export default function Disclaimer() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-4 lg:px-10">
      <div className="flex items-start gap-4 rounded-2xl border border-panel-line bg-panel/40 p-6">
        <Info className="mt-0.5 h-5 w-5 shrink-0 text-ink-faint" strokeWidth={1.75} />
        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted">
            Research &amp; Demonstration Notice
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-faint">
            VesselAI is an academic/research prototype intended to demonstrate
            the potential application of artificial intelligence in medical
            image analysis. Demonstration outputs are simulated and should
            not be interpreted as medical diagnoses or clinical
            recommendations.
          </p>
        </div>
      </div>
    </section>
  );
}
