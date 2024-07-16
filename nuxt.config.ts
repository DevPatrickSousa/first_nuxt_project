// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@primevue/nuxt-module', "@nuxtjs/tailwindcss", "@pinia-plugin-persistedstate/nuxt", "@vesp/nuxt-fontawesome"],
  imports: {
    dirs: ['stores']
  },
  primevue: {
    importTheme: { from: '@/theme.js' },
    options: {
      ripple: true,
      cssLayer: {
        name: 'primevue',
        order: 'tailwind-base, primevue, tailwind-utilities'
      }
    },
  },
  css: [
    'primeicons/primeicons.css'
  ],
  fontawesome: {
    icons: {
      solid: ['sailboat', 'plane'],
      regular: []
    }
  }
})