import defaultTheme from "tailwindcss/defaultTheme";
import colors, { slate } from "tailwindcss/colors";
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '0rem',
      },
      screens: {
        sm: "100%",
        md: "64rem",
      },
    },
    colors: {
      ...colors,
      primary: {
        light: "#FFBD39",
        dark: "#FFBD39",
      },
      background: {
        light: "#f5f9fc",
        dark: "#000000",
      },
      paper: {
        light: "#fbfbfb",
        dark: "#080808",
      },
      color: {
        light: "#3f3f46",
        dark: "#d4d4d8",
      },
    },
    extend: {
      fontFamily: {
        sans: ["IBM Plex Mono", ...defaultTheme.fontFamily.sans],
        serif: ["Raleway Variable", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
