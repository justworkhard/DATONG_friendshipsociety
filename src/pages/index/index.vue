<template>
  <div id="index">
    <Header :tabList="tabList"></Header>
    <div class="label">
      <img src="@/assets/images/mipmap-hdpi/horn.png" alt srcset>
      <span>最新公告</span>
    </div>
    <swiper :aspect-ratio="300/800" height="200px" :list="carouselList" v-model="demo01_index" auto></swiper>
    <Tabs :TabsList="TabsList[0]" @onChangeTab="onChangeTabs" :href="hrefs[0]">
      <template slot-scope="slotProps">
        <div v-if="slotProps.slotdata===0">
          <ul class="news">
            <li
              class="news_title"
              v-for="(item,index) in newsList"
              @click="toDetail(item.id)"
              :key="index"
            >{{item.title}}</li>
          </ul>
        </div>
        <div v-if="slotProps.slotdata===1">
          <ul class="news">
            <li
              class="news_title"
              @click="toDetail()"
              v-for="(item,index) in huodong"
              :key="index"
            >{{item.title}}</li>
          </ul>
        </div>
      </template>
      <!-- <div v-if='slotData.activeIndex===0'> -->
    </Tabs>
    <Tabs id="ten" :TabsList="TabsList[1]" @onChangeTab="onChangeTabs" :href="hrefs[1]">
      <template slot-scope="slotProps">
        <div v-if="slotProps.slotdata===0">
          <Ten></Ten>
        </div>
        <div v-if="slotProps.slotdata===1">
          <ul class="news">
            <li
              class="news_title"
              @click="toDetail()"
              v-for="(item,index) in qiyexingxi"
              :key="index"
            >{{item.title}}</li>
          </ul>
        </div>
      </template>
      <!-- <div v-if='slotData.activeIndex===0'> -->
    </Tabs>
    <!-- 平台排行榜 -->
    <Tabs :TabsList="TabsList[2]" @onChangeTab="onChangeTabs" :href="hrefs[2]">
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
    </Tabs>
    <!-- 联谊会介绍 -->
    <Tabs :TabsList="TabsList[3]" @onChangeTab="onChangeTabs" :href="hrefs[3]">
      <template slot-scope="slotProps">
        <div v-if="slotProps.slotdata===0" class="introduce">
          <h3 class="introduce_title">{{about.title}}</h3>
          <div class="introduce_content">{{about.summary}}</div>
        </div>
      </template>
      <!-- <div v-if='slotData.activeIndex===0'> -->
    </Tabs>
    <!-- 联谊企业 -->
    <Tabs :TabsList="TabsList[4]" @onChangeTab="onChangeTabs" :href="hrefs[4]">
      <template slot-scope="slotProps">
        <div v-if="slotProps.slotdata===0" class="compony">
          <ComponyCard :data="item" v-for="(item,index)  in qiye" :key="index"></ComponyCard>
        </div>
      </template>
    </Tabs>
    <!-- 企业产品展示 -->
    <Tabs :TabsList="TabsList[5]" @onChangeTab="onChangeTabs" :href="hrefs[5]">
      <template slot-scope="slotProps">
        <div v-if="slotProps.slotdata===0" class="product_show">
          <ComponyCard :data="item" v-for="(item,index)  in productList" :key="index"></ComponyCard>
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
import { getCarouselList, getIndexList, getNewsList ,getSororityList} from "@/service/api";

export default {
  name: "app",
  components: { Header, Footer, Swiper, SwiperItem, Tabs, Ten, ComponyCard },
  async created() {
    let temp = await this.getIndexList(
      {
        parentId: "web",
        ptCode: 0
      },
      "/",
      true
    );
    this.tabList = temp;
    getNewsList({
      colid: 3,
      ptCode: 0,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.newsList = res.data.data;
    });
    getNewsList({
      colid: 10,
      ptCode: 0,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.huodong = res.data.data;
    });
    getNewsList({
      colid: 7,
      ptCode: 0,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.qiye = res.data.data;
    });
    getNewsList({
      colid: 8,
      ptCode: 0,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.productList = res.data.data;
    });
    getSororityList().then(res => {
      this.about = res.data.sororityInfo;
    });
  },
  data() {
    return {
      about: {},
      qiyexingxi: [],
      huodong: [],
      jieshao: {},
      productList: [],
      qiye: [],
      demo01_index: 0,
      activeName: "",
      TabsList: [
        [{ title: "新闻动态" }, { title: "联谊会活动" }],
        [{ title: "十大平台  企业信息服务" }],
        [{ title: "平台排行榜" }],
        [{ title: "联谊会介绍" }],
        [{ title: "联谊会企业" }],
        [{ title: "企业产品介绍" }]
      ],
      hrefs: [
        [
          "/second/menu?title=新闻动态&id=3&parentId=3&ptCode=0&indexUrl=%2F&hadChild=fale&currenId=3",
          "/newslist"
        ],
        ["", "企业信息服务"],
        [
          "/second/menu?title=平台排行榜&id=5&parentId=5&ptCode=0&indexUrl=%2F&hadChild=fale&currenId=5"
        ],
        ["/second/menu?title=联谊会介绍&id=6&parentId=6&ptCode=0&indexUrl=%2F"],
        [
          "/second/menu?title=联谊会企业&id=7&parentId=7&ptCode=0&indexUrl=%2F&hadChild=fale&currenId=7"
        ],
        [
          "/second/menu?title=企业产品展示&id=8&parentId=8&ptCode=0&indexUrl=%2F&hadChild=fale&currenId=8"
        ]
      ],
      tabList: [
        { label: "首页", url: "/" },
        { label: "热门资讯", url: "/newslist" },
        { label: "新闻动态", url: "/newslist" },
        { label: "十大平台", url: "#ten" },
        { label: "平台排行榜", url: "/policy/chat" }
      ],
      TabsIndex: 0,
      newsList: [],
      carouselList: [
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
    toDetail(newsId) {
      this.$router.push("/newsdetail?newsId=" + newsId);
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
  min-height: 194px;
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
    height: 128px;
    overflow: hidden;
    text-overflow: ellipsis;
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
