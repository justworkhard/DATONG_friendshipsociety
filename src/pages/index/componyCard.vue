<template>
  <div class="body">
    <div class="logo">
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574743418433&di=921035e080d9e1f76fc1d8851197ca8d&imgtype=0&src=http%3A%2F%2Fpic108.huitu.com%2Fres%2F20180805%2F1648367_20180805102422927080_1.jpg"
        alt
      >
    </div>
    <div class="content">
      <p class="title">大同市华林有限责任公司</p>
      <p class="introduce">山西省大同市华林有限责任公司是一家大型商业零售企业，经营业态以购物山西省大同市华林有限责任公司是一家大型商业零售企业，经营业态以购物…</p>
      <p class="date">2019-03-02</p>
    </div>
  </div>
</template>
<script>
import { Tabs } from "element-ui";

export default {
  name: "HelloWorld",
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
    width: 108px;
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
    width: 220px;
    .title {
      font-size: 14px;
      color: #333333;
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
