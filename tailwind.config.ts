import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#020817",
          900: "#0a0f1e",
          800: "#0d1426",
          700: "#101a30",
          600: "#142038",
        },
        cyan: {
          glow: "#00d4ff",
          DEFAULT: "#06b6d4",
        },
        green: {
          neon: "#00ff88",
          DEFAULT: "#22c55e",
        },
        glass: {
          DEFAULT: "rgba(255,255,255,0.03)",
          border: "rgba(255,255,255,0.08)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "glow-cyan": "radial-gradient(ellipse at center, rgba(0,212,255,0.15) 0%, transparent 70%)",
        "glow-green": "radial-gradient(ellipse at center, rgba(0,255,136,0.1) 0%, transparent 70%)",
        "grid-dark": "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "fade-in": "fade-in 0.8s ease-out",
        "border-spin": "border-spin 6s linear infinite",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "border-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        "glow-cyan": "0 0 40px rgba(0,212,255,0.3)",
        "glow-green": "0 0 40px rgba(0,255,136,0.2)",
        "card-glass": "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
        "btn-primary": "0 0 30px rgba(0,212,255,0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
