<template>
  <div>
    <XHeader>
      <img class="logo" src="@/assets/images/mipmap-hdpi/logo.png" alt srcset />
    </XHeader>
    <Header logo="false" :tabList="tabList"></Header>
    <MSwiper :ptCode=2></MSwiper>
    <Tabs :TabsList="TabsList[0]"  :href="devUrlList">
      <template slot-scope="slotProps">
        <div v-if="slotProps.slotdata=== index" v-for="(newsItem,index) in devList" :key="index">
          <ul class="news">
            <li
              class="news_title"
              @click="toDetail(item.id)"
              v-for="(item,index) in newsItem"
              :key="index"
            >{{item.title}}</li>
          </ul>
        </div>
      </template>
      <!-- <div v-if='slotData.activeIndex===0'> -->
    </Tabs>
    <Tabs :TabsList="TabsList[1]">
      <template slot-scope="slotProps">
        <div v-if="slotProps.slotdata===0">
          <ul class="news">
            <li class="news_title" v-for="(item,index) in zhiben" :key="index">{{item.title}}</li>
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
  getDevColumnList
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
    getDevColumnList(3).then(res => {
      console.log(res.data.devColumnList, "=-=-=");

      res.data.devColumnList.forEach(element => {
        console.log(element.id, "=-=-=-=");

        let url = "";
        this.tabList.forEach(item => {
          if (item.title === element.columnName) {
            url = item.url;
          }
        });
        this.TabsList[0].push({
          title: element.columnName
        });
        this.devUrlList.push(url);
        getNewsList({
          ptCode: "3",
          colid: element.id,
          pageSize: "5",
          pageNo: "0"
        }).then(res => {
          this.devList.push(res.data.data);
          console.log(this.devList, "this.devList");
        });
      });
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
      colid: 28,
      ptCode: 3,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.zhiben = res.data.data;
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
      devList: [],
      devUrlList: [],
      zhiben: [],
      xinwen: [],
      TabsList: [[], [{ title: "资本市场" }]],
      demo01_index: 0,
      tabList: [
        { label: "首页", url: "/" },
        { label: "企业咨询", url: "/business/consulting/list" }
      ],
      hrefs: ["/business/consulting/list"],
      newsList: [
        { title: "∙ 平城区人大常委会组织开展全区民营企业家人大代" },
        { title: "∙ 平城区人大常委会组织开展全区民营企业家人大代" },
        { title: "∙ 平城区人大常委会组织开展全区民营企业家人大代" },
        { title: "∙ 平城区人大常委会组织开展全区民营企业家人大代" },
        { title: "∙ 平城区人大常委会组织开展全区民营企业家人大代" },
        { title: "∙ 平城区人大常委会组织开展全区民营企业家人大代" },
        { title: "∙ 平城区人大常委会组织开展全区民营企业家人大代" }
      ],
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
