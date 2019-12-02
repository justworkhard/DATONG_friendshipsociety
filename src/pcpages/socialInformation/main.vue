<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="swiper_box">
          <swiper
            :aspect-ratio="300/800"
            height="260px"
            :list="demo04_list"
            v-model="demo01_index"
            auto
          ></swiper>
        </div>
        <Tabs :TabsList="TabsList"></Tabs>
        <div class="search">
          <div class="input_box">
            <div class="input">
              <input type="text">
              <div class="btn">搜索</div>
            </div>
            <select></select>
          </div>
          <img src="@/assets/images/mipmap-xxxhdpi/noticeEntry.png" alt srcset>
          <img src="@/assets/images/mipmap-xxxhdpi/manageEntry.png" alt srcset>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <NewListCard title="行业标志查询" :data="data" more="/social/information/other/menu?title=行业标志查询"></NewListCard>
          <Tabs :TabsList="[{title:'企业信息管理',url:'/social/information/other/menu?title=企业信息管理'}]" ></Tabs>
        </div>
        <div class="col">
          <NewListCard title="企业信用查询" more="/social/information/other/menu?title=企业信用查询"></NewListCard>
          <NewListCard title="行业数据统计" more="/social/information/other/menu?title=行业数据统计"></NewListCard>
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
import NewListCard from "@/comonentsPC/newListCard.vue";
import { Swiper, SwiperItem } from "vux";

export default {
  components: {
    Welcome,
    Header,
    Swiper,
    SwiperItem,
    Footer,
    Tabs,
    NewsNavbar,
    NewListCard
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
      TabsList: [
        {
          title: "新闻动态",
          url: "/social/information/finance?title=新闻动态"
        },
        {
          title: "索引信息",
          url: "/social/information/other/menu?title=索引信息"
        },
        {
          title: "金融信息",
          url: "/social/information/other/menu?title=金融信息"
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
