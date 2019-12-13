<template>
  <div>
    <XHeader>
      <img class="logo" src="@/assets/images/mipmap-hdpi/logo.png" alt srcset>
    </XHeader>
    <Header logo="false" :tabList="tabList"></Header>
    <Search></Search>
    <swiper :aspect-ratio="300/800" height="200px" :list="demo04_list" v-model="demo01_index" auto></swiper>
    <Tabs :TabsList="TabsList[0]" @onChangeTab="onChangeTabs">
      <template slot-scope="slotProps">
        <div v-if="slotProps.slotdata===0">
          <ul class="news">
            <li
              class="news_title"
              @click="toDetail(item.id)"
              v-for="(item,index) in qiye"
              :key="index"
            >{{item.title}}</li>
          </ul>
        </div>
        <div v-if="slotProps.slotdata===1">
          <ul class="news">
            <li
              class="news_title"
              @click="toDetail(item.id)"
              v-for="(item,index) in guanli"
              :key="index"
            >{{item.title}}</li>
          </ul>
        </div>
        <div v-if="slotProps.slotdata===2">
          <ul class="news">
            <li
              class="news_title"
              @click="toDetail(item.id)"
              v-for="(item,index) in baijia"
              :key="index"
            >{{item.title}}</li>
          </ul>
        </div>
      </template>
      <!-- <div v-if='slotData.activeIndex===0'> -->
    </Tabs>
    <Tabs :TabsList="TabsList[1]" @onChangeTab="onChangeTabs">
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
    <Tabs :TabsList="TabsList[2]" @onChangeTab="onChangeTabs">
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
    <Tabs :TabsList="TabsList[3]" @onChangeTab="onChangeTabs">
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
import Search from "@/components/Search.vue";
import { Swiper, SwiperItem } from "vux";
import Tabs from "@/components/Tabs.vue";

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
    getNewsList({
      colid: 125,
      ptCode: 10,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.qiye = res.data.data;
    });
    getNewsList({
      colid: 105,
      ptCode: 10,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.chuangye = res.data.data;
    });
    getNewsList({
      colid: 122,
      ptCode: 10,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.zhiben = res.data.data;
    });
    getNewsList({
      colid: 105,
      ptCode: 10,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.biaozhun = res.data.data;
    });
    getNewsList({
      colid: 105,
      ptCode: 10,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.jiaoliu = res.data.data;
    });
    getNewsList({
      colid: 105,
      ptCode: 10,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.zhengce = res.data.data;
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
    onChangeTabs() {}
  },
  data() {
    return {
      qiye: [],
      guanli: [],
      baijia: [],
      fengmao: [],
      fengcai: [],
      ganwu: [],
      TabsList: [
        [{ title: "企业文化" }, { title: "管理创新" }, { title: "百家讲坛" }],
        [{ title: "企业风貌" }],
        [{ title: "员工风采" }],
        [{ title: "管理感悟" }]
      ],
      demo01_index: 0,
      tabList: [
        { label: "首页", url: "/" },
        { label: "管理创新", url: "/policy/summary" },
        { label: "经营心得", url: "/policy/explain" },
        { label: "学习讨论", url: "/policy/inspect" },
        { label: "企业文化", url: "/policy/chat" }
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
