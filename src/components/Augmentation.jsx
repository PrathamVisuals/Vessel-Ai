import { useState } from "react";
import { ImageIcon, RotateCw, Maximize2, Sun, Contrast, Waves } from "lucide-react";
import VesselVisual from "./VesselVisual.jsx";
import useInView from "../hooks/useInView.js";

const TRANSFORMS = [
  {
    key: "original",
    label: "Original",
    icon: ImageIcon,
    caption: "The unmodified input image, as originally captured.",
    style: {},
    props: {},
  },
  {
    key: "rotation",
    label: "Rotation",
    icon: RotateCw,
    caption: "Images may be rotated slightly to simulate variation in patient or device positioning.",
    style: { transform: "rotate(11deg)" },
    props: {},
  },
  {
    key: "scaling",
    label: "Scaling",
    icon: Maximize2,
    caption: "Scaling exposes the model to vessels at different sizes and distances.",
    style: { transform: "scale(0.82)" },
    props: {},
  },
  {
    key: "brightness",
    label: "Brightness",
    icon: Sun,
    caption: "Brightness shifts mimic variation in exposure across imaging equipment.",
    style: { filter: "brightness(1.7)" },
    props: {},
  },
  {
    key: "contrast",
    label: "Contrast",
    icon: Contrast,
    caption: "Contrast changes simulate differences in acquisition settings between scans.",
    style: { filter: "contrast(0.45)" },
    props: {},
  },
  {
    key: "noise",
    label: "Noise",
    icon: Waves,
    caption: "Added noise helps the model stay robust to lower-quality or compressed images.",
    style: {},
    props: { noise: true },
  },
];

export default function Augmentation() {
  const [ref, inView] = useInView();
  const [active, setActive] = useState("original");
  const current = TRANSFORMS.find((t) => t.key === active);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div ref={ref} className={inView ? "animate-fade-up" : "opacity-0"}>
        <span className="eyebrow">Training For The Real World</span>
        <h2 className="section-heading mt-4 max-w-2xl">
          Training for real-world variations.
        </h2>
        <p className="body-copy mt-4 max-w-xl">
          Medical images can vary due to orientation, brightness, contrast,
          image quality and acquisition conditions. Data augmentation helps
          expose the model to different variations during training.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="card flex flex-col p-3">
          <div className="mx-auto w-full max-w-xs p-4">
            <VesselVisual
              grid
              style={{ transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)", ...current.style }}
              {...current.props}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-6 lg:grid-cols-3">
            {TRANSFORMS.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`flex flex-col items-center gap-2 rounded-xl border px-3 py-4 transition-all duration-300 ${
                  active === t.key
                    ? "border-cyan-scan/50 bg-cyan-scan/[0.08] text-ink"
                    : "border-panel-line bg-white/[0.02] text-ink-muted hover:border-cyan-scan/30 hover:text-ink"
                }`}
              >
                <t.icon className={`h-5 w-5 ${active === t.key ? "text-cyan-scan" : ""}`} strokeWidth={1.75} />
                <span className="font-mono text-[11px] uppercase tracking-wide">{t.label}</span>
              </button>
            ))}
          </div>

          <div className="card flex-1 p-6">
            <span className="eyebrow">{current.label}</span>
            <p className="body-copy mt-2.5 text-[15px]">{current.caption}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
