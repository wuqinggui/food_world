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
      new WOW().init();
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
