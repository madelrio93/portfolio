import defaultTheme from "tailwindcss/defaultTheme";
import colors, { slate } from "tailwindcss/colors";
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      ...colors,
      primary: {
        light: "#6b7280",
        DEFAULT: "#13151a",
        title: "#1e3a8a",
        subtitle: "#6b7280",
        accent: "#9C27B0",
        piper: "#1d2432",
      },
      secondary: {
        light: "#f3f4f6",
        DEFAULT: "#9C9C9C",
        dark: "#d1d5db",
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
