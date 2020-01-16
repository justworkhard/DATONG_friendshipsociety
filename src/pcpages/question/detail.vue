<template>
  <div>
    <QHeader></QHeader>
    <div class="q_body">
      <div class="question">
        <h2 class="title">{{qData.title}}</h2>
        <div class="content" v-html="qData.content"></div>
        <div class="time">编辑于：{{qData.time}}</div>
        <div class="fun">
          <!-- <span class="college">点赞</span>
          <span class="colum">|</span>
          <span class="readed">浏览999</span>
          <span class="colum">|</span>-->
          <div class="qFun">
            <div class="good" @click="addGood">
              <img src="@/assets/images/good.png" alt srcset v-show="!good" />
              <img src="@/assets/images/goodA.png" alt srcset v-show="good" />
              <span>{{qData.upNum}}</span>
            </div>
            <div class="good" @click="addColle">
              <img src="@/assets/images/colle.png" alt srcset v-show="!colStatus" />
              <img src="@/assets/images/colleA.png" alt srcset v-show="colStatus" />
              <span>{{qData.collect}}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="answer_count">{{reparentList.length}}个回答</div>
      <div class="answer_item" v-for="(item,index) in reparentList" :key="index">
        <div
          class="an_content"
          @click="respJudget(item.repUserId,item.username,item.repId)"
        >{{item.repContent}}</div>
        <div class="an_footer">
          <div class="time">
            发布于：{{item.repTime}}
            <div class="respon" @click="showRespon(index)">{{item.showChild?'收起':'展开'}}回复({{item.child?item.child.length:'0'}})</div>
          </div>
          <div class="user">
            <img :src="item.portrait" alt class="avadar" />
            <p class="name">{{item.username}}</p>
          </div>
        </div>
        <div class="JChild" v-show="item.showChild">
          <div class="childItem" v-for="(qIterm,qIndex) in item.child" :key="qIndex">
            <p class="QJname">{{qIterm.username}}:</p>
            <p class="QJcontent">{{qIterm.repContent}}</p>
          </div>
          <input class="QJinput" v-model="item.resContent"/>
          <span @click="sendToQJ(item.repUserId,item.resContent,item.repId)">发送</span>
        </div>
      </div>
      <div class="editor" id="editor">
        <textarea
          name
          id
          v-model="resContent"
          :placeholder="respJudgetId?`回复${respJudgetName}`:'对ta说点什么'"
        ></textarea>
      </div>
      <div class="answer_box">
        <div class="answer" @click="submit">我要回答</div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import QHeader from "@/comonentsPC/QHeader.vue";
import Footer from "@/comonentsPC/Footer.vue";
import {
  sendInvitDetail,
  getQuestionListPage,
  repyInvitation,
  sendUpNum,
  sendColle
} from "@/service/api.js";
var E = require("wangeditor"); // 使用 npm 安装
export default {
  components: {
    QHeader,
    Footer
  },
  mounted() {},
  created() {
    this.getData();
  },
  data() {
    return {
      qData: {},
      reparentList: [],
      good: false,
      respJudgetId: "",
      resContent: "",
      respJudgetName: "",
      colStatus: 0,
      repId: ""
    };
  },
  methods: {
    showRespon(index){
       this.reparentList[index].showChild = !this.reparentList[index].showChild
       console.log(this.reparentList[index].showChild ,index);
       
    },
    sendToQJ(id, content, juID) {
      let params = {
        parentId: id,
        repContent:content,
        repUserId: JSON.parse(sessionStorage.getItem("userInfo")).userId,
        sendId: juID
      };
      repyInvitation(params).then(res => {
        if (res.data.code === 0) {
          this.$message.success("提交成功");
          this.getData();
          this.showPositionValue = true;
          this.resContent = "";
          this.editor.txt.html("");
        }
      });
    },
    addColle() {
      sendColle({
        status: this.colStatus ? 0 : 1,
        id: this.$route.query.id,
        userId: JSON.parse(sessionStorage.getItem("userInfo")).userId
      }).then(res => {
        this.$message.success("操作成功");
        this.getData();
      });
    },
    respJudget(id, name, juID) {
      // this.respJudgetId = id;
      // this.respJudgetName = name;
      // this.repId = juID
    },
    addGood() {
      sendUpNum({
        status: this.good ? 0 : 1,
        id: this.$route.query.id,
        userId: JSON.parse(sessionStorage.getItem("userInfo")).userId
      }).then(res => {
        this.$message.success("操作成功");
        this.getData();
      });
    },
    submit() {
      let params = {
        parentId: this.respJudgetId,
        repContent: this.resContent,
        repUserId: JSON.parse(sessionStorage.getItem("userInfo")).userId,
        sendId: this.repId || this.$route.query.id
      };
      if (!this.resContent) {
        return;
      }
      repyInvitation(params).then(res => {
        if (res.data.code === 0) {
          this.$message.success("提交成功");
          this.getData();
          this.showPositionValue = true;
          this.resContent = "";
          this.editor.txt.html("");
        }
      });
    },
    clear() {
      this.respJudgetId = "";
      this.respJudgetName = "";
      this.repId = "";
    },
    getData() {
      sendInvitDetail({
        id: this.$route.query.id,
        userId: JSON.parse(sessionStorage.getItem("userInfo")).userId
      }).then(res => {
        res.data.reparentList.forEach(element => {
          element.resContent = ''
          element.showChild = false
        });
        this.qData = res.data.sendInvitation;
        this.reparentList = res.data.reparentList;
        this.good = res.data.upstatus;
        this.colStatus = res.data.colstatus;
      });
    }
  }
};
</script>
<style lang="less" scoped>
.respon {
  color: #2d64b3;
  cursor: pointer;
}
.JChild {
  background-color: rgb(228, 228, 228);
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 12px;
  margin-bottom: 10px;
  .childItem {
    display: flex;
  }
  .QJname {
    color: rgb(14, 205, 253);
  }
  .QJinput {
    height: 20px;
    border: 1xp solid #999;
    width: 80%;
    padding: 2px 10px;
  }
  span {
    display: inline-block;
    cursor: pointer;
    color: #4d91f7;
  }
}
.qFun {
  display: flex;
  align-items: center;
  color: #999;
  .good {
    margin-right: 60px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  img {
    height: 22px;
    width: 22px;
    margin-right: 5px;
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
  textarea {
    width: 100%;
    resize: none;
    padding: 10px;
    line-height: 30px;
    outline: none;
  }
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
      margin: 10px 0 20px 0px;
      display: flex;
      align-items: center;
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
    border-bottom: 1px solid #999;
    margin-bottom: 10px;
    .an_content {
      line-height: 30px;
      overflow: hidden;
      cursor: pointer;
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
        display: flex;
        align-items: center;
        .avadar {
          border-radius: 50%;
          overflow: hidden;
          height: 40px;
          width: 40px;
          margin-right: 10px;
        }
        .name {
          font-size: 18px;
        }
      }
    }
  }
}
</style>