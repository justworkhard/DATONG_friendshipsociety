<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="swiper_box">
        <MCarousel :ptCode='4'></MCarousel>             
        </div>
        <Tabs :TabsList="TabsList"></Tabs>
        <SearchBox :ptCode='4'></SearchBox>
      </div>
      <div class="row">
        <div class="col">
          <NewListCard
            icon="icon-zbgg"
            title="服务业"
            :data="fuwuye"
            more="/second/menu?parentId=71&ptCode=4&currenId=76&indexUrl=%2Fproject%2Fpromot"
          ></NewListCard>
          <Tabs
            :newsList='wenhualvyou'
            type="top"
            :TabsList="[{title:'文化旅游',url:'/second/menu?parentId=71&ptCode=4&currenId=78&indexUrl=%2Fproject%2Fpromot'}]"
          ></Tabs>
        </div>
        <div class="col">
          <NewListCard
            icon="icon-zbgs"
            title="制造业"
            :data='zhizhaoye'
            more="/second/menu?parentId=71&ptCode=4&currenId=77&indexUrl=%2Fproject%2Fpromot"
          ></NewListCard>
          <NewListCard
            icon="icon-scjg"
            title="现代农业"
            :data='xiandainongye'
            more="/second/menu?parentId=71&ptCode=4&currenId=75&indexUrl=%2Fproject%2Fpromot"
          ></NewListCard>
        </div>
      </div>
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
import SearchBox from "@/comonentsPC/Search.vue";
import { Swiper, SwiperItem } from "vux";
import { getCarouselList, getIndexList, getNewsList ,getDevColumnList} from "@/service/api";


export default {
  components: {
    SearchBox,
    Welcome,
    Header,
    Swiper,
    SwiperItem,
    Footer,
    Tabs,
    MCarousel,
    NewsNavbar,
    NewListCard
  },
  created(){
    getDevColumnList(2).then(res=>{
      res.data.devColumnList.forEach(element => {
         this.TabsList.push({
           title: element.columnName,
           url: `/second/menu?title=${element.columnName}&id=${element.id}&parentId=${element.id}&ptCode=1&indexUrl=%2Fpolicy%2Fservice`
         })
      });
    })
    getNewsList({
      ptCode: "4",
      colid: "70",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.newsList[0] = res.data.data;
    });
        getNewsList({
      ptCode: "4",
      colid: "72",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.newsList[0] = res.data.data;
    });
        getNewsList({
      ptCode: "4",
      colid: "80",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.newsList[0] = res.data.data;
    });
            getNewsList({
      ptCode: "4",
      colid: "76",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.fuwuye = res.data.data;
    });
                getNewsList({
      ptCode: "4",
      colid: "77",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.zhizhaoye = res.data.data;
    });
                getNewsList({
      ptCode: "4",
      colid: "78",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.wenhualvyou = res.data.data;
    });
                   getNewsList({
      ptCode: "4",
      colid: "75",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.xiandainongye = res.data.data;
    });
    
  },
  data() {
    return {
      data: [
        { title: "中华人民共和国商标法（一）", date: "2019-1-13" },
        { title: "中华人民共和国商标法（一）", date: "2019-1-13" },
        { title: "中华人民共和国商标法（一）", date: "2019-1-13" },
        { title: "中华人民共和国商标法（一）", date: "2019-1-13" },
        { title: "中华人民共和国商标法（一）", date: "2019-1-13" }
      ],
      fuwuye: [],
      zhizhaoye: [],
      wenhualvyou: [],
      xiandainongye: [],
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
</style>
