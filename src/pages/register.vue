<template>
  <div class="body">
    <div class="logo">
      <img src="@/assets/images/logoPhone.png" class="logo" alt srcset />
    </div>
    <div class="inputBox">
      <input type="text" placeholder="请设置登录用户名" />
    </div>
    <div class="inputBox">
      <input type="text" placeholder="请设置登录密码" />
    </div>
    <div class="checkBox">
      <input type="text" placeholder="请输入邀请码" />
      <div class="checkCode" @click="changeCheckCode">
      </div>
    </div>
    <div class="btn">注册并登录</div>
    <p class="tip" @click="toLogin">返回登录</p>
  </div>
</template>
<script>
import SIdentify from "@/comonentsPC/identify";

export default {
  components: {
    SIdentify
  },
  created() {
    this.identifyCode = this.random();
  },
  data() {
    return {
      identifyCode: "0000"
    };
  },
  methods: {
    changeCheckCode() {
      this.identifyCode = this.random();
    },
    random() {
      let str = "";
      for (let i = 0; i < 4; i++) {
        str += Math.floor(Math.random() * (10 - 0)) + 0;
      }
      return str;
    },
    toLogin(){
      this.$router.push('/login')
    }
  }
};
</script>
<style lang="less" scoped>
.body {
  padding: 50px 40px 0 40px;
}
.logo {
  text-align: center;
  img {
    height: 73px;
    width: 73px;
  }
}
.inputBox {
  input {
    outline: none;
    border: none;
    border-bottom: 1px solid #f1f1f1;
    line-height: 40px;
    margin-top: 5px;
    width: 100%;
  }
}
.checkBox {
  border-bottom: 1px solid #f1f1f1;
  input {
    outline: none;
    border: none;
    line-height: 40px;
    margin-top: 5px;
    flex: 1;
    min-width: 50px;
  }
  margin-top: 10px;
  display: flex;
}
.btn {
  height: 44px;
  width: 100%;
  text-align: center;
  line-height: 44px;
  font-size: 15px;
  color: #ffffff;
  background-color: #b63130;
  border-radius: 22px;
  margin-top: 20px;
}
.tip{
    font-size: 13px;
    color: #999999;
    text-align: center;
    margin-top: 20px;
    cursor: pointer;
}
</style>