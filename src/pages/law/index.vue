<template>
  <div>
    <XHeader>
      <img class="logo" src="@/assets/images/mipmap-hdpi/logo.png" alt srcset>
    </XHeader>
    <Header logo="false" :tabList="tabList"></Header>
    <Search></Search>
    <swiper :aspect-ratio="300/800" height="200px" :list="carouselList" v-model="demo01_index" auto></swiper>
    <Tabs :TabsList="TabsList[0]" @onChangeTab="onChangeTabs" :href="hrefs[0]">
      <template slot-scope="slotProps">
        <div v-if="slotProps.slotdata===0">
          <ul class="news">
            <li
              class="news_title"
              @click="toDetail(item.id)"
              v-for="(item,index) in gongshifa"
              :key="index"
            >{{item.title}}</li>
          </ul>
        </div>
        <div v-if="slotProps.slotdata===1">
          <ul class="news">
            <li
              class="news_title"
              @click="toDetail(item.id)"
              v-for="(item,index) in hetongfa"
              :key="index"
            >{{item.title}}</li>
          </ul>
        </div>
        <div v-if="slotProps.slotdata===2">
          <ul class="news">
            <li
              class="news_title"
              @click="toDetail(item.id)"
              v-for="(item,index) in qingquan"
              :key="index"
            >{{item.title}}</li>
          </ul>
        </div>
      </template>
      <!-- <div v-if='slotData.activeIndex===0'> -->
    </Tabs>
    <Tabs :TabsList="TabsList[1]" @onChangeTab="onChangeTabs" :href="hrefs[1]">
      <template slot-scope="slotProps">
        <div v-if="slotProps.slotdata===0">
          <ul class="news">
            <li
              @click="toDetail(item.id)"
              class="news_title"
              v-for="(item,index) in newsList"
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
              v-for="(item,index) in shangbiaofa"
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
              v-for="(item,index) in zhuzuoquan"
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
              v-for="(item,index) in laodongfa"
              :key="index"
            >{{item.title}}</li>
          </ul>
        </div>
        <div v-if="slotProps.slotdata===1">2</div>
      </template>
      <!-- <div v-if='slotData.activeIndex===0'> -->
    </Tabs>
    <Tabs :TabsList="TabsList[5]" @onChangeTab="onChangeTabs" :href="hrefs[5]">
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
import Search from "@/components/Search.vue";
import { Swiper, SwiperItem } from "vux";
import Tabs from "@/components/Tabs.vue";
import { getNewsList, getContentCarouselList } from "@/service/api";

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
    getNewsList({
      colid: 45,
      ptCode: 2,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.gongshifa = res.data.data;
    });
    getNewsList({
      colid: 35,
      ptCode: 2,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.hetongfa = res.data.data;
    });
    getNewsList({
      colid: 36,
      ptCode: 2,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.qingquan = res.data.data;
    });
    getNewsList({
      colid: 19,
      ptCode: 2,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.lvshisuo = res.data.data[0];
    });
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
      colid: 63,
      ptCode: 2,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
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
    Footer
  },
  methods: {
    toDetail(newsId) {
      this.$router.push("/newsdetail?newsId=" + newsId);
    },
    onChangeTabs(id) {
      // console.log(id);
    }
  },
  data() {
    return {
      gongshifa: [],
      hetongfa: [],
      qingquan: [],
      lvshisuo: [],
      shangbiaofa: [],
      zhuzuoquan: [],
      laodongfa: [],
      zhuanlifa: [],
      TabsList: [
        [{ title: "公司法" }, { title: "合同法" }, { title: "侵权责任法" }],
        [{ title: "山西宝翰律师事务所简介" }],
        [{ title: "商标法" }],
        [{ title: "著作权法" }],
        [{ title: "劳动法" }],
        [{ title: "专利法" }]
      ],
      hrefs: [
        [
          "/second/menu?title=商法&id=30&parentId=30&ptCode=2&indexUrl=%2F",
          "/second/menu?title=民刑法&id=28&parentId=28&ptCode=2&indexUrl=%2F",
          "/second/menu?title=民刑法&id=28&parentId=28&ptCode=2&indexUrl=%2F"
        ],
        ["/newsDetail"],
        ["/law/zzs"],
        ["/law/zzs"],
        ["/second/menu?title=劳动法&id=31&parentId=31&ptCode=2&indexUrl=%2F"],
        ["/law/zzs"]
      ],
      demo01_index: 0,
      tabList: [
        { label: "首页", url: "/" },
        { label: "宪法", url: "/law/constitution" },
        { label: "民刑法", url: "/law/civilLaw" },
        { label: "行政法", url: "/law/administrativeLaw" },
        { label: "商法", url: "/law/commercialLaw" },
        { label: "劳动法", url: "/law/labour" },
        { label: "税法", url: "/law/taxLaw" },
        { label: "指导案例", url: "/law/guide" }
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
