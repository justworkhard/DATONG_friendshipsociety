<template>
  <div class="body">
    <div class="logo">
      <img src="@/assets/images/logoPhone.png" class="logo" alt srcset />
    </div>
    <div class="inputBox">
      <input v-model="r_name" type="text" placeholder="请设置登录用户名" />
    </div>
    <div class="inputBox">
      <input v-model="r_password" type="text" placeholder="请设置登录密码" />
    </div>
    <div class="checkBox">
      <input v-model="r_inviceCode" type="text" placeholder="请输入邀请码" />
      <div class="checkCode" @click="changeCheckCode">
      </div>
    </div>
    <div class="btn" @click="regin">注册并登录</div>
    <p class="tip" @click="toLogin">返回登录</p>
    <toast v-model="tip" type="text">{{tipMesg}}</toast>
  </div>
</template>
<script>
import SIdentify from "@/comonentsPC/identify";
import { login, register } from "@/service/api";
import { Toast } from 'vux'
export default {
  components: {
    SIdentify,
    Toast
  },
  created() {
    this.identifyCode = this.random();
  },
  data() {
    return {
      identifyCode: "0000",
      tip: false,
      r_inviceCode: '',
      r_name: '',
      r_password: '',
      tipMesg: '',
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
    },
    regin(){
      register({
        mobile: this.r_name,
        password: this.r_password,
        inviteCode: this.r_inviceCode
      })
        .then(res => {
          if (res.data.code !== 200) {
            this.tipMesg = res.data.msg
            this.tip = true
            return;
          }
          this.$router.push("/");
          this.login();
        })
        .catch(error => {
          this.tipMesg = '未知错误'
        });
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