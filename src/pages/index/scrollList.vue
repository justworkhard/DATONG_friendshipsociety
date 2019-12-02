<template>
  <div class="list">
    <XHeader :title="title"></XHeader>
    <!-- <p class="drop-down" v-if="dropDown">松手刷新数据...</p> -->
      <div class="bscroll" ref="bscroll">
        <div class="bscroll-container">
          <ul>
            <slot></slot>
          </ul>
        </div>
      </div>
  </div>
</template>
 
<script>
import BScroll from "better-scroll";
import XHeader from "@/components/XHeader.vue";
export default {
  components: { XHeader },
  props: ["title"],
  data() {
    return {
      dropDown: false
    };
  },
  mounted() {
    this.scrollFn();
  },
  methods: {
    scrollFn() {
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.bscroll, {
            click: true,
            scrollY: true,
            probeType: 3
          });
        } else {
          this.scroll.refresh();
        }
        this.scroll.on("scroll", pos => {
          // console.log(pos.y,this.dropDown)
          //如果下拉超过50px 就显示下拉刷新的文字
          if (pos.y > 50) {
            this.dropDown = true;
          } else {
            this.dropDown = false;
          }
        });
        //touchEnd（手指离开以后触发） 通过这个方法来监听下拉刷新
        this.scroll.on("touchEnd", pos => {
          // 下拉动作
          if (pos.y > 50) {
            this.dropDown = false;
            this.$emit("refresh");
          }
          //上拉加载 总高度>下拉的高度+10 触发加载更多
          if (this.scroll.maxScrollY > pos.y + 10) {
            //使用refresh 方法 来更新scroll  解决无法滚动的问题
            this.scroll.refresh();
            this.$emit("load");
          }
        });
      });
    }
  }
};
</script>
 
 
<style scoped>
.list {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.bscroll {
  flex: 1;
  overflow: hidden;
  padding: 0 15px;
}
.bscroll-container {
}
.drop-down {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 0.8rem;
  color: #ccc;
}
.content{
    padding: 0 15px;
}
</style>