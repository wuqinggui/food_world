<template>
    <div class="foods-container box-container mt50 mb100">
        <div class="Ingredients"
          v-for="(item, index) in Ingredients"
          :key="index"
        >
          <div class="meatType">
            <div class="title">{{ item.title }}</div>
          </div>
          <div class="meatList">
            <el-row :gutter="20">
              <el-col
                :span="2"
                v-for="(item2, index2) in item.list"
                :key="index2"
              >
                <div class="grid-content bg-purple" @click="goIngredients">
                  <img v-lazy="item2.url" alt="" />
                  <p>{{ item2.name }}</p>
                </div>
              </el-col>
            </el-row>
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
            Ingredients: [
                {
                title: "猪肉类",
                list: [
                    {
                    name: "猪杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "猪杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "猪杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "猪杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "猪杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "猪杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "猪杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "猪杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "猪杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "猪杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "猪杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "猪杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "猪杂",
                    url: require("@/assets/images/rou.jpg")
                    }
                ]
                },
                {
                title: "牛肉类",
                list: [
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    }
                ]
                },
                {
                title: "牛肉类",
                list: [
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    }
                ]
                },
                {
                title: "牛肉类",
                list: [
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    },
                    {
                    name: "牛杂",
                    url: require("@/assets/images/rou.jpg")
                    }
                ]
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
        
    },
    methods: {
        goIngredients() {
            this.$router.push({
                path: '/foods/foodsDetail'
            });
        }
    },
    watch: {
        
    }
}
</script>

<style lang="scss">

</style>
