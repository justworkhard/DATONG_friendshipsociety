<!--
 * @Author: your name
 * @Date: 2019-12-22 18:05:12
 * @LastEditTime : 2019-12-23 16:27:32
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DATONG_friendshipsociety\src\pcpages\financeAdvi\index.vue
 -->
<template>
  <div>
    <Welcome></Welcome>
    <Header :navs="navList"></Header>
    <div class="main">
      <div class="row">
        <div class="swiper_box">
          <MCarousel :ptCode="5"></MCarousel>
        </div>
        <Tabs :TabsList="TabsList" :newsList="newsList"></Tabs>
        <SearchBox></SearchBox>
      </div>
      <div class="row">
        <div class="col">
          <NewListCard
            icon="icon-zbgg"
            title="融资途径"
            :data="tujing"
            more="/second/menu?title=融资途径&id=84&parentId=84&ptCode=5&indexUrl=%2Ffinance%2Fadvi&hadChild=fale&currenId=84"
          ></NewListCard>
          <Tabs
            :TabsList="[{title:'融资案例',url:'/second/menu?title=融资案例&id=86&parentId=86&ptCode=5&indexUrl=%2Ffinance%2Fadvi&hadChild=fale&currenId=86'}]"
            :newsList="newsList"
            type="top"
          ></Tabs>
        </div>
        <div class="col">
          <NewListCard
            icon="icon-zbgs"
            :data="zhapian"
            title="警惕诈骗"
            more="/second/menu?title=警惕诈骗&id=85&parentId=85&ptCode=5&indexUrl=%2Ffinance%2Fadvi&hadChild=fale&currenId=85"
          ></NewListCard>
          <NewListCard
            icon="icon-scjg"
            :data="fangshi"
            title="融资方式"
            more="/second/menu?title=融资方式&id=83&parentId=83&ptCode=5&indexUrl=%2Ffinance%2Fadvi&hadChild=fale&currenId=83"
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
import Footer from "@/comonentsPC/Footer.vue";
import NewListCard from "@/comonentsPC/newListCard.vue";
import SearchBox from "@/comonentsPC/Search.vue";
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
    MCarousel,
    NewListCard,
    SearchBox
  },
  async created() {
    let temp = await this.getIndexList(
      {
        parentId: "web",
        ptCode: 5
      },
      "/finance/advi"
    );
    this.navList = temp;
    getDevColumnList(5).then(res => {
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
          ptCode: 5,
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
      ptCode: "5",
      colid: "84",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.tujing = res.data.data;
    });
    getNewsList({
      ptCode: "5",
      colid: "86",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.anli[0] = res.data.data;
    });
    getNewsList({
      ptCode: "5",
      colid: "85",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.zhapian[0] = res.data.data;
    });
    getNewsList({
      ptCode: "5",
      colid: "83",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.fangshi[0] = res.data.data;
    });
  },
  data() {
    return {
      navList: [],
      tujing: [],
      zhapian: [],
      anli: [],
      fangshi: [],
      newsList: [],
      TabsList: [],
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
