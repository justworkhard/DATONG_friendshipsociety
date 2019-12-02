<template>
  <div class="contener">
    <ul class="left_menu">
      <li
        @click="setActive(index)"
        :class="{'active': index === 0}"
        v-for="(item,index) in menuList"
        :key="index"
      >
        <a>{{item.title}}</a>
      </li>
    </ul>
    <div class="right">
      <div class="crumbs">
        <span>您的位置：</span>
        <a href="/">首页></a>
        <span href="/">{{menuList[0].title}}</span>
      </div>
      
      <NewsCardList :data="data" @onChangePage="onChangePage"></NewsCardList>
    </div>
  </div>
</template>
<script>
import NewsCardList from "@/comonentsPC/newsCardList";
export default {
  components: { NewsCardList },
    watch: {
    
    $route(to, from) {
    let title = this.$route.query.title;
      this.menuList.forEach((item, index) => {
        if (item.title === title) {
          // this.activeTitle = item.title
          this.setActive(index, item.url);
        }
      });
    }
  },
  created() {
    let title = this.$route.query.title;
    
    
    this.menuList.forEach((item, index) => {
      if (item.title === title) {
        // this.activeTitle = item.title
        this.setActive(index, item.url);
      }
    });
  },
  data() {
    return {
      data: ["", "", "", ""],
      activeTitle: "",
      menuList: [
        { title: "宪法" },
      ]
    };
  },
  methods: {
    setActive(index) {
      if (index === 0) {
        return;
      }
      let temp = this.menuList[index];
      this.menuList.splice(index, 1);
      this.menuList.unshift(temp);
    },
    onChangePage(current) {
      console.log("parent oage ");
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
