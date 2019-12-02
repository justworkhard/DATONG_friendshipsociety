<template>
  <div id="index">
    <Header :tabList="tabList"></Header>
    <div class="label">
      <img src="@/assets/images/mipmap-hdpi/horn.png" alt srcset>
      <span>最新公告</span>
    </div>
    <swiper :aspect-ratio="300/800" height="200px" :list="demo04_list" v-model="demo01_index" auto></swiper>
    <Tabs :TabsList="TabsList[0]" @onChangeTab="onChangeTabs" href="/newslist" :href='hrefs[0]'>
      <template slot-scope="slotProps">
        <div v-if="slotProps.slotdata===0">
          <ul class="news">
            <li
              class="news_title"
              @click="toDetail()"
              v-for="(item,index) in newsList"
              :key="index"
            >{{'∙ '+item.title}}</li>
          </ul>
        </div>
        <div v-if="slotProps.slotdata===1">
          <ul class="news">
            <li
              class="news_title"
              @click="toDetail()"
              v-for="(item,index) in newsList"
              :key="index"
            >{{item.title}}</li>
          </ul>
        </div>
      </template>
      <!-- <div v-if='slotData.activeIndex===0'> -->
    </Tabs>
    <Tabs id="ten" :TabsList="TabsList[1]" @onChangeTab="onChangeTabs" :href='hrefs[1]'>
      <template slot-scope="slotProps">
        <div v-if="slotProps.slotdata===0">
          <Ten></Ten>
        </div>
        <div v-if="slotProps.slotdata===1">2</div>
      </template>
      <!-- <div v-if='slotData.activeIndex===0'> -->
    </Tabs>
    <!-- 平台排行榜 -->
    <Tabs :TabsList="TabsList[2]" @onChangeTab="onChangeTabs" :href='hrefs[2]'>
      <template slot-scope="slotProps">
        <div class="rank" v-if="slotProps.slotdata===0">
          <div class="rankItem">
            <img src="@/assets/images/mipmap-hdpi/points.png" alt srcset>
          </div>
          <div class="rankItem">
            <img src="@/assets/images/mipmap-hdpi/read.png" alt srcset>
          </div>
        </div>
      </template>
      <!-- <div v-if='slotData.activeIndex===0'> -->
    </Tabs>
    <!-- 联谊会介绍 -->
    <Tabs :TabsList="TabsList[3]" @onChangeTab="onChangeTabs" :href='hrefs[3]'>
      <template slot-scope="slotProps">
        <div v-if="slotProps.slotdata===0" class="introduce">
          <h3 class="introduce_title">大同市平城区人大代表民营企业联谊会</h3>
          <div
            class="introduce_content"
          >大同市平城区人大代表民营企业联谊会于2019年1月18日成立，是中国共产党领导的由平城区人大代表中的民营企业家自愿组成的社会团体，是党和政府联系民营企业家的桥梁和…</div>
        </div>
      </template>
      <!-- <div v-if='slotData.activeIndex===0'> -->
    </Tabs>
    <!-- 联谊企业 -->
    <Tabs :TabsList="TabsList[4]" @onChangeTab="onChangeTabs"  :href='hrefs[4]'>
      <template slot-scope="slotProps">
        <div v-if="slotProps.slotdata===0" class="compony">
          <ComponyCard></ComponyCard>
          <ComponyCard></ComponyCard>
        </div>
      </template>
    </Tabs>
    <!-- 企业产品展示 -->
    <Tabs :TabsList="TabsList[5]" @onChangeTab="onChangeTabs"  :href='hrefs[5]'>
      <template slot-scope="slotProps">
        <div v-if="slotProps.slotdata===0" class="product_show">
          <ComponyCard></ComponyCard>
          <ComponyCard></ComponyCard>
        </div>
      </template>
    </Tabs>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Tabs from "@/components/Tabs.vue";
