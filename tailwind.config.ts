import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        border: "var(--border)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        card: "var(--card)",
      },
      fontFamily: {
        sans: ["Satoshi", "Avenir Next", "Segoe UI", "sans-serif"],
        display: ["Clash Display", "Avenir Next", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(3, 7, 18, 0.32)",
      },
      backgroundImage: {
        "mesh-glow":
          "radial-gradient(circle at top, rgba(66, 219, 191, 0.16), transparent 34%), radial-gradient(circle at right, rgba(245, 158, 11, 0.12), transparent 28%)",
      },
    },
  },
  plugins: [],
};

export default config;
