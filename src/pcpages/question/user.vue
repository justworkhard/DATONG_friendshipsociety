<template>
  <div>
    <QHeader></QHeader>
    <div class="q_body">
      <div class="left_menu">
        <ul>
          <li :class="activeIndex===0?'active':''" @click="setActive(0)">个人资料</li>
          <li :class="activeIndex===1?'active':''" @click="setActive(1)">我的收藏</li>
          <li :class="activeIndex===2?'active':''" @click="setActive(2)">我的回帖</li>
          <li :class="activeIndex===3?'active':''" @click="setActive(3)">我的发帖</li>
          <li :class="activeIndex===4?'active':''" @click="setActive(4)">我的消息</li>
        </ul>
      </div>
      <!-- 个人资料 -->
      <div class="content" v-show="activeIndex === 0">
        <div class="title">个人资料</div>
        <div class="info_box">
          <div class="avadar">
            <img :src="userInfo.portrait" alt />
            <input class="selectFile" type="file" accept="image/*" @change="selectFile" />
          </div>
          <div class="info">
            <div class="label">
              昵称：{{userInfo.username}}
              <img
                class="editorUser"
                src="@/assets/images/editorUser.png"
                @click="openInput('nick')"
              />
            </div>
            <div class="label">
              实名：{{userInfo.name}}
              <img
                class="editorUser"
                src="@/assets/images/editorUser.png"
                @click="openInput('name')"
              />
            </div>
            <!-- <div class="label">性别：</div> -->
            <!-- <div class="label">地区：123</div> -->
          </div>
        </div>
      </div>
      <!-- 我的收藏 -->
      <div class="content" v-show="activeIndex === 1">
        <div class="title">我的收藏</div>
        <div
          class="question_item"
          v-for="(item,index) in collList"
          :key="index"
          @click=" toDetail(item.id)"
        >
          <div class="q_header">
            {{item.time}}
            来自
            <span class="user">{{item.username}}</span>
          </div>
          <div class="title">{{item.title}}</div>
        </div>
        <el-pagination
          layout="prev, pager, next"
          :total="collCount"
          @current-change="collIndexChange"
        ></el-pagination>
      </div>
      <!-- 我的回答 -->
      <div class="content" v-show="activeIndex === 2">
        <div class="title">我的回帖</div>
        <div
          class="question_item"
          v-for="(item,index) in respList"
          :key="index"
          @click=" toDetail(item.schild[0]?item.schild[0].id:'')"
        >
          <div class="q_header">
            <img class="avadar" :src="item.portrait" alt srcset />
            {{item.schild[0]?item.schild[0].time:''}}
            来自
            <span class="user">{{item.username}}</span>
          </div>
          <div class="resp">{{item.repContent}}</div>
          <div class="titleR" v-html="item.schild[0]?item.schild[0].content:'原帖已删除'"></div>
        </div>
        <el-pagination
          layout="prev, pager, next"
          :total="respCount"
          @current-change="respIndexChange"
        ></el-pagination>
      </div>
      <!-- 我的发帖 -->
      <div class="content" v-show="activeIndex === 3">
        <div class="title">我的发帖</div>
        <div
          class="question_item"
          v-for="(item,index) in publicList"
          :key="index"
          @click=" toDetail(item.id)"
        >
          <div class="q_header">
            {{item.time}}
            来自
            <span class="user">{{item.username}}</span>
          </div>
          <div class="title">{{item.title}}</div>
        </div>
        <el-pagination
          layout="prev, pager, next"
          :total="publicCount"
          @current-change="collIndexChange"
        ></el-pagination>
      </div>
      <!-- 我的发帖 -->
      <div class="content" v-show="activeIndex === 4">
        <div class="title">我的消息</div>
        <div
          class="question_item"
          v-for="(item,index) in noticy"
          :key="index"
          @click=" toDetail(item.id,item.messageChild.id)"
        >
          <div class="q_header">
            <img class="avadar" :src="item.messageChild.portrait" alt srcset />
            {{item.messageChild.createTime}}
            来自
            <span
              class="user"
            >{{item.messageChild.username}}</span>
          </div>
          <div class="resp" v-html="item.messageChild.context"></div>
          <div class="titleR" v-html="item.content"></div>
        </div>
        <el-pagination
          layout="prev, pager, next"
          :total="respCount"
          @current-change="respIndexChange"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import QHeader from "@/comonentsPC/QHeader.vue";
