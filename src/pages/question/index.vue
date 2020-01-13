<template>
  <div class="question">
    <div class="content">
      <router-view></router-view>
    </div>
    <footer class="footer">
      <div @click="setActiveIndex(0)"><img src="@/assets/images/zhuye.png" alt="" srcset=""> 首页</div>
      <div @click="setActiveIndex(1)"><img :src="activeIndex ==1 ?'/src/assets/images/luntan1.png':'/src/assets/images/luntan.png'" alt="" srcset=""> 论坛</div>
      <div @click="setActiveIndex(2)"><img :src="activeIndex ==2 ?'/src/assets/images/wode.png':'/src/assets/images/wode1.png'" alt="" srcset=""> 我的</div>
    </footer>
  </div>
</template>
<script>
import XHeader from "@/components/XHeader.vue";

export default {
  components: {
    XHeader
  },
  data(){
    return{
      activeIndex : 1
    }
  },
  watch:{
    activeIndex:function(newV,oldV){
      if(newV === 0){
        this.$router.push('/')
      }else if(newV === 1){
        this.$router.push('/question')
      }else{
        this.$router.push('/question/wode')
      }
    }
  },
  methods:{
    setActiveIndex(index){
      this.activeIndex = index

    }
  },
  created(){
    console.log(this.$route.path);
    switch(this.$route.path){
      case '/question':
        this.activeIndex = 1
        break;
      case '/question/wode':
         this.activeIndex = 2   
    }
  }
};
</script>
<style lang="less" scoped>
.question {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content{
  flex: 1;
  overflow: scroll
}
.footer {
  border-top: 1px solid #999;
  display: flex;
  height: 50px;
  justify-content: space-around;
  color: #333;
  div {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
      height: 20px;
      width: 20px;
    }
  }
}
</style>