<template>
  <div>
    <XHeader>
      <img class="logo" src="@/assets/images/mipmap-hdpi/logo.png" alt srcset />
    </XHeader>
    <Header logo="false" :tabList="tabList"></Header>
    <MSwiper :ptCode=2></MSwiper>
    <Tabs :TabsList="TabsList[0]" @onChangeTab="onChangeTabs" >
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
              v-for="(item,index) in shangbiaofa"
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
              v-for="(item,index) in zhuzuoquan"
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
              v-for="(item,index) in laodongfa"
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
              v-for="(item,index) in zhuanlifa"
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
import Search from "@/components/Search.vue";
import { Swiper, SwiperItem } from "vux";
import Tabs from "@/components/Tabs.vue";
import {
  getNewsList,
  getContentCarouselList,
  getWebList
} from "@/service/api";

export default {
  async created() {
    let temp = await this.getIndexList(
      {
        parentId: "web",
        ptCode: 2
      },
      "/",
      true
    );
    this.tabList = temp;
    getWebList(2).then(res=>{
      this.dongtaiList = res.data.tInfoList
    })

    getNewsList({
      colid: 60,
      ptCode: 2,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.shangbiaofa = res.data.data;
    });
    getNewsList({
      colid: 136,
      ptCode: 2,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.zhuzuoquan = res.data.data;
    });
    getNewsList({
      colid: 31,
      ptCode: 2,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      console.log('========');
      
      this.laodongfa = res.data.data;
    });
    getNewsList({
      colid: 135,
      ptCode: 2,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.zhuanlifa = res.data.data;
    });
    getContentCarouselList(2).then(res => {
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
    Search,
    Footer,
    MSwiper
  },
  methods: {
    toDetail(newsId) {
      this.$router.push("/newsdetail?newsId=" + newsId);
    },
    onChangeTabs(id) {
    }
  },
  data() {
    return {
      dongtaiList: [],
      gongshifa: [],
      hetongfa: [],
      qingquan: [],
      lvshisuo: [],
      shangbiaofa: [],
      zhuzuoquan: [],
      laodongfa: [],
      zhuanlifa: [],
      TabsList: [
        [{title: '新闻动态'}],
        [{ title: "商标法" }],
        [{ title: "著作权法" }],
        [{ title: "劳动法" }],
        [{ title: "专利法" }]
      ],
      hrefs: [
        [],
        ["/second/menu?title=指导案例&id=33&parentId=33&ptCode=2&indexUrl=%2F"],
        ["/second/menu?title=民刑法&id=28&parentId=28&ptCode=2&indexUrl=%2F&currentId=136"],
        ["/second/menu?title=劳动法&id=31&parentId=31&ptCode=2&indexUrl=%2F"],
        ["/second/menu?title=民刑法&id=28&parentId=28&ptCode=2&indexUrl=%2F&currentId=135"],
      ],
      demo01_index: 0,
      tabList: [],
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
