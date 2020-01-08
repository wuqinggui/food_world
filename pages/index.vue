<template>
    <div class="index-container">
        <div v-if="!showLoading">
            <!-- banner轮播图 -->
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <!-- <a :href="bannerItem.link" target="_blank" class="swiper-slide" v-for="(bannerItem, bannerIndex) in bannerList"  :key="bannerIndex" :style="{backgroundImage:'url('+ bannerItem.pic_url + ')',backgroundSize:'100% 100%',height:swiperHeight+'px'}"></a> -->
                    <!-- <a href="javascript:void(0);" class="swiper-slide" v-for="(bannerItem, bannerIndex) in bannerList"  :key="bannerIndex" :style="{backgroundImage:'url('+ bannerItem.pic_url + ')',backgroundSize:'100% 100%',height:swiperHeight+'px'}"></a> -->
                    <div class="swiper-slide" v-for="(bannerItem, bannerIndex) in bannerList"  :key="bannerIndex" :style="{height:swiperHeight+'px'}">
                        <img v-lazy="bannerItem.pic_url" alt="" class="img" :style="{height:swiperHeight+'px'}">
                    </div>
                </div>
                <!-- 分页器导航 -->
                <div class="swiper-pagination"></div>
                <!-- 如果需要导航按钮 -->
                <div class="swiper-button-prev swiper-button-white"></div>
                <div class="swiper-button-next swiper-button-white"></div>
            </div>

            <div class="box-container pt10 pb50">
                <!-- 菜谱 -->
                <div class="menu-box">
                    <div class="row mt20 mb20">
                        <div class="flex-1 verticle-center">
                            <div class="fw f24 gray3 lh200">精选菜谱</div>
                            <div class="ml20 mr20">
                                <span class="radius20 f14 gray3 bg-grayf4 pt5 pb5 pl15 pr15 is-click mr10 ml10" @click="goMenuDetail(menuTabItem)" v-for="(menuTabItem, menuTabIndex) in menuTabList" :key="menuTabIndex">
                                    {{menuTabItem.name}}
                                </span>
                            </div>
                        </div>
                        <div class="is-click gray6 verticle-center" @click="goMenu">
                            <div class="f14">查看更多</div>
                            <div class="right-arrow"></div>
                        </div>
                    </div>
                    <ul class="clearfix">
                        <li class="pull-left" v-for="(menuItem, menuIndex) in menuList" :key="menuIndex">
                            <div class="menu-menuItem mb20 is-click" :class="((menuIndex + 1)%4) > 0 ? 'menu-menuItem-mr' : ''" @click="goMenuDetail(menuItem)">
                                <div class="transition-show-bg">
                                    <img v-lazy="menuItem.imgUrl" alt="" class="img radius4">
                                    <div class="transition-bg">{{menuItem.description}}</div>
                                </div>
                                <div class="f14 gray3 p5">{{menuItem.name}}</div>
                            </div>
                        </li>
                    </ul>
                </div>

                <!-- 食材 -->
                <div class="foods-box">
                    <div class="row mt20 mb20">
                        <div class="flex-1 verticle-center">
                            <div class="fw f24 gray3 lh200">热门食材</div>
                        </div>
                        <div class="is-click gray6 verticle-center" @click="goFoods">
                            <div class="f14">查看更多</div>
                            <div class="right-arrow"></div>
                        </div>
                    </div>
                    <ul class="clearfix">
                        <li class="pull-left" v-for="(foodItem, foodIndex) in foodList" :key="foodIndex">
                            <div class="foods-foodsItem mb25 is-click" :class="((foodIndex + 1)%7) > 0 ? '' : 'mr0'" @click="goFoodsDetail(foodItem)">
                                <img v-lazy="foodItem.imgUrl" alt="" class="img radius4 transition-big">
                                <div class="f14 gray3 text-center">{{foodItem.name}}</div>
                            </div>
                        </li>
                    </ul>
                </div>

                <!-- 哪里好吃 -->
                <div class="foraging-box">
                    <div class="row mt20 mb20">
                        <div class="flex-1 verticle-center">
                            <div class="fw f24 gray3 lh200">哪里好吃</div>
                            <div class="ml20 mr20">
                                <span class="radius20 f14 gray3 bg-grayf4 pt5 pb5 pl15 pr15 is-click mr10 ml10" @click="goForaging" v-for="(foragingTabItem, foragingTabIndex) in foragingTabList" :key="foragingTabIndex">
                                    {{foragingTabItem.city_name}}
                                </span>
                            </div>
                        </div>
                        <div class="is-click gray6 verticle-center" @click="goForaging">
                            <div class="f14">查看更多</div>
                            <div class="right-arrow"></div>
                        </div>
                    </div>
                    <ul class="clearfix">
                        <li class="pull-left" v-for="(foragingItem, foragingIndex) in foragingList" :key="foragingIndex">
                            <div class="foraging-foragingItem mb20 is-click radius4" :class="((foragingIndex + 1)%4) > 0 ? 'foraging-foragingItem-mr' : ''" @click="goForagingDetail(foragingItem)">
                                <img v-lazy="foragingItem.imgUrl" alt="" class="img transition-big">
                                <div class="foraging-foragingItem-bottom pl10 pr10 pb5">
                                    <div class="f14 gray3 text-overflow ">{{foragingItem.title}}</div>
                                    <div class="row ju-b verticle-center lh200">
                                        <div class="f12 gray6">{{foragingItem.city_name}}</div>
                                        <div>
                                            <i class="el-icon-star-on text-red" v-if="foragingItem.collect_state && foragingItem.collect_state == 1"></i>
                                            <i class="el-icon-star-off" v-else></i>
                                            <span class="f12 gray3">{{foragingItem.collect_num}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                
                <!-- 资讯 -->
                <div class="information-box">
                    <div class="row mt20 mb20">
                        <div class="flex-1 verticle-center">
                            <div class="fw f24 gray3 lh200">精彩资讯</div>
                        </div>
                        <div class="is-click gray6 verticle-center" @click="goInformation">
                            <div class="f14">查看更多</div>
                            <div class="right-arrow"></div>
                        </div>
                    </div>
                    <div class="row mb30 is-click" @click="goInformationDetail(informationData)">
                        <img v-lazy="informationData.imgUrl" alt="" class="informationData-img transition-big">
                        <div class="flex-1 p15 column ju-b">
                            <div class="f16 gray3 lh150">{{informationData.title}}</div>
                            <div class="f12 gray9 lh200">{{informationData.date}}</div>
                        </div>
                    </div>
                    <ul class="clearfix">
                        <li class="col-xs-6 is-click text-overflow f14 gray3 lh200 pl10 pt5 pb5 pr50" v-for="(informationItem, informationIndex) in informationList" :key="informationIndex" @click="goInformationDetail(informationItem)">
                            {{ ' · ' + informationItem.title}}
                        </li>
                    </ul>
                </div>
            </div>
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
            bannerList: [],
            menuTabList: [],
            menuList: [],
            foodList: [],
            foragingTabList: [],
            foragingList: [],
            informationData: {},
            informationList: []
        }
    },
    components:{
      Loading
    },
    created () {},
    mounted () {
        this.showLoading = true;
        this.screenWidth =  document.body.scrollWidth;
        this.getBannerHeight();
        this.getData();
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
        // 获取数据
        getData () {
            this.bannerList = [
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
            ],
            this.menuTabList = [
                {
                    id: 1,
                    name: '红烧排骨'
                },
                {
                    id: 2,
                    name: '酸辣香菇豆腐汤'
                },
                {
                    id: 3,
                    name: '肉末茄子'
                },
                {
                    id: 4,
                    name: '香辣凤爪'
                },
                {
                    id: 5,
                    name: '宫保鸡丁'
                },
            ],
            this.menuList = [
                {
                    id: 1,
                    imgUrl: require("@/assets/images/food-1.jpg"),
                    name: '黑椒金针菇焖鸡',
                    description: '文字描述文字描述文字描述文字描述'
                },
                {
                    id: 2,
                    imgUrl: require("@/assets/images/food-2.jpg"),
                    name: '牛肉粒炒饭',
                    description: '好好好好好好好好好好好好好好好好好好好好好好好好'
                },
                {
                    id: 3,
                    imgUrl: require("@/assets/images/food-3.jpg"),
                    name: '枸杞薏米粥',
                    description: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
                },
                {
                    id: 4,
                    imgUrl: require("@/assets/images/food-1.jpg"),
                    name: '老醋花生',
                    description: '文字描述文字描述文字描述文字描述'
                },
                {
                    id: 5,
                    imgUrl: require("@/assets/images/food-2.jpg"),
                    name: '鲜虾什锦豆腐',
                    description: '好好好好好好好好好好好好好好好好好好好好好好好好'
                },
                {
                    id: 6,
                    imgUrl: require("@/assets/images/food-3.jpg"),
                    name: '土家酱香饼',
                    description: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
                },
                {
                    id: 7,
                    imgUrl: require("@/assets/images/food-2.jpg"),
                    name: '蛤蜊蒸蛋',
                    description: '好好好好好好好好好好好好好好好好好好好好好好好好'
                },
                {
                    id: 8,
                    imgUrl: require("@/assets/images/food-3.jpg"),
                    name: '炸酥肉',
                    description: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
                }
            ],
            this.foodList = [
                {
                    id: 1,
                    imgUrl: require("@/assets/images/food-4.jpg"),
                    name: '土豆'
                },
                {
                    id: 2,
                    imgUrl: require("@/assets/images/food-5.jpg"),
                    name: '排骨'
                },
                {
                    id: 3,
                    imgUrl: require("@/assets/images/food-6.jpg"),
                    name: '猪肉'
                },
                {
                    id: 4,
                    imgUrl: require("@/assets/images/food-4.jpg"),
                    name: '牛肉'
                },
                {
                    id: 5,
                    imgUrl: require("@/assets/images/food-5.jpg"),
                    name: '鱼'
                },
                {
                    id: 6,
                    imgUrl: require("@/assets/images/food-6.jpg"),
                    name: '鸡'
                },
                {
                    id: 7,
                    imgUrl: require("@/assets/images/food-4.jpg"),
                    name: '鸭'
                }
            ],
            this.foragingTabList = [
                {
                    id: 1,
                    city_name: '北京'
                },
                {
                    id: 2,
                    city_name: '上海'
                },
                {
                    id: 3,
                    city_name: '广州'
                },
                {
                    id: 4,
                    city_name: '深圳'
                },
            ],
            this.foragingList = [
                {
                    id: 1,
                    imgUrl: require("@/assets/images/food-1.jpg"),
                    title: '牛肉粒炒饭牛肉粒炒饭',
                    city_name: '北京',
                    collect_state: 1,
                    collect_num: 22
                },
                {
                    id: 2,
                    imgUrl: require("@/assets/images/food-2.jpg"),
                    title: '黑椒金针菇焖鸡黑椒金针菇焖鸡黑椒金针菇焖鸡',
                    city_name: '上海',
                    collect_state: 1,
                    collect_num: 22
                },
                {
                    id: 3,
                    imgUrl: require("@/assets/images/food-3.jpg"),
                    title: '黑椒金针菇焖鸡撒旦',
                    city_name: '广州',
                    collect_state: 0,
                    collect_num: 221
                },
                {
                    id: 4,
                    imgUrl: require("@/assets/images/food-1.jpg"),
                    title: '黑椒金针菇焖鸡哈哈哈哈哈哈哈哈哈撒啊大',
                    city_name: '深圳',
                    collect_state: 0,
                    collect_num: 224
                }
            ],
            this.informationData = {
                id: 1,
                imgUrl:require("@/assets/images/food-7.jpg"),
                title: '极度下饭的老北京清真名菜——醋熘苜蓿',
                date: '2019-12-26'
            },
            this.informationList = [
                {
                    id: 1,
                    title: '2019中国·开化食旅融合论坛打响“开化味道”品牌'
                },
                {
                    id: 2,
                    title: '三餐外如何有效补充营养？首选汤臣倍健营养软糖'
                },
                {
                    id: 3,
                    title: '想“靠脸吃饭”，去这家智慧餐饮店转转-孚谷物联'
                },
                {
                    id: 4,
                    title: '《亲爱的客栈3》宁夏风光受捧 百瑞源深耕造林十余载'
                },
                {
                    id: 5,
                    title: '「澳門銀河」诚献“银河冬FUN 愿望成真”冬日礼遇 冬季食谱沿承中医养冬季食谱沿承中医养冬季食谱沿承中医养冬季食谱沿承中医养'
                },
                {
                    id: 6,
                    title: '重磅丨智竞未来 · HFE五周年峰会庆典暨颁奖晚宴'
                }
            ];
            this.showLoading = false;
            var _this = this;
            this.$nextTick(()=>{
                _this.swiperInit();
            })
        },
        // swiper初始化
        swiperInit () {
            let _this = this;
            var mySwiper = new Swiper('.swiper-container', {
                speed:300,
                autoplay: 3000,
                autoplayDisableOnInteraction: false,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                pagination: '.swiper-pagination',
                paginationClickable: true
            });
        },
        // 根据不同屏幕获取首页banner高度
        getBannerHeight () {
            this.swiperHeight = parseInt((320/1024)*(this.screenWidth));
        },
        // 菜谱
        goMenu () {
            this.$router.push('/menu');
        },
        goMenuDetail (item) {
            this.$router.push({path:'/menu/menuDetail',query:{id:item.id}})
        },
        // 食材
        goFoods () {
            this.$router.push('/foods');
        },
        goFoodsDetail (item) {
            this.$router.push({path:'/foods/foodsDetail',query:{id:item.id}})
        },
        // 哪里好吃
        goForaging () {
            this.$router.push('/foraging');
        },
        goForagingDetail (item) {
            this.$router.push({path:'/foraging/foragingDetail',query:{id:item.id}})
        },
        // 资讯
        goInformation () {
            this.$router.push('/information');
        },
        goInformationDetail (item) {
            this.$router.push({path:'/information/informationDetail',query:{id:item.id}})
        },
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
                }, 500)
            }
        }
    }
}
</script>

<style lang="scss">

</style>
