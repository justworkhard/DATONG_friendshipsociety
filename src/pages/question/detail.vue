<template>
  <div class="content">
    <XHeader title="问题详情"></XHeader>
    <div @click="clear">
      <div class="qHeader">
        <img :src="qData.portrait" alt srcset />
        <p class="name">{{qData.username}}</p>
      </div>
      <div class="qContent" v-html="qData.content"></div>
    </div>
    <div class="qFun">
      <div class="good" @click="addGood">
        <img src="@/assets/images/good.png" alt srcset v-show="!good" />
        <img src="@/assets/images/goodA.png" alt srcset v-show="good" />
        <span>点赞</span>
      </div>
      <div class="good" @click="addColle">
        <img src="@/assets/images/colle.png" alt srcset v-show="!colStatus" />
        <img src="@/assets/images/colleA.png" alt srcset v-show="colStatus" />
        <span>点赞</span>
      </div>
    </div>
    <div class="tip">全部回复</div>
    <div class="judgetItem" v-for="(item,index) in reparentList" :key="index">
      <header class="header" @click="respJudget(item.repUserId,item.username,item.repId)">
        <img class="avadar" :src="item.portrait" alt srcset />
        <div class="Info">
          <div class="userName">{{item.username}}</div>
          <div class="time">{{item.repTime}}</div>
        </div>
      </header>
      <div
        class="jContent"
        @click="respJudget(item.repUserId,item.username,item.repId)"
      >&#12288&#12288{{item.repContent}}</div>
      <div class="JChild" v-show="item.child">
        <div class="childItem" v-for="(qIterm,qIndex) in item.child" :key="qIndex">
          <p class="QJname">{{qIterm.username}}:</p>
          <p class="QJcontent">{{qIterm.repContent}}</p>
        </div>
      </div>
    </div>
    <div class="pespon">
      <input
        type="text"
        :placeholder="respJudgetName?`回复:${respJudgetName}`:'对Ta说点什么'"
        v-model="resContent"
      />
      <p @click="submit">发布</p>
    </div>
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
import {
  sendInvitDetail,
  getQuestionListPage,
  repyInvitation,
  sendUpNum,
  sendColle
} from "@/service/api.js";
import { Toast } from "vux";
export default {
  components: {
    XHeader,
    Toast
  },
  data() {
    return {
      showPositionValue: false,
      qData: {},
      reparentList: [],
      resContent: "",
      good: 0,
      colStatus: 0,
      respJudgetId: null,
      respJudgetName: "",
      repId: ""
    };
  },
  created() {
    this.getData();
  },
  methods: {
    addColle() {
      sendColle({
        status: this.colStatus ? 0 : 1,
        id: this.$route.query.id,
        userId: JSON.parse(sessionStorage.getItem("userInfo")).userId
      }).then(res => {
        this.colStatus = !this.colStatus;
      });
    },
    clear() {
      this.respJudgetId = "";
      this.respJudgetName = "";
      this.repId = "";
    },
    respJudget(id, name, juID) {
      this.respJudgetId = id;
      (this.respJudgetName = name), (this.repId = juID);
    },
    getData() {
      sendInvitDetail({
        id: this.$route.query.id,
        userId: JSON.parse(sessionStorage.getItem("userInfo")).userId
      }).then(res => {
        this.qData = res.data.sendInvitation;
        this.reparentList = res.data.reparentList;
        this.good = res.data.upstatus;
        this.colStatus = res.data.colstatus;
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
          this.getData();
          this.showPositionValue = true;
          this.resContent = "";
        }
      });
    },
    addGood() {
      sendUpNum({
        status: this.good ? 0 : 1,
        id: this.$route.query.id,
        userId: JSON.parse(sessionStorage.getItem("userInfo")).userId
      }).then(res => {
        this.good = !this.good;
      });
    }
  }
};
</script>
<style lang="less" scoped>
.JChild {
  background-color: rgb(228, 228, 228);
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 12px;
  .childItem {
    display: flex;
  }
  .QJname {
    color: rgb(14, 205, 253);
  }
}
.qFun {
  display: flex;
  align-items: center;
  color: #999;
  margin-top: 10px;
  padding-left: 10px;
  .good {
    margin-right: 60px;
    display: flex;
    align-items: center;
  }
  img {
    height: 22px;
    width: 22px;
    margin-right: 5px;
  }
}
.content {
  height: 100vh;
  overflow: scroll;
  position: relative;
  padding-bottom: 40px;
}
.pespon {
  position: fixed;
  left: 0px;
  bottom: 0px;
  height: 40px;
  display: flex;
  width: 100%;
  padding: 0 10px;
  align-items: center;
  background-color: #ffffff;
  input {
    outline: none;
    border-radius: 5px;
    border: none;
    padding: 0 10px;
    height: 30px;
    width: 230px;
    margin-right: 20px;
    background-color: rgb(240, 241, 245);
  }
  p {
    color: rgb(6, 155, 255);
  }
}
.judgetItem {
  margin-bottom: 30px;
  padding: 0 10px;
  .header {
    display: flex;
    .avadar {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 10px;
    }
    .Info {
      .userName {
        font-size: 16px;
      }
      .time {
        color: #999;
        font-size: 12px;
      }
    }
  }
  .jContent {
    font-size: 13px;
    margin-top: 10px;
  }
}
.tip {
  font-size: 14px;
  color: #999;
  padding-left: 10px;
  margin: 10px 0;
}
.qHeader {
  display: flex;
  align-items: center;
  padding-left: 10px;
  img {
    border-radius: 50%;
    overflow: hidden;
    height: 50px;
    margin-right: 10px;
    width: 50px;
  }

  .name {
    font-weight: 600px;
    font-size: 15px;
  }
  .time {
    font-size: 12px;
    color: #999;
  }
}
.qContent {
  line-height: 25px;
  font-size: 14px;
  color: rgb(86, 86, 86);
  // height: 180px;
  line-height: 20px;
  overflow: hidden;
  padding: 0 10px;
}
</style>