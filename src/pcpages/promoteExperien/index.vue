<!--
 * @Author: your name
 * @Date: 2019-12-22 18:05:12
 * @LastEditTime : 2019-12-23 16:40:10
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DATONG_friendshipsociety\src\pcpages\promoteExperien\index.vue
 -->
<template>
  <div>
    <Welcome></Welcome>
    <Header :navs="navList" :ptCode="10"></Header>
    <div class="main">
      <div class="row">
        <div class="swiper_box">
          <MCarousel :ptCode="10"></MCarousel>
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
            more="/second/menu?parentId=125&ptCode=10&currenId=132&indexUrl=%2Fpromote%2Fexperien&title=企业文化"
          ></NewListCard>
                    <NewListCard
            icon="icon-zbgg"
            title="管理感悟"
            :data="newsList"
            more="/second/menu?parentId=123&ptCode=10&currenId=127&indexUrl=%2Fpromote%2Fexperien&title=经营心得"
          ></NewListCard>
  
        </div>
        <div class="col">
          <NewListCard
            icon="icon-zbgs"
            :data="data"
            title="员工风采"
            more="/second/menu?parentId=125&ptCode=10&currenId=133&indexUrl=%2Fpromote%2Fexperien&title=企业文化"
          ></NewListCard>
          <NewListCard
            icon="icon-scjg"
            :data="data"
            title="经验分享"
            more="/second/menu?parentId=123&ptCode=10&currenId=128&indexUrl=%2Fpromote%2Fexperien&title=经营心得"
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
import MCarousel from "@/comonentsPC/Carouse.vue";
import NewsNavbar from "@/comonentsPC/newsNavbar.vue";
import SearchBox from "@/comonentsPC/Search.vue";
import Footer from "@/comonentsPC/Footer.vue";
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
    SearchBox,
    Welcome,
    Header,
    Swiper,
    SwiperItem,
    Footer,
    MCarousel,
    Tabs,
    NewsNavbar,
    NewListCard
  },
  async created() {
    let temp = await this.getIndexList(
      {
        parentId: "web",
        ptCode: 10
      },
      "/promote/experien"
    );
    this.navList = temp;
    getDevColumnList(10).then(res => {
      res.data.devColumnList.forEach(element => {
        let url = "";
        this.navList.forEach(item => {
          if (item.title === element.columnName) {
            url = item.url || "";
          }
        });
        this.TabsList.push({
          title: element.columnName,
          url: url
        });
        getNewsList({
          ptCode: 10,
          colid: element.id,
          pageSize: "5",
          pageNo: "0"
        }).then(res => {
          this.newsList.push(res.data.data);
          console.log(this.newsList, "this.newsList");
        });
      });
    });
    getNewsList({
      ptCode: "10",
      colid: "132",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.qiyefengmao = res.data.data;
    });
    getNewsList({
      ptCode: "10",
      colid: "127",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.guanliganwu = res.data.data;
    });
    getNewsList({
      ptCode: "10",
      colid: "133",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.yuangongfengcai = res.data.data;
    });
    getNewsList({
      ptCode: "10",
      colid: "128",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.jingyanfenxaing = res.data.data;
    });
  },
  data() {
    return {
      navList: [],
      qiyefengmao: [],
      guanliganwu: [],
      yuangongfengcai: [],
      jingyanfenxaing: [],
      data: [],
      newsList: [],
      TabsList: [],
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
