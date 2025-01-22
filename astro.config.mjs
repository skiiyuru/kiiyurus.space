import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import icon from "astro-icon"
import { defineConfig } from "astro/config"

import node from "@astrojs/node"

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://kiiyurus.space",

  prefetch: {
    prefetchAll: true,
  },

  integrations: [tailwind(), icon(), sitemap(), react()],

  image: {
    remotePatterns: [{ protocol: "https" }],
  },

  adapter: node({
    mode: "middleware",
  }),

  output: "server",
})