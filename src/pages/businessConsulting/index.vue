<template>
  <div>
    <XHeader>
      <img class="logo" src="@/assets/images/mipmap-hdpi/logo.png" alt srcset />
    </XHeader>
    <Header logo="false" :tabList="tabList"></Header>
    <MSwiper :ptCode="2"></MSwiper>
    <Tabs :TabsList="TabsList[0]" @onChangeTab="onChangeTabs">
      <ul class="news">
        <li
          class="news_title"
          @click="toDetail(item.id)"
          v-for="(item,index) in dongtaiList"
          :key="index"
        >{{item.title}}</li>
      </ul>
      <!-- <div v-if='slotData.activeIndex===0'> -->
    </Tabs>
    <Tabs :TabsList="TabsList[1]" @onChangeTab="onChangeTabs" :href="hrefs[1]">
      <template slot-scope="slotProps">
        <div v-if="slotProps.slotdata===0">
          <ul class="news">
            <li
              @click="toDetail(item.id)"
              class="news_title"
              v-for="(item,index) in guanli"
              :key="index"
            >{{item.title}}</li>
          </ul>
        </div>
        <div v-if="slotProps.slotdata===1">2</div>
      </template>
      <!-- <div v-if='slotData.activeIndex===0'> -->
    </Tabs>
    <Tabs :TabsList="TabsList[2]" @onChangeTab="onChangeTabs" :href="hrefs[2]">
      <template slot-scope="slotProps">
        <div v-if="slotProps.slotdata===0">
          <ul class="news">
            <li
              @click="toDetail(item.id)"
              class="news_title"
              v-for="(item,index) in huanbao"
              :key="index"
            >{{item.title}}</li>
          </ul>
        </div>
        <div v-if="slotProps.slotdata===1">2</div>
      </template>
      <!-- <div v-if='slotData.activeIndex===0'> -->
    </Tabs>
    <Tabs :TabsList="TabsList[3]" @onChangeTab="onChangeTabs" :href="hrefs[3]">
      <template slot-scope="slotProps">
        <div v-if="slotProps.slotdata===0">
          <ul class="news">
            <li
              @click="toDetail(item.id)"
              class="news_title"
              v-for="(item,index) in shengcan"
              :key="index"
            >{{item.title}}</li>
          </ul>
        </div>
        <div v-if="slotProps.slotdata===1">2</div>
      </template>
      <!-- <div v-if='slotData.activeIndex===0'> -->
    </Tabs>
    <Tabs :TabsList="TabsList[4]" @onChangeTab="onChangeTabs" :href="hrefs[4]">
      <template slot-scope="slotProps">
        <div v-if="slotProps.slotdata===0">
          <ul class="news">
            <li
              @click="toDetail(item.id)"
              class="news_title"
              v-for="(item,index) in peixun"
              :key="index"
            >{{item.title}}</li>
          </ul>
        </div>
        <div v-if="slotProps.slotdata===1">2</div>
      </template>
      <!-- <div v-if='slotData.activeIndex===0'> -->
    </Tabs>
    <Footer></Footer>
  </div>
</template>
<script>
import XHeader from "@/components/XHeader.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import MSwiper from "@/components/MSwiper.vue";
import { Swiper, SwiperItem } from "vux";
import Tabs from "@/components/Tabs.vue";
import {
  getNewsList,
  getContentCarouselList,
  getDevColumnList,
  getWebList
} from "@/service/api";

export default {
  async created() {
    let temp = await this.getIndexList(
      {
        parentId: "web",
        ptCode: 3
      },
      "/",
      true
    );
    this.tabList = temp;
    getWebList(3).then(res => {
      this.dongtaiList = res.data.tInfoList;
    });
    getNewsList({
      colid: 30,
      ptCode: 3,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.xinwen = res.data.data;
    });
    getNewsList({
      colid: 65,
      ptCode: 3,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.guanli = res.data.data;
    });
    getNewsList({
      colid: 67,
      ptCode: 3,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.huanbao = res.data.data;
    });
    getNewsList({
      colid: 66,
      ptCode: 3,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.shengcan = res.data.data;
    });
    getNewsList({
      colid: 68,
      ptCode: 3,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.peixun = res.data.data;
    });
    getContentCarouselList(3).then(res => {
      let temp = [];
      res.data.contentCarouselList.forEach(element => {
        temp.push({
          url: "javascript:",
          img: element.picUrl,
          title: element.contentTitle
        });
      });
      this.carouselList = temp;
    });
  },
  components: {
    XHeader,
    Header,
    Swiper,
    SwiperItem,
    Tabs,
    Footer,
    MSwiper
  },
  methods: {
    toDetail() {
      this.$router.push("/");
    }
  },
  data() {
    return {
      dongtaiList: [],
      devList: [],
      devUrlList: [],
      guanli: [],
      huanbao: [],
      peixun: [],
      shengcan: [],
      xinwen: [],
      TabsList: [
        [{ title: "新闻动态" }],
        [{ title: "企业管理" }],
        [{ title: "企业环保" }],
        [{ title: "安全生产" }],
        [{ title: "管理培训" }]
      ],
      demo01_index: 0,
      tabList: [
        { label: "首页", url: "/" },
        { label: "企业咨询", url: "/business/consulting/list" }
      ],
      hrefs: [
        [],
        ["/second/menu?title=企业管理&id=65&parentId=65&ptCode=3&indexUrl=%2F&hadChild=fale&currenId=65"],
        [
          "/second/menu?title=企业环保&id=67&parentId=67&ptCode=3&indexUrl=%2F&hadChild=fale&currenId=67"
        ],
        ["/second/menu?title=安全生产&id=66&parentId=66&ptCode=3&indexUrl=%2F&hadChild=fale&currenId=66"],
        [
          "/second/menu?title=管理培训&id=68&parentId=68&ptCode=3&indexUrl=%2F&hadChild=fale&currenId=68 "
        ]
      ],
      newsList: [],
      carouselList: []
    };
  }
};
</script>
<style lang="less" scoped>
.logo {
  width: 257px;
  height: 26px;
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
  }
}
</style>
