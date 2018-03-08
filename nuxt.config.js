const pkg = require('./package');
const excludes = ['vue', 'vuex', 'vue-router', 'nuxt', 'express', 'body-parser', 'request',
 'source-map-support'];
const vendor = Object.keys(pkg.dependencies).filter(k => excludes.indexOf(k) === -1);
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Decision Journal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Decision journal' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  modules: [
    ['bootstrap-vue/nuxt', { css: false }],
    ['@nuxtjs/axios', { baseURL: 'http://localhost:3030', debug: !isProd }],
  ],
  build: {
    vendor,
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    '~/plugins/axios'
  ],
  css: [
  ]
}
