import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    maxDuration: 8,
  }),
  build: {
    rollupOptions: {
      external: ["sharp"],
    },
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
