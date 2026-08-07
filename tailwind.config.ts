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
        // Deep Navy Blue – primary brand color (use as `bg-navy`, `text-navy`)
        navy: {
          50:  "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#0a1f44",
          700: "#081732",
          800: "#060f22",
          900: "#030811",
          DEFAULT: "#0a1f44",
        },
        // Royal Blue – secondary (use as `bg-royal`, `text-royal`)
        royal: {
          light: "#3b82f6",
          dark:  "#1e40af",
          DEFAULT: "#1a56db",
        },
        // Golden Yellow – accent (use as `bg-gold`, `text-gold`)
        gold: {
          light:   "#fcd34d",
          dark:    "#d97706",
          DEFAULT: "#f59e0b",
        },
        success: "#16a34a",
        warning: "#ea580c",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        sans:    ["var(--font-inter)",    "sans-serif"],
      },
      backgroundImage: {
        "gradient-navy":  "linear-gradient(135deg, #0a1f44 0%, #1a56db 100%)",
        "gradient-gold":  "linear-gradient(135deg, #f59e0b 0%, #fcd34d 100%)",
        "gradient-light": "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)",
      },
      boxShadow: {
        glass:   "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        premium: "0 20px 60px -10px rgba(10, 31, 68, 0.3)",
        gold:    "0 10px 30px -5px rgba(245, 158, 11, 0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
