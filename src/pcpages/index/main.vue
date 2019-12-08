<template>
  <div class="content">
    <div class="hot_news">
      <img src="@/assets/images/mipmap-hdpi/horn.png" alt srcset>
      <span class="title">最新公告</span>
    </div>
    <div class="swiper_box">
      <swiper
        :aspect-ratio="300/800"
        height="362px"
        :list="demo04_list"
        v-model="demo01_index"
        auto
      ></swiper>
    </div>
    <div class="news_box">
      <NewsNavbar></NewsNavbar>
    </div>

    <!-- 十大平台 -->
    <div class="ten">
      <div class="title">
        <img src="@/assets/images/mipmap-xxxhdpi/ten.png" alt srcset>
      </div>
      <div class="icons">
        <router-link to="/policy/service" target="_blank" class="icon1">
          <div class="pic"></div>
          <p>政策服务平台</p>
        </router-link>
        <router-link to="/law" target="_blank" class="icon2">
          <div class="pic"></div>
          <p>法律服务平台</p>
        </router-link>
        <router-link to="/search?ptCode=3" target="_blank" class="icon3">
          <div class="pic"></div>
          <p>企业经营管理咨询平台</p>
        </router-link>
        <router-link to="/project/promot" target="_blank" class="icon4">
          <div class="pic"></div>
          <p>企业项目推介平台</p>
        </router-link>
        <router-link to="/finance/advi" target="_blank" class="icon5">
          <div class="pic"></div>
          <p>企业融资咨询平台</p>
        </router-link>
        <router-link to="/entreAndInnova" target="_blank" class="icon6">
          <div class="pic"></div>
          <p>创业创新服务平台</p>
        </router-link>
        <router-link to="/project/show" target="_blank" class="icon7">
          <div class="pic"></div>
          <p>企业产品展示展销平台</p>
        </router-link>
        <router-link to="/promote/experien" target="_blank" class="icon8">
          <div class="pic"></div>
          <p>推进先进经验自主创新工作平台</p>
        </router-link>
        <router-link to="/export/country" target="_blank" class="icon9">
          <div class="pic"></div>
          <p>对外经济技术项目交流合作平台</p>
        </router-link>
        <router-link to="/social/information" target="_blank" class="icon10">
          <div class="pic"></div>
          <p>社会信息服务平台</p>
        </router-link>
      </div>
    </div>
    <div class="col">
      <div class="col_left">
        <!--  联谊会简介 -->
        <RedHeader title="联谊会介绍" href="/second/menu?title=联谊会介绍&id=6&parentId=6&ptCode=0">
          <div class="about">
            <img :src="about.minPicAddress" alt srcset>
            {{about.summary}}
          </div>
        </RedHeader>
        <!-- 积分排行榜 -->
        <RedHeader title="积分排行榜" href="/second/menu/solo?title=积分排行榜&ptCode=0&id=5"></RedHeader>
        <!-- 阅读排行榜 -->
        <RedHeader title="阅读排行榜" href="/second/menu/solo?title=阅读排行榜&ptCode=0&id=5"></RedHeader>
      </div>
      <div class="col_right">
        <RedHeader
          title="联谊企业"
          href="/second/menu?title=联谊会企业&id=7&parentId=7&ptCode=0&hadChild=fale&currenId=7"
        >
          <div class="box">
            <ProductCard :data="item" v-for="(item,index) in componyList" :key="index" type="c"></ProductCard>
            <!-- <ProductCard :data="componyItem"></ProductCard>
            <ProductCard :data="componyItem"></ProductCard>
            <ProductCard :data="componyItem"></ProductCard>
            <ProductCard :data="componyItem"></ProductCard>
            <ProductCard :data="componyItem"></ProductCard>
            <ProductCard :data="componyItem"></ProductCard>
            <ProductCard :data="componyItem"></ProductCard>
            <ProductCard :data="componyItem"></ProductCard>
            <ProductCard :data="componyItem"></ProductCard>-->
          </div>
        </RedHeader>
        <RedHeader
          title="企业产品"
          href="/second/menu?title=企业产品展示&id=8&parentId=8&ptCode=0&hadChild=fale&currenId=8"
        >
          <div class="box">
            <ProductCard :data="item" v-for="(item,index) in productList" :key="index" type="p"></ProductCard>

            <!-- <ProductCard :data="componyItem"></ProductCard>
            <ProductCard :data="componyItem"></ProductCard>
            <ProductCard :data="componyItem"></ProductCard>
            <ProductCard :data="componyItem"></ProductCard>
            <ProductCard :data="componyItem"></ProductCard>
            <ProductCard :data="componyItem"></ProductCard>
            <ProductCard :data="componyItem"></ProductCard>
            <ProductCard :data="componyItem"></ProductCard>
            <ProductCard :data="componyItem"></ProductCard>
            <ProductCard :data="componyItem"></ProductCard>-->
          </div>
        </RedHeader>
      </div>
    </div>
  </div>
