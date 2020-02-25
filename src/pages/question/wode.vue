<template>
  <div class="content">
    <div class="noticy">
      <img  @click="toFatieList('noticy')" v-show="noticy.length == 0" src="@/assets/images/noticy.png" alt="" srcset="">
      <img  @click="toFatieList('noticy')" v-show="noticy.length > 0" src="@/assets/images/noticyA.png" alt="" srcset="">
    </div>
    <div class="userInfo">
      <div class="info">
        <img class="avadar" :src="userInfo.portrait" alt srcset />
        <p>{{userInfo.username}}</p>
      </div>
      <div class="editor" @click="toEditor">编辑</div>
    </div>
    <div class="myList">
      <div class="listItem" @click="toFatieList('fatie')">
        <img src="@/assets/images/fatieList.png" alt srcset />
        <p>发帖</p>
      </div>
      <div class="listItem" @click="toFatieList('huitie')">
        <img src="@/assets/images/huitieList.png" alt srcset />
        <p>回帖</p>
      </div>
      <div class="listItem" @click="toFatieList('colle')">
        <img src="@/assets/images/shou.png" alt srcset />
        <p>收藏</p>
      </div>
    </div>
    <XButton style="margin-top:20px" type="warn" @click.native="logout">退出</XButton>
  </div>
</template>
<script>
import XHeader from "@/components/XHeader.vue";
import { upLoad, portraitUpload, updateUserInfo ,notReadRep} from "@/service/api.js";
import { Confirm, Toast, XButton } from "vux";
export default {
  components: {
    XHeader,
    Confirm,
    Toast,
    XButton
  },
  data() {
    return {
      userInfo: {},
      noticy: []
    };
  },
  created() {
    this.userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    notReadRep({
      userId: this.userInfo.userId
    }).then(res=>{
        this.noticy = res.data.data
    })
  },
  methods: {
    logout() {
      sessionStorage.removeItem("isLogin", false);
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("userInfo");
      this.$router.push("/login");
    },
    toFatieList(type) {
      if(type === 'huitie'){
        this.$router.push({
        path: "/question/huitie",
        query: {
          type: type
        }
      });
        return
      }
      if(type === 'noticy'){
        this.$router.push({
        path: "/question/noticy",
        query: {
          type: type
        }
      });
        return
      }
      this.$router.push({
        path: "/question/list",
        query: {
          type: type
        }
      });
    },
    toEditor() {
      this.$router.push("/question/editor");
    }
  }
};
</script>
<style lang="less" scoped>
.noticy{
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 5px 0px;
  img{
    height: 30px;
    width: 30px;
  }
}
.myList {
  display: flex;
  flex-wrap: wrap;
  background-color: rgb(242, 242, 242);
  margin-top: 20px;
  border-radius: 10px;
  .listItem {
    width: 50%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img {
      height: 40px;
      width: 40px;
    }
  }
}
.content {
  padding: 10px;
}
.userInfo {
  background-color: rgb(242, 242, 242);
  border-radius: 10px;
  height: 140px;
  width: 100%;
  .info {
    display: flex;
    align-items: center;
    padding: 20px 10px;
    img {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
  .editor {
    border: 1px solid #333;
    border-radius: 10px;
    width: 60px;
    text-align: center;
    float: right;
    margin-right: 20px;
    background-color: #ffffff;
  }
}
</style>