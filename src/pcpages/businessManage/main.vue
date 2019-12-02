<template>
  <div>
    <Welcome></Welcome>
    <div class="header_manage">
      <img src="@/assets/images/mipmap-xxxhdpi/logo.png" alt class="logo">
      <div class="search">
        <input type="text" placeholder="请输入">
        <div class="btn_search">搜索</div>
      </div>
    </div>
    <div class="bannar">
      <img src="http://jygl.dtpcmq.com/pcqrddbqylyh/scpt/images/bg4.jpg" alt="" srcset="">
    </div>
    <div class="news_list">
      <NewsCard></NewsCard>
      <NewsCard></NewsCard>
      <NewsCard></NewsCard>
      <NewsCard></NewsCard>
      <NewsCard></NewsCard>
      <NewsCard></NewsCard>
          <el-pagination
      background
      @current-change="onChangePage"
      layout="prev, pager, next"
      :total="1000"
      style="margin-top:20px"
    ></el-pagination>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import { Carousel } from "element-ui";
import Welcome from "@/comonentsPC/welcome.vue";
import NewsCard from "@/comonentsPC/newsCard.vue";
import Footer from "@/comonentsPC/Footer.vue";

export default {
  components: { Carousel, Welcome, NewsCard,Footer },
  props: ["navs"],
  data() {
    return {};
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
.carousel_img {
  height: 100%;
  width: 100%;
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
  }
}
.bannar{
  height: 350px;
  width: 100%;
  border-top: 3px solid #b61412;
  img{
    height: 100%;
    width: 100%;
  }
}
.news_list{
   width: 70%;
   margin: 0 auto;
   margin-top: 20px;
}
</style>
