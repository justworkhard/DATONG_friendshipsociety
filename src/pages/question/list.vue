<template>
  <div class="content">
    <XHeader :title="type+'详情'"></XHeader>
    <div
      class="questionItem"
      v-for="(item,index) in questionList"
      :key="index"
      @click="toDetail(item.id)"
    >
      <div class="qHeader">
        <div>
          <p class="name">{{item.title}}</p>
        </div>
        <p class="time">{{item.time}}</p>
      </div>
      <div class="qContent" v-html="item.content"></div>
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
      </div>
    </div>
  </div>
</template>
<script>
import XHeader from "@/components/XHeader.vue";
import { userSend, getUsercollect } from "@/service/api.js";
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
      pageNo: 1
    };
  },
  created() {
    this.userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    switch (this.$route.query.type) {
      case "fatie":
        this.type = "发帖";
        userSend({
          pageNo: this.pageNo,
          pageSize: 10,
          userId: this.userInfo.userId
        }).then(res => {
          this.questionList = res.data.data;
          this.count = res.data.count;
        });
        break;
      case "huitie":
        this.type = "回帖";
        break;
      case "colle":
        this.type = "收藏";
        getUsercollect({
          pageNo: this.pageNo,
          pageSize: 10,
          userId: this.userInfo.userId
        }).then(res => {
          this.questionList = res.data.data;
          this.count = res.data.count;
        });
        break;
    }
  },
  methods: {
    toList() {},
    toDetail(id) {
      this.$router.push({
        path: "/question/detail",
        query: {
          id: id
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.questionItem {
  padding: 10px;
  margin-bottom: 150xp;
  .qHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    img {
      border-radius: 50%;
      overflow: hidden;
      height: 35px;
      width: 35px;
      margin-right: 20px;
    }
    div {
      display: flex;
      align-items: center;
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
    max-height: 125px;
    overflow: hidden;
    text-overflow: ellipsis;
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