<template>
  <div>
    <Welcome></Welcome>
    <div class="Dheader">
      <img src="@/assets/images/logo.jpg" alt class="logo" />
      <p class="navbar" @click="()=>{this.$router.go(-1)}">返回</p>
    </div>
    <div class="right">
      <NewsCardList
        v-if="!showContent"
        @toDetail="toDetail"
        :data="data"
        @onChangePage="onChangePage"
        :count="count"
      ></NewsCardList>
      <NewsContent v-if="showContent" :contentId="contentId" :styles="{'width':'1200px'}"></NewsContent>
      <p class="noData" v-show="data.length <= 0 &&!showContent">暂无数据</p>
    </div>
  </div>
</template>
<script>
import NewsCardList from "@/comonentsPC/newsCardList";
import Header from "@/comonentsPC/Header.vue";
import Welcome from "@/comonentsPC/welcome.vue";
import NewsContent from "@/comonentsPC/newsContent";
import { getCarouselList, getIndexList, getNewsList } from "@/service/api";

export default {
  components: { NewsCardList, NewsContent, Welcome, Header },
  watch: {
    async $route(to, from) {
      let temp = [
        {
          title: this.$route.query.title,
          id: this.$route.query.id
        }
      ];
      if (
        this.$route.query.title &&
        this.$route.query.id &&
        this.$route.query.hadChild
      ) {
      } else {
        let res = await this.getIndexList(
          {
            parentId: this.$route.query.parentId,
            ptCode: this.$route.query.ptCode
          },
          "/second/menu",
          true
        );
        temp = temp.concat(res);
      }

      this.menuList = temp;
      if (this.$route.query.currenId) {
        this.menuList.forEach((item, index) => {
          if (item.id == this.$route.query.currenId) {
            this.setActive(index);
          }
        });
      } else {
        this.setActive(0);
      }
    }
  },
  async created() {
    let temp = [
      {
        title: this.$route.query.title,
        id: this.$route.query.parentId
      }
    ];

    if (
      this.$route.query.title &&
      this.$route.query.id &&
      this.$route.query.hadChild
    ) {
    } else {
      let res = await this.getIndexList(
        {
          parentId: this.$route.query.parentId,
          ptCode: this.$route.query.ptCode
        },
        "/second/menu",
        true
      );
      temp = temp.concat(res);
    }

    this.menuList = temp;
    if (this.$route.query.currenId) {
      this.menuList.forEach((item, index) => {
        if (item.id == this.$route.query.currenId) {
          this.setActive(index, true);
        }
      });
    } else {
      this.setActive(0, true);
    }
    // this.menuList.forEach((item, index) => {
    //   if (item.id == this.$route.query.currenId) {
    //   }
    // });
  },
  mounted() {
    if (this.$route.query.contentId) {
      this.showContent = true;
      this.contentId = this.$route.query.contentId;
    }
  },
  data() {
    return {
      data: [],
      showContent: false,
      activeTitle: "",
      menuList: [],
      selectNew: {},
      count: 0,
      pageNo: 1,
      contentId: "",
      selectMenu: ""
    };
  },
  methods: {
    toDetail(id) {
      this.contentId = id;
      this.showContent = true;
      this.data.forEach((item, index) => {
        if (item.id == id) {
          this.selectNew = item;
        }
      });
    },
    setActive(index, ifShowContent) {
      let _this = this;
      this.selectMenu = index;
      ifShowContent ? "" : (this.showContent = false);
      let temp = this.menuList[index];
      this.menuList.splice(index, 1);
      this.menuList.unshift(temp);

      getNewsList({
        // colid: 2,
        colid: temp.id,
        // ptCode: 0,
        ptCode: this.$route.query.ptCode,
        pageSize: 10,
        pageNo: this.pageNo
      }).then(res => {
        _this.data = res.data.data;
        _this.count = res.data.count;
      });
    },
    onChangePage(current) {
      this.pageNo = current;
      let temp = this.menuList[this.selectMenu];
      getNewsList({
        colid: temp.id,
        ptCode: this.$route.query.ptCode,
        pageSize: 10,
        pageNo: current
      }).then(res => {
        this.data = res.data.data;
      });
    }
  }
};
</script>
<style lang="less" scoped>
.Dheader {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  .logo {
    width: 270px;
    padding: 10px 0;
  }
  .navbar {
    display: flex;
    align-items: center;
    margin: 0 25px;
    height: 90px;
    // -webkit-transition: all 0.4s;
    // transition: all 0.4s;
    font-size: 16px;
    color: #333;
    font-weight: bold;
    cursor: pointer;
    position: relative;
    padding-right: 20px;
    &:hover {
      color: #b61412;
      background: url("/src/assets/images/mipmap-xxxhdpi/down.png")
        /*tpa=http://www.ebidding.com.cn/themes/basic/skin/images/img275.png*/
        no-repeat right center;

      .navbar_menu {
        color: #b61412;
        visibility: visible;
        opacity: 1;
        top: 25px;
      }
    }
    .navbar_menu {
      width: 134px;
      position: absolute;
      left: 0;
      top: 50px;
      box-shadow: 0 4px 15px 0 rgba(0, 12, 49, 0.5);
      background: #ffffff;
      font-weight: normal;
      z-index: 100000;
      opacity: 0;
      visibility: hidden;
      -webkit-transform: translateY(43px);
      transform: translateY(43px);
      -webkit-transition: all 0.4s;
      transition: all 0.4s;
      .item {
        font-size: 14px;
        line-height: 40px;
        height: 40px;
        display: block;
        color: #333;
        padding: 0 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &:hover {
          color: #fff;
          background-color: #b61412;
        }
      }
    }
  }
}
.noData {
  color: #999;
}
.contener {
  width: 1200px;
  margin: 20px auto;
  //   display: flex;
}
.left_menu {
  width: 285px;
  list-style: none;
  min-height: 600px;
  background-color: #f9f9f9;
  li {
    &:not(.active):hover {
      a {
        color: #d72340 !important;

        animation: mymove 1s forwards;
        @keyframes mymove {
          from {
            transform: translateX(20px);
          }
          to {
            transform: translateX(-20px);
          }
        }
      }
    }
  }
  a {
    display: block;
    width: 285px;
    height: 45px;
    line-height: 45px;
    font-size: 16px;
    color: #898989;
    border-bottom: 1px solid #ddd;
    text-align: center;
    cursor: pointer;
    &:nth-child(2n) {
      background-color: #f9f9f9;
    }
  }
  .active {
    box-sizing: border-box;
    width: 285px;
    height: 140px;
    background: #d72340;
    color: #ffffff;
    font-size: 20px;
    padding: 0 35px 39px 0;
    color: #fff;
    a {
      font-size: 20px;
      padding: 35px 0 0 30px;
      color: #fff;
      border: none;
      line-height: 20px;
      text-align: left;
    }
  }
}
.right {
  flex: 1;
  width: 1200px;
  margin: 0 auto;
  .content_html {
    overflow-x: scroll;
    width: 1200px !important;
  }
}
</style>
