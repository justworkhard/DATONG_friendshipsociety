<template>
  <div>
    
  </div>
</template>
<script>
import Welcome from "@/comonentsPC/welcome.vue";
import Header from "@/comonentsPC/Header.vue";
import Tabs from "@/comonentsPC/Tabs.vue";
import NewsNavbar from "@/comonentsPC/newsNavbar.vue";
import Footer from "@/comonentsPC/Footer.vue";
import MCarousel from "@/comonentsPC/Carouse.vue";
import SearchBox from "@/comonentsPC/Search.vue";
import NewListCard from "@/comonentsPC/newListCard.vue";
import { Swiper, SwiperItem } from "vux";
import { getCarouselList, getIndexList, getNewsList } from "@/service/api";

export default {
  components: {
    Welcome,
    Header,
    Swiper,
    SwiperItem,
    Footer,
    Tabs,
    NewsNavbar,
    NewListCard,
    SearchBox,
    MCarousel
  },
  created() {
    getNewsList({
      ptCode: "2",
      colid: "45",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.newsList[0] = res.data.data;
    });
    getNewsList({
      ptCode: "2",
      colid: "35",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.newsList[1] = res.data.data;
    });
    getNewsList({
      ptCode: "2",
      colid: "36",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.newsList[2] = res.data.data;
    });
    getNewsList({
      ptCode: "2",
      colid: "36",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.laodongfa = res.data.data;
    });
  },
  data() {
    return {
      laodongfa: [],
      data: [
        { title: "中华人民共和国商标法（一）", date: "2019-1-13" },
        { title: "中华人民共和国商标法（一）", date: "2019-1-13" },
        { title: "中华人民共和国商标法（一）", date: "2019-1-13" },
        { title: "中华人民共和国商标法（一）", date: "2019-1-13" },
        { title: "中华人民共和国商标法（一）", date: "2019-1-13" },
        { title: "中华人民共和国商标法（一）", date: "2019-1-13" },
        { title: "中华人民共和国商标法（一）", date: "2019-1-13" },
        { title: "中华人民共和国商标法（一）", date: "2019-1-13" },
        { title: "中华人民共和国商标法（一）", date: "2019-1-13" },
        { title: "中华人民共和国商标法（一）", date: "2019-1-13" },
        { title: "中华人民共和国商标法（一）", date: "2019-1-13" },
        { title: "中华人民共和国商标法（一）", date: "2019-1-13" }
      ],
      shangbiaofa: [],
      zuzuoquan: [],
      zhuanlifa: [],
      newsList: [],
      TabsList: [
        {
          title: "公司法",
          url: "/second/menu?parentId=30&ptCode=2&currenId=45&indexUrl=%2Flaw"
        },
        {
          title: "合同法",
          url: "/second/menu?parentId=28&ptCode=2&currenId=35&indexUrl=%2Flaw"
        },
        {
          title: "侵权责任法",
          url: "/second/menu?parentId=28&ptCode=2&currenId=36&indexUrl=%2Flaw"
        },
        {
          title: "山西宝翰律师事务所简介",
          url:
            "/second/menu/solo?title=山西宝翰律师事务所简介&ptCode=2&id=3&contentId="
        }
      ],

      demo01_index: 1,
      demo04_list: [
        {
          url: "javascript:",
          img:
            "http://img.52z.com/upload/news/image/20180621/20180621055734_59936.jpg",
          title: "送你一朵fua"
        },
        {
          url: "javascript:",
          img: "https://static.vux.li/demo/5.jpg",
          title: "送你一次旅行",
          fallbackImg:
            "http://pic27.nipic.com/20130324/9252150_152129329000_2.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.main {
  width: 1170px;
  margin: 5px auto;
  padding: 0 15px;
}
.row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.swiper_box {
  position: relative;
  width: 348px;
  height: 260px;
}
.search {
  width: 284px;

  .input_box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 284px;
    height: 95px;
    background-color: #eee;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    .input {
      margin: 0 auto;
      display: flex;
      input {
        width: 175px;
        display: inline-block;
        outline: none;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #555;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 4px 0 0 4px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        -webkit-transition: border-color ease-in-out 0.15s,
          -webkit-box-shadow ease-in-out 0.15s;
        -o-transition: border-color ease-in-out 0.15s,
          box-shadow ease-in-out 0.15s;
        transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
      }
      .btn {
        border: 1px solid #ccc;
        background-color: #fff;
        display: inline-block;
        padding: 6px 12px;
        margin-bottom: 0;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.42857143;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-image: none;
        border-radius: 0 4px 4px 0;
        border-left: none;
      }
    }
    select {
      display: block;
      width: 252px;
      height: 34px;
    }
  }
}
.col {
  width: 573px;
}
.news_list {
  padding: 15px 30px;
  color: rgb(51, 51, 51);
  font-size: 14px;

  .news_item {
    line-height: 28px;
    cursor: pointer;
    .date {
      float: right;
    }
  }
}
</style>
