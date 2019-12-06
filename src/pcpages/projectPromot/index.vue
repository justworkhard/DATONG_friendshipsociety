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
    async created() {
  
  
   let temp = await this.getIndexList({
      parentId: "web",
      ptCode: 4
    },'/project/promot')
    this.navList = temp
  },
  data() {
    return {
      navList: []
    };
  }
};
</script>

