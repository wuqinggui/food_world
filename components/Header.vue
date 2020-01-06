<template>
    <div id="header">
        <div class="box-container">
            <div class="header-logo">
                <img :src="logoUrl" alt="">
            </div>
            <ul class="header-tab">
                <template v-for="(item, index) in tabList">
                    <router-link
                        :class="['tab-item', {'act': curIndex === index}]"
                        :key="index"
                        :to="item.path"
                        tag="li"
                        @click.native="curIndex = index">
                        {{item.name}}
                    </router-link>
                </template>
            </ul>
            <div class="header-search">
                搜索
            </div>
            <div class="">
                注册/登陆
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    data () {
        return {
            logoUrl:require('@/assets/images/food-world-logo.jpg'),
            curIndex: 0, // 选中的索引
            tabList: [
                {
                    name: '首页',
                    path: '/'
                },
                {
                    name: '菜谱',
                    path: '/menu',
                    children: [
                        {
                            name: '菜谱-详情',
                            path: '/menu/menuDetail'
                        }
                    ]
                },
                {
                    name: '食材',
                    path: '/foods',
                    children: [
                        {
                            name: '食材-详情',
                            path: '/foods/foodsDetail'
                        }
                    ]
                },
                {
                    name: '哪里好吃',
                    path: '/foraging',
                    children: [
                        {
                            name: '哪里好吃-详情',
                            path: '/foraging/foragingDetail'
                        }
                    ]
                },
                {
                    name: '资讯',
                    path: '/information',
                    children: [
                        {
                            name: '资讯-详情',
                            path: '/information/informationDetail'
                        }
                    ]
                }
            ]
        }
    },
    mounted () {
        this.init();
    },
    created () {},
    methods: {
        init(){
            this.curIndex = 0;
            this.tabList.forEach((item, index) => {
                if (this.$route.path.includes(item.path)){
                    this.curIndex = index;
                }else if(item.children){
                    item.children.forEach((subItem, subIndex) => {
                        if (this.$route.path.includes(subItem.path)){
                            this.curIndex = index;
                        }
                    });
                }
            });
            console.log('this.$route', this.$route)
            console.log('this.curIndex', this.curIndex)
        }
    },
     watch: {
        '$route': function () {
            this.init();
        }
    }
}
</script>

<style lang="scss">
// 公共头部
#header {
    width: 100%;
    height: 60px;
    background: #fff;
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.08);
}
</style>
