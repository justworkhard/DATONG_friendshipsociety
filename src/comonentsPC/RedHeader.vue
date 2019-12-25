<!--
 * @Author: your name
 * @Date: 2019-12-22 18:05:11
 * @LastEditTime: 2019-12-25 22:38:11
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \DATONG_friendshipsociety\src\comonentsPC\RedHeader.vue
 -->
<template>
  <div class="red_header">
    <div class="header">
      <span>{{title}}</span>
      <a v-if="href" :href="'#'+href" target="_blank">更多 &gt;&gt;</a>
    </div>
    <div class="padding_15">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", 'href']
};
</script>
<style lang="less" scoped>
.red_header {
  border: 1px solid #f1f1f1;
  margin-bottom: 20px;
}
.padding_15 {
  padding: 15px;
  min-height: 366px;
}
.header {
  height: 29px;
  overflow: hidden;
  border-bottom: 2px solid #b61412;
  span {
    display: block;
    // background: url(../images/tit-r.jpg) right top no-repeat #b61412;
    background-color: #b61412;
    padding-right: 30px;
    padding-left: 10px;
    float: left;
    line-height: 29px;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    border-bottom: 29px solid red;
    border-right: 29px solid transparent;
  }
  a {
    float: right;
    line-height: 29px;
    color: #666;
    margin-right: 15px;
    font-size: 12px;
  }
}
</style>
