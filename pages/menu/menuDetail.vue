<template>
  <div class="menuDetail-container box-container mt20">
    <div class="left-content">
      <div class="goods-img">
        <img v-lazy="goodsImg" alt="" />
      </div>
      <div class="project mb50">
        <div class="title">风桂花蛋糕</div>
        <div class="collect mb20">
          <div class="num"><span>7745</span> 收藏</div>
          <div class="stars"><i class="el-icon-star-on"></i><span>收藏</span></div>
        </div>
        <div class="desc">
            很多家长喜欢把比较嫩的菜心留给宝宝吃，那就好心办坏事啦！大白菜的菜心因为不见光，产生不了叶绿
            素和纤维素，所以才比较嫩。外层的菜叶颜色深，才是纤维素、矿物质和膳食纤维等营养最集中的地方。
            今天的这款奶白菜汤你们一定要试试，汤汁浓郁又特别入味
        </div>
      </div>
      <div class="material mb50">
        <div class="title mb20">奶白菜汤的用料</div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
      </div>
      <div class="makes mb50">
          <div class="title mb20">奶白菜汤的做法</div>
          <div class="steps">
              <div class="step mb40" v-for="(item, index) in steps" :key="index">
                  <img v-lazy="item.url" alt="">
                  <div class="explain">
                      <p class="mb10">步骤{{index+1}}</p>
                      <p>{{item.desc}}</p>
                  </div>
              </div>
          </div>
      </div>
      <div class="skill mb100">
          <div class="title mb20">奶白菜汤的烹饪技巧</div>
          <div class="desc">由于加了面粉，要注意汤汁的浓稠程度，煮太久会导致汤汁变浓稠影响口感。 ●妈妈们尽量一次性
            把水加足，二次加水容易影响口感。 ●平时咱们在家煮其他菜汤的时候，也可以用加面粉的方法，汤汁浓
            郁，还能保持蔬菜鲜艳的颜色。做菜好吃都有技巧，我的每道菜都有小妙招，大家搜索“豆果”可以直接
            查看我的菜谱！</div>
      </div>
    </div>
    <div class="right-content">
        <div class="food-billboard">
            <div class="title">Top美食榜</div>
            <div class="billboard-list">
                <div class="billboard-item">
                    <div class="desc-img">
                        <img src="" alt="">
                    </div>
                    <div class="desc-good">
                        <div class="name">奶白菜汤</div>
                        <p>很多家长喜欢把比较嫩很多家长喜欢把比较嫩很多家长喜欢把比较嫩</p>
                        <div class="star-num"><span>10</span>人收藏</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="where">
            <div class="title">哪里好吃</div>
            <div class="list">
                <div class="list-item">
                    <div class="img">
                        <img src="" alt="">
                    </div>
                    <p>北京路：惠福东路</p>
                </div>
            </div>
        </div>
        <div class="news">
            <div class="title">最新资讯</div>
            <ul>
                <li>酒后头痛，5种食物可缓解</li>
                <li>酒后头痛，5种食物可缓解</li>
                <li>酒后头痛，5种食物可缓解</li>
                <li>酒后头痛，5种食物可缓解</li>
                <li>酒后头痛，5种食物可缓解</li>
            </ul>
        </div>
    </div>
    <!-- 加载动效 -->
    <Loading v-if="showLoading"></Loading>
  </div>
</template>

<script>
import Loading from "@/components/Loading";
export default {
  name: "index",
  data() {
    return {
      // 全屏加载
      showLoading: false,
      goodsImg: require("@/assets/images/banner_1.jpg"),
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        steps: [{
            url: require('@/assets/images/food-1.jpg'),
            desc: '等奶锅中水沸腾后放入北豆腐，大火焯水3分钟。'
        },{
            url: require('@/assets/images/food-1.jpg'),
            desc: '等奶锅中水沸腾后放入北豆腐，大火焯水3分钟。'
        },{
            url: require('@/assets/images/food-1.jpg'),
            desc: '等奶锅中水沸腾后放入北豆腐，大火焯水3分钟。'
        },{
            url: require('@/assets/images/food-1.jpg'),
            desc: '等奶锅中水沸腾后放入北豆腐，大火焯水3分钟。'
        }]
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
  mounted() {
    console.log(222222222222222);
  },
  methods: {},
  watch: {}
};
</script>

<style lang="scss"></style>
