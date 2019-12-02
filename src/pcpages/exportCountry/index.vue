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
        { title: "首页", url: "/export/country" },
        {
          title: "相关政策",
          url: "/export/country/secondMenu?title=相关政策"
        },
        {
          title: "项目合作",
          url: "/export/country/secondMenu?title=项目合作",
        },
        {
          title: "项目交流",
          url: "/export/country/secondMenu?title=项目交流",
        },
        {
          title: "行业标准查询",
          url: "/export/country/secondMenu?title=行业标准查询",
        }
      ]
    };
  }
};
</script>

