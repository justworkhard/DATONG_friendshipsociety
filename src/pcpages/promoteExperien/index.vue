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
        { title: "首页", url: "/promote/experien" },
        {
          title: "管理创新",
          url: "/promote/experien/secondMenu?title=管理创新"
        },
        {
          title: "经营心得",
          url: "/promote/experien/secondMenu?title=管理感悟",
          secondMenu: [
            {
              title: "管理感悟",
              url: "/promote/experien/secondMenu?title=管理感悟"
            },
            {
              title: "经验分享",
              url: "/promote/experien/secondMenu?title=经验分享"
            }
          ]
        },
        {
          title: "学习论坛",
          url: "/promote/experien/secondMenu?title=培训天地",
          secondMenu: [
            {
              title: "培训天地",
              url: "/promote/experien/secondMenu?title=培训天地"
            },
            {
              title: "百家讲坛",
              url: "/promote/experien/secondMenu?title=百家讲坛"
            }
          ]
        },
        {
          title: "企业文化",
          url: "/project/promot/environ?title=企业文化",
          secondMenu: [
            {
              title: "企业介绍",
              url: "/promote/experien/secondMenu?title=企业介绍"
            },
            {
              title: "企业风貌",
              url: "/promote/experien/secondMenu?title=企业风貌"
            },
            {
              title: "员工风采",
              url: "/promote/experien/secondMenu?title=员工风采"
            }
          ]
        }
      ]
    };
  }
};
</script>

