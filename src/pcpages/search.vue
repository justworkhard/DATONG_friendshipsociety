<template>
  <div>
    <Welcome></Welcome>
    <div class="header_manage">
      <div style="display:flex">
        <img src="@/assets/images/logo.jpg" alt class="logo" />
        <p class="navbar" @click="()=>{this.$router.go(-1)}">返回</p>
      </div>
      <div class="search">
        <input type="text" placeholder="请输入" v-model="keyword" />
        <div class="btn_search" @click="search">搜索</div>
      </div>
    </div>
    <el-carousel height="350px">
      <el-carousel-item v-for="(item,index) in imgList" :key="index">
        <img class="carousel_img" :src="item.picUrl" />
      </el-carousel-item>
    </el-carousel>
    <div class="news_list">
      <NewsCard v-for="(item,index) in newsList" :newsItem="item" :key="index" @toDetail="toDetail"></NewsCard>
      <el-pagination
        background
        @current-change="onChangePage"
        layout="prev, pager, next"
        :total="InfoList.length"
        style="margin-top:20px"
        :page-size="pageSize"
        :hide-on-single-page="true"
      ></el-pagination>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Welcome from "@/comonentsPC/welcome.vue";
import Header from "@/comonentsPC/Header.vue";
import RedHeader from "@/comonentsPC/RedHeader.vue";
import NewsNavbar from "@/comonentsPC/newsNavbar.vue";
import MCarousel from "@/comonentsPC/Carouse.vue";
import NewsCard from "@/comonentsPC/newsCard.vue";
import Footer from "@/comonentsPC/Footer.vue";
import { Swiper, SwiperItem } from "vux";
import {
  getCarouselList,
  getIndexList,
  getNewsContentByKeyword
} from "@/service/api";

export default {
  components: {
    Welcome,
    Header,
    Swiper,
    SwiperItem,
    Footer,
    RedHeader,
    MCarousel,
    NewsNavbar,
    NewsCard
  },
  async created() {
    this.keyword = this.$route.query.keyword || "";
    this.ptCode = this.$route.query.ptCode;
    getCarouselList(this.$route.query.ptCode).then(res => {
      let temp = [];
      res.data.carouselList.forEach(element => {
        temp.push({
          url: "javascript:",
          img: element.picUrl,
          title: ""
        });
      });
      this.imgList = res.data.carouselList;
    });
    getNewsContentByKeyword({
      ptCode: this.$route.query.ptCode,
      title: this.keyword
    }).then(res => {
      this.InfoList = res.data.tInfoList;
      this.newsList = res.data.tInfoList.slice(0, this.pageSize);
    });
  },
  methods: {
    toDetail(id) {
      this.$router.push(
        `/detail?ptCode=${this.ptCode}&contentId=${id}&indexUrl=${this.$route.fullPath}`
      );
    },
    onChangePage(currentPage) {
      this.newsList = this.InfoList.slice(
        (currentPage - 1) * this.pageSize,
        currentPage * this.pageSize
      );
    },
    search() {
      getNewsContentByKeyword({
        ptCode: this.$route.query.ptCode,
        title: this.keyword
      }).then(res => {
        res.data.tInfoList;
        this.InfoList = res.data.tInfoList;
        this.newsList = res.data.tInfoList.slice(0, this.pageSize);
      });
    }
  },
  data() {
    return {
      navList: [],
      imgList: [],
      keyword: "",
      newsList: [],
      InfoList: [],
      pageSize: 10
    };
  }
};
</script>
<style lang="less" scoped>
.box {
  height: 350px;
}
.header_manage {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  height: 92px;
  align-items: center;
  .logo {
    width: 270px;
    padding: 10px 0;
  }
  // .navbar {
  //   display: block;
  //   margin: 0 25px;
  //   line-height: 70px;
  //   -webkit-transition: all 0.4s;
  //   transition: all 0.4s;
  //   font-size: 16px;
  //   color: #333 !important;
  //   font-weight: bold;
  // }
}
.search {
  border: 1px #cdcdcd solid;
  padding-left: 10px;
  width: 500px;
  height: 38px;
  border-radius: 4px;
  display: flex;
  margin-left: 80px;
  input {
    border: none;
    outline: none;
    line-height: 38px;
    flex: 1;
  }
  .btn_search {
    background-color: #d71816;
    color: #ffffff;
    width: 78px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}
.news_list {
  width: 70%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
}
.navbar {
  display: flex;
  align-items: center;
  margin: 0 25px;
  height: 90px;
  // -webkit-transition: all 0.4s;
  // transition: all 0.4s;
  font-size: 16px;
  color: #333;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  padding-right: 20px;
  &:hover {
    color: #b61412;
    background: url("/src/assets/images/mipmap-xxxhdpi/down.png")
      /*tpa=http://www.ebidding.com.cn/themes/basic/skin/images/img275.png*/
      no-repeat right center;

    .navbar_menu {
      color: #b61412;
      visibility: visible;
      opacity: 1;
      top: 25px;
    }
  }
  .navbar_menu {
    width: 134px;
    position: absolute;
    left: 0;
    top: 50px;
    box-shadow: 0 4px 15px 0 rgba(0, 12, 49, 0.5);
    background: #ffffff;
    font-weight: normal;
    z-index: 100000;
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translateY(43px);
    transform: translateY(43px);
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
    .item {
      font-size: 14px;
      line-height: 40px;
      height: 40px;
      display: block;
      color: #333;
      padding: 0 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      &:hover {
        color: #fff;
        background-color: #b61412;
      }
    }
  }
}
</style>
