<template>
  <div>
    <div class="content_html" :style="styles" v-html="data.content"></div>
    <p class="readed">阅读量：{{data.amountRead}}</p>
    <div class="next">
      上一篇：
      <a @click="toPre">{{pre?pre.title:'无'}}</a>
    </div>
    <div class="next">
      下一篇：
      <a @click="toNext">{{next?next.title:'无'}}</a>
    </div>
  </div>
</template>
<script>
import NewsCard from "./newsCard";
import { getNewsContent, getNextContent } from "@/service/api";
import { Loading } from "element-ui";
export default {
  components: { NewsCard },
  props: ["contentId", 'styles'],
  watch: {
    contentid(curV, oldV) {
      let loadingInstance = Loading.service({ fullscreen: true });
      getNewsContent(curV).then(res => {
        this.data =  res.data.tInfoList?res.data.tInfoList[0] : [];
        loadingInstance.close();
      });
      getNextContent(curV).then(res => {
      this.next = []
      this.pre = []
      this.next = res.data.nextInfo
      this.pre = res.data.preInfo
    });
    }
  },
  created() {
    this.contentid = this.contentId;
    // getNewsContent(this.contentId).then(res => {
    //   this.data = res.data.tInfoList[0];
    // });
    // Loading.service(options);
    getNextContent(this.contentId).then(res => {
      this.next = []
      this.pre = []
      this.next = res.data.nextInfo
      this.pre = res.data.preInfo
    });
  },
  afrerMounted() {},
  data() {
    return {
      data: {},
      pre: {},
      next: {},
      contentid: ""
    };
  },
  methods: {

    toPre() {
      if (this.pre && this.pre.id) {
        this.contentid = this.pre.id;
      }
    },
    toNext() {
      if (this.next && this.next.id) {

        this.contentid = this.next.id;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.readed{
  padding: 10px 0px;
  color: #999
}
.title {
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
  h2 {
    text-align: center;
    margin: 30px 0 0 0;
    font-size: 28px;
    color: #333;
    font-weight: 400;
  }
  .date {
    font-size: 14px;
    height: 20px;
    line-height: 20px;
    text-align: right;
    margin-bottom: 5px;
    padding: 15px 0 15px;
    color: #999;
  }
}
.next {
  font-size: 14px;
  overflow: hidden;
  background: #f8f8f8;
  border: 1px solid #ddd;
  margin-top: 20px;
  line-height: 40px;
  padding-left: 20px;
  cursor: pointer;
  &:hover {
    a {
      color: #d72340;
    }
  }
}
.content_html {
  overflow-x: scroll;
  width: 885px;
}
</style>
