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
              v-for="(item,index) in dongtai"
              :key="index"
            >{{item.title}}</li>
          </ul>
        </div>
        <div v-if="slotProps.slotdata===1">
          <ul class="news">
            <li
              class="news_title"
              @click="toDetail(item.id)"
              v-for="(item,index) in zhaoshang"
              :key="index"
            >{{item.title}}</li>
          </ul>
        </div>
        <div v-if="slotProps.slotdata===2">
          <ul class="news">
            <li
              class="news_title"
              @click="toDetail(item.id)"
              v-for="(item,index) in youhui"
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
            <li @click="toDetail(item.id)" class="news_title" v-for="(item,index) in fuwuye" :key="index">{{item.title}}</li>
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
            <li @click="toDetail(item.id)" class="news_title" v-for="(item,index) in zhizhao" :key="index">{{item.title}}</li>
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
            <li @click="toDetail(item.id)" class="news_title" v-for="(item,index) in wenhua" :key="index">{{item.title}}</li>
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
            <li @click="toDetail(item.id)" class="news_title" v-for="(item,index) in xiandai" :key="index">{{item.title}}</li>
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
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import { Swiper, SwiperItem } from "vux";
import Tabs from "@/components/Tabs.vue";

export default {
  components: {
    Footer,
    XHeader,
    Header,
    Swiper,
    SwiperItem,
    Tabs
  },
  async created() {
    let temp = await this.getIndexList(
      {
        parentId: "web",
        ptCode: 4
      },
      "/",
      true
    );
    this.tabList = temp;
    getNewsList({
      colid: 70,
      ptCode: 4,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.dongtai = res.data.data;
    });
    getNewsList({
      colid: 72,
      ptCode: 4,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.zhaoshang = res.data.data;
    });
    getNewsList({
      colid: 80,
      ptCode: 4,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.youhui = res.data.data;
    });
    getNewsList({
      colid: 76,
      ptCode: 4,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.fuwuye = res.data.data;
    });
    getNewsList({
      colid: 77,
      ptCode: 3,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.zhizhao = res.data.data;
    });
    getNewsList({
      colid: 78,
      ptCode: 3,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.wenhua = res.data.data;
    });
    getNewsList({
      colid: 75,
      ptCode: 3,
      pageSize: 5,
      pageNo: 1
    }).then(res => {
      this.xiandai = res.data.data;
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
      dongtai: [],
      zhaoshang: [],
      youhui: [],
      fuwuye: [],
      wenhua: [],
      zhizhao: [],
      xiandai: [],
      TabsList: [
        [{ title: "动态工作" }, { title: "招商信息" }, { title: "优惠政策" }],
        [{ title: "服务业" }],
        [{ title: "制作业" }],
        [{ title: "文化旅游" }],
        [{ title: "现代农业" }]
      ],
      demo01_index: 0,
      tabList: [
        // { label: "首页", url: "/" },
        // { label: "动态工作", url: "/product/recommend/work" },
        // { label: "项目介绍", url: "/product/recommend/projectRe" },
        // { label: "招商信息", url: "/product/recommend/zsxx" },
        // { label: "政策环境", url: "/product/recommend/envir" },
        // { label: "联系我们", url: "/policy/chat" }
      ],
      hrefs: [
        [
          "/second/menu?title=动态工作&id=70&parentId=70&ptCode=4&indexUrl=%2F&hadChild=fale&currenId=70",
          "/second/menu?title=招商信息&id=72&parentId=72&ptCode=4&indexUrl=%2F&hadChild=fale&currenId=72",
          "/second/menu?title=政策环境&id=73&parentId=73&ptCode=4&indexUrl=%2F&currentId=80"
        ],
        ["/second/menu?title=项目介绍&id=71&parentId=71&ptCode=4&indexUrl=%2F&currentId=76"],
        ["/second/menu?title=项目介绍&id=71&parentId=71&ptCode=4&indexUrl=%2F&currentId=77"],
        ["/second/menu?title=项目介绍&id=71&parentId=71&ptCode=4&indexUrl=%2F&currentId=78"],
        ["/second/menu?title=项目介绍&id=71&parentId=71&ptCode=4&indexUrl=%2F&currentId=75"]
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
