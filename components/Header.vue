<template>
    <div id="header">
        <div class="box-container header-container row verticle-center pl5 pr5">
            <div class="flex-1 verticle-center">
                <div class="header-logo">
                    <img :src="logoUrl" alt="">
                </div>
                <el-menu :default-active="curIndex.toString()" class="el-menu-demo ml20 mr20" mode="horizontal" @select="handleSelect">
                    <el-menu-item :index="index.toString()" v-for="(item, index) in menuList" :key="index">{{item.name}}</el-menu-item>
                </el-menu>
                <div class="header-search">
                    <el-input placeholder="搜索菜谱、食材、哪里好吃的" v-model="searchValue" clearable style="width:240px;"></el-input>
                    <el-button type="primary" @click="handleSearch">搜索</el-button>
                </div>
            </div>
            <div class="pl20 pr20">
                <el-button-group>
                    <el-button type="text" class="fw pr5" title="登陆">登陆</el-button>
                    <el-button type="text" class="fw">|</el-button>
                    <el-button type="text" class="fw pl5" title="注册">注册</el-button>
                </el-button-group>
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
            searchValue: '',
            curIndex: -1, // 选中的索引
            menuList: [
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
            this.menuList.forEach((item, index) => {
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
        },
        // 切换导航
        handleSelect(key, keyPath) {
            // console.log(key, keyPath);
            this.$router.push(this.menuList[key].path);
        },
        // 搜索
        handleSearch () {
            
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
    .header-container{
        height: 100%;
    }
}
</style>
