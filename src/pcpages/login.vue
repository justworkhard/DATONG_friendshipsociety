<template>
  <div class="loginBody">
    <div class="logo">
      <img src="@/assets/images/mipmap-xxxhdpi/logo.png" alt @click="toIndex" />
    </div>
    <div class="content">
      <div class="loginBox">
        <div class="tabs">
          <p class="tabItem" :class="activeIndex === 0?'tabItemActive':''" @click="setActive(0)">登录</p>
          <p class="tabItem" :class="activeIndex === 1?'tabItemActive':''" @click="setActive(1)">注册</p>
        </div>
        <div class="login regest" v-show="activeIndex === 0">
          <div class="inputBox">
            <input type="text" placeholder="用户名" v-model="l_name" />
          </div>
          <div class="inputBox">
            <input type="password" placeholder="密码" v-model="l_password" />
          </div>
          <div class="checkBox">
            <input type="text" placeholder="验证码" v-model="l_checkCode" />
            <div class @click="changeCheckCode">
              <SIdentify :identifyCode="identifyCode"></SIdentify>
              <!-- <div id="canvas_code"></div> -->
            </div>
          </div>
          <div class="btn" @click="login">登录</div>
        </div>
        <div class="login" v-show="activeIndex === 1">
          <div class="inputBox">
            <input type="text" placeholder="请设置登录用户名" v-model="r_name" />
          </div>
          <div class="inputBox">
            <input type="text" placeholder="请设置登录密码" v-model="r_password" />
          </div>
          <div class="inputBox">
            <input type="text" placeholder="请输入邀请码" v-model="r_inviceCode" />
            <!-- <SIdentify :identifyCode="identifyCode"></SIdentify> -->
          </div>
          <div class="btn" @click="regist">注册并登录</div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import SIdentify from "@/comonentsPC/identify";
import Footer from "@/comonentsPC/LoginFooter.vue";
import CheckCode from "@/checkCode.js";
import { login, register } from "@/service/api";
export default {
  components: {
    SIdentify,
    Footer
  },
  data() {
    return {
      l_name: "",
      l_password: "",
      l_checkCode: "",
      r_name: "",
      r_password: "",
      r_inviceCode: "",
      identifyCode: "0000",
      activeIndex: 0
    };
  },
  created() {
    this.identifyCode = this.random();
    if (this.$route.query.type === "login") {
      this.activeIndex = 0;
    } else {
      this.activeIndex = 1;
    }
  },
  mounted() {
    // let MCanvas = new CheckCode("#canvas_code", {
    //   lineNum: 6, // 可选
    //   textLen: 4, // 可选
    //   width: 200, // 可选
    //   height: 50 // 可选
    // });
  },
  methods: {
    toIndex() {
      this.$router.push("/");
    },
    setActive(index) {
      this.activeIndex = index;
    },
    regist() {
      register({
        mobile: this.r_name,
        password: this.r_password,
        inviteCode: this.r_inviceCode
      })
        .then(res => {
          if (res.data.code !== 200) {
            this.$message.error(res.data.msg);
            return;
          }
          this.$router.push("/");
          this.login();
        })
        .catch(error => {
          this.$message.error("账号或密码错误");
        });
    },
    login() {
      if (!this.l_name || !this.l_password) {
        return this.$message({
          message: "请输入完整的信息！",
          type: "error"
        });
      }
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
          if (res.data.code === 0) {
            sessionStorage.setItem(
              "userInfo",
              JSON.stringify(res.data.userInfo)
            );
            sessionStorage.setItem("isLogin", true);
            sessionStorage.setItem("token", res.data.token);
            this.$router.push("/");
          }else{
             this.$message.error(this.data.msg);
          }
        })
        .catch(error => {
          this.$message.error("账号或密码错误");
        });
    },
    changeCheckCode() {
      this.identifyCode = this.random();
    },
    random() {
      let str = "";
      for (let i = 0; i < 4; i++) {
        str += Math.floor(Math.random() * (10 - 0)) + 0;
      }
      return str;
    }
  }
};
</script>
<style lang="less" scoped>
#canvas_code {
  height: 30px;
  width: 100px;
}
.loginBody {
  .logo {
    height: 85px;
    text-align: center;
    margin-top: 20px;
    img {
      height: 100%;
      width: 800px;
      cursor: pointer;
    }
  }
  .content {
    width: 100%;
    height: calc(100vw * 0.4);
    position: relative;
    display: flex;
    align-items: center;
    background: url("../assets/images/loginBG.png") no-repeat;
    background-size: cover;
  }
  .loginBox {
    position: absolute;
    right: 150px;
    background-color: #ffffff;
    padding: 30px;
    width: 270px;
    height: 300px;
    .tabs {
      font-size: 23px;
      display: flex;
      color: #999;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        left: 0px;
        bottom: 0px;
        width: 100%;
        height: 1px;
        background-color: #999;
      }
      .tabItem {
        margin-right: 20px;
        padding-bottom: 20px;
        cursor: pointer;
        transform: translateX(-1);
      }
      .tabItemActive {
        border-bottom: 2px solid #333;
        color: #333;
      }
    }
    .login {
    }
    .regest {
    }
  }
}
.inputBox {
  border-bottom: 1px solid #999;
  margin-top: 20px;
  input {
    border: none;
    outline: none;
    line-height: 30px;
  }
}
.checkBox {
  display: flex;
  margin-top: 20px;
  input {
    border: none;
    outline: none;
    border-bottom: 1px solid #999;
    line-height: 30px;
  }
}
.btn {
  background-color: rgb(192, 27, 25);
  color: #ffffff;
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  margin-top: 30px;
  cursor: pointer;
}
</style>