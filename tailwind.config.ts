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
        purewhite: "#FFFFFF",
        ivory: {
          50: "#FAF9F6",
          100: "#F8F7F4",
          200: "#F2F0EB",
        },
        surface: "#F8F7F4",
        espresso: {
          900: "#201C1A",
        },
        warmgray: {
          400: "#9E958F",
          600: "#6B625D",
        },
        burgundy: {
          50: "#FDF2F4",
          100: "#FBE5E8",
          800: "#7A1C2E",
          900: "#5F1423",
        },
        divider: "#E7E2DE",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Neue Haas Grotesk", "Suisse Intl", "Helvetica Neue", "sans-serif"],
        serif: ["Newsreader", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
