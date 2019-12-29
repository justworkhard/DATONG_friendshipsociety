<template>
  <div class="contener">
    <ul class="left_menu">
      <li
        @click="setActive(index)"
        :class="{'active': index === 0}"
        v-for="(item,index) in menuList"
        :key="index"
      >
        <a>{{item?item.title:''}}</a>
      </li>
    </ul>
    <div class="right">
      <div class="crumbs">
        <span>您的位置：</span>
        <a>首页></a>
        <span href="/">{{menuList[0]?menuList[0].title+'>':''}}</span>
        <span href="/" v-if="showContent">{{selectNew?selectNew.title:''}}</span>
      </div>

      <NewsCardList
        v-if="!showContent"
        @toDetail="toDetail"
        :data="data"
        @onChangePage="onChangePage"
        :count="count"
      ></NewsCardList>
      <NewsContent v-if="showContent" :contentId="contentId"></NewsContent>
    </div>
  </div>
</template>
<script>
import NewsCardList from "@/comonentsPC/newsCardList";
import NewsContent from "@/comonentsPC/newsContent";
import { getCarouselList, getIndexList, getNewsList } from "@/service/api";

export default {
  components: { NewsCardList, NewsContent },
  watch: {
    async $route(to, from) {
      let temp = [{
          title: this.$route.query.title,
          id: this.$route.query.id
        }];
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
        temp = temp.concat(res)

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
      temp = temp.concat(res)
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
      console.log("active",this.menuList,temp);

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
.contener {
  width: 1200px;
  margin: 20px auto;
  display: flex;
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
  margin-left: 30px;
  .crumbs {
    font-size: 14px;
    height: 40px;
    line-height: 30px;
    border-bottom: 1px solid #ddd;
    color: #777;
    a {
      color: #333;
    }
  }
}
</style>
