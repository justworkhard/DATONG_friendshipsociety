<template>
  <div class="tabs">
    <div class="label"  v-if="TabsList.length>0">
      <p
        class="title"
        v-bind:class="{active:activeIndex == index,active_one:TabsList.length<=1}"
        v-for="(item,index) in TabsList"
        :key="index"
        v-on:click="changeTab(index)"
      >{{item.title}} <span style='color:#545454'>{{item.tip}}</span></p>
      <a @click="toList(href[activeIndex])">
        <img
          v-if="href[activeIndex]"
          class="more"
          src="@/assets/images/mipmap-hdpi/icon_more.png"
          alt
          srcset
        >
      </a>
    </div>
    <slot :slotdata="activeIndex"></slot>
  </div>
</template>
<script>
import { Tabs } from "element-ui";

export default {
  name: "HelloWorld",
  watch: {
    defaultIndex(curV, oldV) {
      this.changeTab(curV);
    }
  },
  props: {
    type: '',
    TabsList: {
      type: Array,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function() {
        return [];
      }
    },
    href: {
      type: Array,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function() {
        return [];
      }
    },
    defaultIndex: {
      type: Number,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function() {
        return 0;
      }
    }
  },
  data() {
    return {
      activeIndex: 0
    };
  },
  created() {
    console.log("this.defaultIndex", this.defaultIndex);

    this.changeTab(this.defaultIndex);
  },
  methods: {
    changeTab(index) {
      this.activeIndex = index;
      console.log('=-=-=-=');
      this.$emit("onChangeTab", index);
    },
    toList(url) {
      this.$router.push(url);
    }
  }
};
</script>
<style lang="less" scoped>
.label {
  display: flex;
  align-items: center;
  padding: 0 15px;
  height: 48px;
  border-bottom: 1px solid #ededee;
  position: relative;
  overflow: scroll;
  .more {
    height: 11px;
    width: 10px;
    position: absolute;
    right: 15px;
    cursor: pointer;
  }
}
.title {
  font-size: 16px;
  margin-right: 16px;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
}
.active {
  color: #b61413;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 26px;
    left: 50%;
    bottom: -5px;
    background-color: #b61413;
    transform: translateX(-50%);
    border-radius: 1px;
    overflow: hidden;
  }
}
.active_one {
  &::after {
    display: none;
  }
}
</style>
