<template>
  <div>
    <!-- <div class="title">
      <h2>{{data.title}}</h2>
      <div class="date">{{'发布日期:[ '+data.createTime+' ]'}}</div>
    </div>-->
    <div class="content_html" v-html="data.content"></div>
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
export default {
  components: { NewsCard },
  props: ["contentId"],
  watch: {
    contentid(curV, oldV) {
      getNewsContent(this.contentid).then(res => {
        this.data = res.data.tInfoList[0];
      });
    }
  },
  created() {
    this.contentid = this.contentId
    // getNewsContent(this.contentId).then(res => {
    //   this.data = res.data.tInfoList[0];
    // });
    getNextContent(this.contentId).then(res => {
      (this.next = res.data.nextInfo), (this.pre = res.data.preInfo);

    });
  },
  afrerMounted() {},
  data() {
    return {
      data: {},
      pre: {},
      next: {},
      contentid:''
    };
  },
  methods: {
    // onChangePage(current) {
    //   console.log(current);
    //   this.$emit("onChangePage", current);
    // }
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
.content_html{
  overflow-x: scroll;
  width: 885px;
}
</style>
