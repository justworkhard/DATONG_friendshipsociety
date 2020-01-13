<template>
  <div>
    <QHeader></QHeader>
    <div class="q_body">
      <div
        class="question_item"
        v-for="(item,index) in questionList"
        :key="index"
        @click=" toDetail(item.id)"
      >
        <div class="q_header">
          {{item.time}}
          来自
          <span class="user">{{item.username}}</span>
        </div>
        <div class="title">{{item.title}}</div>
        <div class="q_content" v-html="item.content"></div>
        <div class="readed">
          <span>浏览{{item.readCount}}</span>
          <span class="row">|</span>
          <span>收藏{{item.collect}}</span>
        </div>
        <div class="answer_count">
          <span>{{item.commentNum}}</span>
          <span>回答</span>
        </div>
      </div>
      <div style="margin-top:20px">
         <el-pagination  background layout="prev, pager, next" :total="total"></el-pagination>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import QHeader from "@/comonentsPC/QHeader.vue";
import Footer from "@/comonentsPC/Footer.vue";
import { getQuestionList, sendInvitSearch } from "@/service/api";
import { Pagination } from "element-ui";

export default {
  components: {
    QHeader,
    Footer
  },
  data() {
    return {
      questionList: [],
      pageNo: 1,
      total: 0
    };
  },
  methods: {
    toDetail(id) {
      this.$router.push({
        path: "/question/detail",
        query: {
          id: id
        }
      });
    },
    onSearch(keyword, more) {
      this.keyword = keyword;
      sendInvitSearch({
        colid: "1",
        pageNo: this.pageNo,
        pageSize: 10,
        title: this.keyword
      }).then(res => {
        let temp = res.data.data;
        temp.forEach(element => {
          element.good = false;
        });

        if (temp.length <= 0) return;
        more
          ? (this.questionList = this.questionList.concat(temp))
          : (this.questionList = temp);
        // this.questionList = this.questionList.concat(temp);
        this.total = res.data.count;
      });
    }
  },
  created() {
    this.onSearch("");
  }
};
</script>
<style lang="less" scoped>
.q_body {
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 20px;
}
.question_item {
  position: relative;
  margin-top: 20px;
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
    .user {
      color: rgb(78, 166, 237);
    }
  }
  .title {
    line-height: 70px;
    height: 70px;
    font-size: 20px;
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