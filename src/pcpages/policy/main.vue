<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="swiper_box">
          <MCarousel :ptCode="1"></MCarousel>
        </div>
        <Tabs :TabsList="TabsList" :newsList="newsList"></Tabs>
        <SearchBox :ptCode="1"></SearchBox>
      </div>
      <div class="row">
        <div class="col">
          <NewListCard
            title="国务院"
            icon="icon-zbgg"
            :data="guowuyuan"
            more="/second/menu?parentId=15&ptCode=1&currenId=19&indexUrl=%2Fpolicy%2Fservice"
          ></NewListCard>
          <NewListCard
            title="观点观察"
            icon="icon-two"
            :data="guandianguanc"
            more="/second/menu?title=观点观察&id=17&parentId=17&ptCode=1&indexUrl=%2Fpolicy%2Fservice&hadChild=fale&currenId=17"
          ></NewListCard>
        </div>
        <div class="col">
          <NewListCard
            :data="mingying"
            icon="icon-zbgs"
            title="民营企业政策"
            more="/second/menu?parentId=16&ptCode=1&currenId=24&indexUrl=%2Fpolicy%2Fservice"
          ></NewListCard>
          <NewListCard
            :data="jingyanjiaoliu"
            title="经验交流"
            icon="icon-scjg"
            more="/second/menu?title=经验交流&id=18&parentId=18&ptCode=1&hadChild=fale&currenId=18&indexUrl=%2Fpolicy%2Fservice"
          ></NewListCard>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Welcome from "@/comonentsPC/welcome.vue";
import MCarousel from "@/comonentsPC/Carouse.vue";
import Header from "@/comonentsPC/Header.vue";
import Tabs from "@/comonentsPC/Tabs.vue";
import NewsNavbar from "@/comonentsPC/newsNavbar.vue";
import Footer from "@/comonentsPC/Footer.vue";
import SearchBox from "@/comonentsPC/Search.vue";
import NewListCard from "@/comonentsPC/newListCard.vue";
import { Swiper, SwiperItem } from "vux";
import { getCarouselList, getIndexList, getNewsList } from "@/service/api";

export default {
  components: {
    Welcome,
    Header,
    Swiper,
    MCarousel,
    SwiperItem,
    Footer,
    Tabs,
    NewsNavbar,
    NewListCard,
    SearchBox
  },
  created() {
    getIndexList({
      parentId: "web",
      ptCode: 1
    });
    getNewsList({
      ptCode: "1",
      colid: "19",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.guowuyuan = res.data.data;
    });
    getNewsList({
      ptCode: "1",
      colid: "24",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.mingying = res.data.data;
    });
    getNewsList({
      ptCode: "1",
      colid: "18",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.jingyanjiaoliu = res.data.data;
    });
    getNewsList({
      ptCode: "1",
      colid: "17",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.guandianguanc = res.data.data;
    });
  },
  methods: {},
  data() {
    return {
      keyword: "",
      guowuyuan: [],
      mingying: [],
      jingyanjiaoliu: [],
      guandianguanc: [],

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
          title: "发布动态",
          url: "/policy/service/second/menu?title=发布动态"
        },
        {
          title: "发布活动",
          url: "/policy/service/second/menu?title=发布活动"
        }
      ],

      demo01_index: 1,
      demo04_list: []
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
