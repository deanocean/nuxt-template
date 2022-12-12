export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-template',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },

      { hid: 'description', name: 'description', content: 'サイトの説明' },
      { hid: 'keywords', name: 'keywords', content: 'キーワード1,キーワード2,キーワード3' },

      { hid: 'og:title', property: 'og:title', content: 'サイトタイトル' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'サイト名' },
      { hid: 'og:description', property: 'og:description', content: 'サイトの説明' },
      { hid: 'og:type', property: 'og:type', content: 'サイトのタイプ' },
      { hid: 'og:url', property: 'og:url', content: 'サイトURL' },
      { hid: 'og:image', property: 'og:image', content: 'サイトURL' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'サイトURL' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css' }
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
        defer: true,
        // body: true
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/scss/style"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/js/index.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@aceforth/nuxt-optimized-images',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // publicPath: 'assets/',
    // filenames: {
    //   app: ({ isDev, isModern }) => isDev ? `[name]${isModern ? '.modern' : ''}.js` : `js/[contenthash:7]${isModern ? '.modern' : ''}.js`,
    //   chunk: ({ isDev, isModern }) => isDev ? `[name]${isModern ? '.modern' : ''}.js` : `js/[contenthash:7]${isModern ? '.modern' : ''}.js`,
    // }
  },

  optimizedImages: {
    optimizeImages: true,
    // optimizeImagesInDev: true,
  },

  storybook: {
    // stories: [],
    // parameters: {
    //   viewMode: 'docs'
    // },
    // webpackFinal (config) {
    //   return config
    // }
  }
}
