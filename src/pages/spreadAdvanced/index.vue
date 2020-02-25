<template>
  <div>
    <XHeader>
      <img class="logo" src="@/assets/images/mipmap-hdpi/logo.png" alt srcset />
    </XHeader>
    <Header logo="false" :tabList="tabList"></Header>
    <MSwiper :ptCode="10"></MSwiper>
    <Tabs :TabsList="TabsList[0]" >
      <ul class="news">
        <li
          class="news_title"
          @click="toDetail(item.id)"
          v-for="(item,index) in dongtaiList"
          :key="index"
        >{{item.title}}</li>
      </ul>
    </Tabs>
    <Tabs :TabsList="TabsList[1]" @onChangeTab="onChangeTabs" :href="hrefs[1]">
      <template slot-scope="slotProps">
        <div v-if="slotProps.slotdata===0">
          <ul class="news">
            <li
              @click="toDetail(item.id)"
              class="news_title"
              v-for="(item,index) in fengmao"
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
              v-for="(item,index) in fengcai"
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
              v-for="(item,index) in ganwu"
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
        ptCode: 10
      },
      "/",
      true
    );
    this.tabList = temp;
    getWebList(10).then(res => {
      this.dongtaiList = res.data.tInfoList;
    });
    getNewsList({
      colid: 132,
      ptCode: 10,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.fengmao = res.data.data;
    });
    getNewsList({
      colid: 133,
      ptCode: 10,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.fengcai = res.data.data;
    });
    getNewsList({
      colid: 127,
      ptCode: 10,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.ganwu = res.data.data;
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
    onChangeTabs() {}
  },
  data() {
    return {
      dongtaiList: [],
      baijia: [],
      fengmao: [],
      fengcai: [],
      ganwu: [],
      TabsList: [
        [{ title: "新闻动态" }],
        [{ title: "企业风貌" }],
        [{ title: "员工风采" }],
        [{ title: "管理感悟" }]
      ],
      demo01_index: 0,
      tabList: [],
      newsList: [],
      hrefs: [
        [],
        ["/second/menu?title=企业文化&id=125&parentId=125&ptCode=10&indexUrl=%2F&currentId=132"],
        ["/second/menu?title=企业文化&id=125&parentId=125&ptCode=10&indexUrl=%2F&currentId=133"],
        ["/second/menu?title=经营心得&id=123&parentId=123&ptCode=10&indexUrl=%2F&currentId=127"],
      ],
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
