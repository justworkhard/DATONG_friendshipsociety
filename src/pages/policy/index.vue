<template>
  <div>
    <XHeader>
      <img class="logo" src="@/assets/images/mipmap-hdpi/logo.png" alt srcset>
    </XHeader>
    <Header logo="false" :tabList="tablist"></Header>
    <swiper :aspect-ratio="300/800" height="200px" :list="carouselList" v-model="demo01_index" auto></swiper>
    <Tabs :TabsList="TabsList[0]" @onChangeTab="onChangeTabs" :href="['/policy/activeAnddynamic']">
      <template slot-scope="slotProps">
        <div v-if="slotProps.slotdata===0">
          <ul class="news">
            <li
              class="news_title"
              @click="toDetail(item.id)"
              v-for="(item,index) in newsList"
              :key="index"
            >{{item.title}}</li>
          </ul>
        </div>
      </template>
      <!-- <div v-if='slotData.activeIndex===0'> -->
    </Tabs>
    <Tabs
      :TabsList="TabsList[1]"
      @onChangeTab="onChangeTabs"
      :href="['/second/menu?title=政策汇总&id=15&parentId=15&ptCode=1&indexUrl=%2F']"
    >
      <template slot-scope="slotProps">
        <div v-if="slotProps.slotdata===0">
          <ul class="news">
            <li
              class="news_title"
              v-for="(item,index) in guowuyuan"
              :key="index"
              @click="toDetail(item.id)"
            >{{item.title}}</li>
          </ul>
        </div>
        <div v-if="slotProps.slotdata===1">2</div>
      </template>
      <!-- <div v-if='slotData.activeIndex===0'> -->
    </Tabs>
    <Tabs
      :TabsList="TabsList[2]"
      @onChangeTab="onChangeTabs"
      :href="['/second/menu?title=政策解读&id=16&parentId=16&ptCode=1&indexUrl=%2F&currentId=24']"
    >
      <template slot-scope="slotProps">
        <div v-if="slotProps.slotdata===0">
          <ul class="news">
            <li
              class="news_title"
              v-for="(item,index) in mingying"
              :key="index"
              @click="toDetail(item.id)"
            >{{item.title}}</li>
          </ul>
        </div>
        <div v-if="slotProps.slotdata===1">2</div>
      </template>
      <!-- <div v-if='slotData.activeIndex===0'> -->
    </Tabs>
    <Tabs
      :TabsList="TabsList[3]"
      @onChangeTab="onChangeTabs"
      :href="['/second/menu?title=观点观察&id=17&parentId=17&ptCode=1&indexUrl=%2F&hadChild=fale&currenId=17']"
    >
      <template slot-scope="slotProps">
        <div v-if="slotProps.slotdata===0">
          <ul class="news">
            <li
              class="news_title"
              v-for="(item,index) in guandian"
              :key="index"
              @click="toDetail(item.id)"
            >{{item.title}}</li>
          </ul>
        </div>
        <div v-if="slotProps.slotdata===1">2</div>
      </template>
      <!-- <div v-if='slotData.activeIndex===0'> -->
    </Tabs>
    <Tabs
      :TabsList="TabsList[4]"
      @onChangeTab="onChangeTabs"
      :href="['/second/menu?title=经验交流&id=18&parentId=18&ptCode=1&indexUrl=%2F&hadChild=fale&currenId=18']"
    >
      <template slot-scope="slotProps">
        <div v-if="slotProps.slotdata===0">
          <ul class="news">
            <li
              class="news_title"
              v-for="(item,index) in jingyan"
              :key="index"
              @click="toDetail(item.id)"
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
import { Swiper, SwiperItem } from "vux";
import Tabs from "@/components/Tabs.vue";
import { getNewsList ,getContentCarouselList} from "@/service/api";

export default {
  components: {
    XHeader,
    Header,
    Swiper,
    SwiperItem,
    Tabs,
    Footer
  },
  async created() {
    let temp = await this.getIndexList(
      {
        parentId: "web",
        ptCode: 1
      },
      "/",
      true
    );
    this.tablist = temp;
    getNewsList({
      colid: 3,
      ptCode: 1,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.newsList = res.data.data;
    });

    getNewsList({
      colid: 19,
      ptCode: 1,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.guowuyuan = res.data.data;
    });
    getNewsList({
      colid: 24,
      ptCode: 1,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.mingying = res.data.data;
    });
    getNewsList({
      colid: 17,
      ptCode: 1,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.guandian = res.data.data;
    });
    getNewsList({
      colid: 18,
      ptCode: 1,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.jingyan = res.data.data;
    });
      getContentCarouselList(1).then(res => {
      let temp = []
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
  methods: {
    toDetail(newsId) {
      this.$router.push("/newsdetail?newsId=" + newsId);
    },
    onChangeTabs() {}
  },
  data() {
    return {
      guowuyuan: [],
      mingying: [],
      guandian: [],
      jingyan: [],
      TabsList: [
        [{ title: "新闻动态" }],
        [{ title: "国务院" }],
        [{ title: "民营企业政策" }],
        [{ title: "观点考察" }],
        [{ title: "经验交流" }]
      ],
      demo01_index: 0,
      tablist: [],
      newsList: [],
      carouselList: [
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
