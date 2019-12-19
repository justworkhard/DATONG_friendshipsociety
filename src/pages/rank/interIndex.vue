<template>
  <div class="app">
    <XHeader title="积分排行榜"></XHeader>
    <div class="rank_body">
      <div class="cell header">
        <span class="name">平台名字</span>
        <span class="count">积分</span>
      </div>
      <section class="cell" v-for="(item,index) in readList" :key="index">
        <span class="name">{{item.ptname}}</span>
        <span class="count">{{item.integral}}</span>
      </section>
    </div>
  </div>
</template>
<script>
import XHeader from "@/components/XHeader.vue";
import {
  getInterList
} from "@/service/api";

export default {
  components: {
    XHeader,
  },
  async beforeCreate() {
    getInterList().then(res=>{
      this.readList = res.data.data
    })
  },
  data() {
    return {
      readList: [],
    };
  },
  mounted() {
  },

  methods: {
  
  }
};
</script>
<style lang="less" scoped>
.rank_body {
  padding: 0 10px;
  .header{
    color: #b61413!important
  }
  .cell {
    border-bottom: 1px solid #333333;
    display: flex;
    font-size: 14px;
    color: #333333;
    padding: 5px 0;
    .name {
      flex: 1;
    }
    .count {
      width: 100px;
    }
  }
}
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
.marginTop {
  margin-top: 10px;
}
</style>
