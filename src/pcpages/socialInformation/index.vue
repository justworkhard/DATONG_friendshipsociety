<template>
  <div>
    <Welcome></Welcome>
    <Header :navs="navList"></Header>
    <div class="main">
      <div class="row">
        <div class="swiper_box">
          <MCarousel :ptCode="8"></MCarousel>
        </div>
        <Tabs :TabsList="TabsList" :newsList="newsList"></Tabs>
        <SearchBox :ptCode="8"></SearchBox>
      </div>
      <div class="row">
        <div class="col">
          <NewListCard
            icon="icon-zbgg"
            title="行业标准查询"
            :data="hangyebiaozhi"
            more="/social/information/other/menu?title=行业标志查询"
          ></NewListCard>
                <NewListCard
            icon="icon-zbgg"
            title="企业信息管理"
            :data="qiyexingxi"
            more="/second/menu?title=企业管理信息&id=109&parentId=109&ptCode=8&indexUrl=%2Fsocial%2Finformation%2Ffinance&hadChild=fale&currenId=109"
          ></NewListCard>
        </div>
        <div class="col">
          <NewListCard
            icon="icon-zbgs"
            title="企业信用查询"
            :data="qiyexingyong"
            more="/social/information/other/menu?title=企业信用查询"
          ></NewListCard>
          <NewListCard
            title="行业数据查询"
            icon="icon-scjg"
            :data="hangyeshuju"
            more="/social/information/other/menu?title=行业数据统计"
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
import SearchBox from "@/comonentsPC/Search.vue";
import NewListCard from "@/comonentsPC/newListCard.vue";
import { Swiper, SwiperItem } from "vux";
import { getCarouselList, getIndexList, getNewsList ,getDevColumnList } from "@/service/api";

export default {
  components: {
    SearchBox,
    Welcome,
    Header,
    Swiper,
    MCarousel,
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
        ptCode: 8
      },
      "/social/information"
    );
    this.navList = temp;
    getDevColumnList(8).then(res => {
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
          ptCode: 8,
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
      ptCode: "8",
      colid: "137",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.hangyebiaozhi = res.data.data;
    });
    getNewsList({
      ptCode: "8",
      colid: "138",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.qiyexingxi = res.data.data;
    });
    getNewsList({
      ptCode: "8",
      colid: "139",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.qiyexingyong = res.data.data;
    });
    getNewsList({
      ptCode: "8",
      colid: "140",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.hangyeshuju = res.data.data;
    });
  },
  data() {
    return {
      navList: [],
      hangyebiaozhi: [],
      hangyeshuju: [],
      qiyexingxi: [],
      qiyexingyong: [],
      newsList: [],
      TabsList: [],
      navList: []
    };
  }
};
</script>

<style lang="less" scoped>
.main {
  width: 1200px;
  margin: 0 auto;
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
</style>

