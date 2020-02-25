<template>
  <div>
    <div class="header">
      <img src="@/assets/images/mipmap-xxxhdpi/logo.png" alt class="logo" @click="toIndex" />
      <div class="navbar" @click="()=>{this.$router.push('/question')}">首页</div>
      <div class="search">
        <input type="text" v-model="searchStr" />
        <img src="@/assets/images/mipmap-hdpi/icon_search.png" @click="onSearch" alt srcset />
      </div>
      <div class="avadar" @click="toCenter">
        <img :src="userInfo.portrait" alt srcset v-if="userInfo" />
        <div class="funList">
          <p @click="logout">退出</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Carousel } from "element-ui";
import { getCarouselList, getIndexList } from "@/service/api";

export default {
  components: { Carousel },
  props: ["navs", "ptCode"],
  created() {
    this.userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  },
  mounted() {},

  data() {
    return {
      imgList: [],
      searchStr: '',
      userInfo: {}
    };
  },
  methods: {
    onSearch(){
      this.$emit('onSearch',this.searchStr)
    },
    toCenter() {
      this.$router.push("/user");
    },
    toIndex() {
      this.$router.push("/");
    },
    logout(e) {
      console.log('=====');
      e.stopPropagation()
      sessionStorage.removeItem("isLogin", false);
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("userInfo");
      this.$router.push({
        path: "/login",
        query: {
          type: "login"
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.avadar {
  flex: 1;
  text-align: right;
  cursor: pointer;
  position: relative;
  &:hover {
    .funList {
      display: block;
    }
  }
  .funList {
    display: none;
    position: absolute;
    background-color: #333;
    color: #ffffff;
    width: 80px;
    text-align: center;
    padding: 5px 0px;
    right: -10px;
    z-index: 999999;
  }
  img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
}
.search {
  border-radius: 5px;
  background-color: #ededee;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 200px;
  input {
    background-color: #ededee;
    border: none;
    outline: none;
  }
  img {
    height: 20px;
    cursor: pointer;
  }
}
.header {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  .logo {
    width: 270px;
    padding: 10px 0;
    cursor: pointer;
  }
}
.navbar {
  display: flex;
  align-items: center;
  margin: 0 25px;
  height: 70px;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  font-weight: bold;
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
</style>
