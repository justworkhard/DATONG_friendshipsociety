<template>
  <div>
    <Welcome></Welcome>
    <div class="header_manage">
      <img src="@/assets/images/mipmap-xxxhdpi/logo.png" alt class="logo">
      <div class="search">
        <input type="text" placeholder="请输入" v-model="keyword">
        <div class="btn_search" @click="search">搜索</div>
      </div>
    </div>

    <el-carousel height="350px">
      <el-carousel-item v-for="item in imgList" :key="item">
        <img class="carousel_img" :src="item.img">
      </el-carousel-item>
    </el-carousel>
    <div class="news_list">
      <NewsCard v-for="(item,index) in newsList" :newsItem="item" :key="index"></NewsCard>
      <el-pagination
        background
        @current-change="onChangePage"
        layout="prev, pager, next"
        :total="InfoList.length"
        style="margin-top:20px"
        :page-size='pageSize'
        :hide-on-single-page = 'true'
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
    NewsNavbar,
    NewsCard
  },
  async created() {
    this.keyword = this.$route.query.keyword||''
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
        
      });
  },
  async mounted() {},
  methods: {
    onChangePage(currentPage) {
      
      this.newsList = this.InfoList.slice((currentPage-1)*this.pageSize,currentPage*this.pageSize)
    },
    search() {
      
      getNewsContentByKeyword({
        ptCode: this.$route.query.ptCode,
        title: this.keyword
      }).then(res => {
        res.data.tInfoList
          this.InfoList = res.data.tInfoList;
          this.newsList = res.data.tInfoList.slice(0,this.pageSize)
      });
    }
  },
  data() {
    return {
      navList: [],
      imgList: [],
      keyword: "",
      newsList: [],
      InfoList : [],
      pageSize : 10,
    };
  }
};
</script>
<style lang="less" scoped>
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
  .navbar {
    display: block;
    margin: 0 25px;
    line-height: 70px;
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
    font-size: 16px;
    color: #333 !important;
    font-weight: bold;
  }
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
</style>
