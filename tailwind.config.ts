import type { Config } from "tailwindcss";
import scrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "360px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },

      transform: {},
    },
  },
  plugins: [
    scrollbarHide,

    function ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, any>) => void;
    }) {
      addUtilities({
        ".perspective-100": {
          perspective: "1000px",
        },
        ".rotate-x-10": {
          transform: "rotatex(10deg)",
        },
        ".rotate-x-20": {
          transform: "rotatex(20deg)",
        },
        ".rotate-x-25": {
          transform: "rotatex(25deg)",
        },
        ".rotate-x-30": {
          transform: "rotatex(30deg)",
        },
      });
    },
  ],
} satisfies Config;
