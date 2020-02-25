<template>
  <div>
    <div class="label">
      <p
        class="title"
        v-bind:class="{active:activeIndex == index,active_one:TabsList.length<=1}"
        v-for="(item,index) in TabsList"
        :key="index"
        v-on:click="changeTab(index)"
      >{{item.title}}</p>
      <div class="more_top" v-if="Type === 'top'">
        <a :href="'#'+TabsList[activeIndex].url" v-if="TabsList[activeIndex]">更多>></a>
      </div>
    </div>
    <div class="content">
      <div
        :class="{show:activeIndex === index}"
        class="news_list"
        v-for="(item,index) in newsList"
        :key="index"
      >
        <div
          v-for="(item2,index) in item"
          :key="index"
          class="news_item"
          @click="toDetail(item2.id)"
        >
          <span class="Ntitle">{{item2.title}}</span>
          <span class="date">{{item2.createTime}}</span>
        </div>
      </div>
      <div class="more" v-if="Type !== 'top'">
        <a :href="'#'+TabsList[activeIndex].url" v-if="TabsList[activeIndex]">更多>></a>
      </div>
    </div>
  </div>
</template>
<script>
import { Tabs } from "element-ui";

export default {
  name: "HelloWorld",
  props: {
    Type: {
      type: String,
      default: function() {
        return "";
      }
    },
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
    newsList: {
      type: Array,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function() {
        return [];
      }
    }
  },

  data() {
    return {
      activeIndex: 0
    };
  },

  methods: {
    changeTab(index) {
      this.activeIndex = index;
      this.$emit("onChangeTab", index);
    },
    toList(url) {
      this.$router.push(url);
    },
    toDetail(id) {
      // console.log(this.TabsList);
      // return
      this.$router.push(
        this.TabsList[this.activeIndex].url + "&contentId=" + id
      );
    }
  },
  created() {}
};
</script>
<style lang="less" scoped>
.more_top {
  position: absolute;
  right: 10px;
  a {
    color: #646464;
  }
}
.label {
  display: flex;
  align-items: center;
  position: relative;
  min-width: 510px;
  // padding: 0 15px;
  // position: relative;
  // overflow: scroll;
}
.content {
  height: 190px;
  border: 1px solid #ddd;
  position: relative;
  padding-bottom: 30px;
  overflow: hidden;
  .more {
    position: absolute;
    font-size: 14px;
    bottom: 0px;
    text-align: right;
    left: 0px;
    width: 100%;
    padding-right: 20px;
    box-sizing: border-box;
    line-height: 30px;
    background-color: #ffffff;
    a {
      color: #333;
      &:hover {
        color: #337ab7;
      }
    }
  }
}
.title {
  font-size: 16px;
  margin-right: 2px;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  font-size: 14px;
  padding: 10px 15px;
  box-sizing: border-box;
  border: 1px solid transparent;
  border-bottom: none;
  // border-bottom: 1px solid #ddd;
  border-radius: 4px 4px 0 0;
  background-color: #ffffff;
  z-index: 10;
}
.active {
  position: relative;
  border: 1px solid #ddd;
  border-bottom: none;
  transform: translateY(1px);
  &:after {
    position: absolute;
    content: "";
    height: 1px;
    width: 100%;
    background-color: transparent;
    bottom: -1px;
    left: 0;
  }
}
.active_one {
  &::after {
    display: none;
  }
}
.news_list {
  padding: 15px 30px;
  color: rgb(51, 51, 51);
  font-size: 14px;
  display: none;
  .news_item {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .Ntitle {
      line-height: 28px;
      max-width: 350px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      display: inline-block
    }
    .date {
      float: right;
    }
  }
}
.show {
  display: block;
}
</style>
