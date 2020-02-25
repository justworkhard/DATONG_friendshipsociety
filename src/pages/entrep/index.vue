<template>
  <div>
    <XHeader>
      <img class="logo" src="@/assets/images/mipmap-hdpi/logo.png" alt srcset />
    </XHeader>
    <Header logo="false" :tabList="tabList"></Header>
    <MSwiper :ptCode=6></MSwiper>
    <Tabs :TabsList="TabsList[0]" :href="devUrlList">
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
              class="news_title"
              @click="toDetail(item.id)"
              v-for="(item,index) in zhengce"
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
              v-for="(item,index) in huodong"
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
              v-for="(item,index) in guapai"
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
  getWebList 
} from "@/service/api";

export default {
  async created() {
    let temp = await this.getIndexList(
      {
        parentId: "web",
        ptCode: 6
      },
      "/",
      true
    );
    this.tabList = temp;
    getWebList(6).then(res=>{
      this.dongtaiList = res.data.tInfoList
    })
    getNewsList({
      colid: 95,
      ptCode: 6,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.xinwen = res.data.data;
    });
    getNewsList({
      colid: 96,
      ptCode: 6,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.chuangye = res.data.data;
    });
    getNewsList({
      colid: 97,
      ptCode: 6,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.zhiben = res.data.data;
    });
    getNewsList({
      colid: 98,
      ptCode: 6,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.zhengce = res.data.data;
    });
    getNewsList({
      colid: 91,
      ptCode: 6,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.huodong = res.data.data;
    });
    getNewsList({
      colid: 100,
      ptCode: 6,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.guapai = res.data.data;
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
    toDetail(newsId) {
      this.$router.push("/newsdetail?newsId=" + newsId);
    },
    onChangeTabs() {}
  },
  data() {
    return {
      dongtaiList: [],
      xinwen: [],
      chuangye: [],
      zhiben: [],
      zhengce: [],
      huodong: [],
      guapai: [],
      TabsList: [
        [{ title: "新闻动态" }],
        [{ title: "双创政策" }],
        [{ title: "双创活动" }],
        [{ title: "挂牌服务" }]
      ],
      hrefs: [
        [  ],
        ["/second/menu?title=双创服务&id=93&parentId=93&ptCode=6&indexUrl=%2F&hadChild=fale&currenId=98"],
        [
          "/second/menu?title=双创活动&id=91&parentId=91&ptCode=6&indexUrl=%2F&hadChild=fale&currenId=91"
        ],
        [
          "/second/menu?title=双创服务&id=93&parentId=93&ptCode=6&indexUrl=%2F&currentId=100"
        ]
      ],
      demo01_index: 0,
      tabList: [
        { label: "首页", url: "/" },
        { label: "双创动态", url: "/entrep/doubleE" },
        { label: "双创基地", url: "/entrep/ASATPT" },
        { label: "双创活动", url: "/entrep/ASATPT" },
        { label: "双创项目", url: "/entrep/ASATPT" },
        { label: "双创服务", url: "/entrep/serve" }
      ],
      newsList: [
        { title: "∙ 平城区人大常委会组织开展全区民营企业家人大代" },
        { title: "∙ 平城区人大常委会组织开展全区民营企业家人大代" },
        { title: "∙ 平城区人大常委会组织开展全区民营企业家人大代" },
        { title: "∙ 平城区人大常委会组织开展全区民营企业家人大代" },
        { title: "∙ 平城区人大常委会组织开展全区民营企业家人大代" },
        { title: "∙ 平城区人大常委会组织开展全区民营企业家人大代" },
        { title: "∙ 平城区人大常委会组织开展全区民营企业家人大代" }
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
