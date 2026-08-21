import { useEffect, useState } from "react";
import { Menu, X, Activity } from "lucide-react";

const LINKS = [
  { id: "problem", label: "Problem" },
  { id: "approach", label: "Approach" },
  { id: "pipeline", label: "AI Pipeline" },
  { id: "demo", label: "Demo" },
  { id: "technology", label: "Technology" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-void/80 backdrop-blur-xl border-b border-panel-line" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight text-ink"
        >
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-scan/30 bg-cyan-scan/10">
            <Activity className="h-4 w-4 text-cyan-scan" strokeWidth={2.25} />
          </span>
          VesselAI
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className={`relative rounded-full px-4 py-2 font-mono text-[13px] tracking-wide transition-colors duration-300 ${
                  active === link.id ? "text-cyan-scan" : "text-ink-muted hover:text-ink"
                }`}
              >
                {link.label}
                {active === link.id && (
                  <span className="absolute inset-x-4 -bottom-[1px] h-px bg-cyan-scan" />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <button onClick={() => scrollTo("demo")} className="btn-secondary !py-2.5 !px-5 text-sm">
            Explore Demo
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-panel-line text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-panel-line bg-void/95 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className={`w-full rounded-lg px-3 py-3 text-left font-mono text-sm ${
                    active === link.id ? "bg-white/[0.04] text-cyan-scan" : "text-ink-muted"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <button onClick={() => scrollTo("demo")} className="btn-primary w-full">
                Explore Demo
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
