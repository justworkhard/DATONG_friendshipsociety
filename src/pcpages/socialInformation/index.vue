<template>
  <div>
    <Welcome></Welcome>
    <Header :navs="navList"></Header>
    <!-- <el-carousel height="350px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img
          class="carousel_img"
          src="https://image.baidu.com/search/detail?ct=503316480&z=&tn=baiduimagedetail&ipn=d&word=%E5%8A%9E%E5%85%AC&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&hd=&latest=&copyright=&cs=1323175207,4080592081&os=3083306032,2433506859&simid=3591765768,424498330&pn=49&rn=1&di=83490&ln=1511&fr=&fmq=1574922861857_R&ic=&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=2&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Fwww.conran.com.cn%2Fattachment%2Fimage%2F201307%2F1373511531.jpg&rpstart=0&rpnum=0&adpicid=0&force=undefined"
          alt
          srcset
        >
      </el-carousel-item>
    </el-carousel>-->
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
        { title: "首页", url: "/social/information" },
        {
          title: "财政信息",
          url: "/social/information/finance",
          secondMenu: [
            { title: "创业创新服务平台介绍", url: "/social/information/finance?title=创业创新服务平台介绍" },
            { title: "新闻动态", url: "/social/information/finance?title=新闻动态" },
            { title: "创业分享", url: "/social/information/finance?title=创业分享" },
            { title: "资本市场", url: "/social/information/finance?title=资本市场" }
          ]
        },
        { title: "金融信息", url: "/social/information/other/menu?title=金融信息", },
        { title: "企业管理信息", url: "/social/information/other/menu?title=企业管理信息" },
        { title: "数字图书馆", url: "/social/information/other/menu?title=数字图书馆" },
        { title: "索引信息", url: "/social/information/other/menu?title=索引信息" }
      ],
    };
  }
};
</script>

