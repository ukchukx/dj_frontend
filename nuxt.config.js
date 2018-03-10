const pkg = require('./package');
const excludes = ['vue', 'vuex', 'vue-router', 'nuxt', 'express', 'body-parser', 'request',
 'source-map-support'];
const vendor = Object.keys(pkg.dependencies).filter(k => excludes.indexOf(k) === -1);
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';
const baseURL = isProd ? 'https://dj.moview.com.ng/api' : 'http://localhost:3030';

module.exports = {
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
  loading: { color: '#6c757d' },
  /*
  ** Build configuration
  */
  modules: [
    ['bootstrap-vue/nuxt', { css: false }],
    ['@nuxtjs/axios', { baseURL }],
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
