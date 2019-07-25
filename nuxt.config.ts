import NuxtConfiguration from '@nuxt/config'

export default {
  mode: 'spa',
  head: {
    title: 'Freevue - POP',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, user-scalable=no, initial-scale=1.0' },
      { name: 'theme-color', content: '#72cc96' },
      {
        hid: 'description',
        name: 'description',
        content: "POP! Freevue's Small Project"
      },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'apple-mobile-web-app-title', content: 'Freevue POP' },
    ],
    link: [
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/images/icons/icon-152x152.png' },
      { rel: 'manifest', href: '/manifest.json' },
    ],
  },
  loading: { color: '#fff' },
  css: [
    '~assets/css/default.css',
    'assets/css/transition.css'
  ],
  plugins: [],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module'
  ],
  axios: {},
  build: {
    extend(config, ctx) {}
  },
  router: {
    mode: 'history'
  }
} as NuxtConfiguration;
