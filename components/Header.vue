<template>
    <div id="header">
        <div class="headers-container">
            <div class="header-logo">
                <div class="logo-img"></div>
            </div>
            <div class="header-tab">
                <ul>
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
            </div>
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
            console.log('this.$route', this.$route)
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
    background: #fff;
    width: 100%;
    margin: 0 auto;
    height: 80px;
}
</style>
