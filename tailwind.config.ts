import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ivory: "#FBF7F1",
        card: "#FFFCFA",
        ink: "#4A4038",
        muted: "#6F645C",
        honey: "#C4A882",
        gold: "#8B6240",
        sand: "#F3EBE1",
        bark: "#6B5748",
        line: "#E7DCCE",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        display: ["var(--font-nunito)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
