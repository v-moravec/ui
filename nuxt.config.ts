// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  components: {
    dirs: [
      {
        path: '~/components/ui',
        global: true,
        prefix: 'Ui',
      },
      '~/components',
    ],
  },
  nitro: {
    prerender: {
      routes: ['/api/search.json'],
    },
  },
  css: ['~/assets/css/themes.css'],
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxtjs/color-mode', 'nuxt-icon', '@nuxtjs/seo'],
  content: {
    highlight: {
      theme: 'aurora-x',
    },
    experimental: {
      search: {
        indexed: true,
      },
    },
  },
  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: '',
  },
  site: {
    url: 'https://ui.vojtamoravec.cz',
    name: 'v-moravec/ui',
    description: 'Flexible collection of reusable components and themes. Make it yours.',
  },
  devtools: {
    enabled: true,
  },
})
