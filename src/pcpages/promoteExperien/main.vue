<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="swiper_box">
          <swiper
            :aspect-ratio="300/800"
            height="260px"
            :list="demo04_list"
            v-model="demo01_index"
            auto
          ></swiper>
        </div>
        <Tabs :TabsList="TabsList" :newsList="newsList"></Tabs>
        <SearchBox></SearchBox>
      </div>
      <div class="row">
        <div class="col">
          <NewListCard
            icon="icon-zbgg"
            title="企业风貌"
            :data="data"
            more="/entreAndInnova/secondMenu?title=双创项目"
          ></NewListCard>
          <Tabs
            :TabsList="[{title:'管理感悟',url:'/entreAndInnova/secondMenu?title=双创活动'}]"
            :newsList="newsList"
          ></Tabs>
        </div>
        <div class="col">
          <NewListCard
            icon="icon-zbgs"
            :data="data"
            title="员工风采"
            more="/entreAndInnova/service?title=双创政策"
          ></NewListCard>
          <NewListCard
            icon="icon-scjg"
            :data="data"
            title="经验分享"
            more="/entreAndInnova/service?title=挂牌服务"
          ></NewListCard>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Welcome from "@/comonentsPC/welcome.vue";
import Header from "@/comonentsPC/Header.vue";
import Tabs from "@/comonentsPC/Tabs.vue";
import NewsNavbar from "@/comonentsPC/newsNavbar.vue";
import SearchBox from "@/comonentsPC/Search.vue";
import Footer from "@/comonentsPC/Footer.vue";
import NewListCard from "@/comonentsPC/newListCard.vue";

import { Swiper, SwiperItem } from "vux";

export default {
  components: {
    SearchBox,
    Welcome,
    Header,
    Swiper,
    SwiperItem,
    Footer,
    Tabs,
    NewsNavbar,
    NewListCard
  },
    created(){
    getNewsList({
      ptCode: "4",
      colid: "70",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.newsList[0] = res.data.data;
    });
        getNewsList({
      ptCode: "4",
      colid: "72",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.newsList[0] = res.data.data;
    });
        getNewsList({
      ptCode: "4",
      colid: "80",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.newsList[0] = res.data.data;
    });
            getNewsList({
      ptCode: "9",
      colid: "120",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.hangyebiaozhun = res.data.data;
    });
                getNewsList({
      ptCode: "9",
      colid: "119",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.xiangmujiaoliu = res.data.data;
    });
                getNewsList({
      ptCode: "9",
      colid: "118",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.xiangmuhezuo = res.data.data;
    });
                   getNewsList({
      ptCode: "4",
      colid: "75",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.xiangguanzhengce = res.data.data;
    });
    
  },
  data() {
    return {
      hangyebiaozhun: [],
      xiangmujiaoliu: [],
      xiangmuhezuo: [],
      xiangguanzhengce: [],
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
      newsList: [
        [
          { title: "∙ 平城区人大常委会组织开展全区民营企业家人大代" },
          { title: "∙ 平城区人大常委会组织开展全区民营企业家人大代" },
          { title: "∙ 平城区人大常委会组织开展全区民营企业家人大代" },
          { title: "∙ 平城区人大常委会组织开展全区民营企业家人大代" },
          { title: "∙ 平城区人大常委会组织开展全区民营企业家人大代" },
          { title: "∙ 平城区人大常委会组织开展全区民营企业家人大代" },
          { title: "∙ 平城区人大常委会组织开展全区民营企业家人大代" }
        ],
        [
          { title: "∙ 12" },
          { title: "∙ 12" },
          { title: "∙ 12" },
          { title: "∙ 12" },
          { title: "∙ 12" },
          { title: "∙ 平城区人大常委会组织开展全区民营企业家人大代" },
          { title: "∙ 平城区人大常委会组织开展全区民营企业家人大代" }
        ]
      ],
      TabsList: [
        {
          title: "企业文化",
          url: "/entreAndInnova/dynamic?title=新闻动态"
        },
        {
          title: "管理创新",
          url: "/entreAndInnova/dynamic?title=创业分享"
        },
        {
          title: "百家讲坛",
          url: "/entreAndInnova/dynamic?title=资本市场"
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
  width: 1200px;
  margin: 5px auto;
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
