<template>
    <div class="index-container">
        <!-- banner轮播图 -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <!-- <a :href="bannerItem.link" target="_blank" class="swiper-slide" v-for="(bannerItem, bannerIndex) in bannerList"  :key="bannerIndex" :style="{backgroundImage:'url('+ bannerItem.pic_url + ')',backgroundSize:'100% 100%',height:swiperHeight+'px'}"></a> -->
                <!-- <a href="javascript:void(0);" class="swiper-slide" v-for="(bannerItem, bannerIndex) in bannerList"  :key="bannerIndex" :style="{backgroundImage:'url('+ bannerItem.pic_url + ')',backgroundSize:'100% 100%',height:swiperHeight+'px'}"></a> -->
                <div class="swiper-slide" v-for="(bannerItem, bannerIndex) in bannerList"  :key="bannerIndex" :style="{height:swiperHeight+'px'}">
                    <img v-lazy="bannerItem.pic_url" alt="" class="" :style="{width: '100%', height:swiperHeight+'px'}">
                </div>
            </div>
            <!-- 分页器导航 -->
            <div class="swiper-pagination"></div>
            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev swiper-button-white"></div>
            <div class="swiper-button-next swiper-button-white"></div>
        </div>

        <!-- 菜谱 -->
        <div>
            <!-- <div>
                <div>精选菜谱</div>
                <div>查看更多<div class="right-arrow"></div></div>
            </div> -->
        </div>

        <!-- 食材 -->
        <div>

        </div>

        <!-- 哪里好吃 -->
        <div>

        </div>
        
        <!-- 资讯 -->
        <div>

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
            screenWidth:'', //屏幕宽度,默认值,一定要
            swiperHeight: '',
            bannerList: [
                {
                    id: 1,
                    link: 'https://www.baidu.com/',
                    pic_url: require("@/assets/images/banner_1.jpg")
                },
                {
                    id: 2,
                    link: 'https://www.baidu.com/',
                    pic_url: require("@/assets/images/banner_2.jpg")
                },
                {
                    id: 3,
                    link: 'https://www.baidu.com/',
                    pic_url: require("@/assets/images/banner_3.jpg")
                }
            ]
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
        this.screenWidth =  document.body.scrollWidth;
        this.swiperInit();
        var _this = this;
        //  根据窗口大小获取屏幕宽度
        window.onresize = () => {
            return (() => {
                window.screenWidth = document.body.scrollWidth
                _this.screenWidth = window.screenWidth
            })()
        }
    },
    methods: {
        // swiper初始化
        swiperInit () {
            let _this = this;
            var mySwiper = new Swiper('.swiper-container', {
                // loop : true, // 循环展示
                speed:300,
                autoplay: 3000,
                autoplayDisableOnInteraction: false,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                pagination: '.swiper-pagination',
                paginationClickable: true
            });
            // 如果只有一个slide就销毁swiper
            if(mySwiper.slides.length<=1){
                mySwiper.destroy();
            }
        },
        // 根据不同屏幕获取首页banner高度
        getBannerHeight () {
            this.swiperHeight = parseInt((360/1024)*(this.screenWidth));
        }
    },
    watch: {
        screenWidth (val) {
            if (!this.timer) {
                this.screenWidth = val
                this.$nextTick(()=>{
                     this.getBannerHeight();
                })
                this.timer = true
                let _this = this
                setTimeout(function () {
                    _this.timer = false
                }, 400)
            }
        }
    }
}
</script>

<style lang="scss">

</style>
