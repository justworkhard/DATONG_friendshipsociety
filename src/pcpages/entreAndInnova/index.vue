<!--
 * @Author: your name
 * @Date: 2019-12-22 18:05:12
 * @LastEditTime : 2019-12-23 16:31:57
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DATONG_friendshipsociety\src\pcpages\entreAndInnova\index.vue
 -->
<template>
  <div>
    <Welcome></Welcome>
    <Header :navs="navList" :ptCode="6"></Header>
    <div class="main">
      <div class="row">
        <div class="swiper_box">
          <MCarousel :ptCode="6"></MCarousel>
        </div>
        <Tabs :TabsList="TabsList" :newsList="newsList"></Tabs>
        <SearchBox :ptCode="6"></SearchBox>
      </div>
      <div class="row">
        <div class="col">
          <NewListCard
            icon="icon-zbgg"
            title="双创项目"
            :data="xiangmu"
            more="/second/menu?title=双创项目&id=92&parentId=92&ptCode=6&indexUrl=%2FentreAndInnova&hadChild=fale&currenId=92"
          ></NewListCard>
          <NewListCard
            icon="icon-zbgg"
            title="双创活动"
            :data="huodong"
            more="/second/menu?title=双创活动&id=91&parentId=91&ptCode=6&indexUrl=%2FentreAndInnova&hadChild=fale&currenId=91"
          ></NewListCard>
        </div>
        <div class="col">
          <NewListCard
            icon="icon-zbgs"
            :data="zhengche"
            title="双创政策"
            more="/second/menu?parentId=93&ptCode=6&currenId=98&indexUrl=%2FentreAndInnova&title=双创服务"
          ></NewListCard>
          <NewListCard
            icon="icon-scjg"
            :data="fuwu"
            title="挂牌服务"
            more="/second/menu?parentId=93&ptCode=6&currenId=100&indexUrl=%2FentreAndInnova&title=双创服务"
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
import MCarousel from "@/comonentsPC/Carouse.vue";
import Footer from "@/comonentsPC/Footer.vue";
import NewListCard from "@/comonentsPC/newListCard.vue";
import { Swiper, SwiperItem } from "vux";
import SearchBox from "@/comonentsPC/Search.vue";
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
    MCarousel,
    Tabs,
    NewsNavbar,
    NewListCard,
    SearchBox
  },
  async created() {
    let temp = await this.getIndexList(
      {
        parentId: "web",
        ptCode: 6
      },
      "/entreAndInnova"
    );
    this.navList = temp;
    getDevColumnList(6).then(res => {
      for (let index = 0; index < res.data.devColumnList.length; index++) {
        const element = res.data.devColumnList[index];
        let url = "";
       try {
          this.navList.forEach(item => {
            console.log("find=========", item, element.columnName);
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
        getNewsList({
          ptCode: 6,
          colid: element.id,
          pageSize: "5",
          pageNo: "0"
        }).then(res => {
          this.newsList.push(res.data.data);
        });
      }
    });
    getNewsList({
      ptCode: "6",
      colid: "92",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.xiangmu = res.data.data;
    });
    getNewsList({
      ptCode: "6",
      colid: "98",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.zhengche = res.data.data;
    });
    getNewsList({
      ptCode: "6",
      colid: "91",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.huodong = res.data.data;
    });
    getNewsList({
      ptCode: "6",
      colid: "100",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.fuwu = res.data.data;
    });
  },
  data() {
    return {
      navList: [],
      xiangmu: [],
      zhengche: [],
      huodong: [],
      fuwu: [],
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

