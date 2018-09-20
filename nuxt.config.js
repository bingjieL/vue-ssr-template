module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'website',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' },
      { property: 'og:title', content: 'website'},
      { property: 'og:type', content: 'website'},
      { property: 'og:image', content: 'www.baidu.com/img/bd_logo1.png'},
      { property: 'og:description', content: 'website'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css:[
    'element-ui/lib/theme-chalk/index.css'
  ],
  // 配置页面过渡效果
  transition: {
    name: 'page',
    mode: 'out-in',
    beforeEnter (el) {
      // console.log('Before enter...')
    }
  },
  router: {
    base: '/',
    scrollBehavior: function (to, from, savedPosition) {
      // 所有页面跳转后滚动至顶部
      return { x: 0, y: 0 }
    },
    // middleware: ['default', 'check-bower']
  },
 
  plugins: [
    '~plugins/element-import.js'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
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
    },
    vendor: ['axios', 'element-ui', 'babel-polyfill'],
    babel: {
      presets: ['es2015', 'stage-0'],
      plugins: ['transform-runtime']
    },
    postcss: [
      require('autoprefixer')({
        browsers: ['last 3 versions']
      })
    ]
  },
  env: {
    baseUrl: 'http://192.168.2.119:8080'
  },
  modules: [
    '@nuxtjs/proxy'
  ],
  proxy: [
      ['/v1', { 
        context: ["/v1"],
        changeOrigin: false,
        secure: false,
        target: 'http://192.168.2.119:8080'
       }
      ]
  ]
}