import Ten from "./ten.vue";
import ComponyCard from "./componyCard.vue";
import { Button, Carousel } from "element-ui";
import { Swiper, SwiperItem } from "vux";
import axios from 'axios'
export default {
  name: "app",
  components: { Header, Footer, Swiper, SwiperItem, Tabs, Ten, ComponyCard },
  created(){
    console.log('creat');
    
      axios.post('/api/web/tc/indexlis',{       // 还可以直接把参数拼接在url后边
            keyname:'眼镜'
    }).then(function(res){
        this.goodsList = res.data;
    }).catch(function (error) {
        console.log(error);
    });
  },
  data() {
    return {
      demo01_index: 0,
      activeName: "",
      TabsList: [
        ["新闻动态", "联谊会活动"],
        ["十大平台", "企业信息服务"],
        ["平台排行榜"],
        ["联谊会介绍"],
        ["联谊会企业"],
        ["企业产品介绍"]
      ],
      hrefs: [
        ["/newslist", "/newslist"],
        ["", "企业信息服务"],
        ["平台排行榜"],
        ["/introduce"],
        ["/enterprise/list"],
        ["product/list"]
      ],
      tabList: [
        { label: "首页", url: "/" },
        { label: "热门资讯", url: "/newslist" },
        { label: "新闻动态", url: "/newslist" },
        { label: "十大平台", url: "#ten" },
        { label: "平台排行榜", url: "/policy/chat" }
      ],
      TabsIndex: 0,
      newsList: [
        {
          title:
            "平城区人大常委会组织开展全区民营企业家人大代平城区人大常委会组织开展全区民营企业家人大代"
        },
        { title: "平城区人大常委会组织开展全区民营企业家人大代" },
        { title: "平城区人大常委会组织开展全区民营企业家人大代" },
        { title: "平城区人大常委会组织开展全区民营企业家人大代" },
        { title: "平城区人大常委会组织开展全区民营企业家人大代" }
      ],
      demo04_list: [
        {
          url: "javascript:",
          img:
            "http://img.52z.com/upload/news/image/20180621/20180621055734_59936.jpg",
          title: "送你一朵fua"
        },
        {
          url: "javascript:",
          img: "https://static.vux.li/demo/5.jpg",
          title: "送你一次旅行",
          fallbackImg:
            "http://pic27.nipic.com/20130324/9252150_152129329000_2.jpg"
        }
      ]
    };
  },
  methods: {
    demo01_onIndexChange() {},
    handleClick() {},
    onChangeTabs(index) {
      this.TabsIndex = index;
    },
    toDetail() {
      this.$router.push("/newsdetail");
    }
  }
};
</script>

<style lang="less" scoped>
body {
  background-color: #fbf9fe;
}
.label {
  display: flex;
  align-items: center;
  height: 39px;
  padding-left: 15px;
  img {
    height: 16px;
  }
  span {
    color: #b61413;
    font-size: 14px;
    padding-left: 2px;
  }
}
.el-carousel .el-carousel__indicators {
  background-color: red !important;
}
.copyright {
  font-size: 12px;
  color: #ccc;
  text-align: center;
}
.text-scroll {
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
}
.text-scroll p {
  font-size: 12px;
  text-align: center;
  line-height: 30px;
}
.black {
  background-color: #000;
}
.title {
  line-height: 100px;
  text-align: center;
  color: #fff;
}
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
.news {
  font-size: 14px;
  padding: 14px 13px;
  .news_title {
    padding: 7px 0px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
  }
}
.rank {
  display: flex;
  padding: 15px;
  .rankItem {
    flex: 1;
    &:first-child {
      margin-right: 10px;
    }
    img {
      height: 100%;
      width: 100%;
    }
  }
}
.introduce {
  padding: 15px;
  .introduce_title {
    font-size: 14px;
    margin-bottom: 7px;
    text-align: center;
    color: #333333;
  }
  .introduce_content {
    font-size: 12px;
    color: #666666;
  }
}
.compony {
  padding: 15px;
}
.product_show {
  padding: 15px;
}
</style>
<style lang="less">
#index {
  .el-tabs__nav-wrap::after {
    height: 1px;
  }
  .el-tabs__nav {
    line-height: 49px;
    height: 49px;
    padding-left: 15px;
    .el-tabs__active-bar {
      background-color: #b61413;
      left: 15px;
      bottom: 5px;
    }
    .el-tabs__item.is-active {
      color: #b61413;
    }
    .el-tabs__item {
      font-size: 16px;
      font-weight: 171px;
    }
  }
  .icon_more {
    // position: absolute;
  }
  .vux-slider > .vux-indicator > a > .vux-icon-dot.active,
  .vux-slider .vux-indicator-right > a > .vux-icon-dot.active {
    background-color: #b61413;
  }
}
</style>
