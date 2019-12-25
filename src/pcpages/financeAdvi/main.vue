<template>
  <div>
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
import { getCarouselList, getIndexList, getNewsList ,getDevColumnList} from "@/service/api";

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
  created() {
    getDevColumnList(5).then(res => {
      res.data.devColumnList.forEach(element => {
        this.TabsList.push({
          title: element.columnName,
          url: `/second/menu?title=${element.columnName}&id=${element.id}&parentId=${element.id}&ptCode=1&indexUrl=%2Fpolicy%2Fservice`
        });
      });
    });
    getNewsList({
      ptCode: "5",
      colid: "87",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.newsList[0] = res.data.data;
    });
    getNewsList({
      ptCode: "5",
      colid: "82",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.newsList[1] = res.data.data;
    });
    getNewsList({
      ptCode: "5",
      colid: "83",
      pageSize: "10",
      pageNo: "0"
    }).then(res => {
      this.newsList[2] = res.data.data;
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
      tujing: [],
      zhapian: [],
      anli: [],
      fangshi: [],
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
      newsList: [],
      TabsList: [
        {
          title: "融资平台",
          url:
            "/second/menu?title=融资平台&id=87&parentId=87&ptCode=5&indexUrl=%2Ffinance%2Fadvi&hadChild=fale&currenId=87"
        },
        {
          title: "融资定义",
          url:
            "/second/menu?title=融资定义&id=82&parentId=82&ptCode=5&indexUrl=%2Ffinance%2Fadvi&hadChild=fale&currenId=82"
        },
        {
          title: "融资方式",
          url:
            "/second/menu?title=融资方式&id=83&parentId=83&ptCode=5&indexUrl=%2Ffinance%2Fadvi&hadChild=fale&currenId=83"
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
