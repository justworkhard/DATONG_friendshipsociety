<template>
  <div class="header">
    <div class="content">
      <a href="#/" class="back">返回首页</a>
      <span>您好，欢迎来到大同市平城区人大代表民营企业联谊会</span>
      <div class="btns" v-if="!isLogin">
        <a href="#/login?type=login">登陆</a>
        <a href="#/login?type=register">注册</a>
      </div>
      <div class="btns userName" v-if="isLogin" @click="toUser">
        <span>{{userInfo.username}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created(){
    console.log( JSON.parse(sessionStorage.getItem('userInfo')).name,'user');
    
  },
  data(){
    return{
      isLogin: sessionStorage.getItem('isLogin')||false,
      userInfo: JSON.parse(sessionStorage.getItem('userInfo'))
    }
    },
    methods:{
      toUser(){
        this.$router.push('/user')
      }
    }
  }
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
    .userName{
      color: rgb(49, 126, 243);
      cursor: pointer;
    }
  }
}
</style>
