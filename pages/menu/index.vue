<template>
  <!-- 菜谱页内容 -->
  <div class="menu-container box-container mt20">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="精选" name="first">
        <div class="carefully">
          <el-row :gutter="20" type="flex" justify="space-between">
            <el-col>
              <div class="con-table">
                <div class="type-row">
                  <div class="type-row-tit">常见菜式</div>
                  <ol :class="{ 'height-auto': isHeight1 }">
                    <li v-for="(item, index) in foodList" :key="index">
                      <span>{{ item }}</span>
                    </li>
                  </ol>
                  <div class="more">
                    <i
                      @click="arrwTop(1)"
                      class="icon-arrow"
                      :class="[isHeight1 ? 'el-icon-arrow-up' : 'el-icon-arrow-down']"
                    ></i>
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
                  <ol :class="{ 'height-auto': isHeight2 }">
                    <li v-for="(item, index) in foodList" :key="index">
                      <span>{{ item }}</span>
                    </li>
                  </ol>
                  <div class="more">
                    <i
                      @click="arrwTop(2)"
                      class="icon-arrow"
                      :class="[isHeight2 ? 'el-icon-arrow-up' : 'el-icon-arrow-down']"
                    ></i>
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
                  <ol :class="{ 'height-auto': isHeight3 }">
                    <li v-for="(item, index) in foodList" :key="index">
                      <span>{{ item }}</span>
                    </li>
                  </ol>
                  <div class="more">
                    <i
                      @click="arrwTop(3)"
                      class="icon-arrow"
                      :class="[isHeight3 ? 'el-icon-arrow-up' : 'el-icon-arrow-down']"
                    ></i>
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
                  <ol :class="{ 'height-auto': isHeight4 }">
                    <li v-for="(item, index) in foodList" :key="index">
                      <span>{{ item }}</span>
                    </li>
                  </ol>
                  <div class="more">
                    <i
                      @click="arrwTop(4)"
                      class="icon-arrow"
                      :class="[isHeight4 ? 'el-icon-arrow-up' : 'el-icon-arrow-down']"
                    ></i>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
          <a class="lookAll" @click="lookAll">查看全部 <i class="el-icon-arrow-right"></i></a>
          <div class="h2">
            <div class="title">精选</div>
          </div>
          <div class="boutiqueList">
            <el-row :gutter="60">
              <el-col :span="6" v-for="(item, index) in foodObj" :key="index">
                <div class="grid-content bg-purple" @click="goBoutique">
                  <div class="imgs transition-show-bg">
                      <img v-lazy="item.url" alt="" />
                      <div class="transition-bg">
                          <p>这个菜好评这个菜好评这个菜好评这个菜好评</p>
                       </div>
                  </div>
                  <p>{{ item.name }}</p>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="分类" name="second">
        <div class="type_classify">
            <div class="h2" data-wow-duration="1s" data-wow-offset="10" v-for="(item, index) in classifyList" :key="index">
                <div class="title">{{ item.title }}</div>
                <div class="classify">
                    <span v-for="(item2, index2) in item.list" :key="index2">{{
                    item2
                    }}</span>
                </div>
            </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <!-- 加载动效 -->
    <Loading v-if="showLoading"></Loading>
  </div>
</template>

<script>
import Loading from "@/components/Loading";
import util from '@/util/util';
export default {
  name: "menus",
  data() {
    return {
      // 全屏加载
      activeName: "first",
      showLoading: false,
      isHeight1: false, //isHeight 是否显示全部
      isHeight2: false,
      isHeight3: false,
      isHeight4: false,
      isDetail: false, //是否食材详情页
      foodList: ["家常菜", "粤菜", "湘菜", "湖南菜", "川菜", "北京烤鸭", "粤菜", "湘菜", "湖南菜", "川菜", "北京烤鸭", "粤菜", "湘菜", "湖南菜", "川菜", "北京烤鸭", "粤菜", "湘菜", "湖南菜", "川菜", "北京烤鸭", "粤菜", "湘菜", "湖南菜", "川菜", "北京烤鸭", "粤菜", "湘菜", "湖南菜", "川菜", "北京烤鸭"],
      foodObj: [
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
          url: require("@/assets/images/food-3.jpg")
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
          url: require("@/assets/images/food-3.jpg")
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
      classifyList: [
        {
          title: "热门食材1",
          list: [
            "面条",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "面条",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "辣条"
          ]
        },
        {
          title: "热门食材2",
          list: [
            "面条",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "面条",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "辣条"
          ]
        },
        {
          title: "热门食材3",
          list: [
            "面条",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "面条",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "辣条"
          ]
        },
        {
          title: "热门食材4",
          list: [
            "面条",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "面条",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "辣条"
          ]
        },
        {
          title: "热门食材5",
          list: [
            "面条",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "面条",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "辣条"
          ]
        },
        {
          title: "热门食材6",
          list: [
            "面条",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "面条",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "辣条",
            "笋丝",
            "辣条"
          ]
        }
      ]
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
    handleClick(tab, event) {
    },
    lookAll() {
        this.activeName = 'second';
    },
    // 筛选箭头
    arrwTop(type) {
      if (type === 1) {
        this.isHeight1 = !this.isHeight1;
      } else if (type === 2) {
        this.isHeight2 = !this.isHeight2;
      } else if (type === 3) {
        this.isHeight3 = !this.isHeight3;
      }else if (type === 4) {
        this.isHeight4 = !this.isHeight4;
      }
    },
    // 菜谱详情
    goBoutique () {
      console.log(1111);
        this.$router.push({
                path: '/menu/menuDetail',
            });
    },
  },
  watch: {}
};
</script>

<style lang="scss"></style>
