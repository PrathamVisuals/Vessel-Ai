/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: "#060A10",
          soft: "#080D14",
        },
        panel: {
          DEFAULT: "#0D141D",
          raised: "#121B27",
          line: "#1D2A38",
        },
        ink: {
          DEFAULT: "#EAF2F8",
          muted: "#7C93A8",
          faint: "#6A8296",
        },
        cyan: {
          scan: "#34D8E8",
        },
        blue: {
          deep: "#3E7BFA",
        },
        amber: {
          flag: "#E8A34D",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'IBM Plex Sans'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(52, 216, 232, 0.35)",
        "glow-lg": "0 0 80px -12px rgba(52, 216, 232, 0.3)",
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 40px -20px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(rgba(124,147,168,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(124,147,168,0.08) 1px, transparent 1px)",
      },
      keyframes: {
        "scan-sweep": {
          "0%": { transform: "translateY(-10%)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(110%)", opacity: "0" },
        },
        "pulse-node": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.4)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "drift": {
          "0%, 100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(-8px, 10px)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "scan-sweep": "scan-sweep 3.2s ease-in-out infinite",
        "pulse-node": "pulse-node 2.4s ease-in-out infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        drift: "drift 9s ease-in-out infinite",
        "spin-slow": "spin-slow 40s linear infinite",
      },
    },
  },
  plugins: [],
};