</template>
<script>
import Welcome from "@/comonentsPC/welcome.vue";
import Header from "@/comonentsPC/Header.vue";
import RedHeader from "@/comonentsPC/RedHeader.vue";
import NewsNavbar from "@/comonentsPC/newsNavbar.vue";
import Footer from "@/comonentsPC/Footer.vue";
import ProductCard from "./productCard.vue";
import { Swiper, SwiperItem } from "vux";
import {
  getCarouselList,
  getIndexList,
  getNewsList,
  getSororityList
} from "@/service/api";

export default {
  components: {
    Welcome,
    Header,
    Swiper,
    SwiperItem,
    Footer,
    RedHeader,
    NewsNavbar,
    ProductCard
  },
  created() {
    getNewsList({
      // colid: 2,
      colid: 7,
      // ptCode: 0,
      ptCode: 0,
      pageSize: 10,
      pageNo: 1
    }).then(res => {
      res.data.data.forEach(element => {
        this.componyList.push({
          title: element.title,
          url: element.minPicAddress,
          introduct: element.content,
          id: element.id,
          summary: element.summary
        });
      });
    });
    getNewsList({
      colid: 8,
      ptCode: 0,
      pageSize: 10,
      pageNo: 1
    }).then(res => {
      res.data.data.forEach(element => {
        this.productList.push({
          title: element.title,
          url: element.minPicAddress,
          introduct: element.content,
          id: element.id,
          summary: element.summary
        });
      });
    });
    getSororityList().then(res => {
      this.about = res.data.sororityInfo;
    });
  },
  data() {
    return {
      about: {},
      componyList: [],
      // componyItem: {
      //   title: "大同华林有限公司",
      //   url: "http://www.dtpcmq.com/upload/20190301172227887.png",
      //   introduct:
      //     "山西省大同市华林有限责任公司是一家大型商业零售企业，经营业态以购物中心和综合大卖场为主，现拥有华林商山西省大同市华林有限责任公司是一家大型商业零售企业，经营业态以购物中心和综合大卖场为主，现拥有华林商"
      // },
      productList: [],
      productItem: {
        title: "大同市全域旅游直通车+大同旅游交通一卡行",
        url: "http://www.dtpcmq.com/upload/201903011612527619.png",
        introduct:
          "大同市旅游集散中心是大同市文化和旅游局监管下的集散客、自助、团队旅游、旅游咨询，旅游交通换乘，酒店、大同市旅游集散中心是大同市文化和旅游局监管下的集散客、自助、团队旅游、旅游咨询，旅游交通换乘，酒店、大同市旅游集散中心是大同市文化和旅游局监管下的集散客、自助、团队旅游、旅游咨询，旅游交通换乘，酒店、"
      },
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
.box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.list {
  height: 400px;
}
.carousel_img {
  height: 100%;
  width: 100%;
}
.content {
  width: 1200px;
  margin: 0 auto;
  .hot_news {
    height: 35px;
    display: flex;
    align-items: center;
    span {
      background: rgb(252, 252, 252);
      color: rgb(182, 20, 18);
      font-weight: normal;
      width: auto;
      padding: 0px 20px;
    }
  }
  .swiper_box {
    display: inline-block;
    width: 560px;
    vertical-align: top;
    height: 362px;
  }
  .news_box {
    display: inline-block;
    width: 560px;
    vertical-align: top;
    height: 362px;
  }
  .ten {
    display: flex;
    margin: 20px 0px;
    .title {
      width: 40px;
      height: 130px;
    }
    .icons {
      display: flex;
      flex-wrap: wrap;
      flex: 1;
      a {
        display: block;
        width: 20%;
        text-align: center;
        float: left;
        color: #333;
        font-size: 14px;
        line-height: 30px;
        margin-bottom: 10px;
      }
      .pic {
        width: 84px;
        height: 84px;
        border-radius: 50%;
        margin: 0 auto;
      }
      p {
        white-space: nowrap;
        text-align: center;
      }
      .icon1 .pic {
        background: url("/src/assets/images/mipmap-xxxhdpi/ten_icon.png") 0px
          0px;
        &:hover {
          background: url("/src/assets/images/mipmap-xxxhdpi/ten_icon.png") 86px
            0px;
        }
      }
      .icon2 .pic {
        background: url("/src/assets/images/mipmap-xxxhdpi/ten_icon.png") 0px
          747px;
        &:hover {
          background: url("/src/assets/images/mipmap-xxxhdpi/ten_icon.png") 86px
            747px;
        }
      }
      .icon3 .pic {
        background: url("/src/assets/images/mipmap-xxxhdpi/ten_icon.png") 0px
          664px;
        &:hover {
          background: url("/src/assets/images/mipmap-xxxhdpi/ten_icon.png") 86px
            664px;
        }
      }
      .icon4 .pic {
        background: url("/src/assets/images/mipmap-xxxhdpi/ten_icon.png") 0px
          582px;
        &:hover {
          background: url("/src/assets/images/mipmap-xxxhdpi/ten_icon.png") 86px
            582px;
        }
      }
      .icon5 .pic {
        background: url("/src/assets/images/mipmap-xxxhdpi/ten_icon.png") 0px
          499px;
        &:hover {
          background: url("/src/assets/images/mipmap-xxxhdpi/ten_icon.png") 86px
            499px;
        }
      }
      .icon6 .pic {
        background: url("/src/assets/images/mipmap-xxxhdpi/ten_icon.png") 0px
          416px;
        &:hover {
          background: url("/src/assets/images/mipmap-xxxhdpi/ten_icon.png") 86px
            416px;
        }
      }
      .icon7 .pic {
        background: url("/src/assets/images/mipmap-xxxhdpi/ten_icon.png") 0px
          334px;
        &:hover {
          background: url("/src/assets/images/mipmap-xxxhdpi/ten_icon.png") 86px
            334px;
        }
      }
      .icon8 .pic {
        background: url("/src/assets/images/mipmap-xxxhdpi/ten_icon.png") 0px
          251px;
        &:hover {
          background: url("/src/assets/images/mipmap-xxxhdpi/ten_icon.png") 86px
            251px;
        }
      }
      .icon9 .pic {
        background: url("/src/assets/images/mipmap-xxxhdpi/ten_icon.png") 0px
          168px;
        &:hover {
          background: url("/src/assets/images/mipmap-xxxhdpi/ten_icon.png") 86px
            168px;
        }
      }
      .icon10 .pic {
        background: url("/src/assets/images/mipmap-xxxhdpi/ten_icon.png") 0px
          82px;
        &:hover {
          background: url("/src/assets/images/mipmap-xxxhdpi/ten_icon.png") 86px
            82px;
        }
      }
    }
  }
}
.col {
  display: flex;
  justify-content: space-between;
  .col_left {
    width: 386px;
    .integral {
      margin-bottom: 20px;
      border: 1px solid #f1f1f1;
      .list {
        min-height: 366px;
        margin: 15px;
      }
    }
  }
  .col_right {
    width: 784px;
  }
}
</style>
<style lang="less">
.el-tabs--border-card > .el-tabs__header .el-tabs__item {
  color: #333;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  background-color: rgb(182, 20, 18);
  color: #ffffff;
  &:hover {
    color: #ffffff !important;
  }
}
.el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item:not(.is-disabled):hover {
  color: #333;
}
.about {
  img {
    width: 100px;
    float: left;
    margin-right: 15px;
    margin-top: 10px;
    height: 70px;;
  }

  font-size: 14px;
  color: #333;
  line-height: 28px;
}
</style>

