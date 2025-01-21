import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import icon from "astro-icon"
import { defineConfig } from "astro/config"

import node from "@astrojs/node"

// https://astro.build/config
export default defineConfig({
  site: "https://skiiyuru.netlify.app/",

  prefetch: {
    prefetchAll: true,
  },

  integrations: [tailwind(), icon(), sitemap()],

  image: {
    remotePatterns: [{ protocol: "https" }],
  },

  adapter: node({
    mode: "middleware",
  }),

  output: "server",
})
