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
        <SearchBox :ptCode='7'></SearchBox>
      </div>
      <RedHeader title="企业产品" href="/second/menu?title=产品展示&id=105&parentId=105&ptCode=7&indexUrl=%2Fproject%2Fshow&hadChild=fale&currenId=105">
        <div class="box">
          <ProductCard :data="item" v-for="(item,index) in zhanshi" :key="index"></ProductCard>
          <!-- <ProductCard :data="componyItem"></ProductCard>
          <ProductCard :data="componyItem"></ProductCard>
          <ProductCard :data="componyItem"></ProductCard>
          <ProductCard :data="componyItem"></ProductCard>
          <ProductCard :data="componyItem"></ProductCard>
          <ProductCard :data="componyItem"></ProductCard>
          <ProductCard :data="componyItem"></ProductCard>
          <ProductCard :data="componyItem"></ProductCard>
          <ProductCard :data="componyItem"></ProductCard> -->
        </div>
      </RedHeader>
    </div>
  </div>
</template>
<script>
import Welcome from "@/comonentsPC/welcome.vue";
import Header from "@/comonentsPC/Header.vue";
import Tabs from "@/comonentsPC/Tabs.vue";
import NewsNavbar from "@/comonentsPC/newsNavbar.vue";
import Footer from "@/comonentsPC/Footer.vue";
import NewListCard from "@/comonentsPC/newListCard.vue";
import ProductCard from "./productCard.vue";
import RedHeader from "@/comonentsPC/RedHeader.vue";
import SearchBox from "@/comonentsPC/Search.vue";
import { Swiper, SwiperItem } from "vux";

export default {
  components: {
    Welcome,
    Header,
    Swiper,
    ProductCard,
    SwiperItem,
    Footer,
    Tabs,
    RedHeader,
    NewsNavbar,
    NewListCard,
    SearchBox
  },
  created(){
               getNewsList({
      ptCode: "7",
      colid: "102",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.newsList[0] = res.data.data;
    });
        getNewsList({
      ptCode: "7",
      colid: "103",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.newsList[1] = res.data.data;
    });
        getNewsList({
      ptCode: "7",
      colid: "104",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.newsList[2] = res.data.data;
    });
          getNewsList({
      ptCode: "7",
      colid: "105",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.zhanshi = res.data.data;
    });
  },
  data() {
    return {
      zhanshi: [],
      // componyItem: {
      //   title: "大同华林有限公司",
      //   url: "http://www.dtpcmq.com/upload/20190301172227887.png",
      //   introduct:
      //     "山西省大同市华林有限责任公司是一家大型商业零售企业，经营业态以购物中心和综合大卖场为主，现拥有华林商山西省大同市华林有限责任公司是一家大型商业零售企业，经营业态以购物中心和综合大卖场为主，现拥有华林商"
      // },
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
      // newsList: [
      //   [
      //     { title: "∙ 平城区人大常委会组织开展全区民营企业家人大代" },
      //     { title: "∙ 平城区人大常委会组织开展全区民营企业家人大代" },
      //     { title: "∙ 平城区人大常委会组织开展全区民营企业家人大代" },
      //     { title: "∙ 平城区人大常委会组织开展全区民营企业家人大代" },
      //     { title: "∙ 平城区人大常委会组织开展全区民营企业家人大代" },
      //     { title: "∙ 平城区人大常委会组织开展全区民营企业家人大代" },
      //     { title: "∙ 平城区人大常委会组织开展全区民营企业家人大代" }
      //   ],
      //   [
      //     { title: "∙ 12" },
      //     { title: "∙ 12" },
      //     { title: "∙ 12" },
      //     { title: "∙ 12" },
      //     { title: "∙ 12" },
      //     { title: "∙ 平城区人大常委会组织开展全区民营企业家人大代" },
      //     { title: "∙ 平城区人大常委会组织开展全区民营企业家人大代" }
      //   ]
      // ],
      TabsList: [
        {
          title: "新闻动态",
          url: "/second/menu?title=新闻动态&id=102&parentId=102&ptCode=7&indexUrl=%2Fproject%2Fshow&hadChild=fale&currenId=102"
        },
        {
          title: "参展须知",
          url: "/second/menu?title=参展须知&id=103&parentId=103&ptCode=7&indexUrl=%2Fproject%2Fshow&hadChild=fale&currenId=103"
        },
        {
          title: "参展商",
          url: "/second/menu?title=参展商&id=104&parentId=104&ptCode=7&indexUrl=%2Fproject%2Fshow&hadChild=fale&currenId=104"
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
.box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
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

