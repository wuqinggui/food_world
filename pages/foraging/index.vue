<template>
    <div class="foraging-container box-container mt20">
        <div class="foraging-city row f14">
           <div class="select-city " @click="djTap">
             <span class="gray9 ">城市选择：</span>
              <span class="foraging-hei">广州</span>
              <i :class="[selectCityStatus?'shoewRotate1':'','el-icon-arrow-up']"></i>
           </div>
           <div class="hot-city ml100">
             <span class="gray6">热门城市:</span>
              <span class="ml15 foraging-hei" v-for="(item,index) in hotCityArr" :key="index">
                {{ item.name }}
              </span>
           </div>
           <div v-if="djStatus" :class="[selectCityStatus?'fadeIn':'fadeOut','selectCity-list','f13','bg-white']"  >
             <div class="gray9 pl15 pr15 pt10 ">
               城市选择
             </div>
             <div>
               <el-menu :default-active="curIndex.toString()" class="el-menu-demo"
               mode="horizontal" @select="handleSelect">
                   <el-menu-item style="height: 30px; line-height: 30px;" :index="index.toString()" v-for="(item, index) in titleCityArr"
                   :key="index">{{item}}</el-menu-item>
               </el-menu>
             </div>
             <div>
               <div class="mt10 ml20 mb10 mr20 row foraging-hei" v-for="(itmes,index1) in allCityArr" :key="index1">
                 <span class="f14 fw">{{itmes.title}}</span>
                 <div>
                   <span @click="selectCityTap(index1,index2)"
                   :class="[cityIndex1==index1&&cityIndex2==index2?'text-hs fw f14':'f13']" class="ml20  mb5" v-for="(itme,index2) in itmes.arr" :key="index2">
                     {{itme.name}}
                   </span>
                 </div>
               </div>
             </div>
           </div>
        </div>
        <div class="row al-f fl-w pb20 foraging-hei">
          <div @click="detaTap(itme,index)" v-for="(itme,index) in cateList" :key="index" class="ml20 mt20 cate-itme">
            <div>
              <img :src="itme.url" />
            </div>
            <div class="gray3 f14 pl10 pr10 word" style="max-width: 200px;">
              海珠30年老字号的范德萨范德萨发生的范德萨发生
            </div>
            <div class="f12 row ju-b pl10 pr10 pt5 pb10">
              <div class="gray6">
                116人浏览
              </div>
              <div>
                <i class="el-icon-star-on text-red"></i>
                <span>123</span>
              </div>
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
            selectCityStatus:false,//城市选择箭头状态
            djStatus:false,//城市选择箭头是否被点击过
            hotCityArr:[{name:'广州',id:'1'},{name:'武汉',id:'2'},{name:'广州',id:'1'},{name:'武汉',id:'2'},{name:'广州',id:'1'},{name:'武汉',id:'2'},],//热门城市数组
            titleCityArr:['ABCDE','FGHJ','KLMNP','QRSTW','XYZ'],//
            allCityArr:[{title:'A',arr:[{name:'广州',id:'1'},{name:'广州',id:'1'},{name:'广州',id:'1'},{name:'广州',id:'1'},{name:'广州',id:'1'},{name:'广州',id:'1'},{name:'广州',id:'1'},{name:'广州',id:'1'},{name:'广州',id:'1'},{name:'湖南',id:'1'}]},{title:'B',arr:[{name:'广州',id:'1'},{name:'广州',id:'1'}]}],//所有城市
            curIndex:0,
            cityIndex1:-1,
            cityIndex2:-1,
            cateList: [
              {
                name: "番茄炒鸡蛋",
                url: require("@/assets/images/food-1.jpg")
              },
              {
                name: "番茄炒鸡蛋2",
                url: require("@/assets/images/food-2.jpg")
              },
              {
                name: "番茄炒鸡蛋3",
                url: require("@/assets/images/food-7.jpg")
              },
              {
                name: "番茄炒鸡蛋",
                url: require("@/assets/images/food-1.jpg")
              },
              {
                name: "番茄炒鸡蛋2",
                url: require("@/assets/images/food-2.jpg")
              },
              {
                name: "番茄炒鸡蛋3",
                url: require("@/assets/images/food-7.jpg")
              },
              {
                name: "番茄炒鸡蛋2",
                url: require("@/assets/images/food-2.jpg")
              },
              {
                name: "番茄炒鸡蛋3",
                url: require("@/assets/images/food-3.jpg")
              }
            ],
        }
    },
    components:{
      Loading
    },
    created () {
      console.log(22);
        this.showLoading = true;
        setTimeout(()=>{
             this.showLoading = false;
        },100)
    },
    mounted () {
      console.log(11);
    },
    methods: {
      handleSelect:function(val){
        console.log(val);
      },
      selectCityTap:function(index1,index2){
        console.log(this.allCityArr[index1]['arr'][index1]);
        this.cityIndex1=index1;
        this.cityIndex2=index2;
      },
      detaTap:function(){
        this.$router.push({
                path: '/foraging/foragingDetail',
            });
      },
      djTap:function(){
        this.selectCityStatus=!this.selectCityStatus;
        if(!this.djStatus){
          this.djStatus=true;
        };

      },
    },
    watch: {

    }
}
</script>

<style lang="scss">

</style>
