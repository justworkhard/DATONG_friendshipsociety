<template>
  <div>
    <QHeader></QHeader>
    <div class="q_body">
      <div class="left_menu">
        <ul>
          <li class="active">个人资料</li>
          <li>我的收藏</li>
          <li>个人资料</li>
        </ul>
      </div>
      <div class="content">
        <div class="title">个人资料</div>
        <div class="info_box">
          <img src="" alt="" class="avadar">
          <div class="info">
            <div class="label">昵称：123</div>
            <div class="label">实名：321</div>
            <div class="label">性别：</div>
            <div class="label">地区：123</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import QHeader from "@/comonentsPC/QHeader.vue";
export default {
  components: {
    QHeader
  }
};
</script>
<style lang="less" scoped>
.q_body {
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
}
.left_menu {
  font-size: 20px;
  width: 200px;
  ul{
   list-style-type: none;
   li{
     padding: 10px 20px;
     cursor: pointer;
   }
  }
  .active {
    color: #ffffff;
    background-color: rgb(178, 24, 25);
  }
}
.content{
  flex: 1;
  margin-left: 20px;
  .title{
    font-size: 30px;
    border-bottom: 1px solid #999
  }
  .info_box{
    .avadar{
      height: 50px;
      width: 50px;
      border-radius: 50%;
      overflow: hidden;
    }
    .info{
      .label{
        font-size: 18px;
        margin: 5px 0px;
      }
    }
  }
}
</style>