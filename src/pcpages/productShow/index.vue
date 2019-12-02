<template>
  <div>
    <Welcome></Welcome>
    <Header :navs="navList"></Header>

    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import Welcome from "@/comonentsPC/welcome.vue";
import Header from "@/comonentsPC/Header.vue";
import RedHeader from "@/comonentsPC/RedHeader.vue";
import NewsNavbar from "@/comonentsPC/newsNavbar.vue";
import Footer from "@/comonentsPC/Footer.vue";
import { Swiper, SwiperItem } from "vux";

export default {
  components: {
    Welcome,
    Header,
    Swiper,
    SwiperItem,
    Footer,
    RedHeader,
    NewsNavbar
  },
  data() {
    return {
      navList: [
        { title: "首页", url: "/project/promot" },
        { title: "新闻动态", url: "/project/promot/other/menu?title=联谊会简介" },
        {
          title: "参展须知",
          url: "/project/promot/introduce?title=项目介绍",
          secondMenu: [
            {
              title: "现代农业",
              url: "/project/promot/introduce?title=现代农业"
            },
            {
              title: "服务业",
              url: "/project/promot/introduce?title=服务业"
            },
            {
              title: "制造业",
              url: "/project/promot/introduce?title=制造业"
            },
            {
              title: "文化旅游",
              url: "/project/promot/introduce?title=文化旅游"
            }
          ]
        },
        { title: "参展商", url: "/project/promot/other/menu?title=招商信息" },
        { title: "产品展示", url: "/project/promot/environ?title=政策环境" ,
        },
      ]
    };
  }
};
</script>

