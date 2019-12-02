<template>
  <div class="body">
    <div class="contact_title">
      <img src="@/assets/images/mipmap-hdpi/contact.png" alt>
    </div>
    <div class="contact_content">
      <div class="base_info">
        <p class="phone">13333429079</p>
        <p>服务时间：周一至周五08:30-18:00</p>
        <p>非工作时间请使用：</p>
        <p>电话：13333429079 李先生</p>
      </div>
      <div class="wechat">
        <img src="@/assets/images/mipmap-hdpi/wechat.png" alt>
        <p>微信公众号</p>
      </div>
    </div>
    <footer class="footer">
      <div>
        <span>友情链接：</span>
        <a href>城区政府</a>
        <a href>城区人大</a>
        <a href>城区政协</a>
      </div>
      <div class="copyright">平城区人大代表民营企业联谊会 晋ICP备19002138号-1</div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>
<style lang="less" scoped>
.body{
  color: #666666;
}
.contact_title {
  img {
    width: 100%;
  }
}
.contact_content {
  display: flex;
  padding: 7px 15px;
  justify-content: space-between;
  .base_info {
    font-size: 12px;
    .phone {
      color: #333333;
      font-size: 14px;
    }
  }
  .wechat {
    img {
      height: 70px;
    }
    p{
      font-size: 10px;
      text-align: center;
    }
  }
}
.footer {
  background-color: #f5f5f5;
  font-size: 9px;
  text-align: center;
  padding: 10px 0px;
  a {
    color: #666666;
  }
  .copyright {
    font-size: 8px;
  }
}
</style>
