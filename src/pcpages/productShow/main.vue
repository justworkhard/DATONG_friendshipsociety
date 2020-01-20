<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="swiper_box">
          <MCarousel :ptCode="7"></MCarousel>
        </div>
        <Tabs :TabsList="TabsList" :newsList="newsList"></Tabs>
        <SearchBox :ptCode="7"></SearchBox>
      </div>
      <RedHeader
        title="企业产品"
        href="/second/menu?title=产品展示&id=105&parentId=105&ptCode=7&indexUrl=%2Fproject%2Fshow&hadChild=fale&currenId=105"
      >
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
          <ProductCard :data="componyItem"></ProductCard>-->
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
import MCarousel from "@/comonentsPC/Carouse.vue";
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
    MCarousel,
    Footer,
    Tabs,
    RedHeader,
    NewsNavbar,
    NewListCard,
    SearchBox
  },
  created() {
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
      data: [],
      TabsList: [
      ],
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

