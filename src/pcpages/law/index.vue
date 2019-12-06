<template>
  <div>
    <Welcome></Welcome>
    <Header :navs="navList" ptCode='2'></Header>
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
  async created(){
     let temp = await this.getIndexList({
      parentId: "web",
      ptCode: 2
    },'/law')
    this.navList = temp
  },
  data() {
    return {
      navList: [
        // { title: "首页", url: "/law" },
        // {
        //   title: "宪法",
        //   url: "/law/criminal"
        // },
        // {
        //   title: "民刑法",
        //   url: "/law/civil",
        //   secondMenu: [
        //     {
        //       title: "民法总则",
        //       url: "/law/civil?title=民法总则"
        //     },
        //     {
        //       title: "合同法",
        //       url: "/law/civil?title=合同法"
        //     },
        //     {
        //       title: "侵权责任法",
        //       url: "/law/civil?title=侵权责任法"
        //     },
        //     {
        //       title: "物权法",
        //       url: "/law/civil?title=物权法"
        //     },
        //     {
        //       title: "知识产权法",
        //       url: "/law/civil?title=知识产权法"
        //     },
        //     {
        //       title: "刑法",
        //       url: "/law/civil?title=刑法"
        //     }
        //   ]
        // },
        // {
        //   title: "行政法",
        //   url: "/law/admin?title=行政法",
        //   secondMenu: [
        //     {
        //       title: "行政许可",
        //       url: "/law/admin?title=行政许可"
        //     },
        //     {
        //       title: "行政处罚",
        //       url: "/law/admin?title=行政处罚"
        //     },
        //     {
        //       title: "行政强制",
        //       url: "/law/admin?title=行政强制"
        //     },
        //     {
        //       title: "行政公开",
        //       url: "/law/admin?title=行政公开"
        //     },
        //     {
        //       title: "行政争议",
        //       url: "/law/admin?title=行政争议"
        //     }
        //   ]
        // },
        // {
        //   title: "商法",
        //   url: "/law/business?title=商法",
        //   secondMenu: [
        //     {
        //       title: "公司法",
        //       url: "/law/business?title=公司法"
        //     },
        //     {
        //       title: "合伙企业法",
        //       url: "/law/business?title=合伙企业法"
        //     },
        //     {
        //       title: "破产法",
        //       url: "/law/business?title=破产法"
        //     },
        //     {
        //       title: "保险法",
        //       url: "/law/business?title=保险法"
        //     },
        //     {
        //       title: "证券法",
        //       url: "/law/business?title=证券法"
        //     },
        //     {
        //       title: "其他",
        //       url: "/law/business?title=其他"
        //     }
        //   ]
        // },
        // {
        //   title: "劳动法",
        //   url: "/law/labour?title=劳动法",
        //   secondMenu: [
        //     {
        //       title: "劳动法",
        //       url: "/law/labour?title=劳动法"
        //     },
        //     {
        //       title: "社会保险法",
        //       url: "/law/labour?title=社会保险法"
        //     },
        //     {
        //       title: "劳动争议",
        //       url: "/law/labour?title=劳动争议"
        //     },
        //     {
        //       title: "劳务派遣",
        //       url: "/law/labour?title=劳务派遣"
        //     },
        //     {
        //       title: "其他",
        //       url: "/law/labour?title=其他"
        //     }
        //   ]
        // },
        // {
        //   title: "税法",
        //   url: "/law/tax?title=税法",
        //   secondMenu: [
        //     {
        //       title: "增值税",
        //       url: "/law/tax?title=增值税"
        //     },
        //     {
        //       title: "个人所得税",
        //       url: "/law/tax?title=个人所得税"
        //     },
        //     {
        //       title: "企业所得税",
        //       url: "/law/tax?title=企业所得税"
        //     },
        //     {
        //       title: "税收征收",
        //       url: "/law/tax?title=税收征收"
        //     }
        //   ]
        // },
        // {
        //   title: "指导案例",
        //   url: "/law/example?title=指导案例",
        //   secondMenu: [
        //     {
        //       title: "商经法",
        //       url: "/law/example?title=商经法"
        //     },
        //     {
        //       title: "合同法",
        //       url: "/law/example?title=合同法"
        //     },
        //     {
        //       title: "知识产权法",
        //       url: "/law/example?title=知识产权法"
        //     },
        //     {
        //       title: "劳动法",
        //       url: "/law/example?title=劳动法"
        //     }
        //   ]
        // }
      ]
    };
  }
};
</script>

