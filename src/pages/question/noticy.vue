<template>
  <div class="content">
    <XHeader :title="type+'详情'"></XHeader>
    <div
      class="questionItem"
      v-for="(item,index) in noticy"
      :key="index"
      @click="toDetail(item.id,item.messageChild.id)"
    >
      <div class="qHeader">
        <div class="avadar">
          <img :src="item.messageChild.portrait" alt />
        </div>
        <div class="right">
          <p class="name">{{item.messageChild.username}}</p>
          <p class="time">{{item.messageChild.createTime}}</p>
        </div>
      </div>
      <div class="qContent">
        <div class="resp" v-html="item.messageChild.context"></div>
        <div class="content" v-html='item.content'></div>
      </div>
      <!-- 
      <div class="qFun">
        <div class="good">
          <img src="@/assets/images/good.png" alt srcset v-show="!item.good" />
          <img src="@/assets/images/goodA.png" alt srcset v-show="item.good" />
          <span>{{item.upNum}}</span>
        </div>
        <div class="good">
          <img src="@/assets/images/judged.png" alt srcset />
          <span>{{item.commentNum}}</span>
        </div>
        <div class="good">
          <img src="@/assets/images/colle.png" alt srcset />
          <span>{{item.collect}}</span>
        </div>
      </div>-->
    </div>
    <div class="more" @click="more">{{count>pageNo*10?'加载更多':'无更多数据'}}</div>
  </div>
</template>
<script>
import XHeader from "@/components/XHeader.vue";
import {
  userSend,
  getUsercollect,
  userRep,
  notReadRep,
  updateReadStatus
} from "@/service/api.js";
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
      questionList: [],
      type: "",
      count: 0,
      pageNo: 1,
      noticy: []
    };
  },
  created() {
    this.userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    this.onSearch();
  },
  methods: {
    onSearch() {
      this.userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
      notReadRep({
        userId: this.userInfo.userId
      }).then(res => {
        this.noticy = res.data.data;
      });
    },
    more() {
      if (this.pageNo * 10 >= this.count) {
        return;
      }
      this.pageNo++;
      this.onSearch();
    },
    toDetail(id,id2) {
      updateReadStatus({
        id: id2
      }).then(res => {
        this.$router.push({
          path: "/question/detail",
          query: {
            id: id
          }
        });
      });
    }
  }
};
</script>
<style lang="less" scoped>
.more {
  color: #999;
  font-size: 14px;
  text-align: center;
  margin: 10px 0px;
}
.questionItem {
  padding: 10px;
  margin-bottom: 150xp;
  .qHeader {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .avadar {
      border-radius: 50%;
      overflow: hidden;
      height: 35px;
      width: 35px;
      margin-right: 10px;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .right {
      display: flex;
      flex-direction: column;
    }
    // img {
    //   border-radius: 50%;
    //   overflow: hidden;
    //   height: 35px;
    //   width: 35px;
    //   margin-right: 20px;
    // }
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
    max-height: 125px;
    overflow: hidden;
    text-overflow: ellipsis;
    .content {
      background-color: rgb(228, 228, 228);
      border-radius: 5px;
      line-height: 25px;
      padding: 5px 10px;
    }
    .resp {
      padding: 5px 10px;
    }
  }
  .qFun {
    display: flex;
    align-items: center;
    color: #999;
    margin-top: 10px;
    .good {
      margin-right: 60px;
      display: flex;
      align-items: center;
    }
    img {
      height: 20px;
      width: 20px;
      margin-right: 5px;
    }
  }
}
</style>