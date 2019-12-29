<template>
  <div class="body" @click="toDetail(data.id)">
    <div class="logo">
      <img :src="data.minPicAddress" alt />
    </div>
    <div class="content">
      <p class="title">{{data.title}}</p>
      <p class="introduce">{{data.summary}}</p>
      <p class="date">{{data.createTime}}</p>
    </div>
  </div>
</template>
<script>
import { Tabs } from "element-ui";

export default {
  name: "HelloWorld",
  props: ["data"],
  data() {
    return {
      tabList: [
        { label: "首页" },
        { label: "热门资讯" },
        { label: "新闻动态" },
        { label: "十大平台" },
        { label: "平台排行榜" },
        { label: "联谊会介绍" },
        { label: "联谊会企业" },
        { label: "企业产品介绍" },
        { label: "联系我们" }
      ]
    };
  },
  methods: {
    toDetail(newsId) {
      this.$router.push("/newsdetail?newsId=" + newsId);
    }
  }
};
</script>
<style lang="less" scoped>
.body {
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
  .logo {
    width: 108px !important;
    height: 73px;
    border-radius: 2px;
    overflow: hidden;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .content {
    color: #666666;
    margin-left: 10px;
    // width: 200px;
    flex: 1;
    .title {
      width: 100%;
      font-size: 14px;
      color: #333333;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    .introduce {
      font-size: 12px;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .date {
      font-size: 12px;
    }
  }
}
</style>
