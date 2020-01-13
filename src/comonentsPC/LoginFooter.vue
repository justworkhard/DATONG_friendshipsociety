<template>
  <div class="footer">
    <div class="friendLink">
      <div>友情链接：</div>
      <a>城区政府</a>
      <a>城区人大</a>
      <a>城区政协</a>
    </div>
    <div class="beian">平城区人大代表民营企业联谊会 晋ICP备19002138号-1</div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  font-size: 12px;
  color: #999;
  flex-direction: column;
  .friendLink {
    display: flex;
    a {
      margin-left: 10px;
    }
  }
}
</style>
