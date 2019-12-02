<template>
  <div class="header">
    <div class="content">
      <a href="#/" class="back">返回首页</a>
      <span>您好，欢迎来到大同市平城区人大代表民营企业联谊会</span>
      <a href="#">登陆</a>
      |
      <a href="#">注册</a>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.header {
  background-color: #f3f3f3;
  color: #9c9c9c;
  .content {
    height: 34px;
    width: 1200px;
    margin: 0 auto;
    font-size: 12px;
    color: #888;
    line-height: 34px;
    text-align: right;
    position: relative;
    .back {
      position: absolute;
      left: 0;

    }
    a {
      font-size: 12px;
      color: #888;
      line-height: 34px;
      padding: 0 10px;
    }
  }
}
</style>
