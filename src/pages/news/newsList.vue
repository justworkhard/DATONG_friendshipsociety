<template>
  <div>
    <ScrollTemp title='新闻动态'>
    <NewsCar :data ='newsData'></NewsCar>
    <NewsCar :data ='newsData'></NewsCar>
    <NewsCar :data ='newsData'></NewsCar>
    <NewsCar :data ='newsData'></NewsCar>
    <NewsCar :data ='newsData'></NewsCar>
    <NewsCar :data ='newsData'></NewsCar>
    <NewsCar :data ='newsData'></NewsCar>
    <NewsCar :data ='newsData'></NewsCar>
    <NewsCar :data ='newsData'></NewsCar>
    <NewsCar :data ='newsData'></NewsCar>
    <NewsCar :data ='newsData'></NewsCar>
    <NewsCar :data ='newsData'></NewsCar>
    <NewsCar :data ='newsData'></NewsCar>
    <NewsCar :data ='newsData'></NewsCar>
    <NewsCar :data ='newsData'></NewsCar>
    <NewsCar :data ='newsData'></NewsCar>
    <NewsCar :data ='newsData'></NewsCar>
    </ScrollTemp>

  </div>
</template>
<script>
import NewsCar from "@/components/newsCar.vue";
import XHeader from "@/components/XHeader.vue";
import ScrollTemp from "@/components/scrollTemp.vue";
export default {
  components: {
    NewsCar, XHeader, ScrollTemp
  },
  methods: {

  },
  data(){
    return{
      newsData: {
        title: '平城区人大常委会组织开展全区民营企业家人大代…',
        content: '为了增强平城区民营企业之间的联系和沟通，不断深化平城…',
        date: '2019-02-28'
      }
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  display: flex;
  height: 48px;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #333333;
  font-size: 16px;
  line-height: 48px;
  img {
    height: 14px;
    width: 14px;
    position: absolute;
    left: 15px;
  }
}
</style>
