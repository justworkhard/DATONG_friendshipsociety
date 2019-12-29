<template>
  <div>
    <XHeader>
      <img class="logo" src="@/assets/images/mipmap-hdpi/logo.png" alt srcset />
    </XHeader>
    <Header logo="false" :tabList="tabList"></Header>
    <MSwiper :ptCode=5></MSwiper>
    <Tabs :TabsList="TabsList[0]" >
          <ul class="news">
            <li
              class="news_title"
              @click="toDetail(item.id)"
              v-for="(item,index) in dongtaiList "
              :key="index"
            >{{item.title}}</li>
          </ul>
    </Tabs>
    <Tabs :TabsList="TabsList[1]" @onChangeTab="onChangeTabs" :href="hrefs[0]">
      <template slot-scope="slotProps">
        <div v-if="slotProps.slotdata===0">
          <ul class="news">
            <li
              @click="toDetail(item.id)"
              class="news_title"
              v-for="(item,index) in tujing"
              :key="index"
            >{{item.title}}</li>
          </ul>
        </div>
        <div v-if="slotProps.slotdata===1">2</div>
      </template>
      <!-- <div v-if='slotData.activeIndex===0'> -->
    </Tabs>
    <Tabs :TabsList="TabsList[2]" @onChangeTab="onChangeTabs" :href="hrefs[0]">
      <template slot-scope="slotProps">
        <div v-if="slotProps.slotdata===0">
          <ul class="news">
            <li
              @click="toDetail(item.id)"
              class="news_title"
              v-for="(item,index) in zhapian"
              :key="index"
            >{{item.title}}</li>
          </ul>
        </div>
        <div v-if="slotProps.slotdata===1">2</div>
      </template>
      <!-- <div v-if='slotData.activeIndex===0'> -->
    </Tabs>
    <Tabs :TabsList="TabsList[3]" @onChangeTab="onChangeTabs" :href="hrefs[0]">
      <template slot-scope="slotProps">
        <div v-if="slotProps.slotdata===0">
          <ul class="news">
            <li
              @click="toDetail(item.id)"
              class="news_title"
              v-for="(item,index) in anli"
              :key="index"
            >{{item.title}}</li>
          </ul>
        </div>
        <div v-if="slotProps.slotdata===1">2</div>
      </template>
      <!-- <div v-if='slotData.activeIndex===0'> -->
    </Tabs>
    <Tabs :TabsList="TabsList[4]" @onChangeTab="onChangeTabs" :href="hrefs[0]">
      <template slot-scope="slotProps">
        <div v-if="slotProps.slotdata===0">
          <ul class="news">
            <li
              @click="toDetail(item.id)"
              class="news_title"
              v-for="(item,index) in fangshi"
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
        ptCode: 5
      },
      "/",
      true
    );
    this.tabList = temp;
        getWebList(5).then(res=>{
      this.dongtaiList = res.data.tInfoList
    })
    getNewsList({
      colid: 87,
      ptCode: 5,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.pingtai = res.data.data;
    });
    getNewsList({
      colid: 82,
      ptCode: 5,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.dingyi = res.data.data;
    });
    getNewsList({
      colid: 83,
      ptCode: 5,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.fangshi = res.data.data;
    });
    getNewsList({
      colid: 84,
      ptCode: 5,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.tujing = res.data.data;
    });
    getNewsList({
      colid: 85,
      ptCode: 5,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.zhapian = res.data.data;
    });
    getNewsList({
      colid: 86,
      ptCode: 5,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.anli = res.data.data;
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
      pingtai: [],
      dingyi: [],
      fangshi: [],
      tujing: [],
      zhapian: [],
      anli: [],
      TabsList: [
        [{title: '新闻动态'}],
        [{ title: "融资途径" }],
        [{ title: "警惕诈骗" }],
        [{ title: "融资案例" }],
        [{ title: "融资方式" }]
      ],
      hrefs: [
        [
          "/second/menu?title=融资平台&id=87&parentId=87&ptCode=5&indexUrl=%2F&hadChild=fale&currenId=87",
          "/second/menu?title=融资定义&id=82&parentId=82&ptCode=5&indexUrl=%2F&hadChild=fale&currenId=82",
          "/second/menu?title=融资方式&id=83&parentId=83&ptCode=5&indexUrl=%2F&hadChild=fale&currenId=83"
        ],
        [
          "/second/menu?title=融资途径&id=84&parentId=84&ptCode=5&indexUrl=%2F&hadChild=fale&currenId=84"
        ],
        [
          "/second/menu?title=警惕诈骗&id=85&parentId=85&ptCode=5&indexUrl=%2F&hadChild=fale&currenId=85"
        ],
        [
          "/second/menu?title=融资案例&id=86&parentId=86&ptCode=5&indexUrl=%2F&hadChild=fale&currenId=86"
        ],
        [
          "/second/menu?title=融资方式&id=83&parentId=83&ptCode=5&indexUrl=%2F&hadChild=fale&currenId=83"
        ]
      ],
      tabList: []
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
