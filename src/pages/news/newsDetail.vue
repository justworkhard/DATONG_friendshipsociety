<template>
  <div class="body">
    <XHeader :title="data.title"></XHeader>
    <div class="news_content">
      <!-- <h3 class="title">{{data.title}}</h3>
      <p class="date">发布日期：{{data.createTime}}</p>-->
      <div v-html="data.content" id="content"></div>
    </div>
  </div>
</template>
<script>
import XHeader from "@/components/XHeader.vue";
import { getNewsContent, getNextContent } from "@/service/api";

export default {
  created() {
    getNewsContent(this.$route.query.newsId).then(res => {
      this.data = res.data.tInfoList[0];
    });
  },
  components: {
    XHeader
  },
  data() {
    return {
      data: {},
      content:
        "世界上没有一种可以各个领域通吃的语言，为了应对不同的场景和需求，我们摆脱不了要学习一门新的语言。最近准备入坑 Flutter(技术储备)，学了点 Dart, 一点心得分享给大家。 1. 假定前提 2. 基本原则 3. 基本姿势 1. 假定前提 我想看这篇文章的应该都是程序员了吧…"
    };
  }
};
</script>
<style lang="less" scoped>
.title {
  font-size: 18px;
  color: #333333;
  margin-bottom: 20px;
}
.date {
  color: #666666;
  font-size: 11px;
  text-align: center;
  margin-bottom: 20px;
}
.news_content {
  padding: 0 15px;
  overflow-x: hidden

}
#content {
  & /deep/ img {
    width: 100%;
  }
}
</style>
