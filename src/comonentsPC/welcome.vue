<template>
  <div class="header">
    <div class="content">
      <a href="#/" class="back">返回首页</a>
      <span>您好，欢迎来到大同市平城区人大代表民营企业联谊会</span>
      <div class="btns" v-show="!isLogin">
        <a href="#/login?type=login">登陆</a>
        <a href="#/login?type=register">注册</a>
      </div>
      <div class="btns userName" v-show="isLogin" >
        <span @click="toUser">{{userInfo.username}}</span>
        <div class="funList">
          <p @click="logout">退出</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
  },
  data() {
    return {
      isLogin: sessionStorage.getItem("isLogin") || false,
      userInfo: JSON.parse(sessionStorage.getItem("userInfo"))||{}
    };
  },
  methods: {
    toUser() {
      this.$router.push("/user");
    },
    logout(){
      sessionStorage.removeItem('isLogin',false)
      sessionStorage.removeItem('token')
      sessionStorage.removeItem('userInfo')
      this.$router.push("/login");
    }
  }
};
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
    .btns {
      display: inline-block;
    }
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
    .userName {
      color: rgb(49, 126, 243);
      cursor: pointer;
      position: relative;
      &:hover{
        .funList{
          display: block
        }
      }
      .funList {
        display: none;
        position: absolute;
        background-color: #333;
        color:  #ffffff;
        width: 80px;
        text-align: center;
        left: -10px;
      }
    }
  }
}
</style>
