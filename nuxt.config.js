export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'MET Vibrant Drawings',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}]
  },

  components: true,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['./assets/styles/index'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/masonry'],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['nuxt-windicss'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:3001'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // https://windicss.org/integrations/nuxt.html#other-options
  windicss: {}
}
