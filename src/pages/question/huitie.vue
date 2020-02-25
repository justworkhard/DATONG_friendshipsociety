<template>
  <div class="content">
    <XHeader :title="type+'详情'"></XHeader>
    <div
      class="questionItem"
      v-for="(item,index) in questionList"
      :key="index"
      @click="toDetail(item.schild[0]?item.schild[0].id:'')"
    >
      <div class="qHeader">
        <div class="avadar">
          <img :src="item.portrait" alt />
        </div>
        <div class="right">
          <p class="name">{{item.username}}</p>
          <p class="time">{{item.schild[0]?item.schild[0].time:''}}</p>
        </div>
      </div>
      <div class="qContent">
        <div class="resp">{{item.repContent}}</div>
        <div class="content" v-html="item.schild[0]?item.schild[0].content:'原帖已删除'"></div>
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
import { userSend, getUsercollect, userRep } from "@/service/api.js";
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
    this.onSearch();
  },
  methods: {
    onSearch() {
      switch (this.$route.query.type) {
        case "fatie":
          this.type = "发帖";
          userSend({
            pageNo: this.pageNo,
            pageSize: 10,
            userId: this.userInfo.userId
          }).then(res => {
            this.questionList = this.questionList.concat(res.data.data);
            this.count = res.data.count;
          });
          break;
        case "huitie":
          this.type = "回帖";
          userRep({
            pageNo: this.pageNo,
            pageSize: 10,
            userId: this.userInfo.userId
          }).then(res => {
            let temp = [];
            // res.data.data.forEach(element => {
            //   temp.push(element.schild[0]);
            // });
            console.log("========");

            this.questionList = this.questionList.concat(res.data.data);
            // this.questionList.forEach(item => {
            //   if (item.schild.length == 0) {
            //     item.schild.push([]);
            //   }
            // });
            this.count = res.data.count;
          });
          break;
        case "colle":
          this.type = "收藏";
          getUsercollect({
            pageNo: this.pageNo,
            pageSize: 10,
            userId: this.userInfo.userId
          }).then(res => {
            this.questionList = this.questionList.concat(res.data.data);
            this.count = res.data.count;
          });
          break;
      }
    },
    more() {
      if (this.pageNo * 10 >= this.count) {
        return;
      }
      this.pageNo++;
      this.onSearch();
    },
    toDetail(id) {
      if(!id){
        return
      }
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