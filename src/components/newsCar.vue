<template>
  <div class="news_car" v-on:click="toDetail()">
    <p class="title noWarp">{{data.title}}</p>
    <p class="content noWarp">{{data.content}}</p>
    <p class="date noWarp">{{data.date}}</p>
  </div>
</template>
<script>
export default {
  props: ['data'],
  methods:{
    toDetail(){
      this.$router.push('/newsdetail')
    }
  }
};
</script>
<style lang="less" scoped>
.news_car {
  padding: 10px 0px;
  border-bottom: 1px solid #F5F5F5;
  .title {
    font-size: 14px;
    color: #333333;
    padding-bottom: 5px;
  }
  .content {
    font-size: 12px;
    color: #666666;
    padding-bottom: 5px;
  }
  .date {
    color: #999999;
    font-size: 10px;
  }
}
.noWarp{
      overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}
</style>
