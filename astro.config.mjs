import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

import glsl from 'vite-plugin-glsl'

// https://astro.build/config
export default defineConfig({
  site: 'https://kiiyurus.space',

  prefetch: {
    prefetchAll: true,
  },

  integrations: [icon(), sitemap(), react()],

  image: {
    remotePatterns: [{ protocol: 'https' }],
  },

  vite: {
    plugins: [glsl(), tailwindcss()],
  },

  adapter: vercel(),
  output: 'server',
})
