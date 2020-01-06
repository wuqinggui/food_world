<template>
  <div id="app">
    <Header></Header>
    <nuxt />
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
    mounted () {},
    methods:{}
  }
</script>

<style lang="scss">
#app{
    min-width: 1024px;
}
</style>
