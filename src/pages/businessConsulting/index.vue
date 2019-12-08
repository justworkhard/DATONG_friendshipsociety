<template>
  <div>
    <XHeader>
      <img class="logo" src="@/assets/images/mipmap-hdpi/logo.png" alt srcset>
    </XHeader>
    <Header logo="false" :tabList="tabList"></Header>
    <swiper :aspect-ratio="300/800" height="200px" :list="demo04_list" v-model="demo01_index" auto></swiper>
    <Tabs :TabsList="TabsList[0]" :href="hrefs">
      <template slot-scope="slotProps">
        <div v-if="slotProps.slotdata===0">
          <ul class="news">
            <li
              class="news_title"
              @click="toDetail()"
              v-for="(item,index) in xinwen"
              :key="index"
            >{{item.title}}</li>
          </ul>
        </div>
        <div v-if="slotProps.slotdata===1">2</div>
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
import { Swiper, SwiperItem } from "vux";
import Tabs from "@/components/Tabs.vue";
import { getNewsList } from "@/service/api";


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
  },
  components: {
    XHeader,
    Header,
    Swiper,
    SwiperItem,
    Tabs,
    Footer
  },
  methods: {
    toDetail() {
      this.$router.push("/");
    }
  },
  data() {
    return {
      zhiben: [],
      xinwen: [],
      TabsList: [[{title:"新闻动态"}], [{title: "资本市场"}]],
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
