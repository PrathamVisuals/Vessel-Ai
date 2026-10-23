import { Activity } from "lucide-react";
import { Link } from "react-router-dom";

const LINKS = [
  { id: "approach", label: "Approach" },
  { id: "pipeline", label: "AI Pipeline" },
  { id: "demo", label: "Demo" },
  { id: "technology", label: "Technology" },
];

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="border-t border-panel-line">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2.5 font-display text-lg font-semibold text-ink">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-scan/30 bg-cyan-scan/10">
                <Activity className="h-4 w-4 text-cyan-scan" strokeWidth={2.25} />
              </span>
              VesselAI
            </div>
            <p className="body-copy mt-3 max-w-xs text-sm">
              AI-powered medical imaging research.
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className="font-mono text-xs uppercase tracking-wide text-ink-muted transition-colors hover:text-cyan-scan"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col-reverse items-center gap-4 border-t border-panel-line pt-6 sm:flex-row sm:justify-between">
          <p className="font-mono text-xs text-ink-faint">© 2026 VesselAI</p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="font-mono text-xs text-ink-faint transition-colors hover:text-ink-muted"
            >
              Privacy Policy
            </Link>
            <span className="stamp">Academic / Research Prototype</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

