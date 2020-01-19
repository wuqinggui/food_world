<template>
  <div id="app">
    <Header @eventTap="summary"></Header>
    <div id="nuxt-container">
      <nuxt v-show="showWhy=='nuxt'" />
      <Search ref="search" v-show="showWhy=='search'" :searchValue="searchValue" :curIndex="curIndex"></Search>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import Search from '@/components/Search.vue'
  import Router from 'vue-router'
  import Vue from 'vue'
  Vue.use(Router)

  export default {
    data(){
      return{
        showWhy:'nuxt',//默认值
        searchValue:'',//
        curIndex:-1,//
      }
    },
    components:{
      Header,
      Footer,
      Search
    },
    created(){},
    mounted () {
      new WOW().init();
    },
    methods:{
      summary:function(obj){
        console.log(obj);
        this.showWhy=obj.type;
        this.searchValue=obj.searchValue||'';
        this.curIndex=obj.curIndex||-1;
      },
    }
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
