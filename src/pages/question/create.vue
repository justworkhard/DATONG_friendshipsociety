<template>
  <div class="create">
    <header class="header">
      <span>
        <img src="@/assets/images/cancle.png" alt srcset @click="back" />
      </span>
      <span class="title">发帖</span>
      <span class="public" @click="publicQ">发布</span>
    </header>
    <input type="text" class="inputTitle" placeholder="添加标题" v-model="titleV"/>
    <div id="editor"></div>
    <toast
      v-model="showPositionValue"
      type="text"
      :time="800"
      is-show-mask
      :text="tipMessage"
      position="middle"
    ></toast>
  </div>
</template>
<script>
import XHeader from "@/components/XHeader.vue";
import { saveInvitation } from "@/service/api";
var E = require("wangeditor"); // 使用 npm 安装
import { Confirm, Toast } from "vux";

export default {
  components: {
    XHeader,Toast,Confirm
  },
  data() {
    return {
      editor: "",
      titleV: '',
      showPositionValue: false,
      tipMessage: ''
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    publicQ() {
      if (!this.titleV) {
        this.showPositionValue = true
        this.tipMessage = '请输入问题标题'
        return
      }
      if (!this.editor.txt.text()) {
          this.showPositionValue = true
          this.tipMessage = '请输入问题内容'
          return
      }
      saveInvitation({
        colid: "1",
        content: this.editor.txt.html(),
        sendUserId: JSON.parse(sessionStorage.getItem("userInfo")).userId,
        title: this.titleV
      }).then(res => {
        if(res.data.code === 0 ){
           this.$router.push('/question')
        }
      });
    }
  },
  mounted() {
    // 创建编辑器
    this.editor = new E("#editor");
    // 配置服务器端地址
    this.editor.customConfig.uploadImgServer = "/api/app/pic/upload";
    this.editor.customConfig.menus = [
        'head',
        'bold',
        'italic',
        'underline',
        'image'
    ]
    this.editor.customConfig.uploadImgHeaders = {
      token: sessionStorage.getItem("token")
    };
    this.editor.customConfig.uploadFileName = "file";
    this.editor.customConfig.uploadImgHooks = {
      customInsert: function(insertImg, result, editor) {
        var url = result.url;
        insertImg(url);
      }
    };
    this.editor.create();
  }
};
</script>
<style lang="less" scoped>
.inputTitle {
  line-height: 40px;
  font-size: 20px;
}
.inputContent {
  line-height: 20px;
}
input,
textarea {
  outline: none;
  border: none;
  width: 95%;
  padding-left: 5%;
}
.header {
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-content: center;
  padding: 0 10px;
  font-size: 16px;
  img {
    height: 20px;
    width: 20px;
  }
  span {
    line-height: 50px;
  }
  .public {
    color: rgb(101, 155, 204);
  }
}
</style>