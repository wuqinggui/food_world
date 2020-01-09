import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

export default () => {
    Vue.use(VueLazyload, {
        loading: require('@/assets/images/loadding.gif'),
        preLoad: 1.3, //预加载的宽高比
        attempt: 1 //尝试加载次数
      })
}
