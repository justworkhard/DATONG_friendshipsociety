<!--
 * @Author: your name
 * @Date: 2019-12-22 18:05:12
 * @LastEditTime : 2019-12-23 15:46:17
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DATONG_friendshipsociety\src\pcpages\policy\index.vue
 -->
<template>
  <div>
    <Welcome></Welcome>
    <Header :navs="navList" ptCode="1"></Header>
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
              more="/second/menu?parentId=15&ptCode=1&currenId=19&indexUrl=%2Fpolicy%2Fservice&title=政策汇总"
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
              more="/second/menu?parentId=16&ptCode=1&currenId=24&indexUrl=%2Fpolicy%2Fservice&title=政策解读"
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
    <Footer></Footer>
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
import {
  getCarouselList,
  getIndexList,
  getNewsList,
  getDevColumnList
} from "@/service/api";

export default {
  components: {
    Welcome,
    Header,
    Swiper,
    SwiperItem,
    Footer,
    NewListCard,
    Tabs,
    SearchBox,
    MCarousel,
    NewsNavbar
  },
  async created() {
    let temp = await this.getIndexList(
      {
        parentId: "web",
        ptCode: 1
      },
      "/policy/service"
    );
    this.navList = temp;

    getDevColumnList(1).then(res => {
      res.data.devColumnList.forEach(element => {
        let url = "";
        this.navList.forEach(item => {
          if (item.title === element.columnName) {
            url = item.url;
          }
        });
        this.TabsList.push({
          title: element.columnName,
          url: url
        });
        getNewsList({
          ptCode: "1",
          colid: element.id,
          pageSize: "5",
          pageNo: "0"
        }).then(res => {
          this.newsList.push(res.data.data)
        });
      });
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
  async mounted() {},
  data() {
    return {
      navList: [],
      keyword: "",
      guowuyuan: [],
      mingying: [],
      jingyanjiaoliu: [],
      guandianguanc: [],

      newsList: [],
      TabsList: [],
      demo01_index: 1,
      demo04_list: []
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