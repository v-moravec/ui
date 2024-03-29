// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  experimental: {
    typedPages: true,
  },
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
      autoSubfolderIndex: false,
    },
  },
  css: ['~/assets/css/themes.css'],
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxtjs/color-mode', 'nuxt-icon', '@nuxtjs/seo'],
  content: {
    highlight: {
      theme: {
        default: 'aurora-x',
        dark: 'aurora-x',
        light: 'aurora-x',
      },
      langs: ['vue'],
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
    trailingSlash: false,
  },
  devtools: {
    enabled: true,
  },
})
