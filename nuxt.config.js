import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({

  bridge: {
    vite: true,
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  devtools: true,
  sourcemap: true,
  productionTip: false,
  telemetry: true,

  publicRuntimeConfig: {
    // Public vars available to the frontend.
    test: 'test',
  },

  privateRuntimeConfig: {
    // Private vars available only to the server.
    // e.g. apiSecret: process.env.API_SECRET
  },

  manifest: {
    name: 'Nuxt Bridge Debug',
    description: 'Reproductions for Nuxt Bridge bugs',
    display: 'standalone',
    orientation: 'portrait',
    lang: 'en',
    start_url: '/?standalone=true',
    scope: '/',
    crossorigin: 'use-credentials', // Required to make basic auth work.
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-bridge-debug',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
    '@nuxtjs/sentry',
    '@nuxtjs/toast',
    // 'nuxt-stripejs',
    'portal-vue/nuxt',
    'v-wave/nuxt',
  ],

  buildModules: [
    '@nuxtjs/date-fns',
    '@nuxtjs/fontawesome',
    '@nuxtjs/style-resources',
    '@nuxt/postcss8',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  router: {
    base: '/',
    middleware: ['auth'],
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
    /* extendRoutes(routes) {
      routes.push({
        path: '/',
        redirect: '/test',
      })
    } */
  },
})
