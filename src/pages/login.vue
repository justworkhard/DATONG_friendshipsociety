<template>
  <div class="body">
    <div class="logo">
      <img src="@/assets/images/logoPhone.png" class="logo" alt srcset />
    </div>
    <div class="inputBox">
      <input type="text" placeholder="用户名" v-model="l_name"/>
    </div>
    <div class="inputBox">
      <input type="text" placeholder="密码长度6-20位" v-model="l_password"/>
    </div>
    <div class="checkBox">
      <input type="text" placeholder="验证码" v-model="l_checkCode"/>
      <div class="checkCode" @click="changeCheckCode">
        <SIdentify :identifyCode="identifyCode"></SIdentify>
      </div>
    </div>
    <div class="btn" @click="login">立即登录</div>
    <p class="tip" @click="toRegist">还没有账号?现在注册</p>
  </div>
</template>
<script>
import SIdentify from "@/comonentsPC/identify";
import { login, register } from "@/service/api";
export default {
  components: {
    SIdentify
  },
  created() {
    this.identifyCode = this.random();
  },
  data() {
    return {
      identifyCode: "0000",
      l_name: '',
      l_password: '',
      l_checkCode: ''
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
    toRegist(){
      this.$router.push('/register')
    },
    login(){
      if (this.l_checkCode !== this.identifyCode) {
        return this.$message({
          message: "请输入正确的验证码！",
          type: "error"
        });
      }
      login({
        mobile: this.l_name,
        password: this.l_password
      })
        .then(res => {
          if(res.data.code === 0){
             sessionStorage.setItem('userInfo',JSON.stringify(res.data.userInfo))
             sessionStorage.setItem('isLogin',true)
             sessionStorage.setItem('token',res.data.token)
             this.$router.push("/");
            
          }
        })
        .catch(error => {
          this.$message.error("账号或密码错误");
        });
    },
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
    color: #3385ff
}
</style>