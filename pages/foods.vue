<template>
    <div class="foods-container">
        <div class="">
            <!-- 内容 -->
            我是食材页面
        </div>
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
