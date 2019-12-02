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
        { title: "首页", url: "" },
        { title: "联谊会简介", url: "/menu/list?title=联谊会简介" },
        { title: "联谊企业", url: "/menu/list?title=联谊企业" },
        { title: "加入我们", url: "/menu/list?title=加入我们" },
        { title: "企业产品", url: "/menu/list?title=企业产品" }
      ]
    };
  }
};
</script>

