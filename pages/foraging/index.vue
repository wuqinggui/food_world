<template>
    <div class="foraging-container box-container mt20">
        <div class="foraging-city row">
           <div class="select-city" @click="selectCityStatus=!selectCityStatus">
             <span>城市选择：</span>
              <span>广州</span>
              <i :class="[selectCityStatus?'shoewRotate1':'','el-icon-arrow-up']"></i>
           </div>
           <div class="hot-city ml100">
              <span>热门城市:</span>
              <span v-for="item in hotCityArr" :key="item.id">
                {{ item.name }}
              </span>
           </div>
           <div :class="[selectCityStatus?'fadeIn':'fadeOut','selectCity-list']"  >
             111111
           </div>
        </div>
        <div>222</div>
        <!-- 加载动效 -->
        <Loading v-if="showLoading"></Loading>
    </div>
</template>

<script>
import Loading from '@/components/Loading'
export default {
    name: 'index',
    data () {
        return {
            // 全屏加载
            showLoading:false,
            selectCityStatus:false,//城市选择将头状态
            hotCityArr:[{name:'广州',id:'1'},{name:'武汉',id:'2'},],//热门城市数组
        }
    },
    components:{
      Loading
    },
    created () {
        this.showLoading = true;
        setTimeout(()=>{
             this.showLoading = false;
        },100)
    },
    mounted () {

    },
    methods: {

    },
    watch: {

    }
}
</script>

<style lang="scss">

</style>
