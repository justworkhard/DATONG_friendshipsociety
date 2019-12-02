<template>
  <div class="app">
    <ScrollTemp :title="title">
     <NewsCar :data="newsData"></NewsCar>

    </ScrollTemp>
  </div>
</template>
<script>
import XHeader from "@/components/XHeader.vue";
import ScrollTemp from "@/components/scrollTemp.vue";
import Tabs from "@/components/Tabs.vue";
import Search from "@/components/Search.vue";
import NewsCar from "@/components/newsCar.vue";

export default {
  props:['title'],
  components: {
    XHeader,
    Tabs,
    Search,
    NewsCar,
    ScrollTemp
  },
  data() {
    return {
      newsList: [1,2,3,4,5,6,7,7,8],
      newsData: {title:'1',content:'2',date:'3'}
    };
  },
  mounted() {

  },
  
  methods: {
    load() {
      this.newsList.push(0)
      console.log(this.newsList);
      
    },
    refresh() {
      console.log("refresh");
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