import {
  getUsercollect,
  portraitUpload,
  updateUserInfo,
  userSend,
  userRep,
  notReadRep,
  updateReadStatus
} from "@/service/api.js";
export default {
  components: {
    QHeader
  },
  data() {
    return {
      userInfo: JSON.parse(sessionStorage.getItem("userInfo")),
      activeIndex: 0,
      collList: [],
      collCount: 0,
      collIndex: 1,
      respList: [],
      respCount: 0,
      respIndex: 1,
      publicList: [],
      publicCount: 0,
      publicIndex: 1,
      noticy: []
    };
  },
  created() {
    getUsercollect({
      pageNo: this.collIndex,
      pageSize: 10,
      userId: this.userInfo.userId
    }).then(res => {
      this.collList = res.data.data;
      this.collCount = res.data.count;
    });
    userSend({
      pageNo: this.publicIndex,
      pageSize: 10,
      userId: this.userInfo.userId
    }).then(res => {
      this.publicList = res.data.data;
      this.publicCount = res.data.count;
    });
    userRep({
      pageNo: this.publicIndex,
      pageSize: 10,
      userId: this.userInfo.userId
    }).then(res => {
      this.respList = res.data.data;
      // this.respList.forEach(item=>{
      //   if(item.schild.length == 0){
      //     item.schild.push([])
      //   }
      // })
      this.respCount = res.data.count;
    });
    this.userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    notReadRep({
      userId: this.userInfo.userId
    }).then(res => {
      this.noticy = res.data.data;
    });
  },
  methods: {
    onConfirmN(value) {
      updateUserInfo({
        userId: this.userInfo.userId,
        name: value
      }).then(res => {
        this.userInfo.name = value;
        sessionStorage.setItem("userInfo", JSON.stringify(this.userInfo));
      });
    },
    onConfirmU(value) {
      updateUserInfo({
        userId: this.userInfo.userId,
        username: value
      }).then(res => {
        this.userInfo.username = value;
        sessionStorage.setItem("userInfo", JSON.stringify(this.userInfo));
      });
    },
    openInput(type) {
      this.$prompt("更改信息", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          if (type === "nick") {
            this.onConfirmU(value);
          } else {
            this.onConfirmN(value);
          }
        })
        .catch(() => {
          // this.$message({
          //   type: "info",
          //   message: "取消输入"
          // });
        });
    },
    collIndexChange(index) {
      this.collIndex = index;
    },
    respIndexChange(index) {
      this.collIndex = index;
    },
    publicIndexChange(index) {
      this.collIndex = index;
    },
    setActive(index) {
      this.activeIndex = index;
    },
    async toDetail(id, id2) {
      if(!id){
        return
      }
      if (id2) {
       await updateReadStatus({
          id: id2
        })
      }
      this.$router.push({
        path: "/question/detail",
        query: {
          id: id
        }
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
          this.$message.success("提交成功");
          this.userInfo.portrait = res.data.url;
          sessionStorage.setItem("userInfo", JSON.stringify(this.userInfo));
          // this.userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
          window.location.reload();
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
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
.q_body {
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
}
.left_menu {
  font-size: 20px;
  width: 200px;
  ul {
    list-style-type: none;
    li {
      padding: 10px 20px;
      cursor: pointer;
    }
  }
  .active {
    color: #ffffff;
    background-color: rgb(178, 24, 25);
  }
}
.content {
  flex: 1;
  margin-left: 20px;
  .title {
    font-size: 30px;
    border-bottom: 1px solid #999;
  }
  .info_box {
    display: flex;
    margin-top: 20px;
    .avadar {
      position: relative;
      height: 80px;
      width: 80px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 20px;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
      }
      &:after {
        position: absolute;
        bottom: 0px;
        left: 0px;
        content: "更改";
        color: #000000;
        text-align: center;
        height: 50%;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.5);
      }
    }
    .info {
      .label {
        font-size: 18px;
        margin: 5px 0px;
      }
      .editorUser {
        cursor: pointer;
      }
    }
  }
}
.question_item {
  position: relative;
  margin-top: 20px;
  cursor: pointer;
  .answer_count {
    position: absolute;
    background-color: rgb(162, 215, 109);
    border-radius: 5px;
    height: 80px;
    width: 70px;
    right: 0px;
    top: 0px;
    font-size: 20px;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .q_header {
    font-size: 12px;
    color: #999;
    display: flex;
    align-items: center;
    .user {
      color: rgb(78, 166, 237);
    }
    .avadar {
      height: 30px;
      width: 30px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 10px;
    }
  }
  .title {
    line-height: 70px;
    height: 70px;
    font-size: 20px;
  }
  .resp {
    padding: 0 10px;
  }
  .titleR {
    background-color: rgb(228, 228, 228);
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    font-size: 20px;
    margin-bottom: 10px;
    position: relative;
    overflow: hidden;
    &::after {
      position: absolute;
      left: 0px;
      bottom: 0px;
      content: "";
      width: 100%;
      height: 1px;
      background-color: #000000;
    }
  }
  .q_content {
    height: 100px;
    line-height: 20px;
    overflow: hidden;
    margin-bottom: 10px;
  }
  .readed {
    background-color: #ededee;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 20px;
    color: #999;
    font-size: 14px;
    line-height: 30px;
    .row {
      margin: 0 20px;
    }
  }
}

</style>