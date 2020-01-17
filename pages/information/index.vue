<template>
  <div class="information-container box-container">
    <div class="information-list">
      <div @click="detailsTap(itme, index)" class="information-itme row" v-for="(itme, index) in 4" :key="itme">
        <div class="information-left" :style="{ backgroundImage: 'url(' + url + ')' }"></div>
        <div class="information-right p10">
          <p class="f16 gray3 normal">极度下饭的老北京清真名菜——醋熘苜蓿</p>
          <div class="pt5 pb5 f14 gray6">7月20日，天猫Club理想生活体验中心所在的上海K11热度升温，天猫club 打造的全国首个冰淇淋沉浸式话剧，在此正式拉开序幕。</div>
          <span class="f12 gray9">2019-12-26</span>
        </div>
      </div>
    </div>
    <div class="column al-c pb100 pt40">
      <el-pagination background layout="prev, pager, next" :page-size='4' @current-change="changeTap" :total="20"></el-pagination></div>
    <!-- 加载动效 -->
    <Loading v-if="showLoading"></Loading>
  </div>
</template>

<script>
import Loading from '@/components/Loading';
export default {
  name: 'index',
  data() {
    return {
      // 全屏加载
      showLoading: false,
      url: require('@/assets/images/banner_2.jpg')
    };
  },
  components: {
    Loading
  },
  created() {
    this.showLoading = true;
    setTimeout(() => {
      this.showLoading = false;
    }, 100);
  },
  mounted() {},
  methods: {
    changeTap:function(val){//页码发生变化
      console.log(val);
    },
    detailsTap:function(itme,index){
      this.$router.push({
              path: '/information/informationDetail',
          });
    }
  },
  watch: {}
};
</script>

<style lang="scss"></style>
