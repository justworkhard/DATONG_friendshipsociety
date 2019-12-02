<template>
  <div class="red_header">
    <div class="header">
      <span @mouseenter="active(0)" :class="{'active':activeIndex === 0}">新闻动态</span>
      <span @mouseenter="active(1)" :class="{'active':activeIndex === 1}">联谊会活动</span>
      <a :href="activeIndex === 0?'#/menu/list?title=新闻动态':'#/menu/list?menu/list?title=联谊会活动'" target="_blank">更多 &gt;&gt;</a>
    </div>
    <div class="padding_15">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title"],
  data() {
    return{
      activeIndex :0
    }
  },
  methods: {
    active(index) {
      this.activeIndex = index;
      console.log(this.activeIndex);
      
    }
  }
};
</script>
<style lang="less" scoped>
 .red_header {
  border: 1px solid #f1f1f1;
  margin-bottom: 20px;
  height: 362px;
}
.padding_15 {
  padding: 15px;
  min-height: 366px;
}
.header {
  height: 39px;
  overflow: hidden;
  border-bottom: 1px solid #f1f1f1;
  span {
    // background: url(../images/tit-r.jpg) right top no-repeat #b61412;
    padding-right: 20px;
    padding-left: 20px;
    float: left;
    line-height: 39px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    background-color: #fafafa;
    text-align: center
  }
  .active {
    background-color: #b61412;
    color: #fff;
  }
  a {
    float: right;
    line-height: 39px;
    color: #666;
    margin-right: 15px;
    font-size: 12px;
  }
}
</style>
