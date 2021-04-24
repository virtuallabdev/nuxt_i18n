import colors from 'vuetify/es5/util/colors'

export default {
  ssr: true,
  target: 'static',

  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
    
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ,['nuxt-i18n', {
      strategy: 'prefix_except_default',
      locales: [
        { name: 'Bulgarian', code: 'bg', iso: 'bg-BG', file: 'bg-BG.js' },
        { name: 'Russian', code: 'ru', iso: 'ru-RU', file: 'ru-RU.js' },
        { name: 'English', code: 'en', iso: 'en-US', file: 'en-US.js' }
      ]
      , lazy: true
      , langDir: 'locales/'
      , defaultLocale: 'en'
      , seo: true
    }]
  ],


  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  }


  /*
  ** Static HTML generator
  */
  , generate: {
    interval: 100
    ,crawler: false
    ,fallback: '404.html'
    ,gzip: true
  }


  /*
  ** Build configuration
  */
  , build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
