<template>
  <div class="product_card">
    <div class="logo">
      <img :src="data.minPicAddress" alt srcset>
    </div>
    <div class="content">
      <div class="title">
        <img src="@/assets/images/mipmap-xxxhdpi/icon_compony.png" alt srcset>
        <span>{{data.title}}</span>
      </div>
      <div class="introduct">
        <img src="@/assets/images/mipmap-xxxhdpi/icon_compony_txt.png" alt srcset>
        <span>{{data.summary}}</span>
      </div>
      <a :href="`#/second/menu?title=产品展示&id=105&parentId=105&ptCode=7&indexUrl=%2Fproject%2Fshow&hadChild=fale&currenId=105&contentId=${data.id}`" class="detail">详情>></a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      default: {}
    }
  }
};
</script>
<style lang="less" scoped>
.product_card {
  display: flex;
  width: 355px;
  margin: 15px 0 30px 0px
  // &:nth-child(2n){
  //   margin-left: 20px;
  // }
}
.logo {
  height: 100px;
  width: 100px;
  margin-right: 20px;
  img {
    height: 100px;
    width: 100px;
  }
}
.content {
  flex: 1;
  width: 235px;
}
.title {
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
}
.introduct {
  line-height: 20px;
  font-size: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  word-break: break-word;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.detail {
  float: right;
  color: #888;
  font-size: 12px;
}
</style>
