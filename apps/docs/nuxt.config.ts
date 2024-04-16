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
      routes: ['/api/search.json', '/api/component-list', '/api/block-list', '/api/composable-list', '/api/init-list'],
      autoSubfolderIndex: false,
    },
  },
  css: ['~/assets/css/themes.css'],
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/color-mode',
    '@nuxtjs/seo',
    'nuxt-shiki',
    'nuxt-component-meta',
  ],
  content: {
    highlight: {
      theme: {
        default: 'poimandres',
        dark: 'poimandres',
        light: 'poimandres',
      },
      langs: ['vue', 'bash', 'typescript'],
    },
    experimental: {
      search: {
        indexed: true,
      },
    },
  },
  shiki: {
    defaultTheme: 'poimandres',
    bundledLangs: ['vue', 'bash', 'javascript', 'typescript', 'json', 'css', 'html'],
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
