<template>
    <div class="foodsDetail-container box-container mt20">
        <div class="foods-list">
            <div class="foods-item mb30" v-for="(item, index) in foods" :key="index">
                <div class="desc-img">
                    <img v-lazy="item.url" alt="" class="transition-big">
                </div>
                <div class="desc-good">
                    <div class="name f20 pb5 pt5">{{item.name}}</div>
                    <div class="type pb5">分类: <span>猪肉类</span></div>
                    <p class="desc f13 pb20">{{item.desc}}</p>
                </div>
            </div>
        </div>
        <div class="classifiy">
            <el-tabs type="border-card">
                <el-tab-pane label="最新">
                    <div class="billboard-list">
                        <div class="billboard-item mb10" v-for="(item, index) in billboards" :key="index">
                            <div class="desc-img">
                                <img v-lazy="item.url" alt="" class="transition-big">
                            </div>
                            <div class="desc-good">
                                <div class="name f18 pb10 pt5">{{item.name}}11111</div>
                                <p class="desc f14 mb20">{{item.desc}}</p>
                                <div class="star-num"><span>{{item.start}}</span>人收藏</div>
                            </div>
                        </div>
                    </div>
                    <div class="pagination">
                        <el-pagination
                            layout="prev, pager, next"
                            :total="100">
                        </el-pagination>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="收藏最多">
                    <div class="billboard-list">
                        <div class="billboard-item mb10" v-for="(item, index) in billboards" :key="index">
                            <div class="desc-img">
                                <img v-lazy="item.url" alt="" class="transition-big">
                            </div>
                            <div class="desc-good">
                                <div class="name f18 pb10 pt5">{{item.name}}222222</div>
                                <p class="desc f14 mb20">{{item.desc}}</p>
                                <div class="star-num"><span>{{item.start}}</span>人收藏</div>
                            </div>
                        </div>
                    </div>
                    <div class="pagination">
                        <el-pagination
                            layout="prev, pager, next"
                            :total="50">
                        </el-pagination>
                    </div>
                </el-tab-pane>
            </el-tabs>
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
            foods: [{
            url: require('@/assets/images/food-1.jpg'),
            name: '奶白菜汤',
            desc: '很多家长喜欢把比较嫩很多家长喜欢把比较嫩很多家长喜欢把比较嫩很多家长喜欢把比较嫩很多家长喜欢把比较嫩很多家长喜欢把比较嫩',
            start: 120 
        },{
            url: require('@/assets/images/food-1.jpg'),
            name: '奶白菜汤',
            desc: '很多家长喜欢把比较嫩很多家长喜欢把比较嫩很多家长喜欢把比较嫩',
            start: 120 
        }],
        
        billboards: [{
            url: require('@/assets/images/food-1.jpg'),
            name: '奶白菜汤',
            desc: '很多家长喜欢把比较嫩很多家长喜欢把比较嫩很多家长喜欢把比较嫩',
            start: 120 
        },{
            url: require('@/assets/images/food-1.jpg'),
            name: '奶白菜汤',
            desc: '很多家长喜欢把比较嫩很多家长喜欢把比较嫩很多家长喜欢把比较嫩',
            start: 120 
        },{
            url: require('@/assets/images/food-1.jpg'),
            name: '奶白菜汤',
            desc: '很多家长喜欢把比较嫩很多家长喜欢把比较嫩很多家长喜欢把比较嫩',
            start: 120 
        },{
            url: require('@/assets/images/food-1.jpg'),
            name: '奶白菜汤',
            desc: '很多家长喜欢把比较嫩很多家长喜欢把比较嫩很多家长喜欢把比较嫩',
            start: 120 
        },{
            url: require('@/assets/images/food-1.jpg'),
            name: '奶白菜汤',
            desc: '很多家长喜欢把比较嫩很多家长喜欢把比较嫩很多家长喜欢把比较嫩',
            start: 120 
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

    },
    watch: {
        
    }
}
</script>

<style lang="scss">

</style>
