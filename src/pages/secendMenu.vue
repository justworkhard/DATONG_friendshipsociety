<template>
  <div class="app">
    <XHeader :title="title"></XHeader>
    <Tabs :TabsList="tabList" :defaultIndex='activeIndex' class="tabs" @onChangeTab="setActive">
      <template>
        <div class="marginTop">
          <Search @onSearch='onSearch'></Search>
          <ScrollContent id="scrollContent" @load="load" @refresh="refresh">
            <NewsCar v-for="(item,index) in newsList" :key="index" :data="item"></NewsCar>
          </ScrollContent>
        </div>
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
import { getNewsContentByKeyword, getIndexList, getNewsList } from "@/service/api";


export default {
  components: {
    XHeader,
    Tabs,
    Search,
    NewsCar,
    ScrollContent
  },
  async  beforeCreate() {
    this.title = this.$route.query.title;
    
    let temp = await this.getIndexList(
      {
        parentId: this.$route.query.parentId,
        ptCode: this.$route.query.ptCode
      },
      "/",
      true
    );
    this.tabList = temp;
    this.tabList.forEach((item,index)=>{
      console.log('this.$route.query.currentId',this.$route.query.currenId);
      
      if(item.id == this.$route.query.currentId){
        this.activeIndex = index
        this.setActive(index)
      }
    })
    this.getData()
  },
  data() {
    return {
      tabList: [],
      newsList: [],
      pageNo: 1,
      activeIndex: 0
    };

  },
  mounted() {
    let dom = document.getElementById("scrollContent");
    let scrollH = document.documentElement.clientHeight - dom.offsetTop;
    document.getElementById("scrollContent").style.height = `${scrollH}px`;
  },

  methods: {
    load() {
      this,pageNo = 1
      getData()
    },
    refresh() {
      this.pageNo++
      getData()
    },
    setActive(index) {
      this.pageNo = 1
      this.activeIndex = index
      this.getData()
    },
    getData(){
      let temp = this.tabList.length>0 ?this.tabList[this.activeIndex] : {}
      getNewsList({
        colid: this.tabList.length ? temp.id : this.$route.query.id,
        ptCode: this.$route.query.ptCode,
        pageSize: 10,
        pageNo: this.pageNo
      }).then(res => {
        this.newsList = res.data.data;
         this.newsList.push({})    

      });
    },
    onSearch(keyword){
      getNewsContentByKeyword({
        ptCode: this.$route.query.ptCode,
        title: keyword
      }).then(res => {
        this.newsList = res.data.tInfoList;   
         this.newsList.push({})    
      });
    }
  }
};
</script>
<style lang="less" scoped>
.app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .tabs {
    flex: 1;
    overflow: hidden;
  }
  // .scrollContent {
  //   overflow: hidden;
  //   height: 500px;
  // }
}
.marginTop{
  margin-top: 10px
}
</style>
