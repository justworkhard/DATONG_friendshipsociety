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
        { title: "动态工作", url: "/project/promot/other/menu?title=联谊会简介" },
        {
          title: "项目介绍",
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
        { title: "招商信息", url: "/project/promot/other/menu?title=招商信息" },
        { title: "政策环境", url: "/project/promot/environ?title=政策环境" ,
             secondMenu: [
            {
              title: "招商宣传",
              url: "/project/promot/environ?title=招商宣传"
            },
            {
              title: "优惠政策",
              url: "/project/promot/environ?title=优惠政策"
            }
          ]},
        { title: "联系我们", url: "/project/promot/other/menu?title=联系我们" }
      ]
    };
  }
};
</script>

