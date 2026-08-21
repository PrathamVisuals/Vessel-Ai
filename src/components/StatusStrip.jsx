const ITEMS = ["Computer Vision", "Deep Learning", "Medical Imaging", "Explainable AI"];

export default function StatusStrip() {
  return (
    <div className="border-y border-panel-line/70 bg-panel/30">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-5 lg:px-10">
        {ITEMS.map((item, i) => (
          <div key={item} className="flex items-center gap-2.5">
            {i !== 0 && <span className="hidden h-1 w-1 rounded-full bg-ink-faint sm:block" />}
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
