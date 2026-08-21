import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import VesselVisual from "./VesselVisual.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-bottom opacity-40" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-10">
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-scan/25 bg-cyan-scan/[0.06] px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-scan animate-pulse" />
            <span className="eyebrow">AI × Medical Imaging</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4rem]"
          >
            Detect. Analyze.
            <br />
            <span className="bg-gradient-to-r from-cyan-scan to-blue-deep bg-clip-text text-transparent">
              Understand.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted"
          >
            AI-powered analysis of medical images to identify potential blood
            vessel abnormalities and assist clinical interpretation.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <button onClick={() => scrollTo("approach")} className="btn-secondary">
              Explore Our Approach
              <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => scrollTo("demo")} className="btn-primary">
              <PlayCircle className="h-4 w-4" />
              Run AI Demo
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative mx-auto aspect-[480/520] w-full max-w-md animate-drift"
        >
          <div className="glass mask-fade-radial rounded-3xl p-2 shadow-glow-lg">
            <VesselVisual scanning grid className="aspect-[480/520]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
