<template>
  <div>
    <swiper :aspect-ratio="300/800" height="200px" auto>
      <swiper-item class="swiper-demo-img" v-for="(item, index) in carouselList" :key="index" >
        <div @click="toDetail(item.contentId)">
        <img :src="item.img" />
        <p class="label">{{item.title}}</p>
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from "vux";
import { getContentCarouselList } from "@/service/api";

export default {
  components: {
    Swiper,
    SwiperItem
  },
  props: ["ptCode"],
  created() {
    getContentCarouselList(this.ptCode).then(res => {
      let temp = [];
      res.data.contentCarouselList.forEach(element => {
        temp.push({
          url: "javascript:",
          img: element.picUrl,
          title: element.contentTitle,
          contentId: element.contentId,
          id: element.id
        });
      });
      this.carouselList = temp;
    });
  },
  data() {
    return {
      carouselList: []
    };
  },
  methods:{
    toDetail(id){
      console.log(id,'==-=-=',this.carouselList);
      
      this.$router.push(`/newsdetail?newsId=${id}`)
      
    }
  }
};
</script>
<style lang="less" scoped>
.swiper-demo-img {
  position: relative;
  cursor: pointer;
  img {
    height: 100%;
    width: 100%;
  }
  .label {
    position: absolute;
    left: 0px;
    bottom: 0px;
    height: 30px;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    font-size: 14px;
    line-height: 30px;
    padding-left: 10px;
  }
}

</style>
<style lang="less">
.el-carousel .el-carousel__indicators {
  background-color: red !important;
}
.el-tabs__nav-wrap::after {
    height: 1px;
  }
  .el-tabs__nav {
    line-height: 49px;
    height: 49px;
    padding-left: 15px;
    .el-tabs__active-bar {
      background-color: #b61413;
      left: 15px;
      bottom: 5px;
    }
    .el-tabs__item.is-active {
      color: #b61413;
    }
    .el-tabs__item {
      font-size: 16px;
      font-weight: 171px;
    }
  }
  .icon_more {
    // position: absolute;
  }
  .vux-slider > .vux-indicator > a > .vux-icon-dot.active,
  .vux-slider .vux-indicator-right > a > .vux-icon-dot.active {
    background-color: #b61413;
  }
</style>