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
        sans: ["Avenir Next", "Century Gothic", "Segoe UI", "sans-serif"],
        display: ["Avenir Next", "Century Gothic", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(var(--shadow-rgb), 0.18)",
      },
      backgroundImage: {
        "mesh-glow":
          "radial-gradient(circle at 76% 16%, rgba(196, 71, 50, 0.16), transparent 34%), radial-gradient(circle at 8% 76%, rgba(49, 95, 166, 0.16), transparent 30%), linear-gradient(115deg, transparent 0 56%, rgba(49, 95, 166, 0.08) 56% 59%, rgba(196, 71, 50, 0.1) 59% 62%, transparent 62%)",
      },
    },
  },
  plugins: [],
};

export default config;
