<template>
    <!-- 菜谱页内容 -->
    <div class="menu-container box-container">
        <div class="menu-header">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="精选" name="first">
                    <el-row :gutter="20" type="flex" justify="space-between">
                        <el-col>
                            <div class="con-table">
                                <div class="type-row">
                                    <div class="type-row-tit">常见菜式</div>
                                    <ol :class="{'height-auto': isHeight}">
                                        <li v-for='(item,index) in foodList' :key="index">
                                            <span>{{item}}</span>
                                        </li>
                                    </ol>
                                    <div class="more">
                                        <i @click="arrwTop(1)" v-if="isHeight" class="icon-arrow arrow-top"></i>
                                        <i @click="arrwBottom(1)" v-else class="icon-arrow arrow-bottom"></i>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20" type="flex" justify="space-between">
                        <el-col>
                            <div class="con-table">
                                <div class="type-row">
                                    <div class="type-row-tit">常见菜式</div>
                                    <ol :class="{'height-auto': isHeight}">
                                        <li v-for='(item,index) in foodList' :key="index">
                                            <span>{{item}}</span>
                                        </li>
                                    </ol>
                                    <div class="more">
                                        <i @click="arrwTop(1)" v-if="isHeight" class="icon-arrow arrow-top"></i>
                                        <i @click="arrwBottom(1)" v-else class="icon-arrow arrow-bottom"></i>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20" type="flex" justify="space-between">
                        <el-col>
                            <div class="con-table">
                                <div class="type-row">
                                    <div class="type-row-tit">常见菜式</div>
                                    <ol :class="{'height-auto': isHeight}">
                                        <li v-for='(item,index) in foodList' :key="index">
                                            <span>{{item}}</span>
                                        </li>
                                    </ol>
                                    <div class="more">
                                        <i @click="arrwTop(1)" v-if="isHeight" class="icon-arrow arrow-top"></i>
                                        <i @click="arrwBottom(1)" v-else class="icon-arrow arrow-bottom"></i>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20" type="flex" justify="space-between">
                        <el-col>
                            <div class="con-table">
                                <div class="type-row">
                                    <div class="type-row-tit">常见菜式</div>
                                    <ol :class="{'height-auto': isHeight}">
                                        <li v-for='(item,index) in foodList' :key="index">
                                            <span>{{item}}</span>
                                        </li>
                                    </ol>
                                    <div class="more">
                                        <i @click="arrwTop(1)" v-if="isHeight" class="icon-arrow arrow-top"></i>
                                        <i @click="arrwBottom(1)" v-else class="icon-arrow arrow-bottom"></i>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                    <a class="lookAll">查看全部 </a>
                    <div class="menu-body">
                        <h1>精选</h1>
                    </div>
                    <div class="boutiqueList">
                        <ul>
                            <li v-for="(item, index) in foodObj" :key="index">
                                <div class="img"><img :src="item.url" alt=""></div>
                                <p>{{item.name}}</p>
                            </li>
                        </ul>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="分类" name="second">分类</el-tab-pane>
                <el-tab-pane label="食材" name="third">食材</el-tab-pane>
            </el-tabs>
        </div>
        <!-- 加载动效 -->
        <Loading v-if="showLoading"></Loading>
    </div>
</template>

<script>
import Loading from '@/components/Loading'
export default {
    name: 'menus',
    data () {
        return {
            // 全屏加载
            activeName: 'first',
            showLoading:false,
            isHeight: false,
            foodList: ['家常菜', '粤菜', '湘菜', '湖南菜', '川菜', '北京烤鸭'],
            foodObj: [{
                name: '番茄炒鸡蛋',
                url: require('@/assets/images/food-1.jpg')
            },{
                name: '番茄炒鸡蛋2',
                url: require('@/assets/images/food-2.jpg')
            },{
                name: '番茄炒鸡蛋3',
                url: require('@/assets/images/food-3.jpg')
            },{
                name: '番茄炒鸡蛋',
                url: require('@/assets/images/food-1.jpg')
            },{
                name: '番茄炒鸡蛋2',
                url: require('@/assets/images/food-2.jpg')
            },{
                name: '番茄炒鸡蛋3',
                url: require('@/assets/images/food-3.jpg')
            }]
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
        handleClick(tab, event) {
            console.log(tab, event);
        },
        // 筛选箭头
        arrwTop (type) {
            if (type === 1) {
                this.isHeight = false;
            } else if (type === 2) {
                this.is2Height = false;
            } else {
                this.is3Height = false;
            }
        },
        arrwBottom (type) {
            if (type === 1) {
                this.isHeight = true;
            } else if (type === 2) {
                this.is2Height = true;
            } else {
                this.is3Height = true;
            }
        },
    },
    watch: {
        
    }
}
</script>

<style lang="scss">

</style>
