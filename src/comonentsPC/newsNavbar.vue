<template>
  <div class="red_header">
    <div class="header">
      <span @mouseenter="active(0)" :class="{'active':activeIndex === 0}">新闻动态</span>
      <span @mouseenter="active(1)" :class="{'active':activeIndex === 1}">联谊会活动</span>
      <a
        :href="activeIndex === 0?'#/second/menu?parentId=6&ptCode=0&currenId=11&indexUrl=%2F':'#/second/menu?parentId=6&ptCode=0&currenId=10&indexUrl=%2F'"
        target="_blank"
      >更多 &gt;&gt;</a>
    </div>
    <div class="padding_15">
      <div v-if="activeIndex === 0" class="news_list">
        <div class="hot_news">
          <h3>{{newsList[0]?newsList[0].title:''}}</h3>
          <div class="content" v-html="newsList[0]?newsList[0].summary:''" 
          @click="toDetail(newsList[0].id)"
          ></div>
        </div>
        <div
          class="news_item"
          v-for="(item,index) in newsList"
          :key="index"
          @click="toDetail(item.id)"
        >
          <img src="@/assets/images/mipmap-xxxhdpi/hot.png" alt srcset>
          <p class="title">{{item.title}}</p>
          <span class="date">{{item.createTime}}</span>
        </div>
      </div>
      <div v-if="activeIndex === 1" class="news_list">
        <div class="hot_news">
          <h3>{{activeList[0]?activeList[0].title:''}}</h3>
          <div class="content" v-html="activeList[0]?activeList[0].summary:''"
          @click="toDetail(newsList[0].id)"          
          ></div>
        </div>
        <div
          class="news_item"
          v-for="(item,index) in activeList"
          :key="index"
          @click="toDetail(item.id)"
        >
          <img src="@/assets/images/mipmap-xxxhdpi/hot.png" alt srcset>
          <p class="title">{{item.title}}</p>
          <span class="date">{{item.createTime}}</span>
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { getCarouselList, getIndexList, getNewsList } from "@/service/api";
import NewsCard from "./newsCard";
export default {
  props: ["title"],
  components: { NewsCard },
  created() {
    getNewsList({
      colid: 11,
      ptCode: 0,
      pageSize: 10,
      pageNo: 1
    }).then(res => {
      this.newsList = res.data.data;
    });
   getNewsList({
      colid: 10,
      ptCode: 0,
      pageSize: 10,
      pageNo: 1
    }).then(res => {
      this.activeList = res.data.data;
    });
},
  data() {
    return {
      activeIndex: 0,
      newsList: [],
      activeList: []
    };
  },
  methods: {
    toDetail(id) {
      this.$router.push(
        "/second/menu?parentId=6&ptCode=0&currenId=11&indexUrl=%2F&title=联谊会介绍&contentId=" + id
      );
    },
    active(index) {
      this.activeIndex = index;
    }
  }
};
</script>
<style lang="less" scoped>
.red_header {
  border: 1px solid #f1f1f1;
  margin-bottom: 20px;
  height: 362px;
}
.padding_15 {
  padding: 15px;
  min-height: 366px;
}
.header {
  height: 39px;
  overflow: hidden;
  border-bottom: 1px solid #f1f1f1;
  span {
    // background: url(../images/tit-r.jpg) right top no-repeat #b61412;
    padding-right: 20px;
    padding-left: 20px;
    float: left;
    line-height: 39px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    background-color: #fafafa;
    text-align: center;
  }
  .active {
    background-color: #b61412;
    color: #fff;
  }
  a {
    float: right;
    line-height: 39px;
    color: #666;
    margin-right: 15px;
    font-size: 12px;
  }
}
.news_list {
  .hot_news {
    h3 {
      font-size: 16px;
      color: #084466;
      text-align: center;
      margin: 0 10px;
      height: 30px;
      line-height: 30px;
      word-break: break-all;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .content {
      margin-top: 12px;
      word-break: break-all;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      color: #999;
      line-height: 24px;
      font-size: 14px;
      height: 24px;
      text-overflow: ellipsis;
      cursor: pointer;
      &:hover{
        color: #1a95c7
      }
    }
  }
  .news_item {
    display: flex;
    position: relative;
    border-bottom: 1px dashed #bbb;
    align-items: center;

    img {
      height: 12px;
      width: 22px;
      margin: 0 5px;
    }

    .title {
      display: block;
      height: 36px;
      width: 100%;
      line-height: 36px;
      font-size: 14px;
      word-break: break-all;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      position: relative;
      color: #6e6e6e;
      text-decoration: none;
      margin-right: 100px;
      cursor: pointer;
          &:hover {
      color: #b61412;
    }
    }
    .date {
      position: absolute;
      right: 0;
      top: 0;
      line-height: 36px;
      color: #bbb;
      text-align: center;
      font-size: 12px;
    }
  }
}
</style>
