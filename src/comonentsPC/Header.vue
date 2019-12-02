<template>
  <div>
    <div class="header">
      <img src="@/assets/images/mipmap-xxxhdpi/logo.png" alt class="logo">
      <router-link class="navbar" :to="item.url" v-for="(item,index) in navs" :key="index">
        {{item.title}}
        <div class="navbar_menu">
          <router-link class="item" :to="second.url" v-for="(second,index) in item.secondMenu" :key='index'>
            <span>{{second.title}}</span>
          </router-link>
        </div>
      </router-link>
    </div>
    <el-carousel height="350px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img  class="carousel_img" src="http://www.dtpcmq.com/scpt/images/banner9.jpg" >
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import { Carousel } from "element-ui";

export default {
  components: { Carousel },
  props: ["navs"],
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.header {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  .logo {
    width: 270px;
    padding: 10px 0;
  }
  .navbar {
    display: flex;
    align-items: center;
    margin: 0 25px;
    height: 70px;
    // -webkit-transition: all 0.4s;
    // transition: all 0.4s;
    font-size: 16px;
    color: #333;
    font-weight: bold;
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
}
.carousel_img {
  height: 350px!important;
  width: 100%!important;
}
</style>
