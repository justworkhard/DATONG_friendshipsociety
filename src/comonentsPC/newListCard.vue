<!--
 * @Author: your name
 * @Date: 2019-12-22 18:05:11
 * @LastEditTime : 2019-12-25 21:03:49
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DATONG_friendshipsociety\src\comonentsPC\newListCard.vue
 -->
<template>
  <div class="newsList">
    <div class="header">
      <div class="icon" :class="icon"></div>
      <span>{{title}}</span>
      <router-link :to="more">
        <span class="more">更多 >></span>
      </router-link>
    </div>
    <div class="content">
      <div v-for="(item,index) in data" :key="index" class="news_item" @click="toDetail(item.id)">
        <span class="title">{{item.title}}</span>
        <span class="date">{{item.createTime}}</span>
      </div>
      <div class="not_data" v-if="data.length === 0">
        暂无数据 
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "icon", "more", "data"],
  methods: {
    toDetail(id) {
      this.$router.push(this.more+'&contentId='+id)
    }
  },
  created(){
  }
};
</script>
<style lang="less" scoped>
.newsList {
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 359px;
  overflow: hidden;
  width: 573px;
  margin-bottom: 10px;
  .header {
    color: #333;
    background-color: #f5f5f5;
    border-color: #ddd;
    padding: 10px 15px;
    border-bottom: 1px solid #ddd;
    .icon {
      // background: url('/src/assets/images/mipmap-xxxhdpi/law_icon.png') no-repeat;
      background: url('http://fl.dtpcmq.com/pcqrddbqylyh/cycxfwpt/img/icon.gif') no-repeat;
      width: 20px;
      height: 20px;
      display: inline-block;
    }
    .more {
      float: right;
      cursor: pointer;
      color: #333;
      &:hover {
        color: #337ab7;
      }
    }
  }
}
.content {
  padding: 15px 30px;
  color: rgb(51, 51, 51);
  font-size: 14px;

  .news_item {
    line-height: 28px;
    cursor: pointer;
    .title{
      display: inline-block;
      width: 400px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .date {
      float: right;
    }
  }
}
.icon-zbgs {
  background-position: -10px -8px!important;
}
.icon-two {
  background-position: -10px -48px!important;
}
.icon-zbgg {
    background-position: -50px -8px!important;
}
.icon-scjg {
    background-position: -50px -48px!important;
}
</style>
