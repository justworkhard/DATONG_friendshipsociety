<template>
  <div class="content">
    <XHeader title="编辑个人资料"></XHeader>

    <div class="avadar">
      <div class="avadar_box">
        <img :src="userInfo.portrait" alt srcset />
        <input class="selectFile" type="file" accept="image/*" @change="selectFile" />
      </div>
    </div>
    <div class="cell" @click="()=>{this.showU=true}">
      <span>昵称</span>
      <span>{{userInfo.username}}</span>
    </div>
    <div class="cell" @click="()=>{this.show=true}">
      <span>真实姓名</span>
      <span>{{userInfo.name}}</span>
    </div>
    <Confirm v-model="show" title="更改真实姓名" @on-cancel="onCancelN" @on-confirm="onConfirmN">
      <input class="input" placeholder="请输入真实姓名" v-model="name" />
    </Confirm>
    <Confirm v-model="showU" title="更改昵称" @on-cancel="onCancelU" @on-confirm="onConfirmU">
      <input class="input" placeholder="请输入昵称" v-model="nameU" />
    </Confirm>
    <toast
      v-model="showPositionValue"
      type="text"
      :time="800"
      is-show-mask
      text="提交成功"
      position="middle"
    ></toast>
  </div>
</template>
<script>
import XHeader from "@/components/XHeader.vue";
import { upLoad, portraitUpload, updateUserInfo } from "@/service/api.js";
import { Confirm, Toast } from "vux";
export default {
  components: {
    XHeader,
    Confirm,
    Toast
  },
  data() {
    return {
      userInfo: {},
      show: false,
      showU: false,
      nameU: "",
      name: "",
      showPositionValue: false
    };
  },
  created() {
    this.userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    console.log(this.userInfo);
  },
  methods: {
    onCancelN() {},
    onConfirmN() {
      updateUserInfo({
        userId: this.userInfo.userId,
        name: this.name
      }).then(res => {
        this.userInfo.name = this.name;
        sessionStorage.setItem("userInfo", JSON.stringify(this.userInfo));
      });
    },
    onCancelU() {},

    onConfirmU() {
      updateUserInfo({
        userId: this.userInfo.userId,
        username: this.nameU
      }).then(res => {
        this.userInfo.username = this.nameU;
        sessionStorage.setItem("userInfo", JSON.stringify(this.userInfo));
      });
    },
    selectFile(e) {
      let file = e.target.files[0];
      let formData = new FormData();
      formData.append("file", file);
      formData.append(
        "userId",
        JSON.parse(sessionStorage.getItem("userInfo")).userId
      );
      portraitUpload(formData).then(res => {
        if (res.data.code === 0) {
          this.showPositionValue = true;
          this.userInfo.portrait = res.data.url;
          sessionStorage.setItem("userInfo", JSON.stringify(this.userInfo));
          this.userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
input {
  outline: none;
  border: 1px solid #999;
  height: 30px;
  border-radius: 5px;
  padding-left: 5px;
}
.selectFile {
  position: absolute;
  border-radius: 50%;
  overflow: hidden;
  height: 100px;
  width: 100px;
  left: 0px;
  top: 0px;
  opacity: 0;
  z-index: 1000000;
}
.question {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  flex: 1;
  overflow-y: scroll;
  .avadar {
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    .avadar_box {
      border-radius: 50%;
      overflow: hidden;
      height: 100px;
      width: 100px;
      position: relative;
      &:after {
        position: absolute;
        content: "更改";
        color: #ffff;
        background-color: rgba(203, 203, 203, 0.8);
        left: 0px;
        text-align: center;
        bottom: 0px;
        height: 40px;
        width: 100%;
      }
    }
    img {
      height: 100px;
      width: 100px;
      cursor: pointer;
    }
  }
  .cell {
    &:not(:last-child) {
      border-bottom: 1px solid rgb(229, 229, 229);
    }
    padding: 10px;
    padding-right: 40px;
    display: flex;
    justify-content: space-between;
    position: relative;
    &::after {
      position: absolute;
      content: ">";
      color: rgb(229, 229, 229);
      right: 10px;
    }
  }
}
.footer {
  display: flex;
  height: 50px;
  justify-content: space-around;
  color: #333;
  div {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      height: 20px;
      width: 20px;
    }
  }
}
</style>