<template>
  <div class="carousel">
    <div class="MCarousel" v-show="activeIndex === index" v-for="(item,index) in data" :key="index">
      <img :src="item.picUrl" alt srcset>
    </div>
    <div class="bottom" v-show="activeIndex === index" v-for="(item,index) in data" :key="index">
      <p>{{item.contentTitle}}</p>
      <ul class="guider">
        <li @mouseover='setActive(index)' v-for="(item,index) in data" :key="index" :class="{'active': index === activeIndex}"></li>
      </ul>
    </div>
  </div>
</template>
<script>
import {
  getContentCarouselList
} from "@/service/api";
export default {
  props: ['ptCode'],
  created(){
    getContentCarouselList(this.ptCode).then(res=>{
      this.data = res.data.contentCarouselList
    })
  },
  data() {
    return {
      data: [],
      activeIndex: 0
    };
  },
  methods:{
    setActive(index){
      this.activeIndex = index
    }
  }
};
</script>
<style lang="less" scoped>
.carousel {
  height: 100%;
  width: 100%;
  position: relative;
}
.MCarousel {
  position: relative;
  height: 100%;
  width: 100%;
  img {
    height: 100%;
    width: 100%;
  }
}
.bottom {
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 30px;
  position: absolute;
  left: 0;
  bottom: 0px;
  width: 100%;
  p {
    color: #ffffff;
    margin-left: 10px;
  }
}
.guider {
  display: flex;
  li {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    overflow: hidden;
    background-color: #ffffff;
    margin-right: 10px;
    cursor: pointer;
  }
  .active{
    background-color: #b61412;
  }
}
</style>
