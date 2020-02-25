<template>
  <div>
    <Welcome></Welcome>
    <Header :navs="navList" ptCode="2"></Header>
    <div class="main">
      <div class="row">
        <div class="swiper_box">
          <MCarousel :ptCode="2"></MCarousel>
        </div>
        <Tabs :TabsList="TabsList" :newsList="newsList"></Tabs>
        <SearchBox :ptCode="2"></SearchBox>
      </div>
      <div class="row">
        <div class="col">
          <NewListCard
            icon="icon-zbgg"
            title="商标法"
            :data="shangbiaofa"
            more="/second/menu?parentId=33&ptCode=2&currenId=60&indexUrl=%2Flaw&title=指导案例"
          ></NewListCard>
          <NewListCard
            title="劳动法"
            icon="icon-two"
            :data="laodongfa"
            more="/second/menu?title=劳动法&id=31&parentId=31&ptCode=2&indexUrl=%2Flaw"
          ></NewListCard>
        </div>
        <div class="col">
          <NewListCard
            icon="icon-zbgs"
            :data="zuzuoquan"
            title="著作权法"
            more="second/menu?parentId=28&ptCode=2&currenId=136&indexUrl=%2Flaw&title=民刑法"
          ></NewListCard>
          <NewListCard
            icon="icon-scjg"
            :data="zhuanlifa"
            title="专利法"
            more="second/menu?parentId=28&ptCode=2&currenId=135&indexUrl=%2Flaw&title=民刑法"
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
import Tabs from "@/comonentsPC/Tabs.vue";
import NewsNavbar from "@/comonentsPC/newsNavbar.vue";
import Footer from "@/comonentsPC/Footer.vue";
import MCarousel from "@/comonentsPC/Carouse.vue";
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
    Tabs,
    NewsNavbar,
    NewListCard,
    SearchBox,
    MCarousel
  },
  async created() {
    let temp = await this.getIndexList(
      {
        parentId: "web",
        ptCode: 2
      },
      "/law"
    );
    this.navList = temp;
    getDevColumnList(2).then(async res => {
      for (let index = 0; index < res.data.devColumnList.length; index++) {
        const element = res.data.devColumnList[index];
        let url = "";
        try {
          this.navList.forEach(item => {
            if (item.secondMenu.length > 0) {
              item.secondMenu.forEach((item2, index2) => {
                if (item2.title === element.columnName) {
                  url = item2.url;
                  throw false;
                }
              });
            }
            if (item.title === element.columnName) {
              url = item.url;
              throw false;
            }
          });
        } catch (error) {}
        this.TabsList.push({
          title: element.columnName,
          url: url
        });
        console.log(this.TabsList);
        
        getNewsList({
          ptCode: 2,
          colid: element.id,
          pageSize: "5",
          pageNo: "0"
        }).then(res => {
          this.newsList.push(res.data.data);
        });
      }
    });
    getNewsList({
      ptCode: "2",
      colid: "60",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.shangbiaofa = res.data.data;
    });
    getNewsList({
      ptCode: "2",
      colid: "31",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.laodongfa = res.data.data;
    });
    getNewsList({
      ptCode: "2",
      colid: "135",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.zhuanlifa = res.data.data;
    });
    getNewsList({
      ptCode: "2",
      colid: "136",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.zuzuoquan = res.data.data;
    });
  },
  data() {
    return {
      laodongfa: [],
      navList: [],
      data: [],
      shangbiaofa: [],
      zuzuoquan: [],
      zhuanlifa: [],
      newsList: [],
      TabsList: []
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
