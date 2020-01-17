<template>
    <div class="foragingDetail-container box-container">
      <p class="fw f26 mt40">极度下饭的老北京清真名菜-酸溜白菜</p>
        <div class="row ju-b caCollection f14">
          <div class="gray9"><span>2019-08-08</span><span>111次阅读</span> </div>
          <div class="bg-hs text-white caCollection-but  bor-us5">
            <i class="el-icon-star-on "></i>
            <span>已收藏</span>
          </div>
        </div>
        <div class="mainBody column al-c f16">
         <span>
           年轻人装修总是绕不开一个投影情结，但由于投影仪相比电视，安装还是多了很多需要考虑的环节
           加之设计师、装修工人的不给力，因此，在家里安装投影仪还是有各种坑。我家在2017年装修时就
           存在这样的问题，虽然前期跟设计师多次沟通了装投影的相关需求，但由于各种原因，没能在在预
           计的位置按照常规方式安装、使用投影仪。我为了能爽爽的看电影，后期经过各种妥协、修补，最
           终成功用上了投影，这一方案当然也适合前期没有布线安装投影仪的情景。
         </span>
          <img :src="url" />
          <span>
            房子硬装刚刚做完 线跟灯都导致我无法按照一般当时安装投影仪
            装修前跟设计师沟通，说要装投影仪，于是，设计师在客厅天花板上留了根电源线（图片正中
            间天花板的线头），之后在跟设计师沟通后，客厅又选择了这款网红灯。
          </span>
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
            url: require("@/assets/images/banner_2.jpg")
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
