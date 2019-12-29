<template>
  <div>
    <XHeader>
      <img class="logo" src="@/assets/images/mipmap-hdpi/logo.png" alt srcset>
    </XHeader>
    <Header logo="false" :tabList="tabList"></Header>
    <MSwiper :ptCode=7></MSwiper>
    <Tabs :TabsList="TabsList[0]" @onChangeTab="onChangeTabs" :href="hrefs[0]">
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
import MSwiper from "@/components/MSwiper.vue";
import Footer from "@/components/Footer.vue";
import { Swiper, SwiperItem } from "vux";
import Tabs from "@/components/Tabs.vue";

export default {
  async created() {
    let temp = await this.getIndexList(
      {
        parentId: "web",
        ptCode: 7
      },
      "/",
      true
    );
    this.tabList = temp;
    getNewsList({
      colid: 105,
      ptCode: 7,
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
      TabsList: [[{title:"企业产品展示"}]],
      hrefs: [
        ["/second/menu?title=产品展示&id=105&parentId=105&ptCode=7&indexUrl=%2F&hadChild=fale&currenId=105"],
      ],
      tabList: [
      ],
      newsList: [
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
  min-width: 194px;
  .news_title {
    padding: 7px 0px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
