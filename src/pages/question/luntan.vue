<template>
  <div class="contentBody">
    <div class="logo">
      <img src="@/assets/images/mipmap-hdpi/logo.png" alt />
    </div>
    <Search @onSearch="onSearch"></Search>
    <div
      class="questionItem"
      v-for="(item,index) in questionList"
      :key="index"
      @click="toDetail(item.id)"
    >
      <div class="qHeader">
        <div>
          <img :src="item.portrait" alt srcset />
          <p class="name">{{item.username}}</p>
        </div>
        <p class="time">{{item.time}}</p>
      </div>
      <div class="qContent" v-html="item.content"></div>
      <div class="qFun">
        <div class="good">
          <img src="@/assets/images/good.png" alt srcset v-show="!item.good" />
          <img src="@/assets/images/goodA.png" alt srcset v-show="item.good" />
          <span>{{item.upNum}}</span>
        </div>
        <div class="good">
          <img src="@/assets/images/judged.png" alt srcset />
          <span>{{item.commentNum}}</span>
        </div>
        <div class="good">
          <img src="@/assets/images/colle.png" alt srcset />
          <span>{{item.collect}}</span>
        </div>
      </div>
    </div>
    <div class="more" @click="more">{{total>pageNo*10?'加载更多':'无更多数据'}}</div>
    <div class="editor" @click="toCreate">
      <img src="@/assets/images/editor.png" alt srcset />
    </div>
  </div>
</template>
<script>
import XHeader from "@/components/XHeader.vue";
import Search from "@/components/Search.vue";
import {
  getQuestionList,
  getQuestionListPage,
  sendUpNum,
  sendInvitSearch
} from "@/service/api.js";

export default {
  components: {
    XHeader,
    Search
  },
  data() {
    return {
      questionList: [],
      total: 0,
      pageNo: 1,
      keyword: '',
      qCode: '',
    };
  },
  created(){
    this.qCode = sessionStorage.getItem('qCode')
  },
  methods: {
    onSearch(keyword,more) {
      this.keyword = keyword
      sendInvitSearch({
        colid: this.qCode,
        pageNo: this.pageNo,
        pageSize: 10,
        title: this.keyword
      }).then(res => {
        let temp =  res.data.data
        temp.forEach(element => {
          element.good = false;
        });
        
        if(temp.length <= 0) return
        more?this.questionList = this.questionList.concat(temp):this.questionList = temp
        // this.questionList = this.questionList.concat(temp);
        this.total = res.data.count
      });
    },
    toCreate() {
      this.$router.push("/question/creat");
    },
    toDetail(id) {
      this.$router.push({
        path: "/question/detail",
        query: {
          id: id
        }
      });
    },
    addGood(id, good, index) {
      event.stopPropagation();
      this.questionList[index].good = !good;
      this.questionList[index].good = !goodma;
      sendUpNum({
        status: good ? 0 : 1,
        id: id
      }).then(res => {});
    },
    more() {
      if(this.pageNo*10 >= this.total){
        return
      }
      this.pageNo++
      this.onSearch(this.keyword,true)
    }
  },
  mounted() {
  //   getQuestionListPage({
  //     colid: 1,
  //     pageNo: 1,
  //     pageSize: 10
  //   }).then(res => {
  //     res.data.data.forEach(element => {
  //       element.good = false;
  //     });
  //     this.questionList = res.data.data;
  //   });
  // }
  this.onSearch('')
  }
};
</script>
<style lang="less" scoped>
.more {
  color: #999;
  font-size: 14px;
  text-align: center;
  margin: 10px 0px;
}
.contentBody {
  position: relative;
}
.logo {
  padding: 7px 15px;
  height: 48px;
  box-sizing: border-box;
  img {
    width: 100%;
    height: 100%;
  }
}
.questionItem {
  padding: 10px;
  margin-bottom: 150xp;
  .qHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    img {
      border-radius: 50%;
      overflow: hidden;
      height: 35px;
      width: 35px;
      margin-right: 20px;
    }
    div {
      display: flex;
      align-items: center;
    }
    .name {
      font-weight: 600px;
      font-size: 15px;
    }
    .time {
      font-size: 12px;
      color: #999;
    }
  }
  .qContent {
    line-height: 25px;
    font-size: 14px;
    color: rgb(86, 86, 86);
    max-height: 125px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .qFun {
    display: flex;
    align-items: center;
    color: #999;
    margin-top: 10px;
    .good {
      margin-right: 60px;
      display: flex;
      align-items: center;
    }
    img {
      height: 22px;
      width: 22px;
      margin-right: 5px;
    }
  }
}
.editor {
  background-color: rgb(214, 46, 46);
  height: 50px;
  width: 50px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 80px;
  right: 20px;
  img {
    height: 30px;
    width: 30px;
  }
}
</style>