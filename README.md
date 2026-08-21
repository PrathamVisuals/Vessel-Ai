# VesselAI — Landing Page

A polished, responsive single-page React site presenting the VesselAI
concept: an AI-assisted approach to identifying potential blood vessel
abnormalities in medical images. Built for a hackathon audience —
judges, visitors, and technical reviewers — and clearly labels every
demo output as simulated, not a medical diagnosis.

## Stack

- React 18 + Vite 5
- Tailwind CSS 3
- Framer Motion (section/entry animation)
- lucide-react (icons)

## Getting started

```bash
npm install
npm run dev       # local dev server, usually http://localhost:5173
```

Build for production:

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

## Project structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── StatusStrip.jsx
│   ├── Problem.jsx
│   ├── Approach.jsx
│   ├── InteractiveDemo.jsx     ← centerpiece: simulated AI scan walkthrough
│   ├── Pipeline.jsx
│   ├── Augmentation.jsx
│   ├── Technology.jsx
│   ├── ReportPreview.jsx
│   ├── WhyApproach.jsx
│   ├── FutureVision.jsx
│   ├── Disclaimer.jsx
│   ├── FinalCTA.jsx
│   ├── Footer.jsx
│   └── VesselVisual.jsx        ← shared branching-vessel SVG used throughout
├── hooks/
│   └── useInView.js            ← scroll-reveal helper
├── App.jsx
├── main.jsx
└── index.css
```

## Design notes

- Palette: near-black navy (`bg-void`), soft panel navy (`bg-panel`), a
  medical cyan (`cyan-scan`) + deep blue (`blue-deep`) accent pair, and a
  desaturated amber (`amber-flag`) reserved only for "flagged for review"
  states — never used decoratively.
- Type: Space Grotesk (display), IBM Plex Sans (body), IBM Plex Mono
  (data/eyebrow labels, telemetry, stamps) — loaded via Google Fonts in
  `index.html`.
- Signature motif: a rotated dashed "Simulated" stamp reused everywhere a
  result appears (the interactive demo, the sample report, the footer) so
  the "this is not a diagnosis" message is visually consistent, not just a
  line of fine print.
- All content follows the brief's language rules: no invented accuracy
  percentages, no diagnostic claims — every result is labelled as a
  research/demo output requiring further review.

## Content honesty

Every AI output on this page (the interactive demo result card and the
sample report) is explicitly a **simulated placeholder for presentation
purposes** — there is no model running behind this site. If you connect
this front-end to a real inference backend later, keep the same
"simulated" language until outputs are backed by validated results.
