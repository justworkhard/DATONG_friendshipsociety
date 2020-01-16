<template>
  <div>
    <QHeader></QHeader>
    <div class="q_body">
      <div class="cell">
        <span class="title">标题：</span>
        <input type="text" placeholder="请输入标题" v-model="titleV" />
      </div>
      <div class="cell">
        <span class="title">内容：</span>
        <div class="editor" id="editor"></div>
      </div>
      <div class="answer_box">
        <div class="answer" @click="submit">我要提问</div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import QHeader from "@/comonentsPC/QHeader.vue";
import Footer from "@/comonentsPC/Footer.vue";
var E = require("wangeditor"); // 使用 npm 安装
import {saveInvitation } from "@/service/api"
export default {
  components: {
    QHeader,
    Footer
  },
  mounted() {
    this.qCode = sessionStorage.getItem('qCode')
    // 创建编辑器
    this.editor = new E("#editor");
    // 配置服务器端地址
    this.editor.customConfig.uploadImgServer = "/api/app/pic/upload";
    this.editor.customConfig.uploadImgHeaders = {
      token: sessionStorage.getItem("token")
    };
    this.editor.customConfig.uploadFileName = 'file'
    this.editor.customConfig.uploadImgHooks = {
      customInsert: function(insertImg, result, editor) {
        var url = result.url;
        insertImg(url);

      }
    };
    this.editor.create();
  },
  data() {
    return {
      editor: "",
      titleV: "",
      content: "",
      qCode: ''
    };
  },
  methods: {
    submit() {
      if (!this.titleV) {
        return this.$message({
          message: "请输入问题标题",
          type: "error"
        });
      }
      if (!this.editor.txt.text()) {
        return this.$message({
          message: "请输入问题内容",
          type: "error"
        });
      }
      saveInvitation({
        colid : this.qCode,
        content  : this.editor.txt.html(),
        sendUserId  : JSON.parse(sessionStorage.getItem('userInfo')).userId,
        title  : this.titleV,
      }).then(res=>{
        this.$message.success('提交成功')
        this.$router.push('/question')
      })

    }
  }
};
</script>
<style lang="less" scoped>
.cell {
  display: flex;
  margin-top: 20px;
  .title {
    white-space: nowrap;
  }
  input {
    outline: none;
    padding: 5px 10px;
    width: 100%;
  }
}
.answer_box {
  display: flex;
  justify-content: flex-end;
}
.answer {
  color: #ffffff;
  background-color: rgb(100, 173, 203);
  margin: 20px 0px;
  width: 80px;
  padding: 5px;
  text-align: center;
  cursor: pointer;
}
.editor {
  width: 100%;
}
.q_body {
  width: 1200px;
  margin: 0 auto;
  .question {
    .title {
      font-size: 25px;
      margin: 10px 0px;
    }
    .content {
      line-height: 30px;
      height: 120px;
      overflow: hidden;
      color: rgb(127, 127, 127);
      font-size: 15px;
    }
    .time {
      font-size: 14px;
      color: #999;
      margin: 10px 0;
    }
    .fun {
      color: #999;
      margin: 10px 0 20px 20px;
      .colum {
        margin: 0 20px;
      }
      .college {
        color: rgb(238, 137, 123);
      }
    }
  }
  .answer_count {
    font-size: 20px;
    padding: 20px;
    border: 2px solid rgb(246, 246, 246);
    margin-bottom: 20px;
  }
  .answer_item {
    .an_content {
      height: 120px;
      line-height: 30px;
      overflow: hidden;
    }
    .an_footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 20px 0px;
      .time {
        font-size: 14px;
        color: #999;
      }
      .user {
        .avadar {
          border-radius: 50%;
          overflow: hidden;
          height: 40px;
          width: 40px;
        }
        .name {
          font-size: 18px;
        }
      }
    }
  }
}
</style>