<template>
  <div class="app">
    <XHeader title="政策汇总"></XHeader>
    <Tabs :TabsList="tabList" class="tabs">
      <template slot-scope="slotProps">
        <div v-if="slotProps.slotdata===0">
          <Search></Search>
          <ScrollContent id="scrollContent" @load="load" @refresh="refresh">
            <NewsCar v-for="(item,index) in newsList" :key="index" :data='newsData'></NewsCar>
            <!-- <NewsCar></NewsCar>
            <NewsCar></NewsCar>
            <NewsCar></NewsCar>
            <NewsCar></NewsCar>
            <NewsCar></NewsCar>
            <NewsCar></NewsCar>
            <NewsCar></NewsCar> -->
          </ScrollContent>
        </div>
        <div v-if="slotProps.slotdata===1"></div>
        <div v-if="slotProps.slotdata===1"></div>
        <div v-if="slotProps.slotdata===1"></div>
      </template>
    </Tabs>
  </div>
</template>
<script>
import XHeader from "@/components/XHeader.vue";
import ScrollContent from "@/components/scrollContent.vue";
import Tabs from "@/components/Tabs.vue";
import Search from "@/components/Search.vue";
import NewsCar from "@/components/newsCar.vue";

export default {
  components: {
    XHeader,
    Tabs,
    Search,
    NewsCar,
    ScrollContent
  },
  data() {
    return {
      tabList: ["国务院", "省级政策", "市级政策", "区级政策"],
      newsList: [1,2,3,4,5,6,7,7,8],
      newsData: {title:'1',content:'2',date:'3'}
    };
  },
  mounted() {
    let dom = document.getElementById('scrollContent')
    let scrollH = document.documentElement.clientHeight - dom.offsetTop 
    
    document.getElementById('scrollContent').style.height = `${scrollH}px`
  },
  
  methods: {
    load() {
      this.newsList.push(0)
    },
    refresh() {
    }
  }
};
</script>
<style lang="less" scoped>
.app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .tabs{
    flex: 1
  }
  // .scrollContent {
  //   overflow: hidden;
  //   height: 500px;
  // }
 
}
</style>
