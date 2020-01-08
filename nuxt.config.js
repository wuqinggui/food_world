
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // 轮播图插件
      { rel: 'stylesheet', href: '/idangerous.swiper.css' },
      { rel: 'stylesheet', href: '/swiper.min.css' },
      // 整体页面滚动特效
      { rel: 'stylesheet', href: '/animate.min.css' }
    ],
    script:[
      // 轮播图插件
      {src:"/idangerous.swiper.min.js"},
      {src:"/swiper.min.js"},
      // 整体页面滚动特效
      {src:"/wow.min.js"}
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
    // 'element-ui/lib/theme-chalk/index.css', // element-variables.scss已更好主题颜色，此次无需引入 Element 编译好的 CSS 文件
    // 项目中的sass文件
    {src:'~assets/css/export.scss', lang:'scss'}, //lang指定scss 而非sass
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    { src: "~/plugins/vue-lazyload.js" ,ssr: false},
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
