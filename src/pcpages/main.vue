<!--
 * @Author: your name
 * @Date: 2019-12-22 18:05:12
 * @LastEditTime : 2019-12-25 22:59:45
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DATONG_friendshipsociety\src\pcpages\main.vue
 -->
<template>
  <div>
    <Welcome></Welcome>
    <Header :navs="navList" :ptCode='$route.query.ptCode'></Header>
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
import { getCarouselList, getIndexList } from "@/service/api";

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
      ptCode: this.$route.query.ptCode
    },this.$route.query.indexUrl)
    this.navList = temp
  },
  async mounted(){
 
  },
  data() {
    return {
      navList: [
        // { title: "首页", url: "/policy/service" },
        // {
        //   title: "政策汇总",
        //   url: "/policy/service/second/menu",
        //   secondMenu: [
        //     {
        //       title: "国务院",
        //       url: "/policy/service/second/menu?title=国务院"
        //     },
        //     {
        //       title: "省级政策",
        //       url: "/policy/service/second/menu?title=省级政策"
        //     },
        //     {
        //       title: "市级政策",
        //       url: "/policy/service/second/menu?title=市级政策"
        //     },
        //     {
        //       title: "区级政策",
        //       url: "/policy/service/second/menu?title=区级政策"
        //     }
        //   ]
        // },
        // {
        //   title: "政策解读",
        //   url: "/policy/service/second/menu",
        //   secondMenu: [
        //     {
        //       title: "中小型微企业政策",
        //       url: "/policy/service/second/menu?title=中小型微企业政策"
        //     },
        //     {
        //       title: "民营企业政策",
        //       url: "/policy/service/second/menu?title=民营企业政策"
        //     },
        //     {
        //       title: "创业创新政策",
        //       url: "/policy/service/second/menu?title=创业创新政策"
        //     }
        //   ]
        // },
        // {
        //   title: "观点观察",
        //   url: "/policy/service/second/menu?title=观点观察"
        // },
        // {
        //   title: "经验交流",
        //   url: "/policy/service/second/menu?title=经验交流"
        // }
      ]
    };
  }
};
</script>

