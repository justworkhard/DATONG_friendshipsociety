<!--
 * @Author: your name
 * @Date: 2019-12-22 18:05:12
 * @LastEditTime : 2019-12-23 16:43:33
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DATONG_friendshipsociety\src\pcpages\exportCountry\index.vue
 -->
<template>
  <div>
    <Welcome></Welcome>
    <Header :navs="navList"></Header>
    <div class="main">
      <div class="row">
        <div class="swiper_box">
          <MCarousel :ptCode="9"></MCarousel>
        </div>
        <Tabs :TabsList="TabsList" :newsList="newsList"></Tabs>
        <SearchBox :ptCode="9"></SearchBox>
      </div>
      <div class="row">
        <div class="col">
          <NewListCard
            icon="icon-zbgg"
            title="行业标准查询"
            :data="hangyebiaozhun"
            more="/second/menu?title=行业标准查询&id=120&parentId=120&ptCode=9&indexUrl=%2Fexport%2Fcountry&hadChild=fale&currenId=120"
          ></NewListCard>
          <NewListCard
            icon="icon-zbgg"
            title="项目交流"
            :data="xiangmujiaoliu"
            more="/second/menu?title=项目交流&id=119&parentId=119&ptCode=9&indexUrl=%2Fexport%2Fcountry&hadChild=fale&currenId=119"
          ></NewListCard>
        </div>
        <div class="col">
          <NewListCard
            icon="icon-zbgs"
            :data="xiangmuhezuo"
            title="项目合作"
            more="/second/menu?title=项目合作&id=118&parentId=118&ptCode=9&indexUrl=%2Fexport%2Fcountry&hadChild=fale&currenId=118"
          ></NewListCard>
          <NewListCard
            icon="icon-scjg"
            :data="xiangguanzhengce"
            title="相关政策"
            more="/second/menu?title=相关政策&id=117&parentId=117&ptCode=9&indexUrl=%2Fexport%2Fcountry&hadChild=fale&currenId=117"
          ></NewListCard>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Welcome from "@/comonentsPC/welcome.vue";
import Header from "@/comonentsPC/Header.vue";
import MCarousel from "@/comonentsPC/Carouse.vue";
import Tabs from "@/comonentsPC/Tabs.vue";
import NewsNavbar from "@/comonentsPC/newsNavbar.vue";
import Footer from "@/comonentsPC/Footer.vue";
import SearchBox from "@/comonentsPC/Search.vue";
import NewListCard from "@/comonentsPC/newListCard.vue";
import { getCarouselList, getIndexList, getNewsList } from "@/service/api";

import { Swiper, SwiperItem } from "vux";

export default {
  components: {
    SearchBox,
    Welcome,
    Header,
    MCarousel,
    Swiper,
    SwiperItem,
    Footer,
    Tabs,
    NewsNavbar,
    NewListCard
  },
  async created() {
    let temp = await this.getIndexList(
      {
        parentId: "web",
        ptCode: 9
      },
      "/export/country"
    );
    this.navList = temp;

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
      ptCode: "9",
      colid: "117",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.xiangguanzhengce = res.data.data;
    });
  },
  data() {
    return {
      navList: [],
      hangyebiaozhun: [],
      xiangmujiaoliu: [],
      xiangmuhezuo: [],
      xiangguanzhengce: [],
      newsList: [],
      TabsList: []
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
