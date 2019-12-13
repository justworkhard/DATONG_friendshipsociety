<template>
  <div>
    <XHeader>
      <img class="logo" src="@/assets/images/mipmap-hdpi/logo.png" alt srcset>
    </XHeader>
    <Header logo="false" :tabList="tabList"></Header>
    <swiper :aspect-ratio="300/800" height="200px" :list="demo04_list" v-model="demo01_index" auto></swiper>
    <Tabs :TabsList="TabsList[0]" @onChangeTab="onChangeTabs" :href="hrefs[0]">
      <template slot-scope="slotProps">
        <div v-if="slotProps.slotdata===0">
          <ul class="news">
            <li
              class="news_title"
              @click="toDetail(item.id)"
              v-for="(item,index) in xinwen"
              :key="index"
            >{{item.title}}</li>
          </ul>
        </div>
        <div v-if="slotProps.slotdata===1">
          <ul class="news">
            <li
              class="news_title"
              @click="toDetail(item.id)"
              v-for="(item,index) in suoying"
              :key="index"
            >{{item.title}}</li>
          </ul>
        </div>
        <div v-if="slotProps.slotdata===2">
          <ul class="news">
            <li
              class="news_title"
              @click="toDetail(item.id)"
              v-for="(item,index) in jinrong"
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
              v-for="(item,index) in biaozhun"
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
              v-for="(item,index) in xingyong"
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
              v-for="(item,index) in guanli"
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
              v-for="(item,index) in shuju"
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
import { Swiper, SwiperItem } from "vux";
import Tabs from "@/components/Tabs.vue";

export default {
  async created() {
    let temp = await this.getIndexList(
      {
        parentId: "web",
        ptCode: 8
      },
      "/",
      true
    );
    this.tabList = temp;
    getNewsList({
      colid: 113,
      ptCode: 8,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.xinwen = res.data.data;
    });
    getNewsList({
      colid: 113,
      ptCode: 8,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.newsList = res.data.data;
    });
    getNewsList({
      colid: 111,
      ptCode: 8,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.suoying = res.data.data;
    });
    getNewsList({
      colid: 108,
      ptCode: 8,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.jinrong = res.data.data;
    });
    getNewsList({
      colid: 113,
      ptCode: 8,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.newsList = res.data.data;
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
    toDetail(newsId) {
      this.$router.push("/newsdetail?newsId=" + newsId);
    },
    onChangeTabs() {}
  },
  data() {
    return {
      xinwen: [],
      suoying: [],
      jinrong: [],
      biaozhun: [],
      xingyong: [],
      guanli: [],
      shuju: [],
      TabsList: [
        [{ title: "新闻动态" }, { title: "索引信息" }, { title: "金融信息" }],
        [{ title: "行业标准查询" }],
        [{ title: "企业信用查询" }],
        [{ title: "企业管理信息" }],
        [{ title: "行业数据查询" }]
      ],
      hrefs: [
        [
          "/social/message/list",
          "/social/message/list",
          "/social/message/list"
        ],
        ["/social/message/list"],
        ["/social/message/list"],
        [
          "/second/menu?title=企业管理信息&id=109&parentId=109&ptCode=8&indexUrl=%2F&hadChild=fale&currenId=109"
        ],
        ["/social/message/list"]
      ],
      demo01_index: 0,
      tabList: [],
      newsList: [],
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
