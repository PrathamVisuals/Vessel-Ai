import { AlertTriangle } from "lucide-react";
import VesselVisual from "./VesselVisual.jsx";
import useInView from "../hooks/useInView.js";

const ROWS = [
  { label: "Input", value: "Medical Image" },
  { label: "Processing", value: "Completed" },
  { label: "Vessel Structure", value: "Detected" },
  { label: "Potential Finding", value: "Region highlighted for review", flag: true },
  { label: "Interpretation", value: "Requires further clinical evaluation" },
];

export default function ReportPreview() {
  const [ref, inView] = useInView();

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div ref={ref} className={inView ? "animate-fade-up" : "opacity-0"}>
        <span className="eyebrow">Sample Output</span>
        <h2 className="section-heading mt-4 max-w-2xl">From image to insight.</h2>
      </div>

      <div className={`card mt-14 grid gap-0 overflow-hidden lg:grid-cols-2 ${inView ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.15s" }}>
        <div className="border-b border-panel-line p-8 lg:border-b-0 lg:border-r">
          <div className="mx-auto max-w-xs">
            <VesselVisual flagged grid />
          </div>
        </div>

        <div className="p-8">
          <div className="flex items-center justify-between">
            <span className="eyebrow">AI Analysis Report</span>
            <span className="stamp">
              <AlertTriangle className="h-3 w-3" /> Simulated Output
            </span>
          </div>

          <dl className="mt-6 divide-y divide-panel-line">
            {ROWS.map((row) => (
              <div key={row.label} className="grid grid-cols-2 gap-4 py-4">
                <dt className="font-mono text-xs uppercase tracking-wide text-ink-faint">
                  {row.label}
                </dt>
                <dd className={`text-sm ${row.flag ? "text-amber-flag" : "text-ink"}`}>
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
