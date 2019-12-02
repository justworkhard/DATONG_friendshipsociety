<template>
  <div class="footer">
    <div class="content">
      <div class="friend">
        <h1 class="title">友情链接</h1>
        <span>城区政府</span>
        <span>城区人大</span>
        <span>城区政协</span>
      </div>
      <div class="wechat">
        <img src="@/assets/images/mipmap-xxxhdpi/chat.png" alt>
        <p>微信公众号</p>
      </div>
      <div class="contact">
        <img src="@/assets/images/mipmap-xxxhdpi/tel.png" alt srcset>
        <h1 class="phone">13333429079</h1>
        <p>服务时间：周一至周五08:30-18:00</p>
        <p>非工作时间请使用：</p>
        <p>电话：13333429079 李先生</p>
      </div>
    </div>
    <div class="cop">
      <div class="contenter">平城区人大代表民营企业联谊会 晋ICP备19002138号-1</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.footer {
  background-color: #efefef;

  .content {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 185px;
    .friend {
      .title {
        font-size: 18px;
        color: #333;
        margin-bottom: 10px;
      }
      span {
        display: inline-block;
        margin-right: 20px;
        font-size: 14px;
      }
    }
    .wechat {
      img {
        height: 75px;
        width: 75px;
      }
      p {
        line-height: 30px;
        color: #888;
        font-size: 12px;
        text-align: center;
      }
    }
    .contact {
      font-size: 12px;
      color: #333;
      position: relative;
      margin-left: 83px;
      display: flex;
      align-items: left;
      flex-direction: column;
      justify-content: center;
      img {
        position: absolute;
        left: -83px;
        height: 63px;
      }

      .phone {
        font-size: 24px;
      }
    }
  }
}
.cop {
  line-height: 30px;
  background: #333333;
  text-align: center;
  .contenter {
    width: 1200px;
    margin: 0 auto;
    font-size: 12px;
    color: #787878;
    line-height: 30px;
  }
}
</style>
