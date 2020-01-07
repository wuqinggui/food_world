<template>
  <div id="app">
    <Header></Header>
    <div id="nuxt-container">
      <nuxt />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import Router from 'vue-router'
  import Vue from 'vue'
  Vue.use(Router)

  export default {
    data(){
      return{
        
      }
    },
    components:{
      Header,
      Footer
    },
    created(){},
    mounted () {
      // this.$nextTick(() => {
      //     //  根据窗口大小获取主内容的最小高度
          // var clientHeight = document.body.clientHeight;
          // var headerHeight = document.getElementById("header").clientHeight;
          // var footerHeight = document.getElementById("footer").clientHeight;
          // var nuxtHeight = clientHeight - headerHeight - footerHeight;
          // if (nuxtHeight > 0) {
          //   document.getElementById("nuxt-container").style.minHeight = nuxtHeight + 'px';
          // }
			// 	})
    },
    methods:{}
  }
</script>

<style lang="scss">
#app{
    width: 100%;
    height: 100%;
}
#nuxt-container{
  min-height: 300px;
}
</style>
