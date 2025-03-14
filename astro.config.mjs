import sitemap from '@astrojs/sitemap'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

import react from '@astrojs/react'

import glsl from 'vite-plugin-glsl'

import netlify from '@astrojs/netlify'

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
    plugins: [glsl()],
  },

  adapter: netlify(),
  output: 'server',
})
