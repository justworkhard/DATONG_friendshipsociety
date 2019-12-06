<template>
  <div class="news_card" @click="toDetail">
    <p class="title">{{newsItem.title}}</p>
    <span class="date">{{newsItem.createTime}}</span>
  </div>
</template>
<script>
export default {
  props: ['newsItem'],
  methods:{
    toDetail(){
      
      this.$emit('toDetail',this.newsItem.id)
    }
  }
};
</script>
<style lang="less" scoped>
.news_card {
    border-bottom: 1px solid #e7e7e7;
    cursor: pointer;
    padding: 15px 15px 15px 15px;
    &:nth-child(2n){
      background-color: #f9f9f9
    }
  .title {
    position: relative;
    display: inline-block;
    &:hover{
      color: #d72340
    }
  }
  .date {
    float: right;
    line-height: 26px;
    color: #333;
    font: 12px/1.75 "Microsoft Yahei", "Helvetica Neue", "Myriad Pro", Helvetica,
      Arial, sans-serif;
  }
}
</style>
