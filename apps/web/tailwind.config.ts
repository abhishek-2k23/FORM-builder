import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./providers/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        spider: {
          red: "#D90429",
          redGlow: "#FF1744",
          crimson: "#8B0000",
          black: "#050505",
          dark: "#0A0A0A",
          surface: "#111111",
          silver: "#C0C0C0",
          chrome: "#E0E0E0",
          white: "#F5F5F5",
        },
        // Backward compat aliases
        verse: {
          red: "#D90429",
          redHover: "#FF1744",
          blue: "#C0C0C0",
          purple: "#8B0000",
          cyan: "#C0C0C0",
          yellow: "#FF1744",
          midnight: "#050505",
          deep: "#050505",
          surface: "#111111",
        },
        konoha: {
          orange: "#D90429",
          orangeHover: "#FF1744",
          chakra: "#C0C0C0",
          akatsuki: "#8B0000",
          gold: "#FF1744",
          forest: "#1A1A1A",
          ink: "#050505",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        heading: ["Bebas Neue", "Anton", "system-ui", "sans-serif"],
        sans: ["Satoshi", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      keyframes: {
        "web-pulse": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.02)" },
        },
        "web-spread": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "scale(1.2)", opacity: "0" },
        },
        "node-float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "glow-breathe": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(217, 4, 41, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(217, 4, 41, 0.6)" },
        },
        "strand-flow": {
          "0%": { strokeDashoffset: "100" },
          "100%": { strokeDashoffset: "0" },
        },
        "core-spin": {
          to: { transform: "rotate(360deg)" },
        },
        "chrome-sweep": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "web-vibrate": {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-1px)" },
          "75%": { transform: "translateX(1px)" },
        },
        "red-pulse": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "hanging-sway": {
          "0%, 100%": { transform: "rotate(-4deg) translateX(-4px)" },
          "50%": { transform: "rotate(4deg) translateX(4px)" },
        },
        "web-spread-in": {
          "0%": { opacity: "0", transform: "scale(0.85)" },
          "60%": { opacity: "1" },
          "100%": { opacity: "0.18", transform: "scale(1)" },
        },
        "strand-elastic": {
          "0%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(-3px)" },
          "60%": { transform: "translateY(2px)" },
          "100%": { transform: "translateY(0)" },
        },
        "hero-breathe": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.015)" },
        },
        "swing-arc": {
          "0%, 100%": { transform: "rotate(-8deg)" },
          "50%": { transform: "rotate(8deg)" },
        },
        "crawl-breathe": {
          "0%, 100%": { transform: "scale(1) translateY(0)" },
          "50%": { transform: "scale(1.02) translateY(-2px)" },
        },
        "shooter-lean": {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        "strand-draw": {
          "0%": { strokeDashoffset: "300" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "web-pulse": "web-pulse 3s ease-in-out infinite",
        "web-spread": "web-spread 2s ease-out infinite",
        "node-float": "node-float 4s ease-in-out infinite",
        "glow-breathe": "glow-breathe 2.5s ease-in-out infinite",
        "strand-flow": "strand-flow 2s linear infinite",
        "core-spin": "core-spin 20s linear infinite",
        "chrome-sweep": "chrome-sweep 3s linear infinite",
        "web-vibrate": "web-vibrate 0.3s ease-in-out",
        "red-pulse": "red-pulse 2s ease-in-out infinite",
        "spin-slow": "core-spin 8s linear infinite",
        "hanging-sway": "hanging-sway 4s ease-in-out infinite",
        "web-spread-in": "web-spread-in 2s ease-out forwards",
        "strand-elastic": "strand-elastic 0.5s cubic-bezier(0.34,1.56,0.64,1)",
        "hero-breathe": "hero-breathe 4s ease-in-out infinite",
        "swing-arc": "swing-arc 2.5s ease-in-out infinite",
        "crawl-breathe": "crawl-breathe 3s ease-in-out infinite",
        "shooter-lean": "shooter-lean 3s ease-in-out infinite",
        "strand-draw": "strand-draw 0.8s cubic-bezier(0.34,1.56,0.64,1) forwards",
        // Backward compat
        "chakra-pulse": "web-pulse 3s ease-in-out infinite",
        "leaf-float": "node-float 6s ease-in-out infinite",
        "portal-spin": "core-spin 20s linear infinite",
        shimmer: "chrome-sweep 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
