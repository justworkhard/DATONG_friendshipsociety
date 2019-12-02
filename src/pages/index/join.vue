<template>
  <div>
    <XHeader title="加入我们"></XHeader>
    <div class="join">
      <p class="title">加入我们</p>
      <article class="article">
        <p>1、申请加入联谊会的会员，应具备下列条件：</p>
        <p>(一)有加入本会的意愿；</p>
        <p>(二)为平城区人大代表 ；</p>
        <p>(三)在自己的业务领域内具有一定的影响。</p>
        <p>2、会员入会的程序：</p>
        <p>(一)提交企业介绍材料；</p>
        <p>(二)经联谊会会长委员会讨论通过；</p>
        <p>联系我们：</p>
        <p>大同市平城区人大代表民营企业联谊会</p>
        <p>办公室电话:13333429079 李尧</p>
        <p>地址：大同市平城区清远街南侧A区5号</p>
      </article>
      <img src="@/assets/images/mipmap-xxxhdpi/chat.png" alt>
    </div>
  </div>
</template>
<script>
import XHeader from "@/components/XHeader";
export default {
  components: { XHeader }
};
</script>
<style lang="less" scoped>
.join {
  padding: 15px;
  .title {
    color: #333333;
    font-size: 18px;
    margin-bottom: 20px;
  }
  .article {
    font-size: 14px;
    p {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      line-height: 29px;
    }
  }
  img {
    height: 280px;
    width: 280px;
  }
}
</style>
